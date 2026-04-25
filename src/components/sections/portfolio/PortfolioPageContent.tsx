"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { portfolio } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

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
                className="group h-full overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)]"
                style={{
                  background:
                    "radial-gradient(700px 320px at 20% 0%, rgba(0,229,255,0.16), transparent 60%), linear-gradient(180deg, rgba(13,27,47,0.95), rgba(5,13,31,0.85))",
                }}
              >
                <div className="flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex w-fit rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] px-3 py-1 text-xs text-cyan">
                      {p.category}
                    </div>
                    <div className="text-xs tracking-[0.24em] text-[rgba(197,213,232,0.42)]">0{idx + 1}</div>
                  </div>

                  <div className="mt-6 flex-1">
                    <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm text-cyan/90">{p.tag}</div>
                    <p className="mt-4 text-sm leading-7 text-[rgba(197,213,232,0.78)]">{p.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs text-[rgba(197,213,232,0.78)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[rgba(0,229,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[rgba(197,213,232,0.5)]">Project Impact</div>
                    <div className="mt-2 text-sm leading-7 text-[rgba(197,213,232,0.82)]">{p.impact}</div>
                  </div>
                </div>
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
