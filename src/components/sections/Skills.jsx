import { motion } from 'framer-motion'
import CosmicSkillsUniverse from '../skills/CosmicSkillsUniverse'

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
        className="font-display text-3xl md:text-4xl font-semibold mb-4 max-w-2xl"
      >
        Cosmic Skills Universe.
      </motion.h2>
      <p className="text-dust max-w-xl mb-12">
        Hover a planet for a quick read, click for the full picture — proficiency, projects, and certifications.
      </p>

      <CosmicSkillsUniverse />
    </section>
  )
}