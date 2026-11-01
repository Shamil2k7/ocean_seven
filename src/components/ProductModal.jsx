"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, MapPin, Snowflake, Package } from "lucide-react";

export default function ProductModal({ product, onClose, onInquire }) {
  if (!product) return null;

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
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-2xl bg-white border border-border rounded-xs shadow-xl overflow-hidden z-10 text-charcoal"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-xs bg-surface hover:bg-border text-charcoal transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Image side */}
            <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-surface p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
              <div className="relative w-full aspect-square max-w-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-white text-ocean border border-border rounded-xs">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Details side */}
            <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">
                  Seafood Product
                </span>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-charcoal mt-1 mb-2">
                  {product.name}
                </h3>

                <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {product.description}
                </p>

                {/* Specs list */}
                <div className="space-y-2 border-t border-border pt-3 mb-5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-border/60">
                    <span className="text-muted flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-ocean" /> Sourcing Channel:
                    </span>
                    <span className="font-medium text-charcoal">{product.origin}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-border/60">
                    <span className="text-muted flex items-center gap-1.5">
                      <Snowflake className="w-3.5 h-3.5 text-ocean" /> Supply Form:
                    </span>
                    <span className="font-medium text-charcoal">{product.state}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-muted flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-ocean" /> Supply Option:
                    </span>
                    <span className="font-medium text-charcoal">Commercial Wholesale / Foodservice</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onInquire) onInquire(product);
                  }}
                  className="flex-1 py-2.5 bg-navy hover:bg-ocean text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for {product.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="px-3.5 py-2.5 border border-border hover:border-ocean text-charcoal text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
