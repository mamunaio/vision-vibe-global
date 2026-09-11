import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { legalDocuments } from "@/data/legal";
import SectionLabel from "@/components/SectionLabel";
import { Lock, Scale, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Codex & Regulatory Governance | Vision Vibe Global",
  description:
    "Review Vision Vibe Global master trading terms, Incoterms 2020 rules, international sanctions disclosures, data privacy governance, and information security protocols.",
};

const docIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "privacy-governance": Lock,
  "terms-of-engagement": Scale,
  "regulatory-disclosures": ShieldCheck,
  "security-confidentiality": FileText,
};

export default function LegalIndexPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <SectionLabel theme="dark">INSTITUTIONAL GOVERNANCE</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Legal, Regulatory &amp; Compliance Codex
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Operating an international physical commodity trading book demands rigorous governance, transparent contract conventions, and strict adherence to cross-border statutory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Document Cards Grid */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalDocuments.map((doc) => {
              const IconComponent = docIcons[doc.slug] || FileText;

              return (
                <div
                  key={doc.slug}
                  className="bg-white border border-line-light rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-brand-blue group-hover:bg-navy-900 group-hover:text-accent-gold transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue font-mono block mb-1">
                        {doc.category}
                      </span>
                      <h2 className="font-display text-2xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                        {doc.title}
                      </h2>
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {doc.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      Revised: {doc.lastUpdated}
                    </span>
                    <Link
                      href={`/legal/${doc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-blue-hover"
                    >
                      <span>Read Policy Document</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
