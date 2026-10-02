import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(projectRoot, "docs");
const config = JSON.parse(await fs.readFile(path.join(docsDir, "site-config.json"), "utf8"));

if (!config.siteUrl || !/^https:\/\//i.test(config.siteUrl)) {
  throw new Error("siteUrl debe ser una URL pública HTTPS.");
}

const baseUrl = new URL(config.siteUrl);
if (!baseUrl.pathname.endsWith("/")) baseUrl.pathname += "/";
const absoluteUrl = (relativePath = "") => new URL(relativePath, baseUrl).href;
const xmlEscape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

const siteMapPaths = ["", "aviso-legal.html", "politica-privacidad.html", "politica-cookies.html"];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${siteMapPaths.map((page) => `  <url><loc>${xmlEscape(absoluteUrl(page))}</loc></url>`).join("\n")}\n</urlset>\n`;
await fs.writeFile(path.join(docsDir, "sitemap.xml"), sitemapXml, "utf8");
await fs.writeFile(path.join(docsDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl("sitemap.xml")}\n`, "utf8");

const indexPath = path.join(docsDir, "index.html");
let html = await fs.readFile(indexPath, "utf8");
const replaceMeta = (selector, value) => {
  const expression = new RegExp(`(<meta ${selector} content=")[^"]*(">)`);
  if (!expression.test(html)) throw new Error(`No se encontró la meta ${selector}.`);
  html = html.replace(expression, `$1${value}$2`);
};

replaceMeta('property="og:url"', absoluteUrl());
replaceMeta('property="og:image"', absoluteUrl("wp-content/themes/elesar/assets/generated/social-card.png"));
replaceMeta('name="twitter:image"', absoluteUrl("wp-content/themes/elesar/assets/generated/social-card.png"));

const jsonLdExpression = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
const schemaMatch = html.match(jsonLdExpression);
if (!schemaMatch) throw new Error("No se encontró el JSON-LD de la página principal.");
const schema = JSON.parse(schemaMatch[2]);
schema.url = absoluteUrl();
schema.image = absoluteUrl("wp-content/themes/elesar/assets/generated/social-card.png");
html = html.replace(jsonLdExpression, `$1${JSON.stringify(schema)}$3`);
await fs.writeFile(indexPath, html, "utf8");

console.log(`SEO generado para ${baseUrl.href}`);
