import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { 
  Gamepad2, 
  Trophy, 
  Flame, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Coins, 
  RefreshCw,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Arcade: React.FC = () => {
  const [xpBalance, setXpBalance] = useState(1250);
  const [claimedStreak, setClaimedStreak] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FunGro Arcade', url: '/arcade' }
  ]);

  const claimDailyBonus = () => {
    if (!claimedStreak) {
      setXpBalance((prev) => prev + 250);
      setClaimedStreak(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#38bdf8']
      });
    }
  };

  const handleQuizOption = (index: number) => {
    setSelectedQuizOption(index);
    if (!quizAnswered) {
      setQuizAnswered(true);
      if (index === 1) { // correct option: "CapCut & Figma"
        setXpBalance((prev) => prev + 150);
        confetti({
          particleCount: 60,
          spread: 50,
          colors: ['#10b981', '#00f59b']
        });
      }
    }
  };

  return (
    <div className="pb-24">
      <SEOHead
        title="FunGro Arcade — Play, Test Apps, Solve Quizzes & Earn Micro-Rewards"
        description="Earn XP coins and UPI rewards in the FunGro Arcade. Play daily micro-tasks, test upcoming games, hunt UI bugs, and compete in Clan battles."
        keywords="fungro arcade, play and earn india, test apps earn money, student quiz rewards, teen micro earning app"
        canonical="https://www.funngro.com/arcade"
        schemas={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-6">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>FunGro Arcade • Gamified Earning Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Play, Test & Earn <span className="gradient-text-shark">XP Coins for Cash</span>
          </h1>

          <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto">
            Complete daily micro-challenges, test new app prototypes, and answer skill quizzes to level up your profile.
          </p>

          {/* User Live XP Wallet Banner */}
          <div className="mt-8 max-w-md mx-auto p-4 rounded-2xl bg-[#0e1512] border border-purple-500/40 shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-black">
                <Coins className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase font-semibold">Your Arcade Wallet</div>
                <div className="text-xl font-black text-white font-mono">{xpBalance.toLocaleString()} XP</div>
              </div>
            </div>

            <button
              onClick={claimDailyBonus}
              disabled={claimedStreak}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                claimedStreak
                  ? 'bg-purple-950/40 text-purple-300 border border-purple-500/20 cursor-default'
                  : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 shadow-md shadow-purple-500/25 cursor-pointer'
              }`}
            >
              {claimedStreak ? '✓ Claimed 250 XP' : '🎁 Claim +250 XP Streak'}
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Micro Challenges Grid */}
      <section className="py-12 bg-[#050807] border-y border-purple-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Daily Micro-Challenges Live Now
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Take 2-3 minutes to complete tasks and earn instant XP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Interactive Challenge 1: Skill Quiz */}
            <div className="p-6 rounded-3xl bg-[#0e1512] border border-purple-500/30 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full">DAILY QUIZ</span>
                <span className="font-mono text-emerald-400 font-bold">+150 XP</span>
              </div>
              
              <h3 className="text-sm font-bold text-white leading-snug">
                Which tool is most commonly used for vertical short-form video editing for Reels?
              </h3>

              <div className="space-y-2">
                {['Microsoft Excel', 'CapCut & Premiere', 'Audacity', 'WordPress'].map((opt, idx) => {
                  const isSelected = selectedQuizOption === idx;
                  const isCorrect = idx === 1;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizOption(idx)}
                      disabled={quizAnswered}
                      className={`w-full p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                        quizAnswered
                          ? isCorrect
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                            : isSelected
                            ? 'bg-red-500/20 border border-red-400 text-red-300'
                            : 'bg-[#080d0b] border border-gray-800 text-gray-400'
                          : 'bg-[#080d0b] border border-gray-800 text-gray-300 hover:border-purple-400'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div className="text-[11px] text-emerald-400 font-medium pt-1">
                  🎉 Correct! CapCut & Premiere are the industry standard for Gen-Z Reels.
                </div>
              )}
            </div>

            {/* Challenge 2: App Bug Hunt */}
            <div className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full">BUG HUNT</span>
                <span className="font-mono text-emerald-400 font-bold">+500 XP</span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug">
                Test the Dark Mode Toggle on Swiggy Instamart Beta
              </h3>
              <p className="text-xs text-gray-400">
                Log in, toggle dark mode on product listings, and report any overlapping text elements.
              </p>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-mono">15 Spots Remaining</span>
                <Link to="/projects" className="text-cyan-400 font-bold hover:underline flex items-center gap-1">
                  <span>Start Test</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Challenge 3: Campus Trend Survey */}
            <div className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-0.5 rounded-full">YOUTH SURVEY</span>
                <span className="font-mono text-emerald-400 font-bold">+300 XP</span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug">
                Share your Favorite Headphone Brands in 2026
              </h3>
              <p className="text-xs text-gray-400">
                A 5-question multiple choice survey conducted by consumer electronics researchers.
              </p>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-mono">Takes 2 Mins</span>
                <Link to="/projects" className="text-yellow-400 font-bold hover:underline flex items-center gap-1">
                  <span>Take Survey</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Clan Leaderboard */}
      <section className="py-20 bg-[#070a09]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0e1512] border border-purple-500/30 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Pan-India Clan Championship</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">Prize Pool: ₹50,000</span>
            </div>

            <div className="space-y-3">
              {[
                { rank: '1st', name: 'Pixel Pioneers (Delhi NCR)', members: '24 Teens', xp: '48,200 XP', reward: '₹20,000' },
                { rank: '2nd', name: 'Bangalore Byte Guild', members: '19 Teens', xp: '42,150 XP', reward: '₹15,000' },
                { rank: '3rd', name: 'Mumbai Motion Crew', members: '22 Teens', xp: '39,800 XP', reward: '₹10,000' },
                { rank: '4th', name: 'Hyderabad Hyper Clan', members: '16 Teens', xp: '34,500 XP', reward: '₹5,000' },
              ].map((clan, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#080d0b] border border-gray-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-yellow-400 w-8">{clan.rank}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{clan.name}</div>
                      <div className="text-[10px] text-gray-500">{clan.members}</div>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-purple-300 font-bold">{clan.xp}</div>
                    <div className="text-[11px] text-emerald-400">{clan.reward}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
