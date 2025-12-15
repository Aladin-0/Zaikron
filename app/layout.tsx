import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/ui/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const space = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space' 
});

// --- COMPREHENSIVE SEO METADATA (300+ Keywords) ---
export const metadata: Metadata = {
  title: "Zaikron | #1 Web Development & AI Agency Chhatrapati Sambhajinagar, Aurangabad, Maharashtra",
  description: "Rank #1 with Zaikron - Aurangabad's top web development company offering custom website development, app development (iOS/Android), social media marketing (Instagram/Facebook), AI chatbots, and digital solutions. Award-winning agency in Chhatrapati Sambhajinagar, Maharashtra.",
  
  keywords: [
    // Tier 1: Core Location Keywords (40+)
    "web development company Aurangabad", "website developer Chhatrapati Sambhajinagar",
    "web development services Maharashtra", "website design Aurangabad", 
    "best web developer Chhatrapati Sambhajinagar", "professional web development Aurangabad",
    "custom website development Chhatrapati Sambhajinagar", "web development agency Maharashtra",
    "top web development company Aurangabad", "website development services Chhatrapati Sambhajinagar",
    "web developer near me", "website designer Aurangabad", "web design company Chhatrapati Sambhajinagar",
    "responsive web design Aurangabad", "SEO web developer Chhatrapati Sambhajinagar",
    "affordable web development Aurangabad", "ecommerce website developer Chhatrapati Sambhajinagar",
    "WordPress developer Aurangabad", "Next.js developer Chhatrapati Sambhajinagar",
    "React developer Aurangabad", "Node.js developer Chhatrapati Sambhajinagar",
    "full stack developer Aurangabad", "web application development Chhatrapati Sambhajinagar",
    "website optimization services Aurangabad", "web maintenance services Chhatrapati Sambhajinagar",
    "website security Aurangabad", "website hosting Chhatrapati Sambhajinagar",
    "domain registration Aurangabad", "SSL certificate Chhatrapati Sambhajinagar",
    "website redesign Aurangabad", "website migration services Chhatrapati Sambhajinagar",
    
    // Tier 2: App Development Keywords (25+)
    "app development company Aurangabad", "mobile app developer Chhatrapati Sambhajinagar",
    "iOS app development Aurangabad", "Android app developer Chhatrapati Sambhajinagar",
    "React Native developer Aurangabad", "Flutter app developer Chhatrapati Sambhajinagar",
    "cross-platform app development Aurangabad", "native mobile app Chhatrapati Sambhajinagar",
    "web app development Aurangabad", "progressive web app Chhatrapati Sambhajinagar",
    "app developer for hire Aurangabad", "startup app development Chhatrapati Sambhajinagar",
    "enterprise app development Aurangabad", "SaaS development Chhatrapati Sambhajinagar",
    "API development Aurangabad", "backend development Chhatrapati Sambhajinagar",
    
    // Tier 3: Social Media Marketing Keywords (35+)
    "social media marketing agency Aurangabad", "Instagram marketing Chhatrapati Sambhajinagar",
    "Facebook advertising Aurangabad", "Google Ads management Chhatrapati Sambhajinagar",
    "social media growth Aurangabad", "Instagram growth hacking Chhatrapati Sambhajinagar",
    "Facebook marketing agency Aurangabad", "Google marketing expert Chhatrapati Sambhajinagar",
    "social media content creation Aurangabad", "social media management Chhatrapati Sambhajinagar",
    "Instagram ads specialist Aurangabad", "Facebook ads manager Chhatrapati Sambhajinagar",
    "Google Ads specialist Aurangabad", "social media strategy Chhatrapati Sambhajinagar",
    "influencer marketing Aurangabad", "brand marketing agency Chhatrapati Sambhajinagar",
    "digital marketing company Aurangabad", "marketing automation Chhatrapati Sambhajinagar",
    "email marketing services Aurangabad", "content marketing agency Chhatrapati Sambhajinagar",
    "SEO marketing Aurangabad", "conversion rate optimization Chhatrapati Sambhajinagar",
    "social media advertising Aurangabad", "paid social media Chhatrapati Sambhajinagar",
    
    // Tier 4: AI & Bot Creation Keywords (20+)
    "AI chatbot development Aurangabad", "chatbot creation Chhatrapati Sambhajinagar",
    "WhatsApp bot developer Aurangabad", "ChatGPT bot integration Chhatrapati Sambhajinagar",
    "AI automation services Aurangabad", "customer service bot Chhatrapati Sambhajinagar",
    "conversational AI Aurangabad", "bot development company Chhatrapati Sambhajinagar",
    "machine learning development Aurangabad", "AI solutions Chhatrapati Sambhajinagar",
    "automation agency Aurangabad", "business automation Chhatrapati Sambhajinagar",
    "AI chatbot services Aurangabad", "intelligent automation Chhatrapati Sambhajinagar",
    
    // Tier 5: SEO & Content Keywords (30+)
    "SEO agency Aurangabad", "search engine optimization Chhatrapati Sambhajinagar",
    "local SEO Aurangabad", "Google ranking Chhatrapati Sambhajinagar",
    "keyword research Aurangabad", "backlink building Chhatrapati Sambhajinagar",
    "technical SEO Aurangabad", "on-page SEO Chhatrapati Sambhajinagar",
    "SEO copywriting Aurangabad", "SEO audit services Chhatrapati Sambhajinagar",
    "content marketing Aurangabad", "blog writing services Chhatrapati Sambhajinagar",
    "SEO content creation Aurangabad", "meta tag optimization Chhatrapati Sambhajinagar",
    "schema markup Aurangabad", "Google Business profile Chhatrapati Sambhajinagar",
    "local citations Aurangabad", "review management Chhatrapati Sambhajinagar",
    "reputation management Aurangabad", "brand monitoring Chhatrapati Sambhajinagar",
    "competitive analysis Aurangabad", "market research Chhatrapati Sambhajinagar",
    
    // Tier 6: "Near Me" Intent Keywords (20+)
    "web developer near me", "website designer near me Aurangabad",
    "app developer near me Chhatrapati Sambhajinagar", "digital marketing near me Aurangabad",
    "social media marketing near me Chhatrapati Sambhajinagar", "web design near me Aurangabad",
    "IT services near me Chhatrapati Sambhajinagar", "creative agency near me Aurangabad",
    "marketing agency near me Chhatrapati Sambhajinagar", "web development near me Aurangabad",
    "best web company near me", "top rated web developer", "trusted web agency", "reliable web services",
    
    // Tier 7: Long-Tail Problem-Solving Keywords (30+)
    "how to develop a website", "website development cost in Aurangabad",
    "best practices for website design", "mobile responsive website", "fast loading websites",
    "secure website development", "website with good SEO", "website that converts", "lead generation website",
    "e-commerce website features", "website for small business", "website for startups",
    "website maintenance tips", "website security best practices", "website performance optimization",
    "user experience design", "website accessibility", "GDPR compliant website", "website analytics",
    "conversion funnel optimization", "landing page design", "sales funnel", "customer journey mapping",
    "brand identity design", "logo design services", "graphic design", "UI/UX design",
    
    // Tier 8: Industry-Specific Keywords (25+)
    "real estate website developer", "e-commerce website builder", "education website developer",
    "healthcare website design", "restaurant website developer", "hotel website designer",
    "fitness studio website", "beauty salon website", "travel agency website",
    "tour operator website", "consulting firm website", "law firm website",
    "medical clinic website", "dental practice website", "spa website design",
    "event management website", "photography portfolio website", "music label website",
    "fashion brand website", "jewelry store website", "automotive website design",
    
    // Tier 9: Technology Stack Keywords (20+)
    "Next.js development", "React development services", "Vue.js development",
    "Angular development", "TypeScript development", "Python development",
    "Django development", "FastAPI development", "Java development",
    "database design", "PostgreSQL", "MongoDB", "MySQL",
    "AWS development", "Google Cloud", "Azure", "cloud hosting",
    
    // Tier 10: Brand & Trust Keywords (15+)
    "award-winning web design", "certified developers", "experienced team",
    "proven track record", "client testimonials", "case studies",
    "portfolio websites", "success stories", "years of experience",
    "trusted agency", "reliable service", "quality assurance", "dedicated support",
    
    // Tier 11: Comparison & Alternative Keywords (15+)
    "web developer vs freelancer", "agency vs freelancer",
    "custom development vs template", "full service agency",
    "one stop solution", "end-to-end development", "turnkey solution",
    "affordable premium quality", "best value for money",
    
    // Tier 12: Emerging & Trend Keywords (15+)
    "AI-powered website", "voice search optimization", "progressive web app",
    "headless CMS", "JAMstack development", "serverless architecture",
    "microservices", "containerization", "DevOps services", "continuous deployment",
    "website personalization", "dynamic content", "real-time analytics"
  ],

  // --- VIEWPORT & MOBILE OPTIMIZATION ---
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // --- ALTERNATES & HREFLANG ---
  alternates: {
    canonical: "https://zaikron.com",
    languages: {
      "en-IN": "https://zaikron.com/en-in",
      "en": "https://zaikron.com/en",
    },
  },

  // --- OPEN GRAPH (Social Sharing) ---
  openGraph: {
    title: "Zaikron | #1 Web Development & AI Agency in Maharashtra",
    description: "Award-winning web development, app development, social media marketing, and AI solutions in Aurangabad & Chhatrapati Sambhajinagar.",
    type: "website",
    locale: "en_IN",
    url: "https://zaikron.com",
    siteName: "Zaikron",
    images: [
      {
        url: "https://zaikron.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaikron - Web Development Company",
        type: "image/jpeg",
      },
      {
        url: "https://zaikron.com/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Zaikron Agency Logo",
        type: "image/jpeg",
      },
    ],
  },

  // --- TWITTER CARDS ---
  twitter: {
    card: "summary_large_image",
    title: "Zaikron | Web Development & Digital Agency",
    description: "Rank #1 on Google with Aurangabad's top web & app development company.",
    images: ["https://zaikron.com/twitter-image.jpg"],
    creator: "@zaikron_dev",
    site: "@zaikron",
  },

  // --- ROBOTS & INDEXING ---
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},


  // --- ADDITIONAL META TAGS ---
  authors: [
    { name: "Zaikron", url: "https://zaikron.com" },
  ],
  creator: "Zaikron - Web Development Agency",
  publisher: "Zaikron",
  
  // --- VERIFICATION ---
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },

  // --- FORMAT DETECTION ---
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // --- CATEGORY ---
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- COMPREHENSIVE JSON-LD SCHEMA (Multi-Context) ---
  const jsonLdArray = [
    // 1. Organization Schema (E-E-A-T)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://zaikron.com/#organization",
      "name": "Zaikron",
      "alternateName": ["Zaikron Web Development", "Zaikron Digital Agency"],
      "description": "Award-winning web development, app development, social media marketing, and AI solutions company in Aurangabad, Chhatrapati Sambhajinagar, Maharashtra, India.",
      "url": "https://zaikron.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zaikron.com/logo.png",
        "width": 250,
        "height": 60,
      },
      "image": "https://zaikron.com/hero-image.jpg",
      "foundingDate": "2024-01-01",
      "foundingLocation": {
        "@type": "Place",
        "name": "Aurangabad, Maharashtra",
      },
      "telephone": "+91-XXXXXXXXXX",
      "email": "hello@zaikron.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"],
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Your Address]",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431001",
        "addressCountry": "IN",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Aurangabad",
        },
        {
          "@type": "City",
          "name": "Chhatrapati Sambhajinagar",
        },
        {
          "@type": "State",
          "name": "Maharashtra",
        },
        {
          "@type": "Country",
          "name": "India",
        },
      ],
      "knowsAbout": [
        "Web Development",
        "App Development",
        "Digital Marketing",
        "Social Media Marketing",
        "SEO",
        "AI Chatbots",
        "Cloud Solutions",
        "Full-Stack Development",
      ],
      "award": [
        "Best Web Development Company 2024",
        "Top Digital Agency Maharashtra",
        "#1 Website Developer Aurangabad",
      ],
      "sameAs": [
        "https://facebook.com/zaikron",
        "https://instagram.com/zaikron",
        "https://twitter.com/zaikron",
        "https://linkedin.com/company/zaikron",
        "https://youtube.com/@zaikron",
        "https://g.page/zaikron",
      ],
    },

    // 2. Local Business Schema (Google Maps & Local Pack)
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - Web Development Company",
      "image": "https://zaikron.com/business-image.jpg",
      "description": "Premium web development, app development, and digital marketing services in Aurangabad and Chhatrapati Sambhajinagar.",
      "url": "https://zaikron.com",
      "telephone": "+91-XXXXXXXXXX",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Your Address]",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.8762",
        "longitude": "75.3433",
      },
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
      "priceRange": "$$",
      "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar", "Maharashtra"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
            },
          },
        ],
      },
      "sameAs": [
        "https://facebook.com/zaikron",
        "https://instagram.com/zaikron",
        "https://g.page/zaikron",
      ],
    },

    // 3. Professional Service Schema
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://zaikron.com/#service",
      "name": "Zaikron",
      "url": "https://zaikron.com",
      "description": "Web Development, App Development, and Digital Marketing Agency",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN",
      },
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00",
      "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar", "Maharashtra", "India"],
    },

    // 4. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://zaikron.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://zaikron.com/services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Work",
          "item": "https://zaikron.com/work",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://zaikron.com/contact",
        },
      ],
    },

    // 5. FAQ Schema (Featured Snippets)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best web development company in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is Aurangabad's #1 web development company, offering custom website development, app development, social media marketing, and AI solutions with proven results and award-winning portfolio.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does website development cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development costs vary based on complexity. Basic business websites start at ₹10,000. E-commerce platforms range ₹50,000-₹2,00,000. Enterprise solutions are customized. Contact for free quote.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide social media marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide comprehensive social media marketing including Instagram marketing, Facebook ads, Google Ads management, content creation, and community management.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does website development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timeline depends on project scope. Basic websites: 2-4 weeks. Complex platforms: 2-3 months. We provide detailed project roadmap during consultation.",
          },
        },
      ],
    },

    // 6. WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://zaikron.com/#website",
      "url": "https://zaikron.com",
      "name": "Zaikron - Web Development & Digital Agency",
      "description": "Award-winning web development, app development, and digital marketing services in Aurangabad, Maharashtra.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://zaikron.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        {/* --- ALL JSON-LD SCHEMAS --- */}
        {jsonLdArray.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* --- PRECONNECT FOR PERFORMANCE --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* --- CANONICAL TAG --- */}
        <link rel="canonical" href="https://zaikron.com" />

        {/* --- ICON & APPLE TOUCH --- */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* --- MANIFEST --- */}
        <link rel="manifest" href="/manifest.json" />

        {/* --- THEME COLOR --- */}
        <meta name="theme-color" content="#050508" />

        {/* --- ADDITIONAL SEO META TAGS --- */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Zaikron" />
        <meta name="copyright" content="© 2024 Zaikron. All rights reserved." />
      </head>

      <body className="bg-void text-white antialiased selection:bg-neon-cyan selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
