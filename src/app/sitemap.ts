import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.dharmagroup.com";

  return [
    { url: base, priority: 1 },
    { url: `${base}/about` },
    { url: `${base}/businesses` },
    { url: `${base}/chairman` },
    { url: `${base}/gallery` },
    { url: `${base}/news` },
    { url: `${base}/careers` },
    { url: `${base}/contact` },
    { url: `${base}/privacy` },
    { url: `${base}/terms` },
  ];
}