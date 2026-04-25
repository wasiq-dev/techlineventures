"use client";

import type { PortfolioItem } from "@/src/lib/data";

export function PortfolioCard({
  item,
  index,
  className = "",
}: {
  item: PortfolioItem;
  index: number;
  className?: string;
}) {
  return (
    <article
      className={`group h-full overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] ${className}`.trim()}
      style={{
        background:
          "radial-gradient(700px 320px at 20% 0%, rgba(0,229,255,0.16), transparent 60%), linear-gradient(180deg, rgba(13,27,47,0.95), rgba(5,13,31,0.85))",
      }}
    >
      <div className="flex h-full flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex w-fit rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] px-3 py-1 text-xs text-cyan">
            {item.category}
          </div>
          <div className="text-xs tracking-[0.24em] text-[rgba(197,213,232,0.42)]">0{index + 1}</div>
        </div>

        <div className="mt-6 flex-1">
          <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {item.title}
          </div>
          <div className="mt-2 text-sm text-cyan/90">{item.tag}</div>
          <p className="mt-4 text-sm leading-7 text-[rgba(197,213,232,0.78)]">{item.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs text-[rgba(197,213,232,0.78)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[rgba(0,229,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[rgba(197,213,232,0.5)]">Project Impact</div>
          <div className="mt-2 text-sm leading-7 text-[rgba(197,213,232,0.82)]">{item.impact}</div>
        </div>
      </div>
    </article>
  );
}
