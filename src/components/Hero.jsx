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
    <section className="hero relative w-full overflow-hidden bg-[#041926] text-white">
      
      {/* =========================================================================
          1. DESKTOP HERO (Screens >= 768px) - PRESERVED EXISTING DESIGN
         ========================================================================= */}
      <div className="hidden md:flex flex-col justify-between w-full min-h-[680px] lg:h-[780px] xl:h-[820px] pt-28 lg:pt-32 pb-14 relative">
        {/* Desktop Ocean & Seafood Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 ocean-bg-drift">
            <Image
              src="/images/hero/ocean-seven-hero.jpg"
              alt="Ocean Seven fresh seafood on ice against deep ocean waters"
              fill
              priority
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
          </div>

          {/* Ambient Bubbles, Swimming Fish Silhouettes & Caustics */}
          <UnderwaterAmbient
            theme="dark"
            showFish={true}
            fishCount={3}
            showBubbles={true}
            showRays={true}
            bubbleCount={7}
          />

          {/* Desktop Left Gradient for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#041926]/95 via-[#041926]/75 to-transparent w-3/5 z-[2]" />
        </div>

        {/* Desktop Hero Content (Left 50%) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full my-auto">
          <div className="max-w-xl lg:max-w-2xl py-6 lg:py-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-5 bg-ocean rounded-xs" />
              <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean-light">
                FRESH FROM THE OCEAN
              </span>
            </div>

            {/* Desktop Headline */}
            <h1 className="font-heading font-semibold text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Premium Seafood<br />
              For a <span className="text-ocean">Better Tomorrow</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base lg:text-lg text-white/90 leading-relaxed font-normal max-w-lg">
              Discover quality seafood products, carefully selected for freshness and dependable supply.
            </p>

            {/* Primary CTA */}
            <div className="mt-8 flex items-center">
              <Link
                href="/products"
                className="px-7 py-3.5 bg-white hover:bg-ocean hover:text-white text-navy font-heading font-semibold text-sm uppercase tracking-wider rounded-xs transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Discover Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Quality Information Bar */}
        <div id="quality" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-6">
          <div className="bg-[#051c2b]/80 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl">
            <div className="grid grid-cols-4 gap-6 divide-x divide-white/10">
              <div className="flex items-center gap-3.5 pl-3 first:pl-0">
                <div className="w-10 h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-sm text-white">Superior Quality</span>
                  <span className="text-[11px] text-white/70 block">SFDA Inspected & Certified</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-6">
                <div className="w-10 h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-sm text-white">Freshness Focused</span>
                  <span className="text-[11px] text-white/70 block">Continuous Cold-Chain</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-6">
                <div className="w-10 h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-sm text-white">Customer Commitment</span>
                  <span className="text-[11px] text-white/70 block">Dedicated Trading Desk</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pl-6">
                <div className="w-10 h-10 rounded-xs bg-ocean/20 border border-ocean/30 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-ocean" />
                </div>
                <div>
                  <span className="block font-heading font-semibold text-sm text-white">Reliable Supply</span>
                  <span className="text-[11px] text-white/70 block">From Jeddah Port Gateway</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Curved White Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 leading-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 lg:h-12 text-white block"
            preserveAspectRatio="none"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>


      {/* =========================================================================
          2. MOBILE HERO (< 768px) - DEDICATED FULL-SCREEN 100svh COMPOSITION
         ========================================================================= */}
      <div className="flex md:hidden flex-col justify-between w-full h-[100vh] h-[100svh] min-h-[100vh] min-h-[100svh] max-h-[100svh] pt-16 pb-3 px-4 relative overflow-hidden select-none">
        
        {/* Mobile Background Photography Plate (WebP + JPG fallback) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/ocean-seven-hero-mobile.webp"
            alt="Ocean Seven fresh seafood on ice underwater"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />

          {/* Underwater Ambient Bubbles & Swimming Fish */}
          <UnderwaterAmbient
            theme="dark"
            showFish={true}
            fishCount={2}
            showBubbles={true}
            showRays={true}
            bubbleCount={4}
          />

          {/* Subtle Top Overlay to Protect Mobile Headline Legibility */}
          <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-[#041926]/90 via-[#041926]/55 to-transparent z-[2] pointer-events-none" />

          {/* Subtle Bottom Vignette behind Quality Bar */}
          <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#041926]/90 via-[#041926]/40 to-transparent z-[2] pointer-events-none" />
        </div>

        {/* Top Content: Eyebrow + Large Headline + Description + Single Pill CTA */}
        <div className="relative z-10 w-full pt-1.5 min-[390px]:pt-3">
          {/* Eyebrow */}
          <div className="flex items-center gap-1.5 mb-1.5 min-[390px]:mb-2">
            <span className="w-1 h-3.5 bg-ocean rounded-xs" />
            <span className="text-[10px] min-[390px]:text-[11px] uppercase tracking-widest font-heading font-semibold text-ocean-light">
              FRESH FROM THE OCEAN
            </span>
          </div>

          {/* Large Mobile Headline (Bold modern sans-serif, 38-54px scaling, tight line-height) */}
          <h1 className="font-heading font-bold text-[36px] min-[375px]:text-[40px] min-[390px]:text-[44px] min-[414px]:text-[48px] min-[430px]:text-[52px] text-white tracking-tight leading-[1.04]">
            Premium<br />
            Seafood<br />
            for a <span className="text-ocean">Healthier Life</span>
          </h1>

          {/* Left-Aligned Supporting Copy */}
          <p className="mt-2 min-[390px]:mt-2.5 text-xs min-[390px]:text-sm text-white/90 leading-snug font-normal max-w-[310px] min-[390px]:max-w-[340px]">
            Bringing you quality seafood, sourced and supplied with care.
          </p>

          {/* Single Primary CTA Button (White pill, navy text, circular navy arrow) */}
          <div className="mt-3.5 min-[390px]:mt-4.5 flex items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-5 py-2.5 min-[390px]:py-3 bg-white text-navy font-heading font-semibold text-xs min-[390px]:text-sm rounded-full shadow-lg transition-transform active:scale-95 group"
            >
              <span>Discover Our Products</span>
              <span className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Middle negative space allows the seafood photography in background to shine prominently */}
        <div className="flex-grow min-h-[40px] pointer-events-none" />

        {/* Bottom Area: 4-Column Quality Bar (Single Row) + Subtle Curved Wave */}
        <div className="relative z-10 w-full mb-1">
          {/* 4 Columns in a Single Row */}
          <div className="bg-[#062438]/85 backdrop-blur-md border border-ocean/40 rounded-2xl p-2.5 min-[390px]:p-3 shadow-2xl mx-auto w-full max-w-md">
            <div className="grid grid-cols-4 divide-x divide-white/15">
              
              {/* 1. Superior Quality */}
              <div className="flex flex-col items-center text-center px-1">
                <ShieldCheck className="w-4 h-4 min-[390px]:w-4.5 min-[390px]:h-4.5 text-ocean shrink-0 mb-1" />
                <span className="text-[9px] min-[390px]:text-[10px] font-semibold text-white leading-tight">
                  Superior<br />Quality
                </span>
              </div>

              {/* 2. Always Fresh */}
              <div className="flex flex-col items-center text-center px-1">
                <Snowflake className="w-4 h-4 min-[390px]:w-4.5 min-[390px]:h-4.5 text-ocean shrink-0 mb-1" />
                <span className="text-[9px] min-[390px]:text-[10px] font-semibold text-white leading-tight">
                  Always<br />Fresh
                </span>
              </div>

              {/* 3. Globally Trusted */}
              <div className="flex flex-col items-center text-center px-1">
                <Globe2 className="w-4 h-4 min-[390px]:w-4.5 min-[390px]:h-4.5 text-ocean shrink-0 mb-1" />
                <span className="text-[9px] min-[390px]:text-[10px] font-semibold text-white leading-tight">
                  Globally<br />Trusted
                </span>
              </div>

              {/* 4. Reliable Delivery */}
              <div className="flex flex-col items-center text-center px-1">
                <Truck className="w-4 h-4 min-[390px]:w-4.5 min-[390px]:h-4.5 text-ocean shrink-0 mb-1" />
                <span className="text-[9px] min-[390px]:text-[10px] font-semibold text-white leading-tight">
                  Reliable<br />Delivery
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Subtle Curved White Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 leading-none">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-4 min-[390px]:h-5 text-white block"
            preserveAspectRatio="none"
          >
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

      </div>

    </section>
  );
}
