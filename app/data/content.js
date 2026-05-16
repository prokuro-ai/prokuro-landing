export const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#company", label: "Company" },
];

export const heroRows = [
  {
    mpn: "TPS62130ARGTR",
    manufacturer: "Texas Instruments",
    riskFlag: "EOL in 14 months",
    riskScore: "HIGH",
  },
  {
    mpn: "STM32H743ZIT6",
    manufacturer: "STMicroelectronics",
    riskFlag: "Single source",
    riskScore: "HIGH",
  },
  {
    mpn: "i.MX8M-MINI",
    manufacturer: "NXP",
    riskFlag: "China tariff exposure",
    riskScore: "MEDIUM",
  },
  {
    mpn: "XC7A100T-1CSG324",
    manufacturer: "AMD Xilinx",
    riskFlag: "Lead time 48 weeks",
    riskScore: "MEDIUM",
  },
  {
    mpn: "LMV358IDR",
    manufacturer: "Texas Instruments",
    riskFlag: "Stable supply",
    riskScore: "LOW",
  },
];

export const problemCards = [
  {
    title: "You found out too late",
    body: "The average OEM learns about a component EOL 6 months before it hits. Qualifying an alternate takes 12-18 months. That gap costs millions.",
  },
  {
    title: "Your BOM is a geopolitical risk map",
    body: "35-60% of hardware BOMs have components sourced from regions with active tariff or export control exposure. Most teams do not know which ones.",
  },
  {
    title: "Your CM will tell you last",
    body: "Contract manufacturers manage hundreds of clients. Allocation issues, lead-time blowouts, and quality escapes reach you last. Prokuro puts you first.",
  },
];

export const howItWorksSteps = [
  {
    title: "Upload your BOM",
    body: "CSV or Excel. We extract every MPN, manufacturer, and quantity in about 60 seconds.",
  },
  {
    title: "We enrich every line item",
    body: "Octopart live data, HTS tariff codes, US Entity List checks, EOL databases, and LLM-powered geopolitical risk analysis run on every component.",
  },
  {
    title: "Get your risk report",
    body: "You get a prioritized queue of risky components, why each one is risky, and what to do next. Delivered as PDF now, dashboard monitoring after onboarding.",
  },
];

export const features = [
  {
    title: "EOL Early Warning",
    body: "We flag components approaching end-of-life 12-18 months out so you can qualify alternates before redesign work becomes an emergency.",
  },
  {
    title: "Tariff and Trade Exposure",
    body: "Every component is mapped to HTS code and monitored for tariff-rate changes, Section 301 exposure, and Entity List restrictions the day they change.",
  },
  {
    title: "Supplier Concentration Risk",
    body: "Single-source dependencies, China concentration, and TSMC-dependent nodes are scored before they become leverage someone else holds over your ship dates.",
  },
  {
    title: "Alternate Component Engine",
    body: "When a risk is flagged, we suggest pin-compatible alternates with live Octopart availability and lead-time data. Not just a warning. A path forward.",
  },
];

export const fitProfile = [
  "Hardware OEMs with $50M-$500M annual revenue",
  "Products with 3-10 year lifespans (networking, industrial, medical-adjacent)",
  "Teams outsourcing manufacturing to Flex, Foxconn, Fabrinet, Jabil, or similar CMs",
  "Companies burned in the 2021-2022 shortage and still carrying that scar tissue",
  "Procurement and engineering teams still running BOM risk in spreadsheets",
];

export const notFitProfile = [
  "You ship consumer hardware on 12-month refresh cycles",
  "You already run a large in-house supply-chain data-science team",
  "You are pre-product and do not have a real BOM yet",
];

export const sampleReportRows = [
  {
    mpn: "TPS62130ARGTR",
    manufacturer: "Texas Instruments",
    level: "HIGH",
    riskType: "EOL Q3 2026",
    action: "Begin alternate qualification now",
  },
  {
    mpn: "STM32H743ZIT6",
    manufacturer: "STMicroelectronics",
    level: "HIGH",
    riskType: "Single source",
    action: "Approve second-source design path",
  },
  {
    mpn: "i.MX8M-MINI",
    manufacturer: "NXP",
    level: "MEDIUM",
    riskType: "China tariff 25%",
    action: "Model COGS impact for next PO window",
  },
  {
    mpn: "XC7A100T-1CSG324",
    manufacturer: "AMD Xilinx",
    level: "MEDIUM",
    riskType: "Lead time 52 weeks",
    action: "Lock long-lead inventory this month",
  },
  {
    mpn: "LMV358IDR",
    manufacturer: "Texas Instruments",
    level: "LOW",
    riskType: "Stable supply",
    action: "Continue monthly monitoring",
  },
];

export const pricingTiers = [
  {
    name: "BOM Report",
    price: "$4,500 - $10,000 per engagement",
    description:
      "Concierge analysis delivered as a full PDF report within 48 hours.",
    details:
      "Best for NPI gate reviews, supplier transitions, and M&A technical diligence.",
    cta: "Request a Report",
    ctaStyle: "ghost",
  },
  {
    name: "Continuous Monitoring",
    badge: "Most Popular",
    price: "$2,500 - $6,500 / month",
    description:
      "Weekly BOM monitoring with instant alerts for EOL notices, tariff updates, and lead-time spikes.",
    details:
      "Includes alternate component suggestions and monthly risk review with your team.",
    cta: "Start Monitoring",
    ctaStyle: "primary",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Starts at $9,000 / month",
    description:
      "Unlimited BOMs, Arena PLM and NetSuite integration, API access, and SLA-backed alerting.",
    details:
      "Includes dedicated onboarding and a named supply-chain intelligence partner.",
    cta: "Talk to Sales",
    ctaStyle: "ghost",
  },
];
