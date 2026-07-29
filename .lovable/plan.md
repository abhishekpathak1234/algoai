
# Algo Realty — SEO & Conversion Expansion Plan

No UI redesign. Reuse the existing design system, `Nav`, `Footer`, `IndustryPage` template, and all tokens from Master Prompts 1–3. This plan adds pages, templates, schema, and conversion primitives only.

---

## 1. Sitemap (target information architecture)

```text
/                                     Home (existing)
/solutions                            Solutions hub
  /solutions/ai-sales-executive
  /solutions/ai-telecaller
  /solutions/ai-whatsapp
  /solutions/ai-crm
  /solutions/ai-collections
  /solutions/ai-support
  /solutions/ai-site-visits
  /solutions/ai-marketing
  /solutions/voice-ai
  /solutions/revenue-intelligence
/ai-employees                         AI Employees marketplace hub
  /ai-employees/[slug]                per-employee SEO page (reuses solution template)
/industries                           Hub (existing)
  /industries/builders                (existing)
  /industries/developers              (existing)
  /industries/agencies                (existing)
  /industries/brokerages              (existing)
  /industries/property-management     (existing)
  /industries/commercial              (existing, keep slug)
  /industries/luxury                  (existing, keep slug)
  /industries/channel-partners        (existing)
/integrations                         Hub
  /integrations/[slug]                one per: salesforce, hubspot, leadsquared,
                                      zoho, teams, google-workspace, google-calendar,
                                      outlook, slack, whatsapp-business, meta-ads,
                                      google-ads, 99acres, housing, magicbricks
/pricing                              Enterprise pricing page
/resources                            Resource hub
  /resources/implementation-guide
  /resources/ai-readiness-assessment
  /resources/roi-calculator           interactive
  /resources/ai-workforce-calculator  interactive
  /resources/sales-playbook
  /resources/builder-guide
  /resources/brokerage-guide
  /resources/crm-guide
  /resources/executive-playbook
  /resources/whitepapers
  /resources/videos
  /resources/webinars
/blog                                 Knowledge center
  /blog/[slug]                        100 article placeholders (see §7)
  /blog/category/[slug]               12 categories
/case-studies                         Hub
  /case-studies/[slug]                6 illustrative case study templates
/security                             Trust & compliance
/about                                Company
/contact                              Contact + demo booking entry
/book-demo                            5-step booking flow
/legal/privacy
/legal/terms
/sitemap.xml                          Dynamic server route
/robots.txt                           Static
```

Note: existing `/industries/commercial` and `/industries/luxury` stay as-is (no slug rename), so existing links do not break.

---

## 2. Wireframe patterns (reused, not new UI)

Every page composes existing primitives in one of these blueprints:

**Blueprint A — Solution / AI Employee (long-form SEO page)**
```text
Nav
Hero (KPIs, dual CTA)
PainPoints grid
Impacts strip
Responsibilities/Capabilities cards
Workflow (existing horizontal stepper)
Dashboard (existing command-center panel)
Integrations strip
FAQ (accordion)
Case study teaser
CTA
Footer
```
Powered by an extended `IndustryPage` template.

**Blueprint B — Hub page (Solutions / AI Employees / Integrations / Resources / Blog / Case Studies)**
```text
Nav
Hero (short)
Filter/category strip
Card grid (existing card style)
Featured band
CTA
Footer
```

**Blueprint C — Integration page**
```text
Nav
Hero (Algo Realty × Integration lockup)
"What syncs" 2-col grid
Workflow (bi-directional)
FAQ
CTA
Footer
```

**Blueprint D — Article / Guide (blog + resources)**
```text
Nav
Breadcrumb
Article header (H1, meta, read time)
TOC (sticky on desktop)
Prose body (semantic HTML)
Related articles
CTA card
Footer
```

**Blueprint E — Pricing**
```text
Nav
Hero
3-tier card row (Growth / Enterprise / Custom)
Add-ons (AI Employees list)
Comparison table
ROI teaser → link to calculator
FAQ
CTA
Footer
```

