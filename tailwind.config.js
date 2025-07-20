import defaultTheme from 'tailwindcss/defaultTheme';
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

export default {
  content: [
    './resources/**/*.{js,jsx,ts,tsx,blade.php}',
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          100: '#e6e8ff',
          300: '#b2b7ff',
          400: '#7886d7',
          500: '#6574cd',
          600: '#5661b3',
          800: '#2f365f',
          900: '#191e38'
        }
      },
      fontFamily: {
        sans: ['"Cerebri Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [// ...
  require('@tailwindcss/forms'), flowbiteReact]
};