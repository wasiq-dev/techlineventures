"use client";

import { company, services } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { ContactForm } from "@/src/components/sections/contact/ContactForm";
import { ContactInfo } from "@/src/components/sections/contact/ContactInfo";
import { RiTimeLine, RiStackLine, RiMagicLine } from "react-icons/ri";

export function ContactPageContent() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 z-10">
      <div className="container-max container-px">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="order-2 lg:order-1">
              <ContactForm services={services.map((s) => s.title)} />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              {/* Premium Next Step Box */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(0,229,255,0.14)] bg-[#0d1b2f] p-8 sm:p-10 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.1),transparent_50%)]" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-xs font-bold text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                    Start your project brief
                  </div>
                  
                  <h2 className="mt-6 text-3xl sm:text-4xl font-[800] leading-[1.1] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Tell us what you need and we will map the right next step.
                  </h2>
                  
                  <p className="mt-6 text-base leading-relaxed text-[rgba(197,213,232,0.7)]">
                    Share your goals, selected service, and budget range. We will reply with a practical scope, timeline, and quote.
                  </p>
                  
                  <div className="mt-10 space-y-6">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(197,213,232,0.4)]">
                      What happens next
                    </div>
                    
                    {[
                       { icon: RiTimeLine, title: "Fast response", desc: "Within 1 business day" },
                       { icon: RiStackLine, title: "Clear process", desc: "Scope, timeline, and quote" },
                       { icon: RiMagicLine, title: "Built for growth", desc: "Strategy-led recommendations" }
                     ].map((item) => (
                       <div key={item.title} className="flex items-center gap-4">
                         <div className="h-10 w-10 shrink-0 rounded-xl border border-[rgba(0,229,255,0.15)] bg-cyan/5 grid place-items-center text-cyan">
                           <item.icon className="h-5 w-5" />
                         </div>
                         <div>
                           <div className="text-sm font-bold text-white">{item.title}</div>
                           <div className="text-xs text-[rgba(197,213,232,0.5)]">{item.desc}</div>
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              <ContactInfo company={company} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

