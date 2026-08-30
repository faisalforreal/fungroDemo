import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Sparkles, Send, Zap, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Skill Superpower',
      desc: 'Pick your creative or technical interests (Video, Design, Coding, Writing). Complete a quick 5-minute micro portfolio test to get your verified starter badge.',
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      badge: 'Free Registration'
    },
    {
      number: '02',
      title: 'Apply & Work with Top Brands',
      desc: 'Browse projects from 5,000+ companies like boAt, Groww, and Shoppers Stop. Get selected, receive direct project briefs, and submit your deliverables.',
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      badge: 'Escrow Protected'
    },
    {
      number: '03',
      title: 'Get Paid in UPI & Earn Certificates',
      desc: 'Upon project verification, your payment is transferred directly to your bank/UPI. Receive an official ISO-verified experiential learning certificate.',
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      badge: 'Instant Transfer'
    }
  ];

  return (
    <section className="py-20 bg-[#050807] relative border-t border-emerald-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How FunGro Works for Young Creators
          </h2>
          <p className="mt-3 text-base text-gray-400">
            From discovering your creative talent to receiving your first UPI payout in under 7 days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 relative space-y-6 group hover:-translate-y-1"
            >
              {/* Number Watermark */}
              <div className="text-6xl font-black text-white/5 font-mono absolute top-6 right-6 select-none">
                {step.number}
              </div>

              {/* Icon & Badge */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#131c18] border border-gray-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {step.badge}
                </span>
              </div>

              {/* Copy */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <span>Learn more about Step {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
