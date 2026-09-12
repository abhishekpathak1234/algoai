import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";
import { TrustBadge } from "@/components/site/PageShell";
import { caseStudies } from "@/content/portfolio";

export function AbProof() {
  return (
    <Section id="portfolio" tone="muted">
      <Reveal>
        <SectionHead
          eyebrow="AlgoBridge Portfolio"
          title="Built around real operational problems."
          sub="From logistics exceptions to commerce recovery and real estate operations, AlgoBridge applies the same intelligence and orchestration architecture to different enterprise workflows."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={70 * i}>
            <a
              href={`/portfolio/${c.slug}`}
              className="lift surface-card flex h-full flex-col p-6 transition-colors"
            >
              <p className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                {c.category}
              </p>
              <h3 className="mt-4 text-[1.05rem] leading-snug font-semibold">{c.title}</h3>

              <dl className="mt-5 grid gap-3 border-t border-hairline pt-5">
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Problem
                  </dt>
                  <dd className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {c.summary}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Systems
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1">
                    {c.systems.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.55rem] tracking-[0.08em] uppercase"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Intelligence
                  </dt>
                  <dd className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {c.detail.intelligence[0]?.label} · {c.detail.intelligence[1]?.label}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Flow
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap items-center gap-1">
                    {c.flow.map((f, idx) => (
                      <span key={f} className="flex items-center gap-1">
                        {idx > 0 && <span className="text-[0.6rem] text-accent">→</span>}
                        <span className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.55rem] tracking-[0.08em] uppercase">
                          {f}
                        </span>
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Workforce
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1">
                    {c.workforce.slice(0, 3).map((w) => (
                      <span
                        key={w}
                        className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.55rem] tracking-[0.08em] uppercase"
                      >
                        {w}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Governance
                  </dt>
                  <dd className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {c.detail.governance[0]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Outcome
                  </dt>
                  <dd className="mt-1 text-[0.85rem] leading-relaxed">{c.outcome}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center justify-between gap-3 pt-1">
                <TrustBadge label={c.trust} />
                <ArrowRight className="h-4 w-4 text-accent" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-hairline bg-background px-5 py-4">
          <p className="text-[0.9rem] text-muted-foreground">
            Case studies are anonymized or representative — never fabricated customer results.
          </p>
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-accent"
          >
            View the Portfolio
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
