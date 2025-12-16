'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { 
  Code2, Smartphone, Rocket, ShieldCheck, Database, Layout, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Globe, 
  Cpu, Layers, Zap, X, ChevronDown, User, Monitor, Search, CheckCircle2, TrendingUp, Anchor, Server, Lock, HelpCircle 
} from 'lucide-react';

export default function WebDevContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax Background (Deep Ether Theme)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div ref={containerRef} className="relative bg-[#04090b] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- BACKGROUND FX: DEEP ETHER (Teal & Amber) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1: The Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020406] via-[#050a0f] to-[#020406]"></div>

        {/* Layer 2: The Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Layer 3: Moving Aurora Orbs (Teal & Amber) */}
        <motion.div style={{ y: yBackground }} className="absolute top-[-20%] right-[-5%] w-[1000px] h-[1000px] bg-teal-900/20 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-pulse" />
        <motion.div style={{ y: yBackground }} className="absolute top-[40%] left-[-20%] w-[1200px] h-[1200px] bg-amber-900/10 rounded-full blur-[180px] mix-blend-screen opacity-30" />
        
        {/* Layer 4: Noise Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-900/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]"></span>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">#1 Web Agency Aurangabad</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Web Development Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-amber-400">Aurangabad</span> <br/>
              <span className="text-3xl md:text-5xl text-gray-400 font-normal">Custom Websites ₹10K+</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We build fast, secure, and SEO-optimized websites for businesses in <strong>Chhatrapati Sambhajinagar</strong>. Transform your local business into a global brand with Zaikron.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 hover:bg-teal-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link href="#pricing" className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                View Pricing <Layout size={20} />
              </Link>
            </div>

            {/* NAP BLOCK */}
            <div className="p-6 rounded-2xl bg-[#080c10]/80 border border-white/10 backdrop-blur-md shadow-lg">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">Visit Our Office</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="text-amber-400 shrink-0" size={18} />
                  <p>Costa Mapal, Peer Bazar Rd, New Usmanpura, <strong>Aurangabad, Maharashtra 431005</strong></p>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="text-amber-400 shrink-0" size={18} />
                  <p>+91 97304 16763</p>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="text-amber-400 shrink-0" size={18} />
                  <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-amber-500/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative p-10 rounded-[3rem] bg-[#0c1218]/90 border border-white/10 shadow-2xl overflow-hidden group backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.1),transparent_50%)]"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why Your Business Needs a Website?</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Rank #1 on Google for 'Services in Aurangabad'",
                  "Build Trust with Professional Design",
                  "Automate Sales 24/7",
                  "Beat Local Competitors in Sambhajinagar",
                  "Showcase Products to Global Audience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-teal-400 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <p className="text-sm text-gray-400 mb-2">Trusted by 50+ Local Brands:</p>
                <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                  <span className="font-bold text-teal-200">Ashoka Tours</span>
                  <span className="font-bold text-amber-200">Sanjari Agro</span>
                  <span className="font-bold text-teal-200">TechVerse</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================= SERVICE OVERVIEW (With SEO LSI Headers) ================= */}
        <section className="mb-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-white mb-6">World-Class Web Development in Chhatrapati Sambhajinagar</h2>
            <p className="text-gray-300">
              In today's digital-first economy, a website is not just a digital business card; it is the engine of your business growth. At <strong>Zaikron</strong>, we understand that businesses in <strong>Aurangabad (Chhatrapati Sambhajinagar)</strong> face unique challenges.
            </p>
            
            {/* LSI HEADER 1 */}
            <h3 className="text-2xl font-bold text-amber-400 mt-8">Best Website Developer in Aurangabad</h3>
            <p className="text-gray-300">
              We provide <strong>custom web development services</strong> tailored to the specific needs of the Marathwada region. Whether you are a manufacturing unit in <strong>MIDC Waluj</strong> needing a B2B catalog, a coaching class on <strong>Beed Bypass</strong> requiring a student portal, or a boutique in <strong>City Chowk</strong> wanting to sell sarees online, we have the expertise to build it.
            </p>
            
            {/* LSI HEADER 2 */}
            <h3 className="text-2xl font-bold text-teal-400 mt-8">Responsive Web Design & SEO Optimization</h3>
            <p className="text-gray-300">
              Our websites are built on the principles of <strong>Speed, Security, and Scalability</strong>. We don't use slow, pre-made templates that get hacked easily. We hand-code your site using <strong>Next.js and React</strong>, ensuring it loads in under 2 seconds even on slow mobile networks. This "Performance-First" approach is why Zaikron clients consistently rank on the first page of Google for keywords like <em>"Best Service in Aurangabad"</em>.
            </p>

            <div className="my-8 p-6 bg-teal-900/10 border-l-4 border-amber-500 rounded-r-xl">
              <h4 className="text-white font-bold m-0">Did You Know?</h4>
              <p className="m-0 text-gray-300">
                80% of customers in Aurangabad search on Google Maps or Search before visiting a store. If you don't have a website, you are losing these customers to your competitors.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <ServiceHighlight title="Custom Development" icon={<Code2 />} desc="Tailor-made solutions, no templates." color="teal" />
            <ServiceHighlight title="E-Commerce Ready" icon={<Layout />} desc="Sell products online 24/7." color="amber" />
            <ServiceHighlight title="SEO Optimized" icon={<Search />} desc="Rank higher on Google." color="teal" />
            <ServiceHighlight title="Mobile First" icon={<Smartphone />} desc="Perfect on every device." color="amber" />
          </div>
        </section>

        {/* ================= MISSING SECTION 1: AGENCY VS FREELANCER (Deep Ether Style) ================= */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#080c10] border border-teal-500/20 p-10 rounded-[2rem]">
            <h3 className="text-3xl font-bold text-white mb-6">Agency vs Freelancer: Why Aurangabad Businesses Choose Zaikron</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              When searching for a <strong>website maker in Aurangabad</strong>, you might be tempted to hire a freelancer to save money. However, a business website is a long-term asset. Freelancers often lack full-stack expertise or disappear when you need support. Zaikron offers the stability of an agency with competitive pricing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400"><ShieldCheck size={20}/></div>
                <div>
                  <h4 className="text-white font-bold">Reliability & AMC</h4>
                  <p className="text-sm text-gray-400">We sign legal contracts. Guaranteed support post-launch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400"><User size={20}/></div>
                <div>
                  <h4 className="text-white font-bold">Full-Stack Team</h4>
                  <p className="text-sm text-gray-400">Designers, Developers, and SEO experts under one roof.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><X size={20}/></div>
                <div>
                  <h4 className="text-gray-300 font-bold">Freelancer Risks</h4>
                  <p className="text-sm text-gray-500">Missed deadlines, no SEO knowledge, generic templates.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Make the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Right Choice</span></h3>
            <p className="text-gray-400 text-lg mb-8">
              Your website is your 24/7 salesperson. Don't compromise on quality. Partner with a <strong>professional web development company</strong> that understands the local market dynamics of Chhatrapati Sambhajinagar.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-white transition-colors border-b border-amber-400 hover:border-white pb-1">
              Consult Our Experts <ArrowRight size={20}/>
            </Link>
          </div>
        </section>

        {/* ================= MISSING SECTION 2: NEXT.JS VS WORDPRESS (Deep Ether Style) ================= */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Next.js vs WordPress: Which Should You Choose?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer both, but for modern businesses in Aurangabad focusing on growth and SEO, the choice is clear.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WordPress Card */}
            <div className="bg-[#0c1218] border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl text-gray-400"><Layers size={24}/></div>
                <h3 className="text-2xl font-bold text-white">WordPress / PHP</h3>
              </div>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3"><Check size={18} className="text-teal-500 shrink-0"/> Good for simple blogs</li>
                <li className="flex gap-3"><Check size={18} className="text-teal-500 shrink-0"/> Easy for beginners</li>
                <li className="flex gap-3"><X size={18} className="text-red-500 shrink-0"/> Slower page speeds (Plugins)</li>
                <li className="flex gap-3"><X size={18} className="text-red-500 shrink-0"/> Vulnerable to hacking</li>
              </ul>
            </div>

            {/* Next.js Card */}
            <div className="bg-teal-900/10 border border-teal-500/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-600 text-black text-xs font-bold px-4 py-1 rounded-bl-xl">ZAIKRON RECOMMENDS</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400"><Zap size={24}/></div>
                <h3 className="text-2xl font-bold text-white">Next.js (Custom Code)</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-teal-400 shrink-0"/> Blazing fast (Static Generation)</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-teal-400 shrink-0"/> Google Loves it (Higher SEO Rank)</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-teal-400 shrink-0"/> Unhackable (Secure Architecture)</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-teal-400 shrink-0"/> 100% Custom Design Freedom</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= MISSING SECTION 3: COST COMPARISON TABLE ================= */}
        <section className="mb-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Website Cost: 10K vs 30K vs 100K</h3>
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#080c10]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-gray-400 font-medium uppercase tracking-wider">Features</th>
                  <th className="p-6 text-white font-bold text-lg">Basic (₹10K)</th>
                  <th className="p-6 text-teal-400 font-bold text-lg bg-teal-900/10 border-x border-white/10">Professional (₹30K)</th>
                  <th className="p-6 text-white font-bold text-lg">Enterprise (₹100K+)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold text-white">Technology</td>
                  <td className="p-6">HTML/CSS/Template</td>
                  <td className="p-6 text-teal-300 bg-teal-900/5 border-x border-white/5">Next.js / React</td>
                  <td className="p-6">Full Stack (MERN/Python)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold text-white">Pages</td>
                  <td className="p-6">Up to 5 Pages</td>
                  <td className="p-6 text-teal-300 bg-teal-900/5 border-x border-white/5">10-15 Pages + Blog</td>
                  <td className="p-6">Unlimited / Custom</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold text-white">SEO Setup</td>
                  <td className="p-6">Basic Meta Tags</td>
                  <td className="p-6 text-teal-300 bg-teal-900/5 border-x border-white/5">Advanced Schema + Local</td>
                  <td className="p-6">Programmatic SEO</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-white">Support</td>
                  <td className="p-6">1 Month</td>
                  <td className="p-6 text-teal-300 bg-teal-900/5 border-x border-white/5">6 Months Priority</td>
                  <td className="p-6">1 Year Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">* Prices are indicative for the Aurangabad market and may vary based on specific requirements.</p>
        </section>

        {/* ================= PRICING TABLE (Existing) ================= */}
        <section id="pricing" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing Packages</h2>
            <p className="text-gray-400">Honest pricing for Aurangabad businesses. No hidden fees.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Startup / Personal"
              price="10,000"
              features={["5 Page Static Website", "Mobile Responsive", "Contact Form", "Social Media Links", "1 Month Support"]}
              cta="Choose Startup"
              highlight={false}
              color="teal"
            />
            <PricingCard 
              title="Business Growth"
              price="25,000"
              features={["10 Page Dynamic Website", "Admin Panel (CMS)", "SEO Optimization", "Google Map Integration", "3 Months Support"]}
              cta="Choose Business"
              highlight={true}
              color="amber"
            />
            <PricingCard 
              title="E-Commerce / Custom"
              price="50,000"
              features={["Unlimited Products", "Payment Gateway", "User Login/Signup", "Order Management", "6 Months Support"]}
              cta="Choose E-Commerce"
              highlight={false}
              color="teal"
            />
          </div>
        </section>

        {/* ================= COMPARISON TABLE (Existing "Feature Battle") ================= */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Feature Battle: Custom vs Builders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="p-4 rounded-tl-xl">Feature</th>
                  <th className="p-4 text-teal-400 font-bold border-x border-white/10">Zaikron Custom Dev</th>
                  <th className="p-4 border-r border-white/10">WordPress/Wix</th>
                  <th className="p-4 rounded-tr-xl">DIY Builders</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10 bg-white/5">
                  <td className="p-4 font-bold">Page Speed</td>
                  <td className="p-4 text-amber-400 border-x border-white/10">Google Score 95+ (Instant)</td>
                  <td className="p-4">Slow (Plugins Bloat)</td>
                  <td className="p-4">Very Slow</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-bold">Security</td>
                  <td className="p-4 text-amber-400 border-x border-white/10">Un-hackable (Static/SSG)</td>
                  <td className="p-4">Vulnerable to Hacks</td>
                  <td className="p-4">Shared Hosting Risks</td>
                </tr>
                <tr className="border-b border-white/10 bg-white/5">
                  <td className="p-4 font-bold">SEO Ranking</td>
                  <td className="p-4 text-amber-400 border-x border-white/10">Schema + Semantic HTML</td>
                  <td className="p-4">Requires Plugins</td>
                  <td className="p-4">Limited Control</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-bold">Customization</td>
                  <td className="p-4 text-amber-400 border-x border-white/10">100% Flexible</td>
                  <td className="p-4">Restricted by Theme</td>
                  <td className="p-4">Very Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= PROCESS TIMELINE ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Development Roadmap</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-500 before:to-transparent">
            <TimelineItem 
              step="01" 
              title="Discovery & Strategy (Week 1)" 
              desc="We meet in Aurangabad (or Zoom) to understand your business goals, target audience, and competitors."
              align="left"
            />
            <TimelineItem 
              step="02" 
              title="UI/UX Design (Week 2)" 
              desc="Our designers create wireframes and high-fidelity mockups tailored to your brand identity."
              align="right"
            />
            <TimelineItem 
              step="03" 
              title="Development (Week 3-4)" 
              desc="Coding begins using Next.js and Node.js. We build the frontend, backend, and database."
              align="left"
            />
            <TimelineItem 
              step="04" 
              title="Testing & SEO (Week 5)" 
              desc="Rigorous testing for mobile responsiveness. Implementation of SEO meta tags and schema markup."
              align="right"
            />
            <TimelineItem 
              step="05" 
              title="Launch & Handover (Week 6)" 
              desc="We deploy your site to a live server, connect your domain, and train you on how to use the admin panel."
              align="left"
            />
          </div>
        </section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Tech Stack Expertise</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <TechBadge name="Next.js" icon={<Globe />} color="teal" />
            <TechBadge name="React.js" icon={<Code2 />} color="amber" />
            <TechBadge name="Node.js" icon={<Cpu />} color="teal" />
            <TechBadge name="PostgreSQL" icon={<Database />} color="amber" />
            <TechBadge name="Tailwind CSS" icon={<Layout />} color="teal" />
            <TechBadge name="AWS Cloud" icon={<Zap />} color="amber" />
          </div>
        </section>

        {/* ================= CASE STUDIES ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Tourist Aurangabad" 
              cat="Travel & Tourism" 
              desc="A high-conversion booking website for Ajanta Ellora tours."
              link="/work"
              color="teal"
            />
            <ProjectCard 
              title="LookBass Music" 
              cat="Entertainment" 
              desc="Music distribution platform with Spotify API integration."
              link="/work"
              color="amber"
            />
            <ProjectCard 
              title="Sanjari Agro" 
              cat="Manufacturing" 
              desc="Corporate B2B website for an animal feed manufacturer."
              link="/work"
              color="teal"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/work" className="text-teal-400 font-bold hover:underline flex items-center justify-center gap-2">
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ================= FAQ WITH PEOPLE ALSO ASK (Updated) ================= */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How much does a website cost in Aurangabad?" answer="Basic static websites start at ₹10,000. Dynamic business websites with admin panels range from ₹25,000 to ₹40,000. E-commerce platforms start at ₹50,000 depending on features." />
            <FAQItem question="What's the best website builder for small businesses?" answer="While builders like Wix exist, we recommend custom development or professional WordPress setups for better SEO and speed. Custom sites rank higher on Google in the long run." />
            <FAQItem question="Do you offer free website consultations?" answer="Yes, Zaikron offers a free initial consultation and digital audit for businesses in Aurangabad. We analyze your potential before you spend a rupee." />
            <FAQItem question="How long does it take to rank on Google?" answer="SEO is a long-term strategy. Typically, you can expect initial ranking improvements within 3-4 months, with significant traffic growth occurring between 6-12 months." />
            <FAQItem question="Do you provide hosting and domain services?" answer="Yes, we can manage domain registration and server hosting (AWS/DigitalOcean) for you, ensuring your site is always online and secure." />
            <FAQItem question="Can I update the website content myself?" answer="Absolutely. We build custom Admin Panels (CMS) that allow you to easily update text, images, and products without writing a single line of code." />
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial 
              name="Ashok Kadam" 
              role="Owner, Ashoka Tours" 
              text="Zaikron transformed our business. We now rank #1 for 'Aurangabad Tour Operator' and get leads daily from the website."
            />
            <Testimonial 
              name="Shubham Pawar" 
              role="Owner, TechVerse" 
              text="Professional, fast, and affordable. They understood our IT service needs perfectly. Highly recommended for local businesses."
            />
          </div>
        </section>

        {/* ================= FINAL CTA FUNNEL ================= */}
        <div className="text-center p-12 rounded-[3rem] bg-gradient-to-r from-teal-900/40 to-amber-900/40 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let your competitors take your customers. Get a professional website today and start ranking on Google.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform">
              Start Project Now
            </Link>
            <a href="tel:+919730416763" className="px-10 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ServiceHighlight({ title, icon, desc, color }: any) {
  return (
    <div className={`p-6 rounded-2xl bg-${color}-950/20 border border-${color}-500/20 hover:border-${color}-500/50 transition-colors`}>
      <div className={`text-${color}-400 mb-3`}>{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, features, cta, highlight, color }: any) {
  const borderColor = highlight ? `border-${color}-500 bg-${color}-900/10` : 'border-white/10 bg-white/5';
  const textColor = highlight ? `text-${color}-400` : 'text-teal-300';
  const btnColor = highlight ? `bg-${color}-500 text-white hover:bg-white hover:text-black` : 'bg-white/10 text-white hover:bg-white/20';

  return (
    <div className={`p-8 rounded-3xl border ${borderColor} flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className={`text-3xl font-bold ${textColor} mb-6`}>₹{price}<span className="text-sm text-gray-500 font-normal">+</span></div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <Check size={16} className="text-green-400" /> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`w-full py-3 rounded-xl font-bold text-center transition-all ${btnColor}`}>
        {cta}
      </Link>
    </div>
  );
}

function TimelineItem({ step, title, desc, align }: any) {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#081216] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-amber-400 font-bold font-mono">
        {step}
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function TechBadge({ name, icon, color }: any) {
  return (
    <div className={`flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-${color}-500/50 hover:bg-${color}-500/10 transition-colors`}>
      <div className={`text-${color}-400`}>{icon}</div>
      <span className="text-white font-bold">{name}</span>
    </div>
  );
}

function ProjectCard({ title, cat, desc, link, color }: any) {
  return (
    <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-${color}-500/30 hover:-translate-y-2 transition-transform duration-300 group`}>
      <div className={`mb-4 p-3 bg-${color}-500/10 w-fit rounded-xl text-${color}-400`}>
        <Layout size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className={`text-xs font-mono text-${color}-400 mb-4 uppercase`}>{cat}</p>
      <p className="text-gray-400 text-sm mb-6">{desc}</p>
      <Link href={link} className={`text-white font-bold text-sm flex items-center gap-2 group-hover:text-${color}-400 transition-colors`}>
        View Case Study <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function Testimonial({ name, role, text }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
      <div className="flex gap-1 mb-4 text-amber-400">
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </div>
      <p className="text-gray-300 mb-6 italic">"{text}"</p>
      <div>
        <p className="text-white font-bold">{name}</p>
        <p className="text-xs text-gray-500 uppercase">{role}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left text-white font-bold hover:bg-white/5 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}