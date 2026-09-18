'use client';

import Navbar from '../components/ui/Navbar';
import { motion, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Globe, Zap, LayoutGrid, Smartphone, Check, BarChart3 } from 'lucide-react';
import SeoStory from '../components/ui/SeoStory';
import SeoContent from '../components/ui/SeoContent';
import Footer from '../components/ui/Footer';
import AboutContent from '../components/ui/AboutContent';
import LongFormContentSection from '../components/ui/LongFormContentSection';

// ========== KEYWORD ARRAYS REMOVED (SPAM PENALTY RISK) ==========
// We have removed over 3,000+ auto-generated keywords that were sitting here as dead code.
// Client components bundle their source into the JS payload sent to the browser. 
// Googlebot parses JS bundles, and finding massive arrays of "Aurangabad keyword 1... 460" 
// triggers the August 2026 SpamBrain penalty for hidden keyword stuffing.

// SILO STRUCTURE
const siloStructure = {
  website: {
    pillar: "/services/web-development",
    subtopics: [
      { url: "/services/web-development/nextjs", title: "Next.js Development" },
      { url: "/services/web-development/react", title: "React Development" },
      { url: "/services/web-development/wordpress", title: "WordPress Development" },
      { url: "/services/web-development/ecommerce", title: "E-commerce Development" }
    ]
  },
  app: {
    pillar: "/services/app-development",
    subtopics: [
      { url: "/services/app-development/android", title: "Android Development" },
      { url: "/services/app-development/ios", title: "iOS Development" },
      { url: "/services/app-development/react-native", title: "React Native" },
      { url: "/services/app-development/flutter", title: "Flutter Development" }
    ]
  },
  instagram: {
    pillar: "/services/instagram-marketing",
    subtopics: [
      { url: "/services/instagram-marketing/reels", title: "Instagram Reels" },
      { url: "/services/instagram-marketing/ads", title: "Instagram Ads" },
      { url: "/services/instagram-marketing/growth", title: "Instagram Growth" },
      { url: "/services/instagram-marketing/content", title: "Content Creation" }
    ]
  },
  chatbot: {
    pillar: "/services/ai-automation",
    subtopics: [
      { url: "/services/ai-automation/whatsapp-bot", title: "WhatsApp Bot" },
      { url: "/services/ai-automation/chatgpt", title: "ChatGPT Integration" },
      { url: "/services/ai-automation/automation", title: "Automation" },
      { url: "/services/ai-automation/business-automation", title: "Business Automation" }
    ]
  }
};

// --- ANIMATIONS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- REDESIGNED COMPACT SERVICE CARD ---
function ServiceCard({ title, subtitle, price, icon, features }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 w-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="p-4 md:p-8 relative z-10 flex flex-col h-full">
        <div className="mb-3 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-4 text-white group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5">{title}</h3>
          <p className="text-xs md:text-sm text-gray-400 font-medium">{subtitle}</p>
        </div>

        <div className="mb-3 md:mb-8 pb-3 md:pb-8 border-b border-white/10">
          <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 md:mb-2">Starting Investment</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-4xl font-display font-bold text-white">₹{price}</span>
            <span className="text-xs md:text-sm text-gray-400 font-medium">/ Project</span>
          </div>
        </div>

        <ul className="space-y-1.5 md:space-y-4 mb-2 md:mb-8 flex-grow">
          {features.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300">
              <div className="mt-0.5 min-w-4 min-h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// --- NEW COMPONENT: TEXT SCRAMBLE / DECRYPTOR ---
const HyperText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <span 
      onMouseEnter={scramble} 
      className={`${className} cursor-pointer hover:text-neon-cyan transition-colors duration-300`}
    >
      {displayText}
    </span>
  );
};

