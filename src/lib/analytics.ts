/**
 * Push a custom event to the GTM dataLayer.
 * Safe to call on the server — silently no-ops when `window` is unavailable.
 */
export function trackEvent(event: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event, ...params });
  }
}

/** Shorthand for tracking WhatsApp CTA clicks across sections. */
export function trackWhatsAppClick(buttonLocation: string) {
  trackEvent("whatsapp_click", { button_location: buttonLocation });
}
