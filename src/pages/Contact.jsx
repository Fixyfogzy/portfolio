import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ── Spring presets ─────────────────────────────────────────────────
const spring     = { type: 'spring', stiffness: 400, damping: 20 }
const bouncySlow = { type: 'spring', stiffness: 200, damping: 14 }
const bouncyFast = { type: 'spring', stiffness: 500, damping: 18 }

// ── Scroll reveal ──────────────────────────────────────────────────
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

// ── Contact link card ──────────────────────────────────────────────
function ContactCard({ emoji, label, value, href, i }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ ...bouncySlow, delay: 0.2 + i * 0.1 }}
      whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1, boxShadow: '0 12px 36px rgba(0,0,0,0.09)', transition: spring }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-4 border border-gray-100 rounded-2xl px-6 py-5 cursor-pointer group"
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -6, 0] }}
        transition={{ duration: 0.7, delay: 0.6 + i * 0.15, ease: 'easeInOut' }}
        className="text-2xl"
      >
        {emoji}
      </motion.span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm font-medium text-black truncate group-hover:underline underline-offset-4 transition-all">
          {value}
        </p>
      </div>
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={spring}
        className="text-gray-300 group-hover:text-black transition-colors text-lg"
      >
        →
      </motion.span>
    </motion.a>
  )
}

// ── Animated input ─────────────────────────────────────────────────
function Field({ label, name, type = 'text', value, onChange, placeholder, textarea }) {
  const [focused, setFocused] = useState(false)
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-1.5">
      <motion.label
        animate={{ color: focused ? '#000' : '#9ca3af', x: focused ? 2 : 0 }}
        transition={spring}
        className="text-xs uppercase tracking-widest font-medium"
        htmlFor={name}
      >
        {label}
      </motion.label>
      <motion.div
        animate={{
          borderColor: focused ? '#000' : '#e5e7eb',
          scale: focused ? 1.01 : 1,
        }}
        transition={spring}
        className="rounded-xl border overflow-hidden"
      >
        <Tag
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={textarea ? 5 : undefined}
          className="w-full px-4 py-3 text-sm text-black placeholder-gray-300 outline-none bg-white resize-none"
        />
      </motion.div>
    </div>
  )
}

// ── Contact links data ─────────────────────────────────────────────
const contacts = [
  {
    emoji: '📧',
    label: 'Email',
    value: 'dallymofiyinfoluwa@gmail.com',
    href: 'mailto:dallymofiyinfoluwa@gmail.com',
  },
  {
    emoji: '📱',
    label: 'WhatsApp',
    value: '+234 806 216 5657',
    href: 'https://wa.me/2348062165657',
  },
  {
    emoji: '📍',
    label: 'Location',
    value: 'Abuja, Nigeria',
    href: 'https://maps.google.com/?q=Abuja,Nigeria',
  },
]

// ── Page ───────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    // Simulate send — wire up to EmailJS / Formspree / etc.
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1400)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-140px] right-[-140px] w-[520px] h-[520px] rounded-full bg-gray-50 pointer-events-none"
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
          Say Hello
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...bouncySlow, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Contact.
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bouncySlow, delay: 0.16 }}
          className="text-gray-500 max-w-lg text-sm"
        >
          {"Got a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you."}
        </motion.p>

        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-2 gap-12 mt-14 items-start">

          {/* Left: contact cards */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-widest text-gray-400 mb-1"
            >
              Reach me directly
            </motion.p>
            {contacts.map((c, i) => (
              <ContactCard key={i} {...c} i={i} />
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...bouncyFast, delay: 0.6 }}
              className="mt-2 flex items-center gap-2 border border-gray-100 rounded-full px-5 py-3 w-fit"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 inline-block"
              />
              <span className="text-xs text-gray-500 font-medium">Available for new projects</span>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...bouncySlow, delay: 0.24 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={bouncySlow}
                className="border border-gray-100 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <motion.span
                  animate={{ rotate: [0, -15, 15, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl"
                >
                  🎉
                </motion.span>
                <h2 className="text-xl font-bold text-black">{"Message sent!"}</h2>
                <p className="text-sm text-gray-500">{"Thanks for reaching out. I'll get back to you soon."}</p>
                <motion.button
                  whileHover={{ scale: 1.05, transition: spring }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-2 text-sm border border-gray-200 text-gray-500 px-5 py-2.5 rounded-full hover:border-black hover:text-black transition-colors"
                >
                  Send another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Dally" />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                </div>
                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Project enquiry" />
                <Field label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." textarea />

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.03, transition: spring }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60 relative overflow-hidden"
                >
                  {sending ? (
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    'Send Message →'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Bottom CTA ── */}
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
              Prefer it quick?
            </motion.p>
            <h2 className="text-2xl font-bold text-black mb-3">Send a WhatsApp instead.</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Sometimes the fastest way to get things moving is a quick message.
            </p>
            <motion.a
              href="https://wa.me/2348062165657"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, transition: spring }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-black text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              💬 Chat on WhatsApp
            </motion.a>
          </motion.div>
        </Reveal>

      </div>
    </div>
  )
}