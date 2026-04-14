export type NavItem = {
  href: string;
  label: string;
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type ContentItem = {
  description: string;
  title: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type Service = {
  closingCtaHref: string;
  closingCtaLabel: string;
  closingDescription: string;
  closingTitle: string;
  detailDescription?: string;
  detailHeading?: string;
  detailItems?: ContentItem[];
  faq: FaqItem[];
  featureHeading: string;
  featureIntro?: string;
  featureItems: ContentItem[];
  heroAccent?: string;
  heroCtaHref: string;
  heroCtaLabel: string;
  heroDescription: string;
  heroEyebrow: string;
  heroImage?: string;
  heroImageClassName?: string;
  heroStats?: HeroMetric[];
  heroTitle: string;
  label: string;
  processHeading: string;
  processItems: ContentItem[];
  seoDescription: string;
  seoTitle: string;
  slug: string;
  summary: string;
  title: string;
};

export type CaseStudy = {
  challenge: string;
  highlights: string[];
  implementation: string;
  result: string;
  serviceSlugs: string[];
  slug: string;
  strategy: string;
  summary: string;
  title: string;
};

export type InsightSection = {
  body: string[];
  heading: string;
};

export type Insight = {
  category: string;
  publishedAt: string;
  readTime: string;
  sections: InsightSection[];
  serviceSlugs: string[];
  slug: string;
  summary: string;
  takeaways: string[];
  title: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  role: string;
};

export type LocationPage = {
  faq: FaqItem[];
  intro: string;
  serviceSlugs: string[];
  slug: string;
  summary: string;
  title: string;
};

export type SiteSettings = {
  addressLabel: string;
  bookingUrl: string;
  city: string;
  companyName: string;
  contactEmail: string;
  defaultDescription: string;
  defaultTitle: string;
  footerBlurb: string;
  footerTagline: string;
  heroMetrics: HeroMetric[];
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  serviceArea: string;
  siteUrl: string;
  supportPhone: string;
};

export type ReviewItem = {
  authorName: string;
  publishedLabel: string;
  rating: number;
  sourceUrl?: string;
  text: string;
};

export type ReviewCollection =
  | {
      aggregateRating: number;
      items: ReviewItem[];
      reviewCount: number;
      reviewsUrl?: string;
      source: "google";
      writeReviewUrl?: string;
    }
  | {
      items: Testimonial[];
      source: "testimonial";
    };

export type BreadcrumbItem = {
  name: string;
  path: string;
};
