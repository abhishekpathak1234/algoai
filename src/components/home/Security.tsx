import {
  ArrowUpRight,
  Cloud,
  Fingerprint,
  KeyRound,
  Lock,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { Eyebrow } from "@/components/home/primitives";

const security = [
  { Icon: ShieldCheck, t: "SOC 2 Ready", d: "Audited controls & continuous monitoring." },
  { Icon: Lock, t: "Enterprise Encryption", d: "At rest and in transit — AES-256, TLS 1.3." },
  { Icon: KeyRound, t: "Role Based Access", d: "Granular controls across departments." },
  { Icon: ScrollText, t: "Audit Logs", d: "Every AI action logged and replayable." },
  { Icon: Cloud, t: "Cloud Infrastructure", d: "Regional deployments with 99.99% SLA." },
  { Icon: Fingerprint, t: "Enterprise Auth", d: "SSO, SAML, SCIM, MFA — out of the box." },
];

export function Security() {
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
