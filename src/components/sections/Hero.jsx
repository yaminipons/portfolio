import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { links } from '../../constants/links'
import MagneticButton from '../ui/MagneticButton'
import Counter from '../ui/Counter'
import HeroIllustration from '../ui/HeroIllustration'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            AI Engineer · Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight md:whitespace-nowrap"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-dust text-lg max-w-xl"
          >
            {profile.tagline} Final-year CSE (AI & ML) student passionate about building intelligent, scalable software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={links.resumeUrl} variant="ghost">Download Resume</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Contact Me</MagneticButton>

            <div className="flex items-center gap-3 ml-1">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-aurora hover:text-aurora transition-colors"
              >
                <FiGithub />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-aurora hover:text-aurora transition-colors"
              >
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6"
          >
            <Counter target={3} label="Flagship Projects" />
            <Counter target={8} suffix=".65" label="CGPA / 10" />
            <Counter target={1} label="Hackathon Win" />
          </motion.div>
        </div>

        <HeroIllustration />
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dust hover:text-aurora z-10"
        aria-label="Scroll to about section"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}