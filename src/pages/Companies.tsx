import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema, generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { siteFaqs, brandPartners } from '../data/mockData';
import { 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Send, 
  Flame, 
  Building2, 
  Award,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

const campaignScenarios = [
  { id: 'reels', name: '50 Gen-Z Viral Reels', agencyCost: 350000, fungroCost: 95000, timeDays: 3, deliverable: '50 UGC Vertical Videos' },
  { id: 'campus', name: 'Pan-India Campus Activation (20 Colleges)', agencyCost: 600000, fungroCost: 180000, timeDays: 7, deliverable: '20 College Ambassador Drives' },
  { id: 'qa-testing', name: 'Comprehensive App QA & Bug Bounty', agencyCost: 200000, fungroCost: 45000, timeDays: 2, deliverable: '100+ Real Device Test Reports' },
  { id: 'market-research', name: '1,000 Gen-Z Survey Insights', agencyCost: 250000, fungroCost: 60000, timeDays: 3, deliverable: '1,000 Verified Student Responses' },
];

export const Companies: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState(campaignScenarios[0]);
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    contactName: '',
    projectType: 'Social Media & Reels',
    budgetEstimate: '₹25,000 - ₹50,000',
    brief: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companyFaqs = siteFaqs.filter(f => f.category === 'companies' || f.category === 'general');
  const faqSchema = generateFAQSchema(companyFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'For Companies', url: '/companies' }
  ]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#10b981']
    });
  };

  const savingsPercent = Math.round(((selectedScenario.agencyCost - selectedScenario.fungroCost) / selectedScenario.agencyCost) * 100);

  return (
    <div className="pb-24">
      <SEOHead
        title="Hire Gen-Z Teen Talent — Fast, Scalable & High-ROI Campaigns"
        description="Access India's largest youth network of 70L+ teenlancers for viral social content, app testing, campus drives, and design. 70% lower cost than agencies, 48-hour delivery."
        keywords="hire gen z talent, hire teen freelancers, campus ambassador marketing india, user generated content creators, app testing freelancers india, funngro for brands"
        canonical="https://www.funngro.com/companies"
        schemas={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trusted by 5,000+ Brands across D2C, FinTech & Retail</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Tap the Power of <span className="gradient-text-shark">70 Lakh+ Gen-Z Creators</span> in 48 Hours
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Traditional agencies are slow and disconnect with youth culture. FunGro deploys authentic teen creators, campus leads, and tech testers at 70% lower cost with guaranteed escrow delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#post-project"
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300 hover:from-blue-300 hover:to-teal-200 transition-all shadow-xl shadow-blue-500/25 hover:scale-105"
            >
              Post a Project (Get Proposals Today)
            </a>
            <a
              href="#roi"
              className="px-6 py-4 rounded-2xl font-semibold text-sm text-gray-200 bg-[#0e1512] border border-gray-800 hover:border-blue-500/40"
            >
              Calculate Agency Cost Savings
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Active Gen-Z Talent', value: '70 Lakh+' },
              { label: 'Turnaround Time', value: '< 48 Hours' },
              { label: 'Average Cost Savings', value: '70% vs Agency' },
              { label: 'Client Satisfaction', value: '4.9 / 5.0' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0e1512] border border-blue-900/20 text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section id="roi" className="py-20 bg-[#050807] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Agency Cost Comparison
            </span>
            <h2 className="text-3xl font-black text-white mt-3">
              How Much Do You Save with FunGro?
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Compare standard marketing agency retainers against FunGro crowd-sourced creator campaigns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0e1512] border border-blue-500/30 p-6 sm:p-10 shadow-2xl">
            
            {/* Scenario Picker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              {campaignScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenario(sc)}
                  className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                    selectedScenario.id === sc.id
                      ? 'bg-blue-500/20 border-2 border-blue-400 text-white'
                      : 'bg-[#080d0b] border border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Agency Price */}
              <div className="p-6 rounded-2xl bg-[#080d0b] border border-gray-800 text-center space-y-2">
                <div className="text-xs text-gray-400 uppercase font-semibold">Traditional Agency Cost</div>
                <div className="text-2xl sm:text-3xl font-bold text-red-400 font-mono line-through">
                  ₹{selectedScenario.agencyCost.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-gray-500">3-4 Weeks Turnaround</div>
              </div>

              {/* FunGro Price */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 to-[#080d0b] border-2 border-blue-400 text-center space-y-2 relative">
                <div className="text-xs text-blue-300 uppercase font-bold">FunGro Managed Cost</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  ₹{selectedScenario.fungroCost.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-400 font-semibold">{selectedScenario.timeDays} Days Turnaround</div>
              </div>

              {/* Savings Stat */}
              <div className="p-6 rounded-2xl bg-[#080d0b] border border-emerald-500/30 text-center space-y-2">
                <div className="text-xs text-emerald-400 uppercase font-semibold">Net Cost Savings</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                  {savingsPercent}% OFF
                </div>
                <div className="text-xs text-gray-300">Save ₹{(selectedScenario.agencyCost - selectedScenario.fungroCost).toLocaleString('en-IN')}</div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Satisfaction Guarantee: Pay only when deliverables meet brief.</span>
              </div>
              <a href="#post-project" className="text-blue-400 font-bold hover:underline">
                Launch this Campaign →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Post a Project Interactive Form */}
      <section id="post-project" className="py-20 bg-[#070a09]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#0e1512] border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Direct Hiring Portal
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                Post a Project & Get 10+ Qualified Pitches in 24 Hours
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                Zero upfront payment required. Describe your deliverables and select your target audience.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Brand Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. MyGlamm, Swiggy, Startup"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="marketing@yourbrand.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Campaign Category</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-blue-400"
                    >
                      <option>Social Media Reels & UGC Videos</option>
                      <option>Figma UI/UX & Web Design</option>
                      <option>Campus Ambassador Activation</option>
                      <option>Mobile App Bug Testing & QA</option>
                      <option>Gen-Z Market Survey & Research</option>
                      <option>AI Prompts & Graphic Assets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Estimated Budget</label>
                    <select
                      value={formData.budgetEstimate}
                      onChange={(e) => setFormData({ ...formData, budgetEstimate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-blue-400"
                    >
                      <option>₹10,000 - ₹25,000 (Pilot Campaign)</option>
                      <option>₹25,000 - ₹50,000 (Standard Growth)</option>
                      <option>₹50,000 - ₹1,50,000 (Pan-India Push)</option>
                      <option>₹1,50,000+ (Enterprise Custom)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Brief Campaign Goal & Deliverables</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We need 15 college creators to film unboxing reels for our new gaming headphone launch. Needs to be delivered within 5 days..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-blue-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-blue-400 to-teal-300 hover:from-blue-300 hover:to-teal-200 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Brief (Get Instant Creator Matches)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Your email is safe. Our team responds within 2 hours with curated talent pools.</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Request Received!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Our FunGro campaign strategist will reach out to <strong className="text-white">{formData.workEmail}</strong> with matching teenlancers and an executable brief within 2 hours.
                </p>
                <div className="p-4 rounded-2xl bg-[#070a09] border border-gray-800 text-xs text-gray-400 text-left max-w-sm mx-auto">
                  <div>Company: <span className="text-white font-semibold">{formData.companyName}</span></div>
                  <div>Category: <span className="text-blue-400 font-semibold">{formData.projectType}</span></div>
                  <div>Budget: <span className="text-emerald-400 font-mono font-semibold">{formData.budgetEstimate}</span></div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#131c18] border border-gray-800 text-gray-300 hover:text-white"
                >
                  Post Another Campaign
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Enterprise Brands Logos */}
      <section className="py-16 bg-[#050807] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            5,000+ Brands Trust FunGro For High-Velocity Growth
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {brandPartners.slice(0, 6).map((b, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0e1512] border border-gray-800 text-center">
                <div className="text-sm font-bold text-white">{b.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{b.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
