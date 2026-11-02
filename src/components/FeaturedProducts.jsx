"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";
import ProductEnquiryModal from "./ProductEnquiryModal";

const categories = [
  "All",
  "Fresh Fish",
  "Frozen Fish",
  "Shrimps & Prawns",
  "Crab & Lobster",
  "Shellfish",
  "Squid & Cuttlefish",
];

export default function FeaturedProducts({
  title = "EXPLORE OUR SEAFOOD COLLECTION",
  subtitle = "Discover our selection of seafood products.",
  activeCategory: propActiveCategory,
  onSelectCategory: propOnSelectCategory,
  showCategoryTabs = true,
}) {
  const [internalCategory, setInternalCategory] = useState("All");
  const activeCategory = propActiveCategory !== undefined ? propActiveCategory : internalCategory;
  const setActiveCategory = propOnSelectCategory || setInternalCategory;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = productsData;
    const current = activeCategory.trim().toLowerCase();
    if (current !== "all") {
      list = list.filter((p) => {
        const prodCat = p.category.toLowerCase().trim();
        if (prodCat === current) return true;
        if (current === "seafood products" && prodCat === "value added seafood") return true;
        if (current === "value added seafood" && prodCat === "seafood products") return true;
        return false;
      });
    } else {
      // Show premier curated selection on homepage
      list = list.filter((p) => p.featured || ["hamour-whole", "blue-fin-tuna", "canadian-lobster", "shrimps-h-on-black-tiger", "squid-ring", "live-scallops", "king-fish-steak", "cooked-octopus-tentacles"].includes(p.id));
    }
    return list.slice(0, 8);
  }, [activeCategory]);

  const handleEnquire = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
              <span className="text-[11px] uppercase tracking-widest font-heading font-semibold text-ocean">
                Commercial Seafood Portfolio
              </span>
            </div>
            
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl lg:text-4xl text-navy tracking-tight uppercase">
              {title}
            </h2>
            
            <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-ocean text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-2xs"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Optional Category Filter Tabs (hidden when using circular CategoryShowcase navigation) */}
        {showCategoryTabs && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-xs text-xs font-heading font-medium tracking-wide transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? "bg-navy text-white font-semibold"
                    : "bg-surface text-charcoal hover:bg-border/60 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid with EXACT 2 per row on Mobile, 3 on Tablet, 4 on Desktop */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* View All Products Bottom Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface hover:bg-navy hover:text-white text-charcoal border border-border text-xs font-heading font-semibold uppercase tracking-widest rounded-xs transition-all shadow-2xs"
          >
            <span>Explore All 59 Products in Catalogue</span>
            <ArrowRight className="w-4 h-4 text-ocean" />
          </Link>
        </div>

      </div>

      {/* Enquiry Modal */}
      <ProductEnquiryModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
