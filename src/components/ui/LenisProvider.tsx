"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { createLenis } from "@/src/lib/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const lenis = createLenis();

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return (
    <div className="relative min-h-screen flex flex-col" style={{ position: "relative" }}>
      {children}
    </div>
  );
}

