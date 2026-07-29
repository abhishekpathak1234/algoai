import { createFileRoute } from "@tanstack/react-router";
import {
  Building2, Users, Database, Megaphone, LineChart, Wallet,
  BarChart3, Layers, Signal, TrendingUp, FileText, Cog,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/developers")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Real Estate Developers — Algo Realty" },
      { name: "description", content: "Scale every project without scaling your team. Deploy AI across marketing, sales, CRM, analytics and collections for multi-project developers." },
      { property: "og:title", content: "AI Workforce for Real Estate Developers — Algo Realty" },
      { property: "og:description", content: "Executive dashboards, forecasting and AI Employees purpose-built for multi-project real estate developers." },
    ],
  }),
  component: DevelopersPage,
});

const data: IndustryPageProps = {
  slug: "developers",
  industry: "Developers",
  eyebrow: "For Real Estate Developers",
  heroTitle: (<>Scale every project without <span className="text-emerald-grad">scaling your team.</span></>),
  heroSub: "Deploy an AI Workforce across every project, every channel and every department. Launch faster, forecast better and turn inventory into revenue predictably.",
  heroKpis: [
    { label: "Active Projects", value: "14" },
    { label: "Pipeline", value: "$412M", delta: "+31%" },
    { label: "Inventory Sold", value: "68.4%" },
    { label: "Marketing ROI", value: "6.8x" },
  ],
  painPoints: [
    { icon: Layers, title: "Multi-Project Chaos", body: "Every launch multiplies inquiries, campaigns and CRM complexity. Teams stop scaling linearly." },
    { icon: Megaphone, title: "Campaigns Without Attribution", body: "Marketing spends across channels, but source-of-booking clarity is limited to spreadsheets." },
    { icon: Database, title: "Inventory Out of Sync", body: "Availability, pricing and unit status drift across sales teams, portals and channel partners." },
    { icon: Wallet, title: "Fragmented Collections", body: "Milestone tracking across projects becomes manual and cashflow forecasts get unreliable." },
    { icon: BarChart3, title: "Slow Reporting", body: "Executive reviews depend on Monday-morning spreadsheets, not real-time systems." },
    { icon: TrendingUp, title: "Weak Forecasting", body: "Revenue predictions rely on gut feel. Boards want signal, not opinion." },
  ],
  impacts: [
    { label: "Pipeline Growth", value: "+38%" },
    { label: "Marketing ROI", value: "6.8x" },
    { label: "Collection Efficiency", value: "+24%" },
    { label: "Executive Reporting", value: "Real-time" },
  ],
  employees: [
    { name: "AI Marketing Manager", role: "Marketing", icon: Megaphone, skills: ["Multi-channel campaigns", "Creative performance", "Source-wise ROI", "Budget reallocation"] },
    { name: "AI Sales Executive", role: "Sales", icon: Users, skills: ["Project-specific qualification", "Meeting booking", "Inventory-aware pitching", "Cross-project routing"] },
    { name: "AI CRM Executive", role: "CRM", icon: Database, skills: ["Multi-project pipelines", "Lead lifecycle automation", "Stage-wise SLAs", "Data hygiene"] },
    { name: "AI Analytics", role: "Intelligence", icon: BarChart3, skills: ["Portfolio-level insights", "Channel performance", "Conversion analysis", "Anomaly detection"] },
    { name: "AI Revenue Forecasting", role: "Leadership", icon: LineChart, skills: ["Weekly forecast", "Project-wise projections", "Scenario modelling", "Board-ready outputs"] },
    { name: "AI Collections Manager", role: "Finance", icon: Wallet, skills: ["Milestone reminders", "Escalation logic", "Payment tracking", "Cashflow visibility"] },
    { name: "AI Inventory Assistant", role: "Operations", icon: Layers, skills: ["Live availability sync", "Blocking / releasing", "Price grid updates", "Channel parity"] },
    { name: "AI Executive Assistant", role: "Leadership", icon: FileText, skills: ["Daily executive briefs", "Meeting summaries", "Alerts + escalations", "Cross-project rollups"] },
    { name: "AI Ops Coordinator", role: "Operations", icon: Cog, skills: ["Cross-team coordination", "Task orchestration", "SLA enforcement", "Vendor tracking"] },
  ],
  workflow: [
    { title: "Campaign Live" },
    { title: "Lead Captured" },
    { title: "AI Qualifies" },
    { title: "Project Routed" },
    { title: "CRM Updated" },
    { title: "Sales Assigned" },
    { title: "Meeting Booked" },
    { title: "Site Visit" },
    { title: "Booking" },
    { title: "Collections" },
    { title: "Forecast Updated" },
  ],
  benefits: [
    "Launch new projects without linear team expansion",
    "Single command center across every project",
    "Real-time inventory + pricing across channels",
    "Attribution from first click to final booking",
    "Weekly AI-generated revenue forecasts",
    "Auto-escalations for high-value opportunities",
    "Collections predictability across milestones",
    "Board-grade reporting without spreadsheets",
  ],
  dashboardTitle: "Portfolio, projects and forecast",
  dashboardMetrics: [
    { label: "Portfolio Pipeline", value: "$412M", delta: "+31%" },
    { label: "Revenue MTD", value: "$28.4M" },
    { label: "Inventory Sold", value: "68.4%" },
    { label: "Collection %", value: "94.2%" },
    { label: "Marketing ROI", value: "6.8x" },
    { label: "Unsold Units", value: "1,842" },
    { label: "Weekly Forecast", value: "$9.2M" },
    { label: "AI Workforce", value: "22 Active" },
  ],
  caseStudy: {
    company: "Multi-project developer · 14 active launches",
    tag: "Illustrative deployment across residential + mixed-use portfolio",
    quote: "We used to add 20 tele-callers per launch. Now, one AI Workforce absorbs every launch — pipeline, forecast and collections all live in one screen.",
    before: [
      { label: "Attribution Coverage", value: "42%" },
      { label: "Forecast Accuracy", value: "58%" },
      { label: "Collections Cycle", value: "26 days" },
      { label: "Sales Reporting", value: "Weekly" },
    ],
    after: [
      { label: "Attribution Coverage", value: "98%" },
      { label: "Forecast Accuracy", value: "91%" },
      { label: "Collections Cycle", value: "11 days" },
      { label: "Sales Reporting", value: "Real-time" },
    ],
  },
  faqs: [
    { q: "Can Algo Realty support multiple projects simultaneously?", a: "Yes — the workforce is project-aware. Every AI Employee operates per project with unified reporting at the portfolio level." },
    { q: "Do you support source-of-booking attribution?", a: "Yes. Every touchpoint — call, WhatsApp, meeting, site visit — is auto-attributed to the originating campaign and source." },
    { q: "Can leadership see real-time revenue forecasts?", a: "AI Revenue Forecasting publishes rolling weekly and quarterly forecasts with scenario modelling by project." },
    { q: "How is inventory kept in sync?", a: "The AI Inventory Assistant maintains live parity across CRM, portals, brokers and channel partners." },
    { q: "How long is enterprise rollout?", a: "Multi-project developers typically go live in 6–10 weeks including data migration, integration and calibration." },
  ],
};

function DevelopersPage() { return <IndustryPage {...data} />; }
