import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'profile' | 'article';
  ogImage?: string;
  schemaMarkup?: object;
  robots?: string;
  themeColor?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = 'https://spark-station-2.vercel.app/apple-touch-icon.png', // Default premium brand icon
  schemaMarkup,
  robots = 'index, follow',
  themeColor = '#0d1117',
}) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://spark-station-2.vercel.app';
  const canonicalUrl = `${origin}${path}`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <meta name="theme-color" content={themeColor} />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Spark Station" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* JSON-LD Structured Data Schema */}
      {schemaMarkup && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>
      )}
    </>
  );
};
