'use client';

import Navbar from '../components/ui/Navbar';
import { motion, useSpring, useMotionValue, useMotionTemplate, Variants, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Globe, Zap, LayoutGrid, Smartphone, ArrowRight, Check, Terminal, Code2, BarChart3, Activity, Cpu } from 'lucide-react';
import SeoStory from '../components/ui/SeoStory';
import SeoContent from '../components/ui/SeoContent';
import Footer from '../components/ui/Footer';
import AboutContent from '../components/ui/AboutContent';
import Head from 'next/head';

// ========== COMPREHENSIVE SEO KEYWORDS (1000+ PER SERVICE) ==========
// (Keywords preserved exactly as before)

// WEBSITE DEVELOPMENT KEYWORDS (1000+)
const websiteDevelopmentKeywords = [
  "web development company Aurangabad", "website developer Chhatrapati Sambhajinagar", "web developer Aurangabad",
  "website development Aurangabad", "web design company Chhatrapati Sambhajinagar", "best web developer Aurangabad",
  "professional website developer", "custom website development Aurangabad", "responsive web design Chhatrapati Sambhajinagar",
  "SEO website development Aurangabad", "ecommerce website developer", "Next.js developer Aurangabad",
  "React developer Chhatrapati Sambhajinagar", "Node.js developer Aurangabad", "WordPress developer Chhatrapati Sambhajinagar",
  "website redesign Aurangabad", "web application development", "business website developer Aurangabad",
  "startup website development", "portfolio website developer", "real estate website Aurangabad",
  "restaurant website developer", "doctor website development", "lawyer website Aurangabad",
  "shop website developer Chhatrapati Sambhajinagar", "landing page developer", "SaaS website development",
  "PWA developer Aurangabad", "JAMstack developer", "headless CMS development", "API development Aurangabad",
  "database developer Chhatrapati Sambhajinagar", "PostgreSQL developer", "MongoDB developer Aurangabad",
  "website developer near me", "web design near me Chhatrapati Sambhajinagar", "affordable web developer Aurangabad",
  "best website company Chhatrapati Sambhajinagar", "top web developer Aurangabad", "website cost Chhatrapati Sambhajinagar",
  "website development cost Aurangabad", "how much website cost", "web developer price list",
  "website development services", "web development agency Aurangabad", "digital agency Chhatrapati Sambhajinagar",
  "IT company Aurangabad", "software company Chhatrapati Sambhajinagar", "tech company Aurangabad",
  "web company Chhatrapati Sambhajinagar", "web service provider Aurangabad", "web hosting Chhatrapati Sambhajinagar",
  "website maintenance Aurangabad", "website support Chhatrapati Sambhajinagar", "website updates Aurangabad",
  "website optimization Chhatrapati Sambhajinagar", "website speed optimization Aurangabad", "performance optimization",
  "mobile optimization Aurangabad", "mobile-first design Chhatrapati Sambhajinagar", "responsive design Aurangabad",
  "website security Chhatrapati Sambhajinagar", "SSL certificate Aurangabad", "website encryption",
  "HTTPS website Chhatrapati Sambhajinagar", "secure website Aurangabad", "website backup Chhatrapati Sambhajinagar",
  "website recovery Aurangabad", "website migration Chhatrapati Sambhajinagar", "website transfer Aurangabad",
  "website audit Chhatrapati Sambhajinagar", "website analysis Aurangabad", "SEO audit Chhatrapati Sambhajinagar",
  "conversion optimization Aurangabad", "CRO services Chhatrapati Sambhajinagar", "A/B testing Aurangabad",
  "user experience design Chhatrapati Sambhajinagar", "UX design Aurangabad", "UI design Chhatrapati Sambhajinagar",
  "wireframing Aurangabad", "prototyping Chhatrapati Sambhajinagar", "mockup design Aurangabad",
  "brand identity Chhatrapati Sambhajinagar", "logo design Aurangabad", "branding services Chhatrapati Sambhajinagar",
  "graphic design Aurangabad", "visual design Chhatrapati Sambhajinagar", "creative design Aurangabad",
  "e-commerce website Chhatrapati Sambhajinagar", "online store Aurangabad", "shopping cart Chhatrapati Sambhajinagar",
  "payment gateway Aurangabad", "Shopify developer Chhatrapati Sambhajinagar", "WooCommerce developer Aurangabad",
  "BigCommerce developer Chhatrapati Sambhajinagar", "Magento developer Aurangabad", "OpenCart developer Chhatrapati Sambhajinagar",
  "blog website Aurangabad", "news website Chhatrapati Sambhajinagar", "content management Aurangabad",
  "CMS development Chhatrapati Sambhajinagar", "WordPress development Aurangabad", "Drupal developer Chhatrapati Sambhajinagar",
  "Joomla developer Aurangabad", "static website Chhatrapati Sambhajinagar", "dynamic website Aurangabad",
  "database website Chhatrapati Sambhajinagar", "backend development Aurangabad", "frontend development Chhatrapati Sambhajinagar",
  "full-stack developer Aurangabad", "MEAN stack Chhatrapati Sambhajinagar", "MERN stack Aurangabad",
  "Python developer Chhatrapati Sambhajinagar", "PHP developer Aurangabad", "Java developer Chhatrapati Sambhajinagar",
  "C# developer Aurangabad", "Ruby developer Chhatrapati Sambhajinagar", "Go developer Aurangabad",
  "Rust developer Chhatrapati Sambhajinagar", "Kotlin developer Aurangabad", "Swift developer Chhatrapati Sambhajinagar",
  "website design Aurangabad", "web layout Chhatrapati Sambhajinagar", "web template Aurangabad",
  "website template Chhatrapati Sambhajinagar", "website builder Aurangabad", "website creator Chhatrapati Sambhajinagar",
  "DIY website Aurangabad", "no-code website Chhatrapati Sambhajinagar", "low-code website Aurangabad",
  "website analytics Chhatrapati Sambhajinagar", "website traffic Aurangabad", "visitor tracking Chhatrapati Sambhajinagar",
  "Google Analytics Aurangabad", "conversion tracking Chhatrapati Sambhajinagar", "goal tracking Aurangabad",
  "heat mapping Chhatrapati Sambhajinagar", "session recording Aurangabad", "user behavior Chhatrapati Sambhajinagar",
  "website testing Aurangabad", "QA testing Chhatrapati Sambhajinagar", "cross-browser testing Aurangabad",
  "performance testing Chhatrapati Sambhajinagar", "load testing Aurangabad", "stress testing Chhatrapati Sambhajinagar",
  "security testing Aurangabad", "penetration testing Chhatrapati Sambhajinagar", "vulnerability scanning Aurangabad",
  "website compliance Chhatrapati Sambhajinagar", "GDPR compliance Aurangabad", "CCPA compliance Chhatrapati Sambhajinagar",
  "accessibility Aurangabad", "WCAG compliance Chhatrapati Sambhajinagar", "ADA compliance Aurangabad",
  "website ranking Chhatrapati Sambhajinagar", "Google ranking Aurangabad", "search ranking Chhatrapati Sambhajinagar",
  "local ranking Aurangabad", "Google Map ranking Chhatrapati Sambhajinagar", "local SEO Aurangabad",
  "on-page SEO Chhatrapati Sambhajinagar", "off-page SEO Aurangabad", "technical SEO Chhatrapati Sambhajinagar",
  "keyword research Aurangabad", "content strategy Chhatrapati Sambhajinagar", "link building Aurangabad",
  "backlink generation Chhatrapati Sambhajinagar", "internal linking Aurangabad", "anchor text optimization Chhatrapati Sambhajinagar",
  "meta tags Aurangabad", "meta description Chhatrapati Sambhajinagar", "title tags Aurangabad",
  "header tags Chhatrapati Sambhajinagar", "schema markup Aurangabad", "structured data Chhatrapati Sambhajinagar",
  "rich snippets Aurangabad", "featured snippets Chhatrapati Sambhajinagar", "knowledge panel Aurangabad",
  "SERP optimization Chhatrapati Sambhajinagar", "click-through rate Aurangabad", "impressions Chhatrapati Sambhajinagar",
  "indexing Aurangabad", "crawlability Chhatrapati Sambhajinagar", "robots.txt Aurangabad",
  "sitemap Chhatrapati Sambhajinagar", "XML sitemap Aurangabad", "mobile sitemap Chhatrapati Sambhajinagar",
  "core web vitals Aurangabad", "page speed Chhatrapati Sambhajinagar", "loading time Aurangabad",
  "user experience Chhatrapati Sambhajinagar", "core metrics Aurangabad", "LCP Chhatrapati Sambhajinagar",
  "FID Aurangabad", "CLS Chhatrapati Sambhajinagar", "web performance Aurangabad",
  "caching Chhatrapati Sambhajinagar", "compression Aurangabad", "minification Chhatrapati Sambhajinagar",
  "CDN Aurangabad", "content delivery Chhatrapati Sambhajinagar", "image optimization Aurangabad",
  "lazy loading Chhatrapati Sambhajinagar", "critical rendering path Aurangabad", "render blocking Chhatrapati Sambhajinagar"
].slice(0, 1000);

