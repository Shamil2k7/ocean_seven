"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Anchor, 
  Compass, 
  Waves, 
  Check, 
  ArrowRight,
  Fish,
  MapPin
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-heading font-semibold text-ocean mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jeddah, Saudi Arabia</span>
            </div>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Connecting Quality Seafood with Global Markets.
            </h1>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Ocean Seven Seafood Trading Company is dedicated to connecting quality seafood with customers through reliable sourcing, professional trading and dependable supply solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative - Clean Two Column */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block">
              About Our Company
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              Dedicated to Reliable Sourcing and Lasting Commercial Partnerships
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Based in Jeddah, Saudi Arabia, we aim to deliver quality seafood products while building lasting relationships with our suppliers and customers. Our strategic presence in the Kingdom’s primary commercial port city allows us to bridge regional marine harvests with global seafood production centers.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We focus on product integrity, clear commercial terms, and cold-chain temperature management. Whether fulfilling regular wholesale contracts for foodservice operators or supplying specific retail species, our team prioritizes freshness, consistency, and professional execution.
            </p>

            <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <span className="font-heading font-semibold text-lg text-navy">Jeddah, KSA</span>
                <span className="block text-xs text-muted mt-0.5">Commercial Headquarters</span>
              </div>
              <div>
                <span className="font-heading font-semibold text-lg text-ocean">Comprehensive</span>
                <span className="block text-xs text-muted mt-0.5">Fresh & Frozen Portfolio</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-white">
              <Image
                src="/images/editorial/fresh-catch.jpg"
                alt="Fresh seafood sourcing and handling"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
              Our Commitments
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              Trading Pillars & Sourcing Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sourcing */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">Reliable Sourcing</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Carefully identifying dependable fisheries and producers to ensure consistent commercial supply that meets client specifications.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                Supplier Integrity
              </div>
            </div>

            {/* Quality */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">Quality Standards</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Adhering to strict temperature monitoring and hygienic handling protocols to protect natural seafood texture and flavor.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                Cold-Chain Care
              </div>
            </div>

            {/* Relationships */}
            <div className="p-7 rounded-xs bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xs bg-white text-ocean border border-border flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">Long-Term Partnerships</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  Building lasting relationships with our suppliers and customers through transparency, responsive trading, and dependable delivery.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border text-[11px] text-ocean font-semibold uppercase tracking-wider">
                Mutual Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Operations Highlight */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-border bg-white">
              <Image
                src="/images/editorial/fishing-vessel.jpg"
                alt="Seafood transportation and sourcing vessels"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block">
              Trading Execution
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
              Sourcing, Processing, and Cold-Chain Logistics
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              From fresh coastal landings to containerized sea and air freight, Ocean Seven coordinates the required logistics steps to bring seafood directly to commercial receiving docks in Jeddah and across the Kingdom.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>Refrigerated transport maintaining sub-zero and chilled parameters.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>Sourcing from trusted regional coastal catch and international fisheries.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                <span>Clear commercial invoicing, documentation, and prompt customer support.</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
              >
                <span>View Products Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
