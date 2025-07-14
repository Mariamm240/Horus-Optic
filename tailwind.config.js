import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Horus Optic Brand Colors
        'horus-purple': '#B892D5',
        'horus-pink': '#E29AEE',
        'horus-white': '#FFFFFF',
        'horus-gray': '#9C989F',
        primary: {
          50: '#f7f1fb',
          100: '#f0e4f7',
          200: '#e1c9f0',
          300: '#d2aee8',
          400: '#c393e0',
          500: '#B892D5', // Main Horus Purple
          600: '#a67cc4',
          700: '#9466b3',
          800: '#8250a2',
          900: '#703a91',
        },
        secondary: {
          50: '#fdf2fd',
          100: '#fce6fc',
          200: '#f8ccf8',
          300: '#f4b3f4',
          400: '#f099f0',
          500: '#E29AEE', // Main Horus Pink
          600: '#d788e0',
          700: '#cc76d2',
          800: '#c164c4',
          900: '#b652b6',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#9C989F', // Main Horus Gray
          600: '#8a878d',
          700: '#78757b',
          800: '#666469',
          900: '#545257',
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
