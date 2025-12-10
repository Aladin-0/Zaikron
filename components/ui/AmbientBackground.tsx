'use client';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-void">
      {/* Primary Aura (Top Center) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cobalt-DEFAULT rounded-full blur-[120px] opacity-30"
      />
      
      {/* Secondary Aura (Bottom Right) */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cobalt-dim rounded-full blur-[100px] opacity-20"
      />
      
      {/* Grain Overlay for Texture (Makes it look like film) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
}