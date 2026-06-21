/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          base: '#03040a',
          deep: '#070a16',
          navy: '#0c1226',
          blue: '#121a36',
          glow: '#1a2348',
        },
        kronos: {
          violet: '#8b5cf6',
          violetLight: '#a78bfa',
          violetDeep: '#6d28d9',
          gold: '#e8b75a',
          goldLight: '#f5d089',
          goldDeep: '#c89538',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18), transparent 60%)',
        'grid-faint':
          'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(139,92,246,0.5)',
        'glow-gold': '0 0 60px -15px rgba(232,183,90,0.45)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.9' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-reverse': 'spin-reverse 60s linear infinite',
        'rise-in': 'rise-in 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'count-up': 'count-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
