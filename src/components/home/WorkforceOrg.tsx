import {
  BarChart3,
  Briefcase,
  CalendarCheck,
  Check,
  Cog,
  Crown,
  Database,
  HeartHandshake,
  LineChart,
  Megaphone,
  MessageSquare,
  PhoneCall,
  Wallet,
} from "lucide-react";
import { Eyebrow, LiveDot } from "@/components/home/primitives";

const departments = [
  { dept: "Sales", Icon: Briefcase, employees: ["AI Sales Executive", "AI SDR", "AI Telecaller"] },
  {
    dept: "Marketing",
    Icon: Megaphone,
    employees: ["AI Campaign Manager", "AI Lead Intelligence"],
  },
  { dept: "CRM", Icon: Database, employees: ["AI CRM Executive"] },
  {
    dept: "Operations",
    Icon: Cog,
    employees: ["AI Site Visit Coordinator", "Inventory Assistant"],
  },
  { dept: "Finance", Icon: Wallet, employees: ["AI Collections Executive"] },
  { dept: "Customer Success", Icon: HeartHandshake, employees: ["AI Support Executive"] },
  { dept: "Leadership", Icon: Crown, employees: ["AI Revenue Intelligence"] },
] as const;

const employeeCards = [
  {
    name: "AI Sales Executive",
    dept: "Sales",
    Icon: Briefcase,
    bullets: ["Qualifies buyers", "Answers pricing", "Books meetings", "Recommends inventory"],
  },
  {
    name: "AI Telecaller",
    dept: "Sales",
    Icon: PhoneCall,
    bullets: ["Inbound calls", "Outbound campaigns", "Lead nurturing", "Appointment reminders"],
  },
  {
    name: "AI WhatsApp Executive",
    dept: "Marketing",
    Icon: MessageSquare,
    bullets: ["Instant replies", "Media sharing", "Brochures & floor plans", "Payment links"],
  },
  {
    name: "AI CRM Executive",
    dept: "CRM",
    Icon: Database,
    bullets: [
      "Updates CRM automatically",
      "Assigns leads",
      "Maintains pipeline",
      "Tracks every interaction",
    ],
  },
  {
    name: "AI Site Visit Coordinator",
    dept: "Operations",
    Icon: CalendarCheck,
    bullets: [
      "Schedules visits",
      "Coordinates sales staff",
      "Reschedules automatically",
      "Collects feedback",
    ],
  },
  {
    name: "AI Customer Success",
    dept: "Success",
    Icon: HeartHandshake,
    bullets: ["Construction updates", "Possession queries", "Documentation", "Support"],
  },
  {
    name: "AI Collections Executive",
    dept: "Finance",
    Icon: Wallet,
    bullets: ["Payment reminders", "Outstanding tracking", "Receipt confirmations", "Follow-ups"],
  },
  {
    name: "AI Marketing Analyst",
    dept: "Marketing",
    Icon: LineChart,
    bullets: ["Campaign analytics", "Lead quality", "ROI insights", "Budget optimization"],
  },
  {
    name: "AI Revenue Intelligence",
    dept: "Leadership",
    Icon: BarChart3,
    bullets: ["Forecasting", "Conversion analysis", "Revenue prediction", "Pipeline health"],
  },
] as const;

export function WorkforceOrg() {
  return (
    <section id="workforce" className="relative py-32">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>AI Workforce</Eyebrow>
          <h2 className="mt-6 font-display text-[52px] font-medium leading-[0.98] tracking-[-0.04em] md:text-[68px]">
            Meet Your <span className="text-signature">AI Workforce.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Every department gets specialized AI Employees — trained on your projects, pricing,
            playbooks and inventory.
          </p>
        </div>

        <WorkforceTopology />

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

          <circle cx={cx} cy={cy} r="90" fill="url(#node-glow)" />
        </svg>

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
            <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {dept}
            </div>
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
