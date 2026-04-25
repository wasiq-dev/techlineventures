"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { company, services } from "@/src/lib/data";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const isHomePage = pathname === "/";

  const activeHref = useMemo(() => {
    const exact = navItems.find((i) => i.href === pathname);
    return exact?.href ?? "/";
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = linkRefs.current[activeHref];
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const r = el.getBoundingClientRect();
    const pr = parent.getBoundingClientRect();
    setIndicator({ left: r.left - pr.left, width: r.width });
  }, [activeHref, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={scrolled || !isHomePage ? "glass-nav" : "bg-transparent"}>
          <div className="container-max container-px">
            <div className="h-[76px] flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <motion.span 
                  className="relative h-10 w-24 rounded-2xl bg-[rgba(0,229,255,0.06)] overflow-hidden"
                  whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="TechLine Venture"
                    fill
                    sizes="96px"
                    className="object-contain p-1.5"
                    priority
                  />
                </motion.span>
              </Link>

              <nav className="hidden lg:flex items-center gap-8 relative">
                {navItems.map((item) => (
                  item.label === "Services" ? (
                    <div 
                      key={item.href} 
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <button
                        className={`text-sm transition ${
                          activeHref === item.href ? "text-white" : "text-[rgba(197,213,232,0.78)] hover:text-white"
                        }`}
                      >
                        Services
                      </button>
                      <AnimatePresence>
                        {servicesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-[rgba(5,13,31,0.95)] border border-[rgba(0,229,255,0.14)] rounded-2xl p-4 backdrop-blur-lg z-50"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id === 'web' ? 'web-development' : 
                                        service.id === 'mobile' ? 'mobile-app-development' :
                                        service.id === 'ecommerce' ? 'ecommerce-solutions' :
                                        service.id === 'uiux' ? 'ui-ux-design' :
                                        service.id === 'software' ? 'custom-software' :
                                        service.id === 'marketing' ? 'digital-marketing-seo' :
                                        service.id === 'branding' ? 'graphic-design-branding' :
                                        service.id === 'api' ? 'api-integrations' :
                                        service.id === 'maintenance' ? 'maintenance-support' : service.id}`}
                                className="block py-2 px-3 text-sm text-[rgba(197,213,232,0.78)] hover:text-white hover:bg-[rgba(0,229,255,0.06)] rounded-lg transition"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={(node) => {
                        linkRefs.current[item.href] = node;
                      }}
                      className={`text-sm transition ${
                        activeHref === item.href ? "text-white" : "text-[rgba(197,213,232,0.78)] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <motion.span
                  aria-hidden
                  className="absolute -bottom-3 h-[2px] rounded-full bg-cyan"
                  animate={reduceMotion ? undefined : { left: indicator.left, width: indicator.width }}
                  style={reduceMotion ? { left: indicator.left, width: indicator.width } : undefined}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <MagneticButton href="/contact" variant="outline">
                  Get a Quote
                </MagneticButton>
              </div>

              <button
                className="lg:hidden h-10 w-10 rounded-xl border border-[rgba(0,229,255,0.18)] bg-[rgba(0,229,255,0.06)] text-cyan grid place-items-center"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <RiMenu3Line className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* spacer for fixed navbar */}
      {!isHomePage && <div className="h-[76px]" aria-hidden />}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[rgba(5,13,31,0.78)] backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
            />
            <motion.aside
              className="absolute inset-0 flex flex-col"
              initial={reduceMotion ? false : { y: 20, opacity: 0 }}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container-max container-px">
                <div className="h-[76px] flex items-center justify-between">
                  <span
                    className="font-[800] tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Menu
                  </span>
                  <button
                    className="h-10 w-10 rounded-xl border border-[rgba(0,229,255,0.18)] bg-[rgba(0,229,255,0.06)] text-cyan grid place-items-center"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <RiCloseLine className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <div className="container-max container-px w-full">
                  <div className="grid gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-3xl sm:text-4xl font-[800] tracking-tight ${
                          activeHref === item.href ? "text-cyan" : "text-white"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-10">
                    <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
                      Get a Quote
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
