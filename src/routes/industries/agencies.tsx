import { createFileRoute } from "@tanstack/react-router";
import {
  PhoneCall, Users, Database, CalendarCheck, MessageSquare,
  FileText, Clock, HeartHandshake, Signal, Cog,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/agencies")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Real Estate Agencies — Algo Realty" },
      { name: "description", content: "Close more deals with less manual work. Deploy AI receptionists, qualifiers, schedulers and CRM assistants across your entire agency." },
      { property: "og:title", content: "AI Workforce for Real Estate Agencies — Algo Realty" },
      { property: "og:description", content: "Higher agent productivity, faster response, more listings sold." },
    ],
  }),
  component: AgenciesPage,
});

const data: IndustryPageProps = {
  slug: "agencies",
  industry: "Agencies",
  eyebrow: "For Real Estate Agencies",
  heroTitle: (<>Close more deals with <span className="text-emerald-grad">less manual work.</span></>),
  heroSub: "Deploy AI receptionists, qualifiers, schedulers and CRM assistants across your entire agency — so agents spend time with buyers, not spreadsheets.",
  heroKpis: [
    { label: "Agent Productivity", value: "+3.1x" },
    { label: "Appointments / Week", value: "1,240" },
    { label: "Response Time", value: "6.2s" },
    { label: "Listings Sold", value: "+38%" },
  ],
  painPoints: [
    { icon: Clock, title: "Missed Inquiries", body: "Buyer questions arrive after hours, during showings and across channels — most go unanswered." },
    { icon: Users, title: "Agents Doing Admin", body: "Top agents spend hours on qualification and scheduling instead of building relationships." },
    { icon: Database, title: "No Centralised CRM", body: "Leads live in email, WhatsApp and spreadsheets. Nothing rolls up to leadership." },
    { icon: CalendarCheck, title: "Scheduling Friction", body: "Coordinating buyers, agents and sellers is manual, slow and error-prone." },
    { icon: FileText, title: "Manual Paperwork", body: "Documents, disclosures and follow-ups clog the pipeline and slow closings." },
    { icon: MessageSquare, title: "Inconsistent Follow-up", body: "Follow-up quality varies by agent — the best leads still slip through." },
  ],
  impacts: [
    { label: "Appointments", value: "+62%" },
    { label: "Agent Capacity", value: "3.1x" },
    { label: "Response Time", value: "6.2s" },
    { label: "Client CSAT", value: "4.9 / 5" },
  ],
  employees: [
    { name: "AI Receptionist", role: "Front Desk", icon: PhoneCall, skills: ["Answers every inbound", "Screens intent", "Routes to right agent", "24/7 coverage"] },
    { name: "AI Lead Qualification", role: "Sales Ops", icon: Users, skills: ["Buyer profiling", "Budget + timeline capture", "Neighbourhood match", "Disqualifies noise"] },
    { name: "AI Appointment Scheduler", role: "Operations", icon: CalendarCheck, skills: ["Books showings", "Coordinates sellers", "Auto-reschedules", "Confirmations + reminders"] },
    { name: "AI WhatsApp Executive", role: "Communication", icon: MessageSquare, skills: ["Listing brochures", "Media sharing", "Instant answers", "Payment links"] },
    { name: "AI CRM Assistant", role: "CRM", icon: Database, skills: ["Auto-updates every interaction", "Deduplicates leads", "Assigns owners", "Stage transitions"] },
    { name: "AI Follow-up Executive", role: "Sales", icon: Signal, skills: ["Consistent nurture cadence", "Cross-listing suggestions", "Reactivation of cold leads", "Weekend follow-ups"] },
    { name: "AI Documentation Assistant", role: "Ops", icon: FileText, skills: ["Document collection", "Status tracking", "Reminders to buyers", "eSign coordination"] },
    { name: "AI Client Success", role: "Support", icon: HeartHandshake, skills: ["Post-tour follow-up", "Feedback capture", "Referral requests", "Escalation handling"] },
    { name: "AI Ops Coordinator", role: "Operations", icon: Cog, skills: ["Cross-team routing", "Task orchestration", "Vendor coordination", "SLA tracking"] },
  ],
  workflow: [
    { title: "Inquiry" },
    { title: "AI Answers" },
    { title: "Qualified" },
    { title: "Agent Matched" },
    { title: "Showing Booked" },
    { title: "Reminders Sent" },
    { title: "Post-Tour Follow-up" },
    { title: "Offer" },
    { title: "Docs Coordinated" },
    { title: "Closing" },
  ],
  benefits: [
    "Every inquiry answered within seconds",
    "3x more showings per agent per week",
    "Consistent nurture across every lead",
    "Centralised CRM without manual entry",
    "Faster closings with automated docs",
    "24/7 client experience without night staff",
    "Executive visibility across every agent",
    "Reactivate cold leads automatically",
  ],
  dashboardTitle: "Agency operations",
  dashboardMetrics: [
    { label: "Active Buyers", value: "4,120" },
    { label: "Appointments", value: "1,240 / wk" },
    { label: "Listings Live", value: "684" },
    { label: "Avg Response", value: "6.2s" },
    { label: "Deals in Pipeline", value: "312" },
    { label: "Closings MTD", value: "84" },
    { label: "Agent Utilization", value: "72%" },
    { label: "CSAT", value: "4.9 / 5" },
  ],
  caseStudy: {
    company: "Metro brokerage · 180 agents",
    tag: "Illustrative agency deployment",
    quote: "Our agents suddenly have entire afternoons back. Every buyer is answered instantly, every showing is confirmed, and nothing falls through.",
    before: [
      { label: "Response Time", value: "38 min" },
      { label: "Showings / Agent / wk", value: "3.1" },
      { label: "CRM Compliance", value: "44%" },
      { label: "Cold Lead Reactivation", value: "6%" },
    ],
    after: [
      { label: "Response Time", value: "6.2s" },
      { label: "Showings / Agent / wk", value: "9.4" },
      { label: "CRM Compliance", value: "98%" },
      { label: "Cold Lead Reactivation", value: "31%" },
    ],
  },
  faqs: [
    { q: "Will AI replace our agents?", a: "No — AI handles routine work like qualification, scheduling and follow-up so your agents focus on high-value client relationships and closings." },
    { q: "Can it work across multiple listing sources?", a: "Yes. AI ingests leads from portals, ads, referrals and walk-ins, and unifies them into a single CRM." },
    { q: "Does it support agent-level dashboards?", a: "Every agent gets a personal command center with their leads, pipeline and AI-suggested next actions." },
    { q: "How is client experience protected?", a: "AI conversations are tuned to your brand voice, tone and disclosure requirements, with human handoff triggers built in." },
  ],
};

function AgenciesPage() { return <IndustryPage {...data} />; }
