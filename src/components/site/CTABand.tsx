import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASupport } from "@/components/site/CTASupport";
import { CALENDLY_URL, CTA_BOOK_FULL } from "@/lib/contact";

export function CTABand({
  eyebrow = "Enterprise Deployment",
  title = "Ready to deploy your AI Workforce?",
  sub = "A senior specialist will walk through workflows, integrations and ROI tailored to your business.",
  primaryLabel = CTA_BOOK_FULL,
  secondaryHref = "/resources/roi-calculator",
  secondaryLabel = "Calculate ROI",
}: {
  eyebrow?: string;
  title?: string;
  sub?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="glass flex flex-col items-start justify-between gap-8 rounded-2xl p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {eyebrow}
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{sub}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <CTASupport variant="compact" />
            <div className="flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald transition hover:brightness-110"
              >
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to={secondaryHref}
                className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-surface/60 px-5 py-3 text-[13px] font-medium text-foreground transition hover:bg-surface"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
