import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { CursorGlow } from "@/src/components/ui/CursorGlow";
import { LenisProvider } from "@/src/components/ui/LenisProvider";
import { PageTransition } from "@/src/components/ui/PageTransition";
import { WelcomePopup } from "@/src/components/ui/WelcomePopup";
import { LoadingScreen } from "@/src/components/ui/LoadingScreen";
import { company } from "@/src/lib/data";
import { defaultOgImage, siteDescription, siteName, siteUrl } from "@/src/lib/seo";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "%s | TechLine Venture",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  keywords: [
    "TechLine Venture",
    "software house Pakistan",
    "web development company Karachi",
    "mobile app development company",
    "custom software solutions",
    "UI UX design agency",
    "SEO and digital marketing",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: defaultOgImage,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}${defaultOgImage}`,
  description: siteDescription,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.phone,
      availableLanguage: ["English", "Urdu"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${robotoMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-[#050d1f] isolate">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <CursorGlow />
        <LoadingScreen />
        <div className="relative flex min-h-screen flex-col">
          <LenisProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <div className="mt-auto">
              <Footer />
            </div>
            <WelcomePopup />
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
