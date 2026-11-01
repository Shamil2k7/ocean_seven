"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Thermometer,
  Package,
  MapPin,
  Scale,
  FileText,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Share2,
} from "lucide-react";
import ProductCard from "./ProductCard";
import ProductEnquiryModal from "./ProductEnquiryModal";

export default function ProductDetailView({ product, relatedProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(product);
  const [copied, setCopied] = useState(false);

  const handleEnquire = (itemToEnquire = product) => {
    setModalProduct(itemToEnquire);
    setIsModalOpen(true);
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-24 lg:pt-28 bg-white min-h-screen text-charcoal">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-surface border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted flex-wrap">
            <Link href="/" className="hover:text-ocean transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <Link href="/products" className="hover:text-ocean transition-colors">
              Seafood Catalogue
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="hover:text-ocean transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted/60" />
            <span className="text-charcoal font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Large Product Image Showcase */}
            <div className="reveal-on-scroll lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] bg-surface rounded-xs border border-border overflow-hidden p-8 flex items-center justify-center shadow-xs">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Status Badge */}
                {product.status && (
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white text-navy border border-border rounded-xs shadow-xs">
                      {product.status}
                    </span>
                  </div>
                )}

                {/* Sourcing Origin Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-border rounded-xs flex items-center gap-1.5 text-xs text-charcoal">
                  <MapPin className="w-3.5 h-3.5 text-ocean shrink-0" />
                  <span className="truncate">{product.origin}</span>
                </div>
              </div>

              {/* Quality Guarantee Mini Strip */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <ShieldCheck className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">SFDA Standard</span>
                  <span className="text-[10px] text-muted">Quality Tested</span>
                </div>
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <Thermometer className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">Cold Chain</span>
                  <span className="text-[10px] text-muted">0°C to -18°C</span>
                </div>
                <div className="p-3 bg-surface border border-border rounded-xs">
                  <Package className="w-4 h-4 text-ocean mx-auto mb-1" />
                  <span className="block text-[11px] font-semibold text-charcoal">B2B Wholesale</span>
                  <span className="text-[10px] text-muted">Master Cartons</span>
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Product Information */}
            <div className="reveal-on-scroll lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean">
                    {product.category}
                  </span>
                  
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-charcoal px-2.5 py-1 rounded-xs border border-border bg-surface transition-colors"
                    title="Copy specification link"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>{copied ? "Link Copied" : "Share"}</span>
                  </button>
                </div>

                <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-charcoal tracking-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* B2B Commercial Notice (No fake prices) */}
              <div className="p-4 bg-surface border border-border rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-muted block">Pricing Structure</span>
                  <span className="font-heading font-semibold text-sm text-charcoal">
                    Institutional & Wholesale Inquiries
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 bg-white border border-border text-ocean font-semibold rounded-xs">
                  B2B Quotation
                </span>
              </div>

              {/* Commercial Specifications Table */}
              <div className="border border-border rounded-xs overflow-hidden">
                <div className="bg-surface px-4 py-2.5 border-b border-border flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold text-charcoal uppercase tracking-wider">
                    Commercial Specifications
                  </span>
                  <span className="text-[11px] text-muted font-mono">SPEC-ID: {product.id}</span>
                </div>

                <div className="divide-y divide-border text-xs">
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Product Category</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.category}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Supply Status</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.status}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Processing Form / Cut</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.form}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Cold Storage Protocol</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.storage}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Packaging Unit</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.packaging}</span>
                  </div>
                  <div className="p-3.5 grid grid-cols-3 gap-2">
                    <span className="text-muted font-medium">Sourcing Region</span>
                    <span className="col-span-2 font-semibold text-charcoal">{product.origin}</span>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => handleEnquire(product)}
                  className="w-full py-3.5 px-6 bg-navy hover:bg-ocean text-white font-heading font-semibold text-xs uppercase tracking-widest rounded-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request Product Information</span>
                </button>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link
                    href="/contact"
                    className="flex-1 py-2.5 px-4 bg-surface hover:bg-border border border-border text-charcoal text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-ocean" />
                    <span>Contact Jeddah Trading Desk</span>
                  </Link>

                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="py-2.5 px-4 bg-white hover:bg-surface border border-border text-muted hover:text-charcoal text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to {product.category}</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-16 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-1">
                  Similar Selections
                </span>
                <h3 className="font-heading font-semibold text-2xl text-charcoal">
                  Related in {product.category}
                </h3>
              </div>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-semibold text-ocean hover:text-navy uppercase tracking-wider"
              >
                View Category ({relatedProducts.length + 1})
              </Link>
            </div>

            <div className="product-grid">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <ProductEnquiryModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
