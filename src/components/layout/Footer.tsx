"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiInstagramLine, RiLinkedinBoxLine, RiFacebookCircleLine } from "react-icons/ri";

import { company, services } from "@/src/lib/data";

export function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      icon: RiFacebookCircleLine,
      href: "https://www.facebook.com/profile.php?id=61566275374584&sk=photos",
    },
    {
      label: "Instagram",
      icon: RiInstagramLine,
      href: "https://www.instagram.com/techline_ventures/",
    },
    {
      label: "LinkedIn",
      icon: RiLinkedinBoxLine,
      href: "https://www.linkedin.com/company/115842913/admin/notifications/all/",
    },
  ];

  return (
    <footer className="border-t border-[rgba(0,229,255,0.10)] bg-[rgba(5,13,31,0.55)]">
      <div className="container-max container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-24 w-56 -ml-2">
              <Image
                src="/images/logo-white.png.png"
                alt="Techline Venture"
                fill
                sizes="400px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-3 muted text-sm leading-relaxed">
              Software & digital solutions built for modern businesses worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3 text-cyan">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl border border-[rgba(0,229,255,0.18)] bg-[rgba(0,229,255,0.06)]"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(0,229,255,0.12)",
                    borderColor: "rgba(0,229,255,0.4)",
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray2">Services</div>
            <ul className="mt-4 grid gap-2 text-sm">
              {services.map((s) => (
                <li key={s.id} className="text-[rgba(197,213,232,0.78)] hover:text-white transition">
                  <Link href={`/services/${s.id === 'web' ? 'web-development' : 
                          s.id === 'mobile' ? 'mobile-app-development' :
                          s.id === 'ecommerce' ? 'ecommerce-solutions' :
                          s.id === 'uiux' ? 'ui-ux-design' :
                          s.id === 'software' ? 'custom-software' :
                          s.id === 'marketing' ? 'digital-marketing-seo' :
                          s.id === 'branding' ? 'graphic-design-branding' :
                          s.id === 'api' ? 'api-integrations' :
                          s.id === 'maintenance' ? 'maintenance-support' : s.id}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-gray2">Company</div>
            <ul className="mt-4 grid gap-2 text-sm">
              <li className="text-[rgba(197,213,232,0.78)] hover:text-white transition">
                <Link href="/about">About</Link>
              </li>
              <li className="text-[rgba(197,213,232,0.78)] hover:text-white transition">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="text-[rgba(197,213,232,0.78)] hover:text-white transition">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-gray2">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-[rgba(197,213,232,0.78)]">
              <div>
                <div className="text-gray2">Email</div>
                <div>{company.email}</div>
              </div>
              <div>
                <div className="text-gray2">Address</div>
                <div className="leading-relaxed">{company.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(0,229,255,0.10)] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[rgba(197,213,232,0.72)]">
          <div>© {new Date().getFullYear()} Techline Venture. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
