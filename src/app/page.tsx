import type { Metadata } from "next";

import { Hero } from "@/src/components/sections/home/Hero";
import { ServicesSection } from "@/src/components/sections/home/ServicesSection";
import { WhyUs } from "@/src/components/sections/home/WhyUs";
import { PortfolioHorizontal } from "@/src/components/sections/home/PortfolioHorizontal";
import { ProcessSection } from "@/src/components/sections/home/ProcessSection";
import { Testimonials } from "@/src/components/sections/home/Testimonials";
import { CtaBanner } from "@/src/components/sections/home/CtaBanner";
import { buildMetadata, defaultOgImage, siteDescription, siteName } from "@/src/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteName,
    description: siteDescription,
    path: "/",
    keywords: [
      "TechLine Venture homepage",
      "software development agency",
      "website design and development",
      "digital solutions company",
    ],
  }),
  title: {
    absolute: siteName,
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    type: "website",
    siteName,
    images: [{ url: defaultOgImage, alt: `${siteName} logo` }],
  },
  twitter: {
    title: siteName,
    description: siteDescription,
    card: "summary_large_image",
    images: [defaultOgImage],
  },
};

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
