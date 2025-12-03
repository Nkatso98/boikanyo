import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandGold: '#D4AF37',
        brandBlue: '#1E40AF'
      }
    }
  },
  plugins: []
} as Config