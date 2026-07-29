import type { ReactNode } from "react";
import { Signal } from "lucide-react";
import { Counter, Eyebrow, LiveDot } from "@/components/home/primitives";

export function CommandCenter() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow>AI Command Center</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[68px]">
              Your business, on
              <br />
              <span className="text-signature">one terminal.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            A Bloomberg-grade command center for revenue, bookings, pipeline, calls, conversations
            and the AI Workforce operating your business.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] border border-border bg-surface/40 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-border bg-background/40 px-6 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              </div>
              <span className="ml-2 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <Signal className="h-3.5 w-3.5 text-emerald" />
                algorealty://terminal/enterprise
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] font-mono text-muted-foreground">
              <span className="rounded-full border border-border px-2 py-0.5">Q4</span>
              <span>Updated 3s ago</span>
              <LiveDot />
            </div>
          </div>

          <div className="grid gap-px bg-border p-px md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
            <div className="bg-card p-8 md:col-span-4 md:row-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Pipeline Managed
                  </div>
                  <div className="mt-4 font-mono text-[72px] font-medium leading-none tracking-tight">
                    <Counter value={128_400_000} prefix="$" format="compact" />
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-emerald">▲ +38% vs LQ</div>
                </div>
                <div className="hidden text-right md:block">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Revenue Influenced
                  </div>
                  <div className="mt-2 font-mono text-2xl">
                    <Counter value={18_700_000} prefix="$" format="compact" />
                  </div>
                </div>
              </div>
              <BigChart />
            </div>

            <div className="grid gap-px bg-border md:col-span-2 md:row-span-2">
              {[
                { l: "Collections", v: 4_200_000, m: "compact", pref: "$" },
                { l: "Calls Processed", v: 1_200_000, m: "compact" },
                { l: "Meetings", v: 185_000, m: "compact" },
                { l: "Site Visits", v: 72_000, m: "compact" },
              ].map((k) => (
                <div key={k.l} className="bg-card p-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {k.l}
                  </div>
                  <div className="mt-2 font-mono text-2xl">
                    <Counter value={k.v} prefix={k.pref ?? ""} format="compact" />
                  </div>
                  <MiniSpark />
                </div>
              ))}
            </div>

            <Widget title="Sales Funnel" className="md:col-span-2">
              <Funnel />
            </Widget>
            <Widget title="Conversations" className="md:col-span-2">
              <ConvStream />
            </Widget>
            <Widget title="Inventory" className="md:col-span-2">
              <InventoryList />
            </Widget>
          </div>
        </div>
      </div>
    </section>
  );
}

function BigChart() {
  return (
    <svg viewBox="0 0 700 220" className="mt-8 h-52 w-full">
      <defs>
        <linearGradient id="bc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[50, 100, 150].map((y) => (
        <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,170 C60,155 120,150 200,130 C280,110 340,120 420,90 C500,60 560,70 640,40 L700,25 L700,220 L0,220 Z"
        fill="url(#bc)"
      />
      <path
        d="M0,170 C60,155 120,150 200,130 C280,110 340,120 420,90 C500,60 560,70 640,40 L700,25"
        fill="none"
        stroke="#ec4899"
        strokeWidth="1.8"
      />
      {[
        [200, 130],
        [420, 90],
        [640, 40],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#0a0a0a" stroke="#ec4899" strokeWidth="1.8" />
        </g>
      ))}
    </svg>
  );
}

function MiniSpark() {
  return (
    <svg viewBox="0 0 100 24" className="mt-2 h-6 w-full text-foreground/60">
      <path
        d="M0,20 L15,18 L30,14 L45,15 L60,8 L75,10 L90,4 L100,2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function Widget({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-card p-5 ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{title}</div>
        <LiveDot />
      </div>
      {children}
    </div>
  );
}

function Funnel() {
  const rows = [
    ["Leads", 12400, 100],
    ["Qualified", 6820, 55],
    ["Meetings", 2140, 17],
    ["Site Visits", 1180, 9.5],
    ["Bookings", 264, 2.1],
  ] as const;
  return (
    <div className="space-y-2.5">
      {rows.map(([l, v, w]) => (
        <div key={l}>
          <div className="flex justify-between text-[11px]">
            <span className="text-foreground/90">{l}</span>
            <span className="font-mono text-muted-foreground">{v.toLocaleString()}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-background">
            <div className="h-full rounded-full bg-signature" style={{ width: `${w}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ConvStream() {
  const items = [
    { c: "WhatsApp", n: "Priya S.", t: "Requested 3BHK brochure", when: "just now" },
    { c: "Call", n: "Rahul M.", t: "Booked site visit — Skyline", when: "1m" },
    { c: "WhatsApp", n: "Aisha K.", t: "Asked EMI options", when: "2m" },
    { c: "Call", n: "Vikas T.", t: "Interested in commercial", when: "4m" },
  ];
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li
          key={i.n}
          className="flex items-center justify-between gap-2 rounded-lg border border-border bg-background/60 px-2.5 py-2 text-[11px]"
        >
          <div className="flex min-w-0 items-center gap-2">
            <span className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
              {i.c}
            </span>
            <span className="truncate text-foreground/90">
              {i.n} · <span className="text-muted-foreground">{i.t}</span>
            </span>
          </div>
          <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{i.when}</span>
        </li>
      ))}
    </ul>
  );
}

function InventoryList() {
  const rows = [
    ["Skyline Tower", "2BHK · 18F", "Available"],
    ["Marq Verde", "3BHK · 12F", "3 left"],
    ["Orion Bay", "4BHK · Duplex", "1 left"],
    ["Aster Vista", "Commercial", "Available"],
  ];
  return (
    <ul className="space-y-2">
      {rows.map(([p, t, s]) => (
        <li
          key={p}
          className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-2.5 py-2 text-[11px]"
        >
          <div>
            <div className="text-foreground/90">{p}</div>
            <div className="font-mono text-[9.5px] text-muted-foreground">{t}</div>
          </div>
          <span
            className={`text-[10px] ${
              s === "Sold"
                ? "text-muted-foreground"
                : s.includes("left")
                  ? "text-foreground"
                  : "text-emerald"
            }`}
          >
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}
