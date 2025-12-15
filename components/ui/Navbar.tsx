'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { House, Zap, FolderOpen, User, MessageCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: <House size={20} /> },
  { name: 'Services', href: '/services', icon: <Zap size={20} /> },
  { name: 'Work', href: '/work', icon: <FolderOpen size={20} /> },
  { name: 'About', href: '/about', icon: <User size={20} /> }, 
  { name: 'Contact', href: '/contact', icon: <MessageCircle size={20} /> },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- SCROLL LOGIC ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > lastScrollY;
    const isAtTop = latest < 100;

    if (isAtTop) {
      setIsExpanded(true);
    } else if (isScrollingDown) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }

    setLastScrollY(latest);
  });

  // Force expand on hover
  const showFullNav = isExpanded || isHovered;

  return (
    <>
      {/* --- UNIFIED DYNAMIC ISLAND (Top Center for Both Mobile & Desktop) --- */}
      <div 
        className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-start justify-center w-full px-2 md:px-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          layout
          initial={{ width: 280, height: 60, borderRadius: 32 }}
          animate={{ 
            // Responsive Width: 550px on Desktop, but max 95% of screen on Mobile
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
          
          {/* Active Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-50 pointer-events-none"></div>

          {/* NAV ITEMS CONTAINER */}
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

// --- SUB-COMPONENT: NAV ITEM ---
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
        {/* ICON */}
        <motion.div layout="position" className="relative z-10">
          {item.icon}
        </motion.div>

        {/* LABEL (Animate In/Out) */}
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

        {/* ACTIVE DOT (Only appears when shrunk) */}
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