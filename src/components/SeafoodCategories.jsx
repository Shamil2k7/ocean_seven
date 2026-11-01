"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "regional-catch",
    query: "Regional+Catch",
    title: "Regional & Coastal Catch",
    tagline: "Red Sea & Regional Waters",
    description:
      "Carefully sourced whole fish, steaks, and fillets from regional coastal fisheries. High-demand commercial species including Hamour, King Fish, White Pomfret, Emperor (Sheri), and Sea Bream.",
    image: "/images/editorial/local-waters.jpg",
    specs: ["Regional coastal sourcing", "Chilled & fresh handling", "Commercial grading", "Hygienic processing"],
  },
  {
    id: "imported-seafood",
    query: "Imported",
    title: "Imported Finfish & Shellfish",
    tagline: "Global Marine Corridors",
    description:
      "Connecting dependable international producers to Saudi Arabia and regional markets. Pelagic finfish, Atlantic Salmon, Tuna, Dover Sole, and premium shellfish selections.",
    image: "/images/editorial/global-sources.jpg",
    specs: ["Global fishery partnerships", "Air & sea freight delivery", "Frozen & chilled supply", "Standardized master cartons"],
  },
  {
    id: "value-added",
    query: "Frozen+Seafood",
    title: "Commercial Frozen & Processed",
    tagline: "Ready for Foodservice",
    description:
      "Individually quick-frozen (IQF) seafood and prepared portions for hotels, restaurants, catering operations, and retail markets, ensuring convenience and consistent quality.",
    image: "/images/editorial/value-added.jpg",
    specs: ["IQF freezing methods", "Calibrated portions", "Convenient foodservice packaging", "Consistent stock availability"],
  },
];

export default function SeafoodCategories() {
  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            Sourcing Channels
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
            Reliable Seafood Sourcing & Trading
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            Ocean Seven Seafood Trading Company organizes its trading operations across three core supply categories to meet diverse culinary and wholesale demands.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-white rounded-xs border border-border overflow-hidden flex flex-col justify-between group hover:border-ocean/40 transition-colors"
            >
              <div>
                {/* Real Seafood Photography */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[11px] font-heading font-semibold text-charcoal rounded-xs border border-border">
                    0{idx + 1} • {cat.tagline}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-1.5 border-t border-border pt-4">
                    {cat.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-charcoal">
                        <span className="w-1 h-1 rounded-full bg-ocean" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Action */}
              <div className="p-6 pt-0 border-t border-border">
                <Link
                  href={`/products?category=${cat.query}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
