import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import {
  Compass,
  Layers,
  TrendingUp,
  Globe2,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trading Capabilities & Merchant Services",
  description:
    "Explore Vision Vibe Global's physical commodity capabilities: Commodity Sourcing, Trade Finance & LC Execution, Maritime Logistics & Chartering, Quality Assay, Price Hedging, and Terminal Warehousing.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Globe2: <Globe2 className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Dark Navy) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionLabel theme="dark">MERCHANT SERVICES</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Integrated physical execution from origin to discharge.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We eliminate supply chain vulnerabilities through direct producer relationships, ocean vessel chartering, structured letters of credit, and independent SGS grade certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Grid (Alternating Off-white) */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card
                key={service.slug}
                href={`/services/${service.slug}`}
                theme="light"
                className="group flex flex-col justify-between h-full bg-white hover:border-slate-400 transition-all shadow-sm overflow-hidden p-0"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-navy-900/90 text-[10px] font-mono uppercase tracking-wider text-accent-gold rounded">
                        0{idx + 1} // {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-display text-2xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors mb-3 leading-snug">
                      {service.title}
                    </h2>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Core Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Commercial Scope:
                    </span>
                    {service.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-ink-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:text-brand-blue-hover">
                <span>Review Operational Cadence</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Execution Cadence (Contrasting Navy) */}
      <section className="bg-navy-950 text-white py-20 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <SectionLabel theme="dark" className="justify-center">CONTRACT EXECUTION CADENCE</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The four pillars of physical trade execution.
            </h2>
            <p className="text-base text-slate-300">
              How our commercial trading desks guarantee contract sanctity and cargo delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-900 border border-navy-800 p-6 rounded-lg space-y-3">
              <span className="text-accent-gold font-display text-2xl font-extrabold">01</span>
              <h3 className="font-display text-lg text-white font-bold">Origin Due Diligence</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct mine-mouth, refinery, or silo audit verifying extraction capacity and ethical provenance.
              </p>
            </div>
            <div className="bg-navy-900 border border-navy-800 p-6 rounded-lg space-y-3">
              <span className="text-accent-gold font-display text-2xl font-extrabold">02</span>
              <h3 className="font-display text-lg text-white font-bold">Specification &amp; Lab Assay</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-shipment inspection by accredited agencies (SGS, Intertek) matching buyer chemical tolerances.
              </p>
            </div>
            <div className="bg-navy-900 border border-navy-800 p-6 rounded-lg space-y-3">
              <span className="text-accent-gold font-display text-2xl font-extrabold">03</span>
              <h3 className="font-display text-lg text-white font-bold">Trade Finance &amp; Escrow</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                UCP 600-compliant letters of credit and performance bonds guaranteeing financial security.
              </p>
            </div>
            <div className="bg-navy-900 border border-navy-800 p-6 rounded-lg space-y-3">
              <span className="text-accent-gold font-display text-2xl font-extrabold">04</span>
              <h3 className="font-display text-lg text-white font-bold">Vessel Charter &amp; Discharge</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated ocean bulk transport with continuous route tracking and zero-demurrage stevedoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        theme="light"
        sectionTag="COMMERCIAL INQUIRIES"
        title="Request commodity allocation or vessel laycan availability."
        subtitle="Our commodity desk directors are available for structured commercial discussions and indicative price quotes."
        primaryBtnText="Submit Commercial RFQ"
        primaryBtnHref="/rfq"
      />
    </div>
  );
}
