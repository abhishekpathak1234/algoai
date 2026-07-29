// SEO helpers for consistent head() metadata + JSON-LD across every route.
// Production destination is https://algobridge.cc/realty — canonical/og:url
// are built as absolute URLs against that origin + base path.

export const SITE_URL = "https://algobridge.cc/realty";

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export type MetaEntry = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  charSet?: string;
};
export type LinkEntry = { rel: string; href: string; type?: string };
export type ScriptEntry = { type: string; children: string };

export function buildMeta(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "product";
  image?: string; // absolute URL only
}): { meta: MetaEntry[]; links: LinkEntry[] } {
  const { title, description, path, ogType = "website", image } = opts;
  const url = absoluteUrl(path);
  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export function jsonLd(payload: unknown): ScriptEntry {
  return { type: "application/ld+json", children: JSON.stringify(payload) };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: absoluteUrl(i.path),
    })),
  });
}

export function faqLd(items: { q: string; a: string }[]) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function softwareLd(name: string, description: string) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: { "@type": "Organization", name: "Algo Realty" },
  });
}

export function articleLd(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  category?: string;
}) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: opts.path,
    articleSection: opts.category,
    datePublished: opts.datePublished ?? "2026-01-01",
    author: { "@type": "Organization", name: "Algo Realty" },
    publisher: { "@type": "Organization", name: "Algo Realty" },
  });
}
