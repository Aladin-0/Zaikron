'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Globe, Smartphone, Share2, Bot, ShieldCheck, MapPin, 
  CheckCircle2, ArrowRight, Zap, TrendingUp, Layers, 
  Rocket, LayoutGrid, Users, Code2, History, Target 
} from 'lucide-react';

// --- ADVANCED ANIMATIONS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const charVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

// --- ANIMATED HEADER COMPONENT ---
const AnimatedHeading = ({ text, className }: { text: string, className?: string }) => {
  const letters = text.split("");
  return (
    <motion.h1 
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={charVariant} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function AboutContent() {
  const containerRef = useRef(null);

  return (
    // Base Background: Very Dark Red-Black (The "40% Black")
    <div ref={containerRef} className="relative bg-[#050002] overflow-hidden">
      
      {/* --- VIBRANT ATMOSPHERE (The "60% Red/Pink Mix") --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right: Deep Crimson */}
        <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-red-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse"></div>
        
        {/* Bottom Left: Hot Pink / Magenta */}
        <div className="absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] bg-pink-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Center: Rose Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        
        {/* Noise Overlay (Texture) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10 pt-40 pb-20">

        {/* --- 1. HERO: THE MIDNIGHT CRIMSON IDENTITY --- */}
        <div className="text-center mb-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/30 bg-pink-950/30 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(236,72,153,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="text-xs font-mono text-pink-300 tracking-[0.3em] uppercase">
              Leading Innovation • Aurangabad
            </span>
          </motion.div>

          {/* Animated Header */}
          <div className="flex flex-col items-center">
            <AnimatedHeading 
              text="ZAIKRON." 
              className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-4 drop-shadow-[0_0_25px_rgba(225,29,72,0.5)]" 
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-rose-400"
            >
              The Best Website Developer In Aurangabad.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-xl text-rose-100/70 max-w-3xl mx-auto leading-relaxed"
          >
            Zaikron is the <strong className="text-white">best web development company in Chhatrapati Sambhajinagar, Aurangabad</strong>, delivering SEO-optimized <span className="text-pink-400">website development Aurangabad</span> solutions. We don't just build sites; we architect digital dominance.
          </motion.p>

          {/* --- NEW: INTERNAL LINK SILO (SEO BOOST) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Link href="/services/web-development" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-pink-500 text-white font-bold transition-all hover:bg-pink-500/20 flex items-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
              <Globe size={18} className="text-pink-400" /> Web Development Services
            </Link>
            <Link href="/work" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-red-500 text-white font-bold transition-all hover:bg-red-500/20 flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
              <Layers size={18} className="text-red-400" /> View Our Portfolio
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
              <Rocket size={18} /> Contact Team
            </Link>
          </motion.div>
        </div>

        {/* --- 2. WHO WE ARE (The Red Acrylic Card) --- */}
        <div className="grid lg:grid-cols-2 gap-16 mb-40 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Colorful Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 rounded-[2.5rem] blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            
            <div className="relative p-10 rounded-[2.3rem] bg-[#0f0507] border border-white/10 h-full">
              <h3 className="text-4xl font-display font-bold text-white mb-8">Who We Are</h3>
              <div className="space-y-6 text-rose-100/80 text-lg leading-relaxed">
                <p>
                  Zaikron started in 2024 with one goal: help businesses in <strong className="text-white">Aurangabad / Chhatrapati Sambhajinagar</strong> get the same high-quality digital experiences that big-city brands enjoy.
                </p>
                <p>
                  We position ourselves as your long-term <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 font-bold">technology and growth partner</span>. From small local shops to growing startups, we build custom websites and mobile apps that actually bring leads and sales.
                </p>
                <p>
                  Our team includes <strong className="text-white">web developers, website designers, app developers, and SEO specialists</strong> who work together under one roof. This lets us handle everything from <Link href="/services" className="text-red-400 hover:text-white underline decoration-red-500/30 underline-offset-4">website development Aurangabad</Link> to <Link href="/services" className="text-pink-400 hover:text-white underline decoration-pink-500/30 underline-offset-4">Instagram marketing near me</Link> without losing quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard label="Year Founded" value="2024" icon={<Rocket className="text-red-500" />} />
            <StatCard label="Location" value="Aurangabad" icon={<MapPin className="text-pink-500" />} />
            <StatCard label="Projects" value="150+" icon={<Layers className="text-rose-500" />} />
            <StatCard label="SEO Rank" value="#1" icon={<TrendingUp className="text-red-400" />} />
          </motion.div>
        </div>

        {/* --- 3. WHAT WE DO (Crimson Grid) --- */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-display font-bold text-white mb-4">Our Expertise</h3>
            <p className="text-rose-300/60 uppercase tracking-widest text-sm">Website Developer Chhatrapati Sambhajinagar + Digital Marketing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ServiceBlock 
              title="Web Development"
              subtitle="Website Designer Aurangabad"
              icon={<Globe className="w-10 h-10 text-red-400" />}
              gradient="from-red-600/20 to-pink-600/5"
              borderColor="group-hover:border-red-500/50"
              content={
                <>
                  Zaikron is known as a <strong className="text-white">leading website development company in Aurangabad</strong>. We build business websites optimized for <span className="text-pink-300">“web developer Aurangabad”</span> and <span className="text-pink-300">“website development services Maharashtra”</span> rankings.
                </>
              }
            />

            <ServiceBlock 
              title="App Development"
              subtitle="App Developer Maharashtra"
              icon={<Smartphone className="w-10 h-10 text-pink-400" />}
              gradient="from-pink-600/20 to-rose-600/5"
              borderColor="group-hover:border-pink-500/50"
              content={
                <>
                  Our <strong className="text-white">app development services in Aurangabad</strong> cover Android, iOS, and cross-platform solutions. Whether you search <span className="text-rose-300">“app developer Aurangabad”</span> or <span className="text-rose-300">“app development company Aurangabad”</span>, Zaikron delivers.
                </>
              }
            />

            <ServiceBlock 
              title="Social Media Marketing"
              subtitle="Digital Marketing Agency"
              icon={<Share2 className="w-10 h-10 text-rose-400" />}
              gradient="from-rose-600/20 to-red-600/5"
              borderColor="group-hover:border-rose-500/50"
              content={
                <>
                  Zaikron acts as a <strong className="text-white">social media marketing agency in Aurangabad</strong>. We run <span className="text-red-300">Instagram marketing</span>, <span className="text-red-300">Facebook marketing</span>, and <span className="text-red-300">Google Ads</span> targeting “near me” intent.
                </>
              }
            />

            <ServiceBlock 
              title="AI & Automation"
              subtitle="Bot Creation Company"
              icon={<Bot className="w-10 h-10 text-red-500" />}
              gradient="from-red-500/20 to-pink-500/5"
              borderColor="group-hover:border-red-500/50"
              content={
                <>
                  To support the new wave of <strong className="text-white">AI development</strong>, Zaikron builds chatbots and workflow automations. These solutions help you convert more visitors, especially from organic and “near me” searches.
                </>
              }
            />

          </div>
        </div>

        {/* --- 4. WHY TRUST US (Horizontal Glass) --- */}
        <div className="mb-40 py-20 border-y border-white/10 bg-white/[0.02] relative overflow-hidden">
          {/* Moving sheen effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <TrustItem 
              title="Mobile-First Design" 
              desc="So your website passes Google’s mobile-friendly checks." 
              icon={<Smartphone className="text-pink-400 w-8 h-8 mx-auto mb-4" />}
            />
            <TrustItem 
              title="Core Web Vitals" 
              desc="Fast loading optimization to improve rankings and user experience." 
              icon={<Zap className="text-red-400 w-8 h-8 mx-auto mb-4" />}
            />
            <TrustItem 
              title="Structured Data" 
              desc="JSON-LD implementation so Google understands your location." 
              icon={<LayoutGrid className="text-rose-400 w-8 h-8 mx-auto mb-4" />}
            />
          </div>
        </div>

        {/* --- 5. SEO TECHNICALS (The Blueprint) --- */}
        <div className="mb-40">
          <div className="p-10 rounded-[3rem] bg-[#0f0507] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
            
            <h3 className="text-4xl font-bold text-white mb-12">How We Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">SEO & Growth</span></h3>
            
            <div className="grid md:grid-cols-2 gap-16 text-rose-100/70">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-pink-500 w-6 h-6" /> Technical SEO
                </h4>
                <p className="mb-6 text-lg">
                  We integrate multiple SEO boosters into every project to help you rank for <span className="text-white">“web development company Aurangabad”</span>.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500"/> Internal Linking & Silo Structure</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500"/> Metadata & Open Graph Optimization</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-pink-500"/> JSON-LD Schema for Rich Results</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="text-red-500 w-6 h-6" /> Local Visibility
                </h4>
                <p className="mb-6 text-lg">
                  We focus on <span className="text-white">“Near Me”</span> visibility with consistent NAP (Name, Address, Phone) across the web.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-red-500"/> Phrases like “in Chhatrapati Sambhajinagar”</li>
                  <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-red-500"/> Local reviews and backlinks focus</li>
                  <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-red-500"/> Google Business Profile Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW: TEAM BIO & DEEP CONTENT (1500+ Words SEO Boost) --- */}
        <section className="mb-40 px-4 md:px-12">
          <div className="max-w-[85rem] mx-auto space-y-24">
            
            {/* Team Introduction */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-red-400 w-8 h-8" />
                  <h3 className="text-3xl font-display font-bold text-white">Meet the Experts Behind Zaikron</h3>
                </div>
                <div className="prose prose-invert prose-lg text-rose-100/80">
                  <p>
                    At Zaikron, we believe that exceptional digital experiences are built by exceptional people. Our team is a collective of Aurangabad's finest <strong>web developers, app architects, and digital strategists</strong>, united by a passion for code and creativity. Founded in 2024, Zaikron was established to bridge the gap between local businesses in Chhatrapati Sambhajinagar and world-class digital technology.
                  </p>
                  <p>
                    Our <strong>full-stack developers</strong> are masters of modern frameworks. We don't rely on outdated templates; we hand-code robust applications using the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>, Python Django for secure backends, and Next.js for lightning-fast, SEO-friendly frontends. This technical depth allows us to serve diverse industries—from manufacturing units in MIDC Waluj to educational institutes on Beed Bypass.
                  </p>
                  <p>
                    But we are more than just coders. Our team includes <strong>Google-certified SEO specialists</strong> who understand the nuances of the Aurangabad market. We know what your customers are searching for, whether it's "best restaurant in Nirala Bazaar" or "industrial suppliers in Shendra." We weave this local intent into every line of code, ensuring your business doesn't just exist online but dominates the local search results.
                  </p>
                </div>
              </motion.div>
              <div className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[3rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>
                <h4 className="text-2xl font-bold text-white mb-6">Our Core Competencies</h4>
                <ul className="space-y-4">
                  {[
                    "Full-Stack Web Development (MERN, Django, Next.js)",
                    "Native & Cross-Platform App Development (Flutter, React Native)",
                    "Advanced SEO & Local Search Domination",
                    "AI Bot Integration & Business Automation",
                    "Cloud Infrastructure & DevOps (AWS, Docker)",
                    "UI/UX Design focused on Conversion Rates"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-rose-200 p-3 rounded-xl bg-black/40 border border-white/5">
                      <Code2 className="text-pink-500 w-5 h-5 shrink-0" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* History & Mission */}
            <div className="grid lg:grid-cols-2 gap-16 items-start lg:flex-row-reverse">
              <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <History className="text-rose-400 w-8 h-8" />
                  <h3 className="text-3xl font-display font-bold text-white">Our Journey in Aurangabad</h3>
                </div>
                <div className="prose prose-invert prose-lg text-rose-100/80">
                  <p>
                    The story of Zaikron begins with a realization: businesses in <strong>Aurangabad and the Marathwada region</strong> were being underserved by generic, out-of-the-box website solutions. Local entrepreneurs needed digital partners who understood the specific economic landscape of Chhatrapati Sambhajinagar—from the tourism potential of Ajanta-Ellora to the industrial might of the auto-ancillary sector.
                  </p>
                  <p>
                    In 2024, we launched Zaikron with a mission to <strong>democratize high-end web technology</strong>. We wanted to prove that a local agency could deliver Silicon Valley-grade code quality at prices accessible to Maharashtra's SMEs. Our first few projects, including a complex e-commerce platform for a local textile brand and a booking system for a city hospital, set the benchmark for speed and reliability.
                  </p>
                  <p>
                    Today, Zaikron stands as a pillar of the local tech community. We have expanded our services to include <strong>AI-driven automation</strong>, helping traditional businesses digitize their workflows. Our growth is a testament to the trust placed in us by over 100 clients who have seen their digital footprint transform from a simple webpage into a revenue-generating asset.
                  </p>
                </div>
              </motion.div>
              <div className="lg:order-1 bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[3rem] border border-white/10 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]"></div>
                <h4 className="text-2xl font-bold text-white mb-6">Our Vision for 2025</h4>
                <div className="space-y-6 text-rose-200">
                  <p>
                    We envision Chhatrapati Sambhajinagar as a major digital hub in Maharashtra. Zaikron is committed to leading this transformation by:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><Target className="text-red-400 mt-1 shrink-0"/> Empowering 500+ local businesses with AI tools.</li>
                    <li className="flex gap-3"><Target className="text-pink-400 mt-1 shrink-0"/> Creating an ecosystem of high-performance PWAs.</li>
                    <li className="flex gap-3"><Target className="text-rose-400 mt-1 shrink-0"/> Setting new standards for Core Web Vitals in the region.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Methodology & Tech Stack Deep Dive */}
            <div className="bg-[#0f0507] p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">Our Development Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Rocket className="text-red-500"/> Speed is Survival
                  </h4>
                  <p className="text-rose-200/70 text-sm leading-relaxed">
                    In the mobile-first era, speed is a ranking factor. We obsess over milliseconds. By utilizing <strong>Next.js Static Site Generation (SSG)</strong> and advanced caching strategies, we ensure your website loads instantly, even on 4G networks common in Maharashtra. This reduces bounce rates and signals quality to Google algorithms.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="text-pink-500"/> Security First
                  </h4>
                  <p className="text-rose-200/70 text-sm leading-relaxed">
                    We build with a "Security by Design" approach. From SSL encryption to secure API endpoints and database protection, we ensure your customer data is safe. For our e-commerce clients in Aurangabad, this means PCI-DSS compliant payment gateways and robust protection against cyber threats.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <LayoutGrid className="text-rose-500"/> Scalable Architecture
                  </h4>
                  <p className="text-rose-200/70 text-sm leading-relaxed">
                    We don't build for today; we build for your future growth. Our modular code architecture allows your platform to scale seamlessly. Whether you start with 100 visitors or grow to 100,000, your Zaikron-built website will remain stable, responsive, and efficient without needing a complete rewrite.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 6. FAQ (Accordion Style) --- */}
        <div className="mb-40 max-w-4xl mx-auto">
          <h3 className="text-4xl font-display font-bold text-white text-center mb-16">Common Questions</h3>
          <div className="space-y-6">
            <FAQ 
              q="Who is Zaikron and what does the company do?" 
              a="Zaikron is a web development and digital marketing company in Chhatrapati Sambhajinagar ( Aurangabad ) offering website development, app development, social media marketing, Google marketing, and AI/bot automation for businesses in Maharashtra and across India." 
            />
            <FAQ 
              q="Why choose Zaikron as your website developer in Aurangabad?" 
              a="Zaikron combines modern web technologies, SEO best practices, and local market insight to build websites that load fast, rank high, and turn visitors into paying customers." 
            />
            <FAQ 
              q="Does Zaikron provide social media and Instagram marketing services?" 
              a="Yes, Zaikron acts as a social media marketing agency in Aurangabad, managing Instagram marketing, Facebook ads, and Google Ads campaigns tailored for local and “near me” search intent." 
            />
            <FAQ 
              q="Since when has Zaikron been operating?" 
              a="Zaikron has been serving businesses since 2024, growing from a small web development team into a full-service digital solutions and automation agency for Aurangabad and beyond." 
            />
          </div>
        </div>

        {/* --- 7. FINAL CTA --- */}
        <div className="text-center relative py-24 border-t border-white/10 bg-gradient-to-b from-transparent to-red-900/10 rounded-[3rem]">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            How to Work With Zaikron
          </h2>
          <p className="text-xl text-rose-200/60 mb-12 max-w-3xl mx-auto">
            If you are searching for a <strong className="text-white">web developer in Aurangabad</strong>, a <strong className="text-white">website development company in Chhatrapati Sambhajinagar</strong>, or an <strong className="text-white">AI automation partner</strong>, Zaikron is ready to help.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(236,72,153,0.4)]">
            Get In Touch <ArrowRight size={24} />
          </Link>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ label, value, icon }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-[2rem] bg-[#0f0507] border border-white/10 text-center hover:border-pink-500/30 transition-colors"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <span className="block text-4xl font-display font-bold text-white mb-2">{value}</span>
      <span className="text-xs font-mono text-rose-300/50 uppercase tracking-widest">{label}</span>
    </motion.div>
  )
}

function ServiceBlock({ title, subtitle, icon, content, gradient, borderColor }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative p-10 rounded-[2.5rem] bg-[#0f0507] border border-white/10 transition-all duration-500 ${borderColor}`}
    >
      {/* Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]`}></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
        </div>
        
        <h4 className="text-3xl font-display font-bold text-white mb-2">{title}</h4>
        <span className="text-xs font-mono text-rose-300/60 uppercase tracking-widest mb-6 block">{subtitle}</span>
        
        <p className="text-rose-100/70 leading-relaxed text-lg group-hover:text-white transition-colors">
          {content}
        </p>
      </div>
    </motion.div>
  )
}

function TrustItem({ title, desc, icon }: any) {
  return (
    <div className="px-4">
      {icon}
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-rose-100/60 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string, a: string }) {
  return (
    <div className="p-8 rounded-3xl bg-[#0f0507] border border-white/10 hover:border-pink-500/30 transition-colors">
      <h4 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
        <span className="text-red-500 font-mono">Q.</span> {q}
      </h4>
      <p className="text-rose-100/70 text-lg leading-relaxed pl-8 border-l border-white/10">{a}</p>
    </div>
  )
}