export default function HomeClient() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main ref={containerRef} className="relative w-full bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-neon-purple selection:text-white">
      <Navbar />
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-aurora will-change-transform opacity-30"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <motion.div 
          className="absolute inset-0 mix-blend-overlay opacity-40 will-change-transform"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 255, 255, 0.1), transparent 80%)`
          }}
        />
        {/* A grid that reveals only near the mouse */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, black, transparent)`
          }}
        />
      </div>


      {/* HERO SECTION */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center items-center px-4 pt-28 pb-6 z-10 overflow-hidden">
        
        {/* --- CREATIVE FILLER 1: THE ROTATING REACTOR RING --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] md:w-[900px] md:h-[900px] border border-dashed border-white/5 rounded-full animate-spin-slow pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] border border-white/5 rounded-full pointer-events-none -z-10"></div>

        {/* --- DESKTOP FLOATING ELEMENTS --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden xl:block absolute left-5 top-1/4"
        >
          <div className="w-64 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl font-mono text-xs transform -rotate-6 hover:rotate-0 transition-transform duration-500 group">
            <div className="flex gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2 text-gray-400 group-hover:text-gray-300 transition-colors">
              <p><span className="text-neon-pink">const</span> <span className="text-neon-cyan">success</span> = <span className="text-white">await</span> build();</p>
              <p><span className="text-neon-purple">npm</span> run <span className="text-yellow-400">rank-one</span></p>
              <p className="text-green-400 animate-pulse">✓ Compiled successfully</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden xl:block absolute right-10 bottom-1/4"
        >
          <div className="w-56 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-neon-cyan/20 rounded-lg"><BarChart3 className="w-4 h-4 text-neon-cyan" /></div>
              <div>
                <div className="text-xs text-gray-400">Monthly Growth</div>
                <div className="text-lg font-bold text-white">+340%</div>
              </div>
            </div>
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* --- CREATIVE FILLER 4: TECHNICAL HUD ELEMENTS --- */}
        <div className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center pointer-events-none opacity-20 md:opacity-30 origin-left scale-75 md:scale-100">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
            <span className="text-[10px] font-mono tracking-widest -rotate-90 whitespace-nowrap text-white">EST. 2024</span>
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        
        {/* === HERO CONTENT === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-neon-cyan/50 transition-colors cursor-default relative z-20 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_#00ff00] flex-shrink-0"></div>
          <span className="text-[8px] xs:text-[9px] md:text-xs font-mono font-bold tracking-widest md:tracking-[0.15em] text-gray-200 whitespace-nowrap">
            AURANGABAD / CHHATRAPATI SAMBHAJINAGAR
          </span>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center relative z-20 flex flex-col items-center">
          <div className="relative group leading-none">
            
            {/* DESKTOP BADGE */}
            <motion.div variants={fadeInUp} className="absolute -top-9 -right-10 lg:right-20 hidden md:block rotate-12 group cursor-pointer">
              <div className="absolute top-1/2 right-full w-20 h-px bg-white/30 transform -translate-y-1/2 group-hover:w-32 transition-all duration-300"></div>
              <div className="px-6 py-3 bg-neon-purple text-black font-bold font-mono text-sm uppercase -rotate-3 border-2 border-white shadow-[5px_5px_0px_white] hover:shadow-[8px_8px_0px_white] hover:-translate-y-1 transition-all">
                The New Age 
              </div>
            </motion.div>

            {/* MOBILE BADGE */}
            <motion.div variants={fadeInUp} className="absolute -top-7 right-2 md:hidden z-20 scale-75 rotate-0 group cursor-pointer origin-bottom-right">
              <div className="px-4 py-1.5 bg-neon-purple text-black font-bold font-mono text-[10px] uppercase -rotate-3 border-2 border-white shadow-[3px_3px_0px_white]">
                The New Age 
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-white drop-shadow-2xl relative z-10 mix-blend-difference">
              <HyperText text="ZAIKRON" className="block" />
            </motion.div>
            
            {/* Ghost/Holographic RGB Split */}
            <h1 className="absolute top-0 left-0 w-full text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-cyan-500 opacity-0 group-hover:opacity-40 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100 pointer-events-none mix-blend-screen select-none">
              ZAIKRON
            </h1>
            <h1 className="absolute top-0 left-0 w-full text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-red-500 opacity-0 group-hover:opacity-40 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-100 pointer-events-none mix-blend-screen select-none">
              ZAIKRON
            </h1>
          </div>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-5xl text-center mt-6 md:mt-12 relative z-20 px-2"
        >
          <h2 className="text-2xl md:text-6xl font-bold leading-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple animate-text-shimmer bg-[length:200%_auto]">Website Development</span> & 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500"> App Design Company</span>
          </h2>
          <div className="mt-4 md:mt-8 max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed mb-4">
              <strong className="text-white font-medium">Zaikron</strong> is the top-rated website development company in <strong className="text-white font-medium">Chhatrapati Sambhaji Nagar (Aurangabad)</strong>.
            </p>
            <p className="text-sm md:text-lg text-gray-500 leading-relaxed hidden sm:block">
              We build hyper-fast, SEO-optimized business websites starting at <strong className="text-cyan-400">₹15,000</strong> and mobile apps starting at <strong className="text-cyan-400">₹70,000</strong>. Located in Usmanpura, we help local businesses dominate Google rankings.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row items-center gap-6 mt-8 md:mt-12 relative z-20 w-full md:w-auto px-4"
        >
          <a href="/contact" className="relative group px-8 py-4 bg-white text-black font-bold text-base uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto text-center">
            <span className="relative z-10 group-hover:text-white transition-colors">Start Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* --- MOBILE VISUALS GRID --- */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md xl:hidden">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg font-mono text-[10px] text-left">
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1 text-gray-400 leading-tight">
                  <p><span className="text-neon-pink">const</span> <span className="text-neon-cyan">rank</span> = 1;</p>
                  <p className="text-green-400">✓ SEO Optimized</p>
                </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg text-left flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-3 h-3 text-neon-cyan" />
                  <div className="text-[10px] text-gray-400">Growth</div>
                </div>
                <div className="text-sm font-bold text-white">+340%</div>
                <div className="h-1 w-full bg-gray-800 rounded-full mt-1 overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative z-20 py-4 md:py-32 px-4 md:px-8">
        <div className="container mx-auto max-w-[95rem]">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-4 md:mb-20 px-2">
            <div>
              <span className="text-neon-cyan font-mono text-xs md:text-sm tracking-widest mb-1 block">/// OUR SERVICES</span>
              <h3 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
                DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SOLUTIONS.</span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-md text-left md:text-right mt-2 md:mt-0 text-xs md:text-lg">
              Website Development, Web Design Company in Aurangabad / Chhatrapati Sambhajinagar, India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ServiceCard 
              title="Website Dev"
              subtitle="For Business & Sales"
              price="10,000"
              icon={<Globe className="w-6 h-6" />}
              features={[
                "Custom Design (No Templates)",
                "Rank #1 on Google (SEO)",
                "Loads in Seconds",
                "Works on All Phones"
              ]}
            />

            <ServiceCard 
              title="App Dev"
              subtitle="Android & iOS Apps"
              price="70,000"
              icon={<Smartphone className="w-6 h-6" />}
              features={[
                "Native Mobile Performance",
                "Publish to Play Store",
                "Secure Customer Database",
                "Admin Control Panel"
              ]}
            />

            <ServiceCard 
              title="Social Media"
              subtitle="Marketing & Growth"
              price="10,000"
              icon={<LayoutGrid className="w-6 h-6" />}
              features={[
                "Viral Instagram Reels and Ads",
                "Facebook Ad Campaigns",
                "Get More Leads/Calls",
                "Build Brand Trust"
              ]}
            />

            <ServiceCard 
              title="AI Chatbots"
              subtitle="Auto-Pilot Business"
              price="10,000"
              icon={<Zap className="w-6 h-6" />}
              features={[
                "WhatsApp Auto-Reply Bot",
                "24/7 Customer Support",
                "Automatic Sales Funnel",
                "Save Employee Costs"
              ]}
            />
          </div>
        </div>
      </section>

      <SeoStory />  
      <SeoContent />
      <AboutContent />
      
      {/* NEW CONTENT SECTION */}
      <LongFormContentSection />
      
      <Footer />
    </main>
  );
}