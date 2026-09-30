"use client";

import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

// Entrada con fade y desplazamiento. Observa el contenedor (no hijos enmascarados).
// Con reduced-motion anima igual al estado final, con duración 0: el contenido nunca queda oculto.
export default function Reveal({ children, className = "", delay = 0, y = 22, as = "div" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const Tag = m[as] || m.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

// La costura que separa secciones: se cose de izquierda a derecha al entrar en pantalla.
export function Seam({ light = false, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  return (
    <m.div
      ref={ref}
      aria-hidden="true"
      className={`${light ? "seam-light" : "seam"} ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
      transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
