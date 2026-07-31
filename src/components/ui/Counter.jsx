import { useCountUp } from '../../hooks/useCountUp'

export default function Counter({ target, suffix = '', label }) {
  const { ref, value } = useCountUp(target)

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-gradient">
        {value}
        {suffix}
      </p>
      <p className="text-dust text-xs font-mono mt-1 uppercase tracking-widest">{label}</p>
    </div>
  )
}