"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { services } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { ProcessSection } from "@/src/components/sections/home/ProcessSection";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function ServicesPageContent() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  const words = useMemo(() => services.map((s) => s.title), []);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => setWordIdx((i) => (i + 1) % words.length), 1800);
    return () => window.clearInterval(t);
  }, [reduceMotion, words.length]);

  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24 border-y border-[rgba(0,229,255,0.10)]">
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
            <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 p-8 sm:p-10 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.2em] text-cyan uppercase font-bold">Specialties</div>
                <div className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  {reduceMotion ? (
                    "Website Development"
                  ) : (
                    <motion.span
                      key={wordIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="text-[#0a1628]"
                    >
                      {words[wordIdx]}
                    </motion.span>
                  )}
                </div>
                <div className="mt-3 text-[#0a1628]/70 max-w-2xl">
                  Tap a service to expand and see what’s included.
                </div>
              </div>
              <MagneticButton href="/contact" variant="primary">
                Get a Quote
              </MagneticButton>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="h-full">
                <ServiceCard
                  service={s}
                  expanded={active === s.id}
                  onToggle={() => setActive((cur) => (cur === s.id ? null : s.id))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

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
            <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Pricing</div>
                <div className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Custom pricing for every project.
                </div>
                <div className="mt-3 text-[#0a1628]/70 max-w-2xl">
                  We quote based on scope, timeline, and required integrations — so you pay for what you actually need.
                </div>
              </div>
              <MagneticButton href="/contact" variant="primary">
                Contact us
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
