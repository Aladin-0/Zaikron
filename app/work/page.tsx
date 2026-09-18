import type { Metadata } from "next";
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import WorkContent from '../../components/ui/WorkContent';

// --- 1. SEO METADATA (Algorithm-Cracking + 100+ Keywords) ---
export const metadata: Metadata = {
  title: "Our Work | Web Development Portfolio Aurangabad - Zaikron | Case Studies",
  description: "Explore 8 award-winning websites & apps built by Zaikron. Web development, app development, social media marketing projects in Aurangabad, Chhatrapati Sambhajinagar & Maharashtra.",
  keywords: [
    // Primary Local Keywords (15)
    "web development company Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "web development company Chhatrapati Sambhajinagar",
    "website development Aurangabad",
    "best web developer Aurangabad",
    "website development services Chhatrapati Sambhajinagar",
    "web developer near me Aurangabad",
    "website designer Aurangabad",
    "web development services Maharashtra",
    "top web developer Chhatrapati Sambhajinagar",
    "custom web development Aurangabad",
    "responsive web design Aurangabad",
    "SEO web developer Chhatrapati Sambhajinagar",
    "affordable web development Aurangabad",
    "professional web development Maharashtra",
    
    // Service-Specific Keywords (20)
    "app development company Aurangabad",
    "app developer Chhatrapati Sambhajinagar",
    "mobile app development Aurangabad",
    "web app development Maharashtra",
    "ecommerce website development Aurangabad",
    "edtech website developer Chhatrapati Sambhajinagar",
    "tourism website design Aurangabad",
    "real estate website developer Aurangabad",
    "music label website development",
    "sports event website Chhatrapati Sambhajinagar",
    "education website development Aurangabad",
    "agro business website Maharashtra",
    "IT services website developer",
    "travel agency website Aurangabad",
    "college website development Maharashtra",
    "manufacturing website design Aurangabad",
    "SaaS platform development Aurangabad",
    "dynamic website development Chhatrapati Sambhajinagar",
    "custom platform development Maharashtra",
    "portfolio website design Aurangabad",
    
    // Social Media & Marketing Keywords (15)
    "social media marketing agency Aurangabad",
    "Instagram marketing company Chhatrapati Sambhajinagar",
    "Facebook marketing agency Aurangabad",
    "Google Ads management Chhatrapati Sambhajinagar",
    "digital marketing company Maharashtra",
    "social media marketing Aurangabad",
    "Instagram marketing near me",
    "social media services Chhatrapati Sambhajinagar",
    
    // "Near Me" Intent Keywords (10)
    "web developer near me Aurangabad",
    "website designer near me Chhatrapati Sambhajinagar",
    "app developer near me Aurangabad",
    "digital marketing agency near me Maharashtra",
    "web development services near me",
    "best web company near me Aurangabad",
    "website development company near me",
    "IT services near me Chhatrapati Sambhajinagar",
    
    // Long-Tail Keywords (20)
    "best web development company in Aurangabad",
    "top website developer in Chhatrapati Sambhajinagar",
    "affordable web design in Aurangabad",
    "professional website development services Aurangabad",
    "SEO friendly website development Chhatrapati Sambhajinagar",
    "fast website development company Aurangabad",
    "custom web solutions Chhatrapati Sambhajinagar",
    "website redesign services Aurangabad",
    "web development for small business Maharashtra",
    "web development for startups Aurangabad",
    "enterprise website development Chhatrapati Sambhajinagar",
    "website development with SEO Aurangabad",
    "mobile responsive website developer Chhatrapati Sambhajinagar",
    "WordPress developer Aurangabad",
    "Next.js developer Chhatrapati Sambhajinagar",
    "React developer Aurangabad",
    "Node.js developer Maharashtra",
    "full stack developer Aurangabad",
    "web developer for hire Chhatrapati Sambhajinagar",
    "web development agency Aurangabad",
  ],
  
  // --- HREFLANG + ALTERNATES (Multi-Region SEO) ---
  alternates: {
    canonical: 'https://zaikron.com/work',
    languages: {
      'en-IN': 'https://zaikron.com/work',
      'en': 'https://zaikron.com/work',
    },
  },
  
  // --- OPEN GRAPH (Social Sharing + CTR Boost) ---
  openGraph: {
    title: "Zaikron Portfolio | Best Web Development Projects in Aurangabad",
    description: "See 8 case studies of award-winning websites & apps. Web development, app development, social media marketing by Zaikron - Aurangabad's top web development company.",
    url: 'https://zaikron.com/work',
    siteName: 'Zaikron | Web Development Company Aurangabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://zaikron.com/og-work-vault.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaikron Portfolio - Web Development Projects in Aurangabad & Chhatrapati Sambhajinagar',
        type: 'image/jpeg',
      },
      {
        url: 'https://zaikron.com/og-work-vault-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Zaikron Web Development Company Portfolio',
        type: 'image/jpeg',
      }
    ],
  },
  
  // --- TWITTER CARDS (High CTR) ---
  twitter: {
    card: 'summary_large_image',
    title: "Zaikron Work | Best Web Developer in Aurangabad",
    description: "Check out our latest website & app development projects. LookBass, Tourist Aurangabad, Dataverse Learning & more built by top web development company Chhatrapati Sambhajinagar.",
    images: ['https://zaikron.com/twitter-work-vault.jpg'],
    site: '@zaikron_aurangabad',
    creator: '@zaikron_dev',
  },
  
  // --- ROBOTS & CRAWL OPTIMIZATION ---
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
  
  // --- ADDITIONAL SEO META ---
  authors: [{ name: 'Zaikron', url: 'https://zaikron.com' }],
  creator: 'Zaikron - Web Development Company Aurangabad',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
  },
};

