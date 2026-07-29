import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  FileText,
  Users,
  Database,
  BarChart3,
  CalendarCheck,
  Signal,
  LineChart,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/commercial")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Commercial Real Estate — Algo Realty" },
      {
        name: "description",
        content:
          "Enterprise AI Workforce for leasing, documentation, investor support and analytics across commercial real estate portfolios.",
      },
      { property: "og:title", content: "AI Workforce for Commercial Real Estate — Algo Realty" },
      {
        property: "og:description",
        content: "Shorter cycles, better stakeholder coordination, sharper investor reporting.",
      },
    ],
  }),
  component: CommercialPage,
});

const data: IndustryPageProps = {
  slug: "commercial",
  industry: "Commercial Real Estate",
  eyebrow: "For Commercial & Institutional Portfolios",
  heroTitle: (
    <>
      Enterprise AI Workforce for <span className="text-emerald-grad">commercial property.</span>
    </>
  ),
  heroSub:
    "Coordinate long sales cycles, multiple stakeholders and complex documentation with AI Employees purpose-built for institutional real estate.",
  heroKpis: [
    { label: "Portfolio GLA", value: "18.4M sqft" },
    { label: "Occupancy", value: "94.2%" },
    { label: "Leasing Pipeline", value: "$412M" },
    { label: "WALT", value: "6.8 yrs" },
  ],
  painPoints: [
    {
      icon: Signal,
      title: "Long Sales Cycles",
      body: "Multi-quarter deals require consistent nurture across dozens of stakeholders.",
    },
    {
      icon: Users,
      title: "Multiple Stakeholders",
      body: "Tenant reps, brokers, legal, finance, IPCs — coordination is fully manual.",
    },
    {
      icon: FileText,
      title: "Complex Documentation",
      body: "LOIs, term sheets, leases and approvals bottleneck deal velocity.",
    },
    {
      icon: CalendarCheck,
      title: "Scheduling Complexity",
      body: "Executive meetings and inspections span time zones, firms and calendars.",
    },
    {
      icon: BarChart3,
      title: "Investor Reporting",
      body: "Quarterly reporting cycles are heavy, manual and prone to errors.",
    },
    {
      icon: LineChart,
      title: "Portfolio Visibility",
      body: "Leadership lacks a single view of leasing velocity, WALT and NOI trajectory.",
    },
  ],
  impacts: [
    { label: "Deal Cycle Time", value: "-34%" },
    { label: "Docs Turnaround", value: "-58%" },
    { label: "Investor Reporting", value: "Real-time" },
    { label: "Leasing Velocity", value: "+41%" },
  ],
  employees: [
    {
      name: "AI Leasing Executive",
      role: "Leasing",
      icon: Building2,
      skills: [
        "Tenant rep engagement",
        "Term sheet drafting",
        "Availability + comps",
        "Multi-party threads",
      ],
    },
    {
      name: "AI Document Assistant",
      role: "Legal Ops",
      icon: FileText,
      skills: [
        "LOI + lease drafting",
        "Redline tracking",
        "Approval routing",
        "eSign orchestration",
      ],
    },
    {
      name: "AI CRM Executive",
      role: "CRM",
      icon: Database,
      skills: [
        "Multi-stakeholder pipeline",
        "Deal-stage automation",
        "Broker + tenant history",
        "Playbook enforcement",
      ],
    },
    {
      name: "AI Investor Support",
      role: "IR",
      icon: HeartHandshake,
      skills: ["Investor Q&A", "Data room management", "Report distribution", "Meeting scheduling"],
    },
    {
      name: "AI Revenue Analytics",
      role: "Intelligence",
      icon: BarChart3,
      skills: [
        "NOI + WALT modelling",
        "Leasing velocity",
        "Rent-roll analytics",
        "Scenario forecasting",
      ],
    },
    {
      name: "AI Meeting Coordinator",
      role: "Operations",
      icon: CalendarCheck,
      skills: [
        "Cross-firm scheduling",
        "Time-zone handling",
        "Room + site logistics",
        "Follow-ups",
      ],
    },
    {
      name: "AI Broker Liaison",
      role: "Sales Ops",
      icon: Users,
      skills: [
        "Broker engagement",
        "Availability updates",
        "Commission tracking",
        "Deal registration",
      ],
    },
    {
      name: "AI Communications",
      role: "Communication",
      icon: MessageSquare,
      skills: ["Stakeholder updates", "Milestone notifications", "Escalations", "Multi-channel"],
    },
    {
      name: "AI Portfolio Intelligence",
      role: "Leadership",
      icon: LineChart,
      skills: ["Portfolio dashboards", "Risk alerts", "Renewal forecasting", "Investment briefs"],
    },
  ],
  workflow: [
    { title: "Requirement" },
    { title: "AI Shortlists" },
    { title: "Tours Booked" },
    { title: "LOI Drafted" },
    { title: "Negotiation" },
    { title: "Approvals" },
    { title: "Lease Signed" },
    { title: "Onboarding" },
    { title: "Reporting" },
  ],
  benefits: [
    "Shorter deal cycles with automated coordination",
    "Draft-ready LOIs and lease documents",
    "Real-time investor and board reporting",
    "Multi-stakeholder communication on autopilot",
    "Portfolio-level analytics — NOI, WALT, occupancy",
    "Renewal risk detection quarters in advance",
    "Broker network engagement at scale",
    "Institutional-grade audit trail on every deal",
  ],
  dashboardTitle: "Institutional portfolio",
  dashboardMetrics: [
    { label: "Portfolio GLA", value: "18.4M sqft" },
    { label: "Occupancy", value: "94.2%" },
    { label: "Leasing Pipeline", value: "$412M" },
    { label: "Deals in LOI", value: "62" },
    { label: "WALT", value: "6.8 yrs" },
    { label: "NOI YTD", value: "$184M" },
    { label: "Renewals Due", value: "1.2M sqft" },
    { label: "AI Workforce", value: "19 Active" },
  ],
  caseStudy: {
    company: "Institutional owner · 18M sqft commercial portfolio",
    tag: "Illustrative pan-portfolio deployment",
    quote:
      "Our leasing team went from spending 60% of their week on coordination to spending 60% on strategic tenant relationships. Deal cycles dropped by a third.",
    before: [
      { label: "Deal Cycle", value: "184 days" },
      { label: "Docs Turnaround", value: "12 days" },
      { label: "Investor Reporting", value: "Quarterly" },
      { label: "Leasing Velocity", value: "820K sqft / Q" },
    ],
    after: [
      { label: "Deal Cycle", value: "121 days" },
      { label: "Docs Turnaround", value: "5 days" },
      { label: "Investor Reporting", value: "Real-time" },
      { label: "Leasing Velocity", value: "1.16M sqft / Q" },
    ],
  },
  faqs: [
    {
      q: "Can AI handle institutional-grade documentation?",
      a: "Yes — with approval workflows, redline tracking, version control and full audit trails suitable for institutional counterparties.",
    },
    {
      q: "Does it integrate with our IWMS and ERP?",
      a: "Native integrations with SAP, Yardi, Argus and enterprise IWMS platforms.",
    },
    {
      q: "How is investor data secured?",
      a: "SOC 2-ready controls, role-based access, encryption in transit and at rest, and detailed audit logs.",
    },
    {
      q: "Can it manage global portfolios?",
      a: "Yes. Multi-region, multi-currency and multi-language support across leasing and reporting workflows.",
    },
  ],
};

function CommercialPage() {
  return <IndustryPage {...data} />;
}
