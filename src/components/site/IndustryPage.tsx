import { useEffect, useRef, useState, type ReactNode, type ComponentType } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  Minus,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Nav, Footer } from "./Chrome";

/* -----------------------------------------------------------
   Types
   ----------------------------------------------------------- */
export type Metric = {
  label: string;
  value: string;
  delta?: string;
  accent?: "emerald" | "cyan" | "purple";
};
export type Employee = {
  name: string;
  role: string;
  icon: ComponentType<{ className?: string }>;
  skills: string[];
};
export type WorkflowStep = { title: string; sub?: string };
export type Impact = { label: string; value: string; sub?: string };
export type PainPoint = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
};
export type FAQ = { q: string; a: string };

export type IndustryPageProps = {
  slug: string;
  industry: string;
  eyebrow: string;
  heroTitle: ReactNode;
  heroSub: string;
  heroKpis: Metric[];
  painPoints: PainPoint[];
  impacts: Impact[];
  employees: Employee[];
  workflow: WorkflowStep[];
  benefits: string[];
  dashboardTitle: string;
  dashboardMetrics: Metric[];
  caseStudy: {
    company: string;
    tag: string;
    quote: string;
    before: { label: string; value: string }[];
    after: { label: string; value: string }[];
  };
  faqs: FAQ[];
};

/* -----------------------------------------------------------
   Shared UI primitives (mirroring homepage design system)
   ----------------------------------------------------------- */
function useCountUpVisible<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
        {eyebrow}
      </div>
      <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-[56px]">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-[15px] leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto max-w-xl" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* -----------------------------------------------------------
   Sections
   ----------------------------------------------------------- */
function Hero({
  eyebrow,
  title,
  sub,
  kpis,
  industry,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  kpis: Metric[];
  industry: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="bg-aurora absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            <span>Industry</span>
            <span className="text-border-strong">/</span>
            <span className="text-foreground">{industry}</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
          <div className="mt-6 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </div>
          <h1 className="mt-4 font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">{sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald transition hover:brightness-110"
            >
              Book Enterprise Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#workforce"
              className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-5 py-3 text-[13px] font-medium text-foreground transition hover:bg-surface"
            >
              See AI Workforce
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex text-emerald">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            Trusted by enterprise real estate leaders worldwide.
          </div>
        </div>

        <div className="glass rounded-2xl p-5 shadow-[var(--shadow-elev)]">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-[var(--gradient-emerald)] text-[#05100C]">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium">{industry} · Live Command</div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald">
              <Circle className="h-2 w-2 fill-current" /> Live
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-surface/40 p-4">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {k.label}
                </div>
                <div className="mt-2 font-mono text-2xl text-foreground">{k.value}</div>
                {k.delta && (
                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald">
                    <TrendingUp className="h-3 w-3" /> {k.delta}
                  </div>
                )}
              </div>
            ))}
          </div>
          <MiniSparkline />
        </div>
      </div>
    </section>
  );
}

