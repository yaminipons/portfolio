import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion'
import heroImage from '../../assets/images/hero-illustration.png'

export default function HeroIllustration() {
  const containerRef = useRef(null)

  // scroll-linked parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-24, 24])

  // hover tilt
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 15 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 8) // max ~8deg
    rotateX.set(-py * 8)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ y: parallaxY }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35 }}
      className="relative order-first md:order-last flex justify-center md:justify-end"
    >
      {/* floating wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full max-w-[420px] md:max-w-[480px]"
        style={{ perspective: 1000 }}
      >
        {/* ambient glow behind the image */}
        <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-nebula/30 via-aurora/10 to-transparent blur-2xl pointer-events-none" />

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: 'preserve-3d',
          }}
          className="group relative rounded-[20px] glass overflow-hidden glow-nebula transition-shadow duration-500 hover:shadow-[0_0_70px_-10px_rgba(139,92,246,0.65)]"
        >
          <img
            src={heroImage}
            alt="Yamini KP coding at a desk, surrounded by AI, full-stack, and tools iconography against a galaxy backdrop"
            loading="lazy"
            width={960}
            height={1024}
            className="w-full h-auto rounded-[20px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />

          {/* edge blend into background */}
          <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_40px_20px_rgba(5,5,11,0.35)] pointer-events-none" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}