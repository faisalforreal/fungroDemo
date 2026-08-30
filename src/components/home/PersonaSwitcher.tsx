import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personaData } from '../../data/mockData';
import { 
  TrendingUp, 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Award, 
  CheckCircle2, 
  Globe, 
  Flame, 
  Lock, 
  BookOpen, 
  Coins, 
  Heart 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-emerald-400" />,
  Zap: <Zap className="w-5 h-5 text-emerald-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  Flame: <Flame className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-400" />,
  Lock: <Lock className="w-5 h-5 text-amber-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-amber-400" />,
  Heart: <Heart className="w-5 h-5 text-pink-400" />,
  Coins: <Coins className="w-5 h-5 text-pink-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
};

export const PersonaSwitcher: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'teens' | 'companies' | 'parents' | 'shelancers'>('teens');
  const current = personaData[activePersona];

  const personaTabs = [
    { id: 'teens' as const, label: '🚀 For Teenlancers', count: '70L+ Teens', color: 'emerald' },
    { id: 'companies' as const, label: '💼 For Companies', count: '5,000+ Brands', color: 'blue' },
    { id: 'parents' as const, label: '🛡️ For Parents', count: 'Supervised & Safe', color: 'amber' },
    { id: 'shelancers' as const, label: '✨ Shelancers', count: 'Women in Freelancing', color: 'pink' }
  ];

  return (
    <section className="py-20 bg-[#070a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <span>Tailored Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for India’s Ambitious Youth, Forward-Thinking Brands & Caring Parents
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Select your journey below to discover how FunGro delivers personalized value for you.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {personaTabs.map((tab) => {
            const isActive = activePersona === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePersona(tab.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border-2 border-emerald-400 text-white shadow-xl shadow-emerald-500/10 scale-105'
                    : 'bg-[#0e1512] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                  isActive ? 'bg-emerald-500 text-black font-bold' : 'bg-gray-800 text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Persona Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0e1512] to-[#080d0b] border border-emerald-900/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Copy, CTAs & Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {current.badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {current.headline}
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed">
                {current.subheadline}
              </p>

              {/* 3 Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {current.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#131c18]/70 border border-gray-800/80 space-y-2">
                    <div className="p-2 rounded-xl bg-emerald-500/10 w-fit">
                      {iconMap[benefit.icon] || <Zap className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <div className="text-sm font-bold text-white">{benefit.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{benefit.desc}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to={current.primaryCta.link}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
                >
                  <span>{current.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={current.secondaryCta.link}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-300 bg-[#0e1512] hover:bg-[#15201c] border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <span>{current.secondaryCta.label}</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Key Stats Display */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-[#080d0b] border border-emerald-500/20 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
                  <span>Impact Metrics</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>

                <div className="space-y-4">
                  {current.stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#0e1512] border border-gray-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                        {stat.sub && <div className="text-[10px] text-gray-500 mt-0.5">{stat.sub}</div>}
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono text-right text-emerald-400">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time verified platform data • Shark Tank validated</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
