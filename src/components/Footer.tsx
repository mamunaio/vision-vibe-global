"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowRight, ShieldCheck, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800" aria-label="Site Footer">
      {/* Top Footer: Executive Briefing Subscription & Global Reach */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-semibold tracking-editorial uppercase text-accent-gold">
                Executive Perspectives
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                Receive our monthly intelligence briefing on macroeconomic resilience.
              </h3>
              <p className="text-sm text-slate-400 max-w-lg">
                Curated insights delivered directly to institutional leaders, board members, and senior operating executives.
              </p>
            </div>
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-navy-900 border border-navy-700 p-4 rounded-md flex items-center gap-3 text-sm text-slate-200 max-w-md lg:ml-auto">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you. Your address has been added to our Executive Intelligence Briefing distribution.</span>
                </div>
              ) : (
                <>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto"
                  >
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter executive email address"
                        className="w-full pl-10 pr-4 py-3 bg-navy-900 border border-navy-700 text-white placeholder-slate-400 text-sm rounded-md focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-5 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium rounded-md transition-colors"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </button>
                  </form>
                  <p className="text-xs text-slate-500 mt-2 text-right">
                    Strict adherence to institutional privacy standards. Unsubscribe at any time.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Headquarters */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md">
              <div className="relative h-16 sm:h-20 w-auto max-w-[240px]">
                <Image
                  src="/images/footer-logo.png"
                  alt="Vision Vibe Global Official Brand"
                  width={240}
                  height={102}
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] group-hover:opacity-95 transition-opacity"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              International physical commodities merchant trading house. Connecting resource producers with global industrial consumers through reliable ocean logistics, trade finance, and SGS-certified execution.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" />
                <span>Trade Desks: London • Singapore • Dubai • Zurich • Houston • Tokyo</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                <span>GAFTA • FOSFA • ICC UCP 600 • LME Standards Compliant</span>
              </div>
            </div>
          </div>

          {/* Column 2: Trading Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Trading Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/commodity-sourcing-procurement" className="hover:text-white transition-colors">
                  Commodity Origination
                </Link>
              </li>
              <li>
                <Link href="/services/trade-finance-lc-structuring" className="hover:text-white transition-colors">
                  Trade Finance &amp; LC
                </Link>
              </li>
              <li>
                <Link href="/services/maritime-logistics-chartering" className="hover:text-white transition-colors">
                  Bulk Chartering &amp; Freight
                </Link>
              </li>
              <li>
                <Link href="/services/quality-assay-inspection" className="hover:text-white transition-colors">
                  Quality Assay &amp; Inspection
                </Link>
              </li>
              <li>
                <Link href="/services/price-hedging-risk-management" className="hover:text-white transition-colors">
                  Price Hedging &amp; Risk
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing-customs-clearance" className="hover:text-white transition-colors">
                  Terminal Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commodities & Goods */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Commodities &amp; Goods
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries#energy-petroleum" className="hover:text-white transition-colors">
                  Energy &amp; Petroleum
                </Link>
              </li>
              <li>
                <Link href="/industries#metals-minerals" className="hover:text-white transition-colors">
                  Industrial Metals &amp; Ores
                </Link>
              </li>
              <li>
                <Link href="/industries#agri-commodities-softs" className="hover:text-white transition-colors">
                  Agricultural Commodities
                </Link>
              </li>
              <li>
                <Link href="/industries#industrial-chemicals-polymers" className="hover:text-white transition-colors">
                  Petrochemicals &amp; Resins
                </Link>
              </li>
              <li>
                <Link href="/industries#heavy-machinery-equipment" className="hover:text-white transition-colors">
                  Heavy Industrial Machinery
                </Link>
              </li>
              <li>
                <Link href="/industries#wholesale-consumer-goods" className="hover:text-white transition-colors">
                  Wholesale Consumer Goods
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Firm & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              The Trading House
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Vision Vibe Global
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-white transition-colors">
                  Trading Desk Leadership
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/rfq" className="hover:text-white transition-colors text-brand-blue-light font-semibold">
                  Submit Commercial RFQ &rarr;
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Global Trade Desk Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="pt-12 mt-12 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vision Vibe Global. All rights reserved. International Physical Merchant Trading House.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/legal/privacy-governance" className="hover:text-white transition-colors">
              Privacy Governance
            </Link>
            <Link href="/legal/terms-of-engagement" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/legal/regulatory-disclosures" className="hover:text-white transition-colors">
              Regulatory Disclosures
            </Link>
            <Link href="/legal/security-confidentiality" className="hover:text-white transition-colors">
              Security &amp; Confidentiality
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
