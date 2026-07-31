import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { featuredProjects } from '../../data/projects'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import MagneticButton from '../ui/MagneticButton'

function ProjectCaseStudy({ project, index }) {
  const imageFirst = project.layout === 'left'

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <GlassCard
        glow
        className={`grid md:grid-cols-2 gap-0 overflow-hidden hover:border-nebula/40 transition-colors ${
          imageFirst ? '' : 'md:[direction:rtl]'
        }`}
      >
        {/* banner / animated preview */}
        <div
          className={`relative h-64 md:h-full min-h-[320px] bg-gradient-to-br from-nebula/25 via-space to-aurora/15 flex items-center justify-center overflow-hidden ${
            imageFirst ? '' : 'md:[direction:ltr]'
          }`}
        >
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-nebula/30 blur-3xl" />
            <div className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-aurora/30 blur-3xl" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-semibold text-center px-8 relative z-10 text-gradient">
            {project.name}
          </p>
        </div>

        {/* content */}
        <div className={`p-7 md:p-9 ${imageFirst ? '' : 'md:[direction:ltr]'}`}>
          <p className="font-mono text-xs text-aurora mb-2">{project.tag}</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{project.name}</h3>
          <p className="text-dust text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <p className="font-mono text-xs text-nebula mb-2">problem_solved</p>
              <p className="text-sm text-starlight/85 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-nebula mb-2">architecture</p>
              <p className="text-sm text-starlight/85 leading-relaxed">{project.architecture}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-mono text-xs text-nebula mb-2">key_features[]</p>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-starlight/85 flex gap-2">
                  <span className="text-aurora">▹</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <p className="font-mono text-xs text-nebula mb-2">challenges</p>
              <ul className="space-y-1.5">
                {project.challenges.map((c) => (
                  <li key={c} className="text-xs text-dust leading-relaxed">— {c}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-nebula mb-2">solutions</p>
              <ul className="space-y-1.5">
                {project.solutions.map((s) => (
                  <li key={s} className="text-xs text-dust leading-relaxed">— {s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-7">
            <p className="font-mono text-xs text-nebula mb-2">future_improvements</p>
            <div className="flex flex-wrap gap-2">
              {project.future.map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton href={project.demo}>
              <FiExternalLink /> Live Demo
            </MagneticButton>
            <MagneticButton href={project.github} variant="ghost">
              <FiGithub /> GitHub
            </MagneticButton>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        03 · Featured Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-2xl"
      >
        Featured Work
      </motion.h2>

      <div className="space-y-10">
        {featuredProjects.map((p, i) => (
          <ProjectCaseStudy key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}