import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "./Chrome";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTABand } from "./CTABand";

export type HubCard = {
  to: string;
  title: string;
  sub: string;
  meta?: string;
  icon?: ReactNode;
  tag?: string;
};

export function HubPage({
  eyebrow,
  title,
  intro,
  crumbs,
  cards,
  categories,
  ctaBand = true,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  crumbs: Crumb[];
  cards: HubCard[];
  categories?: string[];
  ctaBand?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={crumbs} />
        <section className="relative overflow-hidden pt-8 pb-16">
          <div className="bg-aurora absolute inset-0 -z-10" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {eyebrow}
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-[44px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {intro}
            </p>
            {categories && categories.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-surface/60 px-3 py-1 text-[11.5px] text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <div className="flex items-start justify-between">
                    {card.icon ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-emerald)] text-[#05100C]">
                        {card.icon}
                      </div>
                    ) : (
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                        {card.meta ?? ""}
                      </div>
                    )}
                    {card.tag && (
                      <span className="rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[10.5px] text-muted-foreground">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="font-display text-lg">{card.title}</div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {card.sub}
                  </p>
                  {card.meta && card.icon && (
                    <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
                      {card.meta}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {ctaBand && <CTABand />}
      </main>
      <Footer />
    </div>
  );
}
