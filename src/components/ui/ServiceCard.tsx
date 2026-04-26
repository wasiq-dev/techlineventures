"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as RI from "react-icons/ri";
import { useReducedMotion } from "framer-motion";

import type { Service } from "@/src/lib/data";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
}

export function ServiceCard({
  service,
  expanded,
  onToggle,
}: {
  service: Service;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => setTouch(isTouchDevice()), []);

  const Icon = useMemo(() => {
    const C = (RI as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon];
    return C ?? RI.RiSparklingLine;
  }, [service.icon]);

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion || touch) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rotY = (px - 0.5) * 16;
    const rotX = (0.5 - py) * 16;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const getSlug = (id: string) => {
    const slugs: Record<string, string> = {
      web: 'web-development',
      mobile: 'mobile-app-development',
      ecommerce: 'ecommerce-solutions',
      uiux: 'ui-ux-design',
      software: 'custom-software',
      marketing: 'digital-marketing-seo',
      branding: 'graphic-design-branding',
      api: 'api-integrations',
      maintenance: 'maintenance-support',
    };
    return slugs[id] || id;
  };

  return (
    <Link
      href={`/services/${getSlug(service.id)}`}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative flex h-full rounded-2xl p-[1px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-[-2px] rounded-[18px] blur-[15px] opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,229,255,0.0), rgba(0,229,255,0.65), rgba(0,184,204,0.0))",
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,229,255,0.0), rgba(0,229,255,0.65), rgba(0,184,204,0.0))",
            animation: reduceMotion ? undefined : "conicSpin 2.2s linear infinite",
            transformOrigin: "center",
          }}
        />
      </div>

      <div
        className="relative flex h-full w-full flex-col rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[linear-gradient(180deg,rgba(13,27,47,0.85),rgba(13,27,47,0.65))] px-6 py-6 text-left card transition-colors duration-300 group-hover:border-cyan/40 group-hover:bg-[rgba(13,27,47,0.95)]"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="absolute inset-0 -z-10 bg-cyan/0 transition-colors duration-500 group-hover:bg-cyan/[0.02]" />
        
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan group-hover:text-[#050d1f] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-[800] tracking-tight text-white group-hover:text-cyan transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-[rgba(197,213,232,0.72)] transition-colors group-hover:text-[rgba(197,213,232,0.9)]">
              {service.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Learn More
          <RI.RiArrowRightLine className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
