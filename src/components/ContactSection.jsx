"use client";

import { useState } from "react";
import { 
  MapPin, 
  Send, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Clock, 
  MessageSquare,
  ShieldCheck 
} from "lucide-react";
import UnderwaterAmbient from "./UnderwaterAmbient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "General Wholesale Supply",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28 bg-surface border-b border-border">
      {/* Subtle Ocean Background Animation & Sliding Ocean Imagery */}
      <UnderwaterAmbient
        theme="light"
        showFish={true}
        fishCount={2}
        showBubbles={true}
        bubbleCount={4}
        showRays={true}
        slidingImage={{
          src: "/images/editorial/local-waters.jpg",
          alt: "Coastal water atmosphere",
          position: "right",
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
            Get In Touch
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
            Contact Ocean Seven Seafood Trading Company
          </h2>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
            Reach out to our trading team in Jeddah, Saudi Arabia to discuss seafood sourcing, regular commercial supplies, or product specifications.
          </p>
        </div>

        {/* Main Grid: Form + Verified Company Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-xs border border-border">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ocean mx-auto" />
                <h3 className="font-heading font-semibold text-xl text-charcoal">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-charcoal">{formData.fullName}</span>. Our team at Ocean Seven Seafood Trading Company has received your inquiry and will contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      productInterest: "General Wholesale Supply",
                      message: "",
                    });
                  }}
                  className="mt-4 px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-border pb-3 mb-1">
                  <h3 className="font-heading font-semibold text-lg text-charcoal">
                    Commercial Sourcing Request
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    Submit your requirements below for supply availability, cuts, and scheduling.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Business / Entity name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone or WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Seafood Category of Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  >
                    <option value="General Wholesale Supply">General Wholesale Supply</option>
                    <option value="Regional Coastal Catch (Hamour, King Fish, Pomfret)">Regional Coastal Catch (Hamour, King Fish, Pomfret)</option>
                    <option value="Imported Pelagic Finfish (Salmon, Tuna, Cod)">Imported Pelagic Finfish (Salmon, Tuna, Cod)</option>
                    <option value="Shrimp & Crustaceans">Shrimp & Crustaceans</option>
                    <option value="Cephalopods & Shellfish">Cephalopods & Shellfish</option>
                    <option value="Foodservice & Commercial Contracts">Foodservice & Commercial Contracts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Order Details & Estimated Volume
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify target species, required form (fresh/frozen/fillet), delivery destination, or volume..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Sourcing Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Company Official Address Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bg-white p-7 rounded-xs border border-border space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-1">
                  Registered Commercial Address
                </span>
                <h3 className="font-heading font-semibold text-xl text-charcoal">
                  Ocean Seven Seafood Trading Company
                </h3>
                <span className="text-xs text-muted block font-arabic mt-0.5">
                  شركة اوشن سيفن سيفود تريدينغ
                </span>
              </div>

              {/* Verified Address Fields */}
              <div className="p-4 bg-surface rounded-xs border border-border space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal block">Location:</span>
                    <span className="text-muted leading-relaxed">
                      Jeddah, Kingdom of Saudi Arabia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-t border-border pt-2.5">
                  <Building2 className="w-4 h-4 text-ocean shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal block">Registered Address:</span>
                    <p className="text-muted leading-relaxed mt-0.5">
                      Building No. 6684,<br />
                      Khalid Ibn Al Waleed Street,<br />
                      Ash Sharafiyah District,<br />
                      Secondary Number 2661,<br />
                      Postal Code 23216,<br />
                      Jeddah, Kingdom of Saudi Arabia.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border-t border-border pt-2.5">
                  <Clock className="w-4 h-4 text-ocean shrink-0" />
                  <div>
                    <span className="font-semibold text-charcoal block">Business Operations:</span>
                    <span className="text-muted">Sunday – Thursday: 08:00 – 17:00</span>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map iframe to verified Khalid Ibn Al Waleed Street, Ash Sharafiyah, Jeddah */}
              <div className="border border-border rounded-xs overflow-hidden mt-3">
                <iframe
                  title="Ocean Seven Seafood Trading Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14846.883076868673!2d39.1804249!3d21.5168923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01bd54020f5%3A0x6b194fb8c9f59200!2sKhalid%20Ibn%20Al%20Walid%2C%20Ash%20Sharafiyah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              <div className="pt-2 text-[11px] text-muted flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-ocean" />
                <span>Verified Commercial National Address • Jeddah, KSA</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
