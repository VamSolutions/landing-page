/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: false,
  content: ['**/*.{html,js,jsx}', '!**/node_modules/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poly: ['"poly"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('firefox', ':-moz-any(&)');
    },
  ],
};
