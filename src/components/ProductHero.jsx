"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function ProductHero({ onExploreClick }) {
  const handleScrollToCatalogue = (e) => {
    if (onExploreClick) {
      e.preventDefault();
      onExploreClick();
    } else {
      const el = document.getElementById("catalogue");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative bg-white border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Information */}
          <div className="reveal-on-scroll lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-xs">
              <span className="w-2 h-2 rounded-full bg-ocean animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean">
                Official Ocean Seven Catalogue
              </span>
            </div>

            <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-5xl text-charcoal tracking-tight leading-tight">
              EXPLORE OUR SEAFOOD COLLECTION
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Discover a selection of seafood products sourced for quality, freshness and exceptional culinary experiences.
            </p>

            {/* Quality & Trading Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-surface border border-border rounded-xs">
                <span className="block text-xs font-semibold text-charcoal">59 Verified Items</span>
                <span className="text-[11px] text-muted">Across 8 Categories</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded-xs">
                <span className="block text-xs font-semibold text-charcoal">Cold-Chain Grade</span>
                <span className="text-[11px] text-muted">Chilled & IQF Frozen</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded-xs col-span-2 sm:col-span-1">
                <span className="block text-xs font-semibold text-charcoal">B2B Wholesale</span>
                <span className="text-[11px] text-muted">Jeddah, Saudi Arabia</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#catalogue"
                onClick={handleScrollToCatalogue}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy hover:bg-ocean text-white font-heading font-semibold text-xs uppercase tracking-widest rounded-xs transition-colors shadow-xs"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface hover:bg-border text-charcoal font-heading font-semibold text-xs uppercase tracking-widest rounded-xs border border-border transition-colors"
              >
                <span>View Categories</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Seafood Photography */}
          <div className="reveal-on-scroll lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border shadow-sm bg-surface">
              <Image
                src="/images/editorial/fresh-catch.jpg"
                alt="Fresh seafood selection displayed on crushed ice"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/10 pointer-events-none" />

              {/* Floating Quality Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-xs p-3.5 border border-border rounded-xs shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-ocean shrink-0" />
                  <span>Freshness & Cold-Chain Assured</span>
                </div>
                <p className="text-[11px] text-muted mt-1 leading-snug">
                  Strict temperature control from port landing to warehouse storage in Jeddah.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
