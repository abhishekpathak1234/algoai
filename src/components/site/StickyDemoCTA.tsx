import { useRouterState } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { CALENDLY_URL, CTA_BOOK_MOBILE, CTA_BOOK_SHORT } from "@/lib/contact";

export function StickyDemoCTA() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  // /book-demo and /contact already surface direct Calendly/WhatsApp CTAs,
  // so the floating pill would only duplicate and visually collide with them.
  if (path.startsWith("/book-demo") || path.startsWith("/contact")) return null;
  return (
    <>
      {/* Mobile floating pill — sits above the floating WhatsApp button */}
      <div className="fixed inset-x-4 bottom-20 z-40 md:hidden">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13px] font-medium text-foreground shadow-[var(--shadow-elev)]"
        >
          <Calendar className="h-4 w-4 text-emerald" />
          {CTA_BOOK_MOBILE}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      {/* Desktop right-edge pill — stacked above the floating WhatsApp button */}
      <div className="fixed right-6 bottom-24 z-40 hidden md:block">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-foreground shadow-[var(--shadow-elev)] hover:bg-surface"
        >
          <Calendar className="h-4 w-4 text-emerald" />
          {CTA_BOOK_SHORT}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </>
  );
}
