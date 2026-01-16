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
    // Include node_modules for workspace packages
    '../../node_modules/@pacer-ui/vue/dist/**/*.{js,mjs}',
  ],
  // Safelist untuk memastikan class dari komponen Vue ter-generate
  // Ini penting karena komponen Vue sudah di-compile dan class-class ini
  // harus ter-generate oleh Tailwind di web-docs
  safelist: [
    // Button base classes
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'text-sm',
    'leading-6',
    'transition-colors',
    'select-none',
    'disabled:pointer-events-none',
    'disabled:opacity-50',

    // Button size classes
    'min-w-button-sm',
    'min-w-button-md',
    'py-1.5',
    'py-2',
    'px-2',
    'px-3',
    'gap-0',
    'gap-1',
    'rounded-button',

    // Button variant: solid
    'bg-brand-300',
    'text-white',
    'hover:bg-brand-400',

    // Button variant: secondary
    'bg-white',
    'bg-transparent',
    'text-brand-300',
    'border',
    'border-1',
    'border-[1px]',
    'border-brand-300',
    'hover:bg-brand-50',
    'hover:text-brand-400',
    'focus-visible:text-brand-400',

    // Button variant: outline
    'text-slate-900',
    'border',
    'border-1',
    'border-[1px]',
    'border-slate-300',
    'hover:bg-slate-50',

    // Button variant: ghost
    'bg-transparent',
    'hover:bg-slate-100',

    // Button variant: danger
    'bg-red-600',
    'text-red-600',
    'border',
    'border-1',
    'border-[1px]',
    'border-red-600',
    'hover:bg-red-50',
    'hover:text-red-700',
    'hover:bg-red-700',

    // Focus rings
    'focus-ring-primary',
    'focus-ring-slate',
    'focus-ring-danger',
    'focus-visible:outline-none',

    // Selected states
    'bg-brand-50',
    'text-brand-500',
    'bg-slate-100',
    'bg-red-50',
    'bg-brand-400',
  ],
  theme: {
    extend: {
      // Ensure border width utilities are available
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
};



