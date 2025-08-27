// Sistema de Analytics automático
export class Analytics {
  static initGoogleAnalytics(trackingId) {
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag || function() {
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }
  
  static trackPageView(page, title) {
    if (window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: page,
        page_title: title
      });
    }
  }
  
  static trackEvent(action, category = 'engagement', label = '') {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      });
    }
  }
  
  static trackWhatsAppClick(property = '') {
    this.trackEvent('whatsapp_click', 'contact', property);
  }
  
  static trackLanguageChange(newLang) {
    this.trackEvent('language_change', 'ui', newLang);
  }
}