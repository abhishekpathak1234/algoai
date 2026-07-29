import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function StickyDemoCTA() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path.startsWith("/book-demo")) return null;
  return (
    <>
      {/* Mobile floating pill */}
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <Link
          to="/book-demo"
          className="glass flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13px] font-medium text-foreground shadow-[var(--shadow-elev)]"
        >
          <Calendar className="h-4 w-4 text-emerald" />
          Book Enterprise Demo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      {/* Desktop right-edge pill */}
      <div className="fixed right-6 bottom-8 z-40 hidden md:block">
        <Link
          to="/book-demo"
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-foreground shadow-[var(--shadow-elev)] hover:bg-surface"
        >
          <Calendar className="h-4 w-4 text-emerald" />
          Book Enterprise Demo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </>
  );
}
