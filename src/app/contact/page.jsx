"use client";

import { Suspense } from "react";
import { MessageSquare, MapPin, Building2, Clock } from "lucide-react";
import ContactSection from "@/components/ContactSection";

function ContactPageContent() {
  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Commercial Trade Desk
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Contact Ocean Seven
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Connect directly with our commercial trading team in Jeddah, Saudi Arabia to discuss product sourcing, order volumes, and delivery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Corporate Summary Strip */}
      <section className="py-10 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted block font-semibold">City & Country</span>
                <span className="font-heading font-semibold text-sm text-charcoal">
                  Jeddah, Saudi Arabia
                </span>
                <span className="text-xs text-muted block">Red Sea Maritime Gateway</span>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted block font-semibold">District</span>
                <span className="font-heading font-semibold text-sm text-charcoal">
                  Ash Sharafiyah District
                </span>
                <span className="text-xs text-muted block">Khalid Ibn Al Waleed St.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xs bg-surface text-ocean flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted block font-semibold">Commercial Desk</span>
                <span className="font-heading font-semibold text-sm text-charcoal">
                  Sunday – Thursday
                </span>
                <span className="text-xs text-muted block">08:00 – 17:00 (Arabia Standard Time)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-charcoal">Loading Contact Desk...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
