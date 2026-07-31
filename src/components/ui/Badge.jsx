export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-dust ${className}`}
    >
      {children}
    </span>
  )
}