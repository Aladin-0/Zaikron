'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, Sparkles, Code2, Smartphone, 
  BarChart3, Zap, CheckCircle, TrendingUp, 
  Globe, ShieldCheck, Cpu, Search, Layers, Rocket, Users 
} from 'lucide-react';

export default function ServicesContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative bg-[#050508] overflow-hidden min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      
      {/* BACKGROUND - SCALED DOWN FOR MOBILE */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: yBackground }} 
          className="absolute top-[-5%] left-[-20%] w-[300px] h-[300px] md:top-[-10%] md:left-[-10%] md:w-[1000px] md:h-[1000px] bg-neon-purple/20 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen opacity-40 animate-pulse"
        />
        <motion.div 
          style={{ y: yBackground }} 
          className="absolute bottom-[-5%] right-[-20%] w-[250px] h-[250px] md:bottom-[-10%] md:right-[-10%] md:w-[800px] md:h-[800px] bg-neon-cyan/20 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen opacity-40 animate-pulse"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[95rem] relative z-10">
        
        {/* HERO SECTION - RESTRUCTURED FOR MOBILE */}
        <div className="mb-20 md:mb-40 text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono text-neon-cyan tracking-[0.2em] md:tracking-[0.3em] uppercase">
              #1 Agency • Aurangabad
            </span>
          </motion.div>

          {/* H1 TAG - FIXED MOBILE SIZING */}
          <h1 className="text-4xl sm:text-5xl md:text-9xl font-display font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
            Web Development Services Aurangabad <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-[0_0_30px_rgba(112,0,255,0.5)]">
              Complete Digital Solutions
            </span>
          </h1>

          <div className="max-w-4xl mx-auto px-1 md:px-0">
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed mb-6 md:mb-8">
              Zaikron is Aurangabad's <strong className="text-white">leading web development company</strong>, delivering award-winning website development, app development, social media marketing, and AI automation solutions.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-12">
              Whether you're searching for the <strong className="text-white">best website developer in Chhatrapati Sambhajinagar</strong>, a <strong className="text-white">social media marketing agency near me</strong>, or a <strong className="text-white">custom app development partner</strong>, we provide comprehensive digital transformation services for businesses across Maharashtra and India.
            </p>

            {/* PRIMARY CTA - STACKED ON MOBILE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8"
            >
              <Link 
                href="/contact" 
                className="group relative w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold text-base md:text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(112,0,255,0.4)] flex justify-center"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project - From ₹10,000 <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </span>
              </Link>
              <Link 
                href="tel:+919730416763"
                className="w-full md:w-auto px-8 py-4 md:py-5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all flex justify-center"
              >
                📞 Call +91-9730416763
              </Link>
            </motion.div>

            <p className="text-xs md:text-sm text-gray-500 px-4">
              <strong className="text-neon-cyan">Located in Usmanpura, Aurangabad, Maharashtra 431005</strong> • Serving Chhatrapati Sambhajinagar & Beyond
            </p>
          </div>
        </div>

        {/* SERVICE 1: WEBSITE DEVELOPMENT */}
        <ServiceLayout
          num="01"
          title="Website Development"
          subtitle="Aurangabad's #1 Web Development Company"
          icon={<Code2 className="w-6 h-6 md:w-8 md:h-8 text-neon-cyan" />}
          color="cyan"
          side="right"
          description={
            <>
              Zaikron specializes in <strong className="text-white">custom website development in Aurangabad</strong>, building SEO-optimized, high-performance websites that rank on Google and convert visitors into customers. Whether you need a <strong className="text-white">website developer in Chhatrapati Sambhajinagar</strong>, an <strong className="text-white">ecommerce platform</strong>, or a <strong className="text-white">responsive business website</strong>, we deliver pixel-perfect solutions using modern frameworks like Next.js, React, and Node.js.
            </>
          }
          visual={
            <div className="grid grid-cols-1 gap-4 h-full">
              {/* Mobile: 1 col, Tablet+: 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureBox title="Next.js SSG" desc="Super-fast, SEO-friendly sites" icon={<Zap />} color="cyan" />
                <FeatureBox title="SEO First" desc="Keyword research & structured data" icon={<Search />} color="cyan" />
                <FeatureBox title="Mobile-First" desc="Fully responsive design" icon={<Smartphone />} color="cyan" />
                <FeatureBox title="E-Commerce" desc="Shopify, Stripe, Product Catalogs" icon={<Globe />} color="cyan" />
              </div>
              <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-2xl p-5 md:p-6">
                <h4 className="font-bold text-white mb-3 text-xs md:text-sm uppercase tracking-widest">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3"><CheckCircle size={18} className="text-neon-cyan shrink-0"/> Ranked #1 for "web developer Aurangabad"</li>
                  <li className="flex gap-3"><CheckCircle size={18} className="text-neon-cyan shrink-0"/> 300%+ traffic increase avg.</li>
                  <li className="flex gap-3"><CheckCircle size={18} className="text-neon-cyan shrink-0"/> Core Web Vitals 95+</li>
                </ul>
              </div>
            </div>
          }
          footerText="Website development packages start at ₹10,000 for small business sites. Custom enterprise solutions from ₹1,00,00+."
          ctaLink="/services/web-development"
          ctaText="Explore Web Development →"
        />

        {/* SERVICE 2: APP DEVELOPMENT */}
        <ServiceLayout
          num="02"
          title="App Development"
          subtitle="Native & Cross-Platform Solutions"
          icon={<Smartphone className="w-6 h-6 md:w-8 md:h-8 text-neon-purple" />}
          color="purple"
          side="left"
          description={
            <>
              Our <strong className="text-white">app development company in Aurangabad</strong> builds iOS, Android, and cross-platform applications using React Native, Flutter, and Native technologies. Whether you need a <strong className="text-white">mobile app developer in Chhatrapati Sambhajinagar</strong> or a full-stack <strong className="text-white">web app platform</strong>, we deliver scalable, user-centric solutions.
            </>
          }
          visual={
            <div className="space-y-4 h-full flex flex-col justify-center">
              <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Tech Stack Mastery</h4>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Node.js API', 'AWS'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-neon-purple">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureBox title="PWA Apps" desc="Works offline, no store needed" icon={<Globe />} color="purple" />
                <FeatureBox title="Backend API" desc="Secure Node.js/Python APIs" icon={<Code2 />} color="purple" />
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-transparent border border-neon-purple/30">
                <h5 className="font-bold text-white mb-1">Recent Project: Aathvani</h5>
                <p className="text-sm text-gray-400">QR-code photo delivery app for photographers.</p>
              </div>
            </div>
          }
          footerText="App development cost in Aurangabad starts at ₹50,000 for MVP. Enterprise platforms from ₹1,00,00+."
          ctaLink="/services/app-development"
          ctaText="Explore App Development →"
        />

        {/* SERVICE 3: SOCIAL MEDIA MARKETING */}
        <ServiceLayout
          num="03"
          title="Social Media Marketing"
          subtitle="Instagram, Facebook, Google Ads"
          icon={<BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-neon-pink" />}
          color="pink"
          side="right"
          description={
            <>
              Zaikron is a top-rated <strong className="text-white">social media marketing agency in Aurangabad</strong>, specializing in Instagram marketing, Facebook ads, Google Ads management, and comprehensive digital marketing strategies. Whether you're searching for <strong className="text-white">Instagram marketing near me Chhatrapati Sambhajinagar</strong> or need <strong className="text-white">Facebook advertising expert</strong>, our data-driven approach delivers measurable results.
            </>
          }
          visual={
            <div className="h-full flex flex-col gap-4">
              <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-2xl p-6 md:p-8 text-center">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-neon-pink mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">300% ROI</h3>
                <p className="text-xs md:text-sm font-mono text-neon-pink uppercase tracking-widest">Average Client Growth</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                <FeatureBox title="Instagram Growth" desc="Reels, Stories, Hashtags" icon={<Smartphone />} color="pink" />
                <FeatureBox title="Facebook Ads" desc="Targeted Lead Gen" icon={<Users />} color="pink" />
                <FeatureBox title="Google Ads" desc="Search & Display SEM" icon={<Search />} color="pink" />
                <FeatureBox title="Content" desc="Video & Copywriting" icon={<Layers />} color="pink" />
              </div>
            </div>
          }
          footerText="Social media marketing pricing starts from ₹5,000/month for Instagram management. Full-service packages from ₹15,000/month with ad spend."
          ctaLink="/services/social-media-marketing"
          ctaText="Explore Social Media Marketing →"
        />

        {/* SERVICE 4: AI AUTOMATION */}
        <ServiceLayout
          num="04"
          title="AI & Bot Automation"
          subtitle="ChatGPT Bots, WhatsApp Automation"
          icon={<Cpu className="w-6 h-6 md:w-8 md:h-8 text-green-400" />}
          color="green"
          side="left"
          description={
            <>
              Our <strong className="text-white">bot creation company in Aurangabad</strong> builds intelligent chatbots, WhatsApp bots, and custom AI solutions that automate customer service, lead qualification, and sales. From <strong className="text-white">ChatGPT bot integration</strong> to <strong className="text-white">custom AI development</strong>, we leverage cutting-edge AI technology for business automation.
            </>
          }
          visual={
            <div className="grid grid-cols-1 gap-4 h-full">
              <div className="p-5 md:p-6 rounded-2xl bg-[#0a0a0f] border border-white/10 flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-green-500/20 rounded-full text-green-400">
                  <Zap size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">70% Faster</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Response time reduction</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureBox title="ChatGPT Integration" desc="24/7 AI Support" icon={<Cpu />} color="green" />
                <FeatureBox title="WhatsApp Bots" desc="Auto-Reply & Sales" icon={<Smartphone />} color="green" />
                <FeatureBox title="Lead Bots" desc="Qualify & Schedule" icon={<Users />} color="green" />
                <FeatureBox title="E-Commerce" desc="Order Updates" icon={<Globe />} color="green" />
              </div>
            </div>
          }
          footerText="Chatbot development starts at ₹30,000 for basic bots. Advanced AI automation from ₹1,00,000+."
          ctaLink="/services/bot-automation"
          ctaText="Explore AI Automation →"
        />

        {/* SERVICE 5: DIGITAL MARKETING */}
        <ServiceLayout
          num="05"
          title="Digital Marketing"
          subtitle="SEO, Content, Email, CRO"
          icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
          color="yellow"
          side="right"
          description={
            <>
              Beyond social media, Zaikron offers comprehensive <strong className="text-white">digital marketing services in Aurangabad</strong> including SEO optimization, content marketing, email campaigns, and conversion rate optimization. We help businesses build <strong className="text-white">topical authority</strong> and rank for high-value keywords across search engines.
            </>
          }
          visual={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              <FeatureBox title="SEO Optimization" desc="On-page & Technical" icon={<Search />} color="yellow" />
              <FeatureBox title="Content Marketing" desc="Blogs & Whitepapers" icon={<Layers />} color="yellow" />
              <FeatureBox title="Email Marketing" desc="Drip Campaigns" icon={<Code2 />} color="yellow" />
              <FeatureBox title="Local SEO" desc="GMB & Maps Ranking" icon={<Globe />} color="yellow" />
              <div className="col-span-1 sm:col-span-2 p-5 md:p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                <h4 className="font-bold text-white mb-2">Full-Stack Growth</h4>
                <p className="text-sm text-gray-400">From acquisition to retention, we optimize the entire funnel.</p>
              </div>
            </div>
          }
          footerText="Digital marketing packages start from ₹10,000/month for SEO. Comprehensive campaigns from ₹10,000/month."
          ctaLink="/services/digital-marketing"
          ctaText="Explore Digital Marketing →"
        />

        {/* UNIQUE CONTENT SECTION */}
        <UniqueContentSection />

        {/* INTEGRATION SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 md:mt-40 p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-neon-cyan/10 rounded-full blur-[100px]"></div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 md:mb-12 text-center relative z-10">
            Why Integrate All Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            <IntegrationBenefit title="Unified Tech Stack" desc="Same team handles site, app, and bots. No communication gaps." />
            <IntegrationBenefit title="Consistent Branding" desc="Website, app, ads—all reflecting your brand voice perfectly." />
            <IntegrationBenefit title="Optimized Funnels" desc="Seamless journey from Google search → website → app → conversion." />
            <IntegrationBenefit title="Faster Launch" desc="Single project management means quicker decision making." />
            <IntegrationBenefit title="Cost Savings" desc="Package discounts (20-30% off) for integrated services." />
            <IntegrationBenefit title="Unified Analytics" desc="Track website, app, and campaign metrics in one dashboard." />
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <div className="mt-24 md:mt-40 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-20 blur-[120px] -z-10"></div>
          
          <h2 className="text-4xl md:text-8xl font-display font-bold text-white mb-6 md:mb-8 tracking-tighter">
            Ready to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Dominate?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            Partner with Aurangabad's leading web development company. Get a free SEO audit + custom digital strategy proposal.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group relative w-full md:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Now <ArrowUpRight size={20} />
              </span>
              <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              *Trusted by 50+ businesses in Aurangabad, Chhatrapati Sambhajinagar, and Maharashtra.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// SUB-COMPONENTS

interface ServiceLayoutProps {
  num: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: 'cyan' | 'purple' | 'pink' | 'yellow' | 'green';
  side: 'left' | 'right';
  description: ReactNode;
  visual: ReactNode;
  footerText: string;
  ctaLink: string;
  ctaText: string;
}

function ServiceLayout({ num, title, subtitle, icon, color, side, description, visual, footerText, ctaLink, ctaText }: ServiceLayoutProps) {
  
  const colors: Record<string, string> = {
    cyan: "text-neon-cyan border-neon-cyan/30",
    purple: "text-neon-purple border-neon-purple/30",
    pink: "text-neon-pink border-neon-pink/30",
    yellow: "text-yellow-400 border-yellow-400/30",
    green: "text-green-400 border-green-400/30"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mb-24 md:mb-40"
    >
      <div className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-stretch ${side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
            <span className={`text-5xl md:text-6xl font-display font-bold opacity-30 ${colors[color].split(" ")[0]}`}>{num}</span>
            <div className={`p-3 md:p-4 rounded-2xl bg-black/40 border border-white/10 shadow-lg`}>
              {icon}
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{title}</h2>
          <p className={`text-xs md:text-sm font-mono uppercase tracking-widest mb-6 md:mb-8 ${colors[color].split(" ")[0]}`}>{subtitle}</p>
          
          <div className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            {description}
          </div>

          <div className={`pt-6 border-t ${colors[color].split(" ")[1]} mb-6`}>
            <p className="text-xs md:text-sm text-gray-500 italic">{footerText}</p>
          </div>

          <Link 
            href={ctaLink}
            className={`inline-flex items-center justify-center lg:justify-start gap-2 px-6 py-3 rounded-full border transition-all hover:scale-105 ${colors[color].split(" ")[1]} ${colors[color].split(" ")[0]} font-semibold text-sm md:text-base w-full lg:w-auto`}
          >
            {ctaText} <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex-1 w-full min-h-[300px] lg:min-h-[500px]">
          <div className={`h-full p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0f] border border-white/10 relative overflow-hidden group hover:border-opacity-50 transition-colors duration-500 ${colors[color].split(" ")[1]}`}>
            <div className={`absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 opacity-20 rounded-full blur-[60px] md:blur-[80px] bg-current ${colors[color].split(" ")[0].replace("text-", "bg-")}`}></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              {visual}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function FeatureBox({ title, desc, icon, color }: { title: string; desc: string; icon: ReactNode; color: string }) {
  const hoverColors: Record<string, string> = {
    cyan: "group-hover:text-neon-cyan",
    purple: "group-hover:text-neon-purple",
    pink: "group-hover:text-neon-pink",
    yellow: "group-hover:text-yellow-400",
    green: "group-hover:text-green-400",
  };

  return (
    <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group h-full">
      <div className={`mb-3 text-gray-400 ${hoverColors[color]} transition-colors`}>{icon}</div>
      <h5 className="font-bold text-white text-sm mb-1">{title}</h5>
      <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function IntegrationBenefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
        <CheckCircle size={18} className="text-neon-cyan shrink-0" />
        {title}
      </h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, color, features, ideal }: any) {
  const colorMap: Record<string, string> = {
    cyan: "from-neon-cyan/10 border-neon-cyan/30 text-neon-cyan",
    purple: "from-neon-purple/10 border-neon-purple/30 text-neon-purple",
    pink: "from-neon-pink/10 border-neon-pink/30 text-neon-pink"
  };

  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colorMap[color].split(" ")[0]} to-transparent border ${colorMap[color].split(" ")[1]}`}>
      <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
      <p className={`text-4xl font-display font-bold mb-4 ${colorMap[color].split(" ")[2]}`}>{price}</p>
      <ul className="space-y-2 text-gray-300 text-sm mb-6">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-2">
            <CheckCircle size={16} className={`${colorMap[color].split(" ")[2]} shrink-0 mt-1`}/> {f}
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 italic">{ideal}</p>
    </div>
  );
}

function CaseStudyCard({ icon, title, industry, challenge, solution, results, color }: any) {
  const colorMap: Record<string, string> = {
    cyan: "border-neon-cyan/30 bg-neon-cyan/20",
    purple: "border-neon-purple/30 bg-neon-purple/20",
    pink: "border-neon-pink/30 bg-neon-pink/20"
  };

  return (
    <div className={`p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:${colorMap[color].split(" ")[0]} transition-colors`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${colorMap[color].split(" ")[1]} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h4>
          <p className="text-sm text-gray-400">Industry: {industry}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
        <strong className="text-white">Challenge:</strong> {challenge}
      </p>
      <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
        <strong className="text-white">Solution:</strong> {solution}
      </p>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        <strong className="text-white">Results:</strong> {results}
      </p>
    </div>
  );
}

function TrustPoint({ title, desc }: any) {
  return (
    <div>
      <h4 className="text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2">
        <CheckCircle className="text-neon-cyan shrink-0" size={20} />
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}

function TechStackCard({ title, techs, color }: any) {
  const colorMap: Record<string, string> = {
    cyan: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
    purple: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
    pink: "bg-neon-pink/20 text-neon-pink border-neon-pink/30"
  };

  return (
    <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10">
      <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech: string) => (
          <span key={tech} className={`px-3 py-1 text-xs rounded-full ${colorMap[color]}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc, color }: any) {
  const colorMap: Record<string, string> = {
    cyan: "text-neon-cyan border-neon-cyan/30",
    purple: "text-neon-purple border-neon-purple/30",
    pink: "text-neon-pink border-neon-pink/30",
    yellow: "text-yellow-400 border-yellow-400/30",
    green: "text-green-400 border-green-400/30"
  };

  return (
    <div className={`p-5 md:p-6 rounded-2xl bg-white/5 border ${colorMap[color].split(" ")[1]} hover:bg-white/10 transition-colors`}>
      <div className="flex items-start gap-4">
        <span className={`text-3xl font-display font-bold ${colorMap[color].split(" ")[0]} opacity-60`}>{num}</span>
        <div>
          <h5 className="text-lg font-bold text-white mb-2">{title}</h5>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ title, desc, examples }: any) {
  return (
    <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <h4 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
      <p className="text-xs text-gray-500"><strong className="text-white">Examples:</strong> {examples}</p>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10">
      <h4 className="text-lg font-bold text-white mb-3">{question}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

function UniqueContentSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 mb-24 md:mt-40 md:mb-40"
    >
      <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-10 md:mb-16 text-center">
        Why Zaikron is Aurangabad's <span className="text-neon-cyan">#1 Web Development Company</span>
      </h2>

      <div className="prose prose-invert prose-lg max-w-none">
        
        {/* About Our Aurangabad Presence */}
        <div className="mb-12 md:mb-16 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="text-neon-cyan shrink-0" size={32} />
            Deep Roots in Aurangabad & Chhatrapati Sambhajinagar
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            Founded and headquartered in <strong className="text-white">Usmanpura, Aurangabad, Maharashtra 431005</strong>, Zaikron has been serving local businesses and enterprises across Chhatrapati Sambhajinagar for over 5 years. Our intimate understanding of the Aurangabad market, combined with global development standards, makes us uniquely positioned to deliver <strong className="text-white">web development services</strong> that resonate with local audiences while competing on international benchmarks.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            We understand the unique challenges faced by businesses in Aurangabad—from limited digital infrastructure to intense competition in traditional industries like manufacturing, textiles, education, and healthcare. Our <strong className="text-white">website development solutions</strong> are specifically designed to help Aurangabad businesses establish strong online presence, generate quality leads, and compete with metropolitan competitors.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Whether you're a startup in MIDC industrial area, a retail store in Connaught Road, an educational institution near Aurangabad University, or a healthcare provider in N-Town, we've successfully delivered digital transformation projects that drive real business results. Our portfolio includes 50+ successful projects ranging from <strong className="text-white">small business websites starting at ₹10,000</strong> to <strong className="text-white">enterprise web applications exceeding so on</strong>.
          </p>
        </div>

        {/* Website Development Pricing */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="text-neon-purple shrink-0" size={32} />
            Website Development Pricing in Aurangabad - Transparent & Competitive
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <PricingCard 
              title="Starter Package"
              price="₹10,000"
              color="cyan"
              features={[
                "5-page responsive website",
                "Mobile-first design",
                "Basic SEO optimization",
                "Contact form integration",
                "1-year free hosting",
                "3 months support"
              ]}
              ideal="Perfect for: Startups, small businesses, landing pages"
            />
            <PricingCard 
              title="Professional Package"
              price="₹30,000"
              color="purple"
              features={[
                "10-15 page custom website",
                "Advanced SEO (keyword research)",
                "CMS integration (easy updates)",
                "Blog/news section",
                "WhatsApp integration",
                "Lead capture forms",
                "6 months support"
              ]}
              ideal="Perfect for: Growing businesses, professional services"
            />
            <PricingCard 
              title="E-Commerce Package"
              price="₹50,000+"
              color="pink"
              features={[
                "Full online store",
                "Unlimited products",
                "Payment gateway (Razorpay/Stripe)",
                "Inventory management",
                "Advanced analytics",
                "Multi-currency support",
                "1-year priority support"
              ]}
              ideal="Perfect for: Retailers, online stores, product businesses"
            />
          </div>

          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
            Our <strong className="text-white">website development cost in Aurangabad</strong> is structured to be transparent and competitive. Unlike many agencies that hide costs or spring surprise charges, we provide detailed quotations upfront. Every package includes hosting, domain setup, SSL certificate, and post-launch support. We also offer flexible payment plans for businesses with budget constraints—pay 50% upfront and the remaining 50% after launch.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            For custom requirements like <strong className="text-white">educational portals, healthcare management systems, real estate platforms, or manufacturing websites</strong>, we provide tailored quotes after understanding your specific needs. Our average enterprise project ranges from ₹1,00,00 to so on depending on complexity, integrations, and custom features.
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Rocket className="text-yellow-400 shrink-0" size={32} />
            Real Results from Aurangabad Businesses
          </h3>

          <div className="space-y-6">
            <CaseStudyCard 
              icon={<Code2 className="text-neon-cyan" size={24} />}
              title="Manufacturing Company - MIDC Aurangabad"
              industry="Industrial Manufacturing | Corporate Website + Lead Gen"
              challenge="This 25-year-old manufacturing company had zero online presence. Competitors from Pune and Mumbai were capturing all online inquiries. They needed a professional website to showcase their capabilities and generate B2B leads."
              solution="We developed a professional 15-page website (₹30,000) with product catalog, technical specifications, ISO certifications showcase, inquiry forms, and WhatsApp integration. Implemented local SEO targeting 'manufacturer in Aurangabad' keywords."
              results="Within 6 months: Ranked #1 for 12 target keywords, 500+ monthly website visits, 40+ qualified B2B inquiries, ₹25 lakh+ in new business attributed to website leads. ROI: 333%."
              color="cyan"
            />
            <CaseStudyCard 
              icon={<Smartphone className="text-neon-purple" size={24} />}
              title="Photography Business - Chhatrapati Sambhajinagar"
              industry="Photography Services | Mobile App Development"
              challenge="A wedding photography business was manually sharing photos via hard drives and Google Drive links—time-consuming and unprofessional. They needed a modern solution for instant photo delivery to clients."
              solution="We built 'Aathvani' - a custom React Native app (₹1,20,000) with QR code scanning, instant photo galleries, watermark protection, and download features. Clients scan QR at events and instantly access their photos."
              results="100% client satisfaction increase, 15+ hours saved per event, premium brand positioning, 40% price increase for services, app now used at 200+ events. Featured in local media as 'Aurangabad's innovative photography solution.'"
              color="purple"
            />
            <CaseStudyCard 
              icon={<BarChart3 className="text-neon-pink" size={24} />}
              title="Retail Fashion Store - Connaught Road"
              industry="Fashion Retail | Instagram Marketing + E-commerce"
              challenge="Traditional clothing store struggling with foot traffic decline. Needed to reach younger audience and enable online shopping to compete with Myntra, Ajio, and local Instagram sellers."
              solution="Launched e-commerce website (₹50,000) + Instagram marketing package (₹15,000/month). Created Reels showcasing products, ran targeted ads for Aurangabad audience, enabled COD and online payments."
              results="12 months: Instagram followers grew from 800 to 12,000+, ₹8 lakh+ monthly online sales, 60% revenue now from digital channels, expanded to WhatsApp catalog reaching customers in nearby districts. Store now hybrid retail + e-commerce model."
              color="pink"
            />
          </div>
        </div>

        {/* Why Choose Zaikron */}
        <div className="mb-12 md:mb-16 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <ShieldCheck className="text-neon-cyan shrink-0" size={32} />
            Why Aurangabad Businesses Trust Zaikron
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <TrustPoint 
                title="Local Market Expertise"
                desc="Unlike remote agencies or freelancers from other cities, we understand Aurangabad's unique business landscape. We know that customers here value trust, quality, and competitive pricing. Our websites are designed with local cultural nuances, language preferences (Marathi support available), and payment preferences (COD, UPI) in mind."
              />
              <TrustPoint 
                title="Face-to-Face Communication"
                desc="Being based in Usmanpura, Aurangabad, we offer in-person meetings, site visits, and consultations. Discuss your project over chai at our office or we'll visit your business location. No communication gaps, no timezone issues—just direct, effective collaboration."
              />
              <TrustPoint 
                title="Affordable Pricing for Local Economy"
                desc="Our pricing reflects Aurangabad's economic reality. Starting at ₹10,000 for professional websites, we're significantly more affordable than Mumbai or Pune agencies (who charge ₹1,00,000+ for similar work) while maintaining international quality standards. We also offer EMI payment options for small businesses."
              />
            </div>

            <div className="space-y-6">
              <TrustPoint 
                title="Quick Turnaround Times"
                desc="Most websites launch within 2-4 weeks. Apps within 6-12 weeks. Marketing campaigns start within 48 hours. Our local presence means faster decision-making, quicker revisions, and no delays waiting for remote teams to respond."
              />
              <TrustPoint 
                title="Long-Term Support & Maintenance"
                desc="We don't disappear after launch. Every project includes 3-12 months support depending on package. Need urgent updates? Call us—we can be at your office within hours. Many of our clients have been with us for 3-5+ years with ongoing maintenance contracts."
              />
              <TrustPoint 
                title="Google #1 Rankings Track Record"
                desc="Our SEO-first development approach consistently ranks clients on page 1 of Google. Search for 'manufacturer in Aurangabad,' 'coaching classes Aurangabad,' 'hotels Chhatrapati Sambhajinagar'—many results are our clients. We don't just build websites, we build digital dominance."
              />
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Cpu className="text-green-400 shrink-0" size={32} />
            Cutting-Edge Technology Stack
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
            While we're based in Aurangabad, our technology stack rivals any Silicon Valley agency. We use modern frameworks and tools that ensure your website or app is fast, secure, scalable, and future-proof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TechStackCard 
              title="Frontend Development"
              techs={['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui']}
              color="cyan"
            />
            <TechStackCard 
              title="Backend Development"
              techs={['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS']}
              color="purple"
            />
            <TechStackCard 
              title="Mobile Development"
              techs={['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Expo']}
              color="pink"
            />
          </div>

          <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Our Development Process</h4>
          
          <div className="space-y-4">
            <ProcessStep 
              num="01" 
              title="Discovery & Strategy" 
              desc="In-depth consultation to understand your business goals, target audience, competitors, and unique value proposition. We analyze your industry landscape in Aurangabad and create a custom digital strategy."
              color="cyan"
            />
            <ProcessStep 
              num="02" 
              title="Design & Prototyping" 
              desc="Our designers create mockups and prototypes using Figma. You'll see exactly how your website/app will look before we write a single line of code. Unlimited revisions until you're 100% satisfied."
              color="purple"
            />
            <ProcessStep 
              num="03" 
              title="Development & Testing" 
              desc="Our developers build your project using cutting-edge technology. Rigorous testing on multiple devices, browsers, and screen sizes. We ensure 95+ scores on Google PageSpeed Insights and Core Web Vitals."
              color="pink"
            />
            <ProcessStep 
              num="04" 
              title="SEO Optimization" 
              desc="Before launch, we implement comprehensive SEO: keyword research, meta tags, structured data, sitemap, robots.txt, image optimization, internal linking, and local SEO for Aurangabad/Chhatrapati Sambhajinagar."
              color="yellow"
            />
            <ProcessStep 
              num="05" 
              title="Launch & Training" 
              desc="Smooth deployment to production servers. We provide training sessions for your team to manage content, products, or posts. Detailed documentation and video tutorials included."
              color="green"
            />
            <ProcessStep 
              num="06" 
              title="Support & Growth" 
              desc="Post-launch support for bug fixes, updates, and optimization. Monthly analytics reports showing traffic, conversions, and ROI. Ongoing SEO and marketing to continuously improve rankings and results."
              color="cyan"
            />
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Layers className="text-yellow-400 shrink-0" size={32} />
            Industries We Serve Across Aurangabad & Maharashtra
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
            Our diverse portfolio spans multiple industries. Whether you're in manufacturing, education, healthcare, retail, or services, we have the expertise to deliver industry-specific digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <IndustryCard 
              title="Manufacturing & Industrial"
              desc="Custom websites showcasing capabilities, product catalogs, technical specifications, inquiry forms, and B2B lead generation for manufacturers in MIDC and industrial areas."
              examples="Steel, Auto Parts, Textiles, Pharmaceuticals"
            />
            <IndustryCard 
              title="Education & Coaching"
              desc="School websites, online learning platforms, admission portals, student management systems, and digital marketing for coaching institutes and educational institutions."
              examples="CBSE/ICSE Schools, Coaching Classes, Colleges"
            />
            <IndustryCard 
              title="Healthcare & Medical"
              desc="Hospital websites, clinic management systems, online appointment booking, patient portals, telemedicine platforms, and healthcare marketing solutions."
              examples="Hospitals, Clinics, Diagnostic Centers"
            />
            <IndustryCard 
              title="Retail & E-Commerce"
              desc="Online stores, inventory management, payment gateway integration, multi-vendor marketplaces, and omnichannel retail solutions for local businesses."
              examples="Fashion, Electronics, Grocery, Gifts"
            />
            <IndustryCard 
              title="Real Estate & Construction"
              desc="Property listing websites, CRM systems for builders, virtual tours, lead management, and digital marketing for real estate developers and agents."
              examples="Builders, Property Dealers, Architects"
            />
            <IndustryCard 
              title="Hospitality & Tourism"
              desc="Hotel booking websites, restaurant ordering systems, tourism portals showcasing Aurangabad's heritage (Ajanta-Ellora caves), and travel agency platforms."
              examples="Hotels, Restaurants, Tour Operators"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 md:mb-16 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="text-neon-pink shrink-0" size={32} />
            Frequently Asked Questions - Web Development in Aurangabad
          </h3>

          <div className="space-y-6">
            <FAQItem 
              question="How long does it take to build a website in Aurangabad?"
              answer="Basic websites (5-10 pages) typically take 2-3 weeks from design approval to launch. Professional business websites (15+ pages) take 4-6 weeks. E-commerce platforms or custom web applications take 8-16 weeks depending on complexity. We provide detailed timelines during consultation."
            />
            <FAQItem 
              question="Do you provide website hosting and domain registration?"
              answer="Yes, all our packages include domain registration (.com, .in, .co.in) and hosting for the first year. We use reliable Indian hosting providers with servers in Mumbai/Pune for fastest load times for Aurangabad audiences. After the first year, hosting costs ₹3,000-8,000/year depending on traffic and storage needs."
            />
            <FAQItem 
              question="Will my website rank on Google?"
              answer="We implement comprehensive SEO best practices in every website: keyword research, optimized content, meta tags, structured data, fast loading speed, mobile-responsiveness, and local SEO. While we can't guarantee #1 rankings (no ethical agency can), our track record shows 80%+ of clients ranking on page 1 within 6 months for their target keywords in Aurangabad searches."
            />
            <FAQItem 
              question="Can I update website content myself after launch?"
              answer="Absolutely! We provide a user-friendly Content Management System (CMS) where you can easily update text, images, blog posts, and products without any coding knowledge. We also provide training sessions and video tutorials. For complex updates, our support team is always available."
            />
            <FAQItem 
              question="What's the difference between a ₹10,000 and ₹30,000 website?"
              answer="The ₹10,000 starter package is perfect for small businesses needing simple online presence—basic design, 5 pages, basic SEO. The ₹30,000 professional package includes custom design, 15+ pages, advanced SEO with keyword research, CMS for easy updates, blog section, WhatsApp integration, and better hosting. Think of it as the difference between a basic showroom and a full-featured business platform."
            />
            <FAQItem 
              question="Do you work with clients outside Aurangabad?"
              answer="Yes! While we're based in Aurangabad, we serve clients across Maharashtra (Pune, Mumbai, Nashik, Nagpur) and all over India. For Aurangabad/Chhatrapati Sambhajinagar clients, we offer in-person meetings. For others, we work seamlessly via video calls, screen sharing, and project management tools."
            />
            <FAQItem 
              question="What payment methods do you accept?"
              answer="We accept bank transfers (NEFT/RTGS/IMPS), UPI, cheques, and online payments. Standard payment terms: 50% advance to start, 50% before launch. For projects above ₹1,00,000, we offer milestone-based payments. We also provide flexible payment plans for small businesses—discuss during consultation."
            />
            <FAQItem 
              question="Can you redesign my existing website?"
              answer="Yes! Website redesign is one of our specialties. If your current website looks outdated, loads slowly, or doesn't rank on Google, we can rebuild it with modern design, better performance, and improved SEO. Redesign projects start at ₹35,000 depending on existing site complexity."
            />
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Globe className="text-neon-cyan shrink-0" size={32} />
            Our Service Areas - Hyperlocal Coverage Across Aurangabad
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
            As Aurangabad's premier <strong className="text-white">web development company</strong>, we serve businesses across all areas of the city and surrounding districts. Our local presence ensures we understand neighborhood-specific needs and can provide quick on-site support.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              'Usmanpura', 'Cidco', 'N-Town', 'Connaught Road', 'Town Hall', 'Jalna Road',
              'MIDC', 'Waluj', 'Shivaji Nagar', 'Garkheda', 'Begumpura', 'Satara Parisar',
              'Aurangpura', 'Cantonment', 'Padegaon', 'Beed Bypass', 'Jalgaon Road', 'Paithan Road'
            ].map((area) => (
              <div key={area} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm text-center">
                {area}
              </div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Beyond Aurangabad, we also serve clients in: <strong className="text-white">Jalna, Parbhani, Beed, Osmanabad, Latur, Nanded, Ahmednagar, Nashik, and across Maharashtra</strong>. For outstation clients, we conduct initial meetings via video call and provide the same quality service remotely.
          </p>
        </div>

        {/* Final CTA in Content Section */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 border border-white/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business Digitally?
          </h3>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-base md:text-lg">
            Join 50+ successful Aurangabad businesses who've partnered with Zaikron for their digital journey. Get a free consultation, project quote, and SEO audit—no obligations, no pressure. Let's discuss how we can help your business dominate online.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform inline-flex justify-center items-center gap-2"
            >
              Schedule Free Consultation <ArrowUpRight size={20} />
            </Link>
            <Link 
              href="tel:+919730416763"
              className="w-full md:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all flex justify-center"
            >
              📞 Call +91-9730416763
            </Link>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mt-6">
            <strong className="text-white">Office Address:</strong> Usmanpura, Aurangabad, Maharashtra 431005<br/>
            <strong className="text-white">Email:</strong> hello@zaikron.com | <strong className="text-white">Working Hours:</strong> Mon-Sat, 9 AM - 6 PM
          </p>
        </div>

      </div>
    </motion.div>
  );
}