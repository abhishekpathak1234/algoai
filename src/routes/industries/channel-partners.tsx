import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Signal,
  Wallet,
  HeartHandshake,
  LineChart,
  Database,
  MessageSquare,
  FileText,
  BarChart3,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/channel-partners")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Channel Partners — Algo Realty" },
      {
        name: "description",
        content:
          "Grow channel sales with AI. Automate partner onboarding, lead distribution, commission tracking, training and performance reporting.",
      },
      { property: "og:title", content: "AI Workforce for Channel Partners — Algo Realty" },
      {
        property: "og:description",
        content: "Turn your channel network into a predictable, high-performing revenue engine.",
      },
    ],
  }),
  component: ChannelPartnersPage,
});

const data: IndustryPageProps = {
  slug: "channel-partners",
  industry: "Channel Partners",
  eyebrow: "For Channel Partner Networks",
  heroTitle: (
    <>
      Grow channel sales <span className="text-emerald-grad">with AI.</span>
    </>
  ),
  heroSub:
    "Automate partner onboarding, lead distribution, commission tracking, training and performance reporting — across hundreds or thousands of partners.",
  heroKpis: [
    { label: "Active Partners", value: "3,412" },
    { label: "Partner Revenue", value: "$182M" },
    { label: "Deal Registration", value: "< 30s" },
    { label: "Payout Cycle", value: "6 days" },
  ],
  painPoints: [
    {
      icon: Users,
      title: "Partner Onboarding",
      body: "Every new partner takes weeks to activate — paperwork, training and access are manual.",
    },
    {
      icon: Signal,
      title: "Lead Sharing",
      body: "Distributing leads fairly across partners and tracking outcomes is chaotic.",
    },
    {
      icon: Wallet,
      title: "Commission Disputes",
      body: "Payout delays and disputes erode partner trust and quarterly performance.",
    },
    {
      icon: MessageSquare,
      title: "Fragmented Communication",
      body: "Partners live across WhatsApp, portals and email — nothing centralises.",
    },
    {
      icon: FileText,
      title: "Training At Scale",
      body: "Keeping partners updated on inventory, pricing and playbook is nearly impossible.",
    },
    {
      icon: LineChart,
      title: "Weak Performance Visibility",
      body: "No real-time view into partner activity, conversion and revenue contribution.",
    },
  ],
  impacts: [
    { label: "Partner Activation", value: "5x faster" },
    { label: "Deal Registration", value: "< 30s" },
    { label: "Payout Cycle", value: "-72%" },
    { label: "Active Partners", value: "+61%" },
  ],
  employees: [
    {
      name: "AI Partner Manager",
      role: "Channel Ops",
      icon: Users,
      skills: ["Per-partner AI teammate", "Daily nudges", "Escalations", "Playbook enforcement"],
    },
    {
      name: "AI Lead Distribution",
      role: "Sales Ops",
      icon: Signal,
      skills: [
        "Rule + intent based routing",
        "Load balancing",
        "Auto reassignment",
        "SLA tracking",
      ],
    },
    {
      name: "AI Commission Assistant",
      role: "Finance",
      icon: Wallet,
      skills: ["Auto-calculations", "Slab handling", "Payout scheduling", "Dispute reduction"],
    },
    {
      name: "AI Training Assistant",
      role: "Enablement",
      icon: FileText,
      skills: [
        "Inventory + pricing updates",
        "Playbook drills",
        "Certifications",
        "Micro-learning",
      ],
    },
    {
      name: "AI Partner Support",
      role: "Support",
      icon: HeartHandshake,
      skills: ["Partner Q&A", "Onboarding help", "Portal navigation", "Escalations"],
    },
    {
      name: "AI Deal Desk",
      role: "Sales Ops",
      icon: Database,
      skills: [
        "Deal registration",
        "Approval workflows",
        "Discount handling",
        "Legal + finance routing",
      ],
    },
    {
      name: "AI Performance Analytics",
      role: "Leadership",
      icon: BarChart3,
      skills: ["Per-partner scorecards", "Cohort analysis", "Program ROI", "Anomaly detection"],
    },
    {
      name: "AI Communication",
      role: "Communication",
      icon: MessageSquare,
      skills: ["Broadcast updates", "Personalised nudges", "Multi-channel", "Multi-lingual"],
    },
    {
      name: "AI Revenue Intelligence",
      role: "Leadership",
      icon: LineChart,
      skills: ["Channel forecasts", "Partner ranking", "Program mix", "Investment briefs"],
    },
  ],
  workflow: [
    { title: "Partner Signup" },
    { title: "AI Onboards" },
    { title: "Training Delivered" },
    { title: "Leads Distributed" },
    { title: "Deal Registered" },
    { title: "Meeting Booked" },
    { title: "Site Visit" },
    { title: "Booking" },
    { title: "Commission Paid" },
  ],
  benefits: [
    "Activate new partners in days, not weeks",
    "Fair, rule-based lead distribution at scale",
    "Automated deal registration and approvals",
    "Commission calculations without disputes",
    "Continuous training on inventory + playbook",
    "Real-time partner scorecards for leadership",
    "Broadcasts and nudges across the network",
    "Predictable channel revenue forecasts",
  ],
  dashboardTitle: "Channel network performance",
  dashboardMetrics: [
    { label: "Active Partners", value: "3,412" },
    { label: "Partner Revenue MTD", value: "$18.2M" },
    { label: "Deals Registered", value: "1,842" },
    { label: "Avg Payout Cycle", value: "6 days" },
    { label: "Onboarded This Month", value: "312" },
    { label: "Trainings Completed", value: "12,480" },
    { label: "Program ROI", value: "8.4x" },
    { label: "AI Workforce", value: "16 Active" },
  ],
  caseStudy: {
    company: "National developer · 3,400 channel partners",
    tag: "Illustrative channel program deployment",
    quote:
      "Partner activation, distribution and payouts finally feel like a product — not a chase. Our channel revenue is up sharply with the same team.",
    before: [
      { label: "Partner Activation", value: "22 days" },
      { label: "Payout Cycle", value: "22 days" },
      { label: "Active Partner Ratio", value: "38%" },
      { label: "Channel Revenue / Q", value: "$34M" },
    ],
    after: [
      { label: "Partner Activation", value: "4 days" },
      { label: "Payout Cycle", value: "6 days" },
      { label: "Active Partner Ratio", value: "72%" },
      { label: "Channel Revenue / Q", value: "$61M" },
    ],
  },
  faqs: [
    {
      q: "Can it scale to thousands of channel partners?",
      a: "Yes — the AI Workforce operates per-partner with orchestration at the program level, scaling elastically.",
    },
    {
      q: "Does it integrate with our channel and CRM stack?",
      a: "Native integrations with Salesforce, LeadSquared, Sell.Do, Zoho and enterprise channel management platforms.",
    },
    {
      q: "How are commissions handled?",
      a: "The AI Commission Assistant handles complex slabs, splits and payout schedules with full audit trails.",
    },
    {
      q: "Can we run region-specific programs?",
      a: "Yes. Program structure, incentives and communication can be configured per region, product and partner tier.",
    },
  ],
};

function ChannelPartnersPage() {
  return <IndustryPage {...data} />;
}
