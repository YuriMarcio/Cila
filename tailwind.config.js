/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '18': '32rem',
        '76': '19.5rem',
      },
      boxShadow: {
        '3xl': '0 -8px 35px -8px rgba(0, 0, 0, 0.8)',
      }
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '744px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
