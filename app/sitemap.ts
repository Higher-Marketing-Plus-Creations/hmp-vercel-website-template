import type { MetadataRoute } from "next";

import { getServices } from "@/lib/content";
import { normalizeUrl } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServices();

  const staticRoutes = ["/", "/services", "/contact", "/privacy", "/terms"];
  const weekly = "weekly" as const;
  const monthly = "monthly" as const;

  return [
    ...staticRoutes.map((route) => ({
      changeFrequency: route === "/" ? weekly : monthly,
      lastModified: new Date(),
      priority: route === "/" ? 1 : 0.7,
      url: normalizeUrl(route)
    })),
    ...services.map((service) => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(),
      priority: 0.85,
      url: normalizeUrl(`/services/${service.slug}`)
    }))
  ];
}
