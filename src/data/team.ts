export interface TeamMember {
  name: string;
  role: string;
  practice: string;
  image: string;
  credentials: string;
  bio: string;
  focusAreas: string[];
}

export const leadershipTeam: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer & Managing Director",
    practice: "Global Sourcing & Executive Trading Desk",
    image: "/images/team/sarah-chen.jpg",
    credentials: "MBA, Stanford GSB | B.S. Industrial Engineering, MIT",
    bio: "With over twenty years directing international physical trading operations, Sarah oversees Vision Vibe Global's multi-commodity portfolios, producer joint ventures, and strategic sovereign bilateral offtake contracts.",
    focusAreas: ["Global Commodity Sourcing", "Sovereign Supply Contracts", "Risk Governance"]
  },
  {
    name: "Marcus Vance",
    role: "Head of Global Energy & Metals Trading",
    practice: "Energy, Refined Products & Non-Ferrous Metals",
    image: "/images/team/marcus-vance.jpg",
    credentials: "M.Sc. Commodities Finance, LSE | B.A. Economics, Oxford",
    bio: "Marcus leads our energy and industrial metals trading desks. Having structured more than $6B in physical commodity shipments, he specializes in exchange hedging, mine-mouth offtakes, and arbitrage execution.",
    focusAreas: ["Petroleum & LNG", "LME Metals Arbitrage", "Futures & Options Hedging"]
  },
  {
    name: "Elena Rostova",
    role: "Managing Director, Trade Finance & Compliance",
    practice: "Documentary Credits, LC Execution & Banking",
    image: "/images/team/elena-rostova.jpg",
    credentials: "LL.M. International Trade Law, Zurich | CDCS Certified Specialist",
    bio: "Elena oversees our international trade finance architecture, managing relationships with tier-1 correspondent banks, UCP 600 documentary letters of credit, escrow mechanisms, and sanctions compliance.",
    focusAreas: ["Documentary Letters of Credit", "Trade Sanctions Compliance", "Structured Credit Facilities"]
  },
  {
    name: "David Okafor",
    role: "Head of Maritime Logistics & Bulk Chartering",
    practice: "Ocean Freight, Stevedoring & Terminal Operations",
    image: "/images/team/david-okafor.jpg",
    credentials: "M.S. Maritime Economics, Antwerp | Master Mariner",
    bio: "David brings 18 years of global shipping experience, directing our dry bulk chartering desk, product tanker allocations, laytime negotiations, and discharge terminal stevedoring across 45 international ports.",
    focusAreas: ["Bulk Vessel Chartering", "Laytime & Demurrage Control", "Port Stevedoring"]
  }
];
