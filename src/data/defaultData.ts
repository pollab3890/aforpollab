import { ProfileData, GalleryItem, SkillCategory, ProjectItem } from '../types.ts';

// Generated asset paths
export const HERO_PORTRAIT = '/src/assets/images/pollab_hero_portrait_1791557615252.jpg';
export const GALLERY_PORTRAIT = '/src/assets/images/pollab_gallery_portrait_1791557630102.jpg';
export const GALLERY_CREATIVE = '/src/assets/images/pollab_gallery_creative_1791557644940.jpg';
export const GALLERY_LIFESTYLE = '/src/assets/images/pollab_gallery_lifestyle_1791557656895.jpg';

export const defaultProfileData: ProfileData = {
  brandName: 'A For Pollab',
  fullName: 'Pollab Mia',
  headline: 'Creative Producer, Visual Storyteller & Digital Media Creator',
  subtitle: 'Crafting compelling narratives through high-impact cinematography, digital strategy, and refined visual aesthetics.',
  avatarUrl: HERO_PORTRAIT,
  bioParagraph1:
    'Welcome to A For Pollab. I am Pollab Mia, a multidisciplinary creative dedicated to cinematic visual storytelling, digital content creation, and modern brand media. With a passion for framing authentic human emotion through pristine composition and lighting, I help brands and audiences connect through unforgettable visual experiences.',
  bioParagraph2:
    'My journey spans video direction, creative photography, social media storytelling, and post-production craft. From concept development and storyboarding to final color grade, I approach every production with meticulous attention to detail, high aesthetic standards, and a deep understanding of today’s dynamic digital landscape.',
  bioParagraph3:
    'Whether directing full-scale commercial shoots, curating episodic digital content across Facebook, YouTube, and TikTok, or crafting intimate editorial portraits, my mission is simple: transform ideas into cinematic art that inspires and resonates globally.',
  email: 'pollabmia97@gmail.com',
  phone: '+1 (555) 234-5678',
  location: 'Available Globally / Remote & On-Location',
  socials: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/15552345678',
    linkedin: 'https://linkedin.com',
  },
  stats: [
    { label: 'Creative Experience', value: '6+ Yrs', sublabel: 'Digital & Media Production' },
    { label: 'Completed Projects', value: '140+', sublabel: 'Films, Campaigns & Shoots' },
    { label: 'Digital Reach', value: '45M+', sublabel: 'Total Views Across Channels' },
    { label: 'Global Platforms', value: '4 Key Hubs', sublabel: 'FB · YT · TikTok · IG' },
  ],
};

export const defaultGalleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Studio Portrait & Creative Vision',
    category: 'Portraits',
    imageUrl: HERO_PORTRAIT,
    aspectRatio: '1:1',
    description: 'Signature studio portrait showcasing black turtleneck styling, high-contrast rim light, and warm golden tone grading.',
    year: '2026',
  },
  {
    id: 'gal-2',
    title: 'Visual Direction & Concept Review',
    category: 'Portraits',
    imageUrl: GALLERY_PORTRAIT,
    aspectRatio: '4:3',
    description: 'On-set tablet review of editorial shoot storyboards in low-key studio lighting with brass and ambient accents.',
    year: '2026',
  },
  {
    id: 'gal-3',
    title: 'Cinema Optics & Production Rig',
    category: 'Creative',
    imageUrl: GALLERY_CREATIVE,
    aspectRatio: '4:3',
    description: 'High-end cine lens configuration and matte box calibrated for anamorphic night sequences and bokeh control.',
    year: '2025',
  },
  {
    id: 'gal-4',
    title: 'Architectural Shadows & Urban Motion',
    category: 'Lifestyle',
    imageUrl: GALLERY_LIFESTYLE,
    aspectRatio: '4:3',
    description: 'Editorial lifestyle sequence navigating modern brutalist architecture with warm interior gallery illumination.',
    year: '2025',
  },
];

