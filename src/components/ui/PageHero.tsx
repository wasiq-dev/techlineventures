"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function PageHero({
  title,
  subtitle,
  kicker,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);

  return (
    <section ref={ref} className="relative overflow-hidden z-10">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
      </motion.div>

      <div className="container-max container-px pt-8 sm:pt-12 lg:pt-16 pb-14 relative z-10">
        {kicker && <div className="text-xs tracking-widest text-cyan uppercase">{kicker}</div>}
        <h1 className="mt-3 text-4xl sm:text-5xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h1>
        {subtitle && <p className="mt-4 muted max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

