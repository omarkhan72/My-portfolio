export type ProjectCategory = 'web' | 'mobile' | 'AI/ML';

export interface ProjectStats {
  views: string;
  stars: string;
  forks: string;
}

export interface ProjectData {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  image: string; // cover image for cards
  images?: string[]; // gallery for detail page
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  stats: ProjectStats;
  highlights: string[];
  color: string; // hex color used for gradients/badges
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}


