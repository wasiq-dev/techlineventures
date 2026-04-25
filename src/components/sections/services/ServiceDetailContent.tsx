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

      <section className="relative w-full overflow-hidden bg-[#050d1f] py-20 md:py-24">
        <div className="container-max container-px">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
            <SectionReveal>
              <div className="card h-full p-8 sm:p-10">
                <div className="text-xs tracking-widest text-cyan uppercase">Overview</div>
                <h2
                  className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built around business goals, not generic templates.
                </h2>
                <p className="mt-5 text-base leading-8 text-[rgba(197,213,232,0.82)]">{content.overview}</p>
                <p className="mt-5 text-sm leading-7 text-[rgba(197,213,232,0.72)]">{content.audience}</p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="card h-full p-8 sm:p-10">
                <div className="text-xs tracking-widest text-cyan uppercase">Quick Snapshot</div>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.05)] px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[rgba(197,213,232,0.62)]">Timeline</div>
                    <div className="mt-2 text-base font-semibold text-white">{content.timeline}</div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.05)] px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[rgba(197,213,232,0.62)]">Engagement</div>
                    <div className="mt-2 text-base font-semibold text-white">{content.engagement}</div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.05)] px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[rgba(197,213,232,0.62)]">Great Fit For</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {content.industries.map((industry) => (
                        <span
                          key={industry}
                          className="rounded-full border border-[rgba(0,229,255,0.14)] bg-[rgba(255,255,255,0.02)] px-3 py-1 text-xs text-[rgba(197,213,232,0.8)]"
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

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <SectionReveal>
              <div className="card h-full p-8">
                <div className="text-xs tracking-widest text-cyan uppercase">What You Get</div>
                <div
                  className="mt-3 text-2xl font-[800] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Clear deliverables from day one.
                </div>
                <ul className="mt-6 grid gap-3">
                  {content.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.04)] px-4 py-4 text-sm leading-7 text-[rgba(197,213,232,0.82)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="card h-full p-8">
                <div className="text-xs tracking-widest text-cyan uppercase">Expected Impact</div>
                <div
                  className="mt-3 text-2xl font-[800] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Outcomes that support growth.
                </div>
                <ul className="mt-6 grid gap-3">
                  {content.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(255,255,255,0.02)] px-4 py-4 text-sm leading-7 text-[rgba(197,213,232,0.82)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="mt-6 card p-8 sm:p-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs tracking-widest text-cyan uppercase">How We Work</div>
                  <div
                    className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    A focused process that keeps delivery clean.
                  </div>
                </div>
                <div className="text-sm text-[rgba(197,213,232,0.68)]">Lean, practical, and outcome-driven.</div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {content.process.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(0,229,255,0.04)] p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan">0{index + 1}</div>
                    <div className="mt-3 text-lg font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[rgba(197,213,232,0.78)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-6 card p-8 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs tracking-widest text-cyan uppercase">Next Step</div>
                <div
                  className="mt-3 text-2xl sm:text-3xl font-[800] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Need this service for your business?
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(197,213,232,0.78)]">
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
