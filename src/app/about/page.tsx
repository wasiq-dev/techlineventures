import type { Metadata } from "next";

import { PageHero } from "@/src/components/ui/PageHero";
import { AboutContent } from "@/src/components/sections/about/AboutContent";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about TechLine Venture, a software and digital solutions company focused on premium design, clear communication, and fast delivery.",
  path: "/about",
  keywords: ["about TechLine Venture", "software company", "digital agency"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our Identity"
        title="Engineering Digital Excellence"
        subtitle="We are a global team of strategists, designers, and engineers dedicated to building high-impact digital products that scale."
      />
      <AboutContent />
    </>
  );
}
