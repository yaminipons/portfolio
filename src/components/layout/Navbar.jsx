import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '../../constants/links'
import MagneticButton from '../ui/MagneticButton'

const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-semibold tracking-tight text-starlight flex items-center gap-2">
          <span className="star-node" />
          yk<span className="text-aurora">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-dust">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-aurora transition-colors">
                <span className="text-nebula">{String(i + 1).padStart(2, '0')}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton href="#contact" variant="ghost" className="hidden md:inline-flex text-xs">
          say_hello()
        </MagneticButton>
      </nav>
    </motion.header>
  )
}