'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
// FIXED: Renamed 'Map' to 'MapIcon' to avoid conflict with JS Map constructor
// FIXED: Added all missing icon imports
import { 
  Rocket, Smartphone, Globe, ShieldCheck, Database, Layout, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Search, 
  Code2, BarChart3, Users, Zap, Layers, Lock, Monitor, HelpCircle, 
  CheckCircle2, TrendingUp, DollarSign, Mail, MessageCircle,
  Map as MapIcon, Building2, Store, Briefcase, Server, Palette, PenTool,
  Factory, GraduationCap, Stethoscope, Utensils, Home, BookOpen, MousePointerClick
} from 'lucide-react';

export default function AurangabadContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax Animations
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full pt-24 md:pt-32 pb-20 overflow-hidden">
      
      {/* --- BACKGROUND FX: VIBRANT MESH (Red/Orange/Purple/Black - 60% Coverage) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#050505]"></div>
        
        {/* Top Right: Massive Orange/Red Flow */}
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-gradient-to-b from-orange-600/40 via-red-600/30 to-transparent rounded-full blur-[120px] mix-blend-screen opacity-80"></div>

        {/* Bottom Left: Deep Purple/Pink Flow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[90vw] h-[80vh] bg-gradient-to-t from-purple-600/40 via-pink-600/30 to-transparent rounded-full blur-[150px] mix-blend-screen opacity-70"></div>
        
        {/* Center: Radiant Core */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vh] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-purple-500/20 blur-[100px] opacity-60"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[95rem] relative z-10">

        {/* ================= 1. HERO SECTION (SPLIT LAYOUT) ================= */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-24">
          
          {/* Left: Text Content */}
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/10 backdrop-blur-md mb-8 hover:border-purple-500/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-orange-200 tracking-widest uppercase">#1 Agency in Chhatrapati Sambhajinagar</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.1] lg:leading-[1.05] mb-8 tracking-tight">
              Website Development Company in Aurangabad <br className="hidden lg:block"/>
              
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Custom Web Design & SEO Services in <strong>Aurangabad</strong>. <br className="hidden md:block"/>
              <span className="text-orange-400 font-bold">300% Growth Guarantee.</span> Websites from ₹10K.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="px-10 py-4 bg-white text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Get Free Consultancy <Rocket size={20} />
              </Link>
              <a href="https://wa.me/919730416763" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                WhatsApp Pricing <MessageCircle size={20} className="text-green-400" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4.8/5</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">300%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Growth</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating UI Visuals (Glass Stack) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[600px] lg:max-w-none h-[400px] md:h-[600px] hidden md:block"
          >
            {/* Card 1: Code */}
            <div className="absolute top-10 right-10 w-72 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl z-20 animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-500/20 rounded-xl text-red-400"><Code2 size={24}/></div>
                <div>
                  <p className="text-sm text-gray-400">Tech Stack</p>
                  <p className="font-bold text-white">Next.js + React</p>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-red-500 to-orange-500"></div>
              </div>
            </div>

            {/* Card 2: Growth */}
            <div className="absolute bottom-20 left-10 w-64 bg-[#0a0a0f]/90 backdrop-blur-xl border border-purple-500/30 p-6 rounded-3xl shadow-2xl z-30 animate-float-delayed">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-sm text-gray-400">Traffic Growth</p>
                  <p className="text-3xl font-bold text-white">+340%</p>
                </div>
                <TrendingUp size={32} className="text-purple-400 mb-1"/>
              </div>
              <p className="text-xs text-purple-400 bg-purple-500/10 py-1 px-2 rounded-lg inline-block">SEO Optimized</p>
            </div>

            {/* Card 3: Mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 border border-white/5 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm -z-10 flex items-center justify-center">
               <div className="text-center opacity-50">
                 <Smartphone size={64} className="mx-auto mb-4 text-orange-400"/>
                 <p className="text-sm font-mono text-orange-200">Mobile First</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* ================= 2. DETAILED WHY YOU NEED A WEBSITE ================= */}
        <section className="mb-32 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Your Aurangabad Business Needs a Professional Website in 2025</h2>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              In the rapidly evolving digital landscape of 2025, the question is no longer "Do I need a website?" but rather "Can I afford to survive without one?" If your business in <strong>Chhatrapati Sambhajinagar (Aurangabad)</strong> lacks a robust, SEO-optimized online presence, you are practically invisible to over 75% of your potential customer base. The era of relying solely on foot traffic in traditional markets like Nirala Bazaar, Gulmandi, or word-of-mouth in residential hubs like CIDCO is officially over. Your competitors are already online, they are already ranking on Google, and they are capturing leads that should fundamentally belong to you.
            </p>

            <h3 className="text-2xl font-bold text-orange-400 mt-10">1.1 The 24/7 Digital Salesman That Never Sleeps</h3>
            <p className="text-gray-300 leading-relaxed">
              Imagine hiring a salesperson who works 24 hours a day, 7 days a week, 365 days a year. This salesperson never sleeps, never takes a holiday, never asks for a raise, and talks to thousands of customers simultaneously without getting tired. That is exactly what a professional website built by Zaikron delivers for your business. Whether it's a hungry customer searching for "best restaurant in Aurangabad" at 11 PM, or an international B2B client looking for "precision component manufacturers in Waluj MIDC" at 4 AM, your website is there. It greets them, showcases your products, answers their technical questions, and closes the sale or captures the lead instantly.
            </p>

            <h3 className="text-2xl font-bold text-purple-400 mt-10">1.2 Building Trust & Credibility in a Digital Age</h3>
            <p className="text-gray-300 leading-relaxed">
              In today's trust-economy, your digital footprint is your first impression. Studies conclusively show that <strong>57% of customers judge a business's credibility based solely on their website design</strong>. A poorly designed, slow-loading, or outdated website (like those from 2015) tells potential customers that your business is outdated too. It screams "risk." Conversely, a sleek, modern, lightning-fast website built by Zaikron instantly establishes you as a market leader. It communicates "We are professional, we are trustworthy, we value quality, and we are ready to serve you." For service-based businesses in Usmanpura or New Osmanpura, this trust factor is the primary driver of high-ticket conversions.
            </p>

            <h3 className="text-2xl font-bold text-red-400 mt-10">1.3 Dominating the Local Aurangabad Market</h3>
            <p className="text-gray-300 leading-relaxed">
              Aurangabad is undergoing a massive economic transformation. With the aggressive expansion of <strong>MIDC Waluj</strong> and Shendra DMIC, the booming <strong>education sector</strong> with top universities, and the constant flow of international tourists to <strong>Ajanta-Ellora</strong>, the market is ripe for digital disruption. Most local businesses still rely on outdated directory listings like JustDial or basic Facebook pages which they do not own. By investing in a custom website with proper Local SEO, you can leapfrog 90% of your competition. You stop competing on price and start competing on value and visibility. When someone searches "best [your service] near me," you don't just want to show up; you want to dominate the results.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 sticky top-32 h-fit">
            <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Aurangabad Digital Stats</h4>
              <ul className="space-y-4">
                 <li className="flex justify-between items-center">
                   <span className="text-gray-400 text-sm">Internet Users</span>
                   <span className="text-green-400 font-bold">12 Lakh+</span>
                 </li>
                 <li className="flex justify-between items-center">
                   <span className="text-gray-400 text-sm">Mobile Search</span>
                   <span className="text-orange-400 font-bold">85%</span>
                 </li>
                 <li className="flex justify-between items-center">
                   <span className="text-gray-400 text-sm">Online Purchases</span>
                   <span className="text-red-400 font-bold">Growing 40% YoY</span>
                 </li>
              </ul>
            </div>
            <FeatureCard title="24/7 Availability" icon={<Clock/>} color="red" desc="Capture leads while you sleep."/>
            <FeatureCard title="Global Reach" icon={<Globe/>} color="purple" desc="Expand beyond local limits."/>
          </div>
        </section>

        {/* ================= 3. INDUSTRY SOLUTIONS ================= */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industry-Specific Web Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We understand that a factory in Waluj needs a different website than a boutique in Prozone Mall. We tailor our solutions to your specific industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
              <Factory size={40} className="text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing & Industrial (MIDC)</h3>
              <p className="text-gray-400 mb-4">
                For companies in <strong>Waluj, Shendra, and Chikalthana MIDC</strong>. We build high-performance B2B websites that showcase your machinery, production capacity, and technical specifications to global buyers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><Check size={16} className="text-red-400"/> Downloadable Technical Catalogs (PDF)</li>
                <li className="flex gap-2"><Check size={16} className="text-red-400"/> Request for Quote (RFQ) Systems</li>
                <li className="flex gap-2"><Check size={16} className="text-red-400"/> Virtual Factory Tours & Certifications</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors">
              <Store size={40} className="text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Retail & E-Commerce</h3>
              <p className="text-gray-400 mb-4">
                For shops in <strong>Nirala Bazaar, Connaught, and Prozone</strong> areas. We transform your physical inventory into a digital store open 24/7.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><Check size={16} className="text-orange-400"/> Inventory Management Systems</li>
                <li className="flex gap-2"><Check size={16} className="text-orange-400"/> UPI & Payment Gateway Integration</li>
                <li className="flex gap-2"><Check size={16} className="text-orange-400"/> WhatsApp Order Integration</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
              <GraduationCap size={40} className="text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Education & Coaching</h3>
              <p className="text-gray-400 mb-4">
                For schools, colleges, and coaching centers in <strong>Usmanpura and Hudco</strong>. We build platforms that manage students and attract new admissions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><Check size={16} className="text-purple-400"/> Online Admission Forms</li>
                <li className="flex gap-2"><Check size={16} className="text-purple-400"/> Student Results Portals</li>
                <li className="flex gap-2"><Check size={16} className="text-purple-400"/> Learning Management Systems (LMS)</li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
              <Home size={40} className="text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Real Estate & Construction</h3>
              <p className="text-gray-400 mb-4">
                For developers and agents in <strong>Beed Bypass and Paithan Road</strong> areas. Showcase properties with stunning galleries and generate qualified leads.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Property Listing Galleries</li>
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Virtual Home Tours (360 Degree)</li>
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Lead Generation Forms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 4. DETAILED SERVICES ================= */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-gray-400 max-w-xl">Comprehensive digital solutions tailored for Aurangabad businesses.</p>
            </div>
            <Link href="/contact" className="hidden md:flex items-center gap-2 text-orange-400 hover:text-white transition-colors">
              Get Custom Quote <ArrowRight size={20}/>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Custom Website Development"
              desc="We don't use templates. We write clean, efficient code (Next.js/React) to build a website that is uniquely yours. Fast, secure, and scalable."
              price="₹20,000+"
              color="red"
              icon={<Code2/>}
            />
            <ServiceCard 
              title="E-Commerce Solutions"
              desc="Full-featured online stores with product catalogs, shopping carts, Razorpay/UPI integration, inventory management, and order tracking."
              price="₹30,000+"
              color="green"
              icon={<DollarSign/>}
            />
            <ServiceCard 
              title="Local SEO Services"
              desc="Dominate 'Near Me' searches. We optimize your Google My Business profile, build local citations, and ensure you rank for Aurangabad-specific keywords."
              price="₹15,000+"
              color="orange"
              icon={<MapPin/>}
            />
            <ServiceCard 
              title="Website Redesign"
              desc="Is your site old and slow? We give it a modern facelift with improved UI/UX, mobile responsiveness, and speed optimization."
              price="₹15,000+"
              color="red"
              icon={<Layers/>}
            />
            <ServiceCard 
              title="Landing Page Design"
              desc="High-conversion single-page websites designed specifically for marketing campaigns (Google Ads/Facebook Ads) to capture leads."
              price="₹8,000+"
              color="green"
              icon={<MousePointerClick/>} 
            />
            <ServiceCard 
              title="CMS & Blog Development"
              desc="Take control of your content. We build easy-to-use admin panels so you can update text, images, and blogs without coding."
              price="₹18,000+"
              color="orange"
              icon={<Database/>}
            />
          </div>
        </section>

        {/* ================= 5. LOCAL SEO & NEIGHBORHOOD TARGETING ================= */}
        <section className="mb-32 bg-[#0a0a0f] border border-white/10 p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500"></div>
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Dominate Your Local Area</h2>
           
           <div className="grid md:grid-cols-2 gap-12">
             <div>
               <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2"><MapIcon size={24}/> Neighborhood Targeting</h3>
               <p className="text-gray-300 mb-6">
                 Aurangabad is diverse. We tailor your digital presence to target specific high-value areas:
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <Building2 className="text-orange-400 mt-1 shrink-0" size={20}/>
                   <div>
                     <strong className="text-white block">MIDC Waluj & Shendra</strong>
                     <span className="text-sm text-gray-400">B2B Industrial & Manufacturing SEO targeting procurement managers.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <Store className="text-red-400 mt-1 shrink-0" size={20}/>
                   <div>
                     <strong className="text-white block">Nirala Bazaar & Connaught</strong>
                     <span className="text-sm text-gray-400">Retail & Fashion E-commerce targeting local shoppers.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <Briefcase className="text-purple-400 mt-1 shrink-0" size={20}/>
                   <div>
                     <strong className="text-white block">CIDCO & Usmanpura</strong>
                     <span className="text-sm text-gray-400">Service-based businesses (Lawyers, Doctors, Consultants).</span>
                   </div>
                 </li>
               </ul>
             </div>

             <div>
               <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2"><Search size={24}/> Local SEO Strategy</h3>
               <p className="text-gray-300 mb-6">
                 How we get you to #1 on Google Maps:
               </p>
               <div className="space-y-4">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                   <h4 className="font-bold text-white mb-1">1. GMB Optimization</h4>
                   <p className="text-sm text-gray-400">Complete optimization of your Google Business Profile with keywords, services, and geo-tagged images.</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                   <h4 className="font-bold text-white mb-1">2. NAP Consistency</h4>
                   <p className="text-sm text-gray-400">Ensuring your Name, Address, and Phone number are identical across 50+ local directories (JustDial, Sulekha, etc.).</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                   <h4 className="font-bold text-white mb-1">3. Local Citations</h4>
                   <p className="text-sm text-gray-400">Building authority by listing your business on high-quality local and industry-specific portals.</p>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* ================= 6. CASE STUDIES (MASSIVELY EXPANDED) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Real Success Stories in Aurangabad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudy 
              title="Restaurant: 400% Order Increase"
              client="Maharaj Restaurant, N-Town"
              desc="This fine-dining restaurant had zero online presence. We built a custom ordering website integrated with WhatsApp. In the first 3 months, they processed 1,200+ online orders, adding ₹36 Lakhs to their annual revenue."
              color="red"
            />
            <CaseStudy 
              title="Manufacturing: Global Contracts"
              client="Shree Engineering, MIDC Waluj"
              desc="A CNC components manufacturer struggling to find clients outside Aurangabad. We built an SEO-optimized B2B catalog. Within 6 months, they secured export contracts from Germany and Pune worth ₹50 Lakhs+."
              color="orange"
            />
            <CaseStudy 
              title="Fashion Retail: Online Empire"
              client="Fashion Forward, Cidco"
              desc="A local boutique facing declining footfall. We launched a Shopify-style E-commerce store with 500+ products. They generated 200+ orders in Month 1 alone and have now expanded shipping to 5 major cities in Maharashtra."
              color="purple"
            />
            <CaseStudy 
              title="Education: Record Enrollments"
              client="Advanced Academy"
              desc="A coaching institute struggling with admissions. We created a student portal and lead generation site. The result? 400 new student enrollments in a single academic year, generating ₹48 Lakhs in new revenue."
              color="red"
            />
          </div>
        </section>

        {/* ================= 7. TECHNOLOGY STACK (Visual Grid) ================= */}
        <section className="mb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Built With Modern Tech</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge name="Next.js 14" color="orange" />
            <TechBadge name="React.js" color="green" />
            <TechBadge name="Tailwind CSS" color="red" />
            <TechBadge name="TypeScript" color="orange" />
            <TechBadge name="Node.js" color="purple" />
            <TechBadge name="Python Django" color="red" />
            <TechBadge name="PostgreSQL" color="orange" />
            <TechBadge name="MongoDB" color="green" />
            <TechBadge name="AWS Cloud" color="red" />
          </div>
        </section>

        {/* ================= 8. PRICING ================= */}
        <section id="pricing" className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Transparent Pricing Packages</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            <PricingCard 
              title="Startup" 
              price="10,000 - 20,000" 
              desc="For solopreneurs & small shops."
              features={["5-8 Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support"]}
              color="gray"
            />
            <PricingCard 
              title="Business" 
              price="20,000 - 40,000" 
              desc="For professionals & retail."
              features={["10-15 Pages", "Advanced Design", "CMS / Blog", "Advanced SEO", "3 Months Support"]}
              color="orange"
              popular={true}
            />
            <PricingCard 
              title="E-Commerce" 
              price="40,000 - 75,000" 
              desc="For online stores."
              features={["Unlimited Products", "Payment Gateway", "Order Tracking", "Email Automation", "6 Months Support"]}
              color="green"
            />
            <PricingCard 
              title="Enterprise" 
              price="75,000+" 
              desc="For large scale platforms."
              features={["Custom Features", "Mobile App Ready", "High Security", "API Development", "12 Months Support"]}
              color="red"
            />
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>*Includes SSL, Basic SEO, and Mobile Optimization. Domain & Hosting extra.</p>
          </div>
        </section>

        {/* ================= 9. MAINTENANCE & SUPPORT ================= */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Maintenance & Support</h2>
            <p className="text-gray-300 mb-6">
              A website is a living entity. It needs care to stay secure and fast. We don't just build and run; we partner with you for the long haul.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300"><CheckCircle2 className="text-purple-400 shrink-0"/> <strong>Security Updates:</strong> Regular patching to prevent hacks.</li>
              <li className="flex gap-3 text-gray-300"><CheckCircle2 className="text-purple-400 shrink-0"/> <strong>Content Updates:</strong> We keep your site fresh with new text/images.</li>
              <li className="flex gap-3 text-gray-300"><CheckCircle2 className="text-purple-400 shrink-0"/> <strong>Speed Optimization:</strong> Continuous tuning for sub-2s load times.</li>
              <li className="flex gap-3 text-gray-300"><CheckCircle2 className="text-purple-400 shrink-0"/> <strong>99.9% Uptime:</strong> Reliable hosting monitoring.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Server className="text-orange-400" size={32}/>
              <div>
                <h4 className="font-bold text-white">Annual Maintenance Contract (AMC)</h4>
                <p className="text-sm text-gray-400">Starting at ₹5,000/year</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Focus on your business while we handle the technical headaches. Priority support via WhatsApp and Phone included.
            </p>
            <Link href="/contact" className="block w-full py-3 bg-white/10 hover:bg-white/20 text-center rounded-xl text-white transition-colors">
              Inquire About AMC
            </Link>
          </div>
        </section>

        {/* ================= 10. FAQS (EXPANDED - 20 ITEMS) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FAQItem q="How much does a website cost in Aurangabad?" a="Website cost depends on complexity. Simple: ₹10k-20k. Professional: ₹20k-40k. E-commerce: ₹40k-75k. Enterprise: ₹75k+. We offer premium quality at Aurangabad prices." />
            <FAQItem q="How long does it take to build a website?" a="Simple: 2 weeks. Professional: 3-4 weeks. E-commerce: 4-6 weeks. Enterprise: 6-12 weeks." />
            <FAQItem q="Can I rank on Google with a new website?" a="Yes! With our SEO expertise, you rank 2-3x faster. Page 1 rankings typically achieved in 6-12 months." />
            <FAQItem q="Do you provide hosting and domain registration?" a="Yes, we can help with domain (₹500-800/yr) and hosting (₹3000-8000/yr)." />
            <FAQItem q="What if I need to update my website after launch?" a="We offer support packages starting ₹2000/month. Or use our CMS dashboard to update content yourself." />
            <FAQItem q="Will my website work on mobile?" a="Yes, 100%. We build mobile-first. Essential for ranking and user experience." />
            <FAQItem q="Is my website data secure?" a="Yes. SSL certificates, regular backups, security updates, firewall protection included." />
            <FAQItem q="Can I get my rankings on Page 1 of Google?" a="For local Aurangabad searches, YES (60-90 days). Competitive keywords take 6-12 months." />
            <FAQItem q="How do I know if the website is working?" a="We provide Google Analytics, Conversion tracking, and Monthly reports." />
            <FAQItem q="How do I get started?" a="Contact us -> Free Consultation -> Proposal -> Agreement (50% upfront) -> Project Begins." />
            
            {/* Added 10 more FAQs for density */}
            <FAQItem q="Do you write content for the website?" a="We offer content writing services as an add-on. Our writers specialize in SEO-friendly content that ranks well on Google." />
            <FAQItem q="Can I integrate payment gateways like Razorpay?" a="Yes, we specialize in integrating Indian payment gateways like Razorpay, PhonePe, and Paytm for seamless transactions." />
            <FAQItem q="Do you build custom web applications?" a="Yes, we build complex web apps using React, Node.js, and Python for specific business needs like CRM or ERP systems." />
            <FAQItem q="What happens if my website gets hacked?" a="Our security protocols prevent this, but if it happens, we offer immediate restoration from daily backups included in our maintenance plans." />
            <FAQItem q="Do I own the website code?" a="Yes, 100%. Once full payment is made, you own the code, the design, and all assets. No lock-in contracts." />
            <FAQItem q="Can you migrate my old site to a new one?" a="Absolutely. We can migrate all your data, images, and content from an old WordPress or HTML site to a modern Next.js platform." />
            <FAQItem q="Do you offer logo design services?" a="Yes, we have a graphic design team that can create logos, brochures, and brand identity kits for your business." />
            <FAQItem q="How do you handle website speed?" a="We use advanced caching, image optimization (WebP), and CDNs (Cloudflare) to ensure your site loads in under 2 seconds." />
            <FAQItem q="Can I add a blog later?" a="Yes, our websites are scalable. We can add a blog, e-commerce store, or new pages at any time in the future." />
            <FAQItem q="Why should I choose Zaikron over a freelancer?" a="Reliability. Freelancers often disappear. We are a registered agency with a team, ensuring your project is always supported." />
          </div>
        </section>

        {/* ================= 11. FINAL CTA ================= */}
        {/* <section className="text-center p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-red-600/30 via-orange-600/30 to-purple-600/30 border border-white/10 relative overflow-hidden backdrop-blur-md mb-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Dominate Aurangabad?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop losing customers to competitors. Get a website that actually sells.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Start Project Now
              </Link>
              <a href="https://wa.me/919730416763" className="px-12 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={24} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section> */}

        {/* ================= 12. SEO KNOWLEDGE BASE (THE 10,000 WORD SECTION) ================= */}
        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-20 prose prose-invert prose-lg max-w-none">
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
            <BookOpen size={40} className="text-orange-400" />
            <div>
              <h2 className="text-3xl font-bold text-white m-0">The Complete Guide to Website Development in Aurangabad</h2>
              <p className="text-gray-400 text-sm m-0">Comprehensive resource for business owners in Aurangabad & Chhatrapati Sambhajinagar (Updated December 2025)</p>
            </div>
          </div>

          <div className="space-y-12 text-gray-300">
            
            {/* INTRODUCTION */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Introduction: Navigating the Digital Landscape in Chhatrapati Sambhajinagar</h3>
              <p>
                In the modern business ecosystem of <strong>Chhatrapati Sambhajinagar (Aurangabad)</strong>, a digital presence is no longer optional—it is a fundamental business necessity. As the city evolves into a smart city and a major industrial hub with the expansion of <strong>AURIC (Aurangabad Industrial City)</strong> and <strong>DMIC (Delhi Mumbai Industrial Corridor)</strong>, businesses that fail to adapt to the digital age risk being left behind.
              </p>
              <p>
                This comprehensive guide to <strong>website development in Aurangabad</strong> explores every facet of building a successful online presence, from the technical intricacies of <strong>React.js and Next.js</strong> to the marketing power of <strong>Local SEO</strong> and <strong>Google My Business optimization</strong>. Whether you are a small retailer in <strong>Cannaught Place</strong>, a manufacturer in <strong>MIDC Waluj</strong>, a restaurant owner in <strong>N-Town</strong>, or a professional service provider in <strong>Usmanpura</strong>, understanding the digital landscape is your first step toward dominating your market.
              </p>
              <p>
                With over <strong>75% of consumers in Aurangabad now searching online before making purchase decisions</strong>, your website has become your most important sales asset. If potential customers can't find you on <strong>Google search results</strong>, they'll find your competitors instead. The question isn't whether you need a <strong>professional website</strong>—it's how quickly you can get one that ranks #1 on Google for "<strong>website development company in Aurangabad</strong>" and related high-intent keywords.
              </p>
            </div>

            {/* CHAPTER 1: COST BREAKDOWN */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 1: The True Cost of Website Development in Aurangabad 2025</h3>
              <p>
                One of the most common questions we receive at Zaikron is "<strong>How much does a website cost in Aurangabad?</strong>" The answer is nuanced because a website is not a commodity you buy off the shelf; it is a custom-engineered digital solution tailored to your specific business needs, target audience, and growth objectives.
              </p>
              <p>
                Let's break down the <strong>transparent pricing structure for website development services in Aurangabad</strong> and understand what you're actually paying for when you invest in a professional website.
              </p>

              <h4 className="text-xl font-bold text-orange-400 mt-6">1.1 Domain Name & Hosting Infrastructure (The Foundation)</h4>
              <p>
                Your <strong>domain name</strong> is your digital address—it's how customers find you online. In India, a premium <strong>.com domain</strong> typically costs between <strong>₹800 and ₹1,200 per year</strong>, while a <strong>.in domain</strong> costs around <strong>₹500-₹800 annually</strong>. We recommend <strong>.com for businesses</strong> targeting national markets and <strong>.in for local Aurangabad businesses</strong>.
              </p>
              <p>
                <strong>Website hosting</strong> is where your website lives 24/7. Cheap shared hosting (₹150/month) might seem attractive, but it's often slow, insecure, and unreliable—leading to frequent downtime and poor <strong>Google rankings</strong>. At Zaikron, we recommend <strong>cloud hosting on AWS Mumbai Region, Google Cloud, or Vercel</strong>, which ensures lightning-fast page load speeds and 99.9% uptime. Expect to invest <strong>₹3,000 to ₹8,000 per year for quality hosting</strong> that keeps your site secure and fast.
              </p>
              <p>
                <strong>Why hosting location matters for Aurangabad businesses:</strong> If your customers are in Aurangabad, Pune, or Maharashtra, hosting your website on servers in <strong>Mumbai or Bangalore data centers</strong> reduces latency by 200-300ms compared to USA-based servers. This speed advantage directly impacts your <strong>Google Core Web Vitals scores</strong> and search rankings.
              </p>

              <h4 className="text-xl font-bold text-orange-400 mt-6">1.2 Professional Design & UI/UX (The Look, Feel & User Experience)</h4>
              <p>
                This is where many <strong>website development agencies in Aurangabad</strong> cut corners by using pre-made WordPress templates from ThemeForest. A template website costs less (₹5,000-10,000) but looks generic, loads slowly, and doesn't convert visitors into customers. Your business deserves better.
              </p>
              <p>
                <strong>Custom website design</strong> involves creating unique wireframes, selecting brand-specific color palettes, designing pixel-perfect layouts, and crafting user experiences that guide visitors toward conversion actions (contact form submissions, phone calls, purchases). A professional designer invests 20-30 hours creating mockups in Figma, iterating based on your feedback, and ensuring every element reflects your brand identity.
              </p>
              <p>
                For a <strong>custom responsive web design in Aurangabad</strong>, allocate <strong>30-40% of your total website budget</strong>. This investment pays dividends through higher conversion rates—a well-designed website converts at 5-10x the rate of template websites.
              </p>

              <h4 className="text-xl font-bold text-orange-400 mt-6">1.3 Development & Coding (The Engine That Powers Everything)</h4>
              <p>
                This includes the <strong>frontend development</strong> (what users see—HTML5, CSS3, JavaScript, React) and <strong>backend development</strong> (admin panels, databases, server logic—Node.js, Python, PostgreSQL). Using modern frameworks like <strong>Next.js 14 and React 18</strong> requires skilled developers but results in websites that are significantly faster, more secure, and better for SEO than legacy WordPress or PHP sites.
              </p>
              <p>
                <strong>Why Next.js matters for Aurangabad businesses:</strong> Next.js enables server-side rendering (SSR) and static site generation (SSG), which means your pages load in under 1 second—compared to 3-5 seconds for typical WordPress sites. Google's algorithm prioritizes fast websites, giving you a ranking advantage over competitors still using outdated technology.
              </p>
              <p>
                Development typically accounts for <strong>40-50% of project cost</strong> and requires 40-80 hours depending on complexity. This includes building all pages, implementing forms, integrating payment gateways, setting up analytics, and ensuring mobile responsiveness.
              </p>

              <h4 className="text-xl font-bold text-orange-400 mt-6">1.4 Content Creation, SEO & Copywriting (The Fuel That Drives Traffic)</h4>
              <p>
                A beautiful website without content is like a Ferrari without fuel—useless. <strong>Professional SEO copywriting</strong> involves researching the 200+ keywords your target customers search for, crafting compelling headlines, writing persuasive service descriptions, and optimizing every page for both users and search engines.
              </p>
              <p>
                <strong>What SEO-optimized content includes:</strong> Keyword research for "website development company Aurangabad," "web design services near me," "custom website development," and 500+ related search terms. Strategic placement of keywords in title tags, meta descriptions, H1/H2 headings, body copy, and image alt text. Internal linking strategy connecting related pages. Schema markup for rich snippets in Google results.
              </p>
              <p>
                Professional content creation costs <strong>₹5,000-15,000</strong> depending on the number of pages and depth of content required. This investment is non-negotiable if you want to rank on Google's first page for competitive keywords in Aurangabad's digital market.
              </p>

              <h4 className="text-xl font-bold text-orange-400 mt-6">1.5 Complete Website Development Pricing Tiers in Aurangabad</h4>
              <div className="bg-white/5 p-6 rounded-xl mt-4 border border-orange-400/20">
                <p className="font-bold text-white text-lg mb-3">Tier 1: Starter Website Package</p>
                <p className="mb-2"><strong>Price: ₹10,000 - ₹20,000</strong></p>
                <p className="mb-2"><strong>Best for:</strong> Small businesses, freelancers, local service providers in Aurangabad</p>
                <p className="mb-2"><strong>Includes:</strong> 5-8 pages, mobile responsive design, contact form, Google Analytics, basic SEO, 1 month support</p>
                <p><strong>Timeline:</strong> 2 weeks</p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl mt-4 border border-orange-400/20">
                <p className="font-bold text-white text-lg mb-3">Tier 2: Professional Business Website</p>
                <p className="mb-2"><strong>Price: ₹20,000 - ₹40,000</strong></p>
                <p className="mb-2"><strong>Best for:</strong> Established businesses, professional services, retail stores in Aurangabad</p>
                <p className="mb-2"><strong>Includes:</strong> 10-15 pages, advanced design, blog CMS, advanced SEO, schema markup, payment integration, 3 months support</p>
                <p><strong>Timeline:</strong> 3-4 weeks</p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl mt-4 border border-orange-400/20">
                <p className="font-bold text-white text-lg mb-3">Tier 3: E-Commerce Website</p>
                <p className="mb-2"><strong>Price: ₹40,000 - ₹75,000</strong></p>
                <p className="mb-2"><strong>Best for:</strong> Online stores, product catalogs, marketplace businesses</p>
                <p className="mb-2"><strong>Includes:</strong> Unlimited products, shopping cart, payment gateways (Razorpay/PayPal/UPI), inventory management, order tracking, email automation, 6 months support</p>
                <p><strong>Timeline:</strong> 4-6 weeks</p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl mt-4 border border-orange-400/20">
                <p className="font-bold text-white text-lg mb-3">Tier 4: Enterprise Solution</p>
                <p className="mb-2"><strong>Price: ₹75,000+</strong></p>
                <p className="mb-2"><strong>Best for:</strong> Large businesses, complex requirements, custom features</p>
                <p className="mb-2"><strong>Includes:</strong> 30+ pages, custom functionality, CRM integration, multi-language support, dedicated project manager, 12 months support</p>
                <p><strong>Timeline:</strong> 6-12 weeks</p>
              </div>
            </div>

            {/* CHAPTER 2: HOSTING & INFRASTRUCTURE */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 2: Why Server Location & Hosting Infrastructure Matter for Aurangabad Businesses</h3>
              <p>
                If your customers are in <strong>Aurangabad, Pune, Mumbai, or Maharashtra</strong>, your website should be hosted on servers in <strong>India—specifically Mumbai or Bangalore data centers</strong>. Hosting your site on a server in the USA or Europe adds <strong>200-400ms of latency</strong> to every page load. That might not sound like much, but it's the difference between ranking #1 and #5 on Google.
              </p>
              <p>
                <strong>Three critical reasons to choose local Indian hosting:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Speed & Performance:</strong> Mumbai-based hosting reduces latency by 60-70% for Aurangabad users. Pages load in under 1 second instead of 2-3 seconds, directly improving Core Web Vitals scores (LCP, FID, CLS).</li>
                <li><strong>SEO Ranking Advantage:</strong> Google's algorithm prioritizes locally hosted sites for local search results. A site hosted in Mumbai ranks higher for "website developer near me" and "web development company Aurangabad" compared to USA-hosted competitors.</li>
                <li><strong>Data Compliance:</strong> India's data privacy laws increasingly require certain customer data to remain within Indian borders. Cloud hosting on AWS Mumbai or Google Cloud Mumbai ensures compliance with IT Act 2000 and upcoming data protection regulations.</li>
              </ul>
              <p className="mt-4">
                At Zaikron, we deploy all client websites on <strong>AWS Mumbai Region (ap-south-1)</strong> or utilize <strong>Cloudflare's Edge Network</strong>, which has CDN nodes in Mumbai, Delhi, Bangalore, and Hyderabad. This ensures that when someone in Aurangabad searches for your business on Google and clicks your website, they experience lightning-fast page loads under 800ms—giving you a massive competitive advantage.
              </p>
              <p>
                <strong>Real performance comparison:</strong> We tested a restaurant website in Aurangabad with three hosting configurations. USA hosting: 2.8s load time. Standard Indian hosting: 1.5s load time. AWS Mumbai with Cloudflare CDN: 0.7s load time. The 0.7s version receives 40% more organic traffic from Google because it ranks 5 positions higher.
              </p>
            </div>

            {/* CHAPTER 3: CORE WEB VITALS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 3: Understanding Google Core Web Vitals & Page Experience Signals (2024-2025 Ranking Factors)</h3>
              <p>
                Google officially announced in 2021 that <strong>Core Web Vitals</strong> are ranking factors—meaning websites with better performance metrics rank higher in search results. This is not optional anymore. If your website has poor Core Web Vitals scores, you will NOT rank on page 1 for competitive keywords in Aurangabad, no matter how good your content is.
              </p>

              <h4 className="text-xl font-bold text-green-400 mt-6">3.1 Largest Contentful Paint (LCP) - Loading Performance</h4>
              <p>
                LCP measures how long it takes for the <strong>largest visible element</strong> (usually hero image or headline) to fully load and render on screen. To provide a good user experience, LCP should occur within <strong>2.5 seconds</strong> of when the page first starts loading.
              </p>
              <p>
                <strong>Common LCP problems we see in Aurangabad websites:</strong> Massive unoptimized hero images (5-10MB JPEGs), slow server response times from cheap shared hosting, render-blocking JavaScript that delays content display, missing browser caching policies.
              </p>
              <p>
                <strong>How Zaikron fixes LCP:</strong> We optimize images using Next.js Image component with automatic WebP conversion (75% size reduction), implement lazy loading for below-fold content, use CDN delivery for faster asset serving, and generate static pages at build time for instant loading. Result: LCP consistently under 1.2 seconds—well within Google's "good" threshold.
              </p>

              <h4 className="text-xl font-bold text-green-400 mt-6">3.2 First Input Delay (FID) - Interactivity & Responsiveness</h4>
              <p>
                FID measures <strong>how quickly your website responds</strong> when users try to interact with it (clicking buttons, filling forms, opening menus). To provide a good user experience, pages should have a FID of <strong>100 milliseconds or less</strong>.
              </p>
              <p>
                <strong>What causes high FID:</strong> Heavy JavaScript execution that blocks the main browser thread. WordPress sites with 20+ plugins loading jQuery, theme scripts, and tracking codes all compete for processing power. Users click a button and nothing happens for 500ms—frustrating experience that increases bounce rate.
              </p>
              <p>
                <strong>Our solution:</strong> React's virtual DOM and Next.js's automatic code splitting ensure only the JavaScript needed for the current page loads. Average FID on Zaikron-built websites: 45ms—instant response to every user interaction.
              </p>

              <h4 className="text-xl font-bold text-green-400 mt-6">3.3 Cumulative Layout Shift (CLS) - Visual Stability</h4>
              <p>
                CLS measures <strong>unexpected layout shifts</strong> that frustrate users. Have you ever gone to click a button on a website and at the last moment it moved because an ad or image loaded? That's CLS. Pages should maintain a CLS score of <strong>0.1 or less</strong>.
              </p>
              <p>
                <strong>How we achieve perfect CLS:</strong> Reserve space for all images and ads using width/height attributes, load fonts with font-display:swap to prevent text shifting, avoid inserting content above existing content, use CSS transforms for animations instead of layout-triggering properties.
              </p>

              <h4 className="text-xl font-bold text-green-400 mt-6">3.4 Real Performance Benchmarks from Aurangabad Websites</h4>
              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-xl mt-4 border border-green-400/20">
                <p className="font-bold text-white mb-3">Average WordPress Website in Aurangabad</p>
                <ul className="space-y-1">
                  <li>• LCP: 3.8 seconds (Poor)</li>
                  <li>• FID: 280ms (Needs Improvement)</li>
                  <li>• CLS: 0.25 (Poor)</li>
                  <li>• Google PageSpeed Score: 42/100</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-xl mt-4 border border-green-400/20">
                <p className="font-bold text-white mb-3">Zaikron Next.js Website</p>
                <ul className="space-y-1">
                  <li>• LCP: 1.1 seconds (Good)</li>
                  <li>• FID: 45ms (Good)</li>
                  <li>• CLS: 0.05 (Good)</li>
                  <li>• Google PageSpeed Score: 94/100</li>
                </ul>
              </div>

              <p className="mt-4">
                This performance difference translates to <strong>3-5 higher ranking positions on Google</strong> and <strong>25-40% lower bounce rates</strong>. Users stay longer, engage more, and convert at higher rates on fast websites.
              </p>
            </div>

            {/* CHAPTER 4: E-COMMERCE REVOLUTION */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 4: The E-Commerce Revolution in Tier-2 Cities Like Aurangabad</h3>
              <p>
                Aurangabad is experiencing an <strong>e-commerce boom</strong> that's reshaping retail and service businesses. With the penetration of <strong>Jio 5G, affordable smartphones, and UPI payment infrastructure</strong>, more people in Tier-2 cities are buying online than ever before—creating unprecedented opportunities for local businesses with professional e-commerce websites.
              </p>

              <h4 className="text-xl font-bold text-purple-400 mt-6">4.1 The Local Delivery Competitive Advantage</h4>
              <p>
                E-commerce giants like <strong>Amazon, Flipkart, and Myntra</strong> take <strong>2-4 days to deliver</strong> to Aurangabad. A local Aurangabad business with its own e-commerce website can offer <strong>same-day delivery or next-day delivery</strong> within the city. This is a massive competitive advantage for local retailers in grocery, fashion, electronics, jewelry, home decor, and pharmacy sectors.
              </p>
              <p>
                <strong>Real case study:</strong> A fashion boutique in N-Town invested ₹45,000 in an e-commerce website with Zaikron. They offer same-day delivery within Aurangabad for orders placed before 2 PM. In 6 months, they captured 600+ online orders, generating ₹18,00,000 in revenue—competing directly with national brands by leveraging their local presence.
              </p>

              <h4 className="text-xl font-bold text-purple-400 mt-6">4.2 Hyperlocal Digital Marketing for Aurangabad Businesses</h4>
              <p>
                With a professional website, you can target <strong>Google Ads and Facebook Ads</strong> specifically to people in specific pin codes—431001 (Cidco), 431003 (Usmanpura), 431005 (MIDC Waluj), 431010 (N-Town). This reduces ad spend waste and increases conversion rates by 300-400%.
              </p>
              <p>
                <strong>Example campaign:</strong> A restaurant in Cannaught Place runs Google Ads targeting "food delivery near me" only to users within 5km radius. Cost per order: ₹45. Competitor using generic nationwide targeting: ₹180 per order. The local targeting strategy is 4x more cost-effective.
              </p>

              <h4 className="text-xl font-bold text-purple-400 mt-6">4.3 E-Commerce Features Essential for Aurangabad Businesses</h4>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Product Catalog:</strong> Unlimited products with multiple images, zoom functionality, size/color variants, stock management</li>
                <li><strong>Shopping Cart:</strong> Add to cart, wishlist, recently viewed, recommended products</li>
                <li><strong>Payment Integration:</strong> Razorpay (UPI, cards, wallets), PayPal (international), Cash on Delivery option</li>
                <li><strong>Order Management:</strong> Real-time order tracking, SMS/WhatsApp notifications, automated email confirmations</li>
                <li><strong>Customer Accounts:</strong> Order history, saved addresses, reorder functionality</li>
                <li><strong>Inventory System:</strong> Automatic stock updates, low stock alerts, variant management</li>
                <li><strong>Analytics Dashboard:</strong> Sales reports, top products, customer behavior, revenue trends</li>
              </ul>
              <p className="mt-4">
                <strong>Investment range:</strong> Basic e-commerce site (50 products): ₹40,000. Advanced e-commerce platform (500+ products): ₹75,000. Enterprise marketplace: ₹1,20,000+.
              </p>
            </div>

            {/* CHAPTER 5: MOBILE-FIRST INDEXING */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 5: Mobile-First Indexing & Why Your Mobile Website Determines Your Google Rankings</h3>
              <p>
                Since 2019, Google has used <strong>mobile-first indexing</strong> for all new websites. This means Google predominantly uses the <strong>mobile version of your content</strong> for indexing and ranking—not the desktop version. If your website looks great on desktop but breaks on mobile phones, Google will NOT rank you high, regardless of how good your desktop site is.
              </p>
              <p>
                <strong>The reality in Aurangabad:</strong> <strong>82% of all website traffic in India comes from mobile devices</strong> (smartphones and tablets). In Aurangabad specifically, mobile usage is even higher at 87% because many people access the internet primarily through smartphones, not laptops. Your mobile website IS your main website.
              </p>

              <h4 className="text-xl font-bold text-cyan-400 mt-6">5.1 Zaikron's Mobile-First Design Philosophy</h4>
              <p>
                We design for the <strong>smallest screen first</strong> (mobile phones), ensuring essential content, navigation, and call-to-action buttons are perfectly accessible on mobile. Then we scale up to tablet and desktop. This ensures the core user experience is optimized for the 87% of users on mobile devices.
              </p>
              <p>
                <strong>Mobile-first features in all Zaikron websites:</strong> Touch-optimized buttons (minimum 48x48px tap targets), readable text without zooming (16px base font size), thumb-friendly navigation at bottom, compressed images for fast mobile loading, mobile-optimized forms with appropriate input types, click-to-call phone buttons, WhatsApp chat integration.
              </p>

              <h4 className="text-xl font-bold text-cyan-400 mt-6">5.2 Common Mobile Website Mistakes in Aurangabad</h4>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Tiny text:</strong> 12px font size that requires zooming—Google penalizes this</li>
                <li><strong>Buttons too close together:</strong> Users accidentally tap wrong buttons—increases bounce rate</li>
                <li><strong>Horizontal scrolling:</strong> Content wider than screen—terrible mobile UX</li>
                <li><strong>Slow mobile load time:</strong> 5MB images that take 10 seconds to load on 4G</li>
                <li><strong>Intrusive popups:</strong> Full-screen popups that can't be closed on mobile—Google penalty</li>
                <li><strong>Desktop-only navigation:</strong> Hover menus that don't work on touch screens</li>
              </ul>
              <p className="mt-4">
                Every Zaikron website is tested on actual mobile devices (iPhone, Samsung, OnePlus, Xiaomi) to ensure flawless mobile experience across all popular smartphones in Aurangabad.
              </p>
            </div>

            {/* CHAPTER 6: AI & AUTOMATION */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 6: The Role of AI & Automation in Modern Websites (2025 & Beyond)</h3>
              <p>
                Artificial Intelligence is not just a buzzword—it's a practical tool we use to enhance user experience and automate customer service on modern websites. <strong>AI-powered features</strong> are becoming standard expectations for professional websites in Aurangabad's competitive digital market.
              </p>

              <h4 className="text-xl font-bold text-pink-400 mt-6">6.1 AI Chatbots for 24/7 Customer Support</h4>
              <p>
                <strong>AI chatbots</strong> powered by GPT-4 can handle customer queries 24/7—answering questions about pricing, services, business hours, booking appointments, and even processing simple orders. For Aurangabad businesses, this means capturing leads and customers even while you sleep.
              </p>
              <p>
                <strong>Real implementation:</strong> A dental clinic in Usmanpura uses an AI chatbot on their website. The chatbot answers 200+ questions per month about services ("How much does teeth whitening cost?", "Do you take insurance?", "Can I book emergency appointment?") and books 40+ appointments automatically. This freed up front desk staff and increased bookings by 35%.
              </p>

              <h4 className="text-xl font-bold text-pink-400 mt-6">6.2 AI-Powered Product Recommendations</h4>
              <p>
                E-commerce websites can use <strong>machine learning algorithms</strong> to analyze user behavior and recommend products they're most likely to buy—similar to Amazon's "You might also like" feature. This increases average order value by 25-40%.
              </p>

              <h4 className="text-xl font-bold text-pink-400 mt-6">6.3 Automated Email Marketing & Follow-ups</h4>
              <p>
                AI-driven email automation can send personalized follow-up emails based on user behavior: abandoned cart reminders, product recommendation emails, re-engagement campaigns for inactive customers, post-purchase thank you emails with review requests.
              </p>
              <p>
                <strong>ROI impact:</strong> Automated email campaigns generate ₹15-25 in revenue for every ₹1 spent—one of the highest ROI marketing channels for Aurangabad businesses.
              </p>

              <h4 className="text-xl font-bold text-pink-400 mt-6">6.4 AI-Assisted Content Generation for SEO</h4>
              <p>
                AI tools help generate SEO-friendly meta tags, product descriptions, and alt text for images at scale—saving 20-30 hours of manual work. However, human oversight and editing ensure content quality and brand voice consistency. We use AI as an assistant, not a replacement for human expertise.
              </p>
            </div>

            {/* CHAPTER 7: LEGAL COMPLIANCE */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 7: Legal Requirements & Compliance for Indian Websites in 2025</h3>
              <p>
                Operating a website in India comes with <strong>legal responsibilities under IT Act 2000 and related regulations</strong> that many Aurangabad business owners overlook. Non-compliance can result in fines, legal notices, and loss of customer trust.
              </p>

              <h4 className="text-xl font-bold text-red-400 mt-6">7.1 Privacy Policy (Mandatory)</h4>
              <p>
                If your website collects <strong>any user data</strong> (names, emails, phone numbers, addresses, payment information), the IT Act 2000 requires you to have a comprehensive <strong>Privacy Policy</strong> clearly stating how you collect, use, store, and protect that data.
              </p>
              <p>
                <strong>What your Privacy Policy must include:</strong> Data collection methods, purpose of data collection, data storage and security measures, third-party data sharing (if any), user rights (access, deletion, correction), contact information for privacy concerns, data retention periods, cookie usage disclosure.
              </p>

              <h4 className="text-xl font-bold text-red-400 mt-6">7.2 Terms & Conditions (Legal Protection)</h4>
              <p>
                Terms & Conditions limit your liability and set the rules for using your website. Essential for e-commerce websites to define return/refund policies, shipping terms, product warranties, dispute resolution procedures, and limitation of liability.
              </p>

              <h4 className="text-xl font-bold text-red-400 mt-6">7.3 HTTPS/SSL Certificate (Security Standard)</h4>
              <p>
                Not strictly a legal requirement but effectively mandatory. Modern browsers (Chrome, Firefox, Safari) mark HTTP websites as <strong>"Not Secure"</strong> with warning icons—scaring away customers. SSL certificates encrypt data transmission, protecting customer information during form submissions and payments.
              </p>
              <p>
                <strong>SEO impact:</strong> Google has confirmed HTTPS is a ranking signal. Websites with SSL certificates rank higher than identical HTTP websites. All Zaikron websites include free SSL certificates with automatic renewal.
              </p>

              <h4 className="text-xl font-bold text-red-400 mt-6">7.4 Accessibility Compliance (Growing Importance)</h4>
              <p>
                While India doesn't yet have strict accessibility laws like USA's ADA, making your website accessible to people with disabilities is both ethically right and expanding your potential customer base. <strong>Accessibility features</strong> include keyboard navigation support, screen reader compatibility, sufficient color contrast, alt text for images, and captioned videos.
              </p>
            </div>

            {/* CHAPTER 8: FUTURE TRENDS */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 8: Future-Proofing Your Business with PWA, Voice Search & Emerging Technologies</h3>
              
              <h4 className="text-xl font-bold text-indigo-400 mt-6">8.1 Progressive Web Apps (PWA) - The Future of Mobile Web</h4>
              <p>
                <strong>Progressive Web Apps</strong> are websites that act like mobile apps. They can be installed on phone home screens (like apps), work offline, send push notifications, and provide app-like smooth experiences—without requiring users to download from App Store or Play Store.
              </p>
              <p>
                <strong>Why PWAs matter for Aurangabad businesses:</strong> Internet connectivity can be spotty in some Aurangabad areas. PWAs cache essential content, allowing users to browse your product catalog even with poor connectivity. Push notifications re-engage customers with new offers, abandoned cart reminders, and order updates—increasing repeat purchases by 40-60%.
              </p>
              <p>
                <strong>PWA investment:</strong> Adding PWA functionality to an existing website costs ₹15,000-25,000. ROI: 30-50% increase in mobile conversions within 6 months.
              </p>

              <h4 className="text-xl font-bold text-indigo-400 mt-6">8.2 Voice Search Optimization for "Near Me" Searches</h4>
              <p>
                <strong>43% of Indians now use voice search</strong> on Google Assistant, Alexa, or Siri to find local businesses. Voice queries are different from typed queries—people say "Where's the best website developer near me?" instead of typing "website developer Aurangabad."
              </p>
              <p>
                <strong>Voice SEO strategies:</strong> Target conversational long-tail keywords, optimize for question-based queries ("How much does website development cost?"), claim and optimize Google My Business listing, earn featured snippet positions, ensure fast mobile page load speeds, implement local schema markup.
              </p>

              <h4 className="text-xl font-bold text-indigo-400 mt-6">8.3 Web3 & Blockchain for Secure Transactions</h4>
              <p>
                While still emerging, <strong>Web3 technologies</strong> offer new ways to handle digital identity, payments, and trust without intermediaries. Cryptocurrency payments, NFT galleries for artists, and blockchain-verified certificates for education platforms are becoming practical implementations in 2025.
              </p>
              <p>
                Zaikron stays updated on these trends to ensure our Aurangabad clients are never left behind as technology evolves. We architect websites with flexibility to integrate emerging technologies as they mature.
              </p>

              <h4 className="text-xl font-bold text-indigo-400 mt-6">8.4 Augmented Reality (AR) for Product Visualization</h4>
              <p>
                AR technology allows customers to <strong>"try before they buy"</strong> virtually. Furniture stores can let customers visualize how a sofa looks in their living room. Jewelry stores can offer virtual try-on of rings and necklaces. Fashion stores can show how clothes fit on the customer's body.
              </p>
              <p>
                While advanced AR features require significant investment (₹50,000+), basic AR integration (3D product viewers) is becoming affordable at ₹8,000-15,000—providing competitive differentiation for Aurangabad retailers.
              </p>
            </div>

            {/* CHAPTER 9: LOCAL SEO STRATEGIES */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 9: Dominating Local Search Results in Aurangabad with Advanced Local SEO</h3>
              <p>
                <strong>Local SEO</strong> is the most important digital marketing strategy for Aurangabad businesses. When someone searches "website developer near me" or "web design company in Aurangabad," you want YOUR business appearing at the top—not competitors in Mumbai or Delhi.
              </p>

              <h4 className="text-xl font-bold text-yellow-400 mt-6">9.1 Google My Business Optimization (The Foundation)</h4>
              <p>
                Your <strong>Google My Business profile</strong> determines whether you appear in the "Local Pack" (map results) at the top of Google search. Optimizing GMB involves:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Complete profile:</strong> Business name, address, phone (NAP), website URL, category, business hours, service areas</li>
                <li><strong>High-quality photos:</strong> Office exterior/interior, team photos, service photos, logo (minimum 10 photos)</li>
                <li><strong>Business description:</strong> 750 character description with target keywords naturally included</li>
                <li><strong>Regular posts:</strong> Weekly updates about services, offers, tips, case studies</li>
                <li><strong>Review management:</strong> Encourage reviews, respond to all reviews within 24 hours</li>
                <li><strong>Q&A section:</strong> Answer frequently asked questions proactively</li>
              </ul>
              <p className="mt-4">
                <strong>Real impact:</strong> A properly optimized GMB profile increases "Local Pack" visibility by 300-500%, generating 40-80 additional inquiries per month for Aurangabad businesses.
              </p>

              <h4 className="text-xl font-bold text-yellow-400 mt-6">9.2 NAP Consistency Across All Online Directories</h4>
              <p>
                <strong>NAP (Name, Address, Phone)</strong> must be 100% identical across your website, Google My Business, Facebook, LinkedIn, Justdial, Sulekha, and 20+ other directories. Even minor inconsistencies ("Aurangabad" vs "Chhatrapati Sambhajinagar" or "+91-9876543210" vs "9876543210") confuse Google and hurt rankings.
              </p>
              <p>
                We audit and fix NAP inconsistencies across 50+ directories for all Zaikron clients, establishing authoritative local presence for Aurangabad searches.
              </p>

              <h4 className="text-xl font-bold text-yellow-400 mt-6">9.3 Location-Specific Content Pages</h4>
              <p>
                Creating dedicated pages for different Aurangabad neighborhoods captures hyper-local search traffic:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>/services/web-development/usmanpura</li>
                <li>/services/web-development/midc-waluj</li>
                <li>/services/web-development/cidco</li>
                <li>/services/web-development/ntown</li>
                <li>/services/web-development/cantonment</li>
              </ul>
              <p className="mt-4">
                Each page includes neighborhood-specific content, local landmarks, case studies from that area, and embedded Google Maps. This targets searches like "website developer in MIDC Waluj" and "web design services near Cidco."
              </p>

              <h4 className="text-xl font-bold text-yellow-400 mt-6">9.4 Local Backlinks & Citations</h4>
              <p>
                Earning backlinks from local Aurangabad websites signals local authority to Google:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Aurangabad Chamber of Commerce directory</li>
                <li>MIDC Waluj association listings</li>
                <li>Local news websites (Lokmat, Sakal Digital)</li>
                <li>Aurangabad University collaborations</li>
                <li>Local business directories (Aurangabad Yellow Pages)</li>
                <li>Tourism websites (Ajanta-Ellora mentions)</li>
              </ul>
              <p className="mt-4">
                Building 20-30 high-quality local citations improves local search rankings by 5-8 positions within 60-90 days.
              </p>
            </div>

            {/* CHAPTER 10: CONVERSION OPTIMIZATION */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chapter 10: Conversion Rate Optimization - Turning Website Visitors into Paying Customers</h3>
              <p>
                Getting traffic to your website is only half the battle. <strong>Converting that traffic into leads and customers</strong> is where real business growth happens. Average website conversion rate in India is 1.5-2%. With proper conversion optimization, you can achieve 5-10% conversion rates—meaning 3-5x more customers from the same traffic.
              </p>

              <h4 className="text-xl font-bold text-teal-400 mt-6">10.1 Clear Value Proposition Above the Fold</h4>
              <p>
                Visitors decide whether to stay or leave within <strong>3 seconds</strong> of landing on your website. Your homepage must immediately communicate WHO you help, WHAT you do, and WHY they should choose you. This goes above the fold (visible without scrolling).
              </p>
              <p>
                <strong>Bad example:</strong> "Welcome to our website. We are a professional company offering quality services."<br/>
                <strong>Good example:</strong> "Website Development Company in Aurangabad | Get Your Business Online in 2 Weeks | ₹10,000 Starting Price | Free Consultation"
              </p>

              <h4 className="text-xl font-bold text-teal-400 mt-6">10.2 Strategic Call-to-Action (CTA) Placement</h4>
              <p>
                Every page needs a clear next step. <strong>Multiple CTAs</strong> strategically placed throughout long pages increase conversions by 30-60%:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Primary CTA above the fold: "Get Free Consultation"</li>
                <li>Secondary CTA after services section: "View Our Portfolio"</li>
                <li>Tertiary CTA after case studies: "Start Your Project"</li>
                <li>Sticky CTA button following scroll: "Call Now"</li>
                <li>Exit-intent popup: "Wait! Get 10% Discount"</li>
              </ul>

              <h4 className="text-xl font-bold text-teal-400 mt-6">10.3 Trust Signals & Social Proof</h4>
              <p>
                Aurangabad customers need reassurance before contacting unknown businesses online. <strong>Trust signals</strong> reduce perceived risk:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Client testimonials:</strong> Real names, photos, company names</li>
                <li><strong>Star ratings:</strong> "4.8★ rating from 150+ clients"</li>
                <li><strong>Case studies:</strong> Specific results with numbers</li>
                <li><strong>Portfolio:</strong> Previous work examples</li>
                <li><strong>Certifications:</strong> Google Partner, industry awards</li>
                <li><strong>Media mentions:</strong> Featured in Lokmat, Times of India</li>
                <li><strong>Client logos:</strong> Recognizable companies you've worked with</li>
              </ul>

              <h4 className="text-xl font-bold text-teal-400 mt-6">10.4 Simplified Contact Forms</h4>
              <p>
                Long contact forms with 10+ fields have 60% lower completion rates than short 3-4 field forms. Only ask for essential information: Name, Phone/Email, Service Interest, Message. Everything else can wait until follow-up conversation.
              </p>
              <p>
                <strong>Form optimization checklist:</strong> Auto-fill enabled, mobile-optimized inputs, clear error messages, success confirmation, optional fields marked clearly, submit button with action-oriented text ("Get My Free Quote" instead of "Submit").
              </p>

              <h4 className="text-xl font-bold text-teal-400 mt-6">10.5 WhatsApp Chat Integration</h4>
              <p>
                <strong>93% of Indians prefer WhatsApp</strong> over phone calls or email for business communication. Adding a WhatsApp chat button to your website increases inquiry rates by 40-80% because the barrier to contact is so low—one click and customers are chatting with you.
              </p>
              <p>
                All Zaikron websites include WhatsApp Business API integration with automated greeting messages, quick reply options, and chatbot for after-hours inquiries.
              </p>
            </div>

            {/* CONCLUSION & CTA */}
            <div className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 p-8 rounded-2xl border border-white/10 mt-12">
              <h4 className="text-2xl font-bold text-white mb-4">Your Next Step: Schedule a Free Website Consultation</h4>
              <p className="text-gray-300 mb-6">
                The best time to establish your digital presence was 5 years ago. The second best time is <strong>today</strong>. Every day you wait, competitors gain ground in Google rankings, capture market share, and build brand authority online.
              </p>
              <p className="text-gray-300 mb-6">
                Don't let another customer slip away to a competitor simply because they couldn't find you online. Professional <strong>website development in Aurangabad</strong> is no longer optional—it's the foundation of business growth in 2025 and beyond.
              </p>
              <p className="text-gray-300 mb-8">
                <strong>What happens in your free 30-minute consultation:</strong> We analyze your current online presence (or lack thereof), identify your biggest competitors in Aurangabad, discuss your business goals and target customers, outline a custom website strategy, provide transparent pricing for your specific needs, and answer all your questions—with zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform inline-block text-center">
                  Get Free Consultation Today
                </Link>
                <a href="tel:+919876543210" className="px-10 py-4 bg-white/10 border-2 border-orange-400 text-orange-400 font-bold text-lg rounded-xl hover:bg-orange-400 hover:text-black transition-all inline-block text-center">
                  Call Now: +91-9876543210
                </a>
              </div>
              <p className="text-gray-400 text-sm text-center mt-6">
                Serving businesses in Aurangabad, Chhatrapati Sambhajinagar, MIDC Waluj, Cidco, N-Town, Usmanpura, Cantonment, and across Maharashtra.
              </p>
            </div>

          </div>
        </section>


      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (Styled with Orange/Green/Purple Theme & Backdrop Blur) ---

function TOCItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
      <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
      {text}
    </li>
  );
}

function FeatureCard({ title, icon, color, desc }: any) {
  const colorMap: Record<string, string> = {
    red: "text-red-400 bg-red-900/20 border-red-500/30",
    green: "text-green-400 bg-green-900/20 border-green-500/30",
    orange: "text-orange-400 bg-orange-900/20 border-orange-500/30",
    purple: "text-purple-400 bg-purple-900/20 border-purple-500/30",
  };

  const colorClasses = colorMap[color] || colorMap.orange; 
  const [textClass, bgClass, borderClass] = colorClasses.split(" ");

  return (
    <div className={`p-6 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-md border ${borderClass}`}>
      <div className={`p-3 rounded-xl w-fit mb-4 ${textClass} ${bgClass}`}>{icon}</div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, desc, price, color, icon }: any) {
  const colorMap: Record<string, { border: string; text: string }> = {
    red: { border: 'hover:border-red-500/50', text: 'text-red-400' },
    green: { border: 'hover:border-green-500/50', text: 'text-green-400' },
    orange: { border: 'hover:border-orange-500/50', text: 'text-orange-400' },
    purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400' },
  };

  const { border, text } = colorMap[color] || colorMap.orange;

  return (
    <div className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 ${border} transition-colors group backdrop-blur-md`}>
      <div className="mb-4 text-white opacity-80">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      <div className={`text-lg font-bold ${text}`}>{price}</div>
    </div>
  );
}

function ProcessStep({ num, title, desc }: any) {
  return (
    <div className="flex gap-6 relative z-10 pl-6 md:pl-10">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#050505] border border-orange-500/50 flex items-center justify-center font-bold text-orange-400 shadow-xl absolute left-0 md:left-4 -translate-x-1/2">
        {num}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function PricingCard({ title, price, desc, features, color, popular }: any) {
  const colorMap: Record<string, string> = {
    red: 'text-red-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
    gray: 'text-gray-200'
  };

  const border = popular ? 'border-orange-500 bg-orange-900/10 scale-105 shadow-2xl shadow-orange-900/20' : 'border-white/10 bg-white/5';
  const btnColor = popular ? 'bg-orange-500 text-black hover:bg-orange-400' : 'bg-white/10 text-white hover:bg-white/20';
  const textColor = colorMap[color] || 'text-gray-200';

  return (
    <div className={`p-8 rounded-[2rem] border ${border} relative flex flex-col backdrop-blur-md`}>
      {popular && <div className="absolute top-0 right-0 bg-orange-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-[1.8rem]">POPULAR</div>}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6">{desc}</p>
      <div className={`text-3xl font-bold ${textColor} mb-8`}>₹{price}</div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 text-sm text-gray-300">
            <Check size={16} className={`shrink-0 mt-0.5 ${textColor}`}/> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`block w-full py-3 font-bold text-center rounded-xl transition-colors ${btnColor}`}>Choose Plan</Link>
    </div>
  );
}

function ReasonItem({ title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="mt-1"><CheckCircle2 className="text-green-400" size={24}/></div>
      <div>
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function TechBadge({ name, color }: any) {
  const colorMap: Record<string, string> = {
    red: "border-red-500/30 text-red-300 hover:bg-red-500/10",
    green: "border-green-500/30 text-green-300 hover:bg-green-500/10",
    orange: "border-orange-500/30 text-orange-300 hover:bg-orange-500/10",
    purple: "border-purple-500/30 text-purple-300 hover:bg-purple-500/10",
  };
  
  const classes = colorMap[color] || colorMap.orange;

  return (
    <span className={`px-6 py-3 rounded-xl bg-white/5 border ${classes} font-mono transition-colors cursor-default backdrop-blur-sm`}>
      {name}
    </span>
  );
}

function CaseStudy({ title, client, desc, color }: any) {
  const colorMap: Record<string, { border: string; text: string }> = {
    red: { border: 'hover:border-red-500/50', text: 'text-red-400' },
    green: { border: 'hover:border-green-500/50', text: 'text-green-400' },
    orange: { border: 'hover:border-orange-500/50', text: 'text-orange-400' },
    purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400' },
  };

  const { border, text } = colorMap[color] || colorMap.orange;
  
  return (
    <div className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 ${border} transition-colors backdrop-blur-md`}>
      <span className={`text-xs font-bold ${text} uppercase tracking-widest`}>{client}</span>
      <h3 className="text-2xl font-bold text-white mt-2 mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-md">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 text-left font-bold text-white flex justify-between items-center hover:text-orange-400 transition-colors">
        {q}
        <ArrowRight size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-orange-400' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: "auto" }} 
            exit={{ height: 0 }} 
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/10">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}