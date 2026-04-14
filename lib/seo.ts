import type { BreadcrumbItem, CaseStudy, FaqItem, Insight, Service, SiteSettings } from "@/lib/types";

import { normalizeUrl, siteConfig } from "@/lib/site-config";

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: normalizeUrl(item.path),
      name: item.name,
      position: index + 1
    }))
  };
}

export function websiteSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: settings.defaultDescription,
    name: settings.companyName,
    url: settings.siteUrl
  };
}

export function organizationSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: settings.contactEmail,
        telephone: settings.supportPhone
      }
    ],
    description: settings.defaultDescription,
    email: settings.contactEmail,
    name: settings.companyName,
    telephone: settings.supportPhone,
    url: settings.siteUrl
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    areaServed: "United States",
    description: service.summary,
    name: service.title,
    provider: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl
    },
    serviceType: service.label,
    url: normalizeUrl(`/services/${service.slug}`)
  };
}

export function articleSchema(insight: Insight) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    author: {
      "@type": "Organization",
      name: siteConfig.siteName
    },
    datePublished: insight.publishedAt,
    description: insight.summary,
    headline: insight.title,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl
    },
    url: normalizeUrl(`/insights/${insight.slug}`)
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      },
      name: item.question
    }))
  };
}

export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    author: {
      "@type": "Organization",
      name: siteConfig.siteName
    },
    description: caseStudy.summary,
    headline: caseStudy.title,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl
    },
    url: normalizeUrl(`/case-studies/${caseStudy.slug}`)
  };
}
