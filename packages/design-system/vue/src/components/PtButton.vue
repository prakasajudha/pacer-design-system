<script setup lang="ts">
import { computed, type Component } from 'vue';

export interface ButtonProps {
  /**
   * Variant visual dari button
   */
  variant?: 'solid' | 'secondary' | 'outline' | 'ghost' | 'link-primary' | 'link-secondary';

  /**
   * Ukuran button (non-link)
   */
  size?: 'sm' | 'md';

  /**
   * Bentuk: square (tanpa radius) atau rounded (radius 6px). Default square sesuai Figma PACER.
   */
  shape?: 'square' | 'rounded';

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Color button (Primary / Danger / Success / Warning / Neutral)
   */
  color?: 'primary' | 'danger' | 'success' | 'warning' | 'neutral';

  /**
   * Selected/toggled state
   */
  selected?: boolean;

  /**
   * Icon sebelum label tombol
   */
  leftIcon?: Component;

  /**
   * Icon setelah label tombol
   */
  rightIcon?: Component;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Native HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'solid',
  size: 'md',
  shape: 'square',
  loading: false,
  color: 'primary',
  selected: false,
  leftIcon: undefined,
  rightIcon: undefined,
  type: 'button',
});

const buttonClasses = computed(() => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium text-sm leading-6 transition-colors select-none disabled:pointer-events-none disabled:opacity-50 active:opacity-90 disabled:active:opacity-50';

  const isLinkVariant = props.variant === 'link-primary' || props.variant === 'link-secondary';

  // Link variants are special in Figma (24px height, no padding/bg).
  if (isLinkVariant) {
    const linkColor =
      props.color === 'danger'
        ? 'text-red-600'
        : props.color === 'success'
          ? 'text-green-600'
          : props.color === 'warning'
            ? 'text-amber-600'
            : props.color === 'neutral'
              ? 'text-slate-600'
              : props.variant === 'link-primary'
                ? 'text-brand-300'
                : 'text-slate-900';
    const focusRing =
      props.color === 'danger'
        ? 'focus-ring-danger'
        : props.color === 'success'
          ? 'focus-ring-success'
          : props.color === 'warning'
            ? 'focus-ring-warning'
            : props.variant === 'link-primary'
              ? 'focus-ring-primary'
              : 'focus-ring-slate';
    const hoverLink =
      props.color === 'danger'
        ? 'hover:text-red-700 hover:underline'
        : props.color === 'success'
          ? 'hover:text-green-700 hover:underline'
          : props.color === 'warning'
            ? 'hover:text-amber-700 hover:underline'
            : props.color === 'neutral'
              ? 'hover:text-slate-700 hover:underline'
              : 'hover:underline';

    return [
      baseStyles,
      'h-6 px-0 py-0 rounded-none underline-offset-4',
      hoverLink,
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      focusRing,
      linkColor,
      props.selected && 'underline',
    ]
      .filter(Boolean)
      .join(' ');
  }

  // Shape: square = rounded-lg + border 1px #000; rounded = rounded-full (Figma PACER).
  const radiusClass = props.shape === 'rounded' ? 'rounded-full' : 'rounded-lg';
  const squareBorderClass =
    props.shape === 'square' &&
    (props.variant === 'solid' || props.variant === 'secondary' || props.variant === 'ghost')
      ? 'border border-black'
      : '';
  const sizeStyles = {
    sm: `min-w-button-sm h-9 py-1.5 px-2 gap-0 ${radiusClass} text-sm`,
    md: `min-w-button-md h-10 py-2 px-3 gap-1 ${radiusClass} text-sm`,
  } as const;

  // Helper untuk double ring focus effect (outer + inner ring)
  // Menggunakan utility classes dari theme untuk menghindari arbitrary shadow values
  const getFocusRing = (ringColor: string) => {
    if (ringColor === 'brand-300') return 'focus-ring-primary';
    if (ringColor === 'slate-200') return 'focus-ring-slate';
    if (ringColor === 'red-200') return 'focus-ring-danger';
    if (ringColor === 'green-200') return 'focus-ring-success';
    if (ringColor === 'amber-200') return 'focus-ring-warning';
    return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
  };

  const getVariantStyles = () => {
    if (props.color === 'danger') {
      if (props.variant === 'secondary') {
        return [
          'bg-red-50 text-red-600',
          'hover:bg-red-100 hover:text-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700',
          props.selected && 'bg-red-200 text-red-800',
        ];
      }

      if (props.variant === 'outline') {
        return [
          'text-red-600 border border-red-600',
          'hover:bg-red-50 hover:text-red-700 hover:border-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700 focus-visible:border-red-700',
          props.selected && 'bg-red-100 text-red-800 border-red-800',
        ];
      }

      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-red-600',
          'hover:bg-red-50 hover:text-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700',
          props.selected && 'bg-red-100 text-red-800',
        ];
      }

      // solid variant when danger is true
      return [
        'bg-red-600 text-white',
        'hover:bg-red-700',
        getFocusRing('red-200'),
        props.selected && 'bg-red-800',
      ];
    }

    if (props.color === 'success') {
      if (props.variant === 'solid') {
        return [
          'bg-green-600 text-white',
          'hover:bg-green-700',
          getFocusRing('green-200'),
          props.selected && 'bg-green-800',
        ];
      }
      if (props.variant === 'secondary') {
        return [
          'bg-green-50 text-green-600',
          'hover:bg-green-100 hover:text-green-700',
          getFocusRing('green-200'),
          'focus-visible:text-green-700',
          props.selected && 'bg-green-200 text-green-800',
        ];
      }
      if (props.variant === 'outline') {
        return [
          'text-green-600 border border-green-600',
          'hover:bg-green-50 hover:text-green-700 hover:border-green-700',
          getFocusRing('green-200'),
          'focus-visible:text-green-700 focus-visible:border-green-700',
          props.selected && 'bg-green-100 text-green-800 border-green-800',
        ];
      }
      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-green-600',
          'hover:bg-green-50 hover:text-green-700',
          getFocusRing('green-200'),
          'focus-visible:text-green-700',
          props.selected && 'bg-green-100 text-green-800',
        ];
      }
    }

    if (props.color === 'warning') {
      if (props.variant === 'solid') {
        return [
          'bg-amber-600 text-white',
          'hover:bg-amber-700',
          getFocusRing('amber-200'),
          props.selected && 'bg-amber-800',
        ];
      }
      if (props.variant === 'secondary') {
        return [
          'bg-amber-50 text-amber-600',
          'hover:bg-amber-100 hover:text-amber-700',
          getFocusRing('amber-200'),
          'focus-visible:text-amber-700',
          props.selected && 'bg-amber-200 text-amber-800',
        ];
      }
      if (props.variant === 'outline') {
        return [
          'btn-outline-no-bg bg-transparent text-amber-600 border border-amber-600',
          'hover:bg-amber-50 hover:text-amber-700 hover:border-amber-700',
          getFocusRing('amber-200'),
          'focus-visible:text-amber-700 focus-visible:border-amber-700',
          props.selected && 'bg-amber-100 text-amber-800 border-amber-800',
        ];
      }
      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-amber-600',
          'hover:bg-amber-50 hover:text-amber-700',
          getFocusRing('amber-200'),
          'focus-visible:text-amber-700',
          props.selected && 'bg-amber-100 text-amber-800',
        ];
      }
    }

    if (props.color === 'neutral') {
      if (props.variant === 'solid') {
        return [
          'bg-slate-600 text-white',
          'hover:bg-slate-700',
          getFocusRing('slate-200'),
          props.selected && 'bg-slate-800',
        ];
      }
      if (props.variant === 'secondary') {
        return [
          'bg-slate-100 text-slate-600',
          'hover:bg-slate-200 hover:text-slate-700',
          getFocusRing('slate-200'),
          'focus-visible:text-slate-700',
          props.selected && 'bg-slate-300 text-slate-800',
        ];
      }
      if (props.variant === 'outline') {
        return [
          'text-slate-600 border border-slate-600',
          'hover:bg-slate-50 hover:text-slate-700 hover:border-slate-700',
          getFocusRing('slate-200'),
          'focus-visible:text-slate-700 focus-visible:border-slate-700',
          props.selected && 'bg-slate-100 text-slate-800 border-slate-800',
        ];
      }
      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-slate-600',
          'hover:bg-slate-50 hover:text-slate-700',
          getFocusRing('slate-200'),
          'focus-visible:text-slate-700',
          props.selected && 'bg-slate-100 text-slate-800',
        ];
      }
    }

    if (props.variant === 'solid') {
      return [
        'bg-brand-300 text-white',
        'hover:bg-brand-400',
        getFocusRing('brand-300'),
        props.selected && 'bg-brand-500',
      ];
    }

    if (props.variant === 'secondary') {
      return [
        'bg-brand-50 text-brand-600',
        'hover:bg-brand-100 hover:text-brand-700',
        getFocusRing('brand-300'),
        'focus-visible:text-brand-700',
        props.selected && 'bg-brand-200 text-brand-800',
      ];
    }

    if (props.variant === 'outline') {
      return [
        'text-slate-900 border border-slate-300',
        'hover:bg-slate-50 hover:border-slate-400',
        getFocusRing('slate-200'),
        'focus-visible:border-slate-400',
        props.selected && 'bg-brand-50 text-brand-700 border-brand-500',
      ];
    }

    if (props.variant === 'ghost') {
      return [
        'bg-transparent text-slate-900',
        'hover:bg-slate-100',
        getFocusRing('slate-200'),
        props.selected && 'bg-brand-50 text-brand-700',
      ];
    }

    // Fallback: solid style
    return [
      'bg-brand-300 text-white',
      'hover:bg-brand-400',
      getFocusRing('brand-300'),
      props.selected && 'bg-brand-500',
    ];
  };

  return [baseStyles, sizeStyles[props.size], squareBorderClass, ...getVariantStyles()].filter(Boolean).join(' ');
});
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-pressed="selected || undefined"
    :type="type"
  >
    <svg
      v-if="loading"
      aria-hidden="true"
      class="animate-spin h-4 w-4 mr-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <component :is="leftIcon" v-if="!loading && leftIcon" class="shrink-0" />
    <span v-if="!loading && $slots.default" class="px-1">
      <slot />
    </span>
    <component :is="rightIcon" v-if="!loading && rightIcon" class="shrink-0" />
  </button>
</template>
