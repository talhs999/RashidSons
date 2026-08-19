import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Quote, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { blogPosts } from "@/lib/newsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | J. Rashid & Sons",
    };
  }

  return {
    title: `${post.title} | J. Rashid & Sons News`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = blogPosts.filter((p) => p.slug !== slug);

  return (
    <article className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Top Header & Breadcrumbs */}
      <div className="bg-brand-black text-white pt-10 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-brand-yellow transition-colors">News</Link>
            <span>/</span>
            <span className="text-brand-yellow truncate max-w-[250px] sm:max-w-none">{post.tag}</span>
          </div>

          {/* Category Tag */}
          <span className="inline-block bg-brand-yellow text-brand-black font-extrabold text-xs px-3.5 py-1 uppercase tracking-widest mb-6">
            {post.tag}
          </span>

          {/* Article Title */}
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter leading-tight text-white mb-6">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-gray-300">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-yellow bg-gray-800">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{post.author.name}</p>
                <p className="text-gray-400 text-[11px]">{post.author.role}</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-yellow" /> {post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-yellow" /> {post.readTime}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="relative h-[300px] sm:h-[450px] md:h-[500px] w-full rounded-none overflow-hidden shadow-2xl border-4 border-white bg-brand-black">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 mt-12">
        
        {/* Executive Summary / Lead Excerpt */}
        <div className="bg-amber-50 border-l-4 border-brand-yellow p-6 md:p-8 mb-10">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-2">Executive Summary</h3>
          <p className="text-lg font-medium text-brand-black leading-relaxed italic">
            "{post.excerpt}"
          </p>
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-800 leading-relaxed mb-10 font-sans">
          {post.content.introduction}
        </p>

        {/* Dynamic Sections */}
        {post.content.sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-black tracking-tight mb-4">
              {section.heading}
            </h2>

            <p className="text-gray-700 leading-relaxed text-base mb-6">
              {section.body}
            </p>

            {/* Bullet Points */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
                <ul className="space-y-3">
                  {section.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm font-medium text-gray-800">
                      <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quote Box */}
            {section.quote && (
              <div className="my-8 bg-brand-black text-white p-8 relative overflow-hidden">
                <Quote size={48} className="text-brand-yellow/20 absolute top-4 right-4" />
                <p className="text-lg md:text-xl font-heading font-bold italic text-white mb-4 relative z-10 leading-snug">
                  "{section.quote.text}"
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
                  <span>— {section.quote.author}</span>
                </div>
              </div>
            )}

            {/* Highlight Callout Box */}
            {section.callout && (
              <div className="bg-amber-100/70 border border-amber-300 p-6 flex items-start gap-4 mb-6">
                <ShieldCheck size={24} className="text-amber-700 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-amber-900 leading-relaxed">
                  {section.callout}
                </p>
              </div>
            )}

          </div>
        ))}

        {/* Key Takeaways Card */}
        <div className="bg-brand-black text-white p-8 border-t-4 border-brand-yellow mb-12 shadow-lg">
          <div className="flex items-center gap-2 text-brand-yellow text-xs font-extrabold uppercase tracking-widest mb-4">
            <CheckCircle2 size={16} /> Key Takeaways for Drivers
          </div>
          <h3 className="text-2xl font-heading font-bold uppercase mb-6 text-white">
            Essential Maintenance Checklist
          </h3>
          <ul className="space-y-4">
            {post.content.takeaways.map((takeaway, tIdx) => (
              <li key={tIdx} className="flex items-start gap-3 text-sm text-gray-200">
                <div className="w-6 h-6 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {tIdx + 1}
                </div>
                <span className="leading-snug">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="border-t border-b border-gray-200 py-8 mb-12">
          <h3 className="text-xl font-heading font-extrabold text-brand-black uppercase mb-3">
            Conclusion & Next Steps
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            {post.content.conclusion}
          </p>
        </div>

        {/* Related Brands */}
        {post.relatedBrands && post.relatedBrands.length > 0 && (
          <div className="mb-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Related Brands & Imports</h4>
            <div className="flex flex-wrap gap-2">
              {post.relatedBrands.map((brandName, bIdx) => (
                <Link
                  key={bIdx}
                  href={`/brands/${brandName.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-gray-100 hover:bg-brand-yellow hover:text-brand-black transition-colors px-3 py-1.5 text-xs font-bold text-gray-800 uppercase tracking-wider border border-gray-200"
                >
                  {brandName}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="bg-gray-50 border border-gray-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-16">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-brand-black shrink-0 border-2 border-brand-yellow">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500">Published By</span>
            <h4 className="text-lg font-heading font-bold text-brand-black mt-0.5">{post.author.name}</h4>
            <p className="text-xs font-semibold text-amber-700 mb-2">{post.author.role}</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Official importer and distribution network of premium tire brands across Pakistan. Bringing Japanese performance engineering and tire safety to Pakistani roads.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/news" className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-brand-black hover:text-brand-yellow transition-colors">
            <ArrowLeft size={16} /> Back To All News
          </Link>
          <Link href="/dealers" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-5 py-2.5 font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors">
            Locate Dealer Center <ChevronRight size={16} />
          </Link>
        </div>

      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="bg-brand-light py-16 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-heading font-extrabold text-brand-black uppercase tracking-tight mb-8">
              More News & Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link key={rel.id} href={`/news/${rel.slug}`} className="group flex flex-col sm:flex-row bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 sm:h-auto sm:w-2/5 bg-brand-black shrink-0 overflow-hidden">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 block mb-1">{rel.tag}</span>
                      <h4 className="text-base font-heading font-bold text-brand-black leading-snug mb-2 group-hover:text-brand-yellow transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-black group-hover:text-brand-yellow flex items-center gap-1">
                      Read Story <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </article>
  );
}
