import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateBreadcrumbSchema } from '../components/seo/SchemaMarkup';
import { 
  Building2, 
  Tv, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Heart, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About FunGro', url: '/about' }
  ]);

  return (
    <div className="pb-24">
      <SEOHead
        title="About FunGro — Building India's Largest Teen Freelancing & Experiential Platform"
        description="Learn about FunGro Innovations Pvt Ltd, founded by IIM Calcutta alumni Payal & Anik Jain, backed by Shark Tank India Season 2, empowering 70L+ young creators."
        keywords="about fungro, funngro founders, payal jain fungro, anik jain fungro, funngro innovations mumbai"
        canonical="https://www.funngro.com/about"
        schemas={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Mission & Story</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto">
            Empowering 70 Lakh+ Young Indians to <span className="gradient-text-emerald">Earn, Learn & Lead</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            We believe practical experiential learning should start early. FunGro connects ambitious 14-25 year olds with India's top 5,000+ companies.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#050807] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Our Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Experiential First', desc: 'Real work teaches faster than lectures. We focus on real client deliverables.', icon: <Award className="w-6 h-6 text-emerald-400" /> },
              { title: 'Minor Safety', desc: 'Strict GST corporate verification and automated safeguarding protocols.', icon: <ShieldCheck className="w-6 h-6 text-blue-400" /> },
              { title: 'Fair Compensation', desc: 'Direct, transparent UPI payouts with zero hidden cuts for students.', icon: <TrendingUp className="w-6 h-6 text-yellow-400" /> },
              { title: 'Gender Inclusion', desc: 'Dedicated Shelancers initiative fostering female creative leaders.', icon: <Heart className="w-6 h-6 text-pink-400" /> },
            ].map((val, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#131c18] flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Info */}
      <section className="py-20 bg-[#070a09]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0e1512] border border-gray-800 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Corporate Identification & Registered Office</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-gray-300">
              <div className="space-y-2">
                <div className="text-gray-500 uppercase font-semibold">Legal Entity</div>
                <div className="text-white font-bold text-sm">Funngro Innovations Private Limited</div>
                <div className="text-gray-400">Incorporated under Companies Act, India</div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-500 uppercase font-semibold">Headquarters</div>
                <div className="text-white font-medium">
                  2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari (E), JVLR, Mumbai, MH 400060
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-500 uppercase font-semibold">Investors</div>
                <div className="text-white font-medium">
                  Amit Jain (CarDekho), Namita Thapar (Emcure), & prominent angel networks.
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-500 uppercase font-semibold">Contact Email</div>
                <div className="text-emerald-400 font-mono font-medium">
                  hello@funngro.com / support@funngro.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
