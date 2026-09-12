import { useEffect, useState } from "react";
import {
  Boxes,
  Brain,
  Car,
  Database,
  FileText,
  Gauge,
  Headphones,
  Mail,
  Network,
  Plug,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

const systems = [
  { label: "CRM", icon: Users, note: "Accounts, contacts, pipeline, activity history" },
  { label: "ERP", icon: Boxes, note: "Orders, invoices, inventory, master data" },
  { label: "Commerce", icon: ShoppingBag, note: "Carts, checkout, fulfilment, returns" },
  { label: "TMS", icon: Truck, note: "Transport orders, dispatch plans, carriers" },
  { label: "WMS", icon: Warehouse, note: "Stock, picking, dock and load status" },
  { label: "Support", icon: Headphones, note: "Tickets, conversations, SLAs" },
  { label: "Email", icon: Mail, note: "Requests, confirmations, exceptions" },
  { label: "Documents", icon: FileText, note: "PODs, invoices, contracts, specs" },
  { label: "APIs", icon: Plug, note: "Internal and third-party service calls" },
  { label: "Databases", icon: Database, note: "Operational and analytical stores" },
  { label: "Telematics", icon: Radio, note: "GPS, ETA, temperature, driver events" },
];

const intelligence = [
  "Operational Memory",
  "AI Intelligence",
  "Decision Engine",
  "Execution Engine",
  "Governance",
  "Analytics",
];

const workforce = [
  { label: "Sales", icon: Users, does: "Researches, qualifies and follows up on demand." },
  {
    label: "Customer Ops",
    icon: Headphones,
    does: "Resolves requests and executes account actions.",
  },
  { label: "Orders", icon: Boxes, does: "Validates, corrects and progresses order flow." },
  { label: "Automotive", icon: Car, does: "Handles lead intent, appointments and follow-up." },
  { label: "Logistics", icon: Truck, does: "Detects exceptions and coordinates dispatch." },
  { label: "Documents", icon: FileText, does: "Extracts, validates and posts document data." },
];

export function SystemArchitecture() {
  const [sys, setSys] = useState<string | null>(null);
  const [unit, setUnit] = useState<string | null>(null);
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBeat((b) => (b + 1) % intelligence.length), 1400);
    return () => clearInterval(id);
  }, []);

  const activeSystem = systems.find((s) => s.label === sys);
  const activeUnit = workforce.find((w) => w.label === unit);

  return (
    <div className="surface-card overflow-hidden p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
          System architecture
        </p>
        <span className="chip">
          <Network className="h-3 w-3 text-accent" />
          Live orchestration
        </span>
      </div>

      {/* Systems */}
      <Layer label="Business systems">
        <div className="flex flex-wrap gap-1.5">
          {systems.map((s) => {
            const on = sys === s.label;
            return (
              <button
                key={s.label}
                onMouseEnter={() => setSys(s.label)}
                onFocus={() => setSys(s.label)}
                onMouseLeave={() => setSys(null)}
                className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 font-mono text-[0.63rem] tracking-[0.08em] uppercase transition-all duration-300"
                style={{
                  borderColor: on ? "var(--accent)" : "var(--hairline)",
                  background: on
                    ? "color-mix(in oklab, var(--accent) 12%, transparent)"
                    : "var(--surface)",
                  color: on ? "var(--accent-deep)" : "var(--muted-foreground)",
                  transform: on ? "translateY(-1px)" : "none",
                }}
              >
                <s.icon className="h-3 w-3" />
                {s.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 min-h-[1.1rem] text-[0.76rem] text-muted-foreground">
          {activeSystem ? activeSystem.note : "Hover a system to trace its connection."}
        </p>
      </Layer>

      <Connector active={!!sys} />

      {/* Intelligence */}
      <div
        className="rounded-2xl p-4"
        style={{ background: "var(--gradient-ink)", color: "var(--ink-foreground)" }}
      >
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4" style={{ color: "var(--accent)" }} />
          <p className="font-display text-[0.95rem] font-semibold">AlgoBridge Intelligence™</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {intelligence.map((c, i) => {
            const on = i === beat;
            return (
              <div
                key={c}
                className="rounded-xl px-2.5 py-2 font-mono text-[0.6rem] tracking-[0.08em] uppercase transition-all duration-500"
                style={{
                  background: on
                    ? "color-mix(in oklab, var(--accent) 26%, transparent)"
                    : "oklch(1 0 0 / 0.05)",
                  border: `1px solid ${on ? "var(--accent)" : "oklch(1 0 0 / 0.1)"}`,
                  opacity: on ? 1 : 0.62,
                }}
              >
                {c}
              </div>
            );
          })}
        </div>
      </div>

      <Connector active />

      {/* Workforce */}
      <Layer label="AlgoBridge Workforce™">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {workforce.map((w) => {
            const on = unit === w.label;
            return (
              <button
                key={w.label}
                onMouseEnter={() => setUnit(w.label)}
                onFocus={() => setUnit(w.label)}
                onMouseLeave={() => setUnit(null)}
                className="flex items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[0.72rem] transition-all duration-300"
                style={{
                  borderColor: on ? "var(--accent)" : "var(--hairline)",
                  background: on
                    ? "color-mix(in oklab, var(--accent) 10%, transparent)"
                    : "var(--surface)",
                }}
              >
                <w.icon className="h-3.5 w-3.5 shrink-0 text-accent" />
                {w.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 min-h-[1.1rem] text-[0.76rem] text-muted-foreground">
          {activeUnit ? activeUnit.does : "Hover a workforce unit to see what it does."}
        </p>
      </Layer>

      <Connector active={!!unit} />

      <div className="grid gap-1.5 sm:grid-cols-2">
        <div className="rounded-2xl border border-hairline bg-surface-2 px-4 py-3">
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
            Business actions
          </p>
          <p className="mt-1 text-[0.82rem]">Update · Notify · Dispatch · Post · Escalate</p>
        </div>
        <div className="rounded-2xl border border-hairline bg-surface-2 px-4 py-3">
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
            Outcomes
          </p>
          <p className="mt-1 inline-flex items-center gap-2 text-[0.82rem]">
            <Gauge className="h-3.5 w-3.5 text-accent" />
            Faster response · Lower effort · Cleaner data
          </p>
        </div>
      </div>

      <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase">
        <ShieldCheck className="h-3 w-3 text-accent" />
        Every action is permissioned, approved where required and logged
      </p>
    </div>
  );
}

function Layer({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-2xl border border-hairline bg-surface-2/60 p-4">
      <p className="mb-2.5 font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

function Connector({ active }: { active: boolean }) {
  return (
    <div className="relative mx-auto my-2 h-6 w-px overflow-hidden">
      <div className="absolute inset-0 ab-flow-line" style={{ opacity: active ? 1 : 0.4 }} />
      <span
        className="ab-pulse-dot absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}
