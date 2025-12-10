import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050508", // Darker, richer black
        card: "rgba(255, 255, 255, 0.03)",
        neon: {
          cyan: "#00f3ff",
          purple: "#7000ff",
          pink: "#ff0099",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space)'],
      },
      backgroundImage: {
        // A complex, moving gradient mesh
        'prism-gradient': 'linear-gradient(to bottom right, #050508, #0a0a12)',
        'aurora': 'conic-gradient(from 180deg at 50% 50%, #00f3ff -10%, #7000ff 40%, #ff0099 110%)'
      }
    },
  },
  plugins: [],
};
export default config;