import type { ProjectData } from './types';
import { deepVisionProject } from './deepvision';
import { aiChartAnalyzerProject } from './aichart';
import { wallpaperAppProject } from './wallpaper';
import { aiPresentationProject } from './aipresentation';
import { aiApplicationLetterProject } from './aiapplicationletter';

export const projects: ProjectData[] = [
  deepVisionProject,
  aiPresentationProject,
  aiApplicationLetterProject,
  // Existing demo projects kept here to preserve UI, using inline objects
  {
    id: 2,
    title: 'AI Dashboard',
    category: 'web',
    description: 'Modern analytics dashboard with AI insights',
    fullDescription:
      'Advanced analytics dashboard featuring real-time data visualization, AI-powered insights, interactive charts, team collaboration tools, and comprehensive reporting system.',
    image:
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { views: '3.2k', stars: '67', forks: '23' },
    highlights: ['AI Insights', 'Real-time Data', 'Interactive Charts', 'Team Collaboration'],
    color: '#3b82f6'
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    category: 'mobile',
    description: 'Health tracking app with social features',
    fullDescription:
      'Complete fitness tracking application with workout planning, progress monitoring, nutrition tracking, social features, challenges, and personal trainer connectivity.',
    image:
      'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'HealthKit', 'Firebase', 'Charts'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { views: '1.8k', stars: '34', forks: '8' },
    highlights: ['Workout Planning', 'Progress Tracking', 'Social Features', 'HealthKit Integration'],
    color: '#4facfe'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'web',
    description: 'Property platform with virtual tours',
    fullDescription:
      'Full-featured real estate platform with advanced search filters, interactive maps, virtual tour integration, mortgage calculator, and property management tools.',
    image:
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Mapbox', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { views: '2.1k', stars: '52', forks: '15' },
    highlights: ['Virtual Tours', 'Interactive Maps', 'Advanced Search', 'Mortgage Calculator'],
    color: '#43e97b'
  },
  {
    id: 5,
    title: 'Restaurant App',
    category: 'mobile',
    description: 'Food ordering with real-time tracking',
    fullDescription:
      'Comprehensive restaurant ordering system featuring menu browsing, customizable orders, payment integration, real-time order tracking, and loyalty rewards program.',
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { views: '1.5k', stars: '28', forks: '6' },
    highlights: ['Real-time Tracking', 'Customizable Orders', 'Loyalty Program', 'Payment Integration'],
    color: '#667eea'
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    category: 'web',
    description: 'Cryptocurrency portfolio tracker',
    fullDescription:
      'Advanced cryptocurrency portfolio tracker with real-time price updates, portfolio analytics, news integration, and trading insights.',
    image:
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Chart.js', 'WebSocket', 'Express'],
    github: '#',
    demo: '#',
    featured: false,
    stats: { views: '2.8k', stars: '73', forks: '19' },
    highlights: ['Real-time Prices', 'Portfolio Analytics', 'News Integration', 'Trading Insights'],
    color: '#f093fb'
  },
  aiChartAnalyzerProject,
  wallpaperAppProject
];

export type { ProjectData } from './types';


