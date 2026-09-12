import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Car,
  FileText,
  Gauge,
  Home,
  RotateCcw,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

/* ---------------- Commerce ---------------- */

const commerceCapabilities = [
  "AI Sales",
  "AI Customer Operations",
  "AI Order Operations",
  "Revenue Recovery",
  "Retention",
  "RTO",
];

const commerceFlow = ["Customer", "Intent", "Intelligence", "Workforce", "Action", "Revenue"];

const commerceRows = [
  {
    customer: "Order #91422",
    cart: "$248 · 3 items",
    intent: "Delivery date uncertainty",
    opportunity: "Cart recovery",
    action: "Confirm slot + send payment link",
  },
  {
    customer: "Order #91388",
    cart: "$89 · 1 item",
    intent: "Return risk (size)",
    opportunity: "RTO prevention",
    action: "Offer exchange before dispatch",
  },
  {
    customer: "Account 4417",
    cart: "Repeat buyer",
    intent: "Replenishment due",
    opportunity: "Retention",
    action: "Trigger reorder workflow",
  },
];

/* ---------------- Automotive ---------------- */

const autoCapabilities = [
  "Sales Workforce",
  "BDC Workforce",
  "Customer Lifecycle Intelligence",
  "Appointment Intelligence",
  "Inventory Intelligence",
  "Service Workflow Intelligence",
  "Automotive Data Orchestration",
];

const autoFlow = [
  "Lead",
  "Intent",
  "Qualification",
  "Appointment",
  "Sales",
  "Follow-up",
  "Retention",
];

const autoRows = [
  {
    lead: "Lead 8842",
    intent: "Test drive — SUV, this week",
    action: "Offer Thursday 17:30 slot",
    appointment: "Proposed",
    followUp: "Reminder T-2h",
  },
  {
    lead: "Lead 8830",
    intent: "Trade-in valuation",
    action: "Request vehicle details",
    appointment: "Pending info",
    followUp: "Chase in 24h",
  },
  {
    lead: "Service 2291",
    intent: "Service due + recall open",
    action: "Book service, attach recall",
    appointment: "Confirmed",
    followUp: "Post-service check",
  },
];

/* ---------------- Real estate ---------------- */

const reCapabilities = [
  "Lead Intelligence",
  "Property Matching",
  "Customer Operations",
  "Follow-up",
  "Site Visit Coordination",
  "Document Workflows",
  "Sales Operations",
  "Post-sale Operations",
];

const reFlow = [
  "Lead",
  "Qualification",
  "Property match",
  "Engagement",
  "Site visit",
  "Negotiation",
  "Conversion",
];

const reRows = [
  {
    lead: "Enquiry 5521",
    match: "3BHK · North corridor",
    intent: "Ready-to-move, 60 days",
    visit: "Saturday 11:00",
    next: "Send floor plans + visit confirmation",
  },
  {
    lead: "Enquiry 5507",
    match: "Commercial · 2,400 sq ft",
    intent: "Budget validation pending",
    visit: "Awaiting slot",
    next: "Qualify budget, propose two options",
  },
  {
    lead: "Deal 4188",
    match: "Villa · Phase II",
    intent: "Documentation stage",
    visit: "Completed",
    next: "Run document workflow for agreement",
  },
];

