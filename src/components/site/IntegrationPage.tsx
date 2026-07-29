import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Check, Layers, Plus, Minus } from "lucide-react";
import type { Integration } from "@/data/integrations";
import { Nav, Footer } from "./Chrome";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTABand } from "./CTABand";

export function IntegrationPage({ data, crumbs }: { data: Integration; crumbs: Crumb[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={crumbs} />
        <section className="relative overflow-hidden pt-10 pb-20">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Integration · {data.category}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl">
                <Layers className="h-6 w-6 text-emerald" />
              </div>
              <ChevronRight className="h-5 w-5 text-border-strong" />
              <div className="glass flex h-14 items-center rounded-2xl px-5 text-[15px] font-medium">
                {data.name}
              </div>
            </div>
            <h1 className="mt-8 max-w-3xl font-display text-[40px] font-medium leading-[1.05] tracking-tight md:text-[56px]">
              Algo Realty × <span className="text-emerald-grad">{data.name}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] text-muted-foreground">{data.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald hover:brightness-110"
              >
                Book Enterprise Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/integrations"
                className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-5 py-3 text-[13px] font-medium hover:bg-surface"
              >
                All integrations
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> What syncs
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl">Bi-directional, real-time.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {data.syncs.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-emerald/15 text-emerald">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="font-display text-[15px]">{s.title}</div>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Setup
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl">Go live in a day.</h2>
            </div>
            <div className="glass mt-10 rounded-2xl p-8">
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
                {data.workflow.map((s, i) => (
                  <div key={s.title} className="flex flex-1 items-stretch gap-3">
                    <div className="min-w-[160px] flex-1 rounded-xl border border-border bg-card p-4">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1 font-display text-[15px]">{s.title}</div>
                      {s.sub && (
                        <div className="mt-1 text-[11.5px] text-muted-foreground">{s.sub}</div>
                      )}
                    </div>
                    {i < data.workflow.length - 1 && (
                      <ChevronRight className="my-auto hidden h-5 w-5 text-border-strong md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> FAQ
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl">Questions from IT and Ops.</h2>
              <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
                {data.faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <button
                      key={f.q}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full flex-col items-start gap-2 p-6 text-left hover:bg-surface/50"
                      aria-expanded={isOpen}
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
          </div>
        </section>

        <CTABand
          title={`Connect ${data.name} in a day.`}
          sub={`See ${data.name} synced end-to-end with your AI Workforce.`}
        />
      </main>
      <Footer />
    </div>
  );
}
