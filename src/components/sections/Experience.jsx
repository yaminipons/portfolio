import { motion } from 'framer-motion'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        04 · Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-2xl"
      >
        Where I've applied what I've learned.
      </motion.h2>

      <div className="relative pl-6 border-l border-white/10 space-y-10 max-w-2xl">
        {experience.map((e, i) => (
          <motion.div
            key={e.org}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[27px] top-1 star-node" />
            <p className="font-mono text-xs text-nebula">{e.period}</p>
            <p className="font-display font-medium mt-1">{e.role}</p>
            <p className="text-aurora text-sm">{e.org}</p>
            <ul className="mt-2 space-y-1.5">
              {e.points.map((pt) => (
                <li key={pt} className="text-dust text-sm flex gap-2">
                  <span className="text-nebula">▹</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}