"use client";

import { useEffect, useState } from "react";
import { HOURS } from "../lib/site";

const DAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const fmt = ({ h, m }) => `${h}:${String(m).padStart(2, "0")}`;

function mexicoNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Mexico_City",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return { dow: DAYS[get("weekday")], minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function getStatus() {
  const { dow, minutes } = mexicoNow();
  const open = HOURS.open.h * 60 + HOURS.open.m;
  const close = HOURS.close.h * 60 + HOURS.close.m;
  const closedToday = HOURS.closedDays.includes(dow);
  if (!closedToday && minutes >= open && minutes < close) {
    return { open: true, text: `Abierto ahora, hasta las ${fmt(HOURS.close)}` };
  }
  if (!closedToday && minutes < open) {
    return { open: false, text: `Cerrado ahora, abrimos hoy a las ${fmt(HOURS.open)}` };
  }
  // Después del cierre o en domingo: buscar el siguiente día de apertura.
  let next = (dow + 1) % 7;
  let ahead = 1;
  while (HOURS.closedDays.includes(next)) {
    next = (next + 1) % 7;
    ahead += 1;
  }
  const when = ahead === 1 ? "mañana" : "el lunes";
  return { open: false, text: `Cerrado ahora, abrimos ${when} a las ${fmt(HOURS.open)}` };
}

// Se calcula solo en el navegador (hora de CDMX). Antes de eso reserva su espacio para no mover la página.
export default function OpenStatus({ className = "" }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={`flex min-h-[1.75rem] items-center gap-2.5 text-[0.95rem] ${className}`} aria-live="polite">
      {status && (
        <>
          <span
            aria-hidden="true"
            className={`inline-block h-2.5 w-2.5 rounded-full ${
              status.open ? "bg-brand-deep" : "bg-transparent ring-2 ring-inset ring-brand-muted"
            }`}
          />
          <span className="text-brand-text">{status.text}</span>
        </>
      )}
    </p>
  );
}
