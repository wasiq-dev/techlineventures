import type { Metadata } from "next";

import { PageHero } from "@/src/components/ui/PageHero";
import { ServicesPageContent } from "@/src/components/sections/services/ServicesPageContent";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Techline Venture services including website development, mobile apps, e-commerce, UI/UX design, custom software, SEO, branding, integrations, and maintenance.",
  path: "/services",
  keywords: ["software services Pakistan", "website and app development services", "custom software agency"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Our Services"
        subtitle="From websites to apps to custom business systems — built with premium UI and scalable engineering."
      />
      <ServicesPageContent />
    </>
  );
}
