export type Research = {
  slug: string;
  title: string;
  category: string;
  section: "Featured Research" | "Industry Research" | "Architecture Notes" | "Workflow Intelligence" | "AI Engineering";
  question: string;
  topics: string[];
  summary: string;
  article: {
    executiveSummary: string;
    whyItMatters: string[];
    currentOperatingModel: { label: string; detail: string }[];
    whereAiIntervenes: { label: string; detail: string }[];
    flowArchitecture: { stage: string; detail: string }[];
    governance: string[];
    economics: string[];
    implementation: { stage: string; detail: string }[];
    takeaways: string[];
    relatedWorkflows: { label: string; href: string }[];
  };
};

export const researchSections = [
  "Featured Research",
  "Industry Research",
  "Architecture Notes",
  "Workflow Intelligence",
  "AI Engineering",
] as const;

const standardFlow = [
  { stage: "Discover", detail: "Capture the operational event that starts the work." },
  { stage: "Remember", detail: "Hold the context that makes the next decision correct." },
  { stage: "Understand", detail: "Interpret the event against systems, policy and history." },
  { stage: "Decide", detail: "Choose an action, not a recommendation." },
  { stage: "Execute", detail: "Act inside the systems of record." },
  { stage: "Govern", detail: "Constrain, approve and log every action." },
  { stage: "Learn", detail: "Feed measured outcomes back into decisioning." },
];

