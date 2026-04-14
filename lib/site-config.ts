import type { Metadata } from "next";

const fallbackSiteUrl = "https://highermarketingplus.com";
const vercelSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

export const siteConfig = {
  defaultOgDescription:
    "Strategy-first websites, local SEO, Google growth systems, and AI voice workflows built for service businesses.",
  defaultOgTitle: "Higher Marketing Plus",
  siteName: "Higher Marketing Plus",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? vercelSiteUrl ?? fallbackSiteUrl,
  socialCardType: "summary_large_image" as const
};

export function normalizeUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createMetadata({
  description,
  imagePath = "/opengraph-image",
  noIndex = false,
  pathname = "/",
  title
}: {
  description: string;
  imagePath?: string;
  noIndex?: string | boolean;
  pathname?: string;
  title: string;
}): Metadata {
  const url = normalizeUrl(pathname);
  const image = normalizeUrl(imagePath);
  const shouldIndex = noIndex !== true;

  return {
    alternates: {
      canonical: url
    },
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    openGraph: {
      description,
      images: [
        {
          alt: title,
          height: 630,
          url: image,
          width: 1200
        }
      ],
      siteName: siteConfig.siteName,
      title,
      type: "website",
      url
    },
    robots: {
      follow: shouldIndex,
      index: shouldIndex
    },
    title,
    twitter: {
      card: siteConfig.socialCardType,
      description,
      images: [image],
      title
    }
  };
}
