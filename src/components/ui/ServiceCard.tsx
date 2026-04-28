"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
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
  const [touch] = useState(isTouchDevice);

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
    const rotY = (px - 0.5) * 8;
    const rotX = (0.5 - py) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
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
      className="group relative flex h-full rounded-2xl transition-all duration-300"
      style={{ willChange: "transform" }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[rgba(0,229,255,0.12)] bg-linear-to-br from-[#0d1b2f] to-[#0a1628] p-6 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_20px_40px_rgba(0,229,255,0.15)] hover:-translate-y-1">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan/0 to-cyan/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative">
          {/* Icon container */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-cyan/10 to-cyan/5 border border-cyan/20 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan/40">
            <Icon className="h-7 w-7 text-cyan" />
          </div>

          {/* Service number */}
          <div className="absolute right-0 top-0 text-[10px] font-bold tracking-[0.2em] text-white/20 transition-colors group-hover:text-cyan/60">
            SERVICE // 0{service.id.length}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-xl font-extrabold tracking-tight text-white uppercase transition-colors group-hover:text-cyan" style={{ fontFamily: "var(--font-display)" }}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-[rgba(197,213,232,0.7)] transition-colors group-hover:text-white">
            {service.description}
          </p>

          {/* Feature tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {service.details.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[10px] font-bold tracking-wider text-white/40 transition-all group-hover:border-cyan/30 group-hover:bg-cyan/10 group-hover:text-cyan"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Arrow indicator */}
          <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/20 transition-all group-hover:text-cyan">
            <span>EXPLORE</span>
            <RI.RiArrowRightLine className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
