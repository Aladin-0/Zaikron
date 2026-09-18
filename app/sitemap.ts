import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Helper to find all page.tsx files recursively
function getPageRoutes(dir: string, baseRoute: string = ''): { route: string; priority: number }[] {
  let routes: { route: string; priority: number }[] = [];
  
  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (item.startsWith('.') || item.startsWith('_') || item === 'api') continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes = [...routes, ...getPageRoutes(fullPath, `${baseRoute}/${item}`)];
    } else if (item === 'page.tsx') {
      const route = baseRoute === '' ? '/' : baseRoute;
      // Assign priorities based on page importance for SEO
      let priority = 0.7;
      if (route === '/') priority = 1.0;
      else if (route === '/services') priority = 0.9;
      else if (route === '/contact') priority = 0.9;
      else if (route === '/about') priority = 0.8;
      else if (route === '/work') priority = 0.8;
      else if (route.startsWith('/services/')) priority = 0.85;
      else if (route.startsWith('/case-studies')) priority = 0.85;
      routes.push({ route, priority });
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zaikron.com';
  const appDir = path.join(process.cwd(), 'app');
  const allRoutes = getPageRoutes(appDir);

  const now = new Date();

  return allRoutes.map(({ route, priority }) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'daily' : route.startsWith('/services') ? 'weekly' : 'monthly',
    priority,
  }));
}