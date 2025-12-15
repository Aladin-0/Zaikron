'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Globe, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax for the "Floating Pillars"
  const yPillar = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    // Mobile: pt-24 pb-12 | Desktop: pt-40 pb-20 (Original)
    <section ref={containerRef} className="relative pt-24 pb-12 md:pt-40 md:pb-20 overflow-hidden bg-[#050508]">
      
      {/* --- BACKGROUND ARCHITECTURE (FIXED) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-[1px] h-full border-l border-white/5 border-dashed"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full border-r border-white/5 border-dashed"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

        {/* --- 1. THE MONOLITH HEADER --- */}
        {/* Mobile: mb-20 | Desktop: mb-40 (Original) */}
        <div className="text-center mb-20 md:mb-40 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 border border-white/10 rounded-full bg-black/50 backdrop-blur-xl mb-8"
          >
            <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
              The Origin Story
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Mobile: text-4xl | Desktop: text-9xl (Original)
            className="text-4xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8"
          >
            WE ARE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">ZAIKRON.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            The leading <strong className="text-white">Web Development Company in Aurangabad</strong>. 
            We don't follow trends we engineer the algorithms that define them.
          </motion.p>
        </div>

        {/* --- 2. THE SILO GRID (Internal Linking Engine) --- */}
        {/* Mobile: gap-4 mb-20 | Desktop: gap-8 mb-40 (Original) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-20 md:mb-40">
          
          <SiloCard 
            title="Digital Foundation"
            icon={<Globe className="w-8 h-8 text-neon-cyan" />}
            href="/services"
            keywords={["Website Development Aurangabad", "Web Design Company"]}
          >
            We build digital fortresses. As the premier <strong className="text-white">website developer Chhatrapati Sambhajinagar</strong>, our custom Next.js architectures ensure your brand dominates local search results.
          </SiloCard>

          <div className="lg:mt-24">
            <SiloCard 
              title="Mobile Ecosystems"
              icon={<Cpu className="w-8 h-8 text-neon-purple" />}
              href="/services"
              keywords={["App Development Company", "Android/iOS Apps"]}
            >
              The world is mobile. Partner with the top <strong className="text-white">app development company Aurangabad</strong> to create scalable, native applications that capture the Maharashtra market.
            </SiloCard>
          </div>

          <SiloCard 
            title="Viral Growth"
            icon={<TrendingUp className="w-8 h-8 text-neon-pink" />}
            href="/services"
            keywords={["Social Media Marketing Agency", "Instagram Growth"]}
          >
            Visibility is currency. Our <strong className="text-white">social media marketing agency Aurangabad</strong> strategies turn likes into leads through precision Facebook & Instagram campaigns.
          </SiloCard>

        </div>

        {/* --- 3. THE PHILOSOPHY (Storytelling) --- */}
        {/* Mobile: gap-12 mb-20 | Desktop: gap-20 mb-40 (Original) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-40">
          <motion.div style={{ y: yPillar }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 blur-[80px]"></div>
            {/* Mobile: p-6 | Desktop: p-10 (Original) */}
            <div className="relative p-6 md:p-10 rounded-[2rem] border border-white/10 bg-[#0a0a0f] backdrop-blur-xl">
              {/* Mobile: text-3xl | Desktop: text-4xl (Original) */}
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why rank #2 when <br/> you can be <span className="text-neon-cyan">#1?</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                In Chhatrapati Sambhajinagar, competition is rising. A template website isn't enough. You need a <strong>Digital Growth Engine</strong>.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Zaikron bridges the gap between <strong>Silicon Valley tech</strong> and <strong>local market understanding</strong>. We are the <span className="text-neon-purple">digital marketing agency Chhatrapati Sambhajinagar</span> that speaks your language and codes your success.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <StatRow label="Projects Deployed" value="150+" />
            <StatRow label="Client Retention" value="100%" />
            <StatRow label="SEO Success Rate" value="#1 Rank" />
            <StatRow label="Support" value="24/7 Live" />
          </div>
        </div>

        {/* --- 4. THE CALL TO DOMINANCE --- */}
        {/* TIGHTER MOBILE SPACING: py-10 instead of py-20 */}
        <div className="text-center relative py-10 md:py-20 border-t border-white/5">
          {/* Mobile: text-4xl mb-4 | Desktop: text-7xl mb-8 (Original) */}
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 md:mb-8">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">SCALE?</span>
          </h2>
          {/* Mobile: text-lg mb-6 | Desktop: text-xl mb-10 (Original) */}
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto">
            Join the top brands in Maharashtra. Work with the best <strong className="text-white"> web development company Aurangabad</strong>.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold text-lg uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: SILO CARD ---
function SiloCard({ children, title, icon, href, keywords }: any) {
  return (
    <Link href={href} className="group block h-full">
      <motion.div 
        whileHover={{ y: -10 }}
        // Mobile: p-6 | Desktop: p-8 (Original)
        className="relative h-full p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-[60px] group-hover:bg-white/10 transition-colors"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/10 w-fit group-hover:scale-110 transition-transform">
            {icon}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          
          <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
            {children}
          </p>

          {/* Internal Link keywords for SEO */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {keywords.map((kw: string, i: number) => (
              <span key={i} className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-black/20">
                {kw}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">
            Explore Services <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// --- SUB-COMPONENT: STAT ROW ---
function StatRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-white/30 transition-colors">
      <span className="text-gray-500 font-mono text-sm uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
      <span className="text-4xl font-display font-bold text-white">{value}</span>
    </div>
  );
}