"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Truck, 
  UtensilsCrossed, 
  ShoppingBag, 
  Building2, 
  Globe2, 
  ArrowRight,
  Check 
} from "lucide-react";
import GlobalDistribution from "@/components/GlobalDistribution";

const channels = [
  {
    id: "horeca",
    title: "Hotel, Restaurant & Catering (HoReCa)",
    icon: UtensilsCrossed,
    description:
      "Reliable seafood provisioning for hospitality chefs, dining venues, and catering establishments requiring fresh daily catch or calibrated frozen portions.",
    features: [
      "Scheduled early deliveries in Jeddah and regional cities",
      "Fresh whole fish and chef-ready portion cuts",
      "Vacuum-sealed packaging and proper icing",
      "Responsive customer communication",
    ],
  },
  {
    id: "trading",
    title: "Commercial Wholesale Supply",
    icon: Building2,
    description:
      "Bulk cartons, containerized shipments, and pallet supply for seafood traders, central fish markets, and institutional buyers.",
    features: [
      "Competitive wholesale commercial pricing",
      "Standardized grading, counts, and packaging",
      "Consistent product availability",
      "Clear commercial documentation",
    ],
  },
  {
    id: "retail",
    title: "Supermarket & Retail Chains",
    icon: ShoppingBag,
    description:
      "Providing quality whole fish and frozen seafood items suitable for retail display counters, fish departments, and consumer packaging.",
    features: [
      "Cleanly handled display-ready whole fish",
      "Convenient IQF frozen portions and consumer packs",
      "Batch traceability and proper labeling",
      "Regular replenishment schedules",
    ],
  },
  {
    id: "regional",
    title: "Regional Sourcing & Distribution",
    icon: Globe2,
    description:
      "Connecting regional marine landing centers along the Red Sea and international trade routes to commercial distribution networks across Saudi Arabia.",
    features: [
      "Strategic distribution from Jeddah port hub",
      "Refrigerated transport corridors",
      "Direct connections to coastal landing ports",
      "Cross-regional supply fulfillment",
    ],
  },
];

export default function DistributionPage() {
  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Supply Network
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Distribution Channels
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Supplying the hospitality sector, commercial wholesale markets, and retail seafood counters with dependable cold-chain handling from Jeddah, Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Distribution Channels */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
            Sectors We Serve
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal tracking-tight">
            Tailored Supply For Commercial Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="p-7 sm:p-8 rounded-xs bg-white border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-surface text-ocean border border-border flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-2">
                      Key Capabilities:
                    </span>
                    {channel.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal">
                        <Check className="w-3.5 h-3.5 text-ocean shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/contact?subject=Distribution+Inquiry+for+${encodeURIComponent(channel.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors"
                  >
                    <span>Inquire About Supply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global & Regional Corridors Section */}
      <GlobalDistribution />

      {/* Transport & Handling Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="p-7 sm:p-10 rounded-xs bg-white border border-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-charcoal">
              Committed to Temperature Preservation Across the Supply Chain
            </h3>
            <p className="text-muted text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              We coordinate refrigerated transportation to ensure that our fresh chilled and frozen seafood consignments reach your receiving bays under proper cold-chain conditions.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Discuss Sourcing Needs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
