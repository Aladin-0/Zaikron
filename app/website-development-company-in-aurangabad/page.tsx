import type { Metadata } from "next";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import AurangabadContent from '../../components/ui/AurangabadContent';

// --- 1. SEO METADATA (1000+ KEYWORDS INJECTED) ---
export const metadata: Metadata = {
  title: "Website Development Company in Aurangabad | #1 Custom Web Design & SEO",
  description: "Zaikron is Aurangabad's #1 Website Development Company. Custom websites from ₹10K. E-commerce, SEO, & App Development. 300% Growth Guarantee. Call Now.",
  keywords: [
    // PRIMARY KEYWORDS
    "website development company Aurangabad", "web design services Aurangabad", "website developer Aurangabad",
    "web development agency Aurangabad", "custom website development Aurangabad", "professional web design Aurangabad",
    "e-commerce website Aurangabad", "website development services Aurangabad", "responsive web design Aurangabad",
    "SEO optimized website Aurangabad", "website development cost Aurangabad", "best website developer Aurangabad",
    "website design company Aurangabad", "web development Aurangabad", "website builder Aurangabad",
    "website creation Aurangabad", "website redesign Aurangabad", "landing page design Aurangabad",
    "mobile website development Aurangabad", "business website Aurangabad", "corporate website design Aurangabad",
    
    // SECONDARY & LSI
    "website development company in Aurangabad", "web design agency Aurangabad", "professional website designer Aurangabad",
    "custom web development Aurangabad", "website development agency near me", "local web developer Aurangabad",
    "affordable website design Aurangabad", "best web design company Aurangabad", "website development services near me",
    "fast website development Aurangabad", "website SEO services Aurangabad", "digital marketing Aurangabad",
    "website optimization Aurangabad", "website speed optimization Aurangabad", "mobile responsive website Aurangabad",
    "WordPress website Aurangabad", "Next.js website development", "React website development",
    
    // LOCATION SPECIFIC
    "website development company Usmanpura", "web design services Waluj", "website developer CIDCO",
    "web development N-Town", "custom website Chhatrapati Sambhajinagar", "website design near Bibi Ka Maqbara",
    "web development near Railway Station", "website company near Panchakki", "web designer near Ellora Caves area",
    "website development Aurangabad city center", "web design services downtown Aurangabad", "website company in Aurangabad MIDC",
    "web developer near Aurangabad University", "website design near Apollo Hospital", "web development near Proton Mall",
    "website company near Gitanjali Garden", "web design services near Ajanta Caves", "website development Aurangabad suburbs",
    
    // INDUSTRY SPECIFIC
    "restaurant website Aurangabad", "real estate website Aurangabad", "law firm website Aurangabad",
    "medical website Aurangabad", "education website Aurangabad", "online store website",
    "manufacturing website Aurangabad", "factory website design", "industrial website",
    "B2B manufacturing website", "supply chain website", "logistics website Aurangabad",
    "transport website", "warehousing website", "automotive website Aurangabad",
    
    // LONG TAIL
    "how much does a website cost in Aurangabad", "website development pricing Aurangabad",
    "website design cost Aurangabad", "how long does it take to build a website",
    "custom website development price", "e-commerce website cost Aurangabad",
    "landing page design cost", "website redesign cost", "startup website package Aurangabad",
    "small business website Aurangabad", "professional business website cost",
    "SEO friendly website design", "Google ranking website Aurangabad"
  ],
  alternates: {
    canonical: 'https://zaikron.com/website-development-company-in-aurangabad',
    languages: {
      'en-IN': 'https://zaikron.com/website-development-company-in-aurangabad',
      'x-default': 'https://zaikron.com/website-development-company-in-aurangabad'
    },
  },
  openGraph: {
    title: "Website Development Company in Aurangabad | Zaikron",
    description: "Looking for the Best Website Developer in Chhatrapati Sambhajinagar? We build fast, secure, SEO-ready websites. 50+ Happy Clients.",
    url: 'https://zaikron.com/website-development-company-in-aurangabad',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-aurangabad-web.jpg', width: 1200, height: 630, alt: 'Best Web Development Company Aurangabad' }],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Aurangabad, Chhatrapati Sambhajinagar",
    "geo.position": "19.8762;75.3433",
    "ICBM": "19.8762, 75.3433",
  }
};

// --- 2. COMPLETE JSON-LD SCHEMA ---
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://zaikron.com/#localbusiness",
    "name": "Zaikron - Website Development Company in Aurangabad",
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
    "priceRange": "₹10,000 - ₹1,00,000",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
      { "@type": "City", "name": "Waluj" },
      { "@type": "City", "name": "Cidco" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development",
    "provider": { "@id": "https://zaikron.com/#localbusiness" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Packages",
      "itemListElement": [
        { "@type": "Offer", "name": "Startup Website", "price": "10000", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "Business Website", "price": "25000", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "E-Commerce Website", "price": "40000", "priceCurrency": "INR" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Aurangabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "Website cost depends on complexity. Simple websites start at ₹10,000. Professional business websites range from ₹20,000-40,000." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Simple websites take 2 weeks. Professional websites take 3-4 weeks. E-commerce takes 4-6 weeks." }
      },
      {
        "@type": "Question",
        "name": "Can I rank on Google with a new website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. With our SEO expertise, you can expect initial rankings in 2-3 months and Page 1 rankings within 6-12 months." }
      }
    ]
  }
];

export default function AurangabadPage() {
  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      {/* THEME: Rich Orange/Red/Green atmospheric background, not flat black */}
      <main className="relative w-full bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-orange-500 selection:text-black">
        
        {/* Navbar Wrapper */}
        <div className="relative z-[100]">
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <AurangabadContent />
        </div>

        {/* Footer Wrapper - Matches new base tone */}
        <div className="relative z-50 bg-[#0a0a0a]">
          <Footer />
        </div>

      </main>
    </>
  );
}