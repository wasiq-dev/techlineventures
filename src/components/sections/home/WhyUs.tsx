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
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionReveal>
            <div>
              <div className="text-xs tracking-widest text-cyan uppercase">Why TechLine</div>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Global speed, global craft.
              </h2>
              <p className="mt-5 muted leading-relaxed max-w-xl">
                We craft high-performance websites, mobile apps, and custom software that looks premium, feels fast,
              and helps businesses compete globally.
              </p>
              <motion.div
                className="mt-8 rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.06)] p-6"
                variants={fadeUp}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-sm text-gray2">We’re always open</div>
                <div className="mt-2 text-2xl font-[800] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
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
              <motion.div key={p.n} variants={slideInRight} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-cyan text-sm font-medium">{p.n}</div>
                  <div className="flex-1">
                    <div className="text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm muted leading-relaxed">{p.desc}</div>
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

