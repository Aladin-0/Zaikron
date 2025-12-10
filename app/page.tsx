'use client';

import Navbar from '../components/ui/Navbar';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

// --- 3D TILT CARD COMPONENT ---
function ProjectCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative w-full h-[500px] rounded-3xl bg-black border border-white/10 group cursor-pointer overflow-hidden perspective-1000 shadow-2xl shadow-neon-purple/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* CARD CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center translate-z-20">
         <span className="text-xs font-mono text-neon-cyan tracking-widest mb-4 border border-neon-cyan/30 px-3 py-1 rounded-full">
            FEATURED PROJECT
         </span>
         <h3 className="text-6xl font-display font-bold text-white tracking-tighter group-hover:scale-110 transition-transform duration-500">
           AEROSPACE
         </h3>
         <p className="mt-4 text-gray-400 font-mono text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
           /// NEXT.JS 14 + WEBGL
         </p>
      </div>
    </motion.div>
  );
}

// --- MAIN PAGE LAYOUT ---
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="relative w-full min-h-[200vh] bg-void text-white font-sans selection:bg-neon-pink selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* NOISE & ATMOSPHERE */}
      <div className="bg-noise"></div>
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-neon-purple rounded-full blur-[150px] opacity-20 animate-float"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-neon-cyan rounded-full blur-[150px] opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* --- HERO SECTION (Split Layout) --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 z-10">
        <div className="container mx-auto max-w-[90rem]">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: SEO HEADER & TAGLINE */}
            <div className="lg:col-span-7">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.5 }}
                 className="mb-8 flex items-center gap-3 text-neon-cyan font-mono text-sm tracking-widest"
              >
                 <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                 BUILDING THE DIGITAL FUTURE
              </motion.div>

              <div className="relative z-20 mb-8">
                 <motion.h1 
                   initial={{ x: -50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                   className="font-display text-[12vw] lg:text-[130px] leading-[0.9] font-bold text-white tracking-tighter"
                 >
                   DIGITAL <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                     ALCHEMY.
                   </span>
                 </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-white/10 pl-6"
              >
                We turn code into <span className="text-white font-bold">immersive experiences</span>. The leading dev agency in Chhatrapati Sambhajinagar creating algorithmic dominance.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                 <a href="/contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-neon-cyan transition-colors rounded-full">
                    Start Project
                 </a>
                 <a href="/work" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors rounded-full">
                    View Work
                 </a>
              </motion.div>
            </div>

            {/* RIGHT: 3D CARD (Visual Hook) */}
            <div className="lg:col-span-5 hidden lg:block">
               <ProjectCard />
            </div>

          </div>
        </div>
      </section>

      {/* --- SEO DASHBOARD SECTION (The "About" Block) --- */}
      <section className="relative z-20 py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-[90rem]">
           
           {/* GLASS PANEL CONTAINER */}
           <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
              
              {/* Decorative Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>

              <div className="grid lg:grid-cols-2 gap-16">
                 
                 {/* COLUMN 1: THE PITCH (SEO TEXT) */}
                 <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                       About <span className="text-neon-cyan">Zaikron</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                       <p>
                          Zaikron is a premier <strong className="text-white">Web Development Company in Chhatrapati Sambhajinagar (Aurangabad)</strong>. We don't just build websites; we engineer high-performance digital infrastructure for global brands.
                       </p>
                       <p>
                          Our approach blends <span className="text-neon-purple">Creative WebGL Artistry</span> with <span className="text-neon-purple">Enterprise SEO Strategy</span>. Whether it's a custom web app or an AI-powered marketing platform, we build systems that rank #1 and perform instantly.
                       </p>
                    </div>

                    {/* KEYWORD PILLS */}
                    <div className="mt-8 flex flex-wrap gap-3">
                       {['Custom Web Development', 'App Development', 'Digital Marketing', 'SEO Optimization'].map((tag) => (
                          <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-neon-cyan/50 transition-colors cursor-default">
                             {tag}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* COLUMN 2: TECH STACK (Visual Authority) */}
                 <div className="bg-black/40 rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
                    <div>
                       <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                          TECHNOLOGY STACK
                       </h3>
                       <div className="grid grid-cols-2 gap-4">
                          <TechItem name="Next.js 14" desc="Server Side Rendering" />
                          <TechItem name="Three.js" desc="3D WebGL Experiences" />
                          <TechItem name="Node.js" desc="Scalable Backend" />
                          <TechItem name="React Native" desc="Cross-Platform Apps" />
                       </div>
                    </div>
                    
                    <div className="mt-10 pt-10 border-t border-white/10">
                       <div className="flex items-end justify-between">
                          <div>
                             <p className="text-5xl font-bold text-white">100<span className="text-neon-cyan text-3xl">%</span></p>
                             <p className="text-sm text-gray-400 mt-2">Lighthouse Performance</p>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center text-black font-bold">
                             A+
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>

        </div>
      </section>

      {/* --- SELECTED WORK PREVIEW --- */}
      <section className="relative z-10 py-32 border-t border-white/10 bg-black/40 backdrop-blur-sm">
         <div className="container mx-auto px-6 md:px-12">
            <motion.div style={{ y: yText }} className="text-center max-w-4xl mx-auto">
               <span className="text-neon-cyan font-mono text-sm tracking-widest mb-6 block">/// OUR WORK</span>
               <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                  SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">MASTERPIECES</span>
               </h2>
               <p className="text-gray-400 text-lg mb-12">
                 From Aurangabad to the world. We create award-winning digital experiences that define categories.
               </p>
               <a href="/work" className="inline-flex items-center gap-3 text-white font-bold tracking-widest uppercase hover:gap-6 transition-all border-b border-neon-cyan pb-1">
                  View Full Portfolio
                  <span className="text-neon-cyan">→</span>
               </a>
            </motion.div>
         </div>
      </section>

    </main>
  );
}

// Sub-component for Tech Stack
function TechItem({ name, desc }: { name: string, desc: string }) {
   return (
      <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
         <h4 className="font-bold text-neon-cyan">{name}</h4>
         <p className="text-xs text-gray-400 mt-1">{desc}</p>
      </div>
   )
}