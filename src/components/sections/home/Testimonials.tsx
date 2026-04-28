"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDoubleQuotesL,
  RiShieldCheckLine,
  RiSparklingLine,
  RiStarFill,
  RiTimeLine,
} from "react-icons/ri";

import { company, testimonials } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";

const trustHighlights = [
  {
    icon: RiShieldCheckLine,
    label: "Client satisfaction",
    value: "5-star feedback",
  },
  {
    icon: RiTimeLine,
    label: "Delivery focus",
    value: "Fast, clear execution",
  },
  {
    icon: RiSparklingLine,
    label: "Location",
    value: company.cityBadge,
  },
] as const;

const reviewTags = ["Premium UI", "Fast delivery", "Clear communication"] as const;

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const activeTestimonial = testimonials[active];

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => window.clearInterval(t);
  }, [reduceMotion]);

  const goToPrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setActive((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden py-24 md:py-32">
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-cyan/30" />
                <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Social Proof</div>
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a1628] sm:text-6xl uppercase">
                Client <span className="text-cyan">Trust</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full border border-cyan/20 bg-linear-to-br from-cyan/10 to-cyan/5 grid place-items-center">
                <RiDoubleQuotesL className="h-6 w-6 text-cyan" />
              </div>
              <div className="text-sm font-bold text-[#0a1628] uppercase tracking-widest">Global Reviews</div>
            </div>
          </div>
        </SectionReveal>

        <div className="relative mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch">
          <div className="relative overflow-hidden rounded-sm border border-[#0a1628]/10 bg-white/40 p-0 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.08),transparent_46%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.3))]" />
            <div className="relative min-h-[320px] sm:min-h-[360px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill key={i} className="h-3 w-3 text-cyan" />
                          ))}
                        </div>
                        <div className="mt-3 text-lg font-black leading-tight text-[#0a1628] sm:text-2xl uppercase">
                          {activeTestimonial.title}
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        {testimonials.map((t, i) => (
                          <div
                            key={t.id}
                            className={`h-8 w-8 rounded-full border-2 border-white bg-white/50 transition-all ${
                              active === i ? "z-10 scale-110 border-cyan shadow-[0_0_15px_rgba(0,229,255,0.4)]" : "opacity-40"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-[#0a1628]/80 sm:text-lg">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-[#0a1628]/10 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full border border-[#0a1628]/10 bg-white/60 p-1">
                        <div className="h-full w-full rounded-full bg-[#0a1628]/5" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#0a1628] uppercase">{activeTestimonial.name}</div>
                        <div className="text-[10px] font-bold tracking-widest text-[#0a1628]/50 uppercase">
                          {activeTestimonial.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={goToPrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a1628]/10 bg-white/60 text-[#0a1628] backdrop-blur-md transition hover:bg-white/80"
                        aria-label="Previous testimonial"
                      >
                        <RiArrowLeftSLine className="h-5 w-5" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a1628]/10 bg-white/60 text-[#0a1628] backdrop-blur-md transition hover:bg-white/80"
                        aria-label="Next testimonial"
                      >
                        <RiArrowRightSLine className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex-1 rounded-sm border border-[#0a1628]/10 bg-white/40 p-6 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
              <div className="text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">Project Stats</div>
              <div className="mt-6 space-y-5">
                {trustHighlights.map((h) => (
                  <div key={h.label} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-cyan/20 bg-cyan/5 text-cyan">
                      <h.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#0a1628] uppercase">{h.value}</div>
                      <div className="text-[10px] font-bold tracking-widest text-[#0a1628]/50 uppercase">
                        {h.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-[#0a1628]/10 bg-white/40 p-6 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
              <div className="text-[10px] font-bold tracking-widest text-cyan uppercase">Service Focus</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {reviewTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0a1628]/10 bg-white/60 px-3 py-1 text-[10px] font-bold text-[#0a1628]/70 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
