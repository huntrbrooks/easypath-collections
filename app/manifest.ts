import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EasyPath Collections - Professional Debt Recovery',
    short_name: 'EasyPath Collections',
    description: 'Australia\'s most trusted debt recovery specialists with over 15 years of proven success.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9fafb',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance'],
    lang: 'en-AU',
    orientation: 'portrait-primary',
  }
}

