// AI Employees — one page per employee. Reuses the solution page shape.
import { solutions, type Solution } from "./solutions";
import {
  Users,
  PhoneCall,
  MessageSquare,
  Database,
  Wallet,
  HeartHandshake,
  CalendarCheck,
  Megaphone,
  LineChart,
  Building2,
  Briefcase,
  Shield,
  Cog,
  type LucideIcon,
} from "lucide-react";

export type Employee = Solution & { department: string };

// Reuse the 10 solutions as employees + add 4 more specialised roles
const extra: Employee[] = [
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    category: "Support",
    icon: Building2,
    tagline: "First voice every prospect hears — always on, always on-brand.",
    seoTitle: "AI Receptionist — Algo Realty",
    seoDescription:
      "24/7 AI Receptionist for real estate — routes calls, books meetings and captures every inquiry.",
    heroTitle: "The receptionist that never misses a call.",
    heroSub:
      "Always-on front desk that routes calls, books meetings, captures inquiries and represents your brand at every hour.",
    kpis: [
      { label: "Call Pickup", value: "100%" },
      { label: "Avg Latency", value: "0.8s" },
      { label: "Languages", value: "24" },
      { label: "Missed Calls", value: "0" },
    ],
    responsibilities: [
      { title: "Instant pickup", body: "Every call answered in under a second." },
      { title: "Smart routing", body: "Routes by intent, project, language and priority." },
      { title: "Meeting booking", body: "Books directly on team calendars." },
      { title: "After-hours coverage", body: "Full coverage nights, weekends and holidays." },
    ],
    workflow: [
      { title: "Call In", sub: "0.8s pickup" },
      { title: "Intent", sub: "Understand purpose" },
      { title: "Qualify", sub: "Basic screening" },
      { title: "Route", sub: "Right team" },
      { title: "Log", sub: "CRM sync" },
    ],
    outcomes: [
      { label: "Missed Calls", value: "0", sub: "vs 18%" },
      { label: "First-Contact", value: "100%" },
      { label: "CSAT", value: "4.9 / 5" },
      { label: "Payroll", value: "-$220k" },
    ],
    benefits: [
      "24/7 pickup",
      "Zero missed inquiries",
      "On-brand voice",
      "Instant routing",
      "Complete audit log",
      "Multi-lingual",
    ],
    integrations: ["Exotel", "Twilio", "Ozonetel", "Google Calendar", "Outlook", "Salesforce"],
    faqs: [
      {
        q: "Can it hand off to a human?",
        a: "Yes — warm-transfers with context when the caller asks or when the AI detects intent it should not handle.",
      },
      {
        q: "Does it integrate with our PBX?",
        a: "Yes — SIP trunk or cloud telephony (Exotel, Twilio, Ozonetel, Knowlarity).",
      },
      {
        q: "Is call recording compliant?",
        a: "Consent capture, recording, redaction and retention policies are all configurable to your jurisdiction.",
      },
    ],
    related: ["ai-telecaller", "voice-ai", "ai-support"],
    department: "Front Office",
  },
  {
    slug: "ai-channel-partner-manager",
    name: "AI Channel Partner Manager",
    category: "Sales",
    icon: Cog,
    tagline: "Activate, train and grow every channel partner at scale.",
    seoTitle: "AI Channel Partner Manager — Algo Realty",
    seoDescription:
      "AI Employee that onboards, trains and drives revenue from every channel partner in your network.",
    heroTitle: "Grow channel revenue without adding partner managers.",
    heroSub:
      "Onboards partners, tracks deal registrations, computes commissions, runs training and drives partner activation — automatically.",
    kpis: [
      { label: "Partner Activation", value: "+5x" },
      { label: "Deal Reg SLA", value: "1h" },
      { label: "Commission Errors", value: "0" },
      { label: "Partners Managed", value: "12,000" },
    ],
    responsibilities: [
      {
        title: "Partner onboarding",
        body: "KYC, agreements, credentials and training — all automated.",
      },
      {
        title: "Deal registration",
        body: "Instant validation, conflict resolution and confirmation.",
      },
      { title: "Commission tracking", body: "Milestone-based commission calc with statements." },
      { title: "Activation nudges", body: "Identifies dormant partners and re-engages them." },
    ],
    workflow: [
      { title: "Signup", sub: "Partner applies" },
      { title: "Verify", sub: "KYC + agreement" },
      { title: "Train", sub: "Product + process" },
      { title: "Register", sub: "Deals logged" },
      { title: "Payout", sub: "Milestone-based" },
    ],
    outcomes: [
      { label: "Activation Rate", value: "+5x" },
      { label: "Partner Revenue", value: "+$182M" },
      { label: "Support Tickets", value: "-64%" },
      { label: "Time-to-First-Deal", value: "9 days" },
    ],
    benefits: [
      "Automated onboarding",
      "Instant deal reg",
      "Accurate commissions",
      "24/7 partner support",
      "Training on demand",
      "Full leaderboard",
    ],
    integrations: ["Salesforce PRM", "HubSpot", "Zoho", "WhatsApp Business", "Slack"],
    faqs: [
      {
        q: "Can it prevent commission disputes?",
        a: "Yes — every deal registration is time-stamped and conflicts are surfaced instantly with an auditable trail.",
      },
      {
        q: "Does it work for franchise networks?",
        a: "Yes — hierarchical partner structures, sub-brokers and franchisees are supported.",
      },
      {
        q: "Can partners self-serve?",
        a: "Partners get a WhatsApp/portal interface to register deals, check commissions and access training.",
      },
    ],
    related: ["ai-crm", "ai-marketing", "revenue-intelligence"],
    department: "Partnerships",
  },
  {
    slug: "ai-inventory-manager",
    name: "AI Inventory Manager",
    category: "Operations",
    icon: Building2,
    tagline: "Real-time unit availability, hold expiry and pricing sync.",
    seoTitle: "AI Inventory Manager — Algo Realty",
    seoDescription:
      "Real-time inventory sync across projects, channels and CRMs — no double-bookings.",
    heroTitle: "Inventory that's always accurate. Everywhere.",
    heroSub:
      "Live unit availability, hold expiry, dynamic pricing and channel sync across every project.",
    kpis: [
      { label: "Sync Latency", value: "< 2s" },
      { label: "Double-Bookings", value: "0" },
      { label: "Projects", value: "42" },
      { label: "Channels", value: "18" },
    ],
    responsibilities: [
      { title: "Live availability", body: "Every unit, block and tower reflected in real time." },
      {
        title: "Hold management",
        body: "Enforces hold expiry and releases inventory automatically.",
      },
      { title: "Dynamic pricing", body: "Applies pricing rules by project, unit type and demand." },
      { title: "Channel sync", body: "Pushes inventory to portals, partners and internal CRMs." },
    ],
    workflow: [
      { title: "Source", sub: "Master inventory" },
      { title: "Rules", sub: "Pricing + holds" },
      { title: "Publish", sub: "All channels" },
      { title: "Reconcile", sub: "Every 2s" },
      { title: "Report", sub: "Daily digest" },
    ],
    outcomes: [
      { label: "Overselling", value: "0 events" },
      { label: "Portal Sync", value: "< 2s" },
      { label: "Manual Updates", value: "-98%" },
      { label: "Portfolio", value: "18.4M sqft" },
    ],
    benefits: [
      "Real-time accuracy",
      "Zero double-bookings",
      "Automated holds",
      "Dynamic pricing",
      "Portal + partner sync",
      "Audit trail",
    ],
    integrations: ["Salesforce", "LeadSquared", "Sell.Do", "99acres", "Housing.com", "MagicBricks"],
    faqs: [
      {
        q: "How fast is the sync?",
        a: "Under 2 seconds end-to-end across every downstream channel.",
      },
      {
        q: "Can pricing be time-based?",
        a: "Yes — time-of-day, launch, festive and demand-based pricing rules are supported.",
      },
      {
        q: "Does it prevent holds abuse?",
        a: "Yes — hold windows expire automatically and re-releases the unit.",
      },
    ],
    related: ["ai-crm", "revenue-intelligence", "ai-sales-executive"],
    department: "Operations",
  },
  {
    slug: "ai-compliance-officer",
    name: "AI Compliance Officer",
    category: "Support",
    icon: Shield,
    tagline: "RERA, KYC and audit-trail compliance — automated.",
    seoTitle: "AI Compliance Officer — Algo Realty",
    seoDescription:
      "AI Employee for RERA, KYC and audit-trail compliance across every real estate transaction.",
    heroTitle: "Compliance without the compliance team.",
    heroSub:
      "RERA disclosures, KYC verification, consent logs and audit trails — enforced on every conversation and transaction.",
    kpis: [
      { label: "Coverage", value: "100%" },
      { label: "Audit-Ready", value: "Always" },
      { label: "KYC Cycle", value: "< 5m" },
      { label: "Escalations", value: "-72%" },
    ],
    responsibilities: [
      {
        title: "RERA disclosures",
        body: "Ensures every asset shared carries mandated disclosures.",
      },
      { title: "KYC / eSign", body: "Automates identity verification and eSign flows." },
      {
        title: "Consent capture",
        body: "Explicit consent logged for calls, WhatsApp and marketing.",
      },
      { title: "Audit trails", body: "Every interaction searchable and exportable for auditors." },
    ],
    workflow: [
      { title: "Interaction", sub: "Call / Chat" },
      { title: "Policy Check", sub: "Rules engine" },
      { title: "Consent", sub: "Explicit capture" },
      { title: "Log", sub: "Immutable store" },
      { title: "Audit", sub: "One-click export" },
    ],
    outcomes: [
      { label: "Violations", value: "0", sub: "detected" },
      { label: "KYC Time", value: "< 5m" },
      { label: "Audit Prep", value: "-88%" },
      { label: "Legal Risk", value: "Reduced" },
    ],
    benefits: [
      "Automated RERA disclosures",
      "eKYC + eSign",
      "Consent capture",
      "Immutable audit trails",
      "Region-specific policies",
      "Regulator-ready exports",
    ],
    integrations: ["Salesforce", "DocuSign", "Aadhaar eKYC", "WhatsApp Business"],
    faqs: [
      {
        q: "Which jurisdictions are supported?",
        a: "RERA (India), FTC (US), GDPR (EU) and configurable rules for any region.",
      },
      {
        q: "Can we run our own policies?",
        a: "Yes — the rules engine is configurable per project and region.",
      },
      { q: "Is data encrypted?", a: "In transit and at rest, with region-specific residency." },
    ],
    related: ["ai-crm", "ai-support", "ai-collections"],
    department: "Compliance",
  },
];

export const employees: Employee[] = [
  ...solutions.map((s) => ({ ...s, department: s.category })),
  ...extra,
];

export const employeeBySlug = (slug: string) => employees.find((e) => e.slug === slug);
