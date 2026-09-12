import { ArrowRight } from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";
import { research } from "@/content/research";

const featured = [
  "enterprise-workflow-intelligence",
  "intelligent-exception-management",
  "enterprise-ai-workforce",
];

export function AbResearch() {
  const items = featured.map((s) => research.find((r) => r.slug === s)!).filter(Boolean);

  return (
    <Section id="research">
      <Reveal>
        <SectionHead
          eyebrow="AlgoBridge Research"
          title="Thinking beyond the AI demo."
          sub="Research and operating perspectives on how enterprises can move AI from experimentation into governed execution."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {items.map((r, i) => (
          <Reveal key={r.slug} delay={70 * i}>
            <a
              href={`/research/${r.slug}`}
              className="lift surface-card flex h-full flex-col p-6"
            >
              <p className="font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                {r.category}
              </p>
              <h3 className="mt-4 text-[1.05rem] leading-snug font-semibold">{r.title}</h3>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-muted-foreground">
                {r.question}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
                {r.topics.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.1em] text-muted-foreground uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-6">
                <ArrowRight className="h-4 w-4 text-accent" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-8">
          <a
            href="/research"
            className="group inline-flex items-center gap-1.5 rounded-full border border-hairline px-5 py-3 text-[0.88rem] font-medium transition-colors hover:bg-surface-2"
          >
            Explore Research
            <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
