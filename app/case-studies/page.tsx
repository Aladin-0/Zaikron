import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Portfolio & Case Studies | Zaikron Aurangabad',
  description: 'See how Zaikron built high-ranking, top-class SEO websites for businesses in Aurangabad including Tourist Aurangabad, Techverse Services, and more.',
  alternates: {
    canonical: 'https://zaikron.com/case-studies',
  },
};

const projects = [
  {
    name: 'Tourist Aurangabad',
    url: 'https://touristaurangabad.com/',
    slug: 'tourist-aurangabad',
    industry: 'Travel & Tourism',
    description: 'A top-ranking travel portal built to dominate local SEO searches for tourism in Chhatrapati Sambhajinagar.',
    imageGradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Techverse Services',
    url: 'https://www.techverseservices.in/',
    slug: 'techverse-services',
    industry: 'Technology Services',
    description: 'A high-performance B2B service platform optimized for speed and conversion.',
    imageGradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Sauda Pakka',
    url: 'https://saudapakka.com/',
    slug: '#',
    industry: 'Business Solutions',
    description: 'A robust digital platform designed for scale and superior search engine visibility.',
    imageGradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Sais K Palace',
    url: 'https://saiskpalace.in/',
    slug: '#',
    industry: 'Hospitality',
    description: 'An elegant hospitality website featuring seamless booking flows and rich visual media.',
    imageGradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Sanskruti Lace',
    url: 'https://sanskrutilace.in/',
    slug: '#',
    industry: 'Manufacturing / Retail',
    description: 'A digital storefront bridging traditional manufacturing with modern online discovery.',
    imageGradient: 'from-rose-500 to-orange-400'
  },
  {
    name: 'SD Finance',
    url: 'https://sdfinance.credit/',
    slug: '#',
    industry: 'Financial Services',
    description: 'A highly secure, fast-loading financial services website built for client trust and authority.',
    imageGradient: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Manavata Pharma',
    url: 'https://manavatapharma.com/',
    slug: '#',
    industry: 'Healthcare & Pharma',
    description: 'A compliant, informative healthcare platform designed to rank for critical medical queries.',
    imageGradient: 'from-green-400 to-cyan-500'
  },
  {
    name: 'Sanjari Agro',
    url: 'https://sanjariagro.com/',
    slug: '#',
    industry: 'Agriculture',
    description: 'An agri-business digital presence built to connect local farmers with wider markets.',
    imageGradient: 'from-yellow-400 to-green-500'
  }
];

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zaikron Web Development Portfolio",
    "description": "A collection of top-tier, SEO-optimized websites developed by Zaikron for businesses in Chhatrapati Sambhajinagar.",
    "url": "https://zaikron.com/case-studies",
    "publisher": {
      "@type": "Organization",
      "name": "Zaikron",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zaikron.com/icon.png"
      }
    },
    "hasPart": projects.map(p => ({
      "@type": "WebPage",
      "name": p.name,
      "url": p.url,
      "description": p.description
    }))
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Digital Empire</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            We don't just build websites; we build top-ranking SEO systems. 
            Here is the proof. Explore the businesses dominating Google in Aurangabad and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-cyan/50 transition-colors group flex flex-col">
              <div className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                <Globe className="w-16 h-16 text-white/20 absolute" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-mono text-neon-cyan mb-2 uppercase tracking-wider">{project.industry}</div>
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Visit Live Site
                  </a>
                  {project.slug !== '#' && (
                    <Link href={`/case-studies/${project.slug}`} className="text-neon-cyan text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
