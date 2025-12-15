'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { Globe, Smartphone, Share2, Bot, Megaphone, CheckCircle } from 'lucide-react';

// --- DATA: THE SEO NARRATIVE ---
const storyChapters = [
  {
    id: "web-authority",
    theme: "cyan",
    icon: <Globe className="w-6 h-6" />,
    title: "DIGITAL FOUNDATION",
    headline: "Web Development Architecture",
    content: (
      <>
        In an era of digital noise, you need a signal. We are the <strong className="text-white">best web development company in Aurangabad</strong>, engineering digital fortresses. Whether you need a corporate <strong className="text-white">website developer Chhatrapati Sambhajinagar</strong> or a nimble <strong className="text-white">website developer for small business Aurangabad</strong>, our code is your competitive advantage. We operate as a premier <span className="text-neon-cyan">web development company India</span>, setting the global standard for <span className="text-neon-cyan">website development Aurangabad</span>.
      </>
    )
  },
  {
    id: "mobile-ecosystem",
    theme: "purple",
    icon: <Smartphone className="w-6 h-6" />,
    title: "MOBILE ECOSYSTEMS",
    headline: "App Dominance",
    content: (
      <>
        The future is in the palm of your hand. Zaikron is the <strong className="text-white">app development company Aurangabad</strong> that transforms ideas into installed reality. Our team, led by the top <strong className="text-white">app developer Maharashtra</strong>, crafts fluid iOS & Android experiences. Searching for <span className="text-neon-purple">affordable app development Aurangabad</span> with enterprise-grade security? We are the <span className="text-neon-purple">app development agency Maharashtra</span> that scales with you.
      </>
    )
  },
  {
    id: "social-velocity",
    theme: "pink",
    icon: <Share2 className="w-6 h-6" />,
    title: "VIRAL VELOCITY",
    headline: "Social Media Engineering",
    content: (
      <>
        Attention is currency. As the leading <strong className="text-white">social media marketing agency Aurangabad</strong>, we don't just post; we ignite movements. From precision <strong className="text-white">Instagram marketing Aurangabad</strong> campaigns to high-conversion <strong className="text-white">Facebook marketing services Aurangabad</strong>, we own the feed. Need a <span className="text-neon-pink">Facebook marketing agency near me Aurangabad</span>? We are the dominant <span className="text-neon-pink">social media marketing company in Chhatrapati Sambhajinagar</span>.
      </>
    )
  },
  {
    id: "search-supremacy",
    theme: "orange",
    icon: <Megaphone className="w-6 h-6" />,
    title: "SEARCH SUPREMACY",
    headline: "Ads & Traffic",
    content: (
      <>
        Be seen by those who matter. We are the data-driven <strong className="text-white">Google marketing agency Maharashtra</strong>. Our certified experts handle complex <strong className="text-white">Google Ads management Aurangabad</strong> and act as your <strong className="text-white">Facebook ads expert Chhatrapati Sambhajinagar</strong>. Trust a proven <span className="text-orange-500">Google marketing expert Maharashtra</span> to scale your revenue.
      </>
    )
  },
  {
    id: "ai-automation",
    theme: "green",
    icon: <Bot className="w-6 h-6" />,
    title: "INTELLIGENT AUTOMATION",
    headline: "AI & Custom Bots",
    content: (
      <>
        Efficiency is the new growth. Zaikron is the pioneer <strong className="text-white">bot creation company Aurangabad</strong>. We engineer <strong className="text-white">custom bot creation Aurangabad</strong> and deploy advanced <strong className="text-white">AI bot creation services Aurangabad</strong> to automate your sales. As a top-tier <span className="text-green-400">chatbot development company India</span>, we build the workforce of tomorrow.
      </>
    )
  }
];

