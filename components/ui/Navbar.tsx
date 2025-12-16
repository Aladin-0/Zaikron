'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { House, Zap, FolderOpen, User, MessageCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: <House size={18} /> },
  { name: 'Services', href: '/services', icon: <Zap size={18} /> },
  { name: 'Work', href: '/work', icon: <FolderOpen size={18} /> },
  { name: 'About', href: '/about', icon: <User size={18} /> }, 
  { name: 'Contact', href: '/contact', icon: <MessageCircle size={18} /> },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLogoText, setShowLogoText] = useState(true); 

  // --- SCROLL LOGIC ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > lastScrollY;
    const isAtTop = latest < 50;

    // Calculate if we are at the bottom of the page
    // (Document Height - Window Height)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const isAtBottom = latest >= maxScroll - 50; // 50px buffer zone
    const isMobile = window.innerWidth < 768;

    // 1. Logo Logic
    if (isAtTop) setShowLogoText(true);
    else if (isScrollingDown) setShowLogoText(false);
    else setShowLogoText(true);

    // 2. Navbar Logic
    if (isAtTop) {
      setIsExpanded(true);
    } 
    // UPDATED: If on Mobile AND at Bottom -> Force Expand
    else if (isMobile && isAtBottom) {
      setIsExpanded(true);
    }
    else if (isScrollingDown) {
      setIsExpanded(false);
    } 
    else {
      setIsExpanded(true);
    }

    setLastScrollY(latest);
  });

  const showFullNav = isExpanded || isHovered;

  return (
    <>
      {/* ==================================================================
          1. GOD-TIER LOGO CONTAINER (Thinner & Sleeker)
         ================================================================== */}
      <motion.div 
        layout
        initial={{ width: 150, borderRadius: 24 }}
        animate={{ 
          // Text Mode: 160px width | Logo Mode: 48px width (Perfect Circle)
          width: showLogoText ? 160 : 48, 
          height: 48, // Reduced from 60px to 48px (Thinner)
          borderRadius: 24, // Matches height for perfect pill
          backgroundColor: showLogoText ? "rgba(5, 5, 8, 0.85)" : "rgba(5, 5, 8, 0.6)", 
          borderColor: showLogoText ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 255, 255, 0.3)",
          boxShadow: showLogoText 
            ? "0 8px 20px -8px rgba(0,0,0,0.8)" 
            : "0 0 25px -5px rgba(0, 255, 255, 0.4)" 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 180, 
          damping: 20,
          mass: 1
        }}
        className="fixed top-6 left-4 md:left-8 z-[60] flex items-center justify-center backdrop-blur-xl border overflow-hidden"
      >
         {/* 1. BACKGROUND GLOW */}
         <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-50 pointer-events-none"></div>

         {/* 2. NEURAL CIRCUITRY OVERLAY */}
         <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="absolute top-0 bottom-0 w-[30px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent skew-x-12"
            />
         </div>

        <Link href="/" className="relative flex items-center justify-center w-full h-full z-10">
          <AnimatePresence mode="wait"> 
            
            {showLogoText ? (
              // STATE 1: HOLOGRAPHIC TEXT CONSTRUCTION
              <NeuralConstructText key="text" />
            ) : (
              // STATE 2: CORE REACTIVATION (LOGO)
              <NeuralCoreLogo key="logo" />
            )}

          </AnimatePresence>
        </Link>
      </motion.div>

      {/* ==================================================================
          2. MAIN NAVBAR (Bottom on Mobile, Top on Desktop)
         ================================================================== */}
      <div 
        className="fixed bottom-6 md:bottom-auto md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-start justify-center w-full px-2 md:px-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          layout
          initial={{ width: 280, height: 60, borderRadius: 32 }}
          animate={{ 
            width: showFullNav ? "min(550px, 95vw)" : "min(280px, 70vw)",
            height: 60,
            borderRadius: 32,
            backgroundColor: showFullNav ? "rgba(5, 5, 8, 0.85)" : "rgba(5, 5, 8, 0.6)"
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1.0] 
          }}
          style={{ willChange: "width, height, background-color" }}
          className="relative flex items-center justify-between px-2 md:px-3 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-50 pointer-events-none"></div>

          <div className="flex items-center justify-between w-full gap-0 md:gap-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.name} 
                item={item} 
                showLabel={showFullNav} 
              />
            ))}
          </div>

        </motion.div>
      </div>
    </>
  );
}

