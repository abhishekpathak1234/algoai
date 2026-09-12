import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const today = ["System", "Email", "Human", "Spreadsheet", "System", "Approval", "Customer"];
const bridge = ["Event", "Intelligence", "Decision", "Governed execution", "Outcome"];

export function AbProblem() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % bridge.length), 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="problem" tone="muted">
      <Reveal>
        <SectionHead
          eyebrow="The operational problem"
          title={
            <>
              The data is there.
              <br />
              The workflow is the problem.
            </>
          }
          sub="Critical business processes often span multiple systems, teams and data sources. The result is manual coordination, delayed decisions, inconsistent execution and operational leakage."
        />
      </Reveal>

      <div className="mt-12 grid gap-3 lg:grid-cols-2">
        <Reveal>
          <div className="surface-card h-full p-6">
            <p className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
              <AlertTriangle className="h-3.5 w-3.5" />
              Today
            </p>
            <div className="mt-5 grid gap-1.5">
              {today.map((t, i) => (
                <div key={`${t}-${i}`} className="flex items-center gap-3">
                  <span className="font-mono text-[0.6rem] text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 rounded-xl border border-dashed border-hairline bg-surface-2 px-3.5 py-2.5 text-[0.85rem] text-muted-foreground">
                    {t}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-muted-foreground">
              Handoffs, waiting, re-keying and lost context between every step.
            </p>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div
            className="h-full rounded-3xl p-6"
            style={{ background: "var(--gradient-ink)", color: "var(--ink-foreground)" }}
          >
            <p
              className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.18em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              With AlgoBridge
            </p>
            <div className="mt-5 grid gap-2">
              {bridge.map((b, i) => {
                const on = i === step;
                const passed = i < step;
                return (
                  <div
                    key={b}
                    className="flex items-center gap-3 rounded-xl px-3.5 py-3 transition-all duration-500"
                    style={{
                      background: on
                        ? "color-mix(in oklab, var(--accent) 22%, transparent)"
                        : "oklch(1 0 0 / 0.04)",
                      border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
                      transform: on ? "translateX(4px)" : "none",
                    }}
                  >
                    <span
                      className="font-mono text-[0.6rem]"
                      style={{ color: on ? "var(--accent)" : "oklch(0.9 0.01 160 / 0.4)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[0.88rem]"
                      style={{ opacity: on ? 1 : passed ? 0.75 : 0.5 }}
                    >
                      {b}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed opacity-70">
              One governed path: context in, decision made, action executed, outcome measured.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