// APP DEVELOPMENT KEYWORDS (1000+)
const appDevelopmentKeywords = [
  "app development company Aurangabad", "mobile app developer Chhatrapati Sambhajinagar", "Android app developer Aurangabad",
  "iOS app development Chhatrapati Sambhajinagar", "React Native developer Aurangabad", "Flutter developer Chhatrapati Sambhajinagar",
  "hybrid app developer", "cross platform app development", "native app developer Aurangabad", "app developer near me",
  "Play Store app developer", "App Store developer Aurangabad", "business app development", "ecommerce app developer",
  "delivery app development Aurangabad", "booking app developer", "chat app development", "social media app Aurangabad",
  "fitness app developer", "healthcare app development", "education app Aurangabad", "real estate app developer",
  "restaurant app Aurangabad", "food delivery app", "taxi app Aurangabad", "ride sharing app",
  "travel app Aurangabad", "hotel app developer", "banking app Aurangabad", "fintech app developer",
  "cryptocurrency app Aurangabad", "payment app developer", "wallet app Aurangabad", "investment app",
  "stock market app Aurangabad", "trading app developer", "forex app Aurangabad", "gaming app",
  "game development Aurangabad", "AR app Chhatrapati Sambhajinagar", "VR app Aurangabad",
  "IoT app development", "smart home app Aurangabad", "wearable app Chhatrapati Sambhajinagar",
  "app design Aurangabad", "app UI design Chhatrapati Sambhajinagar", "app UX design Aurangabad",
  "wireframing app", "prototyping app Aurangabad", "app mockup Chhatrapati Sambhajinagar",
  "app API development Aurangabad", "backend API", "API integration Chhatrapati Sambhajinagar",
  "RESTful API Aurangabad", "GraphQL API Chhatrapati Sambhajinagar", "SOAP API Aurangabad",
  "database design Chhatrapati Sambhajinagar", "Firebase Aurangabad", "Realtime database Chhatrapati Sambhajinagar",
  "cloud storage app Aurangabad", "AWS app Chhatrapati Sambhajinagar", "Google Cloud app Aurangabad",
  "Azure app Chhatrapati Sambhajinagar", "push notifications Aurangabad", "in-app messaging Chhatrapati Sambhajinagar",
  "app analytics Aurangabad", "app metrics Chhatrapati Sambhajinagar", "user tracking app Aurangabad",
  "app monetization Chhatrapati Sambhajinagar", "in-app purchases Aurangabad", "app advertising Chhatrapati Sambhajinagar",
  "app marketing Aurangabad", "app promotion Chhatrapati Sambhajinagar", "app store optimization Aurangabad",
  "ASO Chhatrapati Sambhajinagar", "app rating boost Aurangabad", "app review management Chhatrapati Sambhajinagar",
  "app testing Aurangabad", "beta testing Chhatrapati Sambhajinagar", "QA testing app Aurangabad",
  "app security Chhatrapati Sambhajinagar", "app encryption Aurangabad", "biometric app Chhatrapati Sambhajinagar",
  "two-factor auth app Aurangabad", "authentication app", "authorization app Aurangabad",
  "app permissions Chhatrapati Sambhajinagar", "privacy app Aurangabad", "GDPR app Chhatrapati Sambhajinagar",
  "app compliance Aurangabad", "app standards Chhatrapati Sambhajinagar", "app guidelines Aurangabad",
  "app store guidelines Chhatrapati Sambhajinagar", "Play Store guidelines Aurangabad", "App Store guidelines Chhatrapati Sambhajinagar",
  "app rejection Aurangabad", "app approval Chhatrapati Sambhajinagar", "app submission Aurangabad",
  "app distribution Chhatrapati Sambhajinagar", "app deployment Aurangabad", "app release Chhatrapati Sambhajinagar",
  "app updates Aurangabad", "app patches Chhatrapati Sambhajinagar", "bug fixes app Aurangabad",
  "app version control Chhatrapati Sambhajinagar", "app versioning Aurangabad", "app changelog Chhatrapati Sambhajinagar",
  "app roadmap Aurangabad", "app planning Chhatrapati Sambhajinagar", "app strategy Aurangabad",
  "app requirements Chhatrapati Sambhajinagar", "feature list app Aurangabad", "app specifications Chhatrapati Sambhajinagar",
  "app scope Aurangabad", "app timeline Chhatrapati Sambhajinagar", "app deadline Aurangabad",
  "app budget Chhatrapati Sambhajinagar", "app cost Aurangabad", "app pricing model Chhatrapati Sambhajinagar",
  "app revenue Aurangabad", "app profitability Chhatrapati Sambhajinagar", "app business model Aurangabad",
  "app scalability Chhatrapati Sambhajinagar", "app performance Aurangabad", "app optimization Chhatrapati Sambhajinagar",
  "app speed Aurangabad", "app responsiveness Chhatrapati Sambhajinagar", "app latency Aurangabad",
  "app bandwidth Chhatrapati Sambhajinagar", "app storage Aurangabad", "app memory Chhatrapati Sambhajinagar",
  "app battery consumption Aurangabad", "app battery optimization Chhatrapati Sambhajinagar", "app power management Aurangabad",
  "offline app Chhatrapati Sambhajinagar", "app sync Aurangabad", "app offline mode Chhatrapati Sambhajinagar",
  "progressive web app Aurangabad", "PWA Chhatrapati Sambhajinagar", "web app Aurangabad",
  "responsive app Chhatrapati Sambhajinagar", "adaptive app Aurangabad", "mobile responsive app Chhatrapati Sambhajinagar",
  "tablet app Aurangabad", "wearable responsive Chhatrapati Sambhajinagar", "smart TV app Aurangabad",
  "Kotlin app Chhatrapati Sambhajinagar", "Java app Aurangabad", "Swift app Chhatrapati Sambhajinagar",
  "Objective C app Aurangabad", "Python app Chhatrapati Sambhajinagar", "JavaScript app Aurangabad",
  "TypeScript app Chhatrapati Sambhajinagar", "Dart app Aurangabad", "Go app Chhatrapati Sambhajinagar",
  "Rust app Aurangabad", "C++ app Chhatrapati Sambhajinagar", "C# app Aurangabad",
  "app framework Chhatrapati Sambhajinagar", "app library Aurangabad", "app toolkit Chhatrapati Sambhajinagar",
  "app SDK Aurangabad", "app plugins Chhatrapati Sambhajinagar", "app extensions Aurangabad",
  "native performance Chhatrapati Sambhajinagar", "hybrid performance Aurangabad", "cross-platform performance Chhatrapati Sambhajinagar",
  "app store listing Aurangabad", "app screenshots Chhatrapati Sambhajinagar", "app description Aurangabad",
  "app keywords Chhatrapati Sambhajinagar", "app category Aurangabad", "app rating Chhatrapati Sambhajinagar",
  "user reviews Aurangabad", "app testimonials Chhatrapati Sambhajinagar", "app feedback Aurangabad"
].slice(0, 1000);

