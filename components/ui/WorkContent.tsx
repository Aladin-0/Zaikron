'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, ExternalLink, Code2, ArrowRight, TrendingUp, Award, Users, Zap, 
  Layout, ShieldCheck, Search, Music, Map, Trophy, BookOpen, QrCode, Sprout, GraduationCap
} from 'lucide-react';

export default function WorkContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax for background blobs
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    // --- PREMIUM "ROLEX" THEME BACKGROUND ---
    <div ref={containerRef} className="relative bg-[#020403] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- GLOBAL LUXURY AMBIENCE LAYERS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(251,191,36,0.08)_0%,rgba(0,0,0,0)_70%)] blur-[100px]" />

        {/* --- SCROLL FLOW AMBIENCE --- */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[150vw] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(6,78,59,0.3)_0%,transparent_70%)] blur-[120px] opacity-60" />
        <div className="absolute top-[45%] left-[-20%] w-[800px] h-[1500px] bg-emerald-900/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[55%] right-[-20%] w-[800px] h-[1500px] bg-amber-900/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[80%] left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-[#0a1510] to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[95rem] relative z-10">

        {/* --- 2. HERO LAYOUT --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] mb-32">
          
          {/* LEFT COLUMN: The Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">
                Zaikron • Case Studies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tight">
              Best Website Devlopers <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-amber-200 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                in chhatrapati sambhaji nagar
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed font-light mb-10 max-w-xl">
              We build a creative and modern designing website helps rock your online business and generate leads and sales. <span className="text-white font-medium">ranks #1</span> in Aurangabad .
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2">
                Start Project <ArrowRight size={20} />
              </Link>
              <Link href="#" className="px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-lg rounded-full hover:bg-white hover:text-black transition-all">
                scroll To See Work
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The 3D Glass Dashboard Visual (NOW VISIBLE ON MOBILE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            // CHANGED: Removed 'hidden', added 'block' and 'mt-12' for mobile spacing
            className="relative block perspective-1000 mt-12 lg:mt-0"
          >
             {/* Abstract Glow behind the cards */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-emerald-500/20 to-amber-500/10 rounded-full blur-[60px] md:blur-[80px]" />

             {/* Floating Cards - Scaled for Mobile */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               // CHANGED: Added right-0 and scale-90 for mobile fit
               className="absolute top-0 right-0 md:top-10 md:right-10 z-20 p-4 md:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-emerald-500/30 w-56 md:w-64 shadow-2xl scale-90 md:scale-100 origin-top-right"
             >
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Search size={20} /></div>
                 <div className="text-sm text-gray-400">Google Rank</div>
               </div>
               <div className="text-4xl font-bold text-white mb-1">#1</div>
               <div className="text-xs text-emerald-400">"Web Developer Aurangabad"</div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               // CHANGED: Added left-0 and scale-90 for mobile fit
               className="absolute bottom-10 left-0 md:bottom-20 md:left-10 z-20 p-4 md:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-amber-500/30 w-56 md:w-64 shadow-2xl scale-90 md:scale-100 origin-bottom-left"
             >
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><TrendingUp size={20} /></div>
                 <div className="text-sm text-gray-400">Client Growth</div>
               </div>
               <div className="text-4xl font-bold text-white mb-1">300%</div>
               <div className="h-2 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 w-[85%]"></div>
               </div>
             </motion.div>

             {/* Main Visual - Height Adjusted for Mobile */}
             <div className="relative z-10 p-6 md:p-8 rounded-[2rem] bg-gradient-to-b from-white/10 to-black/40 border border-white/10 backdrop-blur-md w-full h-[400px] md:h-[500px] flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-2 font-mono text-xs md:text-sm text-gray-500">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">success</span> = <span className="text-emerald-400">new Project()</span>;</p>
                    <p><span className="text-blue-400">success</span>.<span className="text-yellow-400">optimize</span>(<span className="text-amber-200">'SEO'</span>);</p>
                    <p><span className="text-blue-400">success</span>.<span className="text-yellow-400">scale</span>(<span className="text-emerald-400">1000</span>);</p>
                  </div>
                </div>
                <div className="relative h-32 md:h-40 w-full mt-10">
                   <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-emerald-500/20 to-transparent clip-path-polygon"></div>
                   <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                     <path d="M0,150 C50,150 100,100 150,120 C200,140 250,50 350,20" fill="none" stroke="url(#gradient)" strokeWidth="4" />
                     <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#10b981" />
                         <stop offset="100%" stopColor="#fbbf24" />
                       </linearGradient>
                     </defs>
                   </svg>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- 3. STATS STRIP --- */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-white/5 bg-white/[0.02]"
        >
           <StatCard icon={<Award size={24} />} label="Awards Won" value="8+" color="emerald" />
           <StatCard icon={<TrendingUp size={24} />} label="Client Growth" value="3x" color="gold" />
           <StatCard icon={<Users size={24} />} label="Happy Clients" value="50+" color="emerald" />
           <StatCard icon={<Zap size={24} />} label="Delivery Speed" value="Fast" color="gold" />
        </motion.div>

        {/* --- 4. SEO EDUCATION (Upgraded Background) --- */}
        <div id="case-studies" className="scroll-mt-32"></div>
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-40 relative group"
        >
          {/* Section-Specific Background Glow */}
          <div className="absolute inset-0 bg-emerald-900/10 rounded-[3rem] blur-3xl transform group-hover:scale-105 transition-transform duration-1000 -z-10" />

          <div className="p-12 rounded-[2rem] bg-[#050a08] border border-emerald-500/20 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
             {/* Decorative Grid Line */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl" />

             <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">
               Why Web Development in Aurangabad <span className="text-emerald-400">Matters</span>
             </h2>
             
             <div className="grid lg:grid-cols-2 gap-12 relative z-10">
               <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                 <p>
                   A professional <strong>web development company in Aurangabad</strong> doesn't just build websites—it builds digital assets that rank on Google, convert visitors, and scale your business. 
                 </p>
                 <p>
                   When customers search for "<em>web developer near me Aurangabad</em>" or "<em>website development services Chhatrapati Sambhajinagar</em>," they need a partner who understands <strong>local SEO, technical optimization, and conversion psychology</strong>.
                 </p>
               </div>

               <div className="grid grid-cols-1 gap-4">
                 <BenefitCard title="Rank #1 on Google" desc="SEO-optimized for 'web developer Aurangabad' and local keywords." icon={<Search className="text-emerald-400" />} />
                 <BenefitCard title="Load in <2 Seconds" desc="Core Web Vitals 95+, mobile-first design, image optimization." icon={<Zap className="text-amber-400" />} />
                 <BenefitCard title="Convert Visitors" desc="Psychology-driven CTAs, clear value propositions, easy contact forms." icon={<Users className="text-emerald-400" />} />
                 <BenefitCard title="Scale with Growth" desc="Built on modern stacks (Next.js, Node.js, PostgreSQL, AWS)." icon={<TrendingUp className="text-amber-400" />} />
               </div>
             </div>
          </div>
        </motion.section>

        {/* --- 5. CASE STUDIES (With Flowing Background Trace) --- */}
        <div className="relative">
          {/* The connecting gradient line behind the list */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent hidden md:block"></div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              8 Case Studies
            </h2>
            <p className="text-slate-500 uppercase tracking-[0.2em] text-xs font-bold">How We Built Ranking Websites</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-24 mb-40 relative z-10">
            <CaseStudy 
              num="01"
              title="LookBass"
              subtitle="Music Label Website"
              industry="Music & Entertainment"
              url="https://lookbass.com/"
              icon={<Music className="text-emerald-400" />}
              problem="Independent music label needed a platform to distribute music and manage artists across Spotify, Apple Music, YouTube."
              solution="Zaikron built a React-based website with music player integration, artist profiles, streaming links, and fast performance. Optimized for 'music label website,' 'independent artist platform.'"
              results={["300% increase in artist discovery", "Featured on streaming platforms", "Mobile conversion up 150%"]}
              keywords="music industry website development, artist management website"
              seoTricks="Structured data for music releases, social sharing optimization, embedded streaming players"
              color="emerald"
            />

            <CaseStudy 
              num="02"
              title="Tourist Aurangabad"
              subtitle="Heritage Tours"
              industry="Tourism & Travel"
              url="https://touristaurangabad.com/"
              icon={<Map className="text-amber-400" />}
              problem="Local tour operator competing with national tour platforms needed visibility for 'Ajanta Ellora tours,' 'Aurangabad tourism.'"
              solution="Zaikron designed a conversion-focused website with tour packages, pricing, Google Ads integration, WhatsApp booking CTA. Local SEO targeting Aurangabad + Chhatrapati Sambhajinagar + all Maharashtra cities."
              results={["Ranked #1 for 'Ajanta Ellora tours Aurangabad'", "300% increase in tour inquiries", "5-star Google reviews from real customers"]}
              keywords="tour operator Aurangabad, heritage tours, Ajanta Ellora website"
              seoTricks="Geo-targeted landing pages, local citations, review schema, WhatsApp integration tracking"
              color="gold"
            />

            <CaseStudy 
              num="03"
              title="Dataverse Learning"
              subtitle="EdTech Platform"
              industry="Education & E-Learning"
              url="https://dataverselearning.com/"
              icon={<BookOpen className="text-emerald-400" />}
              problem="EdTech startup needed platform to host courses, manage students, track progress, and rank for 'online courses,' 'professional certifications.'"
              solution="Full-stack web app: course pages, student dashboards, payment integration, email automation, mentor matching. Built with Next.js + Node.js + PostgreSQL."
              results={["2,000+ enrolled students", "50+ courses active", "95% course completion rate", "#1 ranking for 'data science courses India'"]}
              keywords="EdTech platform, online courses India, professional certifications"
              seoTricks="Structured data for courses, video schema, student testimonial reviews, FAQ schema for featured snippets"
              color="emerald"
            />

            <CaseStudy 
              num="04"
              title="Aathvani"
              subtitle="QR Photo Delivery App"
              industry="Photography Tech (SaaS)"
              url="https://aathvani.zaikron.com/"
              icon={<QrCode className="text-amber-400" />}
              problem="Photographers needed a tool to share event photos. Manual delivery = slow, inefficient, bad customer experience."
              solution="Web app using Next.js, Node.js, WhatsApp API. Photographers upload photos → generate QR → guests scan → access photos instantly. Full cloud infrastructure on AWS."
              results={["500+ photographers onboarded", "50,000+ events managed", "99.9% uptime SLA", "5-star ratings from photographers"]}
              keywords="photo sharing platform, photographer tools, digital photo delivery"
              seoTricks="Event-based structured data, user testimonial reviews, partnership backlinks from photography communities"
              color="gold"
            />

            <CaseStudy 
              num="05"
              title="TechVerse Services"
              subtitle="Local IT Support"
              industry="IT Services & Hardware"
              url="http://www.techverseservices.in/"
              icon={<ShieldCheck className="text-emerald-300" />}
              problem="Computer repair shop in Aurangabad needed ranking for 'computer repair near me,' 'laptop service Aurangabad,' 'CCTV installation.'"
              solution="Mobile-first website optimized for local search. Service pages for each service (repair, hardware, CCTV, antivirus). Google Business Profile fully optimized. Local SEO focus."
              results={["Ranking #1 for 'IT services Aurangabad'", "150+ monthly leads from website", "200+ 5-star Google reviews"]}
              keywords="computer repair Aurangabad, IT services near me, CCTV installation Chhatrapati Sambhajinagar"
              seoTricks="Local citations in directories, service-area pages, customer reviews schema, Google Business Profile optimization"
              color="emerald"
            />

            <CaseStudy 
              num="06"
              title="Sanjari Agro"
              subtitle="B2B Agricultural Products"
              industry="Agriculture & Manufacturing"
              url="https://sanjariagro.com/"
              icon={<Sprout className="text-emerald-500" />}
              problem="Animal feed manufacturer needed B2B website to reach farmers and agricultural traders across Maharashtra."
              solution="Product catalog website with bulk order forms, farmer testimonials, product specifications. Structured data for products and organization."
              results={["Connected 500+ farmers and traders", "30% increase in bulk orders", "Expanded market reach to 3+ states"]}
              keywords="animal feed manufacturer, agricultural products, cotton seed cake supplier"
              seoTricks="Product schema markup, manufacturer credentials, local business schema, bulk order CTA"
              color="emerald"
            />

            <CaseStudy 
              num="07"
              title="CCT Official"
              subtitle="Cricket Tournament Platform"
              industry="Sports Management"
              url="https://cctofficial.in/"
              icon={<Trophy className="text-amber-400" />}
              problem="Cricket tournament organizer needed real-time platform for tournament schedules, player registrations, live results, standings."
              solution="Dynamic website with real-time fixture updates, player registration forms, team standings, live scores. Mobile-optimized for on-the-field access."
              results={["Manages 50+ tournaments/year", "10,000+ registered players", "Real-time fixture and score updates"]}
              keywords="cricket tournament platform, sports event website, player registration system"
              seoTricks="Dynamic content generation, live score schema, event structured data, player profile pages"
              color="gold"
            />

            <CaseStudy 
              num="08"
              title="Pitambare College"
              subtitle="Higher Education"
              industry="Education & Admissions"
              url="https://pitambarecollege.in/"
              icon={<GraduationCap className="text-emerald-500" />}
              problem="College needed website for course information, admissions details, faculty profiles, student inquiry management."
              solution="Comprehensive education website with course pages, online admission forms, hostel info, faculty directory. Accessible design for students and parents."
              results={["200+ annual admissions from website", "4.8-star Google rating", "Improved online visibility 300%"]}
              keywords="college Aurangabad, BCA admission Maharashtra, higher education website"
              seoTricks="Education schema for courses and programs, student testimonial reviews, course description structured data, admissions schema"
              color="emerald"
            />
          </div>
        </div>

        {/* --- 6. TOPICAL AUTHORITY (Distinct Darker Zone) --- */}
        <div className="mb-40 relative py-20 -mx-6 md:-mx-12 px-6 md:px-12 bg-[#030605] border-y border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-emerald-900/[0.03] blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our Web Development Expertise
            </h2>
            <p className="text-lg text-slate-400">
              Zaikron isn't just a web developer—we're a <strong>topical authority in web development for Aurangabad businesses</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <ExpertiseCard title="Website Development" items={["Next.js/React", "SEO optimization", "Mobile-first design", "Core Web Vitals", "E-commerce platforms"]} icon={<Layout />} />
            <ExpertiseCard title="App Development" items={["Native iOS/Android", "React Native", "Flutter", "Web apps (PWA)", "Backend APIs"]} icon={<Code2 />} />
            <ExpertiseCard title="Digital Growth" items={["Google/Instagram Ads", "Social media marketing", "Content marketing", "Local SEO", "Backlink strategy"]} icon={<TrendingUp />} />
          </div>
        </div>

        {/* --- 7. TRUST & TESTIMONIALS (Warm Tone Separation) --- */}
        <div className="mb-40 py-24 border-y border-white/5 bg-gradient-to-r from-transparent via-amber-950/[0.05] to-transparent">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white">Why Clients Trust Zaikron</h2>
             <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full opacity-50"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Ashoka Tours" role="Tour Operator" text="Zaikron increased our tour bookings by 300%. Ranking #1 on Google transformed our business." />
            <TestimonialCard name="LookBass Music" role="Music Label" text="Professional, creative, and results-driven. Our artist discovery increased significantly." />
            <TestimonialCard name="Dataverse Learning" role="EdTech Founder" text="Built our entire platform from scratch. Reliable, scalable, and affordable. Highly recommended." />
          </div>
        </div>

        {/* --- 8. FAQ (Accordion) --- */}
        <div className="mb-40 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Common Web Development Questions</h2>
          <div className="space-y-6">
            <FAQItem q="What is the best web development company in Aurangabad?" a="Zaikron is Aurangabad's award-winning web development company. Our 8 case studies show proven results: 300%+ growth, #1 Google rankings, 5-star customer reviews." />
            <FAQItem q="How much does website development cost in Chhatrapati Sambhajinagar?" a="Simple websites start at ₹25,000. E-commerce platforms range ₹50,000-₹2,00,000. Complex web apps/platforms cost ₹2,00,000-₹5,00,000+. Contact us for a custom quote." />
            <FAQItem q="Can you guarantee #1 ranking on Google?" a="We can't guarantee rankings, but our SEO-first approach (keywords, content, links, speed) consistently ranks clients #1 for local searches like 'web developer Aurangabad.'" />
            <FAQItem q="Do you offer app development?" a="Yes. We build native apps (iOS/Android), React Native, Flutter, PWAs, and backend APIs. See Aathvani case study for a full-stack example." />
            <FAQItem q="What makes your websites rank?" a="Keyword research + content optimization + internal linking + backlinks + Core Web Vitals + Mobile-first + Structured data + Local SEO = #1 rankings." />
          </div>
        </div>

        {/* --- 9. FINAL CTA (Sunrise Gradient Bottom) --- */}
        <div className="text-center pb-32 pt-20 relative overflow-hidden rounded-[3rem] bg-gradient-to-t from-emerald-900/20 to-transparent border-t border-white/5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 relative z-10">
            Ready for Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Success Story?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            Whether you need a website developer in Aurangabad, an app development company, or social media marketing, Zaikron is your partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              Start Your Project
            </Link>
            <Link href="/services" className="px-12 py-6 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all">
              View Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ icon, label, value, color }: any) {
  const colors: any = {
    emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.03]",
    gold: "text-amber-400 border-amber-500/20 bg-amber-500/[0.03]",
  }
  return (
    <div className={`p-6 rounded-2xl border ${colors[color] || colors.emerald} backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-1 group`}>
      <div className="mb-3 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
      <p className="text-3xl font-display font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
    </div>
  );
}

function BenefitCard({ title, desc, icon }: any) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-colors backdrop-blur-sm group">
      <div className="mt-1 p-2 rounded-lg bg-black/40 border border-white/5 group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CaseStudy({ num, title, subtitle, industry, url, icon, problem, solution, results, keywords, seoTricks, color }: any) {
  // Richer background for cards
  const colors: any = {
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.2)]",
    gold: "hover:border-amber-500/40 hover:shadow-[0_0_60px_-15px_rgba(251,191,36,0.2)]",
  };

  const textColors: any = {
    emerald: "text-emerald-400",
    gold: "text-amber-400",
  };

  const activeColor = color || 'emerald';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative p-8 md:p-12 rounded-[2rem] bg-[#080908] border border-white/[0.08] transition-all duration-500 ${colors[activeColor] || colors.emerald} z-10`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shadow-inner">
            {icon}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-mono border px-2 py-1 rounded ${textColors[activeColor] || textColors.emerald} border-opacity-30 border-current bg-white/5`}>CASE STUDY {num}</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{industry}</span>
            </div>
            <h3 className="text-4xl font-display font-bold text-white group-hover:text-slate-200 transition-colors">
              {title} <span className="text-slate-600 font-light hidden md:inline">/ {subtitle}</span>
            </h3>
          </div>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-slate-400 hover:text-white transition-colors">
          <ExternalLink size={24} />
        </a>
      </div>

      {/* Grid Content */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/5">The Challenge</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/5">The Solution</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{solution}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/5">Key Results</h4>
          <ul className="space-y-3">
            {results.map((r: string, i: number) => (
              <li key={i} className="text-slate-300 text-sm flex gap-3">
                <CheckCircle size={16} className={`shrink-0 mt-0.5 ${textColors[activeColor] || textColors.emerald}`} />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SEO Footer */}
      <div className="pt-6 border-t border-white/5 bg-black/20 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-8 md:p-12 rounded-b-[2rem]">
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <Search size={16} className="text-slate-600 mt-1" />
            <p className="text-sm text-slate-500 font-mono"><strong className="text-slate-400">Keywords:</strong> {keywords}</p>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck size={16} className="text-slate-600 mt-1" />
            <p className="text-sm text-slate-500 font-mono"><strong className="text-slate-400">Techniques:</strong> {seoTricks}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExpertiseCard({ title, items, icon }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-colors group backdrop-blur-sm">
      <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-slate-400 text-sm flex gap-3 items-center">
            {/* Dot color to Green */}
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ name, role, text }: any) {
  return (
    <div className="p-8 rounded-3xl bg-[#090b0a] border border-white/[0.05] relative backdrop-blur-sm hover:border-amber-500/20 transition-colors">
      <div className="text-amber-500 mb-4 opacity-40 text-5xl font-serif leading-none">"</div>
      <p className="text-slate-300 mb-6 text-lg leading-relaxed italic relative z-10 font-light">{text}</p>
      <div className="border-t border-white/5 pt-4">
        <p className="font-bold text-white">{name}</p>
        <p className="text-xs text-slate-500 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: any) {
  return (
    <details className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] cursor-pointer open:bg-white/[0.04] transition-all">
      <summary className="font-bold text-white flex justify-between items-center list-none">
        <span className="text-lg">{q}</span>
        <ArrowRight size={20} className="group-open:rotate-90 transition-transform text-emerald-400 opacity-70 group-hover:opacity-100" />
      </summary>
      <p className="text-slate-400 mt-4 text-sm leading-relaxed border-l border-emerald-500/30 pl-4">{a}</p>
    </details>
  );
}