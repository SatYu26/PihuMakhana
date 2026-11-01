import type { MetadataRoute } from "next";
import { LAST_UPDATED, PAGES, SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    ...Object.values(PAGES).map(({ path }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