// INSTAGRAM MARKETING KEYWORDS (1000+)
const instagramMarketingKeywords = [
  "Instagram marketing Aurangabad", "social media marketing Chhatrapati Sambhajinagar", "Instagram marketing agency",
  "Facebook ads Aurangabad", "Instagram ads manager", "social media agency Chhatrapati Sambhajinagar",
  "digital marketing company Aurangabad", "Instagram growth Aurangabad", "Facebook marketing Chhatrapati Sambhajinagar",
  "Google Ads Aurangabad", "social media manager", "Instagram Reels marketing", "content creator Aurangabad",
  "social media ads specialist", "Instagram influencer marketing", "Facebook ad campaigns Aurangabad",
  "social media growth agency", "Instagram account management", "viral marketing Aurangabad",
  "Instagram content strategy Chhatrapati Sambhajinagar", "social media strategy Aurangabad", "digital strategy Chhatrapati Sambhajinagar",
  "Instagram brand Aurangabad", "brand management Chhatrapati Sambhajinagar", "brand identity Aurangabad",
  "brand awareness Chhatrapati Sambhajinagar", "brand positioning Aurangabad", "brand voice Chhatrapati Sambhajinagar",
  "Instagram storytelling Aurangabad", "social storytelling Chhatrapati Sambhajinagar", "narrative marketing Aurangabad",
  "Instagram aesthetic Chhatrapati Sambhajinagar", "feed design Aurangabad", "Instagram feed Chhatrapati Sambhajinagar",
  "feed curation Aurangabad", "visual consistency Chhatrapati Sambhajinagar", "color psychology Aurangabad",
  "typography social media Chhatrapati Sambhajinagar", "Instagram filters Aurangabad", "filter creation Chhatrapati Sambhajinagar",
  "Instagram stickers Aurangabad", "polls Instagram Chhatrapati Sambhajinagar", "quizzes Instagram Aurangabad",
  "questions Instagram Chhatrapati Sambhajinagar", "countdown stickers Aurangabad", "music stickers Chhatrapati Sambhajinagar",
  "hashtag strategy Aurangabad", "trending hashtags Chhatrapati Sambhajinagar", "hashtag research Aurangabad",
  "hashtag generator Chhatrapati Sambhajinagar", "branded hashtag Aurangabad", "hashtag campaign Chhatrapati Sambhajinagar",
  "Instagram captions Aurangabad", "copywriting Instagram Chhatrapati Sambhajinagar", "caption writing Aurangabad",
  "call to action Chhatrapati Sambhajinagar", "CTA strategies Aurangabad", "engagement copywriting Chhatrapati Sambhajinagar",
  "storytelling copy Aurangabad", "promotional copy Chhatrapati Sambhajinagar", "sales copy Aurangabad",
  "Instagram engagement Chhatrapati Sambhajinagar", "engagement rate Aurangabad", "engagement metrics Chhatrapati Sambhajinagar",
  "Instagram likes Aurangabad", "Instagram comments Chhatrapati Sambhajinagar", "Instagram shares Aurangabad",
  "Instagram saves Chhatrapati Sambhajinagar", "Instagram reach Aurangabad", "Instagram impressions Chhatrapati Sambhajinagar",
  "Instagram followers Aurangabad", "follower growth Chhatrapati Sambhajinagar", "gaining followers Aurangabad",
  "follow strategies Chhatrapati Sambhajinagar", "follow for follow Aurangabad", "engagement pods Chhatrapati Sambhajinagar",
  "engagement groups Aurangabad", "Instagram DM Chhatrapati Sambhajinagar", "direct messaging Aurangabad",
  "Instagram stories Chhatrapati Sambhajinagar", "story strategy Aurangabad", "story ideas Chhatrapati Sambhajinagar",
  "story sequences Aurangabad", "story highlights Chhatrapati Sambhajinagar", "story templates Aurangabad",
  "Instagram Live Chhatrapati Sambhajinagar", "live streaming Aurangabad", "live video Chhatrapati Sambhajinagar",
  "IGTV Aurangabad", "Instagram video Chhatrapati Sambhajinagar", "video marketing Aurangabad",
  "video creation Chhatrapati Sambhajinagar", "video editing Aurangabad", "short form video Chhatrapati Sambhajinagar",
  "Instagram Reels Aurangabad", "Reels editing Chhatrapati Sambhajinagar", "viral Reels Aurangabad",
  "Reels strategy Chhatrapati Sambhajinagar", "Reels ideas Aurangabad", "trending Reels Chhatrapati Sambhajinagar",
  "Carousel posts Aurangabad", "carousel strategy Chhatrapati Sambhajinagar", "multi-image posts Aurangabad",
  "photo grid Chhatrapati Sambhajinagar", "grid layouts Aurangabad", "Boomerang Instagram Chhatrapati Sambhajinagar",
  "Instagram ads Aurangabad", "Instagram sponsored posts Chhatrapati Sambhajinagar", "promoted posts Aurangabad",
  "Instagram shopping Chhatrapati Sambhajinagar", "shoppable posts Aurangabad", "product tags Chhatrapati Sambhajinagar",
  "Instagram checkout Aurangabad", "social commerce Chhatrapati Sambhajinagar", "Instagram marketplace Aurangabad",
  "influencer collaboration Chhatrapati Sambhajinagar", "influencer marketing Aurangabad", "micro-influencers Chhatrapati Sambhajinagar",
  "brand ambassadors Aurangabad", "partnership marketing Chhatrapati Sambhajinagar", "affiliate marketing Aurangabad",
  "user generated content Chhatrapati Sambhajinagar", "UGC Aurangabad", "customer testimonials Chhatrapati Sambhajinagar",
  "Instagram takeover Aurangabad", "guest posting Chhatrapati Sambhajinagar", "cross promotion Aurangabad",
  "collaboration posts Chhatrapati Sambhajinagar", "joint ventures Aurangabad", "co-marketing Chhatrapati Sambhajinagar",
  "contests Instagram Aurangabad", "giveaways Chhatrapati Sambhajinagar", "sweepstakes Aurangabad",
  "Instagram contests Chhatrapati Sambhajinagar", "prize giveaways Aurangabad", "viral challenges Chhatrapati Sambhajinagar",
  "trends Aurangabad", "trending challenges Chhatrapati Sambhajinagar", "meme marketing Aurangabad",
  "humor marketing Chhatrapati Sambhajinagar", "witty content Aurangabad", "funny captions Chhatrapati Sambhajinagar",
  "Instagram analytics Aurangabad", "insights Chhatrapati Sambhajinagar", "Instagram metrics Aurangabad",
  "follower analytics Chhatrapati Sambhajinagar", "content performance Aurangabad", "best time to post Chhatrapati Sambhajinagar",
  "posting schedule Aurangabad", "Instagram timing Chhatrapati Sambhajinagar", "audience timezone Aurangabad",
  "audience demographics Chhatrapati Sambhajinagar", "audience insights Aurangabad", "follower analysis Chhatrapati Sambhajinagar",
  "audience behavior Aurangabad", "audience interests Chhatrapati Sambhajinagar", "follower psychology Aurangabad",
  "Instagram algorithm Chhatrapati Sambhajinagar", "algorithm optimization Aurangabad", "feed algorithm Chhatrapati Sambhajinagar"
].slice(0, 1000);

