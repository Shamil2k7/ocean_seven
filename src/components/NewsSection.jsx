"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    slug: "seafood-market-saudi-arabia",
    category: "Market Insights",
    title: "Seafood Sourcing & Growth in Saudi Arabia's Commercial Food Sector",
    excerpt:
      "An overview of evolving culinary preferences, wholesale demand, and the strategic importance of Jeddah as a marine trade hub on the Red Sea.",
    image: "/images/editorial/fresh-catch.jpg",
    date: "Trade Bulletin",
    readTime: "4 min read",
  },
  {
    slug: "cold-chain-logistics-discipline",
    category: "Technical Standards",
    title: "Best Practices in Cold-Chain Logistics for Fresh and Frozen Seafood",
    excerpt:
      "How continuous sub-zero monitoring, rapid chilling post-landing, and proper airflow during transit protect seafood freshness and safety.",
    image: "/images/editorial/value-added.jpg",
    date: "Quality Guide",
    readTime: "5 min read",
  },
  {
    slug: "sustainable-fisheries-supply",
    category: "Marine Sustainability",
    title: "Partnering with Sustainable Fisheries for Dependable Supply",
    excerpt:
      "Why responsible fishing methods, quota respect, and transparent supplier relationships are critical to securing reliable long-term seafood supplies.",
    image: "/images/editorial/local-waters.jpg",
    date: "Sourcing Focus",
    readTime: "4 min read",
  },
];

export default function NewsSection({ limit = 3, title = "Trade Insights & Articles" }) {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Industry Knowledge
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
              Insights on seafood trading, market developments, and handling practices from our team.
            </p>
          </div>

          <Link
            href="/trading"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy transition-colors self-start md:self-end"
          >
            <span>Learn More About Our Trading</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-border rounded-xs overflow-hidden flex flex-col justify-between group hover:border-ocean/40 transition-colors"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-ocean border border-border rounded-xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <Calendar className="w-3.5 h-3.5 text-ocean" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2 group-hover:text-ocean transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0 border-t border-border">
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inquire for Supply</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
