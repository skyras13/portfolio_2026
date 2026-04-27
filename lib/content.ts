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
    desc: "Leading development across enterprise network management and orchestration products. Driving architecture and roadmap across a distributed team. Primary technical contributor on an MCP-based AI tool for network and data-center management.",
    tags: ["Network Management", "Orchestration", "AI", "MCP", "Team Lead"],
  },
  {
    date: "Jan 2025 — Now",
    role: "Senior Software Developer",
    company: "Ag Genius",
    type: "Contract · Ag-tech · Drone + AI",
    current: true,
    desc: "Building the Ag Genius platform — three connected apps (app.ag-genius.com, admin.ag-genius.com, commodities.ag-genius.com) for farmers to schedule drone flyovers, process hyperspectral imagery, and surface AI-driven crop-health insights. Modern Next.js + Supabase + Clerk + Resend + Vercel stack.",
    tags: ["Next.js", "Supabase", "Clerk", "Resend", "Vercel", "Hyperspectral", "Drones", "AI"],
  },
  {
    date: "Jul 2023 — Oct 2025",
    role: "Full Stack Developer",
    company: "Cidi Labs",
    type: "Full-time · Remote · Ed-tech",
    desc: "Shipped across Cidi Labs' LTI product suite for the Canvas LMS in higher education. Lead developer on ObservEd (Node.js backend + React frontend, teacher observation and evaluation). Main contributor on UDOIT (PHP/Symfony backend exposed via REST API to its frontend, accessibility scanning). Team contributor on ReadyGO and TidyUP (same PHP/Symfony + REST architecture, course readiness and cleanup). All four ship as LTI tools inside Canvas.",
    tags: ["PHP", "Symfony", "Node.js", "React", "LTI", "Canvas", "REST APIs", "Accessibility", "Ed-tech"],
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

export type FeaturedKind = "tether" | "clear" | "cruz" | "ag";

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
    title: "AI Network Management",
    tagline: "An MCP-based AI tool for network and data-center operations.",
    desc: "Enterprise platform I'm leading at Dorado Software. Brings conversational AI and MCP-based automation to network and data-center management — so operators can ask, troubleshoot, and act in natural language instead of digging through dashboards and CLIs.",
    stack: ["AI", "MCP", "Enterprise"],
    role: "Lead developer",
    link: "Dorado Software",
  },
  {
    kind: "ag",
    group: "ag-genius",
    category: "Ag-tech · Drone + AI",
    title: "Ag Genius Platform",
    tagline: "Drone-driven crop intelligence for farmers.",
    desc: "Three connected apps powering the platform: app.ag-genius.com (field operations), admin.ag-genius.com (back office), and commodities.ag-genius.com (markets). Drone flyover scheduling, hyperspectral imaging, and AI-driven crop-health insights — all on a modern stack.",
    stack: ["Next.js", "Supabase", "Clerk", "Resend", "Vercel"],
    role: "Senior developer",
    link: "app.ag-genius.com",
    href: "https://app.ag-genius.com",
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
    category: "Ed-tech · Cidi Labs",
    title: "ObservEd",
    desc: "Teacher observation and evaluation, delivered as an LTI inside the Canvas LMS. Node.js backend with a React frontend — the outlier of the Cidi Labs suite.",
    stack: ["Node.js", "React", "LTI", "Canvas"],
    role: "Lead developer",
    link: "cidilabs.com",
    href: "https://cidilabs.com",
  },
  {
    category: "Ed-tech · Cidi Labs",
    title: "UDOIT",
    desc: "Automated accessibility scanner that audits Canvas course content. PHP/Symfony backend exposed via REST APIs to its dedicated frontend, delivered as an LTI tool in Canvas.",
    stack: ["PHP", "Symfony", "REST", "LTI", "Canvas"],
    role: "Main contributor",
    link: "cidilabs.com",
    href: "https://cidilabs.com",
  },
  {
    category: "Ed-tech · Cidi Labs",
    title: "ReadyGO & TidyUP",
    desc: "Course readiness checks and cleanup tooling for Canvas. Both built on PHP/Symfony backends with REST APIs feeding their frontends; both ship as LTI integrations inside the Canvas LMS.",
    stack: ["PHP", "Symfony", "REST", "LTI", "Canvas"],
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
  ["AI + LLM systems", "MCP-based systems in production."],
  ["Networking", "Enterprise network management. Becoming deeply fluent."],
  ["Generalist", "New domain? Give me two weeks."],
];
