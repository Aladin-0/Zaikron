// about/page.tsx
import type { Metadata } from "next";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import AboutContent from '../../components/ui/About';

// --- 1. SEO METADATA (Algorithm-Cracking) ---
export const metadata: Metadata = {
  title: "About Zaikron | #1 Web Development Company Aurangabad",
  description: "Zaikron is the leading Web Development Company in Aurangabad (Chhatrapati Sambhajinagar). Experts in SEO, App Development, and Social Media Marketing.",
  keywords: [
    "web development company Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "best web development company Aurangabad",
    "digital marketing agency Aurangabad",
    "SEO company Aurangabad",
    "app development company Aurangabad",
    "social media marketing agency Aurangabad",
    "website designer Aurangabad",
    "Instagram marketing Aurangabad", 
    "AI bot creation services Aurangabad"
  ],
  alternates: {
    canonical: 'https://zaikron.com/about',
    languages: {
      'en-IN': 'https://zaikron.com/about',
      'x-default': 'https://zaikron.com/about',
    },
  },
  openGraph: {
    title: "About Zaikron | Top Website Developer Aurangabad",
    description: "We are the best website development company in Aurangabad. Partner with us for SEO, Apps, and Digital Growth.",
    url: 'https://zaikron.com/about',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://zaikron.com/og-about-spectrum.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaikron Agency Office - Aurangabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Zaikron - #1 Web Agency Maharashtra",
    description: "Leading App & Web Developers in Chhatrapati Sambhajinagar.",
    images: ['https://zaikron.com/twitter-about-spectrum.jpg'],
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

// --- 2. JSON-LD SCHEMA (Organization + LocalBusiness + FAQ) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zaikron.com/#organization",
      "name": "Zaikron",
      "url": "https://zaikron.com",
      "logo": "https://zaikron.com/logo/Zaikron.png",
      "sameAs": [
        "https://www.instagram.com/zaikronstudio",
        "https://facebook.com/zaikron"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9730416763",
        "contactType": "sales",
        "areaServed": ["IN"],
        "availableLanguage": ["en", "hi", "mr"]
      }
    },
    {
      "@type": "LocalBusiness",
      "parentOrganization": { "@id": "https://zaikron.com/#organization" },
      "name": "Zaikron - Web Development Company Aurangabad",
      "image": "https://zaikron.com/office.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
        "addressLocality": "Chhatrapati Sambhajinagar",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.8762,
        "longitude": 75.3433
      },
      "priceRange": "₹10,000 - ₹5,00,000",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Zaikron and what does the company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is a web development and digital marketing company in Aurangabad (Chhatrapati Sambhajinagar) offering website development, app development, social media marketing, Google marketing, and AI/bot automation."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Zaikron as your website developer in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron combines modern web technologies (Next.js), SEO best practices, and local market insight to build websites that load fast, rank high, and convert visitors."
          }
        },
        {
          "@type": "Question",
          "name": "Does Zaikron provide social media and Instagram marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Zaikron acts as a social media marketing agency in Aurangabad, managing Instagram marketing, Facebook ads, and Google Ads campaigns tailored for local and 'near me' search intent."
          }
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative w-full bg-[#08080c] text-white font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
        <Navbar />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}