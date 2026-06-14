import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const spring     = { type: 'spring', stiffness: 400, damping: 20 }
const bouncySlow = { type: 'spring', stiffness: 200, damping: 14 }

const links = [
  { to: '/',          label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about',     label: 'About' },
  { to: '/contact',   label: 'Contact' },
]

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/2348062165657' },
  { label: 'Email',    href: 'mailto:dallymofiyinfoluwa@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* ── Top content ── */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 relative z-10">

        {/* Tagline + nav row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...bouncySlow, delay: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-12"
        >
          {/* Left: tagline + CTA */}
          <div className="max-w-sm">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Open to work</p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 whitespace-pre-line">
              {"Got a project?\nLet's build it."}
            </h3>
            <motion.a
              href="mailto:dallymofiyinfoluwa@gmail.com"
              whileHover={{ scale: 1.05, transition: spring }}
              whileTap={{ scale: 0.96 }}
              className="inline-block border border-white text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
            >
              Say Hello →
            </motion.a>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-col gap-3">
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...bouncySlow, delay: 0.1 + i * 0.07 }}
              >
                <Link
                  to={link.to}
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 w-fit"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: 16 }}
                    transition={spring}
                    className="inline-block h-px bg-white overflow-hidden"
                  />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6"
        >
          <p className="text-xs text-white/30">
            © {year} Dally Mofiyinfoluwa Emmanuel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, transition: spring }}
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Big MOFI — pinned to bottom ── */}
      <div className="overflow-hidden leading-none">
        <motion.p
          initial={{ y: '60%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ ...bouncySlow, delay: 0.1 }}
          className="text-[23vw] font-black tracking-tighter text-center text-white leading-none select-none"
        >
          MOFI
        </motion.p>
      </div>

    </footer>
  )
}