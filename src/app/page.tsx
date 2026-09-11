import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import StatsBand from "@/components/StatsBand";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Ship,
  FileCheck,
  Anchor,
  Layers,
} from "lucide-react";

export default function HomePage() {
  // Featured insights
  const previewInsights = insights.slice(0, 3);

  // Technical Commodity Specifications for Real-World Authenticity
  const commoditySpecs = [
    {
      commodity: "Electrolytic Copper Cathodes",
      grade: "Grade A (Cu 99.99%)",
      standard: "BS EN 1978:1998 (LME Reg)",
      origins: "Chile • Zambia • Peru",
      allocation: "35,000 MT / month",
      incoterms: "CIF / FOB / Warehouse Warrant",
    },
    {
      commodity: "Low-Sulfur Fuel Oil (VLSFO)",
      grade: "0.50% Max Sulfur",
      standard: "ISO 8217:2017 RMG 380",
      origins: "Rotterdam • Fujairah • Singapore",
      allocation: "120,000 MT / month",
      incoterms: "CIF / Ex-Wharf / Bunkers",
    },
    {
      commodity: "Milling Wheat (Human Grade)",
      grade: "Protein 12.5% Min, Test Wt 78kg/hl",
      standard: "GAFTA 119 / USDA No. 2",
      origins: "North America • Black Sea",
      allocation: "75,000 MT / month",
      incoterms: "CIF / CFR / FOB Stowed",
    },
    {
      commodity: "Virgin Polymer Resin (HDPE)",
      grade: "Blow Molding / Film Grade",
      standard: "ASTM D1238 / ISO 1133",
      origins: "Middle East • US Gulf Coast",
      allocation: "15,000 MT / month",
      incoterms: "CIF / CFR (40ft High Cube)",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION: Asymmetric Editorial Grid with Real Ocean Photography */}
      <section className="relative bg-navy-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-navy-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Main Hero Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">
              <SectionLabel theme="dark">INTERNATIONAL PHYSICAL MERCHANT TRADING HOUSE</SectionLabel>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
                Connecting global markets with <span className="text-accent-gold">resilient</span> physical commodities and maritime logistics.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Vision Vibe Global originates, finances, and delivers energy fuels, industrial metals, agricultural bulk, and polymer intermediates across 45+ international discharge ports.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/rfq" variant="primary" size="lg">
                  <span>Submit Commercial RFQ</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="#specs" variant="outline-light" size="lg">
                  <span>Review Commodity Specs</span>
                </Button>
              </div>

              {/* Sub-hero trust metrics strip */}
              <div className="pt-8 border-t border-navy-800 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">2.8M+ MT</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Traded Annually</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">45+ Ports</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Global Discharges</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">$1.8B+</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Trade Volume</div>
                </div>
              </div>
            </div>

            {/* Right Column: Real Ocean Photography & Physical Desk Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              {/* Asymmetric Card 1: Real Ocean Vessel Photography */}
              <Link
                href="/services/maritime-logistics-chartering"
                className="group block bg-navy-850 border border-navy-700 hover:border-brand-blue rounded-lg overflow-hidden transition-all duration-200 shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                  <Image
                    src="/images/hero-cargo-ship.jpg"
                    alt="Panamax Commercial Bulk Cargo Carrier at Sea"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-navy-900/90 backdrop-blur text-[11px] font-mono uppercase tracking-wider text-accent-gold rounded border border-navy-700">
                      Live Fleet Operations
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Panamax &amp; Supramax Bulk Corridors
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      Ocean Logistics &amp; Zero-Demurrage Stevedoring
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between text-xs text-slate-400 border-t border-navy-800">
                  <span>Explore vessel chartering &amp; laycan terms</span>
                  <span className="text-accent-gold font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View desk <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>

              {/* Asymmetric Card 2: Physical Sourcing Guarantee */}
              <div className="bg-navy-950 border border-navy-800 rounded-lg p-6 space-y-3 shadow-md">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2 font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Producer Origination</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">SGS / GAFTA</span>
                </div>
                <h4 className="font-display text-base sm:text-lg text-white font-semibold leading-snug">
                  Direct mine-mouth, refinery, and farmgate offtakes backed by confirmed letters of credit.
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We eliminate speculative broker chains. Every cargo parcel is verified by independent accredited surveyors before bills of lading are issued.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-navy-900 text-xs">
                  <Link
                    href="/services/trade-finance-lc-structuring"
                    className="inline-flex items-center gap-1 font-semibold text-brand-blue-light hover:text-white transition-colors"
                  >
                    <span>Review LC &amp; payment mechanics</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL COMMODITY SPECIFICATION MATRIX: Instant Enterprise Credibility */}
      <section id="specs" className="bg-white py-16 lg:py-24 border-b border-line-light scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl space-y-4">
              <SectionLabel theme="light">COMMERCIAL SPECIFICATION BENCHMARKS</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary tracking-tight">
                Standardized grades traded under international rules.
              </h2>
              <p className="text-base sm:text-lg text-ink-muted">
                Indicative physical commodity allocations available for spot delivery and multi-year bilateral offtake contracts.
              </p>
            </div>
            <Button href="/rfq" variant="primary" size="md">
              <span>Request Custom Spec Sheet</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Responsive Spec Table */}
          <div className="overflow-x-auto border border-line-light rounded-lg shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-900 text-slate-300 font-semibold uppercase tracking-wider text-[11px] border-b border-navy-800">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Commodity Division</th>
                  <th className="py-4 px-4 sm:px-6">Standard Specification</th>
                  <th className="py-4 px-4 sm:px-6">Governing Standards</th>
                  <th className="py-4 px-4 sm:px-6">Key Origins</th>
                  <th className="py-4 px-4 sm:px-6">Typical Allocation</th>
                  <th className="py-4 px-4 sm:px-6">Incoterms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {commoditySpecs.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-ink-primary font-display text-sm">
                      {item.commodity}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-700 font-medium">
                      {item.grade}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-brand-blue font-semibold">
                      {item.standard}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">
                      {item.origins}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-ink-primary">
                      {item.allocation}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500 font-medium">
                      {item.incoterms}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 mt-4 text-right">
            Independent assay certificates issued by SGS, Bureau Veritas, or Intertek upon loading. Exact chemical assay tolerances provided in Soft Corporate Offer (SCO).
          </p>
        </div>
      </section>

      {/* 3. "CORE TRADING CAPABILITIES": Broadsheet Editorial Layout with Real Photography */}
      <section className="bg-canvas-light py-20 lg:py-28 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <SectionLabel theme="light">INTEGRATED COMMODITY CAPABILITIES</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary tracking-tight">
              Physical trading execution from origin to discharge.
            </h2>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              We eliminate intermediaries by combining direct producer sourcing with chartered ocean freight, bonded storage terminals, and structured trade finance.
            </p>
          </div>

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
                    <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors mb-3 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-ink-muted leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:text-brand-blue-hover">
                  <span>Review Operational Cadence</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/services" variant="secondary" size="md">
              <span>View All 6 Trading Capabilities</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TRADE CORRIDOR: High-Impact Photography & Maritime Case */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Case Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel theme="dark">FEATURED MARITIME TRADE CORRIDOR</SectionLabel>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                Trans-Atlantic bulk grain corridor: <span className="text-accent-gold font-bold">520,000 MT delivered with zero demurrage.</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                When drought and regional shipping friction threatened grain supplies for state flour millers across North Africa and the Mediterranean, Vision Vibe Global engineered a high-volume transatlantic grain bridge.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Multi-origin origination:</strong> Sourced certified grade milling wheat across North and South American export silos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Panamax charter fleet:</strong> Deployed 10 chartered bulkers equipped with automated atmospheric moisture and CO2 sensors.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Airtight LC execution:</strong> 100% clean presentation under confirmed irrevocable letters of credit with zero bank discrepancies.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button href="/services/maritime-logistics-chartering" variant="primary" size="md">
                  <span>Review Chartering Terms</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/rfq" variant="outline-light" size="md">
                  <span>Submit Similar RFQ</span>
                </Button>
              </div>
            </div>

            {/* Right Case Graphic: Real Port Terminal Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-80 sm:h-96 lg:h-[440px] rounded-lg overflow-hidden border border-navy-700 bg-navy-900 shadow-2xl">
                <Image
                  src="/images/port-terminal-dusk.jpg"
                  alt="Deep-water Port Terminal at Dusk with Gantry Cranes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <div>
                    <span className="font-mono text-accent-gold uppercase tracking-wider block text-[10px]">
                      Discharge Port Telemetry
                    </span>
                    <span className="font-display text-base font-bold tracking-tight">Port of Rotterdam &amp; Antwerp Hubs</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-300 uppercase block">Average Laytime</span>
                    <span className="font-mono font-bold text-emerald-400">38.4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & STATS BAND */}
      <StatsBand theme="light" />

      {/* 6. COMMODITY DIVISIONS PREVIEW: Real Industrial Photography */}
      <section className="bg-canvas-light py-20 lg:py-28 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <SectionLabel theme="light">COMMODITIES &amp; GOODS DIVISIONS</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary tracking-tight">
                Bulk raw materials and industrial capital merchandise.
              </h2>
              <p className="text-base sm:text-lg text-ink-muted">
                From refined liquid fuels and cathode copper to milling grain and petrochemical polymers.
              </p>
            </div>
            <Button href="/industries" variant="secondary" size="md">
              <span>View All 6 Commodity Divisions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Division 1: Metals */}
            <Link
              href="/industries#metals-minerals"
              className="group block bg-white border border-line-light rounded-lg overflow-hidden shadow-sm hover:border-slate-400 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/metal-copper-warehouse.jpg"
                  alt="Industrial Copper Cathodes Warehouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Metals &amp; Minerals
                </span>
                <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                  Industrial Metals, Ores &amp; Concentrates
                </h3>
                <p className="text-xs text-ink-muted line-clamp-2">
                  LME-grade copper cathodes (99.99%), aluminum ingots, and steel billets sourced directly from primary smelters.
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
                  <span>View Metal Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Division 2: Energy */}
            <Link
              href="/industries#energy-petroleum"
              className="group block bg-white border border-line-light rounded-lg overflow-hidden shadow-sm hover:border-slate-400 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/energy-tank-terminal.jpg"
                  alt="Coastal Petroleum Storage Terminal and Tankers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Energy Products
                </span>
                <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                  Energy &amp; Refined Petroleum Products
                </h3>
                <p className="text-xs text-ink-muted line-clamp-2">
                  Crude oil, LNG, and low-sulfur marine gas oil (VLSFO) managed through international terminal networks.
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
                  <span>View Energy Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Division 3: Agriculture */}
            <Link
              href="/industries#agri-commodities-softs"
              className="group block bg-white border border-line-light rounded-lg overflow-hidden shadow-sm hover:border-slate-400 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/grain-bulk-silos.jpg"
                  alt="Agricultural Grain Elevators and Ship Loader"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Agricultural Bulk
                </span>
                <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                  Agricultural Commodities &amp; Agri-Bulk
                </h3>
                <p className="text-xs text-ink-muted line-clamp-2">
                  Milling wheat, yellow maize, soybeans, and edible oils traded under international GAFTA and FOSFA contracts.
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-blue flex items-center gap-1">
                  <span>View Agri Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS / TRADE INTELLIGENCE PREVIEW */}
      <section className="bg-white py-20 lg:py-28 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <SectionLabel theme="light">TRADE INTELLIGENCE &amp; FREIGHT PERSPECTIVES</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary tracking-tight">
                Market intelligence for international procurement.
              </h2>
              <p className="text-base sm:text-lg text-ink-muted">
                Frontline analysis on Baltic freight indexes, documentary credit mechanics, and commodity basis hedging.
              </p>
            </div>
            <Button href="/insights" variant="secondary" size="md">
              <span>View All Market Briefings</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewInsights.map((article) => (
              <Card
                key={article.slug}
                href={`/insights/${article.slug}`}
                theme="light"
                className="group flex flex-col justify-between h-full bg-canvas-light hover:border-slate-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold uppercase tracking-wider text-brand-blue">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div>
                    <span className="font-medium text-ink-primary block">{article.author.name}</span>
                    <span className="text-slate-400">{article.date}</span>
                  </div>
                  <span className="text-brand-blue font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER CTA: Official Commercial RFQ Prompt */}
      <CTASection
        theme="dark"
        sectionTag="COMMERCIAL CONTRACTING"
        title="Secure physical commodity allocations for FY27."
        subtitle="Submit a formal Request for Quotation (RFQ) or connect with our trading desk directors to discuss delivery laycans and payment terms."
        primaryBtnText="Transmit Commercial RFQ"
        primaryBtnHref="/rfq"
        secondaryBtnText="Review Commodities Traded"
        secondaryBtnHref="/industries"
      />
    </div>
  );
}
