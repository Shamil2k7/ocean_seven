"use client";

import { useState } from "react";
import CategoryShowcase from "./CategoryShowcase";
import FeaturedProducts from "./FeaturedProducts";

export default function HomeShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      {/* Redesigned Circular Seafood Categories Navigation */}
      <CategoryShowcase
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Featured Products Showcase Filtered by Selected Category */}
      <FeaturedProducts
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        showCategoryTabs={false}
      />
    </>
  );
}
