"use client";

import { 
  Building2, 
  Warehouse, 
  Truck, 
  Sliders 
} from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";

const capabilities = [
  {
    icon: Building2,
    title: "Commercial Sourcing",
    description:
      "Reliable procurement from regional coastal landings and trusted international producers, ensuring regular product availability.",
  },
  {
    icon: Warehouse,
    title: "Cold-Chain Integrity",
    description:
      "Proper temperature management throughout handling, storage, and transfer to safeguard product quality and freshness.",
  },
  {
    icon: Truck,
    title: "Dependable Logistics",
    description:
      "Temperature-controlled refrigerated transport providing scheduled distribution to wholesale markets, commercial buyers, and foodservice operators.",
  },
  {
    icon: Sliders,
    title: "Tailored Supply Solutions",
    description:
      "Flexible order quantities, regular delivery schedules, and dedicated support aligned with the needs of hospitality and retail clients.",
  },
];

export default function InnovationServices() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy text-white overflow-hidden">
      {/* Subtle Ambient Caustics & Bubbles for Dark Ocean Section */}
      <UnderwaterAmbient showFish={false} showBubbles={true} showCaustics={true} bubbleCount={5} className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            Professional Trading
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Reliable Seafood Trading and Supply Solutions
          </h2>
          <p className="mt-3 text-white/75 text-sm sm:text-base leading-relaxed">
            Ocean Seven Seafood Trading Company provides dependable commercial supply solutions, combining sourcing capabilities with cold-chain care to serve customers across the Kingdom.
          </p>
        </div>

        {/* 4 Pillars Grid with Smooth Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className={`reveal-on-scroll stagger-${idx + 1} p-7 rounded-xs bg-white/5 border border-white/10 hover:border-ocean/50 transition-all duration-300 md:hover:-translate-y-[2px]`}
              >
                <div className="w-10 h-10 rounded-xs bg-white/10 text-ocean flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
