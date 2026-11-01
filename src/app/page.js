import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import InnovationServices from "@/components/InnovationServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanyStats from "@/components/CompanyStats";
import BrandShowcase from "@/components/BrandShowcase";
import GlobalDistribution from "@/components/GlobalDistribution";
import Certifications from "@/components/Certifications";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Seafood Categories - 8 Divisions */}
      <CategoryShowcase />

      {/* Prominent Featured Products Showcase - "EXPLORE OUR SEAFOOD COLLECTION" */}
      <FeaturedProducts
        title="EXPLORE OUR SEAFOOD COLLECTION"
        subtitle="Discover our selection of seafood products."
      />

      {/* Trading & Supply Capabilities */}
      <InnovationServices />

      {/* Why Ocean Seven */}
      <WhyChooseUs />

      {/* Operational Scope */}
      <CompanyStats />

      {/* Commercial Supply Lines */}
      <BrandShowcase />

      {/* Global Trading Corridors */}
      <GlobalDistribution />

      {/* Quality Standards & Handling */}
      <Certifications />

      {/* Trade Insights & Articles */}
      <NewsSection limit={3} title="Industry Insights & Articles" />

      {/* Contact & Official Address */}
      <ContactSection />
    </>
  );
}