export function AbVerticals() {
  return (
    <>
      <Section id="commerce">
        <Reveal>
          <SectionHead
            eyebrow="AlgoBridge Commerce™ — AI Revenue & Customer Operations"
            title={
              <>
                Turn fragmented commerce workflows
                <br />
                into intelligent revenue operations.
              </>
            }
            sub="Sales, customer operations and order operations running as one governed workflow — from first intent to retained revenue."
          />
        </Reveal>

        <Reveal>
          <ProductPanel
            icon={ShoppingBag}
            title="Revenue Operations Console"
            capabilities={commerceCapabilities}
            flow={commerceFlow}
            columns={["Customer", "Cart", "Intent", "Revenue opportunity", "Recommended action"]}
            rows={commerceRows.map((r) => [r.customer, r.cart, r.intent, r.opportunity, r.action])}
            footer="Outcome: recovered orders, prevented returns, retained customers."
          />
        </Reveal>
      </Section>

      <Section id="auto" tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="AlgoBridge Auto AI™ — AI Workforce & Workflow Intelligence for Automotive"
            title={
              <>
                An intelligent workforce
                <br />
                for automotive operations.
              </>
            }
            sub="Lead intent, appointments, inventory and service workflows coordinated across dealership systems."
          />
        </Reveal>

        <Reveal>
          <ProductPanel
            icon={Car}
            title="Automotive Operations Console"
            capabilities={autoCapabilities}
            flow={autoFlow}
            columns={["Lead", "Intent", "Recommended action", "Appointment", "Follow-up"]}
            rows={autoRows.map((r) => [r.lead, r.intent, r.action, r.appointment, r.followUp])}
            footer="Outcome: faster lead response, more kept appointments, cleaner CRM data."
            accentIcons={[Users, CalendarCheck, Gauge]}
          />
        </Reveal>
      </Section>

      <Section id="real-estate">
        <Reveal>
          <SectionHead
            eyebrow="AlgoBridge Real Estate — AI Workflow Intelligence for Real Estate Operations"
            title={
              <>
                AI workflow intelligence
                <br />
                for real estate operations.
              </>
            }
            sub="Lead intelligence, property matching, site visit coordination and document workflows — run as operations, not listings."
          />
        </Reveal>

        <Reveal>
          <ProductPanel
            icon={Building2}
            title="Real Estate Operations Console"
            capabilities={reCapabilities}
            flow={reFlow}
            columns={["Lead", "Property match", "Intent", "Site visit", "Next action"]}
            rows={reRows.map((r) => [r.lead, r.match, r.intent, r.visit, r.next])}
            footer="Outcome: qualified pipeline, coordinated visits, complete documentation."
            accentIcons={[Home, FileText, RotateCcw]}
          />
        </Reveal>
      </Section>
    </>
  );
}

function ProductPanel({
  icon: Icon,
  title,
  capabilities,
  flow,
  columns,
  rows,
  footer,
  accentIcons,
}: {
  icon: typeof ShoppingBag;
  title: string;
  capabilities: string[];
  flow: string[];
  columns: string[];
  rows: string[][];
  footer: string;
  accentIcons?: (typeof ShoppingBag)[];
}) {
  const [row, setRow] = useState(0);

  return (
    <div className="mt-12 surface-card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-5 py-4 sm:px-6">
        <p className="inline-flex items-center gap-2.5 text-[0.95rem] font-medium">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-hairline bg-surface-2">
            <Icon className="h-4 w-4 text-accent" />
          </span>
          {title}
        </p>
        <div className="flex items-center gap-2">
          {accentIcons?.map((A, i) => (
            <span
              key={i}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline"
            >
              <A className="h-3.5 w-3.5 text-muted-foreground" />
            </span>
          ))}
          <span className="chip">
            <Sparkles className="h-3 w-3 text-accent" />
            Workforce active
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 border-b border-hairline px-5 py-4 sm:px-6">
        {capabilities.map((c) => (
          <span key={c} className="chip">
            {c}
          </span>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  className="border-b border-hairline px-5 py-3 font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase sm:px-6"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                onMouseEnter={() => setRow(i)}
                className="transition-colors"
                style={{
                  background:
                    row === i ? "color-mix(in oklab, var(--accent) 6%, transparent)" : undefined,
                }}
              >
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border-b border-hairline px-5 py-3.5 text-[0.85rem] sm:px-6"
                    style={{ color: ci === 0 ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 bg-surface-2 px-5 py-4 sm:px-6">
        {flow.map((f, i) => (
          <span key={f} className="inline-flex items-center gap-2">
            {i > 0 && <ArrowRight className="h-3 w-3 text-accent" />}
            <span className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
              {f}
            </span>
          </span>
        ))}
        <span className="ml-auto text-[0.78rem] text-muted-foreground">{footer}</span>
      </div>
    </div>
  );
}
