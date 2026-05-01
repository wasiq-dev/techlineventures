"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { fadeUp, slideInRight, staggerChildren } from "@/src/lib/animations";

const points = [
  {
    title: "Built for performance",
    desc: "Fast loading, clean code, and zero layout shift — premium feel by default.",
  },
  { title: "Design-led delivery", desc: "UI/UX that looks modern and converts. No generic templates." },
  { title: "Reliable communication", desc: "Clear timelines, crisp updates, and practical guidance." },
  { title: "Long-term partner", desc: "Launch, iterate, optimize — we support you beyond the first release." },
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
              <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Why Techline</div>
              <h2
                className="mt-3 text-3xl sm:text-5xl font-[900] tracking-tighter uppercase text-white"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
                <div className="mt-2 text-2xl font-[900] tracking-tight text-white uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
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
            {points.map((p, index) => (
              <motion.div
                key={index}
                variants={slideInRight}
                className="group relative overflow-hidden rounded-2xl border-2 border-cyan/20 bg-gradient-to-br from-cyan/10 to-blue-500/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,229,255,0.15)] transition-all duration-300 hover:border-cyan/50 hover:from-cyan/20 hover:to-blue-500/20 hover:shadow-[0_30px_70px_rgba(0,229,255,0.3)] hover:-translate-y-1"
              >
                <div className="flex-1">
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-white transition-colors group-hover:text-cyan uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {p.title}
                  </div>
                  <div className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray2 transition-colors group-hover:text-white">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

