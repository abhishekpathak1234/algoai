export type TrustLabel =
  | "Verified client engagement"
  | "Client name withheld under NDA"
  | "Representative workflow"
  | "Illustrative demonstration";

export type CaseStudy = {
  slug: string;
  category: string;
  industry: string;
  filters: string[];
  title: string;
  client: string;
  trust: TrustLabel;
  status: string;
  note?: string;
  workflow: string;
  summary: string;
  systems: string[];
  workforce: string[];
  actions: string[];
  approach: string;
  flow: string[];
  outcome: string;
  ctaLabel: string;
  ctaHref: string;
  detail: {
    problem: string;
    problemSignals: string[];
    existingWorkflow: { step: string; reality: string }[];
    systemLandscape: { system: string; role: string; data: string }[];
    bottleneck: string[];
    architecture: { layer: string; role: string; detail: string }[];
    intelligence: { label: string; detail: string }[];
    flowStages: { stage: string; detail: string }[];
    workforceUnits: { unit: string; scope: string }[];
    governance: string[];
    businessOutcome: string[];
    scalesNext: string[];
  };
};

export const portfolioFilters = [
  "All",
  "Logistics",
  "Automotive",
  "Commerce",
  "Real Estate",
  "Manufacturing",
  "Financial Services",
  "Healthcare",
  "Operations",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "logistics",
    category: "Logistics / Control Tower",
    industry: "Logistics",
    filters: ["Logistics", "Operations"],
    title: "From fragmented dispatch signals to intelligent exception resolution",
    client: "Enterprise Logistics Operator",
    trust: "Client name withheld under NDA",
    status: "Anonymized enterprise engagement",
    workflow: "Shipment exception resolution",
    summary:
      "Operational teams were coordinating exceptions across multiple systems, messages and manual handoffs. AlgoBridge connected those signals into one governed exception-resolution path.",
    systems: ["TMS", "Telematics", "Driver communication", "Customer operations", "Notifications"],
    workforce: ["Dispatch / Operations Workforce"],
    actions: ["Re-slot", "Update TMS", "Notify customer", "Escalate exception", "Log decision"],
    approach:
      "AlgoBridge connected operational events, enterprise systems and workflow intelligence into a governed exception-resolution path.",
    flow: [
      "Event",
      "Understand",
      "Remember",
      "Decide",
      "Execute",
      "Govern",
      "Learn",
    ],
    outcome: "Faster exception resolution with fewer manual coordination steps.",
    ctaLabel: "Explore the Logistics Workflow",
    ctaHref: "/#logistics",
    detail: {
      problem:
        "Exceptions were not a data problem. Every signal already existed somewhere — in the TMS, in telematics, in a driver message, in a customer commitment. The problem was that resolving one exception required a human to assemble that context manually, decide, then update several systems by hand.",
      problemSignals: [
        "Shipment status",
        "Driver communication",
        "Route information",
        "Customer commitments",
        "Dispatch updates",
        "Exception events",
      ],
      existingWorkflow: [
        { step: "Exception surfaces", reality: "Noticed on a dashboard, a call or a driver message" },
        { step: "Context assembly", reality: "Coordinator opens TMS, telematics and chat threads" },
        { step: "Decision", reality: "Judgement call, rarely written down anywhere" },
        { step: "Execution", reality: "Manual updates across two to four systems" },
        { step: "Customer comms", reality: "Ad-hoc message, tone and timing vary by person" },
        { step: "Learning", reality: "No structured record of what was decided or why" },
      ],
      systemLandscape: [
        { system: "TMS", role: "System of record", data: "Orders, slots, stops, status" },
        { system: "Telematics", role: "Signal source", data: "Position, dwell, ETA drift" },
        { system: "Driver comms", role: "Field channel", data: "Delays, refusals, site issues" },
        { system: "Customer operations", role: "Commitment layer", data: "SLAs, promised windows" },
        { system: "Notifications", role: "Execution channel", data: "Customer and internal updates" },
      ],
      bottleneck: [
        "Context assembly consumed more time than the decision itself.",
        "Resolution quality depended on which coordinator was on shift.",
        "Systems drifted out of sync while the exception was being worked.",
        "No audit trail linking the signal, the decision and the action.",
      ],
      architecture: [
        {
          layer: "Systems",
          role: "Source",
          detail: "TMS, telematics, driver channel and customer operations feed events and state.",
        },
        {
          layer: "AlgoBridge Intelligence™",
          role: "Think",
          detail: "Operational memory plus reasoning over shipment, route and commitment context.",
        },
        {
          layer: "AlgoBridge Flow Architecture™",
          role: "Orchestrate",
          detail: "One governed path from exception event through to logged outcome.",
        },
        {
          layer: "AlgoBridge Workforce™",
          role: "Execute",
          detail: "Dispatch and operations workforce units perform permissioned system actions.",
        },
        {
          layer: "Governance",
          role: "Control",
          detail: "Approval thresholds, human oversight and a full decision log.",
        },
      ],
      intelligence: [
        { label: "Exception classification", detail: "Type, severity and downstream SLA exposure." },
        { label: "Operational memory", detail: "How similar exceptions on this lane were resolved." },
        { label: "Decision engine", detail: "Ranked resolution options with cost and SLA trade-offs." },
        { label: "Communication reasoning", detail: "What the customer should be told, and when." },
      ],
      flowStages: [
        { stage: "Discover", detail: "Exception detected from telematics drift or driver signal." },
        { stage: "Remember", detail: "Lane history, customer tolerance and prior resolutions recalled." },
        { stage: "Understand", detail: "Impact assessed against promised windows and downstream stops." },
        { stage: "Decide", detail: "Resolution selected: re-slot, re-route, re-sequence or escalate." },
        { stage: "Execute", detail: "TMS updated, customer notified, driver instructed." },
        { stage: "Govern", detail: "High-impact changes routed to a human approver before execution." },
        { stage: "Learn", detail: "Outcome recorded and fed back into resolution ranking." },
      ],
      workforceUnits: [
        { unit: "Dispatch Workforce", scope: "Re-slotting, re-sequencing, TMS updates." },
        { unit: "Operations Workforce", scope: "Exception triage and escalation routing." },
        { unit: "Customer Operations Workforce", scope: "Proactive status and commitment updates." },
      ],
      governance: [
        "Every action is permissioned to a defined system scope.",
        "Cost or SLA impact beyond a threshold requires human approval.",
        "Customer-facing messages follow approved operational language.",
        "Signal, decision, action and approver are written to one audit log.",
      ],
      businessOutcome: [
        "Faster exception resolution with fewer manual coordination steps.",
        "Consistent resolution quality independent of who is on shift.",
        "Systems stay aligned while the exception is being worked.",
        "A reviewable record behind every operational decision.",
      ],
      scalesNext: [
        "Extend from exceptions to proactive delay prevention.",
        "Add carrier performance and cost-to-serve intelligence.",
        "Apply the same path to returns, failed deliveries and re-attempts.",
      ],
    },
  },
  {
    slug: "real-estate",
    category: "Real Estate / Developer Operations",
    industry: "Real Estate",
    filters: ["Real Estate", "Operations"],
    title: "Connecting lead intelligence, site visits and documentation into one operating flow",
    client: "Large Real Estate Developer",
    trust: "Client name withheld under NDA",
    status: "Anonymized enterprise engagement",
    workflow: "Lead to conversion operations",
    summary:
      "Real estate execution was fragmented across CRM, sales teams, inventory, site visits and documents. AlgoBridge Flow Architecture™ coordinated them into one operating flow.",
    systems: ["CRM", "Property inventory", "Site visit scheduling", "Documents", "Approvals"],
    workforce: ["Sales Workforce", "Customer Operations Workforce", "Document Workforce"],
    actions: [
      "Qualify lead",
      "Match inventory",
      "Schedule site visit",
      "Prepare documents",
      "Route approval",
    ],
    approach:
      "AlgoBridge Flow Architecture™ coordinates lead qualification, property matching, engagement, site visits, documentation and conversion as one governed flow.",
    flow: [
      "Lead",
      "Qualification",
      "Property Matching",
      "Engagement",
      "Site Visit",
      "Documentation",
      "Conversion",
    ],
    outcome: "More coordinated follow-up, cleaner operational context and fewer manual handoffs.",
    ctaLabel: "Explore Real Estate Operations",
    ctaHref: "/#real-estate",
    detail: {
      problem:
        "The problem was not a lack of data. Leads, inventory, visit history and documents all existed. Execution was fragmented: every handoff between sales, operations and documentation lost context, and follow-up depended on individual discipline.",
      problemSignals: [
        "Lead enquiries across channels",
        "Sales team notes",
        "Property inventory changes",
        "Site visit outcomes",
        "Document status",
        "Approval requests",
      ],
      existingWorkflow: [
        { step: "Lead arrives", reality: "Multiple channels, inconsistent capture quality" },
        { step: "Qualification", reality: "Depends on which agent picks it up" },
        { step: "Property matching", reality: "Manual recall of current inventory and pricing" },
        { step: "Site visit", reality: "Coordinated over calls and messages" },
        { step: "Documentation", reality: "Manual preparation and chasing" },
        { step: "Follow-up", reality: "Drops off once the pipeline gets busy" },
      ],
      systemLandscape: [
        { system: "CRM", role: "System of record", data: "Leads, stages, activity" },
        { system: "Inventory", role: "Supply layer", data: "Units, availability, pricing" },
        { system: "Scheduling", role: "Coordination", data: "Site visit slots and attendance" },
        { system: "Documents", role: "Compliance", data: "Agreements, KYC, approvals" },
      ],
      bottleneck: [
        "Context resets at every handoff between teams.",
        "Follow-up quality varies with pipeline load.",
        "Property matching relies on human memory of inventory.",
        "Documentation becomes the late-stage constraint on conversion.",
      ],
      architecture: [
        { layer: "Systems", role: "Source", detail: "CRM, inventory, scheduling and document systems." },
        {
          layer: "AlgoBridge Intelligence™",
          role: "Think",
          detail: "Lead intent, property matching and document interpretation over operational memory.",
        },
        {
          layer: "AlgoBridge Flow Architecture™",
          role: "Orchestrate",
          detail: "Lead through conversion as one continuous, governed flow.",
        },
        {
          layer: "AlgoBridge Workforce™",
          role: "Execute",
          detail: "Sales, customer operations and document workforce units act inside systems.",
        },
        { layer: "Governance", role: "Control", detail: "Approvals on pricing, documents and commitments." },
      ],
      intelligence: [
        { label: "Lead intent", detail: "Read enquiry signals to prioritise genuine buying intent." },
        { label: "Property matching", detail: "Match requirements against live inventory and pricing." },
        { label: "Operational memory", detail: "Every prior interaction available at the next touch." },
        { label: "Document interpretation", detail: "Read, check and progress documentation." },
        { label: "Next-best action", detail: "The right follow-up, at the right moment, per lead." },
      ],
      flowStages: [
        { stage: "Discover", detail: "Enquiry captured from any channel into one flow." },
        { stage: "Remember", detail: "Prior context, visits and preferences retained." },
        { stage: "Understand", detail: "Intent, budget fit and requirement clarity assessed." },
        { stage: "Decide", detail: "Next-best action chosen per lead state." },
        { stage: "Execute", detail: "Follow-up sent, visit scheduled, documents prepared." },
        { stage: "Govern", detail: "Pricing and commitments held behind human approval." },
        { stage: "Learn", detail: "Conversion outcomes sharpen matching and prioritisation." },
      ],
      workforceUnits: [
        { unit: "Sales Workforce", scope: "Qualification, matching, follow-up cadence." },
        { unit: "Customer Operations Workforce", scope: "Site visit coordination and reminders." },
        { unit: "Document Workforce", scope: "Preparation, checks and approval routing." },
      ],
      governance: [
        "Pricing and discount actions always require human approval.",
        "Document actions are scoped and logged per lead.",
        "Customer communication uses approved developer language.",
        "Full activity trail retained inside the CRM.",
      ],
      businessOutcome: [
        "More coordinated follow-up across the full pipeline.",
        "Cleaner operational context at every handoff.",
        "Fewer manual handoffs between sales, operations and documentation.",
      ],
      scalesNext: [
        "Extend into post-sale customer operations and collections context.",
        "Apply the same flow across multiple projects and micro-markets.",
        "Add channel-partner operations into the same governed path.",
      ],
    },
  },
  {
    slug: "commerce",
    category: "Commerce / Revenue Operations",
    industry: "Commerce",
    filters: ["Commerce", "Operations"],
    title: "Turning customer signals into governed revenue recovery",
    client: "Growth-stage Commerce Enterprise",
    trust: "Representative workflow",
    status: "Representative workflow",
    note: "Representative workflow — not a customer result.",
    workflow: "Revenue recovery operations",
    summary:
      "Revenue opportunities were distributed across checkout, orders, support, delivery, returns and retention. AlgoBridge connects customer intent to the operational workflows that can act on it.",
    systems: ["Commerce platform", "Order management", "Support desk", "Logistics", "Messaging"],
    workforce: ["Revenue Workforce", "Customer Operations Workforce"],
    actions: [
      "Recover cart",
      "Intervene on order",
      "Prevent RTO",
      "Escalate support",
      "Trigger retention",
    ],
    approach:
      "AlgoBridge connects customer intent with operational workflows so revenue signals end in a governed action rather than a report.",
    flow: [
      "Customer Signal",
      "Intent",
      "Intelligence",
      "Decision",
      "Workforce",
      "Action",
      "Revenue Outcome",
    ],
    outcome: "Recover revenue opportunities from demand the business already has.",
    ctaLabel: "Explore Commerce Operations",
    ctaHref: "/#commerce",
    detail: {
      problem:
        "Most commerce teams have more demand than they convert. The signals of lost revenue — an abandoned checkout, a hesitant support conversation, a high-risk delivery address, a lapsing repeat buyer — are visible, but acting on each one is manual work nobody has capacity for.",
      problemSignals: [
        "Checkout abandonment",
        "Order anomalies",
        "Support conversations",
        "Delivery risk",
        "Return requests",
        "Retention decay",
      ],
      existingWorkflow: [
        { step: "Signal appears", reality: "Sits in a dashboard or a report" },
        { step: "Prioritisation", reality: "Batch campaigns, not per-customer decisions" },
        { step: "Action", reality: "Generic message with no operational context" },
        { step: "Operations", reality: "Support, logistics and retention act separately" },
        { step: "Measurement", reality: "Channel attribution, not workflow economics" },
      ],
      systemLandscape: [
        { system: "Commerce platform", role: "Demand layer", data: "Carts, checkouts, catalogue" },
        { system: "Order management", role: "System of record", data: "Orders, fulfilment state" },
        { system: "Support desk", role: "Customer channel", data: "Conversations, intent, issues" },
        { system: "Logistics", role: "Delivery layer", data: "Shipping, RTO and delivery risk" },
      ],
      bottleneck: [
        "Revenue signals are reported rather than acted upon.",
        "Interventions ignore fulfilment and support context.",
        "No governed limit on discounts or concessions at scale.",
        "Recovery effort is not measured as an operational workflow.",
      ],
      architecture: [
        { layer: "Systems", role: "Source", detail: "Commerce, orders, support and logistics." },
        {
          layer: "AlgoBridge Intelligence™",
          role: "Think",
          detail: "Customer intent, risk and value read against operational memory.",
        },
        {
          layer: "AlgoBridge Flow Architecture™",
          role: "Orchestrate",
          detail: "Signal to governed revenue action as one flow.",
        },
        {
          layer: "AlgoBridge Workforce™",
          role: "Execute",
          detail: "Revenue and customer operations workforce units act in-system.",
        },
        { layer: "Governance", role: "Control", detail: "Discount ceilings, approval and audit." },
      ],
      intelligence: [
        { label: "Intent reading", detail: "Distinguish price hesitation from intent to buy." },
        { label: "Risk scoring", detail: "Delivery, RTO and payment risk before dispatch." },
        { label: "Value context", detail: "Lifetime value informs the size of any concession." },
        { label: "Next-best action", detail: "Per-customer decision rather than a batch campaign." },
      ],
      flowStages: [
        { stage: "Discover", detail: "Revenue signal captured across commerce and support." },
        { stage: "Remember", detail: "Order, support and delivery history recalled." },
        { stage: "Understand", detail: "Intent, risk and value assessed together." },
        { stage: "Decide", detail: "Recovery action chosen within commercial guardrails." },
        { stage: "Execute", detail: "Message sent, order adjusted, delivery re-routed." },
        { stage: "Govern", detail: "Concessions above threshold require approval." },
        { stage: "Learn", detail: "Recovered revenue attributed back to the workflow." },
      ],
      workforceUnits: [
        { unit: "Revenue Workforce", scope: "Cart recovery, order intervention, retention triggers." },
        { unit: "Customer Operations Workforce", scope: "Support escalation and delivery follow-up." },
      ],
      governance: [
        "Discount and concession ceilings enforced per action.",
        "Customer messaging follows approved brand language.",
        "Order and refund actions are permissioned and logged.",
        "Human approval for anything outside commercial policy.",
      ],
      businessOutcome: [
        "Recover revenue opportunities from demand the business already has.",
        "Interventions carry fulfilment and support context.",
        "Commercial guardrails hold as volume scales.",
      ],
      scalesNext: [
        "Extend from recovery into proactive retention operations.",
        "Add marketplace and channel operations to the same flow.",
        "Bring returns and RTO prevention fully into governed execution.",
      ],
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
