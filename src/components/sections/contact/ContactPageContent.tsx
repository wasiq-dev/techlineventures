"use client";

import { company, services } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { ContactForm } from "@/src/components/sections/contact/ContactForm";
import { ContactInfo } from "@/src/components/sections/contact/ContactInfo";

export function ContactPageContent() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 z-10">
      <div className="container-max container-px">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ContactInfo company={company} />
            <ContactForm services={services.map((s) => s.title)} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

