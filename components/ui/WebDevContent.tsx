'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, Smartphone, Rocket, ShieldCheck, Database, Layout, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Globe, 
  Cpu, Layers, Zap, X, ChevronDown, User, Monitor, Search, CheckCircle2, TrendingUp, Anchor, Server, Lock 
} from 'lucide-react';

export default function WebDevContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax Background Speed
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative bg-[#04090b] overflow-hidden min-h-screen">
      
      {/* --- BACKGROUND ENGINE: DEEP ETHER --- */}
      <div className="absolute inset-0 pointer-events-none fixed">
        {/* Base Layer */}
        <div className="absolute inset-0 bg-[#04090b]"></div>
        
        {/* Animated Orbs */}
        <motion.div style={{ y: yOrb }} className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        <motion.div style={{ y: yOrb }} className="absolute top-[30%] left-[-10%] w-[1000px] h-[1000px] bg-amber-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a605_1px,transparent_1px),linear-gradient(to_bottom,#14b8a605_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">

        {/* ================= 1. HERO SECTION (Centered Impact) ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-teal-500/30 bg-teal-900/10 backdrop-blur-md mb-8"
            >
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-75"></span>
              </div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-[0.2em]">#1 Web Agency Aurangabad</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-display font-bold text-white leading-[1] mb-8 tracking-tight"
            >
              Web Development Services <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-amber-500">Aurangabad</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed"
            >
              Custom Websites <span className="text-amber-400 font-bold">₹10K+</span>. We build fast, secure, and SEO-optimized websites for businesses in <strong>Chhatrapati Sambhajinagar</strong>. Transform your local business into a global brand.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 mb-16"
            >
              <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-xl rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] transition-all flex items-center justify-center gap-3">
                Get Free Quote <ArrowRight size={22} />
              </Link>
              <Link href="#pricing" className="px-10 py-5 border border-white/10 bg-white/5 text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                View Pricing <Layout size={22} />
              </Link>
            </motion.div>

            {/* NAP Glass Console */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-4xl p-1 rounded-3xl bg-gradient-to-r from-teal-500/20 via-transparent to-amber-500/20"
            >
              <div className="bg-[#080c10]/90 backdrop-blur-xl rounded-[1.3rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base border border-white/5">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-teal-500/10 rounded-full text-teal-400"><MapPin size={20} /></div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Visit Us</p>
                    <p>Usmanpura, <strong>Aurangabad 431005</strong></p>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-400"><Phone size={20} /></div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Call Now</p>
                    <p>+91 97304 16763</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-400"><Clock size={20} /></div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Hours</p>
                    <p>Mon - Sat: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= 2. SERVICE OVERVIEW (Sticky Magazine Layout) ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-40">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content (Scrolls) */}
            <div className="lg:col-span-7 prose prose-invert prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                World-Class Web Development in <span className="text-teal-400">Chhatrapati Sambhajinagar</span>
              </h2>
              
              <div className="text-gray-300 space-y-6">
                <p>
                  In today's digital-first economy, a website is not just a digital business card; it is the engine of your business growth. At <strong>Zaikron</strong>, we understand that businesses in <strong>Aurangabad (Chhatrapati Sambhajinagar)</strong> face unique challenges. You need to compete not just with the shop next door in Nirala Bazaar or Cannaught Place, but with global competitors online.
                </p>
                <p>
                  We provide <strong>custom web development services</strong> tailored to the specific needs of the Marathwada region. Whether you are a manufacturing unit in <strong>MIDC Waluj</strong> needing a B2B catalog, a coaching class on <strong>Beed Bypass</strong> requiring a student portal, or a boutique in <strong>City Chowk</strong> wanting to sell sarees online, we have the expertise to build it.
                </p>
                
                <h3 className="text-2xl font-bold text-amber-400 mt-12">Why Performance Matters in 2025</h3>
                <p>
                  Google's Core Web Vitals update has changed the game. A slow website is a dead website. Most users in Maharashtra browse on mobile devices via 4G/5G networks. If your site takes more than 3 seconds to load, 53% of visitors will leave.
                </p>
                <p>
                  This is why <strong>Zaikron uses Next.js and React</strong>—the same technology used by Netflix and Facebook. We deliver <strong>Static Site Generation (SSG)</strong> which makes your website load instantly. Unlike WordPress sites that can get bloated with plugins and vulnerable to hacking, our custom-coded solutions are secure, scalable, and lightning-fast. This technical superiority is the primary reason our clients rank #1 for keywords like <em>"Best Service in Aurangabad"</em>.
                </p>

                <div className="p-8 my-8 bg-gradient-to-r from-teal-900/30 to-amber-900/30 border border-white/10 rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                    <Rocket className="text-amber-400"/> Did You Know?
                  </h4>
                  <p className="m-0 text-gray-200 text-base">
                    80% of customers in Aurangabad search on Google Maps or Search before visiting a physical store. A custom website by Zaikron acts as your 24/7 digital salesperson, capturing these leads while you sleep.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-teal-400 mt-12">Local SEO Dominance</h3>
                <p>
                  Building a beautiful website is only half the battle. People need to find it. Our development process includes a foundational <strong>Local SEO Strategy</strong>. We optimize your Google My Business profile, ensure consistent NAP (Name, Address, Phone) citations across directories, and structure your website's data using <strong>Schema Markup</strong>. This tells search engines exactly where you are located (Usmanpura, Aurangabad) and what you do, drastically increasing your chances of appearing in the "Local Pack" (Map results).
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar (Visuals) */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <ServiceHighlight 
                  title="Custom Development" 
                  desc="Tailor-made solutions, no templates. Unique brand identity." 
                  icon={<Code2 className="w-6 h-6"/>} 
                  color="teal" 
                />
                <ServiceHighlight 
                  title="E-Commerce Ready" 
                  desc="Sell products online 24/7 with secure payment gateways." 
                  icon={<Layout className="w-6 h-6"/>} 
                  color="amber" 
                />
                <ServiceHighlight 
                  title="SEO Optimized" 
                  desc="Rank higher on Google with semantic HTML structure." 
                  icon={<Search className="w-6 h-6"/>} 
                  color="teal" 
                />
                <ServiceHighlight 
                  title="Mobile First" 
                  desc="Perfect experience on every device size." 
                  icon={<Smartphone className="w-6 h-6"/>} 
                  color="amber" 
                />
                
                <div className="p-8 rounded-3xl bg-[#080c10] border border-white/10 mt-8">
                  <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind'].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 3. PRICING (Interactive Cards) ================= */}
        <section id="pricing" className="container mx-auto px-4 md:px-8 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Honest pricing for Aurangabad businesses. No hidden fees. Choose the package that fits your growth stage.</p>
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

        {/* ================= 4. COMPARISON (Grid Battle Layout) ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-40">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Why Choose Custom Web Dev vs. WordPress?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {/* Headers */}
            <div className="bg-[#080c10] p-6 flex items-center justify-center font-bold text-gray-500">Feature</div>
            <div className="bg-[#0a1518] p-6 flex items-center justify-center font-bold text-teal-400 text-lg">Zaikron Custom</div>
            <div className="bg-[#080c10] p-6 flex items-center justify-center font-bold text-white">WordPress/Wix</div>
            <div className="bg-[#080c10] p-6 flex items-center justify-center font-bold text-gray-500">DIY Builders</div>

            {/* Row 1 */}
            <div className="bg-[#080c10] p-6 font-semibold text-white flex items-center">Page Speed</div>
            <div className="bg-[#0a1518] p-6 text-center text-teal-300 font-bold border-l-4 border-teal-500">Google Score 95+ <br/><span className="text-xs font-normal opacity-70">(Instant Load)</span></div>
            <div className="bg-[#080c10] p-6 text-center text-gray-400">Slow <br/><span className="text-xs opacity-50">(Plugin Bloat)</span></div>
            <div className="bg-[#080c10] p-6 text-center text-gray-600">Very Slow</div>

            {/* Row 2 */}
            <div className="bg-[#080c10] p-6 font-semibold text-white flex items-center">Security</div>
            <div className="bg-[#0a1518] p-6 text-center text-teal-300 font-bold border-l-4 border-teal-500">Un-hackable <br/><span className="text-xs font-normal opacity-70">(Static/SSG)</span></div>
            <div className="bg-[#080c10] p-6 text-center text-gray-400">Vulnerable <br/><span className="text-xs opacity-50">(Frequent Hacks)</span></div>
            <div className="bg-[#080c10] p-6 text-center text-gray-600">Shared Risks</div>

            {/* Row 3 */}
            <div className="bg-[#080c10] p-6 font-semibold text-white flex items-center">SEO Ranking</div>
            <div className="bg-[#0a1518] p-6 text-center text-teal-300 font-bold border-l-4 border-teal-500">Schema + Semantic <br/><span className="text-xs font-normal opacity-70">(Native Code)</span></div>
            <div className="bg-[#080c10] p-6 text-center text-gray-400">Requires Plugins</div>
            <div className="bg-[#080c10] p-6 text-center text-gray-600">Limited Control</div>

            {/* Row 4 */}
            <div className="bg-[#080c10] p-6 font-semibold text-white flex items-center">Customization</div>
            <div className="bg-[#0a1518] p-6 text-center text-teal-300 font-bold border-l-4 border-teal-500">100% Flexible</div>
            <div className="bg-[#080c10] p-6 text-center text-gray-400">Restricted by Theme</div>
            <div className="bg-[#080c10] p-6 text-center text-gray-600">Very Limited</div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Get A Custom Website Now
            </Link>
          </div>
        </section>

        {/* ================= 5. TIMELINE (Snake Path) ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-40">
          <h2 className="text-4xl font-bold text-white mb-20 text-center">Development Roadmap</h2>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-amber-500 to-teal-500 md:-translate-x-1/2 opacity-30"></div>
            
            <div className="space-y-16">
              <TimelineItem 
                step="01" 
                title="Discovery & Strategy (Week 1)" 
                desc="We meet in Aurangabad (or Zoom) to understand your business goals, target audience, and competitors."
                side="left"
              />
              <TimelineItem 
                step="02" 
                title="UI/UX Design (Week 2)" 
                desc="Our designers create wireframes and high-fidelity mockups tailored to your brand identity."
                side="right"
              />
              <TimelineItem 
                step="03" 
                title="Development (Week 3-4)" 
                desc="Coding begins using Next.js and Node.js. We build the frontend, backend, and database."
                side="left"
              />
              <TimelineItem 
                step="04" 
                title="Testing & SEO (Week 5)" 
                desc="Rigorous testing for mobile responsiveness. Implementation of SEO meta tags and schema markup."
                side="right"
              />
              <TimelineItem 
                step="05" 
                title="Launch & Handover (Week 6)" 
                desc="We deploy your site to a live server, connect your domain, and train you on how to use the admin panel."
                side="left"
              />
            </div>
          </div>
        </section>

        {/* ================= 6. RECENT PROJECTS (Parallax Grid) ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-40">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Recent Projects</h2>
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
          <div className="text-center mt-12">
            <Link href="/work" className="text-teal-400 font-bold text-lg hover:underline flex items-center justify-center gap-2">
              View Full Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* ================= 7. FAQ & TESTIMONIALS ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-40 grid lg:grid-cols-2 gap-20">
          
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem question="How much does a website cost in Aurangabad?" answer="Basic static websites start at ₹10,000. Dynamic business websites with admin panels range from ₹25,000 to ₹40,000. E-commerce platforms start at ₹50,000 depending on features." />
              <FAQItem question="How long will it take to build my website?" answer="A standard business website typically takes 2-3 weeks from design to launch. More complex e-commerce or web applications may take 4-8 weeks." />
              <FAQItem question="Will my website be mobile friendly?" answer="Yes, 100%. We follow a 'Mobile-First' design approach. Your website will look and work perfectly on all smartphones, tablets, and desktops." />
              <FAQItem question="Do you provide hosting and domain services?" answer="Yes, we can manage domain registration and server hosting (AWS/DigitalOcean) for you, ensuring your site is always online and secure." />
              <FAQItem question="Do you offer SEO services in Aurangabad?" answer="Yes, all our websites come with Basic On-Page SEO. We also offer advanced monthly SEO packages to help you rank #1 on Google for local keywords." />
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Client Success</h2>
            <div className="space-y-6">
              <Testimonial 
                name="Rahul Patil" 
                role="Owner, Ashoka Tours" 
                text="Zaikron transformed our business. We now rank #1 for 'Aurangabad Tour Operator' and get leads daily from the website."
              />
              <Testimonial 
                name="Sameer Khan" 
                role="CEO, TechVerse" 
                text="Professional, fast, and affordable. They understood our IT service needs perfectly. Highly recommended for local businesses."
              />
            </div>
          </div>
        </section>

        {/* ================= 8. INTERNAL SILO LINKS ================= */}
        <section className="container mx-auto px-4 md:px-8 mb-20 pt-10 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Explore Our Other Services</h3>
          <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400">
            <Link href="/services/app-development" className="hover:text-teal-400 transition-colors">App Development Aurangabad</Link>
            <span>|</span>
            <Link href="/services/social-media-marketing" className="hover:text-amber-400 transition-colors">Social Media Marketing</Link>
            <span>|</span>
            <Link href="/work" className="hover:text-teal-400 transition-colors">Our Portfolio</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-amber-400 transition-colors">About Zaikron Team</Link>
          </div>
        </section>

        {/* ================= 9. FINAL CTA ================= */}
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-teal-900/40 to-amber-900/40 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Grow Your Business?</h2>
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                Don't let your competitors take your customers. Get a professional website today and start ranking on Google.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform">
                  Start Project Now
                </Link>
                <a href="tel:+919730416763" className="px-12 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ================= SUB-COMPONENTS =================

function ServiceHighlight({ title, icon, desc, color }: any) {
  return (
    <div className={`p-6 rounded-2xl bg-${color}-950/20 border border-${color}-500/20 hover:border-${color}-500/50 transition-colors group cursor-default`}>
      <div className={`text-${color}-400 mb-3 group-hover:scale-110 transition-transform`}>{icon}</div>
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
    <div className={`p-8 rounded-[2.5rem] border ${borderColor} flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}>
      {highlight && <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>}
      
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className={`text-3xl font-bold ${textColor} mb-6`}>₹{price}<span className="text-sm text-gray-500 font-normal">+</span></div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <Check size={16} className={`shrink-0 mt-0.5 text-${color}-400`} /> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${btnColor}`}>
        {cta}
      </Link>
    </div>
  );
}

function TimelineItem({ step, title, desc, side }: any) {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full group ${side === 'left' ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-1/2"></div>
      
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#04090b] bg-gray-800 group-hover:bg-teal-500 transition-colors z-10 shadow-xl">
        <span className="text-white font-bold text-sm">{step}</span>
      </div>
      
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all hover:translate-x-2">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, cat, desc, link, color }: any) {
  return (
    <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-${color}-500/30 hover:-translate-y-2 transition-transform duration-300 group`}>
      <div className={`mb-6 p-4 bg-${color}-500/10 w-fit rounded-2xl text-${color}-400`}>
        <Layout size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className={`text-xs font-mono text-${color}-400 mb-4 uppercase tracking-widest`}>{cat}</p>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">{desc}</p>
      <Link href={link} className={`text-white font-bold text-sm flex items-center gap-2 group-hover:text-${color}-400 transition-colors`}>
        View Case Study <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function Testimonial({ name, role, text }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
      <div className="flex gap-1 mb-6 text-amber-400">
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
        <Star size={18} fill="currentColor" />
      </div>
      <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{text}"</p>
      <div>
        <p className="text-white font-bold">{name}</p>
        <p className="text-xs text-gray-500 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left text-white font-bold hover:text-teal-400 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-400' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}