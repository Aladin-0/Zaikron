import type { Metadata, Viewport} from "next";
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

// --- COMPREHENSIVE SEO METADATA (600+ Semantic Keywords / Topic Clusters) ---
export const metadata: Metadata = {
  title: "Zaikron | #1 Web Development & AI Agency Chhatrapati Sambhajinagar, Aurangabad",
  description: "Rank #1 with Zaikron - Aurangabad's top web development company offering custom website development, app development (iOS/Android), social media marketing (Instagram/Facebook), AI chatbots, and digital solutions. Award-winning agency in Chhatrapati Sambhajinagar, Maharashtra.",
  
  // --- GAP 5 FIX: GEOGRAPHIC TARGETING & ALTERNATES ---
  alternates: {
    canonical: "https://zaikron.com",
    languages: {
      "en-IN": "https://zaikron.com",
      "x-default": "https://zaikron.com",
      // Geographic Variants for Local SEO Dominance
      "en-MH-Aurangabad": "https://zaikron.com/services/web-development/aurangabad",
      "en-MH-Sambhajinagar": "https://zaikron.com/services/web-development/chhatrapati-sambhajinagar",
    },
  },

  // --- GAP 5 FIX: GEO META TAGS ---
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Aurangabad, Chhatrapati Sambhajinagar",
    "geo.position": "19.8762;75.3433",
    "ICBM": "19.8762, 75.3433",
  },

  keywords: [
    // --- CLUSTER 1: CORE BRAND & LOCATION (High Intent) ---
    "web development company Aurangabad", "website developer Chhatrapati Sambhajinagar",
    "Zaikron web agency", "Zaikron digital marketing",
    "web development services Maharashtra", "website design Aurangabad", 
    "best web developer Chhatrapati Sambhajinagar", "professional web development Aurangabad",
    "custom website development Chhatrapati Sambhajinagar", "web development agency Maharashtra",
    "top web development company Aurangabad", "website development services Chhatrapati Sambhajinagar",
    "web design company Chhatrapati Sambhajinagar", "responsive web design Aurangabad",
    "affordable web development Aurangabad", "ecommerce website developer Chhatrapati Sambhajinagar",
    "IT company in Aurangabad", "software company Chhatrapati Sambhajinagar",
    "digital agency Aurangabad", "creative agency Chhatrapati Sambhajinagar",
    "website maker in Aurangabad", "online business solutions Aurangabad",
    "internet company Aurangabad", "web studio Chhatrapati Sambhajinagar",

    // --- CLUSTER 2: HYPER-LOCAL NEIGHBORHOOD TARGETING (Aurangabad Specific) ---
    "web designer Usmanpura", "website developer Nirala Bazaar",
    "IT company Cidco Aurangabad", "software agency MIDC Waluj",
    "digital marketing Beed Bypass", "SEO services Cannaught Place",
    "app developer Garkheda", "web designer Samarth Nagar",
    "website development Shendra MIDC", "web design Prozone Mall area",
    "marketing agency Chikalthana", "SEO company Jalna Road",
    "web developer Osmanpura", "app development Padegaon",
    "website maker Paithan Road", "digital agency Kranti Chowk",
    "software company Seven Hills", "web services Aurangpura",
    "IT services Waluj Mahanagar", "web design Vedant Nagar",
    "SEO consultant Hudco", "website builder Begumpura",
    "digital marketing N-1 Cidco", "web developer N-2 Cidco",
    "app agency N-3 Cidco", "marketing firm N-4 Cidco",

    // --- CLUSTER 3: WEB DEVELOPMENT SERVICES (Semantic LSI) ---
    "custom website design", "business website development",
    "corporate website builder", "small business website maker",
    "startup website packages", "landing page design services",
    "portfolio website creator", "blog website development",
    "CMS development services", "dynamic website creation",
    "static website design", "single page application development",
    "PWA development services", "mobile-friendly website design",
    "website redesign services", "website maintenance AMC",
    "website speed optimization", "core web vitals improvement",
    "website security audit", "SSL certificate installation",
    "domain name registration", "fast web hosting services",
    "website migration experts", "API integration services",
    "payment gateway integration", "database design services",
    "frontend development", "backend development",
    "full stack web development", "MERN stack development",

    // --- CLUSTER 4: APP DEVELOPMENT & MOBILE (Semantic) ---
    "app development company Aurangabad", "mobile app developer Chhatrapati Sambhajinagar",
    "iOS app development Aurangabad", "Android app developer Chhatrapati Sambhajinagar",
    "React Native developer Aurangabad", "Flutter app developer Chhatrapati Sambhajinagar",
    "cross-platform app development", "native mobile app development",
    "hybrid app development", "mobile application design",
    "UI UX design for apps", "iPhone app developer",
    "iPad app development", "custom software development",
    "mobile software solutions", "app store optimization (ASO)",
    "enterprise mobility solutions", "startup app MVP development",
    "on-demand app development", "booking app development",
    "delivery app development", "education app development",
    "fintech app development", "healthcare app development",
    "social networking app developer", "chat app development",

    // --- CLUSTER 5: DIGITAL MARKETING & GROWTH (Semantic) ---
    "social media marketing agency", "Instagram marketing expert",
    "Facebook advertising agency", "Google Ads management",
    "social media growth hacking", "Instagram followers growth",
    "Facebook lead generation", "Google PPC services",
    "social media content creation", "social media management packages",
    "Instagram ads specialist", "Facebook ads manager",
    "Google Ads specialist", "social media strategy consultant",
    "influencer marketing agency", "brand marketing services",
    "digital marketing company", "marketing automation services",
    "email marketing automation", "content marketing strategy",
    "SEO marketing services", "conversion rate optimization (CRO)",
    "social media advertising cost", "paid social media campaigns",
    "online advertising agency", "internet marketing company",
    "viral marketing campaigns", "community management services",
    "online reputation management", "brand visibility improvement",

    // --- CLUSTER 6: AI AUTOMATION & CHATBOTS (Future Tech) ---
    "AI chatbot development", "custom chatbot creation",
    "WhatsApp bot developer", "ChatGPT bot integration",
    "AI automation services", "customer service bot",
    "conversational AI solutions", "bot development company",
    "machine learning services", "AI solutions provider",
    "automation agency", "business process automation",
    "AI chatbot services", "intelligent automation",
    "GPT-4o integration", "custom AI agents",
    "workflow automation", "RAG chatbot development",
    "AI consultant", "generative AI solutions",
    "voice bot development", "interactive voice response AI",
    "automated lead generation", "sales bot development",
    "support automation bot", "HR chatbot development",

    // --- CLUSTER 7: SEARCH ENGINE OPTIMIZATION (SEO) ---
    "SEO agency Aurangabad", "search engine optimization services",
    "local SEO expert", "Google ranking services",
    "keyword research services", "backlink building agency",
    "technical SEO audit", "on-page SEO optimization",
    "SEO copywriting", "SEO content writing",
    "SEO content creation", "meta tag optimization",
    "schema markup implementation", "Google Business Profile optimization",
    "local citations building", "review management services",
    "competitor analysis SEO", "voice search optimization",
    "mobile SEO services", "international SEO services",
    "enterprise SEO services", "link building agency",
    "white hat SEO", "guaranteed SEO ranking",
    "ecommerce SEO services", "Shopify SEO expert",
    "WordPress SEO services", "YouTube SEO services",

    // --- CLUSTER 8: USER INTENT & "NEAR ME" (High Conversion) ---
    "web developer near me", "website designer near me",
    "app developer near me", "digital marketing near me",
    "social media marketing near me", "web design near me",
    "IT services near me", "creative agency near me",
    "marketing agency near me", "web development near me",
    "best web company near me", "top rated web developer",
    "trusted web agency", "reliable web services",
    "hire web developer nearby", "find web designer nearby",
    "local web design company", "nearby software company",
    "IT support near me", "computer services near me",

    // --- CLUSTER 9: PROBLEM SOLVING & QUESTIONS (Long Tail) ---
    "how to develop a website", "website development cost in Aurangabad",
    "cost of making an app in India", "how to rank #1 on Google",
    "best digital marketing strategy 2025", "why my website is slow",
    "how to get more leads online", "increase online sales fast",
    "website vs web application", "wordpress vs custom website",
    "best website builder for small business", "how to start ecommerce business",
    "secure website development", "website with good SEO",
    "website that converts", "lead generation website",
    "fix slow website", "website hacked help",
    "improve google ranking", "digital transformation strategy",
    "hire dedicated developer", "outsource web development",
    "freelance web developer rates", "agency vs freelancer pros cons",

    // --- CLUSTER 10: INDUSTRY SOLUTIONS (Niche Targeting) ---
    "real estate website developer", "e-commerce website builder",
    "education website developer", "healthcare website design",
    "restaurant website developer", "hotel website designer",
    "fitness studio website", "beauty salon website",
    "travel agency website", "tour operator website",
    "consulting firm website", "law firm website",
    "medical clinic website", "dental practice website",
    "spa website design", "event management website",
    "photography portfolio website", "music label website",
    "fashion brand website", "jewelry store website",
    "automotive website design", "manufacturing company website",
    "industrial website design", "NGO website developer",
    "school management system", "college website design",
    "hospital management software", "logistics website design",
    "architecture portfolio website", "interior design website",

    // --- CLUSTER 11: TECHNOLOGY STACK (Developer/CTO Intent) ---
    "Next.js development", "React development services",
    "Vue.js development", "Angular development",
    "TypeScript development", "Python development",
    "Django development", "FastAPI development",
    "Java development", "database design",
    "PostgreSQL", "MongoDB", "MySQL",
    "AWS development", "Google Cloud", "Azure",
    "cloud hosting", "PHP development",
    "Laravel developer", "CodeIgniter expert",
    "Shopify developer", "WooCommerce expert",
    "Magento development", "MERN stack developer",
    "MEAN stack developer", "JAMstack architecture",
    "Tailwind CSS design", "Bootstrap development",
    "Framer Motion animation", "Three.js 3D web design",
    "WebGL development", "GSAP animation",
    "Node.js expert", "Express.js developer",

    // --- CLUSTER 12: TRUST & AUTHORITY SIGNALS ---
    "award-winning web design", "certified developers",
    "experienced team", "proven track record",
    "client testimonials", "case studies",
    "portfolio websites", "success stories",
    "years of experience", "trusted agency",
    "reliable service", "quality assurance",
    "dedicated support", "transparent pricing",
    "no hidden costs", "ROI focused agency",
    "Google partner agency", "Meta business partner",
    "ISO certified IT company", "top rated on clutch",
    "verified agency", "expert consultants",

    // --- CLUSTER 13: COMPARISON & ALTERNATIVES ---
    "web developer vs freelancer", "agency vs freelancer",
    "custom development vs template", "full service agency",
    "one stop solution", "end-to-end development",
    "turnkey solution", "affordable premium quality",
    "best value for money", "Wix alternative",
    "Squarespace alternative", "Shopify alternative",
    "Wordpress alternative", "GoDaddy alternative",
    "cheap website builder", "premium website design",

    // --- CLUSTER 14: EMERGING TRENDS (2025+) ---
    "AI-powered website", "voice search optimization",
    "progressive web app (PWA)", "headless CMS",
    "JAMstack development", "serverless architecture",
    "microservices", "containerization",
    "DevOps services", "continuous deployment",
    "website personalization", "dynamic content",
    "real-time analytics", "blockchain development",
    "Web3 development", "NFT marketplace development",
    "metaverse development", "AR/VR web experiences",
    "IoT dashboard development", "edge computing",
    "cybersecurity services", "cloud migration",

    // --- CLUSTER 15: BRAND VARIATIONS & MISSPELLINGS ---
    "Zaikron", "Zaikron.com", "Zaikron IT",
    "Zaikron Technologies", "Zaikron Digital",
    "Zaikron Web", "Zaikron Apps",
    "Zaikron Marketing", "Zaikron AI",
    "web dev Aurangabad", "web desing Aurangabad",
    "websit maker", "online marketing wala",
    "digital marketing wala", "software wala",
    "computer website shop", "internet dukan"
  ],


  // --- OPEN GRAPH (Social Sharing Optimization) ---
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

  // --- ROBOTS & INDEXING (Max Visibility) ---
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
  
  // --- FORMAT DETECTION ---
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // --- CATEGORY ---
  category: "Technology",
};