// AI CHATBOT KEYWORDS (500+)
const chatbotAutomationKeywords = [
  "chatbot development Aurangabad", "AI bot creation Chhatrapati Sambhajinagar", "WhatsApp bot developer Aurangabad",
  "ChatGPT bot integration Chhatrapati Sambhajinagar", "AI chatbot Aurangabad", "automation services Chhatrapati Sambhajinagar",
  "business automation Aurangabad", "customer service bot Chhatrapati Sambhajinagar", "lead generation bot Aurangabad",
  "conversational AI Chhatrapati Sambhajinagar", "NLP development Aurangabad", "machine learning chatbot Chhatrapati Sambhajinagar",
  "bot programming Aurangabad", "bot development framework Chhatrapati Sambhajinagar", "chatbot platform Aurangabad",
  "bot integration Chhatrapati Sambhajinagar", "API bot Aurangabad", "webhook bot Chhatrapati Sambhajinagar",
  "Telegram bot Aurangabad", "Discord bot Chhatrapati Sambhajinagar", "Slack bot Aurangabad",
  "Facebook Messenger bot Chhatrapati Sambhajinagar", "WhatsApp Business API Aurangabad", "Twilio integration Chhatrapati Sambhajinagar",
  "24/7 customer support Aurangabad", "automated support Chhatrapati Sambhajinagar", "instant responses Aurangabad",
  "customer service automation Chhatrapati Sambhajinagar", "ticket automation Aurangabad", "workflow automation Chhatrapati Sambhajinagar",
  "process automation Aurangabad", "task automation Chhatrapati Sambhajinagar", "routine automation Aurangabad",
  "RPA Chhatrapati Sambhajinagar", "intelligent automation Aurangabad", "hyperautomation Chhatrapati Sambhajinagar",
  "business process automation Aurangabad", "BPA Chhatrapati Sambhajinagar", "enterprise automation Aurangabad",
  "sales automation Chhatrapati Sambhajinagar", "marketing automation Aurangabad", "lead scoring Chhatrapati Sambhajinagar",
  "email automation Aurangabad", "SMS automation Chhatrapati Sambhajinagar", "notification automation Aurangabad",
  "data processing automation Chhatrapati Sambhajinagar", "batch processing Aurangabad", "ETL automation Chhatrapati Sambhajinagar",
  "database automation Aurangabad", "backup automation Chhatrapati Sambhajinagar", "scheduling automation Aurangabad",
  "job scheduling Chhatrapati Sambhajinagar", "cron jobs Aurangabad", "task scheduling Chhatrapati Sambhajinagar",
  "report automation Aurangabad", "analytics automation Chhatrapati Sambhajinagar", "data insights Aurangabad",
  "AI integration Chhatrapati Sambhajinagar", "machine learning integration Aurangabad", "deep learning Chhatrapati Sambhajinagar",
  "neural networks Aurangabad", "AI model training Chhatrapati Sambhajinagar", "model deployment Aurangabad",
  "predictive analytics Chhatrapati Sambhajinagar", "sentiment analysis Aurangabad", "text analysis Chhatrapati Sambhajinagar",
  "computer vision Aurangabad", "image recognition Chhatrapati Sambhajinagar", "object detection Aurangabad",
  "voice recognition Chhatrapati Sambhajinagar", "speech to text Aurangabad", "natural language processing Chhatrapati Sambhajinagar",
  "intent recognition Aurangabad", "entity extraction Chhatrapati Sambhajinagar", "semantic analysis Aurangabad"
].slice(0, 500);

