/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Open Sans"',],
      },
      width: {
        '18': '32rem',
        '76': '19.5rem',
        '70': '4.375rem',
        '80': '5rem',
        '500': '32.188rem',
        '85' : '5.313rem'
      },
      height: {
        '126': '26.938rem',
        '105': '6.617rem',
        '800': '52.688rem',
        '30' : '1.883rem'
      },
      boxShadow: {
        '3xl': '0 -8px 35px -8px rgba(0, 0, 0, 0.8)',
      },
      left: {
        '4x4': '80%',
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
