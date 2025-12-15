'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles, Layers, Fingerprint } from 'lucide-react';

export default function CreativeSeoSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects (Kept subtle for performance)
  const yMove = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    // Mobile: py-16 px-4 | Desktop: py-32 px-12 (Original)
    <section ref={containerRef} className="relative py-16 px-4 md:py-32 md:px-12 bg-[#050508] overflow-hidden">
      
      {/* BACKGROUND ART (Organic, Liquid Shapes) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-gradient-to-b from-neon-purple/10 to-transparent rounded-full blur-[80px] md:blur-[120px] mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-gradient-to-t from-neon-cyan/10 to-transparent rounded-full blur-[60px] md:blur-[100px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-[90rem] relative z-10">
        
        {/* --- PART 1: THE HEADLINE (Editorial Style) --- */}
        {/* Mobile: gap-8 mb-16 | Desktop: gap-12 mb-32 (Original) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-32 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Mobile: Smaller watermark, adjusted position */}
              <span className="absolute -top-8 -left-2 md:-top-12 md:-left-4 text-[6rem] md:text-[10rem] text-white/5 font-display font-bold select-none z-0">
                01
              </span>
              {/* Mobile: text-4xl leading-tight | Desktop: text-8xl leading-[0.9] (Original) */}
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-8xl font-display font-bold text-white leading-tight md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
                Leading <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                  Web Development Company
                </span>
              </h2>
              <div className="h-1 w-20 md:w-32 bg-neon-cyan rounded-full mb-6 md:mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Mobile: text-lg | Desktop: text-3xl (Original) */}
              <h3 className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl">
                & Top <strong className="text-white font-bold">Social Media Marketing Agency</strong> in Aurangabad / Chhatrapati Sambhajinagar.
              </h3>
            </motion.div>
          </div>

          {/* Abstract Art Element - Hidden on mobile to save space, visible on Desktop */}
          <div className="lg:col-span-4 relative h-full min-h-[300px] hidden lg:block">
             <motion.div 
               style={{ y: yMove, rotate }}
               className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] backdrop-blur-md p-8 flex flex-col justify-between"
             >
                <Sparkles className="text-neon-cyan w-12 h-12" />
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  Elevate your business with Zaikron's cutting-edge digital marketing in Maharashtra.
                </p>
             </motion.div>
          </div>
        </div>

        {/* --- PART 2: THE CONTENT FLOW (Split Layout) --- */}
        {/* Mobile: gap-12 mb-16 | Desktop: gap-20 mb-32 (Original) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-32">
          
          {/* Left Column: Text Content */}
          <motion.div 
            style={{ scale }}
            className="space-y-8 md:space-y-12"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                We transform visions into high-performance, <strong className="text-white">SEO-optimized websites</strong> that dominate Google searches. As the <strong className="text-white">best web development company in Aurangabad</strong>, we utilize advanced frameworks like Next.js and AI-driven personalization. Whether you need a <strong className="text-white">website developer in Chhatrapati Sambhajinagar</strong> or an <strong className="text-white">app development company in Aurangabad</strong>, we deliver uncompromised quality.
              </p>
            </div>

            {/* Mobile: p-6 | Desktop: p-8 (Original) */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border-l-4 border-neon-purple backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Layers className="text-neon-purple w-6 h-6 md:w-auto md:h-auto" />
                Digital Marketing Agency Chhatrapati Sambhajinagar
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-6">
                Search no more for the <strong className="text-white">best website developer for small business in Aurangabad</strong>. Zaikron delivers pixel-perfect results across all digital channels.
              </p>
              
              {/* Feature List */}
              <ul className="space-y-4">
                {[
                  { title: "Website Development Aurangabad", desc: "Custom Next.js sites optimized for 'Website Developer Chhatrapati Sambhajinagar' rankings." },
                  { title: "App Development Company Aurangabad", desc: "Native Android/iOS solutions by the top app developer Maharashtra." },
                  { title: "Social Media Marketing Agency", desc: "Expert Instagram marketing Aurangabad & Facebook marketing services." },
                  { title: "Bot Creation Company Aurangabad", desc: "Custom AI bot creation services for 24/7 automated sales." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 items-start group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan group-hover:scale-150 transition-transform flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1 group-hover:text-neon-cyan transition-colors text-sm md:text-base">{item.title}</strong>
                      <span className="text-xs md:text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Visual Tech Stack */}
          <div className="relative">
             {/* Mobile: Static | Desktop: Sticky top-32 (Original) */}
             <div className="static lg:sticky lg:top-32 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  // Mobile: p-6 | Desktop: p-10 (Original)
                  className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#1a1a2e] to-black border border-white/10 shadow-2xl relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px]"></div>
                   
                   <Fingerprint className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 md:mb-6" />
                   
                   <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">Google Marketing Expert</h4>
                   <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed">
                     We dive deep into your goals. From <span className="text-neon-cyan">Google Ads management Aurangabad</span> to complex <span className="text-neon-purple">chatbot development</span>, we are the <span className="text-neon-pink">digital marketing agency</span> that guarantees ROI.
                   </p>

                   <div className="flex flex-wrap gap-2">
                      {['Google Ads', 'Facebook Ads', 'Instagram Growth', 'AI Bots', 'SEO', 'React Native'].map(tag => (
                        <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-mono text-gray-300">
                          {tag}
                        </span>
                      ))}
                   </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="flex justify-end gap-4">
                   <div className="w-20 h-1 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                   <div className="w-10 h-1 bg-neon-cyan rounded-full"></div>
                </div>
             </div>
          </div>

        </div>

        {/* --- PART 3: THE FINAL CTA (Cinematic Wide) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-pink/20 animate-aurora opacity-50"></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>

          {/* Mobile: p-8 | Desktop: p-24 (Original) */}
          <div className="relative z-10 p-8 md:p-12 lg:p-24 text-center">
              {/* Mobile: text-3xl | Desktop: text-7xl (Original) */}
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 tracking-tighter">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Dominate Digital?</span>
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 font-light">
                Partner with the leading <strong className="text-white">website developer in Aurangabad</strong>. Get a <span className="text-neon-cyan">free SEO audit</span> + custom proposal.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <a href="/contact" className="group relative px-8 py-4 md:px-12 md:py-5 bg-white text-black font-bold text-base md:text-lg rounded-full overflow-hidden hover:scale-105 transition-transform w-full md:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Contact Zaikron Now <ArrowUpRight size={20} />
                    </span>
                    <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                 </a>
                 <p className="text-xs md:text-sm text-gray-500 max-w-xs text-center md:text-left">
                   *Your trusted <span className="text-gray-300">social media marketing company in Chhatrapati Sambhajinagar</span>.
                 </p>
              </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}