import { useEffect, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { rings, skillsUniverse } from '../../data/skillsUniverse'
import Planet from './Planet'
import SkillModal from './SkillModal'
import ShootingStars from './ShootingStars'

const SIZE = 820 // px, square canvas the orbits live inside — scales down via CSS on smaller screens

export default function CosmicSkillsUniverse() {
  const planetRefs = useRef({})
  const angleRef = useRef({})
  const hoveredIdRef = useRef(null)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const containerRef = useRef(null)

  const planetsByRing = useMemo(() => {
    const grouped = {}
    rings.forEach((r) => (grouped[r.id] = []))
    skillsUniverse.forEach((s) => grouped[s.ring]?.push(s))
    return grouped
  }, [])

  // seed initial angles, evenly spaced per ring
  useEffect(() => {
    rings.forEach((ring) => {
      const planets = planetsByRing[ring.id]
      planets.forEach((skill, i) => {
        angleRef.current[skill.id] = (i / planets.length) * Math.PI * 2
      })
    })
  }, [planetsByRing])

  // single rAF loop drives every planet's position — no React re-renders per frame
  useEffect(() => {
    let raf
    let lastTime = performance.now()

    const tick = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time

      rings.forEach((ring) => {
        const planets = planetsByRing[ring.id]
        planets.forEach((skill) => {
          const node = planetRefs.current[skill.id]
          if (!node) return

          if (hoveredIdRef.current !== skill.id) {
            angleRef.current[skill.id] += ring.speed * dt
          }
          const angle = angleRef.current[skill.id]
          const bob = Math.sin(time / 700 + angle) * 3
          const x = Math.cos(angle) * ring.radius
          const y = Math.sin(angle) * ring.radius + bob
          node.style.transform = `translate(${x}px, ${y}px)`
        })
      })

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [planetsByRing])

  return (
    <div className="relative flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative mx-auto"
        style={{ width: SIZE, height: SIZE, maxWidth: '100%', aspectRatio: '1 / 1' }}
      >
        <ShootingStars />

        {/* orbital ring paths */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden="true"
        >
          {rings.map((ring) => (
            <circle
              key={ring.id}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={ring.radius}
              fill="none"
              stroke={ring.color}
              strokeOpacity={0.18}
              strokeWidth={1}
            />
          ))}
        </svg>

        {/* the Sun — AI & ML, her core identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 40px 10px rgba(53,231,210,0.5)', '0 0 70px 20px rgba(139,92,246,0.5)', '0 0 40px 10px rgba(53,231,210,0.5)'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-aurora via-nebula to-blue flex items-center justify-center text-center"
          >
            <span className="font-display text-xs md:text-sm font-semibold text-void px-2 leading-tight">
              AI & ML
            </span>
          </motion.div>
        </motion.div>

        {/* planets */}
        {rings.map((ring) =>
          planetsByRing[ring.id].map((skill) => (
            <Planet
              key={skill.id}
              ref={(el) => (planetRefs.current[skill.id] = el)}
              skill={skill}
              ringColor={ring.color}
              onHover={(id) => (hoveredIdRef.current = id)}
              onSelect={setSelectedSkill}
            />
          ))
        )}
      </div>

      {/* ring legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {rings.map((ring) => (
          <div key={ring.id} className="flex items-center gap-2 text-xs font-mono text-dust">
            <span className="w-2 h-2 rounded-full" style={{ background: ring.color }} />
            {ring.label}
          </div>
        ))}
      </div>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  )
}