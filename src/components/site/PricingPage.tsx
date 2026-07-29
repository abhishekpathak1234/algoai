import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { Nav, Footer } from "./Chrome";
import { CTABand } from "./CTABand";
import { CTASupport } from "./CTASupport";
import { tiers } from "@/data/pricing";
import { CALENDLY_URL } from "@/lib/contact";

const faqs = [
  {
    q: "How is Algo Realty priced?",
    a: "Annual contracts, priced per AI Employee and volume. Enterprise plans include unlimited employees, projects and integrations.",
  },
  {
    q: "Is there a setup fee?",
    a: "One-time implementation covers integrations, telephony, workflow calibration and go-live support — typically 3–5 weeks.",
  },
  {
    q: "Can we start with one project?",
    a: "Yes. Most customers pilot on one project or region before rolling out portfolio-wide.",
  },
  {
    q: "Do you offer multi-year discounts?",
    a: "Yes — 2 and 3-year enterprise agreements come with meaningful discounts and price locks.",
  },
  {
    q: "What's included in support?",
    a: "Enterprise plans include 24/7 priority support, a dedicated success team and quarterly business reviews.",
  },
];

export function PricingPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-36 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Enterprise Pricing
            </div>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
              Pricing built for <span className="text-emerald-grad">enterprise real estate.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] text-muted-foreground">
              Annual, per-employee pricing. No usage penalties. Multi-year discounts and named
              executive sponsors on enterprise plans.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-8 flex justify-center">
              <CTASupport variant="compact" center />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.slug}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    t.featured ? "border-emerald/50 bg-card ring-emerald" : "border-border bg-card"
                  }`}
                >
                  {t.featured && (
                    <div className="absolute -top-3 left-8 rounded-full bg-[var(--gradient-emerald)] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-widest text-[#05100C]">
                      Most chosen
                    </div>
                  )}
                  <div className="font-display text-2xl">{t.name}</div>
                  <p className="mt-2 text-[13.5px] text-muted-foreground">{t.tagline}</p>
                  <div className="mt-6 font-mono text-4xl">{t.price}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t.priceNote}
                  </div>
                  <ul className="mt-8 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13.5px]">
                        <Check className="mt-0.5 h-3.5 w-3.5 text-emerald" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 inline-flex items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-[13px] font-medium ${
                      t.featured
                        ? "bg-[var(--gradient-emerald)] text-[#05100C] ring-emerald hover:brightness-110"
                        : "border border-border bg-surface/60 text-foreground hover:bg-surface"
                    }`}
                  >
                    {t.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="glass rounded-2xl p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> ROI
                  </div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">
                    Model the payback for your portfolio.
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Enterprise deployments typically pay back within a quarter. Use the ROI
                    calculator to size revenue recovery and payroll savings for your business.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    to="/resources/$slug"
                    params={{ slug: "roi-calculator" }}
                    className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald hover:brightness-110"
                  >
                    Open ROI Calculator <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> FAQ
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Pricing questions.</h2>
            <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => {
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
        </section>

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

export const pricingFaqs = faqs;
