import aiPresentationImage from '../../assets/images/AIPresentation/aipresentation-1.png';
import aiPresentation1 from '../../assets/images/AIPresentation/aipresentation-1.png';
import aiPresentation2 from '../../assets/images/AIPresentation/aipresentation-2.png';
import aiPresentation3 from '../../assets/images/AIPresentation/aipresentation-3.png';
import aiPresentation4 from '../../assets/images/AIPresentation/aipresentation-4.png';
import aiPresentation5 from '../../assets/images/AIPresentation/aipresentation-5.png';
import aiPresentation6 from '../../assets/images/AIPresentation/aipresentation-6.png';
import aiPresentation7 from '../../assets/images/AIPresentation/aipresentation-7.png';
import type { ProjectData } from '../types';

export const aiPresentationProject: ProjectData = {
  id: 9,
  title: 'AI Presentation Generator',
  category: 'mobile',
  description: 'AI-powered mobile app that transforms text prompts into professional PowerPoint presentations in seconds',
  fullDescription:
    'Cross-platform mobile application leveraging OpenAI GPT-4 and Presenton AI to automatically create professional PowerPoint presentations from simple text prompts. Features a sophisticated freemium business model with token-based system, integrated ad monetization, RevenueCat subscriptions, and real-time Firebase backend. Serves thousands of users by transforming ideas into visually appealing, content-rich presentations, reducing creation time from hours to seconds.',
  image: aiPresentationImage,
  images: [aiPresentation1, aiPresentation2, aiPresentation3, aiPresentation4, aiPresentation5, aiPresentation6, aiPresentation7],
  technologies: [
    'React Native',
    'TypeScript',
    'OpenAI GPT-4o-mini',
    'Presenton AI',
    'Firebase Functions',
    'Firestore',
    'Firebase Auth',
    'RevenueCat',
    'Google Mobile Ads',
    'PptxGenJS',
    'React Navigation',
    'Firebase Cloud Messaging',
    'Firebase Crashlytics',
    'React Native File System',
    'Axios'
  ],
  github: '#',
  demo: '#',
  featured: true,
  stats: { views: '5.6k', stars: '124', forks: '42' },
  highlights: [
    'AI-Powered Generation',
    'Freemium Model',
    'Multi-AI Integration',
    'Real-Time Sync',
    'Ad Monetization',
    'Cross-Platform'
  ],
  color: '#ff6b6b',
  features: [
    'Dynamic AI-powered slide creation with 10-14 slides per presentation',
    'Intelligent theme selection based on topic analysis (Technology, Health, Business, Education, Environment, Creative)',
    'Multiple layout types: title slides, section dividers, bullet points, two/three-column layouts, quotes, and image captions',
    'GPT-4-powered content generation with proper narrative flow and engagement strategies',
    'Dual-tier system: Free tier with daily token refresh (2 presentations/day) and Premium unlimited access',
    'Token restoration system via email-based account recovery',
    'RevenueCat subscription management with multiple tiers',
    'Strategic ad placement: Rewarded ads, native in-feed ads, app open ads, and interstitial fallbacks',
    'Smart ad targeting showing ads only to free users',
    'Multi-provider authentication: Google Sign-In (Android), Firebase Anonymous Auth (iOS)',
    'Apple Sign-In compatibility with Private Relay email handling',
    'Secure Firebase ID token-based authentication for all API calls',
    'iOS Files app integration for easy presentation access',
    'Recent history tracking with quick access to previous presentations',
    'Native platform sharing with file attachments',
    'Real-time Firestore listeners for token updates across devices',
    'Firebase Cloud Messaging push notifications for engagement',
    'Automated daily token reset system with cloud triggers',
    'In-app document preview with native handling',
    'Comprehensive error tracking with Firebase Crashlytics'
  ],
  challenges: [
    'Complex ad integration with iOS view controller restrictions causing conflicts when showing multiple ads sequentially',
    'Large PowerPoint file transfer requiring efficient Base64 encoding/decoding for JSON API transmission',
    'Token synchronization across multiple React contexts (Auth, Token, Subscription, Ad) preventing race conditions',
    'Daily token reset implementation without reliable Firebase scheduled functions across timezones',
    'Apple Private Relay email handling preventing token restoration across app reinstalls',
    'iOS Files app integration requiring proper shared container setup and file URI formatting'
  ],
  solutions: [
    'Implemented state machine for ad showing status with platform-specific delays (800ms iOS, 300ms Android) and safe wrapper functions with retry logic and fallback to interstitial ads',
    'Created robust Base64 encoding on backend with validation, padding correction, and chunk validation on frontend to detect corruption early',
    'Implemented Firestore real-time listeners for automatic sync with derived isFreeUser state and backend triggers for token assignment',
    'Moved to frontend-triggered reset system via cloud function with date comparison and atomic Firestore updates with exponential backoff',
    'Added Private Relay detection with separate logic paths and user communication, storing isPrivateRelay flag for future reference',
    'Saved files to DocumentDirectoryPath with proper file:// URI formatting and MIME types for document viewers'
  ]
};

