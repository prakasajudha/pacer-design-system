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

      // Spacing (4px base)
      spacing: tokens.spacing,

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

      // Border Radius
      borderRadius: tokens.borderRadius,

      // Opacity
      opacity: tokens.opacity,

      // Max Width
      maxWidth: tokens.maxWidth,

      // Box Shadow
      boxShadow: tokens.shadows,

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
