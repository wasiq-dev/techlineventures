"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-cyan/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-cyan/5 blur-[120px]" />
      </div>

      <div className="container-max container-px relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-sm border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-cyan uppercase">
            Digital Excellence
          </div>
          
          <h1 className="mt-8 text-5xl font-[900] leading-[1] tracking-tighter text-white sm:text-7xl lg:text-8xl 2xl:text-9xl uppercase">
              Innovate <br />
              <span className="text-cyan">Scale</span> <br />
              Succeed
            </h1>

          <div className="mt-12 flex items-center gap-6">
            <div className="h-px w-12 bg-cyan/40" />
            <div className="text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">Insights</div>
            <div className="h-px w-12 bg-cyan/40" />
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl uppercase">Modern Digital Solutions</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray2 sm:text-lg">
              In today&apos;s digital economy, businesses must leverage precision-driven strategies to sustain competitive advantage and deliver premium experiences at scale.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton href="/contact" variant="primary" className="min-w-[220px] justify-center text-sm font-bold tracking-[0.2em] uppercase">
              Start Project
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="outline" className="min-w-[220px] justify-center text-sm font-bold tracking-[0.2em] uppercase">
              Our Work
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
