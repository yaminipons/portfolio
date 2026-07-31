export default function GlassCard({ children, className = '', glow = false, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`glass rounded-2xl border border-white/5 ${glow ? 'glow-nebula' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}