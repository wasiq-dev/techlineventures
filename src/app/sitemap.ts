import type { MetadataRoute } from "next";

import { serviceRoutes, siteUrl, staticSiteRoutes } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticSiteRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
