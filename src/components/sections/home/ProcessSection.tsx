"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { fadeUp, staggerChildren } from "@/src/lib/animations";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden bg-navy py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
      </div>
      
      <div className="container-max container-px relative z-10">
        <SectionReveal>
          <div>
            <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Process</div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-[900] tracking-tighter text-white uppercase">
              Discover → Design → Develop → Deploy
            </h2>
            <p className="mt-4 text-gray2 max-w-2xl">
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
                className="group relative overflow-hidden rounded-xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-8 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/[0.04] hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="text-cyan text-[10px] font-bold tracking-widest">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="h-2 w-2 rounded-full bg-cyan/20 transition-all duration-300 group-hover:bg-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                </div>
                
                <div className="mt-6 text-xl font-[900] tracking-tight text-white transition-colors group-hover:text-cyan uppercase">
                  {s.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-gray2 transition-colors group-hover:text-white">{s.description}</div>
                
                <div className="mt-6 h-[1px] w-0 bg-cyan transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

