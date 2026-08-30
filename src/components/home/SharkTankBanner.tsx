import React from 'react';
import { Link } from 'react-router-dom';
import { sharkTankStats } from '../../data/mockData';
import { Tv, Sparkles, CheckCircle2, ArrowRight, Quote, Award } from 'lucide-react';

export const SharkTankBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#070a09] relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#181308] via-[#0e1512] to-[#070a09] border border-yellow-500/30 p-8 sm:p-12 shadow-2xl relative">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-yellow-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400">
                <Tv className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-400">
                  National Television Feature
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Shark Tank India Season 2 Funded
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 font-mono font-bold text-xs">
                Deal: ₹50 Lakhs • 4.16% Equity
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Story */}
            <div className="lg:col-span-6 space-y-5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                "Teens Want to Learn by Doing — FunGro Makes That Dream Real"
              </h4>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                Founders <strong className="text-white">Payal Jain & Anik Jain</strong> (IIM Calcutta alumni) impressed the Sharks with their mission to democratize experiential learning and financial self-reliance for 70 Lakh+ young Indians.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">
                    <strong className="text-white">Amit Jain (CarDekho)</strong> backed the platform for its massive nation-building scale and real-economy youth integration.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">
                    <strong className="text-white">Namita Thapar (Emcure)</strong> championed the female empowerment vertical <strong className="text-pink-300">Shelancers</strong>.
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/shark-tank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-yellow-400 to-amber-300 hover:from-yellow-300 hover:to-amber-200 transition-all shadow-lg shadow-yellow-500/20 hover:scale-105"
                >
                  <span>Read Full Shark Tank Pitch Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Shark Quotes */}
            <div className="lg:col-span-6 space-y-4">
              {sharkTankStats.quotes.map((q, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#070a09]/80 border border-yellow-500/20 relative">
                  <Quote className="w-8 h-8 text-yellow-500/20 absolute top-4 right-4" />
                  <p className="text-xs text-gray-200 italic mb-4 leading-relaxed relative z-10">
                    "{q.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={q.image} 
                      alt={q.shark} 
                      className="w-10 h-10 rounded-full object-cover border border-yellow-500/40"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{q.shark}</div>
                      <div className="text-[11px] text-yellow-400/90">{q.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
