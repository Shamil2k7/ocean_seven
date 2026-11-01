"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fish, Snowflake, Package, ShieldCheck } from "lucide-react";

const portfolios = [
  {
    name: "Fresh & Chilled Finfish",
    focus: "Regional & Coastal Catch",
    description: "Hamour, King Fish, White Pomfret, and Sea Bream delivered fresh with strict temperature surveillance.",
    icon: Fish,
  },
  {
    name: "Imported Oceanic Species",
    focus: "International Pelagic Corridors",
    description: "Atlantic Salmon, Tuna, Dover Sole, and pelagic finfish sourced from dependable international fisheries.",
    icon: Snowflake,
  },
  {
    name: "Shrimp & Crustaceans",
    focus: "Peeled, Tail-On & Whole",
    description: "Commercial shrimp varieties, lobster, and crab handled to preserve moisture, texture, and natural flavor.",
    icon: Package,
  },
  {
    name: "Cephalopods & Shellfish",
    focus: "Foodservice & Retail Ready",
    description: "Squid rings, whole octopus, mussels, and bivalves frozen at peak quality for convenient kitchen preparation.",
    icon: ShieldCheck,
  },
];

export default function BrandShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="reveal-on-scroll max-w-2xl mb-10">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
            Trading Focus
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
            Commercial Supply Lines
          </h2>
          <p className="text-muted text-xs sm:text-sm mt-1">
            Tailored supply solutions for wholesale buyers, seafood distributors, hypermarkets, and culinary kitchens.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {portfolios.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="reveal-on-scroll p-6 rounded-xs bg-white border border-border flex flex-col justify-between hover:border-ocean/40 transition-all duration-300 md:hover:-translate-y-[2px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-charcoal mb-1">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-ocean font-medium block mb-2">
                    {item.focus}
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border">
                  <Link
                    href="/products"
                    className="text-xs text-ocean hover:text-navy font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Selections</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
