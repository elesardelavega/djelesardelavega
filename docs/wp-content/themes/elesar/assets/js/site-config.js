(() => {
  const CONFIG_URL = new URL("./site-config.json", document.baseURI);
  const CONSENT_KEY = "elesar_cookie_choice_v1";
  const videoId = "pAYWtP9pWpM";
  const baseUrl = new URL("./", document.location.href).href;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const consent = () => {
    try { return localStorage.getItem(CONSENT_KEY); } catch { return null; }
  };

  const saveConsent = (choice) => {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* Preferences remain usable for this visit. */ }
    updateConsentUI(choice);
    updateVideo(choice);
  };

  const updateVideo = (choice) => {
    const placeholder = document.querySelector("[data-youtube-video]");
    if (!placeholder) return;
    if (choice === "media") {
      const frame = document.createElement("iframe");
      frame.title = placeholder.dataset.title || "Sesión de Elesar de la Vega en YouTube";
      frame.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
      frame.loading = "lazy";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      placeholder.replaceChildren(frame);
      placeholder.classList.add("youtube-consent-loaded");
      return;
    }
    if (!placeholder.querySelector("button")) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "youtube-consent-button";
      button.textContent = "Aceptar cookies multimedia para reproducir";
      button.addEventListener("click", () => saveConsent("media"));
      placeholder.replaceChildren(button);
    }
  };

  const updateConsentUI = (choice) => {
    const banner = document.querySelector("[data-cookie-banner]");
    if (banner) banner.hidden = Boolean(choice);
    const status = document.querySelector("[data-cookie-status]");
    if (status) status.textContent = choice === "media" ? "Multimedia: aceptada" : choice === "essential" ? "Solo almacenamiento necesario" : "Sin elección";
  };

  const injectConsentBanner = () => {
    if (document.querySelector("[data-cookie-banner]")) return;
    const banner = document.createElement("aside");
    banner.className = "cookie-banner";
    banner.dataset.cookieBanner = "";
    banner.setAttribute("aria-label", "Preferencias de cookies");
    banner.hidden = Boolean(consent());
    banner.innerHTML = `<div class="cookie-banner-copy"><strong>Tu privacidad importa</strong><p>Usamos almacenamiento necesario para recordar tu elección. El vídeo de YouTube solo carga si aceptas las cookies multimedia. <a href="./politica-cookies.html">Más información</a></p></div><div class="cookie-banner-actions"><button type="button" data-cookie-reject>Rechazar</button><button type="button" data-cookie-accept>Aceptar multimedia</button></div>`;
    document.body.append(banner);
    banner.querySelector("[data-cookie-reject]").addEventListener("click", () => saveConsent("essential"));
    banner.querySelector("[data-cookie-accept]").addEventListener("click", () => saveConsent("media"));
  };

  const hydrate = async () => {
    try {
      const response = await fetch(CONFIG_URL, { cache: "no-store" });
      if (!response.ok) throw new Error("No se pudo cargar la configuración del sitio.");
      const config = await response.json();
      setText("[data-artist-name]", config.artistName);
      setText("[data-nif]", config.nif);
      setText("[data-email]", config.email);
      setText("[data-whatsapp-display]", config.whatsappDisplay);
      setText("[data-site-url]", baseUrl);
      setText("[data-professional-address]", config.professionalAddress || "Domicilio profesional pendiente de completar.");
      document.querySelectorAll("a[data-email-link]").forEach((link) => { link.href = `mailto:${config.email}`; });
      document.querySelectorAll("a[data-whatsapp-link]").forEach((link) => { link.href = `https://wa.me/${config.whatsappNumber}`; });
    } catch (error) {
      console.error(error);
    }
    injectConsentBanner();
    updateConsentUI(consent());
    updateVideo(consent());
      document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
        button.addEventListener("click", () => {
          try { localStorage.removeItem(CONSENT_KEY); } catch { /* Continue by showing choices. */ }
          updateConsentUI(null);
          updateVideo(null);
          const banner = document.querySelector("[data-cookie-banner]");
        if (banner) banner.focus?.();
      });
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hydrate, { once: true });
  else hydrate();
})();
