'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Smartphone, Code2, Globe, Server, ShieldCheck, Rocket, 
  Check, ArrowRight, Star, MapPin, Clock, Phone, Zap, 
  Layers, Cpu, Box, Layout, SmartphoneNfc, TabletSmartphone, 
  ChevronDown, CheckCircle2, TrendingUp, Download 
} from 'lucide-react';

export default function AppDevContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax for Background (Different speed/direction than Web Dev page)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative bg-[#0b0415] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- BACKGROUND FX: VIOLET CYBER-CORE --- */}
      <div className="absolute inset-0 pointer-events-none fixed">
        {/* Deep Galactic Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0415] via-[#120822] to-[#0b0415]"></div>
        
        {/* Animated Orbs - Violet & Blue */}
        <motion.div style={{ y: yOrb }} className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-violet-900/20 rounded-full blur-[180px] mix-blend-screen opacity-40 animate-pulse" />
        <motion.div style={{ y: yBackground }} className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[180px] mix-blend-screen opacity-30" />
        
        {/* Circuit Board Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">

        {/* ================= 1. HERO SECTION (H1 Exact Match) ================= */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-900/20 mb-6 backdrop-blur-md">
                <Smartphone className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-bold text-violet-300 uppercase tracking-widest">Mobile First</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                App Development Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">Aurangabad</span> <br/>
                <span className="text-3xl md:text-5xl text-gray-400 font-normal">Custom Mobile Apps ₹50K+</span>
              </h1>

              <h2 className="text-xl text-violet-200 mb-8 font-light">
                Best Android & iOS App Developer in <span className="font-bold text-white">Chhatrapati Sambhajinagar</span>. We build scalable, high-performance apps that dominate the App Store.
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-3">
                  Get Free App Quote <Rocket size={22} />
                </Link>
                <a href="tel:+919730416763" className="px-10 py-5 border border-white/20 bg-white/5 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                  Call Now <Phone size={22} />
                </a>
              </div>

              {/* NAP Block - Cyber Style */}
              <div className="p-6 rounded-2xl bg-[#160d26]/80 border border-violet-500/30 backdrop-blur-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
                <div className="flex flex-col md:flex-row justify-between gap-6 text-sm">
                  <div>
                    <p className="text-violet-400 font-bold uppercase text-xs mb-1">Location</p>
                    <p className="text-gray-300">Costa Mapal, Peer Bazar Rd,<br/> Usmanpura, <strong>Aurangabad 431005</strong></p>
                  </div>
                  <div>
                    <p className="text-violet-400 font-bold uppercase text-xs mb-1">Direct Line</p>
                    <a href="tel:+919730416763" className="text-white hover:text-violet-300 font-mono text-lg">+91 97304 16763</a>
                  </div>
                  <div>
                    <p className="text-violet-400 font-bold uppercase text-xs mb-1">Working Hours</p>
                    <p className="text-gray-300">Mon - Sat: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Floating App Mockups */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="bg-[#1a102e] p-6 rounded-3xl border border-white/10 shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                  <Smartphone className="w-12 h-12 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Native Android</h3>
                  <p className="text-gray-400 text-sm">Kotlin-based high performance apps for the massive Aurangabad Android market.</p>
                </div>
                <div className="bg-[#1a102e] p-6 rounded-3xl border border-white/10 shadow-2xl transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 mt-12">
                  <Layers className="w-12 h-12 text-fuchsia-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">React Native</h3>
                  <p className="text-gray-400 text-sm">One codebase for both iOS & Android. Cost-effective and rapid deployment.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 2. WHAT IS APP DEV? (Educational - 300 Words) ================= */}
        <section className="mb-32 px-4">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">What is Custom App Development?</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
              <p>
                Custom mobile app development is the process of creating software specifically tailored for smartphones and tablets, rather than using generic, off-the-shelf templates. For businesses in <strong>Aurangabad</strong>, this means building a digital asset that perfectly matches your operational needs and customer expectations. Unlike generic app builders that offer limited functionality and poor performance, a custom app built by <strong>Zaikron</strong> is scalable, secure, and owned entirely by you.
              </p>
              <p>
                <strong>Why does this matter for Aurangabad businesses?</strong> Statistics show that over 70% of local searches in Maharashtra happen on mobile devices, and users spend 85% of their smartphone time in apps rather than browsers. If you are running a retail store in <strong>Cannaught Place</strong> or a service agency in <strong>Cidco</strong>, relying solely on a website or social media means you are missing out on the high-engagement channel that mobile apps provide.
              </p>
              <p>
                Many local businesses make the mistake of using "DIY App Makers," only to find their app rejected by the Play Store or deleted by users due to bugs. At Zaikron, we solve this problem by delivering <strong>professional, code-based development</strong>. We ensure your app integrates with your existing systems, sends smart push notifications to retain customers, and provides a seamless user experience that builds brand loyalty in the competitive Chhatrapati Sambhajinagar market.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. OUR SERVICES (Bento Grid Layout) ================= */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our App Development Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive mobile solutions tailored for the Aurangabad market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1: Android */}
            <ServiceCard 
              title="Android App Development"
              desc="Capture the largest market share in Aurangabad with native Kotlin apps tailored for diverse Android devices."
              icon={<Smartphone className="w-8 h-8"/>}
              target="Target: 'Android app developer Aurangabad'"
              color="green"
            />
            {/* Service 2: iOS */}
            <ServiceCard 
              title="iOS App Development"
              desc="Premium Swift-based apps for the iPhone ecosystem. Focus on high security and smooth UI/UX."
              icon={<Code2 className="w-8 h-8"/>}
              target="Target: 'iOS app developer Aurangabad'"
              color="blue"
            />
            {/* Service 3: React Native */}
            <div className="md:row-span-2 bg-[#160d26] p-10 rounded-[2.5rem] border border-violet-500/30 hover:border-violet-500/60 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Layers className="w-12 h-12 text-violet-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">React Native Cross-Platform</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong>Target: 'React Native developer Aurangabad'</strong><br/><br/>
                Why build twice when you can code once? Our React Native solutions allow you to deploy to both iOS and Android simultaneously, saving you up to 40% in development costs and time.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-violet-400"/> Write once, deploy everywhere</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-violet-400"/> Native-like performance</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-violet-400"/> Live updates & Hot Reloading</li>
              </ul>
              <div className="bg-violet-900/20 p-4 rounded-xl border border-violet-500/20">
                <p className="text-xs text-violet-300 font-mono">CASE STUDY: We built the 'Tourist Aurangabad' app using React Native, achieving 4.8 stars on both stores.</p>
              </div>
            </div>
            {/* Service 4: Flutter */}
            <ServiceCard 
              title="Flutter Development"
              desc="Beautiful, expressive UI animations using Google's UI toolkit. Best for visually rich apps."
              icon={<Zap className="w-8 h-8"/>}
              target="Target: 'Flutter developer Aurangabad'"
              color="cyan"
            />
            {/* Service 5: PWA */}
            <ServiceCard 
              title="Progressive Web Apps (PWA)"
              desc="No app store needed. Installable directly from the web. Works offline. Perfect for SMEs."
              icon={<Globe className="w-8 h-8"/>}
              target="Target: 'PWA developer'"
              color="pink"
            />
          </div>
        </section>

        {/* ================= 4. DEVELOPMENT PROCESS (Vertical Circuit) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">App Development Process</h2>
          <div className="max-w-4xl mx-auto space-y-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent"></div>

            <ProcessStep 
              week="Week 1-2"
              title="Discovery & Strategy"
              items={["Competitor analysis", "Target audience research", "Feature prioritization"]}
            />
            <ProcessStep 
              week="Week 2-3"
              title="UI/UX Design"
              items={["Figma wireframes", "User testing", "Brand consistency"]}
            />
            <ProcessStep 
              week="Week 4-6"
              title="Backend Development"
              items={["API design (REST/GraphQL)", "Database architecture", "Server setup (AWS/GCP)"]}
            />
            <ProcessStep 
              week="Week 7-8"
              title="Frontend Development"
              items={["Screen implementation", "Integration testing", "Performance optimization"]}
            />
            <ProcessStep 
              week="Week 9-10"
              title="QA & Testing"
              items={["Device/OS testing", "Security audit", "Load testing"]}
            />
            <ProcessStep 
              week="Week 11-12"
              title="Deployment"
              items={["Play Store submission", "App Store submission", "Launch day support"]}
            />
          </div>
        </section>

        {/* ================= 5. TECH STACK (Hexagon Grid) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Python', 'AWS', 'Docker', 'Firebase', 'GraphQL'].map((tech, i) => (
              <div key={i} className="px-8 py-4 rounded-xl bg-[#160d26] border border-white/10 text-violet-200 font-mono text-sm hover:border-violet-500 hover:text-white transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. PRICING (3 Glass Cards) ================= */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">App Development Pricing</h2>
            <p className="text-gray-400">Transparent packages for Aurangabad startups & enterprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              title="Startup MVP" 
              price="50,000" 
              range="₹1,00,000"
              features={["5-10 core features", "Single platform (iOS or Android)", "8-12 weeks delivery", "Basic UI/UX"]}
              color="blue"
            />
            <PriceCard 
              title="Business App" 
              price="1,50,000" 
              range="Depends on features"
              features={["20-30 features", "iOS + Android (Cross-platform)", "Admin dashboard", "Analytics integration"]}
              color="violet"
              popular={true}
            />
            <PriceCard 
              title="Enterprise Solution" 
              price="Depends on features" 
              range="Custom"
              features={["Custom architecture", "Third-party integrations", "White-label options", "24/7 support"]}
              color="fuchsia"
            />
          </div>
        </section>

        {/* ================= 7. COMPARISON TABLE (Data Grid) ================= */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">App vs Website vs PWA</h2>
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0e071a]">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="p-6">Feature</th>
                  <th className="p-6 text-violet-400 font-bold bg-violet-900/10">Custom App</th>
                  <th className="p-6">Website</th>
                  <th className="p-6">PWA</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Offline functionality</td>
                  <td className="p-6 text-green-400 font-bold bg-violet-900/5">✅ Full</td>
                  <td className="p-6 text-red-400">❌ No</td>
                  <td className="p-6 text-yellow-400">⚠️ Limited</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">User retention</td>
                  <td className="p-6 text-green-400 font-bold bg-violet-900/5">✅ Highest (Push Notifs)</td>
                  <td className="p-6 text-yellow-400">⚠️ Medium</td>
                  <td className="p-6 text-yellow-400">⚠️ Medium</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Development Cost</td>
                  <td className="p-6 text-red-400 bg-violet-900/5">❌ High</td>
                  <td className="p-6 text-green-400">✅ Low</td>
                  <td className="p-6 text-green-400">✅ Low</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Device Access</td>
                  <td className="p-6 text-green-400 font-bold bg-violet-900/5">✅ Full (Camera, GPS)</td>
                  <td className="p-6 text-yellow-400">⚠️ Limited</td>
                  <td className="p-6 text-yellow-400">⚠️ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm italic">
            Recommendation: Choose Custom App if user retention &gt; 10% annual engagement. Choose PWA if instant deployment + low cost is priority.
          </p>
        </section>

        {/* ================= 8. CASE STUDIES (Immersive) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">App Development Case Studies</h2>
          <div className="space-y-12">
            <CaseStudyCard 
              title="Aathvani - QR Photo Delivery App"
              industry="SaaS / Photography"
              challenge="Manual photo delivery was slow and unprofessional."
              solution="React Native app + AWS backend + QR scanning automation."
              results={["500 photographers onboarded", "50,000 events managed", "99.9% uptime SLA", "4.8-star rating"]}
              color="violet"
            />
            <CaseStudyCard 
              title="Tourist Aurangabad - Booking Platform"
              industry="Travel / Tourism"
              challenge="Competing with national platforms like Viator."
              solution="Custom iOS/Android app + Google Maps integration + WhatsApp booking."
              results={["Ranked #1 on Google", "300% increase in bookings", "50+ daily leads"]}
              color="blue"
            />
          </div>
        </section>

        {/* ================= 9. FAQ (Accordion) ================= */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {q: "How much does a custom app cost in Aurangabad?", a: "Custom app development in Aurangabad ranges from ₹50,000 for MVP startups to Depends on features+ for enterprise solutions. Factors affecting cost: number of features (5-50+), platforms (iOS, Android, or both), third-party integrations, and timeline."},
              {q: "How long does app development take?", a: "Basic MVP: 8-10 weeks. Business App: 12-16 weeks. Enterprise: 6+ months. We provide a detailed timeline during discovery."},
              {q: "Do you publish to App Store/Play Store?", a: "Yes, we handle the entire submission and approval process for both Apple App Store and Google Play Store."},
              {q: "Can you build for iOS only or Android only?", a: "Yes, we can build native apps for a single platform if your audience is specific (e.g., iOS for premium users, Android for mass market in Aurangabad)."},
              {q: "What is the difference between native and cross-platform?", a: "Native apps are built specifically for one OS (Swift for iOS, Kotlin for Android) offering max performance. Cross-platform (React Native/Flutter) uses one code for both, saving cost/time."},
              {q: "Do you provide ongoing support after launch?", a: "Yes, we offer 1 year of free maintenance for critical bugs and paid AMC packages for feature updates and monitoring."},
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        {/* ================= 10. FINAL CTA ================= */}
        <section className="text-center p-12 rounded-[3rem] bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Have an App Idea?
          </h2>
          <p className="text-xl text-violet-200 mb-10 max-w-2xl mx-auto relative z-10">
            Don't let your idea stay on paper. Let's build the next big thing in Aurangabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform">
              Book Free Consultation
            </Link>
            <a href="tel:+919730416763" className="px-12 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors">
              Call Developer
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ServiceCard({ title, desc, icon, target, color }: any) {
  const colors: any = {
    green: "text-green-400 border-green-500/20 hover:border-green-500/50 bg-green-900/10",
    blue: "text-blue-400 border-blue-500/20 hover:border-blue-500/50 bg-blue-900/10",
    cyan: "text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50 bg-cyan-900/10",
    pink: "text-pink-400 border-pink-500/20 hover:border-pink-500/50 bg-pink-900/10",
  }
  
  return (
    <div className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-2 duration-300 ${colors[color]}`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{desc}</p>
      <p className="text-xs font-mono opacity-50 uppercase tracking-widest">{target}</p>
    </div>
  )
}

function ProcessStep({ week, title, items }: any) {
  return (
    <div className="flex gap-8 relative z-10">
      <div className="flex-shrink-0 w-16 pt-2">
        <div className="w-4 h-4 rounded-full bg-violet-500 border-4 border-[#0b0415] relative left-6 shadow-[0_0_15px_#8b5cf6]"></div>
      </div>
      <div className="flex-grow pb-12">
        <span className="text-violet-400 font-mono text-xs uppercase tracking-widest mb-1 block">{week}</span>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <ul className="space-y-1">
          {items.map((item: string, i: number) => (
            <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function PriceCard({ title, price, range, features, color, popular }: any) {
  return (
    <div className={`p-8 rounded-[2.5rem] border ${popular ? 'border-violet-500 bg-violet-900/10' : 'border-white/10 bg-white/5'} relative flex flex-col`}>
      {popular && <div className="absolute top-6 right-6 px-3 py-1 bg-violet-500 text-white text-xs font-bold rounded-full">BEST VALUE</div>}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">₹{price}</span>
        <span className="text-sm text-gray-400 block mt-1"> - {range}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="text-sm text-gray-300 flex gap-2">
            <Check size={16} className={`text-${color === 'violet' ? 'violet' : 'gray'}-400`} /> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`w-full py-3 rounded-xl font-bold text-center transition-all ${popular ? 'bg-violet-600 hover:bg-violet-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
        Choose Plan
      </Link>
    </div>
  )
}

function CaseStudyCard({ title, industry, challenge, solution, results, color }: any) {
  return (
    <div className="bg-[#120822] border border-white/10 p-8 md:p-12 rounded-[3rem] relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-64 h-64 bg-${color}-500/10 rounded-full blur-[80px] group-hover:bg-${color}-500/20 transition-colors`}></div>
      <div className="relative z-10">
        <span className={`text-xs font-mono text-${color}-400 uppercase tracking-widest mb-2 block`}>{industry}</span>
        <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Challenge</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Solution</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>
        <div className="bg-black/30 p-6 rounded-2xl border border-white/5">
          <h4 className={`text-${color}-400 font-bold text-sm mb-3`}>Key Results</h4>
          <div className="grid grid-cols-2 gap-4">
            {results.map((r: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                <TrendingUp size={14} className={`text-${color}-400`} /> {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left text-white font-bold hover:text-violet-400 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-400' : 'text-gray-500'}`} />
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