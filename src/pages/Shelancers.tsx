import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { liveProjects, testimonials } from '../data/mockData';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ApplyModal } from '../components/projects/ApplyModal';
import { Project } from '../types';
import { 
  Sparkles, 
  Heart, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  Zap, 
  Flame, 
  Tv, 
  Users 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Shelancers: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Shelancers', url: '/shelancers' }
  ]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#a855f7', '#fbbf24']
    });
  };

  return (
    <div className="pb-24">
      <SEOHead
        title="Shelancers — Empowering Young Women in Freelancing & Digital Arts"
        description="Shelancers is FunGro's dedicated vertical empowering 32 lakh+ female teen creators and young women with safe campaigns, female mentorship, and independent UPI earnings."
        keywords="shelancers fungro, women freelancing india, female teen creators, girl power freelance app, women in design tech india"
        canonical="https://www.funngro.com/shelancers"
        schemas={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-pink-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-xs font-semibold text-pink-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Vertical for 32 Lakh+ Female Creators & Teenlancers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Financial Independence & Creative Power for <span className="gradient-text-gold">Young Women</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            A safe, verified space for young women to work on design, video, writing, and leadership campaigns for top consumer and lifestyle brands.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              onClick={triggerConfetti}
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 hover:from-pink-300 hover:to-amber-100 transition-all shadow-xl shadow-pink-500/25 hover:scale-105"
            >
              Explore Shelancers Campaigns
            </Link>
            <a
              href="#mentors"
              className="px-6 py-4 rounded-2xl font-semibold text-sm text-gray-200 bg-[#0e1512] border border-gray-800 hover:border-pink-500/40"
            >
              Meet Female Mentors
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Active Women Creators', value: '32 Lakh+' },
              { label: 'Exclusive Campaigns', value: '450+ Active' },
              { label: 'Female Mentors', value: '1,200+' },
              { label: 'Avg Monthly Earning', value: '₹12,500' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0e1512] border border-pink-900/20 text-center">
                <div className="text-xl sm:text-2xl font-black text-pink-400 font-mono">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Shark Tank Endorsement */}
      <section className="py-16 bg-[#050807] border-y border-pink-950/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-950/30 to-[#0e1512] border border-pink-500/30 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
              <Tv className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-pink-400">
                Shark Tank India Highlight
              </span>
              <p className="text-sm sm:text-base text-gray-200 italic mt-1 leading-relaxed">
                "What FunGro does for experiential learning and female teen empowerment through Shelancers is extraordinary. Giving young women financial autonomy before college changes the game."
              </p>
              <div className="text-xs font-bold text-white mt-2">
                — Namita Thapar, Executive Director at Emcure Pharmaceuticals & Shark Tank India Judge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shelancers 3 Core Pillars */}
      <section id="mentors" className="py-20 bg-[#070a09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
              Built By Women, For Women
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Shelancers is a Safe Space for You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
              <Heart className="w-8 h-8 text-pink-400" />
              <h3 className="text-lg font-bold text-white">Harassment-Free Community</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strict verified onboarding and zero-tolerance moderation for complete peace of mind while working with brands.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h3 className="text-lg font-bold text-white">1-on-1 Female Mentorship</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Weekly masterclasses hosted by leading women CXOs, creative directors, and tech leads across India.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
              <Coins className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Self-Funded Dreams</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Fund your own laptops, design tablets, books, and courses without asking for allowance or loans.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects for Women */}
      <section className="py-16 bg-[#050807] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-white">Curated Projects for Shelancers</h2>
              <p className="text-xs text-gray-400">Apply with your portfolio in 60 seconds</p>
            </div>
            <Link to="/projects" className="text-xs font-bold text-pink-400 hover:underline">
              View All 1,200+ Gigs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveProjects.slice(0, 3).map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onApply={(proj) => setSelectedProject(proj)}
              />
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
