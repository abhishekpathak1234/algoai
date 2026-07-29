import { useMemo, useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const fmt = (n: number) => "$" + n.toLocaleString(undefined, { maximumFractionDigits: 0 });

export function ROICalculator() {
  const [leads, setLeads] = useState(20000);
  const [avgTicket, setAvgTicket] = useState(500000);
  const [conv, setConv] = useState(2);
  const [payroll, setPayroll] = useState(1200000);

  const out = useMemo(() => {
    const currentBookings = (leads * conv) / 100;
    const currentRev = currentBookings * avgTicket;
    const upliftedConv = Math.min(conv * 2.5, 12);
    const newBookings = (leads * upliftedConv) / 100;
    const newRev = newBookings * avgTicket;
    const recovered = newRev - currentRev;
    const payrollSaved = payroll * 0.55;
    const totalImpact = recovered + payrollSaved;
    return { currentRev, newRev, recovered, payrollSaved, totalImpact, upliftedConv };
  }, [leads, avgTicket, conv, payroll]);

  return (
    <div className="glass rounded-2xl p-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Inputs</div>
          <Field
            label="Monthly leads"
            value={leads}
            min={500}
            max={200000}
            step={500}
            onChange={setLeads}
            format={(v) => v.toLocaleString()}
          />
          <Field
            label="Average ticket size (USD)"
            value={avgTicket}
            min={20000}
            max={5000000}
            step={10000}
            onChange={setAvgTicket}
            format={fmt}
          />
          <Field
            label="Current booking conversion (%)"
            value={conv}
            min={0.5}
            max={10}
            step={0.1}
            onChange={setConv}
            format={(v) => v.toFixed(1) + "%"}
          />
          <Field
            label="Sales / telecalling payroll (USD/yr)"
            value={payroll}
            min={100000}
            max={20000000}
            step={50000}
            onChange={setPayroll}
            format={fmt}
          />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Illustrative outcomes
          </div>
          <div className="mt-4 grid gap-3">
            <Result
              label="Recovered pipeline (monthly)"
              value={fmt(out.recovered)}
              delta={`Conversion ${conv.toFixed(1)}% → ${out.upliftedConv.toFixed(1)}%`}
            />
            <Result
              label="Payroll savings (annualised)"
              value={fmt(out.payrollSaved)}
              delta="≈55% reduction"
            />
            <Result
              label="Total annualised impact"
              value={fmt(out.recovered * 12 + out.payrollSaved)}
              delta="Recovered + saved"
              highlight
            />
          </div>
          <Link
            to="/book-demo"
            className="mt-8 inline-flex items-center gap-2 rounded-[14px] bg-[var(--gradient-emerald)] px-5 py-3 text-[13px] font-medium text-[#05100C] ring-emerald hover:brightness-110"
          >
            Book Enterprise Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-[11.5px] text-muted-foreground">
            Illustrative model based on typical customer deployments. A tailored ROI review is
            provided during your demo.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <label className="mt-6 block">
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-foreground/85">{label}</span>
        <span className="font-mono text-foreground">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-emerald"
        aria-label={label}
      />
    </label>
  );
}

function Result({
  label,
  value,
  delta,
  highlight,
}: {
  label: string;
  value: string;
  delta?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${highlight ? "border-emerald/60 bg-emerald/5" : "border-border bg-card"}`}
    >
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline gap-3">
        <span className="font-mono text-3xl">{value}</span>
        {delta && (
          <span className="inline-flex items-center gap-1 text-[11.5px] text-emerald">
            <TrendingUp className="h-3 w-3" /> {delta}
          </span>
        )}
      </div>
    </div>
  );
}
