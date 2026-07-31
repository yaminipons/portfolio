import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { otherProjects } from '../../data/projects'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import MagneticButton from '../ui/MagneticButton'

export default function OtherProjects() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Other Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold mb-10 max-w-2xl"
      >
        More things I've built.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <GlassCard className="p-6 h-full hover:border-nebula/40 transition-colors">
              <p className="font-mono text-xs text-aurora mb-2">{p.tag}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{p.name}</h3>
              <p className="text-dust text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <MagneticButton href={p.github} variant="ghost" className="text-xs">
                <FiGithub /> View on GitHub
              </MagneticButton>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}