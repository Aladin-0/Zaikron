import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaikron - Web Development Company Aurangabad',
    short_name: 'Zaikron',
    description: 'Web development, app development, and digital marketing agency in Aurangabad (Chhatrapati Sambhajinagar), Maharashtra.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050508',
    theme_color: '#050508',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-IN',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/logo/Zaikron.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo/Zaikron.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        form_factor: 'wide' as any,
        label: 'Zaikron Homepage',
      },
    ],
    shortcuts: [
      {
        name: 'Contact Us',
        url: '/contact',
        description: 'Get in touch with Zaikron',
      },
      {
        name: 'Our Services',
        url: '/services',
        description: 'Web development, app development, and marketing services',
      },
    ],
  };
}