export const defaultSkillCategories: SkillCategory[] = [
  {
    title: 'Cinematography & Visual Production',
    description: 'Camera operation, multi-point studio lighting, and high-impact framing for broadcast and digital media.',
    skills: [
      { name: 'Cinematic Camera Operation & Optics', level: 95, highlight: 'Sony FX / ARRI / Blackmagic' },
      { name: 'Studio & Natural Lighting Design', level: 90, highlight: '3-Point, Low-Key & Golden Rim' },
      { name: 'Creative Direction & Storyboarding', level: 92, highlight: 'Script-to-Screen Narrative' },
      { name: 'Drone Aerial Cinematography', level: 85, highlight: 'Precision Tracking & 4K Hyperlapse' },
    ],
  },
  {
    title: 'Post-Production & Audio Design',
    description: 'Advanced non-linear editing, pacing, color grading, sound mastering, and visual effects pipelines.',
    skills: [
      { name: 'Video Editing (Premiere Pro & Final Cut)', level: 96, highlight: 'Rhythm, Pacing & Multicam' },
      { name: 'Color Grading (DaVinci Resolve)', level: 88, highlight: 'ACES, Film Emulations, Custom LUTs' },
      { name: 'Motion Graphics & Typography', level: 86, highlight: 'After Effects & Modern Lower Thirds' },
      { name: 'Sound Design & Audio Mastering', level: 84, highlight: 'Audition, EQ, Foley & Mastering' },
    ],
  },
  {
    title: 'Digital Content & Channel Strategy',
    description: 'Platform-native audience retention, short-form viral storytelling, and cohesive multi-channel publishing.',
    skills: [
      { name: 'Short-Form Video (TikTok & Reels)', level: 94, highlight: 'Hook Engineering & Retention Flow' },
      { name: 'Long-Form Storytelling (YouTube)', level: 91, highlight: 'Episodic Pacing & CTR Optimization' },
      { name: 'Brand Media Identity & Styleguides', level: 89, highlight: 'Cross-Platform Visual Consistency' },
      { name: 'Audience Analytics & Performance', level: 87, highlight: 'Insights-Driven Content Iteration' },
    ],
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Echoes of the Metropolis',
    category: 'Cinematic Film',
    thumbnailUrl: GALLERY_LIFESTYLE,
    client: 'Autonomous Creative Studio',
    year: '2026',
    duration: '4m 32s',
    summary: 'A moody, cinematic short film exploring architectural geometry, nighttime street lighting, and urban solitude.',
    deliverables: ['Director of Photography', 'Color Grading', 'Sound Mix', 'Original Edit'],
    description:
      'Shot entirely in low-light environments with prime anamorphic lenses. The film pairs brutalist architecture with warm interior vignettes, exploring the balance between monolithic concrete structures and the fleeting lives within.',
    metrics: '2.4M+ Views · Official Selection at Indie Shorts Showcase',
    demoUrl: 'https://youtube.com',
  },
  {
    id: 'proj-2',
    title: 'Aura Noir: Luxury Apparel Launch',
    category: 'Commercial Brand',
    thumbnailUrl: GALLERY_PORTRAIT,
    client: 'Noir Atelier',
    year: '2026',
    duration: '60s Commercial + 4 Stills',
    summary: 'High-contrast commercial campaign spotlighting minimalist luxury tailoring with gold-accented rim illumination.',
    deliverables: ['Creative Concept', 'Commercial Production', 'Photo Editorial', 'Social Cuts'],
    description:
      'Created a multi-asset commercial launch package for high-end bespoke garments. Developed the visual treatment emphasizing deep velvet textures, reflective golden undertones, and confident pacing.',
    metrics: '+340% Engagement on Launch Day · Featured on Fashion Digest',
    demoUrl: 'https://instagram.com',
  },
  {
    id: 'proj-3',
    title: 'The Director’s Journal (Episodic Series)',
    category: 'Social Series',
    thumbnailUrl: GALLERY_CREATIVE,
    client: 'A For Pollab Digital',
    year: '2025',
    duration: '12 Episodes (60s–90s)',
    summary: 'A masterclass social mini-series breaking down cinematography principles, camera rigs, and lighting recipes.',
    deliverables: ['Host / Creator', 'Scriptwriting', 'Rapid Editing', 'Thumbnail Design'],
    description:
      'An educational and cinematic behind-the-scenes series distributed across YouTube Shorts, TikTok, and Instagram Reels. Each episode breaks down a single lighting trick or shot composition in under 60 seconds.',
    metrics: '18M+ Total Impressions · 120k+ New Followers Across Platforms',
    demoUrl: 'https://tiktok.com',
  },
  {
    id: 'proj-4',
    title: 'Monochrome & Gold Editorial Stills',
    category: 'Creative Direction',
    thumbnailUrl: HERO_PORTRAIT,
    client: 'Heritage Creative Lab',
    year: '2025',
    duration: 'Print & Digital Exhibition',
    summary: 'Fine art portrait exhibition contrasting deep obsidian shadows with subtle gilded reflections.',
    deliverables: ['Studio Lighting Direction', 'Medium Format Capture', 'Retouching', 'Gallery Print Prep'],
    description:
      'A personal portrait study celebrating elegance, confidence, and quiet strength. Printed on archival cotton rag paper with subtle metallic pigment accents.',
    metrics: 'Gallery Showcase · Private Collector Acquisition',
    demoUrl: 'https://facebook.com',
  },
];
