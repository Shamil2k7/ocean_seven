"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Award,
  Compass,
  ShieldCheck 
} from "lucide-react";

const positions = [
  {
    id: "seafood-sales-trader",
    title: "Seafood Trading Executive",
    department: "Commercial Sales",
    location: "Jeddah, Saudi Arabia",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Develop commercial accounts with wholesale fish buyers, restaurant chains, and institutional hospitality catering across the Western Province.",
  },
  {
    id: "logistics-cold-chain-officer",
    title: "Cold Chain Logistics Coordinator",
    department: "Operations & Fleet",
    location: "Jeddah, Saudi Arabia",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Coordinate temperature-monitored refrigerated transport, port clearance logistics, and daily scheduled delivery dispatch to commercial clients.",
  },
  {
    id: "quality-inspection-officer",
    title: "Seafood Quality & Inspection Specialist",
    department: "Quality Assurance",
    location: "Jeddah, Saudi Arabia",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Perform receiving inspections, size grading verification, freshness assessment, and compliance documentation for incoming marine consignments.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(positions[0]);
  const [submitted, setSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    phone: "",
    role: positions[0].title,
    experience: "2-5 years",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-surface text-charcoal min-h-screen">
      
      {/* Banner */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-heading font-semibold text-ocean block mb-2">
              Career Opportunities
            </span>
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Join Ocean Seven Seafood Trading
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Build a rewarding career in seafood trading, cold-chain operations, and commercial supply with our dedicated team in Jeddah, Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Working Environment */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">Commercial Growth</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Be part of an expanding seafood trading enterprise operating in the Kingdom of Saudi Arabia’s dynamic commercial seafood sector.
            </p>
          </div>

          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">Quality Standards</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Work with disciplined cold-chain protocols, international seafood partners, and high-standard commercial buyers.
            </p>
          </div>

          <div className="p-6 rounded-xs bg-white border border-border">
            <div className="w-8 h-8 rounded-xs bg-surface text-ocean flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-1">Collaborative Team</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              A collaborative, professional working environment centered on mutual respect, customer focus, and operational diligence.
            </p>
          </div>
        </div>

        {/* Current Vacancies & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Job Listings */}
          <div className="lg:col-span-7 space-y-3">
            <div className="mb-4">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-charcoal">
                Available Positions in Jeddah
              </h2>
            </div>

            {positions.map((job) => {
              const isSelected = selectedJob.id === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => {
                    setSelectedJob(job);
                    setApplicant({ ...applicant, role: job.title });
                  }}
                  className={`p-5 rounded-xs border transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-white border-ocean"
                      : "bg-white/60 border-border hover:bg-white hover:border-ocean/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h3 className="font-heading font-semibold text-base text-charcoal">
                      {job.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-ocean px-2 py-0.5 bg-surface rounded-xs self-start sm:self-auto">
                      {job.department}
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-3">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted border-t border-border pt-2.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-ocean" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-ocean" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-ocean" /> {job.experience}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xs border border-border">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-0.5">
              Submit Candidate Profile
            </h3>
            <p className="text-xs text-muted mb-4">
              Position: <span className="font-semibold text-charcoal">{selectedJob.title}</span>
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <CheckCircle2 className="w-10 h-10 text-ocean mx-auto" />
                <h4 className="font-heading font-semibold text-base text-charcoal">Application Received</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Thank you, {applicant.name}. Our hiring team at Ocean Seven Seafood Trading Company will review your details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-3.5 py-1.5 bg-navy text-white text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  Apply for another role
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile or WhatsApp"
                    value={applicant.phone}
                    onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Years of Relevant Experience
                  </label>
                  <select
                    value={applicant.experience}
                    onChange={(e) => setApplicant({ ...applicant, experience: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  >
                    <option value="1-2 years">1 - 2 Years</option>
                    <option value="2-5 years">2 - 5 Years</option>
                    <option value="5+ years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Professional Background Summary
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Summary of experience in seafood trading, sales, or logistics..."
                    value={applicant.notes}
                    onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-surface border border-border rounded-xs text-charcoal focus:outline-none focus:border-ocean"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-navy hover:bg-ocean rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Candidate Profile</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </section>

    </div>
  );
}
