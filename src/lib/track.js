// Envía eventos a GA4 si está cargado. No hace nada si no hay gtag.
export function track(event, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch (_) {
    /* la analítica nunca debe romper la interfaz */
  }
}
