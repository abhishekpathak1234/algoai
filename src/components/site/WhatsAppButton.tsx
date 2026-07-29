import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-[60] md:bottom-6 md:right-6">
      <div className="group relative">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60"
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with AlgoBridge on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elev)] transition-transform duration-200 hover:scale-110"
        >
          <WhatsAppGlyph className="h-7 w-7" />
        </a>
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-[12px] font-medium text-background opacity-0 shadow-[var(--shadow-card)] transition-opacity duration-200 group-hover:opacity-100"
        >
          Chat with AlgoBridge
        </span>
      </div>
    </div>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.607 1.897 6.481L4 29l7.72-1.865A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm.001 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-3.514.848.86-3.494-.23-.362A9.78 9.78 0 0 1 6.182 15c0-5.417 4.402-9.818 9.819-9.818 5.416 0 9.818 4.401 9.818 9.818 0 5.417-4.402 9.818-9.818 9.818Zm5.386-7.34c-.293-.147-1.734-.856-2.003-.954-.269-.098-.465-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.343.22-.636.073-.293-.147-1.235-.455-2.353-1.452-.87-.776-1.457-1.735-1.629-2.028-.171-.293-.018-.451.129-.597.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.588-.904-2.175-.238-.573-.481-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.002-1.026 2.443s1.051 2.834 1.197 3.03c.147.196 2.07 3.161 5.017 4.432.701.303 1.248.484 1.675.62.704.224 1.344.192 1.851.117.565-.084 1.734-.709 1.978-1.393.245-.685.245-1.271.171-1.393-.073-.122-.269-.196-.562-.343Z" />
    </svg>
  );
}
