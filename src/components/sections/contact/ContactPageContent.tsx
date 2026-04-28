"use client";

import { company, services } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { ContactForm } from "@/src/components/sections/contact/ContactForm";
import { ContactInfo } from "@/src/components/sections/contact/ContactInfo";

export function ContactPageContent() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 z-10 bg-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/5 blur-[120px]" />
      </div>

      <div className="container-max container-px relative z-10">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="order-2 lg:order-1">
              <ContactForm services={services.map((s) => s.title)} />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <ContactInfo company={company} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

