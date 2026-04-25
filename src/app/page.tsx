import { Hero } from "@/src/components/sections/home/Hero";
import { ServicesSection } from "@/src/components/sections/home/ServicesSection";
import { WhyUs } from "@/src/components/sections/home/WhyUs";
import { PortfolioHorizontal } from "@/src/components/sections/home/PortfolioHorizontal";
import { ProcessSection } from "@/src/components/sections/home/ProcessSection";
import { Testimonials } from "@/src/components/sections/home/Testimonials";
import { CtaBanner } from "@/src/components/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <PortfolioHorizontal />
      <ProcessSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

