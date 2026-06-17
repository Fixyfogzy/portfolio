import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const tabs = ['All', 'Graphic Design', 'Web Development']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function Thumbnail({ project, onClick }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.93, transition: { duration: 0.2 } }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer"
    >
      <div className={`${project.bg} rounded-2xl h-56 mb-4 overflow-hidden relative`}>
        {project.images[0] ? (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
              <span className="text-lg font-bold" style={{ color: project.accent }}>{project.title.charAt(0)}</span>
            </div>
            <p className="text-xs text-gray-400">Image coming soon</p>
            {project.images.length > 1 && (
              <div className="flex gap-1 mt-1">
                {project.images.map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-xs bg-white/90 text-gray-800 px-3 py-1.5 rounded-full font-medium shadow-sm">
            {project.category === 'Web Development' ? 'View Details →' : `View ${project.images.length} Images →`}
          </span>
        </div>

        {project.category === 'Graphic Design' && project.images.length > 1 && (
          <div className="absolute top-3 left-3">
            <span className="text-xs bg-white/80 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {project.images.length} designs
            </span>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{project.category}</p>
      <h3 className="text-lg font-semibold text-black mb-1 group-hover:underline underline-offset-4 transition-all">{project.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs border border-gray-200 text-gray-400 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const isWeb = project.category === 'Web Development'

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="fixed z-50 inset-0 flex items-center justify-center px-4 py-8"
      >
        <div
          className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Modal header image ── */}
          <div className={`${project.bg} relative`} style={{ height: '260px', overflow: 'hidden' }}>

            {/* FIX #3: actually render the image so the header isn't empty */}
            {project.images?.[imgIndex] && (
              <img
                src={project.images[imgIndex]}
                alt={project.title}
                onClick={() => setLightboxOpen(true)}
                className="w-full h-full object-cover cursor-zoom-in"
              />
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:text-black transition-colors text-sm z-10"
            >
              ✕
            </button>

            {/* Prev / Next arrows (non-web projects only) */}
            {!isWeb && project.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex(i => Math.max(0, i - 1))}
                  disabled={imgIndex === 0}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:text-black disabled:opacity-30 transition-all text-sm"
                >
                  ←
                </button>
                <button
                  onClick={() => setImgIndex(i => Math.min(project.images.length - 1, i + 1))}
                  disabled={imgIndex === project.images.length - 1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:text-black disabled:opacity-30 transition-all text-sm"
                >
                  →
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Modal body ── */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-400 uppercase tracking-widest">{project.category}</p>
              <p className="text-xs text-gray-400">{project.year}</p>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">{project.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs border border-gray-200 text-gray-400 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {isWeb && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mb-3"
              >
                Visit Live Site →
              </a>
            )}

            <button
              onClick={onClose}
              className="w-full border border-gray-200 text-gray-400 py-3 rounded-full text-sm font-medium hover:border-black hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Lightbox — portalled to document.body to escape overflow:hidden ── */}
      {/* FIX #1: removed duplicate inline lightbox; only the portal version remains */}
      {/* FIX #2: AnimatePresence wraps the conditional content so exit animations fire */}
      {createPortal(
        <AnimatePresence>
          {lightboxOpen && project.images[imgIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: 'rgba(0,0,0,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                cursor: 'zoom-out',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -80 && imgIndex < project.images.length - 1) {
                      setImgIndex(i => i + 1)
                    } else if (info.offset.x > 80 && imgIndex > 0) {
                      setImgIndex(i => i - 1)
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  src={project.images[imgIndex]}
                  alt={project.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    cursor: 'grab',
                  }}
                />
              </AnimatePresence>

              {/* Close button */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✕
              </button>

              {/* Dot indicators */}
              {project.images.length > 1 && (
                <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                  {project.images.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        height: '6px',
                        borderRadius: '9999px',
                        background: i === imgIndex ? 'white' : 'rgba(255,255,255,0.4)',
                        width: i === imgIndex ? '24px' : '6px',
                        transition: 'all 0.2s',
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <motion.div
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-gray-50 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full border border-gray-100 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[10%] left-[-100px] w-[300px] h-[300px] rounded-full bg-gray-50 border border-gray-100 pointer-events-none"
      />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-3">
          My Work
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-4xl md:text-5xl font-bold text-black mb-4">
          Portfolio.
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-gray-500 max-w-lg">
          A collection of design and development work — from brand identities to full websites.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-12 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex gap-2 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? 'bg-black text-white'
                  : 'border border-gray-200 text-gray-500 hover:border-black hover:text-black'
              }`}
            >
              {tab}
              <span className="ml-2 text-xs opacity-60">
                {tab === 'All' ? projects.length : projects.filter(p => p.category === tab).length}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <Thumbnail key={p.id} project={p} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}