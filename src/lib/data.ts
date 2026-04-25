export const company = {
  name: "TechLine Venture",
  tagline: "Building Smart Tech for Modern Businesses",
  phone: "0322 3509162",
  email: "info@techlineventure.com",
  address:
    "Suite #B3, 2nd Floor, Haryani Centre, Plot #21-E, Zamzama Lane-4, Zamzama Commercial, Phase-V, DHA, Karachi 75500",
  cityBadge: "🇵🇰 Karachi, Pakistan",
} as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
};

export type ServicePageContent = {
  heroSubtitle: string;
  overview: string;
  audience: string;
  deliverables: string[];
  outcomes: string[];
  process: { title: string; description: string }[];
  industries: string[];
  timeline: string;
  engagement: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Website Development",
    description: "Fast, beautiful websites built to convert.",
    details: ["Next.js & modern stacks", "SEO-ready structure", "Performance tuning"],
    icon: "RiCodeSSlashLine",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Native & cross-platform apps users love.",
    details: ["React Native solutions", "Clean UX flows", "App store readiness"],
    icon: "RiSmartphoneLine",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Stores built to sell, 24/7.",
    details: ["Product & checkout flows", "Payment integrations", "Analytics & tracking"],
    icon: "RiShoppingCart2Line",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Pixel-perfect, user-first interfaces.",
    details: ["Wireframes & prototypes", "Design systems", "Usability iterations"],
    icon: "RiLayout4Line",
  },
  {
    id: "software",
    title: "Custom Software",
    description: "ERP, CRM & business tools, built for you.",
    details: ["Role-based systems", "Dashboards & automation", "Scalable architecture"],
    icon: "RiCpuLine",
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    description: "Growth campaigns that deliver real ROI.",
    details: ["SEO audits & content", "Conversion optimization", "Reporting dashboards"],
    icon: "RiLineChartLine",
  },
  {
    id: "branding",
    title: "Graphic Design & Branding",
    description: "Identities that make you unforgettable.",
    details: ["Logo & brand kit", "Social creatives", "Pitch decks & print"],
    icon: "RiBrushLine",
  },
  {
    id: "api",
    title: "API & Integrations",
    description: "Connect everything. Break silos.",
    details: ["3rd-party integrations", "Automation workflows", "Secure API design"],
    icon: "RiPlug2Line",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Keep your systems running smoothly 24/7.",
    details: ["Bug fixes & updates", "Performance monitoring", "Security patches"],
    icon: "RiToolsLine",
  },
];

