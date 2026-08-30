import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { blogPosts } from '../data/mockData';
import { Calendar, Clock, ArrowLeft, CheckCircle2, Share2, Sparkles, BookOpen, HelpCircle } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const articleSchema = generateArticleSchema(post);
  const schemas: object[] = [articleSchema];

  if (post.faqs && post.faqs.length > 0) {
    schemas.push(generateFAQSchema(post.faqs));
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '/blogs' },
    { name: post.title, url: `/blogs/${post.slug}` }
  ]);
  schemas.push(breadcrumbSchema);

  return (
    <div className="pb-24">
      <SEOHead
        title={`${post.title} | FunGro Guide`}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        canonical={`https://www.funngro.com/blogs/${post.slug}`}
        ogType="article"
        ogImage={post.coverImage}
        schemas={schemas}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-emerald-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Career Guides</span>
        </Link>

        {/* Title Header */}
        <div className="space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            {post.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <img
                src={post.authorAvatar}
                alt={`${post.author} - ${post.authorRole}`}
                className="w-8 h-8 rounded-full object-cover border border-emerald-500/40"
                width="32"
                height="32"
              />
              <div>
                <div className="text-white font-bold">{post.author}</div>
                <div className="text-[10px] text-gray-400">{post.authorRole}</div>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-gray-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[360px] object-cover"
            width="800"
            height="360"
            loading="eager"
          />
        </div>

        {/* Key Takeaways Box for Google Featured Snippets */}
        {post.keyTakeaways && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 to-teal-950/20 border border-emerald-500/30 mb-10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key Takeaways & Quick Summary</span>
            </div>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2 key={index} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3">
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* In-Article FAQs (Rich Schema) */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-14 pt-10 border-t border-gray-800 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <h2>Article Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0e1512] border border-gray-800 space-y-2">
                  <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA to Apply */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0e1512] border border-emerald-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Ready to Put These Skills to Work?</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Browse 1,200+ live freelance projects on FunGro and receive guaranteed UPI payments.
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Explore Live Brand Projects</span>
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
};
