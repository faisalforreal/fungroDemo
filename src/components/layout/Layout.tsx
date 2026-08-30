import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Zap, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const liveActivityEvents = [
  { name: 'Ananya S.', city: 'Bengaluru', amount: '₹4,500', company: 'boAt', task: 'Instagram Reels Campaign' },
  { name: 'Kabir V.', city: 'Delhi NCR', amount: '₹12,000', company: 'Groww', task: 'Figma UI Dashboard Redesign' },
  { name: 'Diya M.', city: 'Pune', amount: '₹3,500', company: 'Swiggy', task: 'App Bug Bounty Test' },
  { name: 'Rohan P.', city: 'Mumbai', amount: '₹8,000', company: 'CaratLane', task: 'Midjourney Prompt Engineering' },
  { name: 'Sneha T.', city: 'Hyderabad', amount: '₹6,000', company: 'Tata 1mg', task: 'SEO Finance Copywriting' },
  { name: 'Yash G.', city: 'Jaipur', amount: '₹15,000', company: 'Souled Store', task: 'Campus Ambassador Lead' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds, then cycle every 10 seconds
    const initialTimer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentEventIndex((prev) => (prev + 1) % liveActivityEvents.length);
        setShowNotification(true);
      }, 600);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const currentEvent = liveActivityEvents[currentEventIndex];

  return (
    <div className="min-h-screen flex flex-col bg-[#070a09] text-gray-100 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      {/* Main Content with top padding to clear fixed navbar */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Floating Live Payout Activity Pill */}
      {showNotification && (
        <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e1512]/95 border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-md">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <Zap className="w-5 h-5 fill-emerald-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <span>{currentEvent.name}</span>
              <span className="text-[10px] text-gray-400 font-normal">from {currentEvent.city}</span>
              <span className="text-emerald-400 font-bold font-mono ml-auto">{currentEvent.amount} UPI</span>
            </div>
            <div className="text-[11px] text-gray-400 truncate">
              Completed <span className="text-gray-200">{currentEvent.task}</span> for <span className="text-emerald-300 font-medium">{currentEvent.company}</span>
            </div>
          </div>

          <button 
            onClick={() => setShowNotification(false)}
            className="p-1 text-gray-500 hover:text-white rounded-lg"
            aria-label="Dismiss payout ticker"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};
