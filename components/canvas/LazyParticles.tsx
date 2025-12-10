'use client';
import dynamic from 'next/dynamic';
// Loading the new Monolith
const GlassMonolith = dynamic(() => import('./GlassMonolith'), { ssr: false });
export default function LazyParticles() { return <GlassMonolith />; }