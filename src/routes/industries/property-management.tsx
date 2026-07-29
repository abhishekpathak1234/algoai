import { createFileRoute } from "@tanstack/react-router";
import {
  MessageSquare,
  Cog,
  Wallet,
  HeartHandshake,
  FileText,
  Users,
  PhoneCall,
  CalendarCheck,
  Database,
  Signal,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/property-management")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Property Management — Algo Realty" },
      {
        name: "description",
        content:
          "Automate tenant communication, maintenance, rent collections, vendor coordination and occupancy reporting across your entire portfolio.",
      },
      { property: "og:title", content: "AI Workforce for Property Management — Algo Realty" },
      {
        property: "og:description",
        content: "Higher tenant satisfaction, lower operational cost and faster resolutions.",
      },
    ],
  }),
  component: PropertyMgmtPage,
});

const data: IndustryPageProps = {
  slug: "property-management",
  industry: "Property Management",
  eyebrow: "For Property Management Companies",
  heroTitle: (
    <>
      Automate tenant operations. <span className="text-emerald-grad">End-to-end.</span>
    </>
  ),
  heroSub:
    "Deploy AI Employees across tenant support, maintenance, rent collections, vendor coordination and reporting — for one portfolio or a thousand doors.",
  heroKpis: [
    { label: "Units Managed", value: "48,120" },
    { label: "Rent Collected", value: "98.4%" },
    { label: "Ticket Resolution", value: "4.2h" },
    { label: "Tenant CSAT", value: "4.8 / 5" },
  ],
  painPoints: [
    {
      icon: MessageSquare,
      title: "Endless Tenant Requests",
      body: "Small requests flood inboxes and phones. Nothing scales linearly with unit count.",
    },
    {
      icon: Cog,
      title: "Maintenance Delays",
      body: "Routing requests to vendors and tracking status remains fully manual.",
    },
    {
      icon: Wallet,
      title: "Rent Follow-ups",
      body: "Chasing rent every month costs teams days of manual work.",
    },
    {
      icon: FileText,
      title: "Document Sprawl",
      body: "Leases, IDs, agreements and renewals live across drives and inboxes.",
    },
    {
      icon: Users,
      title: "Vendor Coordination",
      body: "Managing plumbers, electricians and cleaners across sites is chaotic.",
    },
    {
      icon: CalendarCheck,
      title: "Move-in / Move-out",
      body: "Turnover workflows involve dozens of steps and cross-team handoffs.",
    },
  ],
  impacts: [
    { label: "Rent Collection", value: "98.4%" },
    { label: "Ticket Resolution", value: "-62%" },
    { label: "Ops Cost / Unit", value: "-38%" },
    { label: "Tenant CSAT", value: "4.8 / 5" },
  ],
  employees: [
    {
      name: "AI Tenant Support",
      role: "Support",
      icon: HeartHandshake,
      skills: [
        "24/7 tenant chat + voice",
        "Instant answers",
        "Escalation to humans",
        "Multi-lingual",
      ],
    },
    {
      name: "AI Maintenance Coordinator",
      role: "Operations",
      icon: Cog,
      skills: ["Ticket triage", "Vendor dispatch", "Status tracking", "SLA enforcement"],
    },
    {
      name: "AI Rent Collections",
      role: "Finance",
      icon: Wallet,
      skills: ["Rent reminders", "Late fee logic", "Payment links", "Escalation workflows"],
    },
    {
      name: "AI Vendor Assistant",
      role: "Operations",
      icon: Users,
      skills: ["Vendor onboarding", "Job assignment", "Invoice tracking", "Performance scoring"],
    },
    {
      name: "AI Ops Executive",
      role: "Operations",
      icon: Signal,
      skills: [
        "Cross-property coordination",
        "Move-in / move-out",
        "Inspection scheduling",
        "Task orchestration",
      ],
    },
    {
      name: "AI Documentation",
      role: "Compliance",
      icon: FileText,
      skills: ["Lease renewals", "ID + KYC tracking", "eSign coordination", "Audit-ready storage"],
    },
    {
      name: "AI Tenant Receptionist",
      role: "Front Desk",
      icon: PhoneCall,
      skills: ["Answers every call", "Books maintenance", "Routes to owners", "24/7 coverage"],
    },
    {
      name: "AI CRM Executive",
      role: "CRM",
      icon: Database,
      skills: ["Tenant history", "Interaction logs", "Owner communication", "Renewals pipeline"],
    },
    {
      name: "AI Complaint Handler",
      role: "Support",
      icon: MessageSquare,
      skills: [
        "Complaint intake",
        "Prioritisation",
        "Owner + management updates",
        "Resolution tracking",
      ],
    },
  ],
  workflow: [
    { title: "Tenant Request" },
    { title: "AI Triage" },
    { title: "Vendor Dispatched" },
    { title: "Owner Notified" },
    { title: "Work Completed" },
    { title: "Invoice Logged" },
    { title: "Tenant Confirms" },
    { title: "Feedback Captured" },
  ],
  benefits: [
    "Answer every tenant instantly, 24/7",
    "Auto-triage maintenance to right vendor",
    "Rent collection at 98%+ without human chasing",
    "Move-in and move-out workflows on autopilot",
    "Real-time occupancy and delinquency reporting",
    "Vendor performance scored automatically",
    "Owner reports generated without manual work",
    "Multi-lingual support across tenant base",
  ],
  dashboardTitle: "Portfolio operations",
  dashboardMetrics: [
    { label: "Units Managed", value: "48,120" },
    { label: "Occupancy", value: "96.4%" },
    { label: "Rent Collected", value: "98.4%" },
    { label: "Open Tickets", value: "312" },
    { label: "Avg Resolution", value: "4.2h" },
    { label: "Vendors Active", value: "184" },
    { label: "Renewals Due", value: "612" },
    { label: "AI Workforce", value: "17 Active" },
  ],
  caseStudy: {
    company: "Multi-city property manager · 48,000 doors",
    tag: "Illustrative national deployment",
    quote:
      "We doubled our portfolio without adding headcount. Tenants get answers instantly, vendors are dispatched automatically, and rent just… collects itself.",
    before: [
      { label: "Rent Collection", value: "89%" },
      { label: "Avg Ticket Resolution", value: "38h" },
      { label: "Ops Cost / Unit", value: "$32" },
      { label: "Tenant NPS", value: "22" },
    ],
    after: [
      { label: "Rent Collection", value: "98.4%" },
      { label: "Avg Ticket Resolution", value: "4.2h" },
      { label: "Ops Cost / Unit", value: "$19" },
      { label: "Tenant NPS", value: "68" },
    ],
  },
  faqs: [
    {
      q: "Can AI handle emergency maintenance requests?",
      a: "Yes — urgent tickets are auto-classified and dispatched instantly, with human escalation for critical events.",
    },
    {
      q: "Does it integrate with property management software?",
      a: "Algo Realty integrates with Yardi, AppFolio, Buildium and other enterprise PMS platforms.",
    },
    {
      q: "Can it manage rent for multiple currencies and regions?",
      a: "Yes, including region-specific tax and compliance handling.",
    },
    {
      q: "How is tenant data protected?",
      a: "Enterprise-grade encryption, role-based access and full audit logs for every tenant interaction.",
    },
  ],
};

function PropertyMgmtPage() {
  return <IndustryPage {...data} />;
}
