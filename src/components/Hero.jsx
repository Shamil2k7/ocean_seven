"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Snowflake,
  Globe2,
  Truck,
} from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";

export default function Hero() {
  return (
    <>
      <section className="hero relative w-full md:min-h-[680px] lg:h-[780px] xl:h-[820px] flex flex-col justify-between bg-[#041926] text-white pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-16 overflow-hidden">
        
        {/* 1. Immersive Ocean & Seafood Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Image with Subtle Living Ocean Drift */}
          <div className="hidden sm:block absolute inset-0 ocean-bg-drift">
            <Image
              src="/images/hero/ocean-seven-hero.jpg"
              alt="Ocean Seven fresh seafood on ice against deep ocean waters"
              fill
              priority
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
          </div>

          {/* Mobile-Optimized Background: Seafood prominently visible in lower half */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/images/hero/ocean-seven-hero-mobile.jpg"
              alt="Ocean Seven fresh seafood on ice against deep ocean waters"
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
            />
          </div>

          {/* Floating Underwater Bubbles, Swimming Fish Silhouettes & Caustics */}
          <UnderwaterAmbient showFish={true} showBubbles={true} showCaustics={true} bubbleCount={7} />

          {/* Contrast Overlay for Crystal Readability (stronger on left on desktop) */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#041926]/95 via-[#041926]/75 to-transparent sm:w-3/5 z-[2]" />
          
          {/* Mobile Top-to-Bottom Gradient: Protects header & headline while revealing seafood */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#041926]/90 via-[#041926]/60 to-[#041926]/85 z-[2]" />
        </div>

        {/* 2. Main Hero Content (Left-Aligned on desktop, perfectly centered on mobile 100vh) */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full my-auto">
          <div className="max-w-xl lg:max-w-2xl py-4 sm:py-10">
            
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
              <span className="w-1.5 h-4 sm:h-5 bg-ocean rounded-xs" />
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-heading font-semibold text-ocean-light">
                FRESH FROM THE OCEAN
              </span>
            </div>

            {/* Main Headline (34-40px on Mobile) */}
            <h1 className="font-heading font-semibold text-[34px] sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Premium Seafood<br />
              For a <span className="text-ocean">Better Tomorrow</span>
            </h1>

            {/* Short Supporting Description (14-16px on Mobile) */}
            <p className="mt-3.5 sm:mt-5 text-[15px] sm:text-base lg:text-lg text-white/90 leading-relaxed font-normal max-w-lg">
              Discover quality seafood products, carefully selected for freshness and dependable supply.
            </p>

            {/* Single Primary Action Button: Discover Our Products */}
            <div className="mt-6 sm:mt-8 flex items-center">
              <Link
                href="/products"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-ocean hover:text-white text-navy font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xs transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Discover Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

        {/* 3. Quality Information Bar (Desktop layout: inside hero above wave) */}
        <div id="quality" className="hidden md:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
          <div className="bg-[#051c2b]/80 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              
              {/* 1. Superior Quality */}
              <div className="flex items-center gap-3 sm:gap-3.5 pt-2 lg:pt-0 lg:pl-3 first:pt-0 first:pl-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-xs sm:text-sm text-white">
                    Superior Quality
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/70 block">
                    SFDA Inspected & Certified
                  </span>
                </div>
              </div>

              {/* 2. Freshness Focused */}
              <div className="flex items-center gap-3 sm:gap-3.5 pt-2 lg:pt-0 lg:pl-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-xs sm:text-sm text-white">
                    Freshness Focused
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/70 block">
                    Continuous Cold-Chain
                  </span>
                </div>
              </div>

              {/* 3. Customer Commitment */}
              <div className="flex items-center gap-3 sm:gap-3.5 pt-3 lg:pt-0 lg:pl-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-xs sm:text-sm text-white">
                    Customer Commitment
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/70 block">
                    Dedicated Trading Desk
                  </span>
                </div>
              </div>

              {/* 4. Reliable Supply */}
              <div className="flex items-center gap-3 sm:gap-3.5 pt-3 lg:pt-0 lg:pl-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-xs sm:text-sm text-white">
                    Reliable Supply
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/70 block">
                    From Jeddah Port Gateway
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Subtle Curved White Transition into Next Section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 leading-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 lg:h-12 text-white block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
              fill="currentColor"
            />
          </svg>
        </div>

      </section>

      {/* 5. Mobile Quality Information Bar (Below 100vh hero to prevent mobile vertical overflow) */}
      <div className="block md:hidden bg-white px-4 py-6 border-b border-border">
        <div className="bg-surface border border-border rounded-xs p-4 shadow-2xs">
          <div className="grid grid-cols-2 gap-4 divide-y divide-border/60">
            
            {/* 1. Superior Quality */}
            <div className="flex items-start gap-2.5 pt-2 first:pt-0">
              <ShieldCheck className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
              <div>
                <span className="block font-heading font-semibold text-xs text-charcoal">
                  Superior Quality
                </span>
                <span className="text-[10px] text-muted block leading-tight">
                  SFDA Inspected
                </span>
              </div>
            </div>

            {/* 2. Freshness Focused */}
            <div className="flex items-start gap-2.5 pt-2">
              <Snowflake className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
              <div>
                <span className="block font-heading font-semibold text-xs text-charcoal">
                  Freshness Focused
                </span>
                <span className="text-[10px] text-muted block leading-tight">
                  Cold-Chain Care
                </span>
              </div>
            </div>

            {/* 3. Customer Commitment */}
            <div className="flex items-start gap-2.5 pt-3">
              <Globe2 className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
              <div>
                <span className="block font-heading font-semibold text-xs text-charcoal">
                  Customer Commitment
                </span>
                <span className="text-[10px] text-muted block leading-tight">
                  Dedicated Trading Desk
                </span>
              </div>
            </div>

            {/* 4. Reliable Supply */}
            <div className="flex items-start gap-2.5 pt-3">
              <Truck className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
              <div>
                <span className="block font-heading font-semibold text-xs text-charcoal">
                  Reliable Supply
                </span>
                <span className="text-[10px] text-muted block leading-tight">
                  Jeddah Gateway
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
