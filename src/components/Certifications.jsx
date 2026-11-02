"use client";

import { ShieldCheck, ThermometerSnowflake, FileCheck, CheckCircle2, Award } from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";

const commitments = [
  {
    title: "Cold Chain Assurance",
    description: "Strict temperature control throughout landing, transit, and customer delivery.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Freshness & Grading",
    description: "Systematic sorting, size calibration, and freshness checks before dispatch.",
    icon: ShieldCheck,
  },
  {
    title: "Traceability & Origin",
    description: "Clear origin verification and full batch documentation for wholesale transparency.",
    icon: FileCheck,
  },
  {
    title: "Regulatory Compliance",
    description: "Committed to following Saudi Food and Drug Authority (SFDA) standards and industry best practices.",
    icon: CheckCircle2,
  },
];

export default function Certifications() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-surface border-b border-border">
      {/* Subtle Ocean Background Animation & Sliding Ocean Imagery */}
      <UnderwaterAmbient
        theme="light"
        showFish={true}
        fishCount={2}
        showBubbles={true}
        bubbleCount={4}
        showRays={true}
        slidingImage={{
          src: "/images/hero/deep-underwater.jpg",
          alt: "Deep underwater ocean background",
          position: "right",
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
            Quality Commitment
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
            Quality Standards & Handling Protocols
          </h2>
          <p className="mt-2 text-muted text-xs sm:text-sm leading-relaxed">
            At Ocean Seven Seafood Trading Company, quality is maintained through careful partner selection, strict cold-chain practices, and dedicated handling standards.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-border rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="mt-8 p-4 rounded-xs bg-white border border-border flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-charcoal">
          <span>✓ Temperature-Controlled Storage</span>
          <span>✓ Batch Traceability</span>
          <span>✓ Food Safety Protocols</span>
          <span>✓ Professional Trading Integrity</span>
        </div>

      </div>
    </section>
  );
}
