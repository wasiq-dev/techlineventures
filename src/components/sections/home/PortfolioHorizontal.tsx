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

    let ctx: { revert?: () => void } | undefined;
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
    <section id="portfolio" className="relative w-full overflow-hidden py-24 md:py-32">
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
                <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Selected Work</div>
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a1628] sm:text-6xl uppercase">
                Featured <span className="text-cyan">Projects</span>
              </h2>
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden sm:block">
                <div className="text-[10px] font-bold tracking-widest text-[#0a1628]/60 uppercase">Success Rate</div>
                <div className="mt-1 text-2xl font-bold text-[#0a1628]">99.9%</div>
              </div>
              <MagneticButton href="/portfolio" variant="primary">
                View Full Portfolio
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div ref={pinRef} className="mt-10 overflow-hidden relative">
        <div className={`container-max container-px ${!isDesktop ? "flex flex-col items-center" : ""}`}>
          <div
            ref={trackRef}
            className={`${
              isDesktop ? "flex gap-8 w-max pr-[20vw]" : "grid gap-6 justify-center"
            }`}
            style={{ willChange: "transform" }}
          >
            {portfolio.slice(0, 4).map((p, idx) => (
              <div
                key={p.id}
                className="relative h-[380px] w-[calc(100vw-40px)] max-w-[340px] sm:h-[400px] sm:max-w-[400px] lg:h-[420px] lg:w-[420px]"
              >
                <PortfolioCard item={p} index={idx} />
              </div>
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
