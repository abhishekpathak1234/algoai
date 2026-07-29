export type Integration = {
  slug: string;
  name: string;
  category: "CRM" | "Communications" | "Advertising" | "Calendar" | "Portals" | "Collaboration";
  short: string;
  seoTitle: string;
  seoDescription: string;
  syncs: { title: string; body: string }[];
  workflow: { title: string; sub?: string }[];
  faqs: { q: string; a: string }[];
};

const mk = (i: Omit<Integration, "seoTitle" | "seoDescription" | "syncs" | "workflow" | "faqs"> & Partial<Integration>): Integration => ({
  seoTitle: `${i.name} Integration — Algo Realty`,
  seoDescription: `Connect ${i.name} with Algo Realty's AI Workforce. Bi-directional sync, real-time updates, enterprise-grade security.`,
  syncs: [
    { title: "Leads", body: `Every lead captured by AI syncs into ${i.name} instantly with full context.` },
    { title: "Activities", body: `Calls, meetings, WhatsApp chats and outcomes logged to ${i.name} records.` },
    { title: "Stage updates", body: `AI-driven qualification updates ${i.name} pipeline stages in real time.` },
    { title: "Attribution", body: `Source, campaign and channel attributed on every ${i.name} deal.` },
  ],
  workflow: [
    { title: "Connect", sub: "OAuth / API key" },
    { title: "Map", sub: "Fields + stages" },
    { title: "Sync", sub: "Bi-directional" },
    { title: "Automate", sub: "AI acts" },
    { title: "Report", sub: "Unified view" },
  ],
  faqs: [
    { q: `Is this a certified ${i.name} integration?`, a: "Yes — built and maintained by the Algo Realty team using official APIs, with enterprise SLAs." },
    { q: "Is the sync bi-directional?", a: "Yes — updates flow both ways in real time." },
    { q: "How long does setup take?", a: "Most connections go live within a day; complex field mappings take under a week." },
    { q: "What about data security?", a: "Encrypted in transit and at rest. SOC 2 aligned. Region-specific data residency available." },
  ],
  ...i,
} as Integration);

export const integrations: Integration[] = [
  mk({ slug: "salesforce", name: "Salesforce", category: "CRM", short: "Enterprise CRM with the deepest field-level sync." }),
  mk({ slug: "hubspot", name: "HubSpot", category: "CRM", short: "Full CRM + Marketing Hub sync for growth teams." }),
  mk({ slug: "leadsquared", name: "LeadSquared", category: "CRM", short: "India's most-used real-estate CRM — natively supported." }),
  mk({ slug: "zoho-crm", name: "Zoho CRM", category: "CRM", short: "End-to-end Zoho suite sync including Books and Desk." }),
  mk({ slug: "microsoft-teams", name: "Microsoft Teams", category: "Collaboration", short: "Notifications, handoffs and command surface inside Teams." }),
  mk({ slug: "google-workspace", name: "Google Workspace", category: "Collaboration", short: "Gmail, Drive and Calendar integration for the whole team." }),
  mk({ slug: "google-calendar", name: "Google Calendar", category: "Calendar", short: "Real-time site visit and meeting scheduling." }),
  mk({ slug: "outlook", name: "Outlook", category: "Calendar", short: "Outlook Calendar and mail sync for enterprise teams." }),
  mk({ slug: "slack", name: "Slack", category: "Collaboration", short: "Live alerts, hot leads and workforce activity in Slack." }),
  mk({ slug: "whatsapp-business", name: "WhatsApp Business", category: "Communications", short: "Official WhatsApp Business API with template management." }),
  mk({ slug: "meta-ads", name: "Meta Ads", category: "Advertising", short: "Facebook + Instagram lead ads with instant AI response." }),
  mk({ slug: "google-ads", name: "Google Ads", category: "Advertising", short: "Search + Performance Max lead forms and offline conversions." }),
  mk({ slug: "99acres", name: "99acres", category: "Portals", short: "Inbound lead sync from 99acres with instant AI qualification." }),
  mk({ slug: "housing", name: "Housing.com", category: "Portals", short: "Housing.com lead capture and inventory sync." }),
  mk({ slug: "magicbricks", name: "MagicBricks", category: "Portals", short: "MagicBricks lead sync with source attribution." }),
];

export const integrationBySlug = (slug: string) => integrations.find((i) => i.slug === slug);