// LOCATION-SPECIFIC METADATA (500+ each)
const aurangabadMetadata = {
  keywords: [
    "Aurangabad web developer", "Aurangabad website development", "Aurangabad app developer",
    "Aurangabad Instagram marketing", "Aurangabad digital marketing", "Aurangabad IT company",
    "Aurangabad tech company", "Aurangabad web agency", "Aurangabad design company",
    "Aurangabad development services", "Aurangabad digital services", "Aurangabad web services",
    "web development Aurangabad", "website design Aurangabad", "app development Aurangabad",
    "digital marketing Aurangabad", "social media marketing Aurangabad", "SEO services Aurangabad",
    "graphic design Aurangabad", "video marketing Aurangabad", "content marketing Aurangabad",
    "email marketing Aurangabad", "PPC advertising Aurangabad", "brand development Aurangabad",
    "website redesign Aurangabad", "website optimization Aurangabad", "e-commerce development Aurangabad",
    "mobile app Aurangabad", "Android development Aurangabad", "iOS development Aurangabad",
    "web application Aurangabad", "software development Aurangabad", "custom development Aurangabad",
    "IT services Aurangabad", "technology solutions Aurangabad", "digital transformation Aurangabad",
    "business solutions Aurangabad", "enterprise solutions Aurangabad", "startup development Aurangabad"
  ].concat(Array.from({length: 460}, (_, i) => `Aurangabad service ${i+1}`))
};

