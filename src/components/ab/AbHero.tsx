import { ArrowRight, Users, Workflow } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { SystemArchitecture } from "./SystemArchitecture";

export function AbHero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 pt-14 pb-6 sm:px-8 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Enterprise AI Intelligence & Orchestration</p>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,3.7rem)] leading-[0.98] font-semibold">
                Turn complex business workflows into{" "}
                <span className="text-gradient-accent">intelligent operations.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                We help enterprises automate repetitive customer and operational workflows.
              </p>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                Our AI-powered orchestration helps reduce costs and increase operational
                efficiency without replacing the systems and processes you already use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/abhishek-algobridge/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-[0.9rem] font-medium text-ink-foreground transition-opacity hover:opacity-90"
                >
                  Transform a Workflow
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-3.5 text-[0.9rem] font-medium transition-colors hover:bg-surface-2"
                >
                  <Workflow className="h-4 w-4 text-accent" />
                  Explore the Platform
                </a>
                <a
                  href="#workforce"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-3.5 text-[0.9rem] font-medium transition-colors hover:bg-surface-2"
                >
                  <Users className="h-4 w-4 text-accent" />
                  Explore AI Workforce
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://calendly.com/abhishek-algobridge/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-1 text-[0.85rem] font-medium text-accent"
                >
                  Talk to an AlgoBridge Expert
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-6 border-t border-hairline pt-6 font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
                Start with one workflow. Prove the value. Scale across the business.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <SystemArchitecture />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
