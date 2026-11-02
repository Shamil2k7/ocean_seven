"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, isRTL, t } = useLanguage();

  const isHome = pathname === "/";

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.trading, href: "/trading" },
    { name: t.nav.quality, href: "/#quality" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-transparent py-4 sm:py-5"
            : "bg-white/95 backdrop-blur-md border-b border-border shadow-xs py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Ocean Seven Official Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative h-10 sm:h-12 w-36 sm:w-44 flex items-center shrink-0">
                <Image
                  src={isTransparent ? "/images/ocean-seven-logo-light.png" : "/images/ocean-seven-logo.png"}
                  alt={t.footer.companyName}
                  width={180}
                  height={54}
                  className="object-contain h-full w-auto transition-opacity duration-200"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-heading font-medium tracking-wide transition-colors py-1 relative ${
                      isTransparent
                        ? isActive
                          ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-ocean"
                          : "text-white/85 hover:text-white"
                        : isActive
                        ? "text-ocean font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-ocean"
                        : "text-charcoal hover:text-ocean"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions: Language Switcher & Quote CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher isTransparent={isTransparent} />
              <Link
                href="/contact"
                className={`px-5 py-2 text-xs font-heading font-semibold rounded-full transition-all tracking-wide flex items-center gap-1.5 shadow-2xs ${
                  isTransparent
                    ? "border border-white/40 text-white hover:bg-white hover:text-navy"
                    : "bg-navy hover:bg-ocean text-white"
                }`}
              >
                <span>{t.nav.quoteBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

            {/* Mobile Header Actions (Language Toggle + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher isTransparent={isTransparent} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 focus:outline-none ${
                  isTransparent
                    ? "border-white/40 text-white bg-white/5 active:bg-white/15"
                    : "border-border text-charcoal bg-surface active:bg-border"
                }`}
                aria-label={t.nav.menu}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <span className="w-4 h-0.5 bg-current rounded-full" />
                    <span className="w-4 h-0.5 bg-current rounded-full" />
                    <span className="w-4 h-0.5 bg-current rounded-full" />
                  </div>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] sm:top-[68px] z-40 bg-white border-b border-border shadow-lg lg:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3 pb-5 border-b border-border">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-heading font-medium py-1.5 flex items-center justify-between ${
                      isActive ? "text-ocean font-semibold" : "text-charcoal hover:text-ocean"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted rtl:rotate-180" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col gap-3 text-xs">
              <LanguageSwitcher isMobile={true} />
              <span className="text-muted text-center sm:text-start">
                {lang === "ar" ? "جدة والرياض، المملكة العربية السعودية" : "Jeddah & Riyadh, Kingdom of Saudi Arabia"}
              </span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-navy hover:bg-ocean text-white text-center text-xs font-semibold rounded-full tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <span>{t.nav.quoteBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
