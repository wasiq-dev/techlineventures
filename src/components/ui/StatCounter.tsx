"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [n, setN] = useState(0);

  const duration = useMemo(() => (reduceMotion ? 0 : 900), [reduceMotion]);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) return;
    const start = performance.now();
    const from = 0;
    const to = value;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, reduceMotion, value, duration]);

  return (
    <span ref={ref} className={className}>
      {reduceMotion ? value : n}
      {suffix ?? ""}
    </span>
  );
}

