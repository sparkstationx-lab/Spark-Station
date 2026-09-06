import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Briefcase, 
  CheckCircle2, 
  User, 
  Phone, 
  ExternalLink,
  Award,
  Sparkles,
  Github
} from 'lucide-react';
import { TEAM } from '../data/agencyData';
import { SEO } from '../components/SEO';
import { PageRoute } from '../types';
import { LinkedInBadge } from '../components/LinkedInBadge';

interface TeamMemberProfilePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const TeamMemberProfilePage: React.FC<TeamMemberProfilePageProps> = ({ onRouteChange }) => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Resolve slug either from useParams (e.g. /team/:slug) or from pathname (e.g. /manas)
  const resolvedSlug = slug || pathname.split('/').filter(Boolean).pop();

  // Find the team member by slug
  const member = TEAM.find(m => m.slug === resolvedSlug);

  // Scroll to top when the component loads or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [resolvedSlug]);

  if (!member) {
    // If team member doesn't exist, render a beautiful 404/not found state
    return (
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 z-10">
        <div className="ambient-glow opacity-30" />
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          Profile Not Found
        </h1>
        <p className="text-base text-[#8b949e] max-w-md mb-8 leading-relaxed">
          The team member profile you are looking for doesn't exist or has been relocated.
        </p>
        <button
          onClick={() => {
            onRouteChange('team');
            navigate('/team');
          }}
          className="btn-primary"
        >
          <ArrowLeft size={16} />
          <span>Back to Team</span>
        </button>
      </div>
    );
  }

  // Construct Person Schema JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "Organization",
      "name": "Spark Station",
      "url": "https://spark-station-2.vercel.app/"
    },
    "description": member.bio,
    "image": "https://spark-station-2.vercel.app" + member.avatarUrl,
    ...(member.socials?.email && { "email": member.socials.email }),
    "url": "https://spark-station-2.vercel.app" + `/${member.slug}`
  };

  const hasSocials = member.socials && Object.values(member.socials).some(Boolean);

  return (
    <div className="relative min-h-screen py-10 md:py-16 overflow-x-hidden">
      <SEO 
        title={`${member.name} | ${member.role} of Spark Station`}
        description={member.bio || `Official profile of ${member.name}, ${member.role} at Spark Station.`}
        path={`/${member.slug}`}
        ogType="profile"
        ogImage={"https://spark-station-2.vercel.app" + member.avatarUrl}
        schemaMarkup={personSchema}
      />
      
      {/* Background radial glow utilizing the member's unique color */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[120px] opacity-15 transition-all duration-1000"
        style={{ backgroundColor: member.color }}
      />
      <div className="ambient-glow" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => {
              onRouteChange('team');
              navigate('/team');
            }}
            className="group flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#8b949e] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Team</span>
          </button>
        </motion.div>

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="ss-card p-6 sm:p-10 md:p-12 mb-8 overflow-hidden relative bg-gradient-to-br from-[#161b22] to-[#0d1117]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-[70px] pointer-events-none"
               style={{ backgroundColor: `${member.color}10` }} />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            {/* Large Profile Image */}
            <div className="relative group/avatar shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-50 blur-md transition duration-500 group-hover/avatar:opacity-75"
                   style={{ backgroundImage: `linear-gradient(135deg, ${member.color} 0%, #8B5CF6 100%)` }} />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-[#21262d] border border-[#30363d]">
                <img 
                  src={member.avatarUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover/avatar:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Profile Hero Information */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md mb-4"
                   style={{ background: `${member.color}15`, borderColor: `${member.color}40`, color: '#ffffff' }}>
                <Sparkles size={12} style={{ color: member.color }} />
                <span>{member.role}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
                {member.name}
              </h1>

              <p className="text-base sm:text-lg text-[#8b949e] font-mono leading-relaxed mb-6 max-w-xl"
                 style={{ color: `${member.color}dd` }}>
                {member.tagline || member.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#21262d] border border-[#30363d] text-[#c9d1d9]">
                  Experience: <strong className="text-white font-medium">{member.experience}</strong>
                </span>
                
                {member.contact && !member.contact.startsWith('founder') && (
                  <a 
                    href={member.contact}
                    className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#c9d1d9] hover:text-white transition-colors"
                  >
                    {member.contact.startsWith('tel') ? <Phone size={13} /> : <ExternalLink size={13} />}
                    <span>Get in Touch</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* TWO-COLUMN DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* LEFT/MAIN DETAILS (2/3 columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ss-card p-6 sm:p-8 bg-[#161b22]/70"
            >
              <div className="flex items-center gap-2.5 mb-5 border-b border-[#30363d]/40 pb-3">
                <User size={18} className="text-[#58A6FF]" style={{ color: member.color }} />
                <h2 className="text-lg font-display font-bold text-white">About Me</h2>
              </div>
              <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed whitespace-pre-line">
                {member.aboutLong || member.bio || "Biography details are currently being updated by our digital crafts team."}
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ss-card p-6 sm:p-8 bg-[#161b22]/70"
            >
              <div className="flex items-center gap-2.5 mb-5 border-b border-[#30363d]/40 pb-3">
                <Briefcase size={18} className="text-[#58A6FF]" style={{ color: member.color }} />
                <h2 className="text-lg font-display font-bold text-white">Professional History</h2>
              </div>
              
              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#30363d]">
                {member.experienceList && member.experienceList.length > 0 ? (
                  member.experienceList.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute left-[5px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0d1117] border-2 group-hover:scale-110 transition-transform duration-300"
                           style={{ borderColor: member.color }} />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-base font-bold text-white group-hover:text-[#58A6FF] transition-colors"
                            style={{ '--hover-color': member.color } as React.CSSProperties}>
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-[#8b949e] shrink-0 bg-[#21262d] px-2 py-0.5 rounded border border-[#30363d]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-white/70 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-xs text-[#8b949e] leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  // Placeholder history
                  <div className="relative pl-8">
                    <div className="absolute left-[5px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0d1117] border-2 border-[#8b949e]" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-base font-bold text-white">{member.role}</h3>
                      <span className="text-xs font-mono text-[#8b949e] shrink-0">Present</span>
                    </div>
                    <p className="text-xs font-mono text-white/70 mb-2">Spark Station</p>
                    <p className="text-xs text-[#8b949e] leading-relaxed">
                      Delivering strategic digital systems, high-quality development setups, and project architecture with the core team.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE DETAILS (1/3 column) */}
          <div className="space-y-8">
            
            {/* Skills & Expertises */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ss-card p-6 bg-[#161b22]/70"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-4 pb-2 border-b border-[#30363d]/40">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, sIdx) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={sIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border border-[#30363d] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ss-card p-6 bg-[#161b22]/70"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-4 pb-2 border-b border-[#30363d]/40">
                Responsibilities
              </h3>
              <ul className="space-y-3">
                {(member.responsibilities && member.responsibilities.length > 0 ? member.responsibilities : [
                  "Managing strategic deliverables",
                  "Collaborating with the design/development squads",
                  "Ensuring exceptional project quality"
                ]).map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[#c9d1d9]">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: member.color }} />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact Card */}
            {(hasSocials || member.socials?.email) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="ss-card p-6 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d]/80 hover:border-[#58A6FF]/20"
                style={{ hoverBorderColor: `${member.color}33` } as React.CSSProperties}
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8b949e] mb-4 pb-2 border-b border-[#30363d]/40">
                  Connect
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {/* Email */}
                  {member.socials?.email && (
                    <a 
                      href={`mailto:${member.socials.email}`}
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] flex items-center justify-center text-[#c9d1d9] hover:text-white transition-all hover:-translate-y-1"
                      title={`Email ${member.name}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}

                  {/* LinkedIn */}
                  {member.socials?.linkedin && (
                    <a 
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#0A66C2]/15 border border-[#30363d] hover:border-[#0A66C2]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#0A66C2] transition-all hover:-translate-y-1"
                      title="LinkedIn"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {/* Twitter */}
                  {member.socials?.twitter && (
                    <a 
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-white/10 border border-[#30363d] hover:border-white/30 flex items-center justify-center text-[#c9d1d9] hover:text-white transition-all hover:-translate-y-1"
                      title="Twitter"
                      aria-label="Twitter profile"
                    >
                      <Twitter size={18} />
                    </a>
                  )}

                  {/* Instagram */}
                  {member.socials?.instagram && (
                    <a 
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#E1306C]/15 border border-[#30363d] hover:border-[#E1306C]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#E1306C] transition-all hover:-translate-y-1"
                      title="Instagram"
                      aria-label="Instagram profile"
                    >
                      <Instagram size={18} />
                    </a>
                  )}

                  {/* Snapchat */}
                  {member.socials?.snapchat && (
                    <a 
                      href={member.socials.snapchat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#FFFC00]/15 border border-[#30363d] hover:border-[#FFFC00]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#FFFC00] transition-all hover:-translate-y-1"
                      title="Snapchat"
                      aria-label="Snapchat profile"
                    >
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2c-3.9 0-7 3.1-7 7a1 1 0 00.5.9c.7.4 1.2.9 1.5 1.6l.4.9c.1.3 0 .7-.3.9-.7.4-1.1.9-1.1 1.7 0 .6.4 1.1 1 1.3l.5.2c.2.1.3.4.2.6a4.2 4.2 0 00-.5 2.1c0 2 2.2 3.8 5.3 3.8 3 0 5.3-1.8 5.3-3.8 0-.8-.1-1.5-.5-2.1l-.1-.5c0-.2.1-.5.3-.6l.5-.2c.6-.2 1-.7 1-1.3 0-.8-.4-1.3-1.1-1.7a.8.8 0 01-.3-.9c.1-.3.3-.6.5-.9.3-.7.8-1.2 1.5-1.6a1 1 0 00.4-.9c0-3.9-3.1-7-7-7z" />
                      </svg>
                    </a>
                  )}

                  {/* WhatsApp */}
                  {member.socials?.whatsapp && (
                    <a 
                      href={member.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#25D366]/15 border border-[#30363d] hover:border-[#25D366]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#25D366] transition-all hover:-translate-y-1"
                      title="WhatsApp"
                      aria-label="WhatsApp chat"
                    >
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.763.456 3.486 1.321 5.016l-1.405 5.127 5.244-1.376c1.478.807 3.136 1.233 4.844 1.233 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm6.657 13.914c-.274.773-1.394 1.408-1.921 1.488-.475.071-.97.098-1.57-.101-.6-.2-2.583-.984-4.945-3.092-1.96-1.75-3.23-3.915-3.614-4.576-.385-.662-.41-1.127-.122-1.465.15-.175.324-.374.486-.562.162-.187.216-.312.324-.525.108-.212.054-.4-.027-.562-.08-.162-.729-1.757-.999-2.41-.262-.637-.53-.55-.729-.56-.188-.01-.405-.01-.62-.01-.216 0-.568.081-.865 1.135-.297 1.054-1.135 2.62-1.135 2.836 0 .216.189.405.432.568.243.162 2.27 3.457 5.497 4.86.768.334 1.368.533 1.836.685.772.245 1.474.21 2.03.127.62-.092 1.923-.787 2.193-1.545.27-1.546.27-1.405.189-1.545-.081-.14-.3-.216-.62-.379l-2.92-1.432c-.324-.162-.562-.08-.756.162l-.973 1.189c-.189.243-.432.27-.756.108-.324-.162-1.368-.505-2.607-1.614z" />
                      </svg>
                    </a>
                  )}

                  {/* GitHub */}
                  {member.socials?.github && (
                    <a 
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-white/10 border border-[#30363d] hover:border-white/30 flex items-center justify-center text-[#c9d1d9] hover:text-white transition-all hover:-translate-y-1"
                      title="GitHub"
                      aria-label="GitHub profile"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <p className="text-[10px] text-[#8b949e] font-mono mt-4 leading-normal">
                  Response within 24 hours guaranteed.
                </p>
              </motion.div>
            )}

            {/* LinkedIn Profile Badge for Saksham */}
            {member.slug === 'saksham-pandey' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="ss-card p-6 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#0A66C2]/30 hover:border-[#0A66C2]/60 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#30363d]/40">
                  <div className="flex items-center gap-2">
                    <Linkedin size={16} className="text-[#0A66C2]" />
                    <h3 className="text-xs font-mono uppercase tracking-widest text-white">
                      LinkedIn Profile
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A66C2] px-2 py-0.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 font-semibold">
                    Verified
                  </span>
                </div>
                
                <div className="flex justify-center items-center py-2 bg-[#0d1117]/80 rounded-xl border border-[#30363d]/40 min-h-[290px]">
                  <LinkedInBadge 
                    vanity="sakshampandeyin"
                    name="saksham pandey"
                    profileUrl="https://in.linkedin.com/in/sakshampandeyin?trk=profile-badge"
                    theme="dark"
                    size="medium"
                    type="VERTICAL"
                  />
                </div>
              </motion.div>
            )}

          </div>

        </div>

        {/* BOTTOM CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="ss-card p-8 md:p-10 text-center bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d]/80 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full filter blur-[80px] pointer-events-none opacity-5"
               style={{ backgroundColor: member.color }} />
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
            Want to collaborate on a premium web solution?
          </h3>
          <p className="text-xs sm:text-sm text-[#8b949e] max-w-lg mx-auto mb-6">
            Get in touch with Spark Station. Let our specialized squad bring your digital ideas to life securely and gracefully.
          </p>
          <button
            onClick={() => {
              onRouteChange('contact');
              navigate('/contact');
            }}
            className="btn-primary !py-2.5 !px-6 text-xs inline-flex items-center gap-2"
          >
            <Award size={14} />
            <span>Consult our Specialists</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
};
