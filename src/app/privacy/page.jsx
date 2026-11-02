"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
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
              {isArabic ? "سرية وأمان البيانات" : "Data Confidentiality"}
            </span>
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>
            <p className="text-xs text-muted mt-0.5">
              {isArabic
                ? "شركة أوشن سفن لتجارة المأكولات البحرية • جدة، المملكة العربية السعودية"
                : "Ocean Seven Seafood Trading Company • Jeddah, Kingdom of Saudi Arabia"}
            </p>
          </div>

          <section className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed font-normal">
            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "1. جمع المعلومات التجارية" : "1. Information Collection"}
            </h2>
            <p>
              {isArabic
                ? "نقوم بجمع تفاصيل الاستفسارات التجارية المقدمة من خلال نماذج الموقع الإلكتروني، بما في ذلك اسم جهة الاتصال، واسم المنشأة أو الشركة التجارية، والبريد الإلكتروني المؤسسي، ورقم الهاتف، وأصناف المأكولات البحرية والكميات المطلوبة."
                : "We collect commercial inquiry details submitted through our website forms, including contact name, business entity name, corporate email address, contact telephone number, and requested seafood categories or volumes."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "2. أغراض معالجة البيانات" : "2. Purpose of Processing"}
            </h2>
            <p>
              {isArabic
                ? "تُستخدم البيانات المقدمة فقط للرد على طلبات التوريد التجارية، وإعداد عروض الأسعار الرسمية لمبيعات الجملة، وتسهيل التواصل التجاري. ونحن لا نقوم ببيع أو نقل معلومات الاتصال لأي أطراف ثالثة."
                : "Your submitted data is used solely to respond to commercial sourcing requests, prepare formal wholesale quotations, and facilitate trading communications. We do not sell or transfer contact information to third parties."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "3. السرية التجارية التامة" : "3. Commercial Confidentiality"}
            </h2>
            <p>
              {isArabic
                ? "تخضع مواصفات العملاء، وطرق التقطيع الخاصة، والأسعار المستهدفة، وأحجام الشحنات لسرية تجارية صارمة تضمن حماية خصوصية ومصالح شركائنا التجاريين."
                : "Client specifications, customized cuts, target pricing, and order volumes are maintained with strict commercial confidentiality."}
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">
              {isArabic ? "4. الاستفسارات وحماية البيانات" : "4. Data Inquiries"}
            </h2>
            <p>
              {isArabic
                ? "لأي استفسارات بخصوص بيانات الاتصال أو تعديل سجلاتكم التجارية، يرجى التواصل معنا مباشرة عبر نموذج الاتصال في الموقع."
                : "For any questions regarding your inquiry records, please reach out directly through our contact form."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
