/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../../packages/design-system/react/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('@pacer-ui/tailwind-preset')],
};
