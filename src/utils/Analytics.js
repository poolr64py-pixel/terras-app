export class Analytics {
  static initGoogleAnalytics(trackingId) {
    if (typeof window !== 'undefined' && trackingId) {
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
      window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
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
    console.log('WhatsApp click tracked:', property);
  }
  
  static trackLanguageChange(newLang) {
    this.trackEvent('language_change', 'ui', newLang);
    console.log('Language change tracked:', newLang);
  }
  
  static trackPropertyView(propertyTitle) {
    this.trackEvent('property_view', 'real_estate', propertyTitle);
    console.log('Property view tracked:', propertyTitle);
  }
  
  static trackBlogPost(postTitle) {
    this.trackEvent('blog_post_view', 'content', postTitle);
    console.log('Blog post tracked:', postTitle);
  }
}

// Facebook Pixel
export class FacebookPixel {
  static init(pixelId) {
    if (typeof window !== 'undefined' && pixelId) {
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }
  
  static trackEvent(eventName, parameters = {}) {
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
      console.log('Facebook event tracked:', eventName, parameters);
    }
  }
  
  static trackLead(value = 0) {
    this.trackEvent('Lead', { value, currency: 'USD' });
  }
  
  static trackViewContent(contentName, contentCategory) {
    this.trackEvent('ViewContent', {
      content_name: contentName,
      content_category: contentCategory
    });
  }
}