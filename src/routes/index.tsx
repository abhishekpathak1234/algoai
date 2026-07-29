import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  PhoneCall,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Users,
  Check,
  Briefcase,
  Megaphone,
  Database,
  Wallet,
  HeartHandshake,
  Cog,
  Crown,
  Activity,
  Circle,
  Layers,
  Play,
  MessageSquare,
  CalendarCheck,
  FileText,
  Bot,
  Radio,
  Send,
  Home,
  LineChart,
  Signal,
  Lock,
  KeyRound,
  ScrollText,
  Cloud,
  Fingerprint,
  Plus,
  Star,
  ChevronRight,
  Clock,
  PhoneMissed,
} from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Algo Realty — AI Workforce for Real Estate" },
      {
        name: "description",
        content:
          "Deploy AI Employees across sales, telecalling, CRM, marketing, support, collections and operations. Increase revenue, reduce lead leakage and scale without adding headcount.",
      },
      { property: "og:title", content: "Algo Realty — AI Workforce for Real Estate" },
      {
        property: "og:description",
        content:
          "An AI Workforce for real estate developers, brokerages and enterprises — deployed across every department.",
      },
    ],
  }),
  component: LandingPage,
});

/* =========================================================
   PRIMITIVES
   ========================================================= */

function useCountUp(target: number, duration = 1800) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(target * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, value: v };
}

function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = "number",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "number" | "compact";
  className?: string;
}) {
  const { ref, value: v } = useCountUp(value);
  const shown =
    format === "compact"
      ? new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(v)
      : v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
      </span>
      {children}
    </div>
  );
}

function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-emerald">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
      </span>
      Live
    </span>
  );
}

/* =========================================================
   PAGE BACKDROP (noise + faint grid + soft glows)
   ========================================================= */

function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-page absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}

/* =========================================================
   NAV — floating pill, glass, refined
   ========================================================= */
