import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Radio,
  Send,
  Thermometer,
  Truck,
} from "lucide-react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

const architecture = [
  "Data sources — TMS · GPS · Telematics · ERP · WMS · Documents · Customer systems",
  "AlgoBridge Intelligence™",
  "Logistics Intelligence",
  "AlgoBridge Workforce™",
  "Dispatch / Operations",
  "Execution",
  "Outcome",
];

type Shipment = {
  id: string;
  lane: string;
  window: string;
  eta: string;
  status: string;
  risk: "HIGH" | "MEDIUM" | "LOW";
  temp: string;
  recommendation: string;
};

const shipments: Shipment[] = [
  {
    id: "ABX-48291",
    lane: "Vienna → Munich",
    window: "14:00–14:30",
    eta: "14:47",
    status: "In transit · border delay",
    risk: "HIGH",
    temp: "+4.8°C",
    recommendation: "Delivery window breach likely. Contact driver and notify operations.",
  },
  {
    id: "ABX-48304",
    lane: "Rotterdam → Antwerp",
    window: "11:00–12:00",
    eta: "11:38",
    status: "In transit · on plan",
    risk: "LOW",
    temp: "+5.1°C",
    recommendation: "On plan. No dispatcher action required — continue monitoring.",
  },
  {
    id: "ABX-48317",
    lane: "Milan → Zurich",
    window: "09:30–10:00",
    eta: "10:12",
    status: "Loading · dock congestion",
    risk: "MEDIUM",
    temp: "+3.6°C",
    recommendation: "Re-slot the delivery and confirm the new window with the consignee.",
  },
];

const riskTone = {
  HIGH: "var(--ember)",
  MEDIUM: "oklch(0.72 0.14 85)",
  LOW: "var(--accent)",
} as const;

export function AbLogistics() {
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBeat((b) => (b + 1) % architecture.length), 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="logistics" tone="ink">
      <Reveal>
        <SectionHead
          invert
          eyebrow="AlgoBridge Logistics™ — AI Operations & Dispatch Intelligence"
          title={
            <>
              AI operations &amp;
              <br />
              dispatch intelligence.
            </>
          }
          sub="Connect shipment data, operational intelligence and workforce execution to help logistics teams respond to exceptions faster and coordinate complex operations."
        />
      </Reveal>

      <div className="mt-12 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {architecture.map((a, i) => {
          const on = i === beat;
          return (
            <div
              key={a}
              className="rounded-xl px-4 py-3.5 transition-all duration-500"
              style={{
                background: on
                  ? "color-mix(in oklab, var(--accent) 20%, transparent)"
                  : "oklch(1 0 0 / 0.04)",
                border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
              }}
            >
              <span
                className="font-mono text-[0.6rem] tracking-[0.14em]"
                style={{ color: on ? "var(--accent)" : "oklch(0.9 0.01 160 / 0.4)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="mt-1.5 text-[0.85rem] leading-snug"
                style={{ color: on ? "oklch(0.98 0.01 160)" : "oklch(0.9 0.01 160 / 0.6)" }}
              >
                {a}
              </p>
            </div>
          );
        })}
      </div>

      <Reveal>
        <ControlTower />
      </Reveal>
    </Section>
  );
}

