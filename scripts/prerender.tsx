import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import * as ReactHelmetAsync from 'react-helmet-async';
const HelmetProvider = (ReactHelmetAsync as any).HelmetProvider || (ReactHelmetAsync as any).default?.HelmetProvider || ReactHelmetAsync;

import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { HomePage } from '../src/pages/HomePage';
import { ServicesPage } from '../src/pages/ServicesPage';
import { PortfolioPage } from '../src/pages/PortfolioPage';
import { TeamPage } from '../src/pages/TeamPage';
import { FounderPage } from '../src/pages/FounderPage';
import { TeamMemberProfilePage } from '../src/pages/TeamMemberProfilePage';
import { GwaliorPage } from '../src/pages/GwaliorPage';
import { ContactPage } from '../src/pages/ContactPage';
import { BlogListPage } from '../src/pages/BlogListPage';
import { PageRoute } from '../src/types';

interface RouteDefinition {
  path: string;
  activeRoute: PageRoute;
  component: React.ReactElement;
  title: string;
  description: string;
  ogImage?: string;
  schemaMarkup?: object;
}

const BASE_URL = 'https://sparkstation.vercel.app';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "Spark Station",
      "description": "Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.",
      "inLanguage": "en",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      }
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Spark Station",
      "url": `${BASE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/apple-touch-icon.png`,
        "caption": "Spark Station Logo"
      },
      "image": `${BASE_URL}/apple-touch-icon.png`,
      "description": "Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.",
      "founders": [
        {
          "@type": "Person",
          "name": "Saksham Pandey",
          "jobTitle": "Founder & CEO",
          "url": `${BASE_URL}/saksham-pandey`
        },
        {
          "@type": "Person",
          "name": "Shivam Sharma",
          "jobTitle": "CEO",
          "url": `${BASE_URL}/shivam-sharma`
        }
      ],
      "sameAs": [
        "https://in.linkedin.com/in/sakshampandeyin",
        "https://www.instagram.com/sakshampandey.x/",
        "https://x.com/crazy_saksham",
        "https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN",
        "https://wa.me/919111376314"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "sparkstation.x@gmail.com",
          "contactType": "customer service",
          "telephone": "+919111376314",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "email": "shivam@sparkstation.agency",
          "contactType": "technical support",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      "name": "Spark Station Digital Agency",
      "url": `${BASE_URL}/`,
      "image": `${BASE_URL}/apple-touch-icon.png`,
      "priceRange": "$$",
      "telephone": "+919111376314",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gwalior",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": ["Global", "India", "Gwalior"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Custom modern responsive high-performance websites with React, Next.js, and Vite."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "Intuitive, conversion-focused design systems, prototypes, and user interfaces."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding & Identity",
              "description": "Logos, brand guidelines, typography, and cohesive visual identities."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Performance Optimization",
              "description": "Technical SEO, Core Web Vitals optimization, and organic search campaigns."
            }
          }
        ]
      }
    }
  ]
};

