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
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <div className="card p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Specialties</div>
                <div className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {reduceMotion ? (
                    "Website Development"
                  ) : (
                    <motion.span
                      key={wordIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="text-cyan"
                    >
                      {words[wordIdx]}
                    </motion.span>
                  )}
                </div>
                <div className="mt-3 muted max-w-2xl">
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

      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <div className="card p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Pricing</div>
                <div className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Custom pricing for every project.
                </div>
                <div className="mt-3 muted max-w-2xl">
                  We quote based on scope, timeline, and required integrations — so you pay for what you actually need.
                </div>
              </div>
              <MagneticButton href="/contact" variant="outline">
                Contact us
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
