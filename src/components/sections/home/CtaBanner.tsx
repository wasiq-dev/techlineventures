"use client";

import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

export function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(13,27,47,0.65)] p-10 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(0,229,255,0.16),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_460px_at_85%_10%,rgba(0,184,204,0.12),transparent_58%)]" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Let’s talk</div>
                <div className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Ready to build something premium?
                </div>
                <p className="mt-4 muted max-w-2xl">
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

