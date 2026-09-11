import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";
import { ArrowRight, AlertTriangle, Ship } from "lucide-react";

export const metadata: Metadata = {
  title: "Commodities & Physical Goods Divisions",
  description:
    "Explore Vision Vibe Global's physical commodities divisions: Energy & Petroleum, Industrial Metals & Minerals, Agricultural Commodities, Petrochemicals, Heavy Machinery, and Wholesale Goods.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Navy Background) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionLabel theme="dark">COMMODITIES &amp; GOODS DIVISIONS</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Global physical commodities backed by verified provenance and grade assurance.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We connect mine-mouth concessions, audited refineries, and major harvest farmgates with sovereign procurement boards and multinational industrial consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Commodity Divisions Deep Dives (Alternating Sections) */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-24 bg-white border border-line-light rounded-lg p-6 sm:p-8 lg:p-12 shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Ship className="w-3.5 h-3.5 text-brand-blue" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                          Commodity Division 0{idx + 1}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-primary tracking-tight">
                        {ind.name}
                      </h2>
                      <p className="text-sm font-medium text-slate-500">
                        {ind.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                      {ind.overview}
                    </p>

                    {/* Trade & Supply Challenges */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Prevailing Market &amp; Transit Challenges:
                      </span>
                      {ind.keyChallenges.map((challenge, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-ink-muted">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Verifiable Physical Trade Result */}
                    <div className="p-4 rounded-md bg-slate-50 border-l-4 border-brand-blue space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue block">
                        Demonstrated Execution:
                      </span>
                      <p className="text-xs text-ink-primary leading-relaxed">
                        {ind.verifiableResult}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button href="/contact" variant="primary" size="sm">
                        <span>Submit RFQ for {ind.name.split(" ")[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Visual Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden border border-navy-700 bg-navy-900 shadow-md">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Band */}
      <CTASection
        theme="dark"
        sectionTag="COMMODITY QUOTATIONS"
        title="Request spot or annual contract allocations."
        subtitle="Our international trading desks issue Soft Corporate Offers (SCO) with verified chemical assay specs and vessel laycans upon receipt of an official RFQ."
        primaryBtnText="Submit Commercial RFQ"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
