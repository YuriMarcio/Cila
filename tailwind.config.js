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
        '14': '0.875rem',
        '18': '32rem',
        '76': '19.5rem',
        '70': '4.375rem',
        '80': '5rem',
        '500': '32.188rem',
        '85' : '5.313rem',
        '242': '15.125rem',
        '630': '39.375rem',
        '197': '12.313rem',
        '468': '29.25rem',
        '26' : '1.625rem',
        '521': '32.563rem',
        '413': '25.813rem',
        '738': '46.125rem',
      },
      minWidth: {
        '197/1': '12.313rem',
        '242': '15.125rem',
        '521': '32.563rem',
        '360': '23.125rem',
        '328': '20.5rem',
        '330': '20.625rem',
        '70': '4.375rem',
        '120': '7.5rem',
      },
      maxWidth: {
        '197/1': '12.313rem',
        '120/1': '7.5rem',
        '630/1': '39.375rem',
        '190': '11.875rem',
        '305': '19.063rem',
        '468': '29.25rem',
        '102': '6.375rem',
        '521': '32.563rem',
        '193': '12.063rem',
        '460': '28.75rem',
        '360': '23.125rem',
      },
      maxHeight: {
        '102': '6.375rem',
        '496': '31rem',
      },
      minHeight: {
        '102': '6.375rem',
        '496': '31rem',
      },
      height: {
        '126': '26.938rem',
        '105': '6.617rem',
        '800': '52.688rem',
        '30' : '1.883rem',
        '366': '22.875rem',
        '360': '22.5rem',
        '26' : '1.625rem',
        '70': '4.375rem',
      },
      boxShadow: {
        '3xl': '0 -8px 35px -8px rgba(0, 0, 0, 0.8)',
      },
      left: {
        '4x4': '80%',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        widdest: '1.2em'
      },
      fontSize: {
       '40xl' : '2.5rem'
      }
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'nd': '472px',
      // => @media (min-width: 1024px) { ... }

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
