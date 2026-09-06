import React from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Terminal, 
  Cpu, 
  Award, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Compass, 
  ArrowRight,
  CodeXml,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  Flame,
  Globe,
  Github
} from 'lucide-react';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { LinkedInBadge } from '../components/LinkedInBadge';

interface FounderPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onRouteChange }) => {
  
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saksham Pandey",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Spark Station",
      "url": "https://spark-station-2.vercel.app/"
    },
    "description": "Saksham Pandey is the Founder & CEO of Spark Station, an expert Web Developer and Cybersecurity Enthusiast with 4+ years of digital experience. Based in Gwalior, India.",
    "image": "https://spark-station-2.vercel.app/saksham.png",
    "email": "sparkstation.x@gmail.com",
    "url": "https://spark-station-2.vercel.app/saksham-pandey",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gwalior",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://in.linkedin.com/in/sakshampandeyin",
      "https://www.instagram.com/sakshampandey.x/",
      "https://x.com/crazy_saksham",
      "https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN",
      "https://wa.me/919111376314"
    ]
  };

  const skillsList = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "SEO", category: "marketing" },
    { name: "Responsive Design", category: "design" },
    { name: "UI/UX", category: "design" },
    { name: "Performance Optimization", category: "marketing" },
    { name: "Linux", category: "security" },
    { name: "Python", category: "security" },
    { name: "Networking", category: "security" },
    { name: "Cybersecurity", category: "security" },
    { name: "Ethical Hacking", category: "security" },
    { name: "Git", category: "backend" },
    { name: "GitHub", category: "backend" },
    { name: "AI Tools", category: "marketing" }
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden">
      <SEO 
        title="Saksham Pandey | Founder of Spark Station | Web Developer"
        description="Official profile of Saksham Pandey, Founder of Spark Station, Web Developer and Cybersecurity Enthusiast."
        path="/saksham-pandey"
        ogType="profile"
        schemaMarkup={founderSchema}
      />
      {/* Decorative premium ambient glow backgrounds matching site branding */}
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-[#58A6FF]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[200px] right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Navigation Breadcrumb / Label */}
        <div className="mb-10 flex items-center justify-between">
          <button 
            onClick={() => onRouteChange('team')}
            className="group flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to Team section"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>Back to Team</span>
          </button>
          
          <span className="section-label">
            <Sparkles size={12} className="text-[#58A6FF]" />
            <span>Executive Portfolio</span>
          </span>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* CARD 1: HERO PROFILE CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-hero-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between relative overflow-hidden group border-[#58A6FF]/20 shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.95) 0%, rgba(13, 17, 23, 0.95) 100%)'
            }}
          >
            {/* Ambient subtle animation element */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#58A6FF]/10 rounded-full filter blur-[50px] group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-[50px] group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="relative z-10">
              {/* Profile Header Image and Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#58A6FF]/40 shadow-xl relative bg-[#21262d]">
                  <img 
                    src="/saksham.png" 
                    alt="Saksham Pandey Founder of Spark Station" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#58A6FF]/10 border border-[#58A6FF]/30 text-xs text-[#58A6FF] font-semibold font-mono uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF] animate-pulse"></span>
                    Founder & CEO
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none mb-2">
                    Saksham Pandey
                  </h1>
                  <h2 className="text-sm font-medium text-[#8b949e]">
                    Founder & CEO of Spark Station
                  </h2>
                </div>
              </div>

              {/* Sub-roles / Focus */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                  <CodeXml size={16} className="text-[#58A6FF]" />
                  <span>Web Developer</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                  <Shield size={16} className="text-[#8B5CF6]" />
                  <span>Cybersecurity Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Location & Metadata footer */}
            <div className="relative z-10 pt-6 border-t border-[#30363d]/50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e]">
                <MapPin size={14} className="text-[#f778ba]" />
                <span>Gwalior, MP, India</span>
              </div>
              <span className="text-[10px] font-mono text-[#8b949e] px-2 py-1 rounded bg-[#0d1117] border border-[#30363d]">
                26.2183° N, 78.1828° E
              </span>
            </div>
          </div>

          {/* CARD 2: ABOUT CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-about-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#30363d]/50">
                <Compass size={18} className="text-[#8B5CF6]" />
                <h2 className="text-xl font-display font-bold text-white">About Me</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#c9d1d9] leading-relaxed font-sans">
                <p>
                  I am Saksham Pandey, Founder of Spark Station.
                </p>
                <p>
                  I have been building modern, responsive business websites for the past <strong className="text-white font-semibold">18 months</strong>, helping businesses establish a strong digital presence through clean design, performance, and conversion-focused development.
                </p>
                <p>
                  Alongside web development, I have been passionately exploring <strong className="text-white font-semibold">Cybersecurity for over 4 years</strong>, continuously learning ethical hacking, Linux, networking, and security best practices.
                </p>
                <p className="text-sm text-[#8b949e]">
                  My goal is to build high-quality digital products while creating a trusted technology brand that businesses can rely on.
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8b949e]">Est. 18 Months Web Dev</span>
              <span className="text-xs font-mono text-[#8b949e]">4+ Years InfoSec</span>
            </div>
          </div>

          {/* CARD 3: EXPERIENCE STATS CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-experience-card"
            className="lg:col-span-1 ss-card p-6 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80 hover:border-[#8B5CF6]/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#8b949e]">Experience</h2>
              <Terminal size={16} className="text-[#8B5CF6]" />
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-1.5 text-[#58A6FF] text-xs font-bold mb-1 uppercase tracking-wider">
                  <span>💻 Web Dev</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-white">
                  18+ Months
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[#f778ba] text-xs font-bold mb-1 uppercase tracking-wider">
                  <span>🔐 Cybersecurity</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-white">
                  4+ Years
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: LOCATION MAP/TEXT CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-location-card"
            className="lg:col-span-1 ss-card p-6 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80 hover:border-[#f778ba]/50 bg-gradient-to-br from-[#161b22] to-[#0d1117]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[32px] select-none" role="img" aria-label="Map pointer">📍</span>
              <Globe size={18} className="text-[#f778ba] opacity-60 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                Gwalior
              </h3>
              <p className="text-sm font-semibold text-[#8b949e] mt-1">
                Madhya Pradesh
              </p>
              <p className="text-xs text-[#8b949e]/80 font-mono tracking-wider mt-0.5">
                India
              </p>
            </div>
          </div>

          {/* CARD 5: ACHIEVEMENTS TIMELINE CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-achievements-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between border-[#30363d]/80"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#30363d]/50">
                <Award size={18} className="text-[#34D399]" />
                <h2 className="text-xl font-display font-bold text-white">Achievements</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    ✨
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#34D399] transition-colors">
                      Founder of Spark Station
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Established and scale a forward-thinking digital agency delivering clean development & top performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#58A6FF]/10 border border-[#58A6FF]/30 flex items-center justify-center text-[#58A6FF] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    🌐
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#58A6FF] transition-colors">
                      Successful Website Launches
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Developed multiple highly performant, fully responsive custom business sites for global clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    🛡️
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#8B5CF6] transition-colors">
                      4+ Years Cybersecurity Focus
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Rigorous study and training in network penetration testing, Linux configuration, and ethical hacking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#f778ba]/10 border border-[#f778ba]/30 flex items-center justify-center text-[#f778ba] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    💡
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#f778ba] transition-colors">
                      Client-Centric Problem Solver
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Translating complex real-world business constraints into highly efficient digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#8b949e] italic pt-4 mt-4 border-t border-[#30363d]/30">
              Continuously iterating & learning new stacks.
            </div>
          </div>

          {/* CARD 6: COMPREHENSIVE SKILLS TAGS CARD (lg:col-span-2, lg:row-span-1) */}
          <div 
            id="founder-skills-card"
            className="lg:col-span-2 ss-card p-6 flex flex-col justify-between border-[#30363d]/80 hover:border-[#58A6FF]/30"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={16} className="text-[#58A6FF]" />
                <h2 className="text-sm font-display font-bold text-white uppercase tracking-wider">Skills & Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, sIdx) => {
                  let colorClass = "border-[#30363d] text-[#c9d1d9] bg-[#161b22]";
                  if (skill.category === "security") {
                    colorClass = "border-[#8B5CF6]/30 text-[#A371F7] bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/60";
                  } else if (skill.category === "frontend") {
                    colorClass = "border-[#58A6FF]/30 text-[#58A6FF] bg-[#58A6FF]/5 hover:border-[#58A6FF]/60";
                  } else if (skill.category === "design") {
                    colorClass = "border-[#f778ba]/30 text-[#f778ba] bg-[#f778ba]/5 hover:border-[#f778ba]/60";
                  } else if (skill.category === "marketing") {
                    colorClass = "border-[#34D399]/30 text-[#34D399] bg-[#34D399]/5 hover:border-[#34D399]/60";
                  }
                  
                  return (
                    <span 
                      key={sIdx}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-default ${colorClass}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CARD 7: FOUNDER VISION CARD (lg:col-span-2, lg:row-span-1) */}
          <div 
            id="founder-vision-card"
            className="lg:col-span-2 ss-card p-6 flex flex-col justify-between relative overflow-hidden border-[#30363d]/80 hover:border-[#34D399]/30 bg-gradient-to-r from-[#161b22] to-[#21262d]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D399]/5 rounded-full filter blur-[30px]" />
            <div className="flex items-center gap-2 mb-3">
              <Flame size={16} className="text-[#34D399]" />
              <h2 className="text-sm font-display font-bold text-white uppercase tracking-wider">My Vision</h2>
            </div>
            <p className="text-base sm:text-lg font-display font-semibold italic text-[#c9d1d9] leading-relaxed relative z-10">
              "Building one of India's most trusted digital agencies while continuously advancing in cybersecurity and modern web technologies."
            </p>
            <div className="text-right mt-4 relative z-10">
              <span className="text-xs font-mono text-[#34D399] font-bold">— Saksham Pandey</span>
            </div>
          </div>

          {/* CARD 8: OFFICIAL LINKEDIN BADGE CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-linkedin-badge-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-[#0A66C2]/30 hover:border-[#0A66C2]/60 bg-gradient-to-br from-[#161b22] to-[#0d1117] transition-all duration-300 group shadow-xl"
          >
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#0A66C2]/10 rounded-full filter blur-[45px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#30363d]/50">
                <div className="flex items-center gap-2">
                  <Linkedin size={18} className="text-[#0A66C2]" />
                  <h2 className="text-sm font-display font-bold text-white uppercase tracking-wider">LinkedIn Verified Profile</h2>
                </div>
                <span className="text-[10px] font-mono text-[#0A66C2] px-2.5 py-0.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] animate-pulse" />
                  Official Badge
                </span>
              </div>

              {/* Live Official LinkedIn Profile Badge */}
              <div className="my-2 flex justify-center items-center py-2 bg-[#0d1117]/80 rounded-xl border border-[#30363d]/50 min-h-[290px]">
                <LinkedInBadge 
                  vanity="sakshampandeyin"
                  name="saksham pandey"
                  profileUrl="https://in.linkedin.com/in/sakshampandeyin?trk=profile-badge"
                  theme="dark"
                  size="medium"
                  type="VERTICAL"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#30363d]/40 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8b949e]">in/sakshampandeyin</span>
              <a 
                href="https://in.linkedin.com/in/sakshampandeyin?trk=profile-badge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#58A6FF] hover:text-white flex items-center gap-1.5 font-medium transition-colors group/link"
              >
                <span>View Full Profile</span>
                <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 9: CONTACT LINKS CARD (lg:col-span-2, lg:row-span-1) */}
          <div 
            id="founder-contact-card"
            className="lg:col-span-2 ss-card p-6 flex flex-col justify-between border-[#30363d]/80 hover:border-[#58A6FF]/40 bg-gradient-to-br from-[#161b22] to-[#0d1117] transition-all duration-300 relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#58A6FF]/5 rounded-full filter blur-[35px] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#30363d]/40">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[#58A6FF]" />
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#8b949e]">Connect with me</h2>
              </div>
              <span className="text-[10px] font-mono text-[#34D399] px-2 py-0.5 rounded-full bg-[#34D399]/10 border border-[#34D399]/20">
                ● Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-auto">
              <div>
                <p className="text-sm text-[#c9d1d9] leading-relaxed">
                  Have a question, a project idea, or a security query? Let's build a secure and premium digital solution together.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#8b949e]">
                    <Mail size={13} className="text-[#58A6FF]" />
                    <a href="mailto:sparkstation.x@gmail.com" className="hover:text-white hover:underline transition-colors">
                      sparkstation.x@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#8b949e]">
                    <MapPin size={13} className="text-[#f778ba]" />
                    <span>Gwalior, Madhya Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 md:justify-end">
                {/* Email Button */}
                <a 
                  href="mailto:sparkstation.x@gmail.com"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#58A6FF]/10 border border-[#30363d] hover:border-[#58A6FF]/40 text-xs font-medium text-[#c9d1d9] hover:text-[#58A6FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(88,166,255,0.15)] focus:outline-none focus:ring-2 focus:ring-[#58A6FF] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="Email: sparkstation.x@gmail.com"
                  aria-label="Send email to sparkstation.x@gmail.com"
                >
                  <Mail size={15} />
                  <span className="font-mono">sparkstation.x@gmail.com</span>
                </a>

                {/* LinkedIn Button */}
                <a 
                  href="https://in.linkedin.com/in/sakshampandeyin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#0A66C2]/15 border border-[#30363d] hover:border-[#0A66C2]/40 text-xs font-medium text-[#c9d1d9] hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(10,102,194,0.15)] focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="LinkedIn: Saksham Pandey"
                  aria-label="Open LinkedIn profile"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>

                {/* Instagram Button */}
                <a 
                  href="https://www.instagram.com/sakshampandey.x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#E1306C]/15 border border-[#30363d] hover:border-[#E1306C]/40 text-xs font-medium text-[#c9d1d9] hover:text-[#E1306C] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(225,48,108,0.15)] focus:outline-none focus:ring-2 focus:ring-[#E1306C] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="Instagram: @sakshampandey.x"
                  aria-label="Open Instagram profile"
                >
                  <Instagram size={15} />
                  <span>Instagram</span>
                </a>

                {/* X / Twitter Button */}
                <a 
                  href="https://x.com/crazy_saksham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-white/10 border border-[#30363d] hover:border-white/30 text-xs font-medium text-[#c9d1d9] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="X (Twitter): @crazy_saksham"
                  aria-label="Open X profile"
                >
                  <Twitter size={15} />
                  <span>X (Twitter)</span>
                </a>

                {/* Snapchat Button */}
                <a 
                  href="https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#FFFC00]/15 border border-[#30363d] hover:border-[#FFFC00]/40 text-xs font-medium text-[#c9d1d9] hover:text-[#FFFC00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,252,0,0.15)] focus:outline-none focus:ring-2 focus:ring-[#FFFC00] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="Snapchat: @sakshampande.x"
                  aria-label="Open Snapchat profile"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c-3.9 0-7 3.1-7 7a1 1 0 00.5.9c.7.4 1.2.9 1.5 1.6l.4.9c.1.3 0 .7-.3.9-.7.4-1.1.9-1.1 1.7 0 .6.4 1.1 1 1.3l.5.2c.2.1.3.4.2.6a4.2 4.2 0 00-.5 2.1c0 2 2.2 3.8 5.3 3.8 3 0 5.3-1.8 5.3-3.8 0-.8-.1-1.5-.5-2.1l-.1-.5c0-.2.1-.5.3-.6l.5-.2c.6-.2 1-.7 1-1.3 0-.8-.4-1.3-1.1-1.7a.8.8 0 01-.3-.9c.1-.3.3-.6.5-.9.3-.7.8-1.2 1.5-1.6a1 1 0 00.4-.9c0-3.9-3.1-7-7-7z" />
                  </svg>
                  <span>Snapchat</span>
                </a>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/919111376314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#25D366]/15 border border-[#30363d] hover:border-[#25D366]/40 text-xs font-medium text-[#c9d1d9] hover:text-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(37,211,102,0.15)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="WhatsApp: Chat with Saksham"
                  aria-label="Message Saksham on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.763.456 3.486 1.321 5.016l-1.405 5.127 5.244-1.376c1.478.807 3.136 1.233 4.844 1.233 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm6.657 13.914c-.274.773-1.394 1.408-1.921 1.488-.475.071-.97.098-1.57-.101-.6-.2-2.583-.984-4.945-3.092-1.96-1.75-3.23-3.915-3.614-4.576-.385-.662-.41-1.127-.122-1.465.15-.175.324-.374.486-.562.162-.187.216-.312.324-.525.108-.212.054-.4-.027-.562-.08-.162-.729-1.757-.999-2.41-.262-.637-.53-.55-.729-.56-.188-.01-.405-.01-.62-.01-.216 0-.568.081-.865 1.135-.297 1.054-1.135 2.62-1.135 2.836 0 .216.189.405.432.568.243.162 2.27 3.457 5.497 4.86.768.334 1.368.533 1.836.685.772.245 1.474.21 2.03.127.62-.092 1.923-.787 2.193-1.545.27-1.546.27-1.405.189-1.545-.081-.14-.3-.216-.62-.379l-2.92-1.432c-.324-.162-.562-.08-.756.162l-.973 1.189c-.189.243-.432.27-.756.108-.324-.162-1.368-.505-2.607-1.614z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                {/* GitHub Button */}
                <a 
                  href="https://github.com/protechnicalguruji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#21262d] hover:bg-[#24292e]/40 border border-[#30363d] hover:border-[#58A6FF]/40 text-xs font-medium text-[#c9d1d9] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-[#58A6FF] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  title="GitHub: @protechnicalguruji"
                  aria-label="Open GitHub profile"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="text-[10px] text-[#8b949e] font-mono leading-none pt-4 mt-4 border-t border-[#30363d]/30">
              Response time within 24 hours guaranteed.
            </div>
          </div>

          {/* CARD 10: DYNAMIC CTA CARD (lg:col-span-4, lg:row-span-1) */}
          <div 
            id="founder-cta-card"
            className="lg:col-span-4 ss-card p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden border-[#58A6FF]/25 bg-gradient-to-r from-[#161b22] to-[#1f2937]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(88,166,255,0.05)_0%,rgba(139,92,246,0.05)_100%)]" />
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mb-2">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-sm text-[#8b949e] max-w-xl">
                Ready to elevate your digital presence? Reach out to schedule a technical and strategic consultation.
              </p>
            </div>
            
            <button
              onClick={() => onRouteChange('contact')}
              className="btn-primary shrink-0 relative z-10 group shadow-lg shadow-[#58A6FF]/20"
            >
              <span>Work With Me</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
