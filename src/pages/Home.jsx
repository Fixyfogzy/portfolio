

import profilePhoto from '../assets/profile.jpeg'
import ngoImg from '../assets/CIDI.png'
import solarImg from '../assets/solar 2.png'
import pgImg from '../assets/PG.png'
import startedgeImg from '../assets/startedge.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ['Graphic Designer.', 'Web Developer.', 'Brand Strategist.', 'Creative Problem Solver.']

function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="text-black">
      {displayed}
      <span className="animate-pulse text-gray-400">|</span>
    </span>
  )
}

const featuredProjects = [
  { title: 'Children Impact & Development Initiative', category: 'Web Development', desc: 'Designed and developed a responsive NGO website focused on showcasing community impact, programs, donations, and volunteer engagement.', img: ngoImg },
  { title: 'Pro Gamers Esports', category: 'Graphic Design', desc: 'Designed promotional event graphics for a Free Fire esports organization, combining bold visuals, speaker showcases, and competitive gaming aesthetics.', img: pgImg },
  { title: 'Branding & Social Media Design', category: 'Graphic Design', desc: 'Clean, acceDeveloped the brand identity and social media campaign for a solar energy company, focusing on sustainability, energy savings, and customer education.', img: solarImg },
  { title: 'Strat Edge Consulting', category: 'Web Development', desc: 'Built a modern corporate website for a consulting firm, highlighting business solutions, expertise, and professional credibility.', img: startedgeImg },
]

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Photoshop', level: 65 },
  { name: 'Coreldraw', level: 80 },
  { name: 'AI', level: 80 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Home() {
  return (
    <div className="text-gray-800">

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-white overflow-hidden relative">

        {/* Decorative circles */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-gray-100 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full border border-gray-200 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[-20px] right-[-20px] w-[250px] h-[250px] rounded-full border border-gray-100 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[-80px] left-[60px] w-[200px] h-[200px] rounded-full bg-gray-50 border border-gray-100 pointer-events-none"
        />

        <div className="max-w-5xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* Left — Text */}
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4"
            >
              Available for freelance
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-lg text-gray-400 font-medium mb-1"
            >
              I am
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4"
            >
              Dally Mofiyinfoluwa.
            </motion.h1>

            <motion.h2
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-xl font-medium text-gray-400 mb-6 min-h-[2rem]"
            >
              <TypeWriter />
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="text-base text-gray-500 max-w-md mb-10 leading-relaxed"
            >
              I craft visual identities and build websites that help brands look sharp and show up online with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex flex-wrap gap-4"
            >
              <Link to="/portfolio" className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                View Work
              </Link>
              <Link to="/contact" className="border border-gray-300 text-black px-8 py-3 rounded-full text-sm font-medium hover:border-black transition-colors">
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex flex-col gap-4"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 flex items-center gap-4">
              <img
  src={profilePhoto}
  alt="Dally Mofiyinfoluwa"
  className="w-16 h-16 rounded-full object-cover shrink-0"
/>
              <div>
                <p className="font-semibold text-black text-sm">Dally Mofiyinfoluwa</p>
                <p className="text-xs text-gray-400">Graphic Designer & Web Developer</p>
                <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">● Available</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '20+', label: 'Projects done' },
                { num: '15+', label: 'Happy clients' },
                { num: '3+', label: 'Years exp.' },
              ].map(stat => (
                <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-black">{stat.num}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-wrap gap-2">
              {['Branding', 'UI Design', 'Web Dev', 'Flyers', 'React', 'Figma'].map(tag => (
                <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* What I Do */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">
            What I Do
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            className="text-3xl font-bold text-black mb-12">
            Two things, done well.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Graphic Design', desc: 'Brand identities, flyers, social media visuals, and print materials that make people stop and look.' },
              { title: 'Web Development', desc: 'Clean, fast, responsive websites built with modern tools that work beautifully on every device.' },
            ].map((s, i) => (
              <motion.div key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i + 2} viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-semibold text-black mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">
            Featured Work
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            className="text-3xl font-bold text-black mb-12">
            Recent projects.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((p, i) => (
              <motion.div key={p.title}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i + 2} viewport={{ once: true, amount: 0.2 }}
                className="group cursor-pointer"
              >
               <div className="rounded-2xl h-56 mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
</div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{p.category}</p>
                <h3 className="text-lg font-semibold text-black mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-14 text-center">
            <Link to="/portfolio" className="border border-gray-300 text-black px-8 py-3 rounded-full text-sm font-medium hover:border-black transition-colors">
              See All Work →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">
            Skills
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            className="text-3xl font-bold text-black mb-10">
            Tools I work with.
          </motion.h2>
          <div className="flex flex-col gap-5 max-w-lg">
            {skills.map((skill, i) => (
              <motion.div key={skill.name}
                variants={fadeUp} initial="hidden" whileInView="show" custom={i + 2} viewport={{ once: true }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    className="bg-black h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-6">
            Let's build something great.
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }}
            className="text-gray-500 mb-10 max-w-md mx-auto">
            Got a project in mind? I'd love to hear about it.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={2} viewport={{ once: true, amount: 0.2 }}>
  <a href="https://wa.me/2348062165657" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
    Get in Touch
  </a>
</motion.div>
        </div>
      </section>

    </div>
  )
}