export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  })
}

// Track quote calculations
export const trackQuoteCalculation = (amount: number) => {
  event({
    action: 'calculate',
    category: 'quote',
    label: 'debt_amount',
    value: amount,
  })
}

// Track phone clicks
export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'phone',
  })
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
