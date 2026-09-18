import type { Metadata } from "next";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import AurangabadContent from '../../components/ui/AurangabadContent';

// --- 1. SEO METADATA (1000+ KEYWORDS INJECTED) ---
export const metadata: Metadata = {
  title: "Website Development Company in Aurangabad | Zaikron — Local, Fast & SEO-Ready",
  description: "Zaikron is Aurangabad's leading local website development company. Custom websites from ₹15,000, e-commerce from ₹60,000. Serving Cidco, Waluj, Garkheda, Usmanpura & all of Chhatrapati Sambhajinagar. Call +91-9730416763.",
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
    "image": "https://zaikron.com/logo/Zaikron.png",
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
    "priceRange": "₹15,000 - ₹5,00,000",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "areaServed": [
      { "@type": "City", "name": "Aurangabad" },
      { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
      { "@type": "Neighborhood", "name": "Waluj MIDC" },
      { "@type": "Neighborhood", "name": "Cidco" },
      { "@type": "Neighborhood", "name": "Garkheda" },
      { "@type": "Neighborhood", "name": "Usmanpura" },
      { "@type": "Neighborhood", "name": "Shendra MIDC" },
      { "@type": "Neighborhood", "name": "N-Town" },
      { "@type": "Neighborhood", "name": "Auric City" }
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
        { "@type": "Offer", "name": "Starter Website", "price": "15000", "priceCurrency": "INR", "priceValidUntil": "2026-12-31" },
        { "@type": "Offer", "name": "Business Website", "price": "30000", "priceCurrency": "INR", "priceValidUntil": "2026-12-31" },
        { "@type": "Offer", "name": "E-Commerce Website", "price": "60000", "priceCurrency": "INR", "priceValidUntil": "2026-12-31" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best website development company in Aurangabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "Zaikron is one of the top website development companies in Aurangabad (Chhatrapati Sambhajinagar). We are a genuinely local team based in Usmanpura, Aurangabad — not a Mumbai agency with a branch address. We build fast, SEO-optimized websites starting from ₹15,000." }
      },
      {
        "@type": "Question",
        "name": "How much does a website cost in Aurangabad in 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "Website development cost in Aurangabad starts from ₹15,000 for a basic business website. A professional SEO website costs ₹25,000–₹40,000. E-commerce websites start from ₹60,000. Zaikron offers free consultation." }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website in Aurangabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "Zaikron delivers basic websites in 1–2 weeks. Professional websites in 2–4 weeks. E-commerce in 4–6 weeks." }
      },
      {
        "@type": "Question",
        "name": "Can I rank on Google with a new website?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. With our SEO-first websites, you can expect initial Google rankings in 1–2 months for local Aurangabad searches and stronger rankings in 3–6 months." }
      },
      {
        "@type": "Question",
        "name": "Do you build websites for MIDC companies in Aurangabad?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Zaikron specialises in professional websites for manufacturers and exporters in Waluj MIDC, Shendra MIDC, Chikalthana MIDC, and Auric City, Aurangabad." }
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