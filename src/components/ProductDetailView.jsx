"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Thermometer,
  Package,
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
  Share2,
} from "lucide-react";
import ProductCard from "./ProductCard";
import ProductEnquiryModal from "./ProductEnquiryModal";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductDetailView({ product, relatedProducts }) {
  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(product);
  const [copied, setCopied] = useState(false);

  const name = isArabic && product.name_ar ? product.name_ar : product.name;
  const category = isArabic && product.category_ar ? product.category_ar : product.category;
  const status = isArabic && product.status_ar ? product.status_ar : product.status;
  const form = isArabic && product.form_ar ? product.form_ar : product.form;
  const storage = isArabic && product.storage_ar ? product.storage_ar : product.storage;
  const packaging = isArabic && product.packaging_ar ? product.packaging_ar : product.packaging;
  const origin = isArabic && product.origin_ar ? product.origin_ar : product.origin;
  const description = isArabic && product.description_ar ? product.description_ar : product.description;

  const handleEnquire = (itemToEnquire = product) => {
    setModalProduct(itemToEnquire);
    setIsModalOpen(true);
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-24 lg:pt-28 bg-white min-h-screen text-charcoal">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-surface border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted flex-wrap">
            <Link href="/" className="hover:text-ocean transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60 rtl:rotate-180" />
            <Link href="/products" className="hover:text-ocean transition-colors">
              {isArabic ? "دليل المأكولات البحرية" : "Seafood Catalogue"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60 rtl:rotate-180" />
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="hover:text-ocean transition-colors"
            >
              {category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60 rtl:rotate-180" />
            <span className="text-charcoal font-semibold truncate max-w-xs">
              {name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Large Product Image Showcase */}
            <div className="reveal-on-scroll lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] bg-surface rounded-xs border border-border overflow-hidden p-8 flex items-center justify-center shadow-xs">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  priority
                  className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Status Badge */}
                {status && (
                  <div className="absolute top-4 start-4">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white text-navy border border-border rounded-xs shadow-xs">
                      {status}
                    </span>
                  </div>
                )}

                {/* Sourcing Origin Badge */}
                <div className="absolute bottom-4 start-4 end-4 sm:end-auto bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-border rounded-xs flex items-center gap-1.5 text-xs text-charcoal">
                  <MapPin className="w-3.5 h-3.5 text-ocean shrink-0" />
                  <span className="truncate">{origin}</span>
                </div>
              </div>

              {/* Quality Guarantee Mini Strip */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <ShieldCheck className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">
                    {isArabic ? "معايير الغذاء والدواء" : "SFDA Standard"}
                  </span>
                  <span className="text-[10px] text-muted">
                    {isArabic ? "فحص جودة معتمد" : "Quality Tested"}
                  </span>
                </div>
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <Thermometer className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">
                    {isArabic ? "سلسلة تبريد متصلة" : "Cold Chain"}
                  </span>
                  <span className="text-[10px] text-muted">0°C to -18°C</span>
                </div>
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <Package className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">
                    {isArabic ? "توريد تجاري B2B" : "B2B Wholesale"}
                  </span>
                  <span className="text-[10px] text-muted">
                    {isArabic ? "كرتون رئيسي" : "Master Cartons"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Product Information */}
            <div className="reveal-on-scroll lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean">
                    {category}
                  </span>
                  
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-charcoal px-2.5 py-1 rounded-xs border border-border bg-surface transition-colors"
                    title={isArabic ? "نسخ رابط المواصفات" : "Copy specification link"}
                  >
                    <Share2 className="w-3 h-3" />
                    <span>{isArabic ? (copied ? "تم نسخ الرابط" : "مشاركة") : (copied ? "Link Copied" : "Share")}</span>
                  </button>
                </div>

                <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-charcoal tracking-tight">
                  {name}
                </h1>

                <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {/* B2B Commercial Notice */}
              <div className="p-4 bg-surface border border-border rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-muted block">
                    {isArabic ? "هيكل التسعير" : "Pricing Structure"}
                  </span>
                  <span className="font-heading font-semibold text-sm text-charcoal">
                    {isArabic ? "استفسارات الجملة والطلبات المؤسسية" : "Institutional & Wholesale Inquiries"}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 bg-white border border-border text-ocean font-semibold rounded-xs">
                  {isArabic ? "تسعير B2B" : "B2B Quotation"}
                </span>
              </div>

              {/* Commercial Specifications Table */}
              <div className="border border-border rounded-xs overflow-hidden">
                <div className="bg-surface px-4 py-2.5 border-b border-border flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold text-charcoal uppercase tracking-wider">
                    {isArabic ? "المواصفات التجارية الفنية" : "Commercial Specifications"}
                  </span>
                  <span className="text-[11px] text-muted font-mono">SPEC-ID: {product.id}</span>
                </div>

                <div className="divide-y divide-border text-xs">
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "تصنيف الصنف" : "Product Category"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{category}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "حالة التوريد" : "Supply Status"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{status}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "طريقة التجهيز / التقطيع" : "Processing Form / Cut"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{form}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "بروتوكول الحفظ والتبريد" : "Cold Storage Protocol"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{storage}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "وحدة التعبئة والتغليف" : "Packaging Unit"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{packaging}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">{isArabic ? "منطقة ومصادر التوريد" : "Sourcing Region"}</span>
                    <span className="col-span-2 font-semibold text-charcoal">{origin}</span>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => handleEnquire(product)}
                  className="w-full py-3.5 px-6 bg-navy hover:bg-ocean text-white font-heading font-semibold text-xs uppercase tracking-widest rounded-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isArabic ? "طلب معلومات وتسعير المنتج" : "Request Product Information"}</span>
                </button>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link
                    href="/contact"
                    className="flex-1 py-2.5 px-4 bg-surface hover:bg-border border border-border text-charcoal text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-ocean" />
                    <span>{isArabic ? "الاتصال بمكتب التجارة بجدة" : "Contact Jeddah Trading Desk"}</span>
                  </Link>

                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="py-2.5 px-4 bg-white hover:bg-surface border border-border text-muted hover:text-charcoal text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                    <span>{isArabic ? `العودة إلى ${category}` : `Back to ${product.category}`}</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-16 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
                  {isArabic ? "أصناف مشابهة" : "Similar Selections"}
                </span>
                <h3 className="font-heading font-semibold text-2xl text-charcoal">
                  {isArabic ? `منتجات ذات صلة في ${category}` : `Related in ${product.category}`}
                </h3>
              </div>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-semibold text-ocean hover:text-navy uppercase tracking-wider"
              >
                {isArabic
                  ? `عرض القسم (${relatedProducts.length + 1})`
                  : `View Category (${relatedProducts.length + 1})`}
              </Link>
            </div>

            <div className="product-grid">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <ProductEnquiryModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
