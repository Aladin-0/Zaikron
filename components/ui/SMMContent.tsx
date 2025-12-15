'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Megaphone, TrendingUp, Users, Target, Search, BarChart3, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Smartphone, 
  Instagram, Facebook, Youtube, Linkedin, MessageCircle, 
  ChevronDown, CheckCircle2, Zap, Rocket 
} from 'lucide-react';

export default function SMMContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax for Background (Different speed/direction)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div ref={containerRef} className="relative bg-[#050505] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- BACKGROUND FX: CRIMSON PULSE --- */}
      <div className="absolute inset-0 pointer-events-none fixed">
        {/* Deep Charcoal Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0505] to-[#050505]"></div>
        
        {/* Animated Orbs - Crimson & Gold */}
        <motion.div style={{ y: yOrb }} className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[180px] mix-blend-screen opacity-40 animate-pulse" />
        <motion.div style={{ y: yBackground }} className="absolute bottom-[10%] left-[-10%] w-[1200px] h-[1200px] bg-amber-600/10 rounded-full blur-[180px] mix-blend-screen opacity-30" />
        
        {/* Grid Overlay - Hexagon Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">

        {/* ================= 1. HERO SECTION (High Impact) ================= */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-900/20 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">#1 Marketing Agency</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1] mb-6">
                Digital Marketing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">Aurangabad</span>
              </h1>

              <h2 className="text-2xl text-gray-300 mb-8 font-light max-w-xl">
                Social Media + SEO <span className="text-red-500 font-bold">₹10K+/Month</span>. Rank #1 on Google & 10x Your Instagram Sales.
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact" className="px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-full hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-3">
                  Get Free Audit <Rocket size={22} />
                </Link>
                <a href="https://wa.me/919730416763" className="px-10 py-5 bg-[#25D366] text-black font-bold text-xl rounded-full hover:bg-white transition-all flex items-center justify-center gap-3">
                  WhatsApp Now <MessageCircle size={22} />
                </a>
              </div>

              {/* NAP & Social Proof */}
              <div className="flex flex-col md:flex-row gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Local Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">300%</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Average ROI</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">#1 Rankings</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-red-600/20 to-amber-500/20 rounded-full blur-[100px] animate-pulse"></div>
              
              <div className="relative z-10 grid gap-6">
                <div className="bg-[#0f0a0a] p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 transform translate-x-12">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-500"><TrendingUp size={32}/></div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase">Client Revenue</p>
                    <p className="text-2xl font-bold text-white">₹5,00,000 <span className="text-green-500 text-sm">▲ 45%</span></p>
                  </div>
                </div>
                
                <div className="bg-[#0f0a0a] p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 transform -translate-x-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><Users size={32}/></div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase">Leads Generated</p>
                    <p className="text-2xl font-bold text-white">1,250+ <span className="text-green-500 text-sm">▲ 120%</span></p>
                  </div>
                </div>

                <div className="bg-[#0f0a0a] p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 transform translate-x-8">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Search size={32}/></div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase">SEO Ranking</p>
                    <p className="text-2xl font-bold text-white">#1 Google <span className="text-green-500 text-sm">Aurangabad</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 2. WHAT IS DIGITAL MARKETING? (400 Words) ================= */}
        <section className="mb-32 px-4">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Your Business Needs Digital Marketing?</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                Digital marketing is the lifeline of modern business growth. It encompasses every online strategy used to promote your brand, connect with customers, and drive sales. For businesses in <strong>Aurangabad (Chhatrapati Sambhajinagar)</strong>, this means moving beyond traditional newspaper ads and billboards to where your customers actually are: their smartphones.
              </p>
              <p>
                <strong>The Local Problem:</strong> Many businesses in Usmanpura, Nirala Bazaar, and MIDC Waluj are losing customers daily simply because they are invisible online. When a potential client searches for <em>"best service near me"</em> or scrolls through Instagram, if your competitor appears and you don't, you've lost revenue.
              </p>
              <p>
                <strong>The Zaikron Solution:</strong> We implement a "Full-Funnel" strategy. This means we don't just post pretty pictures; we build systems that generate leads and sales. From ranking your website #1 on Google with <strong>Local SEO</strong>, to targeting your exact customer demographic with <strong>Facebook & Instagram Ads</strong>, to converting casual browsers into loyal customers via <strong>WhatsApp Marketing</strong>. Our data shows that 90% of purchasing decisions in Aurangabad now begin with a Google search or social media discovery.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. OUR 8 SERVICES (Grid Layout) ================= */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Digital Marketing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A complete suite of growth tools tailored for the Aurangabad market.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard 
              title="SEO Services" 
              desc="Rank #1 on Google for local keywords like 'near me' and 'best in Aurangabad'." 
              icon={<Search className="w-8 h-8"/>}
              color="blue"
            />
            <ServiceCard 
              title="Facebook Ads" 
              desc="Target specific demographics in Aurangabad. Generate leads for as low as ₹10." 
              icon={<Facebook className="w-8 h-8"/>}
              color="blue"
            />
            <ServiceCard 
              title="Instagram Marketing" 
              desc="Grow your brand with Reels, Stories, and Influencer collabs. Perfect for retail & fashion." 
              icon={<Instagram className="w-8 h-8"/>}
              color="pink"
            />
            <ServiceCard 
              title="Google Ads" 
              desc="Appear at the very top of search results instantly. Pay only when customers click." 
              icon={<Target className="w-8 h-8"/>}
              color="amber"
            />
            <ServiceCard 
              title="WhatsApp Marketing" 
              desc="Directly reach customer phones with broadcasts, chatbots, and offer updates." 
              icon={<MessageCircle className="w-8 h-8"/>}
              color="green"
            />
            <ServiceCard 
              title="Content Marketing" 
              desc="Build authority with blogs, videos, and case studies that educate and convert." 
              icon={<Megaphone className="w-8 h-8"/>}
              color="purple"
            />
            <ServiceCard 
              title="Email Marketing" 
              desc="Automated newsletters and drip campaigns to nurture leads into repeat buyers." 
              icon={<Zap className="w-8 h-8"/>}
              color="yellow"
            />
            <ServiceCard 
              title="YouTube Marketing" 
              desc="Video SEO and ads to capture the massive video-consuming audience in Maharashtra." 
              icon={<Youtube className="w-8 h-8"/>}
              color="red"
            />
          </div>
        </section>

        {/* ================= 4. PRICING (Comparison Table) ================= */}
        <section id="pricing" className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Transparent Pricing Packages</h2>
          
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0a0505]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="p-6">Package</th>
                  <th className="p-6">Monthly Cost</th>
                  <th className="p-6">Services Included</th>
                  <th className="p-6">Perfect For</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-white">Starter</td>
                  <td className="p-6 text-xl font-bold text-red-500">₹10,000</td>
                  <td className="p-6">Facebook + Instagram + Basic SEO</td>
                  <td className="p-6 text-gray-400">Local Shops & Startups</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-red-900/10">
                  <td className="p-6 font-bold text-white">Growth</td>
                  <td className="p-6 text-xl font-bold text-red-500">₹25,000</td>
                  <td className="p-6">All Social + Google Ads + Local SEO</td>
                  <td className="p-6 text-gray-400">Growing SMEs</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-white">Pro Scale</td>
                  <td className="p-6 text-xl font-bold text-red-500">₹50,000</td>
                  <td className="p-6">Full Funnel + WhatsApp + YouTube</td>
                  <td className="p-6 text-gray-400">Established Brands</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-white">Enterprise</td>
                  <td className="p-6 text-xl font-bold text-red-500">Custom</td>
                  <td className="p-6">Dedicated Manager + Advanced Retargeting</td>
                  <td className="p-6 text-gray-400">Corporate / Franchise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= 5. ROADMAP (Horizontal Scroll) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">30-Day Results Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapCard 
              week="Week 1"
              title="Audit & Strategy"
              items={["Competitor Analysis", "GMB Optimization", "Ad Account Setup"]}
            />
            <RoadmapCard 
              week="Week 2-3"
              title="Execution & Launch"
              items={["Content Creation", "Pixel Installation", "Ads Go Live"]}
            />
            <RoadmapCard 
              week="Week 4+"
              title="Optimization & Scale"
              items={["Lead Flow Optimization", "Retargeting Setup", "ROI Reporting"]}
            />
          </div>
        </section>

        {/* ================= 6. CASE STUDIES (1000 Words Content Block) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Proven Results in Aurangabad</h2>
          <div className="space-y-16">
            
            <CaseStudy 
              title="RETAIL: Nirala Bazaar Clothing Brand"
              challenge="The client, a traditional clothing store in Nirala Bazaar, was facing declining footfall due to online competition. They had zero online sales."
              solution="We implemented an Instagram Reels strategy showcasing new arrivals daily. We set up WhatsApp for Business to handle inquiries and integrated Google My Business for local discovery."
              results={["Revenue grew from ₹2L to ₹15L/month", "7x ROAS on Instagram Ads", "500+ qualified leads generated per month"]}
              color="red"
            />

            <CaseStudy 
              title="RESTAURANT: Cidco Multi-Cuisine"
              challenge="A newly opened restaurant in Cidco N2 was struggling to fill tables on weekdays. They relied solely on walk-ins."
              solution="Zaikron launched localized Facebook Ads targeting people within 5km radius with 'Buy 1 Get 1' offers. We also optimized their Google Maps listing to appear in 'Best Restaurants near me'."
              results={["200% increase in table bookings", "Ranked #1 for 'Best Restaurant Cidco'", "150+ 5-star reviews generated in 3 months"]}
              color="amber"
            />

            <CaseStudy 
              title="COACHING: MIDC Waluj Tech Institute"
              challenge="An industrial training center was failing to get student inquiries despite having good courses."
              solution="We shifted their budget from newspaper ads to Google Search Ads targeting 'technical courses'. We used YouTube testimonials to build trust and WhatsApp automation for follow-ups."
              results={["300 student enrollments per month", "₹10 Lakhs monthly revenue generated", "Cost per lead dropped by 60%"]}
              color="blue"
            />

            <CaseStudy 
              title="MANUFACTURING: Beed Bypass Industrial Unit"
              challenge="A B2B manufacturer needed leads from outside Aurangabad but didn't know how to reach them."
              solution="We utilized LinkedIn Marketing to target procurement managers and SEO to rank for specific industrial keywords nationwide. Email nurturing campaigns were set up."
              results={["50 qualified B2B leads/month", "3x sales pipeline growth", "Secured contracts from Pune & Mumbai clients"]}
              color="purple"
            />

          </div>
        </section>

        {/* ================= 7. COMPARISON & FAQ ================= */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Why Zaikron vs Others?</h3>
            <div className="space-y-6">
              <ComparisonItem feature="Local Knowledge" us="Aurangabad Expert" them="Generic / Remote" />
              <ComparisonItem feature="ROI Guarantee" us="3x or Free Month" them="No Guarantee" />
              <ComparisonItem feature="Reporting" us="Daily Dashboard" them="Monthly PDF" />
              <ComparisonItem feature="Scope" us="Full Funnel (SEO+Ads)" them="Single Service" />
              <ComparisonItem feature="Contracts" us="Month-to-Month" them="Long Lock-ins" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Common Questions</h3>
            <div className="space-y-4">
              <FAQItem q="What is the cost of digital marketing in Aurangabad?" a="Our packages start at ₹10,000/month. We offer flexible plans based on your goals and budget." />
              <FAQItem q="How do I choose the best digital marketing agency?" a="Look for local expertise, transparent pricing, and proven case studies. Zaikron offers all three." />
              <FAQItem q="How much do Facebook ads cost per lead?" a="In Aurangabad, leads can cost between ₹10 to ₹150 depending on the industry and competition." />
              <FAQItem q="How long does SEO take to show results?" a="SEO is a long-term game. Initial improvements appear in 3 months, with significant traffic growth in 6-12 months." />
              <FAQItem q="Is WhatsApp marketing legal in India?" a="Yes, when using the official WhatsApp Business API which we provide, it is fully compliant and highly effective." />
            </div>
          </div>
        </section>

        {/* ================= 8. FINAL CTA ================= */}
        <section className="text-center p-12 rounded-[3rem] bg-gradient-to-r from-red-900/60 to-amber-900/60 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Stop losing customers to competitors. Start your digital transformation with Aurangabad's #1 agency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform">
              Book Free Strategy Call
            </Link>
            <a href="https://wa.me/919730416763" className="px-12 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={24} /> Chat on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ServiceCard({ title, desc, icon, color }: any) {
  const colors: any = {
    blue: "text-blue-400 bg-blue-900/10 border-blue-500/20 hover:border-blue-500",
    pink: "text-pink-400 bg-pink-900/10 border-pink-500/20 hover:border-pink-500",
    amber: "text-amber-400 bg-amber-900/10 border-amber-500/20 hover:border-amber-500",
    green: "text-green-400 bg-green-900/10 border-green-500/20 hover:border-green-500",
    purple: "text-purple-400 bg-purple-900/10 border-purple-500/20 hover:border-purple-500",
    yellow: "text-yellow-400 bg-yellow-900/10 border-yellow-500/20 hover:border-yellow-500",
    red: "text-red-400 bg-red-900/10 border-red-500/20 hover:border-red-500",
  }
  
  return (
    <div className={`p-6 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${colors[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  )
}

function RoadmapCard({ week, title, items }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
      <span className="text-red-500 font-mono text-sm uppercase tracking-widest mb-2 block">{week}</span>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CaseStudy({ title, challenge, solution, results, color }: any) {
  const colors: any = {
    red: "text-red-400 border-red-500/30",
    amber: "text-amber-400 border-amber-500/30",
    blue: "text-blue-400 border-blue-500/30",
    purple: "text-purple-400 border-purple-500/30",
  }

  return (
    <div className={`p-8 md:p-10 rounded-[2.5rem] bg-[#0a0505] border ${colors[color].split(' ')[1]}`}>
      <h3 className={`text-2xl font-bold mb-6 ${colors[color].split(' ')[0]}`}>{title}</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">The Challenge</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Our Solution</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{solution}</p>
        </div>
      </div>
      <div className="bg-white/5 p-6 rounded-2xl">
        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Key Results</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((r: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm font-mono">
              <TrendingUp size={16} className="text-green-500" /> {r}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ComparisonItem({ feature, us, them }: any) {
  return (
    <div className="grid grid-cols-3 items-center p-4 bg-white/5 rounded-xl border border-white/10">
      <div className="font-bold text-white text-sm">{feature}</div>
      <div className="text-green-400 font-bold text-sm flex items-center gap-2"><Check size={14}/> {us}</div>
      <div className="text-gray-500 text-sm flex items-center gap-2"><div className="w-3 h-px bg-gray-500"></div> {them}</div>
    </div>
  )
}

function FAQItem({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left text-white font-bold hover:text-red-400 transition-colors"
      >
        {q}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-400' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/10">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}