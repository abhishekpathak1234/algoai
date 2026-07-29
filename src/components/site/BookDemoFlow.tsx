import { useState } from "react";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { Nav, Footer } from "./Chrome";

const industries = [
  "Builders",
  "Developers",
  "Brokerages",
  "Agencies",
  "Property Management",
  "Commercial",
  "Luxury",
  "Channel Partners",
];
const sizes = ["1–50", "51–250", "251–1000", "1000+"];
const crms = ["Salesforce", "HubSpot", "LeadSquared", "Zoho", "Sell.Do", "None", "Other"];
const challenges = [
  "Lead response time",
  "Site-visit show-up",
  "CRM discipline",
  "Collections",
  "Marketing attribution",
  "Payroll pressure",
  "Multi-project scale",
];

const steps = ["Industry", "Company Size", "Current CRM", "Main Challenge", "Schedule"];

export function BookDemoFlow() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<{
    industry?: string;
    size?: string;
    crm?: string;
    challenge?: string;
    email?: string;
    name?: string;
    company?: string;
  }>({});
  const [done, setDone] = useState(false);

  const pct = ((step + 1) / steps.length) * 100;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Book Demo
          </div>
          <h1 className="mt-3 font-display text-[36px] font-medium leading-[1.06] md:text-[48px]">
            See your AI Workforce, <span className="text-emerald-grad">live.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-muted-foreground">
            5 quick questions. A senior specialist will tailor the demo to your business,
            integrations and revenue goals.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="glass rounded-2xl p-8">
              {done ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl">Request received.</h2>
                  <p className="mx-auto mt-2 max-w-md text-[14px] text-muted-foreground">
                    A specialist will reach out within 4 business hours to schedule your tailored
                    demo.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span>
                      Step {step + 1} of {steps.length}
                    </span>
                    <span>{steps[step]}</span>
                  </div>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full bg-[var(--gradient-emerald)] transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="mt-8">
                    {step === 0 && (
                      <Choice
                        label="Which best describes your business?"
                        options={industries}
                        value={state.industry}
                        onPick={(v) => {
                          setState({ ...state, industry: v });
                          next();
                        }}
                      />
                    )}
                    {step === 1 && (
                      <Choice
                        label="How many people work in your organisation?"
                        options={sizes}
                        value={state.size}
                        onPick={(v) => {
                          setState({ ...state, size: v });
                          next();
                        }}
                      />
                    )}
                    {step === 2 && (
                      <Choice
                        label="Which CRM do you use today?"
                        options={crms}
                        value={state.crm}
                        onPick={(v) => {
                          setState({ ...state, crm: v });
                          next();
                        }}
                      />
                    )}
                    {step === 3 && (
                      <Choice
                        label="What's the single biggest challenge you'd like to solve first?"
                        options={challenges}
                        value={state.challenge}
                        onPick={(v) => {
                          setState({ ...state, challenge: v });
                          next();
                        }}
                      />
                    )}
                    {step === 4 && (
                      <form
                        className="space-y-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setDone(true);
                        }}
                      >
                        <label className="block">
                          <span className="text-[12px] uppercase tracking-widest text-muted-foreground">
                            Work email
                          </span>
                          <input
                            required
                            type="email"
                            placeholder="ceo@company.com"
                            value={state.email ?? ""}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            className="mt-2 w-full rounded-[14px] border border-border bg-card px-4 py-3 text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald"
                          />
                        </label>
                        <label className="block">
                          <span className="text-[12px] uppercase tracking-widest text-muted-foreground">
                            Full name
                          </span>
                          <input
                            required
                            placeholder="Your name"
                            value={state.name ?? ""}
                            onChange={(e) => setState({ ...state, name: e.target.value })}
                            className="mt-2 w-full rounded-[14px] border border-border bg-card px-4 py-3 text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald"
                          />
                        </label>
                        <label className="block">
                          <span className="text-[12px] uppercase tracking-widest text-muted-foreground">
                            Company
                          </span>
                          <input
                            required
                            placeholder="Company name"
                            value={state.company ?? ""}
                            onChange={(e) => setState({ ...state, company: e.target.value })}
                            className="mt-2 w-full rounded-[14px] border border-border bg-card px-4 py-3 text-[14px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald"
                          />
                        </label>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald hover:brightness-110"
                        >
                          Request Demo <ArrowRight className="h-4 w-4" />
                        </button>
                      </form>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-between text-[12px] text-muted-foreground">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1 disabled:opacity-40"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" /> Back
                    </button>
                    <span>Takes under a minute.</span>
                  </div>
                </>
              )}
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Demo Summary
              </div>
              <dl className="mt-4 space-y-3 text-[13.5px]">
                <Row label="Industry" value={state.industry} />
                <Row label="Company Size" value={state.size} />
                <Row label="CRM" value={state.crm} />
                <Row label="Challenge" value={state.challenge} />
              </dl>
              <div className="mt-8 rounded-xl border border-border bg-surface/50 p-4 text-[12.5px] text-muted-foreground">
                Your session includes a live command-center walkthrough, workflow mapping to your
                CRM and a tailored ROI model.
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Choice({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: string[];
  value?: string;
  onPick: (v: string) => void;
}) {
  return (
    <div>
      <div className="font-display text-xl">{label}</div>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onPick(o)}
            className={`rounded-[14px] border px-4 py-3 text-left text-[14px] transition ${
              value === o
                ? "border-emerald/70 bg-emerald/10 text-foreground"
                : "border-border bg-card text-foreground/90 hover:border-border-strong"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{value ?? "—"}</dd>
    </div>
  );
}
