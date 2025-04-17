/** @type {import('tailwindcss').Config} */
export const prefix = 'tw-';
export const important = false;
export const content = ['**/*.{html,js,jsx}', '!**/node_modules/**/*.{html,js,jsx}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    fontFamily: {
      poly: ['"poly"', 'serif'],
    },
  },
};
export const plugins = [
  function ({ addVariant }) {
    addVariant('firefox', ':-moz-any(&)');
  },
];
