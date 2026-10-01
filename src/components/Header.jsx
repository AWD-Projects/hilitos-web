"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useScroll, useTransform } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS, NAV } from "../lib/site";
import { waLink } from "../lib/whatsapp";
import { track } from "../lib/track";
import { useQuote } from "./QuoteProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const { count } = useQuote();

  // Barra de progreso: una costura que se va rellenando con el scroll.
  const { scrollYProgress } = useScroll();
  const clip = useTransform(scrollYProgress, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`);

  // Sección activa según lo que está a la mitad de la pantalla.
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-spy]"));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("data-spy"));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Menú móvil: Escape lo cierra y bloquea el scroll de fondo.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const ctaLabel = count > 0 ? `Mi nota de taller (${count})` : "Cotizar mi prenda";

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-white/95" style={{ height: "var(--header-h)" }}>
      <div className="container-base flex h-full items-center justify-between">
        <a href="#inicio" aria-label="Hilitos Lili, ir al inicio" className="flex shrink-0 items-center">
          <Image
            src="/brand/wordmark.png"
            alt="Hilitos Lili"
            width={720}
            height={524}
            priority
            sizes="80px"
            className="h-[52px] w-auto"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {NAV.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className="link-line py-1 text-[0.95rem] font-medium text-brand-heading"
            >
              {link.label}
            </a>
          ))}
          <a href="#cotizador" className="btn btn-primary !min-h-[2.75rem] !px-5">
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-12 w-12 items-center justify-center text-brand-heading md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className="seam absolute inset-x-0 bottom-0 h-[2px] opacity-25" aria-hidden="true" />
      <m.div className="seam absolute inset-x-0 bottom-0 h-[2px]" style={{ clipPath: clip }} aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-movil"
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white md:hidden"
            style={{ top: "var(--header-h)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Menú móvil" className="container-base flex min-h-full flex-col justify-between gap-10 py-10">
              <ul className="flex flex-col">
                {NAV.map((link) => (
                  <li key={link.id} className="border-b border-dashed border-brand-primary/40">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-[2rem] leading-none text-brand-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a href="#cotizador" onClick={() => setOpen(false)} className="btn btn-primary">
                  {ctaLabel}
                </a>
                <a
                  href={waLink("Hola, quiero hacer una consulta en Hilitos Lili.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { location: "menu_movil" })}
                  className="btn btn-ghost"
                >
                  <MessageCircle size={18} aria-hidden="true" /> Escribir por WhatsApp
                </a>
                <p className="pt-3 text-center text-[0.95rem] text-brand-muted">
                  {BUSINESS.street}, {BUSINESS.colonia}
                </p>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
