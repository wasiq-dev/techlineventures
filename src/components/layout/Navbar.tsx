"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";

import { services } from "@/src/lib/data";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const serviceSlugs: Record<string, string> = {
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

function getServiceHref(serviceId: string) {
  return `/services/${serviceSlugs[serviceId] ?? serviceId}`;
}

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const linkRefs = useRef<Record<string, HTMLElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);
  const isHomePage = pathname === "/";
  const mobileServicesOpenEffective = open ? mobileServicesOpen : false;

  const activeHref = useMemo(() => {
    // Check main nav items first (excluding Home)
    const found = navItems.find((item) => item.href !== "/" && pathname.startsWith(item.href));
    if (found) return found.href;

    // Fallback to Home
    return "/";
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      // 1. Try to get element from our specific linkRefs
      let el = linkRefs.current[activeHref];
      
      // 2. Fallback: If ref is missing, search within the correct desktop nav
      if (!el && navRef.current) {
        const links = navRef.current.querySelectorAll('a, button');
        links.forEach(node => {
          const text = node.textContent?.trim();
          const item = navItems.find(i => i.label === text);
          if (item && item.href === activeHref) {
            el = node as HTMLElement;
          }
        });
      }

      if (!el || !navRef.current) return;

      const r = el.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      if (r.width > 0) {
        setIndicator({ 
          left: r.left - navRect.left, 
          width: r.width 
        });
      }
    };

    update();
    const timers = [
      setTimeout(update, 100),
      setTimeout(update, 400),
      setTimeout(update, 1000)
    ];

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      timers.forEach(clearTimeout);
    };
  }, [activeHref, pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    if (open) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={scrolled || !isHomePage ? "glass-nav" : "bg-transparent"}>
          <div className="container-max container-px">
            <div className="h-[88px] flex items-center justify-between">
              <Link href="/" className="flex items-center group">
                <motion.div 
                  className="relative h-20 w-52"
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="TechLine Venture"
                    fill
                    sizes="208px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>

              <nav ref={navRef} className="hidden lg:flex items-center gap-8 relative">
                {navItems.map((item) => (
                  item.label === "Services" ? (
                    <div 
                      key={item.href} 
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <button
                        ref={(node) => {
                          linkRefs.current[item.href] = node;
                        }}
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
                                href={getServiceHref(service.id)}
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
              className="absolute inset-0 flex flex-col overflow-y-auto overscroll-contain"
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

              <div className="flex-1 min-h-0">
                <div className="container-max container-px w-full py-4 pb-10 sm:py-6 sm:pb-12">
                  <div className="grid gap-4 sm:gap-5">
                    {navItems.map((item) =>
                      item.label === "Services" ? (
                        <div key={item.href} className="grid gap-3">
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen((prev) => !prev)}
                            className={`flex items-center justify-between text-left text-[28px] sm:text-4xl font-[800] tracking-tight ${
                              pathname.startsWith("/services") ? "text-cyan" : "text-white"
                            }`}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            <span>Services</span>
                            <RiArrowDownSLine
                              className={`h-8 w-8 transition-transform ${mobileServicesOpenEffective ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileServicesOpenEffective && (
                              <motion.div
                                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                                animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                                exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="grid gap-2 rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(5,13,31,0.35)] p-4 sm:p-5">
                                  <Link
                                    href="/services"
                                    onClick={() => setOpen(false)}
                                    className="rounded-2xl px-3 py-3 text-sm font-medium text-cyan"
                                  >
                                    All Services
                                  </Link>
                                  {services.map((service) => (
                                    <Link
                                      key={service.id}
                                      href={getServiceHref(service.id)}
                                      onClick={() => setOpen(false)}
                                      className="rounded-2xl px-3 py-3 text-sm text-[rgba(197,213,232,0.82)] transition hover:bg-[rgba(0,229,255,0.06)] hover:text-white"
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`text-[28px] sm:text-4xl font-[800] tracking-tight ${
                            activeHref === item.href ? "text-cyan" : "text-white"
                          }`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>

                  <div className="mt-8 sm:mt-10">
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
