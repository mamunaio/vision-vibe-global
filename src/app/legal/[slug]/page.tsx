import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { legalDocuments } from "@/data/legal";
import SectionLabel from "@/components/SectionLabel";
import { ShieldCheck, FileText, Lock, Scale, ArrowRight, Printer, Mail, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return legalDocuments.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocuments.find((d) => d.slug === slug);

  if (!doc) {
    return {
      title: "Legal & Regulatory Compliance | Vision Vibe Global",
    };
  }

  return {
    title: `${doc.title} | Vision Vibe Global`,
    description: doc.subtitle,
  };
}

const docIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "privacy-governance": Lock,
  "terms-of-engagement": Scale,
  "regulatory-disclosures": ShieldCheck,
  "security-confidentiality": FileText,
};

export default async function LegalDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = legalDocuments.find((d) => d.slug === slug);

  if (!doc) {
    notFound();
  }

  const IconComponent = docIcons[doc.slug] || FileText;

  return (
    <div className="flex flex-col w-full">
      {/* Top Legal Header Banner */}
      <section className="bg-navy-900 text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-gold bg-navy-800/80 px-2.5 py-1 rounded border border-navy-700">
                GOVERNANCE &amp; LEGAL CODEX
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Last Revised: {doc.lastUpdated}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {doc.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {doc.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Codex Layout */}
      <section className="bg-canvas-light py-12 lg:py-16 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Legal Navigation & Compliance Officer (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Document Switcher Card */}
              <div className="bg-white border border-line-light rounded-lg p-5 shadow-sm space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue font-mono block">
                  Institutional Charters
                </span>
                <nav className="space-y-1.5" aria-label="Legal Codex Navigation">
                  {legalDocuments.map((item) => {
                    const ItemIcon = docIcons[item.slug] || FileText;
                    const isActive = item.slug === doc.slug;

                    return (
                      <Link
                        key={item.slug}
                        href={`/legal/${item.slug}`}
                        className={`flex items-center justify-between p-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                          isActive
                            ? "bg-navy-900 text-white shadow-sm font-semibold"
                            : "text-slate-700 hover:text-navy-900 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <ItemIcon
                            className={`w-4 h-4 ${
                              isActive ? "text-accent-gold" : "text-slate-400"
                            }`}
                          />
                          <span>{item.category}</span>
                        </div>
                        {isActive && (
                          <ArrowRight className="w-3.5 h-3.5 text-accent-gold" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Compliance & General Counsel Desk */}
              <div className="bg-navy-950 text-white rounded-lg p-6 border border-navy-800 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold font-mono">
                  General Counsel &amp; Risk Desk
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  Regulatory Verification &amp; KYC
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For counterparty verification, sanctions screening documentation, or designated escrow agreements:
                </p>
                <div className="pt-1 space-y-2 text-xs font-mono">
                  <a
                    href="mailto:compliance@visionvibeglobal.com"
                    className="flex items-center gap-2 text-brand-blue-light hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>compliance@visionvibeglobal.com</span>
                  </a>
                  <div className="text-slate-400">
                    London HQ: 100 Bishopsgate, Level 24
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Legal Clauses & Statutes (8 Cols) */}
            <div className="lg:col-span-8 bg-white border border-line-light rounded-lg p-6 sm:p-10 shadow-sm space-y-8">
              <div className="flex items-center justify-between border-b border-line-light pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  <IconComponent className="w-4 h-4" />
                  <span>Official Policy Document</span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Reference: VVG-REG-{doc.slug.toUpperCase().slice(0, 8)}
                </div>
              </div>

              {/* Sections Render */}
              <div className="space-y-8 text-ink-primary">
                {doc.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                      {sec.content}
                    </p>
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-2 pt-1 pl-4">
                        {sec.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs sm:text-sm text-slate-700 leading-relaxed list-disc marker:text-brand-blue"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Official Attestation Sign-off */}
              <div className="pt-8 mt-8 border-t border-line-light bg-slate-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-10 rounded-b-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-sm font-bold text-ink-primary block">
                      Vision Vibe Global Executive Risk Committee
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Office of the General Counsel • International Merchant Operations
                    </span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  These statutes are periodically audited against prevailing ICC Paris guidelines, GAFTA arbitration rules, and international maritime safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