export const servicePageContent: Record<Service["id"], ServicePageContent> = {
  web: {
    heroSubtitle: "High-converting websites engineered for speed, trust, and growth.",
    overview:
      "We build websites that look premium, load fast, and guide visitors toward the action that matters most. From company sites to landing pages and custom portals, every screen is designed to support brand positioning and measurable conversion goals.",
    audience:
      "Best for businesses that need a stronger digital presence, more qualified leads, and a site that performs as well as it looks.",
    deliverables: [
      "Custom UI design aligned with your brand and positioning",
      "Responsive development on a modern, scalable stack",
      "SEO-friendly page structure, metadata, and performance setup",
      "Conversion-focused page sections, forms, and CTAs",
    ],
    outcomes: [
      "Faster load times and smoother user experience",
      "Higher trust through polished visuals and clear messaging",
      "A website your team can confidently market and scale",
    ],
    process: [
      { title: "Strategy", description: "We map goals, pages, user journeys, and conversion points before design starts." },
      { title: "Design + Build", description: "We turn the approved direction into a premium interface and production-ready frontend." },
      { title: "Launch + Improve", description: "We optimize performance, QA every screen, and support post-launch refinement." },
    ],
    industries: ["Corporate", "Healthcare", "Real Estate", "Startups"],
    timeline: "2-6 weeks depending on scope",
    engagement: "Landing pages, business websites, portals, and microsites",
  },
  mobile: {
    heroSubtitle: "Mobile products that feel intuitive, polished, and ready for real users.",
    overview:
      "From MVPs to operational apps, we build mobile experiences that are reliable, elegant, and practical to scale. Our process balances strong UX, clean engineering, and release readiness so your product is not just launched, but usable from day one.",
    audience:
      "Best for founders and teams who need customer-facing apps, booking apps, field-force tools, or internal mobile workflows.",
    deliverables: [
      "Cross-platform app development with a native-like experience",
      "User flows, wireframes, and interaction design for mobile",
      "Authentication, APIs, notifications, and analytics setup",
      "Store-readiness support for testing, deployment, and updates",
    ],
    outcomes: [
      "Better user adoption through thoughtful UX and cleaner flows",
      "Faster release cycles with a maintainable codebase",
      "A stronger product foundation for future features and growth",
    ],
    process: [
      { title: "Product Planning", description: "We define the must-have flows, screens, integrations, and release priorities." },
      { title: "App Delivery", description: "We design, build, test, and refine the app around real usage scenarios." },
      { title: "Release Support", description: "We help prepare builds, submissions, and the next iteration roadmap." },
    ],
    industries: ["Logistics", "Food", "Healthcare", "Services"],
    timeline: "4-10 weeks depending on modules",
    engagement: "MVP apps, booking apps, delivery apps, and internal tools",
  },
  ecommerce: {
    heroSubtitle: "Commerce experiences built to increase trust, conversions, and repeat orders.",
    overview:
      "We create e-commerce stores that feel fast, premium, and easy to shop. Product discovery, checkout flow, and post-purchase trust are treated as part of one complete journey so your storefront does more than just display products.",
    audience:
      "Best for brands launching online, upgrading outdated stores, or improving conversion across key shopping journeys.",
    deliverables: [
      "Storefront UI optimized for product discovery and mobile shoppers",
      "Category, product, cart, and checkout flow design",
      "Payment, shipping, analytics, and catalog integration setup",
      "Sales-focused merchandising sections and lifecycle touchpoints",
    ],
    outcomes: [
      "Cleaner shopping experiences that reduce drop-off",
      "Stronger average order potential through better structure",
      "A store foundation that supports campaigns and scale",
    ],
    process: [
      { title: "Store Strategy", description: "We define catalog structure, buyer flows, offers, and trust builders." },
      { title: "Build + Integrate", description: "We design and develop the storefront with the right commerce stack and integrations." },
      { title: "Optimize", description: "We refine speed, mobile UX, and conversion friction before and after launch." },
    ],
    industries: ["Retail", "Fashion", "Beauty", "Consumer Goods"],
    timeline: "3-8 weeks depending on catalog and integrations",
    engagement: "Direct-to-consumer stores, B2B ordering portals, and catalog sites",
  },
  uiux: {
    heroSubtitle: "User-first interfaces designed to feel clear, credible, and conversion-ready.",
    overview:
      "Good design is not decoration. We craft flows, layouts, and systems that make products easier to understand and easier to use. Whether you need a new visual direction or a redesign of a complex workflow, we bring structure and clarity to the experience.",
    audience:
      "Best for teams shipping a new product, redesigning an existing one, or fixing confusing journeys that hurt adoption.",
    deliverables: [
      "UX audits, flow mapping, and wireframes for critical journeys",
      "High-fidelity UI screens with a premium visual system",
      "Reusable design systems and component guidelines",
      "Prototype-ready designs for faster stakeholder alignment",
    ],
    outcomes: [
      "Better usability across key screens and interactions",
      "Stronger product confidence for users, teams, and investors",
      "Cleaner handoff between design and development",
    ],
    process: [
      { title: "Research", description: "We review the product, audience, and friction points to identify UX priorities." },
      { title: "Design System", description: "We create visual direction and reusable UI patterns that scale consistently." },
      { title: "Prototype + Refine", description: "We test clarity, polish interactions, and prepare implementation-ready screens." },
    ],
    industries: ["SaaS", "Healthcare", "Education", "Finance"],
    timeline: "2-5 weeks depending on screen count",
    engagement: "MVP design, redesigns, dashboards, and product flows",
  },
  software: {
    heroSubtitle: "Custom software that fits your operations instead of forcing workarounds.",
    overview:
      "When off-the-shelf tools fall short, custom software can remove bottlenecks across teams. We build internal systems, dashboards, CRMs, and automation workflows that support how your business actually runs today while staying flexible for tomorrow.",
    audience:
      "Best for companies managing spreadsheets, disconnected tools, manual approvals, or complex internal operations.",
    deliverables: [
      "Discovery and workflow mapping around your business operations",
      "Role-based dashboards, reporting, and admin panels",
      "Automation logic, integrations, and data structuring",
      "Scalable architecture for future modules and permissions",
    ],
    outcomes: [
      "Reduced manual work and fewer operational mistakes",
      "Improved visibility through live dashboards and reporting",
      "A stronger operational backbone for growth",
    ],
    process: [
      { title: "Workflow Mapping", description: "We understand your current operations and define the ideal future-state system." },
      { title: "Build Core Modules", description: "We prioritize the features that create immediate internal efficiency." },
      { title: "Scale Safely", description: "We structure the system so new modules and users can be added cleanly." },
    ],
    industries: ["Trading", "Distribution", "Operations", "Professional Services"],
    timeline: "4-12 weeks depending on complexity",
    engagement: "CRMs, ERPs, portals, dashboards, and admin systems",
  },
  marketing: {
    heroSubtitle: "SEO and digital campaigns focused on visibility, quality traffic, and better lead flow.",
    overview:
      "Marketing works best when strategy, content, and conversion are aligned. We help brands strengthen search visibility, tighten landing-page performance, and create campaigns that are easier to measure and easier to improve over time.",
    audience:
      "Best for businesses that want more discovery, more inbound leads, and clearer performance reporting from digital spend.",
    deliverables: [
      "SEO audits, keyword mapping, and technical improvement priorities",
      "Landing page optimization for stronger conversion intent",
      "Content direction for search visibility and brand authority",
      "Campaign reporting frameworks and performance dashboards",
    ],
    outcomes: [
      "Better organic discoverability for commercial search terms",
      "More efficient lead generation from existing traffic",
      "A measurable growth plan with clearer reporting",
    ],
    process: [
      { title: "Audit", description: "We identify technical, content, and conversion gaps across your digital presence." },
      { title: "Optimize", description: "We improve pages, structure, and messaging to support search and conversion goals." },
      { title: "Measure", description: "We track progress, review performance, and refine the plan based on results." },
    ],
    industries: ["Local Businesses", "Professional Services", "Healthcare", "E-Commerce"],
    timeline: "3-6 weeks for setup, then ongoing optimization",
    engagement: "SEO strategy, landing pages, reporting, and campaign support",
  },
  branding: {
    heroSubtitle: "Brand systems that help businesses look sharper, stronger, and more memorable.",
    overview:
      "A strong brand identity creates consistency across every customer touchpoint. We design visual systems that support recognition, improve perceived value, and make your business feel more established in both digital and offline environments.",
    audience:
      "Best for startups, growing businesses, and teams refreshing outdated brand assets or inconsistent creative.",
    deliverables: [
      "Logo direction, typography, color, and identity system design",
      "Brand usage rules and practical visual guidelines",
      "Social, presentation, and marketing asset templates",
      "Creative direction that keeps communication consistent",
    ],
    outcomes: [
      "A more premium and professional market impression",
      "Faster content production with a clear visual system",
      "Stronger consistency across sales and marketing materials",
    ],
    process: [
      { title: "Position", description: "We understand your market, personality, and the image you need to project." },
      { title: "Create", description: "We design identity concepts and refine them into a usable brand system." },
      { title: "Roll Out", description: "We prepare practical assets and rules for day-to-day brand consistency." },
    ],
    industries: ["Startups", "Agencies", "Retail", "Professional Services"],
    timeline: "2-4 weeks depending on scope",
    engagement: "Identity design, brand kits, social assets, and sales collateral",
  },
  api: {
    heroSubtitle: "Smart integrations that connect tools, remove duplication, and keep data in sync.",
    overview:
      "Disconnected systems slow teams down and create expensive manual work. We design and build integrations that move data cleanly between platforms, automate repetitive tasks, and make your stack easier to trust and easier to operate.",
    audience:
      "Best for businesses juggling multiple tools, CRMs, dashboards, payment systems, or third-party services.",
    deliverables: [
      "Integration planning for the platforms and workflows you rely on",
      "Secure API connections, webhooks, and sync logic",
      "Data transformation and automation around real operational needs",
      "Monitoring and fallbacks to reduce integration failure risk",
    ],
    outcomes: [
      "Less manual copy-paste work across teams and systems",
      "More reliable operations through connected data flows",
      "A stack that scales without creating new bottlenecks",
    ],
    process: [
      { title: "Map Systems", description: "We define what needs to connect, how data should move, and where errors can happen." },
      { title: "Build + Secure", description: "We implement the integration layer with stability, security, and observability in mind." },
      { title: "Automate", description: "We refine the workflow so your team saves time and reduces repetitive effort." },
    ],
    industries: ["SaaS", "Logistics", "Finance", "Operations"],
    timeline: "2-6 weeks depending on systems involved",
    engagement: "API integrations, automations, dashboards, and sync workflows",
  },
  maintenance: {
    heroSubtitle: "Ongoing support that keeps your product stable, secure, and ready for what comes next.",
    overview:
      "Launch is only the beginning. We provide maintenance and support that protects performance, improves reliability, and gives your team a partner for fixes, updates, and continuous improvement instead of reactive firefighting.",
    audience:
      "Best for businesses with active websites, apps, and systems that need dependable technical ownership after launch.",
    deliverables: [
      "Bug fixing, monitoring, and day-to-day issue resolution",
      "Security updates, dependency maintenance, and patching",
      "Performance checks and technical improvements over time",
      "Ongoing feature support for evolving business needs",
    ],
    outcomes: [
      "Lower downtime risk and faster issue response",
      "Better confidence in platform health and security",
      "A smoother path for future enhancements and releases",
    ],
    process: [
      { title: "Audit + Prioritize", description: "We review current issues, technical debt, and risk areas that need attention first." },
      { title: "Stabilize", description: "We fix bugs, improve reliability, and implement a healthier maintenance rhythm." },
      { title: "Support Growth", description: "We stay available for enhancements, updates, and long-term technical care." },
    ],
    industries: ["Agencies", "SaaS", "E-Commerce", "Corporate"],
    timeline: "Monthly retainers or support blocks",
    engagement: "Support retainers, maintenance plans, and post-launch care",
  },
};

