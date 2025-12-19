/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../design-system/react/src/**/*.{js,jsx,ts,tsx}',
    '../../design-system/react/dist/**/*.{js,mjs}',
  ],
  presets: [require('@pacer-ui/tailwind-preset').default],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate')],
};
