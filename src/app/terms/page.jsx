"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <div className="pt-28 pb-20 bg-surface text-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-ocean hover:text-navy font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
          <span>{isArabic ? "العودة إلى الرئيسية" : "Back to Home"}</span>
        </Link>

        <div className="bg-white p-7 sm:p-10 rounded-xs border border-border space-y-5">
          <div className="border-b border-border pb-3">
            <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-0.5">
              {isArabic ? "الشروط التجارية النظامية" : "Commercial Terms"}
            </span>
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal">
              {isArabic ? "الشروط والأحكام التجارية" : "Terms & Conditions"}
            </h1>
            <p className="text-xs text-muted mt-0.5">
              {isArabic
                ? "شركة أوشن سفن لتجارة المأكولات البحرية • جدة، المملكة العربية السعودية"
                : "Ocean Seven Seafood Trading Company • Jeddah, Kingdom of Saudi Arabia"}
            </p>
          </div>

          <section className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed font-normal">
            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "1. الاتفاقيات وعقود التوريد التجاري" : "1. Commercial Agreements"}
            </h2>
            <p>
              {isArabic
                ? "تخضع جميع مبيعات الجملة، واتفاقيات تجارة المأكولات البحرية، والتزامات التوريد المنظمة من قبل شركة أوشن سفن لتجارة المأكولات البحرية للفواتير الشكلية المعتمدة، وأوامر الشراء الرسمية، وشروط التسليم المتفق عليها بين الطرفين."
                : "All wholesale sales, seafood trading agreements, and supply commitments arranged by Ocean Seven Seafood Trading Company are subject to agreed pro-forma invoices, formal purchase orders, and mutually agreed delivery terms."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "2. الفحص والمعاينة والاستلام" : "2. Inspection & Handover"}
            </h2>
            <p>
              {isArabic
                ? "تخضع منتجات المأكولات البحرية الحساسة للتلف (الطازجة المبردة والمجمدة) للفحص والمعاينة المباشرة من قبل الجهة المستلمة فور وصول الشحنة إلى رصيف أو مستودع التسليم المحدد. ويجب إثبات أي ملاحظات على الكميات أو درجات الحرارة فور الاستلام."
                : "Perishable seafood products (chilled fresh and frozen) must be inspected by the receiving entity upon delivery at the designated bay or warehouse. Any discrepancies in quantity or temperature condition must be noted at the time of handover."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "3. الامتثال لاشتراطات سلامة الغذاء" : "3. Food Safety Compliance"}
            </h2>
            <p>
              {isArabic
                ? "تلتزم جميع عملياتنا اللوجستية ومصادر التوريد بالمعايير واللوائح المعتمدة من الهيئة العامة للغذاء والدواء (SFDA) والاشتراطات الصحية والبلدية السارية في المملكة العربية السعودية."
                : "Our operations and sourcing practices comply with applicable standards established by the Saudi Food and Drug Authority (SFDA) and relevant municipal health regulations in the Kingdom of Saudi Arabia."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "4. الاختصاص القضائي والقانون الواجب التطبيق" : "4. Jurisdiction"}
            </h2>
            <p>
              {isArabic
                ? "تخضع هذه الشروط والأحكام التجارية وتفسر وفقاً للأنظمة واللوائح التجارية المعمول بها في المملكة العربية السعودية."
                : "These commercial terms shall be governed by and interpreted under the commercial laws and regulations of the Kingdom of Saudi Arabia."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
