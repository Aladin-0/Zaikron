import type { Metadata } from "next";
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import WebDevContent from '../../../components/ui/WebDevContent';

// --- 1. SEO METADATA (Keyword Density: Extreme) ---
export const metadata: Metadata = {
  title: "Web Development Services Aurangabad - Custom Websites ₹10K+ | Zaikron",
  description: "Rank #1 with Zaikron's Web Development Services in Aurangabad. Custom Next.js websites, E-commerce, & SEO. Best Website Developer Chhatrapati Sambhajinagar. Get Free Quote.",
  keywords: [
    // Core Location Keywords
    "Web Development Services Aurangabad", "Website Developer Aurangabad", "Web Design Company Aurangabad",
    "Website Development Chhatrapati Sambhajinagar", "Best Web Developer Aurangabad", "Web Designer Near Me",
    "Website Maker in Aurangabad", "Web Development Agency Usmanpura", "IT Services Aurangabad",
    
    // Service Specific
    "Custom Website Development ₹10000", "Ecommerce Website Developer Aurangabad", "WordPress vs Custom Code",
    "Next.js Developer Maharashtra", "React Website Development", "SEO Friendly Website Design",
    "Small Business Website Aurangabad", "Corporate Website Design", "Landing Page Design Aurangabad",
    
    // Problem Solving
    "How to make website in Aurangabad", "Cost of website in Aurangabad", "Hire web developer cheap",
    "Fast loading website developer", "Secure website development", "Mobile responsive design services",
    
    // Areas & Intent
    "Web Developer Usmanpura", "Website Design Nirala Bazaar", "Web Agency MIDC Waluj", "Cidco Aurangabad Web Dev",
    "Real Estate Website Developer Aurangabad", "Hospital Website Design Chhatrapati Sambhajinagar", "School Website Maker Aurangabad"
  ],
  alternates: {
    canonical: 'https://zaikron.com/services/web-development',
    languages: {
      'en-IN': 'https://zaikron.com/services/web-development',
      'x-default': 'https://zaikron.com/services/web-development'
    },
  },
  openGraph: {
    title: "Web Development Services Aurangabad | Zaikron",
    description: "Get a high-performance website starting at ₹10K. Zaikron is Aurangabad's #1 Web Development Agency. Call Now.",
    url: 'https://zaikron.com/services/web-development',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-web-dev-aurangabad.jpg', width: 1200, height: 630, alt: 'Web Development Services Aurangabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Development Aurangabad - Zaikron",
    description: "Custom websites from ₹10K. Best developer in Chhatrapati Sambhajinagar.",
    images: ['https://zaikron.com/og-web-dev-aurangabad.jpg'],
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
      "serviceType": "Web Development",
      "provider": { "@id": "https://zaikron.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Business Website",
            "price": "10000",
            "priceCurrency": "INR",
            "description": "5 Page Static Website, Contact Form, Basic SEO"
          },
          {
            "@type": "Offer",
            "name": "Professional Dynamic Website",
            "price": "25000",
            "priceCurrency": "INR",
            "description": "CMS, Admin Panel, Advanced SEO, Blog"
          },
          {
            "@type": "Offer",
            "name": "E-commerce Store",
            "price": "50000",
            "priceCurrency": "INR",
            "description": "Payment Gateway, Product Catalog, Cart, User Dashboard"
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - Web Development Services Aurangabad",
      "image": "https://zaikron.com/logo.png",
      "telephone": "+919730416763",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
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
      "priceRange": "₹10,000 - ₹5,00,000"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a website cost in Aurangabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Basic websites start at ₹10,000. Custom business websites range from ₹25,000 to ₹50,000 depending on features." }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance in Chhatrapati Sambhajinagar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, Zaikron offers ongoing AMC (Annual Maintenance Contracts) including security updates, content changes, and backups." }
        },
        {
          "@type": "Question",
          "name": "Which technology do you use for web development?",
          "acceptedAnswer": { "@type": "Answer", "text": "We use modern stacks: Next.js, React.js, Node.js, and PostgreSQL for fast, secure, and scalable websites." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Web Development Aurangabad", "item": "https://zaikron.com/services/web-development" }
      ]
    }
  ]
};

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* UPDATED: Deep Forest Midnight Background & Amber Selection */}
      <main className="relative w-full bg-[#04090b] text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
        <Navbar />
        <WebDevContent />
        <Footer />
      </main>
    </>
  );
}