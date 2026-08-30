import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { blogPosts } from '../data/mockData';
import { BookOpen, Clock, Calendar, ArrowRight, User, Sparkles } from 'lucide-react';

export const Blogs: React.FC = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'SEO & Career Guides', url: '/blogs' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="SEO & Career Guides for Teen Freelancers in India (2026)"
        description="Comprehensive guides, tutorials, and legal blueprints on teen freelancing, UPI earnings, portfolio building, and experiential learning in India."
        keywords="how to earn money as a teenager india, teen freelance skills 2026, upi payment rules for minors, gen z career guides"
        canonical="https://www.funngro.com/blogs"
        schemas={[breadcrumbSchema]}
      />

      {/* Header */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Knowledge Hub & Research</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Teen Freelancing & Career Guides
          </h1>
          <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
            Practical blueprints written by founders, industry hiring leads, and top teen earners.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl bg-[#0e1512] border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-950/30"
            >
              <div>
                {/* Cover Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                    {post.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    <Link to={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-[#131c18] text-gray-400 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Read More Link */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-800/60 mt-4 pt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-300 font-medium">{post.author}</span>
                </div>

                <Link
                  to={`/blogs/${post.slug}`}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
