export type BlogCategory = { slug: string; name: string; description: string };

export const blogCategories: BlogCategory[] = [
  { slug: "ai", name: "AI", description: "How AI is re-shaping enterprise real estate." },
  { slug: "sales", name: "Sales", description: "Playbooks for AI-first real estate sales orgs." },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Attribution, spend and lead-quality tactics.",
  },
  { slug: "crm", name: "CRM", description: "Zero-touch CRM strategies and case studies." },
  { slug: "builders", name: "Builders", description: "For residential builder leadership." },
  { slug: "developers", name: "Developers", description: "For multi-project developers." },
  { slug: "brokerages", name: "Brokerages", description: "For national and regional brokerages." },
  {
    slug: "property-management",
    name: "Property Management",
    description: "For property management leaders.",
  },
  {
    slug: "automation",
    name: "Automation",
    description: "Workflow automation across real estate.",
  },
  { slug: "analytics", name: "Analytics", description: "Revenue intelligence and forecasting." },
  { slug: "voice-ai", name: "Voice AI", description: "Voice technology for real estate." },
  { slug: "whatsapp", name: "WhatsApp", description: "WhatsApp Business strategies." },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
};

// Curated blog inventory — 100 SEO posts across 12 categories.
// Long-form body renders from templated sections in ArticlePage using this metadata.
const seed: [string, string, string, string?][] = [
  // AI
  [
    "How AI Increases Property Sales",
    "The mechanics behind AI-driven revenue lift in real estate.",
    "ai",
  ],
  ["AI Workforce vs Chatbots", "Why AI Employees own outcomes and chatbots don't.", "ai"],
  [
    "Future of AI Employees in Real Estate",
    "The org chart of a $10B AI-native real estate company.",
    "ai",
  ],
  ["AI Workforce vs Traditional Teams", "Head-to-head economics of an AI-first sales org.", "ai"],
  [
    "What Enterprise AI Actually Means",
    "Beyond the buzzword — enterprise AI defined operationally.",
    "ai",
  ],
  ["Building an AI-Ready Real Estate Company", "The five capabilities every CEO must build.", "ai"],
  [
    "The AI Workforce Operating Model",
    "How to structure human + AI teams for maximum leverage.",
    "ai",
  ],
  [
    "AI, Governance and Real Estate",
    "Governing an AI Workforce with the same rigor as human employees.",
    "ai",
  ],
  // Sales
  [
    "Reducing Lead Leakage in Real Estate",
    "A framework to plug every leak between marketing and closing.",
    "sales",
  ],
  [
    "Why Speed Wins in Real Estate Sales",
    "Response time is the biggest lever on conversion.",
    "sales",
  ],
  [
    "Sales Productivity Metrics That Matter",
    "The 6 metrics executives should track weekly.",
    "sales",
  ],
  [
    "The New Sales Stack for Builders",
    "How the modern builder sales stack is being re-designed.",
    "sales",
  ],
  ["From CPL to Cost-per-Booking", "Move budgets from vanity metrics to revenue metrics.", "sales"],
  ["Reviving Cold Leads at Scale", "How AI Telecalling makes cold lead nurture economic.", "sales"],
  ["Coaching Sales Teams with AI", "Using call intelligence to raise the median rep.", "sales"],
  ["Territory + Round-Robin Assignment", "Best practices for distributing leads fairly.", "sales"],
  ["Follow-up Frequency That Converts", "How many touches, over how many days.", "sales"],
  ["Multi-language Sales Coverage", "Serving 20+ languages without hiring 20+ teams.", "sales"],
  // Marketing
  ["Real Estate Marketing Attribution", "Attribute every rupee of spend to bookings.", "marketing"],
  ["Meta Ads for Builders in 2026", "Lead-ad playbooks that actually convert.", "marketing"],
  [
    "Google Ads for Developers",
    "Search + PMax structures for multi-project portfolios.",
    "marketing",
  ],
  [
    "Portal Lead Economics",
    "99acres, Housing, MagicBricks: yield and quality benchmarks.",
    "marketing",
  ],
  ["Creative Testing at Scale", "The 3-week creative cadence for real estate teams.", "marketing"],
  ["Lead Quality vs Lead Quantity", "Why quality beats quantity in every model.", "marketing"],
  ["Attribution After iOS Privacy", "Modern attribution beyond last-click.", "marketing"],
  ["Landing Page CVR Playbook", "Design principles for real estate landing pages.", "marketing"],
  ["Reactivating Old Databases", "Turn dormant CRM into fresh pipeline.", "marketing"],
  // CRM
  ["AI CRM Best Practices", "The zero-touch CRM playbook.", "crm"],
  ["Real Estate CRM Guide", "Choosing and running a CRM in 2026.", "crm"],
  ["Salesforce for Real Estate", "Salesforce architecture for builders and brokerages.", "crm"],
  ["HubSpot for Growth Brokerages", "HubSpot patterns for scaling brokerages.", "crm"],
  ["LeadSquared vs Sell.Do", "How to choose between India's top real-estate CRMs.", "crm"],
  ["Data Hygiene Playbook", "Keeping CRM clean when volume 10x's.", "crm"],
  ["Pipeline Stages That Actually Work", "Designing stages that reflect reality.", "crm"],
  ["CRM Adoption Without Bribes", "Getting reps to actually use the CRM.", "crm"],
  // Builders
  ["Builder Sales Automation", "The end-to-end automation blueprint for builders.", "builders"],
  ["Handling Launches Without Adding Headcount", "How AI absorbs launch-day volume.", "builders"],
  [
    "Site Visits That Convert 2x Better",
    "Show-up rates and post-visit follow-through.",
    "builders",
  ],
  ["Construction Update Automation", "Keep every buyer informed at every milestone.", "builders"],
  ["EMI + Milestone Collections", "Automating milestone-linked payments.", "builders"],
  ["Multi-project Sales Ops", "Running 10+ projects with one AI Workforce.", "builders"],
  // Developers
  [
    "Voice AI for Developers",
    "Deploying voice AI across enterprise developer portfolios.",
    "developers",
  ],
  ["Scaling Sales Without Scaling Teams", "The developer playbook.", "developers"],
  ["Inventory Sync at Enterprise Scale", "Real-time inventory across 40+ projects.", "developers"],
  [
    "Channel Partner Programs That Convert",
    "Partner activation, deal reg and commissions.",
    "developers",
  ],
  ["Board-Ready Revenue Dashboards", "What every developer CEO should see weekly.", "developers"],
  ["Cross-project Marketing Optimisation", "Reallocating spend across a portfolio.", "developers"],
  // Brokerages
  ["Broker Productivity Playbook", "Raising the median broker's revenue.", "brokerages"],
  ["Lead Distribution That's Fair and Fast", "SLA-first lead distribution designs.", "brokerages"],
  [
    "Commission Automation Without Disputes",
    "Automated, auditable commission processing.",
    "brokerages",
  ],
  [
    "Referral Management for Brokerages",
    "Referrals as a first-class revenue channel.",
    "brokerages",
  ],
  ["Coaching a National Broker Team", "Using AI to coach thousands of brokers.", "brokerages"],
  [
    "Franchise-friendly AI Deployment",
    "Rolling AI across franchisees without brand drift.",
    "brokerages",
  ],
  // Property Management
  ["Automating Rent Reminders", "How AI keeps DSO under 7 days.", "property-management"],
  [
    "Maintenance Ticket Automation",
    "Instant triage, routing and SLA tracking.",
    "property-management",
  ],
  [
    "Tenant Communication at Scale",
    "White-glove tenant experience without more staff.",
    "property-management",
  ],
  [
    "Occupancy Reporting for Leadership",
    "Real-time occupancy across a national portfolio.",
    "property-management",
  ],
  ["Lease Renewal Playbook", "Automating renewals and reducing churn.", "property-management"],
  ["Property Management KPIs", "The 10 KPIs to run PM by.", "property-management"],
  // Automation
  ["Automating Site Visits", "End-to-end automation of scheduling and follow-up.", "automation"],
  ["Follow-up Automation That Feels Human", "The tone-of-voice playbook.", "automation"],
  ["Automating Collections", "Milestone-linked collections at scale.", "automation"],
  ["Data Entry: Zero-Touch by Design", "Eliminating manual CRM work.", "automation"],
  [
    "Automation Debt in Real Estate",
    "How teams accumulate automation debt — and pay it back.",
    "automation",
  ],
  [
    "Change Management for Automation",
    "Rolling out automation without team pushback.",
    "automation",
  ],
  // Analytics
  [
    "Pipeline Forecasting for Real Estate",
    "Forecasting bookings by project, month and rep.",
    "analytics",
  ],
  [
    "Revenue Intelligence Explained",
    "What it is and why every real estate CEO needs it.",
    "analytics",
  ],
  [
    "Anomaly Detection on Sales Funnels",
    "Catching drops before they become quarterly misses.",
    "analytics",
  ],
  [
    "Executive Dashboards That Get Used",
    "Design principles for dashboards leaders open every day.",
    "analytics",
  ],
  ["Attribution Models Compared", "Last-click, linear, time-decay, data-driven.", "analytics"],
  [
    "Cohort Analysis for Real Estate",
    "Booking cohorts, retention and lifetime value.",
    "analytics",
  ],
  // Voice AI
  ["Voice AI for Real Estate", "The state of voice AI in 2026.", "voice-ai"],
  ["Choosing a Voice AI Provider", "The buyer's checklist.", "voice-ai"],
  ["Voice AI Latency: Why It Matters", "Sub-second latency and buyer trust.", "voice-ai"],
  ["Voice Personas and Brand", "Custom voices that reflect your brand.", "voice-ai"],
  ["Compliance for Voice AI", "Consent, recording and jurisdictional rules.", "voice-ai"],
  ["Voice AI vs Human Telecalling", "Head-to-head economics.", "voice-ai"],
  ["Building a Voice AI Playbook", "From script to deployment.", "voice-ai"],
  ["Multi-lingual Voice AI", "Serving 20+ languages with one platform.", "voice-ai"],
  // WhatsApp
  ["WhatsApp AI for Real Estate", "Turning WhatsApp into a booking engine.", "whatsapp"],
  ["WhatsApp Business API Explained", "What builders and brokerages need to know.", "whatsapp"],
  ["WhatsApp Templates That Convert", "Templates, tone and timing.", "whatsapp"],
  ["Broadcast vs Drip on WhatsApp", "When to use which.", "whatsapp"],
  ["Payment Links Inside WhatsApp", "Frictionless bookings and collections.", "whatsapp"],
  ["Rich Media Playbook for WhatsApp", "Brochures, videos and floor plans that close.", "whatsapp"],
  ["WhatsApp Compliance in 2026", "Consent, opt-out and template rules.", "whatsapp"],
  ["Multi-agent WhatsApp Routing", "Routing to the right rep or AI Employee.", "whatsapp"],
  // Extras to reach 100
  [
    "Improving Collections in Real Estate",
    "The end-to-end collections operating model.",
    "automation",
  ],
  [
    "Sales Productivity for Enterprise Builders",
    "Systems that raise the median rep by 2x.",
    "sales",
  ],
  [
    "Marketing Attribution for Multi-project Portfolios",
    "Attribute across 20+ projects with one truth.",
    "marketing",
  ],
  ["Revenue Forecasting for MDs", "What good forecasting looks like in real estate.", "analytics"],
  [
    "Buyer Qualification Playbook",
    "The 12 questions every AI Sales Executive should ask.",
    "sales",
  ],
  [
    "Reducing No-shows on Site Visits",
    "Multi-channel confirmations that lift show-up 30%+.",
    "builders",
  ],
  [
    "Post-booking Customer Experience",
    "Everything after signing the agreement.",
    "property-management",
  ],
  ["The CEO's Guide to AI Workforce ROI", "Modelling ROI before deployment.", "ai"],
  [
    "Building a Command Center for Real Estate",
    "The Bloomberg-terminal experience for real estate leadership.",
    "analytics",
  ],
  ["Change Management for AI Deployment", "Getting sales and CRM teams on board.", "ai"],
  ["Compliance & AI in Indian Real Estate", "RERA, KYC and consent — automated.", "ai"],
  [
    "Multi-region AI Deployments",
    "Playbook for multi-country real estate portfolios.",
    "developers",
  ],
];

// Ensure uniqueness of slugs
const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const blogPosts: BlogPost[] = seed.slice(0, 100).map((row) => ({
  slug: slugify(row[0]),
  title: row[0],
  excerpt: row[1],
  category: row[2],
  readTime: `${6 + (row[0].length % 8)} min read`,
  published: "2026-01-15",
}));

export const blogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const blogPostsByCategory = (cat: string) => blogPosts.filter((p) => p.category === cat);
export const blogCategoryBySlug = (slug: string) => blogCategories.find((c) => c.slug === slug);
