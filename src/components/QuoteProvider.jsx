"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { buildQuoteMessage, waLink } from "../lib/whatsapp";

const QuoteContext = createContext(null);
const OLD_STORAGE_KEY = "hilitos.nota.v1";
const MAX_ITEMS = 20;

export function QuoteProvider({ children }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  // La nota vive solo en memoria: un refresco la deja en blanco. Borra lo que guardó la versión anterior.
  useEffect(() => {
    try {
      window.localStorage.removeItem(OLD_STORAGE_KEY);
    } catch (_) {
      /* sin almacenamiento */
    }
  }, []);

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
