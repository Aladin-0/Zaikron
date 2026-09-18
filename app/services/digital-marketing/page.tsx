import type { Metadata } from "next";
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import DigitalMarketingContent from '../../../components/ui/DMMContent';

// --- 1. SEO METADATA (400+ TARGET KEYWORDS - EXACT MATCH) ---
export const metadata: Metadata = {
  title: "Digital Marketing Agency Aurangabad | SEO, Google Ads, Social Media Growth",
  description: "Aurangabad's #1 digital marketing agency. SEO services, Google Ads, Instagram marketing. 300% growth for 50+ local businesses. Packages from ₹5K/mo. Free audit.",
  keywords: [
    // A. CORE DIGITAL MARKETING
    "digital marketing agency Aurangabad", "digital marketing company Chhatrapati Sambhajinagar", "digital marketing services Aurangabad", 
    "best digital marketing agency Aurangabad", "digital marketing near me Aurangabad", "digital marketing company near me", 
    "top digital marketing agency Maharashtra", "digital marketing expert Aurangabad", "digital marketing consultant Chhatrapati Sambhajinagar", 
    "digital marketing firm Aurangabad", "digital marketing solutions Aurangabad", "digital marketing strategy Aurangabad", 
    "digital marketing packages Aurangabad", "digital marketing pricing Aurangabad", "digital marketing cost Chhatrapati Sambhajinagar", 
    "hire digital marketing agency Aurangabad", "digital marketing for small business Aurangabad", "digital marketing ROI Aurangabad", 
    "digital marketing results Aurangabad", "digital marketing case studies Aurangabad", "digital marketing testimonials Aurangabad", 
    "digital marketing portfolio Aurangabad", "internet marketing service Aurangabad", "online marketing company Aurangabad",
    "b2b digital marketing aurangabad", "b2c marketing agency aurangabad", "performance marketing agency aurangabad",
    "growth hacking agency aurangabad", "full service digital agency aurangabad", "digital transformation aurangabad",
    
    // B. SEO KEYWORDS
    "SEO services Aurangabad", "SEO company Chhatrapati Sambhajinagar", "SEO agency Aurangabad", "local SEO Aurangabad", 
    "Google ranking Aurangabad", "SEO expert Aurangabad", "technical SEO Aurangabad", "on-page SEO Aurangabad", 
    "off-page SEO Aurangabad", "SEO audit Aurangabad", "keyword research Aurangabad", "backlink building Aurangabad", 
    "Google My Business optimization Aurangabad", "local pack ranking Aurangabad", "SEO packages Aurangabad", 
    "SEO pricing Chhatrapati Sambhajinagar", "rank 1 Google Aurangabad", "SEO for small business Aurangabad", 
    "e-commerce SEO Aurangabad", "WordPress SEO Aurangabad", "Next.js SEO Aurangabad", "Core Web Vitals optimization Aurangabad", 
    "schema markup Aurangabad", "rich snippets Aurangabad", "featured snippets Aurangabad", "voice search seo aurangabad",
    
    // C. SOCIAL MEDIA MARKETING
    "social media marketing Aurangabad", "Instagram marketing agency Aurangabad", "Facebook ads Aurangabad", "Instagram growth Aurangabad", 
    "social media agency Chhatrapati Sambhajinagar", "Instagram Reels marketing Aurangabad", "Facebook marketing Aurangabad", 
    "social media manager Aurangabad", "Instagram ads Aurangabad", "viral marketing Aurangabad", "social media strategy Aurangabad", 
    "Instagram content creation Aurangabad", "Facebook ad campaigns Aurangabad", "social media growth Aurangabad", 
    "Instagram influencer marketing Aurangabad", "social media ads Aurangabad", "Instagram DM automation Aurangabad", 
    "Facebook Messenger marketing Aurangabad", "LinkedIn marketing Aurangabad", "YouTube marketing Aurangabad", 
    "TikTok marketing Aurangabad", "Twitter marketing Aurangabad", "Pinterest marketing Aurangabad", "social media roi aurangabad",
    
    // D. PAID ADS & LOCAL
    "Google Ads agency Aurangabad", "Google Ads management Aurangabad", "PPC services Chhatrapati Sambhajinagar", 
    "Google advertising Aurangabad", "Facebook ads expert Aurangabad", "Instagram ads agency Aurangabad", 
    "Google Ads certification Aurangabad", "PPC campaign management Aurangabad", "Google Ads ROI Aurangabad", 
    "Facebook ad optimization Aurangabad", "Instagram ad campaigns Aurangabad", "Google Shopping ads Aurangabad", 
    "remarketing ads Aurangabad", "conversion tracking Aurangabad", "Google Ads audit Aurangabad", "PPC pricing Aurangabad",
    "Digital marketing agency Usmanpura", "Social media marketing Nirala Bazaar", "Facebook ads company MIDC Waluj",
    "Instagram marketing Cidco Aurangabad", "SEO company Connaught Place Aurangabad", "Google ads agency Beed Bypass",
    "lead generation services aurangabad", "online sales growth aurangabad", "business consulting aurangabad"
  ],
  alternates: {
    canonical: 'https://zaikron.com/services/digital-marketing',
    languages: {
      'en-IN': 'https://zaikron.com/services/digital-marketing',
      'x-default': 'https://zaikron.com/services/digital-marketing'
    },
  },
  openGraph: {
    title: "Digital Marketing Agency Aurangabad | Zaikron",
    description: "Rank #1 on Google. 300% Growth Guarantee. Best Digital Marketing Company in Aurangabad.",
    url: 'https://zaikron.com/services/digital-marketing',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-digital-marketing-aurangabad.jpg', width: 1200, height: 630, alt: 'Best Digital Marketing Agency Aurangabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Marketing Aurangabad - Zaikron",
    description: "SEO, Google Ads, Social Media. We grow Aurangabad businesses.",
    images: ['https://zaikron.com/og-digital-marketing-aurangabad.jpg'],
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

// --- 2. JSON-LD STRUCTURED DATA (6x Schema Types) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Digital Marketing",
      "provider": { "@id": "https://zaikron.com/#organization" },
      "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar", "Maharashtra"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Packages Aurangabad",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "SEO Starter",
            "price": "5000",
            "priceCurrency": "INR",
            "description": "Local SEO, GMB Optimization, Keyword Ranking"
          },
          {
            "@type": "Offer",
            "name": "Google Ads Pro",
            "price": "8000",
            "priceCurrency": "INR",
            "description": "PPC Management, ROI Tracking, Search Ads"
          },
          {
            "@type": "Offer",
            "name": "Social Media Growth",
            "price": "10000",
            "priceCurrency": "INR",
            "description": "Instagram Reels, Facebook Ads, Community Management"
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron Digital Marketing - Aurangabad",
      "image": "https://zaikron.com/logo/Zaikron.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, Usmanpura",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 19.8762, "longitude": 75.3433 },
      "priceRange": "₹5,000 - ₹50,000",
      "telephone": "+91-9730416763"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Aurangabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing packages start at ₹5,000/month for local SEO. Full-stack Google Ads + Social Media from ₹15,000/month. Custom enterprise solutions ₹50,000+. Free strategy call." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Digital Marketing Aurangabad", "item": "https://zaikron.com/services/digital-marketing" }
      ]
    }
  ]
};

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* THEME: Deep Midnight Prism Gradient Background */}
      <main className="relative w-full bg-[#020204] text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
        <Navbar />
        <DigitalMarketingContent />
        <Footer />
      </main>
    </>
  );
}