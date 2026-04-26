import type { Metadata } from "next";

import { PageHero } from "@/src/components/ui/PageHero";
import { AboutContent } from "@/src/components/sections/about/AboutContent";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about TechLine Venture, a Karachi-based software and digital solutions company focused on premium design, clear communication, and fast delivery.",
  path: "/about",
  keywords: ["about TechLine Venture", "software company Karachi", "digital agency Pakistan"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="About TechLine Venture"
        subtitle="A Pakistan-based software & digital solutions company focused on premium craft and fast delivery."
      />
      <AboutContent />
    </>
  );
}
