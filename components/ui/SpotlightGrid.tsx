'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function SpotlightGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: { clientX: number, clientY: number }) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* The Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      
      {/* The Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 opacity-100 bg-grid"
        style={{
          maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
          backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.2) 1px, transparent 1px)`
        }}
      />
    </div>
  );
}