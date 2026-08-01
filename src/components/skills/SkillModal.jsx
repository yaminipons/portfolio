import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function SkillModal({ skill, onClose }) {
  const Icon = skill?.icon

  return (
    <AnimatePresence>
      {skill && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void/70 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md glass rounded-2xl p-7 z-50 glow-nebula"
            role="dialog"
            aria-modal="true"
            aria-label={`${skill.name} details`}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-dust hover:text-aurora transition-colors"
            >
              <FiX size={20} />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center glow-aurora">
                <Icon size={26} className="text-aurora" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{skill.name}</h3>
                <p className="font-mono text-xs text-aurora">{skill.category}</p>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <p className="font-mono text-xs text-dust">proficiency</p>
                <p className="font-mono text-xs text-dust">{skill.level}%</p>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-nebula to-aurora"
                />
              </div>
            </div>

            <p className="text-sm text-starlight/85 leading-relaxed mb-5">{skill.description}</p>

            {skill.projects?.length > 0 && (
              <div className="mb-4">
                <p className="font-mono text-xs text-nebula mb-2">projects[]</p>
                <div className="flex flex-wrap gap-2">
                  {skill.projects.map((p) => (
                    <span key={p} className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-dust">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skill.certifications?.length > 0 && (
              <div>
                <p className="font-mono text-xs text-nebula mb-2">certifications[]</p>
                <ul className="space-y-1">
                  {skill.certifications.map((c) => (
                    <li key={c} className="text-xs text-dust">— {c}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}