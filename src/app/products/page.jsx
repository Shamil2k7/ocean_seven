"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, RotateCcw, Fish, ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";
import ProductHero from "@/components/ProductHero";
import CategoryShowcase from "@/components/CategoryShowcase";
import ProductCard from "@/components/ProductCard";
import ProductEnquiryModal from "@/components/ProductEnquiryModal";
import { useLanguage } from "@/context/LanguageContext";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const { lang, isRTL, t } = useLanguage();
  const isArabic = lang === "ar";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    const el = document.getElementById("catalogue");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquire = (product) => {
    setSelectedEnquiryProduct(product);
    setIsModalOpen(true);
  };

  // Filter products by category, search term, and status
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const currentCat = (activeCategory || "").toLowerCase().trim();
      const prodCatEn = (product.category || "").toLowerCase().trim();
      const prodCatAr = (product.category_ar || "").toLowerCase().trim();

      const matchesCategory =
        currentCat === "all" ||
        currentCat === "الكل" ||
        prodCatEn === currentCat ||
        prodCatAr === currentCat ||
        ((currentCat === "seafood products" || currentCat === "منتجات المأكولات البحرية") &&
          (prodCatEn.includes("value added") || prodCatEn.includes("seafood products"))) ||
        (currentCat === "value added seafood" &&
          (prodCatEn.includes("seafood products") || prodCatEn.includes("value added")));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.name_ar && product.name_ar.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query) ||
        (product.category_ar && product.category_ar.toLowerCase().includes(query)) ||
        (product.origin && product.origin.toLowerCase().includes(query)) ||
        (product.origin_ar && product.origin_ar.toLowerCase().includes(query)) ||
        (product.form && product.form.toLowerCase().includes(query)) ||
        (product.form_ar && product.form_ar.toLowerCase().includes(query));

      const matchesStatus =
        statusFilter === "All" ||
        statusFilter === "الكل" ||
        (statusFilter === "Fresh" && product.status?.toLowerCase().includes("fresh")) ||
        (statusFilter === "طازج" && (product.status?.toLowerCase().includes("fresh") || product.status_ar?.includes("طازج"))) ||
        (statusFilter === "Frozen" && product.status?.toLowerCase().includes("frozen")) ||
        (statusFilter === "مجمد" && (product.status?.toLowerCase().includes("frozen") || product.status_ar?.includes("مجمد")));

      return matchesCategory && matchesSearch && matchesStatus;
    });
  }, [activeCategory, searchQuery, statusFilter]);

  const conditionOptions = isArabic
    ? [
        { id: "All", label: "الكل" },
        { id: "Fresh", label: "طازج" },
        { id: "Frozen", label: "مجمد" },
      ]
    : [
        { id: "All", label: "All" },
        { id: "Fresh", label: "Fresh" },
        { id: "Frozen", label: "Frozen" },
      ];

  return (
    <div className="bg-white text-charcoal min-h-screen">
      {/* 1. Dedicated Product Hero Section */}
      <ProductHero
        onExploreClick={() => {
          const el = document.getElementById("catalogue");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 2. Visual Seafood Categories Showcase */}
      <CategoryShowcase
        onSelectCategory={handleCategorySelect}
        activeCategory={activeCategory}
      />

      {/* 3. Product Catalogue & Filtering System */}
      <section id="catalogue" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Description */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
              {isArabic ? "البحث في الكتالوج والاستفسارات" : "Catalogue Search & Inquiries"}
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              {isArabic ? "دليل المأكولات البحرية التجاري" : "COMMERCIAL SEAFOOD DIRECTORY"}
            </h2>
          </div>

          <div className="text-xs text-muted">
            {isArabic ? (
              <>
                عرض <span className="font-semibold text-charcoal">{filteredProducts.length}</span> من أصل 59 مواصفة تجارية معتمدة
              </>
            ) : (
              <>
                Displaying <span className="font-semibold text-charcoal">{filteredProducts.length}</span> of 59 verified specifications
              </>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="reveal-on-scroll bg-surface p-4 sm:p-5 rounded-xs border border-border mb-8 space-y-4">
          
          {/* Top Row: Search and Status Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-muted absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={
                  isArabic
                    ? "ابحث بالصنف، التقطيع، المنشأ (مثال: هامور، كنعد، البحر الأحمر)..."
                    : "Search by species, cut, origin (e.g., Hamour, King Fish, Red Sea)..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-9 pe-3 py-2 text-xs bg-white border border-border rounded-xs text-charcoal placeholder:text-muted focus:outline-none focus:border-ocean transition-colors"
              />
            </div>

            {/* Status Quick Filter Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs">
              <span className="text-muted text-[11px] font-medium me-1">
                {isArabic ? "الحالة:" : "Condition:"}
              </span>
              {conditionOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStatusFilter(opt.id)}
                  className={`px-3 py-1 rounded-xs text-xs font-semibold transition-colors ${
                    statusFilter === opt.id
                      ? "bg-navy text-white"
                      : "bg-white text-muted hover:text-charcoal border border-border"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Indicators Bar */}
          {(activeCategory !== "All" && activeCategory !== "الكل" || searchQuery || statusFilter !== "All") && (
            <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted text-[11px]">{isArabic ? "الفلاتر النشطة:" : "Active Filter:"}</span>
                {activeCategory !== "All" && activeCategory !== "الكل" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-ocean/10 text-ocean border border-ocean/20 rounded-xs font-semibold">
                    <span>{isArabic ? "القسم: " : "Category: "}{activeCategory}</span>
                    <button
                      type="button"
                      onClick={() => setActiveCategory("All")}
                      aria-label="Clear category filter"
                      className="hover:text-navy font-bold leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
                {statusFilter !== "All" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-navy/10 text-navy border border-navy/20 rounded-xs font-semibold">
                    <span>
                      {isArabic ? "الحالة: " : "Condition: "}
                      {conditionOptions.find((o) => o.id === statusFilter)?.label || statusFilter}
                    </span>
                    <button
                      type="button"
                      onClick={() => setStatusFilter("All")}
                      aria-label="Clear condition filter"
                      className="hover:text-ocean font-bold leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-surface text-charcoal border border-border rounded-xs font-medium">
                    <span>&ldquo;{searchQuery}&rdquo;</span>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search query"
                      className="hover:text-ocean font-bold leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                  setStatusFilter("All");
                }}
                className="flex items-center gap-1.5 px-2 py-1 text-xs text-ocean hover:text-navy font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 rtl:rotate-180" />
                <span>{isArabic ? "إعادة تعيين الفلاتر" : "Reset All Filters"}</span>
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid - Exactly 2 per row on Mobile, 3 on Tablet, 4 on Desktop */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-surface border border-border rounded-xs px-4">
            <Fish className="w-10 h-10 text-muted/50 mx-auto mb-3" />
            <h3 className="text-charcoal font-heading font-semibold text-lg">
              {isArabic ? "لم يتم العثور على منتجات مطابقة لاختيارك" : "No seafood items matched your selection"}
            </h3>
            <p className="text-muted text-xs sm:text-sm mt-1 max-w-md mx-auto">
              {isArabic
                ? "يرجى تجربة تعديل كلمات البحث أو اختيار قسم مأكولات بحرية آخر."
                : "Try clearing your search terms or choosing another seafood category."}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
                setStatusFilter("All");
              }}
              className="mt-4 px-5 py-2 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
            >
              {isArabic ? "عرض جميع المنتجات الـ 59" : "View All 59 Products"}
            </button>
          </div>
        )}

        {/* B2B Institutional Wholesale Callout */}
        <div className="mt-16 p-8 bg-surface border border-border rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-semibold text-ocean tracking-wider block mb-1">
              {isArabic ? "مكتب التجارة بجدة" : "Jeddah Trading Desk"}
            </span>
            <h3 className="font-heading font-semibold text-xl text-charcoal">
              {isArabic
                ? "هل تحتاج إلى شحنات حاويات كاملة أو مواصفات خاصة؟"
                : "Need Container Shipments or Specific Custom Specifications?"}
            </h3>
            <p className="text-muted text-xs sm:text-sm mt-1 max-w-xl">
              {isArabic
                ? "تنسق أوشن سفن عمليات التوصيل المبرد المخصص، والتعبئة في كراتين رئيسية، وتوريد المأكولات البحرية المخصصة لقطاعات الإعاشة وسلاسل التجزئة."
                : "Ocean Seven coordinates dedicated cold-chain deliveries, master-carton packaging, and custom seafood procurement for catering groups and retail distributors."}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-widest font-heading font-semibold rounded-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{isArabic ? "طلب استشارة توريد" : "Request Trade Consultation"}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

      </section>

      {/* Product Enquiry Modal */}
      <ProductEnquiryModal
        product={selectedEnquiryProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default function ProductsPage() {
  const { lang } = useLanguage();
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-20 text-center text-charcoal">
          <div className="w-6 h-6 border-2 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted">
            {lang === "ar" ? "جاري تحميل كتالوج أوشن سفن..." : "Loading Ocean Seven Catalogue..."}
          </p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
