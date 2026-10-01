"use client";

import { m, useReducedMotion } from "framer-motion";

// Hilo derivado del lazo del logo. Va por detrás de la foto, sin cruzar texto.
export default function HeroThread({ className = "" }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 560 700"
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible ${className}`}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <m.path
        d="M430 640 C430 740 330 790 230 752 C140 718 160 640 232 666 C306 692 280 790 170 808 C80 822 10 790 -34 738"
        stroke="rgb(143 104 162)"
        strokeOpacity="0.75"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduce ? 0 : 2.4, delay: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <m.path
        d="M548 70 C612 110 628 198 590 268"
        stroke="rgb(182 101 132)"
        strokeOpacity="0.7"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduce ? 0 : 1.6, delay: reduce ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
