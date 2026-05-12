import deepVisionImage from '../../assets/images/DeepVision/deeepprofile.png';
import deepVision1 from '../../assets/images/DeepVision/deepvision-1.png';
import deepVision2 from '../../assets/images/DeepVision/deepvision-2.png';
import deepVision3 from '../../assets/images/DeepVision/deepvision-3.png';
import deepVision4 from '../../assets/images/DeepVision/deepvision-4.png';
import deepVision5 from '../../assets/images/DeepVision/deepvision-5.png';
import type { ProjectData } from '../types';

export const deepVisionProject: ProjectData = {
  id: 1,
  title: 'DeepVision',
  category: 'mobile',
  description: 'Multi-model AI chat and vision app with GPT & Claude, speech, files, and subscriptions',
  fullDescription:
    'DeepVision is a production-grade mobile AI assistant that combines multi-model chat (GPT, Claude) with computer vision and rich media support. Users can chat with AI, send images/PDFs for analysis, dictate with speech-to-text, listen with text-to-speech, and manage conversations with powerful regeneration controls. The app integrates secure token metering, subscriptions, ads, Firestore storage, and a scalable backend on Firebase Cloud Functions with Google Sign-In.',
  image: deepVisionImage,
  images: [deepVision1, deepVision2, deepVision3, deepVision4, deepVision5],
  technologies: [
    'React Native',
    'TypeScript',
    'OpenAI GPT-5',
    'OpenAI GPT-4o',
    'OpenAI GPT-4 Turbo',
    'OpenAI GPT-4',
    'OpenAI GPT-3.5 Turbo',
    'Anthropic Claude 4',
    'Anthropic Claude 3.5 Sonnet',
    'Anthropic Claude 3 Haiku',
    'Anthropic Claude 3 Opus',
    'Whisper STT',
    'TTS',
    'Firebase Auth (Google Sign-In)',
    'Firestore',
    'Firebase Cloud Functions',
    'RevenueCat (Subscriptions)',
    'AdMob'
  ],
  github: '#',
  demo: '#',
  featured: true,
  stats: { views: '4.2k', stars: '89', forks: '31' },
  highlights: [
    '9 AI Models (Full GPT & Claude Family)',
    'Image/PDF Understanding',
    'Speech-to-Text & Text-to-Speech',
    'Firestore Conversation Storage',
    'Token Metering & Usage Limits',
    'Subscriptions & Ad Monetization'
  ],
  features: [
    'Multi-model chat engine with 9+ AI models: GPT-5, GPT-4o, GPT-4 Turbo, GPT-4, GPT-3.5 Turbo, Claude 4, Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus',
    'Model switching with real-time performance comparison and cost optimization',
    'Image support: upload screenshots/photos for visual question answering',
    'PDF support: extract and summarize documents with section-aware context',
    'Speech-to-text input for hands-free prompts (Whisper)',
    'Text-to-speech playback of responses with controllable voices/rates',
    'Message regeneration: make it longer/shorter, simplify, translate, or bulletize',
    'Conversation history persisted in Firestore with per-user namespaces',
    'Cloud Functions backend for secure API orchestration and key protection',
    'Google Sign-In via Firebase Auth for frictionless onboarding',
    'Token accounting per request with daily/monthly quotas',
    'RevenueCat subscriptions unlocking higher limits and pro models',
    'AdMob ads for free tier with respectful frequency capping',
    'Share conversations as links/images with redaction options',
    'Model-specific capabilities: GPT-5 for advanced reasoning, Claude 4 for complex analysis, GPT-4o for vision tasks, Claude 3.5 Sonnet for balanced performance, Claude 3 Haiku for speed, Claude 3 Opus for creativity'
  ],
  challenges: [
    'Coordinating multiple AI providers with consistent UX and failover',
    'Efficiently handling large PDFs and images on mobile devices',
    'Accurate token metering and cost control across models',
    'Syncing conversation state across devices in near real-time',
    'Balancing ad monetization with user experience',
    'Securing API keys and preventing abuse'
  ],
  solutions: [
    'Abstracted AI adapters with automatic retries and provider fallbacks',
    'Chunked PDF ingestion with client-side previews and server-side summarization',
    'Centralized metering in Cloud Functions with per-user counters',
    'Firestore real-time listeners with optimistic UI updates',
    'RevenueCat entitlements + AdMob frequency capping and placement rules',
    'Server-only secret management in Cloud Functions; signed requests'
  ],
  color: '#667eea'
};


