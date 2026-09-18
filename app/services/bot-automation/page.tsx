import type { Metadata } from "next";
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import BotAutomationContent from '../../../components/ui/BotAutomationContent';

// --- 1. 2025 KEYWORD ECOSYSTEM (100+ High-Intent Keywords) ---
export const metadata: Metadata = {
  title: "Chatbot Development Aurangabad | AI Bots WhatsApp Automation ₹20K+ | Zaikron",
  description: "Rank #1 AI Chatbot Company in Aurangabad. Custom GPT-4o Bots, WhatsApp Automation, Voice AI Agents. 24/7 Sales. Get Free Demo.",
  keywords: [
    // PRIMARY HIGH-INTENT (BUY NOW)
    "Chatbot Development Aurangabad", "AI Chatbot Company Chhatrapati Sambhajinagar",
    "WhatsApp Bot Developer Aurangabad", "Instagram DM Automation Aurangabad",
    "AI Agent Development Maharashtra", "Custom Chatbot ₹20K+ Aurangabad",
    "Hire Chatbot Developer Aurangabad", "Best AI Agency in Marathwada",
    
    // EMERGING 2025 AI TRENDS
    "AI Agent Builder Aurangabad", "Autonomous AI Agents Local Business",
    "GPT-4o Chatbot Integration", "Voice AI Bot Development",
    "RAG Chatbot Development", "Multi-Channel AI Assistant",
    "Conversational AI Services", "Generative AI for Business Aurangabad",
    "LLM Fine-Tuning Services Maharashtra", "LangChain Development Company",
    
    // DIGITAL MARKETING OVERLAP
    "Chatbot for Digital Marketing", "AI Lead Generation Bot Aurangabad",
    "WhatsApp Sales Bot", "Instagram Comment Automation",
    "Facebook Messenger Marketing Bot", "Automated Customer Support Aurangabad",
    "Conversion Rate Optimization Chatbot", "Sales Funnel Automation",
    
    // LONG-TAIL LOCAL (Neighborhoods)
    "Chatbot developer Usmanpura", "WhatsApp automation MIDC Waluj",
    "AI bot Cidco Aurangabad", "Instagram DM bot Nirala Bazaar",
    "Software Company in Cannaught Place Aurangabad", "IT Services Beed Bypass",
    "Tech Agency Near Prozone Mall", "Business Automation Shendra MIDC",
    
    // INDUSTRY SPECIFIC
    "Real Estate Chatbot Aurangabad", "Restaurant WhatsApp Bot",
    "Ecommerce AI Agent India", "Healthcare Appointment Bot",
    "Education Admission Chatbot", "Manufacturing Support Automation",
    
    // TECH STACK
    "Python AI Developer Aurangabad", "LangChain Developer Maharashtra",
    "VoiceFlow Expert India", "Botpress Developer Aurangabad",
    "OpenAI API Integration Services", "Twilio Voice AI Developer"
  ],
  alternates: {
    canonical: 'https://zaikron.com/services/bot-automation',
    languages: {
      'en-IN': 'https://zaikron.com/services/bot-automation',
      'x-default': 'https://zaikron.com/services/bot-automation'
    },
  },
  openGraph: {
    title: "AI Chatbot Development Aurangabad | Zaikron",
    description: "Automate your business with 24/7 AI Agents. WhatsApp, Instagram, Voice Bots. 40% Conversion Boost. Start at ₹20K.",
    url: 'https://zaikron.com/services/bot-automation',
    siteName: 'Zaikron',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://zaikron.com/og-bot-automation.jpg', width: 1200, height: 630, alt: 'AI Chatbot Development Aurangabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Automation Aurangabad - Zaikron",
    description: "Deploy GPT-4o Sales Agents for your local business. 24/7 Leads.",
    images: ['https://zaikron.com/og-bot-automation.jpg'],
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

// --- 2. 6x SCHEMA MARKUP STRATEGY (AI Dominance) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Service Schema
    {
      "@type": "Service",
      "serviceType": "AI Automation & Chatbot Development",
      "provider": { "@id": "https://zaikron.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Aurangabad" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "State", "name": "Maharashtra" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Bot Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Chatbot",
            "price": "20000",
            "priceCurrency": "INR",
            "description": "Rule-based bot for 1 channel (WhatsApp/Web)"
          },
          {
            "@type": "Offer",
            "name": "AI Sales Agent",
            "price": "50000",
            "priceCurrency": "INR",
            "description": "GPT-4o powered, Natural Language, Lead Gen"
          },
          {
            "@type": "Offer",
            "name": "Multi-Channel OmniBot",
            "price": "100000",
            "priceCurrency": "INR",
            "description": "WhatsApp + IG + Web + Voice + CRM Integration"
          }
        ]
      }
    },
    // 2. Software Application Schema (For the Bot itself)
    {
      "@type": "SoftwareApplication",
      "name": "Zaikron AI Agent",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud",
      "offers": {
        "@type": "Offer",
        "price": "20000",
        "priceCurrency": "INR"
      }
    },
    // 3. Local Business Schema
    {
      "@type": "LocalBusiness",
      "@id": "https://zaikron.com/#localbusiness",
      "name": "Zaikron - AI Automation Company Aurangabad",
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
      "priceRange": "₹20,000 - ₹5,00,000"
    },
    // 4. FAQ Schema
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a chatbot cost in Aurangabad?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our AI chatbot packages start at ₹20,000 for basic rule-based bots. Advanced GPT-4o powered AI agents range from ₹50,000 to ₹1,00,000 depending on complexity and channels." }
        },
        {
          "@type": "Question",
          "name": "Can you build bots for WhatsApp Business API?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in WhatsApp Business API automation. We can build bots for order taking, customer support, lead qualification, and broadcast marketing." }
        },
        {
          "@type": "Question",
          "name": "Do your bots use ChatGPT technology?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we integrate OpenAI's GPT-4o and Claude models to create 'Smart Agents' that understand natural language, context, and can answer complex queries unlike old rule-based bots." }
        }
      ]
    },
    // 5. HowTo Schema (Process)
    {
      "@type": "HowTo",
      "name": "How to Automate Your Business with AI",
      "step": [
        { "@type": "HowToStep", "name": "Discovery", "text": "We map your business logic and data flows." },
        { "@type": "HowToStep", "name": "AI Training", "text": "We fine-tune GPT-4o models on your specific data." },
        { "@type": "HowToStep", "name": "Integration", "text": "We connect WhatsApp, Instagram, and your CRM." },
        { "@type": "HowToStep", "name": "Deployment", "text": "We launch the bot and monitor performance." }
      ]
    },
    // 6. Breadcrumb Schema
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Bot Automation", "item": "https://zaikron.com/services/bot-automation" }
      ]
    }
  ]
};

export default function BotAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* THEME: Deepest Black + Neon Cyan Selection */}
      <main className="relative w-full bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <BotAutomationContent />
        <Footer />
      </main>
    </>
  );
}