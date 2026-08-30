import { Project, Category, Testimonial, BlogPost, FAQItem, PersonaData } from '../types';

export const brandPartners = [
  { name: 'Shoppers Stop', category: 'Retail & Fashion', logoText: 'SHOPPERS STOP' },
  { name: 'Groww', category: 'FinTech', logoText: 'Groww' },
  { name: 'Tata 1mg', category: 'Healthcare', logoText: 'TATA 1mg' },
  { name: 'CaratLane', category: 'E-commerce', logoText: 'CARATLANE' },
  { name: 'boAt Lifestyle', category: 'Audio & Tech', logoText: 'boAt' },
  { name: 'WOW Skin Science', category: 'D2C Beauty', logoText: 'WOW' },
  { name: 'Unacademy', category: 'EdTech', logoText: 'unacademy' },
  { name: 'Puma India', category: 'Athleisure', logoText: 'PUMA' },
  { name: 'Swiggy Instamart', category: 'Quick Commerce', logoText: 'SWIGGY' },
  { name: 'Wakefit', category: 'Home & Living', logoText: 'wakefit' },
  { name: 'Mamaearth', category: 'Personal Care', logoText: 'mamaearth' },
  { name: 'The Souled Store', category: 'Pop Culture Apparel', logoText: 'TSS' }
];

