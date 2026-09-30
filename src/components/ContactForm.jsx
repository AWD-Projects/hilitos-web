"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT_TOPICS, buildContactMessage, waLink } from "../lib/whatsapp";
import { track } from "../lib/track";

// Mensaje rápido: abre WhatsApp con el texto ya escrito. No guarda nada en ningún servidor.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("cotizar");
  const [message, setMessage] = useState("");

  const href = waLink(buildContactMessage({ name, topic, message }));

  return (
    <div className="stitched shadow-paper p-7 sm:p-9">
      <h3 className="h-sub">Cuéntanos tu caso</h3>
      <p className="mt-3 text-brand-muted">Escribe lo que necesitas y lo mandamos por WhatsApp, listo para responderte.</p>

      <div className="mt-7">
        <span id="tema-label" className="field-label">
          ¿Qué necesitas?
        </span>
        <div role="radiogroup" aria-labelledby="tema-label" className="flex flex-wrap gap-2.5">
          {CONTACT_TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={topic === t.id}
              className="chip"
              onClick={() => setTopic(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="contacto-nombre" className="field-label">
          Tu nombre
        </label>
        <input
          id="contacto-nombre"
          type="text"
          autoComplete="given-name"
          maxLength={60}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contacto-mensaje" className="field-label">
          Tu mensaje (opcional)
        </label>
        <textarea
          id="contacto-mensaje"
          rows={4}
          maxLength={600}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntanos de la prenda o de lo que quieres hacer"
          className="field resize-none"
        />
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("contact_whatsapp", { tema: topic })}
        className="btn btn-primary mt-7 w-full sm:w-auto"
      >
        <MessageCircle size={18} aria-hidden="true" /> Enviar por WhatsApp
      </a>
    </div>
  );
}
