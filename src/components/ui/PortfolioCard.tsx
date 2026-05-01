"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
      className={`group relative h-full overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] transition-colors duration-300 hover:border-cyan/40 ${className}`.trim()}
      style={{
        background:
          "radial-gradient(700px 320px at 20% 0%, rgba(0,229,255,0.16), transparent 60%), linear-gradient(180deg, rgba(13,27,47,0.95), rgba(5,13,31,0.85))",
      }}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-cyan/0 transition-colors duration-500 group-hover:bg-cyan/[0.03]" />
      
      <div className="flex h-full flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="inline-flex w-fit rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs font-medium text-cyan transition-colors group-hover:bg-cyan/10">
            {item.category}
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-xs font-medium tracking-[0.24em] text-[rgba(197,213,232,0.42)] group-hover:text-cyan/40 transition-colors">0{index + 1}</div>
            <RiArrowRightUpLine className="h-5 w-5 text-cyan opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </div>

        <div className="mt-4 flex-1">
          <div className="text-lg font-[800] leading-tight tracking-tight transition-colors group-hover:text-white text-lg sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            {item.title}
          </div>
          <div className="mt-2 text-xs sm:text-sm font-medium text-cyan/90 group-hover:text-cyan">{item.tag}</div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[rgba(197,213,232,0.72)] group-hover:text-[rgba(197,213,232,0.9)] transition-colors line-clamp-3">{item.summary}</p>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-[11px] font-medium text-[rgba(197,213,232,0.65)] transition-all group-hover:border-cyan/20 group-hover:text-gray2"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 rounded-2xl border border-[rgba(0,229,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3 sm:p-4 transition-all group-hover:border-cyan/10 group-hover:bg-[rgba(255,255,255,0.04)]">
          <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan/40 group-hover:text-cyan/60 transition-colors">Project Impact</div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[rgba(197,213,232,0.82)] group-hover:text-white transition-colors">{item.impact}</div>
        </div>
      </div>
    </motion.article>
  );
}
