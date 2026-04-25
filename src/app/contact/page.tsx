import { PageHero } from "@/src/components/ui/PageHero";
import { ContactPageContent } from "@/src/components/sections/contact/ContactPageContent";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Let’s Build Something" subtitle="Tell us what you need — we’ll reply quickly with a clear plan and quote." />
      <ContactPageContent />
    </>
  );
}

