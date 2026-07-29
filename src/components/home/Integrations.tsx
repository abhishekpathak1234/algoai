import { Layers } from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

const integrations = [
  "Salesforce",
  "HubSpot",
  "LeadSquared",
  "Zoho",
  "WhatsApp",
  "Meta",
  "Google Ads",
  "Google Calendar",
  "Microsoft Teams",
  "Zoom",
  "Outlook",
  "Slack",
  "99acres",
  "MagicBricks",
  "Housing",
];

export function Integrations() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Integrations</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
            Plugs into the tools
            <br />
            your teams already use.
          </h2>
        </div>

        <div className="relative mx-auto mt-20 aspect-[16/10] max-w-[1000px] overflow-hidden rounded-[28px] border border-border bg-surface/30">
          <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-40 blur-3xl" />
          <svg viewBox="0 0 1000 620" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="ring" cx="0.5" cy="0.5" r="0.5">
                <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
              </radialGradient>
            </defs>
            {[140, 240, 340].map((r) => (
              <circle key={r} cx="500" cy="310" r={r} stroke="rgba(255,255,255,0.06)" fill="none" />
            ))}
            {integrations.map((_, i) => {
              const angle = (i / integrations.length) * Math.PI * 2 - Math.PI / 2;
              const ring = 140 + (i % 3) * 100;
              const x = 500 + Math.cos(angle) * ring;
              const y = 310 + Math.sin(angle) * ring;
              return (
                <line
                  key={i}
                  x1="500"
                  y1="310"
                  x2={x}
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="2 4"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="glass-strong grid h-24 w-24 place-items-center rounded-full shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-signature">
                <Layers className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {integrations.map((i, idx) => {
            const angle = (idx / integrations.length) * Math.PI * 2 - Math.PI / 2;
            const ring = 140 + (idx % 3) * 100;
            const leftPct = 50 + (Math.cos(angle) * ring * 100) / 1000;
            const topPct = 50 + (Math.sin(angle) * ring * 100) / 620;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              >
                <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-2 shadow-[var(--shadow-card)] transition hover:border-border-strong">
                  <div className="grid h-6 w-6 place-items-center rounded-md border border-border bg-background/80 font-mono text-[9px] text-foreground/70">
                    {i.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="font-display text-[11.5px]">{i}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
