import { motion } from 'framer-motion'
import { profile, journey } from '../../data/profile'
import GlassCard from '../ui/GlassCard'

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        01 · About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-2xl"
      >
        From coursework to production AI systems.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-dust leading-relaxed mb-6">{profile.objective}</p>

          <GlassCard className="p-5">
            <p className="font-mono text-xs text-aurora mb-2">education.log</p>
            <p className="font-display font-medium">{profile.education.degree}</p>
            <p className="text-dust text-sm mt-1">{profile.education.school}</p>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <span className="text-dust font-mono">{profile.education.period}</span>
              <span className="px-2 py-0.5 rounded-full bg-nebula/10 text-nebula text-xs font-mono">
                CGPA {profile.education.cgpa}
              </span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-6 border-l border-white/10 space-y-8"
        >
          {journey.map((j) => (
            <div key={j.year + j.label} className="relative">
              <span className="absolute -left-[27px] top-1 star-node" />
              <p className="font-mono text-xs text-nebula">{j.year}</p>
              <p className="text-starlight/90 mt-1">{j.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}