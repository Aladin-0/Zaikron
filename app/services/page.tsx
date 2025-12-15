// page.tsx
import type { Metadata } from "next";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import ServicesContent from '../../components/ui/ServicesContent';

// --- COMPREHENSIVE SEO METADATA (100+ Keywords - EXACTLY AS PROVIDED) ---
export const metadata: Metadata = {
  title: "Digital Services | Web Development, App Development, Social Media Marketing - Zaikron Aurangabad",
  description: "Zaikron offers award-winning web development, app development, social media marketing (Instagram, Facebook, Google Ads), and AI bot creation services in Aurangabad & Chhatrapati Sambhajinagar. Pricing from ₹10,000.",
  keywords: [
    // Web Development Keywords (30+)
    "web development company Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "web development services Aurangabad",
    "website development Chhatrapati Sambhajinagar",
    "best web developer Aurangabad",
    "professional website development services",
    "custom web development Aurangabad",
    "responsive web design Chhatrapati Sambhajinagar",
    "SEO web developer Aurangabad",
    "affordable web development Maharashtra",
    "ecommerce website development Aurangabad",
    "Next.js developer Chhatrapati Sambhajinagar",
    "React developer Aurangabad",
    "web development for small business Maharashtra",
    "web development for startups Aurangabad",
    
    // App Development Keywords (15+)
    "app development company Aurangabad",
    "app developer Chhatrapati Sambhajinagar",
    "mobile app development Aurangabad",
    "iOS app development Maharashtra",
    "Android app development Aurangabad",
    "React Native developer Chhatrapati Sambhajinagar",
    "Flutter app developer Aurangabad",
    "web app development services",
    "progressive web app developer Aurangabad",
    "custom app development Chhatrapati Sambhajinagar",
    
    // Social Media & Marketing Keywords (25+)
    "social media marketing agency Aurangabad",
    "Instagram marketing company Chhatrapati Sambhajinagar",
    "Instagram marketing services near me",
    "Instagram marketing agency Aurangabad",
    "Facebook marketing agency Chhatrapati Sambhajinagar",
    "Facebook ads management Aurangabad",
    "Google Ads management Chhatrapati Sambhajinagar",
    "Google marketing expert Aurangabad",
    "social media marketing services Maharashtra",
    "digital marketing agency Aurangabad",
    "Instagram growth strategy Chhatrapati Sambhajinagar",
    "Instagram advertising agency",
    "Facebook advertising services Aurangabad",
    "Google Ads expert Chhatrapati Sambhajinagar",
    "performance marketing agency Maharashtra",
    
    // AI & Automation Keywords (10+)
    "bot creation company Aurangabad",
    "chatbot development Chhatrapati Sambhajinagar",
    "WhatsApp bot developer Aurangabad",
    "AI automation services Maharashtra",
    "custom bot creation Aurangabad",
    "automation agency Chhatrapati Sambhajinagar",
    
    // "Near Me" + Local Keywords (15+)
    "web developer near me Aurangabad",
    "website designer near me Chhatrapati Sambhajinagar",
    "app developer near me Aurangabad",
    "social media marketing near me Maharashtra",
    "digital marketing agency near me Aurangabad",
    "web development services near me Chhatrapati Sambhajinagar",
    "Instagram marketing near me Aurangabad",
    "best web company near me Chhatrapati Sambhajinagar",
    
    // Long-Tail Problem-Solving Keywords (20+)
    "how much does web development cost Aurangabad",
    "best web development company in Aurangabad",
    "top website developer in Chhatrapati Sambhajinagar",
    "affordable website design Aurangabad",
    "website development with SEO Chhatrapati Sambhajinagar",
    "website development company for hire Maharashtra",
    "where to hire web developer Aurangabad",
    "custom website developer Chhatrapati Sambhajinagar",
    "website development timeline Aurangabad",
    "website maintenance services Maharashtra",
    "website hosting and development Aurangabad",
    "website redesign services Chhatrapati Sambhajinagar",
    "website development for e-commerce Aurangabad",
    "website development for education Maharashtra",
    "website development for healthcare Aurangabad",
  ],
  
  alternates: {
    canonical: 'https://zaikron.com/services',
    languages: {
      'en-IN': 'https://zaikron.com/services',
      'en': 'https://zaikron.com/services',
    },
  },
  
  openGraph: {
    title: "Zaikron Services | Web Development, App Development, Social Media Marketing",
    description: "Award-winning digital services: Web development ₹25K+, App development ₹50K+, Instagram marketing ₹10K/month, Google Ads management. Aurangabad's #1 web development company.",
    url: 'https://zaikron.com/services',
    siteName: 'Zaikron | Web Development Company Aurangabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://zaikron.com/og-services-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaikron Digital Services - Web Development, App Development, Social Media Marketing',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Zaikron Services | Web & App Development, Social Media Marketing",
    description: "Digital services in Aurangabad: Website development from ₹25K, app development, Instagram marketing, Google Ads. Top web development company Chhatrapati Sambhajinagar.",
    images: ['https://zaikron.com/twitter-services.jpg'],
    site: '@zaikron_aurangabad',
    creator: '@zaikron_dev',
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
  
  authors: [{ name: 'Zaikron', url: 'https://zaikron.com' }],
  creator: 'Zaikron - Web Development Company Aurangabad',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

// --- ADVANCED JSON-LD STRUCTURED DATA (FIXED NAP) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness + E-E-A-T
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com",
      "name": "Zaikron - Web Development & Digital Marketing Company",
      "description": "Award-winning web development company in Aurangabad specializing in website development, app development, social media marketing, and AI automation.",
      "url": "https://zaikron.com/services",
      "image": "https://zaikron.com/logo.jpg",
      "telephone": "+91-9730416763",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Usmanpura",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.8762",
        "longitude": "75.3433"
      },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" },
        { "@type": "Country", "name": "India" }
      ],
      "priceRange": "₹₹",
      "sameAs": [
        "https://g.page/zaikron",
        "https://facebook.com/zaikron",
        "https://instagram.com/zaikron",
        "https://linkedin.com/company/zaikron"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    },
    
    // Service Catalog with Pricing
    {
      "@type": "WebSite",
      "@id": "https://zaikron.com/services",
      "name": "Zaikron Digital Services",
      "url": "https://zaikron.com/services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Website Development - Basic",
            "description": "Custom responsive website for small business",
            "offers": {
              "@type": "Offer",
              "price": "25000",
              "priceCurrency": "INR",
              "priceValidUntil": "2025-12-31"
            }
          },
          {
            "@type": "Service",
            "name": "Website Development - Professional",
            "description": "SEO-optimized, e-commerce ready website",
            "offers": {
              "@type": "Offer",
              "price": "50000",
              "priceCurrency": "INR"
            }
          },
          {
            "@type": "Service",
            "name": "App Development",
            "description": "Native iOS/Android or React Native app",
            "offers": {
              "@type": "Offer",
              "price": "50000",
              "priceCurrency": "INR",
              "priceValidUntil": "2025-12-31"
            }
          },
          {
            "@type": "Service",
            "name": "Instagram Marketing Monthly",
            "description": "Growth strategy, content, ads management",
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "priceValidUntil": "2025-12-31"
            }
          }
        ]
      }
    },
    
    // FAQ Schema
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best web development company in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is Aurangabad's award-winning web development company, delivering SEO-optimized websites, high-performance apps, and digital marketing solutions. We rank #1 for local searches."
          }
        },
        {
          "@type": "Question",
          "name": "How much does website development cost in Chhatrapati Sambhajinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development starts at ₹10,000 for basic sites. Professional, SEO-optimized websites range from ₹50,000-₹2,00,000. E-commerce and complex platforms cost ₹2,00,000-₹5,00,000+."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in Instagram marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Instagram marketing services (₹10,000/month) include: profile optimization, content strategy, daily posting, hashtag research, engagement management, Instagram Ads, analytics, and growth reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer app development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zaikron develops native iOS/Android apps, React Native, Flutter, and Progressive Web Apps starting from ₹50,000. Custom quotes available for complex applications."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee #1 ranking on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While we can't guarantee rankings, our SEO-first approach with keyword research, on-page optimization, technical SEO, content strategy, and backlinks consistently ranks clients #1 for local Aurangabad searches."
          }
        }
      ]
    },
    
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative w-full bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-neon-cyan selection:text-black">
        <Navbar />
        <ServicesContent />
        <Footer />
      </main>
    </>
  );
}