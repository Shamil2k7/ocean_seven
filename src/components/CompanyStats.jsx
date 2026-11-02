"use client";

import { MapPin, Fish, Package, ShieldCheck, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CompanyStats() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const pillarsEn = [
    {
      icon: MapPin,
      title: "Jeddah Headquarters",
      subtitle: "Kingdom of Saudi Arabia",
      description: "Ash Sharafiyah District, Khalid Ibn Al Waleed St.",
    },
    {
      icon: Fish,
      title: "Diverse Species",
      subtitle: "Finfish, Shellfish & Cephalopods",
      description: "Regional catch and imported commercial varieties",
    },
    {
      icon: ShieldCheck,
      title: "Quality Focus",
      subtitle: "Cold-Chain Integrity",
      description: "Temperature-controlled handling and storage",
    },
    {
      icon: Package,
      title: "Wholesale Solutions",
      subtitle: "Custom Commercial Supply",
      description: "Serving foodservice, distributors, and retail",
    },
    {
      icon: Globe2,
      title: "Global Corridors",
      subtitle: "Reliable Sourcing Networks",
      description: "Connecting producers to customers in Saudi Arabia",
    },
  ];

  const pillarsAr = [
    {
      icon: MapPin,
      title: "المقر الرئيسي في جدة",
      subtitle: "المملكة العربية السعودية",
      description: "حي الشرفية، شارع خالد بن الوليد",
    },
    {
      icon: Fish,
      title: "تنوع بحري واسع",
      subtitle: "أسماك زعانف، محاريات ورخويات",
      description: "إنزال ساحلي إقليمي وأصناف تجارية عالمية",
    },
    {
      icon: ShieldCheck,
      title: "أولوية الجودة",
      subtitle: "انضباط سلسلة التبريد",
      description: "مناولة وتخزين بدرجات حرارة مراقبة",
    },
    {
      icon: Package,
      title: "حلول مبيعات الجملة",
      subtitle: "توريد تجاري مخصص",
      description: "خدمة قطاع الضيافة، الموزعين، والتجزئة",
    },
    {
      icon: Globe2,
      title: "ممرات تجارة عالمية",
      subtitle: "شبكات توريد موثوقة",
      description: "ربط المنتجين العالميين بالعملاء في المملكة",
    },
  ];

  const pillars = isArabic ? pillarsAr : pillarsEn;

  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean 5-Pillar Operational Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`reveal-on-scroll stagger-${idx + 1} p-6 bg-surface rounded-xs border border-border text-center flex flex-col items-center justify-between transition-transform duration-300 md:hover:-translate-y-[2px]`}
              >
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-heading font-semibold text-base text-charcoal mb-0.5">
                  {item.title}
                </div>
                <div className="text-xs font-medium text-ocean mb-1">
                  {item.subtitle}
                </div>
                <div className="text-[11px] text-muted leading-tight">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
