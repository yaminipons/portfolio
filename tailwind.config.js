/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05050B',
        space: '#0E1330',
        nebula: '#8B5CF6',
        aurora: '#35E7D2',
        starlight: '#F4F5FA',
        dust: '#8D90AC',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'nebula-glow': 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.18), transparent 70%)',
        'aurora-line': 'linear-gradient(90deg, #8B5CF6, #35E7D2)',
      },
    },
  },
  plugins: [],
}