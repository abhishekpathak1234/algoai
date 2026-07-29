import {
  Users, PhoneCall, MessageSquare, Database, Wallet, HeartHandshake,
  CalendarCheck, Megaphone, Mic, LineChart,
  type LucideIcon,
} from "lucide-react";

export type SolutionFAQ = { q: string; a: string };

export type Solution = {
  slug: string;
  name: string;
  category: "Sales" | "Marketing" | "CRM" | "Finance" | "Support" | "Operations" | "Leadership";
  icon: LucideIcon;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSub: string;
  kpis: { label: string; value: string; delta?: string }[];
  responsibilities: { title: string; body: string }[];
  workflow: { title: string; sub?: string }[];
  outcomes: { label: string; value: string; sub?: string }[];
  benefits: string[];
  integrations: string[];
  faqs: SolutionFAQ[];
  related: string[]; // solution slugs
};

const base = (s: Partial<Solution> & { slug: string; name: string; category: Solution["category"]; icon: LucideIcon; tagline: string }): Solution => ({
  seoTitle: `${s.name} — Algo Realty`,
  seoDescription: s.tagline!,
  heroTitle: s.name!,
  heroSub: s.tagline!,
  kpis: [
    { label: "Response Time", value: "3.8s", delta: "24/7" },
    { label: "Conversion Lift", value: "+38%" },
    { label: "Payroll Saved", value: "$1.4M" },
    { label: "Coverage", value: "100%" },
  ],
  responsibilities: [
    { title: "Autonomous execution", body: "Runs its scope end-to-end without human triggers, escalating only when required." },
    { title: "Native integrations", body: "Reads and writes into your CRM, telephony, WhatsApp, calendar and finance stack." },
    { title: "Playbook adherence", body: "Follows your exact qualification, tone-of-voice and compliance playbook every time." },
    { title: "Real-time reporting", body: "Every conversation, action and outcome logged to your executive command center." },
  ],
  workflow: [
    { title: "Trigger", sub: "Event captured" },
    { title: "Understand", sub: "Context enriched" },
    { title: "Act", sub: "Task executed" },
    { title: "Update", sub: "Systems synced" },
    { title: "Report", sub: "Metrics streamed" },
  ],
  outcomes: [
    { label: "Revenue Impact", value: "+$8.4M", sub: "recovered pipeline" },
    { label: "Payroll", value: "-$1.8M", sub: "annualised" },
    { label: "Response Time", value: "3.8s" },
    { label: "Uptime", value: "24 / 7" },
  ],
  benefits: [
    "Always-on coverage across every channel",
    "Zero manual data entry",
    "Multi-lingual conversations at scale",
    "Instant escalations to human specialists",
    "Compliance-grade audit trails",
    "Deploys in weeks, not quarters",
  ],
  integrations: ["Salesforce", "HubSpot", "LeadSquared", "Zoho", "WhatsApp Business", "Google Calendar", "Slack", "Meta Ads"],
  faqs: [
    { q: `How does ${s.name} qualify buyers?`, a: "It follows your exact qualification playbook — budget, timeline, location, configuration and intent — and disqualifies noise before sales sees the lead." },
    { q: "Which CRMs are supported?", a: "Bi-directional sync with Salesforce, HubSpot, LeadSquared, Zoho, Sell.Do and most enterprise real-estate CRMs." },
    { q: "How long is deployment?", a: "Typical rollouts go live in 3–5 weeks including integrations, telephony and calibration." },
    { q: "Can it reduce payroll costs?", a: "Yes — most customers redeploy their team to closing while the AI Workforce handles top-of-funnel and repetitive execution." },
    { q: "Is it enterprise-secure?", a: "SOC 2 aligned, encrypted in transit and at rest, with region-specific data residency." },
  ],
  related: [],
  ...s,
} as Solution);

