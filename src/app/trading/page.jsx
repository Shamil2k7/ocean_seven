"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Anchor, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  Fish,
  Building2 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TradingPage() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const tradingServices = [
    {
      title: isArabic ? "التوريد التجاري بالجملة" : "Commercial Wholesale Supply",
      description: isArabic
        ? "حلول توريد الكميات الكبيرة لأسواق الأسماك المركزية، وموزعي المأكولات البحرية، والشركات التجارية الإقليمية، مع ضمان أعلى معايير الجودة والفرز الموحد."
        : "Bulk supply solutions for fish markets, seafood distributors, and regional trading companies. Sourced responsibly to ensure consistent quality and sizing.",
      icon: Building2,
      features: isArabic
        ? [
            "فرز وتدريج قياسي دقيق للأحجام والأوزان",
            "تعبئة في كراتين رئيسية وطبالي تجارية معزولة",
            "فواتير تجارية واضحة وشفافية في التعامل",
            "جدولة دقيقة وموثوقة لمواعيد الشحنات",
          ]
        : [
            "Consistent size calibration and grading",
            "Bulk carton and palletized packaging",
            "Transparent commercial invoicing",
            "Reliable shipment scheduling",
          ],
    },
    {
      title: isArabic ? "توريد قطاع الضيافة والفنادق" : "Foodservice & Hospitality Provisioning",
      description: isArabic
        ? "توريدات مخصصة لمطابخ الفنادق والمطاعم الراقية وشركات الإعاشة التي تتطلب قطع فيليه وستيك طازجة أو مجمدة تلبي اشتراطات كبار الطهاة."
        : "Tailored seafood deliveries for hotel kitchens, restaurants, and institutional caterers requiring fresh or frozen cuts meeting chef specifications.",
      icon: Fish,
      features: isArabic
        ? [
            "إنزال يومي طازج وأسماك مبردة فاخرة",
            "حصص مجمدة بالتجميد السريع الفردي (IQF) لسهولة التحضير",
            "جداول تسليم صباحية دقيقة ومنتظمة",
            "مرونة تامة في أحجام الطلبات والدعم الفني",
          ]
        : [
            "Fresh daily landings & premium chilled finfish",
            "IQF frozen portions for convenient preparation",
            "Reliable morning delivery schedules",
            "Flexible order quantities and support",
          ],
    },
    {
      title: isArabic ? "اللوجستيات والنقل بسلاسل التبريد" : "Cold Chain Transport & Logistics",
      description: isArabic
        ? "خدمات لوجستية مبردة تحافظ على سلامة وجودة المأكولات البحرية من ميناء الإنزال أو التخليص الجمركي مباشرة إلى أرصفة استلام العملاء."
        : "Refrigerated logistics preserving product integrity from the port of landing or customs clearance directly to customer receiving docks.",
      icon: Truck,
      features: isArabic
        ? [
            "أسطول شاحنات مجهزة ومراقبة حرارياً",
            "حفظ مستمر لسلسلة التبريد دون انقطاع",
            "مناولة صحية فائقة واشتراطات سلامة صارمة",
            "وثائق تتبع وسجلات درجات الحرارة لكل رحلة",
          ]
        : [
            "Temperature-controlled vehicles",
            "Continuous cold preservation",
            "Proper handling and hygienic transport",
            "Traceability documentation",
          ],
    },
    {
      title: isArabic ? "التوريد العالمي وتيسير التجارة" : "Global Sourcing & Trade Facilitation",
      description: isArabic
        ? "مد جسور التواصل بين المصائد البحرية العالمية المعتمدة وسوق المأكولات البحرية المتنامي في المملكة العربية السعودية عبر ممارسات تجارية شفافة."
        : "Bridging international fisheries and producers with Saudi Arabia’s expanding culinary market through transparent trading practices.",
      icon: Anchor,
      features: isArabic
        ? [
            "استيراد الأسماك الأوقيانوسية والسلمون والتونة",
            "توريد تجاري للمحاريات والرخويات والقشريات",
            "خدمات الموانئ والدعم اللوجستي والتخليص الجمركي",
            "اتفاقيات شراكة طويلة الأجل مع كبار المنتجين",
          ]
        : [
            "Pelagic finfish, salmon, and tuna imports",
            "Commercial shellfish and cephalopods",
            "Port logistics and clearance support",
            "Long-term supplier relationships",
          ],
    },
  ];

  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              {isArabic ? "قدراتنا التجارية" : "Trading Capabilities"}
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              {isArabic ? "حلول تجارة المأكولات البحرية" : "Seafood Trading Solutions"}
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {isArabic
                ? "خدمات مهنية متكاملة لتجارة المأكولات البحرية والتوريد التجاري انطلاقاً من جدة، المملكة العربية السعودية، نربط المنتجين الموثوقين مع كبار العملاء في قطاعات الجملة والضيافة."
                : "Professional seafood trading and commercial supply services operating from Jeddah, Saudi Arabia, connecting dependable producers with culinary and wholesale customers."}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
            {isArabic ? "خدماتنا الأساسية" : "Our Core Services"}
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
            {isArabic ? "كيف تدعم أوشن سفن تجارة المأكولات البحرية" : "How Ocean Seven Facilitates Seafood Trade"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-xs bg-white border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-border">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ocean shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/contact?subject=Trading+Inquiry+for+${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors"
                  >
                    <span>{isArabic ? "طلب استفسار عن الخدمة" : "Inquire About Service"}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sourcing Photography & Quality Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block">
                {isArabic ? "مصادر التوريد" : "Trading Sourcing"}
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
                {isArabic
                  ? "مرتكزون على طزاجة المنتجات والمناولة المسؤولة"
                  : "Grounded in Product Freshness and Responsible Handling"}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {isArabic
                  ? "نؤمن بأن التجارة الموثوقة تبدأ من المصدر ذاته. تعمل أوشن سفن جنباً إلى جنب مع فرق صيد معتمدة ومنتجين دوليين يلتزمون بحصص الصيد القانونية، وبيئات التجهيز النظيفة، وبروتوكولات التبريد الصارمة فور الإنزال."
                  : "We believe that dependable trading begins at the source. Ocean Seven works alongside verified harvesting teams and international producers who respect marine quotas, maintain clean processing environments, and apply strict post-catch icing."}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                >
                  <span>{isArabic ? "تواصل مع مكتب التجارة والتعاقدات" : "Connect With Our Trading Desk"}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-surface">
                <Image
                  src="/images/editorial/company-story.jpg"
                  alt={isArabic ? "تشكيلة مأكولات بحرية في الميناء" : "Fresh seafood selection at port"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
