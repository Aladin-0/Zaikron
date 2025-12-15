'use client';

import { motion, Variants, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Globe, Smartphone, Share2, Bot, CheckCircle2, Zap, TrendingUp, Shield, Users, X, Check } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ContactModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const services = [
    { value: "", label: "Select a service..." },
    { value: "website", label: "Website Development (₹10,000+)" },
    { value: "app", label: "App Development iOS/Android (₹70,000+)" },
    { value: "marketing", label: "Social Media Marketing (₹10,000+)" },
    { value: "ai", label: "AI Chatbot & Automation (₹10,000+)" },
    { value: "seo", label: "SEO & Content Strategy" },
    { value: "full", label: "Full Digital Transformation" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 5000);
  };

  return (
    <div ref={ref} className="relative bg-[#050508] overflow-hidden">
      
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-[150px] mix-blend-screen opacity-30"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 0.95, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-tl from-indigo-900 to-purple-900 rounded-full blur-[150px] opacity-40"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-[120px] opacity-20"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* === HERO SECTION === */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 py-32"
        >
          
          {/* LEFT COLUMN */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center">
            
            <motion.div variants={fadeInDown} className="mb-4">
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs font-mono text-neon-cyan uppercase tracking-[0.3em] block mb-4"
              >
                /// LET'S CONNECT
              </motion.span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8"
            >
              Get Your Free <br/>
              <motion.span 
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-[length:200%_auto]"
              >
                Digital Strategy
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-400 leading-relaxed max-w-lg mb-12"
            >
              Contact <strong className="text-white">Zaikron</strong>, the <strong className="text-white">#1 web development company in Aurangabad</strong>. From <strong className="text-white">website development</strong> to <strong className="text-white">app development</strong> and <strong className="text-white">social media marketing</strong>, we deliver digital excellence.
            </motion.p>

            {/* CONTACT CARDS */}
            <motion.div variants={stagger} className="space-y-6 mb-16">
              
              <motion.a 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, x: 10 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919730416763" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-neon-cyan/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/30 to-green-400/20 flex items-center justify-center text-green-400 shrink-0 relative z-10"
                >
                  <Phone size={24} />
                </motion.div>
                <div className="flex-1 relative z-10">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">Direct Line / WhatsApp</span>
                  <span className="text-2xl font-bold text-white">+91 97304 16763</span>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="text-gray-600 group-hover:text-neon-cyan transition-colors" />
                </motion.div>
              </motion.a>

              <motion.a 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, x: 10 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hello@zaikron.com" 
                className="group flex items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-neon-purple/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  whileHover={{ rotate: -360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-400/20 flex items-center justify-center text-purple-400 shrink-0 relative z-10"
                >
                  <Mail size={24} />
                </motion.div>
                <div className="flex-1 relative z-10">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">Email Inquiries</span>
                  <span className="text-2xl font-bold text-white">hello@zaikron.com</span>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  <ArrowUpRight className="text-gray-600 group-hover:text-neon-purple transition-colors" />
                </motion.div>
              </motion.a>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 rounded-3xl border border-neon-cyan/20 bg-gradient-to-br from-neon-cyan/5 to-transparent relative overflow-hidden group"
              >
                <motion.div 
                  className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="text-neon-cyan mt-1 shrink-0" size={24} />
                  </motion.div>
                  <address className="text-gray-300 not-italic leading-relaxed">
                    <strong className="text-white block text-lg mb-2">Headquarters</strong>
                    Costa Mapal, Peer Bazar Rd,<br/>
                    New Usmanpura, <strong>Chhatrapati Sambhajinagar</strong>,<br/>
                    Maharashtra 431005, India
                  </address>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div 
            variants={scaleIn}
            className="relative lg:h-full flex items-center justify-end"
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="w-full p-10 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#0a0a0f]/90 to-[#0a0a0f]/80 backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden group">
              
              <motion.div 
                className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-gradient-to-br from-orange-500/15 to-purple-500/15 rounded-full blur-[100px] pointer-events-none"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.h3 
                variants={fadeInUp}
                className="text-3xl font-bold text-white mb-2"
              >
                Get Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Consultation</span>
              </motion.h3>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 mb-8 text-sm"
              >
                Fill this form and we'll respond within 24 hours with a custom proposal.
              </motion.p>

              <motion.form 
                variants={stagger}
                className="space-y-6 relative z-10"
                onSubmit={handleSubmit}
              >
                <motion.div variants={fadeInUp} className="group">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block group-focus-within:text-neon-cyan transition-colors">Your Name *</label>
                  <motion.input 
                    type="text" 
                    placeholder="Rahul Kumar" 
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-white text-lg focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700 placeholder:font-light"
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp} className="group">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block group-focus-within:text-neon-cyan transition-colors">Contact Number *</label>
                  <motion.input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-white text-lg focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700 placeholder:font-light"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="group relative">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block group-focus-within:text-neon-cyan transition-colors">Service Interest *</label>
                  <div className="relative">
                    <motion.button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-transparent border-b-2 border-white/20 py-4 text-left text-lg focus:outline-none focus:border-neon-cyan transition-all flex items-center justify-between"
                    >
                      <span className={selectedService ? "text-white" : "text-gray-700 font-light"}>
                        {services.find(s => s.value === selectedService)?.label || "Select a service..."}
                      </span>
                      <motion.svg
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>
                    
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-[#1a1a2e] border border-white/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
                        >
                          {services.slice(1).map((service, index) => (
                            <motion.button
                              key={service.value}
                              type="button"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ 
                                backgroundColor: "rgba(0, 255, 255, 0.1)",
                                x: 5
                              }}
                              onClick={() => {
                                setSelectedService(service.value);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-6 py-4 text-left text-white hover:text-neon-cyan transition-all duration-200 border-b border-white/5 last:border-b-0 flex items-center justify-between group"
                            >
                              <span>{service.label}</span>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="w-2 h-2 rounded-full bg-neon-cyan"
                              />
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 block group-focus-within:text-neon-cyan transition-colors">Project Description *</label>
                  <motion.textarea 
                    rows={4} 
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Tell us about your project, goals, budget, and timeline..." 
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-white text-lg focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700 placeholder:font-light resize-none"
                  />
                </motion.div>

                <motion.button 
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-5 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold text-lg uppercase tracking-widest rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.p variants={fadeInUp} className="text-xs text-gray-500 text-center">
                  ✓ Free consultation • ✓ 24-hour response • ✓ No commitment
                </motion.p>
              </motion.form>

            </div>
          </motion.div>

        </motion.div>

        {/* === SUCCESS POPUP === */}
        <AnimatePresence>
          {showSuccessPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSuccessPopup(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: 90 }}
                transition={{ type: "spring", duration: 0.6 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full p-10 rounded-3xl bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border-2 border-neon-cyan/30 shadow-2xl overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 rounded-full blur-3xl"
                />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowSuccessPopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X size={24} />
                </motion.button>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative z-10 flex justify-center mb-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                    />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <Check size={40} className="text-white" strokeWidth={3} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center relative z-10"
                >
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Thank you for contacting Zaikron. We'll respond within 24 hours with a custom proposal.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      { text: "Consultation confirmed", delay: 0.5 },
                      { text: "Team notified", delay: 0.7 },
                      { text: "Proposal in progress", delay: 0.9 }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay }}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: item.delay + 0.2, type: "spring" }}
                        >
                          <CheckCircle2 size={18} className="text-neon-cyan" />
                        </motion.div>
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 4.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink origin-left"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* === TRUST SIGNALS SECTION === */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-20 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users size={32} />, num: "50+", label: "Happy Clients" },
              { icon: <TrendingUp size={32} />, num: "300%", label: "Avg Growth" },
              { icon: <Shield size={32} />, num: "8+", label: "Years Experience" },
              { icon: <Zap size={32} />, num: "100%", label: "Satisfaction Rate" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-all"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className="text-neon-cyan mb-3 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.num}
                </motion.p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === WHY CHOOSE ZAIKRON === */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 border-t border-white/10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Zaikron</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "SEO-First Design",
                desc: "Every website ranks on Google. We implement structured data, optimize page speed, and build semantic silo architecture."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                desc: "95+ PageSpeed scores. We compress, optimize, and deploy on CDNs for sub-3-second load times globally."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Results",
                desc: "50+ clients. 300% average growth. Real case studies with documented ROI and ranking improvements."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dedicated Support",
                desc: "24/7 technical support, regular updates, performance monitoring. Your success is our priority."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Compliant",
                desc: "SSL encryption, GDPR compliant, malware scanning, automatic backups. Your data is protected."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Latest Technology",
                desc: "Next.js, React, Node.js, TypeScript. We use modern, scalable tech stacks for future-proof solutions."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ translateY: -10, scale: 1.03, rotateY: 5 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                  className="text-neon-cyan mb-4 relative z-10"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === SERVICES OVERVIEW WITH PILLAR PAGES === */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 border-t border-white/10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-center"
          >
            Our Service Clusters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16"
          >
            Organized in topic silos for comprehensive, interconnected digital solutions
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                color: "from-neon-cyan",
                title: "Web Development Pillar",
                desc: "Custom Next.js & React websites built for Google rankings, fast loading (95+ PageSpeed), and conversion optimization.",
                subtopics: ["Next.js Development", "SEO Architecture", "E-commerce Platforms", "Performance Optimization"]
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                color: "from-neon-purple",
                title: "App Development Pillar",
                desc: "Native iOS/Android apps, React Native cross-platform solutions, and progressive web apps with app store deployment.",
                subtopics: ["Native iOS Apps", "Android Development", "React Native", "PWA Development"]
              },
              {
                icon: <Share2 className="w-10 h-10" />,
                color: "from-neon-pink",
                title: "Social Media Marketing Pillar",
                desc: "Instagram marketing, Facebook ads, Google Ads management, and content creation for 200%+ ROI on ad spend.",
                subtopics: ["Instagram Marketing", "Facebook Ads", "Google Ads", "Content Creation"]
              },
              {
                icon: <Bot className="w-10 h-10" />,
                color: "from-green-400",
                title: "AI & Automation Pillar",
                desc: "ChatGPT chatbots, WhatsApp automation, lead generation bots, reducing manual work by 70% with 24/7 operation.",
                subtopics: ["ChatGPT Integration", "WhatsApp Bots", "Lead Bots", "Workflow Automation"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.3 }}
                  transition={{ duration: 0.8 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} to-transparent mb-6 inline-block relative z-10`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{service.desc}</p>
                <div className="space-y-2 relative z-10">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Subtopic Clusters:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.subtopics.map((topic, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/20 text-xs text-gray-300 hover:text-white hover:border-white/40 transition-all cursor-pointer"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === COMPREHENSIVE FAQ === */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 border-t border-white/10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-white mb-16 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { q: "How much does website development cost?", a: "Basic: ₹10K | Custom: ₹50K-2L | E-commerce: ₹1L-5L+. Get free custom quote." },
              { q: "What's your typical project timeline?", a: "Basic websites: 2-4 weeks | Custom: 4-8 weeks | Complex: 8-12 weeks." },
              { q: "Do you provide ongoing support?", a: "Yes! Maintenance packages, 24/7 support, regular updates, and monitoring included." },
              { q: "Can you guarantee Google rankings?", a: "We can't guarantee #1, but our SEO-first approach consistently ranks clients top 3 locally." },
              { q: "Do you create content for SEO?", a: "Yes, we create SEO-optimized content, blog posts, and implement schema markup for snippets." },
              { q: "Can I upgrade my website later?", a: "Absolutely! Scalable architecture means adding features, pages, and integrations anytime." },
              { q: "What technologies do you use?", a: "Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, Google Cloud, CDN." },
              { q: "Do you work with established websites?", a: "Yes, we redesign, optimize, migrate, and improve existing websites with 0 downtime." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-neon-cyan/30 transition-all duration-300 cursor-help relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-2 relative z-10">
                  <span className="text-neon-cyan text-2xl mt-1">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-400 leading-relaxed flex items-start gap-2 relative z-10">
                  <span className="text-neon-cyan text-xl mt-1">A</span>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === FINAL CTA === */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 border-t border-white/10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Dominate Online</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Let's discuss how Zaikron can help your business grow with web development, app creation, digital marketing, and AI automation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919730416763" 
                className="px-10 py-5 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold text-lg rounded-full hover:shadow-lg transition-all"
              >
                📞 Call Now: +91 97304 16763
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@zaikron.com" 
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all"
              >
                ✉️ Email: hello@zaikron.com
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}