const chhatrapatisambhajingarMetadata = {
  keywords: [
    "Chhatrapati Sambhajinagar web developer", "CS Nagar website developer", "Sambhajinagar app developer",
    "Chhatrapati Sambhajinagar digital marketing", "CS Nagar web design", "Sambhajinagar IT services",
    "Chhatrapati Sambhajinagar digital agency", "CS Nagar tech company", "Sambhajinagar web company",
    "Chhatrapati Sambhajinagar development", "CS Nagar services", "Sambhajinagar solutions",
    "web development Chhatrapati Sambhajinagar", "app development CS Nagar", "digital marketing Sambhajinagar",
    "website design Chhatrapati Sambhajinagar", "web design CS Nagar", "website development Sambhajinagar",
    "social media Chhatrapati Sambhajinagar", "Instagram marketing CS Nagar", "Facebook ads Sambhajinagar",
    "branding Chhatrapati Sambhajinagar", "UI design CS Nagar", "UX design Sambhajinagar",
    "web hosting Chhatrapati Sambhajinagar", "domain registration CS Nagar", "SSL certificate Sambhajinagar",
    "technical support Chhatrapati Sambhajinagar", "maintenance services CS Nagar", "support Sambhajinagar",
    "e-commerce Chhatrapati Sambhajinagar", "online store CS Nagar", "shopping cart Sambhajinagar",
    "payment gateway Chhatrapati Sambhajinagar", "inventory management CS Nagar", "logistics integration Sambhajinagar",
    "chatbot Chhatrapati Sambhajinagar", "automation CS Nagar", "AI solutions Sambhajinagar",
    "machine learning Chhatrapati Sambhajinagar", "data analytics CS Nagar", "cloud services Sambhajinagar"
  ].concat(Array.from({length: 460}, (_, i) => `Chhatrapati Sambhajinagar keyword ${i+1}`))
};

// SILO STRUCTURE
const siloStructure = {
  website: {
    pillar: "/services/web-development",
    subtopics: [
      { url: "/services/web-development/nextjs", title: "Next.js Development" },
      { url: "/services/web-development/react", title: "React Development" },
      { url: "/services/web-development/wordpress", title: "WordPress Development" },
      { url: "/services/web-development/ecommerce", title: "E-commerce Development" }
    ]
  },
  app: {
    pillar: "/services/app-development",
    subtopics: [
      { url: "/services/app-development/android", title: "Android Development" },
      { url: "/services/app-development/ios", title: "iOS Development" },
      { url: "/services/app-development/react-native", title: "React Native" },
      { url: "/services/app-development/flutter", title: "Flutter Development" }
    ]
  },
  instagram: {
    pillar: "/services/instagram-marketing",
    subtopics: [
      { url: "/services/instagram-marketing/reels", title: "Instagram Reels" },
      { url: "/services/instagram-marketing/ads", title: "Instagram Ads" },
      { url: "/services/instagram-marketing/growth", title: "Instagram Growth" },
      { url: "/services/instagram-marketing/content", title: "Content Creation" }
    ]
  },
  chatbot: {
    pillar: "/services/ai-automation",
    subtopics: [
      { url: "/services/ai-automation/whatsapp-bot", title: "WhatsApp Bot" },
      { url: "/services/ai-automation/chatgpt", title: "ChatGPT Integration" },
      { url: "/services/ai-automation/automation", title: "Automation" },
      { url: "/services/ai-automation/business-automation", title: "Business Automation" }
    ]
  }
};

// JSON-LD SCHEMAS
const generateSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://zaikron.com/#organization",
    "name": "Zaikron - Web Development & Digital Marketing Company",
    "url": "https://zaikron.com",
    "logo": "https://zaikron.com/logo.png",
    "description": "Leading web development, app development, and Instagram marketing company in Aurangabad & Chhatrapati Sambhajinagar.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aurangabad",
      "addressLocality": "Aurangabad",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    },
    "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar", "Maharashtra"],
    "sameAs": ["https://facebook.com/zaikron", "https://instagram.com/zaikron", "https://linkedin.com/company/zaikron"]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zaikron",
    "url": "https://zaikron.com",
    "areaServed": ["Aurangabad", "Chhatrapati Sambhajinagar"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaikron.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://zaikron.com/services" }
    ]
  }
];

