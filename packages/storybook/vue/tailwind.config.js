/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
    '../../../packages/design-system/vue/src/**/*.{vue,js,ts}',
  ],
  presets: [require('@pacer-ui/tailwind-preset')],
};