function Nav() {
  const items = ["Solutions", "AI Employees", "Industries", "Integrations", "Pricing", "Resources", "Company"];
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-5 max-w-[1180px] px-6">
        <div className="glass-strong flex items-center justify-between gap-6 rounded-full px-4 py-2 pr-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]">
          <a href="#top" className="flex items-center pl-2 mr-6" aria-label="Algo Realty home">
            <BrandLogo variant="header" />
          </a>
          <nav className="hidden items-center gap-8 text-[12.5px] text-muted-foreground md:flex">
            {items.map((i) => (
              <a
                key={i}
                href="#"
                className="relative transition hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signature after:transition-all hover:after:w-full"
              >
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#demo"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[12.5px] font-medium text-background transition hover:brightness-95"
          >
            Book Demo
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   HERO — cinematic split; floating operator windows on right
   ========================================================= */
function Hero() {
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
            Deploy AI Employees across sales, telecalling, CRM, marketing,
            customer support, collections and operations. Increase revenue,
            reduce lead leakage, recover lost sales and scale without adding
            headcount.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-[13px] font-medium text-background transition hover:brightness-95"
            >
              <span className="relative z-10">Book Enterprise Demo</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#workforce"
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/40 px-5 py-3.5 text-[13px] font-medium text-foreground transition hover:border-border-strong hover:bg-surface"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-signature">
                <Play className="h-3 w-3 translate-x-[1px] fill-background text-background" strokeWidth={0} />
              </span>
              Watch AI Workforce
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" strokeWidth={0} />
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
      {/* soft ambient glow */}
      <div className="absolute inset-6 rounded-[36px] bg-signature-soft blur-3xl" />
      {/* connection lines */}
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

      {/* Live call */}
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
            const h = 4 + Math.abs(Math.sin(i * 0.55)) * 26;
            return <rect key={i} x={i * 5} y={20 - h / 2} width="2" height={h} rx="1" fill="currentColor" opacity={0.85} />;
          })}
        </svg>
        <div className="mt-2 font-mono text-[10px] text-muted-foreground">00:03 · Handled in 3.2s</div>
      </div>

      {/* Command terminal (center) */}
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
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Today's Revenue</div>
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

      {/* Site visit booked */}
      <div className="glass-strong absolute left-6 top-[340px] w-[230px] rounded-[20px] p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background">
            <CalendarCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11.5px] font-medium">Site visit booked</div>
            <div className="font-mono text-[10px] text-muted-foreground">Sat 4:30pm · Skyline Tower</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div
              key={i}
              className={`grid h-7 place-items-center rounded-md text-[9.5px] ${
                i === 5 ? "bg-signature text-background" : "border border-border text-muted-foreground"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp thread */}
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

      {/* AI Employees strip */}
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
                abbr === "+5" ? "bg-surface text-muted-foreground" : "bg-signature-soft text-foreground"
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

/* =========================================================
   TRUST BAR — marquee
   ========================================================= */
function Trust() {
  const groups = [
    "Residential Developers",
    "Commercial Developers",
    "Luxury Builders",
    "Brokerages",
    "Property Management",
    "Channel Partners",
    "Enterprise Sales Teams",
  ];
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mb-8 text-center text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Trusted by
        </div>
        <div className="mask-fade-edges relative flex items-center gap-16 overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-16 will-change-transform [animation:marquee_38s_linear_infinite]">
            {[...groups, ...groups].map((g, i) => (
              <span
                key={i}
                className="font-display text-[22px] tracking-tight text-muted-foreground/70"
              >
                {g}
                <span className="ml-16 text-border-strong">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* =========================================================
   COST OF DELAY — editorial vertical
   ========================================================= */
const costs = [
  { Icon: Clock, t: "Slow Response", d: "Leads expect responses within minutes. Delayed follow-up reduces conversion opportunities." },
  { Icon: TrendingUp, t: "Lead Leakage", d: "Marketing generates demand. Sales loses it in the handoff." },
  { Icon: Database, t: "Manual CRM", d: "Teams spend hours updating CRM instead of selling." },
  { Icon: PhoneMissed, t: "Missed Calls", d: "Every unanswered inquiry may represent a lost opportunity." },
  { Icon: CalendarCheck, t: "Site Visits", d: "Scheduling and confirmation delays reduce attendance." },
  { Icon: Wallet, t: "Collections", d: "Manual payment reminders increase operational effort." },
];

function CostOfDelay() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>The Cost of Delay</Eyebrow>
            <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
              Every Minute
              <br />
              Costs Revenue.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Real estate companies spend millions generating demand. Most revenue is lost after the lead arrives.
            </p>
          </div>

          <ol className="relative">
            <div className="absolute left-[62px] top-0 h-full w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />
            {costs.map(({ Icon, t, d }, i) => (
              <li key={t} className="relative grid grid-cols-[80px_1fr] items-start gap-8 border-b border-border py-10 last:border-0">
                <div className="flex flex-col items-center gap-3">
                  <div className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface backdrop-blur">
                    <Icon className="h-4 w-4 text-foreground/85" />
                  </div>
                </div>
                <div>
                  <div className="font-display text-[30px] font-medium leading-tight tracking-[-0.02em] md:text-[36px]">
                    {t}
                  </div>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI WORKFORCE — neural topology + editorial employee grid
   ========================================================= */
const departments = [
  { dept: "Sales", Icon: Briefcase, employees: ["AI Sales Executive", "AI SDR", "AI Telecaller"] },
  { dept: "Marketing", Icon: Megaphone, employees: ["AI Campaign Manager", "AI Lead Intelligence"] },
  { dept: "CRM", Icon: Database, employees: ["AI CRM Executive"] },
  { dept: "Operations", Icon: Cog, employees: ["AI Site Visit Coordinator", "Inventory Assistant"] },
  { dept: "Finance", Icon: Wallet, employees: ["AI Collections Executive"] },
  { dept: "Customer Success", Icon: HeartHandshake, employees: ["AI Support Executive"] },
  { dept: "Leadership", Icon: Crown, employees: ["AI Revenue Intelligence"] },
] as const;

function WorkforceOrg() {
  return (
    <section id="workforce" className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>AI Workforce</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[68px]">
            Meet Your <span className="text-signature">AI Workforce.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Every department gets specialized AI Employees — trained on your projects, pricing, playbooks and inventory.
          </p>
        </div>

        {/* Neural topology */}
        <WorkforceTopology />

        {/* Employee cards — asymmetric bento */}
        <div className="mt-24 grid gap-4 md:grid-cols-6">
          {employeeCards.map((c, i) => {
            const featured = i === 0;
            const span = featured ? "md:col-span-3 md:row-span-2" : "md:col-span-2";
            return <EmployeeCard key={c.name} {...c} featured={featured} className={span} />;
          })}
        </div>
      </div>
    </section>
  );
}

function WorkforceTopology() {
  const W = 1120;
  const H = 480;
  const cx = W / 2;
  const cy = 80;
  const arcY = 380;
  return (
    <div className="relative mt-20 overflow-hidden rounded-[28px] border border-border bg-surface/40 p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-40 blur-3xl" />
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <defs>
            <linearGradient id="dept-line" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
            <radialGradient id="node-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* connections */}
          {departments.map((_, i) => {
            const t = (i + 0.5) / departments.length;
            const x = 80 + (W - 160) * t;
            return (
              <g key={i}>
                <path
                  d={`M ${cx} ${cy + 32} C ${cx} ${cy + 160}, ${x} ${arcY - 160}, ${x} ${arcY - 32}`}
                  stroke="url(#dept-line)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="3 5"
                />
                <circle r="2.5" fill="#ec4899">
                  <animateMotion
                    dur={`${4 + i * 0.4}s`}
                    repeatCount="indefinite"
                    path={`M ${cx} ${cy + 32} C ${cx} ${cy + 160}, ${x} ${arcY - 160}, ${x} ${arcY - 32}`}
                  />
                </circle>
              </g>
            );
          })}

          {/* CEO node glow */}
          <circle cx={cx} cy={cy} r="90" fill="url(#node-glow)" />
        </svg>

        {/* CEO node overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: "50%", top: `${(cy / H) * 100}%` }}
          >
            <div className="glass-strong flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-[var(--shadow-card)]">
              <div className="grid h-6 w-6 place-items-center rounded-full bg-signature">
                <Crown className="h-3.5 w-3.5 text-background" />
              </div>
              <div className="font-display text-[13px]">CEO · Human Leadership</div>
            </div>
          </div>

          {/* Department nodes */}
          {departments.map(({ dept, Icon, employees }, i) => {
            const t = (i + 0.5) / departments.length;
            const x = 80 + (W - 160) * t;
            return (
              <div
                key={dept}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(x / W) * 100}%`, top: `${(arcY / H) * 100}%` }}
              >
                <div className="glass-strong flex w-[150px] flex-col items-center gap-2 rounded-2xl px-3 py-3 text-center shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-2">
                    <div className="grid h-6 w-6 place-items-center rounded-md border border-border bg-background/80">
                      <Icon className="h-3.5 w-3.5 text-foreground/85" />
                    </div>
                    <div className="font-display text-[12.5px]">{dept}</div>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {employees.length} AI · Live
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const employeeCards = [
  {
    name: "AI Sales Executive",
    dept: "Sales",
    Icon: Briefcase,
    bullets: ["Qualifies buyers", "Answers pricing", "Books meetings", "Recommends inventory"],
  },
  { name: "AI Telecaller", dept: "Sales", Icon: PhoneCall, bullets: ["Inbound calls", "Outbound campaigns", "Lead nurturing", "Appointment reminders"] },
  { name: "AI WhatsApp Executive", dept: "Marketing", Icon: MessageSquare, bullets: ["Instant replies", "Media sharing", "Brochures & floor plans", "Payment links"] },
  { name: "AI CRM Executive", dept: "CRM", Icon: Database, bullets: ["Updates CRM automatically", "Assigns leads", "Maintains pipeline", "Tracks every interaction"] },
  { name: "AI Site Visit Coordinator", dept: "Operations", Icon: CalendarCheck, bullets: ["Schedules visits", "Coordinates sales staff", "Reschedules automatically", "Collects feedback"] },
  { name: "AI Customer Success", dept: "Success", Icon: HeartHandshake, bullets: ["Construction updates", "Possession queries", "Documentation", "Support"] },
  { name: "AI Collections Executive", dept: "Finance", Icon: Wallet, bullets: ["Payment reminders", "Outstanding tracking", "Receipt confirmations", "Follow-ups"] },
  { name: "AI Marketing Analyst", dept: "Marketing", Icon: LineChart, bullets: ["Campaign analytics", "Lead quality", "ROI insights", "Budget optimization"] },
  { name: "AI Revenue Intelligence", dept: "Leadership", Icon: BarChart3, bullets: ["Forecasting", "Conversion analysis", "Revenue prediction", "Pipeline health"] },
] as const;