export const projectCategories: Category[] = [
  {
    id: 'social-media',
    name: 'Social Media & Influencer',
    iconName: 'Share2',
    count: 142,
    description: 'Create viral Instagram reels, TikToks, Twitter threads & campus hype for consumer brands.',
    avgStipend: '₹2,500 - ₹8,000 / project',
    popularSkills: ['Reels Creation', 'Memes', 'Storytelling', 'Hashtag Strategy'],
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent'
  },
  {
    id: 'content-writing',
    name: 'Content & Copywriting',
    iconName: 'PenTool',
    count: 98,
    description: 'Write blog articles, product descriptions, video scripts, and Gen-Z newsletters.',
    avgStipend: '₹1,500 - ₹6,000 / piece',
    popularSkills: ['SEO Writing', 'Scriptwriting', 'Ad Copy', 'Ghostwriting'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'graphic-design',
    name: 'Graphic & UI Design',
    iconName: 'Palette',
    count: 116,
    description: 'Design YouTube thumbnails, Canva posters, brand logos, and UI wireframes.',
    avgStipend: '₹2,000 - ₹12,000 / project',
    popularSkills: ['Figma', 'Canva Pro', 'Photoshop', 'Illustrator'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent'
  },
  {
    id: 'video-editing',
    name: 'Short-Form Video Editing',
    iconName: 'Video',
    count: 85,
    description: 'Edit fast-paced Reels, YouTube Shorts, and brand campaign promos with CapCut & Premiere.',
    avgStipend: '₹3,000 - ₹15,000 / project',
    popularSkills: ['CapCut', 'Premiere Pro', 'Subtitles/Captions', 'Sound Design'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'coding-web',
    name: 'Web, App & Bug Testing',
    iconName: 'Code',
    count: 64,
    description: 'Build landing pages, test mobile apps on iOS/Android, and find UI/UX bugs.',
    avgStipend: '₹4,000 - ₹20,000 / sprint',
    popularSkills: ['React', 'HTML/CSS', 'App QA Testing', 'Python Basics'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'ai-prompting',
    name: 'AI & Prompt Engineering',
    iconName: 'Sparkles',
    count: 52,
    description: 'Generate AI creative assets, test LLM prompt outputs, and automate data tasks.',
    avgStipend: '₹3,500 - ₹10,000 / task',
    popularSkills: ['ChatGPT', 'Midjourney', 'Prompt Tuning', 'Data Curation'],
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent'
  },
  {
    id: 'market-research',
    name: 'Market Research & Surveys',
    iconName: 'BarChart2',
    count: 73,
    description: 'Gather student sentiment, campus feedback, product taste-tests, and consumer surveys.',
    avgStipend: '₹800 - ₹3,500 / batch',
    popularSkills: ['Google Forms', 'Survey Analysis', 'User Interviews', 'Trend Spotting'],
    gradient: 'from-yellow-500/20 via-emerald-500/10 to-transparent'
  },
  {
    id: 'campus-ambassador',
    name: 'Campus Ambassador & Events',
    iconName: 'Users',
    count: 110,
    description: 'Lead college brand activations, offline sampling drives, and youth hackathons.',
    avgStipend: '₹5,000 - ₹18,000 / month',
    popularSkills: ['Public Speaking', 'Event Organization', 'Leadership', 'Networking'],
    gradient: 'from-lime-500/20 via-emerald-500/10 to-transparent'
  }
];

export const liveProjects: Project[] = [
  {
    id: 'proj-01',
    title: 'Create 5 Gen-Z Instagram Reels for Summer Product Launch',
    company: 'boAt Lifestyle',
    companyLogo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80',
    category: 'Video Editing',
    stipend: 6500,
    stipendFormatted: '₹6,500',
    payoutType: 'Fixed UPI',
    timeEstimate: '3 - 5 days',
    difficulty: 'Intermediate',
    spotsLeft: 3,
    tags: ['Reels', 'CapCut', 'Audio Sync', 'Gen Z Audio'],
    description: 'boAt is looking for 3 talented teen creators to shoot and edit 5 aesthetic, fast-paced Reels showcasing the new Airdopes ANC earphones. Products will be shipped to selected candidates!',
    requirements: [
      'Must have basic short-form video editing skills in CapCut or Premiere',
      'Understanding of trending audio and pacing on Instagram Reels',
      'Age between 14-22 with active social presence'
    ],
    deliverables: [
      '5 vertical (9:16) Reels with clear audio, trend overlays, and subtitles',
      'Raw project files and final 1080p MP4 exports'
    ],
    verifiedCompany: true,
    deadline: 'In 2 days',
    isHot: true,
    isFeatured: true,
    location: 'Remote / All India'
  },
  {
    id: 'proj-02',
    title: 'Figma UI/UX Redesign for Student Investing Dashboard',
    company: 'Groww',
    companyLogo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&auto=format&fit=crop&q=80',
    category: 'Graphic & UI Design',
    stipend: 12000,
    stipendFormatted: '₹12,000',
    payoutType: 'Milestone UPI',
    timeEstimate: '1 week',
    difficulty: 'Advanced',
    spotsLeft: 2,
    tags: ['Figma', 'UI/UX', 'Dark Mode', 'Mobile Design'],
    description: 'Groww is revamping its educational mutual funds interface for first-time teen investors. Design 4 interactive mobile screen mockups focused on simplicity, gamified goal tracking, and streaks.',
    requirements: [
      'Proficiency in Figma (Components, Auto Layout, Variants)',
      'Portfolio with at least 2 mobile UI design samples',
      'Clear understanding of micro-interactions'
    ],
    deliverables: [
      'Figma file with 4 mobile screens in Light & Dark mode',
      'Interactive prototype link and UI design tokens'
    ],
    verifiedCompany: true,
    deadline: 'In 4 days',
    isHot: true,
    isFeatured: true,
    location: 'Remote'
  },
  {
    id: 'proj-03',
    title: 'Write 3 Engaging SEO Guides on "Teen Budgeting & First UPI App"',
    company: 'Tata 1mg / FinHealth',
    companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&auto=format&fit=crop&q=80',
    category: 'Content Writing',
    stipend: 4500,
    stipendFormatted: '₹4,500',
    payoutType: 'Fixed UPI',
    timeEstimate: '4 days',
    difficulty: 'Beginner',
    spotsLeft: 5,
    tags: ['SEO Writing', 'Finance for Youth', 'Blog', 'Research'],
    description: 'Write three 1,000-word comprehensive, jargon-free blog posts explaining financial literacy, pocket money management, and UPI security tips tailored for teenagers.',
    requirements: [
      'Strong written English skills with conversational, relatable tone',
      'Basic knowledge of on-page SEO headings (H2/H3) and keyword placement',
      'Zero AI plagiarism — all articles checked through originality scanners'
    ],
    deliverables: [
      '3 completed Google Docs (1,000 words each) with royalty-free image suggestions and meta descriptions'
    ],
    verifiedCompany: true,
    deadline: 'In 3 days',
    isHot: false,
    isFeatured: false,
    location: 'Remote'
  },
  {
    id: 'proj-04',
    title: 'Mobile App Beta QA Testing & Usability Bug Report',
    company: 'Swiggy Instamart',
    companyLogo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&auto=format&fit=crop&q=80',
    category: 'Web & Bug Testing',
    stipend: 3500,
    stipendFormatted: '₹3,500',
    payoutType: 'Fixed UPI',
    timeEstimate: '2 days',
    difficulty: 'Beginner',
    spotsLeft: 8,
    tags: ['App Testing', 'QA', 'Bug Reporting', 'Android/iOS'],
    description: 'Test a new experimental midnight snacking & student discount feature on Android or iOS. Complete 10 specific user journeys and submit step-by-step bug logs with screen recordings.',
    requirements: [
      'Smartphone running Android 12+ or iOS 16+',
      'Attention to detail in documenting screen glitches, lags, or broken checkout flows'
    ],
    deliverables: [
      'Completed QA test sheet with 10 test case scenarios',
      'Video recordings of any observed edge cases or crashes'
    ],
    verifiedCompany: true,
    deadline: 'Tomorrow',
    isHot: true,
    isFeatured: false,
    location: 'Remote'
  },
  {
    id: 'proj-05',
    title: 'Campus Ambassador Lead for Delhi NCR & Mumbai Colleges',
    company: 'The Souled Store',
    companyLogo: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&auto=format&fit=crop&q=80',
    category: 'Campus Ambassador',
    stipend: 15000,
    stipendFormatted: '₹15,000 / mo',
    payoutType: 'Milestone UPI',
    timeEstimate: '1 Month',
    difficulty: 'Intermediate',
    spotsLeft: 4,
    tags: ['Campus Lead', 'Merchandise', 'Events', 'Leadership'],
    description: 'Represent The Souled Store in your college/university. Distribute exclusive discount coupons, coordinate college fest sponsorships, and host pop-culture quiz nights.',
    requirements: [
      'Currently enrolled in high school (11th/12th) or college (UG)',
      'Active participant in cultural, literary, or fest societies',
      'Energetic communicator with high campus reach'
    ],
    deliverables: [
      'Minimum 50 new app signups per month via campus referral code',
      'Host 1 offline flash event / booth at college cultural event'
    ],
    verifiedCompany: true,
    deadline: 'In 5 days',
    isHot: false,
    isFeatured: true,
    location: 'Delhi, Mumbai, Bengaluru, Pune'
  },
  {
    id: 'proj-06',
    title: 'Midjourney & ChatGPT AI Prompt Asset Library Creation',
    company: 'CaratLane',
    companyLogo: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&auto=format&fit=crop&q=80',
    category: 'AI & Prompt Engineering',
    stipend: 8000,
    stipendFormatted: '₹8,000',
    payoutType: 'Fixed UPI',
    timeEstimate: '4 days',
    difficulty: 'Intermediate',
    spotsLeft: 3,
    tags: ['Midjourney', 'AI Art', 'Jewellery Concepts', 'Prompts'],
    description: 'Design 20 futuristic aesthetic jewelry photoshoot background concepts using Midjourney v6. Provide tested prompt formulas, lighting parameters, and aspect ratio variations.',
    requirements: [
      'Experience with Midjourney v6 prompt parameters (--ar, --v, --s, --stylize)',
      'Aesthetic sense for luxury branding, minimalist lighting, and pastel tones'
    ],
    deliverables: [
      '20 high-resolution upscale AI background renders (4K)',
      'Document listing the full prompt recipe for each image'
    ],
    verifiedCompany: true,
    deadline: 'In 3 days',
    isHot: true,
    isFeatured: false,
    location: 'Remote'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Sharma',
    age: 16,
    city: 'Bengaluru',
    role: 'Teen Graphic Designer & Video Editor',
    earningTotal: '₹64,200',
    quote: 'FunGro completely changed how I look at my hobbies. Instead of just scrolling reels, I edit videos for brands like boAt and Shoppers Stop. Getting my first ₹5,000 paid straight to my UPI account felt like magic!',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80',
    companyWorkedWith: 'boAt & Groww',
    category: 'teen',
    badge: 'Pro Teenlancer Level 3'
  },
  {
    id: 'test-2',
    name: 'Rhea Kulkarni',
    age: 17,
    city: 'Pune',
    role: 'Shelancer & Content Creator',
    earningTotal: '₹98,500',
    quote: 'The Shelancers vertical gave me a safe, women-led environment to pitch brand campaigns. I funded my own iPad for design school without having to ask my parents for a single rupee.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    companyWorkedWith: 'WOW Skin Science & Tata',
    category: 'teen',
    badge: 'Shelancers Top Earner'
  },
  {
    id: 'test-3',
    name: 'Rajeev & Sunita Mehra',
    age: 48,
    city: 'Mumbai',
    role: 'Parents of 15-year-old Aditya',
    earningTotal: 'Verified Parent',
    quote: 'Initially, we were skeptical about online work for teenagers. But FunGro has strict parental controls, verified corporate partners, and legal RBI-compliant payouts. Aditya learned time management and financial discipline before even entering college.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    companyWorkedWith: 'Parental Oversight Portal',
    category: 'parent',
    badge: 'Verified FunGro Parent'
  },
  {
    id: 'test-4',
    name: 'Vikramaditya Rao',
    age: 34,
    city: 'Gurugram',
    role: 'VP Marketing, D2C Lifestyle Brand',
    earningTotal: 'Employer Partner',
    quote: 'Gen-Z understands youth trends 100x better than any 40-year-old agency creative director. FunGro allowed us to deploy 50 teen creators across India within 48 hours at 1/5th traditional agency costs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    companyWorkedWith: 'Over 25 Brand Campaigns',
    category: 'company',
    badge: '5★ Verified Employer'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'how-to-earn-money-as-a-teenager-in-india-2026',
    title: 'How to Earn Money as a Teenager in India (2026 Legal Guide & Top Skills)',
    metaDescription: 'Complete 2026 guide for Indian teens aged 14-22 to earn money online legally through freelance projects, UPI payouts, and experiential learning.',
    excerpt: 'Step-by-step blueprint on how 70 lakh+ Indian students are building portfolios, earning ₹5,000 to ₹30,000/month, and getting paid via UPI.',
    category: 'Career & Earning',
    readTime: '6 min read',
    publishedDate: 'August 28, 2026',
    author: 'Payal Jain',
    authorRole: 'Co-Founder & CEO, FunGro',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    tags: ['Teen Freelancing', 'UPI Earnings', 'Gen Z Careers', 'Student Guide'],
    keyTakeaways: [
      'Freelancing is 100% legal for teens aged 14+ in India when completed on regulated skill platforms.',
      'Top 3 in-demand skills in 2026: Short-form video editing, Figma UI design, and AI Prompt Engineering.',
      'Direct UPI payments to minor bank accounts or verified guardian accounts eliminate middleman fees.'
    ],
    faqs: [
      {
        question: 'Is it legal for a 15-year-old to work on FunGro in India?',
        answer: 'Yes. FunGro facilitates skill-based freelance project contracts and experiential learning, fully compliant with Indian child labor protection and financial regulations.'
      },
      {
        question: 'How do teenlancers receive payment?',
        answer: 'Payments are transferred directly to the user verified UPI ID (Google Pay, PhonePe, Paytm) or parental bank account upon project milestone approval.'
      }
    ],
    content: `Freelancing as a student is no longer just about pocket money — it is the single most potent way to build real-world career capital before stepping into university or job interviews.

### Why Traditional Summer Jobs are Outdated
In the past, high school and college students had limited choices: retail shifts or unpaid internships. Today, top consumer brands like Groww, boAt, and Tata are actively seeking the authentic voice of Gen-Z creators.

### Top 5 High-Income Skills for Teens
1. **Short-Form Video Editing (CapCut & Premiere):** Brands pay up to ₹1,500 per 30-second Reel.
2. **Graphic Design & Social Creatives:** Fast turnaround Canva & Figma graphics for marketing teams.
3. **AI Prompt Engineering:** Building prompts for image generation and customer research.
4. **App Quality Testing:** Finding edge-case UI glitches on modern smartphones.
5. **Content & Copywriting:** Writing youth-centric newsletters and blogs.

### How to Get Started on FunGro
1. Download the FunGro App or sign up on the web.
2. Choose your primary skill track and complete a 5-minute micro-assessment.
3. Apply to verified company projects with zero upfront fees.
4. Complete the project, earn your verified experiential certificate, and receive funds via UPI within 24 hours.`
  },
  {
    id: 'blog-2',
    slug: 'top-10-skills-companies-hire-teenagers-for',
    title: 'Top 10 High-Income Skills That 5,000+ Brands Hire Teens For in 2026',
    metaDescription: 'Discover the most in-demand freelance skills for teens. Learn why companies prefer hiring Gen-Z creators for video editing, design, and market research.',
    excerpt: 'An insider look into the skill categories that generate the highest payouts and quickest hiring times on the FunGro platform.',
    category: 'Skill Roadmaps',
    readTime: '5 min read',
    publishedDate: 'August 24, 2026',
    author: 'Anik Jain',
    authorRole: 'Co-Founder & CFO, FunGro',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    tags: ['Skills 2026', 'Figma', 'Video Editing', 'AI Prompting'],
    keyTakeaways: [
      'Companies prioritize genuine youth authenticity and visual speed over years of generic resume experience.',
      'Portfolio links and sample mockups increase application acceptance by 450%.',
      'Cross-disciplinary skills (e.g. Video Editing + AI Tools) command double the standard stipend.'
    ],
    content: `Brands today do not want generic corporate marketing. They want high-energy, relatable, and trend-aligned digital assets. That is why over 5,000 companies turn to FunGro to tap into India's brightest young minds.`
  },
  {
    id: 'blog-3',
    slug: 'why-shark-tank-india-backed-fungro',
    title: 'The FunGro Story: Why Shark Tank India Season 2 Invested in the Future of Teen Earning',
    metaDescription: 'The inside story of Payal and Anik Jain pitch on Shark Tank India Season 2, securing investment from Amit Jain (CarDekho) and Namita Thapar (Emcure).',
    excerpt: 'How two IIM Calcutta alumni built a platform that turned 70 lakh teens into financially independent creators and experiential learners.',
    category: 'Shark Tank & Growth',
    readTime: '4 min read',
    publishedDate: 'August 15, 2026',
    author: 'Editorial Team',
    authorRole: 'FunGro Insights',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80',
    tags: ['Shark Tank India', 'Amit Jain', 'Namita Thapar', 'Startup Journey'],
    keyTakeaways: [
      'Secured ₹50 Lakhs investment from Amit Jain and Namita Thapar on Shark Tank India Season 2.',
      'Grew from 10 Lakh to over 70 Lakh registered teenlancers across 500+ Indian cities.',
      'Validated experiential learning as a vital supplement to academic education.'
    ],
    content: `When Payal and Anik Jain walked onto the Shark Tank India Season 2 stage, they brought a radical yet simple question: Why should young Indians wait until age 23 to discover what work feels like?`
  }
];

export const siteFaqs: FAQItem[] = [
  {
    category: 'general',
    question: 'What is FunGro and who is it for?',
    answer: 'FunGro is India\'s #1 experiential learning and earning platform designed for young adults and teenagers aged 14 to 25. It connects youth with 5,000+ top brands (like Shoppers Stop, Groww, boAt, Tata) to work on freelance projects, build real portfolios, and receive guaranteed payouts via UPI.'
  },
  {
    category: 'teens',
    question: 'How do I start earning on FunGro as a student?',
    answer: 'Simply download the FunGro app or sign up on the web. Select your skill categories (Design, Writing, Video Editing, AI, Coding, or Marketing), browse live project listings, and hit Apply. Once your submission is approved by the brand, your payment is transferred directly via UPI.'
  },
  {
    category: 'teens',
    question: 'Do I need prior work experience or a degree?',
    answer: 'No! FunGro is built specifically for first-time earners. All you need is a passion for learning and basic creative or digital skills. We even provide starter projects and micro-tasks in the FunGro Arcade to help you build your initial portfolio.'
  },
  {
    category: 'companies',
    question: 'Why should companies hire Teenlancers on FunGro?',
    answer: 'FunGro gives brands instant access to 70 lakh+ energetic Gen-Z creators for trend research, social content, video editing, and campus campaigns at lightning speed (turnaround under 48 hours) and 70% lower cost than traditional marketing agencies.'
  },
  {
    category: 'parents',
    question: 'Is FunGro safe for my child and is it legally compliant in India?',
    answer: 'Absolutely. FunGro enforces strict safety standards: all partner companies are manually verified, project guidelines strictly prohibit hazardous or inappropriate tasks, and payments comply with Indian banking and RBI regulations. Parents can link their oversight dashboard for full visibility.'
  },
  {
    category: 'payments',
    question: 'How are payouts processed and what is the minimum payout?',
    answer: 'Payments are transferred directly to your bank account or UPI ID (Google Pay, PhonePe, Paytm). There is no high withdrawal threshold — earnings from approved projects are credited within 24 to 48 hours.'
  },
  {
    category: 'general',
    question: 'Was FunGro featured on Shark Tank India?',
    answer: 'Yes! FunGro appeared on Shark Tank India Season 2 and secured a joint investment of ₹50 Lakhs from Sharks Amit Jain (CarDekho) and Namita Thapar (Emcure Pharmaceuticals).'
  }
];

export const personaData: Record<'teens' | 'companies' | 'parents' | 'shelancers', PersonaData> = {
  teens: {
    id: 'teens',
    badge: '🚀 For Teenlancers & Students (Ages 14-25)',
    headline: 'Earn Your First ₹10,000+ Online with India\'s Top Brands',
    subheadline: 'Turn your passion for design, video editing, social media, and coding into real income and verified certificates. 100% free, forever.',
    primaryCta: { label: 'Start Earning (Free)', link: '/projects' },
    secondaryCta: { label: 'Calculate My Earnings', link: '/calculator' },
    stats: [
      { label: 'Registered Teenlancers', value: '70 Lakh+', sub: 'Across 500+ Indian cities' },
      { label: 'Paid Out to Students', value: '₹10+ Cr', sub: 'Directly credited via UPI' },
      { label: 'Live Projects Active', value: '1,200+', sub: 'New gigs posted daily' }
    ],
    keyBenefits: [
      { title: 'Work with Dream Brands', desc: 'Add boAt, Shoppers Stop, Groww, and Tata to your resume before college.', icon: 'Award' },
      { title: 'Instant UPI Payouts', desc: 'Fast, secure payouts directly to your PhonePe, GPay, or bank account.', icon: 'Zap' },
      { title: 'Verified Experience Certs', desc: 'Get official credentials signed by corporate leaders to boost admissions.', icon: 'CheckCircle2' }
    ]
  },
  companies: {
    id: 'companies',
    badge: '💼 For Fast-Growing Brands & Startups',
    headline: 'Tap 70 Lakh+ Gen-Z Minds for Content, Marketing & Growth',
    subheadline: 'Deploy high-velocity teen creators for viral reels, product testing, campus drives, and market research in under 48 hours.',
    primaryCta: { label: 'Post a Project Now', link: '/companies' },
    secondaryCta: { label: 'Calculate ROI Savings', link: '/companies#roi' },
    stats: [
      { label: 'Partner Brands', value: '5,000+', sub: 'D2C, Tech, EdTech & Retail' },
      { label: 'Average Turnaround', value: '< 48 Hrs', sub: 'From project post to delivery' },
      { label: 'Cost vs Traditional Agency', value: '70% Less', sub: 'High ROI on creative assets' }
    ],
    keyBenefits: [
      { title: 'Authentic Youth Voice', desc: 'Content that resonates with Gen-Z and Alpha audiences organically.', icon: 'Flame' },
      { title: 'Pan-India Reach', desc: 'Activate campus ambassadors across 2,000+ colleges and high schools.', icon: 'Globe' },
      { title: 'Zero Escrow Hassle', desc: 'Pay only when milestones are completed and verified to your satisfaction.', icon: 'ShieldCheck' }
    ]
  },
  parents: {
    id: 'parents',
    badge: '🛡️ For Conscious & Supportive Parents',
    headline: 'Nurture Real-World Financial Literacy & Work Skills Safely',
    subheadline: 'Provide your teenager with structured, supervised experiential learning that builds self-reliance, time management, and smart money habits.',
    primaryCta: { label: 'Explore Parent Portal', link: '/parents' },
    secondaryCta: { label: 'Read Safety Framework', link: '/parents#safety' },
    stats: [
      { label: 'Parent Trust Rating', value: '4.9 / 5', sub: 'Based on 25,000+ reviews' },
      { label: 'Verified Brand Partners', value: '100%', sub: 'Zero unverified third parties' },
      { label: 'Safe UPI Integration', value: 'RBI Compliant', sub: 'Direct to guardian or minor account' }
    ],
    keyBenefits: [
      { title: 'Safe & Supervised Space', desc: 'Curated projects free from harmful content, scams, or predatory algorithms.', icon: 'Lock' },
      { title: 'Practical Financial Education', desc: 'Teaches saving, budgeting, and value of hard-earned money early in life.', icon: 'TrendingUp' },
      { title: 'College Application Edge', desc: 'Demonstrable portfolio and leadership credentials for Ivy & top Indian colleges.', icon: 'BookOpen' }
    ]
  },
  shelancers: {
    id: 'shelancers',
    badge: '✨ Shelancers: Dedicated Women in Freelancing',
    headline: 'Empowering Young Women to Lead, Create & Earn Independently',
    subheadline: 'A curated, safe, and supportive ecosystem offering women-only brand campaigns, creative leadership tracks, and peer mentorship.',
    primaryCta: { label: 'Join Shelancers Hub', link: '/shelancers' },
    secondaryCta: { label: 'Meet Top Female Creators', link: '/shelancers#creators' },
    stats: [
      { label: 'Active Women Creators', value: '32 Lakh+', sub: '46% of total platform talent' },
      { label: 'Exclusive Campaigns', value: '450+', sub: 'Beauty, Tech, Fashion & Arts' },
      { label: 'Female Mentor Network', value: '1,200+', sub: 'Industry leaders guiding teens' }
    ],
    keyBenefits: [
      { title: 'Women-Led Safe Spaces', desc: 'Encouraging community, harassment-free moderation, and private masterclasses.', icon: 'Heart' },
      { title: 'Financial Autonomy', desc: 'Encouraging independent financial foundations before university graduation.', icon: 'Coins' },
      { title: 'Leadership Mentorship', desc: 'Direct 1-on-1 sessions with female CXOs, design directors, and founders.', icon: 'Sparkles' }
    ]
  }
};

export const sharkTankStats = {
  season: 'Shark Tank India Season 2',
  investment: '₹50 Lakhs for 4.16% Equity',
  sharks: ['Amit Jain (CarDekho Group)', 'Namita Thapar (Emcure Pharmaceuticals)'],
  founders: 'Payal Jain & Anik Jain (IIM Calcutta Alumni)',
  quotes: [
    {
      shark: 'Amit Jain',
      role: 'CEO & Co-founder, CarDekho Group',
      quote: 'India has 25 crore young people who want practical skills. FunGro connects them to the real economy early. That is the kind of massive nation-building impact I love backing.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&auto=format&fit=crop&q=80'
    },
    {
      shark: 'Namita Thapar',
      role: 'Executive Director, Emcure Pharma',
      quote: 'Learning by doing is the future of education. What FunGro does for experiential learning and female teen empowerment through Shelancers is extraordinary.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&auto=format&fit=crop&q=80'
    }
  ]
};
