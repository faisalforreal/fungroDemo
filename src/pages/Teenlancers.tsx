import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema, generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { projectCategories, liveProjects, siteFaqs } from '../data/mockData';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ApplyModal } from '../components/projects/ApplyModal';
import { Project } from '../types';
import { 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Smartphone, 
  CreditCard, 
  BookOpen, 
  Star,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Teenlancers: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const teenFaqs = siteFaqs.filter(f => f.category === 'teens' || f.category === 'payments');
  const faqSchema = generateFAQSchema(teenFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'For Teenlancers', url: '/teenlancers' }
  ]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pb-24">
      <SEOHead
        title="For Teenlancers — Earn Online, Learn Skills & Build Portfolios"
        description="Join 70 lakh+ Indian students earning ₹5,000 to ₹30,000/month on FunGro. Work on video editing, graphic design, social media, coding & writing with top brands. Paid via UPI."
        keywords="teen freelancing india, earn money for students, teenlancers, upi earnings app for teens, high school internships, student freelance jobs"
        canonical="https://www.funngro.com/teenlancers"
        schemas={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero Header */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Over 70 Lakh Registered Teenlancers Across India</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Stop Scrolling. Start <span className="gradient-text-emerald">Earning & Learning</span> with Top Brands.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Work on freelance gigs for brands like boAt, Groww, Shoppers Stop, and Tata. Build an elite portfolio, gain real work experience, and get paid directly to your UPI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              onClick={triggerConfetti}
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 hover:scale-105"
            >
              Browse 1,200+ Live Gigs
            </Link>
            <Link
              to="/calculator"
              className="px-6 py-4 rounded-2xl font-semibold text-sm text-gray-200 bg-[#0e1512] border border-gray-800 hover:border-emerald-500/40"
            >
              Calculate My Monthly Potential
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Registered Teenlancers', value: '70 Lakh+' },
              { label: 'Total Paid Out', value: '₹10+ Crore' },
              { label: 'Avg Project Pay', value: '₹3,500 - ₹15k' },
              { label: 'Partner Brands', value: '5,000+' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0e1512] border border-emerald-900/20 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12+ Work Categories Section */}
      <section className="py-16 bg-[#050807] border-y border-emerald-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-white">
              Explore 12+ In-Demand Work Categories
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Pick the creative or technical skill that matches your passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {cat.count} Gigs
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cat.popularSkills.map((sk, idx) => (
                      <span key={idx} className="text-[10px] bg-[#131c18] text-gray-300 px-2 py-0.5 rounded border border-gray-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono font-semibold">{cat.avgStipend}</span>
                  <Link to="/projects" className="text-gray-400 hover:text-white font-bold flex items-center gap-1">
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Income & Influence Ladder */}
      <section className="py-20 bg-[#070a09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Career Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              The FunGro Income & Influence Ladder
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              As you complete verified projects, your level increases, unlocking higher-paying gigs and leadership perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Level 1 */}
            <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-5 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full">LEVEL 1</span>
                <span className="text-sm font-mono font-bold text-emerald-400">₹1,000 - ₹5,000/mo</span>
              </div>
              <h3 className="text-xl font-bold text-white">Starter Teenlancer</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Complete basic brand tasks, surveys, short video edits, and Canva graphics to build your initial rating.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Access to beginner projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Starter Experience Badge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant UPI payouts</span>
                </li>
              </ul>
            </div>

            {/* Level 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-950/30 to-[#0e1512] border-2 border-emerald-500/40 space-y-5 relative shadow-xl shadow-emerald-950/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-black bg-emerald-400 px-2.5 py-1 rounded-full">LEVEL 2 • PRO</span>
                <span className="text-sm font-mono font-bold text-emerald-300">₹5,000 - ₹20,000/mo</span>
              </div>
              <h3 className="text-xl font-bold text-white">Pro Teenlancer</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Work directly with top D2C and FinTech brands on UI/UX redesigns, multi-reel campaigns, and AI prompts.
              </p>
              <ul className="space-y-2 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Priority application review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Experiential Certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct brand Slack/Discord access</span>
                </li>
              </ul>
            </div>

            {/* Level 3 */}
            <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-5 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/20 px-2.5 py-1 rounded-full">LEVEL 3 • CLAN LEAD</span>
                <span className="text-sm font-mono font-bold text-yellow-400">₹20,000 - ₹50,000+/mo</span>
              </div>
              <h3 className="text-xl font-bold text-white">Clan Leader & Campus Lead</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lead teams of teen creators, manage major campus activations, and earn project management royalties.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Manage client retainers & clans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Letter of Recommendation from Founders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Invites to exclusive Shark Tank events</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-[#050807] border-t border-emerald-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Live Gigs Ready for Application
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">Zero upfront fees. Apply in under 60 seconds.</p>
            </div>
            <Link to="/projects" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveProjects.slice(0, 3).map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onApply={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teen FAQ */}
      <section className="py-16 bg-[#070a09]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Teen Freelancer FAQs
          </h2>
          <div className="space-y-3">
            {teenFaqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#0e1512] border border-gray-800 space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
