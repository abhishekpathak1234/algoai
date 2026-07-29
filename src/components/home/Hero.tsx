import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  MessageSquare,
  PhoneCall,
  Play,
  Star,
} from "lucide-react";
import { Counter, LiveDot } from "@/components/home/primitives";
import { CTA_SEE_IN_ACTION } from "@/lib/contact";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-signature opacity-[0.15] blur-[120px]" />
      <div className="mx-auto grid max-w-[1220px] items-center gap-20 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] backdrop-blur">
            <span className="text-muted-foreground">An AlgoBridge Company</span>
            <span className="h-3 w-px bg-border-strong" />
            <span className="flex items-center gap-1.5 font-medium">
              Introducing AI Workforce v2
              <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
            </span>
          </div>
          <h1 className="mt-8 font-display text-[56px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[76px] lg:text-[88px]">
            Every Lead.
            <br />
            Every Call.
            <br />
            Every Follow-up.
            <br />
            Every Booking.
            <br />
            <span className="text-signature">Handled by AI.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[16.5px] leading-[1.65] text-muted-foreground">
            Deploy AI Employees across sales, telecalling, CRM, marketing, customer support,
            collections and operations. Increase revenue, reduce lead leakage, recover lost sales
            and scale without adding headcount.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition hover:brightness-95"
            >
              <span className="relative z-10">{CTA_SEE_IN_ACTION}</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#workforce"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/40 px-5 py-3.5 text-[13px] font-medium text-foreground transition hover:border-border-strong hover:bg-surface"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-signature">
                <Play
                  className="h-3 w-3 translate-x-[1px] fill-background text-background"
                  strokeWidth={0}
                />
              </span>
              Watch AI Workforce
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-foreground text-foreground"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span>Trusted by Developers, Builders, Brokerages and Enterprise Sales Teams.</span>
          </div>
        </div>

        <HeroConstellation />
      </div>
    </section>
  );
}

function HeroConstellation() {
  return (
    <div className="relative h-[620px] w-full">
      <div className="absolute inset-6 rounded-[36px] bg-signature-soft blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 620" fill="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <path d="M120 140 C 220 200, 260 220, 340 190" stroke="url(#line)" strokeDasharray="2 4" />
        <path d="M340 190 C 380 260, 300 320, 240 340" stroke="url(#line)" strokeDasharray="2 4" />
        <path d="M240 340 C 160 380, 200 460, 300 470" stroke="url(#line)" strokeDasharray="2 4" />
        <path d="M300 470 C 380 470, 420 400, 400 320" stroke="url(#line)" strokeDasharray="2 4" />
      </svg>

      <div className="glass-strong absolute left-0 top-6 w-[240px] rounded-[20px] p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald/10 text-emerald">
              <PhoneCall className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[11.5px] font-medium">Inbound call</div>
              <div className="font-mono text-[10px] text-muted-foreground">Aria · Sales</div>
            </div>
          </div>
          <LiveDot />
        </div>
        <svg viewBox="0 0 200 40" className="mt-3 h-9 w-full text-emerald">
          {Array.from({ length: 40 }).map((_, i) => {
            const h = Math.round((4 + Math.abs(Math.sin(i * 0.55)) * 26) * 100) / 100;
            return (
              <rect
                key={i}
                x={i * 5}
                y={Math.round((20 - h / 2) * 100) / 100}
                width="2"
                height={h}
                rx="1"
                fill="currentColor"
                opacity={0.85}
              />
            );
          })}
        </svg>
        <div className="mt-2 font-mono text-[10px] text-muted-foreground">
          00:03 · Handled in 3.2s
        </div>
      </div>

      <div className="glass-strong absolute right-0 top-24 w-[300px] rounded-[22px] shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-border-strong" />
              <span className="h-2 w-2 rounded-full bg-border-strong" />
              <span className="h-2 w-2 rounded-full bg-border-strong" />
            </div>
            <span className="ml-1">command-center</span>
          </div>
          <LiveDot />
        </div>
        <div className="p-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Today's Revenue
          </div>
          <div className="mt-1.5 font-mono text-[34px] font-medium leading-none tracking-tight">
            <Counter value={842750} prefix="$" />
          </div>
          <svg viewBox="0 0 260 60" className="mt-3 h-14 w-full">
            <defs>
              <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,45 C30,42 55,38 90,32 C130,26 160,30 195,20 C220,14 240,18 260,10 L260,60 L0,60 Z"
              fill="url(#rev)"
            />
            <path
              d="M0,45 C30,42 55,38 90,32 C130,26 160,30 195,20 C220,14 240,18 260,10"
              fill="none"
              stroke="#ec4899"
              strokeWidth="1.6"
            />
          </svg>
          <div className="mt-2 grid grid-cols-3 gap-3 border-t border-border pt-3 text-[10px]">
            <div>
              <div className="uppercase tracking-widest text-muted-foreground">Pipeline</div>
              <div className="mt-1 font-mono text-[13px]">$18.7M</div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-muted-foreground">Buyers</div>
              <div className="mt-1 font-mono text-[13px]">
                <Counter value={487} />
              </div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-muted-foreground">Visits</div>
              <div className="mt-1 font-mono text-[13px]">118</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-strong absolute left-6 top-[340px] w-[230px] rounded-[20px] p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background">
            <CalendarCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11.5px] font-medium">Site visit booked</div>
            <div className="font-mono text-[10px] text-muted-foreground">
              Sat 4:30pm · Skyline Tower
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div
              key={i}
              className={`grid h-7 place-items-center rounded-md text-[9.5px] ${
                i === 5
                  ? "bg-signature text-background"
                  : "border border-border text-muted-foreground"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="glass-strong absolute right-8 top-[380px] w-[260px] rounded-[20px] p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-emerald/10 text-emerald">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
            <div className="text-[11.5px] font-medium">Priya S. · WhatsApp</div>
          </div>
          <span className="font-mono text-[9.5px] text-muted-foreground">2s</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface px-3 py-2 text-[11px] text-foreground/90">
            Is the 3BHK available?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-signature px-3 py-2 text-[11px] text-background">
            Yes — 4 units on the 12–18F. Sending floor plan now.
          </div>
        </div>
      </div>

      <div className="glass-strong absolute bottom-0 left-1/2 w-[340px] -translate-x-1/2 rounded-[20px] p-3.5 shadow-[var(--shadow-card)]">
        <div className="mb-3 flex items-center justify-between px-1">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            AI Employees Online
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            <Counter value={11} /> Active
          </span>
        </div>
        <div className="flex items-center -space-x-2">
          {[
            ["AR", "Aria"],
            ["NO", "Nova"],
            ["OR", "Orion"],
            ["VG", "Vega"],
            ["LY", "Lyra"],
            ["AT", "Atlas"],
            ["+5", ""],
          ].map(([abbr, n], i) => (
            <div
              key={i}
              className={`grid h-9 w-9 place-items-center rounded-full border-2 border-background font-mono text-[10px] ${
                abbr === "+5"
                  ? "bg-surface text-muted-foreground"
                  : "bg-signature-soft text-foreground"
              }`}
              title={n}
            >
              {abbr}
            </div>
          ))}
          <div className="ml-auto flex items-center gap-1.5 pl-3 text-[10px] text-emerald">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            99.99% Health
          </div>
        </div>
      </div>
    </div>
  );
}
