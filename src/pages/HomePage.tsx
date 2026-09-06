import React from 'react';
import { Zap, MessageCircle, CodeXml, ArrowRight, CircleCheck, Layers, Award, Sparkles } from 'lucide-react';
import { AGENCY_INFO, TRUSTED_BADGES, PROBLEMS, SOLUTIONS, PILLARS, SERVICES, TEAM } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://spark-station-2.vercel.app/#website",
        "url": "https://spark-station-2.vercel.app/",
        "name": "Spark Station",
        "description": "Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.",
        "inLanguage": "en",
        "publisher": {
          "@id": "https://spark-station-2.vercel.app/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://spark-station-2.vercel.app/#organization",
        "name": "Spark Station",
        "url": "https://spark-station-2.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://spark-station-2.vercel.app/favicon.png",
          "caption": "Spark Station Logo"
        },
        "description": "Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.",
        "founder": {
          "@type": "Person",
          "name": "Saksham Pandey",
          "jobTitle": "Founder & CEO"
        },
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
            "email": "manas@sparkstation.agency",
            "contactType": "sales",
            "telephone": "+917224935780",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": "IN"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      <SEO 
        title="Spark Station | Premium Web Development, UI/UX & Branding Agency"
        description="Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions."
        path="/"
        schemaMarkup={homeSchema}
      />
      {/* Ambient Glow */}
      <div className="ambient-glow" />

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="section-label mb-8 animate-fadeIn">
          <Sparkles size={14} className="text-[#A371F7]" />
          <span>Digital Solutions Agency</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight text-white">
          We Build <span className="gradient-text">Digital Solutions</span>
          <br />
          That Work
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-[#8b949e] leading-relaxed">
          {AGENCY_INFO.subheadline}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            onClick={() => onRouteChange('contact')}
            className="btn-primary text-base sm:text-lg !py-4 !px-8 shadow-xl shadow-[#58A6FF]/25"
          >
            <Zap size={20} />
            <span>Start Your Project</span>
          </button>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-base sm:text-lg !py-4 !px-8 hover:text-[#25D366] hover:border-[#25D366]/40"
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trusted Badges Banner */}
        <div className="pt-12 border-t border-[#30363d]/80">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-[#8b949e]">
            Trusted by growing businesses & founders
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            {TRUSTED_BADGES.map((badge, idx) => (
              <span key={idx} className="tech-badge">
                <Award size={14} className="mr-2 opacity-60 text-[#58A6FF]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Comparison Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60">
        <div className="text-center mb-16">
          <span className="section-label">
            <Layers size={14} />
            <span>Why Spark Station</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 text-white">
            The Problem vs. <span className="gradient-text">Our Solution</span>
          </h2>
          <p className="text-base text-[#8b949e] mt-4 max-w-xl mx-auto">
            Traditional agencies are slow, expensive, and leave you with tangled tech. We do things differently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Problem */}
          <div
            className="ss-card p-8 sm:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.05), rgba(22,27,34,1))',
              borderColor: 'rgba(239,68,68,0.3)',
            }}
          >
            <div className="text-red-400 font-display font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>The Problem With Standard Agencies</span>
            </div>
            <div className="space-y-4">
              {PROBLEMS.map((prob, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                    ✗
                  </span>
                  <span className="text-sm sm:text-base text-[#8b949e] leading-relaxed">
                    {prob}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solution */}
          <div
            className="ss-card p-8 sm:p-10 relative overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(88,166,255,0.08), rgba(139,92,246,0.08))',
              borderColor: 'rgba(88,166,255,0.4)',
            }}
          >
            <div className="text-[#58A6FF] font-display font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#58A6FF] animate-pulse" />
              <span>The Spark Station Advantage</span>
            </div>
            <div className="space-y-4">
              {SOLUTIONS.map((sol, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#58A6FF]/20 text-[#58A6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck size={16} />
                  </span>
                  <span className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    {sol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#30363d]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-label">
              <CodeXml size={14} />
              <span>What We Offer</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 text-white">
              Digital Solutions <span className="gradient-text">Services</span>
            </h2>
          </div>
          <p className="text-base text-[#8b949e] max-w-md">
            Everything you need to build, launch, and scale your digital presence. Custom-tailored architecture with zero boilerplate bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.slice(0, 6).map((srv) => (
            <div key={srv.id} className="ss-card p-8 flex flex-col justify-between group hover:border-[#58A6FF]/50">
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: `${srv.color}18`, color: srv.color }}
                >
                  <Icon name={srv.iconName} size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#30363d]/60 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8b949e]">
                  Custom Quote
                </span>
                <button
                  onClick={() => onRouteChange('services')}
                  className="text-xs font-semibold text-[#58A6FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Explore benefits <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onRouteChange('services')}
            className="btn-secondary !px-8 !py-3.5 text-sm"
          >
            <span>View All 7 Specialized Services</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Our Agency <span className="gradient-text">Pillars</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pil, idx) => (
            <div key={idx} className="ss-card p-8 text-center bg-[#161b22]/50">
              <div className="w-14 h-14 rounded-2xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center mx-auto mb-5">
                <Icon name={pil.icon} size={26} />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2.5">
                {pil.title}
              </h4>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Snippet */}
      <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="section-label">People</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-white">
              Meet The <span className="gradient-text">Specialists</span>
            </h2>
          </div>
          <button
            onClick={() => onRouteChange('team')}
            className="text-sm font-semibold text-[#58A6FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View full team directory <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.slice(0, 3).map((mbr, idx) => (
            <div key={idx} className="ss-card overflow-hidden group">
              <div className="h-60 overflow-hidden relative bg-[#21262d]">
                <img
                  src={mbr.avatarUrl}
                  alt={mbr.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent" />
                <span
                  className="absolute bottom-3 left-4 text-xs px-3 py-1 rounded-full font-medium border text-white backdrop-blur-md"
                  style={{ background: `${mbr.color}25`, borderColor: mbr.color }}
                >
                  {mbr.role}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-display font-bold text-white mb-1">
                  {mbr.name}
                </h4>
                <p className="text-xs text-[#58A6FF] font-mono mb-3">
                  Experience: {mbr.experience}
                </p>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-4 line-clamp-2">
                  {mbr.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
