import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#020617',
        surface: '#0f172a',
        outline: 'rgba(148, 163, 184, 0.18)',
        accent: '#38bdf8'
      },
      boxShadow: {
        panel: '0 24px 80px rgba(2, 6, 23, 0.45)'
      }
    }
  },
  plugins: []
} satisfies Config;
