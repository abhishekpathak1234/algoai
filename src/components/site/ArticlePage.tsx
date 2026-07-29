import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Nav, Footer } from "./Chrome";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTABand } from "./CTABand";

export type ArticleSection = { title: string; body: string };

export function ArticlePage({
  eyebrow,
  title,
  intro,
  crumbs,
  readTime,
  category,
  sections,
  related,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  readTime?: string;
  category?: string;
  sections?: ArticleSection[];
  related?: { to: string; title: string; sub?: string }[];
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Breadcrumbs items={crumbs} />
        <article className="mx-auto max-w-[860px] px-6 pt-8 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>{eyebrow}</span>
            {category && (<><span className="text-border-strong">·</span><span>{category}</span></>)}
            {readTime && (
              <>
                <span className="text-border-strong">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {readTime}
                </span>
              </>
            )}
          </div>
          <h1 className="mt-5 font-display text-[38px] font-medium leading-[1.08] tracking-tight md:text-[52px]">
            {title}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">{intro}</p>

          {sections && sections.length > 0 && (
            <div className="mt-12 space-y-10">
              {sections.map((s) => (
                <section key={s.title}>
                  <h2 className="font-display text-[24px] leading-tight md:text-[28px]">{s.title}</h2>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-foreground/85">{s.body}</p>
                </section>
              ))}
            </div>
          )}

          {children}

          <div className="mt-14 rounded-2xl border border-border bg-card p-6">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Take the next step</div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <div className="font-display text-[18px]">See how an AI Workforce would run inside your business.</div>
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-4 py-2.5 text-[13px] font-medium text-[#05100C] hover:brightness-110"
              >
                Book Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>

        {related && related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-[1280px] px-6">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Related reads</div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <a
                    key={r.to}
                    href={r.to}
                    className="group rounded-2xl border border-border bg-card p-6 transition hover:border-border-strong"
                  >
                    <div className="font-display text-[16px]">{r.title}</div>
                    {r.sub && <p className="mt-2 text-[13px] text-muted-foreground">{r.sub}</p>}
                    <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
