"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

import { testimonials } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % testimonials.length), 4000);
    return () => window.clearInterval(t);
  }, [reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <SectionReveal>
          <div>
            <div className="text-xs tracking-widest text-cyan uppercase">Testimonials</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Trusted by teams that move fast.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-10 relative">
          <div className="card p-0 overflow-hidden">
            <div className="relative min-h-[220px] sm:min-h-[200px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="p-8 sm:p-10"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-1 text-cyan">
                    {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                      <RiStarFill key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-gray2">
                    “{testimonials[active].quote}”
                  </p>
                  <div className="mt-6 text-sm text-[rgba(197,213,232,0.78)]">
                    <span className="text-white font-medium">{testimonials[active].name}</span>{" "}
                    <span className="opacity-70">— {testimonials[active].title}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === active ? "bg-cyan" : "bg-[rgba(197,213,232,0.20)] hover:bg-[rgba(197,213,232,0.35)]"
                }`}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

