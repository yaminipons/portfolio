import { useEffect, useRef } from 'react'

// Lightweight canvas starfield + skill-constellation, no 3D dependency.
// Tracks mouse at the window level so it works correctly as a full-page
// fixed background layer sitting behind other content.
export default function ConstellationCanvas({ nodeCount = 45 }) {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes, animId

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const initNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const parallaxX = (mouse.current.x - width / 2) * 0.01
      const parallaxY = (mouse.current.y - height / 2) * 0.01

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      })

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(139,92,246,${0.18 * (1 - dist / 130)})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x + parallaxX, a.y + parallaxY)
            ctx.lineTo(b.x + parallaxX, b.y + parallaxY)
            ctx.stroke()
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.fillStyle = 'rgba(53,231,210,0.85)'
        ctx.arc(n.x + parallaxX, n.y + parallaxY, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
      resize()
      initNodes()
    }

    resize()
    initNodes()
    draw()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [nodeCount])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}