import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { PageRoute } from '../types';
import { AGENCY_INFO, PROJECTS } from '../data/agencyData';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

interface PortfolioPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onRouteChange }) => {
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
    "@type": "CreativeWork",
    "name": "Spark Station Portfolio",
    "description": "Explore our web development portfolio, custom software development case studies, UI/UX designs, and corporate brand assets delivered with pixel precision.",
    "creator": {
      "@type": "Organization",
      "name": "Spark Station",
      "url": "https://spark-station-2.vercel.app/"
    }
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden">
      <SEO 
        title="Our Work, Web Projects &amp; UI/UX Case Studies | Spark Station"
        description="Explore our web development portfolio, custom software development case studies, UI/UX designs, and corporate brand assets delivered with pixel precision."
        path="/portfolio"
        schemaMarkup={portfolioSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <span className="section-label mb-6">
          <Sparkles size={14} className="text-[#58A6FF]" />
          <span>Showcase</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Real Projects, <span className="gradient-text">Real Results</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          A selection of websites, applications, and digital products we've built for our clients.
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
            {filteredProjects.map((project) => (
              <div key={project.id} className="ss-card overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-4 flex-grow">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d] uppercase font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#58A6FF] hover:text-white">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-16 ss-card border-dashed">
            <p className="text-[#8b949e]">No projects found in this category yet.</p>
          </div>
        )}
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
