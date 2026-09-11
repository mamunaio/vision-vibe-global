# Vision Vibe Global 🌐⚓
### Physical Commodities & International Merchant Trading House

![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-Ready-0284C7?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)
![Status](https://img.shields.io/badge/Build-Passing-emerald?style=for-the-badge)

**Vision Vibe Global** is a premier international physical commodities trading conglomerate and merchant distribution enterprise. Specializing in energy products, industrial metals, agricultural bulk, petrochemicals, and maritime freight logistics, the firm bridges global primary producers with sovereign buyers, national utilities, and multinational manufacturers across 45+ international deep-water discharge hubs.

---

## 🏛️ Key Website Features & Architecture

### 1. Executive Institutional Header & Telemetry Bar
- **24/7 Trading Desks Telemetry:** Live operational status and local time indicators across major trading hubs: **Geneva (UTC+2)**, **Dubai (UTC+4)**, **Singapore (UTC+8)**, and **Houston (UTC-5)**.
- **Official Client Emblem:** High-precision corporate monogram combining a dynamic growth vector arrow, international shipping globe, and maritime current wave.
- **Streamlined Navigation:** Zero redundancy with dedicated links to Services, Commodities, Intelligence, Governance, and RFQ desks.

### 2. Physical Commodity Divisions (`/industries`)
Interactive directory and technical specification tables (ASTM/ISO benchmarks, Incoterms 2020, delivery laycans) for 6 core divisions:
1. **Energy & Refined Petroleum Products** *(ULSD 10ppm, Jet A-1, Crude Oil, LNG)*
2. **Industrial Metals, Ores & Concentrates** *(LME Grade A 99.99% Copper Cathodes, Aluminum Ingots, Iron Ore)*
3. **Agricultural Commodities & Agri-Bulk** *(Milling Wheat, Non-GMO Soybeans, Raw Cane Sugar, Feed Corn)*
4. **Petrochemicals, Polymers & Resins** *(Virgin HDPE/LDPE, Polypropylene, Caustic Soda, Bulk Methanol)*
5. **Heavy Industrial Machinery & Equipment** *(Mining Haul Trucks, Heavy Hydraulic Excavators, Port Gantry Cranes)*
6. **Wholesale FMCG & Packaged Goods** *(Containerized Wholesale Foodstuffs, Multi-SKU Transshipment)*

### 3. Core Trading Services & Operations (`/services` & `/services/[slug]`)
Six comprehensive practice areas with dedicated dynamic deep-dive case studies, operational methodologies, and deliverables:
- **Global Commodity Sourcing & Origination**
- **Trade Finance & Credit Structuring** *(UCP 600 Letters of Credit, Escrow Facilities)*
- **Maritime Logistics, Chartering & Freight** *(Supramax, Panamax & Tanker Charters)*
- **Quality Assurance, Grade Assay & Inspection** *(SGS, Bureau Veritas, Intertek)*
- **Commodity Price Hedging & Risk Management** *(LME, CME, ICE Futures & Options)*
- **Bonded Warehousing, Storage & Customs Clearance** *(Strategic Port Silos & Tank Farms)*

### 4. Dedicated Commercial RFQ Portal (`/rfq`)
- **Official Trade Desk Tender Submission:** Interactive form capturing cargo grade, metric tonnage volume, Incoterms 2020 (FOB, CIF, CFR, DAP), and destination discharge port.
- **12-Hour SLA:** Automated desk routing to specialized commodity directors with draft Soft Corporate Offer (SCO) issuance.

### 5. Market Intelligence Briefings (`/insights` & `/insights/[slug]`)
- Macroeconomic research briefings, maritime choke point analysis, and trade finance whitepapers with live category filtering and search functionality.

### 6. Legal & Regulatory Compliance Codex (`/legal/[slug]`)
Four full statutory charters audited under prevailing international trade conventions:
- **Privacy Governance:** EU GDPR, UK DPA, Singapore PDPA, and DIFC compliance for counterparty trade manifests.
- **Terms of Engagement:** Master physical trade rules, GAFTA/LME/FOSFA covenants, and LCIA/SIAC arbitration clauses.
- **Regulatory Disclosures:** Sanctions compliance (US OFAC, EU, UK OFSI, UN), FCPA anti-bribery governance, and IMO 2020 maritime emissions.
- **Security & Confidentiality:** Trading desk Chinese walls, verbal callback wire verification, and ICC NCND trade secret standards.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16.3.4 (App Router) with Turbopack |
| **Language** | TypeScript 5.0+ |
| **Styling** | Tailwind CSS 3.4 with tailored executive color palette |
| **Typography** | Google Fonts (`Plus Jakarta Sans` for Headings, `Manrope` for UI, `JetBrains Mono` for Metrics) |
| **Icons** | Lucide React |
| **Static Generation** | 100% SSG / Prerendered Static Content (27 Optimized Routes) |

---

## 📂 Project Structure

```bash
vision-vibe-global/
├── public/
│   ├── icon.png                 # Official 64x64 corporate favicon
│   ├── icon.svg                 # Vector favicon
│   └── images/
│       ├── logo-original.png    # Original high-res client logo
│       ├── logo-emblem.png      # Clean transparent emblem for header/footer
│       ├── logo-white-text.png  # High-contrast logo for dark backgrounds
│       ├── hero-cargo-ship.jpg  # Maritime bulk freight photography
│       ├── port-terminal-dusk.jpg
│       ├── energy-tank-terminal.jpg
│       ├── metal-copper-warehouse.jpg
│       └── grain-bulk-silos.jpg
├── src/
│   ├── app/
│   │   ├── about/page.tsx       # Leadership & global desk operations
│   │   ├── contact/page.tsx     # London, Singapore, Dubai, Houston office directory
│   │   ├── industries/page.tsx  # 6 Physical commodity divisions & spec benchmarks
│   │   ├── insights/            # Market intelligence index & [slug] dynamic reports
│   │   ├── legal/               # Legal codex index & [slug] governance charters
│   │   ├── rfq/page.tsx         # Dedicated Commercial RFQ & Tender Desk
│   │   ├── services/            # Core trading capabilities & [slug] service pages
│   │   ├── not-found.tsx        # Branded 404 navigation recovery page
│   │   ├── layout.tsx           # Master layout, Google font injection, SEO metadata
│   │   └── page.tsx             # Asymmetric homepage with live telemetry
│   ├── components/
│   │   ├── Button.tsx           # Multi-variant button component
│   │   ├── Card.tsx             # Corporate card wrapper
│   │   ├── ContactForm.tsx      # Comprehensive RFQ submission form
│   │   ├── CTASection.tsx       # Institutional contracting prompt
│   │   ├── Footer.tsx           # Multi-column footer with legal charters
│   │   ├── Header.tsx           # Pre-header telemetry bar & executive navbar
│   │   ├── SectionLabel.tsx     # Editorial section badge
│   │   └── StatsBand.tsx        # Highlighted trade volume metrics
│   └── data/
│       ├── industries.ts        # Commodity divisions, specs, and case deliverables
│       ├── insights.ts          # Market research reports and intelligence data
│       ├── legal.ts             # 4 comprehensive statutory compliance documents
│       ├── services.ts          # 6 trading services with full operational workflows
│       ├── stats.ts             # Global annual volume & port statistics
│       └── team.ts              # Executive trading directors and desk heads
├── tailwind.config.ts           # Executive color system & typographic tokens
├── tsconfig.json                # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20.x recommended
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mamunaio/vision-vibe-global.git
   cd vision-vibe-global
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

4. **Verify TypeScript compilation:**
   ```bash
   npx tsc --noEmit
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Start production server:**
   ```bash
   npm run start
   ```

---

## 🚢 Deployment

The project is fully pre-configured for instant zero-configuration deployment to **Vercel**, **AWS Amplify**, or any Node.js containerized environment:

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

---

## ⚖️ Trade Compliance & Legal Notice
All commercial inquiries, physical cargo allocations, and indicative Soft Corporate Offers (SCO) generated through this portal are subject to formal Know-Your-Customer (KYC) clearance, anti-sanctions screening (OFAC/EU/UN), and bilateral Sales & Purchase Agreements (SPA) executed under ICC Incoterms® 2020 rules.

© 2026 Vision Vibe Global. All rights reserved. International Physical Merchant Trading House.
