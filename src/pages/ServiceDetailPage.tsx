import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  MessageCircle, 
  Zap, 
  Clock, 
  Layers, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Briefcase,
  BookOpen
} from 'lucide-react';
import { getServiceBySlug, SERVICES_DETAILED, ServiceDetail } from '../data/servicesData';
import { AGENCY_INFO, PROJECTS } from '../data/agencyData';
import { PageRoute } from '../types';
import { Icon } from '../components/Icon';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';

interface ServiceDetailPageProps {
  onRouteChange: (route: PageRoute) => void;
}

const customEase = [0.22, 1, 0.36, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onRouteChange }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Lookup service data by slug
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <SEO
          title="Service Not Found | Spark Station"
          description="The requested digital service could not be found. Explore our full suite of web development, UI/UX, and SEO services."
          path="/services"
        />
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Service Not Found
        </h1>
        <p className="text-[#8b949e] mb-8 max-w-md">
          The requested service page does not exist or may have been updated. Explore our full suite of digital solutions.
        </p>
        <button
          onClick={() => {
            onRouteChange('services');
            navigate('/services');
          }}
          className="btn-primary"
        >
          <ArrowLeft size={16} />
          <span>Back to All Services</span>
        </button>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Structured Data Schema (Service + LocalBusiness + FAQPage + BreadcrumbList)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://sparkstation.vercel.app/services/${service.slug}#service`,
        "name": service.title,
        "description": service.metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Spark Station",
          "url": "https://sparkstation.vercel.app",
          "telephone": AGENCY_INFO.call,
          "email": AGENCY_INFO.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gwalior",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Gwalior"
            },
            {
              "@type": "State",
              "name": "Madhya Pradesh"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ]
        },
        "areaServed": "Gwalior, Madhya Pradesh, India",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.title} Deliverables`,
          "itemListElement": service.deliverables.map((item) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": item.title,
              "description": item.desc
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sparkstation.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sparkstation.vercel.app/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://sparkstation.vercel.app/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  // Other services for discovery
  const otherServices = SERVICES_DETAILED.filter((s) => s.slug !== service.slug);

  const customWhatsAppUrl = `https://wa.me/919111376314?text=${encodeURIComponent(
    `Hi Spark Station! I am interested in ${service.title} for my business in Gwalior / Central India. Could we schedule a consultation?`
  )}`;

  return (
    <div className="relative min-h-screen py-12 sm:py-16 overflow-x-hidden">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        schemaMarkup={serviceSchema}
      />

      <div className="ambient-glow" />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 mb-8 relative z-10">
        <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#8b949e]">
          <li>
            <Link
              to="/"
              onClick={() => onRouteChange('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-[#30363d]" />
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => onRouteChange('services')}
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-[#30363d]" />
          </li>
          <li className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 mb-20 relative z-10 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Service Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border"
          style={{ 
            background: service.accentBg, 
            color: service.color, 
            borderColor: `${service.color}40` 
          }}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: customEase } }
          }}
        >
          <Icon name={service.iconName} size={15} />
          <span>{service.badge}</span>
        </motion.div>

        {/* H1 Heading */}
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: customEase } }
          }}
        >
          {service.h1}
        </motion.h1>

        {/* Lead Subtitle */}
        <motion.p 
          className="text-base sm:text-xl text-[#8b949e] max-w-3xl mx-auto leading-relaxed mb-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.2, ease: customEase } }
          }}
        >
          {service.heroLead}
        </motion.p>

        {/* Quick Highlights Bar */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-[#c9d1d9] py-3 px-6 rounded-2xl bg-[#161b22]/70 border border-[#30363d]/70 max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: customEase } }
          }}
        >
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#58A6FF]" />
            <span>Timeline: <strong className="text-white font-medium">{service.timeline}</strong></span>
          </div>
          <span className="hidden sm:inline text-[#30363d]">•</span>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#34D399]" />
            <span>HQ: <strong className="text-white font-medium">Gwalior, MP</strong> (Central India)</span>
          </div>
          <span className="hidden sm:inline text-[#30363d]">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#FBBF24]" />
            <span>100% Code Ownership</span>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: customEase } }
          }}
        >
          <button
            onClick={() => {
              onRouteChange('contact');
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary !py-3.5 !px-8 text-base shadow-xl shadow-[#58A6FF]/20 cursor-pointer"
          >
            <Zap size={18} />
            <span>Request Custom Proposal</span>
          </button>
          <a
            href={customWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-3.5 !px-8 text-base hover:text-[#25D366] hover:border-[#25D366]/40 cursor-pointer"
          >
            <MessageCircle size={18} />
            <span>Chat With an Engineer</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Overview & Gwalior Relevance Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 mb-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Context */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={fadeInUp}
          >
            <div>
              <span className="section-label mb-3">
                <Sparkles size={14} />
                <span>Strategic Overview</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Why Choose Spark Station for {service.title} in Gwalior
              </h2>
            </div>

            <p className="text-base text-[#8b949e] leading-relaxed">
              {service.overview}
            </p>

            {/* Regional Gwalior Focus Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#21262d] border border-[#58A6FF]/30 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-1">
                    Gwalior &amp; Central India Market Context
                  </h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-3">
                    {service.gwaliorRelevance}
                  </p>
                  <Link
                    to="/gwalior"
                    className="inline-flex items-center gap-1.5 text-xs text-[#58A6FF] font-medium hover:underline"
                  >
                    <span>Explore our dedicated Digital Agency in Gwalior hub</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Advantages Card */}
          <motion.div 
            className="lg:col-span-5 ss-card p-8 bg-[#161b22]/90 border-[#30363d]/90"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-display font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: service.color }} />
              <span>Core Service Advantages</span>
            </h3>
            <ul className="space-y-4 mb-8">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: service.accentBg }}
                  >
                    <Check size={12} style={{ color: service.color }} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#30363d]/80 flex flex-col gap-3">
              <span className="text-xs font-mono text-[#8b949e]">
                Pricing structure: {service.pricingNote}
              </span>
              <button
                onClick={() => {
                  onRouteChange('contact');
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary w-full justify-center !py-3 text-sm"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Deliverables Section (H2) */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div className="text-center mb-14" variants={fadeInUp}>
          <span className="section-label mb-3">
            <Layers size={14} />
            <span>Scope of Work</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Comprehensive {service.title} Deliverables
          </h2>
          <p className="text-base text-[#8b949e] max-w-2xl mx-auto">
            Everything we engineer is completely transparent. Here is the tangible breakdown of what you receive with this service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              className="ss-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#58A6FF]/40"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: idx * 0.08, ease: customEase }
                }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ background: service.accentBg, color: service.color }}
                >
                  <Check size={18} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Step-by-Step Process (H2) */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center mb-14" variants={fadeInUp}>
          <span className="section-label mb-3">
            <Clock size={14} />
            <span>Execution Methodology</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Our 4-Step Engineering &amp; Delivery Process
          </h2>
          <p className="text-base text-[#8b949e] max-w-xl mx-auto">
            From first conversation to deployment, we follow a structured, agile lifecycle with zero guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <motion.div
              key={idx}
              className="ss-card p-6 relative overflow-hidden bg-[#161b22]/70"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, delay: idx * 0.1, ease: customEase }
                }
              }}
            >
              <div 
                className="text-4xl font-display font-black mb-4 select-none"
                style={{ color: `${service.color}40` }}
              >
                {step.step}
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology Stack & Tooling (H2) */}
      <motion.section 
        className="py-16 max-w-5xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Technologies &amp; Tools We Master
          </h2>
          <p className="text-sm text-[#8b949e]">
            Industry-standard modern tech stacks with zero legacy bloat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.techStack.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="p-6 rounded-2xl bg-[#161b22]/60 border border-[#30363d]"
              variants={fadeInUp}
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-[#30363d]">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#21262d] text-[#c9d1d9] border border-[#30363d]/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Industry Applications in Gwalior & Central India (H2) */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <span className="section-label mb-3">
            <MapPin size={14} />
            <span>Local Market Relevance</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Industry Applications in Gwalior &amp; Central India
          </h2>
          <p className="text-sm text-[#8b949e] max-w-xl mx-auto">
            How regional businesses leverage our {service.title.toLowerCase()} capabilities to accelerate revenue and digital footprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.industryApplications.map((app, idx) => (
            <motion.div
              key={idx}
              className="ss-card p-6 bg-[#161b22]/70 flex items-start gap-4"
              variants={fadeInUp}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-mono"
                style={{ background: service.accentBg, color: service.color }}
              >
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-white mb-1.5">
                  {app.industry}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  {app.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section (H2) */}
      <motion.section 
        className="py-16 max-w-4xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <span className="section-label mb-3">
            <HelpCircle size={14} />
            <span>Common Inquiries</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Frequently Asked Questions About {service.title}
          </h2>
          <p className="text-sm text-[#8b949e]">
            Transparent answers to help you make an informed decision for your project.
          </p>
        </motion.div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                className="ss-card p-6 cursor-pointer transition-colors hover:border-[#58A6FF]/40"
                onClick={() => toggleFaq(idx)}
                variants={fadeInUp}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white">
                    {faq.q}
                  </h3>
                  <div className={`p-1.5 rounded-lg bg-[#21262d] text-[#8b949e] transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
                {isOpen && (
                  <p className="mt-4 pt-4 border-t border-[#30363d]/80 text-sm text-[#8b949e] leading-relaxed animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Relevant Case Studies Section */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4" variants={fadeInUp}>
          <div>
            <span className="section-label mb-2">
              <Briefcase size={14} className="text-[#58A6FF]" />
              <span>Proven Deliverables</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Related Case Studies Featuring {service.title}
            </h2>
            <p className="text-sm text-[#8b949e]">
              See how our engineering and design capabilities solve concrete client objectives.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-[#58A6FF] hover:underline inline-flex items-center gap-1.5"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(PROJECTS.filter(p => 
            p.tags.some(t => t.toLowerCase().includes(service.shortTitle.toLowerCase())) ||
            p.desc.toLowerCase().includes(service.shortTitle.toLowerCase())
          ).slice(0, 3).length > 0
            ? PROJECTS.filter(p => 
                p.tags.some(t => t.toLowerCase().includes(service.shortTitle.toLowerCase())) ||
                p.desc.toLowerCase().includes(service.shortTitle.toLowerCase())
              ).slice(0, 3)
            : PROJECTS.slice(0, 3)
          ).map((proj) => {
            const caseStudyUrl = `/portfolio/${proj.slug || proj.id}`;
            return (
              <div
                key={proj.id}
                className="ss-card overflow-hidden flex flex-col justify-between group hover:border-[#58A6FF]/40 transition-all duration-300"
              >
                <div>
                  <div className="h-40 overflow-hidden relative bg-[#161b22]">
                    <img
                      src={proj.image}
                      alt={`${proj.title} Web Application`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-70" />
                    <span className="absolute top-2.5 right-2.5 text-[10px] px-2.5 py-0.5 rounded-full bg-[#0d1117]/80 text-[#58A6FF] border border-[#58A6FF]/30 font-mono">
                      {proj.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-display font-bold text-white mb-1.5 group-hover:text-[#58A6FF] transition-colors">
                      <Link to={caseStudyUrl}>{proj.title}</Link>
                    </h3>
                    <p className="text-xs text-[#8b949e] line-clamp-2 leading-relaxed mb-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#30363d]/40 flex items-center justify-between text-xs">
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
                    Live Preview &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blog & Strategy Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#161b22]/70 border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center flex-shrink-0">
              <BookOpen size={16} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-display font-bold text-white">Need clarity on technical budgets and project roadmaps?</div>
              <div className="text-[11px] sm:text-xs text-[#8b949e]">Explore our engineering benchmarks and pricing breakdown in the blog.</div>
            </div>
          </div>
          <Link
            to="/blog"
            className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1 whitespace-nowrap"
          >
            <span>Explore Engineering Insights</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </motion.section>

      {/* Explore Other Services Section */}
      <motion.section 
        className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4" variants={fadeInUp}>
          <div>
            <span className="section-label mb-2">Cross-Disciplinary Agency</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Explore Other Specialized Services
            </h2>
          </div>
          <button
            onClick={() => {
              onRouteChange('services');
              navigate('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-[#58A6FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherServices.slice(0, 3).map((item) => (
            <div
              key={item.slug}
              className="ss-card p-6 flex flex-col justify-between group hover:border-[#58A6FF]/40 cursor-pointer"
              onClick={() => {
                navigate(`/services/${item.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{ background: item.accentBg, color: item.color }}
                >
                  <Icon name={item.iconName} size={20} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#58A6FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8b949e] line-clamp-2 mb-4">
                  {item.heroLead}
                </p>
              </div>
              <div className="text-xs font-semibold text-[#58A6FF] flex items-center gap-1">
                <span>View {item.shortTitle} details</span>
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
