import React from 'react';
import { brandPartners } from '../../data/mockData';
import { ShieldCheck, Building2 } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const brands = [...brandPartners, ...brandPartners];

  return (
    <section className="py-12 bg-[#050807] border-y border-emerald-950/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
              Trusted by 5,000+ Leading Indian Companies
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Verified Corporate Partners • Guaranteed UPI Escrow</span>
          </div>
        </div>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient masks for edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050807] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050807] to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center gap-6 animate-[marquee_35s_linear_infinite] whitespace-nowrap py-3">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0e1512]/70 border border-gray-800/80 hover:border-emerald-500/30 transition-all group shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-xs text-emerald-400 group-hover:scale-105 transition-transform">
                {brand.logoText.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-gray-400">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