export const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Always Open", value: 24, suffix: "/7" },
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "E-Commerce" | "Software" | "Design";
  tag: string;
  summary: string;
  highlights: string[];
  impact: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Online Retail Platform",
    category: "E-Commerce",
    tag: "Conversion-first store",
    summary: "A premium storefront designed around product discovery, seasonal offers, and mobile-first checkout flow.",
    highlights: ["Catalog UX", "Checkout", "Analytics"],
    impact: "Improved buyer confidence and created a cleaner path to purchase.",
  },
  {
    id: "p2",
    title: "Delivery Management App",
    category: "Mobile",
    tag: "Realtime operations",
    summary: "A logistics app for riders, dispatch teams, and managers with live tracking and workflow visibility.",
    highlights: ["Live status", "Team flows", "Notifications"],
    impact: "Reduced coordination friction across field operations.",
  },
  {
    id: "p3",
    title: "Business Dashboard Portal",
    category: "Web",
    tag: "Insights & analytics",
    summary: "A dashboard experience that turns scattered business data into a clean reporting and decision-making hub.",
    highlights: ["Admin panel", "Reports", "Role access"],
    impact: "Gave stakeholders faster access to the numbers that matter.",
  },
  {
    id: "p4",
    title: "CRM & Inventory System",
    category: "Software",
    tag: "Automation suite",
    summary: "A custom internal platform connecting sales activity, stock movement, and operational follow-up in one place.",
    highlights: ["CRM", "Inventory", "Automation"],
    impact: "Replaced manual tracking with a more reliable operational workflow.",
  },
  {
    id: "p5",
    title: "Restaurant Booking App",
    category: "Mobile",
    tag: "Reservations & loyalty",
    summary: "A mobile app focused on seamless reservations, user retention, and repeat customer engagement.",
    highlights: ["Bookings", "Loyalty", "Offers"],
    impact: "Made repeat visits easier to drive through a stronger mobile experience.",
  },
  {
    id: "p6",
    title: "Real Estate Listing Site",
    category: "Web",
    tag: "Fast search UX",
    summary: "A modern listing platform that balances visual polish with filtering speed and inquiry conversion.",
    highlights: ["Search UX", "Lead forms", "CMS"],
    impact: "Helped users browse faster and contact agents with less friction.",
  },
  {
    id: "p7",
    title: "Brand Identity System",
    category: "Design",
    tag: "Visual language",
    summary: "A cohesive visual identity system covering logo direction, marketing assets, and brand consistency rules.",
    highlights: ["Identity", "Brand kit", "Creative assets"],
    impact: "Strengthened the brand's perceived value across channels.",
  },
  {
    id: "p8",
    title: "B2B SaaS Portal",
    category: "Software",
    tag: "Secure multi-tenant",
    summary: "A structured portal for account management, reporting, and permission-based collaboration across teams.",
    highlights: ["Multi-tenant", "Security", "Dashboards"],
    impact: "Created a more enterprise-ready experience for platform users.",
  },
];

export const testimonials = [
  {
    name: "Ahmed Khan",
    title: "CEO, RetailFirst PK",
    rating: 5,
    quote:
      "TechLine Venture delivered a premium website that loads fast and looks incredible. Communication was clear, timelines were tight, and results were real.",
  },
  {
    name: "Sara Raza",
    title: "Operations Director, TradePro",
    rating: 5,
    quote:
      "From UI/UX to deployment, they handled everything end-to-end. Our internal portal is smoother, faster, and much easier for the team to use.",
  },
  {
    name: "Omar Mirza",
    title: "Founder, Studio Mirza",
    rating: 5,
    quote:
      "They feel like a Karachi startup that can compete globally—craft, speed, and attention to detail. We’ll definitely work together again.",
  },
] as const;

export const processSteps = [
  { title: "Discover", description: "We understand your goals & requirements" },
  { title: "Design", description: "We prototype and design the solution" },
  { title: "Develop", description: "We build with clean, scalable code" },
  { title: "Deploy", description: "We launch, test, and support you ongoing" },
] as const;
