import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://zaikron.com'; // Your real domain

  return {
    rules: {
      userAgent: '*', // Applies to Google, Bing, Yahoo, AI bots, everyone
      allow: '/',     // "You are allowed to scan EVERYTHING"
    },
    sitemap: `${baseUrl}/sitemap.xml`, // "Here is the map to all my pages"
  };
}