import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpeg'

// ── Bounce spring presets ──────────────────────────────────────────
const spring = { type: 'spring', stiffness: 400, damping: 20 }
const bouncySlow = { type: 'spring', stiffness: 200, damping: 14 }
const bouncyFast = { type: 'spring', stiffness: 500, damping: 18 }

// ── Reusable scroll-reveal wrapper ────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...bouncySlow, delay }}
    >
      {children}
    </motion.div>
  )
}

// ── Skill tag with hover pop ───────────────────────────────────────
function SkillTag({ label, i }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...bouncyFast, delay: 0.05 * i }}
      whileHover={{ scale: 1.12, rotate: [-2, 2, -1, 0], transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      className="inline-block text-xs border border-gray-200 text-gray-500 px-3 py-1.5 rounded-full cursor-default select-none"
    >
      {label}
    </motion.span>
  )
}

// ── Fact card with hover tilt ──────────────────────────────────────
function FactCard({ emoji, label, value, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...bouncySlow, delay: 0.1 + i * 0.08 }}
      whileHover={{ x: 6, backgroundColor: '#f9f9f9', transition: spring }}
      className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 cursor-default"
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -6, 0] }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: 'easeInOut' }}
        className="text-lg"
      >
        {emoji}
      </motion.span>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-medium text-black">{value}</p>
      </div>
    </motion.div>
  )
}

// ── Experience card ────────────────────────────────────────────────
function ExpCard({ exp, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -1 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ ...bouncySlow, delay: i * 0.1 }}
      whileHover={{ y: -4, rotate: 0.5, boxShadow: '0 8px 32px rgba(0,0,0,0.07)', transition: spring }}
      className="border border-gray-100 rounded-2xl p-6 cursor-default"
    >
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <h3 className="text-base font-semibold text-black">{exp.role}</h3>
          <p className="text-sm text-gray-400">{exp.org}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-xs text-gray-400">{exp.period}</span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="text-xs border border-gray-200 text-gray-400 px-2.5 py-1 rounded-full"
          >
            {exp.type}
          </motion.span>
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{exp.desc}</p>
    </motion.div>
  )
}

// ── Data ───────────────────────────────────────────────────────────
const designSkills = ['Social Media Design', 'Flyer & Poster Design', 'Typography', 'Layout Composition', 'Brand Identity']
const webSkills    = ['HTML5 & CSS3', 'JavaScript', 'React', 'Responsive Design', 'Basic UI/UX']
const tools        = ['Adobe Photoshop', 'CorelDRAW', 'VS Code', 'Framer Motion', 'AI-assisted tools']

const experience = [
  {
    role: 'Graphic Designer & Web Developer',
    org: 'Children Impact and Development Initiative (CIDI)',
    period: '2021 – Present',
    type: 'Volunteer',
    desc: "Designed social media graphics, event flyers, and educational posters for community campaigns. Currently supporting the development of the organisation's website with a focus on mobile responsiveness.",
  },
  {
    role: 'Freelance Graphic & Web Designer',
    org: 'Self-Employed',
    period: '2020 – Present',
    type: 'Freelance',
    desc: 'Delivered custom graphic designs for digital and print media. Built responsive website layouts for small businesses and personal brands, managing projects from briefing through to final delivery.',
  },
  {
    role: 'Solar Installation Intern',
    org: 'Solar Yard, Abuja',
    period: '2023 – 2025',
    type: 'Internship',
    desc: 'Assisted in the installation of solar panels, inverters, and batteries. Supported system testing and routine maintenance under supervision.',
  },
]

const facts = [
  { emoji: '📍', label: 'Based in',  value: 'Abuja, Nigeria' },
  { emoji: '🎓', label: 'Studying',  value: 'B.Sc. Computer Science, Bingham University' },
  { emoji: '⚽', label: 'Hobby',     value: 'Football & Chess' },
  { emoji: '🌐', label: 'Languages', value: 'English (Fluent)' },
]

const skillSections = [
  { label: 'Design',      list: designSkills },
  { label: 'Development', list: webSkills },
  { label: 'Tools',       list: tools },
]