**Blueprint F — Book Demo (5-step)**
```text
Nav
Progress bar
Step panel (Industry → Size → CRM → Challenge → Schedule)
Sidebar summary
Footer (slim)
```

All blueprints reuse existing `glass`, `bg-aurora`, `bg-grid`, `text-emerald-grad`, tokens; no new visual language.

---

## 3. Reusable component inventory

**Existing (keep as-is):**
- `site/Chrome.tsx` → `Nav`, `Footer`
- `site/IndustryPage.tsx` → `Hero`, `PainPoints`, `Impacts`, `Workforce`, `Workflow`, `Benefits`, `Dashboard`, `CaseStudy`, `FAQSection`, `CTA`
- `SectionHead`, `Counter`, `MiniSparkline` primitives

**New (all built with existing tokens, no new styling):**
| Component | Purpose |
|---|---|
| `site/SolutionPage.tsx` | Reuses `IndustryPage` sections; wraps for solutions/AI employees |
| `site/HubPage.tsx` | Hero + filter chips + card grid (used by Solutions/Employees/Integrations/Resources/Blog/Case Studies hubs) |
| `site/IntegrationPage.tsx` | Blueprint C |
| `site/ArticlePage.tsx` | Blueprint D (blog + long-form resources) |
| `site/PricingPage.tsx` | Blueprint E |
| `site/BookDemoFlow.tsx` | Blueprint F (client-only wizard state) |
| `site/ROICalculator.tsx` | Interactive form → animated outputs |
| `site/CTABand.tsx` | Reusable mid-page CTA strip |
| `site/StickyDemoCTA.tsx` | Desktop right-rail + mobile floating button |
| `site/Breadcrumbs.tsx` | Renders visual + JSON-LD BreadcrumbList |
| `site/Seo.tsx` helpers | `buildMeta()`, `buildJsonLd()` factories for consistent head() output |
| `site/IntegrationLogo.tsx` | Monochrome placeholder marks (no external logos) |
| `data/*.ts` | Typed content dictionaries: `solutions.ts`, `integrations.ts`, `resources.ts`, `caseStudies.ts`, `blogPosts.ts`, `pricing.ts` |

Content lives in `src/data/*.ts` so route files stay thin (~30 lines each).

---

## 4. Page hierarchy & internal linking

- `Nav` dropdown gains: Solutions, AI Employees, Industries, Integrations, Resources, Pricing.
- `Footer` gets a 5th column: Solutions.
- Every long page ends with a `CTABand` linking to `/book-demo`.
- Every solution page cross-links to: 3 related solutions, 2 relevant industries, 1 case study.
- Every industry page (existing) gets a "Recommended AI Employees" strip appended non-destructively via IndustryPage prop.
- Blog posts link to their category, related solutions, and one case study.

---

## 5. SEO infrastructure

- **Per-route `head()`** using a shared `buildMeta({ title, description, path, ogImage? })` helper: sets `title`, `description`, `og:title`, `og:description`, `og:type`, `og:url` (relative), `twitter:card`, `twitter:title`, `twitter:description`. `og:image` only on leaves that have a real hero asset; otherwise omitted per rules.
- **Canonical**: leaf-only via `links: [{ rel: "canonical", href: "/…" }]`.
- **JSON-LD schemas** via `buildJsonLd()`:
  - `__root.tsx`: Organization + WebSite (sitewide)
  - Solution/Employee/Integration pages: `SoftwareApplication` + `FAQPage` + `BreadcrumbList`
  - Blog posts: `BlogPosting` + `BreadcrumbList`
  - Case studies: `Article` + `BreadcrumbList`
  - Resources how-to pages: `HowTo` where applicable
  - Pricing: `Product` with `Offer`s
- **Dynamic sitemap**: `src/routes/sitemap[.]xml.ts` server route enumerating all routes from typed content dictionaries. `BASE_URL = ""` placeholder with TODO comment (no project URL yet).
- **robots.txt**: `public/robots.txt` = `User-agent: *` + `Allow: /`. No `Sitemap:` directive until domain is set.
- **Semantic HTML**: exactly one `<main>` per route, single `<h1>`, `<article>`, `<nav>`, `<aside>` where meaningful, alt text on all decorative-graphic wrappers.

