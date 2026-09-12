import { useEffect, useState } from "react";
import {
  Boxes,
  Building2,
  Car,
  FileCheck2,
  FileText,
  Headphones,
  Settings2,
  Truck,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const lifecycle = ["Observe", "Understand", "Decide", "Execute", "Escalate", "Learn"];

const units = [
  {
    label: "Sales",
    icon: Users,
    body: "Researches accounts, qualifies demand and keeps CRM current.",
    systems: ["CRM", "Email", "Enrichment"],
  },
  {
    label: "Customer Operations",
    icon: Headphones,
    body: "Understands requests, resolves them and executes account actions.",
    systems: ["Support", "ERP", "Commerce"],
  },
  {
    label: "Orders",
    icon: Boxes,
    body: "Validates orders, fixes data issues and progresses fulfilment.",
    systems: ["ERP", "Commerce", "WMS"],
  },
  {
    label: "Automotive",
    icon: Car,
    body: "Handles lead intent, appointments, follow-up and service workflows.",
    systems: ["Dealership systems", "CRM", "Inventory"],
  },
  {
    label: "Logistics",
    icon: Truck,
    body: "Detects exceptions, coordinates dispatch and updates customers.",
    systems: ["TMS", "Telematics", "Documents"],
  },
  {
    label: "Documents",
    icon: FileText,
    body: "Extracts, validates and classifies documents into system records.",
    systems: ["Documents", "ERP", "Database"],
  },
  {
    label: "Compliance",
    icon: FileCheck2,
    body: "Screens transactions against policy and prepares review packages.",
    systems: ["Policy", "Audit log", "Finance"],
  },
  {
    label: "Operations",
    icon: Settings2,
    body: "Monitors operational signals and coordinates cross-team execution.",
    systems: ["APIs", "Databases", "Analytics"],
  },
];

const network = [
  { unit: "Sales Workforce", system: "CRM", action: "Qualified opportunity created", icon: Users },
  {
    unit: "Customer Workforce",
    system: "Support",
    action: "Request resolved and logged",
    icon: Headphones,
  },
  {
    unit: "Orders Workforce",
    system: "ERP / Commerce",
    action: "Order corrected and released",
    icon: Boxes,
  },
  {
    unit: "Automotive Workforce",
    system: "Dealership systems",
    action: "Appointment booked",
    icon: Car,
  },
  {
    unit: "Logistics Workforce",
    system: "TMS / Telematics",
    action: "Dispatch decision executed",
    icon: Truck,
  },
  {
    unit: "Document Workforce",
    system: "ERP / Database",
    action: "Document posted and audited",
    icon: Building2,
  },
];

export function AbWorkforce() {
  const [hover, setHover] = useState<string | null>(null);
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBeat((b) => (b + 1) % network.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="workforce" tone="muted">
      <Reveal>
        <SectionHead
          eyebrow="AlgoBridge Workforce™ — AI-Powered Workforce & Workflow Execution"
          title={
            <>
              A digital workforce
              <br />
              for the work that runs
              <br />
              your business.
            </>
          }
          sub="Deploy specialized AI-powered workers across high-value operational workflows, with defined responsibilities, business rules, system access and escalation paths."
        />
      </Reveal>

      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {units.map((u, i) => {
          const on = hover === u.label;
          return (
            <Reveal key={u.label} delay={40 * i}>
              <div
                onMouseEnter={() => setHover(u.label)}
                onMouseLeave={() => setHover(null)}
                className="lift surface-card h-full p-5"
                style={{ borderColor: on ? "var(--accent)" : undefined }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface">
                  <u.icon className="h-4 w-4 text-accent" />
                </span>
                <h3 className="mt-4 text-[0.98rem] font-semibold">{u.label}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">{u.body}</p>

                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{
                    gridTemplateRows: on ? "1fr" : "0fr",
                    opacity: on ? 1 : 0,
                  }}
                >
                  <div className="min-h-0">
                    <div className="mt-4 flex flex-wrap items-center gap-1 border-t border-hairline pt-3 font-mono text-[0.56rem] tracking-[0.1em] uppercase">
                      {lifecycle.map((l, li) => (
                        <span key={l} className="inline-flex items-center gap-1">
                          {li > 0 && <span className="text-accent">→</span>}
                          <span className="text-muted-foreground">{l}</span>
                        </span>
                      ))}
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {u.systems.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Signature workforce architecture */}
      <Reveal>
        <div
          className="mt-14 rounded-3xl p-6 sm:p-8"
          style={{ background: "var(--gradient-ink)", color: "var(--ink-foreground)" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p
                className="font-mono text-[0.6rem] tracking-[0.18em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Signature architecture
              </p>
              <h3 className="font-display mt-2 text-[1.4rem] font-semibold">
                AlgoBridge Intelligence™ → Workforce → System → Action
              </h3>
            </div>
            <span
              className="rounded-full px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.12em] uppercase"
              style={{ border: "1px solid oklch(1 0 0 / 0.18)", opacity: 0.7 }}
            >
              Data flowing through the architecture
            </span>
          </div>

          <div className="mt-8 grid gap-2 lg:grid-cols-3">
            {network.map((n, i) => {
              const on = i === beat;
              return (
                <div
                  key={n.unit}
                  className="rounded-2xl p-4 transition-all duration-500"
                  style={{
                    background: on
                      ? "color-mix(in oklab, var(--accent) 18%, transparent)"
                      : "oklch(1 0 0 / 0.04)",
                    border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
                    transform: on ? "translateY(-3px)" : "none",
                  }}
                >
                  <p className="inline-flex items-center gap-2 text-[0.88rem] font-medium">
                    <n.icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
                    {n.unit}
                  </p>
                  <div className="mt-3 grid gap-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase">
                    <span style={{ opacity: 0.55 }}>↓ {n.system}</span>
                    <span
                      style={{ opacity: on ? 1 : 0.55, color: on ? "var(--accent)" : undefined }}
                    >
                      ↓ {n.action}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
