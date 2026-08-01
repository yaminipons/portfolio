import { motion } from 'framer-motion'
import { categories, skillsUniverse } from '../../data/skillsUniverse'
import PlanetCard from './PlanetCard'
import ShootingStars from './ShootingStars'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const planetVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function TechArsenal() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative"
    >
      {/* subtle section-local particles, layered on top of the existing global background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <ShootingStars count={1} />
        <div className="absolute top-10 left-10 w-72 h-72 bg-nebula/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-aurora/10 rounded-full blur-[110px]" />
      </div>

      <div className="space-y-24">
        {categories.map((cat) => {
          const items = skillsUniverse.filter((s) => s.ring === cat.id)
          if (items.length === 0) return null

          return (
            <motion.section key={cat.id} variants={categoryVariants} aria-labelledby={`cat-${cat.id}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <h3
                  id={`cat-${cat.id}`}
                  className="font-display text-xl md:text-2xl font-semibold"
                  style={{ textShadow: `0 0 20px ${cat.color}55` }}
                >
                  {cat.label}
                </h3>
              </div>
              <div
                className="h-px w-full mb-10 opacity-40"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />

              <motion.div
                variants={gridVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16 justify-items-center px-2"
              >
                {items.map((skill) => (
                  <motion.div key={skill.id} variants={planetVariants}>
                    <PlanetCard skill={skill} color={cat.color} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )
        })}
      </div>
    </motion.div>
  )
}