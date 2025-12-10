'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

// We use 'any' for children here to bypass the React 18 'bigint' type conflict
// This is safe because we are just passing the content through.
export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}