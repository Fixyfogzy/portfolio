import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/LOGO.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
       <Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="Mofi-Logo" className="w-10 h-10 object-contain" />
</Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-black border-b-2 border-black pb-0.5' : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="text-sm font-medium bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Hire Me
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu — half screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-1/2 bg-white shadow-2xl z-40 flex flex-col px-8 py-10 gap-8 md:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-400 hover:text-black text-2xl leading-none"
              aria-label="Close menu"
            >
              ✕
            </button>

            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <NavLink
                  to={link.to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-semibold ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'} transition-colors`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-auto"
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  )
}