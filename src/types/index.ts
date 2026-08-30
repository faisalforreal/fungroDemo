export interface Project {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  category: string;
  stipend: number;
  stipendFormatted: string;
  payoutType: 'Fixed UPI' | 'Milestone UPI' | 'Hourly UPI';
  timeEstimate: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  tags: string[];
  description: string;
  requirements: string[];
  deliverables: string[];
  verifiedCompany: boolean;
  deadline: string;
  isHot?: boolean;
  isFeatured?: boolean;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  count: number;
  description: string;
  avgStipend: string;
  popularSkills: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  earningTotal: string;
  quote: string;
  avatar: string;
  companyWorkedWith: string;
  category: 'teen' | 'parent' | 'company';
  badge?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  coverImage: string;
  tags: string[];
  keyTakeaways: string[];
  faqs?: { question: string; answer: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'teens' | 'companies' | 'parents' | 'payments';
}

export interface PersonaData {
  id: 'teens' | 'companies' | 'parents' | 'shelancers';
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; link: string };
  secondaryCta: { label: string; link: string };
  stats: { label: string; value: string; sub?: string }[];
  keyBenefits: { title: string; desc: string; icon: string }[];
}
