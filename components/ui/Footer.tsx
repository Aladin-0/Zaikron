'use client';

import { MapPin, Phone, Mail, Instagram, ArrowUpRight, Copy, Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050508] pt-4 pb-24 md:pt-20 md:pb-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(112,0,255,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-1 md:px-6 max-w-[90rem] relative z-10">
        
        {/* --- THE MAIN CONTROL GRID --- */}
        <div className="grid grid-cols-12 gap-1 md:gap-6">
          
          {/* COLUMN 1: BRAND & LOCATION */}
          <div className="col-span-5 lg:col-span-5 flex flex-col gap-1 md:gap-6">
            
            {/* Brand Block WITH LOGO */}
            <div className="group relative p-3 md:p-12 rounded-lg md:rounded-3xl bg-white/5 border-t border-l border-white/10 shadow-2xl overflow-hidden hover:bg-white/[0.07] transition-colors">
                
              {/* Flex Container for Logo + Text */}
              <div className="flex items-center gap-3 md:gap-8 mb-2 md:mb-4">
                
                {/* --- NEW: DYNAMIC ISLAND STYLE LOGO CONTAINER --- */}
                <div className="relative shrink-0 flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-xl w-12 h-12 p-0 md:rounded-3xl md:w-24 md:h-24 md:p-1 group-hover:border-neon-cyan/30 transition-all duration-500">
                  {/* Inner Image */}
                  <div className="relative w-full h-full">
                    <Image 
                      src="/logo/Zaikron.png" 
                      alt="Zaikron Logo" 
                      fill
                      className="object-contain drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                    />
                  </div>
                </div>

                {/* The Text */}
                <h2 className="text-2xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                  ZAIKRON
                </h2>
              </div>

              <p className="text-[6px] md:text-base font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1 md:gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                | Chhatrapati Sambhajinagar
              </p>
              
              {/* Decorative Blur */}
              <div className="absolute -right-10 -bottom-10 w-24 h-36 md:w-48 md:h-48 bg-neon-cyan/10 rounded-full blur-xl md:blur-3xl group-hover:bg-neon-cyan/20 transition-all"></div>
            </div>

            {/* Address Block */}
            <div className="flex-grow p-2 md:p-8 rounded-lg md:rounded-3xl bg-[#0a0a0f] border-t border-l border-white/10 relative group">
              <div className="flex items-start gap-1 md:gap-4">
                <MapPin className="text-neon-cyan w-3 h-3 md:w-6 md:h-6 mt-0.5 md:mt-1 shrink-0" />
                <div>
                  <span className="text-[5px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5 md:mb-2 block">Headquarters</span>
                  <address className="text-gray-300 not-italic text-[9px] md:text-sm leading-tight md:leading-relaxed font-light">
                    Costa Mapal, Peer Bazar Rd,<br/>
                    New Usmanpura, <br/>
                    <strong className="text-white font-medium">Chhatrapati Sambhajinagar</strong>,<br/>
                    Maharashtra 431005
                  </address>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Zaikron+Aurangabad" 
                target="_blank"
                rel="noreferrer" 
                className="hidden md:block absolute top-8 right-8 text-gray-600 hover:text-white transition-colors"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

          </div>

          {/* COLUMN 2: COMMUNICATION ARRAY */}
          <div className="col-span-4 lg:col-span-4 flex flex-col gap-1 md:gap-6">
            
            {/* Primary Phone */}
            <a 
              href="tel:+919730416763"
              className="flex-1 p-2 md:p-6 rounded-lg md:rounded-3xl bg-[#0a0a0f] border-t border-l border-white/10 hover:border-neon-purple/50 group transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-1 md:gap-4">
                <div className="hidden md:block p-3 rounded-xl bg-neon-purple/10 text-neon-purple group-hover:bg-neon-purple group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[5px] md:text-xs font-mono text-gray-500 uppercase block">Primary Contact</span>
                  <span className="text-[6px] md:text-xl font-bold text-white group-hover:text-neon-purple transition-colors">+91 97304 16763</span>
                </div>
              </div>
              <ArrowUpRight className="hidden md:block text-gray-600 group-hover:text-white transition-colors" />
            </a>

            {/* Secondary Phone */}
            <a 
              href="tel:+917083321725"
              className="flex-1 p-2 md:p-6 rounded-lg md:rounded-3xl bg-[#0a0a0f] border-t border-l border-white/10 hover:border-white/30 group transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-1 md:gap-4">
                <div className="hidden md:block p-3 rounded-xl bg-white/5 text-gray-400 group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[5px] md:text-xs font-mono text-gray-500 uppercase block">Support Line</span>
                  <span className="text-[6px] md:text-xl font-bold text-white">+91 70833 21725</span>
                </div>
              </div>
            </a>

            {/* Email Module */}
            <CopyModule label="Email Uplink" value="hello@zaikron.com" icon={<Mail size={20} />} />

          </div>

          {/* COLUMN 3: NAVIGATION & SOCIALS */}
          <div className="col-span-3 lg:col-span-3 flex flex-col gap-1 md:gap-6">
            
            {/* Directory */}
            <div className="p-2 md:p-8 rounded-lg md:rounded-3xl bg-white/5 border-t border-l border-white/10">
              <span className="text-[5px] md:text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1 md:mb-4">Directory</span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-0.5 md:gap-3">
                {['Services', 'Work', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-white/20 group-hover:bg-neon-cyan transition-colors"></div>
                      <span className="text-[5px] md:text-sm font-medium uppercase tracking-wide">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919730416763" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 md:p-5 rounded-lg md:rounded-3xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-t border-l border-white/10 hover:from-green-900/40 hover:to-emerald-900/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-1 md:gap-3">
                <MessageCircle className="text-green-400 group-hover:scale-110 transition-transform w-3 h-3 md:w-6 md:h-6" />
                <div>
                  <span className="block font-bold text-white text-[5px] md:text-sm">WhatsApp</span>
                  <span className="hidden md:block text-[10px] text-gray-500 uppercase tracking-wider">Instant Reply</span>
                </div>
              </div>
              <ArrowUpRight className="hidden md:block text-white/50 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Instagram Button */}
            <a 
              href="https://www.instagram.com/zaikronstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 md:p-5 rounded-lg md:rounded-3xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-l border-white/10 hover:from-purple-900/40 hover:to-pink-900/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-1 md:gap-3">
                <Instagram className="text-pink-400 group-hover:scale-110 transition-transform w-3 h-3 md:w-6 md:h-6" />
                <div>
                  <span className="block font-bold text-white text-[5px] md:text-sm">@zaikron</span>
                  <span className="hidden md:block text-[10px] text-gray-500 uppercase tracking-wider">Follow Us</span>
                </div>
              </div>
              <ArrowUpRight className="hidden md:block text-white/50 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

        {/* --- COMPACT BOTTOM BAR --- */}
        <div className="mt-2 md:mt-12 pt-2 md:pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4">
          <p className="text-[5px] md:text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Zaikron Technologies. All Rights Reserved.
          </p>
          <a href="/sitemap.xml" className="text-[10px] text-gray-600 hover:text-white uppercase tracking-widest">
            Sitemap
          </a>
        </div>

      </div>
    </footer>
  );
}

// --- SUB-COMPONENT: COPY MODULE ---
function CopyModule({ label, value, icon }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={handleCopy}
      className="p-2 md:p-6 rounded-lg md:rounded-3xl bg-[#0a0a0f] border-t border-l border-white/10 hover:bg-white/5 cursor-pointer group transition-all flex items-center justify-between"
    >
      <div className="flex items-center gap-1 md:gap-4">
        <div className="hidden md:block p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-neon-pink transition-colors">
          {icon}
        </div>
        <div>
          <span className="text-[5px] md:text-xs font-mono text-gray-500 uppercase block md:mb-1">{label}</span>
          <span className="text-[6px] md:text-xl font-bold text-white group-hover:text-neon-pink transition-colors break-all">{value}</span>
        </div>
      </div>
      <div className="hidden md:block text-gray-600 group-hover:text-white transition-colors">
        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
      </div>
    </div>
  );
}