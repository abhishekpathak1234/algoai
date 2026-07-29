// Shared contact/conversion destinations used across every CTA, the floating
// WhatsApp button, and the footer. Single source of truth so the Calendly
// link, phone number, WhatsApp message, and CTA copy stay consistent
// everywhere — update once here, it updates on every page.

const CALENDLY_BASE_URL = "https://calendly.com/abhishek-algobridge/30min";

// Every Calendly CTA must carry these so bookings are attributable back to
// the website. Baked into the single exported URL so no call site can forget it.
export const CALENDLY_URL = `${CALENDLY_BASE_URL}?utm_source=website&utm_medium=cta&utm_campaign=realty`;

export const PHONE_DISPLAY = "+91 8054430418";
export const PHONE_TEL = "+918054430418";

const WHATSAPP_NUMBER = "918054430418";
const WHATSAPP_MESSAGE = "Hi, I'd like to learn more about Algo Realty AI Employees.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Higher-converting CTA copy (Phase 2.2), used in place of generic
// "Book Demo" / "Talk to Sales" labels. Kept as named constants so every
// surface stays in sync with a single rewrite.
export const CTA_BOOK_FULL = "Book Your AI Strategy Call";
export const CTA_BOOK_SHORT = "Book AI Strategy Call";
export const CTA_BOOK_COMPACT = "Book a Strategy Call";
export const CTA_BOOK_MOBILE = "Book Call";
export const CTA_TALK_TO_EXPERT = "Talk to an AI Automation Expert";
export const CTA_SEE_IN_ACTION = "See AI Employees in Action";

export const DEFAULT_TRUST_LINE = "Trusted by Builders, Developers & Brokerages";

export const DEFAULT_CTA_BENEFITS = [
  "30-minute strategy session",
  "Personalized AI roadmap",
  "No obligation consultation",
];
