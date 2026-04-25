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
      className="group relative flex h-full rounded-2xl p-[1px] transition-transform duration-200"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div
          className="absolute inset-[-2px] rounded-[18px] blur-[10px] opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,229,255,0.0), rgba(0,229,255,0.55), rgba(0,184,204,0.0))",
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,229,255,0.0), rgba(0,229,255,0.55), rgba(0,184,204,0.0))",
            animation: reduceMotion ? undefined : "conicSpin 2.2s linear infinite",
            transformOrigin: "center",
          }}
        />
      </div>

      <div
        className="relative flex h-full w-full flex-col rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[linear-gradient(180deg,rgba(13,27,47,0.76),rgba(13,27,47,0.55))] px-6 py-6 text-left card"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="flex items-start gap-4">
          <span className="h-11 w-11 rounded-2xl grid place-items-center border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan">
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <div className="text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              {service.title}
            </div>
            <div className="mt-2 text-sm muted leading-relaxed">{service.description}</div>
          </div>
        </div>

        {expanded && (
          <ul className="mt-5 grid gap-2 pl-5 text-sm text-[rgba(197,213,232,0.78)] list-disc">
            {service.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
