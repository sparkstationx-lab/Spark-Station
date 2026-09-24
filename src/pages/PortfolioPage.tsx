import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ExternalLink, Briefcase, MapPin, CodeXml, BookOpen } from 'lucide-react';
import { PageRoute } from '../types';
import { AGENCY_INFO, PROJECTS } from '../data/agencyData';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

interface PortfolioPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'branding', label: 'Branding & Identity' },
  ];

  const filteredProjects = activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Spark Station Portfolio & Case Studies",
    "description": "Explore our web development portfolio, custom software development case studies, UI/UX designs, and corporate brand assets delivered with pixel precision.",
    "url": "https://sparkstation.vercel.app/portfolio",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Spark Station",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gwalior",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      }
    }
  };

  const handleCardClick = (projectSlugOrId: string) => {
    navigate(`/portfolio/${projectSlugOrId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden">
      <SEO 
        title="Our Work, Web Projects &amp; Case Studies | Spark Station Portfolio"
        description="Explore our web development portfolio, custom software case studies, and UI/UX design systems engineered for high conversion and speed."
        path="/portfolio"
        schemaMarkup={portfolioSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <span className="section-label mb-6">
          <Sparkles size={14} className="text-[#58A6FF]" />
          <span>Showcase &amp; Case Studies</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Real Projects, <span className="gradient-text">Engineered for Results</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          A selection of websites, e-commerce storefronts, healthcare portals, and real estate web platforms we've architected and delivered.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-4xl mx-auto px-6 mb-16 relative z-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === cat.id
                ? 'bg-[#58A6FF] text-white shadow-lg shadow-[#58A6FF]/25'
                : 'bg-[#161b22] text-[#8b949e] hover:text-white border border-[#30363d]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const projectTarget = project.slug || project.id;
              return (
                <div 
                  key={project.id} 
                  className="ss-card overflow-hidden group flex flex-col hover:border-[#58A6FF]/40 transition-colors"
                >
                  {/* Image container */}
                  <div 
                    className="h-48 overflow-hidden relative cursor-pointer"
                    onClick={() => handleCardClick(projectTarget)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0d1117]/80 text-[#58A6FF] border border-[#30363d] backdrop-blur-sm">
                      Case Study
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-display font-bold text-white mb-2 hover:text-[#58A6FF] transition-colors">
                        <Link 
                          to={`/portfolio/${projectTarget}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                          {project.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-[#8b949e] leading-relaxed mb-5">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d] uppercase font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-[#30363d]/60 flex items-center justify-between">
                        <Link
                          to={`/portfolio/${projectTarget}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="text-xs font-semibold text-[#58A6FF] hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight size={13} />
                        </Link>

                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-[#8b949e] hover:text-[#58A6FF] inline-flex items-center gap-1 transition-colors"
                            title="Open live site"
                          >
                            <span>Live Site</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center p-16 ss-card border-dashed">
            <p className="text-[#8b949e]">No projects found in this category yet.</p>
          </div>
        )}

        {/* Cross-linking Hubs Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-2xl bg-[#161b22]/70 border border-[#30363d] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center mb-4">
                <CodeXml size={20} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">
                Need a Custom Build?
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                Explore our full spectrum of 7 specialized services from custom React development to UI/UX and SEO.
              </p>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
            >
              <span>Explore all services</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#161b22]/70 border border-[#30363d] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">
                Central India Delivery
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                Learn how our Gwalior engineering headquarters serves local business leaders with on-site accountability.
              </p>
            </div>
            <Link
              to="/gwalior"
              className="text-xs font-semibold text-[#34D399] hover:underline flex items-center gap-1"
            >
              <span>Visit Gwalior agency hub</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#161b22]/70 border border-[#30363d] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">
                Transparent Pricing
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                Unsure what an enterprise or business website costs in India? Read our complete transparent pricing breakdown.
              </p>
            </div>
            <Link
              to="/blog/how-much-does-a-website-cost"
              className="text-xs font-semibold text-[#8B5CF6] hover:underline flex items-center gap-1"
            >
              <span>Read website pricing guide</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
