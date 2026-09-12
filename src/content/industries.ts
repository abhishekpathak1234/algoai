export type Industry = {
  slug: string;
  index: string;
  name: string;
  status: "Active vertical" | "Industry perspective";
  claim: string;
  complexity: string;
  complexityLevel: 1 | 2 | 3 | 4;
  workflows: string[];
  systems: string[];
  opportunity: string;
  governance: string;
  href: string;
  ctaLabel: string;
  perspective?: {
    intro: string;
    operatingReality: { label: string; detail: string }[];
    applicableWorkflows: { workflow: string; detail: string }[];
    architectureFit: { layer: string; detail: string }[];
    governance: string[];
    startHere: string[];
  };
};

export const industries: Industry[] = [
  {
    slug: "commerce",
    index: "01",
    name: "Commerce & D2C",
    status: "Active vertical",
    claim: "AlgoBridge runs governed revenue operations across commerce workflows.",
    complexity: "High volume · high signal density",
    complexityLevel: 3,
    workflows: ["Cart recovery", "Order intervention", "RTO prevention", "Retention", "Support escalation"],
    systems: ["Commerce platform", "Order management", "Support desk", "Logistics", "Messaging"],
    opportunity: "Recover revenue from demand the business already earned.",
    governance: "Discount ceilings, approved messaging, permissioned order actions.",
    href: "/#commerce",
    ctaLabel: "Explore Industry",
  },
  {
    slug: "automotive",
    index: "02",
    name: "Automotive",
    status: "Active vertical",
    claim: "AlgoBridge coordinates lead, appointment and service operations.",
    complexity: "Multi-site · multi-role operations",
    complexityLevel: 3,
    workflows: ["Lead intent", "Test drive booking", "Inventory matching", "Service scheduling", "Retention"],
    systems: ["Dealer CRM", "DMS", "Inventory", "Service scheduling", "Contact centre"],
    opportunity: "Convert enquiry volume into appointments and service revenue.",
    governance: "Pricing approvals, dealer-level permissions, full activity trail.",
    href: "/#auto",
    ctaLabel: "Explore Industry",
  },
  {
    slug: "logistics",
    index: "03",
    name: "Logistics & Supply Chain",
    status: "Active vertical",
    claim: "AlgoBridge operates a governed exception-resolution control tower.",
    complexity: "Very high · event driven, time critical",
    complexityLevel: 4,
    workflows: ["Exception resolution", "Dispatch re-slotting", "Customer updates", "Escalation", "Returns"],
    systems: ["TMS", "Telematics", "Driver comms", "Customer operations", "Notifications"],
    opportunity: "Collapse manual context assembly around every exception.",
    governance: "Cost and SLA approval thresholds, permissioned TMS actions, audit log.",
    href: "/#logistics",
    ctaLabel: "Explore Industry",
  },
  {
    slug: "real-estate",
    index: "04",
    name: "Real Estate",
    status: "Active vertical",
    claim: "AlgoBridge connects lead, site visit and documentation operations.",
    complexity: "High value · long cycle, many handoffs",
    complexityLevel: 3,
    workflows: ["Lead qualification", "Property matching", "Site visits", "Documentation", "Approvals"],
    systems: ["CRM", "Inventory", "Scheduling", "Document systems"],
    opportunity: "Coordinated follow-up across the whole pipeline, not just the top.",
    governance: "Human approval on pricing and commitments, logged document actions.",
    href: "/#real-estate",
    ctaLabel: "Explore Industry",
  },
  {
    slug: "manufacturing",
    index: "05",
    name: "Manufacturing",
    status: "Industry perspective",
    claim: "Explore how the AlgoBridge architecture can be applied to manufacturing operations.",
    complexity: "High · plant, planning and supplier interdependence",
    complexityLevel: 4,
    workflows: [
      "Supplier exception handling",
      "Production change coordination",
      "Quality deviation review",
      "Maintenance dispatch",
      "Order promise management",
    ],
    systems: ["ERP", "MES", "Maintenance systems", "Supplier portals", "Quality systems"],
    opportunity:
      "Coordinate deviations across planning, plant and supplier workflows with governed decisioning.",
    governance: "Safety and quality approvals must remain with accountable humans.",
    href: "/industries/manufacturing",
    ctaLabel: "Industry perspective",
    perspective: {
      intro:
        "Manufacturing operations already generate dense signal across ERP, MES, quality and maintenance systems. The coordination work around deviations — who is told, what is re-planned, what is promised to the customer — remains largely manual.",
      operatingReality: [
        { label: "Planning", detail: "Schedules re-cut manually when supply or capacity moves." },
        { label: "Plant", detail: "Deviations resolved locally, with limited downstream visibility." },
        { label: "Quality", detail: "Review cycles gated by document and approval handling." },
        { label: "Customer promise", detail: "Updated late, once the impact is already felt." },
      ],
      applicableWorkflows: [
        { workflow: "Supplier exception handling", detail: "Late or short supply assessed against plan and promise." },
        { workflow: "Production change coordination", detail: "Downstream effects sequenced across roles." },
        { workflow: "Maintenance dispatch", detail: "Prioritised against production impact." },
        { workflow: "Order promise management", detail: "Customer commitments updated as reality changes." },
      ],
      architectureFit: [
        { layer: "Intelligence", detail: "Interpret deviation impact across plan, plant and promise." },
        { layer: "Flow Architecture™", detail: "One governed path from deviation to communicated outcome." },
        { layer: "Workforce", detail: "Operations units execute permissioned system updates." },
        { layer: "Governance", detail: "Safety, quality and commercial approvals enforced." },
      ],
      governance: [
        "Safety and quality decisions stay with accountable humans.",
        "System actions scoped to ERP and MES permissions.",
        "Every deviation decision logged with its rationale.",
      ],
      startHere: [
        "Pick one recurring deviation type with clear downstream cost.",
        "Map the current coordination path and its handoffs.",
        "Prototype the decision before automating any action.",
      ],
    },
  },
  {
    slug: "financial-services",
    index: "06",
    name: "Financial Services",
    status: "Industry perspective",
    claim: "Explore how the AlgoBridge architecture can be applied to financial services operations.",
    complexity: "High · regulated, audit-first",
    complexityLevel: 4,
    workflows: [
      "Onboarding and KYC coordination",
      "Document verification",
      "Servicing requests",
      "Exception and dispute handling",
      "Collections operations",
    ],
    systems: ["Core banking", "CRM", "Document management", "Case management", "Communications"],
    opportunity: "Reduce coordination time in document- and case-heavy operational workflows.",
    governance: "Regulatory approval, evidence retention and full auditability are mandatory.",
    href: "/industries/financial-services",
    ctaLabel: "Industry perspective",
    perspective: {
      intro:
        "Financial services operations are case- and document-heavy, and every action must be defensible. That makes governed execution — permissioned, approved and logged — the precondition for any AI intervention.",
      operatingReality: [
        { label: "Onboarding", detail: "Multiple document and verification handoffs per case." },
        { label: "Servicing", detail: "High request volume across channels." },
        { label: "Disputes", detail: "Long cycles with manual evidence gathering." },
        { label: "Audit", detail: "Every decision needs a retained rationale." },
      ],
      applicableWorkflows: [
        { workflow: "Onboarding coordination", detail: "Sequence checks, chase documents, progress the case." },
        { workflow: "Document verification", detail: "Interpret and validate submitted evidence." },
        { workflow: "Dispute handling", detail: "Assemble case context for a human decision." },
        { workflow: "Collections operations", detail: "Context-aware, compliant customer contact." },
      ],
      architectureFit: [
        { layer: "Intelligence", detail: "Read documents and case context against policy." },
        { layer: "Flow Architecture™", detail: "Governed case progression with explicit checkpoints." },
        { layer: "Workforce", detail: "Operations units act only within permitted scope." },
        { layer: "Governance", detail: "Regulatory approvals and evidence retention by design." },
      ],
      governance: [
        "Credit, risk and regulatory decisions remain human.",
        "Retention of evidence and rationale for every action.",
        "Communication constrained to approved, compliant language.",
      ],
      startHere: [
        "Choose one case type where coordination dominates cycle time.",
        "Define the audit record before designing the automation.",
        "Run in recommendation mode until decision quality is evidenced.",
      ],
    },
  },
  {
    slug: "healthcare",
    index: "07",
    name: "Healthcare",
    status: "Industry perspective",
    claim: "Explore how the AlgoBridge architecture can be applied to healthcare operations.",
    complexity: "High · clinical safety boundaries",
    complexityLevel: 3,
    workflows: [
      "Referral coordination",
      "Appointment and capacity operations",
      "Documentation and coding support",
      "Claims and authorisation follow-up",
      "Patient communication",
    ],
    systems: ["EMR", "Scheduling", "Billing", "Payer portals", "Communications"],
    opportunity: "Relieve administrative coordination load around clinical work.",
    governance: "No clinical decisioning. Administrative scope only, with human oversight.",
    href: "/industries/healthcare",
    ctaLabel: "Industry perspective",
    perspective: {
      intro:
        "The applicable opportunity in healthcare is administrative, not clinical: referrals, scheduling, documentation follow-up, authorisations and patient communication all consume coordination capacity around care delivery.",
      operatingReality: [
        { label: "Referrals", detail: "Multi-party coordination with frequent drop-off." },
        { label: "Scheduling", detail: "Capacity and cancellation churn managed manually." },
        { label: "Revenue cycle", detail: "Authorisation and claim follow-up is repetitive." },
        { label: "Communication", detail: "Patient updates depend on staff availability." },
      ],
      applicableWorkflows: [
        { workflow: "Referral coordination", detail: "Track and progress referrals to a booked outcome." },
        { workflow: "Capacity operations", detail: "Rebook cancellations and fill gaps." },
        { workflow: "Authorisation follow-up", detail: "Chase and progress payer requirements." },
        { workflow: "Patient communication", detail: "Reminders and status within approved language." },
      ],
      architectureFit: [
        { layer: "Intelligence", detail: "Administrative context only, scoped to permitted data." },
        { layer: "Flow Architecture™", detail: "Governed administrative coordination paths." },
        { layer: "Workforce", detail: "Administrative units with strict permission boundaries." },
        { layer: "Governance", detail: "Clinical decisions excluded by design." },
      ],
      governance: [
        "Explicitly out of scope: any clinical decisioning or advice.",
        "Data access limited to the administrative minimum.",
        "Human oversight on all patient-facing communication.",
      ],
      startHere: [
        "Start with one purely administrative workflow.",
        "Define data scope and exclusions before anything else.",
        "Measure coordination capacity recovered, not clinical metrics.",
      ],
    },
  },
  {
    slug: "construction",
    index: "08",
    name: "Construction & Infrastructure",
    status: "Industry perspective",
    claim: "Explore how the AlgoBridge architecture can be applied to construction operations.",
    complexity: "High · multi-party, document heavy",
    complexityLevel: 3,
    workflows: [
      "RFI and submittal coordination",
      "Subcontractor communication",
      "Change order handling",
      "Site progress reporting",
      "Compliance documentation",
    ],
    systems: ["Project management", "Document control", "ERP", "Scheduling", "Field communication"],
    opportunity: "Keep multi-party project execution coordinated and documented.",
    governance: "Commercial and safety approvals remain with accountable project roles.",
    href: "/industries/construction",
    ctaLabel: "Industry perspective",
    perspective: {
      intro:
        "Construction execution is a coordination problem across owners, contractors, subcontractors and consultants. Delay usually traces back to information waiting on a person, not to unavailable information.",
      operatingReality: [
        { label: "RFIs and submittals", detail: "Queued, chased and frequently delayed." },
        { label: "Subcontractors", detail: "Coordinated across calls, email and site chat." },
        { label: "Change orders", detail: "Commercial impact assessed late." },
        { label: "Documentation", detail: "Compliance evidence assembled retrospectively." },
      ],
      applicableWorkflows: [
        { workflow: "RFI coordination", detail: "Route, track and progress open items to closure." },
        { workflow: "Change order handling", detail: "Assemble impact for a commercial decision." },
        { workflow: "Progress reporting", detail: "Consolidate field signal into one view." },
        { workflow: "Compliance documentation", detail: "Keep evidence current as work proceeds." },
      ],
      architectureFit: [
        { layer: "Intelligence", detail: "Interpret project documents and field signal." },
        { layer: "Flow Architecture™", detail: "Governed coordination across project parties." },
        { layer: "Workforce", detail: "Project operations units act within scope." },
        { layer: "Governance", detail: "Commercial and safety approvals stay human." },
      ],
      governance: [
        "Commercial commitments require accountable human approval.",
        "Safety decisions are never automated.",
        "All project communication retained for the record.",
      ],
      startHere: [
        "Pick one project with a measurable RFI or change-order backlog.",
        "Map the coordination path and the waiting points.",
        "Prototype coordination before automating any commitment.",
      ],
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
