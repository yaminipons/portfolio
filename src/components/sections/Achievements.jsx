import { motion } from 'framer-motion'
import { achievements } from '../../data/achievements'
import GlassCard from '../ui/GlassCard'

export default function Achievements() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        05 · Achievements
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-2xl"
      >
        Wins and certifications.
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -5 }}
          >
            <GlassCard className={`p-5 h-full ${i === 0 ? 'glow-nebula border-nebula/30' : 'hover:border-aurora/30'} transition-colors`}>
              <p className="font-mono text-xs text-aurora mb-2">{i === 0 ? 'hackathon' : 'certification'}</p>
              <p className="font-display font-medium">{a.title}</p>
              <p className="text-dust text-sm mt-1">{a.org}</p>
              <p className="text-dust text-xs mt-1">{a.detail}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}