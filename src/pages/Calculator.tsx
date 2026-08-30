import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { EarningsCalculator } from '../components/home/EarningsCalculator';
import { 
  Calculator as CalcIcon, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Coins, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Calculator: React.FC = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Earnings Calculator', url: '/calculator' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="Teen Freelance Earnings Calculator — Estimate Your Monthly UPI Income"
        description="Free calculator for Indian teens & college students to calculate freelance earnings in graphic design, video editing, social media, coding, and AI prompts."
        keywords="freelance earnings calculator india, student income calculator, teen hourly rate calculator, upi earnings estimator"
        canonical="https://www.funngro.com/calculator"
        schemas={[breadcrumbSchema]}
      />

      <EarningsCalculator />

      {/* Benchmark Comparisons */}
      <section className="py-16 bg-[#070a09]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              2026 Teen Freelance Benchmark Rates in India
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Based on over 4,200+ brand campaigns completed on FunGro in FY26.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { skill: 'Short-Form Video Editing (CapCut/Premiere)', range: '₹1,500 - ₹3,500 / Reel', demand: 'Very High' },
              { skill: 'Figma UI/UX Mockups & Wireframes', range: '₹4,000 - ₹12,000 / Screen set', demand: 'High' },
              { skill: 'SEO Blog & Ad Copywriting', range: '₹1,500 - ₹5,000 / Piece', demand: 'Steady' },
              { skill: 'AI Prompt Library & Asset Tuning', range: '₹3,000 - ₹8,000 / Project', demand: 'Surging' },
              { skill: 'Mobile App Bug Testing & QA', range: '₹2,000 - ₹6,000 / Sprint', demand: 'Steady' },
              { skill: 'Campus Ambassador Lead', range: '₹8,000 - ₹20,000 / Month', demand: 'Very High' },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0e1512] border border-gray-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    {item.demand}
                  </span>
                </div>
                <div className="text-sm font-bold text-white leading-snug">{item.skill}</div>
                <div className="text-xs font-mono font-bold text-emerald-400">{item.range}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
