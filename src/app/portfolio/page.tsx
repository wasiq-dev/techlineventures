import type { Metadata } from "next";

import { PageHero } from "@/src/components/ui/PageHero";
import { PortfolioPageContent } from "@/src/components/sections/portfolio/PortfolioPageContent";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "See selected TechLine Venture projects across web, mobile, e-commerce, software, and design to understand our delivery quality and product thinking.",
  path: "/portfolio",
  keywords: ["software portfolio", "website design portfolio", "mobile app case studies"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero kicker="Showcase" title="Our Work" subtitle="A snapshot of projects across web, mobile, e-commerce and software." />
      <PortfolioPageContent />
    </>
  );
}
