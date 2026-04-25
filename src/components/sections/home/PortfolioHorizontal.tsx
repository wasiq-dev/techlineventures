"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { portfolio } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function PortfolioHorizontal() {
  const reduceMotion = useReducedMotion();
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 1024);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (!isDesktop) return;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    let ctx: any;
    let destroyed = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const getDistance = () => Math.max(0, track.scrollWidth - pin.clientWidth);
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          paused: true,
        });

        ScrollTrigger.create({
          trigger: pin,
          start: "center center",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            tween.progress(self.progress);
          },
        });
      }, pin);

      ScrollTrigger.refresh();
    })().catch(() => {
      destroyed = true;
    });

    return () => {
      if (destroyed) return;
      try {
        ctx?.revert?.();
      } catch {}
    };
  }, [reduceMotion, isDesktop]);

  return (
    <section id="portfolio" className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-widest text-cyan uppercase">Portfolio</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Work that feels premium.
              </h2>
              <p className="mt-4 muted max-w-2xl">A few highlights across web, mobile, e-commerce, and software.</p>
            </div>
            <div className="hidden md:block">
              <MagneticButton href="/portfolio" variant="outline">
                View All Work
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div ref={pinRef} className="mt-10 overflow-hidden relative">
        <div className="container-max container-px">
          <div
            ref={trackRef}
            className={`${
              isDesktop ? "flex gap-5 w-max pr-10" : "grid gap-5 sm:grid-cols-2"
            }`}
            style={{ willChange: "transform" }}
          >
            {portfolio.slice(0, 4).map((p) => (
              <motion.div
                key={p.id}
                className="relative h-[260px] w-[320px] sm:w-auto sm:h-[240px] lg:w-[420px] lg:h-[320px] rounded-3xl overflow-hidden border border-[rgba(0,229,255,0.14)]"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  background:
                    "radial-gradient(700px 320px at 20% 0%, rgba(0,229,255,0.18), transparent 60%), linear-gradient(180deg, rgba(13,27,47,0.95), rgba(5,13,31,0.85))",
                }}
              >
                                <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                  <div className="inline-flex w-fit rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] px-3 py-1 text-xs text-cyan">
                    {p.category}
                  </div>
                  <div>
                    <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm muted">{p.tag}</div>
                    <Link href="/portfolio" className="mt-4 inline-flex text-sm text-cyan hover:underline">
                      View details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <MagneticButton href="/portfolio" variant="outline" className="w-full">
              View All Work
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

