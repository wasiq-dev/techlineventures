import { PageHero } from "@/src/components/ui/PageHero";
import { PortfolioPageContent } from "@/src/components/sections/portfolio/PortfolioPageContent";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero kicker="Showcase" title="Our Work" subtitle="A snapshot of projects across web, mobile, e-commerce and software." />
      <PortfolioPageContent />
    </>
  );
}