export const research: Research[] = [
  {
    slug: "enterprise-workflow-intelligence",
    title: "The Enterprise Workflow Intelligence Gap",
    category: "Enterprise AI",
    section: "Featured Research",
    question: "Why connecting an LLM to enterprise data is not enough to transform operations.",
    topics: [
      "Operational context",
      "Memory",
      "Decisioning",
      "Workflow orchestration",
      "Governed execution",
      "Measurement",
    ],
    summary:
      "Retrieval answers questions. Operations need decisions that end in a system action, under governance, with a measurable result.",
    article: {
      executiveSummary:
        "Most enterprise AI programmes stop at retrieval: a model, a vector store and a chat surface. That produces answers, not operational change. The gap between an answer and a transformed workflow is made of five missing layers — operational memory, decisioning, orchestration, governed execution and measurement.",
      whyItMatters: [
        "An answer still requires a human to act, so the bottleneck does not move.",
        "Workflow value is realised in the system of record, not in a chat window.",
        "Without governance, execution cannot be approved for production operations.",
        "Without measurement, the programme cannot defend its own budget.",
      ],
      currentOperatingModel: [
        { label: "Data layer", detail: "Warehouses and documents, largely well solved." },
        { label: "Model layer", detail: "Hosted or private models with retrieval." },
        { label: "Interface layer", detail: "Chat or copilot surfaces used ad hoc." },
        { label: "Execution layer", detail: "Still human: the coordinator does the work." },
      ],
      whereAiIntervenes: [
        { label: "Operational memory", detail: "Persist the context a workflow needs across events." },
        { label: "Decision engine", detail: "Turn interpretation into a ranked, bounded choice." },
        { label: "Orchestration", detail: "Sequence the work across systems and roles." },
        { label: "Governed execution", detail: "Permissioned actions with approvals and audit." },
        { label: "Measurement", detail: "Attribute outcomes to the workflow itself." },
      ],
      flowArchitecture: standardFlow,
      governance: [
        "Scope every action to a defined system permission.",
        "Define thresholds where a human must approve.",
        "Log the signal, decision, action and approver together.",
        "Keep an operator override on every automated path.",
      ],
      economics: [
        "Model the workflow, not the headcount: events, handoffs, exceptions, approvals.",
        "Value comes from operational capacity created, not hours nominally saved.",
        "Exception-heavy workflows return value earliest.",
        "Report value in $ against a single agreed baseline.",
      ],
      implementation: [
        { stage: "Discover", detail: "Map one workflow end to end with the operators who run it." },
        { stage: "Prototype", detail: "Prove the decision path before automating the action." },
        { stage: "Deploy", detail: "Introduce governed execution in a narrow scope." },
        { stage: "Measure", detail: "Compare against the agreed operational baseline." },
        { stage: "Scale", detail: "Extend to adjacent workflows on the same architecture." },
      ],
      takeaways: [
        "Retrieval is a prerequisite, not a transformation.",
        "Execution and governance are the hard parts, and the valuable ones.",
        "Start with one exception-heavy workflow and measure it honestly.",
      ],
      relatedWorkflows: [
        { label: "Enterprise Architecture", href: "/#architecture" },
        { label: "AlgoBridge Flow Architecture™", href: "/#flow-architecture" },
      ],
    },
  },
  {
    slug: "ai-revenue-operations-commerce",
    title: "AI Revenue Operations in Commerce",
    category: "Commerce / D2C",
    section: "Industry Research",
    question: "Where intelligent workflows can recover revenue after acquisition.",
    topics: [
      "Conversion",
      "Checkout",
      "Order operations",
      "Customer support",
      "RTO",
      "Retention",
      "Revenue recovery",
    ],
    summary:
      "Most commerce revenue leaks after the click. The recoverable value sits in operational workflows, not in more media spend.",
    article: {
      executiveSummary:
        "Commerce teams spend heavily to create demand, then lose a meaningful share of it inside operations — abandoned checkouts, unaddressed support hesitation, high-risk deliveries, silent churn. Each is an operational workflow with a decision point, which makes it a candidate for governed AI execution.",
      whyItMatters: [
        "Recovered demand is cheaper than newly acquired demand.",
        "Post-purchase operations decide repeat rate more than campaigns do.",
        "Delivery and returns risk is knowable before dispatch.",
        "Batch campaigns cannot carry per-customer operational context.",
      ],
      currentOperatingModel: [
        { label: "Acquisition", detail: "Well instrumented and heavily optimised." },
        { label: "Checkout", detail: "Abandonment reported, rarely worked per customer." },
        { label: "Order operations", detail: "Reactive; exceptions handled manually." },
        { label: "Retention", detail: "Calendar-driven campaigns rather than signals." },
      ],
      whereAiIntervenes: [
        { label: "Intent", detail: "Separate price hesitation from friction and from low intent." },
        { label: "Risk", detail: "Score RTO, payment and delivery risk pre-dispatch." },
        { label: "Value", detail: "Size any concession against lifetime value." },
        { label: "Action", detail: "Execute the intervention in the operating systems." },
      ],
      flowArchitecture: standardFlow,
      governance: [
        "Hard ceilings on discounts and concessions.",
        "Approved brand language for all customer messaging.",
        "Permissioned order, refund and dispatch actions.",
        "Approval routing for anything outside commercial policy.",
      ],
      economics: [
        "Baseline the recoverable pool in $ before automating anything.",
        "Attribute recovered revenue to the workflow, not the channel.",
        "Weigh concession cost against retained margin per action.",
      ],
      implementation: [
        { stage: "Discover", detail: "Quantify where demand is lost across the funnel and operations." },
        { stage: "Prototype", detail: "Run one recovery workflow with human approval on every action." },
        { stage: "Deploy", detail: "Automate within guardrails once decision quality holds." },
        { stage: "Measure", detail: "Track recovered revenue and concession cost together." },
        { stage: "Scale", detail: "Extend across RTO, support and retention workflows." },
      ],
      takeaways: [
        "The cheapest revenue is the demand already earned.",
        "Recovery is an operations problem before it is a marketing one.",
        "Guardrails are what make recovery safe at volume.",
      ],
      relatedWorkflows: [
        { label: "Commerce Operations", href: "/#commerce" },
        { label: "Commerce case study", href: "/portfolio/commerce" },
      ],
    },
  },
  {
    slug: "ai-workflow-intelligence-real-estate",
    title: "AI Workflow Intelligence in Real Estate",
    category: "Real Estate",
    section: "Industry Research",
    question:
      "How AI can connect fragmented lead, property, site-visit and documentation workflows.",
    topics: [
      "Lead qualification",
      "Property matching",
      "Site visits",
      "Documentation",
      "CRM",
      "Sales operations",
    ],
    summary:
      "Real estate rarely lacks data. It loses conversion at the handoffs between sales, operations and documentation.",
    article: {
      executiveSummary:
        "Developer operations span enquiry capture, qualification, inventory matching, site visits, documentation and approvals. Each handoff drops context, and follow-up quality falls as pipeline load rises. The opportunity is coordination, not more lead generation.",
      whyItMatters: [
        "High-value decisions are lost to follow-up gaps, not to pricing.",
        "Inventory and pricing change faster than human recall.",
        "Documentation is often the true late-stage constraint.",
        "Site visits are the highest-intent, least-coordinated step.",
      ],
      currentOperatingModel: [
        { label: "CRM", detail: "Records activity; does not coordinate execution." },
        { label: "Sales team", detail: "Carries context personally, inconsistently." },
        { label: "Inventory", detail: "Updated separately from the sales conversation." },
        { label: "Documents", detail: "Prepared and chased manually." },
      ],
      whereAiIntervenes: [
        { label: "Qualification", detail: "Read intent signals to prioritise real buyers." },
        { label: "Matching", detail: "Align requirements to live inventory and pricing." },
        { label: "Coordination", detail: "Drive site visit scheduling and reminders." },
        { label: "Documentation", detail: "Interpret, check and progress paperwork." },
      ],
      flowArchitecture: standardFlow,
      governance: [
        "Pricing and discounting stay with human approvers.",
        "Document handling is scoped, logged and reviewable.",
        "Approved language for all customer communication.",
      ],
      economics: [
        "Model value as coordinated follow-up capacity, in $ per project.",
        "Site visit conversion is the most sensitive measurable step.",
        "Documentation cycle time is a direct revenue-timing lever.",
      ],
      implementation: [
        { stage: "Discover", detail: "Map one project's lead-to-conversion flow." },
        { stage: "Prototype", detail: "Automate qualification and follow-up with oversight." },
        { stage: "Deploy", detail: "Add site visit and documentation coordination." },
        { stage: "Measure", detail: "Track follow-up coverage and visit conversion." },
        { stage: "Scale", detail: "Roll out across projects and channel partners." },
      ],
      takeaways: [
        "Fragmented execution, not missing data, is the constraint.",
        "Coordination is the highest-return intervention.",
        "Pricing decisions should stay human by design.",
      ],
      relatedWorkflows: [
        { label: "Real Estate Operations", href: "/#real-estate" },
        { label: "Real estate case study", href: "/portfolio/real-estate" },
      ],
    },
  },
  {
    slug: "intelligent-exception-management",
    title: "Intelligent Exception Management in Logistics",
    category: "Logistics",
    section: "Industry Research",
    question:
      "How enterprises can move from manual exception handling to governed operational decisioning.",
    topics: [
      "TMS",
      "Telematics",
      "Dispatch",
      "Shipment exceptions",
      "Customer SLAs",
      "Escalation",
      "Control towers",
    ],
    summary:
      "Exception handling is where logistics cost and SLA risk concentrate — and where context assembly consumes the most human time.",
    article: {
      executiveSummary:
        "A logistics exception is a decision problem wrapped in a data-assembly problem. Coordinators spend more time gathering context across TMS, telematics and driver channels than deciding. Governed decisioning collapses that assembly step and makes the resolution consistent and auditable.",
      whyItMatters: [
        "Exceptions drive a disproportionate share of cost-to-serve.",
        "Resolution quality varies by shift and by individual.",
        "Customer trust is set by how exceptions are communicated.",
        "Manual resolution leaves no reviewable decision trail.",
      ],
      currentOperatingModel: [
        { label: "Detection", detail: "Dashboards, calls and driver messages." },
        { label: "Assembly", detail: "Manual context gathering across systems." },
        { label: "Decision", detail: "Experience-based, undocumented." },
        { label: "Execution", detail: "Manual updates across several systems." },
      ],
      whereAiIntervenes: [
        { label: "Classification", detail: "Type, severity and SLA exposure of the exception." },
        { label: "Memory", detail: "How this lane and customer were handled before." },
        { label: "Decisioning", detail: "Ranked resolutions with cost and SLA trade-offs." },
        { label: "Execution", detail: "System updates and customer communication." },
      ],
      flowArchitecture: standardFlow,
      governance: [
        "Cost and SLA thresholds that trigger human approval.",
        "Permissioned TMS and notification actions only.",
        "Complete audit log per exception.",
      ],
      economics: [
        "Value shows up as recovered coordination capacity, in $.",
        "Faster resolution reduces penalty and re-attempt cost.",
        "Consistency reduces variance in cost-to-serve.",
      ],
      implementation: [
        { stage: "Discover", detail: "Classify the exception mix and current handling path." },
        { stage: "Prototype", detail: "Recommend resolutions with human execution." },
        { stage: "Deploy", detail: "Execute low-risk resolutions under governance." },
        { stage: "Measure", detail: "Resolution time, manual steps, SLA outcomes." },
        { stage: "Scale", detail: "Extend to prevention and returns workflows." },
      ],
      takeaways: [
        "Context assembly is the real cost, not the decision.",
        "Governance is what allows execution in live operations.",
        "Prevention follows once resolution is instrumented.",
      ],
      relatedWorkflows: [
        { label: "Logistics Control Tower", href: "/#logistics" },
        { label: "Logistics case study", href: "/portfolio/logistics" },
      ],
    },
  },
  {
    slug: "enterprise-ai-workforce",
    title: "The Enterprise AI Workforce",
    category: "AI Operations",
    section: "AI Engineering",
    question: "What changes when AI moves from answering questions to executing governed work.",
    topics: [
      "Digital workers",
      "Permissions",
      "Approvals",
      "System actions",
      "Human-in-the-loop",
      "Auditability",
      "Workflow economics",
    ],
    summary:
      "Once AI takes actions inside systems of record, the design problem becomes permissions, approvals and accountability.",
    article: {
      executiveSummary:
        "An assistant that answers is judged on quality of language. A digital worker that acts is judged on the same terms as an employee: scope, permissions, oversight and an audit trail. That shift changes the architecture more than it changes the model.",
      whyItMatters: [
        "Actions carry operational and commercial consequence.",
        "Accountability must resolve to a named human owner.",
        "Auditability is a precondition for enterprise adoption.",
        "Workforce economics are measured per workflow, not per seat.",
      ],
      currentOperatingModel: [
        { label: "Assistants", detail: "Answer questions; humans still execute." },
        { label: "Scripted automation", detail: "Brittle and blind to context." },
        { label: "Integration jobs", detail: "Move data without judgement." },
      ],
      whereAiIntervenes: [
        { label: "Scoped workers", detail: "Each unit owns a defined operational remit." },
        { label: "Permissioned actions", detail: "Explicit allow-lists per system." },
        { label: "Approval gates", detail: "Thresholds where a human decides." },
        { label: "Audit", detail: "Signal, decision, action and approver logged together." },
      ],
      flowArchitecture: standardFlow,
      governance: [
        "Least-privilege system access per workforce unit.",
        "Documented approval thresholds per action type.",
        "Human override available at every stage.",
        "Immutable log of executed actions.",
      ],
      economics: [
        "Cost per governed workflow event, expressed in $.",
        "Capacity created rather than headcount displaced.",
        "Exception volume is the primary scaling variable.",
      ],
      implementation: [
        { stage: "Discover", detail: "Define the remit and boundaries of the first unit." },
        { stage: "Prototype", detail: "Shadow-mode execution with human confirmation." },
        { stage: "Deploy", detail: "Grant narrow permissions and monitor closely." },
        { stage: "Measure", detail: "Action accuracy, approval load, outcome quality." },
        { stage: "Scale", detail: "Add units as governance evidence accumulates." },
      ],
      takeaways: [
        "Executing AI is an operating-model change, not a tooling change.",
        "Permissions and approvals are product features, not paperwork.",
        "Trust is earned workflow by workflow.",
      ],
      relatedWorkflows: [
        { label: "AlgoBridge Workforce™", href: "/#workforce" },
        { label: "Governance & Control", href: "/#systems" },
      ],
    },
  },
];

export const getResearch = (slug: string) => research.find((r) => r.slug === slug);
