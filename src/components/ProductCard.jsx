"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductCard({ product, onEnquire, className = "" }) {
  const { lang, isRTL } = useLanguage();

  const isArabic = lang === "ar";
  const name = isArabic && product.name_ar ? product.name_ar : product.name;
  const category = isArabic && product.category_ar ? product.category_ar : product.category;
  const form = isArabic && product.form_ar ? product.form_ar : (product.form || "Commercial Cut");
  const origin = isArabic && product.origin_ar ? product.origin_ar : product.origin;
  const description = isArabic && product.description_ar ? product.description_ar : product.description;
  const statusBadge = product.status
    ? (isArabic && product.status_ar ? product.status_ar.split("/")[0].trim() : product.status.split("/")[0].trim())
    : "";

  return (
    <div
      className={`reveal-on-scroll product-card-hover group bg-white rounded-xs border border-border hover:border-ocean/60 flex flex-col justify-between overflow-hidden h-full w-full shadow-2xs ${className}`}
    >
      {/* 1:1 Aspect Ratio on Mobile, Aspect-Square / 4:3 on Desktop */}
      <div className="relative aspect-square sm:aspect-[4/3] bg-surface p-3 sm:p-5 flex items-center justify-center overflow-hidden border-b border-border/60">
        <Link
          href={`/products/${product.id}`}
          className="relative w-full h-full block focus:outline-none"
          aria-label={isArabic ? `عرض تفاصيل ${name}` : `View details for ${name}`}
        >
          <Image
            src={product.image}
            alt={name}
            fill
            className="product-card-img object-contain p-1.5 sm:p-2"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Category Label (Logical Start) */}
        <div className="absolute top-2 start-2 pointer-events-none">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-1.5 sm:px-2 py-0.5 bg-white/95 text-charcoal border border-border rounded-xs shadow-2xs">
            {category}
          </span>
        </div>

        {/* Condition Badge (Logical End) */}
        {statusBadge && (
          <div className="absolute top-2 end-2 pointer-events-none hidden sm:block">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-1.5 sm:px-2 py-0.5 bg-white/95 text-ocean border border-border rounded-xs shadow-2xs">
              {statusBadge}
            </span>
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow bg-white">
        <div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-muted mb-1">
            <span className="font-medium text-ocean truncate max-w-[110px] sm:max-w-none">
              {form}
            </span>
            <span className="hidden sm:inline truncate max-w-[120px]">{origin}</span>
          </div>

          <h3 className="font-heading font-semibold text-xs sm:text-base text-charcoal group-hover:text-ocean transition-colors line-clamp-1">
            <Link href={`/products/${product.id}`} className="focus:outline-none">
              {name}
            </Link>
          </h3>

          <p className="text-muted text-[11px] sm:text-xs leading-relaxed mt-1 line-clamp-2 hidden sm:block">
            {description}
          </p>
        </div>

        {/* Action Row */}
        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-border flex items-center gap-1.5 sm:gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider bg-navy hover:bg-ocean text-white rounded-xs transition-colors flex items-center justify-center gap-1"
          >
            <span>{isArabic ? "عرض التفاصيل" : "View Details"}</span>
            <ArrowUpRight className="w-3 h-3 hidden sm:inline rtl:rotate-180" />
          </Link>

          {onEnquire && (
            <button
              type="button"
              onClick={() => onEnquire(product)}
              className="p-1.5 sm:px-2.5 sm:py-2 border border-border hover:border-ocean text-charcoal hover:text-ocean text-xs font-semibold rounded-xs transition-colors shrink-0 flex items-center justify-center"
              title={isArabic ? "استفسار سريع" : "Quick Enquiry"}
              aria-label={isArabic ? `استفسار عن ${name}` : `Enquire about ${name}`}
            >
              <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
