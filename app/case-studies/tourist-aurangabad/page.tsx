import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Study: Tourist Aurangabad | Zaikron SEO Success',
  description: 'Learn how Zaikron built a top-ranking SEO website for Tourist Aurangabad, dominating local tourism searches in Chhatrapati Sambhajinagar.',
  alternates: {
    canonical: 'https://zaikron.com/case-studies/tourist-aurangabad',
  },
};

export default function CaseStudyTouristAurangabad() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Zaikron Dominates Local SEO: Tourist Aurangabad Case Study",
    "description": "A detailed case study on how we built and optimized touristaurangabad.com to rank #1 for tourism queries in Chhatrapati Sambhajinagar.",
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
      "@id": "https://zaikron.com/case-studies/tourist-aurangabad"
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
            Travel & Tourism Sector
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Dominating Tourism SEO in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Chhatrapati Sambhajinagar</span>
          </h1>
          <p className="text-xl text-gray-400">
            How Zaikron transformed <a href="https://touristaurangabad.com" className="text-white hover:text-neon-cyan underline decoration-white/30 underline-offset-4 transition-colors" target="_blank" rel="noopener noreferrer">TouristAurangabad.com</a> into the city's highest-ranking travel portal through advanced technical SEO and Generative Engine Optimization.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-neon-cyan mb-4" />
            <div className="text-3xl font-bold text-white mb-1">#1</div>
            <div className="text-sm text-gray-400">Google Ranking for Local Keywords</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Search className="w-8 h-8 text-neon-purple mb-4" />
            <div className="text-3xl font-bold text-white mb-1">+340%</div>
            <div className="text-sm text-gray-400">Increase in Organic Traffic</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
            <div className="text-3xl font-bold text-white mb-1">100/100</div>
            <div className="text-sm text-gray-400">Core Web Vitals Score</div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2>The Challenge</h2>
          <p>
            Aurangabad (Chhatrapati Sambhajinagar) is the tourism capital of Maharashtra, home to the world-famous Ajanta and Ellora Caves. The digital landscape for local tourism is highly competitive. Tourist Aurangabad needed a digital presence that didn't just look beautiful, but functionally outperformed massive national travel aggregators on Google search.
          </p>

          <h2>Zaikron's Approach: Business-First Development</h2>
          <p>
            Instead of just building a "pretty website", Zaikron architected a complete <strong>Semantic SEO ecosystem</strong> for Tourist Aurangabad. Our approach focused on Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines.
          </p>

          <ul className="space-y-4 my-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Hyper-Local Schema Markup</strong>
                <span className="text-gray-400 text-sm">We injected custom LocalBusiness and TouristAttraction JSON-LD schemas, hardcoding their entity relevance to Chhatrapati Sambhajinagar.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Next.js Edge Performance</strong>
                <span className="text-gray-400 text-sm">Built on React and Next.js, the site loads in under 0.8 seconds, securing a perfect Core Web Vitals score which acts as a major ranking factor.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Generative Engine Optimization (GEO)</strong>
                <span className="text-gray-400 text-sm">Structured data explicitly formatted for AI search engines like ChatGPT and Perplexity, ensuring Tourist Aurangabad is cited as the primary local authority.</span>
              </div>
            </li>
          </ul>

          <h2>The Results</h2>
          <p>
            Today, TouristAurangabad.com stands as a testament to Zaikron's ability to dominate local SEO. When businesses ask who the best <strong>website developer in Aurangabad</strong> is, we let our results do the talking. We build systems that drive traffic, generate leads, and capture market share.
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
