import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Tv, 
  TrendingUp, 
  CheckCircle2, 
  Star,
  Award,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#00f59b', '#38bdf8', '#fbbf24']
    });
  };

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2e2715_1px,transparent_1px),linear-gradient(to_bottom,#1f2e2715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>70 Lakh+ Young Indians Earning Online</span>
          </div>

          <Link 
            to="/shark-tank"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-yellow-500/30 text-xs font-semibold text-yellow-300 hover:bg-amber-950/60 transition-colors backdrop-blur-md group"
          >
            <Tv className="w-3.5 h-3.5 text-yellow-400" />
            <span>Funded on Shark Tank India S2</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-sans">
            Turn Your Passion Into Real{' '}
            <span className="gradient-text-emerald">UPI Earnings</span> & Experiential Skills
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Work on freelance projects with India’s top 5,000+ brands like <strong className="text-white font-semibold">boAt, Groww, Shoppers Stop & Tata</strong>. Build a bulletproof portfolio, earn certificates, and get paid directly.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <Link
              to="/projects"
              onClick={triggerConfetti}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-base text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 group"
            >
              <Zap className="w-5 h-5 fill-black" />
              <span>Explore Live Projects (Free)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base text-gray-200 bg-[#0e1512]/90 hover:bg-[#15201c] border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-xl hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Calculate Earning Potential</span>
            </Link>

          </div>

          {/* Trust reassurance points */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free for Students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Bank / UPI Transfer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Prior Experience Needed</span>
            </div>
          </div>

        </div>

        {/* Floating Visual Feature Showcase */}
        <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto">
          
          {/* Main Dashboard Hero Card */}
          <div className="p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-[#131e19] to-[#0a100d] border border-emerald-500/25 shadow-2xl shadow-emerald-950/80 backdrop-blur-2xl relative overflow-hidden">
            
            {/* Top Bar inside card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-gray-400">funngro-app.io/teen-terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  1,248 Projects Live Today
                </span>
              </div>
            </div>

            {/* Grid of visual cards inside hero mock */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              
              {/* Card 1: Live Project sample */}
              <div className="p-5 rounded-2xl bg-[#080d0b] border border-gray-800/80 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">Video Editing</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">₹6,500 UPI</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">boAt 5x Reel Campaign</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">Edit aesthetic short-form product reels with trending audio.</p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-800">
                  <span className="text-gray-400">boAt Lifestyle</span>
                  <span className="text-emerald-400 font-semibold">3 Spots Left</span>
                </div>
              </div>

              {/* Card 2: Teen Profile & Earning stats */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-[#080d0b] border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" 
                    alt="Aarav Sharma - Teenlancer on FunGro" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400"
                    width="44"
                    height="44"
                    loading="eager"
                  />
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1">
                      <span>Aarav Sharma</span>
                      <span className="text-[10px] text-emerald-400 font-mono">16y</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-medium">Level 3 Pro Teenlancer</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Total UPI Earnings</span>
                    <span className="text-white font-mono font-bold text-sm">₹64,200</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 w-4/5"></div>
                  </div>
                  <div className="text-[10px] text-gray-400 text-right">8 Projects Completed</div>
                </div>
              </div>

              {/* Card 3: Experience Certification */}
              <div className="p-5 rounded-2xl bg-[#080d0b] border border-gray-800/80 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold">
                    <Award className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">EXPERIENCE</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">UI/UX Design Certification</h3>
                <p className="text-xs text-gray-400 mb-3">Issued for delivering Figma wireframes for Groww app.</p>
                <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>College Resume Verified</span>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Metric Chips */}
          <div className="absolute -bottom-6 left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e1512]/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
              ₹
            </div>
            <div>
              <div className="text-xs text-gray-400">Total Student Payouts</div>
              <div className="text-sm font-black text-white font-mono">₹10,00,00,000+</div>
            </div>
          </div>

          <div className="absolute -top-6 right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e1512]/95 border border-yellow-500/40 shadow-2xl backdrop-blur-xl">
            <div className="w-9 h-9 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">
              🇮🇳
            </div>
            <div>
              <div className="text-xs text-gray-400">Shark Tank India Season 2</div>
              <div className="text-sm font-bold text-white">Backed by Amit & Namita</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
