import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Sparkles, Trophy, Zap, Flame, ArrowRight, Star } from 'lucide-react';

export const ArcadeTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-[#070a09] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#140d1e] via-[#0e1512] to-[#070a09] border border-purple-500/30 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Play & Earn Micro-Rewards</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                FunGro Arcade: Test Apps, Play Quizzes & Earn Daily Coins
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Not ready for large freelance projects yet? Start in the <strong className="text-purple-300">FunGro Arcade</strong>. Complete bite-sized tasks, test upcoming games, hunt for bugs, and level up your XP leaderboard.
              </p>

              {/* 3 Arcade Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#080d0b]/80 border border-purple-500/20">
                  <Flame className="w-5 h-5 text-orange-400 mb-2" />
                  <div className="text-xs font-bold text-white">Daily Streaks</div>
                  <div className="text-[11px] text-gray-400">Earn bonus multipliers every 7 days</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#080d0b]/80 border border-purple-500/20">
                  <Trophy className="w-5 h-5 text-yellow-400 mb-2" />
                  <div className="text-xs font-bold text-white">Clan Battles</div>
                  <div className="text-[11px] text-gray-400">Team up with campus peers for ₹50,000 prize pools</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#080d0b]/80 border border-purple-500/20">
                  <Zap className="w-5 h-5 text-purple-400 mb-2" />
                  <div className="text-xs font-bold text-white">Instant Redeems</div>
                  <div className="text-[11px] text-gray-400">Convert Arcade XP to direct UPI cash</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/arcade"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/25 hover:scale-105"
                >
                  <span>Launch FunGro Arcade</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Leaderboard Teaser */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-[#080d0b] border border-purple-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-gray-800">
                  <span className="font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    Weekly Clan Leaderboard
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">Live Sync</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { rank: '🥇 #1', clan: 'Pixel Pioneers (Delhi)', xp: '48,200 XP', reward: '₹15,000' },
                    { rank: '🥈 #2', clan: 'Bangalore Byte Guild', xp: '42,150 XP', reward: '₹10,000' },
                    { rank: '🥉 #3', clan: 'Mumbai Motion Crew', xp: '39,800 XP', reward: '₹5,000' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0e1512] border border-gray-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-gray-300">{item.rank}</span>
                        <span className="font-bold text-white">{item.clan}</span>
                      </div>
                      <div className="text-right font-mono">
                        <div className="text-purple-300 font-bold">{item.xp}</div>
                        <div className="text-[10px] text-emerald-400">{item.reward}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center text-xs text-purple-300">
                  🎮 Over 15,000 teens playing live today
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
