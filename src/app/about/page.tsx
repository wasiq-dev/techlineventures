import { PageHero } from "@/src/components/ui/PageHero";
import { AboutContent } from "@/src/components/sections/about/AboutContent";

export const metadata = {
  title: "About",
};

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
