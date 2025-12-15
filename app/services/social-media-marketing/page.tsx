import type { Metadata } from "next";
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import SMMContent from '../../../components/ui/SMMContent';

// --- 1. SEO METADATA (Keyword Density: Extreme) ---
export const metadata: Metadata = {
  title: "Digital Marketing Agency Aurangabad | Social Media + SEO ₹10K+ | Zaikron",
  description: "Rank #1 on Google + 10x Sales. Best Digital Marketing Company in Aurangabad. SEO, Instagram, Facebook Ads. 500+ Clients. Get Free Audit.",
  keywords: [
    // Primary High-Intent
    "Digital Marketing Agency Aurangabad", "Social Media Marketing Aurangabad", 
    "Digital Marketing Company Chhatrapati Sambhajinagar", "Best Digital Marketing Agency Near Me",
    "SEO Services Aurangabad", "Facebook Ads Agency Aurangabad", "Instagram Marketing Aurangabad",
    
    // Commercial
    "Digital Marketing Cost Aurangabad", "Social Media Marketing Packages",
    "Best Digital Marketing Company in Aurangabad", "Digital Marketing Services Near Me",
    
    // Long-Tail Local
    "Digital marketing agency Usmanpura", "Social media marketing Nirala Bazaar",
    "Facebook ads company MIDC Waluj", "Instagram marketing Cidco Aurangabad",
    "SEO company Connaught Place Aurangabad", "Google ads agency Beed Bypass",
    
    // Service Specific
    "Facebook Marketing Aurangabad", "Google Ads Aurangabad", "YouTube Ads Aurangabad",
    "LinkedIn Marketing Maharashtra", "WhatsApp Marketing Aurangabad", "Content Marketing Agency"
  ],
  alternates: {
    canonical: 'https://zaikron.com/services/social-media-marketing',
    languages: {
      'en-IN': 'https://zaikron.com/services/social-media-marketing',
      'x-default': 'https://zaikron.com/services/social-media-marketing'
    },
  },
  openGraph: {
    title: "Digital Marketing Agency Aurangabad | Zaikron",
    description: "Results-driven marketing. SEO, SMM, Ads. Join 500+ successful businesses in Aurangabad.",
    url: 'https://zaikron.com/services/social-media-marketing',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-smm-aurangabad.jpg', width: 1200, height: 630, alt: 'Best Digital Marketing Agency Aurangabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Marketing Aurangabad - Zaikron",
    description: "Grow your business with Aurangabad's #1 marketing agency. Free Audit inside.",
    images: ['https://zaikron.com/og-smm-aurangabad.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// --- 2. JSON-LD STRUCTURED DATA (Rich Snippets) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Digital Marketing",
      "provider": { "@id": "https://zaikron.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marketing Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Social Media",
            "price": "10000",
            "priceCurrency": "INR",
            "description": "Facebook + Instagram Management, Basic SEO"
          },
          {
            "@type": "Offer",
            "name": "Growth Marketing",
            "price": "25000",
            "priceCurrency": "INR",
            "description": "All Social + Google Ads + Local SEO"
          },
          {
            "@type": "Offer",
            "name": "Pro Scale",
            "price": "50000",
            "priceCurrency": "INR",
            "description": "Full Funnel + WhatsApp + YouTube Ads"
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - Digital Marketing Agency Aurangabad",
      "image": "https://zaikron.com/logo.png",
      "telephone": "+919730416763",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, Usmanpura",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 19.8762, "longitude": 75.3433 },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "₹10,000 - ₹5,00,000",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of digital marketing in Aurangabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our packages start at ₹10,000/month for basic social media management. Comprehensive growth packages with ads and SEO range from ₹25,000 to ₹50,000/month." }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see SEO results?",
          "acceptedAnswer": { "@type": "Answer", "text": "SEO is a long-term strategy. You can expect to see initial movement in 3 months, with significant traffic and lead growth occurring between 6-12 months." }
        },
        {
          "@type": "Question",
          "name": "Do you handle Facebook and Instagram ads?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are experts in Meta Ads (Facebook & Instagram). We create ad creatives, set up targeting, manage budgets, and optimize for highest ROI." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Aurangabad", "item": "https://zaikron.com/services/social-media-marketing" }
      ]
    }
  ]
};

export default function SMMPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* THEME: Deep Charcoal + Crimson/Gold Selection */}
      <main className="relative w-full bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white">
        <Navbar />
        <SMMContent />
        <Footer />
      </main>
    </>
  );
}