function EmployeeCard({
  name,
  dept,
  Icon,
  bullets,
  featured,
  className = "",
}: (typeof employeeCards)[number] & { featured?: boolean; className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-border bg-card p-6 transition hover:border-border-strong ${className}`}
    >
      {featured && (
        <div className="pointer-events-none absolute -inset-24 -z-0 bg-signature-soft opacity-60 blur-3xl" />
      )}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px hairline" />
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground/85">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display text-[16px] leading-tight">{name}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{dept}</div>
          </div>
        </div>
        <LiveDot />
      </div>
      {featured ? (
        <>
          <div className="relative mt-8 font-display text-[40px] font-medium leading-[1] tracking-[-0.03em]">
            Deployed across
            <br />
            <span className="text-signature">every conversation.</span>
          </div>
          <ul className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-[13.5px]">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-foreground/85">
                <Check className="h-3.5 w-3.5 text-emerald" /> {b}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="relative mt-6 space-y-2 text-[13px]">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-foreground/85">
              <Check className="h-3.5 w-3.5 text-emerald" /> {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================================================
   COMMAND CENTER — asymmetric bento terminal
   ========================================================= */
function CommandCenter() {
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
            A Bloomberg-grade command center for revenue, bookings, pipeline, calls, conversations and the AI Workforce operating your business.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] border border-border bg-surface/40 shadow-[var(--shadow-card)]">
          {/* Terminal header */}
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

          {/* Bento grid */}
          <div className="grid gap-px bg-border p-px md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
            {/* Big revenue tile */}
            <div className="bg-card p-8 md:col-span-4 md:row-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Pipeline Managed</div>
                  <div className="mt-4 font-mono text-[72px] font-medium leading-none tracking-tight">
                    <Counter value={128_400_000} prefix="$" format="compact" />
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-emerald">▲ +38% vs LQ</div>
                </div>
                <div className="hidden text-right md:block">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Revenue Influenced</div>
                  <div className="mt-2 font-mono text-2xl">
                    <Counter value={18_700_000} prefix="$" format="compact" />
                  </div>
                </div>
              </div>
              <BigChart />
            </div>

            {/* Right column stack */}
            <div className="grid gap-px bg-border md:col-span-2 md:row-span-2">
              {[
                { l: "Collections", v: 4_200_000, m: "compact", pref: "$" },
                { l: "Calls Processed", v: 1_200_000, m: "compact" },
                { l: "Meetings", v: 185_000, m: "compact" },
                { l: "Site Visits", v: 72_000, m: "compact" },
              ].map((k) => (
                <div key={k.l} className="bg-card p-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
                  <div className="mt-2 font-mono text-2xl">
                    <Counter value={k.v} prefix={k.pref ?? ""} format="compact" />
                  </div>
                  <MiniSpark />
                </div>
              ))}
            </div>

            {/* Bottom widgets */}
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
      <path d="M0,20 L15,18 L30,14 L45,15 L60,8 L75,10 L90,4 L100,2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Widget({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
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
              s === "Sold" ? "text-muted-foreground" : s.includes("left") ? "text-foreground" : "text-emerald"
            }`}
          >
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* =========================================================
   WORKFLOW — horizontal animated timeline
   ========================================================= */
const workflow = [
  { t: "Lead Captured", Icon: Radio },
  { t: "AI Answers", Icon: Bot },
  { t: "Buyer Qualified", Icon: Check },
  { t: "CRM Updated", Icon: Database },
  { t: "Sales Assigned", Icon: Users },
  { t: "Meeting Booked", Icon: CalendarCheck },
  { t: "Site Visit", Icon: Home },
  { t: "Follow-up", Icon: Send },
  { t: "Booking", Icon: FileText },
  { t: "Collections", Icon: Wallet },
  { t: "Customer Success", Icon: HeartHandshake },
];

function Workflow() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="max-w-2xl">
          <Eyebrow>Workflow</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[68px]">
            From first inquiry
            <br />
            to final handover —<br />
            <span className="text-signature">automated.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            A single orchestrated flow across every department. Humans stay in the loop where it matters most.
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[28px] border border-border bg-surface/40 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-40 blur-3xl" />
          <div className="relative">
            {/* rail */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-[26px] h-px bg-border" />
              <div className="absolute left-0 top-[26px] h-px w-full overflow-hidden">
                <div className="h-full w-1/2 bg-signature [animation:sweep_4s_linear_infinite]" />
              </div>
              <div className="grid grid-cols-4 gap-y-10 md:grid-cols-6 lg:grid-cols-11">
                {workflow.map((s, i) => (
                  <div key={s.t} className="flex flex-col items-center text-center">
                    <div className="relative grid h-[52px] w-[52px] place-items-center">
                      <div className="absolute inset-0 rounded-full border border-border bg-background" />
                      <div
                        className={`relative grid h-9 w-9 place-items-center rounded-full border border-border-strong ${
                          i < 3 ? "bg-signature text-background" : "bg-surface text-foreground/70"
                        }`}
                      >
                        <s.Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-4 font-mono text-[9.5px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 max-w-[100px] font-display text-[12px] leading-snug">
                      {s.t}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }`}</style>
    </section>
  );
}

/* =========================================================
   ROI — hero-number moment
   ========================================================= */
const roi = [
  { l: "Revenue Pipeline", v: 42_000_000 },
  { l: "Annual Payroll Savings", v: 1_800_000 },
  { l: "Recovered Revenue", v: 8_400_000 },
  { l: "Collections", v: 3_100_000 },
  { l: "Operational Savings", v: 920_000 },
  { l: "Marketing Optimization", v: 2_400_000 },
];

function ROI() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>ROI</Eyebrow>
            <h2 className="mt-6 font-display text-[56px] font-medium leading-[0.95] tracking-[-0.04em] md:text-[72px]">
              Recover Revenue.
              <br />
              <span className="text-signature">Not Just Costs.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Illustrative outcomes modeled from enterprise deployments across developers and brokerages.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-signature-soft opacity-70 blur-3xl" />
            <div className="glass-strong relative overflow-hidden rounded-[28px] p-10 shadow-[var(--shadow-card)]">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {roi[0].l}
              </div>
              <div className="mt-4 font-mono text-[92px] font-medium leading-none tracking-[-0.04em] text-signature">
                <Counter value={roi[0].v} prefix="$" format="compact" />
              </div>
              <div className="mt-6 h-px hairline" />
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {roi.slice(1).map((r) => (
                  <div key={r.l}>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {r.l}
                    </div>
                    <div className="mt-1.5 font-mono text-2xl">
                      <Counter value={r.v} prefix="$" format="compact" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY — dual portrait comparison
   ========================================================= */
const comparison: Array<[string, string, string]> = [
  ["Working Hours", "8", "24/7"],
  ["Response", "Minutes", "Seconds"],
  ["CRM", "Manual", "Automatic"],
  ["Follow-up", "Missed", "Always"],
  ["Languages", "Limited", "Multi-language"],
  ["Scalability", "Hire More", "Deploy More AI"],
];

function Why() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Algo Realty</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
            A workforce that
            <br />
            outperforms — by design.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Traditional Team */}
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface">
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-display text-[18px]">Traditional Team</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Yesterday</div>
                </div>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-widest text-muted-foreground">
                Baseline
              </span>
            </div>
            <div className="mt-10 divide-y divide-border">
              {comparison.map(([k, a]) => (
                <div key={k} className="flex items-baseline justify-between py-4">
                  <span className="text-[11.5px] uppercase tracking-widest text-muted-foreground">{k}</span>
                  <span className="font-display text-2xl text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Workforce */}
          <div className="relative overflow-hidden rounded-[28px] p-[1px]">
            <div className="absolute inset-0 bg-signature opacity-90" />
            <div className="relative rounded-[27px] bg-card p-10">
              <div className="pointer-events-none absolute -inset-24 -z-0 bg-signature-soft opacity-70 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-signature">
                    <Bot className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <div className="font-display text-[18px]">AI Workforce</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Today</div>
                  </div>
                </div>
                <LiveDot />
              </div>
              <div className="relative mt-10 divide-y divide-border">
                {comparison.map(([k, , b]) => (
                  <div key={k} className="flex items-baseline justify-between py-4">
                    <span className="text-[11.5px] uppercase tracking-widest text-muted-foreground">{k}</span>
                    <span className="font-display text-2xl text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INTEGRATIONS — constellation
   ========================================================= */
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

function Integrations() {
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
          {/* rings */}
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

          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="glass-strong grid h-24 w-24 place-items-center rounded-full shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-signature">
                <Layers className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* nodes */}
          {integrations.map((i, idx) => {
            const angle = (idx / integrations.length) * Math.PI * 2 - Math.PI / 2;
            const ring = 140 + (idx % 3) * 100;
            // svg viewBox is 1000x620; convert ring offset to % of container
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

/* =========================================================
   CASE STUDY — magazine spread
   ========================================================= */
function CaseStudy() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Case Study</Eyebrow>
            <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[64px]">
              Before AI.
              <br />
              <span className="text-signature">After AI.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Illustrative outcomes from a multi-city developer deployment. Demo data shown for illustration.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface font-mono text-[12px]">
                MD
              </div>
              <div>
                <div className="font-display text-[16px]">Marq Developers</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  4 cities · 12 projects · Enterprise
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-border bg-card">
            <div className="grid gap-px bg-border md:grid-cols-2">
              {/* Before */}
              <div className="bg-card p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Before AI</span>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-widest text-muted-foreground">
                    Illustrative
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ["Avg. Response", "42 min"],
                    ["Lead-to-Visit", "6.4%"],
                    ["Monthly Bookings", "84"],
                    ["Collections In-Quarter", "68%"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between border-b border-border pb-3 last:border-0">
                      <span className="text-[13px] text-muted-foreground">{k}</span>
                      <span className="font-mono text-[18px] text-muted-foreground">{v}</span>
                    </div>
                  ))}
                </div>
                <BeforeChart />
              </div>
              {/* After */}
              <div className="relative bg-card p-8">
                <div className="pointer-events-none absolute -inset-24 bg-signature-soft opacity-50 blur-3xl" />
                <div className="relative flex items-center gap-2 text-[10px] uppercase tracking-widest text-signature">
                  After AI <ChevronRight className="h-3 w-3" />
                </div>
                <div className="relative mt-6 space-y-4">
                  {[
                    ["Avg. Response", "3.8 sec", "+660×"],
                    ["Lead-to-Visit", "21.7%", "+3.4×"],
                    ["Monthly Bookings", "268", "+218%"],
                    ["Collections In-Quarter", "92%", "+24pt"],
                  ].map(([k, v, d]) => (
                    <div key={k} className="flex items-baseline justify-between border-b border-border pb-3 last:border-0">
                      <span className="text-[13px] text-muted-foreground">{k}</span>
                      <span className="flex items-center gap-2 font-mono text-[18px]">
                        {v}
                        <span className="rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[9.5px] text-emerald">
                          {d}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <AfterChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeChart() {
  return (
    <svg viewBox="0 0 400 100" className="mt-8 h-24 w-full">
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,70 C40,68 80,72 120,66 C160,60 200,64 240,58 C280,54 320,58 360,52 L400,50"
        fill="none"
        stroke="#6b6f78"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function AfterChart() {
  return (
    <svg viewBox="0 0 400 100" className="relative mt-8 h-24 w-full">
      <defs>
        <linearGradient id="afterg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,80 C40,72 80,66 120,58 C160,48 200,52 240,38 C280,26 320,30 360,16 L400,8 L400,100 L0,100 Z"
        fill="url(#afterg)"
      />
      <path
        d="M0,80 C40,72 80,66 120,58 C160,48 200,52 240,38 C280,26 320,30 360,16 L400,8"
        fill="none"
        stroke="#ec4899"
        strokeWidth="1.8"
      />
    </svg>
  );
}

/* =========================================================
   SECURITY — typographic manifest
   ========================================================= */
const security = [
  { Icon: ShieldCheck, t: "SOC 2 Ready", d: "Audited controls & continuous monitoring." },
  { Icon: Lock, t: "Enterprise Encryption", d: "At rest and in transit — AES-256, TLS 1.3." },
  { Icon: KeyRound, t: "Role Based Access", d: "Granular controls across departments." },
  { Icon: ScrollText, t: "Audit Logs", d: "Every AI action logged and replayable." },
  { Icon: Cloud, t: "Cloud Infrastructure", d: "Regional deployments with 99.99% SLA." },
  { Icon: Fingerprint, t: "Enterprise Auth", d: "SSO, SAML, SCIM, MFA — out of the box." },
];

function Security() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Security</Eyebrow>
            <h2 className="mt-6 font-display text-[48px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[60px]">
              Deployed with the
              <br />
              security your board
              <br />
              <span className="text-signature">demands.</span>
            </h2>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {security.map(({ Icon, t, d }) => (
              <li key={t} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface">
                  <Icon className="h-4 w-4 text-foreground/85" />
                </div>
                <div>
                  <div className="font-display text-[22px] leading-tight">{t}</div>
                  <div className="mt-1 text-[13.5px] text-muted-foreground">{d}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ — hairline accordion
   ========================================================= */
const faqs = [
  { q: "How quickly can AI respond to leads?", a: "AI Employees respond in under 4 seconds across WhatsApp, calls, and web chat — 24/7, in multiple languages." },
  { q: "Can AI integrate with our CRM?", a: "Yes. Algo Realty connects natively with Salesforce, HubSpot, LeadSquared, Zoho and custom CRMs — with two-way sync." },
  { q: "Can AI qualify buyers?", a: "AI SDRs qualify on budget, timeline, locality and intent — routing hot buyers to sales in real time." },
  { q: "Can AI schedule site visits?", a: "AI Coordinators book visits into your calendars, confirm attendance, and reschedule no-shows automatically." },
  { q: "Can AI handle multilingual conversations?", a: "Yes — 20+ languages including English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali and Gujarati." },
  { q: "Can AI automate follow-ups?", a: "Behavior-based sequences follow up until a decision is made — with human handoff on high intent." },
  { q: "Can AI assist with collections?", a: "AI Collections Executives send reminders, confirm receipts and escalate on overdue balances." },
  { q: "Can AI support multiple projects?", a: "Deploy separate AI Employees per project or share a workforce across your entire portfolio." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.6fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-[48px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[60px]">
              Answers for
              <br />
              enterprise buyers.
            </h2>
          </div>
          <ul>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-6 text-left transition"
                  >
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[20px] leading-tight md:text-[22px]">{f.q}</span>
                    <Plus
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-foreground" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="ml-[38px] max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA — typographic moment
   ========================================================= */
function CTA() {
  return (
    <section id="demo" className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-surface/40 px-6 py-24 text-center md:px-16 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-40 -z-0 h-[500px] bg-signature opacity-20 blur-[120px]" />
          <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="relative">
            <Eyebrow>Enterprise Demo</Eyebrow>
            <h2 className="mt-8 font-display text-[56px] font-medium leading-[0.94] tracking-[-0.045em] md:text-[92px] lg:text-[112px]">
              Stop Hiring.
              <br />
              <span className="text-signature">Start Deploying AI Employees.</span>
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[13.5px] font-medium text-background transition hover:brightness-95"
              >
                Book Enterprise Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#workforce"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-[13.5px] font-medium text-foreground transition hover:border-border-strong hover:bg-background"
              >
                Explore AI Workforce
              </a>
            </div>
            <p className="mt-8 text-[12.5px] text-muted-foreground">
              Deploy your first AI Workforce in weeks — not months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */
function Footer() {
  const cols = [
    { t: "Products", i: ["AlgoBridge", "Algo Realty", "Algo Auto", "Algo Easy"] },
    { t: "Solutions", i: ["AI Employees", "Command Center", "Integrations", "Workflow"] },
    { t: "Resources", i: ["Blog", "Case Studies", "Pricing", "Security"] },
    { t: "Company", i: ["About", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-[1220px] px-6 py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              AI Workforce for Real Estate. A product by AlgoBridge — deployed across leading developers, brokerages and enterprises worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.t}>
                <div className="text-[10.5px] uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <ul className="mt-5 space-y-2.5 text-[13.5px]">
                  {c.i.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-foreground/80 transition hover:text-foreground">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-[11.5px] text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Algo Realty · An AlgoBridge Company</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
   ========================================================= */
function LandingPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <PageBackdrop />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <CostOfDelay />
        <WorkforceOrg />
        <CommandCenter />
        <Workflow />
        <ROI />
        <Why />
        <Integrations />
        <CaseStudy />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
