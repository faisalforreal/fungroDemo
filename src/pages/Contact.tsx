import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { Mail, MapPin, Phone, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Support / Inquiry', message: '' });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      <SEOHead
        title="Contact FunGro Support — Support, Campus Inquiries & Partnerships"
        description="Get in touch with the FunGro team for student support, company campaign partnerships, campus ambassador queries, or media inquiries."
        keywords="contact fungro, fungro support email, funngro customer care mumbai"
        canonical="https://www.funngro.com/contact"
        schemas={[breadcrumbSchema]}
      />

      <section className="relative pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-white">Get in Touch with FunGro</h1>
            <p className="mt-2 text-sm text-gray-400">
              We respond to all student and brand inquiries within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Corporate HQ</div>
                    <div>2105 Wing F, Fantacy Land, Opp Majas Depot, Jogeshwari (E), Mumbai, MH 400060</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Support & Gigs</div>
                    <a href="mailto:hello@funngro.com" className="text-emerald-400 hover:underline font-mono">hello@funngro.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                  <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">Brand Partnerships</div>
                    <a href="mailto:brands@funngro.com" className="text-yellow-400 hover:underline font-mono">brands@funngro.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7">
              <div className="p-8 rounded-3xl bg-[#0e1512] border border-emerald-500/30">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Priya Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-xs text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option>Student Project Support</option>
                        <option>Company Hiring Inquiry</option>
                        <option>Parent Question</option>
                        <option>Campus Ambassador Program</option>
                        <option>Press / Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can our team help you today?..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a09] border border-gray-800 text-sm text-white focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-xs text-gray-300">
                      Thank you for contacting FunGro. Our team will review your message and reply to <strong className="text-white">{formData.email}</strong> shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
