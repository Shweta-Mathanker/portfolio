import { color, transform } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        lift: 'lift 1s forwards', // Add custom animation
      },
      keyframes: {
        lift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vw)' }, // Adjust the lift distance as needed
        },
      },
    },
  },
  plugins: [],
}