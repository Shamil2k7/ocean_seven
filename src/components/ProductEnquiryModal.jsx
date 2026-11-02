"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductEnquiryModal({ product, isOpen, onClose }) {
  const { lang, isRTL } = useLanguage();
  const isArabic = lang === "ar";

  const [formData, setFormData] = useState({
    customerName: "",
    companyName: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const productName = isArabic && product.name_ar ? product.name_ar : product.name;
  const productCat = isArabic && product.category_ar ? product.category_ar : product.category;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white border border-border rounded-xs shadow-2xl overflow-hidden z-10 text-charcoal"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between bg-surface">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-ocean font-semibold block mb-0.5">
                {isArabic ? "استفسار عن منتج تجاري" : "Commercial Product Inquiry"}
              </span>
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-charcoal">
                {isArabic ? `طلب تسعير ومواصفات: ${productName}` : `Request Information for ${product.name}`}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xs bg-white hover:bg-border text-charcoal transition-colors border border-border"
              aria-label={isArabic ? "إغلاق" : "Close dialog"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ocean mx-auto" />
                <h4 className="font-heading font-semibold text-lg text-charcoal">
                  {isArabic ? "تم استلام الطلب بنجاح" : "Inquiry Dispatched"}
                </h4>
                <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  {isArabic ? (
                    <>
                      شكراً لكم، <span className="font-semibold text-charcoal">{formData.customerName}</span>. لقد تم استلام طلبكم الخاص بـ <span className="font-semibold text-navy">{productName}</span> من قبل مكتب التجارة والتعاقدات في جدة.
                    </>
                  ) : (
                    <>
                      Thank you, <span className="font-semibold text-charcoal">{formData.customerName}</span>. Your request for <span className="font-semibold text-navy">{product.name}</span> has been received by our Jeddah commercial trading desk.
                    </>
                  )}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-5 py-2 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  {isArabic ? "إغلاق النافذة" : "Close Window"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pre-filled Product Summary Pill */}
                <div className="p-3 bg-surface rounded-xs border border-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold">
                      {isArabic ? "المنتج المحدد:" : "Selected Product:"}
                    </span>
                    <span className="font-heading font-semibold text-charcoal text-sm">{productName}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-white text-ocean border border-border text-[10px] font-semibold uppercase rounded-xs">
                    {productCat}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "الاسم الكامل *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? "مثال: عبد الله" : "Full Name"}
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "اسم الشركة / المؤسسة *" : "Company Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? "اسم الشركة أو المنشأة" : "Business / Entity"}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "البريد الإلكتروني للعمل *" : "Business Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean text-start"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {isArabic ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+966 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean font-mono text-start"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    {isArabic ? "الكمية التقديرية المطلوبة *" : "Estimated Quantity Required *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isArabic ? "مثال: 500 كجم، 2 طن متري، شحنات أسبوعية..." : "e.g. 500 kg, 2 metric tonnes, weekly shipments..."}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    {isArabic ? "مواصفات إضافية / وجهة التسليم" : "Additional Specifications / Delivery Location"}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      isArabic
                        ? "حدد طريقة التقطيع، ومدينة التسليم في المملكة، وتفضيلات التعبئة والتغليف..."
                        : "Provide cut specifications, delivery city in Saudi Arabia, or packaging preferences..."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  <span>{isArabic ? "إرسال طلب الاستفسار" : "Transmit Product Inquiry"}</span>
                </button>

                <div className="text-[11px] text-muted text-center pt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-ocean" />
                  <span>
                    {isArabic
                      ? "استفسار تجاري B2B • سرية تجارية تامة ومضمونة"
                      : "Wholesale B2B inquiry • Commercial confidentiality assured"}
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
