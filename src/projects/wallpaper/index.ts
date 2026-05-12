import wallpaperImage from '../../assets/images/WallpaperApp/wallpapercover.png';
import wallpaper1 from '../../assets/images/WallpaperApp/wallpaper-1.png';
import wallpaper2 from '../../assets/images/WallpaperApp/wallpaper-2.png';
import wallpaper3 from '../../assets/images/WallpaperApp/wallpaper-3.png';
import type { ProjectData } from '../types';

export const wallpaperAppProject: ProjectData = {
  id: 8,
  title: 'Wallpaper App',
  category: 'mobile',
  description: 'Beautiful wallpaper collection app with AI-curated designs and personalization features',
  fullDescription:
    'A comprehensive mobile wallpaper application featuring thousands of high-quality wallpapers across multiple categories. Includes AI-powered recommendations, personalization features, daily wallpaper updates, and advanced filtering options. Built with modern mobile development practices and optimized for performance.',
  image: wallpaperImage,
  images: [wallpaper1, wallpaper2, wallpaper3],
  technologies: ['React Native', 'TypeScript', 'Pixels API', 'Gallery Saver', 'Axios'],
  github: '#',
  demo: '#',
  featured: true,
  stats: { views: '6.8k', stars: '142', forks: '38' },
  highlights: ['Pixels API', 'Gallery Save', 'Categories', 'Daily Updates', 'Simple UI'],
  color: '#ff6b6b',
  features: [
    'Integration with Pixels API for high-quality wallpapers',
    'Category system (Nature, Abstract, Space, Minimalist, Dark, Light)',
    'Save wallpapers directly to device gallery',
    'Daily new images from Pixels API',
    'Simple and clean user interface'
  ],
  challenges: [
    'Integrating Pixels API with proper error handling',
    'Implementing gallery saving with proper permissions',
    'Building category system for wallpapers',
    'Handling daily image updates from API'
  ],
  solutions: [
    'Integrated Pixels API with axios for fetching wallpapers',
    'Used react-native-save-image-to-gallery for saving to device',
    'Built simple category filtering system with React Native',
    'Implemented daily API calls to fetch new wallpapers'
  ]
};
