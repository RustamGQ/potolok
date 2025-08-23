'use client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'engagement', formName);
  };

  const trackPhoneCall = (phoneNumber: string) => {
    trackEvent('phone_call', 'engagement', phoneNumber);
  };

  const trackServiceSelection = (serviceName: string) => {
    trackEvent('service_select', 'engagement', serviceName);
  };

  const trackCitySelection = (cityName: string) => {
    trackEvent('city_select', 'engagement', cityName);
  };

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackPhoneCall,
    trackServiceSelection,
    trackCitySelection,
  };
};
