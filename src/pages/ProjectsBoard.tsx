import React, { useState, useMemo } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { liveProjects, projectCategories } from '../data/mockData';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ApplyModal } from '../components/projects/ApplyModal';
import { Project } from '../types';
import { 
  Search, 
  Filter, 
  Flame, 
  Zap, 
  SlidersHorizontal, 
  Sparkles, 
  X,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const ProjectsBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStipendRange, setSelectedStipendRange] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Video Editing', 'Graphic & UI Design', 'Content Writing', 'Web & Bug Testing', 'AI & Prompt Engineering', 'Campus Ambassador'];

  const filteredProjects = useMemo(() => {
    return liveProjects.filter((p) => {
      // Search term
      const matchesSearch = 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category
      const matchesCategory = 
        selectedCategory === 'All' || 
        p.category.toLowerCase().includes(selectedCategory.toLowerCase());

      // Difficulty
      const matchesDifficulty = 
        selectedDifficulty === 'All' || 
        p.difficulty === selectedDifficulty;

      // Stipend
      let matchesStipend = true;
      if (selectedStipendRange === 'under-3k') matchesStipend = p.stipend < 3000;
      else if (selectedStipendRange === '3k-7k') matchesStipend = p.stipend >= 3000 && p.stipend <= 7000;
      else if (selectedStipendRange === 'above-7k') matchesStipend = p.stipend > 7000;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesStipend;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedStipendRange]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Live Projects Board', url: '/projects' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="Live Teen Freelance Projects & Gigs — Instant UPI Payouts"
        description="Browse 1,200+ active freelance projects for Indian teenagers and students. Graphic design, short-form video editing, content writing, and app QA gigs with top brands."
        keywords="freelance jobs for teens, student freelance gigs, high school projects paid, upi freelance tasks india, boAt groww student projects"
        canonical="https://www.funngro.com/projects"
        schemas={[breadcrumbSchema]}
      />

      {/* Header */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/30 text-xs font-semibold text-orange-400 mb-4">
            <Flame className="w-3.5 h-3.5 fill-orange-400" />
            <span>1,248 Verified Brand Gigs Live Today</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Live Projects Directory
          </h1>
          <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
            Apply to verified freelance projects from top brands. Get selected, submit your deliverables, and receive instant UPI payouts.
          </p>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto mt-8 p-3 rounded-2xl bg-[#0e1512] border border-gray-800 shadow-2xl flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search gigs by skill, brand, or keyword (e.g. Figma, boAt, Reels)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-xs text-gray-300 focus:outline-none focus:border-emerald-400 w-1/2 sm:w-auto"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <select
                value={selectedStipendRange}
                onChange={(e) => setSelectedStipendRange(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-xs text-gray-300 focus:outline-none focus:border-emerald-400 w-1/2 sm:w-auto"
              >
                <option value="All">All Stipends</option>
                <option value="under-3k">Under ₹3,000</option>
                <option value="3k-7k">₹3,000 - ₹7,000</option>
                <option value="above-7k">₹7,000+</option>
              </select>
            </div>

          </div>

          {/* Category Chips */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-4 max-w-5xl mx-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'bg-[#0e1512] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
          <span>Showing <strong className="text-white">{filteredProjects.length}</strong> matching projects</span>
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Escrow Protected Payouts</span>
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onApply={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl bg-[#0e1512] border border-gray-800 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto text-gray-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-xs text-gray-400">
              Try adjusting your search query or reset your filters to view all active gigs.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSelectedStipendRange('All');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black hover:bg-emerald-400"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </section>

      <ApplyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
