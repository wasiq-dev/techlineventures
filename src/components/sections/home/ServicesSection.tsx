"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/src/lib/data";
import { SectionReveal } from "@/src/components/ui/SectionReveal";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { staggerChildren, fadeUp } from "@/src/lib/animations";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#050d1f] py-24 md:py-32">
      <div className="container-max container-px">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-widest text-cyan uppercase">Services</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Everything you need to ship.
              </h2>
              <p className="mt-4 muted max-w-2xl">
                Website development, mobile apps, UX design, e-commerce, and custom systems — built fast, built right.
              </p>
            </div>
          </div>
        </SectionReveal>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren(0.1)}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <motion.div key={s.id} variants={fadeUp} className="h-full">
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
