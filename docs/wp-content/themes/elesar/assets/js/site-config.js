(() => {
  const CONFIG_URL = new URL("./site-config.json", document.baseURI);
  const CONSENT_KEY = "elesar_cookie_choice_v1";
  const videoId = "pAYWtP9pWpM";
  const baseUrl = new URL("./", document.location.href).href;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
  };

  const consent = () => {
    try {
      const value = localStorage.getItem(CONSENT_KEY);
      return value === "essential" || value === "media" ? value : null;
    } catch { return null; }
  };

  const updateVideo = (choice) => {
    const placeholder = document.querySelector("[data-youtube-video]");
    if (!placeholder) return;
    if (choice === "media") {
      if (placeholder.querySelector("iframe")) return;
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
    placeholder.classList.remove("youtube-consent-loaded");
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
    const status = document.querySelector("[data-cookie-status]");
    if (status) status.textContent = choice === "media" ? "Multimedia: aceptada" : choice === "essential" ? "Solo almacenamiento necesario" : "Sin elección";
  };

  const saveConsent = (choice) => {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* La preferencia sigue vigente durante esta visita. */ }
    updateConsentUI(choice);
    updateVideo(choice);
    const dialog = document.querySelector("[data-cookie-dialog]");
    if (dialog?.open) dialog.close("saved");
  };

  const createCookieDialog = () => {
    if (document.querySelector("[data-cookie-dialog]")) return;
    const dialog = document.createElement("dialog");
    dialog.className = "cookie-dialog";
    dialog.dataset.cookieDialog = "";
    dialog.setAttribute("aria-labelledby", "cookie-dialog-title");
    dialog.setAttribute("aria-describedby", "cookie-dialog-description");
    dialog.innerHTML = `
      <div class="cookie-dialog-inner">
        <div class="cookie-dialog-mark" aria-hidden="true">E<span>·</span></div>
        <p class="cookie-dialog-eyebrow">PRIVACIDAD · PREFERENCIAS</p>
        <section data-cookie-panel="intro">
          <h2 id="cookie-dialog-title">Tú decides qué se carga.</h2>
          <p id="cookie-dialog-description" class="cookie-dialog-copy">La web solo guarda tu elección. El reproductor de YouTube permanece bloqueado hasta que aceptes el contenido multimedia.</p>
          <div class="cookie-categories-summary">
            <div><span class="cookie-category-icon" aria-hidden="true">✓</span><p><strong>Necesarias</strong><small>Recuerdan tus preferencias. Siempre activas.</small></p><span class="cookie-always-on">Siempre activas</span></div>
            <div><span class="cookie-category-icon" aria-hidden="true">♫</span><p><strong>Multimedia</strong><small>Carga el vídeo integrado de YouTube.</small></p><span class="cookie-optional">Opcionales</span></div>
          </div>
          <div class="cookie-dialog-actions">
            <button class="cookie-button cookie-button-primary" type="button" data-cookie-accept>Aceptar todas</button>
            <button class="cookie-button" type="button" data-cookie-reject>Rechazar opcionales</button>
            <button class="cookie-text-button" type="button" data-cookie-open-settings>Configurar preferencias</button>
          </div>
        </section>
        <section data-cookie-panel="settings" hidden>
          <h2 id="cookie-settings-title">Configurar preferencias</h2>
          <p id="cookie-settings-description" class="cookie-dialog-copy">Activa solo lo que quieras permitir. Puedes cambiar esta elección cuando quieras desde el pie de página.</p>
          <div class="cookie-settings-list">
            <div class="cookie-setting-row">
              <div><strong>Almacenamiento necesario</strong><p>Guarda tu elección en este navegador para no volver a preguntarte.</p></div>
              <label class="cookie-switch cookie-switch-locked"><input type="checkbox" checked disabled aria-label="Almacenamiento necesario, siempre activo"><span aria-hidden="true"></span><span class="screen-reader-text">Siempre activo</span></label>
            </div>
            <div class="cookie-setting-row">
              <div><strong>Contenido multimedia de YouTube</strong><p>Permite cargar el reproductor. YouTube puede recibir datos técnicos y guardar cookies propias.</p></div>
              <label class="cookie-switch"><input type="checkbox" data-cookie-media-toggle aria-label="Permitir contenido multimedia de YouTube"><span aria-hidden="true"></span></label>
            </div>
          </div>
          <div class="cookie-dialog-actions cookie-settings-actions">
            <button class="cookie-button cookie-button-primary" type="button" data-cookie-save-settings>Guardar preferencias</button>
            <button class="cookie-button" type="button" data-cookie-reject>Rechazar opcionales</button>
            <button class="cookie-text-button" type="button" data-cookie-back>Volver</button>
          </div>
        </section>
        <p class="cookie-dialog-links"><a href="./politica-cookies.html">Política de cookies</a><span aria-hidden="true">·</span><a href="./politica-privacidad.html">Privacidad</a></p>
      </div>`;
    document.body.append(dialog);

    const intro = dialog.querySelector('[data-cookie-panel="intro"]');
    const settings = dialog.querySelector('[data-cookie-panel="settings"]');
    const mediaToggle = dialog.querySelector("[data-cookie-media-toggle]");
    const settingsTitle = dialog.querySelector("[data-cookie-panel=settings] h2");
    let returnFocus = null;
    const open = (panel, trigger) => {
      returnFocus = trigger || document.activeElement;
      intro.hidden = panel !== "intro";
      settings.hidden = panel !== "settings";
      dialog.setAttribute("aria-labelledby", panel === "settings" ? settingsTitle.id : "cookie-dialog-title");
      dialog.setAttribute("aria-describedby", panel === "settings" ? "cookie-settings-description" : "cookie-dialog-description");
      mediaToggle.checked = consent() === "media";
      if (!dialog.open) dialog.showModal();
      const target = panel === "settings" ? mediaToggle : dialog.querySelector("[data-cookie-accept]");
      target?.focus();
    };

    dialog.querySelectorAll("[data-cookie-accept]").forEach((button) => button.addEventListener("click", () => saveConsent("media")));
    dialog.querySelectorAll("[data-cookie-reject]").forEach((button) => button.addEventListener("click", () => saveConsent("essential")));
    dialog.querySelector("[data-cookie-open-settings]").addEventListener("click", (event) => open("settings", event.currentTarget));
    dialog.querySelector("[data-cookie-back]").addEventListener("click", (event) => open("intro", event.currentTarget));
    dialog.querySelector("[data-cookie-save-settings]").addEventListener("click", () => saveConsent(mediaToggle.checked ? "media" : "essential"));
    dialog.addEventListener("close", () => {
      if (returnFocus instanceof HTMLElement && returnFocus.isConnected) returnFocus.focus();
    });
    dialog.addEventListener("cancel", () => {
      // Escape closes without granting optional consent. The media remains blocked.
    });
    document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
      button.addEventListener("click", () => open("settings", button));
    });
    if (!consent()) open("intro", null);
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
    updateConsentUI(consent());
    updateVideo(consent());
    createCookieDialog();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hydrate, { once: true });
  else hydrate();
})();
