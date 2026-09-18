import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

export const metadata: Metadata = {
  title: "Blog | Website Tips for Aurangabad Businesses — Zaikron",
  description: "Expert articles on website development, SEO, and digital marketing for businesses in Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra.",
  alternates: {
    canonical: "https://zaikron.com/blog",
  },
  openGraph: {
    title: "Blog | Zaikron — Web Development Tips for Aurangabad Businesses",
    description: "Expert articles on websites, SEO, and digital marketing for Sambhaji Nagar businesses.",
    url: "https://zaikron.com/blog",
    siteName: "Zaikron",
    locale: "en_IN",
    type: "website",
  },
};

const posts = [
  {
    slug: "5-things-aurangabad-businesses-need-on-website",
    title: "5 Things Every Aurangabad Business Website Must Have in 2026",
    description: "Most Sambhaji Nagar business websites are missing these 5 critical elements — and it's costing them customers every day. Check if your website has them.",
    date: "September 18, 2026",
    readTime: "6 min read",
    category: "Website Tips",
    tags: ["Aurangabad", "Website Design", "SEO", "Small Business"],
  },
  {
    slug: "why-your-sambhaji-nagar-business-is-not-on-google",
    title: "Why Your Sambhaji Nagar Business Is Not Showing on Google",
    description: "If people search for your business or service in Sambhaji Nagar and you don't appear — here are the exact reasons and how to fix them.",
    date: "September 18, 2026",
    readTime: "8 min read",
    category: "Local SEO",
    tags: ["Google Ranking", "Sambhaji Nagar", "Local SEO", "Google Business Profile"],
  },
  {
    slug: "website-vs-instagram-page-which-is-better-for-aurangabad-business",
    title: "Website vs Instagram Page: Which Is Better for Your Aurangabad Business?",
    description: "Many Sambhaji Nagar businesses rely only on Instagram. Here's an honest comparison — and why the most successful local businesses use both.",
    date: "September 18, 2026",
    readTime: "5 min read",
    category: "Strategy",
    tags: ["Instagram", "Website", "Digital Marketing", "Aurangabad"],
  },
];

const categoryColors: Record<string, string> = {
  "Website Tips": "bg-cyan-500/20 text-cyan-400",
  "Local SEO": "bg-green-500/20 text-green-400",
  "Strategy": "bg-purple-500/20 text-purple-400",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Zaikron Blog — Website & Digital Marketing Tips for Aurangabad",
            "url": "https://zaikron.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Zaikron",
              "url": "https://zaikron.com",
              "logo": { "@type": "ImageObject", "url": "https://zaikron.com/logo/Zaikron.png" },
            },
            "blogPost": posts.map((p) => ({
              "@type": "BlogPosting",
              "headline": p.title,
              "url": `https://zaikron.com/blog/${p.slug}`,
              "datePublished": "2026-09-18",
              "author": { "@type": "Organization", "name": "Zaikron" },
            })),
          }),
        }}
      />

      <main className="relative w-full min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            📝 Zaikron Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website & Digital Marketing Tips for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Aurangabad Businesses
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Practical, no-nonsense advice on websites, SEO, and digital marketing for businesses in
            Chhatrapati Sambhaji Nagar. Written by our local team.
          </p>
        </section>

        {/* Posts */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto pb-32">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="text-gray-600 text-sm">·</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  Read article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
