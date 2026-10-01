"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Check, Minus, Phone, Plus, X, MessageCircle } from "lucide-react";
import { GARMENTS } from "../data/garments";
import { BUSINESS } from "../lib/site";
import { track } from "../lib/track";
import GarmentIcon from "./GarmentIcon";
import { useQuote } from "./QuoteProvider";

// Elemento firma: la "nota de taller". Se arma por prenda y se convierte en un mensaje de WhatsApp.
export default function Cotizador() {
  const { items, count, name, setName, add, remove, href, full } = useQuote();
  const reduce = useReducedMotion();
  const summaryRef = useRef(null);

  const [garmentId, setGarmentId] = useState(null);
  const [services, setServices] = useState([]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [notice, setNotice] = useState("");

  const garment = GARMENTS.find((g) => g.id === garmentId) || null;
  const canAdd = !!garment && (services.length > 0 || note.trim().length > 0) && !full;

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const pickGarment = (id) => {
    setGarmentId(id);
    setServices([]);
    setQty(1);
    setNote("");
  };

  const toggleService = (option) =>
    setServices((prev) => (prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]));

  const addItem = () => {
    if (!canAdd) return;
    add({ garmentId: garment.id, garment: garment.label, services, qty, note: note.trim() });
    track("quote_add", { prenda: garment.id, servicios: services.length });
    setNotice(`Agregaste ${garment.label.toLowerCase()} a tu nota.`);
    setGarmentId(null);
    setServices([]);
    setQty(1);
    setNote("");
    // En móvil la nota queda debajo: llevar la vista hasta ella cuando el panel ya terminó de contraerse.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setTimeout(() => {
        summaryRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }, reduce ? 50 : 450);
    }
  };

  const countFor = (id) => items.filter((i) => i.garmentId === id).reduce((n, i) => n + i.qty, 0);

  return (
    <div id="cotizador" className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:gap-10">
      {/* ----- Elegir prenda y servicios ----- */}
      <div className="lg:col-span-7">
        <div className="mat stitched rounded-[1.5rem] p-6 sm:p-9">
          <h3 id="elige-prenda" className="h-sub">
            Elige la prenda
          </h3>
          <div role="group" aria-labelledby="elige-prenda" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {GARMENTS.map((g) => (
              <button
                key={g.id}
                type="button"
                className="tile"
                aria-pressed={garmentId === g.id}
                onClick={() => pickGarment(g.id)}
              >
                {countFor(g.id) > 0 && (
                  <span className="count" aria-label={`${countFor(g.id)} en tu nota`}>
                    {countFor(g.id)}
                  </span>
                )}
                <GarmentIcon id={g.id} />
                <span>{g.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {garment ? (
              <m.div
                key={garment.id}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
                className="mt-9"
              >
                <h3 id="elige-servicio" className="h-sub">
                  ¿Qué necesitan tus {garment.label.toLowerCase()}?
                </h3>
                <div role="group" aria-labelledby="elige-servicio" className="mt-5 flex flex-wrap gap-2.5">
                  {garment.options.map((option) => {
                    const on = services.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        className="chip"
                        aria-pressed={on}
                        onClick={() => toggleService(option)}
                      >
                        {on && <Check size={16} aria-hidden="true" />}
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div>
                    <span id="cantidad-label" className="field-label">
                      Piezas
                    </span>
                    <div role="group" aria-labelledby="cantidad-label" className="inline-flex items-center rounded-full bg-white shadow-[inset_0_0_0_1.5px_rgb(143_104_162/0.55)]">
                      <button
                        type="button"
                        aria-label="Una pieza menos"
                        disabled={qty <= 1}
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="flex h-12 w-12 items-center justify-center rounded-full text-brand-deep disabled:opacity-40"
                      >
                        <Minus size={18} aria-hidden="true" />
                      </button>
                      <output aria-live="polite" className="w-8 text-center font-display text-xl text-brand-heading">
                        {qty}
                      </output>
                      <button
                        type="button"
                        aria-label="Una pieza más"
                        disabled={qty >= 20}
                        onClick={() => setQty((q) => Math.min(20, q + 1))}
                        className="flex h-12 w-12 items-center justify-center rounded-full text-brand-deep disabled:opacity-40"
                      >
                        <Plus size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="detalle" className="field-label">
                      Detalles (opcional)
                    </label>
                    <textarea
                      id="detalle"
                      rows={2}
                      maxLength={300}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Ej. Me queda grande de la cintura"
                      className="field resize-none"
                    />
                  </div>
                </div>

                <button type="button" onClick={addItem} disabled={!canAdd} className="btn btn-primary mt-8 w-full sm:w-auto">
                  <Plus size={18} aria-hidden="true" /> Agregar a mi nota
                </button>
                {!canAdd && !full && (
                  <p className="mt-3 text-[0.9rem] text-brand-muted">Marca al menos un servicio o escribe un detalle.</p>
                )}
                {full && <p className="mt-3 text-[0.9rem] text-brand-rose">Tu nota ya tiene 20 prendas. Envíala y arma otra.</p>}
              </m.div>
            ) : (
              <m.p
                key="vacio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
                className="mt-8 text-brand-muted"
              >
                {items.length > 0
                  ? "¿Otra prenda? Elígela arriba para sumarla a tu nota."
                  : "Al elegir una prenda aparecen los arreglos que hacemos para ella."}
              </m.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ----- Nota de taller ----- */}
      <div className="lg:col-span-5">
        <div ref={summaryRef} className="scroll-mt-24 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
          <div className="stitched shadow-paper p-7 sm:p-9">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-[1.75rem] leading-none">
                Tu nota de <span className="it text-brand-rose">taller</span>
              </h3>
              {count > 0 && (
                <span className="text-[0.9rem] text-brand-muted" aria-hidden="true">
                  {count} {count === 1 ? "pieza" : "piezas"}
                </span>
              )}
            </div>

            <p role="status" aria-live="polite" className="mt-3 min-h-[1.5rem] text-[0.95rem] font-medium text-brand-deep">
              {notice}
            </p>

            {items.length === 0 ? (
              <p className="mt-2 text-brand-muted">
                Aquí se arma lo que quieres cotizar. Cada prenda que agregues aparece en esta lista.
              </p>
            ) : (
              <ul className="mt-2 divide-y divide-dashed divide-brand-primary/40 lg:max-h-[calc(100svh-31rem)] lg:min-h-[7rem] lg:overflow-y-auto lg:overscroll-contain lg:px-1">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <m.li
                      key={item.id}
                                      initial={{ opacity: 0, height: reduce ? "auto" : 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: reduce ? "auto" : 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-3 py-4">
                        <span className="mt-0.5 shrink-0 text-brand-primary">
                          <GarmentIcon id={item.garmentId} size={30} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-[1.15rem] leading-tight text-brand-heading">
                            {item.garment}
                            {item.qty > 1 && <span className="text-brand-muted"> × {item.qty}</span>}
                          </p>
                          {item.services.length > 0 && (
                            <p className="mt-0.5 text-[0.95rem] leading-snug text-brand-text">{item.services.join(", ")}</p>
                          )}
                          {item.note && <p className="mt-1 text-[0.9rem] italic leading-snug text-brand-muted">“{item.note}”</p>}
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(item.id)}
                          aria-label={`Quitar ${item.garment.toLowerCase()} de la nota`}
                          className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brand-muted hover:bg-brand-tint hover:text-brand-rose"
                        >
                          <X size={18} aria-hidden="true" />
                        </button>
                      </div>
                    </m.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            <div className="mt-6">
              <label htmlFor="nombre-nota" className="field-label">
                Tu nombre (opcional)
              </label>
              <input
                id="nombre-nota"
                type="text"
                autoComplete="given-name"
                maxLength={60}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Para saludarte por tu nombre"
                className="field"
              />
            </div>

            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("quote_whatsapp", { location: "cotizador", piezas: count })}
                className="btn btn-primary mt-6 w-full"
              >
                <MessageCircle size={18} aria-hidden="true" /> Pedir mi cotización por WhatsApp
              </a>
            ) : (
              <button type="button" disabled className="btn btn-primary mt-6 w-full">
                <MessageCircle size={18} aria-hidden="true" /> Pedir mi cotización por WhatsApp
              </button>
            )}
            <p className="mt-4 text-[0.9rem] leading-snug text-brand-muted">
              Se abre WhatsApp con tu nota ya escrita. Ahí mismo puedes mandar una foto de cada prenda.
            </p>
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => track("call_click", { location: "cotizador" })}
              className="mt-4 inline-flex min-h-[2.75rem] items-center gap-2 text-[0.95rem] font-semibold text-brand-deep"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="link-line">Prefiero llamar al {BUSINESS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
