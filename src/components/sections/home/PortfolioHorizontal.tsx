"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { portfolio } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";
import { PortfolioCard } from "@/src/components/ui/PortfolioCard";

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
            {portfolio.slice(0, 4).map((p, idx) => (
              <motion.div
                key={p.id}
                className="relative h-[360px] w-[320px] sm:h-[380px] sm:w-auto lg:h-[420px] lg:w-[420px]"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <PortfolioCard item={p} index={idx} />
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
