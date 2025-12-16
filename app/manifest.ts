import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaikron Technologies',
    short_name: 'Zaikron',
    description: 'Best Web Development & Digital Marketing Agency in Aurangabad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050508',
    theme_color: '#050508',
    icons: [
      {
        src: '/logo/Zaikron.png', // Ensure this matches your logo path
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/Zaikron.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}