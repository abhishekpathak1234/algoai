import {
  Bot,
  CalendarCheck,
  Check,
  Database,
  FileText,
  HeartHandshake,
  Home,
  Radio,
  Send,
  Users,
  Wallet,
} from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

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

export function Workflow() {
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
            A single orchestrated flow across every department. Humans stay in the loop where it
            matters most.
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[28px] border border-border bg-surface/40 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-signature-soft opacity-40 blur-3xl" />
          <div className="relative">
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
