import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema, generateOrganizationSchema, generateWebSiteSchema } from '../components/seo/SchemaMarkup';
import { siteFaqs } from '../data/mockData';
import { Hero } from '../components/home/Hero';
import { BrandMarquee } from '../components/home/BrandMarquee';
import { PersonaSwitcher } from '../components/home/PersonaSwitcher';
import { LiveProjectsTeaser } from '../components/home/LiveProjectsTeaser';
import { EarningsCalculator } from '../components/home/EarningsCalculator';
import { HowItWorks } from '../components/home/HowItWorks';
import { SharkTankBanner } from '../components/home/SharkTankBanner';
import { ArcadeTeaser } from '../components/home/ArcadeTeaser';
import { Testimonials } from '../components/home/Testimonials';
import { FAQSection } from '../components/home/FAQSection';

export const Home: React.FC = () => {
  const faqSchema = generateFAQSchema(siteFaqs);
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <>
      <SEOHead
        title="FunGro — India's Experiential Learning & Teen Earning Platform"
        description="Over 70 lakh young Indians earn and learn on FunGro with India's top 5,000+ brands. Real-world brand projects paid directly via UPI. Backed by Shark Tank India Season 2."
        keywords="FunGro, Funngro, teen freelancing, teenlancer, earn online india, gen z earning app, student internships, freelance projects for teens, shark tank india funngro, shelancers"
        canonical="https://www.funngro.com/"
        schemas={[orgSchema, webSiteSchema, faqSchema]}
      />

      <Hero />
      <BrandMarquee />
      <PersonaSwitcher />
      <LiveProjectsTeaser />
      <EarningsCalculator />
      <HowItWorks />
      <SharkTankBanner />
      <ArcadeTeaser />
      <Testimonials />
      <FAQSection />
    </>
  );
};
