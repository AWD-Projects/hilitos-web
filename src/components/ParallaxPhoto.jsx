"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Foto con tinte lila, parallax ligero y (opcional) revelado por máscara.
export default function ParallaxPhoto({
  src,
  alt,
  sizes,
  position = "center",
  aspect = "4 / 5",
  priority = false,
  reveal = true,
  frame = false,
  className = "",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);
  const shown = !reveal || inView;

  return (
    <div className={`${frame ? "photo-frame" : ""} ${className}`}>
      <m.div
        ref={ref}
        className="photo"
        style={{ aspectRatio: aspect }}
        initial={reveal ? { clipPath: "inset(0 0 100% 0)" } : false}
        animate={{ clipPath: shown ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
        transition={{ duration: reduce ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <m.div style={{ y, position: "absolute", inset: "-6% 0" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            fetchPriority={priority ? "high" : undefined}
            style={{ objectFit: "cover", objectPosition: position }}
          />
        </m.div>
      </m.div>
    </div>
  );
}
