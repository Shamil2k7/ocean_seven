"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Compass,
  ShieldCheck,
  Award
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CareersPage() {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const positionsEn = [
    {
      id: "seafood-sales-trader",
      title: "Seafood Trading Executive",
      department: "Commercial Sales",
      location: "Jeddah, Saudi Arabia",
      type: "Full-Time",
      experience: "3+ Years",
      description:
        "Develop commercial accounts with wholesale fish buyers, restaurant chains, and institutional hospitality catering across the Western Province.",
    },
    {
      id: "logistics-cold-chain-officer",
      title: "Cold Chain Logistics Coordinator",
      department: "Operations & Fleet",
      location: "Jeddah, Saudi Arabia",
      type: "Full-Time",
      experience: "2+ Years",
      description:
        "Coordinate temperature-monitored refrigerated transport, port clearance logistics, and daily scheduled delivery dispatch to commercial clients.",
    },
    {
      id: "quality-inspection-officer",
      title: "Seafood Quality & Inspection Specialist",
      department: "Quality Assurance",
      location: "Jeddah, Saudi Arabia",
      type: "Full-Time",
      experience: "2+ Years",
      description:
        "Perform receiving inspections, size grading verification, freshness assessment, and compliance documentation for incoming marine consignments.",
    },
  ];

  const positionsAr = [
    {
      id: "seafood-sales-trader",
      title: "مسؤول مبيعات وتجارة مأكولات بحرية",
      department: "المبيعات التجارية",
      location: "جدة، المملكة العربية السعودية",
      type: "دوام كامل",
      experience: "3+ سنوات",
      description:
        "تطوير وإدارة الحسابات التجارية مع كبار مشتري الأسماك بالجملة، وسلاسل المطاعم، وقطاع الضيافة في المنطقة الغربية ومناطق المملكة.",
    },
    {
      id: "logistics-cold-chain-officer",
      title: "منسق لوجستيات وسلاسل التبريد",
      department: "العمليات والأسطول",
      location: "جدة، المملكة العربية السعودية",
      type: "دوام كامل",
      experience: "2+ سنوات",
      description:
        "تنسيق النقل المبرد المجهز بأجهزة المراقبة الحرارية، وعمليات التخليص في الموانئ، وجداول الشحن والتسليم اليومي للعملاء التجاريين.",
    },
    {
      id: "quality-inspection-officer",
      title: "أخصائي جودة وفحص مأكولات بحرية",
      department: "ضمان الجودة",
      location: "جدة، المملكة العربية السعودية",
      type: "دوام كامل",
      experience: "2+ سنوات",
      description:
        "إجراء فحوصات الاستلام والإنزال، والتحقق من معايرة الأحجام والأوزان، وتقييم مستويات الطزاجة، واستيفاء الاشتراطات التنظيمية للشحنات البحرية.",
    },
  ];

  const positions = isArabic ? positionsAr : positionsEn;

  const [selectedJob, setSelectedJob] = useState(positions[0]);
  const [submitted, setSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    phone: "",
    role: positions[0].title,
    experience: isArabic ? "2-5 سنوات" : "2-5 years",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              {isArabic ? "فرص التوظيف" : "Career Opportunities"}
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              {isArabic ? "انضم إلى فريق أوشن سفن" : "Join Ocean Seven Seafood Trading"}
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {isArabic
                ? "ابنِ مسيرة مهنية مجزية في تجارة المأكولات البحرية، وعمليات سلاسل التبريد، والتوريد التجاري مع فريقنا المتميز في جدة، المملكة العربية السعودية."
                : "Build a rewarding career in seafood trading, cold-chain operations, and commercial supply with our dedicated team in Jeddah, Saudi Arabia."}
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Working Environment */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">
              {isArabic ? "نمو تجاري مستمر" : "Commercial Growth"}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {isArabic
                ? "كن جزءاً من مؤسسة رائدة في قطاع تجارة المأكولات البحرية المتنامي والمفعم بالفرص في المملكة العربية السعودية."
                : "Be part of an expanding seafood trading enterprise operating in the Kingdom of Saudi Arabia’s dynamic commercial seafood sector."}
            </p>
          </div>

          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">
              {isArabic ? "الالتزام بأعلى المعايير" : "Standards & Integrity"}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {isArabic
                ? "بيئة عمل مهنية تركز على جودة المنتج الحقيقية، والشفافية التجارية الكاملة، والعمل الجماعي البناء."
                : "A professional work environment emphasizing product integrity, transparent commercial practices, and teamwork."}
            </p>
          </div>

          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">
              {isArabic ? "خبرة في الأسواق الإقليمية" : "Regional Knowledge"}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {isArabic
                ? "اكتسب خبرات معمقة في سلاسل الإمداد البحرية العالمية، وعمليات الموانئ، وشبكات التوزيع التجاري المتطورة بالمملكة."
                : "Gain in-depth expertise in international seafood supply chains, maritime port logistics, and commercial distribution."}
            </p>
          </div>
        </div>

        {/* Available Roles & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Roles List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
                {isArabic ? "الوظائف الحالية" : "Current Openings"}
              </span>
              <h2 className="font-heading font-semibold text-2xl text-charcoal tracking-tight">
                {isArabic ? "الوظائف المتاحة في جدة" : "Available Positions in Jeddah"}
              </h2>
            </div>

            {positions.map((pos) => {
              const isSelected = selectedJob.id === pos.id;
              return (
                <div
                  key={pos.id}
                  onClick={() => {
                    setSelectedJob(pos);
                    setApplicant((prev) => ({ ...prev, role: pos.title }));
                  }}
                  className={`p-6 bg-white border rounded-xs cursor-pointer transition-all ${
                    isSelected
                      ? "border-ocean ring-1 ring-ocean shadow-xs"
                      : "border-border hover:border-ocean/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-base text-charcoal">
                      {pos.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-surface text-ocean border border-border text-[10px] font-semibold uppercase rounded-xs shrink-0">
                      {pos.department}
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-3">
                    {pos.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted border-t border-border pt-2.5">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-ocean" />
                      <span>{pos.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-ocean" />
                      <span>{pos.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-ocean" />
                      <span>{pos.experience}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 border border-border rounded-xs">
            <div className="border-b border-border pb-4 mb-4">
              <span className="text-[10px] uppercase font-semibold text-ocean tracking-wider block">
                {isArabic ? "طلب تقديم سيرة ذاتية" : "Apply for Position"}
              </span>
              <h3 className="font-heading font-semibold text-xl text-charcoal mt-0.5">
                {isArabic ? `التقديم لوظيفة: ${selectedJob.title}` : `Apply for: ${selectedJob.title}`}
              </h3>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ocean mx-auto" />
                <h4 className="font-heading font-semibold text-xl text-charcoal">
                  {isArabic ? "تم استلام طلب التقديم بنجاح" : "Application Received"}
                </h4>
                <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  {isArabic ? (
                    <>
                      شكراً لك، <span className="font-semibold text-charcoal">{applicant.name}</span>. لقد استلم فريق الموارد البشرية بشركة أوشن سفن لتجارة المأكولات البحرية بياناتك وسنتواصل معك إذا تطابقت مؤهلاتك مع متطلبات الوظيفة.
                    </>
                  ) : (
                    <>
                      Thank you, <span className="font-semibold text-charcoal">{applicant.name}</span>. Our recruitment team at Ocean Seven Seafood Trading Company has received your details and will contact you if your profile matches the role requirements.
                    </>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  {isArabic ? "تقديم طلب آخر" : "Submit Another Application"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    {isArabic ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isArabic ? "اسمك الكامل" : "Your full name"}
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "البريد الإلكتروني *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean text-start"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "رقم الهاتف / الجوال *" : "Contact Phone *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+966 ..."
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean font-mono text-start"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    {isArabic ? "سنوات الخبرة المهنية" : "Years of Relevant Experience"}
                  </label>
                  <select
                    value={applicant.experience}
                    onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  >
                    {isArabic ? (
                      <>
                        <option value="1-2 سنوات">1 - 2 سنوات</option>
                        <option value="2-5 سنوات">2 - 5 سنوات</option>
                        <option value="5-8 سنوات">5 - 8 سنوات</option>
                        <option value="أكثر من 8 سنوات">أكثر من 8 سنوات</option>
                      </>
                    ) : (
                      <>
                        <option value="1-2 years">1 - 2 years</option>
                        <option value="2-5 years">2 - 5 years</option>
                        <option value="5-8 years">5 - 8 years</option>
                        <option value="8+ years">8+ years</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    {isArabic ? "نبذة عن الخبرات والمؤهلات" : "Professional Background / Summary"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      isArabic
                        ? "اذكر نبذة موجزة عن خبراتك السابقة في تجارة المأكولات البحرية، المبيعات، أو إدارة سلاسل التبريد واللوجستيات..."
                        : "Highlight your relevant seafood, commercial sales, cold-chain, or food logistics experience..."
                    }
                    value={applicant.notes}
                    onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  <span>{isArabic ? "إرسال طلب التقديم" : "Submit Application"}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </section>

    </div>
  );
}
