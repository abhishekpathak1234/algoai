export type CaseStudy = {
  slug: string;
  company: string;
  tag: string;
  industry: string;
  short: string;
  challenge: string;
  solution: string;
  impact: { label: string; value: string; sub?: string }[];
  quote: string;
  quoteBy: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tier-1-residential-builder",
    company: "Tier-1 Residential Builder",
    tag: "Illustrative example · 6 active projects · South & West India",
    industry: "Builders",
    short: "Recovered $18.7M of previously lost pipeline in 5 months.",
    challenge:
      "Marketing generated 42,000 leads/month but sales response time averaged 4h 12m. Site-visit show-up sat at 38% and CRM compliance was 51%. Millions of dollars in pipeline was leaking every quarter.",
    solution:
      "Deployed AI Sales Executive, AI Telecaller, AI WhatsApp Executive, AI CRM Executive, AI Site Visit Coordinator and AI Collections. Integrated LeadSquared, Exotel, WhatsApp Business and Google Ads. Went live in 4 weeks.",
    impact: [
      { label: "Response Time", value: "3.8s", sub: "from 4h 12m" },
      { label: "Site-Visit Show-up", value: "71%", sub: "from 38%" },
      { label: "Booking Conversion", value: "5.4%", sub: "from 1.9%" },
      { label: "Recovered Pipeline", value: "$18.7M" },
      { label: "Payroll Reduction", value: "$1.4M / yr" },
      { label: "ROI", value: "11.2x" },
    ],
    quote:
      "We stopped hiring more tele-callers. Algo Realty handles inbound, qualification, and site visit coordination end-to-end. Our sales team finally spends time closing, not chasing.",
    quoteBy: "Head of Sales · Tier-1 Builder",
  },
  {
    slug: "multi-city-developer",
    company: "Multi-city Developer",
    tag: "Illustrative example · 42 projects · 8 cities",
    industry: "Developers",
    short: "Scaled from 8 to 42 projects with the same sales headcount.",
    challenge:
      "Rapid portfolio growth meant each new project stretched an already-thin sales team. Marketing spend rose 3x but conversion collapsed.",
    solution:
      "Rolled out AI Workforce across all 42 projects with project-specific playbooks. Marketing Analyst reallocated $4.8M of spend to higher-ROI channels within 90 days.",
    impact: [
      { label: "Projects", value: "42", sub: "from 8" },
      { label: "Headcount Growth", value: "0%" },
      { label: "Marketing ROI", value: "6.8x", sub: "from 2.1x" },
      { label: "Pipeline", value: "$412M" },
      { label: "Time-to-Launch", value: "-64%" },
      { label: "Executive Visibility", value: "Real-time" },
    ],
    quote:
      "Every new launch used to take 3 months of hiring and ramp. Now we deploy the AI Workforce in a week.",
    quoteBy: "CEO · Multi-city Developer",
  },
  {
    slug: "national-brokerage",
    company: "National Brokerage",
    tag: "Illustrative example · 1,400 brokers · 22 cities",
    industry: "Brokerages",
    short: "2.4x revenue per broker with automated lead distribution.",
    challenge:
      "Broker productivity varied 10x. Best brokers hoarded leads; the tail rarely closed. Commission disputes clogged operations.",
    solution:
      "AI CRM Executive rebalanced lead distribution by score, load and closing history. AI Channel Partner Manager automated commission calc.",
    impact: [
      { label: "Revenue / Broker", value: "+2.4x" },
      { label: "Lead Distribution SLA", value: "< 60s" },
      { label: "Commission Disputes", value: "-92%" },
      { label: "Broker NPS", value: "+38" },
      { label: "Retention", value: "+41%" },
      { label: "ROI", value: "8.6x" },
    ],
    quote: "Our best brokers still win. But the middle of the pack is now writing real deals.",
    quoteBy: "COO · National Brokerage",
  },
  {
    slug: "property-management-group",
    company: "Property Management Group",
    tag: "Illustrative example · 38,000 units under management",
    industry: "Property Management",
    short: "98.4% on-time rent collection with zero added headcount.",
    challenge:
      "Manual rent reminders and maintenance ticket routing pushed collections cycles beyond 40 days. Tenant NPS was slipping.",
    solution: "AI Collections + AI Customer Success handled all tenant communications end-to-end.",
    impact: [
      { label: "On-time Rent", value: "98.4%", sub: "from 84%" },
      { label: "Ticket Resolution", value: "-62%" },
      { label: "Tenant NPS", value: "+34" },
      { label: "DSO", value: "6 days", sub: "from 42" },
      { label: "Ops Headcount", value: "Flat" },
      { label: "Portfolio", value: "38,000 units" },
    ],
    quote:
      "Rent reminders, receipts, tickets — everything runs itself. Our team focuses on retention and growth now.",
    quoteBy: "VP Operations · PM Group",
  },
  {
    slug: "commercial-real-estate-firm",
    company: "Commercial Real Estate Firm",
    tag: "Illustrative example · 18.4M sqft GLA",
    industry: "Commercial",
    short: "Deal cycle down 34% with stakeholder-aware AI coordination.",
    challenge:
      "Multi-year leasing cycles with 8+ stakeholders per deal. Follow-ups slipped. Documentation packages took weeks.",
    solution:
      "Deployed AI Sales Executive tuned for institutional buyers plus AI Compliance Officer for documentation. Revenue Intelligence surfaced at-risk deals weekly.",
    impact: [
      { label: "Deal Cycle", value: "-34%" },
      { label: "GLA Under Coverage", value: "18.4M sqft" },
      { label: "Stakeholder Comms", value: "+4x" },
      { label: "Docs Turnaround", value: "-71%" },
      { label: "Pipeline Visibility", value: "Live" },
      { label: "ROI", value: "9.4x" },
    ],
    quote: "We coordinate 200+ open enterprise deals without dropping a single stakeholder update.",
    quoteBy: "MD · Commercial RE Firm",
  },
  {
    slug: "luxury-real-estate-boutique",
    company: "Luxury Real Estate Boutique",
    tag: "Illustrative example · $4.8M average ticket",
    industry: "Luxury",
    short: "White-glove concierge for HNW clients — in 24 languages.",
    challenge:
      "HNW clients expect same-day, multilingual concierge across time zones. Small team could not scale without diluting brand.",
    solution:
      "AI Concierge (customised AI Sales + AI Support) in 24 languages with private-showing scheduling and NDA-aware conversations.",
    impact: [
      { label: "Avg Ticket", value: "$4.8M" },
      { label: "Languages", value: "24" },
      { label: "Response Time", value: "< 2 min" },
      { label: "CSAT", value: "4.97 / 5" },
      { label: "Repeat Business", value: "+58%" },
      { label: "Team Size", value: "Unchanged" },
    ],
    quote: "Our clients cannot tell the difference — and we never miss a request.",
    quoteBy: "Founder · Luxury Boutique",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
