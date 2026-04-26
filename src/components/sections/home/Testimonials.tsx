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
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-20 sm:py-24 md:py-32">
      <div className="absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.14),transparent_65%)]" />
      <div className="container-max container-px">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.28em] text-cyan uppercase">Client Reviews</div>
              <h2 className="mt-3 text-2xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Feedback that makes the whole brand feel more trustworthy.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[rgba(197,213,232,0.74)] sm:text-base">
                Real clients, real outcomes, and a layout that feels cleaner on both desktop and mobile.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustHighlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group relative rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.03)] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-[rgba(0,229,255,0.06)] hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                >
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan/0 transition-colors duration-500 group-hover:bg-cyan/[0.02]" />
                  <div className="flex items-center gap-2 text-cyan transition-transform duration-300 group-hover:translate-x-1">
                    <Icon className="h-4 w-4" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[rgba(197,213,232,0.56)] group-hover:text-[rgba(197,213,232,0.8)]">{label}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-white group-hover:text-cyan transition-colors">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="relative mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch">
          <div className="card relative overflow-hidden rounded-[28px] p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.16),transparent_46%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(5,13,31,0),rgba(5,13,31,0.14))]" />
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
                        <div className="inline-flex items-center gap-1 rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.08)] px-3 py-2 text-cyan">
                          {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                            <RiStarFill key={i} className="h-4 w-4" />
                          ))}
                        </div>
                        <div className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[rgba(197,213,232,0.52)]">
                          Highlighted review
                        </div>
                      </div>
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan sm:h-12 sm:w-12">
                        <RiDoubleQuotesL className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray2 sm:mt-8 sm:text-[26px] sm:leading-[1.6]">
                      "{activeTestimonial.quote}"
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                      {reviewTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[rgba(197,213,232,0.62)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-5 border-t border-[rgba(255,255,255,0.08)] pt-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">{activeTestimonial.name}</div>
                      <div className="mt-1 text-sm text-[rgba(197,213,232,0.68)]">{activeTestimonial.title}</div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        type="button"
                        aria-label="Previous testimonial"
                        onClick={goToPrev}
                        className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(255,255,255,0.04)] text-[rgba(197,213,232,0.72)] transition hover:border-[rgba(0,229,255,0.28)] hover:text-white"
                      >
                        <RiArrowLeftSLine className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next testimonial"
                        onClick={goToNext}
                        className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.08)] text-cyan transition hover:border-[rgba(0,229,255,0.28)] hover:bg-[rgba(0,229,255,0.12)]"
                      >
                        <RiArrowRightSLine className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {testimonials.map((item, idx) => {
              const isActive = idx === active;
              const initials = item.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2);

              return (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`group rounded-[24px] border p-4 text-left transition sm:p-5 ${
                    isActive
                      ? "border-[rgba(0,229,255,0.28)] bg-[linear-gradient(180deg,rgba(0,229,255,0.09),rgba(255,255,255,0.04))]"
                      : "border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(0,229,255,0.22)] hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
                  onClick={() => setActive(idx)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border text-sm font-semibold ${
                        isActive
                          ? "border-[rgba(0,229,255,0.28)] bg-[rgba(0,229,255,0.12)] text-cyan"
                          : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[rgba(197,213,232,0.84)]"
                      }`}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className={`truncate text-sm font-semibold sm:text-base ${isActive ? "text-white" : "text-[rgba(197,213,232,0.9)]"}`}>
                            {item.name}
                          </div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[rgba(197,213,232,0.46)]">
                            {item.title}
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-1 text-cyan">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <RiStarFill key={i} className="h-3.5 w-3.5" />
                          ))}
                        </div>
                      </div>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[rgba(197,213,232,0.72)]">
                        {item.quote}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isActive ? "bg-cyan shadow-[0_0_16px_rgba(0,229,255,0.7)]" : "bg-[rgba(197,213,232,0.2)]"
                          }`}
                        />
                        <span className={`text-xs ${isActive ? "text-cyan" : "text-[rgba(197,213,232,0.45)]"}`}>
                          {isActive ? "Currently highlighted" : "Tap to preview"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          {testimonials.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Switch to ${item.name} review`}
              onClick={() => setActive(idx)}
              className={`h-2.5 rounded-full transition ${
                idx === active ? "w-8 bg-cyan" : "w-2.5 bg-[rgba(197,213,232,0.22)]"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-[24px] border border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.03)] px-4 py-4 sm:px-5 lg:hidden">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[rgba(197,213,232,0.48)]">Trusted in</div>
            <div className="mt-2 text-sm font-medium text-white">{company.cityBadge}</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[rgba(197,213,232,0.48)]">Client rating</div>
            <div className="mt-2 text-sm font-medium text-cyan">5.0 / 5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
