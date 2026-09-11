import React from "react";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck, FileText, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial RFQ & Trade Desk Inquiries",
  description:
    "Submit an official Request for Quotation (RFQ) for physical commodities to Vision Vibe Global trading desks. Energy, metals, agricultural bulk, and ocean chartering inquiries.",
};

export default function ContactPage() {
  const offices = [
    {
      city: "London (European HQ & Metals Desk)",
      address: "100 Bishopsgate, Level 24, London EC2N 4AG, United Kingdom",
      phone: "+44 (0) 20 3889 7100",
      email: "metals@visionvibeglobal.com",
    },
    {
      city: "Singapore (APAC Maritime & Energy Hub)",
      address: "Marina Bay Financial Centre, Tower 3, Level 38, Singapore 018982",
      phone: "+65 6829 7300",
      email: "singapore@visionvibeglobal.com",
    },
    {
      city: "Dubai (Middle East & Agri Desk)",
      address: "DIFC Gate Precinct 4, Level 7, Dubai, UAE",
      phone: "+971 4 428 9200",
      email: "agri@visionvibeglobal.com",
    },
    {
      city: "Houston (Americas Energy & Polymers)",
      address: "Energy Corridor, Two Westlake Park, Houston, TX 77079, USA",
      phone: "+1 (713) 821-4900",
      email: "energy@visionvibeglobal.com",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Navy Background) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionLabel theme="dark">COMMERCIAL ENGAGEMENT DESK</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Submit a formal Request for Quotation (RFQ).
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Our commodity trading desks evaluate spot parcels and multi-year offtake inquiries, issuing indicative Soft Corporate Offers (SCO) with verified lab specs and vessel laycans.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information (Off-White Background) */}
      <section className="bg-canvas-light py-20 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Interactive RFQ Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Trade Desks & Assurances (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Desks Card */}
              <div className="bg-white border border-line-light rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Direct Desk Contacts
                </span>
                <h2 className="font-display text-2xl font-bold text-ink-primary tracking-tight">
                  Specialized Trading Desks
                </h2>
                <div className="space-y-4 text-sm text-ink-muted">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Central Commercial Inquiries
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <a
                          href="mailto:trade@visionvibeglobal.com"
                          className="text-brand-blue hover:underline font-mono text-xs"
                        >
                          trade@visionvibeglobal.com
                        </a>
                        <a
                          href="mailto:mamunahmed24.ma@gmail.com"
                          className="text-brand-blue hover:underline font-mono text-xs"
                        >
                          mamunahmed24.ma@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Anchor className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Maritime Chartering &amp; Laytime
                      </span>
                      <a
                        href="mailto:chartering@visionvibeglobal.com"
                        className="text-brand-blue hover:underline font-mono text-xs"
                      >
                        chartering@visionvibeglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Trade Finance &amp; LC Banking
                      </span>
                      <a
                        href="mailto:tradefinance@visionvibeglobal.com"
                        className="text-brand-blue hover:underline font-mono text-xs"
                      >
                        tradefinance@visionvibeglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Global Trading Switchboard
                      </span>
                      <span className="text-ink-primary font-mono text-xs">+44 (0) 20 3889 7100</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink-primary block">
                        Trading Desk SLA
                      </span>
                      <span className="text-xs">Initial commercial feedback and SCO issued within 12 business hours.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trading Protocol Card */}
              <div className="bg-navy-950 text-white rounded-lg p-6 sm:p-8 border border-navy-800 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold">
                  Compliance &amp; Trade Security
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Physical Trading Protocols
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span>Strict adherence to OFAC, EU, and UN sanctions compliance lists and export controls.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span>Transactions executed under standard ICC UCP 600 rules and GAFTA/FOSFA arbitration covenants.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Regional Trade Desks Grid */}
      <section id="offices" className="bg-white py-20 lg:py-24 border-b border-line-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <SectionLabel theme="light">COMMODITY HUBS</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-primary tracking-tight">
              Global Trading Desks
            </h2>
            <p className="text-base text-ink-muted">
              Direct physical operations and correspondent desks in major commercial terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-canvas-light border border-line-light rounded-lg p-6 sm:p-8 space-y-4 hover:border-slate-300 transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-ink-primary">
                  {office.city}
                </h3>
                <div className="space-y-2 text-xs text-ink-muted">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="font-mono">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="text-brand-blue font-mono">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
