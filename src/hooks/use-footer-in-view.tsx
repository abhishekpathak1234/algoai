import { useEffect, useState } from "react";

/**
 * True once the page's <footer> scrolls into view. Used to hide floating
 * fixed-position widgets (sticky CTA, WhatsApp button) so they don't sit on
 * top of footer content/links at the bottom of the page.
 */
export function useFooterInView() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "0px 0px 0px 0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return inView;
}
