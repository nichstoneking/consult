import type { MetadataRoute } from "next";
import { HOME_DOMAIN } from "@/lib/construct-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: HOME_DOMAIN,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}