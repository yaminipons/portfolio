import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

// Deterministic pseudo-random float derived from the skill id, so every
// planet's float cycle is offset differently without needing Math.random()
// (which would re-roll on every re-render).
function seededFloat(id, min, max) {
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  const t = (hash % 1000) / 1000
  return min + t * (max - min)
}

export default function PlanetCard({ skill, color }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 14 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 14 })

  const floatDuration = seededFloat(skill.id, 3.4, 5.6)
  const floatDelay = seededFloat(skill.id, 0, 1.6)
  const floatAmplitude = seededFloat(skill.id, 6, 11)

  const Icon = skill.icon

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 10)
    rotateX.set(-py * 10)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      animate={{ y: [0, -floatAmplitude, 0] }}
      transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex flex-col items-center"
      style={{ perspective: 900 }}
    >
      <motion.button
        ref={cardRef}
        type="button"
        aria-label={`${skill.name} — ${skill.category}. Press for details.`}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          setOpen(false)
          resetTilt()
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setOpen(false)
          resetTilt()
        }}
        onClick={() => setOpen((o) => !o)}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.1, y: -6 }}
        whileFocus={{ scale: 1.1, y: -6 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full glass flex flex-col items-center justify-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora focus-visible:outline-offset-4"
      >
        {/* saturn-like ring, hidden until hover/focus */}
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3 }}
          className="absolute w-[130%] h-[46%] rounded-full border pointer-events-none"
          style={{
            borderColor: color,
            transform: 'rotate(-18deg)',
            boxShadow: `0 0 12px 1px ${color}66`,
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 rounded-full transition-shadow duration-300"
          style={{
            boxShadow: open
              ? `0 0 30px 8px ${color}80, 0 0 55px 18px rgba(139,92,246,0.35)`
              : `0 0 14px 3px ${color}40`,
          }}
        />

        <Icon size={22} color={color} className="relative z-10" />
        <span className="relative z-10 font-mono text-[10px] text-starlight/90 px-1 text-center leading-none">
          {skill.name}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="tooltip"
            className="absolute top-full mt-3 w-60 glass rounded-xl p-4 z-30 pointer-events-none"
          >
            <p className="font-display text-sm font-semibold text-starlight">{skill.name}</p>
            <p className="font-mono text-[10px] mt-0.5" style={{ color }}>
              {skill.category}
            </p>
            <p className="text-xs text-dust mt-2 leading-relaxed">{skill.description}</p>
            {skill.projects?.length > 0 && (
              <div className="mt-2">
                <p className="text-[10px] font-mono text-nebula mb-1">Used in:</p>
                <ul className="space-y-0.5">
                  {skill.projects.map((p) => (
                    <li key={p} className="text-[11px] text-starlight/80">• {p}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}