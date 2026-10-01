import { BUSINESS } from "./site";

export function waLink(text) {
  const base = `https://wa.me/${BUSINESS.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

// items: [{ garment: "Pantalones", services: ["Dobladillo"], qty: 2, note: "" }]
export function buildQuoteMessage({ name, items }) {
  const who = name && name.trim() ? `Hola, soy ${name.trim()}.` : "Hola.";
  const lines = items.map((item) => {
    const qty = item.qty > 1 ? ` (${item.qty} prendas)` : "";
    const services = item.services.length
      ? `: ${item.services.map(lowerFirst).join(", ")}`
      : "";
    const note = item.note && item.note.trim() ? `. Detalle: ${item.note.trim()}` : "";
    return `• *${item.garment}*${qty}${services}${note}`;
  });
  return [
    `${who} Quiero cotizar esto en Hilitos Lili:`,
    "",
    ...lines,
    "",
    "Les mando fotos de cada prenda por aquí. ¿Me confirman precio y tiempo de entrega? Gracias.",
  ].join("\n");
}

const TOPICS = {
  cotizar: "Quiero cotizar una compostura o un ajuste.",
  confeccion: "Quiero agendar una cita para una prenda a la medida.",
  otra: "Tengo una pregunta.",
};

export function buildContactMessage({ name, topic, message }) {
  const who = name && name.trim() ? `Hola, soy ${name.trim()}.` : "Hola.";
  const lines = [who, TOPICS[topic] || TOPICS.otra];
  if (message && message.trim()) lines.push("", message.trim());
  return lines.join("\n");
}

export const CONTACT_TOPICS = [
  { id: "cotizar", label: "Cotizar un arreglo" },
  { id: "confeccion", label: "Cita para confección" },
  { id: "otra", label: "Otra pregunta" },
];
