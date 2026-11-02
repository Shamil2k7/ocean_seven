import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import HomeShowcase from "@/components/HomeShowcase";
import InnovationServices from "@/components/InnovationServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanyStats from "@/components/CompanyStats";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Seafood Categories & Collection Navigation */}
      <HomeShowcase />

      {/* Trading & Supply Capabilities */}
      <InnovationServices />

      {/* Why Ocean Seven */}
      <WhyChooseUs />

      {/* Operational Scope */}
      <CompanyStats />

      {/* Quality Standards & Handling */}
      <Certifications />

      {/* Contact & Official Address */}
      <ContactSection />
    </>
  );
}
