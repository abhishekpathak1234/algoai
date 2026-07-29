import { createFileRoute } from "@tanstack/react-router";
import {
  Crown,
  HeartHandshake,
  PhoneCall,
  CalendarCheck,
  Users,
  MessageSquare,
  Database,
  Signal,
  Building2,
} from "lucide-react";
import { IndustryPage, type IndustryPageProps } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/luxury")({
  head: () => ({
    meta: [
      { title: "AI Workforce for Luxury Real Estate — Algo Realty" },
      {
        name: "description",
        content:
          "White-glove AI concierge for high-net-worth buyers. 24/7 multilingual availability, VIP coordination and discreet client experience.",
      },
      { property: "og:title", content: "AI Workforce for Luxury Real Estate — Algo Realty" },
      {
        property: "og:description",
        content: "Premium AI experience worthy of your highest-value clients.",
      },
    ],
  }),
  component: LuxuryPage,
});

const data: IndustryPageProps = {
  slug: "luxury",
  industry: "Luxury Real Estate",
  eyebrow: "For Luxury & Private Residence",
  heroTitle: (
    <>
      White-glove AI <span className="text-emerald-grad">customer experience.</span>
    </>
  ),
  heroSub:
    "24/7 concierge-grade AI for HNW and UHNW buyers — discreet, multilingual, always-on and worthy of your brand.",
  heroKpis: [
    { label: "Avg Ticket Size", value: "$4.8M" },
    { label: "VIP Response", value: "12s" },
    { label: "Languages", value: "24" },
    { label: "Private Showings", value: "312 / mo" },
  ],
  painPoints: [
    {
      icon: Crown,
      title: "VIP Expectations",
      body: "HNW buyers demand instant, personal, discreet service around the clock.",
    },
    {
      icon: PhoneCall,
      title: "24/7 Availability",
      body: "International clients call across time zones — night desks aren't enough.",
    },
    {
      icon: Users,
      title: "Multi-Language Buyers",
      body: "Global buyers expect fluent conversations in their native language.",
    },
    {
      icon: CalendarCheck,
      title: "Private Showings",
      body: "Coordinating private viewings, travel and staff is complex and manual.",
    },
    {
      icon: HeartHandshake,
      title: "Personalisation",
      body: "Personalised follow-up at scale is impossible with only human staff.",
    },
    {
      icon: Signal,
      title: "Discretion + Data Privacy",
      body: "High-profile buyers require the highest levels of confidentiality.",
    },
  ],
  impacts: [
    { label: "VIP Response Time", value: "12s" },
    { label: "Private Showings", value: "+58%" },
    { label: "Client CSAT", value: "4.98 / 5" },
    { label: "Repeat Buyers", value: "+37%" },
  ],
  employees: [
    {
      name: "Luxury Concierge AI",
      role: "Client Experience",
      icon: Crown,
      skills: [
        "24/7 concierge chat + voice",
        "Discreet handling",
        "Personalised brochures",
        "Global availability",
      ],
    },
    {
      name: "VIP Sales Assistant",
      role: "Sales",
      icon: HeartHandshake,
      skills: [
        "HNW qualification",
        "Bespoke recommendations",
        "Private viewing scheduling",
        "Multi-channel presence",
      ],
    },
    {
      name: "AI Relationship Manager",
      role: "Retention",
      icon: Users,
      skills: [
        "Anniversary + milestone touches",
        "Referral engagement",
        "Investment updates",
        "Portfolio insights",
      ],
    },
    {
      name: "AI Travel Coordinator",
      role: "Operations",
      icon: CalendarCheck,
      skills: [
        "Flights + transfers",
        "Hotel + villa bookings",
        "Itinerary building",
        "Local partners",
      ],
    },
    {
      name: "AI Multilingual Executive",
      role: "Communication",
      icon: MessageSquare,
      skills: ["24 languages", "Cultural nuance", "Voice + chat", "Native tone"],
    },
    {
      name: "Executive CRM",
      role: "CRM",
      icon: Database,
      skills: ["Discreet client profile", "Preference memory", "Household mapping", "Deal history"],
    },
    {
      name: "AI Private Showing Coordinator",
      role: "Operations",
      icon: Building2,
      skills: [
        "Owner + staff coordination",
        "Access management",
        "Security briefings",
        "Aftercare",
      ],
    },
    {
      name: "AI Private Banking Liaison",
      role: "Finance",
      icon: Signal,
      skills: [
        "Escrow coordination",
        "Wire tracking",
        "Advisor communication",
        "Milestone updates",
      ],
    },
    {
      name: "AI Concierge Ops",
      role: "Operations",
      icon: HeartHandshake,
      skills: [
        "Gift + hospitality logistics",
        "Event invitations",
        "Exclusive experiences",
        "Anticipatory service",
      ],
    },
  ],
  workflow: [
    { title: "Private Inquiry" },
    { title: "Concierge Answers" },
    { title: "Profile Built" },
    { title: "Curated Shortlist" },
    { title: "Private Showing" },
    { title: "Travel Coordinated" },
    { title: "Offer Discussion" },
    { title: "Closing" },
    { title: "Ongoing Relationship" },
  ],
  benefits: [
    "Answer every VIP inquiry in under 30 seconds",
    "24/7 concierge in 24 languages",
    "Bespoke shortlists built per client profile",
    "Private showings coordinated end-to-end",
    "Discreet, encrypted client conversations",
    "Long-tail relationship management at scale",
    "Anticipatory hospitality touches",
    "Consistent, brand-worthy client experience",
  ],
  dashboardTitle: "Private client operations",
  dashboardMetrics: [
    { label: "Active VIP Clients", value: "412" },
    { label: "Avg Response", value: "12s" },
    { label: "Private Showings", value: "312 / mo" },
    { label: "Deals in Pipeline", value: "68" },
    { label: "Avg Ticket", value: "$4.8M" },
    { label: "CSAT", value: "4.98 / 5" },
    { label: "Languages Live", value: "24" },
    { label: "Referral Deals", value: "34" },
  ],
  caseStudy: {
    company: "Global luxury boutique · $4B+ AUM in listings",
    tag: "Illustrative HNW client experience deployment",
    quote:
      "Our clients believe our team is always available, always attentive, always discreet. The AI Workforce delivers that promise consistently — across every time zone.",
    before: [
      { label: "VIP Response Time", value: "18 min" },
      { label: "Languages Covered", value: "6" },
      { label: "Repeat / Referral", value: "24%" },
      { label: "CSAT", value: "4.5 / 5" },
    ],
    after: [
      { label: "VIP Response Time", value: "12s" },
      { label: "Languages Covered", value: "24" },
      { label: "Repeat / Referral", value: "42%" },
      { label: "CSAT", value: "4.98 / 5" },
    ],
  },
  faqs: [
    {
      q: "How is client confidentiality guaranteed?",
      a: "All interactions are encrypted, role-restricted and stored with audit-grade logging. AI is trained on your discretion protocols.",
    },
    {
      q: "Can the AI reflect our brand voice?",
      a: "Voice, tone, phrasing and etiquette are calibrated per brand — from British formal to Middle Eastern hospitality style.",
    },
    {
      q: "Does it coordinate with our concierge and staff?",
      a: "Yes — the AI seamlessly hands off to your on-ground concierge, sales and hospitality teams.",
    },
    {
      q: "Can it handle international buyers across time zones?",
      a: "24/7 coverage across 24+ languages with cultural fluency and localised communication norms.",
    },
  ],
};

function LuxuryPage() {
  return <IndustryPage {...data} />;
}
