import aiAppLetterImage from '../../assets/images/AIApplicationLetter/aiapplicationletter-1.png';
import aiAppLetter1 from '../../assets/images/AIApplicationLetter/aiapplicationletter-1.png';
import aiAppLetter2 from '../../assets/images/AIApplicationLetter/aiapplicationletter-2.png';
import aiAppLetter3 from '../../assets/images/AIApplicationLetter/aiapplicationletter-3.png';
import aiAppLetter4 from '../../assets/images/AIApplicationLetter/aiapplicationletter-4.png';
import aiAppLetter5 from '../../assets/images/AIApplicationLetter/aiapplicationletter-5.png';
import aiAppLetter6 from '../../assets/images/AIApplicationLetter/aiapplicationletter-6.png';
import aiAppLetter7 from '../../assets/images/AIApplicationLetter/aiapplicationletter-7.png';
import type { ProjectData } from '../types';

export const aiApplicationLetterProject: ProjectData = {
  id: 10,
  title: 'AI Application Letter Creator',
  category: 'mobile',
  description: 'AI-powered mobile app for generating professional application letters with OCR scanning and rich text editing',
  fullDescription:
    'Sophisticated React Native mobile application that leverages OpenAI GPT to generate professional application letters and documents. Features AI-powered content generation, OCR capabilities for document scanning, rich text editing with Quill editor, and comprehensive document management. Includes a complete freemium business model with RevenueCat subscriptions, strategic ad monetization, and multi-language support for creating, editing, and managing formal applications.',
  image: aiAppLetterImage,
  images: [aiAppLetter1, aiAppLetter2, aiAppLetter3, aiAppLetter4, aiAppLetter5, aiAppLetter6, aiAppLetter7],
  technologies: [
    'React Native',
    'TypeScript',
    'OpenAI GPT',
    'Google Cloud Vision API',
    'Firebase Functions',
    'Firestore',
    'Firebase Analytics',
    'Firebase Crashlytics',
    'Firebase Cloud Messaging',
    'RevenueCat',
    'Google Mobile Ads',
    'React Navigation',
    'Quill Editor',
    'React Native HTML to PDF',
    'Axios'
  ],
  github: '#',
  demo: '#',
  featured: true,
  stats: { views: '4.8k', stars: '98', forks: '35' },
  highlights: [
    'AI Content Generation',
    'OCR Document Scanning',
    'Rich Text Editor',
    'PDF Export',
    'Template Library',
    'Multi-Language'
  ],
  color: '#4facfe',
  features: [
    'AI-powered application letter generation using OpenAI GPT',
    'Multi-language support for generating content in English and other languages',
    'Smart placeholder system for personalized content (names, dates, addresses)',
    'Camera integration for document capture with image cropping',
    'Text extraction from images using Google Cloud Vision OCR API',
    'Full-featured Quill rich text editor with formatting (bold, italic, underline, lists)',
    'Real-time HTML to plain text conversion for seamless editing',
    'Save and organize generated applications locally',
    'Pre-generated template library with quick access to common application types',
    'PDF export functionality with native sharing',
    'Document search and filter capabilities',
    'Edit and customize saved templates',
    'Copy and share formatted text',
    'RevenueCat subscription management with freemium model',
    'Rewarded ads for premium features (PDF generation)',
    'App open ads, interstitial ads, and banner ads integration',
    'Custom onboarding intro slider for first-time users',
    'Profanity filter and emoji detection for content validation',
    'Network connectivity checks before API calls',
    'Error boundaries with crash reporting via Firebase Crashlytics'
  ],
  challenges: [
    'Complex AI response parsing requiring dynamic placeholder replacement while maintaining HTML formatting',
    'Rich text editing with seamless transitions between edit and view modes',
    'Cross-platform image processing with different permission models for iOS and Android',
    'Balancing free and premium features with strategic ad placement without compromising UX',
    'Content validation and safety to prevent inappropriate content',
    'Managing subscription state, ad loading states, and user data across multiple screens and contexts'
  ],
  solutions: [
    'Implemented sophisticated regex-based parsing system for placeholder replacement with input modal for dynamic data collection',
    'Integrated Quill editor with custom toolbar and editorKey state management for forced re-renders with HTML-to-plain-text conversion utilities',
    'Created unified permission system using react-native-permissions with base64 encoding for consistent cross-platform image handling',
    'Developed complete monetization strategy with rewarded ads, subscription tiers, app open ads with frequency control (every 4th launch), and platform-specific optimizations',
    'Built custom validation system checking for prohibited words, emojis, empty inputs, and network connectivity',
    'Implemented React Context providers (SubscriptionContext, RewardedAdContext) with optimized re-renders and centralized state management'
  ]
};

