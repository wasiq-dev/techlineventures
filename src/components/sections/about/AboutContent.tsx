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
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <div className="text-2xl sm:text-3xl italic text-gray2 leading-snug max-w-4xl">
              “We build smart, scalable tech that helps modern businesses move faster — from Pakistan to the world.”
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <SectionReveal>
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Our story</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Built to deliver premium results.
                </h2>
                <p className="mt-5 muted leading-relaxed">
                  TechLine Venture is a focused team of designers and engineers building high-performance websites,
                  mobile apps, and business tools. We blend strong UX with clean code so your product feels fast,
                  reliable, and polished from day one.
                </p>
                <p className="mt-4 muted leading-relaxed">
                  Whether you need a landing page that converts or a full internal system — we ship with clarity,
                  speed, and quality.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="card p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-xs tracking-widest text-cyan uppercase">Mission</div>
                  <div className="mt-3 text-xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    Software & digital solutions built for modern businesses worldwide.
                  </div>
                  <div className="mt-4 muted leading-relaxed">
                    A Pakistan-based software & digital solutions company focused on premium craft and fast delivery.
                  </div>
                  <div className="mt-4 muted leading-relaxed">
                    We help teams design, build, and launch digital products that feel premium and deliver results.
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 border-y border-[rgba(0,229,255,0.10)] bg-[rgba(5,13,31,0.55)] z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Our values
            </h2>
          </SectionReveal>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4"
            variants={staggerChildren(0.1)}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="card p-6">
                <div className="text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {v.title}
                </div>
                <div className="mt-2 text-sm muted leading-relaxed">{v.desc}</div>
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

