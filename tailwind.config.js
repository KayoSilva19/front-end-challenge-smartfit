import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**.{js,ts,jsx,tsx}',
    './src/**/**/**.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': {
          900: `#333333`,
        },
        'light-gray': {
          200: `#E1E1E1`,
          300: `#F5F5F5`,
          500: `#808080`,
        },
        yelow: {
          500: `#FFB612`,
        },
        red: {
          500: `#dc0a17`,
        },
        green: {
          500: `#2FC022`,
        },
      },
    },
  },
  plugins: [],
}
