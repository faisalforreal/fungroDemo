import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schemas?: object[];
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'FunGro, teen freelancing, student internships, experiential learning india, teenlancers, shark tank india funngro',
  canonical = 'https://www.funngro.com/',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  schemas = [],
  noindex = false,
}) => {
  const fullTitle = title.includes('FunGro') ? title : `${title} | FunGro`;

  return (
    <Helmet>
      {/* Document Title */}
      <title>{fullTitle}</title>

      {/* Standard Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FunGro" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@Funngro" />

      {/* Injected JSON-LD Schema */}
      {schemas.map((schema, index) => (
        <script key={`jsonld-schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
