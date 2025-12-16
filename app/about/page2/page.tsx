import type { Metadata } from "next";
import AboutContent from '../../../components/ui/AboutContent';

// --- 1. SEO METADATA (Algorithm-Cracking) ---
export const metadata: Metadata = {
  title: "About Zaikron - Leading Web Development Company Aurangabad",
  description: "Zaikron is the best web development company in Aurangabad (Chhatrapati Sambhajinagar), delivering SEO-optimized website development services.",
  keywords: [
    "web development company Aurangabad",
    "website development Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "best web development company Aurangabad",
    "SEO company Aurangabad",
    "digital marketing agency Aurangabad",
    "app development company Aurangabad",
    "Instagram marketing Aurangabad"
  ],
  // alternates: {
  //   canonical: 'https://zaikron.com/about',
  //   languages: {
  //     'en-IN': 'https://zaikron.com/about',
  //   },
  // },
  openGraph: {
    title: "About Zaikron | Leading Web Development Company Aurangabad",
    description: "Zaikron is the best web development company in Aurangabad. We deliver SEO-optimized website development, app development, and digital marketing.",
    url: 'https://zaikron.com/about',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://zaikron.com/og-about-prism.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaikron Team - Web Development Aurangabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Zaikron - #1 Web Agency Maharashtra",
    images: ['https://zaikron.com/twitter-about-prism.jpg'],
  },
};

// --- 2. JSON-LD SCHEMA ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zaikron - Web Development Company Aurangabad",
  "description": "Zaikron is the best web development company in Aurangabad (Chhatrapati Sambhajinagar), delivering SEO-optimized website development Aurangabad.",
  "url": "https://zaikron.com/about",
  "telephone": "+91-9730416763",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chhatrapati Sambhajinagar",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "priceRange": "₹10,000 - ₹5,00,000",
  "knowsAbout": [
    "Website development Aurangabad",
    "App developer Maharashtra",
    "Instagram marketing agency Aurangabad",
    "Facebook ads expert Chhatrapati Sambhajinagar"
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative w-full bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
 
      </main>
    </>
  );
}