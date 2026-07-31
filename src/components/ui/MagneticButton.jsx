import { useMagnetic } from '../../hooks/useMagnetic'

export default function MagneticButton({ href, onClick, children, variant = 'solid', className = '' }) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.25)

  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-transform duration-200 ease-out'
  const styles =
    variant === 'solid'
      ? 'bg-gradient-to-r from-nebula to-aurora text-void glow-nebula'
      : 'border border-white/15 text-starlight hover:border-aurora hover:text-aurora'

  const Tag = href ? 'a' : 'button'
  const extra = !href ? { type: 'button' } : {}

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Tag>
  )
}