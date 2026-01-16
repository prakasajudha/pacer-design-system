import presetModule from '@pacer-ui/tailwind-preset';

// Ensure preset is valid - handle both default export and direct export
const preset = presetModule?.default || presetModule;

if (!preset || typeof preset !== 'object') {
  throw new Error('Failed to load Tailwind preset: preset is not a valid object');
}

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
    './**/*.md',
    './**/*.vue',
    // Include design-system packages for component styles
    '../../design-system/vue/src/**/*.{vue,js,ts}',
    '../../design-system/vue/dist/**/*.{js,mjs}',
    '../../design-system/react/src/**/*.{js,jsx,ts,tsx}',
    '../../design-system/react/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};



