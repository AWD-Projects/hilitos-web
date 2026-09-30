"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { buildQuoteMessage, waLink } from "../lib/whatsapp";

const QuoteContext = createContext(null);
const STORAGE_KEY = "hilitos.nota.v1";
const MAX_ITEMS = 20;

const clean = (value, max) => (typeof value === "string" ? value.slice(0, max) : "");

function sanitizeItems(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((i) => i && typeof i === "object" && typeof i.garment === "string")
    .slice(0, MAX_ITEMS)
    .map((i) => ({
      id: clean(String(i.id || ""), 40) || `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      garmentId: clean(i.garmentId, 30),
      garment: clean(i.garment, 40),
      services: Array.isArray(i.services) ? i.services.map((s) => clean(s, 60)).slice(0, 8) : [],
      qty: Math.min(Math.max(parseInt(i.qty, 10) || 1, 1), 20),
      note: clean(i.note, 300),
    }));
}

export function QuoteProvider({ children }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [ready, setReady] = useState(false);

  // La nota sobrevive a un refresco de página. El almacenamiento puede no existir: todo va en try/catch.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setItems(sanitizeItems(data.items));
        setName(clean(data.name, 60));
      }
    } catch (_) {
      /* sin almacenamiento: la nota vive solo en memoria */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, name }));
    } catch (_) {
      /* ignorar */
    }
  }, [items, name, ready]);

  const add = useCallback((item) => {
    setItems((prev) =>
      prev.length >= MAX_ITEMS
        ? prev
        : [...prev, { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` }]
    );
  }, []);

  const remove = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const href = items.length ? waLink(buildQuoteMessage({ name, items })) : null;
    return { items, count, name, setName, add, remove, clear, href, full: items.length >= MAX_ITEMS };
  }, [items, name, add, remove, clear]);

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote debe usarse dentro de QuoteProvider");
  return ctx;
}
