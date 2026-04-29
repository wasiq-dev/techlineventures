"use client";

import { MagneticButton } from "@/src/components/ui/MagneticButton";
import { PageHero } from "@/src/components/ui/PageHero";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { servicePageContent, services, type Service } from "@/src/lib/data";

export function ServiceDetailContent({ serviceId }: { serviceId: Service["id"] }) {
  const service = services.find((item) => item.id === serviceId);
  const content = servicePageContent[serviceId];

  if (!service || !content) return null;

  return (
    <>
      <PageHero kicker="Service" title={service.title} subtitle={content.heroSubtitle} />

      <section className="relative w-full overflow-hidden py-20 md:py-24 border-y border-[rgba(0,229,255,0.10)]">
        {/* Light-mode theme background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-[#eaf2f6] via-[#dbe8ee] to-[#cfe0e7]" />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />
          <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[160px]" />
          <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,22,40,0.16),transparent_55%)]" />
        </div>

        <div className="container-max container-px">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 h-full p-8 sm:p-10 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Overview</div>
                <h2
                  className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight text-[#0a1628] uppercase"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Built around business goals, not generic templates.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#0a1628]/80">{content.overview}</p>
                <p className="mt-5 text-sm leading-7 text-[#0a1628]/70">{content.audience}</p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 h-full p-8 sm:p-10 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Quick Snapshot</div>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-[#0a1628]/10 bg-white/50 px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#0a1628]/50">Timeline</div>
                    <div className="mt-2 text-base font-semibold text-[#0a1628]">{content.timeline}</div>
                  </div>
                  <div className="rounded-2xl border border-[#0a1628]/10 bg-white/50 px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#0a1628]/50">Engagement</div>
                    <div className="mt-2 text-base font-semibold text-[#0a1628]">{content.engagement}</div>
                  </div>
                  <div className="rounded-2xl border border-[#0a1628]/10 bg-white/50 px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#0a1628]/50">Great Fit For</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {content.industries.map((industry) => (
                        <span
                          key={industry}
                          className="rounded-full border border-[#0a1628]/10 bg-white/60 px-3 py-1 text-xs text-[#0a1628]/80"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-6">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white/40 h-full p-8 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">What You Get</div>
                <div
                  className="mt-3 text-2xl font-[800] tracking-tight text-[#0a1628] uppercase"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Clear deliverables from day one.
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {content.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[#0a1628]/10 bg-white/50 px-4 py-4 text-sm leading-7 text-[#0a1628]/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-20 md:py-24 bg-navy z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
        </div>

        <div className="container-max container-px relative z-10">
          <div className="grid gap-6 lg:grid-cols-1">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-3xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-8 backdrop-blur-md shadow-[0_24px_60px_rgba(0,229,255,0.05)]">
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Expected Impact</div>
                <div
                  className="mt-3 text-2xl font-[800] tracking-tight text-white uppercase"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Outcomes that support growth.
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {content.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-cyan/10 bg-white/5 px-4 py-4 text-sm leading-7 text-gray2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="mt-6 relative overflow-hidden rounded-3xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-8 sm:p-10 backdrop-blur-md shadow-[0_24px_60px_rgba(0,229,255,0.05)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs tracking-widest text-cyan uppercase font-bold">How We Work</div>
                  <div
                    className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight text-white uppercase"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    A focused process that keeps delivery clean.
                  </div>
                </div>
                <div className="text-sm text-gray2">Lean, practical, and outcome-driven.</div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {content.process.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-cyan/10 bg-white/5 p-5 transition-all hover:border-cyan/30 hover:bg-cyan/5"
                  >
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan font-bold">0{index + 1}</div>
                    <div className="mt-3 text-lg font-[800] tracking-tight text-white uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                      {step.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-gray2">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-6 relative overflow-hidden rounded-3xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.05] to-blue-50/[0.05] p-8 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between backdrop-blur-md shadow-[0_24px_60px_rgba(0,229,255,0.1)]">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase font-bold">Next Step</div>
                <div
                  className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight text-white uppercase"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Need this service for your business?
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray2">
                  We can scope the project, recommend the right stack, and turn the idea into a clear execution plan.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="/contact" variant="primary">
                  Start Your Project
                </MagneticButton>
                <MagneticButton href="/portfolio" variant="outline">
                  View Related Work
                </MagneticButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
