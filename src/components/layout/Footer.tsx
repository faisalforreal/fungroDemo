import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Tv, 
  Sparkles, 
  ArrowUpRight, 
  Lock, 
  CreditCard, 
  MapPin, 
  Mail, 
  Phone, 
  Heart,
  Smartphone
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050807] border-t border-emerald-950/50 text-gray-400 text-sm relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Feature Strip: Shark Tank & App Stores */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0e1512]/80 border border-emerald-900/30 backdrop-blur-xl mb-16">
          
          {/* Shark Tank Badge */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-yellow-400/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-yellow-400 font-bold flex items-center gap-1.5">
                <span>Shark Tank India Season 2</span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Backed by Amit Jain & Namita Thapar
              </div>
              <div className="text-xs text-gray-400">₹50 Lakhs equity investment for teen empowerment</div>
            </div>
          </div>

          {/* RBI & Safety Badge */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-400/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                <span>100% Safe & RBI Compliant</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Direct UPI Payouts to Minors/Guardians
              </div>
              <div className="text-xs text-gray-400">Escrow-backed project completion guarantee</div>
            </div>
          </div>

          {/* App Ratings */}
          <div className="flex items-center justify-start lg:justify-end gap-3">
            <a 
              href="https://play.google.com/store/apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/60 border border-gray-800 hover:border-emerald-500/40 transition-colors group"
            >
              <Smartphone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 leading-tight">DOWNLOAD ON</div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Google Play</span>
                  <span className="text-[10px] text-yellow-400 font-mono">4.8★</span>
                </div>
              </div>
            </a>

            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/60 border border-gray-800 hover:border-emerald-500/40 transition-colors group"
            >
              <Smartphone className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 leading-tight">DOWNLOAD ON</div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>App Store</span>
                  <span className="text-[10px] text-yellow-400 font-mono">4.9★</span>
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-black">
                F
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Fun<span className="text-emerald-400">Gro</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed pr-6">
              FunGro Innovations Pvt Ltd is India's leading experiential learning and earning platform connecting 70L+ young minds (aged 14-25) with 5,000+ top Indian brands for real projects and instant UPI rewards.
            </p>
            <div className="text-xs text-gray-400 space-y-1.5 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>2105 Wing F, Fantacy Land, Opp Majas Depot, Jogeshwari (E), JVLR, Mumbai, MH 400060</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:hello@funngro.com" className="hover:text-emerald-400 transition-colors">hello@funngro.com</a>
              </div>
            </div>
          </div>

          {/* For Teenlancers */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">For Teenlancers</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/teenlancers" className="hover:text-emerald-400 transition-colors">Earn & Learn Hub</Link></li>
              <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Live Projects (1200+)</Link></li>
              <li><Link to="/calculator" className="hover:text-emerald-400 transition-colors">Earnings Calculator</Link></li>
              <li><Link to="/arcade" className="hover:text-emerald-400 transition-colors">FunGro Arcade</Link></li>
              <li><Link to="/shelancers" className="hover:text-pink-400 transition-colors">Shelancers (Women)</Link></li>
              <li><a href="#certifications" className="hover:text-emerald-400 transition-colors">Skill Certificates</a></li>
            </ul>
          </div>

          {/* For Companies */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">For Companies</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/companies" className="hover:text-emerald-400 transition-colors">Hire Gen-Z Talent</Link></li>
              <li><Link to="/companies#roi" className="hover:text-emerald-400 transition-colors">Agency Cost ROI Calculator</Link></li>
              <li><Link to="/companies#campaigns" className="hover:text-emerald-400 transition-colors">Brand Campaigns</Link></li>
              <li><Link to="/companies#campus" className="hover:text-emerald-400 transition-colors">Campus Ambassador Network</Link></li>
              <li><Link to="/companies#case-studies" className="hover:text-emerald-400 transition-colors">Enterprise Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* For Parents & Safety */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Parents & Trust</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/parents" className="hover:text-emerald-400 transition-colors">Parent Oversight Portal</Link></li>
              <li><Link to="/parents#safety" className="hover:text-emerald-400 transition-colors">Safety & Screening Policy</Link></li>
              <li><Link to="/parents#financial-literacy" className="hover:text-emerald-400 transition-colors">Financial Literacy Guide</Link></li>
              <li><Link to="/parents#upi" className="hover:text-emerald-400 transition-colors">UPI Minor Account Rules</Link></li>
              <li><Link to="/shark-tank" className="hover:text-emerald-400 transition-colors">Shark Tank Backing</Link></li>
            </ul>
          </div>

          {/* SEO & Knowledge Hub */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">SEO & Guides</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/blogs" className="hover:text-emerald-400 transition-colors">All Career Guides</Link></li>
              <li><Link to="/blogs/how-to-earn-money-as-a-teenager-in-india-2026" className="hover:text-emerald-400 transition-colors">Earn Money Online in India</Link></li>
              <li><Link to="/blogs/top-10-skills-companies-hire-teenagers-for" className="hover:text-emerald-400 transition-colors">Top 10 Teen Freelance Skills</Link></li>
              <li><Link to="/blogs/why-shark-tank-india-backed-fungro" className="hover:text-emerald-400 transition-colors">Shark Tank Pitch Story</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Founders Payal & Anik Jain</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip: Legal, Copyright & Badges */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Funngro Innovations Pvt Ltd. All rights reserved.</span>
            <Link to="/about" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link to="/parents" className="hover:text-gray-400 transition-colors">Minor Protection Standard</Link>
            <a href="/sitemap.xml" className="hover:text-gray-400 transition-colors">HTML Sitemap</a>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://linkedin.com/company/funngro" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="https://instagram.com/funngro" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
            <a href="https://youtube.com/@funngro" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">YouTube</a>
            <a href="https://twitter.com/funngro" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">X (Twitter)</a>
          </div>

        </div>

      </div>
    </footer>
  );
};
