"use client";

import { motion } from "framer-motion";
import * as RI from "react-icons/ri";

import type React from "react";

const companies = [
  { icon: "RiGoogleLine", name: "Google" },
  { icon: "RiNetflixLine", name: "Netflix" },
  { icon: "RiAmazonLine", name: "Amazon" },
  { icon: "RiFacebookFill", name: "Meta" },
  { icon: "RiMicrosoftLine", name: "Microsoft" },
  { icon: "RiAdobeLine", name: "Adobe" },
];

export default function TrustedBy() {
  const iconMap = RI as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  // Duplicate the array to create seamless loop
  const marqueeContent = [...companies, ...companies, ...companies];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 md:py-20 border-b border-cyan/10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
      </div>

      <div className="container-max container-px relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-gray-400 uppercase">
            Our Students & Alumni Work at Top Global Companies
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          {/* Marquee Animation */}
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              animationPlayState: "paused",
            }}
          >
            {marqueeContent.map((company, index) => {
              const Icon = iconMap[company.icon] ?? RI.RiBuildingLine;
              return (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center gap-3 group"
                >
                  <Icon className="h-8 w-8 md:h-12 md:w-12 text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                  <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider transition-all duration-300 group-hover:text-white">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
