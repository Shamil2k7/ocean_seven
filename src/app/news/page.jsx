"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const allArticles = [
  {
    id: "seafood-market-saudi-arabia",
    category: "Market Insights",
    title: "Seafood Sourcing & Growth in Saudi Arabia's Commercial Food Sector",
    date: "Trade Bulletin",
    readTime: "4 min read",
    image: "/images/editorial/fresh-catch.jpg",
    content: `The commercial seafood landscape in the Kingdom of Saudi Arabia continues to expand rapidly, driven by the growth of hospitality resorts, urban dining centers, and increasing consumer focus on fresh marine protein.

Operating from Jeddah—Saudi Arabia's historic and commercial maritime gateway on the Red Sea—Ocean Seven Seafood Trading Company connects regional harbor landings with reliable global fishery corridors. By pairing transparent trading practices with strict cold-chain preservation, we provide wholesale buyers and culinary operators with consistent, dependable seafood supply.`,
    tags: ["Saudi Seafood", "Jeddah Trade", "Wholesale Supply", "Red Sea"],
  },
  {
    id: "cold-chain-logistics-discipline",
    category: "Quality Standards",
    title: "Cold Chain Logistics Discipline for Fresh and Frozen Seafood",
    date: "Quality Guide",
    readTime: "5 min read",
    image: "/images/editorial/value-added.jpg",
    content: `Seafood is a delicate, perishable commodity requiring uncompromised temperature surveillance from harbor landing and import clearance to receiving dock handover.

Key operational protocols enforced in our trading logistics include:
1. Continuous Sub-Zero Freezing: Ensuring deep-frozen seafood remains at or below -18°C without fluctuation to eliminate ice recrystallization.
2. Rapid Chilling: Lowering temperature immediately upon harvest to protect muscle texture, moisture retention, and delicate oceanic aroma.
3. Hygienic Separation: Transporting seafood in sealed, barrier-protected master cartons with complete batch documentation and temperature dataloggers.`,
    tags: ["Cold Chain", "Quality Assurance", "Temperature Telemetry", "Food Safety"],
  },
  {
    id: "sustainable-fisheries-supply",
    category: "Marine Sourcing",
    title: "Partnering with Sustainable Fisheries for Dependable Supply",
    date: "Sourcing Focus",
    readTime: "4 min read",
    image: "/images/editorial/local-waters.jpg",
    content: `Long-term commercial success in seafood trading depends fundamentally on ocean health and sustainable harvesting. Overexploitation of marine stocks disrupts supply predictability and harms delicate marine biomes.

Ocean Seven works with fisheries and producers that respect seasonal biological spawning periods, enforce regulated net sizes, and observe international catch quotas. This dedication protects biodiversity while ensuring our commercial clients receive stable, dependable seafood supplies year after year.`,
    tags: ["Sustainability", "Responsible Sourcing", "Marine Quotas", "Traceability"],
  },
];

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(allArticles[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Market Insights", "Quality Standards", "Marine Sourcing"];

  const filteredArticles = activeCategory === "All"
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Industry Knowledge
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Trade Insights & Articles
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Industry developments, cold-chain standards, and market perspectives from Ocean Seven Seafood Trading Company in Jeddah, Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 border-b border-border pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-heading font-medium tracking-wide rounded-xs transition-colors ${
                activeCategory === cat
                  ? "bg-navy text-white font-semibold"
                  : "bg-white text-charcoal/80 hover:bg-border/60 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        <div className="mb-14 bg-white border border-border rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
            <Image
              src={selectedArticle.image}
              alt={selectedArticle.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-7 sm:p-9 space-y-3">
            <div className="flex items-center gap-2 text-xs text-ocean font-semibold uppercase tracking-wider">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span className="text-muted">{selectedArticle.date}</span>
            </div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-charcoal leading-snug">
              {selectedArticle.title}
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
              {selectedArticle.content}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-3">
              {selectedArticle.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[11px] bg-surface text-charcoal rounded-xs border border-border">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white border border-border rounded-xs overflow-hidden cursor-pointer flex flex-col justify-between group hover:border-ocean/50 transition-colors"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 text-ocean px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-xs border border-border">
                    {art.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-muted mb-1.5">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-charcoal group-hover:text-ocean transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-muted text-xs mt-1.5 line-clamp-3 leading-relaxed">
                    {art.content}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border flex items-center justify-between text-xs text-ocean font-semibold uppercase tracking-wider">
                <span>Read Overview</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
