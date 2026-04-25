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
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Filter</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
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
                        ? "border-[rgba(0,229,255,0.40)] bg-[rgba(0,229,255,0.10)] text-white"
                        : "border-[rgba(0,229,255,0.14)] bg-[rgba(0,229,255,0.05)] text-[rgba(197,213,232,0.78)] hover:text-white"
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

      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container-max container-px">
          <SectionReveal>
            <div className="card p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Have a project in mind?
                </div>
                <div className="mt-3 muted">Let’s scope it clearly and ship it fast.</div>
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