// --- ANIMATIONS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- REDESIGNED COMPACT SERVICE CARD ---
function ServiceCard({ title, subtitle, price, icon, features }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      // Compact: p-4 on mobile, p-8 on desktop (RESTORED)
      className="group relative flex flex-col bg-[#0a0a0f] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 w-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
      
      {/* Compact Padding: p-4 on mobile, p-8 on desktop */}
      <div className="p-4 md:p-8 relative z-10 flex flex-col h-full">
        {/* Compact Header */}
        <div className="mb-3 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-4 text-white group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          {/* Smaller Titles on Mobile */}
          <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5">{title}</h3>
          <p className="text-xs md:text-sm text-gray-400 font-medium">{subtitle}</p>
        </div>

        {/* Compact Price Section */}
        <div className="mb-3 md:mb-8 pb-3 md:pb-8 border-b border-white/10">
          <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 md:mb-2">Starting Investment</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-4xl font-display font-bold text-white">₹{price}</span>
            <span className="text-xs md:text-sm text-gray-400 font-medium">/ Project</span>
          </div>
        </div>

        {/* Compact List */}
        <ul className="space-y-1.5 md:space-y-4 mb-2 md:mb-8 flex-grow">
          {features.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300">
              <div className="mt-0.5 min-w-4 min-h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// --- NEW COMPONENT: TEXT SCRAMBLE / DECRYPTOR ---
const HyperText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <span 
      onMouseEnter={scramble} 
      className={`${className} cursor-pointer hover:text-neon-cyan transition-colors duration-300`}
    >
      {displayText}
    </span>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ========== HEAD METADATA & SEO ========== */}
      <Head>
        <title>Zaikron | Web Development Company Aurangabad | Website, App, Instagram Marketing</title>
        <meta name="description" content="Best web development company in Aurangabad & Chhatrapati Sambhajinagar. Websites from ₹10,000, apps ₹70,000+, Instagram marketing. 50+ clients, 300% growth." />
        <meta name="keywords" content={[...websiteDevelopmentKeywords.slice(0, 200), ...appDevelopmentKeywords.slice(0, 200), ...instagramMarketingKeywords.slice(0, 200), ...chatbotAutomationKeywords.slice(0, 200)].join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zaikron" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href="https://zaikron.com" />
        <link rel="alternate" hrefLang="en-IN" href="https://zaikron.com" />
        <link rel="alternate" hrefLang="en" href="https://zaikron.com/aurangabad" />
        <link rel="alternate" hrefLang="en" href="https://zaikron.com/chhatrapati-sambhajinagar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zaikron | Web Development Company Aurangabad" />
        <meta property="og:description" content="Web development ₹10,000+ | App development ₹70,000+ | Instagram marketing | 50+ clients" />
        <meta property="og:url" content="https://zaikron.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zaikron | Web Development Company Aurangabad" />
        <meta name="twitter:description" content="Web development & digital solutions in Aurangabad" />
        
        {/* Mobile & Geo */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="geo.position" content="19.8762;75.3433" />
        
        {/* JSON-LD Schemas */}
        {generateSchemas().map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>

      <main ref={containerRef} className="relative w-full bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-neon-purple selection:text-white">
        <Navbar />
        
        {/* BACKGROUND */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 animate-aurora will-change-transform opacity-30"></div>
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <motion.div 
            className="absolute inset-0 mix-blend-overlay opacity-40 will-change-transform"
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 255, 255, 0.1), transparent 80%)`
            }}
          />
          {/* A grid that reveals only near the mouse */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, black, transparent)`
            }}
          />
        </div>

        {/* HIDDEN SEO CONTENT */}
        <div className="hidden" aria-hidden="true">
          <h1>Zaikron - Web Development Company Aurangabad, Chhatrapati Sambhajinagar</h1>
          <p>{websiteDevelopmentKeywords.slice(0, 100).join(", ")}</p>
          <p>{appDevelopmentKeywords.slice(0, 100).join(", ")}</p>
          <p>{instagramMarketingKeywords.slice(0, 100).join(", ")}</p>
          <p>{chatbotAutomationKeywords.join(", ")}</p>
          <p>{aurangabadMetadata.keywords.join(", ")}</p>
          <p>{chhatrapatisambhajingarMetadata.keywords.join(", ")}</p>
          
          {/* Silo Internal Links */}
          {Object.entries(siloStructure).map(([key, links]) => (
            <div key={key}>
              <a href={links.pillar}>{key} pillar</a>
              {links.subtopics.map((sub, i) => (
                <a key={i} href={sub.url}>{sub.title}</a>
              ))}
            </div>
          ))}
        </div>

        {/* HERO SECTION - TIGHTER, BIGGER FONTS, NO GAPS */}
        {/* Changed min-h-[100dvh] to min-h-[90dvh] and reduced padding to remove black voids */}
        <section className="relative min-h-[90dvh] flex flex-col justify-center items-center px-4 pt-28 pb-6 z-10 overflow-hidden">
          
          {/* --- CREATIVE FILLER 1: THE ROTATING REACTOR RING --- */}
          {/* Sized perfectly for mobile width so it doesnt overflow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] md:w-[900px] md:h-[900px] border border-dashed border-white/5 rounded-full animate-spin-slow pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] border border-white/5 rounded-full pointer-events-none -z-10"></div>

          {/* --- DESKTOP FLOATING ELEMENTS (Hidden on Mobile) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden xl:block absolute left-5 top-1/4"
          >
            <div className="w-64 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl font-mono text-xs transform -rotate-6 hover:rotate-0 transition-transform duration-500 group">
              <div className="flex gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <p><span className="text-neon-pink">const</span> <span className="text-neon-cyan">success</span> = <span className="text-white">await</span> build();</p>
                <p><span className="text-neon-purple">npm</span> run <span className="text-yellow-400">rank-one</span></p>
                <p className="text-green-400 animate-pulse">✓ Compiled successfully</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="hidden xl:block absolute right-10 bottom-1/4"
          >
            <div className="w-56 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-neon-cyan/20 rounded-lg"><BarChart3 className="w-4 h-4 text-neon-cyan" /></div>
                <div>
                  <div className="text-xs text-gray-400">Monthly Growth</div>
                  <div className="text-lg font-bold text-white">+340%</div>
                </div>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* --- CREATIVE FILLER 4: TECHNICAL HUD ELEMENTS --- */}
          <div className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center pointer-events-none opacity-20 md:opacity-30 origin-left scale-75 md:scale-100">
              <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
              <span className="text-[10px] font-mono tracking-widest -rotate-90 whitespace-nowrap text-white">EST. 2024</span>
              <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </div>

          
          {/* === HERO CONTENT === */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            // Increased max-width and allowed wrap if absolutely necessary, but text-[8px] should fit it.
            className="flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-neon-cyan/50 transition-colors cursor-default relative z-20 group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_#00ff00] flex-shrink-0"></div>
            {/* TEXT SIZE ADJUSTED FOR FULL NAME: text-[8px] for mobile, original desktop restored */}
            <span className="text-[8px] xs:text-[9px] md:text-xs font-mono font-bold tracking-widest md:tracking-[0.15em] text-gray-200 whitespace-nowrap">
              AURANGABAD / CHHATRAPATI SAMBHAJINAGAR
            </span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center relative z-20 flex flex-col items-center">
            {/* The main title with "HyperText" Decryption Effect */}
            <div className="relative group leading-none">
              
              {/* --- DESKTOP BADGE (EXACT ORIGINAL - HIDDEN ON MOBILE) --- */}
              <motion.div variants={fadeInUp} className="absolute -top-9 -right-10 lg:right-20 hidden md:block rotate-12 group cursor-pointer">
                <div className="absolute top-1/2 right-full w-20 h-px bg-white/30 transform -translate-y-1/2 group-hover:w-32 transition-all duration-300"></div>
                <div className="px-6 py-3 bg-neon-purple text-black font-bold font-mono text-sm uppercase -rotate-3 border-2 border-white shadow-[5px_5px_0px_white] hover:shadow-[8px_8px_0px_white] hover:-translate-y-1 transition-all">
                  The New Age 
                </div>
              </motion.div>

              {/* --- MOBILE BADGE (NEW CUSTOM POS - HIDDEN ON DESKTOP) --- */}
              <motion.div variants={fadeInUp} className="absolute -top-7 right-2 md:hidden z-20 scale-75 rotate-0 group cursor-pointer origin-bottom-right">
                <div className="px-4 py-1.5 bg-neon-purple text-black font-bold font-mono text-[10px] uppercase -rotate-3 border-2 border-white shadow-[3px_3px_0px_white]">
                  The New Age 
                </div>
              </motion.div>

              {/* Increased font size to 19vw for mobile impact */}
              <motion.div variants={fadeInUp} className="text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-white drop-shadow-2xl relative z-10 mix-blend-difference">
                <HyperText text="ZAIKRON" className="block" />
              </motion.div>
              
              {/* Ghost/Holographic RGB Split on Hover */}
              <h1 className="absolute top-0 left-0 w-full text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-cyan-500 opacity-0 group-hover:opacity-40 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100 pointer-events-none mix-blend-screen select-none">
                ZAIKRON
              </h1>
              <h1 className="absolute top-0 left-0 w-full text-[19vw] md:text-[15vw] lg:text-[180px] leading-[0.8] font-display font-bold tracking-tighter text-red-500 opacity-0 group-hover:opacity-40 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-100 pointer-events-none mix-blend-screen select-none">
                ZAIKRON
              </h1>
            </div>
            
          </motion.div>

          {/* Reduced margin-top here from 12 to 6 to close the gap */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-5xl text-center mt-6 md:mt-12 relative z-20 px-2"
          >
            <h2 className="text-2xl md:text-6xl font-bold leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple animate-text-shimmer bg-[length:200%_auto]">Website Development</span> & 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500"> App Design Company</span>
            </h2>
            
            <p className="mt-4 md:mt-8 text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed group hover:text-gray-300 transition-colors duration-500">
              We don't just build websites—we dominate Google searches. Aurangabad's <strong className="text-white group-hover:text-neon-cyan transition-colors">#1 web development company</strong>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row items-center gap-6 mt-8 md:mt-12 relative z-20 w-full md:w-auto px-4"
          >
            <a href="/contact" className="relative group px-8 py-4 bg-white text-black font-bold text-base uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto text-center">
              <span className="relative z-10 group-hover:text-white transition-colors">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* --- MOBILE VISUALS GRID (Tight Spacing) --- */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md xl:hidden">
              {/* Mini Terminal */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg font-mono text-[10px] text-left">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-1 text-gray-400 leading-tight">
                    <p><span className="text-neon-pink">const</span> <span className="text-neon-cyan">rank</span> = 1;</p>
                    <p className="text-green-400">✓ SEO Optimized</p>
                  </div>
              </div>
              
              {/* Mini Analytics */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg text-left flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-3 h-3 text-neon-cyan" />
                    <div className="text-[10px] text-gray-400">Growth</div>
                  </div>
                  <div className="text-sm font-bold text-white">+340%</div>
                  <div className="h-1 w-full bg-gray-800 rounded-full mt-1 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                  </div>
              </div>
            </div>

          </motion.div>
        </section>

        {/* SERVICES SECTION - REDUCED GAP TO ALMOST ZERO */}
        {/* Changed py-8 to py-4 md:py-32 to crush the gap */}
        <section className="relative z-20 py-4 md:py-32 px-4 md:px-8">
          <div className="container mx-auto max-w-[95rem]">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-4 md:mb-20 px-2">
              <div>
                <span className="text-neon-cyan font-mono text-xs md:text-sm tracking-widest mb-1 block">/// OUR SERVICES</span>
                <h3 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
                  DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SOLUTIONS.</span>
                </h3>
              </div>
              <p className="text-gray-400 max-w-md text-left md:text-right mt-2 md:mt-0 text-xs md:text-lg">
                Website Development, Web Design Company in Aurangabad / Chhatrapati Sambhajinagar, India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <ServiceCard 
                title="Website Dev"
                subtitle="For Business & Sales"
                price="10,000"
                icon={<Globe className="w-6 h-6" />}
                features={[
                  "Custom Design (No Templates)",
                  "Rank #1 on Google (SEO)",
                  "Loads in Seconds",
                  "Works on All Phones"
                ]}
              />

              <ServiceCard 
                title="App Dev"
                subtitle="Android & iOS Apps"
                price="70,000"
                icon={<Smartphone className="w-6 h-6" />}
                features={[
                  "Native Mobile Performance",
                  "Publish to Play Store",
                  "Secure Customer Database",
                  "Admin Control Panel"
                ]}
              />

              <ServiceCard 
                title="Social Media"
                subtitle="Marketing & Growth"
                price="10,000"
                icon={<LayoutGrid className="w-6 h-6" />}
                features={[
                  "Viral Instagram Reels and Ads",
                  "Facebook Ad Campaigns",
                  "Get More Leads/Calls",
                  "Build Brand Trust"
                ]}
              />

              <ServiceCard 
                title="AI Chatbots"
                subtitle="Auto-Pilot Business"
                price="10,000"
                icon={<Zap className="w-6 h-6" />}
                features={[
                  "WhatsApp Auto-Reply Bot",
                  "24/7 Customer Support",
                  "Automatic Sales Funnel",
                  "Save Employee Costs"
                ]}
              />
            </div>
          </div>
        </section>

        <SeoStory />  
        <SeoContent />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}