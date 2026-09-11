import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import StatsBand from "@/components/StatsBand";
import CTASection from "@/components/CTASection";
import { leadershipTeam } from "@/data/team";
import {
  ShieldCheck,
  Target,
  Users,
  Ship,
  FileCheck,
  Scale,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About The Trading House & Leadership",
  description:
    "Vision Vibe Global is an international physical commodities merchant trading house specializing in energy fuels, industrial metals, agricultural bulk, and ocean logistics. Meet our trading desk leaders.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Contract Sanctity & Delivery Guarantee",
      description:
        "In volatile commodity markets, a contract is only as good as the counterparty's integrity. We honor delivery commitments without exception, upholding standard GAFTA, FOSFA, and LME rules.",
    },
    {
      title: "Direct Producer Origination",
      description:
        "We eliminate opaque broker chains by partnering directly with mine-mouth operators, verified petroleum refineries, and agricultural farmgates with audited export records.",
    },
    {
      title: "Uncompromising Quality Verification",
      description:
        "Every metric ton shipped is inspected by independent accredited surveyors (SGS, Bureau Veritas, Intertek) to ensure 100% specification conformity before bills of lading are issued.",
    },
    {
      title: "Capital & Risk Discipline",
      description:
        "We neutralize commodity price and foreign exchange exposure through exchange hedging on LME/CME/ICE and enforce strict UCP 600 documentary credit compliance.",
    },
  ];

  const hubs = [
    { city: "London", region: "European HQ & Metals Desk", address: "100 Bishopsgate, Level 24, London EC2N 4AG" },
    { city: "Singapore", region: "Asia-Pacific Maritime & Energy Hub", address: "Marina Bay Financial Centre, Tower 3, Singapore" },
    { city: "Dubai", region: "Middle East & South Asia Desk", address: "DIFC Gate Precinct 4, Dubai, UAE" },
    { city: "Zurich", region: "Trade Finance & Credit Center", address: "Paradeplatz 8, 8001 Zürich, Switzerland" },
    { city: "Houston", region: "Americas Energy & Polymers Hub", address: "Energy Corridor, Houston, TX 77079, USA" },
    { city: "Hong Kong", region: "Greater China & East Asia Trade Desk", address: "Two International Finance Centre, Central, Hong Kong" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Navy Background) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionLabel theme="dark">THE TRADING HOUSE</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Built on contract sanctity, verified provenance, and execution certainty.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Vision Vibe Global was established to bridge resource-rich producers with industrial consumers worldwide, combining multi-commodity physical trading with ocean vessel chartering and trade finance.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Heritage (Canvas Light Background) */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel theme="light">OUR HERITAGE &amp; FOOTPRINT</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
                A modern physical merchant trading house engineered for market volatility.
              </h2>
              <div className="space-y-4 text-base text-ink-muted leading-relaxed">
                <p>
                  Global trade in physical commodities has become increasingly complex. From shifting maritime transit lanes and geopolitical sanctions to sudden weather disruptions, international buyers need dependable trading partners with verified physical supply lines.
                </p>
                <p>
                  Vision Vibe Global was founded by veteran commodity merchants, master mariners, and trade finance specialists who recognized that industrial buyers value execution certainty above all else. We do not engage in speculative broker chains; we secure direct producer offtakes, charter our own ocean vessels, and structure confirmed letters of credit.
                </p>
                <p>
                  Today, we operate trading desks and port staging facilities across London, Singapore, Dubai, Zurich, Houston, and Hong Kong, moving over 2.8 million metric tons of essential commodities annually.
                </p>
              </div>
            </div>

            {/* Principles Box (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-line-light rounded-lg p-8 shadow-sm space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Trading Governance Charter
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink-primary">Contract Sanctity</h3>
                    <p className="text-xs text-ink-muted mt-0.5">We strictly enforce bilateral contract terms under GAFTA, FOSFA, and LME international arbitration rules.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink-primary">Independent Assay Verification</h3>
                    <p className="text-xs text-ink-muted mt-0.5">Mandatory pre-shipment inspection by accredited agencies (SGS, Bureau Veritas) on 100% of shipments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ship className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-ink-primary">Demurrage-Free Maritime Logistics</h3>
                    <p className="text-xs text-ink-muted mt-0.5">Direct vessel chartering and discharge port stevedoring maintaining an average turnaround of under 48 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Scale Stats */}
      <StatsBand theme="light" />

      {/* Operating Philosophy (Deep Navy Background) */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <SectionLabel theme="dark">MERCHANT PRINCIPLES</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The commitments that guide every commercial voyage.
            </h2>
            <p className="text-base text-slate-300">
              Our trading house culture is built around transparency, contract discipline, and operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-navy-900 border border-navy-800 rounded-lg p-8 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent-gold">0{idx + 1}.</span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {v.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team (Off-White Background) */}
      <section id="leadership" className="bg-canvas-light py-20 lg:py-28 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <SectionLabel theme="light">TRADING DESK LEADERSHIP</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Senior commodity merchants and chartering directors.
            </h2>
            <p className="text-base sm:text-lg text-ink-muted">
              Our directors bring decades of physical trading, maritime chartering, and trade banking experience from major global commodity bourses and international ports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-line-light rounded-lg overflow-hidden shadow-sm hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-80 w-full bg-navy-900 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-primary">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {member.practice}
                      </p>
                    </div>

                    <p className="text-xs font-medium text-slate-400 border-t border-slate-100 pt-2">
                      {member.credentials}
                    </p>

                    <p className="text-xs text-ink-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((area, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] uppercase font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Regional Trade Desks */}
      <section className="bg-white py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <SectionLabel theme="light">GLOBAL TRADE NETWORK</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Positioned across critical financial and maritime centers.
            </h2>
            <p className="text-base text-ink-muted">
              Our trade desks coordinate 24-hour physical trading operations across global time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="p-6 rounded-lg bg-canvas-light border border-line-light space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-ink-primary">
                    {hub.city}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                    {hub.region}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        theme="dark"
        sectionTag="COMMERCIAL CONTRACTING"
        title="Explore bilateral trade agreements with our desks."
        subtitle="We welcome confidential inquiries from qualified buyers, state procurement bodies, and tier-1 industrial consumers."
        primaryBtnText="Submit Commercial RFQ"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
