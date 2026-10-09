export interface SocialLinks {
  facebook: string;
  youtube: string;
  tiktok: string;
  instagram: string;
  linkedin?: string;
  whatsapp?: string;
}

export interface ProfileData {
  brandName: string;
  fullName: string;
  headline: string;
  subtitle: string;
  avatarUrl: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLinks;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Creative' | 'Lifestyle';
  imageUrl: string;
  aspectRatio: string;
  description: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    highlight: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Cinematic Film' | 'Commercial Brand' | 'Social Series' | 'Creative Direction';
  thumbnailUrl: string;
  client: string;
  year: string;
  duration?: string;
  summary: string;
  deliverables: string[];
  description: string;
  metrics?: string;
  demoUrl?: string;
}
