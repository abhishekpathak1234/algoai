import { useState } from "react";
import { ArrowRight, ChevronRight, Circle, Check, Minus, Plus, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Solution } from "@/data/solutions";
import { Nav, Footer } from "./Chrome";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTABand } from "./CTABand";
import { solutionBySlug } from "@/data/solutions";

export function SolutionPage({ data, crumbs, kind = "Solution" }: { data: Solution; crumbs: Crumb[]; kind?: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={crumbs} />
        <Hero data={data} kind={kind} />
        <Responsibilities data={data} />
        <Workflow steps={data.workflow} />
        <Outcomes data={data} />
        <Benefits items={data.benefits} />
        <IntegrationsStrip items={data.integrations} />
        <RelatedSolutions slugs={data.related} exclude={data.slug} />
        <FAQBlock faqs={data.faqs} />
        <CTABand
          title={`Deploy ${data.name} in weeks.`}
          sub={`A senior specialist will show how ${data.name} runs inside your business, integrated with your CRM and telephony.`}
        />
      </main>
      <Footer />
    </div>
  );
}

function Hero({ data, kind }: { data: Solution; kind: string }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-24">
      <div className="bg-aurora absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            <span>{kind}</span>
            <span className="text-border-strong">/</span>
            <span className="text-foreground">{data.category}</span>
          </div>
          <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
            {data.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">{data.heroSub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald transition hover:brightness-110"
            >
              Book Enterprise Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resources/roi-calculator"
              className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-5 py-3 text-[13px] font-medium text-foreground transition hover:bg-surface"
            >
              Calculate ROI
            </Link>
          </div>
        </div>

        <div className="glass rounded-2xl p-5 shadow-[var(--shadow-elev)]">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-[var(--gradient-emerald)] text-[#05100C]">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium">{data.name} · Live</div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald">
              <Circle className="h-2 w-2 fill-current" /> Deployed
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {data.kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-surface/40 p-4">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{k.label}</div>
                <div className="mt-2 font-mono text-2xl text-foreground">{k.value}</div>
                {k.delta && (
                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald">
                    <TrendingUp className="h-3 w-3" /> {k.delta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Responsibilities({ data }: { data: Solution }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Responsibilities
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl">What {data.name} owns.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {data.responsibilities.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-lg">{r.title}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow({ steps }: { steps: Solution["workflow"] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Workflow
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl">End-to-end orchestration.</h2>
        </div>
        <div className="glass mt-10 overflow-hidden rounded-2xl p-8">
          <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-1 items-stretch gap-3">
                <div className="flex min-w-[160px] flex-1 flex-col rounded-xl border border-border bg-card p-4">
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

function Outcomes({ data }: { data: Solution }) {
  return (
    <section className="border-y border-border bg-surface/30 py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Business Outcomes
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Outcomes on the P&amp;L.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Illustrative outcomes drawn from customer deployments across residential, commercial and enterprise real estate.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.outcomes.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
              <div className="mt-3 font-mono text-3xl">{m.value}</div>
              {m.sub && <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ items }: { items: string[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Benefits
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Fewer meetings. More bookings.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Deploy an AI Employee that runs alongside your team — never off, never inconsistent, always reporting.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
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

function IntegrationsStrip({ items }: { items: string[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="glass rounded-2xl p-8">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Native integrations</div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {items.map((i) => (
              <Link
                key={i}
                to="/integrations"
                className="rounded-lg border border-border bg-card px-3.5 py-2 text-[13px] text-foreground/80 transition hover:border-border-strong hover:text-foreground"
              >
                {i}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedSolutions({ slugs, exclude }: { slugs: string[]; exclude: string }) {
  const rel = slugs.map(solutionBySlug).filter((x): x is Solution => !!x && x.slug !== exclude);
  if (rel.length === 0) return null;
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Related AI Employees</div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {rel.slice(0, 3).map((r) => (
            <Link
              key={r.slug}
              to="/solutions/$slug"
              params={{ slug: r.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-emerald)] text-[#05100C]">
                <r.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="font-display text-[16px]">{r.name}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground">{r.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQBlock({ faqs }: { faqs: Solution["faqs"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> FAQ
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl">Frequently asked.</h2>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full flex-col items-start gap-2 p-6 text-left transition hover:bg-surface/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="font-display text-[16px]">{f.q}</div>
                    {isOpen ? <Minus className="h-4 w-4 text-emerald" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  {isOpen && <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
