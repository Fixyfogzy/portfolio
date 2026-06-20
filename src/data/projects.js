import avance1 from '../assets/AVANCE/AVANCE.png'
import avance2 from '../assets/AVANCE/avance1.png'
import avance3 from '../assets/AVANCE/avance4.png'
import avance4 from '../assets/AVANCE/avance5.png'
import avance5 from '../assets/AVANCE/avance6.png'

import solar1 from '../assets/solar yard/solar 2.png'
import solar2 from '../assets/solar yard/solar2.png'
import solar3 from '../assets/solar yard/solar6.png'
import solar4 from '../assets/solar yard/solar8.png'
import solar5 from '../assets/solar yard/solar9.png'

import smd1 from '../assets/social media-designs/international womens day.png'
import smd2 from '../assets/social media-designs/PG1.png'
import smd3 from '../assets/social media-designs/med cidi.png'
import smd4 from '../assets/social media-designs/international girl child day.png'

import msmd1 from '../assets/more social media designs/1.png'
import msmd2 from '../assets/more social media designs/2.png'
import msmd3 from '../assets/more social media designs/3.png'
import msmd4 from '../assets/more social media designs/4.png'
import msmd5 from '../assets/more social media designs/5.png'

import cidisite from '../assets/CIDI.png'

import startedgesite from '../assets/startedge.png'

import pwdd from '../assets/pwdd.png'

import taskly from '../assets/taskly.png'



export const projects = [
  {
    id: 1,
    title: 'Avance Designs',
    category: 'Graphic Design',
    desc: 'A complete visual identity and social media design project created for Avance Capital, a demo finance brand focused on business growth, tax guidance, and financial management.',
    images: [avance1, avance2, avance3, avance4, avance5],
    bg: 'bg-orange-100',
    accent: '#fb923c',
    tags: ['Branding', 'Logo', 'Social-media design'],
    year: '2026',
  },
  {
    id: 2,
    title: 'Solar Yard Designs',
    category: 'Graphic Design',
    desc: 'A branding and social media design project created for Solar Yard, a solar energy company focused on providing sustainable and cost-effective power solutions for homes and businesses.',
    images: [solar1, solar2, solar3, solar4, solar5],
    bg: 'bg-pink-100',
    accent: '#f472b6',
    tags: ['Flyer', 'Campaign', 'social media'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Other Social Media Designs',
    category: 'Graphic Design',
    desc: 'A collection of promotional and social media designs created across different industries, showcasing versatility in visual storytelling, marketing communication, and brand adaptation.',
    images: [smd1, smd2, smd3, smd4],
    bg: 'bg-purple-100',
    accent: '#a78bfa',
    tags: ['Event', 'Social Media'],
    year: '2023',
  },
  {
    id: 4,
    title: 'More Social Media Designs',
    category: 'Graphic Design',
    desc: 'A selection of marketing creatives developed for brands across various industries, focused on engagement, clarity, and visual impact.',
    images: [msmd1, msmd2, msmd3, msmd4, msmd5],
    bg: 'bg-yellow-100',
    accent: '#fbbf24',
    tags: ['Social Media', 'Content', 'Branding'],
    year: '2024',
  },
  {
    id: 5,
    title: 'NGO Website',
    category: 'Web Development',
    desc: 'Designed and developed a responsive NGO website focused on showcasing community impact, programs, donations, and volunteer engagement.',
    images: [cidisite],
    bg: 'bg-blue-100',
    accent: '#60a5fa',
    tags: ['web dev', 'CSS', 'Responsive'],
    year: '2025',
    liveUrl: 'https://childrenimpact.org.ng',
  },
  {
    id: 6,
    title: 'Business Website',
    category: 'Web Development',
    desc: 'Built a modern corporate website for a consulting firm, highlighting business solutions, expertise, and professional credibility.',
    images: [startedgesite],
    bg: 'bg-teal-100',
    accent: '#2dd4bf',
    tags: ['html', 'css', 'Design'],
    year: '2025',
    liveUrl: 'https://strat-edge-consulting.vercel.app/',
  },
  {
    id: 7,
    title: 'Business Website',
    category: 'Web Development',
    desc: 'A responsive multi-page site built with React and React Router, featuring a custom design system, interactive facilitator profiles, an FAQ accordion, and a Formspree-powered registration form. Deployed on Netlify with a custom domain and SEO setup via Google Search Console.',
    images: [pwdd],
    bg: 'bg-green-100',
    accent: '#4ade80',
    tags: ['React', 'CSS', 'JavaScript', 'Design', 'SEO'],
    year: '2026',
    liveUrl: 'https://parentingwithdrdally.com',
  },
  {
    id: 8,
    title: 'Landing Page',
    category: 'Web Development',
    desc: 'A demo SaaS landing page concept for a team task management tool, designed to showcase a complete marketing funnel — hero CTA, feature grid, tiered pricing, and testimonials — in a clean, conversion-focused layout. Built and deployed on Vercel.',
    images: [taskly],
    bg: 'bg-indigo-100',
    accent: '#818cf8',
    tags: ['HTML', 'Responsive', 'Design'],
    year: '2023',
    liveUrl: 'https://taskly-landing-page.vercel.app/',
  },
]