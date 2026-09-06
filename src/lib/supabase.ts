import { createClient } from '@supabase/supabase-js';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Website Development' | 'Business Growth';
  publish_date: string;
  author_name: string;
  author_avatar: string;
  reading_time: string;
  content: string;
  status: 'draft' | 'published';
  summary: string;
  featured_image: string;
  created_at: string;
}

// 1. Initial High-Quality Seed Data (Pre-designed based on user requests)
const SEED_POSTS: BlogPost[] = [
  {
    id: 'seed-post-1',
    title: 'How Much Does a Website Cost? A Complete Pricing Guide',
    slug: 'how-much-does-a-website-cost',
    category: 'Website Development',
    publish_date: '2026-07-01',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '5 min read',
    summary: 'A transparent guide to website development costs in India. Learn about Spark Station pricing for landing pages (₹2,499), business websites (₹7,000–₹12,000), e-commerce, and maintenance packages.',
    featured_image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-01T12:00:00.000Z',
    content: `When planning a website or digital presence for your business, the most important question is: **"How much does a website cost?"**

At **Spark Station**, we believe in 100% pricing transparency. We deliver modern, high-performance, and beautifully engineered websites that combine premium quality with genuine value for money.

Whether you need a high-converting single-page landing page or a full-scale custom web platform, here is our complete pricing breakdown, delivery timelines, and deliverable standards.

### 1. Spark Station Website Packages & Pricing

Below is an overview of our standard website tiers, starting prices, and turnaround timelines:

| Website Type | Price (INR) | Delivery Timeline | Key Use Case |
| :--- | :--- | :--- | :--- |
| **Landing Page** | **₹2,499** | **1 Day** | High-converting lead generation, single product or service launch |
| **Business Website** | **₹7,000 – ₹12,000** | **2–3 Days** | Complete multi-page company presence, service portfolios & lead capture |
| **E-commerce Website** | **₹15,000** | **5–7 Days** | Full online storefront with product catalog & shopping cart |
| **Custom Web App** | **₹25,000+** | **1+ Week** | Tailored web applications, client portals & custom dashboards |
| **Monthly Maintenance** | **₹999 – ₹1,999/mo** | **Ongoing** | Regular content updates, bug fixes, design tweaks & security patches |

### 2. What Is Included in Landing & Business Websites?

Every landing page and business website built by Spark Station comes standard with everything you need to establish a trusted, high-performing online presence:

* **100% Mobile & Desktop Responsive Design**: Optimized to look sharp and function seamlessly across mobile phones, tablets, laptops, and wide desktop screens.
* **Modern & Intuitive UI/UX**: Clean visual hierarchy, elegant typography, and focused layout design that enhances your brand credibility.
* **Full-Stack Web Development**: High-performance, clean code engineered for speed and responsiveness.
* **Direct WhatsApp & Contact Integrations**: Instant WhatsApp click-to-chat triggers and contact forms so prospects can reach you immediately.
* **Production Cloud Deployment**: Complete deployment and configuration on fast, secure hosting infrastructure.
* **Basic On-Page SEO**: Search engine indexing readiness, meta tags, clean URLs, and structured headings.

### 3. E-commerce Websites & Specialized Features

Our **₹15,000** E-commerce package is built to get your digital store operational quickly:

* **Tailored Store Workflows**: Product catalogs, category organization, shopping cart management, and order inquiry flows built specifically around your business requirements.
* **Payment Gateway Integration**: Payment gateway setup (e.g., Razorpay, Cashfree, Stripe, or UPI) is configured based on your preferred banking partner and **charged separately**.

### 4. Domain & Content Guidelines

We ensure asset setup and management is completely flexible for our clients:

* **Domain Name**: You can connect an existing domain you already own, purchase one yourself, or Spark Station can purchase and configure it on your behalf at standard provider registration cost.
* **Content & Visual Assets**: You are welcome to provide your own text, logos, and photos. If you don't have images ready, our team will curate and provide suitable, high-quality AI-generated imagery tailored to your niche.

### 5. Unlimited Changes & 21 Days Free Support

We work closely with you to ensure you are 100% satisfied with your final product:

* **Unlimited Changes During Development**: You can review progress and request changes throughout the active design and development phase.
* **21 Days of Free Post-Delivery Support**: After your website is deployed and delivered, we provide 21 days of complimentary support to ensure everything runs smoothly.
* **Major Changes After Delivery**: Significant new features, page additions, or complex integrations requested after delivery are quoted separately with fair, upfront pricing.

### 6. Monthly Maintenance Packages (₹999 – ₹1,999/month)

To keep your website secure, fresh, and running at peak performance, we provide comprehensive monthly maintenance:

* **Content & Image Updates**: Updating product information, banners, announcements, or business copy.
* **Bug Fixes & Technical Troubleshooting**: Swift resolution of any display glitches, broken links, or form issues.
* **Minor Design Tweaks**: Regular aesthetic refinements and layout improvements.
* **Security & Technical Updates**: Dependency maintenance, speed checks, and security audits.

### 7. What Determines the Final Cost?

While our standard packages cover most client needs, custom estimates primarily depend on:

1. **Number of Pages**: Single-page vs. multi-page structural requirements.
2. **Custom Features**: Interactive tools, calculation forms, customer portals, or booking calendars.
3. **Third-Party Integrations**: CRM setups, payment gateways, custom APIs, or automated notifications.
4. **Project Complexity**: Custom database models, specialized logic, or tailored workflows.

### 8. Why Choose Spark Station?

* **Premium & Professional**: Modern design standards, crisp typography, and responsive layouts.
* **Rapid Turnaround**: Receive your live landing page in 24 hours or business website in 2–3 days.
* **Value for Money**: Agency-level quality at accessible, transparent rates with zero hidden surprises.
* **Direct Communication**: Collaborate directly with experienced creators and developers dedicated to your project.

### Ready to Build Your Website?

Contact our team today to discuss your vision, get answers to your questions, or receive a free itemized quote.

* [Get a Free Quote](/contact)
* [Book Your Website](https://wa.me/919111376314)
`
  },
  {
    id: 'seed-post-2',
    title: 'Website vs. Landing Page: Which is Better for Your Business?',
    slug: 'website-vs-landing-page',
    category: 'Website Development',
    publish_date: '2026-07-04',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '5 min read',
    summary: 'Discover the key differences between a comprehensive business website and a high-converting landing page to select the right tool for your campaigns.',
    featured_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-04T12:00:00.000Z',
    content: `Many businesses struggle to decide whether they should invest in a full **multi-page corporate website** or a **dedicated, single-view landing page**.

Choosing the incorrect asset can dilute your marketing budget and lead to poor conversion rates. Let's compare their structures, objectives, and optimal use-cases.

### 1. Structural Comparison

The distinction comes down to intent and focus:

* **Landing Page**: A single-screen, highly focused layout. It contains no external navigation links, no generic sidebars, and has exactly **one** primary objective—conversion.
* **Business Website**: A multi-view architectural experience. It features persistent headers and footers, comprehensive sub-pages (About, Services, Team, Case Studies), and detailed informative content.

### 2. When to Use a Landing Page

Landing pages are best suited for paid advertising campaigns where traffic is sent to a specific offer. 

#### Advantages of Landing Pages:
1. **Zero Distractions**: Without a global navigation menu, users have only two options: convert (sign up/purchase) or close the page.
2. **Speed & Clarity**: Highly concise value propositions paired with clear Call-to-Action (CTA) elements.
3. **Higher Conversion Rates**: Average landing pages convert 3x to 5x higher than complex homepages because of their laser focus.

\`\`\`ts
// Example of a perfect CTA focus handler in React
export function handleCTA() {
  const ctaElement = document.getElementById('conversion-form');
  if (ctaElement) {
    ctaElement.scrollIntoView({ behavior: 'smooth' });
  }
}
\`\`\`

### 3. When to Use a Full Website

A comprehensive website is your brand's digital headquarters. It is designed to establish authority, build deep brand trust, and educate potential clients over multiple sessions.

#### Advantages of a Full Website:
* **Organic SEO Growth**: Multiple pages allow you to target separate keywords, write detailed educational blogs, and gain rich search volume.
* **Domain Authority**: Google rewards structured architectures containing rich content, distinct page-level structured metadata, and authentic schema configurations.
* **Customer Education**: Clients can browse team bios, read deep case studies, check itemized services, and review FAQs before reaching out.

### 4. Summary Matrix: Quick Guide

| Criteria | Landing Page | Full Website |
| :--- | :--- | :--- |
| **Primary Goal** | Direct Lead Capture / Sales | Trust, SEO, Authority, Information |
| **Ideal Traffic Source** | Meta Ads, Google PPC, Email Newsletters | Organic Search, Social Media, Direct Visits |
| **Navigation Menu** | No (strictly forbidden) | Yes (structured dropdowns, navbar) |
| **Bounce Rate** | Typically high (by design) | Low to moderate (multi-page browsing) |
| **Content Depth** | Minimal, punchy, persuasive | Deep, comprehensive, educational |

### 5. The Hybrid Solution: Spark Station Approach

At Spark Station, we often recommend a unified approach:
* Establish a gorgeous, structured **Vite/React main website** to act as your brand's anchor.
* Build custom, light, lightning-fast **landing pages** mapped to specific sub-routes (e.g., \`/landing/special-offer\`) for your paid marketing funnels.

This strategy ensures you capture organic search authority without sacrificing direct conversion efficiency. Have questions on which model fits your current growth cycle? Send us a message!
`
  },
  {
    id: 'seed-post-3',
    title: 'How Modern Websites Help Businesses Grow and Maximize ROI',
    slug: 'how-websites-help-businesses-grow',
    category: 'Business Growth',
    publish_date: '2026-07-06',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '5 min read',
    summary: 'A detailed breakdown of how custom software development, modern technical SEO, and flawless user experiences turn websites into 24/7 lead machines.',
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-06T12:00:00.000Z',
    content: `In the modern digital landscape, a website is no longer just an online brochure. It is an active business employee working 24/7/365 to generate leads, close deals, and build customer loyalty.

However, a slow, outdated, generic website acts as a bottleneck. Let's look at the direct, measurable ways a custom modern React application scales your business and maximizes your Return on Investment (ROI).

### 1. Speed as a Ranking & Conversion Factor

A single second delay in page load time can reduce conversions by **20%** and page views by **11%**. Modern clients demand immediate feedback.

* **Vite-Powered Frontend**: By utilizing React with Vite, our sites compile into lean, efficient static bundles with automatic route-based split loading.
* **Core Web Vitals**: Flawless scores on Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) keep search engines happy and guarantee your site ranks above slower legacy builders.

### 2. Conversions Through Aesthetic Pairings

Premium design is not just "looking pretty"; it is psychological. A meticulously polished layout builds immediate trust:
1. **Negative Space**: Generous breathing room guides the user's focus straight to your primary CTA buttons.
2. **Typography Pairings**: Using high-contrast display headings like Space Grotesk paired with clean, readable Inter sans-serif font ensures maximum legibility.
3. **Motion Curves**: High-performance animations (powered by the \`motion\` engine) make form submissions and page transitions feel premium.

> "Your website is the front door of your modern company. If it looks broken, slow, or generic, users assume your service is the same. Craftsmanship equals trust."  
> — *Saksham Pandey, CEO of Spark Station*

### 3. SEO & Structured Data Integration

A website that no one can find is useless. Modern search engine optimization goes beyond keyword stuffing:

* **JSON-LD Schema**: Injecting valid schema data enables search engines like Google to display interactive rich snippets (reviews, FAQs, ratings, articles) on search result pages.
* **AI Search Optimization**: Structuring your content with semantic HTML, clear header hierarchies (\`h1\`, \`h2\`, \`h3\`), and concise FAQ answers ensures AI models like ChatGPT, Gemini, and Claude can parse your brand data accurately.

### 4. Measurable Automation

A custom website can automate manual, repetitive office processes:
* **Interactive Calculators**: Allow users to estimate project costs instantly on-screen, capturing pre-qualified leads.
* **Calendly / Meeting Schedulers**: Let prospects book consultations directly without back-and-forth emails.
* **Smart Client Portals**: Real-time dashboards built on top of high-performance backend databases like Supabase, reducing customer support load.

### 5. Final ROI Calculation

Let's look at a quick mathematical projection of a premium website upgrade:

* **Before (Legacy Site)**: 1,000 monthly visitors, 1% conversion rate = 10 leads. At a $1,000 contract value = **$10,000 revenue**.
* **After (Spark Station Site)**: 1,500 monthly visitors (due to technical SEO), 3% conversion rate (due to superior design/speed) = 45 leads. At a $1,000 contract value = **$45,000 revenue**.

By upgrading to a modern website, the business gained a **350% increase in monthly revenue**, paying off the website investment in a single month.

Don't let a sluggish website hold back your business growth. Reach out to **Spark Station** today to engineer your digital growth machine.
`
  }
];

