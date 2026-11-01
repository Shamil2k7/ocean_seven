"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ShieldCheck, Package } from "lucide-react";

export default function ProductEnquiryModal({ product, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    customerName: "",
    companyName: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white border border-border rounded-xs shadow-2xl overflow-hidden z-10 text-charcoal"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between bg-surface">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-ocean font-semibold block mb-0.5">
                Commercial Product Inquiry
              </span>
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-charcoal">
                Request Information for {product.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xs bg-white hover:bg-border text-charcoal transition-colors border border-border"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ocean mx-auto" />
                <h4 className="font-heading font-semibold text-lg text-charcoal">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-charcoal">{formData.customerName}</span>. Your request for <span className="font-semibold text-navy">{product.name}</span> has been received by our Jeddah commercial trading desk.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-5 py-2 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pre-filled Product Summary Pill */}
                <div className="p-3 bg-surface rounded-xs border border-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-muted block text-[10px] uppercase font-semibold">Selected Product:</span>
                    <span className="font-heading font-semibold text-charcoal text-sm">{product.name}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-white text-ocean border border-border text-[10px] font-semibold uppercase rounded-xs">
                    {product.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Business / Entity"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+966 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Estimated Quantity Required *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 kg, 2 metric tonnes, weekly shipments..."
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Additional Specifications / Delivery Location
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide cut specifications, delivery city in Saudi Arabia, or packaging preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-heading font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Product Inquiry</span>
                </button>

                <div className="text-[11px] text-muted text-center pt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-ocean" />
                  <span>Wholesale B2B inquiry • Commercial confidentiality assured</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
