"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid } from "lucide-react";
import categoriesData from "@/data/categories.json";

export default function CategoryShowcase({ onSelectCategory, activeCategory }) {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-surface border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Seafood Portfolio
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
              SEAFOOD CATEGORIES
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base max-w-2xl">
              Organized into eight commercial seafood divisions with verified product lines, strict cold-chain specifications, and B2B wholesale availability.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Grid className="w-4 h-4 text-ocean" />
            <span>8 Specialized Divisions • 59 Products</span>
          </div>
        </div>

        {/* Categories Grid - Large Rectangular Cards with Smooth Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category, idx) => {
            const isSelected = activeCategory && activeCategory.toLowerCase() === category.name.toLowerCase();

            const cardContent = (
              <div
                className={`reveal-on-scroll stagger-${(idx % 4) + 1} group h-full bg-white rounded-xs border transition-all duration-300 md:hover:-translate-y-[3px] flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isSelected
                    ? "border-ocean ring-1 ring-ocean shadow-md"
                    : "border-border hover:border-ocean/60 md:hover:shadow-sm"
                }`}
              >
                {/* Large Rectangular Image Container */}
                <div className="relative aspect-[16/10] bg-surface p-5 flex items-center justify-center overflow-hidden border-b border-border">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 md:group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Verified Count Badge */}
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-white text-navy border border-border rounded-xs">
                      {category.count} Products
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-charcoal group-hover:text-ocean transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-muted text-xs leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs font-heading font-semibold text-ocean group-hover:text-navy transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );

            if (onSelectCategory) {
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectCategory(category.name)}
                  className="text-left w-full h-full focus:outline-none"
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}#catalogue`}
                className="block h-full focus:outline-none"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
