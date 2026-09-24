import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { Zap, MessageCircle, CodeXml, ArrowRight, CircleCheck, Layers, Award, Sparkles, MapPin, BookOpen, Briefcase } from 'lucide-react';
import { AGENCY_INFO, TRUSTED_BADGES, PROBLEMS, SOLUTIONS, PILLARS, SERVICES, PROJECTS, TEAM } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

// Sophisticated cubic-bezier easing curve for smooth agency slide-up reveals
const customEase = [0.22, 1, 0.36, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: customEase,
    },
  },
};

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sparkstation.vercel.app/#website",
        "url": "https://sparkstation.vercel.app/",
        "name": "Spark Station",
        "description": "Spark Station is a premium digital agency helping businesses grow through modern website development, UI/UX design, branding, SEO, and high-converting digital solutions.",
        "inLanguage": "en",
        "publisher": {
          "@id": "https://sparkstation.vercel.app/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://sparkstation.vercel.app/#organization",
        "name": "Spark Station",
        "url": "https://sparkstation.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sparkstation.vercel.app/favicon.png",
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
      <motion.section 
        className="pt-24 pb-20 relative z-10 text-center max-w-5xl mx-auto px-6"
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="section-label mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1, ease: customEase }
            }
          }}
        >
          <Sparkles size={14} className="text-[#A371F7]" />
          <span>Digital Solutions Agency</span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight text-white"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2, ease: customEase }
            }
          }}
        >
          We Build <span className="gradient-text">Digital Solutions</span>
          <br />
          That Work
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-[#8b949e] leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.35, ease: customEase }
            }
          }}
        >
          {AGENCY_INFO.subheadline}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.45, ease: customEase }
            }
          }}
        >
          <button
            onClick={() => onRouteChange('contact')}
            className="btn-primary text-base sm:text-lg !py-4 !px-8 shadow-xl shadow-[#58A6FF]/25 cursor-pointer"
          >
            <Zap size={20} />
            <span>Start Your Project</span>
          </button>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-base sm:text-lg !py-4 !px-8 hover:text-[#25D366] hover:border-[#25D366]/40 cursor-pointer"
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Trusted Badges Banner */}
        <motion.div 
          className="pt-12 border-t border-[#30363d]/80"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.55, ease: customEase }
            }
          }}
        >
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

          {/* Regional Hub Internal Link */}
          <div className="mt-8 text-center">
            <Link
              to="/gwalior"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#8b949e] hover:text-white bg-[#161b22]/90 border border-[#30363d] hover:border-[#58A6FF]/60 transition-all shadow-md group"
            >
              <MapPin size={14} className="text-[#58A6FF] group-hover:scale-110 transition-transform" />
              <span>
                Looking for digital engineering in Central India? Explore our dedicated <span className="text-[#58A6FF] underline underline-offset-4 font-semibold">Digital Agency in Gwalior</span> hub &rarr;
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Problem & Solution Comparison Section */}
      <motion.section 
        className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Problem */}
          <motion.div
            className="ss-card p-8 sm:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.05), rgba(22,27,34,1))',
              borderColor: 'rgba(239,68,68,0.3)',
            }}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, delay: 0.1, ease: customEase }
              }
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
          </motion.div>

          {/* Our Solution */}
          <motion.div
            className="ss-card p-8 sm:p-10 relative overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(88,166,255,0.08), rgba(139,92,246,0.08))',
              borderColor: 'rgba(88,166,255,0.4)',
            }}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, delay: 0.25, ease: customEase }
              }
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
          </motion.div>
        </div>
      </motion.section>

      {/* Core Services Preview */}
      <motion.section 
        className="py-24 max-w-7xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          variants={fadeInUp}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.slice(0, 6).map((srv, idx) => {
            const serviceSlug = srv.slug || 'web-development';
            return (
              <motion.div 
                key={srv.id} 
                className="ss-card p-8 flex flex-col justify-between group hover:border-[#58A6FF]/50 cursor-pointer"
                onClick={() => {
                  navigate(`/services/${serviceSlug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: idx * 0.08, ease: customEase }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
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
                  <span
                    className="text-xs font-semibold text-[#58A6FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore details</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <button
            onClick={() => onRouteChange('services')}
            className="btn-secondary !px-8 !py-3.5 text-sm cursor-pointer"
          >
            <span>View All 7 Specialized Services</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.section>

      {/* Featured Projects & Case Studies Section */}
      <motion.section 
        className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <motion.div variants={fadeInUp}>
            <span className="section-label mb-3">
              <Briefcase size={14} className="text-[#58A6FF]" />
              <span>Proven Deliverables</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              Featured Client <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-sm text-[#8b949e] max-w-xl">
              Real-world systems engineered by Spark Station for regional leaders and modern enterprises.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#58A6FF] hover:underline underline-offset-4"
            >
              <span>Explore All 11 Projects</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((proj, idx) => {
            const caseStudyUrl = `/portfolio/${proj.slug || proj.id}`;
            return (
              <motion.div
                key={proj.id}
                className="ss-card overflow-hidden flex flex-col justify-between group hover:border-[#58A6FF]/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: idx * 0.1, ease: customEase }
                  }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-[#161b22]">
                    <img
                      src={proj.image}
                      alt={`${proj.title} Web Application by Spark Station`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-[#0d1117]/80 text-[#58A6FF] border border-[#58A6FF]/30 backdrop-blur-sm font-mono">
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
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tags.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#30363d]/40 flex items-center justify-between">
                  <Link
                    to={caseStudyUrl}
                    className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#8b949e] hover:text-white transition-colors"
                  >
                    Live Preview &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* 4 Pillars Section */}
      <motion.section 
        className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Our Agency <span className="gradient-text">Pillars</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pil, idx) => (
            <motion.div 
              key={idx} 
              className="ss-card p-8 text-center bg-[#161b22]/50"
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, delay: idx * 0.1, ease: customEase }
                }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center mx-auto mb-5">
                <Icon name={pil.icon} size={26} />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2.5">
                {pil.title}
              </h4>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Snippet */}
      <motion.section 
        className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
          variants={fadeInUp}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.slice(0, 3).map((mbr, idx) => (
            <motion.div 
              key={idx} 
              className="ss-card overflow-hidden group"
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: idx * 0.12, ease: customEase }
                }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-60 overflow-hidden relative bg-[#21262d]">
                <img
                  src={mbr.avatarUrl}
                  alt={mbr.name}
                  referrerPolicy="no-referrer"
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Engineering Insights & Blog Section */}
      <motion.section 
        className="py-24 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <motion.div variants={fadeInUp}>
            <span className="section-label mb-3">
              <BookOpen size={14} className="text-[#8B5CF6]" />
              <span>Thought Leadership</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              Engineering &amp; Growth <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-sm text-[#8b949e] max-w-xl">
              Transparent analyses on website pricing, software architecture, conversion design, and business scale.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B5CF6] hover:underline underline-offset-4"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="ss-card p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-colors"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#8B5CF6]/15 text-[#A371F7] mb-4 inline-block">
                Pricing Guide
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors leading-snug">
                <Link to="/blog/how-much-does-a-website-cost">How Much Does a Website Cost? A Complete Pricing Guide</Link>
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-6">
                A transparent breakdown of website development costs in India. Learn realistic budgets for landing pages, business portals, and e-commerce.
              </p>
            </div>
            <Link
              to="/blog/how-much-does-a-website-cost"
              className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
            >
              <span>Read article</span>
              <ArrowRight size={12} />
            </Link>
          </motion.div>

          <motion.div
            className="ss-card p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-colors"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#58A6FF]/15 text-[#58A6FF] mb-4 inline-block">
                Conversion Strategy
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors leading-snug">
                <Link to="/blog/website-vs-landing-page">Website vs. Landing Page: Which is Better for Your Business?</Link>
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-6">
                Discover the architectural differences between a multi-page company presence and a single-screen conversion landing page.
              </p>
            </div>
            <Link
              to="/blog/website-vs-landing-page"
              className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
            >
              <span>Read article</span>
              <ArrowRight size={12} />
            </Link>
          </motion.div>

          <motion.div
            className="ss-card p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/40 transition-colors"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#34D399]/15 text-[#34D399] mb-4 inline-block">
                Business Growth
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors leading-snug">
                <Link to="/blog/how-websites-help-businesses-grow">How Modern Websites Help Businesses Grow and Maximize ROI</Link>
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-6">
                How custom React development, sub-second performance, and technical SEO turn web assets into 24/7 client-generating engines.
              </p>
            </div>
            <Link
              to="/blog/how-websites-help-businesses-grow"
              className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
            >
              <span>Read article</span>
              <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={fadeInUp}
      >
        <FAQSection />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={fadeInUp}
      >
        <CTASection onRouteChange={onRouteChange} />
      </motion.div>
    </div>
  );
};
