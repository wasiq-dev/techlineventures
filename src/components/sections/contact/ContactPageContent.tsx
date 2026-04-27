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
              <ContactInfo company={company} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

