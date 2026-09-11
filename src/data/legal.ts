export interface LegalDocument {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy-governance",
    title: "Global Commercial Privacy & Data Governance Framework",
    subtitle: "Standards for handling counterparty identification, trade manifests, and corporate entity data across our international trading operations.",
    category: "Data Privacy & Governance",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Scope & Regulatory Framework",
        content: "Vision Vibe Global and its operating subsidiaries adhere to stringent data protection standards across all jurisdictions where we originate, store, or clear physical commodities. Our privacy governance architecture aligns with the European Union General Data Protection Regulation (EU GDPR), United Kingdom Data Protection Act 2018, Singapore Personal Data Protection Act (PDPA), and Dubai International Financial Centre (DIFC) Data Protection Law."
      },
      {
        heading: "2. Categories of Commercial Counterparty Data Collected",
        content: "In the course of executing wholesale physical transactions, documentary letters of credit, and vessel charters, we collect and process specific entity and representative data, including:",
        bullets: [
          "Corporate Know-Your-Customer (KYC) records, certificates of incorporation, and beneficial ownership declarations.",
          "Authorized signatory credentials, specimen signatures, and corporate power-of-attorney documents.",
          "Trade transaction manifests, bills of lading, customs declarations, and cargo assay certificates.",
          "Banking information, SWIFT BIC codes, and designated escrow account details for documentary settlement.",
          "Vessel telemetry, captain and chartering officer identification, and discharge port agent manifests."
        ]
      },
      {
        heading: "3. Lawful Basis for Processing Commercial Data",
        content: "All counterparty data is processed under strict lawful bases: (a) Performance of physical purchase, sale, and charterparty contracts; (b) Compliance with statutory anti-money laundering (AML) and international trade sanctions regulations; and (c) Legitimate commercial interests in securing cross-border trade finance."
      },
      {
        heading: "4. Cross-Border Data Transfers & Security Measures",
        content: "Given the multinational footprint of our commodity desks (Geneva, London, Dubai, Singapore, and Houston), trade documentation is transferred securely across borders. Transfers outside the EEA/UK rely on approved Standard Contractual Clauses (SCCs) and end-to-end TLS 1.3 encryption. We never sell, lease, or monetize commercial counterparty data to third-party data brokers."
      },
      {
        heading: "5. Statutory Retention & Archival Policies",
        content: "In accordance with maritime commerce conventions and customs regulations, trade manifests, Bills of Lading, and inspection assays are retained in secure, access-controlled digital vaults for a minimum of seven (7) years following discharge and final commercial settlement."
      },
      {
        heading: "6. Counterparty Data Rights & Governance Officer",
        content: "Corporate counterparties and their designated personnel may request verification, correction, or audit of stored records by contacting our Corporate Data Governance Officer at privacy@visionvibeglobal.com."
      }
    ]
  },
  {
    slug: "terms-of-engagement",
    title: "Master Commercial Trading Terms & Conditions of Engagement",
    subtitle: "Governing conventions, Incoterms® 2020 rules, documentary settlement mechanics, and arbitration covenants for physical commodity transactions.",
    category: "Commercial Terms",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Pre-Contractual Negotiations & Soft Corporate Offers (SCO)",
        content: "All Soft Corporate Offers (SCO), indicative price indications, and vessel laycan availabilities issued by Vision Vibe Global are non-binding expressions of commercial interest until formally ratified by a signed Sales & Purchase Agreement (SPA) and approved by our Central Risk Committee following satisfactory counterparty KYC clearance."
      },
      {
        heading: "2. Governing International Trade Conventions",
        content: "Unless expressly modified in an executed contract, all physical commodity transactions are governed by the following international trade conventions:",
        bullets: [
          "Incoterms® 2020 published by the International Chamber of Commerce (ICC), specifically FOB, CIF, CFR, and DAP delivery mechanics.",
          "GAFTA (Grain and Feed Trade Association) standard contract forms (e.g. GAFTA 100, GAFTA 119) for agricultural bulk shipments.",
          "FOSFA (Federation of Oils, Seeds and Fats Associations) contract terms for vegetable oils, tallow, and oleochemical products.",
          "London Metal Exchange (LME) and London Bullion Market Association (LBMA) rules for physical non-ferrous and precious metal deliveries."
        ]
      },
      {
        heading: "3. Documentary Payment Mechanics & UCP 600 Compliance",
        content: "Payment instruments must be structured as Irrevocable, Transferable or Non-Transferable, Confirmed Documentary Letters of Credit (DLC) or Standby Letters of Credit (SBLC) issued or confirmed by a tier-1 international bank acceptable to Vision Vibe Global. Letters of credit are subject to ICC Uniform Customs and Practice for Documentary Credits (UCP 600) and ICC Uniform Rules for Bank-to-Bank Reimbursements (URR 725)."
      },
      {
        heading: "4. Quality and Quantity Determinations",
        content: "Final quantity and quality shall be determined at load port by an accredited, internationally recognized independent inspection agency (such as SGS, Bureau Veritas, or Intertek). The certificates issued by such inspection agency shall be final and binding on both parties, except in cases of established fraud or manifest error."
      },
      {
        heading: "5. Laytime, Demurrage & Maritime Charterparty Clauses",
        content: "Laytime allowances, notice of readiness (NOR) validity, and demurrage/despatch rates are strictly calculated in accordance with the underlying charterparty agreement (BIMCO standard charterparty forms). Demurrage claims must be submitted with full supporting logs within sixty (60) days of vessel disconnection."
      },
      {
        heading: "6. Force Majeure & Geopolitical Disruption",
        content: "Neither party shall be liable for failure to perform resulting from acts of God, naval blockades, war, sanctions imposition, civil unrest, export embargoes, or closure of international maritime straits, provided prompt written notice is served within forty-eight (48) hours in accordance with ICC Force Majeure Clause 2020."
      },
      {
        heading: "7. Governing Law & International Arbitration",
        content: "Unless otherwise designated in the specific SPA, all contracts shall be governed by English Law. Any dispute arising out of or in connection with commercial contracts shall be referred to and finally resolved by arbitration administered by the London Court of International Arbitration (LCIA) or the Singapore International Arbitration Centre (SIAC)."
      }
    ]
  },
  {
    slug: "regulatory-disclosures",
    title: "Global Regulatory, Sanctions & Trade Compliance Disclosures",
    subtitle: "Statutory statements regarding export controls, counterparty screening, anti-bribery policies, and environmental emissions governance.",
    category: "Regulatory Compliance",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Strict International Sanctions & Export Controls Adherence",
        content: "Vision Vibe Global maintains a zero-tolerance policy regarding international sanctions evasion. Every transaction, counterparty, carrying vessel, charterer, and financial institution is screened against comprehensive global sanctions databases, including:",
        bullets: [
          "United States Department of the Treasury Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) lists.",
          "European Union Consolidated Financial Sanctions List.",
          "United Kingdom Office of Financial Sanctions Implementation (OFSI) Consolidated List.",
          "United Nations Security Council Sanctions Committees resolutions.",
          "Maritime Automatic Identification System (AIS) 'dark fleet' and illicit transshipment screening."
        ]
      },
      {
        heading: "2. Anti-Bribery & Corruption Governance (ABAC)",
        content: "Our operations comply strictly with the UK Bribery Act 2010, the United States Foreign Corrupt Practices Act (FCPA), and the OECD Convention on Combating Bribery of Foreign Public Officials. Vision Vibe Global strictly prohibits facilitation payments, improper hospitality, or inducement of public or port officials under any circumstances."
      },
      {
        heading: "3. Conflict Minerals & Responsible Sourcing Framework",
        content: "Our Industrial Metals & Minerals Division follows the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. We do not originate, finance, or distribute tin, tungsten, tantalum, or gold (3TG) without verified traceability to certified, conflict-free extraction concessions."
      },
      {
        heading: "4. Environmental & Maritime Emissions Standards (IMO 2020)",
        content: "In compliance with the International Maritime Organization (IMO) MARPOL Annex VI regulations, Vision Vibe Global mandates that all time-chartered and spot-chartered marine vessels burn compliant Very Low Sulfur Fuel Oil (VLSFO max 0.50% sulfur) or operate certified exhaust gas cleaning systems (scrubbers)."
      },
      {
        heading: "5. Compliance Whistleblower Channel",
        content: "Suspected compliance irregularities or regulatory concerns may be reported confidentially to our independent Chief Compliance Officer at compliance@visionvibeglobal.com."
      }
    ]
  },
  {
    slug: "security-confidentiality",
    title: "Commercial Security, Trade Secrets & Information Barriers Protocol",
    subtitle: "Protocols protecting proprietary trading books, counterparty pricing formulas, and payment instruction verification.",
    category: "Information Security",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Information Barriers (Chinese Walls) Protocol",
        content: "Vision Vibe Global maintains strict physical, organizational, and technological information barriers between our distinct commodity trading desks. Traders in the Energy Division have no access to the proprietary books, pipeline allocations, or pricing positions of the Agricultural Bulk or Metals trading desks."
      },
      {
        heading: "2. Business Email Compromise (BEC) & Banking Security",
        content: "Wire fraud and fraudulent payment redirection represent significant threats in international trade. Vision Vibe Global operates under a strict Verbal Callback Authentication Protocol:",
        bullets: [
          "We will NEVER alter beneficiary bank settlement instructions via email alone.",
          "Any change in designated settlement accounts requires direct, recorded telephonic confirmation with the authorized Chief Financial Officer.",
          "All incoming Letters of Credit are authenticated via authenticated SWIFT MT700/MT760 channels through tier-1 advising banks."
        ]
      },
      {
        heading: "3. Non-Circumvention & Non-Disclosure (NCND) Standards",
        content: "Proprietary supplier relationships, mine-mouth logistics agreements, and refinery discount formulas shared during trade structuring are held under binding ICC Non-Circumvention & Non-Disclosure standards for a minimum of five (5) years."
      },
      {
        heading: "4. Digital Infrastructure & Encryption Standards",
        content: "All trade documentation, assay databases, and commercial contract portals are secured using enterprise-grade 256-bit encryption (TLS 1.3 in transit and AES-256 at rest) with multi-factor biometric authentication required for all trading desk personnel."
      },
      {
        heading: "5. Security Operations Center Contact",
        content: "Inquiries regarding cybersecurity certifications, SOC 2 alignment, or verified SWIFT banking keys should be directed to security@visionvibeglobal.com."
      }
    ]
  }
];