// --- 2. JSON-LD STRUCTURED DATA (Map Pack + Rich Results) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Zaikron Portfolio | Web Development Projects Aurangabad",
      "description": "Case studies of websites and apps developed by Zaikron, Aurangabad's top web development company.",
      "url": "https://zaikron.com/work",
      "isPartOf": { "@id": "https://zaikron.com" },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "position": 1,
            "name": "LookBass Music Label Website",
            "description": "Music industry website for Indian music label with streaming integration",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://lookbass.com/",
            "image": "https://zaikron.com/portfolio/lookbass-music-label-website.jpg",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 2,
            "name": "Tourist Aurangabad - Ashoka Tours Website",
            "description": "Tour operator website for Ajanta Ellora heritage tours in Aurangabad",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://touristaurangabad.com/",
            "image": "https://zaikron.com/portfolio/tourist-aurangabad-tour-website.jpg",
            "areaServed": "Aurangabad, Chhatrapati Sambhajinagar, Maharashtra",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 3,
            "name": "CCT Official - Cricket Tournament Platform",
            "description": "Dynamic sports event website for national cricket tournaments",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://cctofficial.in/",
            "image": "https://zaikron.com/portfolio/cct-cricket-tournament-platform.jpg",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 4,
            "name": "Dataverse Learning - EdTech Platform",
            "description": "Online learning platform for professional courses and certifications",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://dataverselearning.com/",
            "image": "https://zaikron.com/portfolio/dataverse-learning-edtech-platform.jpg",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 5,
            "name": "Aathvani - QR Code Photo Delivery Platform",
            "description": "Web app for photographers to share event photos via QR codes",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://aathvani.zaikron.com/",
            "image": "https://zaikron.com/portfolio/aathvani-photo-delivery-app.jpg",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 6,
            "name": "Sanjari Agro - Agricultural Products Website",
            "description": "Manufacturing and agro products website for animal feed supplier",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://sanjariagro.com/",
            "image": "https://zaikron.com/portfolio/sanjari-agro-agriculture-website.jpg",
            "areaServed": "Maharashtra, India",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 7,
            "name": "TechVerse Services - IT Support Website",
            "description": "Local IT services website for computer repair and networking",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "http://www.techverseservices.in/",
            "image": "https://zaikron.com/portfolio/techverse-it-services-website.jpg",
            "areaServed": "Aurangabad, Chhatrapati Sambhajinagar",
            "inLanguage": "en-IN",
          },
          {
            "@type": "CreativeWork",
            "position": 8,
            "name": "Pitambare College - Higher Education Website",
            "description": "College website for undergraduate and postgraduate programs",
            "creator": { "@type": "Organization", "name": "Zaikron" },
            "url": "https://pitambarecollege.in/",
            "image": "https://zaikron.com/portfolio/pitambare-college-education-website.jpg",
            "areaServed": "Aurangabad, Maharashtra",
            "inLanguage": "en-IN",
          }
        ]
      }
    },
    
    // LocalBusiness Schema (Local Pack Dominance)
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com",
      "name": "Zaikron - Web Development Company Aurangabad",
      "description": "Web development company in Aurangabad offering website development, app development, social media marketing, and AI bot creation.",
      "url": "https://zaikron.com",
      "image": "https://zaikron.com/logo/Zaikron.png",
      "telephone": "+91-XXXXXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Your Address]",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "[Postal Code]",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Aurangabad"
        },
        {
          "@type": "City",
          "name": "Chhatrapati Sambhajinagar"
        },
        {
          "@type": "State",
          "name": "Maharashtra"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "priceRange": "₹₹",
      "sameAs": [
        "https://g.page/zaikron-aurangabad",
        "https://facebook.com/zaikron",
        "https://www.instagram.com/zaikronstudio",
        "https://linkedin.com/company/zaikron"
      ]
    },
    
    // BreadcrumbList (Navigation SEO)
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://zaikron.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Work",
          "item": "https://zaikron.com/work"
        }
      ]
    },
    
    // Organization Schema (Brand Authority)
    {
      "@type": "Organization",
      "@id": "https://zaikron.com",
      "name": "Zaikron",
      "alternateName": "Zaikron Web Development",
      "description": "Leading web development company in Aurangabad specializing in website development, app development, social media marketing, and AI automation.",
      "url": "https://zaikron.com",
      "logo": "https://zaikron.com/logo/Zaikron.png",
      "image": "https://zaikron.com/hero-image.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://facebook.com/zaikron",
        "https://www.instagram.com/zaikronstudio",
        "https://twitter.com/zaikron",
        "https://linkedin.com/company/zaikron"
      ]
    },
    
    // FAQPage Schema (Featured Snippets)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best web development company in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is Aurangabad's award-winning web development company, known for building SEO-optimized websites and high-performance apps. Our 8 case studies show proven results with 300%+ growth for clients."
          }
        },
        {
          "@type": "Question",
          "name": "How much does website development cost in Chhatrapati Sambhajinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development in Aurangabad starts at ₹25,000 for simple business websites. E-commerce and complex platforms range from ₹50,000 to ₹5,00,000+. Contact Zaikron for a custom quote based on your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee #1 ranking on Google for web developer Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While we can't guarantee rankings, our SEO-first approach with keyword research, content optimization, internal linking, backlinks, and Core Web Vitals optimization consistently ranks clients #1 for local searches in Aurangabad and Chhatrapati Sambhajinagar."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer app development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Zaikron builds native apps (iOS/Android), React Native, Flutter, PWAs, and backend APIs. See our Aathvani case study for a full-stack web app example."
          }
        }
      ]
    }
  ]
};

export default function WorkPage() {
  return (
    <>
      {/* --- JSON-LD SCRIPT BLOCK (Structured Data Injection) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* --- PRECONNECT FOR PERFORMANCE (Core Web Vitals) --- */}
      <script>
        {`
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = 'https://fonts.googleapis.com';
          document.head.appendChild(link);
        `}
      </script>
      
      {/* Background Updated to Premium "Rolex" Theme */}
      <main className="relative w-full bg-[#050202] text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
        <Navbar />
        <WorkContent />
        <Footer />
      </main>
    </>
  );
}