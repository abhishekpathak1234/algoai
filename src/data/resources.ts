export type Resource = {
  slug: string;
  title: string;
  kind: "guide" | "calculator" | "assessment" | "playbook" | "whitepaper" | "video" | "webinar";
  category: string;
  short: string;
  readTime?: string;
  sections?: { title: string; body: string }[];
};

const guide = (r: Partial<Resource> & { slug: string; title: string; short: string; category: string }): Resource => ({
  kind: "guide",
  readTime: "12 min read",
  sections: [
    { title: "Executive summary", body: "This guide distils what enterprise real estate leaders need to know before deploying an AI Workforce — the business case, the deployment model and the outcomes to expect." },
    { title: "Why AI Workforce, not chatbots", body: "Chatbots answer questions. AI Employees own outcomes. The right architecture treats every AI as an employee inside a department with a defined scope, playbook and reporting line." },
    { title: "Deployment blueprint", body: "Start with the highest-leverage roles: AI Sales Executive, AI Telecaller and AI CRM Executive. Sequence remaining employees by revenue impact." },
    { title: "Measuring ROI", body: "Track response time, site-visit show-up, booking conversion, payroll reduction and recovered pipeline. Report weekly to leadership." },
    { title: "What could go wrong", body: "Common pitfalls — CRM data hygiene, playbook drift, over-automation, and under-investing in change management. Each has a proven mitigation." },
    { title: "Next steps", body: "Run a 30-day pilot on a single project or region, benchmark against the control group and expand to the full portfolio in phases." },
  ],
  ...r,
} as Resource);

export const resources: Resource[] = [
  guide({ slug: "implementation-guide", title: "Implementation Guide", category: "Deployment", short: "Blueprint for deploying an AI Workforce in 3–5 weeks." }),
  { slug: "ai-readiness-assessment", title: "AI Readiness Assessment", kind: "assessment", category: "Diagnostic", short: "A 5-minute assessment to benchmark AI readiness across sales, CRM, marketing and operations." },
  { slug: "roi-calculator", title: "ROI Calculator", kind: "calculator", category: "Diagnostic", short: "Estimate revenue recovery and payroll savings for your portfolio." },
  { slug: "ai-workforce-calculator", title: "AI Workforce Calculator", kind: "calculator", category: "Diagnostic", short: "Size the right AI Workforce for your lead volume and project count." },
  guide({ slug: "sales-playbook", title: "Enterprise Sales Playbook", category: "Sales", short: "How top-performing real estate sales orgs are re-designing for AI." }),
  guide({ slug: "builder-guide", title: "Builder's Guide to AI", category: "Builders", short: "AI Workforce playbook for residential builders and developers." }),
  guide({ slug: "brokerage-guide", title: "Brokerage AI Playbook", category: "Brokerages", short: "Give every broker an AI team without losing brand control." }),
  guide({ slug: "crm-guide", title: "CRM Automation Guide", category: "CRM", short: "The definitive guide to zero-touch CRM in real estate." }),
  guide({ slug: "executive-playbook", title: "Executive Playbook", category: "Leadership", short: "For CEOs, MDs and Sales Directors leading an AI-native real estate business." }),
  { slug: "whitepapers", title: "Whitepapers Library", kind: "whitepaper", category: "Library", short: "Deep research on AI, real estate revenue and workforce economics." },
  { slug: "videos", title: "Video Library", kind: "video", category: "Library", short: "Workflow walkthroughs, product tours and customer sessions." },
  { slug: "webinars", title: "Webinars", kind: "webinar", category: "Library", short: "Live and on-demand sessions with real estate leaders." },
];

export const resourceBySlug = (slug: string) => resources.find((r) => r.slug === slug);
