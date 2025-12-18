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
        brand: {
          primary: tokens.colors.brand.primary,
          secondary: tokens.colors.brand.secondary,
        },
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,
        neutral: tokens.colors.neutral,
      },

      // Spacing (4px base)
      spacing: tokens.spacing,

      // Typography
      fontFamily: {
        sans: tokens.typography.fontFamily.sans.split(', '),
        mono: tokens.typography.fontFamily.mono.split(', '),
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,

      // Border Radius
      borderRadius: tokens.borderRadius,

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
          backgroundColor: theme('colors.neutral.0'),
          border: `1px solid ${theme('colors.neutral.300')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          transition: `border-color ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.easeInOut')}`,
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.brand.primary.500'),
            boxShadow: `0 0 0 3px ${theme('colors.brand.primary.100')}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            backgroundColor: theme('colors.neutral.100'),
            color: theme('colors.neutral.500'),
          },
        },

        // Card base styles
        '.card': {
          backgroundColor: theme('colors.neutral.0'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.DEFAULT'),
          padding: theme('spacing.6'),
        },
      });
    },
  ],
};

export default preset;
