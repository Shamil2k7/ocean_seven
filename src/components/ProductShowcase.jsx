"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import productsData from "@/data/products.json";
import ProductModal from "./ProductModal";

const categories = ["All", "Regional Catch", "Imported Seafood", "Processed & Frozen"];

export default function ProductShowcase({ limit = 9, showFilter = true, title = "Seafood Product Showcase" }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="products-showcase" className="py-20 lg:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Product Portfolio
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
              Carefully sourced seafood varieties available for wholesale, foodservice, and institutional commercial trading.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors self-start md:self-end"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Bar & Search */}
        {showFilter && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-heading font-medium tracking-wide transition-colors ${
                    activeCategory === cat
                      ? "bg-navy text-white font-semibold"
                      : "bg-surface text-charcoal/80 hover:bg-border/60 border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal placeholder:text-muted focus:outline-none focus:border-ocean"
              />
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xs border border-border hover:border-ocean/50 transition-colors duration-200 flex flex-col overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] bg-surface p-6 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[180px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-103"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-white text-muted border border-border rounded-xs">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-grow border-t border-border">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-ocean font-semibold block mb-1">
                    {product.state}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal group-hover:text-ocean transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted text-[11px] truncate max-w-[170px]">
                    {product.origin}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-ocean hover:text-navy font-semibold uppercase tracking-wider text-[11px] inline-flex items-center gap-1"
                  >
                    <span>View Spec</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-12 bg-surface border border-border rounded-xs">
            <p className="text-muted text-sm">No seafood products matched your search.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-2 text-xs font-semibold text-ocean underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA for Homepage */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>

      {/* Interactive Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={(prod) => {
            window.location.href = `/contact?subject=Inquiry+about+${encodeURIComponent(prod.name)}`;
          }}
        />
      )}
    </section>
  );
}
