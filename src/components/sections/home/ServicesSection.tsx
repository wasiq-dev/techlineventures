"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { services } from "@/src/lib/data";
import * as RI from "react-icons/ri";
import Link from "next/link";
import { RiArrowRightLine, RiSparklingLine, RiArrowLeftLine, RiArrowRightSLine } from "react-icons/ri";

import type React from "react";

const iconMap = RI as unknown as Record<string, React.ComponentType<{ className?: string }>>;

const categories = [
  "ALL SERVICES",
  "DIGITAL SERVICES",
  "VIRTUAL RESOURCES",
  "EMERGING TECHNOLOGIES",
  "INDUSTRY PLANS",
];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("ALL SERVICES");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredServices = activeCategory === "ALL SERVICES" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredServices.length / cardsPerPage);

  const goPrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : totalPages - 1);
  };

  const goNext = () => {
    setCurrentIndex(prev => prev < totalPages - 1 ? prev + 1 : 0);
  };

  const currentCards = filteredServices.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  return (
    <section id="services" className="relative w-full overflow-hidden py-24 md:py-32 border-y border-[rgba(0,229,255,0.10)]">
      {/* Light-mode theme background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#eaf2f6] via-[#dbe8ee] to-[#cfe0e7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />
        <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[160px]" />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-cyan/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,22,40,0.16),transparent_55%)]" />
      </div>

      <div className="container-max container-px relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-cyan/40" />
            <div className="text-[10px] font-bold tracking-[0.3em] text-cyan uppercase">Expertise & Solutions</div>
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tighter text-[#0a1628] sm:text-6xl uppercase">
            Our <span className="text-cyan">Services</span>
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all rounded-sm ${
                  activeCategory === category
                    ? "bg-cyan text-[#0a1628] shadow-[0_16px_50px_rgba(0,229,255,0.22)]"
                    : "border border-[#0a1628]/15 bg-white/35 text-[#0a1628]/70 hover:border-cyan/40 hover:text-[#0a1628] hover:bg-white/55 backdrop-blur"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#0a1628]/10 bg-white/65 text-cyan shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:bg-white/80 hover:scale-105"
            aria-label="Previous"
          >
            <RiArrowLeftLine className="h-5 w-5" />
          </button>
          <button 
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#0a1628]/10 bg-white/65 text-cyan shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:bg-white/80 hover:scale-105"
            aria-label="Next"
          >
            <RiArrowRightSLine className="h-5 w-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {currentCards.map((service, idx) => {
                  const Icon = iconMap[service.icon] ?? RiSparklingLine;
                  return (
                    <motion.div
                      key={service.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: reduceMotion ? 0 : idx * 0.1 }}
                      className="group"
                    >
                      <Link href={`/services/${service.id}`} className="block h-full">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-[#0a1628]/10 bg-white/55 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-cyan/30 hover:shadow-[0_28px_70px_rgba(0,229,255,0.14)] hover:-translate-y-1">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.10),transparent_45%)]" />
                          {/* Icon */}
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 border border-[#0a1628]/10">
                            <Icon className="h-6 w-6 text-[#0a1628]" />
                          </div>

                          {/* Title */}
                          <h3 className="relative mt-5 text-lg font-black tracking-tight text-[#0a1628] uppercase transition-colors group-hover:text-[#0a1628]" style={{ fontFamily: "var(--font-display)" }}>
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="relative mt-3 text-sm leading-relaxed text-[#0a1628]/70 transition-colors group-hover:text-[#0a1628]/80">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="relative mt-5 flex flex-wrap gap-2">
                            {service.details.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-[#0a1628]/10 bg-white/60 px-3 py-1 text-[10px] font-bold tracking-wider text-[#0a1628]/60 transition-all group-hover:border-cyan/30 group-hover:text-[#0a1628]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Explore Link */}
                          <div className="relative mt-7 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#0a1628]/55 transition-all group-hover:text-[#0a1628]/80">
                            <span>EXPLORE SOLUTIONS</span>
                            <RiArrowRightLine className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-cyan w-6"
                    : "bg-[#0a1628]/15 hover:bg-cyan/40"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all services link */}
        <div className="mt-10 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#0a1628] hover:text-[#0a1628]/80 transition-colors uppercase"
          >
            View all services
            <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
