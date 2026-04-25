"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const el = glowRef.current;
      if (el) {
        const lerp = 0.12;
        current.current.x += (target.current.x - current.current.x) * lerp;
        current.current.y += (target.current.y - current.current.y) * lerp;
        el.style.transform = `translate3d(${current.current.x - 150}px, ${current.current.y - 150}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.00) 70%)",
        filter: "blur(0px)",
      }}
    />
  );
}

