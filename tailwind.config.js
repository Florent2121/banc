/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F4F4F4', // Off-white
        ink: '#000000', // Deep Black
        raw: {
          green: '#1a4e1a', // Raw Forest Green
          accent: '#2b2b2b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Keep sans for readability in some places if needed, or switch to a bolder one
        mono: ['JetBrains Mono', 'monospace'], // Main technical font
        display: ['Oswald', 'sans-serif'], // For massive Titles
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px', // Force square everywhere
      },
      boxShadow: {
        'none': 'none',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}
