import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site/Chrome";
import { buildMeta, faqLd, softwareLd } from "@/lib/seo";
import { PageBackdrop } from "@/components/home/primitives";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { CostOfDelay } from "@/components/home/CostOfDelay";
import { WorkforceOrg } from "@/components/home/WorkforceOrg";
import { CommandCenter } from "@/components/home/CommandCenter";
import { Workflow } from "@/components/home/Workflow";
import { ROI } from "@/components/home/ROI";
import { Why } from "@/components/home/Why";
import { Integrations } from "@/components/home/Integrations";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Security } from "@/components/home/Security";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const homeFaqs = [
  {
    q: "How quickly can AI respond to leads?",
    a: "AI Employees respond in under 4 seconds across WhatsApp, calls, and web chat — 24/7, in multiple languages.",
  },
  {
    q: "Can AI integrate with our CRM?",
    a: "Yes. Algo Realty connects natively with Salesforce, HubSpot, LeadSquared, Zoho and custom CRMs — with two-way sync.",
  },
  {
    q: "Can AI qualify buyers?",
    a: "AI SDRs qualify on budget, timeline, locality and intent — routing hot buyers to sales in real time.",
  },
  {
    q: "Can AI schedule site visits?",
    a: "AI Coordinators book visits into your calendars, confirm attendance, and reschedule no-shows automatically.",
  },
  {
    q: "Can AI handle multilingual conversations?",
    a: "Yes — 20+ languages including English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali and Gujarati.",
  },
  {
    q: "Can AI automate follow-ups?",
    a: "Behavior-based sequences follow up until a decision is made — with human handoff on high intent.",
  },
  {
    q: "Can AI assist with collections?",
    a: "AI Collections Executives send reminders, confirm receipts and escalate on overdue balances.",
  },
  {
    q: "Can AI support multiple projects?",
    a: "Deploy separate AI Employees per project or share a workforce across your entire portfolio.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildMeta({
      title: "Algo Realty — AI Workforce for Real Estate",
      description:
        "Deploy AI Employees across sales, telecalling, CRM, marketing, support, collections and operations. Increase revenue, reduce lead leakage and scale without adding headcount.",
      path: "/",
    }),
    scripts: [
      softwareLd(
        "Algo Realty",
        "AI Workforce for Real Estate — deploy AI Employees across sales, telecalling, CRM, marketing, support, collections and operations.",
      ),
      faqLd(homeFaqs),
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <PageBackdrop />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <CostOfDelay />
        <WorkforceOrg />
        <CommandCenter />
        <Workflow />
        <ROI />
        <Why />
        <Integrations />
        <CaseStudy />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
