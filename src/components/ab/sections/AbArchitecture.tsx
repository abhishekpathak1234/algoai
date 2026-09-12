import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const stack = [
  {
    kicker: "Layer 00",
    title: "Business Systems",
    role: "WHERE",
    body: "The applications and data your operation already runs on.",
    items: [
      "CRM",
      "ERP",
      "Commerce",
      "TMS",
      "WMS",
      "Support",
      "Email",
      "Documents",
      "APIs",
      "Databases",
      "Telematics",
    ],
    href: "#systems",
    cta: "Explore Systems",
  },
  {
    kicker: "Layer 01",
    title: "AlgoBridge Intelligence™",
    role: "THINK",
    body: "Understand context. Reason over operational data. Make governed decisions.",
    items: [
      "Operational Memory",
      "AI Intelligence",
      "Decision Engine",
      "Execution Engine",
      "Governance",
      "Analytics",
    ],
    href: "#intelligence",
    cta: "Explore Intelligence",
    accent: true,
  },
  {
    kicker: "Layer 02",
    title: "AlgoBridge Flow Architecture™",
    role: "ORCHESTRATE",
    body: "Move work from event to outcome through an intelligent, governed workflow.",
    items: ["Discover", "Remember", "Understand", "Decide", "Execute", "Govern", "Learn"],
    href: "#flow-architecture",
    cta: "See the Architecture",
    accent: true,
  },
  {
    kicker: "Layer 03",
    title: "AlgoBridge Workforce™",
    role: "EXECUTE",
    body: "Specialised digital workers that execute governed business workflows.",
    items: ["Sales", "Customer Operations", "Orders", "Automotive", "Logistics", "Documents"],
    href: "#workforce",
    cta: "Explore Workforce",
    accent: true,
  },
  {
    kicker: "Layer 04",
    title: "Governed Business Actions",
    role: "ACT",
    body: "Every action is permissioned, approved where required and logged.",
    items: ["Update", "Notify", "Dispatch", "Post", "Escalate"],
    href: "#governance",
    cta: "Explore Governance",
  },
  {
    kicker: "Layer 05",
    title: "Measured Outcomes",
    role: "RESULT",
    body: "Workflow performance measured against an operational baseline.",
    items: ["Revenue", "Productivity", "Speed", "Accuracy", "Compliance", "Customer Experience"],
    href: "#value",
    cta: "Model the Value",
  },
];

const questions = [
  { label: "Intelligence", q: "What should happen?", href: "#intelligence" },
  {
    label: "Flow Architecture",
    q: "How should the work move through the enterprise?",
    href: "#flow-architecture",
  },
  { label: "Workforce", q: "Who or what executes the work?", href: "#workforce" },
  { label: "Systems", q: "Where is the work executed?", href: "#systems" },
  { label: "Outcome", q: "What business result was produced?", href: "#value" },
];

export function AbArchitecture() {
  return (
    <Section id="architecture">
      <Reveal>
        <SectionHead
          eyebrow="The AlgoBridge Architecture — Enterprise AI Intelligence & Orchestration"
          title={
            <>
              One architecture from
              <br />
              enterprise systems to
              <br />
              measured outcomes.
            </>
          }
          sub="AlgoBridge sits between the systems a business already runs and the work being executed — connecting data, operational context, AI reasoning, business rules, workforce execution and governance into one intelligent operating flow."
        />
      </Reveal>

      <div className="mt-12 grid gap-2">
        {stack.map((s, i) => (
          <Reveal key={s.title} delay={50 * i}>
            <div
              className="surface-card p-5 sm:p-6"
              style={
                s.accent
                  ? {
                      borderColor: "color-mix(in oklab, var(--accent) 45%, var(--hairline))",
                      background: "color-mix(in oklab, var(--accent) 4%, var(--surface))",
                    }
                  : undefined
              }
            >
              <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {s.kicker}
                    </span>
                    <span
                      className="font-mono text-[0.62rem] tracking-[0.18em] uppercase"
                      style={{ color: "var(--accent)" }}
                    >
                      {s.role}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[1.15rem] font-semibold">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-[0.86rem] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <a
                    href={s.href}
                    className="group mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-accent"
                  >
                    {s.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-hairline bg-background px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.1em] uppercase"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {i < stack.length - 1 && (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/60" />
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-14 border-t border-hairline pt-10">
          <p className="eyebrow">Read the architecture in five seconds</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {questions.map((q) => (
              <a key={q.label} href={q.href} className="lift surface-card block p-4">
                <span className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                  {q.label}
                </span>
                <span className="mt-2 block text-[0.9rem] leading-snug font-medium">“{q.q}”</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
