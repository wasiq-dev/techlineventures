import type { Metadata } from "next";

import { PageHero } from "@/src/components/ui/PageHero";
import { ContactPageContent } from "@/src/components/sections/contact/ContactPageContent";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Techline Venture to discuss websites, mobile apps, software systems, branding, SEO, or ongoing support. Get a clear scope, timeline, and quote.",
  path: "/contact",
  keywords: ["contact software company", "get website development quote", "Karachi software agency contact"],
});

export default function ContactPage() {
  return (
    <main className="bg-navy">
      <PageHero kicker="Contact" title="Let’s Build Something" subtitle="Tell us what you need — we’ll reply quickly with a clear plan and quote." />
      <ContactPageContent />
    </main>
  );
}
