import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Cpu,
  Database,
  LineChart,
  PlayCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PageShell, PageHeader, PageCta } from "@/components/site/PageShell";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const title = "About AlgoBridge AI — Enterprise AI Intelligence & Orchestration";
const description =
  "Learn how AlgoBridge connects enterprise systems, data, intelligence and workforce to orchestrate complex workflows into intelligent, governed and measurable operations.";

const layers = [
  {
    n: "01",
    title: "Operational Memory",
    icon: Database,
    body: "Persistent business context — entities, history, rules and prior decisions.",
  },
  {
    n: "02",
    title: "AI Intelligence",
    icon: Brain,
    body: "Interpret documents, conversations, events and operational data.",
  },
  {
    n: "03",
    title: "Decision Engine",
    icon: Cpu,
    body: "Combine AI reasoning with deterministic business rules.",
  },
  {
    n: "04",
    title: "Execution Engine",
    icon: PlayCircle,
    body: "Translate decisions into governed system actions.",
  },
  {
    n: "05",
    title: "Governance",
    icon: ShieldCheck,
    body: "Permissions, approvals, auditability and human oversight.",
  },
  {
    n: "06",
    title: "Analytics",
    icon: LineChart,
    body: "Measure workflow performance and operational outcomes.",
  },
];

const stages = [
  { n: "01", name: "Discover", body: "Understand the workflow, systems, data, bottlenecks and economics." },
  { n: "02", name: "Prototype", body: "Build a functional intelligence and orchestration prototype around the selected workflow." },
  { n: "03", name: "Deploy", body: "Connect enterprise systems and introduce governed workforce execution." },
  { n: "04", name: "Measure", body: "Track throughput, response time, capacity, accuracy, risk and economic impact." },
  { n: "05", name: "Scale", body: "Extend the architecture across additional workflows, teams and business units." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About AlgoBridge"
        title="Enterprise AI intelligence and orchestration — not another AI agency."
        sub="AlgoBridge connects the systems, data, intelligence and workforce already inside your enterprise to transform fragmented workflows into intelligent, governed and measurable operations."
        trail={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="The problem: fragmented workflows"
            title={
              <>
                The data is there.
                <br />
                The workflow is the problem.
              </>
            }
            sub="Critical business processes span multiple systems, teams and data sources. The result is manual coordination, delayed decisions, inconsistent execution and operational leakage — not a lack of AI or a lack of data."
          />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Our approach: intelligence + orchestration"
            title="We connect systems. We orchestrate outcomes."
            sub="AlgoBridge is not an AI agency and does not build one-off automations. We connect enterprise systems and orchestrate intelligence, decisions, execution and governance into a single governed workflow — so a business process runs end-to-end, is measurable, and stays under human oversight."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 surface-card flex items-start gap-3 p-6 sm:p-8">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              One governed path: context in, decision made, action executed, outcome measured.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="intelligence" tone="muted">
        <Reveal>
          <SectionHead
            eyebrow="AlgoBridge Intelligence™"
            title="The intelligence layer between your systems and your workforce."
            sub="AlgoBridge Intelligence connects operational context, AI reasoning, business rules and execution systems into a unified intelligence layer."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, i) => (
            <Reveal key={l.n} delay={50 * i}>
              <div className="surface-card h-full p-6">
                <span className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface">
                    <l.icon className="h-4 w-4 text-accent" />
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">
                    {l.n}
                  </span>
                </span>
                <h3 className="mt-4 text-[1rem] font-semibold">{l.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">
                  {l.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="deployment">
        <Reveal>
          <SectionHead
            eyebrow="Deployment model"
            title="Start with one workflow. Prove the value. Scale across the business."
            sub="A staged deployment model that establishes an operational baseline, proves measurable impact on a single workflow, then extends the same architecture across the enterprise."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 lg:grid-cols-5">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={70 * i}>
              <div className="lift surface-card h-full p-6">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-accent">
                  {s.n}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow="Enterprise positioning"
        title="Bring one workflow. We'll show you where intelligence and governed execution would sit."
        sub="A direct conversation about the workflow, its systems and a realistic first pilot scope — no sales deck, no obligation."
        primary={{ label: "Transform a Workflow", href: "https://calendly.com/abhishek-algobridge/30min" }}
        secondary={{ label: "Contact AlgoBridge", href: "/contact" }}
      />
    </PageShell>
  );
}
