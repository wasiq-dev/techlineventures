"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { fadeUp, staggerChildren } from "@/src/lib/animations";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <SectionReveal>
          <div>
            <div className="text-xs tracking-widest text-cyan uppercase">Process</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Discover → Design → Develop → Deploy
            </h2>
            <p className="mt-4 muted max-w-2xl">
              A simple, transparent workflow that keeps quality high and delivery fast.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 relative">
          <svg className="absolute left-0 top-6 hidden lg:block" width="100%" height="220" viewBox="0 0 1000 220" aria-hidden>
            <motion.path
              d="M30 110 C 220 30, 340 190, 520 110 S 820 30, 970 110"
              fill="none"
              stroke="rgba(0,229,255,0.25)"
              strokeWidth="2"
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
            />
          </svg>

          <motion.div
            className="grid gap-5 lg:grid-cols-4"
            variants={staggerChildren(0.1)}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((s, idx) => (
              <motion.div key={s.title} variants={fadeUp} className="card p-6 relative">
                <div className="text-cyan text-sm font-medium">{String(idx + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </div>
                <div className="mt-2 text-sm muted leading-relaxed">{s.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

