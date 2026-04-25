import { PageHero } from "@/src/components/ui/PageHero";
import { ServicesPageContent } from "@/src/components/sections/services/ServicesPageContent";

export const metadata = {
  title: "Services",
};

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

