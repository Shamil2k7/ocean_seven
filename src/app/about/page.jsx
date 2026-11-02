"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Anchor, 
  Compass, 
  Check, 
  ArrowRight,
  MapPin
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-heading font-semibold text-ocean mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isArabic ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia"}</span>
            </div>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              {isArabic
                ? "ربط المأكولات البحرية عالية الجودة بالأسواق العالمية."
                : "Connecting Quality Seafood with Global Markets."}
            </h1>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {isArabic
                ? "تكرس شركة أوشن سفن لتجارة المأكولات البحرية جهودها لربط أجود المأكولات البحرية بالعملاء عبر التوريد الموثوق، والتعامل التجاري الاحترافي، وحلول الإمداد المعتمدة."
                : "Ocean Seven Seafood Trading Company is dedicated to connecting quality seafood with customers through reliable sourcing, professional trading and dependable supply solutions."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative - Clean Two Column */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block">
              {isArabic ? "عن شركتنا" : "About Our Company"}
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              {isArabic
                ? "ملتزمون بالتوريد الموثوق وبناء شراكات تجارية مستدامة"
                : "Dedicated to Reliable Sourcing and Lasting Commercial Partnerships"}
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {isArabic
                ? "انطلاقاً من مقرنا في جدة بالمملكة العربية السعودية، نهدف إلى تقديم منتجات بحرية عالية الجودة مع بناء علاقات راسخة مع موردينا وعملائنا. ويتيح لنا تواجدنا الاستراتيجي في مدينة الميناء التجاري الأولى بالمملكة الربط الفعال بين مصائد الصيد الساحلية ومراكز الإنتاج البحري العالمية."
                : "Based in Jeddah, Saudi Arabia, we aim to deliver quality seafood products while building lasting relationships with our suppliers and customers. Our strategic presence in the Kingdom’s primary commercial port city allows us to bridge regional marine harvests with global seafood production centers."}
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {isArabic
                ? "نركز على سلامة وجودة المنتجات، والوضوح التام في الشروط التجارية، والانضباط الصارم لدرجات حرارة سلاسل التبريد. وسواء كنا نلبي عقود الجملة الدورية لقطاع الضيافة وخدمات الأغذية أو نوفر أصنافاً خاصة لسلاسل التجزئة، يضع فريقنا معايير الطزاجة والتجانس والأداء الاحترافي على رأس أولوياته."
                : "We focus on product integrity, clear commercial terms, and cold-chain temperature management. Whether fulfilling regular wholesale contracts for foodservice operators or supplying specific retail species, our team prioritizes freshness, consistency, and professional execution."}
            </p>

            <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <span className="font-heading font-semibold text-lg text-navy">
                  {isArabic ? "جدة، السعودية" : "Jeddah, KSA"}
                </span>
                <span className="block text-xs text-muted mt-0.5">
                  {isArabic ? "المقر الرئيسي التجاري" : "Commercial Headquarters"}
                </span>
              </div>
              <div>
                <span className="font-heading font-semibold text-lg text-ocean">
                  {isArabic ? "محفظة شاملة" : "Comprehensive"}
                </span>
                <span className="block text-xs text-muted mt-0.5">
                  {isArabic ? "منتجات طازجة ومجمدة" : "Fresh & Frozen Portfolio"}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-white">
              <Image
                src="/images/editorial/fresh-catch.jpg"
                alt={isArabic ? "توريد ومناولة المأكولات البحرية الطازجة" : "Fresh seafood sourcing and handling"}
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
              {isArabic ? "التزاماتنا" : "Our Commitments"}
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              {isArabic ? "ركائز التجارة وقيم التوريد" : "Trading Pillars & Sourcing Values"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sourcing */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                  {isArabic ? "توريد موثوق" : "Reliable Sourcing"}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {isArabic
                    ? "اختيار دقيق للمصائد والمنتجين المعتمدين لضمان استمرارية الإمداد التجاري ومطابقة أدق مواصفات العملاء."
                    : "Carefully identifying dependable fisheries and producers to ensure consistent commercial supply that meets client specifications."}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                {isArabic ? "موثوقية الموردين" : "Supplier Integrity"}
              </div>
            </div>

            {/* Quality */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                  {isArabic ? "معايير الجودة" : "Quality Standards"}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {isArabic
                    ? "الالتزام التام بالمراقبة الحرارية المستمرة وبروتوكولات النظافة الفائقة لحماية قوام ونكهة المأكولات البحرية الطبيعية."
                    : "Adhering to strict temperature monitoring and hygienic handling protocols to protect natural seafood texture and flavor."}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                {isArabic ? "انضباط سلسلة التبريد" : "Cold-Chain Care"}
              </div>
            </div>

            {/* Relationships */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                  {isArabic ? "شراكات طويلة الأجل" : "Long-Term Partnerships"}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {isArabic
                    ? "بناء علاقات متينة مع موردينا وعملائنا ترتكز على الشفافية والتعامل التجاري السريع والالتزام بالمواعيد."
                    : "Building lasting relationships with our suppliers and customers through transparency, responsive trading, and dependable delivery."}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                {isArabic ? "نمو ونجاح مشترك" : "Mutual Growth"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Operations Highlight */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-white">
              <Image
                src="/images/editorial/fishing-vessel.jpg"
                alt={isArabic ? "سفن الصيد ونقل المأكولات البحرية" : "Seafood transportation and sourcing vessels"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block">
              {isArabic ? "العمليات التجارية" : "Trading Execution"}
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              {isArabic
                ? "التوريد، التجهيز، والخدمات اللوجستية المبردة"
                : "Sourcing, Processing, and Cold-Chain Logistics"}
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {isArabic
                ? "من الإنزال الساحلي الطازج إلى الشحن البحري والجوي بالحاويات، تنسق أوشن سفن الخطوات اللوجستية اللازمة لإيصال المأكولات البحرية مباشرة إلى أرصفة الاستلام التجارية في جدة ومختلف مناطق المملكة."
                : "From fresh coastal landings to containerized sea and air freight, Ocean Seven coordinates the required logistics steps to bring seafood directly to commercial receiving docks in Jeddah and across the Kingdom."}
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? "نقل مبرد يحافظ على درجات حرارة التجميد والتبريد المعتمدة بدقة."
                    : "Refrigerated transport maintaining sub-zero and chilled parameters."}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? "توريد من مصائد ساحلية إقليمية موثوقة ومزارع بحرية دولية معتمدة."
                    : "Sourcing from trusted regional coastal catch and international fisheries."}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? "فواتير تجارية واضحة، ووثائق نظامية كاملة، ودعم عملاء متجاوب."
                    : "Clear commercial invoicing, documentation, and prompt customer support."}
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
              >
                <span>{isArabic ? "عرض كتالوج المنتجات" : "View Products Catalog"}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
