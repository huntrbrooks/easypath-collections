export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EasyPath Collections",
    "url": "https://easypathcollections.com.au",
    "logo": "https://easypathcollections.com.au/logo.png",
    "description": "Australia's most trusted debt recovery specialists with over 15 years of proven success.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "Victoria",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0499682389",
      "contactType": "customer service",
      "areaServed": "AU",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/easypath-collections",
      "https://www.facebook.com/easypathcollections"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Debt Recovery",
    "description": "Professional B2B debt collection with industry-leading success rates",
    "provider": {
      "@type": "Organization",
      "name": "EasyPath Collections"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Debt Collection",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AUD",
      "description": "No Recovery, No Fee - You only pay when we successfully recover your debt"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}
