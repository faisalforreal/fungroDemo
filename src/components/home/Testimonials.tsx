import React, { useState } from 'react';
import { testimonials } from '../../data/mockData';
import { Star, Quote, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'teen' | 'parent' | 'company'>('all');

  const filtered = filter === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === filter);

  return (
    <section className="py-20 bg-[#050807] relative border-t border-emerald-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Real Impact Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Loved by 70 Lakh+ Students, Parents & Top Founders
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Hear from young earners, supportive guardians, and corporate hiring managers.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: 'all' as const, label: 'All Stories' },
              { id: 'teen' as const, label: '🎓 Teenlancers' },
              { id: 'parent' as const, label: '🛡️ Parents' },
              { id: 'company' as const, label: '💼 Brands & Founders' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                    : 'bg-[#0e1512] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={`${item.name} - ${item.role}`}
                    className="w-12 h-12 rounded-full object-cover border border-emerald-500/30"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.category === 'teen' && <span className="text-xs text-gray-400">({item.age}y)</span>}
                    </div>
                    <div className="text-xs text-gray-400">{item.role} • {item.city}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-gray-500 uppercase">Impact</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">
                    {item.earningTotal}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
