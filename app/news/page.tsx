import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/newsData";

export const metadata: Metadata = {
  title: "Latest News & Motorsports Insights | J. Rashid & Sons",
  description: "Stay updated with tire safety tips, motorsport victories, ADVAN engineering, and industry updates from J. Rashid & Sons, official tire importer in Pakistan.",
};

export default function NewsIndexPage() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <div className="bg-brand-light min-h-screen pt-24 pb-20">
      
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>News & Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter uppercase mb-4">
            News, Insights & <span className="text-brand-yellow">Motorsports</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Discover the latest news on tire safety, motorsport victories, high-performance Japanese engineering, and official dealer updates from J. Rashid & Sons.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-full bg-brand-yellow/10 skew-x-[-20deg] pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mt-12">
        
        {/* Main Featured Blog (Hero Card) */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Top Story</h2>
            <Link href={`/news/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] bg-brand-black overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-yellow text-brand-black font-extrabold text-xs px-3 py-1 uppercase tracking-widest">
                    {featuredPost.tag}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-brand-yellow" /> {featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={14} className="text-brand-yellow" /> {featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-black leading-tight mb-4 group-hover:text-brand-yellow transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6 line-clamp-4 transition-colors">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-xs font-bold text-brand-black">Published by jrashid.com.pk</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 font-heading font-bold text-xs uppercase tracking-wider text-brand-black group-hover:text-brand-yellow transition-colors">
                      Read Full Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

            </Link>
          </div>
        )}

        {/* Remaining News Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-extrabold text-brand-black uppercase tracking-tight mb-8 border-b-2 border-brand-black pb-2 inline-block">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/news/${post.slug}`} className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:bg-brand-black hover:border-brand-black">
                {/* Image */}
                <div className="relative h-60 w-full bg-brand-black overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-brand-black/90 backdrop-blur-sm border border-white/10 text-white font-bold text-[10px] px-2.5 py-1 uppercase tracking-widest">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-400 mb-3 transition-colors">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-brand-black leading-snug mb-3 group-hover:text-brand-yellow transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 group-hover:text-gray-300 transition-colors">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-black">
                    <span>Read Article</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-brand-yellow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter / Safety Assurance Box */}
        <div className="bg-brand-black text-white p-8 lg:p-12 relative overflow-hidden mt-16 border-l-4 border-brand-yellow">
          <div className="max-w-3xl relative z-10">
            <span className="text-brand-yellow font-extrabold text-xs uppercase tracking-widest">J. Rashid & Sons Knowledge Hub</span>
            <h3 className="text-3xl font-heading font-bold uppercase mt-2 mb-4">
              Need Professional Tire Consultation For Your Vehicle?
            </h3>
            <p className="text-gray-300 mb-6">
              Our technical experts in Lahore, Rawalpindi, and Karachi are ready to help you select the precise tire size, speed index, and compound for your driving needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dealers" className="bg-brand-yellow text-brand-black px-6 py-3 font-heading font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                Find Nearest Dealer Outlet
              </Link>
              <Link href="/tires-101" className="border border-white/20 text-white px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-colors">
                Explore Tires 101 Guide
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
