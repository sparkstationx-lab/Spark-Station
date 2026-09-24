import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle, HelpCircle, Search, Sparkles, MapPin, ShieldCheck, Zap, CodeXml, Briefcase, BookOpen } from 'lucide-react';
import { SERVICES, AGENCY_INFO, SEO_PLAN, PROJECTS } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sparkstation.vercel.app/#agency",
        "name": "Spark Station - Digital Agency in Gwalior",
        "alternateName": "Spark Station",
        "url": "https://sparkstation.vercel.app/services",
        "telephone": AGENCY_INFO.call,
        "email": AGENCY_INFO.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gwalior",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.2183",
          "longitude": "78.1828"
        },
        "areaServed": [
          "Gwalior",
          "Madhya Pradesh",
          "Central India",
          "India",
          "Worldwide"
        ],
        "description": "Premier full-stack digital agency in Gwalior providing custom web development, UI/UX design, branding & identity, product design, e-commerce solutions, technical consultancy, and search engine optimization."
      },
      {
        "@type": "Service",
        "@id": "https://sparkstation.vercel.app/services#catalog",
        "name": "Digital Solutions & Web Engineering Services in Gwalior",
        "provider": {
          "@id": "https://sparkstation.vercel.app/#agency"
        },
        "description": "Comprehensive suite of digital services designed for high-velocity startups and ambitious businesses in Gwalior, Central India, and global markets.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Spark Station Digital Services",
          "itemListElement": SERVICES.map((srv) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": srv.title,
              "url": `https://sparkstation.vercel.app/services/${srv.slug || srv.id}`,
              "description": srv.desc
            }
          }))
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen py-16 sm:py-20 overflow-x-hidden">
      <SEO 
        title="Digital Agency in Gwalior | Web Development, UI/UX & SEO Services | Spark Station"
        description="Spark Station is a premier digital agency in Gwalior, Madhya Pradesh. We craft high-performance web development, modern UI/UX design, brand identity, and data-driven SEO for ambitious businesses."
        path="/services"
        schemaMarkup={servicesSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 sm:mb-20 relative z-10">
        <span className="section-label mb-6">
          <Sparkles size={14} className="text-[#A371F7]" />
          <span>Digital Agency in Gwalior &amp; Central India</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Full-Stack <span className="gradient-text">Digital Agency in Gwalior</span> — Web, Design &amp; Growth
        </h1>
        <p className="text-base sm:text-lg text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
          Helping startups, growing businesses, and established enterprises build, modernize, and scale online. From custom React &amp; Next.js web applications to distinctive brand identities, intuitive UI/UX design, and organic SEO dominance — we engineer solutions that deliver measurable business results.
        </p>

        {/* Location & Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 text-xs text-[#8b949e]">
          <Link
            to="/gwalior"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] hover:border-[#58A6FF] transition-colors text-white group"
            title="Explore our dedicated Gwalior agency hub"
          >
            <MapPin size={13} className="text-[#58A6FF] group-hover:scale-110 transition-transform" />
            <span>Headquartered in <strong className="text-[#58A6FF] font-medium underline underline-offset-2">Gwalior, MP</strong> &rarr;</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
            <Zap size={13} className="text-[#FBBF24]" />
            <span>Sub-Second Load Times</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]">
            <ShieldCheck size={13} className="text-[#34D399]" />
            <span>100% Code &amp; Asset Ownership</span>
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const serviceSlug = srv.slug || srv.id;
            return (
              <div
                key={srv.id}
                className="ss-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#58A6FF]/40 transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(22,27,34,1) 0%, rgba(13,17,23,0.8) 100%)',
                }}
              >
                <div>
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-105"
                      style={{ background: `${srv.color}15`, color: srv.color, border: `1px solid ${srv.color}30` }}
                    >
                      <Icon name={srv.iconName} size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-white mb-2">
                        {srv.title}
                      </h2>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border inline-block"
                        style={{ background: `${srv.color}10`, color: srv.color, borderColor: `${srv.color}30` }}
                      >
                        Specialized Offering
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-[#8b949e] leading-relaxed mb-8">
                    {srv.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#30363d]/80 mb-8">
                    {/* Benefits */}
                    <div>
                      <h4
                        className="text-xs font-mono font-bold uppercase tracking-widest mb-3.5 flex items-center gap-2"
                        style={{ color: srv.color }}
                      >
                        <span>Key Benefits</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {srv.benefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2.5 text-sm text-[#c9d1d9]">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                              style={{ background: `${srv.color}30` }}
                            >
                              <Check size={12} style={{ color: srv.color }} />
                            </div>
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest mb-3.5 text-[#8b949e]">
                        Ideal Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm text-[#8b949e]">
                        {srv.useCases.map((uc, uIdx) => (
                          <li key={uIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#30363d]" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct Page Link + Quote Request */}
                <div className="pt-6 border-t border-[#30363d]/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      navigate(`/services/${serviceSlug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm font-semibold flex items-center gap-1.5 hover:underline cursor-pointer py-1"
                    style={{ color: srv.color }}
                  >
                    <span>Explore {srv.title} Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => {
                      onRouteChange('contact');
                      navigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-primary !py-2 !px-4 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Businesses in Gwalior & Central India Choose Spark Station (H2) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-14">
          <span className="section-label mb-3">
            <MapPin size={14} className="text-[#34D399]" />
            <span>Local Advantage &amp; Global Standards</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Why Businesses in Gwalior &amp; Central India Choose Spark Station
          </h2>
          <p className="text-base text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between regional business accessibility and world-class digital product engineering. Here is how we deliver lasting competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="ss-card p-6 bg-[#161b22]/70 border-[#30363d] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center mb-4">
                <CodeXml size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                High-Velocity Code
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                No bloated slow templates or security-vulnerable WordPress plugins. Custom React, Next.js, and TypeScript architectures built for speed and longevity.
              </p>
            </div>
            <Link to="/portfolio" className="text-xs text-[#58A6FF] font-medium hover:underline inline-flex items-center gap-1 mt-4">
              <span>Explore real-world case studies</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="ss-card p-6 bg-[#161b22]/70 border-[#30363d] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Local Accessibility
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                Based right in Gwalior, Madhya Pradesh. Available for direct local consultations or seamless remote sprints across India and abroad.
              </p>
            </div>
            <Link to="/gwalior" className="text-xs text-[#34D399] font-medium hover:underline inline-flex items-center gap-1 mt-4">
              <span>Visit our Gwalior agency hub</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="ss-card p-6 bg-[#161b22]/70 border-[#30363d]">
            <div className="w-12 h-12 rounded-xl bg-[#F778BA]/15 text-[#F778BA] flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">
              Direct Engineer Access
            </h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              Speak directly with founder Saksham Pandey and hands-on developers. No non-technical account managers slowing down communication.
            </p>
          </div>

          <div className="ss-card p-6 bg-[#161b22]/70 border-[#30363d]">
            <div className="w-12 h-12 rounded-xl bg-[#A855F7]/15 text-[#A855F7] flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">
              100% Asset Ownership
            </h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              You own all source code repositories, design Figma files, and vector assets from day one. Zero proprietary lock-in or recurring ransom fees.
            </p>
          </div>
        </div>
      </section>

      {/* Premium SEO Growth Suite Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10 animate-fadeIn">
        <div className="text-center mb-16">
          <span className="section-label mb-6">
            <Search size={14} className="text-[#A855F7]" />
            <span>Premium SEO Campaign</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
            The <span className="text-[#A855F7]">Premium Enterprise</span> SEO Plan
          </h2>
          <p className="text-lg text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
            {SEO_PLAN.desc}
          </p>
        </div>

        <div className="ss-card p-8 sm:p-12 relative overflow-hidden border-[#A855F7]/30"
             style={{
               background: 'linear-gradient(150deg, rgba(22,27,34,1) 0%, rgba(13,17,23,0.9) 100%)',
             }}>
          {/* Subtle glowing decorative gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A855F7]/10 rounded-full filter blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#58A6FF]/5 rounded-full filter blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header / Summary Badge */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-10 border-b border-[#30363d]/80">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {SEO_PLAN.subtitle}
                </h3>
                <p className="text-sm text-[#8b949e]">
                  Everything you need for ranking #1 and outclassing competition, consolidated in a single elite package.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-mono px-4 py-2 rounded-xl bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 font-bold uppercase tracking-wider font-semibold">
                  Complete Growth Package
                </span>
                <button
                  onClick={() => {
                    onRouteChange('contact');
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary !bg-[#A855F7] hover:!bg-[#A855F7]/90 !border-[#A855F7]/50 shadow-lg shadow-[#A855F7]/20 !py-3 !px-6 text-sm"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Structured Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Category 1: Strategy & Core */}
              <div className="space-y-4">
                <h4 className="text-sm font-display font-bold text-[#A855F7] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-[#30363d]/50">
                  <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <span>Strategy &amp; Core</span>
                </h4>
                <ul className="space-y-3">
                  {SEO_PLAN.features.filter(f => f.category === "Strategy & Core").map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#c9d1d9] group/item">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#A855F7]/10 text-[#A855F7] mt-0.5 border border-[#A855F7]/20">
                        <Check size={12} />
                      </div>
                      <span className="leading-tight group-hover/item:text-white transition-colors">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 2: Technical & Audits */}
              <div className="space-y-4">
                <h4 className="text-sm font-display font-bold text-[#58A6FF] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-[#30363d]/50">
                  <div className="w-2 h-2 rounded-full bg-[#58A6FF]" />
                  <span>Technical &amp; Audits</span>
                </h4>
                <ul className="space-y-3">
                  {SEO_PLAN.features.filter(f => f.category === "Technical & Audits").map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#c9d1d9] group/item">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#58A6FF]/10 text-[#58A6FF] mt-0.5 border border-[#58A6FF]/20">
                        <Check size={12} />
                      </div>
                      <span className="leading-tight group-hover/item:text-white transition-colors">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 3: Content & Optimization */}
              <div className="space-y-4">
                <h4 className="text-sm font-display font-bold text-[#F778BA] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-[#30363d]/50">
                  <div className="w-2 h-2 rounded-full bg-[#F778BA]" />
                  <span>Content &amp; Authority</span>
                </h4>
                <ul className="space-y-3">
                  {SEO_PLAN.features.filter(f => ["Content & Authority", "Advanced Optimization"].includes(f.category)).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#c9d1d9] group/item">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F778BA]/10 text-[#F778BA] mt-0.5 border border-[#F778BA]/20">
                        <Check size={12} />
                      </div>
                      <span className="leading-tight group-hover/item:text-white transition-colors">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 4: Reports & Support */}
              <div className="space-y-4">
                <h4 className="text-sm font-display font-bold text-[#34D399] uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-[#30363d]/50">
                  <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                  <span>Advisory &amp; Support</span>
                </h4>
                <ul className="space-y-3">
                  {SEO_PLAN.features.filter(f => f.category === "Reporting & Support").map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#c9d1d9] group/item">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#34D399]/10 text-[#34D399] mt-0.5 border border-[#34D399]/20">
                        <Check size={12} />
                      </div>
                      <span className="leading-tight group-hover/item:text-white transition-colors">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Powered by These Services */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label mb-3">
              <Briefcase size={14} className="text-[#58A6FF]" />
              <span>Proven Implementations</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              Case Studies Engineered With <span className="gradient-text">These Capabilities</span>
            </h2>
            <p className="text-sm text-[#8b949e] max-w-xl">
              Inspect the real architectural challenges, technologies used, and solutions delivered for real clients.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#58A6FF] hover:underline underline-offset-4"
          >
            <span>View All 11 Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((proj) => {
            const caseStudyUrl = `/portfolio/${proj.slug || proj.id}`;
            return (
              <div
                key={proj.id}
                className="ss-card overflow-hidden flex flex-col justify-between group hover:border-[#58A6FF]/40 transition-all duration-300"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-[#161b22]">
                    <img
                      src={proj.image}
                      alt={`${proj.title} Case Study`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-70" />
                    <span className="absolute top-3 right-3 text-[10px] px-2.5 py-0.5 rounded-full bg-[#0d1117]/80 text-[#58A6FF] border border-[#58A6FF]/30 font-mono">
                      {proj.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#58A6FF] transition-colors">
                      <Link to={caseStudyUrl}>{proj.title}</Link>
                    </h3>
                    <p className="text-xs text-[#8b949e] line-clamp-2 leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#30363d]/40 flex items-center justify-between text-xs">
                  <Link
                    to={caseStudyUrl}
                    className="font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
                  >
                    <span>Read case study</span>
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8b949e] hover:text-white transition-colors"
                  >
                    Live Site &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blog / Pricing Guides Internal Banner */}
        <div className="mt-8 p-5 rounded-xl bg-[#161b22]/70 border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">Need transparent website pricing breakdowns?</div>
              <div className="text-xs text-[#8b949e]">Read our detailed engineering cost guides and architectural comparisons on our blog.</div>
            </div>
          </div>
          <Link
            to="/blog/how-much-does-a-website-cost"
            className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            <span>Read Website Pricing Guide</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Not Sure Consultation Banner */}
      <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <div className="ss-card p-10 bg-gradient-to-r from-[#161b22] to-[#21262d] text-center border-[#58A6FF]/30 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-lg">
            <span className="section-label mb-3">
              <HelpCircle size={14} />
              <span>Free Advisory</span>
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Not sure which service you need?
            </h3>
            <p className="text-sm text-[#8b949e]">
              Tell us about your project goals and we will recommend the optimal tech stack and approach for your business — completely free.
            </p>
          </div>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-3.5 !px-7 whitespace-nowrap shadow-lg shadow-[#58A6FF]/20"
          >
            <MessageCircle size={18} />
            <span>Get Free Consultation</span>
          </a>
        </div>
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};

