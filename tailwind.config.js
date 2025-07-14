import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      transitionDuration: {
        '600': '600ms',
      },
      animation: {
        'slideIn': 'slideIn 0.6s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%, 49.99%': {
            opacity: '0',
            zIndex: '1',
          },
          '50%, 100%': {
            opacity: '1',
            zIndex: '5',
          },
        },
      },
    },
  },
})
