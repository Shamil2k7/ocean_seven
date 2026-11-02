"use client";

import { 
  ShieldCheck, 
  Anchor, 
  Waves, 
  MapPin, 
  Globe2, 
  Handshake 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const advantagesEn = [
    {
      number: "01",
      title: "Reliable Sourcing",
      icon: Anchor,
      summary: "Consistent marine supply connections",
      description:
        "We source from verified fisheries and suppliers, focusing on fresh catch and quality frozen seafood varieties that meet commercial standards.",
    },
    {
      number: "02",
      title: "Cold Chain Discipline",
      icon: ShieldCheck,
      summary: "Temperature-preserved handling",
      description:
        "From landing and storage to transportation, our cold-chain practices ensure that seafood remains at safe, optimal temperatures throughout the trading process.",
    },
    {
      number: "03",
      title: "Strategic Jeddah Hub",
      icon: MapPin,
      summary: "Kingdom of Saudi Arabia gateway",
      description:
        "Based in Jeddah on the Red Sea coast, Ocean Seven is strategically positioned near major maritime routes, distribution networks, and commercial markets.",
    },
    {
      number: "04",
      title: "Professional Trading",
      icon: Globe2,
      summary: "Transparent commercial solutions",
      description:
        "We conduct our business with integrity, clear specifications, and responsive communication to ensure smooth wholesale transactions for all partners.",
    },
    {
      number: "05",
      title: "Diverse Product Range",
      icon: Waves,
      summary: "Meeting varied culinary demands",
      description:
        "From whole fish and fillets to shrimp, squid, and specialty shellfish, our portfolio accommodates wholesale distributors, foodservice operators, and retail counters.",
    },
    {
      number: "06",
      title: "Lasting Partnerships",
      icon: Handshake,
      summary: "Committed to mutual success",
      description:
        "We focus on creating long-term, mutually beneficial relationships with our suppliers and clients, providing dependable supply season after season.",
    },
  ];

  const advantagesAr = [
    {
      number: "01",
      title: "توريد موثوق ومستدام",
      icon: Anchor,
      summary: "علاقات توريد بحري مستقرة",
      description:
        "نستورد من مصائد وموردين معتمدين دولياً، مع التركيز على الإنزال الطازج والأصناف المجمدة عالية الجودة المطابقة لأعلى المواصفات التجارية.",
    },
    {
      number: "02",
      title: "انضباط سلسلة التبريد",
      icon: ShieldCheck,
      summary: "مناولة وحفظ حراري فائق",
      description:
        "من ميناء الإنزال ومستودعات التخزين وحتى شاحنات النقل، تضمن ممارساتنا بقاء المأكولات البحرية عند درجات حرارة مثالية وآمنة طوال دورة التجارة والتوزيع.",
    },
    {
      number: "03",
      title: "مركز استراتيجي في جدة",
      icon: MapPin,
      summary: "بوابة المملكة العربية السعودية البحرية",
      description:
        "انطلاقاً من موقعنا في جدة على ساحل البحر الأحمر، تتمتع أوشن سفن بموقع متميز بالقرب من خطوط الملاحة الكبرى، وشبكات الطرق السريعة، والأسواق التجارية المركزية.",
    },
    {
      number: "04",
      title: "تعامل تجاري احترافي",
      icon: Globe2,
      summary: "حلول تجارية تتسم بالشفافية والوضوح",
      description:
        "ندير أعمالنا بنزاهة تامة ومواصفات فنية دقيقة وتواصل سريع يضمن سلاسة الصفقات التجارية وعمليات التوريد بالجملة لكافة شركائنا.",
    },
    {
      number: "05",
      title: "تشكيلة منتجات واسعة ومتنوعة",
      icon: Waves,
      summary: "تلبية كافة متطلبات الطهي والضيافة",
      description:
        "من الأسماك الكاملة والفيليه إلى الروبيان والحبار والصدفيات الفاخرة، تلبي محفظتنا احتياجات تجار الجملة، ومطابخ الفنادق، ومنافذ التجزئة الكبرى.",
    },
    {
      number: "06",
      title: "شراكات راسخة ومستدامة",
      icon: Handshake,
      summary: "التزام كامل بالنجاح المتبادل",
      description:
        "نركز على بناء علاقات استراتيجية طويلة الأجل ومتبادلة المنفعة مع موردينا وعملائنا، وتوفير إمدادات غذائية يمكن الاعتماد عليها موسماً بعد موسم.",
    },
  ];

  const advantages = isArabic ? advantagesAr : advantagesEn;

  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            {isArabic ? "لماذا أوشن سفن" : "Why Ocean Seven"}
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
            {isArabic
              ? "شريككم الموثوق في تجارة المأكولات البحرية عالية الجودة"
              : "A Committed Partner in Quality Seafood Trading"}
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            {isArabic
              ? "نهدف إلى تقديم أجود منتجات المأكولات البحرية وبناء علاقات راسخة مع موردينا وعملائنا في المملكة العربية السعودية والأسواق الدولية."
              : "We aim to deliver quality seafood products while building lasting relationships with our suppliers and customers across Saudi Arabia and international markets."}
          </p>
        </div>

        {/* 6-Feature Layout with Fine Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l rtl:border-l-0 rtl:border-r border-border bg-white">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.number}
                className="reveal-on-scroll p-8 border-r rtl:border-r-0 rtl:border-l border-b border-border flex flex-col justify-between hover:bg-surface/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-sm font-semibold text-muted">
                      {adv.number}
                    </span>
                    <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">
                    {adv.title}
                  </h3>
                  <span className="text-xs font-medium text-ocean block mb-3">
                    {adv.summary}
                  </span>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted font-medium uppercase tracking-wider">
                  {isArabic ? "معايير أوشن سفن المعتمدة" : "Ocean Seven Standard"}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
