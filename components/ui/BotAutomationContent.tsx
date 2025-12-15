'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, MessageCircle, Mic, Zap, BrainCircuit, Globe, 
  Smartphone, Database, ShieldCheck, ArrowRight, CheckCircle2, 
  TrendingUp, Users, ShoppingCart, Headset, Code2, Cpu, Sparkles, Terminal,
  User, Check, ChevronDown, Layout, Instagram, Facebook, Lock, Server 
} from 'lucide-react';

// --- TYPEWRITER EFFECT COMPONENT ---
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40); // Typing speed
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse text-cyan-500">|</span>
    </span>
  );
};

export default function BotAutomationContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax: Smooth floating effect
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* --- BACKGROUND FX: NEURAL MIDNIGHT --- */}
      <div className="absolute inset-0 pointer-events-none fixed">
        {/* Deepest Void Base */}
        <div className="absolute inset-0 bg-[#020202]"></div>
        
        {/* Smooth Nebulas (No Grids) */}
        <motion.div style={{ y: yBackground }} className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-cyan-900/20 rounded-full blur-[180px] mix-blend-screen opacity-40 animate-pulse" />
        <motion.div style={{ y: yBackground }} className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-violet-900/20 rounded-full blur-[180px] mix-blend-screen opacity-40 animate-pulse" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">

        {/* ================= 1. HERO SECTION (Typewriter & Hologram) ================= */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <BrainCircuit className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Powered by GPT-4o</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1] mb-6 tracking-tight">
                AI Chatbot <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Aurangabad</span>
              </h1>

              {/* TYPEWRITER ANIMATION */}
              <h2 className="text-xl text-gray-300 mb-8 font-mono h-24 md:h-16 leading-relaxed">
                <TypewriterText text="24/7 AI Sales Agents. Convert 40% WhatsApp Visitors to Customers. No Human Needed. Starts ₹20K." delay={500} />
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact" className="px-10 py-5 bg-cyan-500 text-black font-bold text-xl rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-3">
                  Build My Bot <Bot size={22} />
                </Link>
                <a href="https://wa.me/919730416763" className="px-10 py-5 border border-white/20 bg-white/5 text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
                  WhatsApp Demo <MessageCircle size={22} />
                </a>
              </div>

              {/* Stats Bar (Holographic) */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Bots Deployed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">₹2Cr+</p>
                  <p className="text-xs text-violet-400 uppercase tracking-wider font-semibold">Labor Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">40%</p>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Conv. Boost</p>
                </div>
              </div>
              
              {/* NAP Block */}
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 flex flex-col md:flex-row gap-4 justify-between items-center">
                <span>📍 Usmanpura, Aurangabad 431005</span>
                <span>📞 +91 97304 16763</span>
              </div>
            </motion.div>

            {/* Hero Visual - Holographic Chat Interface */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-violet-600/20 rounded-[3rem] blur-[80px] animate-pulse"></div>
              
              <div className="relative z-10 bg-[#0a0a0f]/90 p-8 rounded-[2.5rem] border border-cyan-500/20 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-auto flex items-center gap-2 text-cyan-400 text-xs font-mono">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                    AI_AGENT_ONLINE
                  </div>
                </div>
                
                <div className="space-y-6 font-mono text-sm">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400"><User size={18}/></div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none text-gray-300 border border-white/5">
                      What is the price of website development?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50"><Bot size={18} className="text-cyan-400"/></div>
                    <div className="bg-cyan-900/20 border border-cyan-500/20 p-4 rounded-2xl rounded-tr-none text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                      Our website packages start at ₹25,000. Would you like a PDF brochure or a free demo?
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400"><User size={18}/></div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none text-gray-300 border border-white/5">
                      Schedule a demo for tomorrow at 10 AM.
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50"><Bot size={18} className="text-cyan-400"/></div>
                    <div className="bg-cyan-900/20 border border-cyan-500/20 p-4 rounded-2xl rounded-tr-none text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                      Done! <span className="text-green-400">Confirmed for 10 AM tomorrow.</span> I've sent a calendar invite to your WhatsApp.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 2. WHAT ARE AI BOTS? (SEO Power Block - 500+ Words) ================= */}
        <section className="mb-32 px-4">
          <div className="bg-[#050508] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The Future of Automation in Aurangabad</h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-400 space-y-6">
              <p>
                In the hyper-connected era of 2025, speed is the only currency that truly matters. Customers in <strong>Aurangabad (Chhatrapati Sambhajinagar)</strong> have evolved; they expect instant answers on WhatsApp, Instagram, and your website at 2 AM. If you make them wait for a human reply, they don't just wait—they go to your competitor. This is where <strong>AI Chatbot Development</strong> changes the game for local businesses.
              </p>
              <p>
                Forget the "dumb" rule-based bots of the past that got stuck in loops and frustrated users. Zaikron builds <strong>Autonomous AI Agents</strong> powered by state-of-the-art LLMs like <strong>GPT-4o</strong> and <strong>Claude 3.5</strong>. These bots understand context, speak natural Marathi, Hindi, and English, handle complex sales objections, and even close deals—all while you sleep. They are not just scripts; they are virtual employees that never sleep, never take a sick day, and handle thousands of customers simultaneously.
              </p>
              
              <h3 className="text-2xl font-bold text-cyan-400 mt-8">The Local Business Advantage</h3>
              <p>
                <strong>For Manufacturing (MIDC Waluj):</strong> Imagine a bot that handles vendor queries 24/7, sending product catalogs and technical specs instantly via WhatsApp. No more missed international inquiries due to time zones.
              </p>
              <p>
                <strong>For Retail (Nirala Bazaar & Cannaught):</strong> An Instagram DM bot can automate order taking from your Stories. When a customer replies "Price?", the bot sends the price, size chart, and a payment link instantly.
              </p>
              <p>
                <strong>For Education (Cidco & Beed Bypass):</strong> A WhatsApp bot can qualify student leads, answer fee structure questions, and book counseling sessions for your coaching institute, increasing enrollment rates by 40%.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. 12 BOT TYPES (Holographic Cards) ================= */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">12 AI Agents We Build</h2>
            <p className="text-cyan-400 font-mono uppercase tracking-widest font-bold">Custom Trained on Your Data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BotCard 
              title="WhatsApp Sales Bot" 
              desc="24/7 order taking directly on WhatsApp. Catalog integration & payment links." 
              icon={<MessageCircle className="w-8 h-8"/>} 
              color="green" 
            />
            <BotCard 
              title="Instagram DM Automation" 
              desc="Auto-reply to comments & DMs. Send product links when users type 'Price'." 
              icon={<Zap className="w-8 h-8"/>} 
              color="pink" 
            />
            <BotCard 
              title="Website GPT Chatbot" 
              desc="Smart lead qualification on your site. Trained on your PDFs and website data." 
              icon={<Globe className="w-8 h-8"/>} 
              color="cyan" 
            />
            <BotCard 
              title="Voice AI Agent" 
              desc="Handles inbound/outbound phone calls with human-like voice AI." 
              icon={<Mic className="w-8 h-8"/>} 
              color="blue" 
            />
            <BotCard 
              title="RAG Knowledge Bot" 
              desc="Retrieves answers from your internal documents (PDFs, Excel) instantly." 
              icon={<Database className="w-8 h-8"/>} 
              color="violet" 
            />
            <BotCard 
              title="Omnichannel Support" 
              desc="One AI brain connected to WhatsApp, Insta, Web, and Email simultaneously." 
              icon={<BrainCircuit className="w-8 h-8"/>} 
              color="lime" 
            />
            
            {/* Additional Tags (Minimal) */}
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
              {["HR Bot", "Support Bot", "Ecommerce Bot", "Telegram Bot", "Email AI", "Survey Bot"].map((bot, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center text-sm text-gray-400 hover:border-cyan-500 hover:text-white transition-colors cursor-default font-medium">
                  {bot}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4. DEVELOPMENT PROCESS (Neon Steps) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Bot Deployment Cycle</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <ProcessStep num="01" title="Discovery" desc="Mapping your business logic & data flows." />
            <ProcessStep num="02" title="Training" desc="Fine-tuning GPT-4o on your specific data." />
            <ProcessStep num="03" title="Integration" desc="Connecting WhatsApp/IG APIs & CRM." />
            <ProcessStep num="04" title="Testing" desc="Rigorous conversation flow testing." />
            <ProcessStep num="05" title="Live" desc="Deployment & Analytics setup." />
          </div>
        </section>

        {/* ================= 5. TECH STACK (Dark Tech Grid) ================= */}
        <section className="mb-32">
          <div className="bg-[#050508] rounded-[3rem] border border-white/10 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10"></div>
            <h2 className="text-4xl font-bold text-white mb-12 text-center relative z-10">Our AI Tech Stack</h2>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <StackColumn title="AI Models" items={["GPT-4o", "Claude 3.5", "Llama 3", "Mistral"]} color="cyan"/>
              <StackColumn title="Frameworks" items={["LangChain", "Flowise", "VoiceFlow", "Botpress"]} color="violet"/>
              <StackColumn title="Backend" items={["Python FastAPI", "Node.js", "Supabase", "Pinecone DB"]} color="blue"/>
              <StackColumn title="Channels" items={["WhatsApp API", "IG Graph API", "Twilio Voice", "Telegram"]} color="green"/>
            </div>
          </div>
        </section>

        {/* ================= 6. PRICING + ROI (Glass Cards) ================= */}
        <section className="mb-32" id="pricing">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Bot Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              title="Basic Bot" 
              price="20,000" 
              monthly="₹2,000/mo"
              features={["Rule-Based Logic", "1 Channel (Web/WA)", "Basic FAQs", "Lead Capture"]}
              color="slate"
            />
            <PriceCard 
              title="AI Sales Bot" 
              price="50,000" 
              monthly="₹5,000/mo"
              features={["GPT-4o Powered", "WhatsApp + Instagram", "Smart Sales Logic", "CRM Sync"]}
              color="cyan"
              popular={true}
            />
            <PriceCard 
              title="Multi-Channel AI" 
              price="1,00,000" 
              monthly="₹10,000/mo"
              features={["Omnichannel Brain", "Voice AI Capabilities", "RAG Document Search", "Custom Dashboard"]}
              color="violet"
            />
          </div>
          
          <div className="mt-12 p-8 bg-green-900/10 border border-green-500/30 rounded-2xl text-center">
            <h4 className="text-xl font-bold text-green-400 mb-2">ROI ESTIMATOR</h4>
            <p className="text-gray-400">
              Save an average of <span className="text-white font-bold">₹25,000/month</span> in support staff salary with a single Basic Bot. Payback period: less than 1 month.
            </p>
          </div>
        </section>

        {/* ================= 7. CASE STUDIES (Dark Cards) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">AI Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudy 
              title="RESTAURANT: Manual to Auto"
              stat="300 orders/day"
              desc="A busy restaurant in Cannaught Place was overwhelmed with WhatsApp orders. We deployed an AI ordering bot that handles menus, payments, and address collection automatically."
              color="orange"
            />
            <CaseStudy 
              title="ECOMMERCE: Cart Recovery"
              stat="25% Recovery"
              desc="A local clothing brand using Shopify lost sales at checkout. Our Instagram DM Automation bot now nudges users who drop off, offering a 5% coupon code."
              color="pink"
            />
            <CaseStudy 
              title="REAL ESTATE: Lead Qualify"
              stat="60% Higher Conv."
              desc="A developer in Beed Bypass needed to filter serious buyers. Our WhatsApp bot asks budget & location preference questions before passing hot leads to sales agents."
              color="cyan"
            />
            <CaseStudy 
              title="COACHING: Voice AI"
              stat="200 calls/day"
              desc="An institute received hundreds of inquiry calls daily. Our Voice AI Agent now answers FAQ calls, details course fees, and books counseling slots automatically."
              color="blue"
            />
          </div>
        </section>

        {/* ================= 8. FAQ (Expanded & Grid Layout) ================= */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: FAQ List */}
            <div className="lg:col-span-7 space-y-4">
              <FAQItem q="How much does a chatbot cost in Aurangabad?" a="Our AI chatbot packages start at ₹20,000 for basic rule-based bots. Advanced GPT-4o powered AI agents range from ₹50,000 to ₹1,00,000 depending on complexity." />
              <FAQItem q="Can you build bots for WhatsApp Business API?" a="Yes, we specialize in WhatsApp Business API automation. We can build bots for order taking, customer support, lead qualification, and broadcast marketing." />
              <FAQItem q="Do your bots use ChatGPT technology?" a="Yes, we integrate OpenAI's GPT-4o and Claude models to create 'Smart Agents' that understand natural language, context, and can answer complex queries." />
              <FAQItem q="What happens if the bot cannot answer?" a="Our bots are designed with 'Human Handoff'. If a query is too complex, the bot seamlessly alerts your human support team to take over the chat." />
              <FAQItem q="Is monthly maintenance required?" a="Yes, AI models require tuning and API costs (WhatsApp/OpenAI) need to be managed. Our maintenance plans start at ₹2,000/month." />
              <FAQItem q="Is my business data secure with AI chatbots?" a="Absolutely. We use enterprise-grade encryption and secure servers (AWS/Azure). We can also build private LLM models that do not share your data with public AI providers." />
              <FAQItem q="Can AI chatbots increase my sales in Aurangabad?" a="Yes! Our clients in retail and real estate see a 40% increase in lead conversion because the bot responds instantly 24/7, catching leads that would otherwise be lost to competitors." />
              <FAQItem q="Do your bots integrate with my CRM?" a="We build custom integrations for Salesforce, HubSpot, Zoho, and Google Sheets. Every lead captured by the bot is automatically sent to your database." />
              <FAQItem q="How fast can you deploy a custom AI agent?" a="A basic rule-based bot can be live in 1 week. A custom-trained AI Sales Agent typically takes 3-4 weeks for training, testing, and deployment." />
              <FAQItem q="What industries do you serve for automation?" a="We serve Education (Student support), Healthcare (Appointment booking), Real Estate (Lead qualification), and E-commerce (Order tracking & Sales) across Maharashtra." />
            </div>

            {/* Right Column: SEO Power Paragraph */}
            <div className="lg:col-span-5">
              <div className="bg-[#0a0a0f] p-8 rounded-[2rem] border border-cyan-500/20 sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-900/30 rounded-full text-cyan-400"><BrainCircuit size={24}/></div>
                  <h3 className="text-xl font-bold text-white">Why Choose Zaikron AI?</h3>
                </div>
                
                <div className="prose prose-invert prose-sm text-gray-400 space-y-4 leading-relaxed">
                  <p>
                    As the leading <strong className="text-white">AI Automation Agency in Aurangabad</strong>, Zaikron stands at the forefront of the generative AI revolution. Unlike traditional software companies that offer basic script-based bots, we engineer <strong>neural AI agents</strong> capable of reasoning, empathy, and complex problem-solving.
                  </p>
                  <p>
                    We leverage the power of <strong>Python, LangChain, and Vector Databases</strong> to build RAG (Retrieval Augmented Generation) systems. This means your bot doesn't just "guess"; it references your actual business documents, PDFs, and website data to provide 100% accurate answers.
                  </p>
                  <p>
                    Whether you need a <strong>WhatsApp Bot Developer in Chhatrapati Sambhajinagar</strong> to automate your manufacturing supply chain, or an <strong>Instagram Automation Expert</strong> to scale your D2C brand, our team delivers ROI-driven solutions that pay for themselves in weeks, not years. Join the top 1% of businesses using AI to dominate their market.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/contact" className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                    Start Your AI Journey <ArrowRight size={18}/>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 9. FINAL CTA (Gradient Flow) ================= */}
        <section className="text-center p-12 rounded-[3rem] bg-gradient-to-r from-cyan-900/40 to-violet-900/40 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Automate Your Growth
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Stop losing leads to slow response times. Get a 24/7 AI Sales Agent for your business today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform">
              Start Building Now
            </Link>
            <a href="https://wa.me/919730416763" className="px-12 py-5 border border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MessageCircle size={22} /> Chat on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function BotCard({ title, desc, icon, color }: any) {
  const colors: any = {
    green: "text-green-400 border-green-500/20 bg-green-900/10 hover:border-green-500/50",
    pink: "text-pink-400 border-pink-500/20 bg-pink-900/10 hover:border-pink-500/50",
    cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-900/10 hover:border-cyan-500/50",
    blue: "text-blue-400 border-blue-500/20 bg-blue-900/10 hover:border-blue-500/50",
    violet: "text-violet-400 border-violet-500/20 bg-violet-900/10 hover:border-violet-500/50",
    lime: "text-lime-400 border-lime-500/20 bg-lime-900/10 hover:border-lime-500/50",
    orange: "text-orange-400 border-orange-500/20 bg-orange-900/10 hover:border-orange-500/50",
    purple: "text-purple-400 border-purple-500/20 bg-purple-900/10 hover:border-purple-500/50",
    teal: "text-teal-400 border-teal-500/20 bg-teal-900/10 hover:border-teal-500/50",
  }
  
  return (
    <div className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-2 duration-300 ${colors[color]}`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ProcessStep({ num, title, desc }: any) {
  return (
    <div className="bg-[#0a0a0f] border border-white/10 p-6 rounded-2xl relative z-10 hover:border-cyan-500/50 hover:shadow-lg transition-all">
      <span className="text-4xl font-display font-bold text-white/10 block mb-2">{num}</span>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}

function StackColumn({ title, items, color }: any) {
  const colors: any = {
    blue: "text-blue-400 border-blue-500/30",
    purple: "text-purple-400 border-purple-500/30",
    orange: "text-orange-400 border-orange-500/30",
    green: "text-green-400 border-green-500/30",
    cyan: "text-cyan-400 border-cyan-500/30",
    lime: "text-lime-400 border-lime-500/30",
    violet: "text-violet-400 border-violet-500/30",
  }
  return (
    <div className={`p-6 rounded-2xl bg-black/40 border ${colors[color].split(" ")[1]}`}>
      <h4 className={`font-bold mb-4 ${colors[color].split(" ")[0]}`}>{title}</h4>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-gray-400 text-sm flex items-center gap-2 font-medium">
            <div className={`w-1.5 h-1.5 rounded-full ${colors[color].split(" ")[0].replace("text", "bg")}`}></div> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PriceCard({ title, price, monthly, features, color, popular }: any) {
  const isPopular = popular ? 'border-cyan-500 bg-cyan-900/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border-white/10 bg-white/5 hover:border-white/20';
  const textColor = popular ? 'text-cyan-400' : 'text-gray-300';
  const btnColor = popular ? 'bg-cyan-500 text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20';

  return (
    <div className={`p-8 rounded-[2.5rem] border relative flex flex-col transition-all duration-300 ${isPopular}`}>
      {popular && <div className="absolute top-6 right-6 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">RECOMMENDED</div>}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">₹{price}</span>
        <span className="text-sm text-gray-400 block mt-1">+ {monthly}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="text-sm text-gray-400 flex gap-2">
            <Check size={16} className="text-green-400" /> {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={`w-full py-3 rounded-xl font-bold text-center transition-all ${btnColor}`}>
        Select Plan
      </Link>
    </div>
  )
}

function CaseStudy({ title, stat, desc, color }: any) {
  const colors: any = {
    orange: "text-orange-400 border-orange-500/30",
    pink: "text-pink-400 border-pink-500/30",
    cyan: "text-cyan-400 border-cyan-500/30",
    blue: "text-blue-400 border-blue-500/30",
    lime: "text-lime-400 border-lime-500/30",
  }
  return (
    <div className={`p-8 rounded-[2rem] bg-[#0a0a0f] border ${colors[color].split(" ")[1]} hover:border-opacity-100 transition-all`}>
      <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${colors[color].split(" ")[0]}`}>{title}</div>
      <div className="text-3xl font-bold text-white mb-4">{stat}</div>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function FAQItem({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left text-white font-bold hover:text-cyan-400 transition-colors"
      >
        {q}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-500'}`} />
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
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}