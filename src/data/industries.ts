export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  overview: string;
  keyChallenges: string[];
  strategicApproach: string;
  verifiableResult: string;
}

export const industries: IndustryItem[] = [
  {
    id: "energy-petroleum",
    name: "Energy & Refined Petroleum Products",
    tagline: "Crude oil, LNG, low-sulfur marine gas oil, jet fuel, and base oils sourced from audited refineries.",
    image: "/images/energy-tank-terminal.jpg",
    overview:
      "Vision Vibe Global's Energy Trading Desk coordinates bulk physical liquid fuel flows across the Atlantic, Mediterranean, and Asian maritime routes. We connect certified refineries and storage terminals with national utilities, maritime fleets, and industrial users, adhering strictly to IMO 2020 environmental standards and international sanctions compliance.",
    keyChallenges: [
      "Volatile international Brent/WTI benchmark pricing and contango market cycles",
      "Stringent maritime environmental emission standards (IMO 2020 low-sulfur limits)",
      "Geopolitical transit bottlenecks in critical maritime straits"
    ],
    strategicApproach:
      "We combine long-term refinery offtakes with time-chartered MR/LR chemical and product tankers, executing real-time futures hedges to lock in commercial spread margins.",
    verifiableResult: "Delivered 820,000 MT of Low-Sulfur Fuel Oil (VLSFO) across bunkering hubs in Singapore, Rotterdam, and Fujairah with 100% on-time vessel discharge."
  },
  {
    id: "metals-minerals",
    name: "Industrial Metals, Ores & Concentrates",
    tagline: "Non-ferrous metals, steel billets, copper cathodes, aluminum ingots, and high-grade iron ore.",
    image: "/images/metal-copper-warehouse.jpg",
    overview:
      "Our Metals & Minerals Division handles physical trade in non-ferrous and ferrous commodities critical to modern manufacturing, energy transition, and infrastructure. We supply smelters, automotive plants, and fabrication mills with LME-registered grades, verified chemical assays, and bonded terminal delivery.",
    keyChallenges: [
      "LME and Shanghai Futures Exchange (SHFE) arbitrage spreads and inventory shifts",
      "High capital intensity requiring multi-million dollar LC structuring",
      "Strict metallurgical grade assays (purity, moisture content, oxide tolerances)"
    ],
    strategicApproach:
      "We source directly from primary mining concessions and primary smelters, utilizing independent SGS assay certificates and bonded warehouse warrant financing.",
    verifiableResult: "Supplied 145,000 MT of Grade A Electrolytic Copper Cathodes (99.99% purity) to cable manufacturers across Europe and East Asia with zero specification rejects."
  },
  {
    id: "agri-commodities-softs",
    name: "Agricultural Commodities & Agri-Bulk",
    tagline: "Milling wheat, feed grains, yellow maize, soybeans, refined sunflower & palm oils, sugar, and fertilizers.",
    image: "/images/grain-bulk-silos.jpg",
    overview:
      "Feeding global populations requires dependable agricultural trade corridors. We source staple grains and soft commodities directly from leading harvest regions in the Americas, Black Sea basin, and Australia, delivering to state grain boards, flour millers, feed compounders, and edible oil processors worldwide.",
    keyChallenges: [
      "Weather-driven harvest shortfalls and unpredictable crop export quotas",
      "Biosecurity, mycotoxin tolerances, and phytosanitary regulatory clearances",
      "Perishable bulk cargo handling demanding strict moisture and ventilation control"
    ],
    strategicApproach:
      "We charter dedicated Supramax and Panamax dry bulkers equipped with continuous temperature and CO2 monitoring, operating under standard GAFTA and FOSFA contract rules.",
    verifiableResult: "Executed the maritime transport and port discharge of 520,000 MT of milling wheat and feed barley across North Africa and Middle East with zero demurrage."
  },
  {
    id: "industrial-chemicals-polymers",
    name: "Petrochemicals, Polymers & Industrial Resins",
    tagline: "Polyethylene (HDPE/LDPE), Polypropylene, PVC resin, bulk methanol, MEG, and caustic soda.",
    image: "/images/port-terminal-dusk.jpg",
    overview:
      "Our Chemical & Polymer Trading Desk manages global trade flows of essential polymer resins and bulk liquid intermediates for industrial manufacturing, plastic conversion, and construction. We maintain continuous partnerships with world-scale cracking plants across the Middle East, North America, and Asia.",
    keyChallenges: [
      "Feedstock (naphtha/ethane) price correlation creating frequent price shifts",
      "Specialized chemical storage and safety compliance requirements (REACH, Hazmat)",
      "Container freight rate volatility and ISO tank container availability"
    ],
    strategicApproach:
      "We utilize dedicated ISO tank container fleets and bonded warehouse networks in major industrial ports, offering both full bulk vessel parcels and mixed containerized deliveries.",
    verifiableResult: "Supplied 95,000 MT of prime virgin grade Polypropylene and PVC resin to packaging and pipe manufacturers across Latin America and South Asia."
  },
  {
    id: "heavy-machinery-equipment",
    name: "Heavy Industrial Machinery & Capital Equipment",
    tagline: "Mining extraction machinery, commercial earthmovers, heavy construction equipment, and port handlers.",
    image: "/images/hero-cargo-ship.jpg",
    overview:
      "Beyond raw commodities, Vision Vibe Global trades and facilitates cross-border procurement of heavy industrial capital assets. We broker, source, and ship heavy excavators, mobile cranes, mining dump trucks, and port gantry systems, coordinating specialized Breakbulk and Roll-on/Roll-off (RoRo) ocean transport.",
    keyChallenges: [
      "Heavy-lift and out-of-gauge (OOG) maritime engineering complexities",
      "Comprehensive pre-purchase mechanical diagnostics and factory warranties",
      "Multinational import tariff classifications and homologation certifications"
    ],
    strategicApproach:
      "We coordinate end-to-end turnkey delivery: factory inspection, specialized flat-rack / RoRo vessel stowage, heavy-lift crane handling, and on-site commissioning support.",
    verifiableResult: "Successfully delivered 84 units of heavy mining haul trucks and hydraulic excavators to African and Central Asian mining concessions without transport damage."
  },
  {
    id: "wholesale-consumer-goods",
    name: "FMCG, Foodstuffs & Wholesale Consumer Merchandise",
    tagline: "Containerized wholesale foodstuffs, packaged consumer dry goods, and institutional supply lines.",
    image: "/images/port-terminal-dusk.jpg",
    overview:
      "Our Wholesale Trading Division manages international B2B containerized trade for supermarkets, national distributors, and institutional importers. From canned goods and dairy powders to packaged household goods, we connect multinational brand manufacturers with high-growth regional retail networks.",
    keyChallenges: [
      "Maintaining cold-chain integrity and shelf-life across multi-week ocean transits",
      "Strict multilingual customs labeling, halal/kosher certifications, and import quotas",
      "Managing complex multi-SKU consolidation in 40ft High Cube containers"
    ],
    strategicApproach:
      "We operate specialized consolidation hubs in key transshipment ports, verifying packaging integrity and managing localized import documentation.",
    verifiableResult: "Consolidated and shipped over 2,400 TEUs of consumer foodstuffs and wholesale dry goods to supermarket chains across 16 island and coastal nations."
  }
];
