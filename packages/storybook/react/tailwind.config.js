/** @type {import('tailwindcss').Config} */
const presetModule = require('@pacer-ui/tailwind-preset');
const preset = presetModule.default || presetModule;

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../design-system/react/src/**/*.{js,jsx,ts,tsx}',
    '../../design-system/react/dist/**/*.{js,mjs}',
  ],
  presets: [preset],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate')],
};
