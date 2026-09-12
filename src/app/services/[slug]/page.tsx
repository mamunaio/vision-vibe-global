import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Building,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Practice Not Found",
    };
  }

  return {
    title: `${service.title} | Vision Vibe Global`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related practices (other practices)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Service Header Banner (Deep Navy) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Trading Capabilities</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <SectionLabel theme="dark">{service.category} DIVISION</SectionLabel>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                {service.summary}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  <span>Submit Commercial RFQ</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="#methodology" variant="outline-light" size="lg">
                  <span>Review Execution Cadence</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden border border-navy-700 bg-navy-950 shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Deliverables & Case Evidence (Off-White Background) */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Deliverables Section */}
              <div className="space-y-6">
                <SectionLabel theme="light">COMMERCIAL SCOPE</SectionLabel>
                <h2 className="font-display text-3xl font-bold text-ink-primary tracking-tight">
                  Operational Deliverables &amp; Guarantees
                </h2>
                <p className="text-base text-ink-muted leading-relaxed">
                  Every transaction is backed by clear physical delivery schedules, certified lab assays, and standardized trade finance instruments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-line-light rounded-lg p-5 flex items-start gap-3 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-ink-primary leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology Section */}
              <div id="methodology" className="space-y-6 scroll-mt-24">
                <SectionLabel theme="light">EXECUTION CADENCE</SectionLabel>
                <h2 className="font-display text-3xl font-bold text-ink-primary tracking-tight">
                  Phased Trade Execution Process
                </h2>
                <p className="text-base text-ink-muted leading-relaxed">
                  Our rigorous execution protocols ensure smooth vessel loading, customs documentation, and prompt financial settlement.
                </p>

                <div className="space-y-4 pt-2">
                  {service.methodology.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-line-light rounded-lg p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <span className="text-xs font-mono font-bold px-2.5 py-1 bg-blue-50 text-brand-blue rounded border border-blue-100 self-start">
                        {m.step}
                      </span>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (4 cols): Case Evidence & Trade Standards */}
            <div className="lg:col-span-4 space-y-8">
              {/* Case Snippet Box */}
              <div className="bg-navy-900 text-white rounded-lg p-6 sm:p-8 border border-navy-700 shadow-lg space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold">
                  Demonstrated Tonnage Delivered
                </span>
                <h3 className="font-display text-xl text-white font-bold">
                  {service.caseSnippet.client}
                </h3>
                <div className="text-3xl font-display font-extrabold text-accent-gold pt-1 tabular-nums">
                  {service.caseSnippet.metric}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed border-t border-navy-800 pt-4">
                  {service.caseSnippet.impact}
                </p>
                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="sm" className="w-full">
                    <span>Submit Similar RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Advisory Assurance Box */}
              <div className="bg-white border border-line-light rounded-lg p-6 space-y-4 shadow-sm">
                <h4 className="font-display text-lg font-bold text-ink-primary">
                  Trading Governance Standards
                </h4>
                <ul className="space-y-2.5 text-xs text-ink-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>GAFTA, FOSFA, and LME standard contract rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>Mandatory pre-shipment SGS / Intertek inspections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>Strict ICC UCP 600 banking compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practices */}
      <section className="bg-white py-16 lg:py-20 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel theme="light">ADJACENT TRADING CAPABILITIES</SectionLabel>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-primary mt-2 tracking-tight">
              Complementary Merchant Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rel) => (
              <Card
                key={rel.slug}
                href={`/services/${rel.slug}`}
                theme="light"
                className="group flex flex-col justify-between h-full bg-canvas-light hover:border-slate-400 transition-all"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-brand-blue">
                  <span>Explore Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <CTASection
        theme="dark"
        sectionTag="COMMERCIAL ALLOCATION"
        title={`Inquire about our ${service.title}.`}
        subtitle="Connect with our desk directors to review physical allocations, indicative pricing, and discharge windows."
        primaryBtnText="Submit Commercial RFQ"
        primaryBtnHref="/rfq"
      />
    </div>
  );
}