const routes: RouteDefinition[] = [
  {
    path: '/',
    activeRoute: 'home',
    component: <HomePage onRouteChange={() => {}} />,
    title: 'Spark Station | Premium Web Development, UI/UX & Branding Agency',
    description: 'Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`,
    schemaMarkup: homeSchema
  },
  {
    path: '/services',
    activeRoute: 'services',
    component: <ServicesPage onRouteChange={() => {}} />,
    title: 'Services & Digital Solutions | Spark Station',
    description: 'Explore full-service digital solutions: High-Performance Web Development, Conversion-Focused UI/UX Design, Cohesive Branding, E-Commerce, and SEO.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  },
  {
    path: '/portfolio',
    activeRoute: 'portfolio',
    component: <PortfolioPage onRouteChange={() => {}} />,
    title: 'Client Work & Case Studies | Spark Station Portfolio',
    description: 'Browse our selected portfolio of modern web applications, client portals, and digital systems engineered by Spark Station.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  },
  {
    path: '/team',
    activeRoute: 'team',
    component: <TeamPage onRouteChange={() => {}} />,
    title: 'Meet Our Leadership & Engineering Team | Spark Station',
    description: 'Meet the passionate software engineers, designers, and digital strategists behind Spark Station driving world-class products.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  },
  {
    path: '/saksham-pandey',
    activeRoute: 'founder',
    component: <FounderPage onRouteChange={() => {}} />,
    title: 'Saksham Pandey | Founder & CEO of Spark Station',
    description: 'Official profile of Saksham Pandey, Founder & CEO at Spark Station. Security-First Web Developer & Cybersecurity Architect.',
    ogImage: `${BASE_URL}/saksham.png`
  },
  {
    path: '/shivam-sharma',
    activeRoute: 'team',
    component: <TeamMemberProfilePage onRouteChange={() => {}} />,
    title: 'Shivam Sharma | CEO of Spark Station',
    description: 'Official profile of Shivam Sharma, CEO at Spark Station. Driving executive leadership and specialized in modern full-stack web systems and cloud architecture.',
    ogImage: `${BASE_URL}/shivam.png`
  },
  {
    path: '/gwalior',
    activeRoute: 'home',
    component: <GwaliorPage onRouteChange={() => {}} />,
    title: 'Digital Agency in Gwalior | Web Development & UI/UX | Spark Station',
    description: 'Looking for the best web development and digital agency in Gwalior? Spark Station engineers world-class websites and branding for growing businesses.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  },
  {
    path: '/contact',
    activeRoute: 'contact',
    component: <ContactPage />,
    title: 'Contact Spark Station | Start Your Digital Project Today',
    description: 'Ready to elevate your digital presence? Contact Spark Station for custom quotes, technical consultations, and project kickoffs.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  },
  {
    path: '/blog',
    activeRoute: 'blog',
    component: <BlogListPage onRouteChange={() => {}} />,
    title: 'Insights, Guides & Engineering Blog | Spark Station',
    description: 'Read the latest technical articles, web development guides, cybersecurity practices, and design thinking from Spark Station engineers.',
    ogImage: `${BASE_URL}/apple-touch-icon.png`
  }
];

function buildHtmlForRoute(
  templateHtml: string,
  route: RouteDefinition,
  renderedBodyHtml: string
): string {
  let html = templateHtml;

  // 1. Replace title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // 2. Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Replace canonical URL
  const canonicalUrl = `${BASE_URL}${route.path === '/' ? '' : route.path}`;
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Replace OpenGraph and Twitter tags
  const ogImg = route.ogImage || `${BASE_URL}/apple-touch-icon.png`;
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${ogImg}" />`);

  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${ogImg}" />`);

  // 5. Inject Schema.org JSON-LD if provided
  if (route.schemaMarkup) {
    const schemaScript = `\n    <script type="application/ld+json">\n${JSON.stringify(route.schemaMarkup, null, 2)}\n    </script>`;
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${schemaScript}\n  </head>`);
    }
  }

  // 6. Inject the pre-rendered HTML into <div id="root">
  html = html.replace('<div id="root"></div>', `<div id="root">${renderedBodyHtml}</div>`);

  return html;
}

async function prerender() {
  console.log('--- Starting SSG / SSR Prerender Process ---');
  const projectRoot = process.cwd();
  const distDir = path.resolve(projectRoot, 'dist');
  const rootIndexHtmlPath = path.resolve(projectRoot, 'index.html');
  const distIndexHtmlPath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(distIndexHtmlPath)) {
    console.error(`Dist index.html not found at ${distIndexHtmlPath}. Please run vite build first.`);
    process.exit(1);
  }

  const rawDistTemplate = fs.readFileSync(distIndexHtmlPath, 'utf-8');
  const rootTemplate = fs.readFileSync(rootIndexHtmlPath, 'utf-8');
  const schemaRegex = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi;
  const distTemplate = rawDistTemplate
    .replace(schemaRegex, '')
    .replace(/<div id="root">[\s\S]*?(<script type="module")/i, '<div id="root"></div>\n    $1');

  for (const route of routes) {
    try {
      console.log(`Prerendering route: ${route.path}...`);
      const bodyHtml = renderToString(
        <HelmetProvider>
          <MemoryRouter initialEntries={[route.path]}>
            <div className="min-h-screen flex flex-col bg-[#0d1117] text-[#c9d1d9] selection:bg-[#58A6FF]/30 selection:text-white">
              <Navbar activeRoute={route.activeRoute} onRouteChange={() => {}} />
              <main className="flex-1 pt-24 md:pt-28 w-full overflow-x-hidden">
                {route.component}
              </main>
              <Footer onRouteChange={() => {}} />
            </div>
          </MemoryRouter>
        </HelmetProvider>
      );

      // 1. If it's home, write to dist/index.html and update root index.html
      if (route.path === '/') {
        const distHomeHtml = buildHtmlForRoute(distTemplate, route, bodyHtml);
        fs.writeFileSync(distIndexHtmlPath, distHomeHtml, 'utf-8');
        console.log(`✓ Updated ${distIndexHtmlPath} with ${bodyHtml.length} characters of initial HTML.`);

        // Also update root index.html so dev server serves the pre-rendered content
        // Clean any previous injected schema to avoid duplication
        let cleanRootTemplate = rootTemplate;
        const schemaRegex = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi;
        cleanRootTemplate = cleanRootTemplate.replace(schemaRegex, '');
        // Reset root div if already populated
        cleanRootTemplate = cleanRootTemplate.replace(/<div id="root">[\s\S]*?(<script type="module")/i, '<div id="root"></div>\n    $1');

        const rootHomeHtml = buildHtmlForRoute(cleanRootTemplate, route, bodyHtml);
        fs.writeFileSync(rootIndexHtmlPath, rootHomeHtml, 'utf-8');
        console.log(`✓ Synchronized source ${rootIndexHtmlPath} with pre-rendered homepage & schema markup.`);
      } else {
        // Sub-route: write to dist/<path>/index.html
        const routePathClean = route.path.replace(/^\//, '');
        const targetDir = path.resolve(distDir, routePathClean);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        const routeHtml = buildHtmlForRoute(distTemplate, route, bodyHtml);
        const routeFile = path.resolve(targetDir, 'index.html');
        fs.writeFileSync(routeFile, routeHtml, 'utf-8');
        console.log(`✓ Generated static page: ${routeFile} (${bodyHtml.length} chars).`);
      }
    } catch (err) {
      console.error(`Error prerendering route ${route.path}:`, err);
    }
  }

  console.log('--- SSG Prerender Finished Successfully! ---');
}

prerender();
