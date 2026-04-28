"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { fadeUp, slideInRight, staggerChildren } from "@/src/lib/animations";

const points = [
  {
    n: "01",
    title: "Built for performance",
    desc: "Fast loading, clean code, and zero layout shift — premium feel by default.",
  },
  { n: "02", title: "Design-led delivery", desc: "UI/UX that looks modern and converts. No generic templates." },
  { n: "03", title: "Reliable communication", desc: "Clear timelines, crisp updates, and practical guidance." },
  { n: "04", title: "Long-term partner", desc: "Launch, iterate, optimize — we support you beyond the first release." },
];

export function WhyUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden bg-navy py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-[100px]" />
      </div>
      
      <div className="container-max container-px relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionReveal>
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Why TechLine</div>
              <h2
                className="mt-3 text-3xl sm:text-5xl font-[900] tracking-tighter uppercase text-white"
              >
                Global speed, <br /> global craft.
              </h2>
              <p className="mt-5 text-gray2 leading-relaxed max-w-xl">
                We craft high-performance websites, mobile apps, and custom software that looks premium, feels fast,
              and helps businesses compete globally.
              </p>
              <motion.div
                className="mt-8 rounded-sm border border-cyan/10 bg-cyan/5 p-6"
                variants={fadeUp}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-[10px] font-bold tracking-widest text-cyan uppercase">We’re always open</div>
                <div className="mt-2 text-2xl font-[900] tracking-tight text-white uppercase">
                  Let’s build something premium.
                </div>
              </motion.div>
            </div>
          </SectionReveal>

          <motion.div
            className="grid gap-4"
            variants={staggerChildren(0.1)}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {points.map((p) => (
              <motion.div 
                key={p.n} 
                variants={slideInRight} 
                className="group relative overflow-hidden rounded-xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-6 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/[0.04] hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-cyan/20 bg-cyan/5 text-[10px] font-bold text-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy">
                    {p.n}
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-[900] tracking-tight text-white transition-colors group-hover:text-cyan uppercase">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-gray2 transition-colors group-hover:text-white">{p.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

