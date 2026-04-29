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
      {/* 1. Global Craft Section (Light) */}
      <section className="relative overflow-hidden py-20 lg:py-24 border-y border-cyan/10">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-[#eef6fb] via-[#e2eef4] to-[#d7e7ee]" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-white/70 blur-[130px]" />
          <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[150px]" />
          <div className="absolute -bottom-28 -left-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,22,40,0.12),transparent_58%)]" />
          <div className="grid-bg absolute inset-0 opacity-[0.06]" />
        </div>

        <div className="container-max container-px relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <SectionReveal>
              <div className="relative">
                <div className="text-xs tracking-[0.2em] text-cyan uppercase font-bold">Our Philosophy</div>
                <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Beyond Code. <br />
                  <span className="text-[#0a1628]/70">We Build Partnerships.</span>
                </h2>
                <div className="mt-8 space-y-6 text-lg text-[#0a1628]/80 leading-relaxed">
                  <p>
                    Techline Venture isn&apos;t just a development agency; we are your technical co-founders. 
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
                  <div className="flex items-center gap-2 rounded-full border border-[#0a1628]/10 bg-white/55 px-5 py-2 text-sm font-semibold text-[#0a1628] shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Global Delivery
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-[#0a1628]/10 bg-white/55 px-5 py-2 text-sm font-semibold text-[#0a1628] shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Premium UX
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="group relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/55 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all hover:border-cyan/30 hover:shadow-[0_28px_70px_rgba(0,229,255,0.14)] hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.10),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative text-3xl font-black text-cyan mb-2">01</div>
                  <h3 className="relative text-xl font-black text-[#0a1628] mb-3">Discovery</h3>
                  <p className="relative text-sm text-[#0a1628]/70 leading-relaxed">We deep-dive into your business goals to ensure the technical roadmap aligns with your vision.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/55 p-8 mt-0 sm:mt-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all hover:border-cyan/30 hover:shadow-[0_28px_70px_rgba(0,229,255,0.14)] hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.10),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative text-3xl font-black text-cyan mb-2">02</div>
                  <h3 className="relative text-xl font-black text-[#0a1628] mb-3">Execution</h3>
                  <p className="relative text-sm text-[#0a1628]/70 leading-relaxed">Agile development cycles focused on rapid shipping without compromising on architectural integrity.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/55 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all hover:border-cyan/30 hover:shadow-[0_28px_70px_rgba(0,229,255,0.14)] hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.10),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative text-3xl font-black text-cyan mb-2">03</div>
                  <h3 className="relative text-xl font-black text-[#0a1628] mb-3">Optimization</h3>
                  <p className="relative text-sm text-[#0a1628]/70 leading-relaxed">Continuous testing and refinement to ensure your product performs at peak efficiency under any load.</p>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/55 p-8 mt-0 sm:mt-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all hover:border-cyan/30 hover:shadow-[0_28px_70px_rgba(0,229,255,0.14)] hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.10),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative text-3xl font-black text-cyan mb-2">04</div>
                  <h3 className="relative text-xl font-black text-[#0a1628] mb-3">Success</h3>
                  <p className="relative text-sm text-[#0a1628]/70 leading-relaxed">Long-term support and strategic guidance to help you scale and dominate your market niche.</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 bg-navy z-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
        </div>

        <div className="container-max container-px text-center relative z-10">
          <SectionReveal>
            <div className="text-xs tracking-[0.2em] text-cyan uppercase font-bold mb-4">Core Principles</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
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
                className="group relative overflow-hidden rounded-2xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-10 transition-all hover:border-cyan/40 hover:bg-cyan/[0.04] hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] hover:-translate-y-0.5 text-left"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan/5 blur-2xl group-hover:bg-cyan/10 transition-colors" />
                <div className="text-2xl font-extrabold tracking-tight text-white uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  {v.title}
                </div>
                <div className="mt-4 text-gray2 leading-relaxed text-sm transition-colors group-hover:text-white">
                  {v.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 z-10 border-y border-[rgba(0,229,255,0.10)]">
        {/* Light-mode theme background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-[#eaf2f6] via-[#dbe8ee] to-[#cfe0e7]" />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />
          <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[160px]" />
          <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,22,40,0.16),transparent_55%)]" />
        </div>

        <div className="container-max container-px relative z-10">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a1628] uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Our impact
            </h2>
          </SectionReveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="relative overflow-hidden rounded-2xl border border-[#0a1628]/10 bg-white/40 p-6 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <div className="text-3xl font-extrabold tracking-tight text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-bold text-[#0a1628]/50 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-[#0a1628] uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Ready to work with us?
              </div>
              <div className="mt-2 text-[#0a1628]/70 font-medium">Tell us what you&apos;re building — we&apos;ll help you ship it.</div>
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

