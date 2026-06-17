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

import cidisite from '../assets/CIDI.png'

import startedgesite from '../assets/startedge.png'



export const projects = [
  {
    id: 1,
    title: 'Avance Branding',
    category: 'Graphic Design',
    desc: 'Full brand identity for a Lagos restaurant including logo, menu design, and brand guidelines.',
    images: [avance1, avance2, avance3, avance4, avance5],
    bg: 'bg-orange-100',
    accent: '#fb923c',
    tags: ['Branding', 'Logo', 'Social-media design'],
    year: '2026',
  },
  {
    id: 2,
    title: 'Fashion Flyer Campaign',
    category: 'Graphic Design',
    desc: 'A bold flyer series for a Lagos fashion brand promoting their seasonal collection.',
    images: [solar1, solar2, solar3, solar4, solar5],
    bg: 'bg-pink-100',
    accent: '#f472b6',
    tags: ['Flyer', 'Campaign', 'social media'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Church Conference Identity',
    category: 'Graphic Design',
    desc: 'Complete visual identity for an annual church conference — banners, souvenirs, and social graphics.',
    images: [null, null, null],
    bg: 'bg-purple-100',
    accent: '#a78bfa',
    tags: ['Identity', 'Event', 'Social Media'],
    year: '2023',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Graphic Design',
    desc: 'Consistent and engaging social media visuals for a lifestyle brand across Instagram and Twitter.',
    images: [null, null, null],
    bg: 'bg-yellow-100',
    accent: '#fbbf24',
    tags: ['Social Media', 'Content', 'Branding'],
    year: '2024',
  },
  {
    id: 5,
    title: 'NGO Website',
    category: 'Web Development',
    desc: 'A clean, accessible website for a non-profit focused on education in underserved communities.',
    images: [cidisite],
    bg: 'bg-blue-100',
    accent: '#60a5fa',
    tags: ['web dev', 'CSS', 'Responsive'],
    year: '2025',
    liveUrl: 'https://your-ngo-site.com',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Web Development',
    desc: 'A personal portfolio for a photographer showcasing their work with a minimal, elegant layout.',
    images: [startedgesite],
    bg: 'bg-teal-100',
    accent: '#2dd4bf',
    tags: ['html', 'css', 'Design'],
    year: '2025',
    liveUrl: 'https://your-portfolio-site.com',
  },
  {
    id: 7,
    title: 'Landing Page',
    category: 'Web Development',
    desc: 'High-converting landing page for a Nigerian fintech startup with smooth animations.',
    images: [null],
    bg: 'bg-green-100',
    accent: '#4ade80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2023',
    liveUrl: 'https://your-landing-page.com',
  },
  {
    id: 8,
    title: 'Business Website',
    category: 'Web Development',
    desc: 'Multi-page business website for a Lagos-based logistics company with a contact form.',
    images: [null],
    bg: 'bg-indigo-100',
    accent: '#818cf8',
    tags: ['React', 'Responsive', 'SEO'],
    year: '2023',
    liveUrl: 'https://your-business-site.com',
  },
]