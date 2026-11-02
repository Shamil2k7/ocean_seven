"use client";

import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories.json";

const ALL_CATEGORY = {
  id: "all",
  name: "All",
  slug: "All",
  count: 59,
  image: "/images/editorial/fresh-catch.jpg",
};

const categories = [ALL_CATEGORY, ...categoriesData];

export default function CategoryShowcase({ onSelectCategory, activeCategory = "All" }) {
  // Normalize comparison to match category accurately
  const isSelected = (cat) => {
    if (!activeCategory) return cat.id === "all";
    const current = activeCategory.trim().toLowerCase();
    const name = cat.name.trim().toLowerCase();
    const id = cat.id.trim().toLowerCase();
    const alias = cat.alias?.trim().toLowerCase();

    if (current === "all" && (name === "all" || id === "all")) return true;
    if (name === current || id === current) return true;
    if (alias && alias === current) return true;

    // Cross-match Seafood Products and Value Added Seafood
    if (current === "seafood products" && (name.includes("value added") || id.includes("value-added"))) return true;
    if (current === "value added seafood" && (name.includes("seafood products") || id.includes("seafood-products"))) return true;

    return false;
  };

  const handleSelect = (categoryName) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
  };

  return (
    <nav
      id="categories"
      aria-label="Seafood categories"
      className="bg-[#F8F8F5] border-y border-[#E2E8F0] py-5 sm:py-6 lg:py-7 transition-colors select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Category Navigation Bar */}
        <div className="flex items-start justify-start lg:justify-center overflow-x-auto scrollbar-none snap-x snap-mandatory gap-4 sm:gap-6 lg:gap-7 xl:gap-8 px-2 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => {
            const active = isSelected(category);

            const itemContent = (
              <div className="group flex flex-col items-center text-center shrink-0 cursor-pointer snap-center w-[72px] sm:w-[82px] lg:w-[90px] transition-transform duration-200 hover:-translate-y-0.5">
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
                    alt={category.name}
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
                  {category.name}
                </span>
              </div>
            );

            if (onSelectCategory) {
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleSelect(category.name)}
                  aria-pressed={active}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1684C6] rounded-full"
                >
                  {itemContent}
                </button>
              );
            }

            return (
              <Link
                key={category.id}
                href={
                  category.id === "all"
                    ? "/products#catalogue"
                    : `/products?category=${encodeURIComponent(category.name)}#catalogue`
                }
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1684C6] rounded-full"
              >
                {itemContent}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
