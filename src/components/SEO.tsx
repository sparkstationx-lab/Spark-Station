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
  ogImage = 'https://sparkstation.vercel.app/apple-touch-icon.png', // Default premium brand icon
  schemaMarkup,
  robots = 'index, follow',
  themeColor = '#0d1117',
}) => {
  // Always resolve to the production canonical domain to prevent staging/preview domain indexing issues
  const BASE_DOMAIN = 'https://sparkstation.vercel.app';
  
  // Clean path: strip query params, hashes, leading/trailing extraneous slashes
  const cleanPath = path.split('?')[0].split('#')[0];
  const normalizedPath = cleanPath === '/' || cleanPath === '' 
    ? '' 
    : cleanPath.startsWith('/') ? cleanPath.replace(/\/+$/, '') : `/${cleanPath.replace(/\/+$/, '')}`;

  const canonicalUrl = `${BASE_DOMAIN}${normalizedPath || '/'}`;

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
