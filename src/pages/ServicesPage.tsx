import React from 'react';
import { CodeXml, Check, ArrowRight, MessageCircle, HelpCircle, Search } from 'lucide-react';
import { SERVICES, AGENCY_INFO, SEO_PLAN } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onRouteChange }) => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development, UI/UX & Branding Services",
    "provider": {
      "@type": "Organization",
      "name": "Spark Station",
      "url": "https://spark-station-2.vercel.app/"
    },
    "description": "Explore custom web application development, expert UI/UX design, performance branding, search engine optimization, and custom technical solutions at Spark Station.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom-built, lightning-fast web applications using React, TypeScript, and high-performance serverless stacks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "High-fidelity modern designs and interactive user interfaces created with absolute brand precision."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Identity",
            "description": "Crafting iconic corporate identities, custom typography pairings, visual guidelines, and brand assets."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Growth",
            "description": "Comprehensive search engine optimization, Core Web Vitals optimization, and modern structured data implementation."
          }
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden">
      <SEO 
        title="Web Development, UI/UX &amp; Digital Agency Services | Spark Station"
        description="Explore custom web application development, expert UI/UX design, performance branding, search engine optimization, and custom technical solutions at Spark Station."
        path="/services"
        schemaMarkup={servicesSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="section-label mb-6">
          <CodeXml size={14} />
          <span>Services Architecture</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Everything You Need to <span className="gradient-text">Build & Scale</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Comprehensive digital services to help your business thrive online. Custom-built solutions crafted by dedicated specialists — no cookie-cutter packages.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="ss-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#58A6FF]/40"
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
                      <span>Benefits</span>
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

              {/* Card Footer */}
              <div className="pt-6 border-t border-[#30363d]/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#8b949e]">
                  Delivery timeline: Custom scoped
                </span>
                <button
                  onClick={() => {
                    onRouteChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
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
                  <span>Strategy & Core</span>
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
                  <span>Technical & Audits</span>
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
                  <span>Content & Authority</span>
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
                  <span>Advisory & Support</span>
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
              Tell us about your project goals and we'll recommend the optimal tech stack and approach — completely free.
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
