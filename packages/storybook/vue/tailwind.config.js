/** @type {import('tailwindcss').Config} */
const presetModule = require('@pacer-ui/tailwind-preset');
const preset = presetModule.default || presetModule;

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
    '../../design-system/vue/src/**/*.{vue,js,ts}',
    '../../design-system/vue/dist/**/*.{js,mjs}',
  ],
  presets: [preset],
};
