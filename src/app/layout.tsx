import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { CursorGlow } from "@/src/components/ui/CursorGlow";
import { LoadingScreen } from "@/src/components/ui/LoadingScreen";
import { LenisProvider } from "@/src/components/ui/LenisProvider";
import { PageTransition } from "@/src/components/ui/PageTransition";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TechLine Venture",
    template: "%s | TechLine Venture",
  },
  description: "Building Smart Tech for Modern Businesses",
  metadataBase: new URL("https://techlineventure.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-[#050d1f] flex flex-col">
        <CursorGlow />
        <LoadingScreen />
        <LenisProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <div className="mt-auto">
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
