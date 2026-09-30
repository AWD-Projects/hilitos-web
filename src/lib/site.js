// Datos reales del negocio. Una sola fuente para copy, SEO, contacto y cotizador.
// Todo lo que aparece aquí fue proporcionado por el cliente o ya estaba publicado en su sitio.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hilitoslili.com"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Hilitos Lili",
  owner: "Lilia Ortega",
  phoneDisplay: "55 4107 2124",
  phoneE164: "+525541072124",
  whatsappNumber: "525541072124",
  email: "hilitoslili@gmail.com",
  street: "Cerro de la Estrella 289, Local B",
  colonia: "Campestre Churubusco",
  area: "Coyoacán, CDMX",
  // Pin de Google Maps que el cliente ya tenía incrustado en su sitio.
  geo: { latitude: 19.3444428, longitude: -99.1359226 },
  mapsDirections:
    "https://www.google.com/maps/search/?api=1&query=Hilitos+Lili+Cerro+de+la+Estrella+289+Campestre+Churubusco",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.570319340257!2d-99.13592262397351!3d19.3444428434887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffce81510f1d%3A0x5e82a634ad9a7a5e!2sHilitos%20Lili!5e0!3m2!1ses!2smx!4v1686955972403!5m2!1ses!2smx",
};

// Lunes a sábado 11:30 a 19:00. Domingo cerrado.
export const HOURS = {
  open: { h: 11, m: 30 },
  close: { h: 19, m: 0 },
  closedDays: [0], // 0 = domingo
  label: "Lunes a sábado, de 11:30 a 19:00",
  sunday: "Domingo cerrado",
};

export const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

// Cifras que ya estaban publicadas en el sitio del cliente. Confirmar con Lilia antes de difundirlas.
export const FACTS = {
  garments: "+1,200",
  years: "10+",
};

// Las vistas previas (dev / deploy previews) no deben competir con producción en Google.
export const INDEXABLE = (() => {
  if (process.env.NEXT_PUBLIC_NOINDEX === "true") return false;
  if (process.env.CONTEXT && process.env.CONTEXT !== "production") return false; // Netlify
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return false; // Vercel
  return true;
})();

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-98H8KRKT85";
