import { CTA_BOOK_FULL, CTA_TALK_TO_EXPERT } from "@/lib/contact";

export type Tier = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const tiers: Tier[] = [
  {
    slug: "growth",
    name: "Growth",
    tagline: "For growing builders and brokerages ready to deploy their first AI Employees.",
    price: "Custom",
    priceNote: "Annual, per AI Employee",
    features: [
      "Up to 3 AI Employees",
      "1 project or region",
      "Standard integrations (Salesforce, HubSpot, LeadSquared)",
      "WhatsApp Business API",
      "Weekly executive reporting",
      "Business-hours support",
    ],
    cta: CTA_TALK_TO_EXPERT,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    tagline: "For multi-project developers and national brokerages running the full AI Workforce.",
    price: "Custom",
    priceNote: "Annual · Multi-year available",
    featured: true,
    features: [
      "Unlimited AI Employees",
      "Unlimited projects",
      "All integrations including custom",
      "Executive Command Center",
      "Dedicated success team",
      "24/7 priority support",
      "SOC 2 + region data residency",
      "SLA-backed uptime",
    ],
    cta: CTA_BOOK_FULL,
  },
  {
    slug: "custom",
    name: "Custom",
    tagline:
      "For franchise networks, luxury boutiques and multinational portfolios with bespoke needs.",
    price: "Bespoke",
    priceNote: "Scoped per engagement",
    features: [
      "White-labelled AI Employees",
      "Custom voice personas",
      "Multi-region orchestration",
      "Compliance officers on staff",
      "On-premise deployment options",
      "Named executive sponsor",
    ],
    cta: CTA_TALK_TO_EXPERT,
  },
];
