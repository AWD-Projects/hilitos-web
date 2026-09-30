"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("../lib/motionFeatures").then((mod) => mod.default);

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
