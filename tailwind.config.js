/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#22d3ee',
          purple: '#a855f7',
          magenta: '#ec4899',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'tilt': 'tilt 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        tilt: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' },
        },
      },
    },
  },
  plugins: [],
}