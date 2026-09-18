import { Metadata, Viewport } from 'next';
import HomeClient from '../components/HomeClient';

// Viewport (separate export required by Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Homepage Metadata — clean, intent-focused, no keyword spam
export const metadata: Metadata = {
  title: "Zaikron | Web Development Company Aurangabad | Website, App, Instagram Marketing",
  description: "Best web development company in Aurangabad & Chhatrapati Sambhajinagar. Custom websites from ₹15,000, apps from ₹70,000, Instagram marketing & AI chatbots. 50+ local businesses served.",
  authors: [{ name: "Zaikron Technologies" }],
  keywords: [
    "web development company Aurangabad",
    "website developer Aurangabad",
    "app development company Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "app developer Sambhaji Nagar",
    "digital marketing Aurangabad",
    "Instagram marketing Aurangabad",
    "AI chatbot Aurangabad",
    "Next.js developer Aurangabad",
    "mobile app developer Aurangabad",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zaikron.com",
    languages: {
      "en-IN": "https://zaikron.com",
      "x-default": "https://zaikron.com",
    },
  },
  openGraph: {
    title: "Zaikron | Web Development Company in Aurangabad",
    description: "Web development ₹15,000+ | App development ₹70,000+ | Instagram marketing | AI chatbots | 50+ clients in Aurangabad",
    url: "https://zaikron.com",
    siteName: "Zaikron",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://zaikron.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaikron - Web Development Company Aurangabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaikron | Web Development Company Aurangabad",
    description: "Custom websites, apps & digital marketing in Aurangabad. 50+ clients.",
    images: ["https://zaikron.com/og-image.jpg"],
    creator: "@zaikron",
  },
  icons: {
    icon: "/logo/Zaikron.png",
    shortcut: "/logo/Zaikron.png",
    apple: "/logo/Zaikron.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Chhatrapati Sambhajinagar, Aurangabad",
    "geo.position": "19.8762;75.3433",
    "ICBM": "19.8762, 75.3433",
    "mobile-web-app-capable": "yes",
  }
};

// Homepage JSON-LD Schemas — aligned with 2026 AI Overview citation requirements
const generateSchemas = () => [
  // Core Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://zaikron.com/#organization",
    "name": "Zaikron Technologies",
    "url": "https://zaikron.com",
    "logo": "https://zaikron.com/logo/Zaikron.png",
    "description": "Leading web development, app development, and Instagram marketing company in Aurangabad & Chhatrapati Sambhajinagar.",
    "telephone": "+91-9730416763",
    "email": "hello@zaikron.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
      "addressLocality": "Chhatrapati Sambhajinagar",
      "addressRegion": "Maharashtra",
      "postalCode": "431005",
      "addressCountry": "IN",
    },
    "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar", "Maharashtra"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & Chatbots" } },
      ],
    },
    "sameAs": [
      "https://www.facebook.com/zaikron",
      "https://www.instagram.com/zaikronstudio",
      "https://linkedin.com/company/zaikron",
      "https://wa.me/919730416763",
    ],
  },

  // LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://zaikron.com/#localbusiness",
    "name": "Zaikron",
    "url": "https://zaikron.com",
    "telephone": "+91-9730416763",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
      "addressLocality": "Chhatrapati Sambhajinagar",
      "addressRegion": "Maharashtra",
      "postalCode": "431005",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.8762,
      "longitude": 75.3433,
    },
    "priceRange": "₹15,000 - ₹5,00,000",
    "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
  },

  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
    ],
  },

  // Service schemas with pricing
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development in Aurangabad",
    "description": "Custom Next.js & React website development for businesses in Aurangabad and Chhatrapati Sambhajinagar. SEO-optimized, mobile-first, fast-loading.",
    "provider": { "@type": "LocalBusiness", "name": "Zaikron", "url": "https://zaikron.com" },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
    ],
    "offers": {
      "@type": "Offer",
      "name": "Starter Website Package",
      "price": "15000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
    },
    "serviceType": "Website Development",
    "url": "https://zaikron.com/services/web-development",
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development in Aurangabad",
    "description": "Native Android and iOS app development for businesses in Aurangabad using Flutter and React Native.",
    "provider": { "@type": "LocalBusiness", "name": "Zaikron", "url": "https://zaikron.com" },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
    ],
    "offers": {
      "@type": "Offer",
      "name": "MVP App Package",
      "price": "70000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
    },
    "serviceType": "Mobile App Development",
    "url": "https://zaikron.com/services/app-development",
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing in Aurangabad",
    "description": "Instagram and Facebook marketing services for businesses in Aurangabad. Viral reels, ad campaigns, and brand growth strategies.",
    "provider": { "@type": "LocalBusiness", "name": "Zaikron", "url": "https://zaikron.com" },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
    ],
    "offers": {
      "@type": "Offer",
      "name": "Social Media Starter Package",
      "price": "10000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
    },
    "serviceType": "Digital Marketing",
    "url": "https://zaikron.com/services/social-media-marketing",
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Chatbot Development in Aurangabad",
    "description": "Custom AI chatbots and WhatsApp automation for businesses in Aurangabad. 24/7 customer support and lead generation.",
    "provider": { "@type": "LocalBusiness", "name": "Zaikron", "url": "https://zaikron.com" },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
    ],
    "offers": {
      "@type": "Offer",
      "name": "WhatsApp Bot Package",
      "price": "30000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
    },
    "serviceType": "AI Automation",
    "url": "https://zaikron.com/services/bot-automation",
  },

  // FAQ Schema (feeds AI Overviews — questions match real Google searches)
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best website developer in Aurangabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zaikron is one of the top website development companies in Aurangabad (Chhatrapati Sambhajinagar), offering custom Next.js websites starting from ₹15,000 with built-in Google SEO optimization.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does website development cost in Aurangabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development cost in Aurangabad in 2026 ranges from ₹15,000 for a basic business website to ₹1,50,000+ for custom web applications. Zaikron offers transparent pricing with free consultation.",
        },
      },
      {
        "@type": "Question",
        "name": "Which is the best app development company in Sambhaji Nagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zaikron is a leading mobile app development company in Chhatrapati Sambhajinagar (Aurangabad), building Android and iOS apps using Flutter and React Native starting from ₹70,000.",
        },
      },
      {
        "@type": "Question",
        "name": "Does Zaikron provide Instagram marketing services in Aurangabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Zaikron provides Instagram marketing, Facebook ads, and Google Ads management for businesses in Aurangabad. Services include content creation, viral reels, paid campaigns, and monthly analytics reports.",
        },
      },
      {
        "@type": "Question",
        "name": "Does Zaikron make WhatsApp chatbots in Aurangabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zaikron develops WhatsApp AI chatbots and business automation for companies in Aurangabad. These bots handle customer inquiries 24/7, qualify leads, and integrate with your sales process.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas — Server Side for SEO */}
      {generateSchemas().map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Client Component for UI & Animations */}
      <HomeClient />
    </>
  );
}