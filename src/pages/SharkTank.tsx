import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { sharkTankStats } from '../data/mockData';
import { 
  Tv, 
  Award, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Building2,
  Users,
  Play
} from 'lucide-react';

export const SharkTank: React.FC = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Shark Tank India Story', url: '/shark-tank' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="Shark Tank India Season 2 — How FunGro Secured Investment from Amit Jain & Namita Thapar"
        description="Read the complete story of FunGro on Shark Tank India Season 2. Founders Payal and Anik Jain secured ₹50 Lakhs for teen experiential learning and freelancing in India."
        keywords="shark tank india funngro, amit jain funngro, namita thapar funngro, payal jain shark tank, teen freelancing shark tank"
        canonical="https://www.funngro.com/shark-tank"
        schemas={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-yellow-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-950/60 border border-yellow-500/30 text-xs font-semibold text-yellow-400 mb-6">
            <Tv className="w-3.5 h-3.5" />
            <span>As Seen on Shark Tank India Season 2</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            The Pitch That Convinced the Sharks: <span className="gradient-text-gold">Experiential Learning for India</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            When Payal and Anik Jain pitched FunGro on national television, they championed a bold idea: Indian teenagers are ready to earn, learn, and contribute to the economy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 hover:from-yellow-300 hover:to-amber-200 transition-all shadow-xl shadow-yellow-500/25 hover:scale-105"
            >
              Start Earning on FunGro
            </Link>
            <Link
              to="/companies"
              className="px-6 py-4 rounded-2xl font-semibold text-sm text-gray-200 bg-[#0e1512] border border-gray-800 hover:border-yellow-500/40"
            >
              Hire Teenlancers for Your Brand
            </Link>
          </div>

          {/* Deal Highlights Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-left">
            <div className="p-6 rounded-3xl bg-[#0e1512] border border-yellow-500/30">
              <div className="text-xs uppercase font-bold text-yellow-400 tracking-wider">The Deal</div>
              <div className="text-2xl font-black text-white font-mono mt-1">₹50 Lakhs</div>
              <div className="text-xs text-gray-400 mt-1">For 4.16% Equity in FunGro</div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0e1512] border border-yellow-500/30">
              <div className="text-xs uppercase font-bold text-yellow-400 tracking-wider">Investing Sharks</div>
              <div className="text-lg font-bold text-white mt-1">Amit Jain & Namita Thapar</div>
              <div className="text-xs text-gray-400 mt-1">CarDekho Group & Emcure Pharma</div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0e1512] border border-yellow-500/30">
              <div className="text-xs uppercase font-bold text-yellow-400 tracking-wider">Post-Tank Growth</div>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-1">70 Lakh+</div>
              <div className="text-xs text-gray-400 mt-1">Teens Across 500+ Indian Cities</div>
            </div>
          </div>

        </div>
      </section>

      {/* Sharks Quotes Section */}
      <section className="py-20 bg-[#050807] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white">
              Why Amit Jain & Namita Thapar Backed FunGro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sharkTankStats.quotes.map((q, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0e1512] border border-yellow-500/30 space-y-6 relative flex flex-col justify-between">
                <Quote className="w-10 h-10 text-yellow-500/20 absolute top-6 right-6" />
                <p className="text-sm text-gray-200 leading-relaxed italic relative z-10">
                  "{q.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <img
                    src={q.image}
                    alt={q.shark}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/40"
                  />
                  <div>
                    <div className="text-base font-bold text-white">{q.shark}</div>
                    <div className="text-xs text-yellow-400">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-[#070a09]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Meet The Founders
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Payal Jain (CEO) & Anik Jain (CFO) — IIM Calcutta Alumni
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              With decades of leadership experience across FinTech, BFSI, and technology consulting at companies like Capgemini and Worldline, Payal and Anik recognized that India’s education system had a critical missing link: <strong className="text-white">experiential learning and early financial confidence.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#080d0b] border border-gray-800">
                <div className="text-xs font-bold text-white">Payal Jain • Co-Founder & CEO</div>
                <div className="text-xs text-gray-400 mt-1">IIM Calcutta Alumna • Ex-Capgemini, Worldline • Passionate advocate for female youth empowerment.</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#080d0b] border border-gray-800">
                <div className="text-xs font-bold text-white">Anik Jain • Co-Founder & CFO</div>
                <div className="text-xs text-gray-400 mt-1">IIM Calcutta Alumnus • InsurTech & BFSI Veteran • Scaling operations & compliance across 500+ cities.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
