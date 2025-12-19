/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
    '../../design-system/vue/src/**/*.{vue,js,ts}',
    '../../design-system/vue/dist/**/*.{js,mjs}',
  ],
  presets: [require('@pacer-ui/tailwind-preset').default],
};
