// Shared contact/conversion destinations used across every CTA, the floating
// WhatsApp button, and the footer. Single source of truth so the Calendly
// link, phone number, and WhatsApp message stay consistent everywhere.

export const CALENDLY_URL = "https://calendly.com/abhishek-algobridge/30min";

export const PHONE_DISPLAY = "+91 8054430418";
export const PHONE_TEL = "+918054430418";

const WHATSAPP_NUMBER = "918054430418";
const WHATSAPP_MESSAGE = "Hi, I'd like to learn more about Algo Realty AI Employees.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
