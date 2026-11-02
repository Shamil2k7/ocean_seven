"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";

export default function CompanyIntro() {
  return (
    <section id="company-intro" className="relative overflow-hidden py-20 lg:py-28 bg-white border-b border-border">
      {/* Subtle Ocean Background Animation & Sliding Ocean Imagery */}
      <UnderwaterAmbient
        theme="light"
        showFish={true}
        fishCount={2}
        showBubbles={true}
        bubbleCount={5}
        showRays={true}
        slidingImage={{
          src: "/images/hero/marine-life.jpg",
          alt: "Marine ocean waters",
          position: "right",
          opacity: 0.10,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Fresh Seafood Photography */}
          <div className="lg:col-span-6 reveal-on-scroll">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-surface">
              <Image
                src="/images/editorial/fresh-catch.jpg"
                alt="Quality seafood sourcing and selection"
                fill
                className="object-cover transition-transform duration-500 md:hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Company Information */}
          <div className="lg:col-span-6 space-y-5 reveal-on-scroll">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-heading font-semibold text-ocean">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jeddah, Saudi Arabia</span>
            </div>

            {/* Official Heading */}
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight leading-snug">
              Connecting Quality Seafood with Global Markets.
            </h2>

            {/* Official Core Copy */}
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Ocean Seven Seafood Trading Company is dedicated to connecting quality seafood with customers through reliable sourcing, professional trading and dependable supply solutions. Based in Jeddah, Saudi Arabia, we aim to deliver quality seafood products while building lasting relationships with our suppliers and customers.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Operating strategically from Jeddah on the Red Sea coast, we bridge regional marine resources with international seafood producers, ensuring that commercial buyers receive carefully selected, temperature-preserved seafood.
            </p>

            {/* Core Trading Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-charcoal font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                <span>Reliable Regional & Global Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                <span>Cold-Chain Temperature Discipline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                <span>Professional Wholesale Commercial Supply</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                <span>Long-Term Supplier & Client Relationships</span>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors"
              >
                <span>Learn More About Ocean Seven</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
