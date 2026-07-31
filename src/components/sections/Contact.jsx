import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCheckCircle } from 'react-icons/fi'
import { links } from '../../constants/links'
import GlassCard from '../ui/GlassCard'
import MagneticButton from '../ui/MagneticButton'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    // Wire this up to EmailJS — see README for exact setup steps.
    // import emailjs from '@emailjs/browser'
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        06 · Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-4 max-w-xl"
      >
        Let's build something worth shipping.
      </motion.h2>
      <p className="text-dust max-w-lg mb-12">
        Open to SDE and AI/ML Engineer roles. Reach out directly, or send a message below.
      </p>

      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
        <div className="space-y-4">
          <a href={`mailto:${links.email}`}>
            <GlassCard className="p-4 flex items-center gap-3 hover:border-aurora/50 transition-colors">
              <FiMail className="text-aurora" />
              <span className="text-sm">{links.email}</span>
            </GlassCard>
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <GlassCard className="p-4 flex items-center gap-3 hover:border-aurora/50 transition-colors">
              <FiGithub className="text-aurora" />
              <span className="text-sm">github.com/yaminipons</span>
            </GlassCard>
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <GlassCard className="p-4 flex items-center gap-3 hover:border-aurora/50 transition-colors">
              <FiLinkedin className="text-aurora" />
              <span className="text-sm">linkedin.com/in/yamini-kp</span>
            </GlassCard>
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <GlassCard className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-dust">name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-1 bg-void/60 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-aurora"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-dust">email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 bg-void/60 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-aurora"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono text-dust">message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full mt-1 bg-void/60 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-aurora resize-none"
              />
            </div>

            <MagneticButton className="w-full justify-center" onClick={handleSubmit}>
              {status === 'idle' && 'Send message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && (
                <span className="flex items-center gap-2">
                  <FiCheckCircle /> Message sent
                </span>
              )}
            </MagneticButton>
          </GlassCard>
        </motion.form>
      </div>
    </section>
  )
}