"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy text-white border-t border-white/10 overflow-hidden">
      {/* Subtle Ambient Rising Bubbles in Footer */}
      <UnderwaterAmbient showBubbles={true} showRays={false} bubbleCount={5} className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        
        {/* Top Company Info Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            {/* Logo on dark background */}
            <div className="bg-white p-2 rounded-xs inline-block">
              <Image
                src="/images/ocean-seven-logo.png"
                alt={isArabic ? "شركة أوشن سفن لتجارة المأكولات البحرية" : "Ocean Seven Seafood Trading Company"}
                width={160}
                height={50}
                className="object-contain h-10 w-auto"
              />
            </div>
            
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-white tracking-tight">
              {isArabic ? "شركة أوشن سفن لتجارة المأكولات البحرية" : "Ocean Seven Seafood Trading Company"}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl leading-relaxed">
              {isArabic
                ? "ملتزمون بربط المأكولات البحرية عالية الجودة بالعملاء عبر التوريد الموثوق، والتعامل التجاري الاحترافي، وحلول الإمداد المعتمدة من جدة، المملكة العربية السعودية."
                : "Dedicated to connecting quality seafood with customers through reliable sourcing, professional trading, and dependable supply solutions from Jeddah, Saudi Arabia."}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="p-5 rounded-xs bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-ocean text-xs font-heading font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{isArabic ? "العنوان التجاري المسجل" : "Registered Commercial Address"}</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                {isArabic ? (
                  <>
                    مبنى رقم 6684، شارع خالد بن الوليد،<br />
                    حي الشرفية، الرقم الفرعي 2661،<br />
                    الرمز البريدي 23216، جدة، المملكة العربية السعودية.
                  </>
                ) : (
                  <>
                    Building No. 6684, Khalid Ibn Al Waleed Street,<br />
                    Ash Sharafiyah District, Secondary Number 2661,<br />
                    Postal Code 23216, Jeddah, Kingdom of Saudi Arabia.
                  </>
                )}
              </p>
              <span className="text-[11px] text-white/50 block font-arabic pt-1">
                شركة أوشن سفن لتجارة المأكولات البحرية • جدة، المملكة العربية السعودية
              </span>
            </div>
          </div>
        </div>

        {/* Links & Navigation */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          {/* Identity */}
          <div className="space-y-2">
            <span className="font-heading font-semibold text-sm text-white">
              {isArabic ? "أوشن سفن" : "Ocean Seven"}
            </span>
            <p className="text-white/60 text-[11px] leading-relaxed">
              {isArabic
                ? "تجارة الجملة والحلول التجارية لتوريد المأكولات البحرية، نربط المصائد الساحلية والمنتجين البحريين العالميين بأسواق المملكة."
                : "Wholesale commercial seafood trading and supply solutions connecting coastal fisheries and international marine producers with Saudi markets."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-2">
              {isArabic ? "روابط التنقل" : "Navigation"}
            </span>
            <ul className="space-y-1.5 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">{t.nav.products}</Link></li>
              <li><Link href="/trading" className="hover:text-white transition-colors">{t.nav.trading}</Link></li>
              <li><Link href="/distribution" className="hover:text-white transition-colors">{t.nav.distribution}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Sourcing Categories */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-2">
              {isArabic ? "أقسام المأكولات البحرية" : "Seafood Portfolios"}
            </span>
            <ul className="space-y-1.5 text-white/70">
              <li><Link href="/products?category=Fresh+Fish" className="hover:text-white transition-colors">{isArabic ? "الأسماك الطازجة (12)" : "Fresh Fish (12)"}</Link></li>
              <li><Link href="/products?category=Frozen+Fish" className="hover:text-white transition-colors">{isArabic ? "الأسماك المجمدة (13)" : "Frozen Fish (13)"}</Link></li>
              <li><Link href="/products?category=Shrimps+%26+Prawns" className="hover:text-white transition-colors">{isArabic ? "الروبيان والجمبري (5)" : "Shrimps & Prawns (5)"}</Link></li>
              <li><Link href="/products?category=Crab+%26+Lobster" className="hover:text-white transition-colors">{isArabic ? "السلطعون والكركند (9)" : "Crab & Lobster (9)"}</Link></li>
              <li><Link href="/products?category=Shellfish" className="hover:text-white transition-colors">{isArabic ? "المحار والصدفيات (8)" : "Shellfish (8)"}</Link></li>
            </ul>
          </div>

          {/* Contact Inquiries */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-2">
              {isArabic ? "مكتب التجارة والتوريد" : "Trade Desk"}
            </span>
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              {isArabic ? (
                <>
                  جدة، المملكة العربية السعودية.<br />
                  يتم التعامل مع طلبات التوريد التجاري فورياً من قبل خبرائنا المتخصصين.
                </>
              ) : (
                <>
                  Jeddah, Kingdom of Saudi Arabia.<br />
                  Commercial sourcing inquiries handled promptly by our trading specialists.
                </>
              )}
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-ocean hover:bg-ocean-hover text-white text-xs font-semibold rounded-xs transition-colors"
            >
              {isArabic ? "إرسال طلب توريد" : "Send Sourcing Inquiry"}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <div>
            <span>
              {isArabic
                ? "حقوق النشر @2026 شركة أوشن سفن لتجارة المأكولات البحرية. جميع الحقوق محفوظة."
                : "Copyright @2026 Ocean Seven Seafood Trading Company. All rights reserved."}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white underline cursor-pointer"
            >
              {isArabic ? "العودة للأعلى ↑" : "Back to top ↑"}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
