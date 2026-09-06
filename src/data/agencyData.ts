import { FAQItem, ServiceItem, TeamMember, ProjectItem } from '../types';

export const AGENCY_INFO = {
  name: "SPARK STATION",
  headline: "We Build Digital Solutions That Work",
  subheadline: "Helping startups, businesses, and creators build, grow, and scale online. From web apps to brand identities — we deliver results.",
  copyright: "© 2026 Spark Station. All rights reserved.",
  whatsapp: "+91 9111376314",
  whatsappUrl: "https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation",
  call: "+91 9111376314",
  callSaksham: "+91 9111376314",
  callManas: "+91 7224935780",
  email: "sparkstation.x@gmail.com"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'electronics-shop',
    title: 'Shrinit Enterprises',
    category: 'web',
    desc: 'Comprehensive e-commerce platform for retail electronics, featuring streamlined catalog management and secure checkout.',
    tags: ['React', 'E-commerce'],
    liveUrl: 'https://shrinit-enterprisess.vercel.app/',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a81a4b1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chiranjivi-clinic',
    title: 'Chiranjivi Clinic',
    category: 'web',
    desc: 'Patient-centric medical service portal facilitating seamless appointment scheduling and digital health record management.',
    tags: ['React', 'Healthcare'],
    liveUrl: 'https://chiranjeevi-clinic.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'jhansi-empire',
    title: 'Jhansi Empire',
    category: 'web',
    desc: 'Professional real estate and housing society management portal showcasing residential property listings.',
    tags: ['Real Estate', 'Management'],
    liveUrl: 'https://jhansi-empire-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'advance-property',
    title: 'Advance Property Construction',
    category: 'web',
    desc: 'Modern construction company website featuring project portfolios and service capabilities for commercial and residential developments.',
    tags: ['Construction', 'Portfolio'],
    liveUrl: 'https://advance-property-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503387762-592dfe58ef4a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'shayona-space',
    title: 'Shayona Space',
    category: 'web',
    desc: 'High-end real estate property showcase platform focused on architectural aesthetics and luxury living spaces.',
    tags: ['Real Estate', 'Luxury'],
    liveUrl: 'https://shayona-space-1.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'futura-groups',
    title: 'Futura Groups',
    category: 'web',
    desc: 'Strategic real estate development portal designed for high-volume property listings and investor engagement.',
    tags: ['Real Estate', 'Investment'],
    liveUrl: 'https://futura-groups-0.vercel.app/',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pavitra-mobiles',
    title: 'Pavitra Mobiles',
    category: 'web',
    desc: 'Mobile phone retailer portal showcasing latest gadgets and accessories.',
    tags: ['Retail', 'Mobile'],
    liveUrl: 'https://pavitra-mobile.vercel.app/',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'happy-tooth',
    title: 'Happy Tooth',
    category: 'web',
    desc: 'Dental clinic appointment and services portal for comprehensive dental care.',
    tags: ['Healthcare', 'Dental'],
    liveUrl: 'https://happy-tooth-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'adarsh-gupta',
    title: 'Adarsh Gupta CA',
    category: 'web',
    desc: 'Professional Chartered Accountant portal providing financial services and advisory.',
    tags: ['Finance', 'Professional'],
    liveUrl: 'https://gupta-adarsh-co.vercel.app/',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    category: 'web',
    desc: 'Property listing and management platform for commercial and residential real estate.',
    tags: ['Real Estate'],
    liveUrl: 'https://real-estate-livid-psi.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'abati',
    title: 'Abati',
    category: 'web',
    desc: 'Real estate development and property showcase for modern living.',
    tags: ['Real Estate'],
    liveUrl: 'https://abati-website.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  }
];

export const TRUSTED_BADGES = [
  "TechStartup Co.",
  "LocalBiz Hub",
  "Creator Studio",
  "ScaleUp Ventures",
  "Digital Agency X"
];

export const PROBLEMS = [
  "Outdated or non-existent digital presence",
  "Poor user experience losing potential customers",
  "Slow, buggy applications damaging your brand",
  "Lack of technical expertise on your team",
  "High agency costs with low-quality results"
];

export const SOLUTIONS = [
  "Modern, fast websites & digital solutions built to convert",
  "UX-first design that delights your users",
  "Clean, maintainable code that scales",
  "A dedicated expert team behind every project",
  "Transparent, fair pricing with real results"
];

