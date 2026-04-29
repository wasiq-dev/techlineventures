"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { portfolio } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";
import { PortfolioCard } from "@/src/components/ui/PortfolioCard";

const tabs = ["All", "Web", "Mobile", "E-Commerce", "Software"] as const;
type Tab = (typeof tabs)[number];

export function PortfolioPageContent() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<Tab>("All");

  const filtered = useMemo(() => {
    if (tab === "All") return portfolio;
    return portfolio.filter((p) => p.category === tab);
  }, [tab]);

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
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Filter</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Explore by category
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`rounded-full px-4 py-2 text-sm border transition ${
                      tab === t
                        ? "border-cyan bg-cyan/10 text-[#0a1628] font-bold"
                        : "border-[#0a1628]/10 bg-white/40 text-[#0a1628]/70 hover:text-[#0a1628] hover:border-cyan/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: reduceMotion ? 0 : Math.min(0.12, idx * 0.02) }}
                className="h-full"
              >
                <PortfolioCard item={p} index={idx} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 z-10 border-y border-[rgba(0,229,255,0.10)] bg-navy overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
        </div>

        <div className="container-max container-px relative z-10">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 backdrop-blur-md shadow-[0_24px_60px_rgba(0,229,255,0.05)]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Have a project in mind?
                </div>
                <div className="mt-3 text-gray2">Let’s scope it clearly and ship it fast.</div>
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
