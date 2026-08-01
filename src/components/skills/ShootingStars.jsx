import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Spawns an occasional shooting star at a random position/angle.
// Pure CSS-transform animation — no per-frame JS, so it's essentially free.
export default function ShootingStars({ count = 3 }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const spawn = () => {
      const id = Date.now() + Math.random()
      const star = {
        id,
        top: Math.random() * 60,
        left: Math.random() * 70,
        rotate: 30 + Math.random() * 20,
        duration: 1 + Math.random() * 0.6,
      }
      setStars((prev) => [...prev, star])
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id))
      }, star.duration * 1000 + 100)
    }

    const interval = setInterval(spawn, 2600 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {stars.slice(-count).map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], x: 160, y: 90 }}
            exit={{ opacity: 0 }}
            transition={{ duration: s.duration, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: '2px',
              height: '2px',
              background: '#F4F5FA',
              borderRadius: '999px',
              boxShadow: '0 0 6px 2px rgba(244,245,250,0.8), -10px -2px 12px 1px rgba(53,231,210,0.3)',
              transform: `rotate(${s.rotate}deg)`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}