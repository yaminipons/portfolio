import { forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Planet = forwardRef(function Planet({ skill, ringColor, onHover, onSelect }, ref) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = skill.icon

  const handleEnter = () => {
    setIsHovered(true)
    onHover(skill.id)
  }
  const handleLeave = () => {
    setIsHovered(false)
    onHover(null)
  }

  return (
    <div
      ref={ref}
      className="absolute top-1/2 left-1/2"
      style={{ willChange: 'transform' }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <motion.button
          type="button"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onClick={() => onSelect(skill)}
          whileHover={{ scale: 1.35 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center glass"
          style={{
            boxShadow: isHovered
              ? `0 0 24px 6px ${ringColor}99`
              : `0 0 10px 2px ${ringColor}55`,
            transition: 'box-shadow 0.35s ease',
          }}
          aria-label={`${skill.name} — view details`}
        >
          <Icon size={16} color={ringColor} />
        </motion.button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 glass rounded-xl p-3 z-30 pointer-events-none"
            >
              <p className="font-display text-sm font-semibold text-starlight">{skill.name}</p>
              <p className="font-mono text-[10px] text-aurora mt-0.5">{skill.category} · {skill.level}%</p>
              <p className="text-xs text-dust mt-1.5 leading-relaxed">{skill.description}</p>
              {skill.projects?.length > 0 && (
                <p className="text-[10px] text-nebula mt-1.5">
                  Used in: {skill.projects.join(', ')}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
})

export default Planet