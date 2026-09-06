export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  color: string;
  benefits: string[];
  useCases: string[];
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  contact: string | null;
  skills: string[];
  color: string;
  avatarUrl: string;
  tagline?: string;
  aboutLong?: string;
  responsibilities?: string[];
  experienceList?: Array<{ role: string; company: string; period: string; desc: string }>;
  socials?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    snapchat?: string;
    github?: string;
    whatsapp?: string;
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  image: string;
}

export type PageRoute = 'home' | 'services' | 'portfolio' | 'team' | 'contact' | 'founder' | 'blog' | 'admin';
