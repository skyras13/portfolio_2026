export type Experience = {
  date: string;
  role: string;
  company: string;
  type: string;
  current?: boolean;
  desc: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    date: "Oct 2025 — Now",
    role: "Lead Software Developer",
    company: "Dorado Software",
    type: "Full-time · Remote · Networking + AI",
    current: true,
    desc: "Leading development across enterprise network management and orchestration products. Driving architecture and roadmap across a distributed team. Primary technical contributor on Cruz AI Vision — an AI-native open-networking platform built on LLM orchestration, MCP, and PostgreSQL with pgvector + TimescaleDB for semantic and time-series network intelligence.",
    tags: ["Network Management", "Orchestration", "LLM", "MCP", "pgvector", "Timescale", "Team Lead"],
  },
  {
    date: "Jan 2025 — Now",
    role: "Senior Software Developer",
    company: "Ag Genius",
    type: "Contract · Ag-tech · Drone + AI",
    current: true,
    desc: "Building app.ag-genius.com — a field-management platform that lets farmers schedule drone flyovers, process hyperspectral imagery, and surface AI-driven insights on crop health. AWS Amplify + MongoDB stack.",
    tags: ["AWS Amplify", "MongoDB", "Hyperspectral", "Drones", "AI Insights"],
  },
  {
    date: "Jul 2023 — Oct 2025",
    role: "Full Stack Developer",
    company: "Cidi Labs",
    type: "Full-time · Remote · Ed-tech",
    desc: "Shipped across Cidi Labs' LTI product suite for higher education. Lead developer on ObservEd (teacher observation and evaluation), main contributor on UDOIT (accessibility scanning for Canvas courses), and team contributor on ReadyGO and TidyUP. New features, stability work, and direct customer support for universities.",
    tags: ["PHP", "Symfony", "LTI", "Canvas", "Accessibility", "Ed-tech"],
  },
  {
    date: "Oct 2022 — Jul 2023",
    role: "Mobile App Product Manager",
    company: "Polynesian Cultural Center",
    type: "Full-time · Hospitality + Tourism tech",
    desc: "Led production of the flagship cultural-attraction app used by 3,000+ guests per day. Managed a $95K development budget. Hired and coordinated UX/UI and engineering teams across the US, Colombia, and India.",
    tags: ["Product Mgmt", "Agile", "Mobile", "International Teams"],
  },
  {
    date: "Mar 2022 — Oct 2022",
    role: "Web Developer",
    company: "Polynesian Cultural Center",
    type: "Part-time · On-site",
    desc: "Design, updates, and maintenance for hukilaumarketplace.com, poundersrestaurant.com, worldfireknife.com, pcclegacy.smugmug.com, and pcc60.com.",
    tags: ["WordPress", "Divi", "Web"],
  },
];

export type FeaturedKind = "tether" | "clear" | "cruz";

export type Featured = {
  kind: FeaturedKind;
  group: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  stack: string[];
  role: string;
  link: string;
  href?: string;
};

export const FEATURED: Featured[] = [
  {
    kind: "tether",
    group: "skdaddle",
    category: "SaaS · B2C",
    title: "Tether",
    tagline: "A slow, shared journal for two.",
    desc: "Couples and families write alone each day, then unlock each other's answers side-by-side. Hand-written prompts — no AI filler — designed to surface the small things that usually go unsaid. Private by default; exportable as a bound book.",
    stack: ["Next.js", "Full-stack", "SaaS"],
    role: "Co-founder · Full-stack build",
    link: "tether.skdaddle.com",
    href: "https://tether.skdaddle.com",
  },
  {
    kind: "clear",
    group: "skdaddle",
    category: "SaaS · B2B Healthcare",
    title: "Clear Report",
    tagline: "Incident reporting for California assisted-living facilities.",
    desc: "AI reviews every incident report for liability language before it leaves the building. Guides CNAs through LIC 624, LIC 624A, and SOC 341 wizards. Compliance deadline tracking, multi-facility admin, role-based workflows.",
    stack: ["AI Review", "Healthcare", "Compliance"],
    role: "Co-founder · Full-stack build",
    link: "clearreport.skdaddle.com",
    href: "https://clearreport.skdaddle.com",
  },
  {
    kind: "cruz",
    group: "dorado",
    category: "Networking + AI · Enterprise",
    title: "Cruz AI Vision",
    tagline: "AI-native network management.",
    desc: "Open-networking platform built at Dorado Software. LLM orchestration via MCP, grounded in PostgreSQL with pgvector (semantic search over configs and tickets) and TimescaleDB (time-series telemetry). Natural-language troubleshooting and explainable anomaly detection.",
    stack: ["LLM", "MCP", "pgvector", "Timescale"],
    role: "Lead developer",
    link: "Dorado Software",
  },
];

export type Other = {
  category: string;
  title: string;
  desc: string;
  stack: string[];
  role: string;
  link: string;
  href?: string;
};

export const OTHER: Other[] = [
  {
    category: "Ag-tech",
    title: "Ag Genius Platform",
    desc: "Drone flyover scheduling, hyperspectral imaging pipeline, and AI crop-health insights for farmers.",
    stack: ["Amplify", "MongoDB", "Drones", "AI"],
    role: "Senior developer",
    link: "app.ag-genius.com",
    href: "https://app.ag-genius.com",
  },
  {
    category: "Ed-tech · Cidi Labs",
    title: "ObservEd",
    desc: "Teacher observation and evaluation, delivered as an LTI for higher ed.",
    stack: ["Symfony", "PHP", "LTI"],
    role: "Lead developer",
    link: "cidilabs.com",
    href: "https://cidilabs.com",
  },
  {
    category: "Ed-tech · Cidi Labs",
    title: "UDOIT",
    desc: "Accessibility scanner that audits Canvas course content automatically.",
    stack: ["Accessibility", "Canvas", "PHP"],
    role: "Main contributor",
    link: "cidilabs.com",
    href: "https://cidilabs.com",
  },
  {
    category: "Ed-tech · Cidi Labs",
    title: "ReadyGO & TidyUP",
    desc: "Course readiness checks and cleanup tooling for Canvas — shipped alongside the core squads.",
    stack: ["LTI", "PHP"],
    role: "Team contributor",
    link: "cidilabs.com",
    href: "https://cidilabs.com",
  },
  {
    category: "Hospitality + Tourism tech",
    title: "PCC Guest App",
    desc: "Flagship mobile app for the Polynesian Cultural Center used by 3,000+ guests per day. Led a $95K build across teams in three countries.",
    stack: ["Product Mgmt", "iOS", "Android"],
    role: "Product manager",
    link: "Polynesian Cultural Center",
  },
];

export const HATS: ReadonlyArray<[string, string]> = [
  ["Full-stack development", "Front to back. Whatever the job needs."],
  ["Team lead", "Leading distributed teams across products and time zones."],
  ["Mobile apps", "Shipped consumer apps used by thousands daily."],
  ["Product management", "Budget, hiring, and roadmap across international teams."],
  ["SaaS operator", "Co-owner of skdaddle — two live products, more in build."],
  ["AI + LLM systems", "LLM orchestration, MCP, and vector databases in production."],
  ["Networking", "Enterprise network management. Becoming deeply fluent."],
  ["Generalist", "New domain? Give me two weeks."],
];
