import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema, generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { siteFaqs } from '../data/mockData';
import { 
  ShieldCheck, 
  Lock, 
  TrendingUp, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Smartphone, 
  CreditCard,
  Eye,
  Award
} from 'lucide-react';

export const Parents: React.FC = () => {
  const parentFaqs = siteFaqs.filter(f => f.category === 'parents' || f.category === 'general');
  const faqSchema = generateFAQSchema(parentFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'For Parents', url: '/parents' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="For Parents — Safe Experiential Learning & Teen Financial Literacy"
        description="Discover how FunGro provides a safe, supervised, and educational freelancing environment for teenagers in India. RBI-compliant UPI payouts, verified brands, and parental oversight."
        keywords="is fungro safe for teens, teen financial literacy india, parent guide teen freelancing, minor online earning rules india, safe student internships"
        canonical="https://www.funngro.com/parents"
        schemas={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trusted by 25,000+ Conscious Indian Parents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Help Your Teen Build <span className="gradient-text-gold">Real-World Skills</span> in a 100% Safe Environment
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Give your 14-25 year old a head start before college. FunGro transforms unproductive screen time into experiential learning, financial discipline, and verified career credentials.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#safety"
              className="px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 hover:from-yellow-300 hover:to-amber-200 transition-all shadow-xl shadow-yellow-500/25 hover:scale-105"
            >
              Explore Safety Framework
            </a>
            <Link
              to="/shark-tank"
              className="px-6 py-4 rounded-2xl font-semibold text-sm text-gray-200 bg-[#0e1512] border border-gray-800 hover:border-amber-500/40"
            >
              Why Sharks Backed Us
            </Link>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Safety */}
      <section id="safety" className="py-20 bg-[#050807] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Safety & Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our 4-Pillar Minor Protection Framework
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              We design every interaction to ensure your child works only with vetted corporate companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
                title: '100% Verified Brands',
                desc: 'Only registered companies (boAt, Groww, Tata) with valid GST and corporate verification can post project briefs.'
              },
              {
                icon: <Lock className="w-6 h-6 text-emerald-400" />,
                title: 'Zero Hazardous Tasks',
                desc: 'Strict AI and manual moderation prevents any harmful content, unsolicited messaging, or inappropriate work.'
              },
              {
                icon: <Eye className="w-6 h-6 text-blue-400" />,
                title: 'Parental Supervision Link',
                desc: 'Parents can link their phone number to receive SMS alerts on project selections, milestones, and payouts.'
              },
              {
                icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
                title: 'RBI-Compliant Payouts',
                desc: 'Stipends are routed safely via UPI into verified minor bank accounts or direct guardian accounts.'
              }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#131c18] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What Teens Learn */}
      <section className="py-20 bg-[#070a09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Beyond Academics
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Top Educators & Parents Recommend FunGro
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Academic degrees alone no longer guarantee admissions or job readiness. When teenagers manage client briefs, meet deadlines, and budget their own earnings, they develop resilience that textbooks cannot teach.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: 'Time Management', desc: 'Balancing school exams with 4-5 hours of weekend freelance projects.' },
                  { title: 'Value of Money', desc: 'Understanding how hard-earned income differs from regular pocket money.' },
                  { title: 'College Admissions Edge', desc: 'Verified experience certificates from brands give a decisive edge in Ivy & top college SOPs.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0e1512] border border-gray-800/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Parent Dashboard Preview */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-[#0e1512] border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white">Parent Oversight Portal</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Linked to Child Account</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#080d0b] border border-gray-800 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Child:</span>
                    <span className="text-white font-bold">Aditya M. (15y)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Current Milestone:</span>
                    <span className="text-emerald-400 font-medium">boAt Reels Project #2</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Total Earning Saved:</span>
                    <span className="text-white font-mono font-bold">₹14,500</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-3/4"></div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-300">
                  💬 Direct parental SMS consent is requested before any payout above ₹10,000.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Parent FAQs */}
      <section className="py-16 bg-[#050807] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Frequently Asked by Parents
          </h2>
          <div className="space-y-3">
            {parentFaqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#0e1512] border border-gray-800 space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