// --- OPTIMIZED STATIC BACKGROUND (MEMOIZED) ---
// We remove the SVG gradient animation from the main thread
const BackgroundStream = memo(() => (
  <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0 opacity-20">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path
        d="M 50 0 C 50 20, 20 20, 20 40 C 20 60, 80 60, 80 80 C 80 100, 50 100, 50 120"
        fill="none"
        stroke="url(#gradient-story)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient id="gradient-story" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f3ff" />
          <stop offset="50%" stopColor="#7000ff" />
          <stop offset="100%" stopColor="#ff0099" />
        </linearGradient>
      </defs>
    </svg>
  </div>
));
BackgroundStream.displayName = 'BackgroundStream';

export default function SeoStory() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative bg-[#050508] py-40 overflow-hidden">
      <BackgroundStream />

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        
        {/* HEADER */}
        <div className="text-center mb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300 tracking-[0.3em] uppercase">The Evolution Protocol</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">ALCHEMY</span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are the premier <strong className="text-white">digital marketing agency Chhatrapati Sambhajinagar</strong>. This is how we transform your business.
          </p>
        </div>

        {/* CHAPTERS */}
        <div className="space-y-40">
          {storyChapters.map((chapter, index) => (
            <TimelineChapter key={chapter.id} data={chapter} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: GPU OPTIMIZED CHAPTER ---
function TimelineChapter({ data, index }: { data: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", amount: 0.2 });
  const isEven = index % 2 === 0;

  // Pre-defined styles to avoid runtime calculation
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'cyan': return { text: 'text-neon-cyan', border: 'border-neon-cyan', shadow: 'shadow-neon-cyan/20', glow: 'bg-neon-cyan' };
      case 'purple': return { text: 'text-neon-purple', border: 'border-neon-purple', shadow: 'shadow-neon-purple/20', glow: 'bg-neon-purple' };
      case 'pink': return { text: 'text-neon-pink', border: 'border-neon-pink', shadow: 'shadow-neon-pink/20', glow: 'bg-neon-pink' };
      case 'orange': return { text: 'text-orange-500', border: 'border-orange-500', shadow: 'shadow-orange-500/20', glow: 'bg-orange-500' };
      case 'green': return { text: 'text-green-500', border: 'border-green-500', shadow: 'shadow-green-500/20', glow: 'bg-green-500' };
      default: return { text: 'text-white', border: 'border-white', shadow: 'shadow-white/20', glow: 'bg-white' };
    }
  };

  const theme = getThemeStyles(data.theme);

  return (
    <div ref={ref} className={`flex items-center ${isEven ? 'justify-start md:justify-start' : 'justify-end md:justify-end'} relative`}>
      
      {/* THE CARD CONTAINER - GPU ACCELERATED */}
      <motion.div 
        // We animate opacity and y-transform only. NO FILTERS.
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full md:w-2/3 lg:w-1/2"
        style={{ willChange: "opacity, transform" }} // Forces GPU Layer
      >
        
        {/* CARD BACKGROUND */}
        <div className={`
          relative p-8 md:p-12 rounded-[32px] overflow-hidden
          bg-[#0a0a0f] border border-white/10
          transition-colors duration-500
          ${isInView ? `border-opacity-100 ${theme.border}/50` : 'border-opacity-20'}
        `}>
          
          {/* STATIC GLOW LAYER (Fades in, doesn't calculate blur) */}
          <div 
            className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none transition-opacity duration-1000 ${theme.glow}/10`}
            style={{ opacity: isInView ? 1 : 0 }} 
          ></div>

          {/* HEADER */}
          <div className="relative z-10 mb-8 flex items-center gap-4">
            <div className={`
              w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 
              ${isInView ? theme.text : 'text-gray-500'}
              transition-colors duration-500
            `}>
              {data.icon}
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 tracking-[0.2em] uppercase block mb-1">{data.title}</span>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white">{data.headline}</h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-lg text-gray-400 leading-relaxed font-light">
            {data.content}
          </div>

          {/* STATUS BAR */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className={`w-4 h-4 ${isInView ? theme.text : 'text-gray-600'}`} />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Service Active</span>
            </div>
            <span className="text-[10px] font-mono text-gray-600">ZK_SYS_0{index + 1}</span>
          </div>

        </div>

      </motion.div>

    </div>
  );
}