function MiniSparkline() {
  const pts = [12, 18, 15, 24, 22, 30, 28, 36, 34, 44, 41, 52, 48, 60, 66];
  const max = Math.max(...pts);
  const w = 100;
  const h = 30;
  const step = w / (pts.length - 1);
  const d = pts
    .map(
      (p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(2)},${(h - (p / max) * h).toFixed(2)}`,
    )
    .join(" ");
  return (
    <div className="mt-4 rounded-xl border border-border bg-surface/40 p-4">
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="uppercase tracking-widest">Pipeline Trend · 30 Days</span>
        <span className="text-emerald">+42.6%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-16 w-full">
        <defs>
          <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.17 165)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.78 0.17 165)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#sg)" />
        <path d={d} stroke="oklch(0.78 0.17 165)" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}

function PainPoints({ items, industry }: { items: PainPoint[]; industry: string }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHead
          eyebrow="The Cost of Delay"
          title={
            <>
              Where {industry.toLowerCase()}{" "}
              <span className="text-emerald-grad">lose revenue.</span>
            </>
          }
          sub="Every hour without a response, every unassigned lead, every manual follow-up — silently erodes bookings and margin."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-border-strong hover:bg-surface"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-emerald">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-lg">{p.title}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impacts({ items }: { items: Impact[] }) {
  return (
    <section className="border-y border-border bg-surface/30 py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Business Impact
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Outcomes that show up on the P&amp;L.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Illustrative outcomes based on customer deployments across residential, commercial and
            enterprise real estate portfolios.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-3 font-mono text-3xl">{m.value}</div>
              {m.sub && <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workforce({ employees, industry }: { employees: Employee[]; industry: string }) {
  return (
    <section id="workforce" className="relative py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHead
          eyebrow="AI Workforce"
          title={
            <>
              The AI Employees hired by{" "}
              <span className="text-emerald-grad">{industry.toLowerCase()}</span>.
            </>
          }
          sub="Each employee is specialised, deployable in weeks and orchestrated with your existing team, CRM and channels."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((e) => (
            <div
              key={e.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-emerald)] text-[#05100C]">
                  <e.icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[10px] text-emerald">
                  <Circle className="h-1.5 w-1.5 fill-current" /> Deployed
                </span>
              </div>
              <div className="mt-5 font-display text-lg">{e.name}</div>
              <div className="text-[12px] text-muted-foreground">{e.role}</div>
              <ul className="mt-4 space-y-2 text-[13px] text-foreground/85">
                {e.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="mt-[3px] h-3.5 w-3.5 text-emerald" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow({ steps }: { steps: WorkflowStep[] }) {
  const { ref, visible } = useCountUpVisible<HTMLDivElement>();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHead
          eyebrow="Orchestration"
          title={
            <>
              One workflow. <span className="text-emerald-grad">Zero drop-offs.</span>
            </>
          }
          sub="From the first inquiry to booking, collections and post-sale customer success — every step handled without human bottlenecks."
        />
        <div ref={ref} className="glass mt-14 overflow-hidden rounded-2xl p-8">
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-1 items-stretch gap-3">
                <div
                  className={`flex min-w-[180px] flex-1 flex-col rounded-xl border border-border bg-card p-4 transition-all duration-500 ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-display text-[15px]">{s.title}</div>
                  {s.sub && <div className="mt-1 text-[11.5px] text-muted-foreground">{s.sub}</div>}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="my-auto hidden h-5 w-5 shrink-0 text-border-strong md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits({ items }: { items: string[] }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead
              eyebrow="Why teams switch"
              title={
                <>
                  Fewer meetings. <span className="text-emerald-grad">More bookings.</span>
                </>
              }
              sub="Deploy an AI Workforce that runs alongside your team — never off, never inconsistent, always reporting."
              align="left"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald/15 text-emerald">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div className="text-[13.5px] text-foreground/90">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Dashboard({ title, metrics }: { title: string; metrics: Metric[] }) {
  return (
    <section className="relative py-24">
      <div className="bg-aurora absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHead
          eyebrow="Executive Command Center"
          title={
            <>
              {title} <span className="text-emerald-grad">in one view.</span>
            </>
          }
          sub="A single terminal for the entire real estate operation — revenue, inventory, conversations and workforce activity in real time."
        />
        <div className="glass mt-14 rounded-2xl p-6 shadow-[var(--shadow-elev)]">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald" />
              <div className="text-[13px] font-medium">Portfolio Overview</div>
              <div className="text-[11px] text-muted-foreground">· Auto-refresh · 5s</div>
            </div>
            <div className="hidden gap-1 md:flex">
              {["Today", "7D", "30D", "QTD", "YTD"].map((r, i) => (
                <span
                  key={r}
                  className={`rounded-md px-2.5 py-1 text-[11px] ${
                    i === 2
                      ? "bg-surface text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-surface/40 p-4">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>{m.label}</span>
                  {m.delta && <span className="text-emerald">{m.delta}</span>}
                </div>
                <div className="mt-3 font-mono text-2xl">{m.value}</div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full bg-[var(--gradient-emerald)]"
                    style={{ width: `${40 + ((m.label.length * 7) % 55)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ data }: { data: IndustryPageProps["caseStudy"] }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="border-b border-border p-10 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Case Study · Illustrative
              </div>
              <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                {data.company}
              </h3>
              <div className="mt-1 text-[13px] text-muted-foreground">{data.tag}</div>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/90">
                “{data.quote}”
              </p>
              <div className="mt-8 flex items-center gap-2 text-[12px] text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-[var(--gradient-emerald)]" />
                <div>
                  <div className="text-foreground">Head of Sales</div>
                  <div>Enterprise Real Estate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card p-8">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Before AI
                </div>
                <ul className="mt-6 space-y-5">
                  {data.before.map((b) => (
                    <li key={b.label}>
                      <div className="text-[12px] text-muted-foreground">{b.label}</div>
                      <div className="mt-1 font-mono text-xl text-foreground/70">{b.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface/40 p-8">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-emerald">
                  After AI <TrendingUp className="h-3 w-3" />
                </div>
                <ul className="mt-6 space-y-5">
                  {data.after.map((b) => (
                    <li key={b.label}>
                      <div className="text-[12px] text-muted-foreground">{b.label}</div>
                      <div className="mt-1 font-mono text-xl text-emerald">{b.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHead
          eyebrow="FAQ"
          title={<>Questions from leaders like you.</>}
          sub="Answers tailored to your business model, operations and revenue targets."
        />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full flex-col items-start gap-2 p-6 text-left transition hover:bg-surface/50"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="font-display text-[16px]">{f.q}</div>
                  {isOpen ? (
                    <Minus className="h-4 w-4 text-emerald" />
                  ) : (
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                {isOpen && (
                  <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ industry }: { industry: string }) {
  return (
    <section id="demo" className="relative overflow-hidden py-28">
      <div className="bg-aurora absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="glass mx-auto max-w-4xl rounded-3xl p-12 text-center shadow-[var(--shadow-elev)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {industry}
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Ready to deploy your <span className="text-emerald-grad">AI Workforce?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            See how Algo Realty would run inside your business. A senior specialist will walk
            through workflows, integrations and ROI tailored to {industry.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald transition hover:brightness-110"
            >
              Book Enterprise Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-5 py-3 text-[13px] font-medium text-foreground transition hover:bg-surface"
            >
              Talk to Sales
            </a>
          </div>
          <div className="mt-5 text-[11.5px] text-muted-foreground">
            Deploy your first AI Workforce in weeks — not months.
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Composed page
   ----------------------------------------------------------- */
export function IndustryPage(p: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero
          eyebrow={p.eyebrow}
          title={p.heroTitle}
          sub={p.heroSub}
          kpis={p.heroKpis}
          industry={p.industry}
        />
        <PainPoints items={p.painPoints} industry={p.industry} />
        <Impacts items={p.impacts} />
        <Workforce employees={p.employees} industry={p.industry} />
        <Workflow steps={p.workflow} />
        <Benefits items={p.benefits} />
        <Dashboard title={p.dashboardTitle} metrics={p.dashboardMetrics} />
        <CaseStudy data={p.caseStudy} />
        <FAQSection items={p.faqs} />
        <CTA industry={p.industry} />
      </main>
      <Footer />
    </div>
  );
}
