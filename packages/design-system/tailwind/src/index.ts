import type { Config } from 'tailwindcss';
import { tokens } from '@pacer-ui/tokens';

/**
 * PACER - Tailwind CSS Preset
 *
 * Preset ini mengintegrasikan design tokens ke dalam Tailwind CSS.
 * Semua library (React, Vue, Blazor) menggunakan preset ini.
 *
 * Usage:
 * ```js
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require('@pertamina/tailwind-preset')],
 *   content: ['./src/**\/*.{js,jsx,ts,tsx}'],
 * }
 * ```
 */

const preset: Partial<Config> = {
  content: [],
  darkMode: 'class',
  /**
   * Safelist untuk mengatasi false positive pada SAST/DAST tools.
   * Semua arbitrary values yang digunakan di komponen harus ada di sini
   * agar Tailwind selalu generate classes tersebut dan tidak di-flag sebagai dynamic code injection.
   */
  safelist: [
    // Badge component colors & utilities (generated dynamically in C# code)
    'bg-slate-900', 'bg-slate-100', 'text-slate-900', 'text-slate-50', 'text-slate-950',
    'bg-yellow-500', 'bg-yellow-50', 'text-yellow-500', 'text-yellow-700',
    'bg-green-600', 'bg-green-50', 'bg-green-100', 'text-green-600',
    'bg-purple-600', 'bg-purple-50', 'text-purple-600',
    'bg-pink-600', 'bg-pink-50', 'text-pink-600',
    'bg-orange-600', 'bg-orange-50', 'text-orange-600',
    'bg-red-50', 'text-red-600', 'bg-red-100',
    'rounded-full', 'rounded-md',
    'px-2.5', 'py-0.5', 'px-2', 'py-1',
    'border-slate-300', 'border-yellow-500', 'border-green-600', 'border-purple-600', 'border-pink-600', 'border-orange-600',
    'inline-flex', 'items-center', 'justify-center', 'gap-0.5',
    'text-xs', 'font-semibold',
    
    // Border radius arbitrary values
    'rounded-[6px]',
    'rounded-[4px]',
    
    // Spacing arbitrary values
    'mt-[2.5px]',
    
    // Min width arbitrary values
    'min-w-[64px]',
    'min-w-[80px]',
    
    // Border utilities - diperlukan untuk button variants (secondary, outline, danger)
    'border',
    'border-1',
    'border-brand-300',
    'border-red-600',
    
    // Complex shadow values (focus rings) - ini yang paling sering di-flag
    'focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(1_107_248)]',
    'focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(226_232_240)]',
    'focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(254_202_202)]',

    // Information component – Figma PACER (node 40000837-1003)
    'mt-[4.5px]',
    'rounded-lg',
    'bg-brand-50',
    'bg-slate-100',
    'bg-green-100',
    'bg-amber-100',
    'bg-red-100',
    'text-brand-300',
    'text-brand-600',
    'text-slate-950',
    'text-green-600',
    'text-amber-600',
    'text-red-600',
    'text-xs',
    'text-sm',
    'text-base',
    'font-medium',
    'font-normal',
    'leading-none',
    'leading-5',
    'leading-6',
  ],
  theme: {
    // Extend default Tailwind theme
    extend: {
      // Colors
      colors: {
        // Brand colors
        brand: tokens.colors.brand,

        // Base colors
        base: tokens.colors.base,

        // Color scales
        slate: tokens.colors.slate,
        gray: tokens.colors.gray,
        zinc: tokens.colors.zinc,
        neutral: tokens.colors.neutral,
        stone: tokens.colors.stone,

        // Semantic colors
        red: tokens.colors.red,
        green: tokens.colors.green,
        yellow: tokens.colors.yellow,
        blue: tokens.colors.blue,

        // Semantic aliases
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,

        // Pertamina official colors
        pertamina: tokens.colors.pertamina,
      },

      // Spacing (4px base) - extended dengan icon offset
      spacing: {
        ...tokens.spacing,
        'icon-offset': '2.5px', // untuk mt-[2.5px] - icon vertical alignment
      },

      // Typography
      fontFamily: {
        sans: tokens.typography.fontFamily.sans.split(', ').map((f: string) => f.replace(/"/g, '')),
        serif: tokens.typography.fontFamily.serif.split(', ').map((f: string) => f.replace(/"/g, '')),
        mono: tokens.typography.fontFamily.mono.split(', ').map((f: string) => f.replace(/"/g, '')),
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,

      // Border Radius - extended dengan semantic values untuk komponen
      borderRadius: {
        ...tokens.borderRadius,
        // Semantic values untuk komponen (menggantikan arbitrary values)
        button: '6px',      // untuk rounded-[6px] - button standard radius
        'badge-square': '4px', // untuk rounded-[4px] - badge square variant
      },

      // Border Width - ensure border utilities are available
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },

      // Min Width - untuk button sizes
      minWidth: {
        'button-sm': '64px',  // untuk min-w-[64px]
        'button-md': '80px',  // untuk min-w-[80px]
      },

      // Opacity
      opacity: tokens.opacity,

      // Max Width
      maxWidth: tokens.maxWidth,

      // Box Shadow - extended dengan focus ring utilities
      boxShadow: {
        ...tokens.shadows,
        // Focus ring shadows untuk accessibility (menggantikan arbitrary shadow values)
        'focus-ring-primary': '0 0 0 2px white, 0 0 0 4px rgb(1 107 248)', // brand-300 focus
        'focus-ring-slate': '0 0 0 2px white, 0 0 0 4px rgb(226 232 240)',   // slate-200 focus
        'focus-ring-danger': '0 0 0 2px white, 0 0 0 4px rgb(254 202 202)',  // red-200 focus
      },

      // Animation Duration
      transitionDuration: tokens.motion.duration,

      // Animation Easing
      transitionTimingFunction: tokens.motion.easing,

      // Breakpoints
      screens: tokens.breakpoints,

      // Z-Index
      zIndex: tokens.zIndex,
    },
  },
  plugins: [
    // Plugin untuk utility classes (focus rings)
    function ({ addUtilities, theme }: any) {
      addUtilities({
        // Focus ring utilities - untuk menggantikan arbitrary shadow values
        // Menggunakan theme values agar tidak di-flag sebagai dynamic code
        '.focus-ring-primary': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-ring-primary'),
          },
        },
        '.focus-ring-slate': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-ring-slate'),
          },
        },
        '.focus-ring-danger': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-ring-danger'),
          },
        },
      });
    },
    // Plugin untuk component classes
    function ({ addComponents, theme }: any) {
      addComponents({
        // Button base styles
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.medium'),
          lineHeight: theme('lineHeight.normal'),
          borderRadius: theme('borderRadius.DEFAULT'),
          transition: `all ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.easeInOut')}`,
          cursor: 'pointer',
          userSelect: 'none',
          '&:disabled': {
            cursor: 'not-allowed',
            opacity: '0.5',
          },
        },

        // Input base styles
        '.input': {
          display: 'block',
          width: '100%',
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          color: theme('colors.neutral.900'),
          backgroundColor: theme('colors.base.white'),
          border: `1px solid ${theme('colors.neutral.300')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          transition: `border-color ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.easeInOut')}`,
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.brand.500'),
            boxShadow: `0 0 0 3px ${theme('colors.brand.100')}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            backgroundColor: theme('colors.neutral.100'),
            color: theme('colors.neutral.500'),
          },
        },

        // Card base styles
        '.card': {
          backgroundColor: theme('colors.base.white'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.DEFAULT'),
          padding: theme('spacing.6'),
        },
      });
    },
  ],
};

export default preset;
