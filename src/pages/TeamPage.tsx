import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ExternalLink, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { TEAM, AGENCY_INFO } from '../data/agencyData';
import { PageRoute } from '../types';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';

interface TeamPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Spark Station Team",
    "description": "Get to know the senior engineers, visual designers, and digital strategists at Spark Station.",
    "itemListElement": TEAM.map((member, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "image": `https://spark-station-2.vercel.app${member.avatarUrl}`,
        "url": `https://spark-station-2.vercel.app/${member.slug}`
      }
    }))
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden">
      <SEO 
        title="Meet Our Expert Web Creators &amp; Specialists | Spark Station"
        description="Get to know the senior engineers, visual designers, and digital strategists at Spark Station. We build premium React sites, UI/UX designs, and growth campaigns."
        path="/team"
        schemaMarkup={teamSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="section-label mb-6">
          <Users size={14} />
          <span>The People</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          A Small But Mighty Team of <span className="gradient-text">Specialists</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Dedicated to your digital success. We don't outsource or hand you over to junior account managers. You work directly with the experts building your product.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, mIdx) => (
            <div
              key={mIdx}
              onClick={() => {
                navigate(`/${member.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="ss-card overflow-hidden flex flex-col justify-between group hover:border-[#58A6FF]/40 cursor-pointer border-[#30363d]/80 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
            >
              <div>
                <div className="h-72 overflow-hidden relative bg-[#21262d]">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold border backdrop-blur-md"
                      style={{ background: `${member.color}20`, borderColor: `${member.color}60`, color: '#ffffff' }}
                    >
                      {member.role}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0d1117]/80 text-[#8b949e] border border-[#30363d]">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8b949e] block mb-2.5">
                      Core Expertise
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-[#21262d] text-[#c9d1d9] border border-[#30363d]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-7 pb-7 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/${member.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all border no-underline cursor-pointer"
                  style={{
                    background: member.slug === 'saksham-pandey'
                      ? 'linear-gradient(135deg, rgba(88,166,255,0.15) 0%, rgba(139,92,246,0.15) 100%)'
                      : `${member.color}15`,
                    color: member.color,
                    borderColor: member.slug === 'saksham-pandey'
                      ? 'rgba(88,166,255,0.35)'
                      : `${member.color}35`,
                  }}
                >
                  <Users size={16} />
                  <span>{member.slug === 'saksham-pandey' ? 'View Bento Profile' : 'View Profile'}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Callout */}
      <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <div className="ss-card p-10 sm:p-12 text-center bg-gradient-to-br from-[#161b22] to-[#0d1117]">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Want to Join the Team?
          </h3>
          <p className="text-base text-[#8b949e] max-w-xl mx-auto mb-8">
            We're always looking for talented developers, UI/UX craftspeople, and client strategists passionate about building high-standard digital products.
          </p>
          <button
            onClick={() => onRouteChange('contact')}
            className="btn-secondary !py-3.5 !px-8"
          >
            <span>Inquire About Joining the Team</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
