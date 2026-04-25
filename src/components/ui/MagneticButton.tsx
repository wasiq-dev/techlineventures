"use client";

import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant: "primary" | "outline";
  className?: string;
};

export function MagneticButton({ children, href, onClick, variant, className }: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const x = dx * 0.3;
    const y = dy * 0.3;
    (el as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    (el as HTMLElement).style.transform = "translate3d(0,0,0)";
  };

  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className ?? ""}`;

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
        style={{ transition: "transform 220ms ease" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cls}
      style={{ transition: "transform 220ms ease" }}
      type="button"
    >
      {children}
    </button>
  );
}

