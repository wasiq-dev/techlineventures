"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { stats } from "@/src/lib/data";
import { StatCounter } from "@/src/components/ui/StatCounter";
import { fadeUp, staggerChildren } from "@/src/lib/animations";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

const values = [
  { title: "Innovation", desc: "Modern stacks and creative solutions — always improving." },
  { title: "Dedication", desc: "We treat your project like our own product." },
  { title: "Transparency", desc: "Clear scope, timelines, and honest communication." },
  { title: "Speed", desc: "Ship fast without sacrificing quality." },
];

export function AboutContent() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="relative py-20 lg:py-32 z-10 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-[120px]" />
        
        <div className="container-max container-px">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SectionReveal>
              <div className="relative">
                <div className="text-xs tracking-[0.2em] text-cyan uppercase font-bold">Our Philosophy</div>
                <h2 className="mt-4 text-4xl sm:text-5xl font-[800] tracking-tight leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
                  Beyond Code. <br />
                  <span className="text-gray2">We Build Partnerships.</span>
                </h2>
                <div className="mt-8 space-y-6 text-lg text-[rgba(197,213,232,0.85)] leading-relaxed">
                  <p>
                    TechLine Venture isn't just a development agency; we are your technical co-founders. 
                    We bridge the gap between complex technology and business growth by delivering 
                    solutions that are as beautiful as they are functional.
                  </p>
                  <p>
                    Our approach is rooted in <strong>Precision, Speed, and Scalability</strong>. 
                    Every line of code we write and every pixel we place is designed to give your 
                    business a competitive edge in an ever-evolving digital landscape.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(0,229,255,0.04)] px-5 py-2 text-sm font-medium text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Global Delivery
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(0,229,255,0.04)] px-5 py-2 text-sm font-medium text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Premium UX
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="group relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.4)] p-8 transition-all hover:border-cyan/40 hover:bg-[rgba(13,27,47,0.6)]">
                  <div className="text-3xl font-bold text-cyan mb-2">01</div>
                  <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                  <p className="text-sm text-[rgba(197,213,232,0.7)] leading-relaxed">We deep-dive into your business goals to ensure the technical roadmap aligns with your vision.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.4)] p-8 mt-0 sm:mt-8 transition-all hover:border-cyan/40 hover:bg-[rgba(13,27,47,0.6)]">
                  <div className="text-3xl font-bold text-cyan mb-2">02</div>
                  <h3 className="text-xl font-bold text-white mb-3">Execution</h3>
                  <p className="text-sm text-[rgba(197,213,232,0.7)] leading-relaxed">Agile development cycles focused on rapid shipping without compromising on architectural integrity.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.4)] p-8 transition-all hover:border-cyan/40 hover:bg-[rgba(13,27,47,0.6)]">
                  <div className="text-3xl font-bold text-cyan mb-2">03</div>
                  <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                  <p className="text-sm text-[rgba(197,213,232,0.7)] leading-relaxed">Continuous testing and refinement to ensure your product performs at peak efficiency under any load.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.4)] p-8 mt-0 sm:mt-8 transition-all hover:border-cyan/40 hover:bg-[rgba(13,27,47,0.6)]">
                  <div className="text-3xl font-bold text-cyan mb-2">04</div>
                  <h3 className="text-xl font-bold text-white mb-3">Success</h3>
                  <p className="text-sm text-[rgba(197,213,232,0.7)] leading-relaxed">Long-term support and strategic guidance to help you scale and dominate your market niche.</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 border-y border-[rgba(0,229,255,0.10)] bg-[rgba(5,13,31,0.55)] z-10">
        <div className="container-max container-px text-center">
          <SectionReveal>
            <div className="text-xs tracking-[0.2em] text-cyan uppercase font-bold mb-4">Core Principles</div>
            <h2 className="text-4xl sm:text-5xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Values that Drive us.
            </h2>
          </SectionReveal>

          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerChildren(0.1)}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((v) => (
              <motion.div 
                key={v.title} 
                variants={fadeUp} 
                className="group relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.4)] p-10 transition-all hover:border-cyan/40"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan/5 blur-2xl group-hover:bg-cyan/10 transition-colors" />
                <div className="text-2xl font-[800] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {v.title}
                </div>
                <div className="mt-4 text-[rgba(197,213,232,0.7)] leading-relaxed text-sm">
                  {v.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Our impact
            </h2>
          </SectionReveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card p-6">
                <div className="text-3xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-[rgba(197,213,232,0.72)]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Ready to work with us?
              </div>
              <div className="mt-2 muted">Tell us what you’re building — we’ll help you ship it.</div>
            </div>
            <MagneticButton href="/contact" variant="primary">
              Start a project
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

