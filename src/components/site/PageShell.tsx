import type { ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/primitives";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5">
      {trail.map((t, i) => (
        <span key={t.label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground" />}
          {t.href ? (
            <a
              href={t.href}
              className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-accent"
            >
              {t.label}
            </a>
          ) : (
            <span className="font-mono text-[0.62rem] tracking-[0.14em] text-accent uppercase">
              {t.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  sub,
  trail,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  trail?: { label: string; href?: string }[];
  meta?: ReactNode;
}) {
  return (
    <section className="hairline-grid border-b border-hairline bg-surface">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-20">
        {trail && (
          <div className="mb-8">
            <Breadcrumbs trail={trail} />
          </div>
        )}
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.04] font-semibold">
            {title}
          </h1>
          {sub && (
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {sub}
            </p>
          )}
          {meta && <div className="mt-8">{meta}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function PageCta({
  eyebrow,
  title,
  sub,
  primary = { label: "Transform a Workflow", href: "/#contact" },
  secondary,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8">
        <p className="eyebrow text-ink-foreground/60">{eyebrow}</p>
        <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,3.8vw,2.6rem)] leading-[1.08] font-semibold">
          {title}
        </h2>
        {sub && <p className="mt-5 max-w-xl text-[1rem] text-ink-foreground/70">{sub}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={primary.href}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[0.9rem] font-medium"
            style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}
          >
            {primary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-[oklch(1_0_0_/_0.2)] px-5 py-3.5 text-[0.9rem] font-medium transition-colors hover:border-accent"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function TrustBadge({ label }: { label: string }) {
  const verified = label.toLowerCase().startsWith("verified");
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.14em] uppercase ${
        verified ? "border-accent/50 text-accent" : "border-hairline text-muted-foreground"
      }`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: verified ? "var(--accent)" : "currentColor" }}
      />
      {label}
    </span>
  );
}
