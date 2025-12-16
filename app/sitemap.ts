import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Helper function to find all page.tsx files recursively
function getPageRoutes(dir: string, baseRoute: string = ''): string[] {
  let routes: string[] = [];
  
  // Read all files in the current directory
  const items = fs.readdirSync(dir);

  for (const item of items) {
    // Skip hidden files, private folders, or the api folder
    if (item.startsWith('.') || item.startsWith('_') || item === 'api') continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // If it's a folder, dive deeper (Recursion)
      // e.g. scans 'services' -> 'web-development'
      routes = [...routes, ...getPageRoutes(fullPath, `${baseRoute}/${item}`)];
    } else if (item === 'page.tsx') {
      // If we find page.tsx, it means this folder is a valid URL!
      // Handle the root homepage separately
      routes.push(baseRoute === '' ? '/' : baseRoute);
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zaikron.com';
  
  // We only scan the 'app' folder because that's where Routes live
  const appDir = path.join(process.cwd(), 'app');
  
  // Get all routes dynamically
  const allRoutes = getPageRoutes(appDir);

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8, // Home gets 1.0, others 0.8
  }));
}