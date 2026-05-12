import aiChartImage from '../../assets/images/AiChart/aichart.png';
import ai1 from '../../assets/images/AiChart/aichart-1.png';
import ai2 from '../../assets/images/AiChart/aichart-2.png';
import ai3 from '../../assets/images/AiChart/aichart-3.png';
import ai4 from '../../assets/images/AiChart/aichart-4.png';
import ai5 from '../../assets/images/AiChart/aichart-5.png';
import ai6 from '../../assets/images/AiChart/aichart-6.png';
import ai7 from '../../assets/images/AiChart/aichart-7.png';
import ai8 from '../../assets/images/AiChart/aichart-8.png';
import ai9 from '../../assets/images/AiChart/aichart-9.png';
import ai10 from '../../assets/images/AiChart/aichart-10.png';
import type { ProjectData } from '../types';

export const aiChartAnalyzerProject: ProjectData = {
  id: 7,
  title: 'AiChartAnalyzer',
  category: 'mobile',
  description: 'AI-powered multi-market chart analysis platform for crypto, forex, and stocks with intelligent pattern recognition and trading insights',
  fullDescription:
    'Comprehensive AI-powered chart analysis platform designed to empower traders from beginners to experts. Features automated pattern detection, multi-timeframe analysis, AI-generated trading signals, and educational insights across crypto, forex, and stock markets. Includes real-time data integration, chart upload capabilities, AI chatbot for strategy questions, and advanced risk management suggestions.',
  image: aiChartImage,
  images: [ai1, ai2, ai3, ai4, ai5, ai6, ai7, ai8, ai9, ai10],
  technologies: ['React Native', 'React.js', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI GPT-4', 'Claude AI', 'TensorFlow', 'Chart.js', 'RevenueCat', 'Binance API', 'Yahoo Finance API'],
  github: '#',
  demo: '#',
  featured: true,
  stats: { views: '8.2k', stars: '187', forks: '63' },
  highlights: ['Multi-Market Analysis', 'AI Pattern Recognition', 'Real-Time Data', 'Educational Mode', 'Trading Signals', 'Risk Management'],
  color: '#f093fb',
  features: [
    'Automated candlestick pattern detection (Doji, Hammer, Shooting Star)',
    'Chart formation recognition (Head & Shoulders, Double Top/Bottom, Triangles)',
    'Support & resistance zone mapping with breakout predictions',
    'Multi-timeframe analysis (1m to Daily charts)',
    'Comprehensive indicator interpretation (RSI, MACD, Bollinger Bands, Volume)',
    'AI-generated trading reports with confidence levels',
    'Real-time market data integration (Binance, Yahoo Finance, Alpha Vantage)',
    'Chart screenshot upload and analysis capabilities',
    'AI chatbot for strategy questions and educational insights',
    'Cross-device history sync and portfolio tracking',
    'Subscription tiers with advanced features and API access',
    'Beginner-friendly "Explain Like I\'m 5" mode for learning'
  ],
  challenges: [
    'Integrating multiple AI models for different analysis types',
    'Processing real-time market data from various APIs efficiently',
    'Implementing accurate pattern recognition across different chart types',
    'Creating user-friendly interfaces for complex technical analysis',
    'Managing subscription tiers and payment processing',
    'Optimizing mobile performance for chart rendering and AI processing'
  ],
  solutions: [
    'Used OpenAI GPT-4 and Claude AI for natural language processing and chart interpretation',
    'Implemented Firebase Cloud Functions for scalable API data processing',
    'Created custom TensorFlow models trained on historical chart patterns',
    'Built responsive React Native components with optimized chart rendering',
    'Integrated RevenueCat for seamless subscription management across platforms',
    'Implemented caching strategies and background processing for smooth user experience'
  ]
};


