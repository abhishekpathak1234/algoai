import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";

const title = "Contact AlgoBridge — Book a 30-Minute Conversation";
const description =
  "Talk to AlgoBridge about the workflow that costs your operation the most. Book a 30-minute conversation or reach us directly by email.";

const CALENDLY_URL = "https://calendly.com/abhishek-algobridge/30min";
const EMAIL = "abhishek@algobridge.cc";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact AlgoBridge"
        title="Book a 30-Minute Conversation"
        sub="Bring one workflow. We will map it, discuss where intelligence and governed execution would sit, and show you a realistic first pilot scope."
        trail={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="surface-card flex h-full flex-col p-6 sm:p-8">
              <p className="eyebrow">Start with one workflow</p>
              <h2 className="mt-4 text-[1.5rem] leading-tight font-semibold">
                Book a 30-minute conversation
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                A direct conversation about the workflow, its systems and where AlgoBridge would
                execute, govern and improve it — no sales deck, no obligation.
              </p>
              <ul className="mt-6 grid gap-3 border-t border-hairline pt-6">
                {[
                  "The workflow, its systems and where it breaks",
                  "Where intelligence and execution would sit",
                  "Governance, approvals and audit requirements",
                  "A realistic first pilot scope and success criteria",
                ].map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2.5 text-[0.9rem] text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {l}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3.5 text-[0.9rem] font-medium"
                style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}
              >
                Book a 30-Minute Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card flex h-full flex-col p-6 sm:p-8">
              <p className="eyebrow">Prefer email</p>
              <h2 className="mt-4 text-[1.2rem] leading-tight font-semibold">Write to us directly</h2>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                For anything that doesn't fit a 30-minute slot, email us and we'll get back to you.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-hairline bg-surface-2 px-4 py-3 text-[0.92rem] font-medium transition-colors hover:border-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                {EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
