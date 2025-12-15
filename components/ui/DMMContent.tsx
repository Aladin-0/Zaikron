'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, Users, Target, Search, BarChart3, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Smartphone, 
  Instagram, Facebook, Youtube, Linkedin, MessageCircle, 
  ChevronDown, CheckCircle2, Zap, Rocket, Mail, Globe, Monitor, 
  PieChart, DollarSign, Activity, Megaphone, Play 
} from 'lucide-react';

export default function DigitalMarketingContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax: Dark Space Movement
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotateOrb = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="relative bg-[#020204] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- BACKGROUND FX: MIDNIGHT PRISM --- */}
      <div className="absolute inset-0 pointer-events-none fixed">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020204] via-[#090919] to-[#020204]"></div>
        
        {/* Moving Neon Gradients */}
        <motion.div style={{ rotate: rotateOrb }} className="absolute -top-[10%] -left-[10%] w-[1000px] h-[1000px] bg-indigo-900/30 rounded-full blur-[180px] mix-blend-screen opacity-50" />
        <motion.div style={{ y: yBackground }} className="absolute top-[40%] -right-[10%] w-[1000px] h-[1000px] bg-purple-900/20 rounded-full blur-[180px] mix-blend-screen opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] animate-pulse"></div>
        
        {/* Subtle Noise Texture for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[95rem] relative z-10">

        {/* ================= 1. HERO SECTION (High Contrast Dark) ================= */}
        <section className="mb-40 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-indigo-500/40 bg-indigo-900/20 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-bold text-indigo-300 uppercase tracking-widest">#1 SEO, Google Ads, Instagram</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Digital Marketing In <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Aurangabad</span>
            </h1>

            {/* Stat Block */}
            <div className="flex gap-6 mb-10 text-gray-300 text-lg font-light">
              <span className="flex items-center gap-2"><TrendingUp size={20} className="text-green-400"/> 300% Growth</span>
              <span className="flex items-center gap-2"><Users size={20} className="text-blue-400"/> 50+ Clients</span>
              <span className="flex items-center gap-2"><Star size={20} className="text-yellow-400"/> #1 Rankings</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-3">
                Free Audit <Rocket size={24} />
              </Link>
              <a href="https://wa.me/919730416763" className="px-10 py-5 border border-white/20 bg-white/5 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                Pricing <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>

          {/* Hero Visual - Dark Prism Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Card 1: SEO Traffic */}
            <div className="absolute top-10 right-20 z-30 bg-[#0a0a12]/90 border border-indigo-500/30 backdrop-blur-xl p-6 rounded-3xl w-72 shadow-2xl animate-float">
              <div className="flex justify-between mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400"><Search size={24}/></div>
                <span className="text-green-400 font-bold">+125%</span>
              </div>
              <h3 className="text-white font-bold text-lg">SEO Traffic</h3>
              <div className="mt-3 h-12 flex items-end gap-1">
                {[40, 60, 45, 70, 65, 85, 95].map((h, i) => (
                  <div key={i} style={{height: `${h}%`}} className="w-1/6 bg-indigo-500/50 rounded-t-sm hover:bg-indigo-400 transition-colors"></div>
                ))}
              </div>
            </div>

            {/* Card 2: Revenue */}
            <div className="absolute bottom-20 left-10 z-20 bg-[#0a0a12]/90 border border-purple-500/30 backdrop-blur-xl p-6 rounded-3xl w-80 shadow-2xl animate-float-delayed">
              <div className="flex justify-between mb-2">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><DollarSign size={24}/></div>
                <span className="text-gray-400 text-sm">Monthly Revenue</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">₹15.2L</h3>
              <p className="text-purple-300 text-sm">Target exceeded by 200%</p>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
          </motion.div>
        </section>

        {/* ================= 2. WHY CHOOSE US? (H2 SEO Content - Dark Glass) ================= */}
        <section className="mb-32">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Why Choose Aurangabad's Best <span className="text-indigo-400">Digital Marketing Company</span>?
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6 relative z-10">
              <p>
                In the bustling digital landscape of 2025, visibility is currency. As the premier <strong>digital marketing agency in Aurangabad</strong>, Zaikron doesn't just deliver "likes" or "traffic"; we deliver <strong>revenue</strong>. Whether you are a retailer in <strong>Cannaught Place</strong> looking for footfall, or a manufacturer in <strong>MIDC Waluj</strong> seeking B2B leads, your customers are searching for you online right now.
              </p>
              <p>
                <strong>The Problem with Generic Agencies:</strong> Most local "agencies" simply post stock photos on Facebook and call it marketing. That doesn't build a brand. To dominate the <strong>Chhatrapati Sambhajinagar</strong> market, you need a full-stack strategy: <strong>Technical SEO</strong> to rank #1 on Google, <strong>High-Conversion Google Ads</strong> to capture immediate intent, and <strong>Viral Instagram Reels</strong> to build a loyal community.
              </p>
              <p>
                <strong>The Zaikron Advantage:</strong> We use data-driven creativity. Our team of certified experts in <strong>Facebook Ads</strong> and <strong>Google Analytics</strong> optimize your campaigns daily. We understand the local Marathi/Hindi/English audience nuances of Aurangabad better than any outsider. This hyper-local focus is why our clients see a <strong>300% Growth in Leads</strong> within the first 90 days.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. SERVICES (Prism Grid) ================= */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our 7 Digital Marketing Services</h2>
            <p className="text-indigo-200 text-lg">Strategies that rank #1 in Aurangabad Searches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Service 1: SEO (Large) */}
            <div className="col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-[2.5rem] p-10 relative group overflow-hidden hover:border-indigo-400 transition-all">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Search className="w-16 h-16 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-white mb-4">SEO Services Aurangabad</h3>
              <p className="text-gray-300 text-lg mb-6">Rank #1 on Google for "Best in Aurangabad". Local SEO, GMB Optimization, and Technical Audits.</p>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold border border-indigo-500/30">Starting ₹5K/mo</span>
            </div>

            {/* Service 2: Google Ads */}
            <div className="bg-[#0f0f16] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/5 transition-colors group">
              <Target className="w-10 h-10 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform"/>
              <h3 className="text-xl font-bold text-white mb-2">Google Ads Management</h3>
              <p className="text-sm text-gray-400">Instant leads via PPC. Pay only for clicks.</p>
            </div>

            {/* Service 3: Social Media */}
            <div className="bg-[#0f0f16] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/5 transition-colors group">
              <Instagram className="w-10 h-10 text-pink-500 mb-4 group-hover:rotate-12 transition-transform"/>
              <h3 className="text-xl font-bold text-white mb-2">Instagram Marketing</h3>
              <p className="text-sm text-gray-400">Viral Reels, Influencers & Growth.</p>
            </div>

            {/* Service 4: Facebook Ads */}
            <div className="bg-[#0f0f16] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/5 transition-colors group">
              <Facebook className="w-10 h-10 text-blue-500 mb-4 group-hover:rotate-12 transition-transform"/>
              <h3 className="text-xl font-bold text-white mb-2">Facebook Ads</h3>
              <p className="text-sm text-gray-400">Targeted lead gen campaigns.</p>
            </div>

            {/* Service 5: WhatsApp */}
            <div className="bg-[#0f0f16] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/5 transition-colors group">
              <MessageCircle className="w-10 h-10 text-green-400 mb-4 group-hover:rotate-12 transition-transform"/>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp Marketing</h3>
              <p className="text-sm text-gray-400">Direct sales automation API.</p>
            </div>
          </div>
        </section>

        {/* ================= 4. PRICING (Dark Tech Cards) ================= */}
        <section id="pricing" className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Digital Marketing Pricing Aurangabad</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <PricingCard 
              name="SEO Starter"
              price="₹5,000"
              features={["Google My Business #1", "20 Local Keywords", "Monthly Reports", "Basic Support"]}
              color="indigo"
            />
            <PricingCard 
              name="Ads Pro"
              price="₹8,000"
              features={["Google Ads Setup", "Conversion Tracking", "₹2L Revenue Guarantee", "Daily Optimization"]}
              color="purple"
              popular={true}
            />
            <PricingCard 
              name="Social Growth"
              price="₹10,000"
              features={["5K Real Followers", "Viral Reels Strategy", "DM Automation", "Content Creation"]}
              color="pink"
            />
          </div>
        </section>

        {/* ================= 5. ROADMAP (Horizontal Flow) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">30-Day Results Roadmap</h2>
          <div className="bg-[#0a0a12] border border-indigo-500/20 rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 justify-between relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 hidden md:block"></div>
            
            <RoadmapStep week="Week 1" title="Audit & Strategy" desc="GMB Optimization & Competitor Analysis" />
            <RoadmapStep week="Week 2" title="Content & Setup" desc="Pixel Install & Ad Creatives" />
            <RoadmapStep week="Week 3" title="Ads Live" desc="Campaign Launch & SEO Foundations" />
            <RoadmapStep week="Month 1" title="Scale" desc="Retargeting & Lead Optimization" />
          </div>
        </section>

        {/* ================= 6. CASE STUDIES (300% Growth - Dark Mode) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">300% Growth Case Studies</h2>
          <div className="space-y-16">
            <CaseStudy 
              title="RESTAURANT: +400% Orders via WhatsApp"
              challenge="A local cafe in Cidco faced low weekday footfall."
              solution="We implemented 'Instagram Food Reels' targeting foodies within 3km. Coupled with a 'WhatsApp Order Bot' offering 20% off on first orders."
              result="400% increase in delivery orders. 150+ Google Reviews in 2 months."
              stats={["400% Orders", "150+ Reviews"]}
              color="orange"
            />
            <CaseStudy 
              title="MANUFACTURING: +250% B2B Leads via SEO"
              challenge="A factory in MIDC Waluj needed bulk orders from Pune/Mumbai."
              solution="We optimized their website for keywords like 'Industrial Supplier Maharashtra'. Created LinkedIn funnels targeting procurement managers."
              result="250% increase in qualified B2B inquiries. Ranked #1 for 15 industrial keywords."
              stats={["250% Leads", "#1 Ranking"]}
              color="cyan"
            />
            <CaseStudy 
              title="EDUCATION: +350% Enquiries via FB Ads"
              challenge="A coaching class in Beed Bypass struggled with admissions."
              solution="Launched Facebook Lead Ads with video testimonials of past toppers. Automated SMS follow-ups for instant counseling booking."
              result="350% more student enquiries. Batch filled 2 months early."
              stats={["350% Inquiries", "Zero Vacancy"]}
              color="purple"
            />
          </div>
        </section>

        {/* ================= 7. LOCAL SEO & FAQ ================= */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Rank #1 in Aurangabad</h3>
            <p className="text-indigo-200 mb-8">
              We dominate the local search results for all major neighborhoods. When customers search, they find YOU.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Usmanpura", "Nirala Bazaar", "Cannaught", "MIDC Waluj", "Cidco", "Beed Bypass", "Jalna Road", "Kranti Chowk", "Garkheda", "Shendra"].map((area, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-indigo-500 hover:text-white transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">FAQ</h3>
            <div className="space-y-4">
              <FAQItem q="How much does digital marketing cost in Aurangabad?" a="Our packages start at ₹5,000/month for local SEO. Full-stack Google Ads + Social Media from ₹15,000/month." />
              <FAQItem q="How long does it take to see SEO results?" a="SEO is a long-term strategy. You can expect initial movement in 3 months, with significant traffic growth in 6-12 months." />
              <FAQItem q="Do you handle Facebook and Instagram ads?" a="Yes, we are experts in Meta Ads. We create creatives, set targeting, and optimize budgets for highest ROI." />
            </div>
          </div>
        </section>

        {/* ================= 8. FINAL CTA ================= */}
        <section className="text-center p-12 rounded-[3rem] bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Ready to Scale 10x?
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto relative z-10">
            Don't let competitors take your market share. Get your free audit today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-5 bg-indigo-600 text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-lg shadow-indigo-900/50">
              Get Free Audit
            </Link>
            <a href="https://wa.me/919730416763" className="px-12 py-5 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={24} /> WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function PricingCard({ name, price, features, color, popular }: any) {
  const styles: any = {
    purple: "border-purple-500 bg-purple-900/10 shadow-purple-900/20",
    pink: "border-pink-500 bg-pink-900/10 shadow-pink-900/20",
    indigo: "border-indigo-500 bg-indigo-900/10 shadow-indigo-900/20",
    gray: "border-white/10 bg-white/5",
  }
  
  return (
    <div className={`p-8 rounded-[2.5rem] border ${popular ? styles[color] + ' shadow-2xl scale-105 z-10' : styles.gray} flex flex-col relative transition-all duration-300 hover:-translate-y-2`}>
      {popular && <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[2.2rem]">BEST VALUE</div>}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-3xl font-bold text-white mb-8">{price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 text-sm text-gray-300">
            <CheckCircle2 size={18} className={`text-${color}-400`} /> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        Choose Plan
      </Link>
    </div>
  )
}

function RoadmapStep({ week, title, desc }: any) {
  return (
    <div className="relative z-10 bg-[#0f0f16] border border-white/10 p-6 rounded-2xl w-full md:w-1/4 hover:border-indigo-500/50 transition-colors">
      <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">{week}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}

function CaseStudy({ title, challenge, solution, result, stats, color }: any) {
  const colors: any = {
    orange: "text-orange-400 border-orange-500/30",
    cyan: "text-cyan-400 border-cyan-500/30",
    purple: "text-purple-400 border-purple-500/30",
  }
  return (
    <div className={`p-8 rounded-[2.5rem] bg-white/5 border ${colors[color].split(' ')[1]} hover:bg-white/10 transition-colors`}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-4 ${colors[color].split(' ')[0]}`}>{title}</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p><strong className="text-white">Challenge:</strong> {challenge}</p>
            <p><strong className="text-white">Solution:</strong> {solution}</p>
            <p><strong className="text-white">Result:</strong> {result}</p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-4 justify-center min-w-[150px]">
          {stats.map((s: string, i: number) => (
            <div key={i} className="text-center p-4 bg-black/30 rounded-xl">
              <span className={`block font-bold text-lg ${colors[color].split(' ')[0]}`}>{s.split(' ')[0]}</span>
              <span className="text-xs text-gray-500 uppercase">{s.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQItem({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left text-white font-bold hover:text-indigo-400 transition-colors"
      >
        {q}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}