import type { Metadata } from "next";
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import AppDevContent from '../../../components/ui/AppDevContent';

// --- 1. SEO METADATA (Keyword Density: Extreme - EXACT MATCH) ---
export const metadata: Metadata = {
  title: "App Development Services Aurangabad | Custom Mobile Apps ₹50K+ | Zaikron",
  description: "Best mobile app developer in Aurangabad. Custom Android/iOS apps from ₹50,000. 50+ delivered. React Native, Flutter, Swift. Get free quote today.",
  keywords: [
    // High-Intent Keywords
    "App Development Company Aurangabad", "Mobile App Developer Chhatrapati Sambhajinagar",
    "Android App Developer Aurangabad", "iOS App Development Maharashtra",
    "React Native Developer Aurangabad", "Custom App Development Aurangabad",
    "App Development Services Near Me", "Best App Developer Aurangabad",
    
    // Commercial Keywords
    "App Development Cost Aurangabad", "How Much Does App Development Cost",
    "App Development Timeline", "MVP Development Aurangabad",
    
    // Informational
    "Best Mobile App Development Practices", "React Native vs Flutter for Aurangabad Apps",
    "How to Build an App in 2025", "Startup App Development Guide",
    
    // Long-Tail "Near Me"
    "App developer near me Aurangabad", "Mobile app development near Connaught Road Aurangabad",
    "App developer in Usmanpura", "Best app company in Nirala Bazaar Aurangabad",
    "App development services Cidco Aurangabad", "App developer MIDC Waluj Aurangabad",
    
    // Technology Specific
    "Flutter developer Aurangabad", "PWA developer Maharashtra", "Swift app development",
    "Kotlin android developer", "Node.js backend for apps"
  ],
  alternates: {
    canonical: 'https://zaikron.com/services/app-development',
    languages: {
      'en-IN': 'https://zaikron.com/services/app-development',
      'x-default': 'https://zaikron.com/services/app-development'
    },
  },
  openGraph: {
    title: "App Development Services Aurangabad | Zaikron",
    description: "Custom Android & iOS Apps starting ₹50K. Rated #1 in Chhatrapati Sambhajinagar.",
    url: 'https://zaikron.com/services/app-development',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-app-dev-aurangabad.jpg', width: 1200, height: 630, alt: 'Custom App Development Services Aurangabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "App Development Aurangabad - Zaikron",
    description: "Build your dream app with Aurangabad's top developers. React Native, Flutter, Native.",
    images: ['https://zaikron.com/og-app-dev-aurangabad.jpg'],
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
      "serviceType": "Mobile App Development",
      "provider": { "@id": "https://zaikron.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "App Development Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Startup MVP App",
            "price": "50000",
            "priceCurrency": "INR",
            "description": "5-10 core features, Single platform (iOS or Android)"
          },
          {
            "@type": "Offer",
            "name": "Business App",
            "price": "150000",
            "priceCurrency": "INR",
            "description": "20-30 features, iOS + Android, Admin dashboard"
          },
          {
            "@type": "Offer",
            "name": "Enterprise Solution",
            "price": "300000",
            "priceCurrency": "INR",
            "description": "Custom architecture, Third-party integrations, White-label"
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - App Development Company Aurangabad",
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
      "priceRange": "₹50,000 - ₹5,00,000"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a custom app cost in Aurangabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Custom app development in Aurangabad ranges from ₹50,000 for MVP startups to Depends on features+ for enterprise solutions. Factors affecting cost: number of features (5-50+), platforms (iOS, Android, or both), third-party integrations, and timeline." }
        },
        {
          "@type": "Question",
          "name": "How long does app development take?",
          "acceptedAnswer": { "@type": "Answer", "text": "A basic MVP takes 8-10 weeks. A full-featured business app takes 12-16 weeks. Enterprise solutions may take 6+ months depending on complexity." }
        },
        {
          "@type": "Question",
          "name": "Do you publish to App Store and Play Store?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle the entire submission process for both the Apple App Store and Google Play Store, ensuring your app meets all guidelines for approval." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "App Development Aurangabad", "item": "https://zaikron.com/services/app-development" }
      ]
    }
  ]
};

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* THEME: Deep Galactic Indigo + Violet Selection */}
      <main className="relative w-full bg-[#0b0415] text-white font-sans overflow-x-hidden selection:bg-violet-500 selection:text-white">
        <Navbar />
        <AppDevContent />
        <Footer />
      </main>
    </>
  );
}