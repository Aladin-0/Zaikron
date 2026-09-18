import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";

export const metadata: Metadata = {
  title: "Why Your Sambhaji Nagar Business Is Not on Google | Zaikron Blog",
  description: "If people search for your business or service in Sambhaji Nagar (Aurangabad) and you don't appear — here are the exact 6 reasons and how to fix each one.",
  alternates: {
    canonical: "https://zaikron.com/blog/why-your-sambhaji-nagar-business-is-not-on-google",
  },
  openGraph: {
    title: "Why Your Sambhaji Nagar Business Is Not Showing on Google",
    description: "6 specific reasons Aurangabad businesses don't appear on Google — and how to fix each one.",
    url: "https://zaikron.com/blog/why-your-sambhaji-nagar-business-is-not-on-google",
    siteName: "Zaikron",
    locale: "en_IN",
    type: "article",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Chhatrapati Sambhajinagar, Maharashtra",
  },
};

const reasons = [
  {
    number: "01",
    icon: "🗺️",
    title: "You Have No Google Business Profile (or It's Unverified)",
    severity: "Critical",
    severityColor: "text-red-400 bg-red-500/10 border-red-500/30",
    explanation:
      "When someone types \"website developer in Sambhaji Nagar\" or \"restaurant near me in Cidco\" — the first results they see are the Map Pack: 3 local businesses on a map. This is controlled 100% by Google Business Profile (GBP), not by your website. If you don't have a GBP — or it's unverified — you are completely invisible to this type of search, no matter how good your website is.",
    fix: "Create and verify your Google Business Profile at business.google.com. Fill every field: exact address, phone, hours, website, services. Upload at least 10 photos. This is free and is the single most impactful action you can take for local visibility.",
    timeToFix: "1–3 days",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Your Website Is Too Slow for Google",
    severity: "High",
    severityColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    explanation:
      "Google officially confirmed that page speed is a ranking factor. Since 2021, Google uses Core Web Vitals — real loading speed measurements — to decide rankings. The average Aurangabad business website loads in 7–10 seconds on mobile. Google starts penalising anything over 3 seconds. A slow website is being actively pushed down the rankings every single day.",
    fix: "Test your website at pagespeed.web.dev. If your mobile score is below 70, your website is hurting your rankings. The fix usually requires either rebuilding the site with modern technology, or at minimum: compressing images, removing unused plugins, and upgrading hosting.",
    timeToFix: "1–4 weeks depending on severity",
  },
  {
    number: "03",
    icon: "📍",
    title: "Your Website Doesn't Mention Your City",
    severity: "High",
    severityColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    explanation:
      "Google can't guess where you're located. If your website says \"we provide quality web development services\" without ever mentioning Aurangabad, Sambhaji Nagar, or your neighbourhood — Google has no reason to show you to someone searching in Sambhaji Nagar. We've seen business websites where \"Aurangabad\" appears literally zero times in the content.",
    fix: "Your city name must appear naturally in: the page title, meta description, H1 heading, first paragraph, and footer address. Specific areas help even more — mention Cidco, Waluj, Garkheda, Usmanpura wherever relevant. This is called geo-optimisation and it's one of the most underused tactics by Sambhaji Nagar businesses.",
    timeToFix: "1–2 days",
  },
  {
    number: "04",
    icon: "🔗",
    title: "No Other Websites Are Linking to You",
    severity: "Medium",
    severityColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    explanation:
      "Google treats links from other websites as votes of trust. If no one is linking to your website, Google treats it as an unknown, untrustworthy entity. Competitors who appear on JustDial, IndiaMart, local business directories, and industry associations all have backlinks — and those backlinks boost their domain authority above yours.",
    fix: "Start by listing your business on free directories: JustDial, IndiaMart, Sulekha, Indiacom, TradeIndia, and the Aurangabad Chamber of Commerce. Each listing is a backlink. Aim for 20–30 quality directory listings with your exact NAP (Name, Address, Phone) — it must be identical everywhere.",
    timeToFix: "1–2 weeks",
  },
  {
    number: "05",
    icon: "⭐",
    title: "You Have Few or No Google Reviews",
    severity: "Medium",
    severityColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    explanation:
      "Google's local ranking algorithm has three factors: Relevance, Distance, and Prominence. Reviews are the main driver of Prominence — Google's measure of how well-known and trusted your business is. BuzzLink Studios appears at the top of Aurangabad searches partly because they have more reviews than most local competitors. Quantity matters. Recency matters even more.",
    fix: "This week, WhatsApp every client you've worked with in the last 12 months. Send them a direct Google review link (find it in your GBP dashboard under \"Get more reviews\"). Even 5 new genuine reviews this week will improve your ranking within days. Always respond to every review — Google treats owner responses as a positive engagement signal.",
    timeToFix: "3–7 days for first results",
  },
  {
    number: "06",
    icon: "📋",
    title: "Your Website Has No Schema Markup",
    severity: "Medium",
    severityColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    explanation:
      "Schema markup is invisible code on your website that tells Google exactly what your business is, where it's located, what it charges, and what customers say about it. Without schema, Google has to guess all this information. With schema, you tell Google directly — and Google rewards that clarity with better rankings. Most Aurangabad business websites have zero schema markup.",
    fix: "Your website needs at minimum: LocalBusiness schema with your name, address, phone, geo-coordinates, and opening hours. If you sell services, add Service schema with pricing. For FAQs, add FAQPage schema — this can trigger the FAQ rich result directly in Google search, giving you much more space on the results page than competitors.",
    timeToFix: "1–3 days (requires developer)",
  },
];

