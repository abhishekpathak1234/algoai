import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

const faqs = [
  {
    q: "How quickly can AI respond to leads?",
    a: "AI Employees respond in under 4 seconds across WhatsApp, calls, and web chat — 24/7, in multiple languages.",
  },
  {
    q: "Can AI integrate with our CRM?",
    a: "Yes. Algo Realty connects natively with Salesforce, HubSpot, LeadSquared, Zoho and custom CRMs — with two-way sync.",
  },
  {
    q: "Can AI qualify buyers?",
    a: "AI SDRs qualify on budget, timeline, locality and intent — routing hot buyers to sales in real time.",
  },
  {
    q: "Can AI schedule site visits?",
    a: "AI Coordinators book visits into your calendars, confirm attendance, and reschedule no-shows automatically.",
  },
  {
    q: "Can AI handle multilingual conversations?",
    a: "Yes — 20+ languages including English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali and Gujarati.",
  },
  {
    q: "Can AI automate follow-ups?",
    a: "Behavior-based sequences follow up until a decision is made — with human handoff on high intent.",
  },
  {
    q: "Can AI assist with collections?",
    a: "AI Collections Executives send reminders, confirm receipts and escalate on overdue balances.",
  },
  {
    q: "Can AI support multiple projects?",
    a: "Deploy separate AI Employees per project or share a workforce across your entire portfolio.",
  },
];

function slugify(q: string) {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function FAQ() {
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
              const panelId = `faq-panel-${slugify(f.q)}`;
              const buttonId = `faq-trigger-${slugify(f.q)}`;
              return (
                <li key={f.q} className="border-b border-border">
                  <button
                    id={buttonId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-6 text-left transition"
                  >
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[20px] leading-tight md:text-[22px]">
                      {f.q}
                    </span>
                    <Plus
                      aria-hidden
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-foreground" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
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
