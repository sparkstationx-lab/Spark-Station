export interface ServiceDeliverable {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceTechCategory {
  category: string;
  items: string[];
}

export interface ServiceIndustryCase {
  industry: string;
  solution: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  badge: string;
  iconName: string;
  color: string;
  accentBg: string;
  overview: string;
  gwaliorRelevance: string;
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  techStack: ServiceTechCategory[];
  industryApplications: ServiceIndustryCase[];
  faqs: ServiceFAQ[];
  benefits: string[];
  timeline: string;
  pricingNote: string;
}

export const SERVICES_DETAILED: ServiceDetail[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    metaTitle: "Web Development Agency in Gwalior | Custom Websites & Web Apps | Spark Station",
    metaDescription: "Expert web development in Gwalior by Spark Station. We build custom, high-speed websites, SaaS applications, and enterprise web portals using React, Next.js, and TypeScript.",
    h1: "Web Development Services in Gwalior — Built for Speed & Conversion",
    heroLead: "We build custom, lightning-fast web applications and responsive corporate portals engineered to outrank competitors and turn visitors into paying clients.",
    badge: "Full-Stack Web Engineering",
    iconName: "CodeXml",
    color: "#58A6FF",
    accentBg: "rgba(88, 166, 255, 0.1)",
    overview: "In today's digital landscape, a slow or template-bound website directly harms your brand credibility and search rankings. Spark Station provides end-to-end custom web development services in Gwalior and Central India. Rejecting bloated page builders, our engineering team crafts bespoke web solutions using modern frameworks like React, Next.js, and Node.js, ensuring 95+ Google PageSpeed scores, rigorous security, and seamless mobile responsiveness.",
    gwaliorRelevance: "As Gwalior accelerates its digital transformation—from heritage manufacturing hubs and medical centers to educational institutes and emerging startups—local businesses need professional digital storefronts that rival tier-1 metro standards. We combine on-the-ground regional understanding with international technical standards to help businesses in Gwalior and across Madhya Pradesh scale online.",
    benefits: [
      "Sub-second page load times for superior SEO",
      "Clean, maintainable, modular codebase",
      "Full ownership of all source code & deployment assets",
      "Optimized for mobile conversions and Core Web Vitals"
    ],
    timeline: "3–10 Business Days (based on scope)",
    pricingNote: "Transparent, custom quotes with zero hidden hosting markups",
    deliverables: [
      {
        title: "Custom Responsive Websites",
        desc: "Handcrafted UI built with React & Tailwind CSS that adapts flawlessly across smartphones, tablets, and 4K displays."
      },
      {
        title: "High-Performance Next.js Applications",
        desc: "Server-side rendering (SSR) and static generation (SSG) for instantaneous page loads and flawless search engine indexing."
      },
      {
        title: "Custom Web Portals & Dashboards",
        desc: "Role-based customer dashboards, internal inventory management portals, and client booking systems."
      },
      {
        title: "API Integrations & Payment Gateways",
        desc: "Seamless integration with Indian payment gateways (Razorpay, Cashfree, UPI), CRM tools, and third-party REST/GraphQL APIs."
      },
      {
        title: "PWA & Offline-First Readiness",
        desc: "Installable Progressive Web Apps with caching layers, instant touch response, and push notification infrastructure."
      },
      {
        title: "Hosting & CI/CD Cloud Setup",
        desc: "Automated continuous deployment pipelines on Vercel, AWS, or Cloudflare with SSL certification and CDN caching."
      }
    ],
    process: [
      {
        step: "01",
        title: "Requirement Scoping & Architecture",
        desc: "We analyze your target market, competitors, and functional requirements to blueprint a lean, future-proof tech architecture."
      },
      {
        step: "02",
        title: "UI Design & Component Prototyping",
        desc: "Creation of pixel-perfect component layouts and user journey flows, verified before writing a single line of production code."
      },
      {
        step: "03",
        title: "Clean Frontend & Backend Coding",
        desc: "Developing modular, type-safe TypeScript code adhering to strict security, semantic HTML, and Core Web Vitals standards."
      },
      {
        step: "04",
        title: "Rigorous QA, Deployment & Training",
        desc: "Multi-device cross-browser testing, automated lighthouse audits, DNS configuration, and hands-on client handover."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
      },
      {
        category: "Backend & Cloud",
        items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase", "REST & GraphQL"]
      },
      {
        category: "Hosting & DevOps",
        items: ["Vercel", "Cloudflare", "AWS", "GitHub Actions", "Docker"]
      }
    ],
    industryApplications: [
      {
        industry: "Healthcare & Clinics in Gwalior",
        solution: "Fast doctor appointment booking systems, department directories, and patient consultation portals."
      },
      {
        industry: "Real Estate & Construction",
        solution: "High-impact architectural portfolio showcases, floor plan viewers, and dynamic WhatsApp lead generators."
      },
      {
        industry: "Retail & Electronics",
        solution: "Live digital product catalogs, instant WhatsApp checkout, and streamlined local delivery workflows."
      },
      {
        industry: "Education & Coaching Centers",
        solution: "Course admission enquiry portals, study material downloads, and student testimonial showcases."
      }
    ],
    faqs: [
      {
        q: "Why should my business choose custom web development over WordPress or Wix?",
        a: "Custom-coded websites (built with React/Next.js) load significantly faster, have no plugin vulnerabilities, carry zero annual licensing lock-ins, and allow 100% custom UI. Google rewards fast, clean code with higher search rankings and lower bounce rates."
      },
      {
        q: "Can you re-develop or redesign our existing slow website?",
        a: "Yes. We frequently migrate legacy websites to modern Next.js and Tailwind stacks, preserving existing URL structures and SEO backlinks while slashing load times from 8+ seconds down to under 1 second."
      },
      {
        q: "Do you provide web maintenance after the website is launched?",
        a: "Absolutely. We offer ongoing maintenance, security updates, content updates, and server monitoring so your digital platform remains secure and peak-performing."
      },
      {
        q: "Will my website be mobile-friendly and work on all Indian networks?",
        a: "Every website we build is mobile-first and optimized for lightweight data transfer, ensuring crisp rendering even on 4G/3G mobile connections across Central India."
      }
    ]
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    metaTitle: "UI/UX Design Company in Gwalior | User Interface & Experience Design | Spark Station",
    metaDescription: "Top UI/UX design company in Gwalior. Spark Station creates intuitive, conversion-driven user interfaces, wireframes, and design systems for web apps, mobile apps, and SaaS platforms.",
    h1: "UI/UX Design Services in Gwalior — Intuitive Interfaces That Convert",
    heroLead: "We design clean, human-centered digital experiences that guide users naturally, elevate brand perception, and dramatically increase conversion rates.",
    badge: "Product Interface & UX Strategy",
    iconName: "Layout",
    color: "#F778BA",
    accentBg: "rgba(247, 120, 186, 0.1)",
    overview: "Great software fails when users can't figure out how to use it. Our UI/UX design services bridge aesthetic beauty and psychological utility. At Spark Station, we conduct empathetic user research, map out friction-free information architectures, and construct interactive Figma prototypes. Whether building a complex enterprise dashboard or a clean consumer mobile app, our design language delivers effortless interaction.",
    gwaliorRelevance: "For businesses in Gwalior stepping into digital commerce and online services, user trust is paramount. A clean, modern interface conveys instant professionalism and reliability to both regional customers and international clients, setting your brand apart from local competitors using outdated templates.",
    benefits: [
      "Friction-free customer onboarding and checkout flows",
      "Scalable design systems in Figma ready for developers",
      "Interactive click-through prototypes before code investment",
      "Rigorous adherence to accessibility and mobile ergonomics"
    ],
    timeline: "3–7 Business Days (based on screen count)",
    pricingNote: "Modular pricing based on UX flows and screen density",
    deliverables: [
      {
        title: "User Research & Persona Mapping",
        desc: "Deep analysis of user goals, pain points, and behavioral flows to inform navigation and layout decisions."
      },
      {
        title: "Information Architecture & Wireframing",
        desc: "Low-fidelity wireframes laying out content hierarchy, key interactions, and conversion pathways."
      },
      {
        title: "High-Fidelity Figma UI Designs",
        desc: "Pixel-perfect visual screens featuring custom typography, spacing math, color harmony, and iconography."
      },
      {
        title: "Interactive Clickable Prototypes",
        desc: "Fully functional prototype simulations allowing you and your stakeholders to experience the app before coding."
      },
      {
        title: "Design System & Component Library",
        desc: "Documented UI kit including typography scales, buttons, modals, input states, and color tokens."
      },
      {
        title: "Developer Handoff Documentation",
        desc: "Organized Figma files with auto-layout, responsive constraints, and CSS token specifications for smooth engineering."
      }
    ],
    process: [
      {
        step: "01",
        title: "Discover & Empathize",
        desc: "Understanding business objectives, target audience demographics, user intent, and competitive benchmarks."
      },
      {
        step: "02",
        title: "Flowchart & Wireframe",
        desc: "Structuring user journeys, sitemaps, and wireframes to eliminate cognitive friction and redundant clicks."
      },
      {
        step: "03",
        title: "Visual Design & Systematization",
        desc: "Crafting modern, accessible UI components with high optical contrast, elegant typography, and consistent spacing."
      },
      {
        step: "04",
        title: "Prototype & User Validation",
        desc: "Testing interactive flows with real users, incorporating feedback, and polishing animations for final handoff."
      }
    ],
    techStack: [
      {
        category: "Design Tools",
        items: ["Figma", "FigJam", "Adobe Illustrator", "Photoshop", "Penpot"]
      },
      {
        category: "Prototyping & Motion",
        items: ["Figma Interactive Components", "Framer", "Lottie Animations"]
      },
      {
        category: "Standards",
        items: ["WCAG 2.1 AA Accessibility", "Atomic Design System", "Mobile Ergonomics"]
      }
    ],
    industryApplications: [
      {
        industry: "SaaS & Web Software",
        solution: "Clean admin panels, data visualizers, analytics dashboards, and billing settings."
      },
      {
        industry: "Local Services & Booking",
        solution: "Step-by-step appointment scheduling with calendar pickers and instant confirmation feedback."
      },
      {
        industry: "Financial & Advisory Portals",
        solution: "Trust-inspiring calculators, secure document upload flows, and client portal interfaces."
      },
      {
        industry: "Mobile-First Consumer Apps",
        solution: "Bottom navigation ergonomics, thumb-zone optimized touch targets, and swift card-based interactions."
      }
    ],
    faqs: [
      {
        q: "Will the design files be ready for our development team to build?",
        a: "Yes. We design strictly in Figma using auto-layout, organized layers, named tokens, and developer inspect documentation so your developers (or our in-house team) can code them pixel-for-pixel."
      },
      {
        q: "What is the difference between UI and UX design?",
        a: "UX (User Experience) is the functional architecture—how easy, fast, and logical it is for users to achieve their goals. UI (User Interface) is the visual skin—the colors, typography, buttons, and aesthetic polish. We master both simultaneously."
      },
      {
        q: "Can you redesign our existing application to look more modern?",
        a: "Yes. We perform UI/UX audits to pinpoint where users drop off, then modernize the visual design while streamlining user flows to boost engagement and conversions."
      }
    ]
  },
  {
    id: "branding",
    slug: "branding-identity",
    title: "Branding & Identity",
    shortTitle: "Branding",
    metaTitle: "Branding Agency in Gwalior | Corporate Identity & Logo Design | Spark Station",
    metaDescription: "Distinctive corporate branding and logo design in Gwalior by Spark Station. We craft iconic logos, typography pairings, color systems, and comprehensive brand books.",
    h1: "Branding & Identity Design in Gwalior — Make Your Business Unforgettable",
    heroLead: "We craft distinctive logos, memorable color palettes, and comprehensive brand systems that establish instant credibility and set you apart in crowded markets.",
    badge: "Visual Identity & Brand Strategy",
    iconName: "Palette",
    color: "#34D399",
    accentBg: "rgba(52, 211, 153, 0.1)",
    overview: "Your brand is more than just a logo; it is the visual and emotional promise you make to every customer. In an era where digital first impressions happen in milliseconds, weak branding costs you revenue. Spark Station crafts coherent, memorable visual identities that scale seamlessly from a 16x16 pixel favicon to massive billboard outdoor signage. We define the colors, typography, graphic language, and brand voice that make your company unmistakable.",
    gwaliorRelevance: "Gwalior has a rich entrepreneurial tradition, yet many established businesses struggle to attract modern, high-value clients because their visual branding reflects decades-old design conventions. We help forward-thinking Gwalior enterprises rebrand with contemporary authority while honoring their core heritage.",
    benefits: [
      "Timeless vector logo marks and responsive lockups",
      "Carefully chosen color psychology and typography hierarchy",
      "Complete Brand Book guide ensuring consistent execution",
      "Social media, business cards, and marketing collateral kits"
    ],
    timeline: "3–6 Business Days",
    pricingNote: "Fixed, transparent packages with full commercial copyright transfer",
    deliverables: [
      {
        title: "Primary Logo & Responsive Lockups",
        desc: "Vector logo marks, wordmarks, horizontal/vertical lockups, and optimized monochrome variants."
      },
      {
        title: "Color Palette & Contrast System",
        desc: "Primary, secondary, and accent color formulas (HEX, RGB, CMYK, Pantone) optimized for screen and print."
      },
      {
        title: "Typography System & Hierarchy",
        desc: "Curated display and body font pairings with rules for heading scales, letter-spacing, and line heights."
      },
      {
        title: "Comprehensive Brand Guidelines (PDF)",
        desc: "A definitive manual covering logo clearspace, incorrect usage, iconography rules, and visual tone of voice."
      },
      {
        title: "Social Media Identity Kit",
        desc: "High-resolution avatars, banner headers, post templates, and story formats for LinkedIn, Instagram, and X."
      },
      {
        title: "Stationery & Corporate Collateral",
        desc: "Print-ready vector templates for business cards, letterheads, invoice templates, and presentation decks."
      }
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery & Market Audit",
        desc: "Uncovering your core mission, target audience expectations, brand archetype, and competitor positioning."
      },
      {
        step: "02",
        title: "Concept Ideation & Sketches",
        desc: "Exploring multiple distinct creative directions, metaphor explorations, and typography sketches."
      },
      {
        step: "03",
        title: "Vector Refinement & Palette Craft",
        desc: "Precision geometric drafting in vector formats, testing optical balance and legibility across all scales."
      },
      {
        step: "04",
        title: "Brand Book Creation & Asset Delivery",
        desc: "Packaging all master vector files (SVG, EPS, AI, PNG), font licenses, and guidelines for immediate deployment."
      }
    ],
    techStack: [
      {
        category: "Vector & Illustration",
        items: ["Adobe Illustrator", "Figma", "Vector Pen Tooling"]
      },
      {
        category: "Layout & Print",
        items: ["Adobe InDesign", "Photoshop", "Print CMYK Prepress"]
      },
      {
        category: "Deliverables",
        items: ["SVG", "EPS", "PDF", "High-res PNG (Transparent)", "Favicons"]
      }
    ],
    industryApplications: [
      {
        industry: "Startups & Emerging Tech",
        solution: "Modern, minimal logos that look sharp in app stores, pitch decks, and digital products."
      },
      {
        industry: "Retail & Consumer Goods",
        solution: "Vibrant packaging graphics, label design, and memorable shopping bag branding."
      },
      {
        industry: "Real Estate & Construction",
        solution: "Prestigious, architectural emblems that communicate structural solidity and luxury."
      },
      {
        industry: "Professional Services & CA Firms",
        solution: "Dignified, trustworthy marks reflecting institutional integrity and financial acumen."
      }
    ],
    faqs: [
      {
        q: "Do I get full commercial ownership of the logo and brand assets?",
        a: "Yes, 100%. Upon completion and delivery, all intellectual property, copyright, and master vector files belong exclusively to you."
      },
      {
        q: "What file formats will I receive?",
        a: "You receive industry-standard vector files (AI, EPS, SVG, PDF) which can be scaled infinitely without losing quality, as well as web-ready transparent PNGs and JPEGs."
      },
      {
        q: "Can you help refresh an existing logo without completely changing our identity?",
        a: "Yes, our brand modernization service cleans up geometric lines, updates outdated typography, and refines colors while retaining your recognized visual equity."
      }
    ]
  },
  {
    id: "product-design",
    slug: "product-design",
    title: "Product Design",
    shortTitle: "Product Design",
    metaTitle: "Product Design Agency in Gwalior | MVP Design & Prototyping | Spark Station",
    metaDescription: "Transform your digital idea into a market-ready product. Spark Station provides digital product design, MVP scoping, user journey mapping, and prototyping in Gwalior.",
    h1: "Digital Product Design & MVP Scoping in Gwalior",
    heroLead: "From conceptual napkin sketch to clickable MVP prototype, we help founders and innovators shape complex digital ideas into market-tested software products.",
    badge: "End-to-End Product Strategy",
    iconName: "Compass",
    color: "#FBBF24",
    accentBg: "rgba(251, 191, 36, 0.1)",
    overview: "Building software without clear product design leads to expensive engineering rework and products that users abandon. Spark Station's product design service helps founders, product managers, and business owners de-risk their investments. We validate hypotheses, prioritize high-impact Minimum Viable Product (MVP) feature sets, map customer user journeys, and construct interactive prototypes ready for user testing and investor pitching.",
    gwaliorRelevance: "Central India is witnessing a wave of ambitious tech founders and traditional business owners launching digital spin-offs. We provide Gwalior founders with top-tier product strategy and design execution, giving regional startups the edge needed to compete nationally.",
    benefits: [
      "De-risk engineering spend by validating product flows in advance",
      "Investor-ready clickable prototypes that secure funding",
      "Clear MVP feature prioritization preventing scope creep",
      "Seamless technical handoff directly into React/Next.js code"
    ],
    timeline: "5–12 Business Days",
    pricingNote: "Milestone-based sprints tailored to your product roadmap",
    deliverables: [
      {
        title: "Product Discovery & User Journey Maps",
        desc: "Mapping user personas, primary jobs-to-be-done, key friction points, and conversion moments."
      },
      {
        title: "MVP Feature Scoping & Prioritization",
        desc: "Separating must-have features from nice-to-haves using MoSCoW prioritization to keep launch fast and lean."
      },
      {
        title: "Complete Application Flow Architecture",
        desc: "Sitemaps and node-based flowcharts detailing all onboarding, transaction, settings, and edge-case states."
      },
      {
        title: "Interactive High-Fidelity Prototype",
        desc: "Figma prototype simulating authentic software behavior, ideal for investor meetings and customer usability testing."
      },
      {
        title: "Technical Specification Document (PRD)",
        desc: "Clear product requirements documentation outlining data structures, API endpoints, and user stories."
      },
      {
        title: "Scalable UI Component Library",
        desc: "Atomic design system built to scale as your product adds new modules, features, and user roles."
      }
    ],
    process: [
      {
        step: "01",
        title: "Product Vision & Hypothesis",
        desc: "Dissecting the core problem statement, target customer needs, and measurable business success metrics."
      },
      {
        step: "02",
        title: "User Flow Mapping & Information Architecture",
        desc: "Blueprinting user paths to ensure the shortest route to value for every core customer action."
      },
      {
        step: "03",
        title: "Rapid Iterative Prototyping",
        desc: "Designing interactive screens, validating usability through iterative feedback rounds."
      },
      {
        step: "04",
        title: "Engineering Handoff & Sprint Planning",
        desc: "Documenting states, edge cases, error messages, and API data payloads for immediate engineering kickoff."
      }
    ],
    techStack: [
      {
        category: "Product Management",
        items: ["Notion PRDs", "Miro", "FigJam", "User Story Mapping"]
      },
      {
        category: "UX & Prototyping",
        items: ["Figma Interactive Prototyping", "Design Tokens", "Lottie"]
      },
      {
        category: "Validation",
        items: ["Usability Testing", "A/B Test Mockups", "Analytics Setup"]
      }
    ],
    industryApplications: [
      {
        industry: "SaaS Platforms",
        solution: "Multi-tenant workspaces, subscription billing flows, team management, and role-based permissions."
      },
      {
        industry: "Marketplaces & Portals",
        solution: "Two-sided platforms connecting buyers and sellers with search filters, chat, and verified reviews."
      },
      {
        industry: "Healthcare & Telehealth",
        solution: "Secure patient record viewer, tele-consultation scheduling, and prescription management."
      },
      {
        industry: "EdTech & Learning Portals",
        solution: "Interactive student dashboards, quiz modules, progress tracking, and video course players."
      }
    ],
    faqs: [
      {
        q: "Can I use the prototype to pitch to angel investors or venture capitalists?",
        a: "Yes. Many founders use our high-fidelity interactive Figma prototypes to demonstrate real software capability to investors before writing extensive backend code."
      },
      {
        q: "What if I already have a rough wireframe or specification?",
        a: "We love working from existing wireframes. We will review your architecture, refine UX pain points, upgrade the visual system, and deliver an engineering-ready product design."
      },
      {
        q: "Can Spark Station also build the code after designing the product?",
        a: "Yes. As a full-stack digital agency, our frontend and backend engineers work directly with our designers, making the transition from design to live code seamless."
      }
    ]
  },
  {
    id: "ecommerce",
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    metaTitle: "E-Commerce Website Development in Gwalior | Online Store Design | Spark Station",
    metaDescription: "Scalable e-commerce website development in Gwalior. Spark Station builds high-converting online stores with Razorpay, Cashfree, UPI, and automated inventory management.",
    h1: "E-Commerce Solutions & Online Stores in Gwalior",
    heroLead: "We build scalable, high-converting digital storefronts with seamless payment gateways, automated WhatsApp checkout, and streamlined inventory management.",
    badge: "Digital Retail & D2C Engineering",
    iconName: "ShoppingBag",
    color: "#38BDF8",
    accentBg: "rgba(56, 189, 248, 0.1)",
    overview: "Selling online requires speed, trust, and simplicity. A cumbersome checkout process or a sluggish storefront directly causes cart abandonment. Spark Station develops high-conversion e-commerce websites in Gwalior tailored to both D2C brands and traditional retail businesses. From lightning-fast headless Next.js storefronts to tailored Shopify and WooCommerce builds, we engineer online stores that handle traffic spikes and deliver reliable transactions.",
    gwaliorRelevance: "Gwalior is a prominent commercial trading hub in Central India with thriving apparel, electronics, handicrafts, and FMCG retailers. We help Gwalior merchants expand beyond local physical footfall, establishing pan-India online sales channels with automated shipping and integrated UPI/Card payments.",
    benefits: [
      "Frictionless 1-step checkout with instant UPI and Card payments",
      "Mobile-first design capturing high-intent smartphone shoppers",
      "Automated WhatsApp order confirmation and tracking updates",
      "Easy-to-use admin dashboard for updating products and inventory"
    ],
    timeline: "5–10 Business Days",
    pricingNote: "Custom quote based on catalog size and gateway requirements",
    deliverables: [
      {
        title: "High-Speed Product Catalogs",
        desc: "Fast filtering, search autocomplete, category sorting, and high-resolution multi-angle image galleries."
      },
      {
        title: "Secure Payment Gateway Integration",
        desc: "Full integration with Razorpay, Cashfree, Stripe, PayU, and PhonePe supporting UPI, Credit Cards, NetBanking, and COD."
      },
      {
        title: "Mobile-Optimized Cart & Checkout",
        desc: "Minimized form fields, auto-filled address inputs, and single-click checkout designed to cut abandonment rates."
      },
      {
        title: "Inventory & Order Management Dashboard",
        desc: "Intuitive admin control center for managing stock counts, order fulfillment, shipping statuses, and customer data."
      },
      {
        title: "Automated WhatsApp & Email Notifications",
        desc: "Instant transactional alerts sent to the customer and store owner upon order placement, dispatch, and delivery."
      },
      {
        title: "E-Commerce SEO & Rich Snippets",
        desc: "Structured schema markup showing product pricing, stock availability, and review ratings directly on Google Search."
      }
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy & Catalog Structuring",
        desc: "Analyzing your product lines, pricing models, shipping logistics, and tax requirements."
      },
      {
        step: "02",
        title: "Conversion-Focused Storefront Design",
        desc: "Designing trustworthy product display pages, sticky buy buttons, and intuitive navigation menus."
      },
      {
        step: "03",
        title: "Payment & Logistics Integration",
        desc: "Hooking up payment gateways, shipping APIs (Shiprocket, Delhivery), and automated transactional communications."
      },
      {
        step: "04",
        title: "Rigorous Test Transactions & Launch",
        desc: "Simulating live checkout runs, payment success/failure webhooks, refund flows, and mobile responsiveness."
      }
    ],
    techStack: [
      {
        category: "Storefront Tech",
        items: ["Next.js Commerce", "React", "Shopify Liquid", "WooCommerce", "Tailwind CSS"]
      },
      {
        category: "Payment & Logistics",
        items: ["Razorpay", "Cashfree", "Stripe", "UPI QR Gateway", "Shiprocket API"]
      },
      {
        category: "Database & Backends",
        items: ["Supabase", "PostgreSQL", "Node.js", "Firebase", "Sanity CMS"]
      }
    ],
    industryApplications: [
      {
        industry: "Retail Electronics & Gadgets",
        solution: "Demonstrated through our live project Shrinit Enterprises with dynamic product listings and customer queries."
      },
      {
        industry: "Apparel, Fashion & Textiles",
        solution: "Size charts, color variant selectors, curated lookbooks, and Instagram shop syncing."
      },
      {
        industry: "Direct-to-Consumer (D2C) Brands",
        solution: "Subscription refill logic, bundle discounts, review integrations, and customer loyalty rewards."
      },
      {
        industry: "B2B Wholesale Portals",
        solution: "Minimum order quantity (MOQ) logic, tier-based pricing tables, and GST invoice generation."
      }
    ],
    faqs: [
      {
        q: "What payment methods will my customers be able to use?",
        a: "Through gateways like Razorpay and Cashfree, your customers can pay via Google Pay, PhonePe, Paytm, BHIM UPI, all Credit/Debit cards, Net Banking, and optional Cash on Delivery (COD)."
      },
      {
        q: "Can I manage products and prices myself without coding knowledge?",
        a: "Yes. We deliver user-friendly admin panels where you can add new products, adjust pricing, upload photos, and view new orders in just a few clicks."
      },
      {
        q: "How does automated WhatsApp order notification work?",
        a: "When a customer completes a purchase, the system automatically triggers a WhatsApp confirmation message to their phone number and notifies your sales team instantly."
      }
    ]
  },
  {
    id: "seo",
    slug: "seo-performance",
    title: "SEO & Performance",
    shortTitle: "SEO & Speed",
    metaTitle: "SEO Agency in Gwalior | Search Engine Optimization & Web Performance | Spark Station",
    metaDescription: "Top SEO agency in Gwalior. Spark Station delivers technical SEO audits, Google Business Profile optimization, Core Web Vitals acceleration, and organic ranking strategies.",
    h1: "SEO & Web Performance Services in Gwalior — Dominate Search Rankings",
    heroLead: "We combine deep technical SEO, Core Web Vitals optimization, and targeted local/regional search strategies to place your business at the top of Google results.",
    badge: "Technical SEO & Organic Growth",
    iconName: "Search",
    color: "#A855F7",
    accentBg: "rgba(168, 85, 247, 0.1)",
    overview: "A beautiful website produces zero ROI if your prospective customers cannot find it. Search Engine Optimization is not about guessing keywords; it is a systematic engineering discipline. At Spark Station, we approach SEO from the ground up: repairing technical indexing defects, structuring semantic JSON-LD schemas, accelerating page speed to satisfy Google Core Web Vitals, and executing strategic on-page content optimization.",
    gwaliorRelevance: "For businesses in Gwalior, localized search is a massive untapped competitive opportunity. Ranking for terms like 'in Gwalior', 'near me', and regional industry terms captures high-intent customers who are ready to purchase today. We help local enterprises establish local search dominance across Gwalior, Madhya Pradesh, and Central India.",
    benefits: [
      "Top Google organic rankings for high-intent business keywords",
      "Green 90+ Core Web Vitals scores boosting search algorithm favor",
      "Optimized Google Business Profile and local map pack visibility",
      "Transparent reporting with measurable traffic and conversion data"
    ],
    timeline: "Ongoing Monthly Retainers & 1-Time Audits",
    pricingNote: "Performance-oriented plans tailored to market competition",
    deliverables: [
      {
        title: "Comprehensive Technical SEO Audit",
        desc: "Crawling every URL to fix 404 broken links, redirect loops, canonical anomalies, and indexation bottlenecks."
      },
      {
        title: "Core Web Vitals & Speed Acceleration",
        desc: "Compressing assets, eliminating render-blocking scripts, and optimizing LCP/CLS metrics to achieve top speed scores."
      },
      {
        title: "Local SEO & Google Business Profile (GBP)",
        desc: "Optimizing your Gwalior local presence, citations, map listings, and review engagement strategies."
      },
      {
        title: "Advanced Schema Markup (JSON-LD)",
        desc: "Injecting rich structured data for LocalBusiness, Services, FAQs, and Breadcrumbs for eye-catching rich snippets."
      },
      {
        title: "High-Intent Keyword Strategy",
        desc: "Targeting commercial keywords that your actual buyers search for, balancing competitive volume with quick wins."
      },
      {
        title: "Monthly Transparent Analytics & Growth Reports",
        desc: "Clear ranking movements, organic impression tracking, and concrete lead attribution reports."
      }
    ],
    process: [
      {
        step: "01",
        title: "Full Website & Competitor Audit",
        desc: "Evaluating existing search performance, crawl health, backlink profile, and local Gwalior competitors."
      },
      {
        step: "02",
        title: "Technical Fixes & Speed Engineering",
        desc: "Resolving server issues, optimizing image formats to WebP, minifying code, and streamlining canonical tags."
      },
      {
        step: "03",
        title: "On-Page Architecture & Structured Data",
        desc: "Optimizing title tags, meta descriptions, H1/H2 header hierarchies, and rich schema markup."
      },
      {
        step: "04",
        title: "Ongoing Monitoring & Content Expansion",
        desc: "Tracking Google Search Console index status, keyword rankings, and refining pages based on live search trends."
      }
    ],
    techStack: [
      {
        category: "SEO Tools",
        items: ["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Screaming Frog"]
      },
      {
        category: "Speed & Performance",
        items: ["Google PageSpeed Insights", "Lighthouse", "Web Vitals API", "Cloudflare CDN"]
      },
      {
        category: "Structured Data",
        items: ["Schema.org JSON-LD", "OpenGraph Protocol", "Twitter Cards", "XML Sitemaps"]
      }
    ],
    industryApplications: [
      {
        industry: "Local Clinics & Doctors in Gwalior",
        solution: "Dominating local search results when patients search for specialists, treatments, and clinic locations in Gwalior."
      },
      {
        industry: "Real Estate Developers",
        solution: "Ranking at the top for residential flats, commercial properties, and townships in Gwalior."
      },
      {
        industry: "Professional Services & CA Firms",
        solution: "Generating inbound business owner inquiries for taxation, auditing, and corporate registration."
      },
      {
        industry: "E-Commerce & D2C Brands",
        solution: "Ranking high for competitive product category searches with rich price and rating search snippets."
      }
    ],
    faqs: [
      {
        q: "How long does it take to see SEO results in Gwalior?",
        a: "Local SEO enhancements (Google Business Profile, technical fixes, schema) often yield initial ranking improvements within 3 to 6 weeks. Broad organic keyword rankings in competitive niches typically build steady compounding growth over 3 to 6 months."
      },
      {
        q: "What makes your SEO service different from automated spam agencies?",
        a: "We are software engineers, not keyword spammers. We fix the actual code, accelerate page loading to sub-second speeds, write semantic structured data, and create genuine content that solves user queries."
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No legitimate agency can guarantee #1 placement because Google's algorithm changes constantly. What we guarantee is rigorous adherence to Google Search Essentials, superior technical performance, and proven white-hat growth methodologies."
      }
    ]
  },
  {
    id: "consultancy",
    slug: "technical-consultancy",
    title: "Technical Consultancy",
    shortTitle: "Consultancy",
    metaTitle: "Technical Consultancy & Architecture Advisory in Gwalior | Spark Station",
    metaDescription: "Expert software architecture and technical consultancy in Gwalior. Spark Station advises founders and companies on tech stack selection, code audits, and cloud scalability.",
    h1: "Technical Consultancy & Software Architecture Advisory in Gwalior",
    heroLead: "We provide high-impact technical leadership, unbiased code audits, and scalable cloud architecture advisory to help businesses make confident technology decisions.",
    badge: "CTO Advisory & Cloud Architecture",
    iconName: "Cpu",
    color: "#EC4899",
    accentBg: "rgba(236, 72, 153, 0.1)",
    overview: "Making the wrong technology choice early on can cost your business tens of thousands of dollars in technical debt and months of stalled progress. Spark Station provides pragmatic technical consultancy and fractional CTO advisory for growing startups and established enterprises. We review existing codebases, evaluate third-party vendor proposals, design cloud infrastructure, and chart realistic engineering roadmaps.",
    gwaliorRelevance: "Many non-technical business owners and executives in Gwalior rely on outside development agencies and are unsure whether they are being overcharged or given suboptimal technology. We act as your trusted technical partner on the ground, ensuring your software investments are sound, secure, and cost-effective.",
    benefits: [
      "Unbiased, vendor-neutral technology evaluation",
      "Identification of critical security vulnerabilities and bottlenecks",
      "Cost-optimized cloud architectures reducing monthly hosting bills",
      "Direct technical leadership bridging executive vision with developer execution"
    ],
    timeline: "Advisory Sessions or Structured Sprint Audits",
    pricingNote: "Hourly advisory rates or project-based architecture packages",
    deliverables: [
      {
        title: "Codebase & Architecture Audit",
        desc: "Thorough review of frontend and backend code for security risks, scalability limits, and maintainability issues."
      },
      {
        title: "Tech Stack Evaluation & Roadmap",
        desc: "Recommending the ideal languages, frameworks, databases, and third-party APIs matched to your budget."
      },
      {
        title: "Cloud Infrastructure & Cost Optimization",
        desc: "Right-sizing AWS, Vercel, Supabase, or Google Cloud servers to eliminate wasteful cloud spending."
      },
      {
        title: "Vendor & Proposal Due Diligence",
        desc: "Analyzing quotes and technical specifications from third-party vendors to protect you from inflated estimates."
      },
      {
        title: "Database Architecture & Query Tuning",
        desc: "Designing normalized relational schemas (PostgreSQL) or NoSQL databases with indexing for high query speeds."
      },
      {
        title: "Fractional CTO Advisory Sessions",
        desc: "Dedicated recurring advisory calls with founder Saksham Pandey and senior technical leads to guide your growth."
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Deep Dive",
        desc: "Reviewing existing repositories, server logs, architectural diagrams, and business growth milestones."
      },
      {
        step: "02",
        title: "Audit Execution & Vulnerability Scan",
        desc: "Inspecting code quality, dependency health, database queries, and deployment pipeline resilience."
      },
      {
        step: "03",
        title: "Comprehensive Findings Report",
        desc: "Delivering an executive summary with prioritized red-flag items, low-hanging fruit, and strategic suggestions."
      },
      {
        step: "04",
        title: "Implementation Guidance & Review",
        desc: "Collaborating with your engineering team to guide remediation and verify architectural improvements."
      }
    ],
    techStack: [
      {
        category: "Cloud Platforms",
        items: ["AWS", "Google Cloud", "Vercel", "Cloudflare", "Supabase"]
      },
      {
        category: "Databases & Systems",
        items: ["PostgreSQL", "Redis", "MySQL", "Docker", "Microservices"]
      },
      {
        category: "Audit Tooling",
        items: ["SonarQube", "ESLint", "TypeScript", "OWASP Security Standards"]
      }
    ],
    industryApplications: [
      {
        industry: "Funded Startups & Scaleups",
        solution: "Pre-fundraise technical due diligence and scaling architecture before high-volume user influx."
      },
      {
        industry: "Traditional Enterprises in Gwalior",
        solution: "Advising leadership on transitioning internal manual processes into custom internal cloud tools."
      },
      {
        industry: "Companies with Slow Legacy Systems",
        solution: "Decoupling monolithic legacy software into fast modern micro-services without disrupting operations."
      },
      {
        industry: "Non-Technical Founders",
        solution: "Acting as an in-house technical co-founder to interview developers and validate architecture."
      }
    ],
    faqs: [
      {
        q: "When does a business need technical consultancy?",
        a: "You need consultancy when you are starting a new software project and want to choose the right tech stack, when your existing app is suffering from crashes and slow performance, or when you need an expert opinion before hiring developers."
      },
      {
        q: "Can you review code written by another agency?",
        a: "Yes. We frequently conduct independent third-party audits of codebases delivered by other agencies to verify if it meets professional coding, security, and scalability benchmarks."
      },
      {
        q: "How do we get started with an initial advisory session?",
        a: "You can book an introductory consultation directly through WhatsApp or email. We will discuss your current architecture and outline a targeted scope of review."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  return SERVICES_DETAILED.find(
    (s) => s.slug === normalized || s.id === normalized
  );
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DETAILED.map((s) => s.slug);
}