export default function BlogPost2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why Your Sambhaji Nagar Business Is Not Showing on Google",
            "description": "6 specific reasons Aurangabad businesses don't appear on Google — and how to fix each one.",
            "image": "https://zaikron.com/logo/Zaikron.png",
            "author": { "@type": "Organization", "name": "Zaikron", "url": "https://zaikron.com" },
            "publisher": {
              "@type": "Organization",
              "name": "Zaikron",
              "logo": { "@type": "ImageObject", "url": "https://zaikron.com/logo/Zaikron.png" },
            },
            "datePublished": "2026-09-18",
            "dateModified": "2026-09-18",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://zaikron.com/blog/why-your-sambhaji-nagar-business-is-not-on-google",
            },
            "keywords": "google ranking aurangabad, local seo sambhaji nagar, google business profile aurangabad, website not showing google",
          }),
        }}
      />

      <main className="relative w-full min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden">
        <Navbar />

        <article className="pt-32 pb-32 px-6 md:px-12 max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-400 truncate">Why Not on Google</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">Local SEO</span>
            <span className="text-gray-500 text-sm">September 18, 2026</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why Your Sambhaji Nagar Business Is Not Showing on Google
          </h1>

          <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5 mb-10">
            <p className="text-gray-300 leading-relaxed">
              Every week, Sambhaji Nagar businesses come to us frustrated: <em>&quot;I have a website but no one finds me on Google.&quot;</em> After analysing 50+ local business websites, we found the same 6 problems appearing again and again. Here they are — with exact fixes for each.
            </p>
          </div>

          <div className="space-y-12">
            {reasons.map((reason) => (
              <section key={reason.number} className="border border-white/10 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 bg-white/[0.02] border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                      {reason.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-gray-500 text-xs font-bold">{reason.number}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${reason.severityColor}`}>
                          {reason.severity}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold leading-snug">{reason.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                  <p className="text-gray-300 leading-relaxed">{reason.explanation}</p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <p className="text-xs font-bold tracking-widest text-green-400 uppercase mb-2">✅ The Fix</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{reason.fix}</p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <span className="text-xs text-gray-500">⏱ Time to fix: </span>
                      <span className="text-xs text-cyan-400 font-medium">{reason.timeToFix}</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold mb-4">Quick Priority Guide</h2>
            <div className="space-y-3">
              {[
                { label: "Do this today", color: "text-red-400", items: ["Set up / verify Google Business Profile"] },
                { label: "Do this week", color: "text-orange-400", items: ["Test website speed", "Add city name to your content"] },
                { label: "Do this month", color: "text-yellow-400", items: ["List on 20+ directories", "Get 5+ reviews", "Add schema markup"] },
              ].map((group) => (
                <div key={group.label} className="flex gap-4">
                  <span className={`shrink-0 text-sm font-bold w-32 pt-0.5 ${group.color}`}>{group.label}:</span>
                  <div className="text-sm text-gray-300">{group.items.join(" · ")}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
            <h2 className="text-2xl font-bold mb-3">Want Us to Fix This For You?</h2>
            <p className="text-gray-300 mb-6">
              Zaikron handles everything — website, local SEO, Google Business Profile, schema markup, and Google rankings — for businesses in Sambhaji Nagar. Talk to us for free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919730416763?text=Hi%2C%20I%20read%20your%20blog%20and%20want%20help%20getting%20my%20business%20on%20Google"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-blog2-whatsapp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all hover:scale-105"
              >
                WhatsApp Us Now
              </a>
              <Link
                href="/website-developer-in-sambhaji-nagar"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-cyan-400/50 rounded-xl transition-all text-sm"
              >
                See Website Packages →
              </Link>
            </div>
          </div>

          {/* More posts */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-5">More Articles</h2>
            <div className="space-y-3">
              <Link href="/blog/5-things-aurangabad-businesses-need-on-website" className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all group">
                <span className="text-cyan-400 text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 shrink-0">Website Tips</span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">5 Things Every Aurangabad Business Website Must Have in 2026</span>
                <span className="ml-auto text-cyan-400 shrink-0">→</span>
              </Link>
              <Link href="/blog/website-vs-instagram-page-which-is-better-for-aurangabad-business" className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all group">
                <span className="text-purple-400 text-xs font-bold px-2 py-0.5 rounded bg-purple-500/10 shrink-0">Strategy</span>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">Website vs Instagram Page: Which Is Better for Aurangabad Businesses?</span>
                <span className="ml-auto text-cyan-400 shrink-0">→</span>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
