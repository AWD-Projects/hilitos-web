"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useQuote } from "./QuoteProvider";
import { track } from "../lib/track";
import { waLink } from "../lib/whatsapp";

// Barra fija en móvil. Con una nota armada, un solo toque la manda por WhatsApp.
export default function StickyCta() {
  const { count, href } = useQuote();
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const visible = pastHero && !atContact;

  // Sin lecturas de layout en cada scroll: scrollY es barato y la sección de contacto se observa aparte.
  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contacto");
    if (!contact || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), {
      rootMargin: "0px 0px -40% 0px",
    });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-primary/20 bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-20px_rgba(36,24,41,0.45)] transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          onClick={() => track("quote_whatsapp", { location: "barra_movil", piezas: count })}
          className="btn btn-primary w-full"
        >
          <MessageCircle size={18} aria-hidden="true" /> Enviar mi nota por WhatsApp ({count})
        </a>
      ) : (
        <div className="flex gap-3">
          <a href="#cotizador" tabIndex={visible ? 0 : -1} className="btn btn-primary flex-1">
            Cotizar mi prenda
          </a>
          <a
            href={waLink("Hola, quiero hacer una consulta en Hilitos Lili.")}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? 0 : -1}
            onClick={() => track("whatsapp_click", { location: "barra_movil" })}
            aria-label="Escribir por WhatsApp"
            className="btn btn-ghost !px-4"
          >
            <MessageCircle size={20} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
