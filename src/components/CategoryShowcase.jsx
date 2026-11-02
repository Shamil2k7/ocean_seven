"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories.json";
import { useLanguage } from "@/context/LanguageContext";

const ALL_CATEGORY = {
  id: "all",
  name: "All",
  name_ar: "الكل",
  slug: "All",
  count: 59,
  image: "/images/editorial/fresh-catch.jpg",
};

const baseCategories = [ALL_CATEGORY, ...categoriesData];

// 2 sets of categories per track for robust coverage across all screen widths
const trackItems = [...baseCategories, ...baseCategories];

export default function CategoryShowcase({ onSelectCategory, activeCategory = "All" }) {
  const [isPaused, setIsPaused] = useState(false);
  const { lang, isRTL, t } = useLanguage();

  // Normalize comparison to match category accurately across both tracks
  const isSelected = (cat) => {
    if (!activeCategory) return cat.id === "all";
    const current = activeCategory.trim().toLowerCase();
    const name = cat.name.trim().toLowerCase();
    const nameAr = cat.name_ar?.trim().toLowerCase();
    const id = cat.id.trim().toLowerCase();
    const alias = cat.alias?.trim().toLowerCase();

    if ((current === "all" || current === "الكل") && (name === "all" || id === "all")) return true;
    if (name === current || id === current || (nameAr && nameAr === current)) return true;
    if (alias && alias === current) return true;

    // Cross-match Seafood Products and Value Added Seafood
    if (current === "seafood products" && (name.includes("value added") || id.includes("value-added"))) return true;
    if (current === "value added seafood" && (name.includes("seafood products") || id.includes("seafood-products"))) return true;
    if (current === "منتجات المأكولات البحرية" && (id.includes("seafood-products") || name.includes("value added"))) return true;

    return false;
  };

  const handleSelect = (category) => {
    if (onSelectCategory) {
      // Pass the canonical category name or Arabic name depending on current mode
      onSelectCategory(category.name);
    }
  };

  // Render an individual category item
  const renderItem = (category, uniqueKey, isAriaHidden = false) => {
    const active = isSelected(category);
    const displayName = (lang === "ar" && category.name_ar) ? category.name_ar : category.name;

    const itemContent = (
      <div className="group flex flex-col items-center text-center shrink-0 cursor-pointer w-[72px] sm:w-[82px] lg:w-[90px] transition-transform duration-200 hover:-translate-y-0.5">
        {/* Circular Seafood Photograph */}
        <div
          className={`relative w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] lg:w-[66px] lg:h-[66px] rounded-full overflow-hidden bg-white transition-all duration-200 ${
            active
              ? "border-2 border-[#1684C6] ring-2 ring-[#1684C6]/25 ring-offset-2 ring-offset-[#F8F8F5] shadow-xs"
              : "border border-[#E2E8F0] group-hover:border-[#1684C6]/60 group-hover:shadow-2xs"
          }`}
        >
          <Image
            src={category.image}
            alt={displayName}
            fill
            sizes="(max-width: 640px) 56px, (max-width: 1024px) 62px, 66px"
            className="object-cover object-center w-full h-full rounded-full transition-transform duration-300 group-hover:scale-108"
          />
        </div>

        {/* Category Name Underneath */}
        <span
          className={`mt-2 sm:mt-2.5 font-heading text-[12px] sm:text-[13px] leading-tight text-center tracking-tight transition-colors duration-200 line-clamp-2 ${
            active
              ? "text-[#1684C6] font-semibold"
              : "text-[#101F46] font-medium group-hover:text-[#1684C6]"
          }`}
        >
          {displayName}
        </span>
      </div>
    );

    if (onSelectCategory) {
      return (
        <button
          key={uniqueKey}
          type="button"
          onClick={() => handleSelect(category)}
          aria-pressed={active}
          tabIndex={isAriaHidden ? -1 : 0}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1684C6] rounded-full shrink-0"
        >
          {itemContent}
        </button>
      );
    }

    return (
      <Link
        key={uniqueKey}
        href={
          category.id === "all"
            ? "/products#catalogue"
            : `/products?category=${encodeURIComponent(category.name)}#catalogue`
        }
        tabIndex={isAriaHidden ? -1 : 0}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1684C6] rounded-full shrink-0"
      >
        {itemContent}
      </Link>
    );
  };

  return (
    <nav
      id="categories"
      aria-label={t.categories.title}
      className="relative bg-[#F8F8F5] border-y border-[#E2E8F0] py-5 sm:py-6 lg:py-7 transition-colors select-none overflow-hidden"
    >
      {/* Left & Right Subtle Soft Gradient Fade Overlays for seamless edge transitions */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#F8F8F5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#F8F8F5] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Marquee Container */}
      <div
        className={`category-marquee-container flex overflow-hidden w-full ${
          isPaused ? "is-paused" : ""
        }`}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Track 1: Primary Loop Track */}
        <div className="category-marquee-track gap-4 sm:gap-6 lg:gap-7 xl:gap-8 pr-4 sm:pr-6 lg:pr-7 xl:pr-8 rtl:pr-0 rtl:pl-4 rtl:sm:pl-6 rtl:lg:pl-7 rtl:xl:pl-8">
          {trackItems.map((category, idx) =>
            renderItem(category, `track1-${category.id}-${idx}`, false)
          )}
        </div>

        {/* Track 2: Secondary Identical Loop Track for Seamless Continuous Transition */}
        <div
          className="category-marquee-track gap-4 sm:gap-6 lg:gap-7 xl:gap-8 pr-4 sm:pr-6 lg:pr-7 xl:pr-8 rtl:pr-0 rtl:pl-4 rtl:sm:pl-6 rtl:lg:pl-7 rtl:xl:pl-8"
          aria-hidden="true"
        >
          {trackItems.map((category, idx) =>
            renderItem(category, `track2-${category.id}-${idx}`, true)
          )}
        </div>
      </div>
    </nav>
  );
}
