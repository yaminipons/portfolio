import { useEffect, useRef } from 'react'

// A soft glow that follows the cursor, desktop only — skipped on touch devices.
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const el = glowRef.current
    let raf
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let current = { ...target }

    const handleMove = (e) => {
      target = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      if (el) {
        el.style.transform = `translate3d(${current.x - 200}px, ${current.y - 200}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 opacity-40"
      style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  )
}