---

## 6. Conversion primitives

- `StickyDemoCTA` mounted in `__root.tsx` (desktop right-edge pill + mobile bottom floating button). Hidden on `/book-demo`.
- `CTABand` inserted mid-page on every long page (solutions, industries, integrations, articles, case studies).
- Multi-CTA hero row on every landing page: primary `Book Enterprise Demo`, secondary `Calculate ROI` or `Talk to Sales`.
- `/book-demo` 5-step wizard (Industry → Size → CRM → Challenge → Schedule) with progress bar and preserved state via URL search params (SSR-safe).
- ROI calculator and AI Workforce calculator return copy-ready outputs and end with a demo CTA.

---

## 7. Content dictionaries (scope)

- **10 solutions** — full long-form pages using Blueprint A.
- **~14 AI Employees** — one page each (reuses solution template with role-scoped copy).
- **15 integrations** — Blueprint C.
- **6 illustrative case studies** — each clearly labelled "Illustrative example".
- **12 blog categories** and **100 blog post entries** (title, excerpt, category, read time, slug, tags) — 12 of the 100 fully written; the remaining 88 render as premium templated posts using the same layout with structured placeholder body (still uniquely titled + meta’d for SEO), so 100 URLs exist and are indexable without shipping thin duplicate content.
- **12 resources** — 4 interactive (ROI calculator, workforce calculator, readiness assessment, implementation checklist) + 8 long-form guides.
- **Pricing tiers**: Growth, Enterprise, Custom + add-on AI Employee catalogue.

---

## 8. Accessibility & performance

- Tokens only (`text-foreground`, `text-muted-foreground`), no arbitrary greys.
- All icon-only buttons get `aria-label`.
- Keyboard focus rings preserved from shadcn defaults.
- Route-level code splitting is automatic (TanStack file routes).
- Images (when introduced) wrapped in `aspect-*` containers with `loading="lazy"` and descriptive `alt`.
- Analytics: single `src/lib/analytics.ts` stub exporting `track()` no-op with commented GA4/GTM/Meta/LinkedIn/Clarity slots — no scripts injected until keys are provided.

---

## 9. Implementation phases (build order after approval)

1. **Foundations** — `src/data/*.ts` dictionaries, `Seo.tsx` helpers, `Breadcrumbs`, `CTABand`, `StickyDemoCTA`, `HubPage`, `SolutionPage`, `IntegrationPage`, `ArticlePage`, `PricingPage`, `BookDemoFlow`, `ROICalculator`. Extend `Nav`/`Footer` non-destructively.
2. **Solutions** — hub + 10 leaf pages.
3. **AI Employees** — hub + 14 leaf pages.
4. **Integrations** — hub + 15 leaf pages.
5. **Resources** — hub + 12 leaf pages (including 2 interactive calculators).
6. **Blog** — hub, 12 category pages, 100 post routes (12 fully written + 88 templated).
7. **Case Studies** — hub + 6 pages.
8. **Pricing, Security, About, Contact, Book Demo, Legal**.
9. **SEO plumbing** — `sitemap.xml` server route, `robots.txt`, per-route JSON-LD, canonical audit.
10. **Root JSON-LD** — Organization + WebSite in `__root.tsx`.
11. **Verification** — HTTP 200 sweep across every generated route, one A11y pass, single `<main>` / single `<h1>` audit.

Estimated route count added: ~180 (10 solutions + 14 employees + 15 integrations + 12 resources + 100 blog + 12 blog categories + 6 case studies + 8 hub/misc).

---

## 10. Non-goals (explicit)

- No visual redesign of any existing component.
- No new color, font, or spacing tokens.
- No external logo assets (integrations use monochrome placeholders per brand rules).
- No stock imagery, no smiling-people photos.
- No backend, auth, or database work.
- No absolute URLs baked into `og:url`/canonical (project has no domain yet).

Approve to proceed, or tell me which sections to trim, expand, or resequence.
