import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/ui/SmoothScroll"; // Updated import path

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const space = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space' 
});

export const metadata: Metadata = {
  title: "Zaikron | Building the Digital Future",
  description: "Top-tier web and app development agency in Chhatrapati Sambhajinagar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-void text-white antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}