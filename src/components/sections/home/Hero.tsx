"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RiArrowDownLine } from "react-icons/ri";

import { company } from "@/src/lib/data";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#@$%&*";

function useScrambleText(text: string, enabled: boolean) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const totalFrames = 34;
    const settleFrames = 10;
    const tick = () => {
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const settle = Math.floor(progress * text.length);
      const scrambled = text
        .split("")
        .map((ch, idx) => {
          if (idx < settle - settleFrames) return ch;
          if (ch === " ") return " ";
          const r = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          return idx < settle ? ch : r;
        })
        .join("");
      setOut(scrambled);
      if (frame < totalFrames) requestAnimationFrame(tick);
      else setOut(text);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [text, enabled]);
  return out;
}

function HeroParticles({ count }: { count: number }) {
  const [items, setItems] = useState<
    { i: number; size: number; left: number; top: number; opacity: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    // IMPORTANT: only generate random particles on the client to avoid SSR hydration mismatch.
    setItems(
      Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 2;
        const left = Math.random() * 100;
        const top = 40 + Math.random() * 60;
        const opacity = 0.3 + Math.random() * 0.3;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 4;
        return { i, size, left, top, opacity, duration, delay };
      }),
    );
  }, [count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full bg-cyan"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : -240]);
  const [particleCount, setParticleCount] = useState(40);

  const smart = useScrambleText("Smart Tech", !reduceMotion);
  const headlineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const update = () => setParticleCount(window.innerWidth < 640 ? 15 : 40);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    // no-op: Framer Motion handles SVG pathLength animation
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden z-10">
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        background: "radial-gradient(900px 600px at 15% 10%, rgba(0,229,255,0.12), transparent 60%), radial-gradient(850px 520px at 80% 0%, rgba(0,184,204,0.10), transparent 60%)"
      }} />
      <HeroParticles count={particleCount} />

      <div className="container-max container-px pb-20 lg:pb-28 relative z-10">
        <div className="mt-[76px] grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1
              className="mt-6 text-[40px] leading-[1.14] sm:text-[56px] sm:leading-[1.12] lg:text-[64px] lg:leading-[1.12] font-[800] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building{" "}
              <span className="text-cyan inline-block align-baseline min-w-[9.5ch]">
                {smart}
              </span>
              <br />
              <span className="text-gray2">For Modern Business.</span>
            </h1>

            <p className="mt-5 muted max-w-xl leading-relaxed">
              We craft high-performance websites, mobile apps, and custom software that looks premium, feels fast,
              and helps Karachi businesses compete globally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <MagneticButton href="/contact" variant="primary">
                Get a Quote
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="outline">
                View Work
              </MagneticButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-[520px] aspect-square">
              <div className="absolute inset-0 rounded-full border border-[rgba(0,229,255,0.10)]" />
              <motion.div
                className="absolute inset-[6%] rounded-full border border-[rgba(0,229,255,0.16)]"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                style={{ willChange: "transform" }}
              />
              <motion.div
                className="absolute inset-[18%] rounded-full border border-[rgba(0,229,255,0.10)]"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 34, ease: "linear", repeat: Infinity }}
                style={{ willChange: "transform" }}
              />

              <div className="absolute inset-[26%] card p-6 flex flex-col justify-between z-10">
                <div className="text-xs text-gray2">TechLine Venture</div>
                <div className="mt-3">
                  <div className="text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    Premium, fast, scalable
                  </div>
                  <div className="mt-2 text-sm muted">
                    From design to deployment — one partner, end-to-end.
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-[rgba(197,213,232,0.72)]">
                  <div className="rounded-xl border border-[rgba(0,229,255,0.10)] bg-[rgba(0,229,255,0.05)] px-3 py-2 text-center">
                    Web
                  </div>
                  <div className="rounded-xl border border-[rgba(0,229,255,0.10)] bg-[rgba(0,229,255,0.05)] px-3 py-2 text-center">
                    Mobile
                  </div>
                  <div className="rounded-xl border border-[rgba(0,229,255,0.10)] bg-[rgba(0,229,255,0.05)] px-3 py-2 text-center">
                    Software
                  </div>
                </div>
              </div>

              <svg
                className="absolute inset-0 -z-10"
                viewBox="0 0 100 100"
                aria-hidden
                preserveAspectRatio="none"
              >
                <motion.path
                  ref={headlineRef}
                  d="M12 76 C 28 36, 44 68, 60 42 S 86 34, 92 62"
                  fill="none"
                  stroke="rgba(0,229,255,0.65)"
                  strokeWidth="0.8"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
                />
                <motion.path
                  d="M10 30 C 28 24, 36 42, 52 34 S 74 14, 92 24"
                  fill="none"
                  stroke="rgba(0,229,255,0.35)"
                  strokeWidth="0.6"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 1.05, ease: "easeOut", delay: 0.15 }}
                />
              </svg>
            </div>
          </div>
        </div>

              </div>
    </section>
  );
}