// 2. Initialize Supabase Client (Optionally using environment variables)
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project-id.supabase.co');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// 3. Fallback Storage Engine
const LOCAL_STORAGE_KEY = 'spark_station_blog_posts_v3';
const AUTH_SESSION_KEY = 'spark_station_admin_session';

// Helper to get local posts
const getLocalPosts = (): BlogPost[] => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_POSTS));
    return SEED_POSTS;
  }
  try {
    const parsed: BlogPost[] = JSON.parse(raw);
    // Keep custom created posts and merge with updated seed posts
    const customPosts = parsed.filter(p => !SEED_POSTS.some(s => s.id === p.id));
    const merged = SEED_POSTS.map(seed => {
      const existing = parsed.find(p => p.id === seed.id);
      return existing && existing.created_at !== seed.created_at ? existing : seed;
    });
    return [...merged, ...customPosts];
  } catch (e) {
    return SEED_POSTS;
  }
};

// Helper to save local posts
const saveLocalPosts = (posts: BlogPost[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
};

// 4. Unified Data Access Layer (CMS Engine)
export const blogService = {
  // Get all posts
  async getPosts(includeDrafts = false): Promise<BlogPost[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from('blog_posts').select('*').order('publish_date', { ascending: false });
        if (!includeDrafts) {
          query = query.eq('status', 'published');
        }
        const { data, error } = await query;
        if (error) throw error;
        if (data && data.length > 0) {
          return data as BlogPost[];
        }
      } catch (e) {
        console.warn('Supabase getPosts failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const filtered = includeDrafts ? posts : posts.filter(p => p.status === 'published');
    return [...filtered].sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
  },

  // Get post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase getPostBySlug failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    return posts.find(p => p.slug === slug) || null;
  },

  // Create post
  async createPost(postData: Omit<BlogPost, 'id' | 'created_at'>): Promise<BlogPost> {
    const newPost: BlogPost = {
      ...postData,
      id: 'post-' + Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .insert(newPost)
          .select()
          .single();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase createPost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    posts.push(newPost);
    saveLocalPosts(posts);
    return newPost;
  },

  // Update post
  async updatePost(id: string, postData: Partial<BlogPost>): Promise<BlogPost> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id)
          .select()
          .single();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase updatePost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const idx = posts.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Post not found');
    const updatedPost = { ...posts[idx], ...postData };
    posts[idx] = updatedPost;
    saveLocalPosts(posts);
    return updatedPost;
  },

  // Delete post
  async deletePost(id: string): Promise<boolean> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);
        if (error) throw error;
        return true;
      } catch (e) {
        console.warn('Supabase deletePost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const filtered = posts.filter(p => p.id !== id);
    saveLocalPosts(filtered);
    return true;
  },

  // Upload featured image
  async uploadImage(file: File): Promise<string> {
    if (isSupabaseConfigured && supabase) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `blog-featured/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);

        if (data?.publicUrl) return data.publicUrl;
      } catch (e) {
        console.warn('Supabase image upload failed, falling back to Base64 data URL:', e);
      }
    }

    // Local Storage Fallback: Convert to Base64 data URL so image works immediately in memory/storage
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  },

  // Auth Operations
  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return { success: true };
      } catch (e: any) {
        return { success: false, error: e.message || 'Invalid credentials' };
      }
    }

    // Local Storage Fallback (Admin user check)
    // Accept user email or developer email 'sparkstation.x@gmail.com' / 'protechnicalguruji1@gmail.com'
    const allowedEmails = ['sparkstation.x@gmail.com', 'protechnicalguruji1@gmail.com', 'admin@sparkstation.agency'];
    if (
      allowedEmails.includes(email.toLowerCase()) &&
      password === 'SparkAdmin2026!'
    ) {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ email, token: 'mock-jwt-token-' + Date.now() }));
      return { success: true };
    }
    return { success: false, error: 'Invalid admin credentials. Hint: use sparkstation.x@gmail.com and SparkAdmin2026!' };
  },

  logout() {
    if (isSupabaseConfigured && supabase) {
      supabase.auth.signOut();
    }
    localStorage.removeItem(AUTH_SESSION_KEY);
  },

  isLoggedIn(): boolean {
    if (isSupabaseConfigured && supabase) {
      // In a real scenario, we check active session synchronously (often with a state listener in the component),
      // we can also inspect the localStorage/cookies or token cache.
      const session = localStorage.getItem('sb-' + supabaseUrl.split('//')[1].split('.')[0] + '-auth-token');
      if (session) return true;
    }
    return localStorage.getItem(AUTH_SESSION_KEY) !== null;
  }
};

// 5. Database Setup Help Script string for the user to paste into Supabase SQL editor
export const SUPABASE_SQL_SETUP = `-- Copy and paste this into the Supabase SQL Editor:

-- 1. Create the blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT CHECK (category IN ('Website Development', 'Business Growth')) NOT NULL,
  publish_date DATE NOT NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT NOT NULL,
  reading_time TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT CHECK (status IN ('draft', 'published')) NOT NULL,
  summary TEXT NOT NULL,
  featured_image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable row level security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Create public read policy (anyone can read published posts)
CREATE POLICY "Public read published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- 4. Create all-access policy for authenticated users (admin dashboard)
CREATE POLICY "Admin full access" ON blog_posts
  FOR ALL TO authenticated USING (true);

-- 5. Set up Storage bucket 'blog-images'
-- Go to Storage -> Create a new bucket named "blog-images" and make it PUBLIC.
-- Under Bucket Policies, allow INSERT/UPDATE/DELETE/SELECT for authenticated users, and SELECT for public.
`;
