/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FBF9F5', // Primary cream-white background
          200: '#F5F0E6', // Warm secondary surface
          300: '#EBE4D5',
          400: '#DDD5C4',
          500: '#C8BEAA',
        },
        dark: {
          950: '#12100E',
          900: '#1A1816', // Primary dark text
          850: '#26221E',
          800: '#332D28',
          700: '#4D443D',
          600: '#665C53',
        },
        light: {
          50: '#FAF8F5',
          100: '#F5F3EE',
          200: '#EBE7DF',
          300: '#DDD7CC',
          700: '#3A3632',
          800: '#23201D',
          900: '#141210',
        },
        gold: {
          100: '#FAF3E3',
          200: '#F5E4B8',
          300: '#E8CA82',
          400: '#D8B670',
          500: '#C6A15B', // Primary luxury gold/bronze accent
          600: '#B88E44',
          700: '#8A692B',
          800: '#694F1C',
        },
        ivory: {
          DEFAULT: '#1A1816',
          light: '#FBF9F5',
          muted: '#6B655D',
          dark: '#9E9589',
        },
      },
      screens: {
        'xs': '420px',
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8CA82 0%, #C6A15B 50%, #9B7832 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(198,161,91,0.14) 0%, rgba(198,161,91,0.03) 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FBF9F5 0%, #F5F0E6 100%)',
        'panel-stripes': 'repeating-linear-gradient(90deg, rgba(184,142,68,0.04) 0px, rgba(184,142,68,0.04) 1px, transparent 1px, transparent 32px)',
        'hero-radial': 'radial-gradient(circle at 50% 30%, rgba(198,161,91,0.12) 0%, rgba(251,249,245,0) 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
};
