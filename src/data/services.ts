export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  iconName: string;
  image: string;
  summary: string;
  deliverables: string[];
  methodology: { step: string; description: string }[];
  caseSnippet: {
    client: string;
    impact: string;
    metric: string;
  };
}

export const services: ServiceItem[] = [
  {
    slug: "commodity-sourcing-procurement",
    title: "Global Commodity Sourcing & Origination",
    shortDescription: "Direct mine-mouth, refinery, and farmgate origination securing high-grade physical commodities with guaranteed supply continuity.",
    category: "Origination",
    iconName: "Compass",
    image: "/images/metal-copper-warehouse.jpg",
    summary:
      "Vision Vibe Global connects tier-1 producers directly with industrial consumers and state procurement agencies. By eliminating redundant intermediary broker layers, we guarantee specification conformity, verified provenance, and long-term contract pricing stability across energy, metals, and agricultural bulks.",
    deliverables: [
      "Long-Term Offtake Agreements & Spot Allocation Contracts",
      "Producer Auditing, ESG Traceability & Provenance Verification",
      "Multi-Origin Supply Redundancy & Buffer Allocation Protocols",
      "Bespoke Physical Blending & Grading to End-User Specifications"
    ],
    methodology: [
      { step: "01. Producer Due Diligence", description: "Verifying supplier extraction capacity, port access, and contractual compliance records." },
      { step: "02. Specification Calibration", description: "Conducting independent laboratory assays to match buyers' precise chemical and mechanical tolerances." },
      { step: "03. Contractual Structuring", description: "Drafting standardized Incoterms contracts (FOB/CIF/CFR) with explicit penalty and force majeure clauses." },
      { step: "04. Origination Oversight", description: "Stationing on-site inspection teams during loading at origin terminals and storage silos." }
    ],
    caseSnippet: {
      client: "East Asian Steel Manufacturing Consortium",
      impact: "Secured a 3-year bilateral offtake agreement for 650,000 MT of metallurgical coking coal, mitigating regional spot price spikes.",
      metric: "650,000 MT Secured"
    }
  },
  {
    slug: "trade-finance-lc-structuring",
    title: "Trade Finance & Credit Structuring",
    shortDescription: "Mitigating cross-border financial exposure through documentary letters of credit (LC), bank guarantees, and structured trade credit.",
    category: "Finance",
    iconName: "Building2",
    image: "/images/port-terminal-dusk.jpg",
    summary:
      "Navigating cross-border commodity transactions demands airtight financial mechanics. We partner with tier-1 international banks to structure confirmed documentary letters of credit (DLC), standby letters of credit (SBLC), back-to-back facilities, and pre-export financing that insulate both buyers and sellers from liquidity or currency shocks.",
    deliverables: [
      "Irrevocable, Transferable & Confirmed Letters of Credit (LC) Execution",
      "Performance Bond (PB) & Bank Guarantee (BG) Issuance",
      "Warehouse Receipt Financing & Collateralized Inventory Credit",
      "Multi-Currency Settlement & Foreign Exchange Hedging"
    ],
    methodology: [
      { step: "01. Credit Counterparty Risk Audit", description: "Evaluating issuing and advising bank ratings and sovereign political risk indexes." },
      { step: "02. Financial Instrument Structuring", description: "Tailoring UCP 600-compliant documentation to prevent discrepancy-related banking hold-ups." },
      { step: "03. Escrow & Milestone Funding", description: "Releasing funds strictly against verified shipping documents (Bill of Lading, SGS Assay, Certificate of Origin)." },
      { step: "04. Settlement Reconciliation", description: "Finalizing prompt financial closure upon discharge port acceptance and quantitative tally." }
    ],
    caseSnippet: {
      client: "Mediterranean Agricultural Importer",
      impact: "Structured a $120M revolving documentary credit facility with 0% documentary discrepancies across 18 consecutive vessel discharges.",
      metric: "$120M Facility"
    }
  },
  {
    slug: "maritime-logistics-chartering",
    title: "Maritime Logistics, Chartering & Freight",
    shortDescription: "End-to-end bulk vessel chartering, containerized ocean freight, and port stevedoring with zero-demurrage precision.",
    category: "Logistics",
    iconName: "Globe2",
    image: "/images/hero-cargo-ship.jpg",
    summary:
      "Physical trading succeeds or fails at the dock. Our dedicated chartering desk books Handymax, Supramax, Panamax, and Capesize dry bulk carriers, as well as MR/LR chemical tankers. We optimize voyage speed, bunker consumption, and berth priority to guarantee delivery schedules under volatile maritime conditions.",
    deliverables: [
      "Dry Bulk & Liquid Chemical Vessel Time/Voyage Chartering",
      "Continuous Marine Telemetry & Real-Time Choke Point Routing",
      "Port Agency, Stevedoring & Berthing Priority Management",
      "Comprehensive Marine Cargo Insurance & General Average Protection"
    ],
    methodology: [
      { step: "01. Vessel Vetting & Laycan", description: "Inspecting vessel classification (IACS), age, P&I club coverage, and hold cleanliness." },
      { step: "02. Route Optimization", description: "Navigating international maritime corridors and adjusting routes around geopolitical bottlenecks." },
      { step: "03. Loading & Lashing Supervision", description: "Deploying marine surveyors to oversee draft surveys, stowage factors, and bill of lading issuance." },
      { step: "04. Discharge & Port Coordination", description: "Ensuring discharge equipment availability and direct transfer to rail or bonded silos without demurrage." }
    ],
    caseSnippet: {
      client: "Latin American Mineral Exporter",
      impact: "Chartered 24 Panamax voyages moving 1.6M MT of bauxite with an average loading turnaround of under 48 hours.",
      metric: "1.6M MT Moved"
    }
  },
  {
    slug: "quality-assay-inspection",
    title: "Quality Assurance, Grade Assay & Inspection",
    shortDescription: "Rigorous third-party testing (SGS, Bureau Veritas, Intertek) ensuring 100% compliance with contract specifications.",
    category: "Quality",
    iconName: "ShieldCheck",
    image: "/images/grain-bulk-silos.jpg",
    summary:
      "Grade disputes destroy margins and relationships. We mandate accredited third-party inspectors at both origin loading and destination discharge ports. From moisture content and calorific value to purity assays and grain grading, every shipment is certified to international ASTM, ISO, and GAFTA standards.",
    deliverables: [
      "Independent SGS / Bureau Veritas / Intertek Assay Protocols",
      "Comprehensive Certificate of Analysis (CoA) & Quantity Certificate",
      "Pre-Shipment Inspection (PSI) & Hold Cleanliness Certification",
      "Dispute Resolution & Non-Conformity Arbitration Protection"
    ],
    methodology: [
      { step: "01. Standard Benchmark Setup", description: "Establishing clear chemical and physical tolerance ranges in the commercial contract." },
      { step: "02. Random Composite Sampling", description: "Drawing continuous representative samples during conveyor loading per international standards." },
      { step: "03. Laboratory Analysis", description: "Conducting spectrographic, chromatographic, and proximate analyses in certified labs." },
      { step: "04. Sealed Certificate Issuance", description: "Binding final commercial invoicing to certified inspection reports presented under the LC." }
    ],
    caseSnippet: {
      client: "Middle Eastern Fertilizer Distributor",
      impact: "Maintained a 99.8% grade conformity rate across 400,000 MT of Diammonium Phosphate (DAP) shipments over 24 months.",
      metric: "99.8% Quality Conformity"
    }
  },
  {
    slug: "price-hedging-risk-management",
    title: "Commodity Price Hedging & Risk Management",
    shortDescription: "Shielding physical commodity margins against London Metal Exchange (LME), CME, and ICE benchmark volatility.",
    category: "Risk Management",
    iconName: "TrendingUp",
    image: "/images/energy-tank-terminal.jpg",
    summary:
      "Commodity price swings can erase trading margins overnight. Our quantitative risk desk executes derivative hedging strategies on major futures exchanges (LME, CME, ICE, SGX), aligning paper contracts with physical purchase and sale commitments to lock in trading margins regardless of market direction.",
    deliverables: [
      "Futures & Options Hedging against Contango and Backwardation",
      "Foreign Exchange (FX) Exposure Hedging for Cross-Currency Deals",
      "Counterparty Credit Risk Scoring & Country Exposure Limits",
      "Daily Mark-to-Market (MtM) Portfolio Valuation Reports"
    ],
    methodology: [
      { step: "01. Exposure Identification", description: "Calculating net physical open positions across all commodity divisions and contracts." },
      { step: "02. Hedge Ratio Calibration", description: "Determining optimal derivative instrument mix (swaps, futures, collars) to match delivery dates." },
      { step: "03. Execution on Exchanges", description: "Executing trades through prime brokers on major commodity bourses with strict stop-losses." },
      { step: "04. Physical Offset & Unwind", description: "Unwinding derivative hedges precisely as physical goods are priced and delivered." }
    ],
    caseSnippet: {
      client: "Southeast Asian Non-Ferrous Metals Processor",
      impact: "Protected operating margins on 35,000 MT of copper cathode during a 28% international price drop via structured collar options.",
      metric: "$42M Margin Preserved"
    }
  },
  {
    slug: "warehousing-customs-clearance",
    title: "Bonded Warehousing, Storage & Customs",
    shortDescription: "Strategic terminal storage, temperature-monitored silos, and seamless regulatory customs clearance at key global hubs.",
    category: "Terminal Operations",
    iconName: "Layers",
    image: "/images/port-terminal-dusk.jpg",
    summary:
      "Physical trading requires immediate domestic staging and customs fluency. We operate bonded warehousing facilities, secure tank farms, and grain silos across major maritime terminals. Our customs specialists manage tariff codes, import duties, and biosecurity clearances to eliminate port hold-ups.",
    deliverables: [
      "Bonded Terminal Warehousing & Duty-Deferred Staging",
      "Bulk Liquid Tank Farms & Climate-Controlled Grain Elevators",
      "Full Customs Clearance, HS Tariff Classification & Duty Drawback",
      "First-Mile and Last-Mile Intermodal Rail/Truck Distribution"
    ],
    methodology: [
      { step: "01. Hub Allocation", description: "Selecting strategically positioned bonded warehouses closest to final consumption centers." },
      { step: "02. Inward Clearance", description: "Filing advanced customs manifests and harmonized tariff paperwork prior to vessel arrival." },
      { step: "03. Safe Physical Custody", description: "Storing commodities with 24/7 security, continuous temperature monitoring, and pest control." },
      { step: "04. Outward Dispatch", description: "Managing rapid cross-docking and intermodal transfer upon final commercial release." }
    ],
    caseSnippet: {
      client: "European Chemical Manufacturer",
      impact: "Established a 50,000 MT bonded storage buffer in Antwerp, reducing factory supply lead times from 3 weeks to 36 hours.",
      metric: "36h Delivery Time"
    }
  }
];
