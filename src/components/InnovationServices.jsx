"use client";

import { 
  Building2, 
  Warehouse, 
  Truck, 
  Sliders 
} from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";
import { useLanguage } from "@/context/LanguageContext";

export default function InnovationServices() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const capabilities = [
    {
      icon: Building2,
      title: isArabic ? "التوريد التجاري المباشر" : "Commercial Sourcing",
      description: isArabic
        ? "شراء موثوق من موانئ الإنزال الساحلية الإقليمية وكبار المنتجين الدوليين المعتمدين، مما يضمن توفر المنتجات بانتظام واستقرار."
        : "Reliable procurement from regional coastal landings and trusted international producers, ensuring regular product availability.",
    },
    {
      icon: Warehouse,
      title: isArabic ? "انضباط سلسلة التبريد" : "Cold-Chain Integrity",
      description: isArabic
        ? "إدارة حرارية دقيقة في كافة مراحل المناولة والتخزين والنقل لحماية طزاجة وجودة المأكولات البحرية الطبيعية."
        : "Proper temperature management throughout handling, storage, and transfer to safeguard product quality and freshness.",
    },
    {
      icon: Truck,
      title: isArabic ? "لوجستيات نقل موثوقة" : "Dependable Logistics",
      description: isArabic
        ? "نقل مبرد ومراقب حرارياً يوفر توزيعاً مجدولاً ودقيقاً لأسواق الجملة، والمشترين التجاريين، ومؤسسات خدمات الأغذية."
        : "Temperature-controlled refrigerated transport providing scheduled distribution to wholesale markets, commercial buyers, and foodservice operators.",
    },
    {
      icon: Sliders,
      title: isArabic ? "حلول توريد مخصصة" : "Tailored Supply Solutions",
      description: isArabic
        ? "مرونة في أحجام الطلبيات، وجداول تسليم منتظمة، ودعم مستمر يتماشى مع متطلبات قطاع الضيافة وسلاسل التجزئة."
        : "Flexible order quantities, regular delivery schedules, and dedicated support aligned with the needs of hospitality and retail clients.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-navy text-white overflow-hidden">
      {/* Subtle Ambient Caustics & Bubbles for Dark Ocean Section */}
      <UnderwaterAmbient showFish={false} showBubbles={true} showCaustics={true} bubbleCount={5} className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            {isArabic ? "التجارة المهنية" : "Professional Trading"}
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            {isArabic
              ? "حلول تجارة وتوريد المأكولات البحرية الموثوقة"
              : "Reliable Seafood Trading and Supply Solutions"}
          </h2>
          <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "توفر شركة أوشن سفن لتجارة المأكولات البحرية حلول توريد تجارية معتمدة، تجمع بين قوة التوريد والانضباط الفائق لسلسلة التبريد لخدمة عملائنا في كافة مناطق المملكة."
              : "Ocean Seven Seafood Trading Company provides dependable commercial supply solutions, combining sourcing capabilities with cold-chain care to serve customers across the Kingdom."}
          </p>
        </div>

        {/* 4 Pillars Grid with Smooth Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className={`reveal-on-scroll stagger-${idx + 1} p-7 rounded-xs bg-white/5 border border-white/10 hover:border-ocean/50 transition-all duration-300 md:hover:-translate-y-[2px]`}
              >
                <div className="w-10 h-10 rounded-xs bg-white/10 text-ocean flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
