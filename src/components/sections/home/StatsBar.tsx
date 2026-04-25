"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/src/lib/data";
import { StatCounter } from "@/src/components/ui/StatCounter";
import { fadeUp, staggerChildren } from "@/src/lib/animations";

export function StatsBar() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px py-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerChildren(0.1)}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((s, idx) => (
            <motion.div key={s.label} variants={fadeUp} className="relative">
              {idx !== 0 && (
                <div className="hidden md:block absolute -left-3 top-2 bottom-2 w-px bg-[rgba(0,229,255,0.10)]" />
              )}
              <div className="text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-[rgba(197,213,232,0.72)]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