export const PILLARS = [
  {
    icon: "Zap",
    title: "Fast Delivery",
    desc: "We move quickly without cutting corners. Your deadlines are our deadlines."
  },
  {
    icon: "CodeXml",
    title: "Quality Code",
    desc: "Clean, documented, maintainable code. Built to last and scale."
  },
  {
    icon: "TrendingUp",
    title: "Custom Pricing",
    desc: "No cookie-cutter packages. Fair, transparent quotes tailored to you."
  },
  {
    icon: "Users",
    title: "Ongoing Support",
    desc: "We don't disappear after launch. We're here for the long haul."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites built with React, Next.js, and modern tools. Fast load times & SEO optimized.",
    iconName: "CodeXml",
    color: "#58A6FF",
    benefits: ["Fast Delivery", "Quality Code", "Custom Pricing", "Ongoing Support"],
    useCases: ["SaaS Landing Pages", "Company Websites", "Web Applications", "Customer Portals"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    desc: "Intuitive, conversion-focused design systems, prototypes, and user interfaces that delight your customers.",
    iconName: "Layout",
    color: "#F778BA",
    benefits: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"],
    useCases: ["Redesign Projects", "New App Concepts", "Landing Page CRO", "Brand Guidelines"]
  },
  {
    id: "branding",
    title: "Branding & Identity",
    desc: "Distinctive logos, color palettes, typography, and complete brand guidelines that make your business stand out.",
    iconName: "Palette",
    color: "#34D399",
    benefits: ["Logo Design", "Color Palettes", "Typography", "Brand Book"],
    useCases: ["Rebranding", "New Startups", "Product Launches", "Social Media Kits"]
  },
  {
    id: "product-design",
    title: "Product Design",
    desc: "From MVP ideation to full product roadmap and wireframes. We help shape your vision into a viable digital product.",
    iconName: "Compass",
    color: "#FBBF24",
    benefits: ["Product Strategy", "User Journey Maps", "Feature Prioritization", "Rapid Prototyping"],
    useCases: ["Pitch Decks", "Angel Investors", "Beta Launches", "Feature Expansions"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with seamless checkout, payment gateway integrations, and robust inventory management.",
    iconName: "ShoppingBag",
    color: "#38BDF8",
    benefits: ["Stripe & Razorpay", "Custom Cart Logic", "Order Tracking", "Admin Dashboard"],
    useCases: ["D2C Brands", "Digital Downloads", "Subscription Boxes", "B2B Wholesale"]
  },
  {
    id: "seo",
    title: "SEO & Performance",
    desc: "Technical SEO audits, core web vitals optimization, structured data, and comprehensive organic search campaigns to help your business dominate search rankings.",
    iconName: "Search",
    color: "#A855F7",
    benefits: ["60 Target Keywords", "Complete SEO Management", "AI & Voice Optimization", "12 Blog Articles / Mo"],
    useCases: ["Organic Growth", "National & Local Brand SEO", "High Competition Niches", "E-Commerce SEO"]
  },
  {
    id: "consultancy",
    title: "Technical Consultancy",
    desc: "Architecture reviews, tech stack selection, cloud infrastructure setup, and technical leadership for growing engineering teams.",
    iconName: "Cpu",
    color: "#EC4899",
    benefits: ["Code Audits", "Scalability Planning", "Security Reviews", "Cost Optimization"],
    useCases: ["Scaling Architecture", "CTO Advisory", "Tech Stack Migration", "Cloud Deployment"]
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does a project cost?",
    a: "We provide custom quotes based on your specific requirements, scope, and timeline. Contact us for a free consultation and we'll give you a transparent breakdown."
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by project complexity. A landing page might take 1-2 days, while a full web app can take 4-5days or maximum 1 week . We'll give you an exact estimate during consultation."
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage startups and have tailored packages to help you build your MVP and scale."
  },
  {
    q: "Will I own the code and designs?",
    a: "Yes, 100%. Upon project completion and final payment, all code, designs, and assets belong to you entirely."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we offer maintenance and support packages so your product stays up-to-date, secure, and running smoothly."
  },
  {
    q: "What information do you need to get started?",
    a: "A brief description of your project, target audience, rough timeline, and any reference sites or designs you like. That's all we need for an initial consultation."
  }
];

export const TEAM: TeamMember[] = [
  {
    slug: "saksham-pandey",
    name: "Saksham Pandey",
    role: "Founder & CEO",
    bio: "Building high-quality digital products and trusted technology solutions. Specialized in responsive web development and Cybersecurity.",
    tagline: "Security-First Web Developer & Cybersecurity Architect.",
    aboutLong: "I am Saksham Pandey, Founder of Spark Station. With over 18 months of hands-on experience in modern full-stack web development and more than 4 years of deep involvement in cybersecurity, I specialize in engineering highly performant, accessible, and ultra-secure web applications. I believe that elegant design must be backed by bulletproof code and military-grade security.",
    experience: "18+ Months Web / 4+ Years Security",
    contact: "founder", // custom flag to trigger founder page routing
    skills: ["Web Development", "Cybersecurity", "UI/UX Design", "Linux", "React / Vite", "Node.js", "Penetration Testing"],
    color: "#58A6FF",
    avatarUrl: "/saksham.png",
    responsibilities: [
      "Full-Stack Web Development",
      "Cybersecurity Auditing & Hardening",
      "Infrastructure Setup & Cloud Deployment",
      "Technical Architecture & System Design"
    ],
    experienceList: [
      {
        role: "Founder & CEO",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Leading a dedicated team of digital specialists to deliver premium-grade web systems, branding, and strategic marketing campaigns."
      },
      {
        role: "Cybersecurity Analyst & Developer",
        company: "Freelance",
        period: "2020 - Present",
        desc: "Performed extensive web application penetration testing, system hardening, and secure custom software engineering."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://in.linkedin.com/in/sakshampandeyin",
      twitter: "https://x.com/crazy_saksham",
      instagram: "https://www.instagram.com/sakshampandey.x/",
      snapchat: "https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN",
      whatsapp: "https://wa.me/919111376314",
      github: "https://github.com/protechnicalguruji"
    }
  },
  {
    slug: "shashwat",
    name: "Shashwat Rai",
    role: "Finance Manager",
    bio: "Handles pricing strategy, budgeting, and financial planning for projects.",
    tagline: "Strategic Financial Planner and Pricing Analyst.",
    aboutLong: "Shashwat Rai manages the financial health and commercial strategy at Spark Station. With 4 years of specialized experience in corporate finance, project budgeting, and transparent pricing structures, he ensures that our clients receive maximum value for their investments. Shashwat aligns project scope with cost-effective engineering practices.",
    experience: "4 Years",
    contact: null,
    skills: ["Financial Planning", "Budgeting", "Pricing Strategy", "Risk Assessment", "Resource Allocation"],
    color: "#8B5CF6",
    avatarUrl: "/shashwat.jpeg",
    responsibilities: [
      "Project Budgeting & Resource Allocation",
      "Financial Strategy & Risk Assessment",
      "Commercial Operations & Audit Oversight",
      "Client Contract Invoicing & Strategy"
    ],
    experienceList: [
      {
        role: "Finance Manager",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Overseeing company financial health, client estimates, cost analysis, and strategic growth budgeting."
      },
      {
        role: "Financial Analyst",
        company: "Consulting Group",
        period: "2022 - 2024",
        desc: "Created robust financial models and streamlined cost structures for high-performance service teams."
      }
    ],
    socials: {
      email: "shashwat@sparkstation.agency",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    slug: "niket",
    name: "Niket",
    role: "Marketing & Content Strategy",
    bio: "Responsible for marketing strategy, content creation, and customer acquisition.",
    tagline: "Growth Marketer & High-Impact Content Creator.",
    aboutLong: "Niket leads growth marketing and brand communication at Spark Station. With 3 years of expertise in SEO optimization, search-engine visibility, and content strategy, he designs data-driven campaigns that help businesses reach their perfect audience. He excels at translating technical complexity into highly engaging digital narratives.",
    experience: "3 Years",
    contact: null,
    skills: ["Marketing Strategy", "Content Creation", "Lead Generation", "SEO Optimization", "Social Media Campaigns"],
    color: "#F778BA",
    avatarUrl: "/niket.jpeg",
    responsibilities: [
      "Growth Marketing & Funnel Design",
      "High-Impact Content Strategy",
      "Client Outreach & Lead Generation",
      "SEO Positioning & Performance Tracking"
    ],
    experienceList: [
      {
        role: "Marketing Lead",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Formulating scalable customer-acquisition funnels and premium content frameworks for high-growth partners."
      },
      {
        role: "Growth Marketer",
        company: "Creative Agency",
        period: "2023 - 2024",
        desc: "Executed targeted organic traffic campaigns yielding over 150% growth in customer touchpoints."
      }
    ],
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    slug: "manas",
    name: "Manas",
    role: "Client Relations",
    bio: "Ensuring smooth communication, project onboarding, and client satisfaction.",
    tagline: "Dedicated Client Strategist & Project Coordinator.",
    aboutLong: "Manas is the primary touchpoint for our clients at Spark Station, bridging the gap between technical execution and business requirements. With 3 years of experience in account management and project coordination, Manas facilitates transparent communication, seamless onboarding workflows, and absolute client satisfaction.",
    experience: "3 Years",
    contact: "tel:+917224935780",
    skills: ["Client Relations", "Project Management", "Consultation", "Conflict Resolution", "Agile Operations"],
    color: "#34D399",
    avatarUrl: "/manas.jpeg",
    responsibilities: [
      "Client Onboarding & Project Coordination",
      "Requirements Elicitation & Scope Alignment",
      "Quality Assurance & Feedback Loop Facilitation",
      "Ongoing Project Maintenance Communications"
    ],
    experienceList: [
      {
        role: "Head of Client Relations",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Orchestrating smooth multi-stakeholder product delivery pipelines and maintaining 100% client retention rates."
      },
      {
        role: "Account Executive",
        company: "Tech Solutions",
        period: "2023 - 2024",
        desc: "Managed end-to-end communication and success plans for enterprise-tier software clients."
      }
    ],
    socials: {
      email: "manas@sparkstation.agency",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    slug: "yug",
    name: "Yug Yadav",
    role: "Client Relations Manager",
    bio: "Focused on ensuring seamless communication and unparalleled client satisfaction across all project lifecycles.",
    tagline: "Client Relations & Success Manager.",
    aboutLong: "Yug is an integral part of our client relations team at Spark Station, bridging the gap between technical execution and business requirements. With a strong background in client relationship management, Yug facilitates transparent communication, seamless onboarding workflows, and absolute client satisfaction.",
    experience: "2 Years",
    contact: "mailto:yug@sparkstation.agency",
    skills: ["Client Relations", "Account Management", "Consultation", "Communication Strategy", "Project Workflows"],
    color: "#60A5FA",
    avatarUrl: "/yug.jpeg",
    responsibilities: [
      "Client Communication & Relationship Management",
      "Requirements Elicitation & Scope Alignment",
      "Quality Assurance & Feedback Loop Facilitation",
      "Onboarding & Account Growth Strategy"
    ],
    experienceList: [
      {
        role: "Client Relations Manager",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Managing client communication, maintaining relationships, and ensuring transparent project pipelines."
      }
    ],
    socials: {
      email: "yug@sparkstation.agency",
      linkedin: "https://www.linkedin.com"
    }
  }
];

export const SEO_PLAN = {
  title: "Premium Enterprise SEO Plan",
  subtitle: "Full-Scale SEO Campaign & Performance Suite",
  desc: "A highly sophisticated search engine dominance campaign. Designed for companies looking to establish search authority, outrank competitors, leverage voice/AI search, and drive highly qualified inbound leads.",
  features: [
    { name: "60 Target Keywords", category: "Strategy & Core" },
    { name: "Complete SEO Management", category: "Strategy & Core" },
    { name: "Advanced Technical SEO", category: "Technical & Audits" },
    { name: "Local SEO Integration", category: "Technical & Audits" },
    { name: "National SEO Strategy", category: "Strategy & Core" },
    { name: "AI Search Optimization (GEO)", category: "Advanced Optimization" },
    { name: "Voice Search Optimization", category: "Advanced Optimization" },
    { name: "Rich Snippet Optimization", category: "Advanced Optimization" },
    { name: "E-E-A-T Optimization", category: "Advanced Optimization" },
    { name: "12 Premium SEO Blog Articles", category: "Content & Authority" },
    { name: "20 Premium Quality Backlinks", category: "Content & Authority" },
    { name: "Conversion Rate Optimization (CRO) Suggestions", category: "Technical & Audits" },
    { name: "Monthly Competitor Intelligence Report", category: "Reporting & Support" },
    { name: "Monthly Video Performance Report", category: "Reporting & Support" },
    { name: "Priority 24/7 Support", category: "Reporting & Support" },
    { name: "Dedicated SEO Consultant", category: "Reporting & Support" }
  ]
};