export const solutions: Solution[] = [
  base({
    slug: "ai-sales-executive", name: "AI Sales Executive", category: "Sales", icon: Users,
    tagline: "Qualify every buyer, book every meeting, close revenue faster.",
    heroTitle: "AI Sales Executive that closes revenue, 24/7.",
    heroSub: "Qualifies buyers, answers pricing and inventory, recommends configurations and books meetings directly on your team's calendar.",
    responsibilities: [
      { title: "Buyer qualification", body: "Assesses budget, timeline, location, configuration and intent using your playbook." },
      { title: "Live pricing & inventory", body: "Answers unit availability, pricing, floor plans and offers in real time." },
      { title: "Meeting bookings", body: "Books site visits and calls directly on your team's calendar with reminders." },
      { title: "Nurture at scale", body: "Runs multi-touch nurture across calls, WhatsApp and email until buyer is ready." },
    ],
    related: ["ai-telecaller", "ai-whatsapp", "ai-crm"],
  }),
  base({
    slug: "ai-telecaller", name: "AI Telecaller", category: "Sales", icon: PhoneCall,
    tagline: "Human-quality voice at unlimited scale — inbound and outbound.",
    heroTitle: "Voice AI that sounds human. Calls that convert.",
    heroSub: "Inbound and outbound voice at unlimited scale, in Hindi, English and 20+ regional languages — with sub-second latency.",
    responsibilities: [
      { title: "Inbound handling", body: "Never miss a call — instant pickup, qualification and routing to the right team." },
      { title: "Outbound campaigns", body: "Nurture cold leads, confirm site visits, follow up post-visit at unlimited scale." },
      { title: "Multi-lingual voice", body: "Speaks 20+ languages with native accents and code-switching." },
      { title: "Live agent handoff", body: "Warm-transfers to human agents with context when required." },
    ],
    related: ["voice-ai", "ai-sales-executive", "ai-site-visits"],
  }),
  base({
    slug: "ai-whatsapp", name: "AI WhatsApp Executive", category: "Sales", icon: MessageSquare,
    tagline: "Instant WhatsApp replies with brochures, floor plans and payment links.",
    heroTitle: "WhatsApp AI that replies in seconds. In every language.",
    heroSub: "Delivers brochures, floor plans, video walkthroughs and payment links inside WhatsApp — with the same rigor as your best executive.",
    responsibilities: [
      { title: "Instant replies", body: "Answers every WhatsApp inquiry in seconds, 24/7." },
      { title: "Rich media delivery", body: "Sends brochures, videos, images, floor plans and offers automatically." },
      { title: "Payment links", body: "Generates payment links and tracks status through to receipt." },
      { title: "Broadcast + drip", body: "Runs approved broadcast campaigns and drip nurture." },
    ],
    related: ["ai-marketing", "ai-sales-executive", "ai-support"],
  }),
  base({
    slug: "ai-crm", name: "AI CRM Executive", category: "CRM", icon: Database,
    tagline: "Zero-touch CRM hygiene, lead assignment and pipeline visibility.",
    heroTitle: "CRM that updates itself. Pipeline you can trust.",
    heroSub: "Auto-logs every call, meeting, chat and outcome. Enforces stage discipline, assigns leads intelligently and keeps forecasts real.",
    responsibilities: [
      { title: "Auto-logging", body: "Every call, chat and email logged to the correct record without manual entry." },
      { title: "Stage discipline", body: "Enforces qualification, next-step and SLA hygiene across every rep." },
      { title: "Intelligent routing", body: "Assigns leads by geography, product, source, load and score in real time." },
      { title: "Forecast integrity", body: "Cleans stale records and surfaces at-risk pipeline for leadership." },
    ],
    related: ["revenue-intelligence", "ai-sales-executive", "ai-collections"],
  }),
  base({
    slug: "ai-collections", name: "AI Collections Executive", category: "Finance", icon: Wallet,
    tagline: "Milestone reminders, receipts and escalations — automated end-to-end.",
    heroTitle: "Collections that runs on time, every time.",
    heroSub: "Milestone-based reminders, payment link delivery, receipt confirmations and finance-team escalations — without a single spreadsheet.",
    responsibilities: [
      { title: "Milestone reminders", body: "Tracks construction and payment milestones per unit and reminds automatically." },
      { title: "Payment orchestration", body: "Sends payment links across WhatsApp, email and SMS with follow-up." },
      { title: "Receipt & GST", body: "Confirms receipt, issues acknowledgements and syncs to finance." },
      { title: "Escalation logic", body: "Escalates aging invoices to finance with full history and next steps." },
    ],
    related: ["ai-crm", "ai-support", "revenue-intelligence"],
  }),
  base({
    slug: "ai-support", name: "AI Customer Success", category: "Support", icon: HeartHandshake,
    tagline: "Post-booking updates, documentation help and issue resolution.",
    heroTitle: "Customer success that never sleeps.",
    heroSub: "Handles construction updates, documentation queries, possession status and complaint intake with white-glove care.",
    responsibilities: [
      { title: "Status updates", body: "Proactive construction, documentation and possession updates." },
      { title: "Issue intake", body: "Triages complaints and routes to the right internal team with SLA tracking." },
      { title: "Documentation help", body: "Answers KYC, agreement and registration queries with source of truth." },
      { title: "CSAT tracking", body: "Captures NPS/CSAT after every touchpoint." },
    ],
    related: ["ai-whatsapp", "ai-crm", "ai-collections"],
  }),
  base({
    slug: "ai-site-visits", name: "AI Site Visit Coordinator", category: "Operations", icon: CalendarCheck,
    tagline: "Book, confirm, reschedule and follow up on every site visit.",
    heroTitle: "Every site visit — booked, confirmed, followed up.",
    heroSub: "Coordinates buyers, sales teams and on-site staff. Auto-reschedules no-shows and captures post-visit feedback.",
    responsibilities: [
      { title: "Scheduling", body: "Books site visits across projects and salespeople with calendar sync." },
      { title: "Confirmations", body: "Multi-channel reminders raise show-up rates by 30%+." },
      { title: "Rescheduling", body: "Auto-reschedules with no-shows and updates all stakeholders." },
      { title: "Feedback capture", body: "Post-visit CSAT and buyer intent captured into CRM." },
    ],
    related: ["ai-telecaller", "ai-sales-executive", "ai-crm"],
  }),
  base({
    slug: "ai-marketing", name: "AI Marketing Analyst", category: "Marketing", icon: Megaphone,
    tagline: "Attribution, budget optimisation and lead-quality scoring.",
    heroTitle: "Marketing spend that pays back — measured to the lead.",
    heroSub: "Attributes every rupee of spend to bookings, scores lead quality by source and reallocates budget automatically.",
    responsibilities: [
      { title: "Attribution", body: "Multi-touch attribution from ad click to booking and collection." },
      { title: "Source scoring", body: "Ranks channels by lead quality, not vanity CPL." },
      { title: "Budget reallocation", body: "Suggests spend shifts weekly with expected ROI." },
      { title: "Creative testing", body: "Flags underperforming creatives and audiences." },
    ],
    related: ["revenue-intelligence", "ai-whatsapp", "ai-sales-executive"],
  }),
  base({
    slug: "voice-ai", name: "Voice AI", category: "Sales", icon: Mic,
    tagline: "Sub-second latency voice with human-quality tone.",
    heroTitle: "Voice AI built for enterprise real estate.",
    heroSub: "Ultra-low latency, natural voice, custom personas and full telephony integration — powering every voice-based AI Employee.",
    responsibilities: [
      { title: "Sub-second latency", body: "Feels indistinguishable from a human on the line." },
      { title: "Custom personas", body: "Branded voices tuned to your tone and script." },
      { title: "Telephony native", body: "Plug into Exotel, Ozonetel, Twilio, Knowlarity and enterprise PBX." },
      { title: "Compliance grade", body: "Recording, redaction and consent flows baked in." },
    ],
    related: ["ai-telecaller", "ai-sales-executive", "ai-site-visits"],
  }),
  base({
    slug: "revenue-intelligence", name: "Revenue Intelligence", category: "Leadership", icon: LineChart,
    tagline: "Real-time pipeline forecasting and anomaly detection for leadership.",
    heroTitle: "The revenue truth, in one command center.",
    heroSub: "Pipeline, bookings, collections and workforce activity — reconciled in real time for MDs, CEOs and Sales Directors.",
    responsibilities: [
      { title: "Live pipeline", body: "Every stage, every project, every rep — updated continuously." },
      { title: "Forecasting", body: "AI forecasts bookings by project with confidence bands." },
      { title: "Anomaly alerts", body: "Flags conversion drops, stale pipeline and revenue risks instantly." },
      { title: "Executive views", body: "Boardroom-ready dashboards without a BI team." },
    ],
    related: ["ai-crm", "ai-marketing", "ai-collections"],
  }),
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
