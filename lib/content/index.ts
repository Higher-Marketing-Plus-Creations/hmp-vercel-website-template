import { createClient, groq } from "next-sanity";

import {
  caseStudies as localCaseStudies,
  insights as localInsights,
  locations as localLocations,
  services as localServices,
  siteSettings as localSiteSettings,
  testimonials as localTestimonials
} from "@/lib/content/local-data";
import { navItems } from "@/lib/navigation";
import type {
  CaseStudy,
  Insight,
  LocationPage,
  Service,
  SiteSettings,
  Testimonial
} from "@/lib/types";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET ?? "";

const sanityEnabled = Boolean(projectId && dataset);

const client = sanityEnabled
  ? createClient({
      apiVersion: "2026-03-01",
      dataset,
      projectId,
      useCdn: true
    })
  : null;

async function maybeFetch<T>(query: string): Promise<T | null> {
  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}

export function getNavItems() {
  return navItems;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await maybeFetch<SiteSettings>(
    groq`*[_type == "siteSettings"][0]{
      addressLabel,
      bookingUrl,
      city,
      companyName,
      contactEmail,
      defaultDescription,
      defaultTitle,
      footerBlurb,
      footerTagline,
      heroMetrics,
      primaryCtaHref,
      primaryCtaLabel,
      secondaryCtaHref,
      secondaryCtaLabel,
      serviceArea,
      siteUrl,
      supportPhone
    }`
  );

  return data ?? localSiteSettings;
}

export async function getServices(): Promise<Service[]> {
  const data = await maybeFetch<Service[]>(
    groq`*[_type == "service"] | order(title asc){
      closingCtaHref,
      closingCtaLabel,
      closingDescription,
      closingTitle,
      detailDescription,
      detailHeading,
      detailItems,
      faq,
      featureHeading,
      featureIntro,
      featureItems,
      heroAccent,
      heroCtaHref,
      heroCtaLabel,
      heroDescription,
      heroEyebrow,
      heroImage,
      heroStats,
      heroTitle,
      label,
      processHeading,
      processItems,
      seoDescription,
      seoTitle,
      slug,
      summary,
      title
    }`
  );

  return data && data.length > 0 ? data : localServices;
}

export async function getService(slug: string) {
  const items = await getServices();
  return items.find((service) => service.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const data = await maybeFetch<CaseStudy[]>(
    groq`*[_type == "caseStudy"] | order(title asc){
      challenge,
      highlights,
      implementation,
      result,
      serviceSlugs,
      slug,
      strategy,
      summary,
      title
    }`
  );

  return data && data.length > 0 ? data : localCaseStudies;
}

export async function getCaseStudy(slug: string) {
  const items = await getCaseStudies();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getInsights(): Promise<Insight[]> {
  const data = await maybeFetch<Insight[]>(
    groq`*[_type == "insight"] | order(publishedAt desc){
      category,
      publishedAt,
      readTime,
      sections,
      serviceSlugs,
      slug,
      summary,
      takeaways,
      title
    }`
  );

  return data && data.length > 0 ? data : localInsights;
}

export async function getInsight(slug: string) {
  const items = await getInsights();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getLocations(): Promise<LocationPage[]> {
  const data = await maybeFetch<LocationPage[]>(
    groq`*[_type == "location"] | order(title asc){
      faq,
      intro,
      serviceSlugs,
      slug,
      summary,
      title
    }`
  );

  return data && data.length > 0 ? data : localLocations;
}

export async function getLocation(slug: string) {
  const items = await getLocations();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await maybeFetch<Testimonial[]>(
    groq`*[_type == "testimonial"] | order(name asc){
      name,
      quote,
      role
    }`
  );

  return data && data.length > 0 ? data : localTestimonials;
}
