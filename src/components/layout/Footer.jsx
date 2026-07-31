import { profile } from '../../data/profile'
import { links } from '../../constants/links'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dust font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-dust hover:text-aurora transition-colors">
            <FiGithub />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-dust hover:text-aurora transition-colors">
            <FiLinkedin />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email" className="text-dust hover:text-aurora transition-colors">
            <FiMail />
          </a>
        </div>

        <p className="text-xs text-dust font-mono">
          status: <span className="text-aurora">available for opportunities</span>
        </p>
      </div>
    </footer>
  )
}