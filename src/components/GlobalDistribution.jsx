"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalDistribution() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const regionsEn = [
    {
      id: "jeddah",
      name: "Jeddah & Saudi Arabia",
      status: "Headquarters & Primary Trading Market",
      description: "Centrally based in Jeddah, Ash Sharafiyah District, serving wholesale fish markets, hotel chains, supermarket counters, and regional food distributors across Saudi Arabia.",
      coords: { x: "55%", y: "45%" },
      channels: ["Local Market Trading", "Hotels & Restaurants", "Supermarket Supply", "Regional Logistics"],
    },
    {
      id: "redsea",
      name: "Red Sea & Regional Waters",
      status: "Coastal Sourcing Network",
      description: "Connecting with coastal fishing communities and landing ports for fresh daily catch including Hamour, King Fish, and regional pelagic species.",
      coords: { x: "53%", y: "48%" },
      channels: ["Harbor Procurement", "Chilled Handling", "Daily Transport", "Species Grading"],
    },
    {
      id: "global",
      name: "International Sourcing Corridors",
      status: "Global Trade Connections",
      description: "Engaging dependable seafood producers in Europe, Asia, and other marine regions for imported salmon, tuna, shrimp, and specialty frozen items.",
      coords: { x: "45%", y: "30%" },
      channels: ["Commercial Import Trading", "Refrigerated Air & Sea Cargo", "Port Logistics", "Batch Verification"],
    },
  ];

  const regionsAr = [
    {
      id: "jeddah",
      name: "جدة والمملكة العربية السعودية",
      status: "المقر الرئيسي وسوق التجارة الأساسي",
      description: "انطلاقاً من المقر الرئيسي في حي الشرفية بجدة، نخدم أسواق الجملة المركزية، وسلاسل الفنادق، وأقسام الأسماك في السوبرماركت، والموزعين الإقليميين في كافة مناطق المملكة.",
      coords: { x: "55%", y: "45%" },
      channels: ["تجارة الأسواق المحلية", "الفنادق والمطاعم الراقية", "توريد سلاسل التجزئة", "اللوجستيات الإقليمية المبردة"],
    },
    {
      id: "redsea",
      name: "البحر الأحمر والمياه الإقليمية",
      status: "شبكة التوريد الساحلي المباشر",
      description: "الربط المباشر مع مجتمعات الصيد الساحلية وموانئ الإنزال لتوريد الصيد اليومي الطازج مثل الهامور والكنعد والأنواع الأوقيانوسية.",
      coords: { x: "53%", y: "48%" },
      channels: ["الشراء المباشر من المرافئ", "الحفظ المبرد على الثلج", "النقل والتوزيع اليومي", "فرز ومعايرة الأنواع"],
    },
    {
      id: "global",
      name: "ممرات التوريد الدولية",
      status: "روابط التجارة البحرية العالمية",
      description: "التعاون مع كبار منتجي المأكولات البحرية المعتمدين في أوروبا وآسيا ومصائد العالم لاستيراد السلمون والتونة والروبيان والأصناف المجمدة التخصصية.",
      coords: { x: "45%", y: "30%" },
      channels: ["استيراد وتجارة المأكولات البحرية", "شحن بحري وجوي مبرد", "الخدمات اللوجستية في الموانئ", "فحص واعتماد الدفعات والشحنات"],
    },
  ];

  const regions = isArabic ? regionsAr : regionsEn;
  const [selectedId, setSelectedId] = useState("jeddah");

  const activeRegion = regions.find((r) => r.id === selectedId) || regions[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            {isArabic ? "الممرات التجارية" : "Trading Corridors"}
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
            {isArabic
              ? "ربط التوريد الإقليمي بالتجارة البحرية العالمية"
              : "Connecting Regional Sourcing with Global Trade"}
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "انطلاقاً من مدينة جدة في المملكة العربية السعودية، تربط أوشن سفن أسواق المأكولات البحرية المحلية بكبار المنتجين والمصائد العالمية المعتمدة."
              : "Operating from Jeddah, Kingdom of Saudi Arabia, Ocean Seven connects local seafood markets with trusted international producers."}
          </p>
        </div>

        {/* Map & Corridor Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic Container */}
          <div className="lg:col-span-8 bg-surface border border-border rounded-xs p-6 sm:p-8 relative">
            <div className="relative aspect-[16/9] w-full flex items-center justify-center">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full text-border fill-current"
                aria-label={isArabic ? "خريطة التجارة والتوزيع" : "Trading and distribution map"}
              >
                {/* Continents */}
                <path d="M120,80 Q160,70 240,90 Q280,120 270,180 Q240,220 200,240 Q170,220 140,160 Z" />
                <path d="M220,270 Q270,280 280,340 Q260,420 230,450 Q200,380 210,310 Z" />
                <path d="M440,90 Q510,80 540,120 Q520,160 470,170 Q430,140 440,90 Z" />
                <path d="M460,190 Q540,190 560,260 Q540,360 490,380 Q450,300 460,190 Z" />
                <path d="M550,80 Q700,70 820,130 Q830,220 740,250 Q640,230 560,160 Z" />
                <path d="M760,320 Q840,320 860,370 Q840,420 780,410 Q740,370 760,320 Z" />

                {/* Shipping routes radiating from Jeddah (~550, 220) */}
                <g className="stroke-ocean fill-none" strokeWidth="1.2" strokeDasharray="3 3">
                  <path d="M550,220 Q510,150 480,130" />
                  <path d="M550,220 Q660,180 740,170" />
                  <path d="M550,220 Q520,260 490,300" />
                </g>

                {/* Jeddah Center Point */}
                <circle cx="550" cy="220" r="5" className="fill-ocean" />
              </svg>

              {/* Location Pins */}
              {regions.map((reg) => {
                const isSelected = activeRegion.id === reg.id;
                return (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => setSelectedId(reg.id)}
                    style={{ left: reg.coords.x, top: reg.coords.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-xs text-[10px] tracking-wider uppercase font-semibold transition-colors z-20 ${
                      isSelected
                        ? "bg-navy text-white shadow-xs"
                        : "bg-white text-charcoal border border-border hover:border-ocean"
                    }`}
                  >
                    {reg.name.split("&")[0]}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted">
              <span>
                {isArabic
                  ? "جدة، المملكة العربية السعودية • ممرات التجارة الجوية والبحرية"
                  : "Jeddah, Saudi Arabia • Maritime & Air Corridors"}
              </span>
              <span className="text-ocean font-medium">
                {isArabic ? "انقر لعرض نطاق العمليات" : "Select to view trading scope"}
              </span>
            </div>
          </div>

          {/* Region Dossier */}
          <div className="lg:col-span-4 bg-surface border border-border p-6 rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-1">
                {isArabic ? "نطاق العمليات التجارية" : "Trading Scope"}
              </span>
              <h3 className="font-heading font-semibold text-2xl text-charcoal mb-0.5">
                {activeRegion.name}
              </h3>
              <span className="text-xs text-ocean font-medium block mb-3">
                {activeRegion.status}
              </span>

              <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5">
                {activeRegion.description}
              </p>

              <div className="space-y-2 border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-wider text-charcoal font-semibold block">
                  {isArabic ? "أبرز الإمكانيات والخدمات:" : "Key Capabilities:"}
                </span>
                {activeRegion.channels.map((ch, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-charcoal">
                    <Check className="w-3.5 h-3.5 text-ocean shrink-0" />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="w-full py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold text-center block rounded-xs transition-colors"
              >
                {isArabic ? "تواصل مع فريقنا التجاري" : "Inquire With Our Team"}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
