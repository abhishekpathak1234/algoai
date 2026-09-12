import { useState } from "react";
import {
  Cloud,
  Database,
  FileStack,
  Lock,
  Mail,
  MessageSquare,
  Network,
  Plug,
  Server,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const systemGroups = [
  {
    name: "Business systems",
    icon: Database,
    items: ["CRM", "ERP", "TMS", "WMS", "Commerce platforms", "DMS"],
  },
  {
    name: "Communication",
    icon: Mail,
    items: ["Email", "Messaging", "Voice", "Support desks", "Web forms"],
  },
  {
    name: "Data & documents",
    icon: FileStack,
    items: ["PDFs", "Spreadsheets", "Contracts", "Invoices", "Warehouses"],
  },
  {
    name: "Operational systems",
    icon: Network,
    items: ["APIs", "Databases", "Legacy systems", "Telematics", "Internal tools"],
  },
];

const governance = [
  {
    icon: Users,
    title: "Role-based permissions",
    body: "Every workforce unit operates inside the permissions of the team it works for.",
  },
  {
    icon: ShieldCheck,
    title: "Human approvals",
    body: "Sensitive or commercial actions require named human confirmation before execution.",
  },
  {
    icon: Workflow,
    title: "Full auditability",
    body: "Inputs, reasoning, decisions and executed actions are recorded end to end.",
  },
  {
    icon: Lock,
    title: "Data boundaries",
    body: "Access is scoped per workflow — no broad, unbounded access to business data.",
  },
];

const deployments = [
  {
    icon: Cloud,
    name: "Cloud",
    body: "Managed environment, fastest path to a live governed workflow.",
  },
  {
    icon: Server,
    name: "Private cloud",
    body: "Deployed inside your own cloud tenancy and network boundary.",
  },
  {
    icon: Lock,
    name: "On-premise",
    body: "For regulated operations that require data to remain in your estate.",
  },
];

export function AbSystems() {
  const [group, setGroup] = useState(0);

  return (
    <>
      <Section id="systems" tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="Systems & integration"
            title="AlgoBridge works with the systems you already run."
            sub="No replacement programme. Intelligence and execution are layered on top of the systems your operations already depend on."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-2">
            {systemGroups.map((g, i) => {
              const on = i === group;
              return (
                <button
                  key={g.name}
                  onMouseEnter={() => setGroup(i)}
                  onClick={() => setGroup(i)}
                  className="flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300"
                  style={{
                    borderColor: on ? "var(--accent)" : "var(--hairline)",
                    background: on ? "var(--surface)" : "transparent",
                  }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-hairline bg-surface">
                    <g.icon className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-[0.95rem] font-medium">{g.name}</span>
                </button>
              );
            })}
          </div>

          <div className="surface-card p-6 sm:p-8">
            <p className="eyebrow">{systemGroups[group]!.name}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {systemGroups[group]!.items.map((it) => (
                <span key={it} className="chip">
                  <Plug className="h-3 w-3 text-accent" />
                  {it}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-hairline pt-5 text-[0.9rem] leading-relaxed text-muted-foreground">
              AlgoBridge reads from and writes back to these systems through APIs, databases and
              secure connectors — so a decision made in the platform becomes a real update in your
              system of record.
            </p>
          </div>
        </div>
      </Section>

      <Section id="governance">
        <Reveal>
          <SectionHead
            eyebrow="Security, governance & control"
            title="Autonomy with boundaries."
            sub="AI in operations only works when it is permissioned, reviewable and reversible. Governance is part of the architecture, not an add-on."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {governance.map((g, i) => (
            <Reveal key={g.title} delay={60 * i}>
              <div className="lift surface-card h-full p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface-2">
                  <g.icon className="h-4 w-4 text-accent" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Deployment options</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {deployments.map((d, i) => (
              <Reveal key={d.name} delay={60 * i}>
                <div className="lift surface-card h-full p-6">
                  <d.icon className="h-4 w-4 text-accent" />
                  <h3 className="mt-4 text-base font-semibold">{d.name}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-hairline bg-surface-2 p-5">
            <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
              All interfaces on this page are illustrative demonstrations of how AlgoBridge
              workflows behave. They do not contain live customer data or performance claims.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
