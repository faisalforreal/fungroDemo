import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  TrendingUp, 
  Briefcase, 
  ShieldCheck, 
  Gamepad2, 
  Flame, 
  BookOpen, 
  Tv, 
  Calculator, 
  ArrowRight,
  Zap,
  Users
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070a09]/85 backdrop-blur-xl border-b border-emerald-950/40 shadow-2xl shadow-emerald-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-300 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#070a09] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xl text-emerald-400 font-sans tracking-tight">F</span>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070a09]"></span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  Fun<span className="text-emerald-400">Gro</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Shark Tank 🇮🇳
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                Earn & Learn with Top Brands
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* For You Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('explore')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'explore' || ['/teenlancers', '/companies', '/parents', '/shelancers'].includes(location.pathname)
                    ? 'text-emerald-400 bg-emerald-950/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>For You</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-[#0e1512]/95 backdrop-blur-2xl border border-emerald-900/40 p-2 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/teenlancers" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-950/40 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-300">For Teenlancers</div>
                      <div className="text-xs text-gray-400">Earn online with UPI, 12+ categories</div>
                    </div>
                  </Link>

                  <Link 
                    to="/companies" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-950/40 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300">For Companies</div>
                      <div className="text-xs text-gray-400">Hire 70L+ Gen-Z creators in 48h</div>
                    </div>
                  </Link>

                  <Link 
                    to="/parents" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-950/40 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-300">For Parents</div>
                      <div className="text-xs text-gray-400">Safety, supervision & financial literacy</div>
                    </div>
                  </Link>

                  <Link 
                    to="/shelancers" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-pink-950/30 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-pink-300 flex items-center gap-1.5">
                        <span>Shelancers</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-300 font-bold">WOMEN</span>
                      </div>
                      <div className="text-xs text-gray-400">Dedicated female creator hub</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              to="/projects"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-emerald-400 bg-emerald-950/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Live Projects</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                1200+
              </span>
            </Link>

            <Link
              to="/arcade"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/arcade')
                  ? 'text-purple-400 bg-purple-950/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              <span>Arcade</span>
            </Link>

            <Link
              to="/shark-tank"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/shark-tank')
                  ? 'text-cyan-400 bg-cyan-950/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Tv className="w-4 h-4 text-cyan-400" />
              <span>Shark Tank</span>
            </Link>

            <Link
              to="/calculator"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/calculator')
                  ? 'text-emerald-400 bg-emerald-950/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Earnings Calc</span>
            </Link>

            <Link
              to="/blogs"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/blogs')
                  ? 'text-emerald-400 bg-emerald-950/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>SEO Guides</span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/companies"
              className="text-xs font-semibold px-3.5 py-2 rounded-xl text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 bg-[#0e1512] transition-all hover:scale-105"
            >
              Hire Teens
            </Link>

            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Start Earning (Free)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/projects"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-black flex items-center gap-1"
            >
              <Zap className="w-3 h-3 fill-black" />
              <span>Earn</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0e1512] border border-gray-800 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#070a09]/98 backdrop-blur-2xl border-b border-emerald-950/60 p-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-4">
            
            <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/50 to-teal-950/30 border border-emerald-500/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-emerald-400">70 Lakh+ Active Teenlancers</div>
                <div className="text-[11px] text-gray-400">Shark Tank Backed Experiential Learning</div>
              </div>
              <span className="text-xs font-mono text-emerald-300 font-bold bg-emerald-500/20 px-2 py-1 rounded">
                ₹10Cr+ Paid
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/teenlancers" 
                className="p-3 rounded-xl bg-[#0e1512] border border-gray-800 flex flex-col gap-1 text-left hover:border-emerald-500/50"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">Teenlancers</span>
                <span className="text-[10px] text-gray-400">Earn with top brands</span>
              </Link>

              <Link 
                to="/companies" 
                className="p-3 rounded-xl bg-[#0e1512] border border-gray-800 flex flex-col gap-1 text-left hover:border-blue-500/50"
              >
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white">Companies</span>
                <span className="text-[10px] text-gray-400">Hire Gen-Z talent</span>
              </Link>

              <Link 
                to="/parents" 
                className="p-3 rounded-xl bg-[#0e1512] border border-gray-800 flex flex-col gap-1 text-left hover:border-amber-500/50"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-white">Parents</span>
                <span className="text-[10px] text-gray-400">Safety & Financial literacy</span>
              </Link>

              <Link 
                to="/shelancers" 
                className="p-3 rounded-xl bg-[#0e1512] border border-gray-800 flex flex-col gap-1 text-left hover:border-pink-500/50"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-bold text-white">Shelancers</span>
                <span className="text-[10px] text-gray-400">Women in freelancing</span>
              </Link>
            </div>

            <div className="border-t border-gray-800/80 pt-3 space-y-1">
              <Link 
                to="/projects" 
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Browse Live Projects</span>
                </div>
                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded font-bold">1200+</span>
              </Link>

              <Link 
                to="/arcade" 
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span>FunGro Arcade (Play & Earn)</span>
              </Link>

              <Link 
                to="/shark-tank" 
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <Tv className="w-4 h-4 text-cyan-400" />
                <span>Shark Tank India Story</span>
              </Link>

              <Link 
                to="/calculator" 
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Earnings Calculator</span>
              </Link>

              <Link 
                to="/blogs" 
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Career & SEO Guides</span>
              </Link>
              
              <Link 
                to="/about" 
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-gray-200 font-medium text-sm"
              >
                <Users className="w-4 h-4 text-gray-400" />
                <span>About & Founders</span>
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/projects"
                className="w-full py-3 rounded-xl font-bold text-center text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/25"
              >
                Start Earning (100% Free)
              </Link>
              <Link
                to="/companies"
                className="w-full py-2.5 rounded-xl font-semibold text-center text-xs text-gray-300 bg-[#0e1512] border border-gray-800"
              >
                Post a Project for Teen Creators
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
