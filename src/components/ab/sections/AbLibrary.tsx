import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

type Demo = {
  name: string;
  domain: string;
  trigger: string;
  steps: { stage: string; detail: string }[];
  outcome: string;
};

const demos: Demo[] = [
  {
    name: "Exception resolution",
    domain: "Logistics",
    trigger: "Driver reports a 40-minute border delay",
    steps: [
      { stage: "Understand", detail: "Message classified as delivery-window risk" },
      { stage: "Remember", detail: "Lane history and customer SLA retrieved" },
      { stage: "Decide", detail: "Re-slot preferred over escalation" },
      { stage: "Execute", detail: "TMS updated, customer notified" },
      { stage: "Govern", detail: "Action logged against dispatcher identity" },
    ],
    outcome: "Exception closed without a manual phone chain.",
  },
  {
    name: "Order recovery",
    domain: "Commerce",
    trigger: "Checkout abandoned at delivery-date step",
    steps: [
      { stage: "Understand", detail: "Intent read as delivery uncertainty" },
      { stage: "Decide", detail: "Confirm slot before offering discount" },
      { stage: "Execute", detail: "Slot confirmation and payment link sent" },
      { stage: "Learn", detail: "Outcome recorded against recovery playbook" },
    ],
    outcome: "Recovered order without unnecessary margin loss.",
  },
  {
    name: "Lead to appointment",
    domain: "Automotive",
    trigger: "Inbound enquiry for an SUV test drive",
    steps: [
      { stage: "Understand", detail: "Model, timeframe and finance intent extracted" },
      { stage: "Decide", detail: "Two viable slots selected from inventory and staffing" },
      { stage: "Execute", detail: "Appointment proposed and written to the DMS" },
      { stage: "Learn", detail: "Reminder cadence tuned to show-rate data" },
    ],
    outcome: "Appointment booked minutes after the enquiry arrived.",
  },
  {
    name: "Document workflow",
    domain: "Real estate",
    trigger: "Agreement pack received for a Phase II villa",
    steps: [
      { stage: "Understand", detail: "Clauses, parties and dates extracted" },
      { stage: "Decide", detail: "Missing KYC document identified" },
      { stage: "Govern", detail: "Sales lead approval requested" },
      { stage: "Execute", detail: "Request issued, CRM stage advanced" },
    ],
    outcome: "Documentation completed without a manual checklist.",
  },
];

export function AbLibrary() {
  const [active, setActive] = useState(0);
  const [played, setPlayed] = useState(0);
  const demo = demos[active]!;

  return (
    <Section id="library">
      <Reveal>
        <SectionHead
          eyebrow="Interactive workflow library"
          title="See how a workflow actually runs."
          sub="Each demonstration walks a real operational trigger through the Flow Architecture™ — understand, decide, execute, govern, learn."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="grid gap-2">
          {demos.map((d, i) => (
            <button
              key={d.name}
              onClick={() => {
                setActive(i);
                setPlayed(0);
              }}
              className="rounded-2xl border px-4 py-4 text-left transition-all duration-300"
              style={{
                borderColor: i === active ? "var(--accent)" : "var(--hairline)",
                background: i === active ? "var(--surface)" : "transparent",
              }}
            >
              <span className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                {d.domain}
              </span>
              <span className="mt-1.5 block text-[0.95rem] font-medium">{d.name}</span>
            </button>
          ))}
        </div>

        <div className="surface-card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="eyebrow">Trigger</p>
              <p className="mt-2 text-[1.05rem] font-medium">{demo.trigger}</p>
            </div>
            <button
              onClick={() => setPlayed((p) => (p >= demo.steps.length ? 0 : p + 1))}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.82rem] font-medium"
              style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}
            >
              <Play className="h-3.5 w-3.5" />
              {played === 0
                ? "Run workflow"
                : played >= demo.steps.length
                  ? "Replay"
                  : "Next stage"}
            </button>
          </div>

          <ol className="mt-7 grid gap-2">
            {demo.steps.map((s, i) => {
              const on = i < played;
              return (
                <li
                  key={s.stage}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border px-4 py-3.5 transition-all duration-500"
                  style={{
                    borderColor: on ? "var(--accent)" : "var(--hairline)",
                    background: on
                      ? "color-mix(in oklab, var(--accent) 7%, transparent)"
                      : "transparent",
                    opacity: on ? 1 : 0.55,
                  }}
                >
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                    {s.stage}
                  </span>
                  <span className="text-[0.88rem] text-muted-foreground">{s.detail}</span>
                </li>
              );
            })}
          </ol>

          <div
            className="mt-6 flex items-center gap-2.5 border-t border-hairline pt-5 text-[0.9rem] transition-opacity duration-500"
            style={{ opacity: played >= demo.steps.length ? 1 : 0.4 }}
          >
            <ArrowRight className="h-4 w-4 text-accent" />
            <span className="font-medium">{demo.outcome}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
