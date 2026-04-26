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
              <motion.div 
                key={s.title} 
                variants={fadeUp} 
                className="group relative overflow-hidden rounded-[28px] border border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.02)] p-8 transition-all duration-300 hover:border-cyan/40 hover:bg-[rgba(0,229,255,0.04)] hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan text-sm font-bold tracking-widest">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="h-2 w-2 rounded-full bg-cyan/20 transition-all duration-300 group-hover:bg-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                </div>
                
                <div className="mt-6 text-xl font-[800] tracking-tight text-white transition-colors group-hover:text-cyan" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-[rgba(197,213,232,0.7)] transition-colors group-hover:text-[rgba(197,213,232,0.9)]">{s.description}</div>
                
                <div className="mt-6 h-[2px] w-0 bg-cyan transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

