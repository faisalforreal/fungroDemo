import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { liveProjects } from '../../data/mockData';
import { ProjectCard } from '../projects/ProjectCard';
import { ApplyModal } from '../projects/ApplyModal';
import { Project } from '../../types';
import { Flame, ArrowRight, Filter, Sparkles } from 'lucide-react';

export const LiveProjectsTeaser: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProjectForApply, setSelectedProjectForApply] = useState<Project | null>(null);

  const categories = ['All', 'Video Editing', 'Graphic & UI Design', 'Content Writing', 'Web & Bug Testing', 'AI & Prompt Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? liveProjects.slice(0, 6)
    : liveProjects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="py-20 bg-[#070a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-3">
              <Flame className="w-3.5 h-3.5 fill-orange-400" />
              <span>Live Brand Gigs Available Today</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Gigs from India's Top Brands
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Apply in 60 seconds with zero fees. Work directly with brand managers and get paid via UPI.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group shrink-0"
          >
            <span>View All 1,200+ Live Gigs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-[#0e1512] text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onApply={(proj) => setSelectedProjectForApply(proj)}
            />
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 to-teal-950/20 border border-emerald-500/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Have a custom skill not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            FunGro has over 12+ work categories including Gaming, Campus Leadership, AI Prompting, and Translation.
          </p>
          <div className="pt-2">
            <Link
              to="/teenlancers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Explore All 12+ Skill Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Apply Modal */}
      <ApplyModal
        project={selectedProjectForApply}
        onClose={() => setSelectedProjectForApply(null)}
      />
    </section>
  );
};