// Viewport ADD THIS NEW EXPORT
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- COMPREHENSIVE JSON-LD SCHEMA (Multi-Context for Rich Results) ---
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
      "telephone": "+91-9730416763",
      "email": "hello@zaikron.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9730416763",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "mr"],
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
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
      "telephone": "+91-9730416763",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
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

        {
          "@type": "LocalBusiness",
          "name": "Zaikron - Aurangabad",
          "areaServed": [
            "Aurangabad", "Chhatrapati Sambhajinagar",
            "Usmanpura", "N-Town", "Connaught Road",
            "Cidco", "MIDC Waluj", "Garkheda", "Jalna Road",
            "Begumpura", "Satara Parisar", "Cantonment"
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.8762,
            "longitude": 75.3433
          }
        }
        
      ],
      "priceRange": "₹10,000 - ₹5,00,000",
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
          "name": "How much does website development cost in Aurangabad?",
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
        {/* --- ALL JSON-LD SCHEMAS (Injecting Multi-Layer Schema) --- */}
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
        <link rel="icon" href="/logo/Zaikron.png" />
        <link rel="apple-touch-icon" href="/logo/Zaikron.png" />

        {/* --- MANIFEST --- */}
        <link rel="manifest" href="/manifest.json" />

        {/* --- THEME COLOR (Matches Dark Theme) --- */}
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