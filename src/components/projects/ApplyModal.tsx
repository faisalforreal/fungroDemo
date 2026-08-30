import React, { useState } from 'react';
import { Project } from '../../types';
import { X, CheckCircle2, Zap, Send, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ApplyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ project, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '17',
    city: '',
    upiOrPhone: '',
    portfolioLink: '',
    pitchNote: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#10b981', '#00f59b', '#38bdf8', '#fbbf24']
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e1512] border border-emerald-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Direct Brand Application
              </span>
              <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                Apply for {project.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span className="text-white font-medium">{project.company}</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">{project.stipendFormatted} UPI</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Age (14-25)</label>
                  <input
                    required
                    type="number"
                    min="14"
                    max="25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">City / State</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Mumbai, MH"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">UPI ID or WhatsApp</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. name@okhdfcbank"
                    value={formData.upiOrPhone}
                    onChange={(e) => setFormData({ ...formData, upiOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Portfolio / Instagram / Sample Work Link
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/... or https://behance.net/..."
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Why are you a great fit for this task?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly explain your tool skills (Canva, CapCut, Figma, etc.) and availability..."
                  value={formData.pitchNote}
                  onChange={(e) => setFormData({ ...formData, pitchNote: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application (Instant Review)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero fees • Verified by FunGro Escrow Protection</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Confirmation */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-white">Application Submitted!</h3>
            
            <p className="text-xs text-gray-300 max-w-xs mx-auto">
              Your profile has been forwarded to <strong className="text-white">{project.company}</strong>. You will receive an update via WhatsApp / SMS within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-[#070a09] border border-gray-800 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Application ID:</span>
                <span className="font-mono text-emerald-400 font-bold">#FNG-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Project:</span>
                <span className="text-white font-medium">{project.title.slice(0, 28)}...</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payout:</span>
                <span className="font-mono text-white font-bold">{project.stipendFormatted}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Back to Projects Board
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