// ── Page ───────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-140px] right-[-140px] w-[520px] h-[520px] rounded-full bg-gray-50 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25], rotate: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-[-90px] right-[-90px] w-[390px] h-[390px] rounded-full border border-gray-100 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[8%] left-[-110px] w-[320px] h-[320px] rounded-full bg-gray-50 border border-gray-100 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 relative z-10">

        {/* ── Header ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bouncySlow, delay: 0 }}
          className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3"
        >
          Who I Am
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...bouncySlow, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            About.
          </motion.h1>
        </div>

        {/* ── Intro grid ── */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">

          {/* Left: avatar + facts */}
          <div>
            {/* Avatar */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ ...bouncySlow, delay: 0.18 }}
  whileHover={{ rotate: 1, scale: 1.01, transition: spring }}
  className="w-full h-72 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 overflow-hidden relative"
>
  <img
    src={profilePhoto}
    alt="Dally Mofiyinfoluwa"
    className="w-full h-full object-cover"
  />
</motion.div>
            {/* Facts */}
            <div className="flex flex-col gap-3">
              {facts.map((f, i) => (
                <FactCard key={i} {...f} i={i} />
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...bouncySlow, delay: 0.22 }}
          >
            <h2 className="text-2xl font-bold text-black mb-4">{"Hi, I'm Mofi."}</h2>
            <div className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed">
              {[
                "I'm a Creative Designer and Front-End Developer based in Abuja, Nigeria. I combine a Computer Science background with hands-on design experience to build things that look great and work well.",
                "I've been designing since 2020, flyers, brand identities, social media graphics and gradually expanded into front-end development, building responsive websites with clean structure and modern UI practices.",
                "Right now I volunteer as a designer and web developer at CIDI, where I support community outreach through visual communication and digital presence. On the side, I take on freelance projects for small businesses and personal brands.",
                "I enjoy working at the intersection of design and code — where aesthetics meet functionality. I'm always learning, always building.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...bouncySlow, delay: 0.3 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...bouncySlow, delay: 0.72 }}
              className="mt-8 flex gap-3 flex-wrap"
            >
              <motion.a
                href="/Dally_Emmanuel_CV.pdf"
                download
                whileHover={{ scale: 1.05, transition: spring }}
                whileTap={{ scale: 0.96 }}
                className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                Download CV →
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, transition: spring }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/contact"
                  className="text-sm font-medium border border-gray-200 text-gray-500 px-5 py-2.5 rounded-full hover:border-black hover:text-black transition-colors block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Skills ── */}
        <Reveal delay={0} className="mt-20">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">What I Work With</p>
          <h2 className="text-2xl font-bold text-black mb-8">Skills & Tools.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillSections.map((section, si) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 30, rotate: si % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...bouncySlow, delay: si * 0.12 }}
                whileHover={{ y: -4, transition: spring }}
                className="border border-gray-100 rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">{section.label}</p>
                <div className="flex flex-wrap gap-2">
                  {section.list.map((s, i) => (
                    <SkillTag key={s} label={s} i={i + si * 5} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Experience ── */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">Background</p>
            <h2 className="text-2xl font-bold text-black mb-8">Experience.</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <ExpCard key={i} exp={exp} i={i} />
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <Reveal delay={0} className="mt-20">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">Education</p>
          <h2 className="text-2xl font-bold text-black mb-8">Qualifications.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: 'University', title: 'B.Sc. Computer Science — In View', sub: 'Bingham University, Nasarawa State' },
              { type: 'Certification', title: 'Graphic Design Training', sub: '2020 Printing Press · 2021' },
            ].map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: i === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...bouncySlow, delay: i * 0.12 }}
                whileHover={{ y: -4, rotate: i === 0 ? 0.5 : -0.5, transition: spring }}
                className="border border-gray-100 rounded-2xl p-6 cursor-default"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{ed.type}</p>
                <h3 className="text-base font-semibold text-black mb-1">{ed.title}</h3>
                <p className="text-sm text-gray-400">{ed.sub}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal delay={0} className="mt-20">
          <motion.div
            whileHover={{ scale: 1.01, transition: spring }}
            className="border border-gray-100 rounded-3xl p-10 text-center"
          >
            <motion.p
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xs uppercase tracking-widest text-gray-400 mb-3"
            >
              Open to opportunities
            </motion.p>
            <h2 className="text-2xl font-bold text-black mb-3">{"Let's work together."}</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              {"Whether it's a design project, a website, or a collaboration — I'd love to hear about it."}
            </p>
            <motion.div
              whileHover={{ scale: 1.06, transition: spring }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-block bg-black text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in Touch →
              </Link>
            </motion.div>
          </motion.div>
        </Reveal>

      </div>
    </div>
  )
}