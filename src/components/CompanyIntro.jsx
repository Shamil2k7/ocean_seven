"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";
import { useLanguage } from "@/context/LanguageContext";

export default function CompanyIntro() {
  const { lang, isRTL } = useLanguage();

  return (
    <section id="company-intro" className="relative overflow-hidden py-20 lg:py-28 bg-white border-b border-border">
      {/* Subtle Ocean Background Animation & Sliding Ocean Imagery */}
      <UnderwaterAmbient
        theme="light"
        showBubbles={true}
        bubbleCount={5}
        showRays={true}
        slidingImage={{
          src: "/images/hero/marine-life.jpg",
          alt: lang === "ar" ? "مياه المحيط والحياة البحرية" : "Marine ocean waters",
          position: isRTL ? "left" : "right",
          opacity: 0.10,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Fresh Seafood Photography */}
          <div className="lg:col-span-6 reveal-on-scroll">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-surface">
              <Image
                src="/images/editorial/fresh-catch.jpg"
                alt={lang === "ar" ? "توريد واختيار المأكولات البحرية عالية الجودة" : "Quality seafood sourcing and selection"}
                fill
                className="object-cover transition-transform duration-500 md:hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Company Information */}
          <div className="lg:col-span-6 space-y-5 reveal-on-scroll">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-heading font-semibold text-ocean">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia"}</span>
            </div>

            {/* Official Heading */}
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight leading-snug">
              {lang === "ar"
                ? "ربط المأكولات البحرية عالية الجودة بالأسواق العالمية."
                : "Connecting Quality Seafood with Global Markets."}
            </h2>

            {/* Official Core Copy */}
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {lang === "ar"
                ? "تكرس شركة أوشن سفن لتجارة المأكولات البحرية جهودها لربط أجود المأكولات البحرية بالعملاء عبر التوريد الموثوق، والتعامل التجاري الاحترافي، وحلول الإمداد المعتمدة. وانطلاقاً من مقرنا في جدة بالمملكة العربية السعودية، نهدف إلى تقديم منتجات بحرية فائقة الجودة وبناء علاقات استراتيجية راسخة مع موردينا وعملائنا."
                : "Ocean Seven Seafood Trading Company is dedicated to connecting quality seafood with customers through reliable sourcing, professional trading and dependable supply solutions. Based in Jeddah, Saudi Arabia, we aim to deliver quality seafood products while building lasting relationships with our suppliers and customers."}
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {lang === "ar"
                ? "انطلاقاً من موقعنا الاستراتيجي في مدينة جدة على ساحل البحر الأحمر، نعمل على مد جسور التعاون بين الثروات البحرية الإقليمية ومنتجي المأكولات البحرية العالميين، مما يضمن للمشترين التجاريين استلام منتجات بحرية منتقاة بعناية ومحفوظة بدرجات حرارة مثالية."
                : "Operating strategically from Jeddah on the Red Sea coast, we bridge regional marine resources with international seafood producers, ensuring that commercial buyers receive carefully selected, temperature-preserved seafood."}
            </p>

            {/* Core Trading Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-charcoal font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean shrink-0" />
                <span>{lang === "ar" ? "توريد إقليمي وعالمي موثوق" : "Reliable Regional & Global Sourcing"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean shrink-0" />
                <span>{lang === "ar" ? "انضباط صارم في درجات حرارة سلسلة التبريد" : "Cold-Chain Temperature Discipline"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean shrink-0" />
                <span>{lang === "ar" ? "توريد تجاري مهني بالجملة" : "Professional Wholesale Commercial Supply"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean shrink-0" />
                <span>{lang === "ar" ? "شراكات طويلة الأجل مع الموردين والعملاء" : "Long-Term Supplier & Client Relationships"}</span>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors"
              >
                <span>{lang === "ar" ? "تعرف أكثر على أوشن سفن" : "Learn More About Ocean Seven"}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
