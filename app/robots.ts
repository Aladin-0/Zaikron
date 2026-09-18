import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://zaikron.com';

  return {
    rules: [
      {
        // All search engine bots — full access
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Never expose API routes
          '/_next/',      // Next.js internals — not useful for indexing
          '/private/',    // Any private pages
        ],
      },
      {
        // OAI-SearchBot (ChatGPT Web Search) — CRITICAL for 2026 AI Search
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        // GPTBot (ChatGPT Training)
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // PerplexityBot — allow so Zaikron appears in Perplexity AI answers
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // ClaudeBot (Anthropic)
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        // Google-Extended (Gemini training)
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Applebot-Extended (Apple Intelligence)
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}