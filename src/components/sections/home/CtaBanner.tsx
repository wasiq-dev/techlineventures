"use client";

import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Light-mode theme background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#eaf2f6] via-[#dbe8ee] to-[#cfe0e7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />
        <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[160px]" />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,22,40,0.16),transparent_55%)]" />
      </div>

      <div className="container-max container-px">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 p-10 sm:p-12 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(0,229,255,0.08),transparent_60%)]" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Let’s talk</div>
                <div className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight text-[#0a1628]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Ready to build something premium?
                </div>
                <p className="mt-4 text-[#0a1628]/70 max-w-2xl">
                  Share your idea — we’ll respond quickly with a clear plan, timeline, and quote.
                </p>
              </div>
              <div className="flex gap-3">
                <MagneticButton href="/contact" variant="primary">
                  Get a Quote
                </MagneticButton>
                <MagneticButton href="/services" variant="outline">
                  Explore Services
                </MagneticButton>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

