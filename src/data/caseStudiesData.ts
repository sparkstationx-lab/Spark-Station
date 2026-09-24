export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: 'web' | 'design' | 'branding';
  industry: string;
  servicesUsed: string[];
  tags: string[];
  liveUrl: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  relevantKeywords: string[];
  targetAudience: string;
  deliverablesSummary: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'electronics-shop',
    slug: 'shrinit-enterprises',
    title: 'Shrinit Enterprises',
    subtitle: 'Modern Consumer Electronics E-Commerce Web Application',
    metaTitle: 'Shrinit Enterprises Case Study | Electronics E-Commerce Web Development | Spark Station',
    metaDescription: 'Discover how Spark Station engineered a fast, responsive e-commerce web platform for Shrinit Enterprises, featuring dynamic retail catalogs, mobile optimization, and secure checkout.',
    h1: 'Shrinit Enterprises — E-Commerce Web Platform for Retail Electronics',
    category: 'web',
    industry: 'Consumer Electronics & Retail E-Commerce',
    servicesUsed: ['Web Development', 'UI/UX Design', 'E-Commerce Solutions', 'Technical Consultancy'],
    tags: ['React', 'E-commerce', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://shrinit-enterprisess.vercel.app/',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a81a4b1?w=800&auto=format&fit=crop&q=80',
    overview: 'Shrinit Enterprises is a consumer electronics retailer requiring a modern digital storefront to showcase consumer appliances, home entertainment systems, and gadget inventory to regional and online shoppers.',
    challenge: 'Offline retail electronics stores often struggle to showcase fast-changing inventory with technical specifications on mobile devices. The business needed an accessible, fast-loading digital catalog with transparent product categories, high-resolution imagery, and frictionless user navigation without heavy e-commerce software bloat.',
    solution: 'Spark Station engineered a modern Single Page Application (SPA) built with React and Vite. The platform features intuitive category navigation, structured product cards with specifications, instant search filters, and an optimized mobile checkout interface.',
    keyFeatures: [
      'Structured electronics product catalog organized by device categories',
      'Real-time client-side search and category filtering',
      'Mobile-first responsive layout tailored for smartphone shoppers',
      'Optimized cart state management with persistent session storage',
      'Direct customer inquiry and checkout workflow'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel Edge Network'],
    relevantKeywords: [
      'electronics ecommerce website',
      'retail electronics web development',
      'React ecommerce portal',
      'digital catalog management',
      'Gwalior electronics online store',
      'custom shopping web application'
    ],
    targetAudience: 'Homeowners, tech enthusiasts, and regional consumers looking for verified electronic appliances and gadgets.',
    deliverablesSummary: [
      'Custom React SPA Frontend',
      'Interactive Product Catalog & Filters',
      'Mobile-Responsive Shopping Cart Flow',
      'Core Web Vitals & Performance Optimization'
    ]
  },
  {
    id: 'chiranjivi-clinic',
    slug: 'chiranjivi-clinic',
    title: 'Chiranjivi Clinic',
    subtitle: 'Patient-Centric Medical Service Portal & Appointment Workflow',
    metaTitle: 'Chiranjivi Clinic Case Study | Healthcare Web Portal & Clinic Website | Spark Station',
    metaDescription: 'Case study of Chiranjivi Clinic medical portal engineered by Spark Station. Featuring online patient scheduling, doctor profiles, service catalogs, and mobile-friendly healthcare UX.',
    h1: 'Chiranjivi Clinic — Patient-Centric Healthcare Portal & Scheduling Interface',
    category: 'web',
    industry: 'Healthcare, Medical Practice & Clinical Services',
    servicesUsed: ['Web Development', 'UI/UX Design', 'SEO & Performance'],
    tags: ['React', 'Healthcare', 'Tailwind CSS', 'Appointment UI'],
    liveUrl: 'https://chiranjeevi-clinic.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    overview: 'Chiranjivi Clinic is a dedicated medical clinic requiring a clean, accessible web portal to communicate clinical specialties, doctor timings, healthcare services, and facilitate convenient patient appointment inquiries.',
    challenge: 'Patients seeking medical care often face confusing appointment booking flows, unclear consultation schedules, and cluttered clinic websites that are hard to navigate on mobile devices during urgent healthcare inquiries.',
    solution: 'Spark Station developed a tranquil, accessible healthcare web application focused on clarity, accessibility, and speed. The interface organizes medical specialties, operating hours, physician credentials, and a streamlined appointment request workflow.',
    keyFeatures: [
      'Structured clinical service directory outlining treatments and diagnostics',
      'Interactive appointment request form with date and specialty selection',
      'Physician and practitioner qualification profiles',
      'Emergency contact highlights and direct phone/WhatsApp calling triggers',
      'Accessible typography and high-contrast clinical color palette'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Accessible UI Standards'],
    relevantKeywords: [
      'healthcare web development',
      'clinic website design',
      'medical appointment portal',
      'doctor clinic website Gwalior',
      'patient scheduling UI',
      'healthcare UX design'
    ],
    targetAudience: 'Patients and families seeking trusted outpatient medical consultations, diagnostic services, and preventive healthcare.',
    deliverablesSummary: [
      'Accessible Medical Portal Frontend',
      'Doctor Timetable & Specialty Directory',
      'One-Click Appointment Scheduling Flow',
      'Local Healthcare SEO Optimization'
    ]
  },
  {
    id: 'jhansi-empire',
    slug: 'jhansi-empire',
    title: 'Jhansi Empire',
    subtitle: 'Housing Society & Residential Property Management Portal',
    metaTitle: 'Jhansi Empire Case Study | Real Estate & Housing Portal Development | Spark Station',
    metaDescription: 'Learn how Spark Station built the Jhansi Empire residential property portal, showcasing housing society layouts, property listings, amenities, and prospective resident inquiries.',
    h1: 'Jhansi Empire — Residential Real Estate & Housing Community Portal',
    category: 'web',
    industry: 'Real Estate, Housing Societies & Property Management',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Branding & Identity', 'Technical Consultancy'],
    tags: ['Real Estate', 'Management', 'React', 'Tailwind CSS'],
    liveUrl: 'https://jhansi-empire-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    overview: 'Jhansi Empire is a comprehensive residential real estate project and housing community requiring an authoritative digital presence to display township layouts, apartment configurations, community amenities, and buyer inquiry channels.',
    challenge: 'Prospective home buyers need immediate access to floor plans, location connectivity, amenity details, and project status without navigating through slow, PDF-heavy websites or unverified listing aggregators.',
    solution: 'We designed and deployed a modern real estate web portal featuring high-definition visual tours, structured property specifications, township amenity breakdowns, and integrated direct lead generation workflows.',
    keyFeatures: [
      'Interactive residential unit specifications and floor plan breakdowns',
      'Township amenities showcase with high-definition architectural visuals',
      'Location connectivity map and neighborhood landmark information',
      'Direct site visit booking and lead capture inquiry forms',
      'Fast-rendering mobile responsive real estate gallery'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    relevantKeywords: [
      'real estate web portal',
      'housing society website',
      'property listing web development',
      'residential real estate website',
      'township portal development',
      'Jhansi real estate web application'
    ],
    targetAudience: 'Prospective homeowners, real estate investors, and families looking for planned residential townships in Central India.',
    deliverablesSummary: [
      'Township & Property Showcase Portal',
      'Interactive Unit & Floor Plan Layouts',
      'Direct Site-Visit Booking Mechanism',
      'Branded Real Estate Visual Identity'
    ]
  },
  {
    id: 'advance-property',
    slug: 'advance-property-construction',
    title: 'Advance Property Construction',
    subtitle: 'Commercial & Residential Construction Engineering Showcase',
    metaTitle: 'Advance Property Construction Case Study | Construction Web Design | Spark Station',
    metaDescription: 'Case study on Advance Property Construction website engineered by Spark Station. Modern construction capabilities portfolio, ongoing sites, and commercial development solutions.',
    h1: 'Advance Property Construction — Construction Capabilities & Project Showcase',
    category: 'web',
    industry: 'Civil Construction, Infrastructure & Property Development',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Product Design', 'SEO & Performance'],
    tags: ['Construction', 'Portfolio', 'React', 'Tailwind CSS'],
    liveUrl: 'https://advance-property-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503387762-592dfe58ef4a?w=800&auto=format&fit=crop&q=80',
    overview: 'Advance Property Construction delivers residential and commercial development projects. The company needed a robust web platform to demonstrate engineering capabilities, ongoing site milestones, safety standards, and commercial contracting services.',
    challenge: 'Construction companies often struggle to convey engineering quality and project scale digitally, relying on outdated brochures that fail to win high-value institutional tenders or private contracts.',
    solution: 'Spark Station constructed a visually commanding, structured web platform that highlights construction competencies, materials specifications, completed project galleries, and institutional client contact funnels.',
    keyFeatures: [
      'Commercial and residential project portfolio with categorized filters',
      'Detailed service catalog covering turnkey civil construction and renovations',
      'Safety standards, engineering certifications, and material quality assurance',
      'Subcontractor and client inquiry consultation forms',
      'Optimized imagery delivery ensuring rapid page load on cellular connections'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'construction company website',
      'civil engineering web design',
      'commercial construction web portal',
      'property developer website',
      'infrastructure portfolio web development'
    ],
    targetAudience: 'Commercial property developers, enterprise clients seeking turnkey building contractors, and private homeowners planning civil construction.',
    deliverablesSummary: [
      'Civil Construction Web Application',
      'Categorized Engineering Portfolio',
      'Technical Capability & Equipment Matrix',
      'Tender & Contract Consultation Gateway'
    ]
  },
  {
    id: 'shayona-space',
    slug: 'shayona-space',
    title: 'Shayona Space',
    subtitle: 'Luxury Real Estate & High-End Architectural Showcase',
    metaTitle: 'Shayona Space Case Study | Luxury Real Estate Web Experience | Spark Station',
    metaDescription: 'Explore how Spark Station designed the Shayona Space luxury real estate portal with minimalist architectural aesthetics, immersive gallery layouts, and high-net-worth lead capture.',
    h1: 'Shayona Space — High-End Real Estate & Architectural Showcase',
    category: 'web',
    industry: 'Luxury Residential Real Estate & Architectural Design',
    servicesUsed: ['UI/UX Design', 'Web Development', 'Branding & Identity'],
    tags: ['Real Estate', 'Luxury', 'React', 'Minimalist UI'],
    liveUrl: 'https://shayona-space-1.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    overview: 'Shayona Space represents luxury living and modern architectural developments, requiring an elegant digital portfolio that mirrors the sophistication of upscale residential spaces.',
    challenge: 'Luxury buyers expect an elevated visual tone. Standard cluttered real estate templates undermine the perceived value of premium spaces.',
    solution: 'Spark Station designed a minimalist, editorial-inspired web showcase featuring generous whitespace, refined typography pairings, fluid image transitions, and discreet consultation scheduling.',
    keyFeatures: [
      'Editorial aesthetic tailored for luxury property enthusiasts',
      'High-resolution full-width architectural photography showcases',
      'Detailed property amenity matrices with downloadable spec sheets',
      'Private consultation and viewing appointment request workflow',
      'Smooth navigation transitions and zero visual lag'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'luxury real estate website',
      'architectural showcase web app',
      'premium property website design',
      'real estate UX design',
      'luxury apartment digital experience'
    ],
    targetAudience: 'High-net-worth individuals, architecture aficionados, and luxury home seekers looking for premier residential units.',
    deliverablesSummary: [
      'Bespoke Luxury Real Estate Web Experience',
      'High-Definition Architectural Image Showcase',
      'Private Viewing Consultation Form',
      'Minimalist Brand Styling & Typography System'
    ]
  },
  {
    id: 'futura-groups',
    slug: 'futura-groups',
    title: 'Futura Groups',
    subtitle: 'Real Estate Development & Investor Engagement Portal',
    metaTitle: 'Futura Groups Case Study | Real Estate Investment & Land Portal | Spark Station',
    metaDescription: 'Case study on Futura Groups property development portal engineered by Spark Station. Scalable real estate listings, investor briefings, and strategic project management.',
    h1: 'Futura Groups — Real Estate Development & Investor Portal',
    category: 'web',
    industry: 'Real Estate Development & Commercial Investment',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Technical Consultancy'],
    tags: ['Real Estate', 'Investment', 'React', 'Tailwind CSS'],
    liveUrl: 'https://futura-groups-0.vercel.app/',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=80',
    overview: 'Futura Groups is a progressive real estate development firm focusing on large-scale property developments, land parcels, and investor-backed commercial spaces.',
    challenge: 'The firm required a scalable web architecture capable of categorizing diverse investment opportunities, commercial plazas, and residential parcels while providing clear investor relations info.',
    solution: 'We engineered an investor-grade web portal featuring comprehensive project hierarchies, land acquisition outlines, financial feasibility insights, and responsive investor inquiry funnels.',
    keyFeatures: [
      'Multi-category property portfolio (commercial, residential, mixed-use)',
      'Strategic project roadmaps and phase-by-phase completion trackers',
      'Investor inquiry pipeline with automated notification hooks',
      'Responsive data tables for property square footage and zoning specs',
      'Lightweight asset optimization for instant worldwide access'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'real estate developer website',
      'property investment portal',
      'commercial property development web app',
      'investor relations real estate website',
      'React property portal'
    ],
    targetAudience: 'Institutional investors, commercial business owners, and venture partners interested in property development projects.',
    deliverablesSummary: [
      'Investor-Centric Real Estate Web Portal',
      'Categorized Development Portfolio Engine',
      'Project Phasing & Milestone Roadmaps',
      'Commercial Investor Inquiry Capture System'
    ]
  },
  {
    id: 'pavitra-mobiles',
    slug: 'pavitra-mobiles',
    title: 'Pavitra Mobiles',
    subtitle: 'Smartphone Retail & Mobile Technology Hub',
    metaTitle: 'Pavitra Mobiles Case Study | Mobile Retail & Gadget Website | Spark Station',
    metaDescription: 'Case study of Pavitra Mobiles retail portal by Spark Station. Smartphone catalog, accessory showcase, brand comparisons, and fast local customer engagement.',
    h1: 'Pavitra Mobiles — Smartphone Retail & Mobile Accessories Portal',
    category: 'web',
    industry: 'Consumer Electronics & Mobile Device Retail',
    servicesUsed: ['Web Development', 'UI/UX Design', 'E-Commerce Solutions'],
    tags: ['Retail', 'Mobile', 'React', 'Tailwind CSS'],
    liveUrl: 'https://pavitra-mobile.vercel.app/',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
    overview: 'Pavitra Mobiles is an active retail mobile store offering smartphones, wearable tech, and original accessories to local customers looking for the best devices and competitive pricing.',
    challenge: 'Retail phone sellers need to compete with national aggregators while maintaining their local customer loyalty. They need a rapid way to showcase flagship models, accessories, and instant WhatsApp inquiries.',
    solution: 'Spark Station delivered a high-energy, responsive mobile store portal featuring structured phone model showcases, specification breakdowns, warranty guidelines, and direct click-to-WhatsApp product reservations.',
    keyFeatures: [
      'Smartphone catalog grouped by top manufacturers and price tiers',
      'Mobile phone accessory spotlight and compatibility breakdowns',
      'Direct WhatsApp ordering and instant inventory inquiry trigger',
      'Store locator with direct map navigation and working hours',
      'Ultra-fast mobile loading for quick on-the-go browsing'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'mobile store website',
      'smartphone retail portal',
      'gadget shop web development',
      'local electronics store website',
      'mobile phone shop Gwalior'
    ],
    targetAudience: 'Smartphone buyers, gadget enthusiasts, and retail shoppers seeking authentic mobile hardware and accessories.',
    deliverablesSummary: [
      'Mobile-First Retail Showcase Portal',
      'Hardware Model & Specification Catalog',
      'Direct Click-to-WhatsApp Product Ordering',
      'Store Location & Hours Integration'
    ]
  },
  {
    id: 'happy-tooth',
    slug: 'happy-tooth',
    title: 'Happy Tooth',
    subtitle: 'Comprehensive Dental Care & Patient Consultation Portal',
    metaTitle: 'Happy Tooth Case Study | Dental Clinic Website & Appointment Portal | Spark Station',
    metaDescription: 'Learn how Spark Station created the Happy Tooth dental clinic website, featuring treatment descriptions, patient education, oral hygiene guides, and online booking.',
    h1: 'Happy Tooth — Dental Clinic Portal & Consultation Workflow',
    category: 'web',
    industry: 'Dental Healthcare & Oral Medicine',
    servicesUsed: ['Web Development', 'UI/UX Design', 'SEO & Performance'],
    tags: ['Healthcare', 'Dental', 'React', 'Appointment UI'],
    liveUrl: 'https://happy-tooth-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80',
    overview: 'Happy Tooth is a modern dental care clinic offering cosmetic dentistry, orthodontics, root canals, and pediatric dental treatments in a welcoming environment.',
    challenge: 'Dental fear and anxiety often keep patients from booking visits. The clinic required a reassuring, friendly digital experience that demystifies procedures, displays hygiene standards, and facilitates easy bookings.',
    solution: 'We engineered a bright, friendly, and reassuring medical portal emphasizing patient comfort, transparent treatment explanations, dental team credentials, and an intuitive consultation scheduling system.',
    keyFeatures: [
      'Categorized treatment guides (cosmetic, preventive, restorative, pediatric)',
      'Transparent step-by-step procedure explanations to ease dental anxiety',
      'Interactive consultation request form with preferred appointment slots',
      'Clinic hygiene protocol showcases and sterilization certifications',
      'Responsive FAQ section addressing common dental inquiries'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'dental clinic website',
      'dentist appointment portal',
      'dental clinic web design Gwalior',
      'orthodontic clinic website',
      'healthcare web application'
    ],
    targetAudience: 'Individuals and families seeking routine dental exams, smile makeovers, orthodontics, and restorative oral care.',
    deliverablesSummary: [
      'Reassuring Dental Practice Web Portal',
      'Comprehensive Treatment Guide Pages',
      'Digital Consultation Request Interface',
      'Patient Hygiene & Sterilization Transparency Section'
    ]
  },
  {
    id: 'adarsh-gupta',
    slug: 'adarsh-gupta-ca',
    title: 'Adarsh Gupta CA',
    subtitle: 'Chartered Accountancy, Taxation & Corporate Advisory Portal',
    metaTitle: 'Adarsh Gupta CA Case Study | Chartered Accountant Website | Spark Station',
    metaDescription: 'Discover the professional web portal built for Adarsh Gupta CA by Spark Station, featuring corporate taxation, auditing services, compliance roadmaps, and client consultations.',
    h1: 'Adarsh Gupta CA — Chartered Accountancy & Financial Advisory Portal',
    category: 'web',
    industry: 'Financial Accounting, Corporate Taxation & Audit Advisory',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Branding & Identity', 'Technical Consultancy'],
    tags: ['Finance', 'Professional', 'React', 'Corporate UI'],
    liveUrl: 'https://gupta-adarsh-co.vercel.app/',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    overview: 'Adarsh Gupta & Co. provides chartered accountancy, corporate tax planning, GST filings, statutory audits, and financial advisory for businesses and high-net-worth individuals.',
    challenge: 'Financial advisory firms require maximum authority, trust, and professional credibility. Outdated generic templates fail to project corporate rigor and institutional compliance standard.',
    solution: 'Spark Station delivered an authoritative, polished corporate advisory web portal highlighting practice areas, regulatory compliance schedules, client onboarding steps, and secure document submission pathways.',
    keyFeatures: [
      'Practice area breakdown: GST, Direct Tax, Statutory Audits, Corporate Advisory',
      'Compliance calendar and business tax deadline reminders',
      'Direct consultation booking and confidential inquiry forms',
      'Credibility indicators: professional registrations, ICAI ethics alignment',
      'Clean, responsive corporate typography and executive layout'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'chartered accountant website',
      'CA firm web development',
      'financial advisory web portal',
      'tax consultant website Gwalior',
      'accounting firm website design'
    ],
    targetAudience: 'Corporations, SMEs, startups, and individual taxpayers needing certified accounting, GST compliance, and audit leadership.',
    deliverablesSummary: [
      'Corporate Accounting & Audit Web Portal',
      'Structured Practice Area Directory',
      'Confidential Client Advisory Inquiry Workflow',
      'Compliance & Taxation Advisory Guides'
    ]
  },
  {
    id: 'real-estate',
    slug: 'real-estate-portal',
    title: 'Commercial & Residential Real Estate',
    subtitle: 'Comprehensive Real Estate Listings & Commercial Space Marketplace',
    metaTitle: 'Real Estate Portal Case Study | Commercial & Residential Property Web App | Spark Station',
    metaDescription: 'Case study on the Real Estate property listing platform engineered by Spark Station. Dynamic property filters, location highlights, and seamless lead generation.',
    h1: 'Real Estate Portal — Commercial & Residential Property Marketplace',
    category: 'web',
    industry: 'Real Estate & Commercial Property',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Product Design', 'Technical Consultancy'],
    tags: ['Real Estate', 'React', 'Tailwind CSS', 'Listings UI'],
    liveUrl: 'https://real-estate-livid-psi.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    overview: 'A dynamic real estate marketplace designed for browsing, filtering, and inquiring about commercial office spaces, residential apartments, and prime land plots.',
    challenge: 'Property searchers abandon platforms when listings load slowly or property filters are confusing on mobile phones.',
    solution: 'Spark Station developed a high-speed property search application with instant client-side filtering by property type, budget, and location, combined with frictionless lead capture.',
    keyFeatures: [
      'Interactive property cards with price, area, and configuration tags',
      'Instant multi-criteria filtering (commercial vs residential, ready-to-move vs under-construction)',
      'High-resolution photo galleries and floor layout previews',
      'Direct agent callback and site-tour scheduling forms',
      'Optimized for local and regional search discovery'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'property listing website',
      'real estate search portal',
      'commercial property web design',
      'residential property marketplace',
      'React real estate app'
    ],
    targetAudience: 'Tenants, investors, commercial enterprises, and buyers seeking commercial and residential spaces.',
    deliverablesSummary: [
      'High-Performance Property Search Frontend',
      'Multi-Filter Real Estate Catalog',
      'Property Detail Views with Specification Grids',
      'Site Tour & Agent Callback Integration'
    ]
  },
  {
    id: 'abati',
    slug: 'abati-living',
    title: 'Abati Living',
    subtitle: 'Contemporary Residential Architecture & Living Spaces',
    metaTitle: 'Abati Living Case Study | Modern Residential Real Estate Website | Spark Station',
    metaDescription: 'Case study on Abati Living modern architectural web showcase built by Spark Station. Featuring responsive layouts, interior design tours, and buyer inquiries.',
    h1: 'Abati Living — Contemporary Residential Architecture & Living Spaces',
    category: 'web',
    industry: 'Residential Architecture & Modern Living Developments',
    servicesUsed: ['Web Development', 'UI/UX Design', 'Branding & Identity'],
    tags: ['Real Estate', 'React', 'Tailwind CSS', 'Architectural Design'],
    liveUrl: 'https://abati-website.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    overview: 'Abati is an architectural residential community designed for modern families, focusing on sustainable living, open green spaces, and contemporary building standards.',
    challenge: 'Communicating architectural philosophy, construction quality, and community living through a screen requires deliberate visual rhythm and immaculate typographic hierarchy.',
    solution: 'Spark Station crafted an immersive, visually captivating web portal highlighting architectural renderings, sustainability metrics, floor layout options, and effortless site-visit booking.',
    keyFeatures: [
      'Architectural showcase highlighting design philosophy and green initiatives',
      'Floor layout explorer with dimension specifications and room plans',
      'Community amenities and neighborhood infrastructure highlights',
      'Instant site visit and digital brochure request forms',
      'Smooth responsive layout across desktop, tablet, and mobile'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    relevantKeywords: [
      'modern real estate website',
      'architectural residential website',
      'sustainable housing web portal',
      'property developer web design',
      'React housing website'
    ],
    targetAudience: 'Families seeking contemporary, architecturally refined residential living with modern conveniences.',
    deliverablesSummary: [
      'Modern Architectural Web Experience',
      'Floor Layout & Room Specification Explorer',
      'Digital Brochure & Site-Visit Request Funnel',
      'Sustainable Living Feature Matrix'
    ]
  }
];

export function getCaseStudyBySlug(slugOrId: string): CaseStudyItem | undefined {
  const normalized = slugOrId.toLowerCase().trim();
  return CASE_STUDIES.find(
    (cs) => cs.slug.toLowerCase() === normalized || cs.id.toLowerCase() === normalized
  );
}

export function getOtherCaseStudies(currentSlugOrId: string, limit: number = 3): CaseStudyItem[] {
  const current = getCaseStudyBySlug(currentSlugOrId);
  return CASE_STUDIES.filter((cs) => cs.id !== current?.id && cs.slug !== current?.slug).slice(0, limit);
}
