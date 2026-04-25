"use client";

import { useMemo } from "react";

export function MarqueeStrip({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const content = useMemo(() => items.join(" ◆ "), [items]);
  const reverse = direction === "right";

  return (
    <div className="h-[60px] bg-[rgba(5,13,31,0.85)] overflow-hidden">
      <div
        className="flex h-full items-center whitespace-nowrap"
        style={{
          animation: `marquee 18s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        <div className="flex items-center gap-4 text-cyan text-sm tracking-wide px-4">
          <span>{content}</span>
          <span className="opacity-60">◆</span>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}

