import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  CodeXml, 
  Layers, 
  Search, 
  ShoppingBag, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import { AGENCY_INFO, PROJECTS } from '../data/agencyData';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';

interface GwaliorPageProps {
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

export const GwaliorPage: React.FC<GwaliorPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gwaliorSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sparkstation.vercel.app/gwalior#business",
        "name": "Spark Station - Digital Agency in Gwalior",
        "url": "https://sparkstation.vercel.app/gwalior",
        "logo": "https://sparkstation.vercel.app/saksham.png",
        "image": "https://sparkstation.vercel.app/saksham.png",
        "description": "Spark Station is Gwalior's leading full-stack digital agency specializing in custom web development, UI/UX design, e-commerce, and search engine optimization (SEO) for businesses in Gwalior and Madhya Pradesh.",
        "telephone": AGENCY_INFO.call,
        "email": AGENCY_INFO.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "City Centre",
          "addressLocality": "Gwalior",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "474011",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.2183,
          "longitude": 78.1828
        },
        "founder": {
          "@type": "Person",
          "name": "Saksham Pandey",
          "jobTitle": "Founder & CEO",
          "url": "https://sparkstation.vercel.app/saksham-pandey"
        },
        "areaServed": [
          { "@type": "City", "name": "Gwalior" },
          { "@type": "AdministrativeArea", "name": "Lashkar" },
          { "@type": "AdministrativeArea", "name": "City Centre Gwalior" },
          { "@type": "AdministrativeArea", "name": "Thatipur" },
          { "@type": "AdministrativeArea", "name": "Morar" },
          { "@type": "AdministrativeArea", "name": "Malanpur" },
          { "@type": "State", "name": "Madhya Pradesh" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Agency Services in Gwalior",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development in Gwalior" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design Services Gwalior" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO & Google Maps Optimization Gwalior" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Web Portal Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Corporate Identity" } }
          ]
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
            "name": "Digital Agency in Gwalior",
            "item": "https://sparkstation.vercel.app/gwalior"
          }
        ]
      }
    ]
  };

  const localServices = [
    {
      icon: CodeXml,
      title: "Custom Web & Web App Development",
      slug: "web-development",
      desc: "High-speed, custom-coded web platforms built with React, Next.js, and TypeScript. Zero slow WordPress plugins or security vulnerabilities.",
      points: ["Sub-second page load times", "Mobile-first responsive architecture", "100% custom code & full IP ownership"]
    },
    {
      icon: Search,
      title: "Local SEO & Google Business Profile",
      slug: "seo-performance",
      desc: "Dominate local search rankings in Gwalior and surrounding regions. We optimize your website, Google Maps profile, and local citation signals.",
      points: ["Rank for '[Service] in Gwalior' searches", "Google Maps 3-Pack optimization", "Technical audits & schema integration"]
    },
    {
      icon: Layers,
      title: "UI/UX & Modern Brand Identity",
      slug: "ui-ux-design",
      desc: "Distinctive design systems that elevate Gwalior brands to national prominence. Wireframing, intuitive design, and conversion-focused flows.",
      points: ["Figma prototypes & design systems", "High-conversion customer funnels", "Consistent corporate brand identities"]
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Retail Portals",
      slug: "e-commerce-solutions",
      desc: "Empower retail showrooms, electronics shops, and consumer brands with seamless digital catalogs, WhatsApp ordering, and fast checkouts.",
      points: ["Interactive product showcases", "Direct WhatsApp order integration", "Fast payment gateway onboarding"]
    },
    {
      icon: Cpu,
      title: "Technical Architecture & Advisory",
      slug: "technical-consultancy",
      desc: "Direct consulting from experienced software engineers. Architecture reviews, cloud deployments, and scalable infrastructure guidance.",
      points: ["Vercel & cloud deployments", "Security hardening & audits", "Modern tech stack migrations"]
    }
  ];

  const localIndustries = [
    {
      title: "Retail & Consumer Electronics",
      example: "Shrinit Enterprises, Pavitra Mobiles",
      desc: "Empowering Gwalior retail brands with digital inventory catalogs, instant WhatsApp inquiry funnels, and mobile storefronts that turn local foot-traffic into repeat online buyers."
    },
    {
      title: "Healthcare, Clinics & Hospitals",
      example: "Chiranjivi Clinic, Happy Tooth",
      desc: "Modern digital portals for doctors, dentists, and clinics across Gwalior. Streamlined patient scheduling, treatment information, and accessible mobile emergency navigation."
    },
    {
      title: "Real Estate & Construction Developers",
      example: "Jhansi Empire, Advance Property, Shayona Space",
      desc: "High-impact web showcases for real estate developers, housing societies, and civil contractors in Gwalior, Jhansi, and Central India. Highlighting floor plans, specifications, and site visits."
    },
    {
      title: "Chartered Accountants & Financial Advisory",
      example: "Adarsh Gupta CA",
      desc: "Authoritative digital presences for CA firms, corporate advisors, and tax consultants. Clean, trustworthy aesthetics that project professional credibility to corporate clients."
    },
    {
      title: "Education, Coaching & Institutional Hubs",
      example: "Academies & Training Centers",
      desc: "Web platforms built for Gwalior's thriving student and coaching hub — enabling course brochures, admissions inquiries, and responsive student portals."
    },
    {
      title: "Manufacturing & Malanpur Industrial Zone",
      example: "Industrial Suppliers & Manufacturers",
      desc: "B2B catalog portals, technical capability showcases, and inquiry pipelines for manufacturing units located in Malanpur, Maharajpura, and Banmore."
    }
  ];

  const localities = [
    "City Centre",
    "Lashkar",
    "Maharaj Bada",
    "Thatipur",
    "Morar",
    "Deen Dayal Nagar",
    "Padav",
    "Phoolbagh",
    "Malanpur Industrial Area",
    "Gwalior Fort Area",
    "Hazira",
    "Dabra",
    "Morena",
    "Jhansi Region"
  ];

  const localFaqs = [
    {
      q: "Why hire a local digital agency in Gwalior instead of a remote agency from another metro?",
      a: "Working with Spark Station in Gwalior provides direct access to our core founding team without timezone friction or impersonal account managers. We understand local commerce, regional consumer behavior across Madhya Pradesh, and the specific search habits of Gwalior buyers. Plus, we are available for in-person project kickoff meetings right here in Gwalior."
    },
    {
      q: "How fast can you build and launch a website for a Gwalior business?",
      a: "We operate with rapid engineering sprints. A high-converting business landing page or clinic website is typically ready in 2 to 3 days. A comprehensive custom web app, real estate portal, or e-commerce platform takes approximately 4 to 5 days, or at most 1 week."
    },
    {
      q: "Do you build custom websites or use WordPress templates?",
      a: "We engineer custom Single Page Applications (SPAs) and web portals using React, Vite, and Tailwind CSS. Unlike fragile, slow WordPress templates loaded with dozens of plugins that frequently get hacked or break, our custom code is ultra-fast (sub-second load times), clean, secure, and built to scale."
    },
    {
      q: "How do you help my Gwalior business rank on Google and Google Maps?",
      a: "We implement rigorous Local SEO: location-specific schema markup, Google Business Profile optimization, Core Web Vitals score tuning (often achieving 95-100 on PageSpeed Insights), mobile responsiveness, and high-intent keyword positioning targeting queries like '[service] in Gwalior'."
    },
    {
      q: "Will I own the complete source code and design assets after project completion?",
      a: "Yes, 100%. Upon final project delivery and settlement, you receive complete intellectual property rights, repository access, and all production design assets. There are no lock-ins or proprietary licensing fees."
    },
    {
      q: "How can I get started with Spark Station in Gwalior?",
      a: "You can schedule a free consultation by contacting our Founder Saksham Pandey directly at +91 9111376314, our client relations team at +91 7224935780, or by messaging us directly on WhatsApp. We will discuss your goals and provide a transparent, itemized proposal."
    }
  ];

  return (
    <div className="relative min-h-screen py-12 sm:py-16 overflow-x-hidden">
      <SEO
        title="Top Digital Agency in Gwalior | Web Development, UI/UX &amp; SEO | Spark Station"
        description="Spark Station is Gwalior's premier digital agency. We engineer custom high-speed websites, UI/UX designs, e-commerce portals, and local SEO for businesses in Gwalior, MP."
        path="/gwalior"
        schemaMarkup={gwaliorSchema}
      />

      <div className="ambient-glow" />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 mb-8 relative z-10">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#8b949e]">
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
          <li className="text-white font-medium">
            Digital Agency in Gwalior
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 mb-20 relative z-10 text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Local Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/30"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: customEase } }
          }}
        >
          <MapPin size={14} className="text-[#58A6FF]" />
          <span>Locally Rooted in Gwalior, Madhya Pradesh</span>
        </motion.div>

        {/* Semantic H1 */}
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: customEase } }
          }}
        >
          Premier Full-Stack <span className="gradient-text">Digital Agency in Gwalior</span> — Web, Design &amp; Local SEO
        </motion.h1>

        {/* Lead Content */}
        <motion.p 
          className="text-base sm:text-xl text-[#8b949e] max-w-3xl mx-auto leading-relaxed mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.2, ease: customEase } }
          }}
        >
          Helping businesses in Gwalior, Madhya Pradesh, and Central India build powerful digital foundations. We replace sluggish, cookie-cutter templates with ultra-fast custom web applications, modern UI/UX systems, and dominant local search positioning.
        </motion.p>

        {/* Trust Points Strip */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 text-left"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: customEase } }
          }}
        >
          <div className="p-3.5 rounded-xl bg-[#161b22]/80 border border-[#30363d]/70 flex items-center gap-2.5">
            <MapPin size={16} className="text-[#58A6FF] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Gwalior Based</div>
              <div className="text-[11px] text-[#8b949e]">City Centre &amp; Lashkar</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#161b22]/80 border border-[#30363d]/70 flex items-center gap-2.5">
            <Clock size={16} className="text-[#34D399] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Rapid Delivery</div>
              <div className="text-[11px] text-[#8b949e]">4–5 Day Sprints</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#161b22]/80 border border-[#30363d]/70 flex items-center gap-2.5">
            <ShieldCheck size={16} className="text-[#FBBF24] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">100% IP Ownership</div>
              <div className="text-[11px] text-[#8b949e]">Full Code &amp; Assets</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#161b22]/80 border border-[#30363d]/70 flex items-center gap-2.5">
            <CodeXml size={16} className="text-[#A855F7] flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Clean Engineering</div>
              <div className="text-[11px] text-[#8b949e]">React &amp; TypeScript</div>
            </div>
          </div>
        </motion.div>

        {/* Hero CTAs */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: customEase } }
          }}
        >
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-3.5 !px-8 text-sm shadow-xl shadow-[#58A6FF]/20 cursor-pointer"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp (Instant)</span>
          </a>
          <button
            onClick={() => {
              onRouteChange('contact');
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary !py-3.5 !px-8 text-sm cursor-pointer"
          >
            <span>Request Gwalior Project Quote</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.section>

      {/* Why Gwalior Businesses Choose Spark Station (H2) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <span className="section-label mb-3">
            <Sparkles size={14} className="text-[#58A6FF]" />
            <span>Local Engineering Edge</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Why Growing Businesses in Gwalior Choose Spark Station
          </h2>
          <p className="text-base text-[#8b949e] leading-relaxed">
            In a market filled with freelance middlemen and fragile WordPress site-builders, Spark Station brings genuine full-stack software craftsmanship to Gwalior businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="ss-card p-7 flex flex-col justify-between"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#58A6FF]/10 text-[#58A6FF] flex items-center justify-center mb-5">
                <CodeXml size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Modern Code, Not Bloated Templates
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                Most local agencies install bloated themes that load in 6+ seconds and fail Core Web Vitals. We engineer clean, hand-crafted React and Vite applications that load in under 1 second.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#30363d]/60 text-xs font-mono text-[#58A6FF]">
              Sub-second Speed • Security Hardened
            </div>
          </motion.div>

          <motion.div 
            className="ss-card p-7 flex flex-col justify-between"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#34D399]/10 text-[#34D399] flex items-center justify-center mb-5">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Deep Regional Context
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                We understand how customers in Gwalior, Morena, Dabra, and Central India search, shop, and interact. We design experiences optimized for local consumer behavior and high-intent inquiries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#30363d]/60 text-xs font-mono text-[#34D399]">
              Localized UX • WhatsApp First Funnels
            </div>
          </motion.div>

          <motion.div 
            className="ss-card p-7 flex flex-col justify-between"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Direct Access to Lead Engineers
              </h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">
                You work directly with Founder Saksham Pandey and our core engineering team. No salespeople, no delays, and transparent communication from Day 1 to project launch.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#30363d]/60 text-xs font-mono text-[#A855F7]">
              Zero Bureaucracy • Direct Accountability
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tailored for Gwalior (H2) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <span className="section-label mb-3">
            <Sparkles size={14} className="text-[#58A6FF]" />
            <span>Comprehensive Solutions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Full-Spectrum Digital Services for Gwalior Companies
          </h2>
          <p className="text-base text-[#8b949e] leading-relaxed">
            From single-page high-converting landing pages to complex corporate portals, we deliver end-to-end digital solutions tailored for the regional market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localServices.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={idx}
                className="ss-card p-7 flex flex-col justify-between group hover:border-[#58A6FF]/40 transition-colors cursor-pointer"
                onClick={() => {
                  navigate(`/services/${srv.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#58A6FF]/10 text-[#58A6FF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2.5 group-hover:text-[#58A6FF] transition-colors">
                    <Link to={`/services/${srv.slug}`}>{srv.title}</Link>
                  </h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-[#c9d1d9]">
                        <Check size={13} className="text-[#34D399] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#30363d]/60 flex items-center justify-between text-xs font-semibold text-[#58A6FF]">
                  <Link to={`/services/${srv.slug}`} className="hover:underline flex items-center gap-1">
                    <span>Explore {srv.title} in Gwalior</span>
                  </Link>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Key Industries in Gwalior (H2) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
        >
          <span className="section-label mb-3">
            <Building2 size={14} className="text-[#58A6FF]" />
            <span>Local Market Verticals</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Key Industries We Empower Across Gwalior &amp; Central India
          </h2>
          <p className="text-base text-[#8b949e] leading-relaxed">
            We understand the exact commercial needs, compliance standards, and digital touchpoints required across Gwalior's leading business sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localIndustries.map((ind, idx) => (
            <motion.div
              key={idx}
              className="ss-card p-6 bg-[#161b22]/70 border-[#30363d]/80 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {ind.title}
                </h3>
                <div className="text-xs font-mono text-[#58A6FF] mb-3">
                  Delivered for: {ind.example}
                </div>
                <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gwalior Project Highlights (H2) */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label mb-2">Real Regional Work</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Gwalior &amp; Regional Project Highlights
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
            <span>Browse All 11 Projects</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((proj) => {
            const projSlug = proj.slug || proj.id;
            return (
              <div
                key={proj.id}
                className="ss-card overflow-hidden group flex flex-col cursor-pointer hover:border-[#58A6FF]/40 transition-colors"
                onClick={() => {
                  navigate(`/portfolio/${projSlug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0d1117]/80 text-[#58A6FF] border border-[#30363d] backdrop-blur-sm">
                    {proj.tags[0]}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#58A6FF] transition-colors">
                      <Link to={`/portfolio/${projSlug}`}>{proj.title}</Link>
                    </h3>
                    <p className="text-xs text-[#8b949e] line-clamp-2 mb-4 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#30363d]/60 flex items-center justify-between text-xs text-[#58A6FF] font-semibold">
                    <Link to={`/portfolio/${projSlug}`} className="hover:underline flex items-center gap-1">
                      <span>Read Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blog & Strategy Callout */}
        <div className="mt-12 p-5 rounded-xl bg-[#161b22]/70 border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">How much should Gwalior businesses budget for web development?</div>
              <div className="text-xs text-[#8b949e]">Read our honest, comprehensive guide on website costs, platforms, and agency ROI.</div>
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

      {/* Localities Served in Gwalior (H2) */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
        <div className="ss-card p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d]/80 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/30 mb-4">
            <MapPin size={13} />
            <span>Local Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Active Digital Engineering Across Gwalior &amp; Chambal
          </h2>
          <p className="text-sm sm:text-base text-[#8b949e] max-w-2xl mx-auto leading-relaxed mb-8">
            Whether your office is situated in City Centre, your retail showroom is in Maharaj Bada or Lashkar, or your manufacturing facility is in Malanpur — we provide accessible, prompt web development and local SEO services.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {localities.map((loc, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-full bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:border-[#58A6FF]/50 transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs (H2) */}
      <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-12">
          <span className="section-label mb-3">
            <HelpCircle size={14} className="text-[#58A6FF]" />
            <span>Local Questions</span>
          </span>
          <h2 className="text-3xl font-display font-bold text-white mb-3">
            Frequently Asked Questions About Hiring a Digital Agency in Gwalior
          </h2>
          <p className="text-sm text-[#8b949e]">
            Clear answers to common questions about working with Spark Station on your Gwalior web project.
          </p>
        </div>

        <div className="space-y-4">
          {localFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="ss-card rounded-2xl overflow-hidden border-[#30363d]/80 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#21262d] flex items-center justify-center flex-shrink-0 text-[#58A6FF] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#8b949e] leading-relaxed border-t border-[#30363d]/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact & Consultation Info Bar */}
      <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
        <div className="p-6 rounded-2xl bg-[#161b22] border border-[#58A6FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-1">
              Want to discuss your Gwalior project directly?
            </h3>
            <p className="text-xs text-[#8b949e]">
              Speak directly with Saksham Pandey (Founder &amp; CEO) or Manas (Client Relations).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${AGENCY_INFO.callSaksham}`}
              className="px-4 py-2.5 rounded-xl bg-[#21262d] text-white text-xs font-semibold hover:border-[#58A6FF] border border-[#30363d] inline-flex items-center gap-2 transition-colors"
            >
              <Phone size={14} className="text-[#58A6FF]" />
              <span>Call Saksham</span>
            </a>
            <a
              href={`tel:${AGENCY_INFO.callManas}`}
              className="px-4 py-2.5 rounded-xl bg-[#21262d] text-white text-xs font-semibold hover:border-[#34D399] border border-[#30363d] inline-flex items-center gap-2 transition-colors"
            >
              <Phone size={14} className="text-[#34D399]" />
              <span>Call Manas</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
