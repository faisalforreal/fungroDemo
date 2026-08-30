import { BlogPost, FAQItem } from '../../types';

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.funngro.com/#organization',
    name: 'FunGro',
    legalName: 'Funngro Innovations Private Limited',
    url: 'https://www.funngro.com',
    logo: 'https://www.funngro.com/logo.png',
    description: 'FunGro is an experiential learning and freelance platform connecting Indian teenagers and young adults aged 14 to 25 with real-world company projects.',
    founder: [
      {
        '@type': 'Person',
        name: 'Payal Jain',
        jobTitle: 'Co-Founder & CEO'
      },
      {
        '@type': 'Person',
        name: 'Anik Jain',
        jobTitle: 'Co-Founder & CFO'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari (E), JVLR',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400060',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@funngro.com',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.linkedin.com/company/funngro',
      'https://www.instagram.com/funngro',
      'https://www.youtube.com/@funngro',
      'https://twitter.com/funngro'
    ]
  };
};

export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.funngro.com/#website',
    name: 'FunGro',
    url: 'https://www.funngro.com',
    publisher: {
      '@id': 'https://www.funngro.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.funngro.com/projects?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

export const generateFAQSchema = (faqs: FAQItem[] | { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.funngro.com${item.url}`,
    })),
  };
};

export const generateArticleSchema = (article: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.coverImage,
    datePublished: '2026-08-20T09:00:00+05:30',
    dateModified: '2026-08-30T10:00:00+05:30',
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FunGro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.funngro.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.funngro.com/blogs/${article.slug}`,
    },
  };
};
