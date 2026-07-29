import { createFileRoute } from "@tanstack/react-router";
import {
  Users, LineChart, Database, PhoneCall, Signal, BarChart3,
  Wallet, HeartHandshake, MessageSquare, Crown,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/brokerages")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Brokerages — Algo Realty" },
      { name: "description", content: "Give every broker their own AI team. Automate lead distribution, follow-up, coaching, reporting and commission tracking at scale." },
      { property: "og:title", content: "AI Workforce for Brokerages — Algo Realty" },
      { property: "og:description", content: "Executive visibility, consistent broker performance and higher revenue per head." },
    ],
  }),
  component: BrokeragesPage,
});

const data: IndustryPageProps = {
  slug: "brokerages",
  industry: "Brokerages",
  eyebrow: "For Enterprise Brokerages",
  heroTitle: (<>Give every broker their own <span className="text-emerald-grad">AI team.</span></>),
  heroSub: "Automate lead distribution, follow-up, coaching, reporting and commission tracking — so every broker performs like your top 10%.",
  heroKpis: [
    { label: "Active Brokers", value: "1,240" },
    { label: "Revenue / Broker", value: "+2.4x" },
    { label: "Lead Distribution", value: "< 5s" },
    { label: "Conversion", value: "18.6%" },
  ],
  painPoints: [
    { icon: Signal, title: "Uneven Distribution", body: "Best leads cluster with a few brokers. The rest of the team runs cold." },
    { icon: Users, title: "Inconsistent Follow-up", body: "Follow-up quality depends on the broker. Enterprise standards are impossible to enforce manually." },
    { icon: BarChart3, title: "Weak Visibility", body: "Leadership can't see per-broker pipeline, conversion, or health in real time." },
    { icon: Wallet, title: "Commission Disputes", body: "Manual commission tracking creates payment delays and internal friction." },
    { icon: LineChart, title: "No Coaching Loop", body: "Managers can't scale 1:1 coaching. Skill gaps persist quarter after quarter." },
    { icon: HeartHandshake, title: "Referrals Lost", body: "Post-deal customer relationships fade — repeat and referral revenue leaks silently." },
  ],
  impacts: [
    { label: "Revenue / Broker", value: "+2.4x" },
    { label: "Lead-to-Meeting", value: "+61%" },
    { label: "Broker Ramp Time", value: "-58%" },
    { label: "Referral Revenue", value: "+42%" },
  ],
  employees: [
    { name: "AI Broker Assistant", role: "Sales", icon: Users, skills: ["Per-broker AI teammate", "Handles admin + follow-up", "Prioritises next best action", "Prepares call briefs"] },
    { name: "AI Team Coordinator", role: "Operations", icon: Signal, skills: ["Cross-team routing", "Load-balancing", "Escalations", "SLA enforcement"] },
    { name: "AI Sales Coach", role: "Enablement", icon: Crown, skills: ["Call review + scoring", "Skill-gap detection", "Personalised drills", "Manager-ready briefs"] },
    { name: "AI Lead Distributor", role: "Sales Ops", icon: Database, skills: ["Rules + intent based routing", "Broker capacity awareness", "Reassignment on inactivity", "Fair distribution"] },
    { name: "AI CRM Executive", role: "CRM", icon: Database, skills: ["Auto-updates + hygiene", "Duplicate detection", "Activity tracking", "Stage transitions"] },
    { name: "AI Revenue Intelligence", role: "Leadership", icon: LineChart, skills: ["Per-broker forecasts", "Cohort analysis", "Pipeline health", "Anomaly alerts"] },
    { name: "AI Telecaller", role: "Sales", icon: PhoneCall, skills: ["First-touch outreach", "Nurture calls", "Reminders", "Multi-lingual"] },
    { name: "AI WhatsApp Executive", role: "Communication", icon: MessageSquare, skills: ["Broker-branded threads", "Media + docs", "Payment links", "Instant replies"] },
    { name: "AI Commission Assistant", role: "Finance", icon: Wallet, skills: ["Auto-calculates commissions", "Deal splits", "Payout schedules", "Dispute reduction"] },
  ],
  workflow: [
    { title: "Lead Captured" },
    { title: "AI Distributes" },
    { title: "Broker Notified" },
    { title: "AI Follow-up" },
    { title: "Meeting Booked" },
    { title: "Deal Progressed" },
    { title: "Booking" },
    { title: "Commission Calculated" },
    { title: "Referral Nurture" },
  ],
  benefits: [
    "Every broker performs closer to your top 10%",
    "Real-time per-broker dashboards for managers",
    "Fair, rule-based lead distribution",
    "Automated commission and payout tracking",
    "Continuous AI coaching after every call",
    "Referral engine that never sleeps",
    "Onboard new brokers 2x faster",
    "Standardised client experience at scale",
  ],
  dashboardTitle: "Broker performance",
  dashboardMetrics: [
    { label: "Active Brokers", value: "1,240" },
    { label: "Pipeline", value: "$268M" },
    { label: "Deals MTD", value: "512" },
    { label: "Revenue / Broker", value: "$18.4K" },
    { label: "Avg Response", value: "8.4s" },
    { label: "Coaching Sessions", value: "3,120" },
    { label: "Commission Paid", value: "$4.2M" },
    { label: "Referral Deals", value: "184" },
  ],
  caseStudy: {
    company: "Enterprise brokerage · 1,200+ brokers",
    tag: "Illustrative multi-region deployment",
    quote: "Every broker feels like they have their own back office. Leadership finally sees a single, real-time view of the entire network.",
    before: [
      { label: "Top 20% share of revenue", value: "78%" },
      { label: "Broker Ramp", value: "6 months" },
      { label: "Commission Cycle", value: "22 days" },
      { label: "Manager Coverage", value: "1:12" },
    ],
    after: [
      { label: "Top 20% share of revenue", value: "51%" },
      { label: "Broker Ramp", value: "9 weeks" },
      { label: "Commission Cycle", value: "6 days" },
      { label: "Manager Coverage", value: "1:60" },
    ],
  },
  faqs: [
    { q: "Can AI distribute leads fairly across brokers?", a: "Yes — using rules, intent scoring and broker capacity, AI ensures fair routing and reassigns idle leads automatically." },
    { q: "Can we customise coaching by team?", a: "Coaching models are configured per team, region and product to match your enterprise playbook." },
    { q: "Does it work with existing CRMs?", a: "Yes. Bi-directional sync with Salesforce, HubSpot, LeadSquared, Zoho and enterprise brokerage platforms." },
    { q: "How is broker data protected?", a: "Enterprise-grade encryption, role-based access, audit logs and SOC 2-ready controls across the platform." },
  ],
};

function BrokeragesPage() { return <IndustryPage {...data} />; }
