import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Award,
  CreditCard
} from 'lucide-react';
import confetti from 'canvas-confetti';

const skillRates: Record<string, { baseRate: number; avgHoursPerProject: number; levelMultipliers: Record<string, number> }> = {
  'video-editing': { baseRate: 650, avgHoursPerProject: 4, levelMultipliers: { novice: 1.0, intermediate: 1.6, pro: 2.4 } },
  'ui-ux': { baseRate: 800, avgHoursPerProject: 6, levelMultipliers: { novice: 1.0, intermediate: 1.7, pro: 2.6 } },
  'content-writing': { baseRate: 450, avgHoursPerProject: 3, levelMultipliers: { novice: 1.0, intermediate: 1.5, pro: 2.2 } },
  'social-media': { baseRate: 500, avgHoursPerProject: 3, levelMultipliers: { novice: 1.0, intermediate: 1.5, pro: 2.1 } },
  'coding-qa': { baseRate: 750, avgHoursPerProject: 5, levelMultipliers: { novice: 1.0, intermediate: 1.8, pro: 2.8 } },
  'ai-prompting': { baseRate: 700, avgHoursPerProject: 3, levelMultipliers: { novice: 1.0, intermediate: 1.6, pro: 2.5 } },
};

export const EarningsCalculator: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('video-editing');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [level, setLevel] = useState<'novice' | 'intermediate' | 'pro'>('intermediate');

  const config = skillRates[selectedSkill] || skillRates['video-editing'];
  const effectiveHourlyRate = Math.round(config.baseRate * config.levelMultipliers[level]);
  const weeklyEarnings = effectiveHourlyRate * hoursPerWeek;
  const monthlyEarnings = weeklyEarnings * 4.2;
  const annualSavings = monthlyEarnings * 12;
  const estimatedProjects = Math.max(1, Math.round((hoursPerWeek * 4.2) / config.avgHoursPerProject));

  const celebrateCalculation = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#10b981', '#00f59b', '#38bdf8', '#fbbf24', '#c084fc']
    });
  };

  return (
    <section id="calculator" className="py-20 bg-[#050807] relative overflow-hidden border-t border-emerald-950/30">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Teen Income Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Much Can You Earn on FunGro Each Month?
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Select your skill track, commitment, and skill level to estimate your projected monthly UPI earnings.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0e1512] to-[#070a09] border border-emerald-500/30 shadow-2xl p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Skill Track Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                  1. Choose Your Skill Track
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'video-editing', label: '🎬 Video Editing' },
                    { id: 'ui-ux', label: '🎨 Figma / UI Design' },
                    { id: 'content-writing', label: '✍️ Content Writing' },
                    { id: 'social-media', label: '📱 Social Media' },
                    { id: 'coding-qa', label: '💻 Web / App QA' },
                    { id: 'ai-prompting', label: '✨ AI Prompts' },
                  ].map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill.id)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all text-left ${
                        selectedSkill === skill.id
                          ? 'bg-emerald-500/20 border-2 border-emerald-400 text-white shadow-md'
                          : 'bg-[#131c18] border border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {skill.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours per Week Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    2. Hours Dedicated Per Week
                  </label>
                  <span className="text-sm font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/20">
                    {hoursPerWeek} Hours / Week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                  <span>2 hrs (Light side gig)</span>
                  <span>10 hrs (Weekend creator)</span>
                  <span>25 hrs (Full flex pro)</span>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                  3. Your Skill Level
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'novice' as const, label: '🌱 Starter / Novice', sub: 'Learning fundamentals' },
                    { id: 'intermediate' as const, label: '🚀 Intermediate', sub: 'Have 2-3 samples' },
                    { id: 'pro' as const, label: '⚡ Pro Teenlancer', sub: 'Fast & independent' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setLevel(lvl.id)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        level === lvl.id
                          ? 'bg-emerald-500/20 border-2 border-emerald-400 text-white'
                          : 'bg-[#131c18] border border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{lvl.label}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{lvl.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Display Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-[#0e1512] to-[#080d0b] border-2 border-emerald-500/40 shadow-2xl space-y-6 relative">
                
                <div className="flex items-center justify-between text-xs text-gray-400 pb-4 border-b border-gray-800">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>Projected Payout</span>
                  </span>
                  <span className="font-mono text-gray-400">100% Tax-free under ₹7L</span>
                </div>

                {/* Big Number */}
                <div className="text-center py-2 space-y-1">
                  <div className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                    Estimated Monthly Earnings
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200 font-mono">
                    ₹{monthlyEarnings.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-emerald-400/80 font-medium">
                    Paid directly via UPI to your account
                  </div>
                </div>

                {/* Sub Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#070a09]/80 border border-gray-800 text-left">
                    <div className="text-[11px] text-gray-400">Annual Earning Potential</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      ₹{annualSavings.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070a09]/80 border border-gray-800 text-left">
                    <div className="text-[11px] text-gray-400">Projects / Month</div>
                    <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                      ~{estimatedProjects} Gigs
                    </div>
                  </div>
                </div>

                {/* CTA inside calculator */}
                <div className="space-y-2 pt-2">
                  <Link
                    to="/projects"
                    onClick={celebrateCalculation}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
                  >
                    <Zap className="w-4 h-4 fill-black" />
                    <span>Claim Your First Project (Free)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 text-center">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Zero upfront fee • Verified Indian Brands</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
