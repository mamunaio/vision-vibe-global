import React from "react";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Clock, ShieldCheck, FileText, Anchor, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submit Commercial RFQ | Physical Commodities Trading Desk",
  description:
    "Official Request for Quotation (RFQ) portal for Vision Vibe Global. Submit formal purchase inquiries for energy products, industrial metals, agricultural bulk, and ocean chartering.",
};

export default function RFQPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Executive Hero Banner */}
      <section className="bg-navy-900 text-white py-14 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/20 border border-brand-blue/40 rounded-full text-xs font-mono text-brand-blue-light">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              COMMERCIAL TRADING BOOK OPEN • SPOT &amp; CONTRACT LAYCANS
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Commercial Request for Quotation (RFQ)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Submit your cargo specifications, volume requirements, and preferred Incoterms 2020. Our physical commodity trading desks will review counterparty credentials and issue an indicative Soft Corporate Offer (SCO) within 12 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main RFQ Submission Grid */}
      <section className="bg-canvas-light py-16 lg:py-20 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Official RFQ Interactive Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: RFQ Protocols & Verification Assurances (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Specialized Desks Card */}
              <div className="bg-white border border-line-light rounded-lg p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Desk Routing
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                    12h SLA Active
                  </span>
                </div>

                <h2 className="font-display text-xl font-bold text-ink-primary tracking-tight">
                  Direct Trading Desk Routing
                </h2>

                <div className="space-y-4 text-xs text-ink-muted">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink-primary block uppercase tracking-wider text-[11px]">
                        Energy &amp; Refined Products Desk
                      </span>
                      <a href="mailto:energy@visionvibeglobal.com" className="text-brand-blue font-mono hover:underline">
                        energy@visionvibeglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink-primary block uppercase tracking-wider text-[11px]">
                        Metals &amp; Industrial Minerals
                      </span>
                      <a href="mailto:metals@visionvibeglobal.com" className="text-brand-blue font-mono hover:underline">
                        metals@visionvibeglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Anchor className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink-primary block uppercase tracking-wider text-[11px]">
                        Maritime Chartering &amp; Port Laycans
                      </span>
                      <a href="mailto:chartering@visionvibeglobal.com" className="text-brand-blue font-mono hover:underline">
                        chartering@visionvibeglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink-primary block uppercase tracking-wider text-[11px]">
                        Trade Finance &amp; LC Banking (UCP 600)
                      </span>
                      <a href="mailto:tradefinance@visionvibeglobal.com" className="text-brand-blue font-mono hover:underline">
                        tradefinance@visionvibeglobal.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RFQ Evaluation Protocol */}
              <div className="bg-navy-950 text-white rounded-lg p-6 sm:p-8 border border-navy-800 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold font-mono">
                  Execution Protocol
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  RFQ Processing Workflow
                </h3>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span><strong>1. KYC &amp; Sanctions Screening:</strong> Automated counterparty verification under OFAC/EU/UN frameworks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span><strong>2. Desk Allocation:</strong> Physical commodity trader evaluates parcel availability, assay specs, and port logistics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span><strong>3. SCO Issuance:</strong> Draft Soft Corporate Offer delivered to buyer procurement with indicative pricing and laycan window.</span>
                  </li>
                </ul>
              </div>

              {/* General Inquiries Link */}
              <div className="bg-white border border-line-light rounded-lg p-5 text-xs text-ink-muted flex items-center justify-between">
                <div>
                  <span className="font-semibold text-ink-primary block">Looking for corporate offices?</span>
                  <span>View London, Singapore, Dubai &amp; Houston locations.</span>
                </div>
                <Link
                  href="/contact"
                  className="font-semibold text-brand-blue hover:text-brand-blue-hover underline whitespace-nowrap ml-4"
                >
                  Office Directory &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
