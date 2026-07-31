import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'

export default function Skills() {
  return (
    <section id="skills" className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        02 · Stack
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-2xl"
      >
        Tools I reach for to ship AI products end to end.
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <GlassCard className="p-5 h-full hover:border-aurora/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs text-aurora">{group.category}</p>
                <span className="text-xs font-mono text-dust">{group.level}%</span>
              </div>

              {/* animated progress bar */}
              <div className="h-1.5 w-full rounded-full bg-white/5 mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-nebula to-aurora"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}