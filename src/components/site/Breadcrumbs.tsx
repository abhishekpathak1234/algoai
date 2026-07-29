import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1280px] px-6 pt-32">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted-foreground">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-border-strong" />}
            {i === items.length - 1 ? (
              <span className="text-foreground">{c.name}</span>
            ) : (
              <Link to={c.path} className="transition hover:text-foreground">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
