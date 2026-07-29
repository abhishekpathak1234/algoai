import { createFileRoute } from "@tanstack/react-router";
import {
  PhoneCall, Users, Database, CalendarCheck, MessageSquare, Wallet,
  HeartHandshake, LineChart, Clock, Signal, PhoneMissed, FileText,
  Building2, Megaphone,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/builders")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Builders — Algo Realty" },
      { name: "description", content: "Automate lead qualification, site visits, CRM, collections and customer communication so your builder sales team can focus on closing bookings." },
      { property: "og:title", content: "AI Workforce for Builders — Algo Realty" },
      { property: "og:description", content: "Deploy AI Employees across every builder workflow — from Facebook lead to final collections." },
    ],
  }),
  component: BuildersPage,
});

const data: IndustryPageProps = {
  slug: "builders",
  industry: "Builders",
  eyebrow: "For Residential Builders",
  heroTitle: (<>AI Workforce for <span className="text-emerald-grad">Builders.</span></>),
  heroSub: "Automate lead qualification, site visits, customer communication, collections and CRM — so your sales team focuses on closing more bookings, not chasing leads.",
  heroKpis: [
    { label: "Monthly Leads", value: "42,180", delta: "+18.4%" },
    { label: "Site Visits", value: "6,410", delta: "+27%" },
    { label: "Bookings", value: "612", delta: "+41%" },
    { label: "Response Time", value: "3.8s" },
  ],
  painPoints: [
    { icon: Clock, title: "Slow Follow-up", body: "Leads expect answers in minutes. Delayed contact silently kills conversion for every new launch." },
    { icon: PhoneMissed, title: "Missed Calls", body: "High-intent inquiries drop off when sales lines are busy, after hours or during launches." },
    { icon: Users, title: "Lead Leakage", body: "Marketing spends millions generating demand — sales loses most of it in the handoff." },
    { icon: Database, title: "Unupdated CRM", body: "Sales teams spend hours logging calls instead of selling — pipeline visibility disappears." },
    { icon: CalendarCheck, title: "Unconfirmed Site Visits", body: "Manual reminders and reschedules drop attendance and waste sales capacity on-site." },
    { icon: Wallet, title: "Delayed Collections", body: "Manual EMI and milestone reminders slow cashflow and increase operational overhead." },
  ],
  impacts: [
    { label: "Response Time", value: "3.8s", sub: "vs 4h manual" },
    { label: "Site Visit Show-up", value: "+32%" },
    { label: "Payroll Reduction", value: "$1.4M", sub: "annualised" },
    { label: "Recovered Pipeline", value: "$18.7M" },
  ],
  employees: [
    { name: "AI Sales Executive", role: "Sales", icon: Users, skills: ["Qualifies buyers 24/7", "Answers pricing and inventory", "Books meetings on calendars", "Recommends floor plans"] },
    { name: "AI Telecaller", role: "Sales", icon: PhoneCall, skills: ["Inbound + outbound calls", "Nurture campaigns", "Site visit reminders", "Multi-lingual conversations"] },
    { name: "AI WhatsApp Executive", role: "Sales · Marketing", icon: MessageSquare, skills: ["Instant replies", "Brochures + floor plans", "Payment links", "Media sharing"] },
    { name: "AI CRM Executive", role: "CRM", icon: Database, skills: ["Auto-updates every stage", "Lead assignment rules", "Pipeline hygiene", "Interaction history"] },
    { name: "AI Site Visit Coordinator", role: "Operations", icon: CalendarCheck, skills: ["Schedules and confirms visits", "Coordinates on-site staff", "Auto-reschedules", "Collects post-visit feedback"] },
    { name: "AI Collections Executive", role: "Finance", icon: Wallet, skills: ["Milestone reminders", "Outstanding tracking", "Receipt confirmations", "Escalations to team"] },
    { name: "AI Customer Success", role: "Support", icon: HeartHandshake, skills: ["Construction updates", "Possession queries", "Documentation status", "Complaint resolution"] },
    { name: "AI Revenue Intelligence", role: "Leadership", icon: LineChart, skills: ["Pipeline forecasting", "Project-wise revenue", "Channel performance", "Anomaly alerts"] },
    { name: "AI Marketing Analyst", role: "Marketing", icon: Megaphone, skills: ["Campaign ROI", "Source-wise lead quality", "Budget optimisation", "Attribution insights"] },
  ],
  workflow: [
    { title: "Facebook Lead", sub: "Instant capture" },
    { title: "AI Calls Buyer", sub: "Under 10s" },
    { title: "Qualified", sub: "Budget + intent" },
    { title: "CRM Updated", sub: "Auto-logged" },
    { title: "Sales Assigned", sub: "Round-robin" },
    { title: "Site Visit Booked", sub: "Calendar synced" },
    { title: "Reminder Sent", sub: "WhatsApp + call" },
    { title: "Booking", sub: "Payment link" },
    { title: "Collections", sub: "Milestone-based" },
    { title: "Onboarding", sub: "Customer success" },
  ],
  benefits: [
    "Answer every inquiry within seconds — even during launches",
    "3x more qualified site visits per project",
    "Zero-touch CRM updates across every stage",
    "Recover 30–45% of previously lost pipeline",
    "Multi-lingual conversations across regions",
    "Real-time visibility for MDs and Sales Directors",
    "Reduce payroll pressure on tele-calling teams",
    "Faster collections with automated milestone reminders",
  ],
  dashboardTitle: "Every project, every lead, every rupee",
  dashboardMetrics: [
    { label: "Pipeline", value: "$128.4M", delta: "+22%" },
    { label: "Bookings MTD", value: "612" },
    { label: "Collections", value: "$4.2M", delta: "+18%" },
    { label: "Site Visits", value: "6,410" },
    { label: "AI Calls Today", value: "12,842" },
    { label: "Avg Response", value: "3.8s" },
    { label: "Unsold Units", value: "1,284" },
    { label: "AI Workforce", value: "14 Active" },
  ],
  caseStudy: {
    company: "Tier-1 residential builder, 6 active projects",
    tag: "Illustrative deployment across South & West India",
    quote: "We stopped hiring more tele-callers. Algo Realty handles inbound, qualification, and site visit coordination end-to-end. Our sales team finally spends time closing, not chasing.",
    before: [
      { label: "Response Time", value: "4h 12m" },
      { label: "Site Visit Show-up", value: "38%" },
      { label: "CRM Compliance", value: "51%" },
      { label: "Booking Conversion", value: "1.9%" },
    ],
    after: [
      { label: "Response Time", value: "3.8s" },
      { label: "Site Visit Show-up", value: "71%" },
      { label: "CRM Compliance", value: "99%" },
      { label: "Booking Conversion", value: "5.4%" },
    ],
  },
  faqs: [
    { q: "Can AI handle high lead volume during launches?", a: "Yes. The AI Workforce scales elastically to handle thousands of concurrent inquiries within seconds, without adding headcount." },
    { q: "Will it integrate with our existing builder CRM?", a: "Algo Realty integrates natively with Salesforce, LeadSquared, Sell.Do, Zoho and most builder-grade CRMs — bi-directional sync out of the box." },
    { q: "Can AI qualify buyers accurately?", a: "AI Sales Executives qualify on budget, timeline, configuration and intent using your exact playbook and disqualifies noise before sales sees the lead." },
    { q: "Does it support multiple languages?", a: "Yes — Hindi, English, regional Indian languages and international languages are supported across voice and chat." },
    { q: "Can it manage collections and milestone reminders?", a: "The AI Collections Executive automates milestone-based reminders, tracks outstandings and escalates to finance only when needed." },
    { q: "How long does deployment take?", a: "A typical builder deployment goes live in 3–5 weeks, including CRM integrations, telephony and workflow calibration." },
  ],
};

function BuildersPage() { return <IndustryPage {...data} />; }
