import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Check, 
  Sparkles, 
  CodeXml, 
  Layers, 
  Globe, 
  Briefcase, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Search,
  MapPin,
  BookOpen
} from 'lucide-react';
import { getCaseStudyBySlug, getOtherCaseStudies, CaseStudyItem } from '../data/caseStudiesData';
import { AGENCY_INFO } from '../data/agencyData';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';

const getServiceRoute = (srvName: string): string => {
  const lower = srvName.toLowerCase();
  if (lower.includes('e-commerce') || lower.includes('ecommerce')) return '/services/e-commerce-solutions';
  if (lower.includes('ui') || lower.includes('ux') || lower.includes('design')) return '/services/ui-ux-design';
  if (lower.includes('brand')) return '/services/branding-identity';
  if (lower.includes('product')) return '/services/product-design';
  if (lower.includes('seo') || lower.includes('search')) return '/services/seo-performance';
  if (lower.includes('consult')) return '/services/technical-consultancy';
  return '/services/web-development';
};

interface CaseStudyDetailPageProps {
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

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ onRouteChange }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caseStudy: CaseStudyItem | undefined = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <SEO
          title="Case Study Not Found | Spark Station Portfolio"
          description="The requested project case study could not be found. Explore our full portfolio of custom web applications and digital design work."
          path="/portfolio"
        />
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Case Study Not Found
        </h1>
        <p className="text-[#8b949e] mb-8 max-w-md">
          The requested portfolio project does not exist or may have been relocated. Explore our complete work showcase.
        </p>
        <button
          onClick={() => {
            onRouteChange('portfolio');
            navigate('/portfolio');
          }}
          className="btn-primary"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </button>
      </div>
    );
  }

  const otherStudies = getOtherCaseStudies(caseStudy.slug, 3);

  // Structured Data Schema for Case Study
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://sparkstation.vercel.app/portfolio/${caseStudy.slug}#case-study`,
        "name": caseStudy.title,
        "headline": caseStudy.h1,
        "description": caseStudy.metaDescription,
        "image": caseStudy.image,
        "url": `https://sparkstation.vercel.app/portfolio/${caseStudy.slug}`,
        "keywords": caseStudy.relevantKeywords.join(', '),
        "about": {
          "@type": "Thing",
          "name": caseStudy.industry
        },
        "author": {
          "@type": "Organization",
          "name": "Spark Station",
          "url": "https://sparkstation.vercel.app/",
          "telephone": AGENCY_INFO.call,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gwalior",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Spark Station",
          "url": "https://sparkstation.vercel.app/"
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
            "name": "Portfolio",
            "item": "https://sparkstation.vercel.app/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": caseStudy.title,
            "item": `https://sparkstation.vercel.app/portfolio/${caseStudy.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-16 overflow-x-hidden">
      <SEO
        title={caseStudy.metaTitle}
        description={caseStudy.metaDescription}
        path={`/portfolio/${caseStudy.slug}`}
        schemaMarkup={caseStudySchema}
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
              to="/portfolio"
              onClick={() => onRouteChange('portfolio')}
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-[#30363d]" />
          </li>
          <li className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
            {caseStudy.title}
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 mb-12 relative z-10 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Industry & Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/30"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: customEase } }
          }}
        >
          <Briefcase size={14} />
          <span>{caseStudy.industry}</span>
        </motion.div>

        {/* H1 Heading */}
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: customEase } }
          }}
        >
          {caseStudy.h1}
        </motion.h1>

        {/* Subtitle / Lead statement */}
        <motion.p 
          className="text-base sm:text-xl text-[#8b949e] max-w-3xl mx-auto leading-relaxed mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.2, ease: customEase } }
          }}
        >
          {caseStudy.subtitle}
        </motion.p>

        {/* Key Metrics / Scope Bar */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-[#c9d1d9] py-3.5 px-6 rounded-2xl bg-[#161b22]/80 border border-[#30363d]/80 max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: customEase } }
          }}
        >
          <div className="flex items-center gap-2">
            <Layers size={15} className="text-[#58A6FF]" />
            <span>Category: <strong className="text-white capitalize">{caseStudy.category}</strong></span>
          </div>
          <span className="hidden sm:inline text-[#30363d]">•</span>
          <div className="flex items-center gap-2">
            <Cpu size={15} className="text-[#34D399]" />
            <span>Stack: <strong className="text-white">React &amp; Vite</strong></span>
          </div>
          <span className="hidden sm:inline text-[#30363d]">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#FBBF24]" />
            <span>Responsive Web App</span>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: customEase } }
          }}
        >
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-3 !px-7 text-sm shadow-xl shadow-[#58A6FF]/20 cursor-pointer"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={16} />
            </a>
          )}
          <button
            onClick={() => {
              onRouteChange('contact');
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary !py-3 !px-7 text-sm cursor-pointer"
          >
            <span>Request Similar Solution</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.section>

      {/* Hero Visual Card */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="ss-card p-3 sm:p-4 rounded-3xl overflow-hidden border-[#30363d]/80 bg-[#161b22]/90 shadow-2xl relative group">
          <div className="w-full h-64 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden relative">
            <img 
              src={caseStudy.image} 
              alt={`${caseStudy.title} Preview`}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80" />

            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1117]/85 backdrop-blur-md text-white text-xs font-semibold border border-[#30363d] hover:border-[#58A6FF] transition-colors"
              >
                <Globe size={14} className="text-[#58A6FF]" />
                <span>Explore Live Project</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </motion.section>

      {/* Main Content: Overview, Challenge & Solution (H2s) */}
      <section className="max-w-5xl mx-auto px-6 mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Context, Challenge, Solution */}
          <div className="lg:col-span-8 space-y-12">
            {/* Project Overview */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <span className="section-label mb-3">
                <Sparkles size={14} className="text-[#58A6FF]" />
                <span>Project Background</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Project Overview &amp; Digital Objective
              </h2>
              <p className="text-base text-[#8b949e] leading-relaxed">
                {caseStudy.overview}
              </p>
            </motion.div>

            {/* The Digital Challenge */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="p-7 rounded-2xl bg-[#161b22]/70 border border-[#30363d]/80"
            >
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F85149]" />
                <span>The Challenge</span>
              </h2>
              <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* The Engineering Solution */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="p-7 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#21262d] border border-[#58A6FF]/30"
            >
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#58A6FF]" />
                <span>The Spark Station Solution</span>
              </h2>
              <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>

            {/* Key Functional Deliverables & System Features (H2) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Key System Capabilities &amp; Features Delivered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="ss-card p-5 bg-[#161b22]/60 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <span className="text-sm text-[#c9d1d9] leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Meta Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Services Card */}
            <div className="ss-card p-6 bg-[#161b22]/80 border-[#30363d]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8b949e] mb-4 pb-2 border-b border-[#30363d]">
                Services Provided
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.servicesUsed.map((srv, idx) => (
                  <li key={idx}>
                    <Link
                      to={getServiceRoute(srv)}
                      className="inline-flex items-center gap-2 text-sm text-[#c9d1d9] hover:text-[#58A6FF] transition-colors group"
                      title={`Learn more about ${srv} services`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF] group-hover:scale-125 transition-transform" />
                      <span className="underline underline-offset-4 decoration-[#30363d] group-hover:decoration-[#58A6FF]">{srv}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Engineering Hub Card */}
            <div className="ss-card p-6 bg-[#161b22]/80 border-[#30363d]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8b949e] mb-2 pb-2 border-b border-[#30363d] flex items-center gap-1.5">
                <MapPin size={12} className="text-[#58A6FF]" />
                <span>Regional Engineering Hub</span>
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-3">
                Engineered with high performance and clean architectures by Spark Station from Gwalior, Madhya Pradesh.
              </p>
              <Link
                to="/gwalior"
                className="text-xs font-semibold text-[#58A6FF] hover:underline flex items-center gap-1"
              >
                <span>Explore our Gwalior agency hub</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Target Audience Card */}
            <div className="ss-card p-6 bg-[#161b22]/80 border-[#30363d]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8b949e] mb-3 pb-2 border-b border-[#30363d]">
                Target Audience
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                {caseStudy.targetAudience}
              </p>
            </div>

            {/* Tech Stack Card */}
            <div className="ss-card p-6 bg-[#161b22]/80 border-[#30363d]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8b949e] mb-3 pb-2 border-b border-[#30363d]">
                Technologies &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#21262d] text-[#c9d1d9] border border-[#30363d]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Search Keywords */}
            <div className="ss-card p-6 bg-[#161b22]/80 border-[#30363d]">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8b949e] mb-3 pb-2 border-b border-[#30363d] flex items-center gap-1.5">
                <Search size={12} />
                <span>Search Intent Focus</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.relevantKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#161b22] text-[#8b949e] border border-[#30363d]/60 font-mono"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Work Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 border-t border-[#30363d]/60 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label mb-2">More Case Studies</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Explore Related Projects
            </h2>
          </div>
          <button
            onClick={() => {
              onRouteChange('portfolio');
              navigate('/portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-[#58A6FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View Full Portfolio</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherStudies.map((study) => (
            <div
              key={study.id}
              className="ss-card overflow-hidden group flex flex-col cursor-pointer hover:border-[#58A6FF]/40 transition-colors"
              onClick={() => {
                navigate(`/portfolio/${study.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0d1117]/80 text-[#58A6FF] border border-[#30363d] backdrop-blur-sm">
                  {study.industry.split('&')[0].trim()}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-1.5 group-hover:text-[#58A6FF] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-[#8b949e] line-clamp-2 mb-4 leading-relaxed">
                    {study.overview}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#30363d]/60 flex items-center justify-between text-xs text-[#58A6FF] font-semibold">
                  <span>Read Case Study</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog & Strategy Callout */}
        <div className="mt-12 p-5 rounded-xl bg-[#161b22]/70 border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">Curious how much a custom website or platform costs?</div>
              <div className="text-xs text-[#8b949e]">Read our transparent engineering benchmarks and cost guides on the Spark Station blog.</div>
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

      {/* CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