// --- COMPLEX ANIMATION COMPONENT 1: NEURAL TEXT ---
function NeuralConstructText() {
  const text = "ZAIKRON";
  
  return (
    <motion.div 
      className="relative flex items-center gap-[1px]"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15, filter: "blur(8px)", scale: 1.2 },
            visible: { 
              opacity: 1, y: 0, filter: "blur(0px)", scale: 1,
              transition: { 
                type: "spring", stiffness: 200, damping: 12, 
                delay: i * 0.04 
              } 
            },
            exit: { 
              opacity: 0, y: -15, filter: "blur(8px)", scale: 0.8,
              transition: { duration: 0.2, delay: i * 0.02 } 
            }
          }}
          // Adjusted font size for thinner container
          className="text-lg md:text-xl font-display font-black tracking-widest text-white relative z-10"
          style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.1)" }}
        >
          {char}
        </motion.span>
      ))}
      
      <motion.div
        initial={{ opacity: 1, x: -8 }}
        animate={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 text-cyan-400 font-display font-black tracking-widest mix-blend-screen pointer-events-none select-none text-lg md:text-xl"
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: 8 }}
        animate={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 text-red-500 font-display font-black tracking-widest mix-blend-screen pointer-events-none select-none text-lg md:text-xl"
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

// --- COMPLEX ANIMATION COMPONENT 2: NEURAL CORE (LOGO) ---
function NeuralCoreLogo() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      
      {/* 1. The Shockwave Ring */}
      <motion.div
        initial={{ scale: 0, opacity: 1, borderWidth: "3px" }}
        animate={{ scale: 2.5, opacity: 0, borderWidth: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full border border-cyan-400 z-0"
      />

      {/* 2. Rotating Data Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-3px] rounded-full border border-dashed border-cyan-500/40 z-0"
      />

      {/* 3. The Logo */}
      <motion.div
        initial={{ scale: 0, rotate: 90, filter: "blur(8px)" }}
        animate={{ 
          scale: 1, 
          rotate: 0, 
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 200, damping: 15 } 
        }}
        exit={{ scale: 0, rotate: -90, filter: "blur(8px)", opacity: 0 }}
        className="relative w-7 h-7 z-10" // Adjusted size for thinner container
      >
        <Image 
          src="/logo/Zaikron.png" 
          alt="Zaikron Logo" 
          fill
          className="object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
          priority
        />
      </motion.div>
    </div>
  );
}

// --- SUB-COMPONENT 3: NAV ITEMS ---
function NavItem({ item, showLabel }: { item: any, showLabel: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link href={item.href} className="relative flex-1 flex justify-center">
      <motion.div
        layout="position"
        className={`
          group flex items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer
          ${isActive 
            ? 'bg-white/10 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
          }
        `}
      >
        <motion.div layout="position" className="relative z-10">
          {item.icon}
        </motion.div>

        <AnimatePresence mode="popLayout">
          {showLabel && (
            <motion.span
              initial={{ opacity: 0, width: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, width: "auto", filter: "blur(0px)" }}
              exit={{ opacity: 0, width: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap overflow-hidden"
            >
              {item.name}
            </motion.span>
          )}
        </AnimatePresence>

        {isActive && !showLabel && (
          <motion.div 
            layoutId="active-dot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-1 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_5px_#00f3ff]"
          />
        )}

      </motion.div>
    </Link>
  );
}