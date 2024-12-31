/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif', 'system-ui'],
      },
      colors:{
        'bg1': '#fdfaf7',
        'text1': '#070707',
        'gray1': '#6c757d',
        'hovergray': '#495057'
      },
      borderRadius:{
        'widget': '25px',
      },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-15deg)' },
        '50%': { transform: 'rotate(15deg)' },
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
  },
  },
  plugins: [],
};
