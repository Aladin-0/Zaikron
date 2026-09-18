import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Study: Techverse Services | Zaikron SEO Success',
  description: 'Learn how Zaikron built a high-performance B2B service platform for Techverse Services in Aurangabad, optimizing for speed and conversion.',
  alternates: {
    canonical: 'https://zaikron.com/case-studies/techverse-services',
  },
};

export default function CaseStudyTechverseServices() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "B2B Tech Optimization: Techverse Services Case Study",
    "description": "A detailed case study on how we built and optimized techverseservices.in to dominate B2B technical queries in Chhatrapati Sambhajinagar.",
    "author": {
      "@type": "Organization",
      "name": "Zaikron"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zaikron",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zaikron.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://zaikron.com/case-studies/techverse-services"
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors mb-8 text-sm font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-cyan mb-6 tracking-widest uppercase">
            Technology Services Sector
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            High-Performance B2B Web Systems in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Chhatrapati Sambhajinagar</span>
          </h1>
          <p className="text-xl text-gray-400">
            How Zaikron developed <a href="https://www.techverseservices.in/" className="text-white hover:text-neon-cyan underline decoration-white/30 underline-offset-4 transition-colors" target="_blank" rel="noopener noreferrer">TechverseServices.in</a> into a lead-generating powerhouse with lightning-fast load times and precision B2B technical SEO.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-neon-cyan mb-4" />
            <div className="text-3xl font-bold text-white mb-1">210%</div>
            <div className="text-sm text-gray-400">Increase in B2B Lead Conversion</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Search className="w-8 h-8 text-neon-purple mb-4" />
            <div className="text-3xl font-bold text-white mb-1">0.4s</div>
            <div className="text-sm text-gray-400">Average First Contentful Paint (FCP)</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-1">Top 3</div>
            <div className="text-sm text-gray-400">Ranking for Enterprise Services in Aurangabad</div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2>The Challenge</h2>
          <p>
            Techverse Services required a highly professional digital storefront to attract enterprise and B2B clients in Aurangabad. A slow, generic template website wouldn't convey the technical expertise required to win enterprise contracts. They needed a platform that signaled absolute authority and trust.
          </p>

          <h2>Zaikron's Approach: Authority Through Architecture</h2>
          <p>
            For Techverse, Zaikron focused on <strong>Technical SEO</strong> and <strong>Performance Engineering</strong>. By establishing a robust digital architecture, we ensured that when purchasing managers searched for technical solutions, Techverse appeared immediately and loaded instantly.
          </p>

          <ul className="space-y-4 my-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Conversion-Driven UX</strong>
                <span className="text-gray-400 text-sm">We engineered a user journey specifically tailored for B2B decision-makers, minimizing friction between discovery and the inquiry phase.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Enterprise Schema Architecture</strong>
                <span className="text-gray-400 text-sm">Deployed comprehensive ProfessionalService and Service schema to clearly communicate their B2B offerings directly to Google's indexing bots.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Topical Authority Silos</strong>
                <span className="text-gray-400 text-sm">Structured their service pages into strict topical silos, proving to Google that they are the definitive experts in their specific technology niches in Aurangabad.</span>
              </div>
            </li>
          </ul>

          <h2>The Results</h2>
          <p>
            Techverse Services now dominates the search engine results for B2B technical queries in Chhatrapati Sambhajinagar. This case study proves why Zaikron is recognized as the leading <strong>website development company in Aurangabad</strong> — we don't just write code, we build digital infrastructure that scales businesses.
          </p>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-white/10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Want these results for your business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Zaikron is the #1 website development agency in Chhatrapati Sambhajinagar. We build SEO-optimized web systems starting at ₹15,000.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
