"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  UtensilsCrossed, 
  ShoppingBag, 
  Building2, 
  Globe2, 
  ArrowRight,
  Check 
} from "lucide-react";
import GlobalDistribution from "@/components/GlobalDistribution";
import { useLanguage } from "@/context/LanguageContext";

export default function DistributionPage() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const channels = [
    {
      id: "horeca",
      title: isArabic ? "الفنادق، المطاعم، وخدمات الإعاشة (HoReCa)" : "Hotel, Restaurant & Catering (HoReCa)",
      icon: UtensilsCrossed,
      description: isArabic
        ? "توريد موثوق للمأكولات البحرية لطهاة الفنادق، والمطاعم الفاخرة، ومؤسسات التموين الغذائي التي تطلب صيداً يومياً طازجاً أو حصصاً مجمدة بمعايير دقيقة."
        : "Reliable seafood provisioning for hospitality chefs, dining venues, and catering establishments requiring fresh daily catch or calibrated frozen portions.",
      features: isArabic
        ? [
            "جداول تسليم صباحية مبكرة في جدة والمدن الرئيسية",
            "أسماك كاملة طازجة وقطع فيليه وستيك جاهزة للطهي الفوري",
            "تغليف مفرغ من الهواء وحفظ فائق بالثلج والثلج المجروش",
            "تواصل مباشر ودعم عملاء مخصص وسريع الاستجابة",
          ]
        : [
            "Scheduled early deliveries in Jeddah and regional cities",
            "Fresh whole fish and chef-ready portion cuts",
            "Vacuum-sealed packaging and proper icing",
            "Responsive customer communication",
          ],
    },
    {
      id: "trading",
      title: isArabic ? "التوريد التجاري لتجارة الجملة" : "Commercial Wholesale Supply",
      icon: Building2,
      description: isArabic
        ? "كراتين تجارية بالجملة، وشحنات حاويات كاملة، وطبالي مبردة لتجار المأكولات البحرية وأسواق النفع العام والمشترين المؤسسيين."
        : "Bulk cartons, containerized shipments, and pallet supply for seafood traders, central fish markets, and institutional buyers.",
      features: isArabic
        ? [
            "أسعار تجارية تنافسية ومخصصة لطلبات الجملة",
            "معايير قياسية موحدة للفرز والأوزان والتعبئة",
            "استمرارية عالية في توفر المنتجات دون انقطاع",
            "وثائق وتراخيص تجارية وصحية رسمية كاملة",
          ]
        : [
            "Competitive wholesale commercial pricing",
            "Standardized grading, counts, and packaging",
            "Consistent product availability",
            "Clear commercial documentation",
          ],
    },
    {
      id: "retail",
      title: isArabic ? "سلاسل السوبرماركت ومنافذ التجزئة" : "Supermarket & Retail Chains",
      icon: ShoppingBag,
      description: isArabic
        ? "توفير أسماك كاملة ومأكولات بحرية مجمدة عالية الجودة مخصصة لطاولات العرض المباشر وأقسام الأسماك في كبرى الهايبرماركت."
        : "Providing quality whole fish and frozen seafood items suitable for retail display counters, fish departments, and consumer packaging.",
      features: isArabic
        ? [
            "أسماك كاملة منظفة وجاهزة للعرض الجذاب على الثلج",
            "أكياس وحصص مجمدة IQF مريحة للاستهلاك المنزلي",
            "تتبع كامل للدفعات وبطاقات بيانات واضحة",
            "جداول إمداد دورية تلبي احتياجات التجزئة المنتظمة",
          ]
        : [
            "Cleanly handled display-ready whole fish",
            "Convenient IQF frozen portions and consumer packs",
            "Batch traceability and proper labeling",
            "Regular replenishment schedules",
          ],
    },
    {
      id: "regional",
      title: isArabic ? "التوريد الإقليمي وشبكات التوزيع" : "Regional Sourcing & Distribution",
      icon: Globe2,
      description: isArabic
        ? "الربط الاستراتيجي بين مراكز الإنزال البحري على طول ساحل البحر الأحمر وممرات التجارة الدولية بشبكات التوزيع التجاري في كافة مناطق المملكة."
        : "Connecting regional marine landing centers along the Red Sea and international trade routes to commercial distribution networks across Saudi Arabia.",
      features: isArabic
        ? [
            "مركز توزيع استراتيجي انطلاقاً من ميناء جدة المركزي",
            "ممرات ومسارات نقل مبردة تغطي كافة أرجاء المملكة",
            "روابط مباشرة وسريعة مع موانئ الإنزال الساحلية",
            "تنفيذ وتلبية عقود التوريد عبر المناطق بكفاءة عالية",
          ]
        : [
            "Strategic distribution from Jeddah port hub",
            "Refrigerated transport corridors",
            "Direct connections to coastal landing ports",
            "Cross-regional supply fulfillment",
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
              {isArabic ? "شبكة سلاسل الإمداد" : "Supply Network"}
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              {isArabic ? "قنوات التوزيع وسلاسل التوريد" : "Distribution Channels"}
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {isArabic
                ? "توريد موثوق لقطاع الضيافة، وأسواق الجملة التجارية، ومنافذ التجزئة للمأكولات البحرية مع انضباط تام لسلاسل التبريد انطلاقاً من جدة، المملكة العربية السعودية."
                : "Supplying the hospitality sector, commercial wholesale markets, and retail seafood counters with dependable cold-chain handling from Jeddah, Saudi Arabia."}
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Distribution Channels */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
            {isArabic ? "القطاعات التي نخدمها" : "Sectors We Serve"}
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
            {isArabic ? "توريد متخصص للقطاعات التجارية" : "Tailored Supply For Commercial Sectors"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="p-7 sm:p-8 rounded-xs bg-white border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-surface text-ocean border border-border flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-2">
                      {isArabic ? "أبرز الإمكانيات والحلول:" : "Key Capabilities:"}
                    </span>
                    {channel.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal">
                        <Check className="w-3.5 h-3.5 text-ocean shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/contact?subject=Distribution+Inquiry+for+${encodeURIComponent(channel.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors"
                  >
                    <span>{isArabic ? "طلب استفسار عن التوريد" : "Inquire About Supply"}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global & Regional Corridors Section */}
      <GlobalDistribution />

      {/* Transport & Handling Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="p-7 sm:p-10 rounded-xs bg-white border border-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-charcoal">
              {isArabic
                ? "ملتزمون بحفظ درجات الحرارة عبر كامل سلسلة الإمداد"
                : "Committed to Temperature Preservation Across the Supply Chain"}
            </h3>
            <p className="text-muted text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              {isArabic
                ? "ننسق أسطول النقل المبرد لنضمن وصول شحنات المأكولات البحرية الطازجة والمجمدة إلى بوابات استلام منشأتكم التجارية في أفضل الظروف الحرارية المعتمدة."
                : "We coordinate refrigerated transportation to ensure that our fresh chilled and frozen seafood consignments reach your receiving bays under proper cold-chain conditions."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{isArabic ? "مناقشة متطلبات التوريد" : "Discuss Sourcing Needs"}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </section>

    </div>
  );
}
