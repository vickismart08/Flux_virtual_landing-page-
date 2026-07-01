/**
 * Central configuration file for Flux Virtual landing page
 * Update this file to change colors, links, images, and other settings
 */

export const config = {
  // Brand Information
  brand: {
    name: 'Flux Virtual',
    tagline: 'Global Virtual Numbers. SMS, Calls & Verification in Minutes.',
    description: 'Purchase virtual phone numbers from multiple countries and use them for SMS verification, voice calls, messaging, online registrations, and business communication.',
    email: 'fluxvirtualofficial@gmail.com',
    copyright: '© 2026 Flux Virtual. All rights reserved.',
    company: 'SWIFTDROP PREMIER SOLUTIONS LIMITED',
    companyTagline: 'Flux Virtual is a product of SWIFTDROP PREMIER SOLUTIONS LIMITED',
    companyOperator: 'Operated by SWIFTDROP PREMIER SOLUTIONS LIMITED',
  },

  // Download Links (Replace these with actual app store links)
  downloads: {
    android: 'https://play.google.com/store/apps/details?id=com.fluxvirtual',
    ios: 'https://apps.apple.com/app/flux-virtual/id123456789',
  },

  // Legal Links
  legal: {
    privacy: '/privacy-policy',
    terms: 'https://fluxvirtual.com/terms-of-service',
    support: 'mailto:fluxvirtualofficial@gmail.com',
  },

  // Images/Screenshots (Replace with actual paths)
  images: {
    logo: '/logo.svg',
    favicon: '/favicon.svg',
    heroMockup: '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-09 at 15.52.44.png',
    screenshots: [
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-09 at 15.54.13.png',
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-09 at 15.54.02.png',
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-09 at 15.52.44.png',
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-09 at 15.56.10.png',
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-11 at 10.05.01.png',
      '/images/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-11 at 10.05.13.png',
    ],
  },

  // SEO Metadata
  seo: {
    title: 'Flux Virtual - Global Virtual Phone Numbers for SMS & Calls',
    description: 'Get virtual phone numbers from 100+ countries for SMS verification, voice calls, and online registrations. Fast activation, secure transactions, trusted by millions.',
    keywords: 'virtual phone number, SMS verification, virtual number app, international phone number',
    ogImage: '/og-image.png',
    twitterHandle: '@FluxVirtual',
  },

  // Colors (Light Theme)
  colors: {
    light: {
      primary: '#F9F7F3',      // Warm Beige
      accent: '#D97757',       // Soft Orange
      text: '#3B2F2F',         // Dark Brown
      border: '#E5E7EB',       // Light Gray
      background: '#FFFFFF',   // White
    },
    // Colors (Dark Theme) - will be applied via class
    dark: {
      primary: '#1C1C1E',      // Background
      surface: '#2C2C2E',      // Surface
      card: '#3A3A3C',         // Card
      text: '#FFFFFF',         // White text
    },
  },

  // Features
  features: [
    {
      title: 'Virtual Numbers',
      description: 'Access phone numbers from multiple countries.',
      icon: 'Globe',
    },
    {
      title: 'Receive SMS',
      description: 'Get verification codes instantly.',
      icon: 'MessageSquare',
    },
    {
      title: 'Voice Calls',
      description: 'Make and receive calls using your virtual number.',
      icon: 'Phone',
    },
    {
      title: 'Multiple Countries',
      description: 'Select from a growing range of supported countries.',
      icon: 'MapPin',
    },
    {
      title: 'Secure Login',
      description: 'Sign in with Email, Google, or Apple.',
      icon: 'Lock',
    },
    {
      title: 'Fast Activation',
      description: 'Purchase and activate numbers within minutes.',
      icon: 'Zap',
    },
  ],

  // How it Works Steps
  steps: [
    { number: 1, title: 'Create your account', description: 'Sign up in minutes with email, Google, or Apple.' },
    { number: 2, title: 'Choose a country and number', description: 'Browse available virtual numbers from 100+ countries.' },
    { number: 3, title: 'Purchase securely', description: 'Complete your purchase with multiple payment options.' },
    { number: 4, title: 'Receive SMS and calls instantly', description: 'Start receiving messages and calls immediately.' },
    { number: 5, title: 'Manage everything from one dashboard', description: 'Control all your numbers and settings from one place.' },
  ],

  // Why Choose Flux Virtual
  benefits: [
    'Reliable virtual numbers',
    'Fast SMS delivery',
    'Call support',
    'Multiple country availability',
    'Secure transactions',
    'User-friendly dashboard',
    'Scalable infrastructure',
  ],
};
