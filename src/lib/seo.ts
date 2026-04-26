import type { Metadata } from "next";

import { company, servicePageContent, services } from "@/src/lib/data";

export const siteName = "TechLine Venture";
export const siteUrl = "https://techlineventure.com";
export const siteDescription =
  "TechLine Venture builds premium websites, mobile apps, e-commerce platforms, custom software, UI/UX systems, and digital growth solutions for modern businesses.";
export const defaultOgImage = "/images/logo.png";

const defaultKeywords = [
  "TechLine Venture",
  "software company Pakistan",
  "website development Karachi",
  "mobile app development Pakistan",
  "custom software development",
  "UI UX design agency",
  "ecommerce development",
  "SEO services Pakistan",
] as const;

export const serviceSlugs: Record<string, string> = {
  web: "web-development",
  mobile: "mobile-app-development",
  ecommerce: "ecommerce-solutions",
  uiux: "ui-ux-design",
  software: "custom-software",
  marketing: "digital-marketing-seo",
  branding: "graphic-design-branding",
  api: "api-integrations",
  maintenance: "maintenance-support",
};

function absoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

function withDefaults(keywords?: string[]) {
  return Array.from(new Set([...defaultKeywords, ...(keywords ?? [])]));
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    keywords: withDefaults(keywords),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}

export function buildServiceMetadata(serviceId: keyof typeof servicePageContent): Metadata {
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return buildMetadata({
      title: "Services",
      description: siteDescription,
      path: "/services",
    });
  }

  const content = servicePageContent[serviceId];

  return buildMetadata({
    title: service.title,
    description: content.heroSubtitle,
    path: `/services/${serviceSlugs[serviceId] ?? serviceId}`,
    keywords: [
      service.title,
      `${service.title} Pakistan`,
      `${service.title} Karachi`,
      company.name,
    ],
  });
}

export const staticSiteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
];

export const serviceRoutes = services.map((service) => ({
  path: `/services/${serviceSlugs[service.id] ?? service.id}`,
  priority: 0.85,
  changeFrequency: "monthly" as const,
}));