function ControlTower() {
  const [selected, setSelected] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [resolved, setResolved] = useState(false);
  const s = shipments[selected]!;

  const act = (msg: string) => {
    setLog((l) =>
      [
        `${new Date().toLocaleTimeString("en-GB", { hour12: false })} — ${s.id} · ${msg}`,
        ...l,
      ].slice(0, 5),
    );
  };

  return (
    <div className="mt-14 rounded-3xl border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.04)] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[0.62rem] tracking-[0.2em] text-ink-foreground/50 uppercase">
            AlgoBridge Logistics™ · Operations Control Tower
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold text-ink-foreground">
            Dispatch Intelligence
          </h3>
        </div>
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.12em] uppercase"
          style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
        >
          <Radio className="h-3 w-3" />3 active shipments · sample operating environment
        </span>
      </div>

      {/* Shipment cards */}
      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {shipments.map((sh, i) => {
          const on = i === selected;
          return (
            <button
              key={sh.id}
              onClick={() => {
                setSelected(i);
                setResolved(false);
              }}
              className="rounded-2xl p-4 text-left transition-all duration-300"
              style={{
                background: on ? "oklch(1 0 0 / 0.07)" : "oklch(1 0 0 / 0.03)",
                border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
                transform: on ? "translateY(-2px)" : "none",
              }}
            >
              <span className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-foreground">
                  <Truck className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />
                  {sh.id}
                </span>
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.1em]"
                  style={{
                    border: `1px solid ${riskTone[sh.risk]}`,
                    color: riskTone[sh.risk],
                  }}
                >
                  {sh.risk}
                </span>
              </span>
              <span className="mt-2.5 block text-[0.85rem] text-ink-foreground/85">{sh.lane}</span>
              <span className="mt-1 block font-mono text-[0.65rem] text-ink-foreground/50">
                ETA {sh.eta} · window {sh.window}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-[oklch(1_0_0_/_0.1)] bg-[oklch(1_0_0_/_0.03)] p-5">
          <dl className="grid gap-3 sm:grid-cols-2">
            <Fact k="Shipment" v={s.id} />
            <Fact k="Lane" v={s.lane} icon={MapPin} />
            <Fact k="Delivery window" v={s.window} />
            <Fact k="Current ETA" v={s.eta} icon={Clock} />
            <Fact k="Shipment status" v={s.status} />
            <Fact k="Temperature" v={s.temp} icon={Thermometer} />
            <div>
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
                Operational risk
              </dt>
              <dd className="mt-1">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.12em]"
                  style={{
                    background: `color-mix(in oklab, ${riskTone[s.risk]} 22%, transparent)`,
                    border: `1px solid ${riskTone[s.risk]}`,
                    color: "oklch(0.98 0.01 160)",
                  }}
                >
                  <AlertTriangle className="h-3 w-3" /> {s.risk}
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
                Resolution
              </dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-[0.9rem] text-ink-foreground">
                {resolved ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />
                    Exception closed
                  </>
                ) : (
                  "Open · awaiting dispatch decision"
                )}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-[oklch(1_0_0_/_0.1)] pt-4 font-mono text-[0.58rem] tracking-[0.1em] text-ink-foreground/55 uppercase">
            {["TMS", "GPS", "Telematics", "ERP", "WMS", "Documents"].map((src, i) => (
              <span key={src} className="inline-flex items-center gap-1.5">
                {i > 0 && <span style={{ color: "var(--accent)" }}>·</span>}
                {src}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[oklch(1_0_0_/_0.1)] p-5">
            <p
              className="font-mono text-[0.6rem] tracking-[0.16em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              AlgoBridge Intelligence™ recommendation
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-foreground/85">
              {s.recommendation}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Contact Driver", icon: Phone },
                { label: "Notify Customer", icon: Send },
                { label: "Re-slot Delivery", icon: Clock },
                { label: "Escalate", icon: AlertTriangle },
                { label: "View Shipment", icon: ArrowUpRight },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => act(`${label} — executed by Logistics Workforce`)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(1_0_0_/_0.18)] px-3.5 py-2 text-[0.8rem] text-ink-foreground/85 transition-colors hover:border-accent hover:text-ink-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setResolved(true);
                act("Exception resolved — outcome recorded");
              }}
              className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-medium"
              style={{ background: "var(--gradient-accent)", color: "var(--accent-foreground)" }}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Resolve exception
            </button>
          </div>

          <div className="min-h-[120px] rounded-2xl border border-[oklch(1_0_0_/_0.1)] p-4">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
              Governed action log
            </p>
            <ul className="mt-2 grid gap-1.5">
              {log.length === 0 && (
                <li className="font-mono text-[0.72rem] text-ink-foreground/40">
                  Every dispatch action is permissioned and written to the audit trail.
                </li>
              )}
              {log.map((l) => (
                <li key={l} className="font-mono text-[0.72rem] text-ink-foreground/70">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fact({ k, v, icon: Icon }: { k: string; v: string; icon?: typeof Clock }) {
  return (
    <div>
      <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-foreground/45 uppercase">
        {k}
      </dt>
      <dd className="mt-1 inline-flex items-center gap-1.5 text-[0.9rem] text-ink-foreground">
        {Icon && <Icon className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />}
        {v}
      </dd>
    </div>
  );
}
