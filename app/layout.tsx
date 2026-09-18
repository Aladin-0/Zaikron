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

// --- SEO METADATA (Optimized for August 2026 Spam Update — no keyword stuffing) ---
export const metadata: Metadata = {
  title: "Zaikron | Web Development Company in Aurangabad | Website, App & Digital Marketing",
  description: "Zaikron is Aurangabad's top web development company. Custom websites from ₹15,000, Android/iOS app development from ₹70,000, Instagram marketing & AI chatbots. 50+ clients in Chhatrapati Sambhajinagar, Maharashtra.",
  
  alternates: {
    canonical: "https://zaikron.com",
    languages: {
      "en-IN": "https://zaikron.com",
      "x-default": "https://zaikron.com",
    },
  },

  // Geographic meta tags (valid for local SEO)
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Chhatrapati Sambhajinagar, Aurangabad",
    "geo.position": "19.8762;75.3433",
    "ICBM": "19.8762, 75.3433",
    "language": "English",
    "revisit-after": "7 days",
    "author": "Zaikron Technologies",
    "copyright": "© 2025 Zaikron Technologies. All rights reserved.",
  },

  // CLEAN keyword list — quality over quantity (Google ignores 1000+ spam lists)
  keywords: [
    "web development company Aurangabad",
    "website developer Chhatrapati Sambhajinagar",
    "app development company Aurangabad",
    "digital marketing agency Aurangabad",
    "Instagram marketing Aurangabad",
    "SEO company Chhatrapati Sambhajinagar",
    "AI chatbot development Aurangabad",
    "WhatsApp bot developer Maharashtra",
    "Next.js developer Aurangabad",
    "React developer Chhatrapati Sambhajinagar",
    "website developer near me Aurangabad",
    "mobile app developer Aurangabad",
    "Flutter developer Chhatrapati Sambhajinagar",
    "social media marketing agency Aurangabad",
    "Google Ads management Aurangabad",
    "website design Waluj MIDC",
    "web development Cidco Aurangabad",
    "website developer Garkheda",
    "IT company Aurangabad",
    "software company Chhatrapati Sambhajinagar",
    "Zaikron",
    "Zaikron Technologies",
  ],

  // Open Graph
  openGraph: {
    title: "Zaikron | Web & App Development Company in Aurangabad",
    description: "Award-winning web development, app development, social media marketing, and AI chatbot solutions in Aurangabad & Chhatrapati Sambhajinagar.",
    type: "website",
    locale: "en_IN",
    url: "https://zaikron.com",
    siteName: "Zaikron",
    images: [
      {
        url: "https://zaikron.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaikron - Web Development Company in Aurangabad",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Zaikron | Web Development & Digital Agency Aurangabad",
    description: "Custom websites, apps & digital marketing in Aurangabad. 50+ clients. From ₹15,000.",
    images: ["https://zaikron.com/og-image.jpg"],
    creator: "@zaikron",
    site: "@zaikron",
  },

  // Robots — allow all including AI crawlers (good for GEO / AI Overview citations)
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

  authors: [
    { name: "Zaikron Technologies", url: "https://zaikron.com" },
  ],
  creator: "Zaikron Technologies",
  publisher: "Zaikron Technologies",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  category: "Technology",
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- CORRECTED JSON-LD SCHEMAS ---
  const jsonLdArray = [
    // 1. Organization Schema (E-E-A-T)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://zaikron.com/#organization",
      "name": "Zaikron Technologies",
      "alternateName": ["Zaikron", "Zaikron Web Development", "Zaikron Digital Agency"],
      "description": "Web development, app development, social media marketing, and AI automation company in Aurangabad (Chhatrapati Sambhajinagar), Maharashtra, India.",
      "url": "https://zaikron.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zaikron.com/logo/Zaikron.png",
        "width": 250,
        "height": 60,
      },
      "foundingDate": "2024",
      "telephone": "+91-9730416763",
      "email": "hello@zaikron.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9730416763",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "mr"],
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-7083321725",
          "contactType": "Technical Support",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "mr"],
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
        "addressLocality": "Chhatrapati Sambhajinagar",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN",
      },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" },
        { "@type": "Country", "name": "India" },
      ],
      "knowsAbout": [
        "Web Development",
        "App Development",
        "Digital Marketing",
        "Social Media Marketing",
        "Search Engine Optimization",
        "AI Chatbots",
        "WhatsApp Automation",
        "Full-Stack Development",
      ],
      "sameAs": [
        "https://www.facebook.com/zaikron",
        "https://www.instagram.com/zaikronstudio",
        "https://twitter.com/zaikron",
        "https://linkedin.com/company/zaikron",
        "https://youtube.com/@zaikron",
        "https://wa.me/919730416763",
      ],
    },

    // 2. LocalBusiness Schema (Google Maps & Local Pack)
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - Web Development Company",
      "image": "https://zaikron.com/og-image.jpg",
      "description": "Premium web development, app development, and digital marketing services in Aurangabad and Chhatrapati Sambhajinagar, Maharashtra.",
      "url": "https://zaikron.com",
      "telephone": "+91-9730416763",
      "email": "hello@zaikron.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Mapal, Peer Bazar Rd, New Usmanpura",
        "addressLocality": "Chhatrapati Sambhajinagar",
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
      ],
      "priceRange": "₹15,000 - ₹5,00,000",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, UPI",
      "areaServed": [
        "Aurangabad", "Chhatrapati Sambhajinagar", "Waluj MIDC",
        "Cidco", "Garkheda", "Shendra", "Bidkin", "Maharashtra",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Custom Next.js websites optimized for Google ranking" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "Native Android and iOS apps using Flutter and React Native" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Social Media Marketing", "description": "Instagram and Facebook marketing and advertising" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "AI Chatbot Development", "description": "WhatsApp and website AI chatbots for business automation" },
          },
        ],
      },
      "sameAs": [
        "https://www.facebook.com/zaikron",
        "https://www.instagram.com/zaikronstudio",
        "https://wa.me/919730416763",
      ],
    },

    // 3. WebSite Schema (enables Sitelinks Searchbox)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://zaikron.com/#website",
      "url": "https://zaikron.com",
      "name": "Zaikron - Web Development & Digital Agency",
      "description": "Web development, app development, and digital marketing company in Aurangabad, Maharashtra.",
      "inLanguage": "en-IN",
      "publisher": { "@id": "https://zaikron.com/#organization" },
    },

    // 4. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Work", "item": "https://zaikron.com/work" },
        { "@type": "ListItem", "position": 4, "name": "About", "item": "https://zaikron.com/about" },
        { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://zaikron.com/contact" },
      ],
    },

    // 5. FAQ Schema — questions exactly matching real Google searches
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best website developer in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is one of the top website development companies in Aurangabad (Chhatrapati Sambhajinagar), offering custom Next.js websites starting from ₹15,000, with guaranteed Google SEO optimization and mobile-first design.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does website development cost in Aurangabad in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development cost in Aurangabad ranges from ₹15,000 for a basic business website to ₹1,50,000+ for custom web applications. Zaikron offers transparent pricing with packages starting at ₹15,000.",
          },
        },
        {
          "@type": "Question",
          "name": "Which is the best app development company in Chhatrapati Sambhajinagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zaikron is a leading mobile app development company in Chhatrapati Sambhajinagar (Aurangabad), building Android and iOS apps using Flutter and React Native starting from ₹70,000.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide Instagram marketing services in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Zaikron provides Instagram marketing, Facebook ads, and Google Ads management for businesses in Aurangabad. Services include content creation, viral reels, paid ad campaigns, and monthly growth reporting.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business website built by Zaikron in Aurangabad takes 2 to 4 weeks. Complex e-commerce or web applications may take 4 to 8 weeks depending on requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Zaikron offer AI chatbot development in Aurangabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Zaikron develops AI chatbots and WhatsApp automation bots for businesses in Aurangabad. These bots handle customer inquiries 24/7, generate leads, and integrate with your existing sales process.",
          },
        },
      ],
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        {/* JSON-LD Schemas */}
        {jsonLdArray.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical */}
        <link rel="canonical" href="https://zaikron.com" />

        {/* Icons */}
        <link rel="icon" href="/logo/Zaikron.png" />
        <link rel="apple-touch-icon" href="/logo/Zaikron.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#050508" />
      </head>

      <body className="bg-void text-white antialiased selection:bg-neon-cyan selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}