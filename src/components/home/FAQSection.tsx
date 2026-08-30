import React, { useState } from 'react';
import { siteFaqs } from '../../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#070a09] relative border-t border-emerald-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Everything you need to know about earning, safety, company hiring, and UPI payouts.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {siteFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0e1512] border border-gray-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#131c18] text-emerald-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
