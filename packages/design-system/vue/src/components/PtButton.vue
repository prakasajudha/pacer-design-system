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
   * Loading state
   */
  loading?: boolean;

  /**
   * Color button (Primary (default) / Danger)
   */
  color?: 'primary' | 'danger';

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
  loading: false,
  color: 'primary',
  selected: false,
  leftIcon: undefined,
  rightIcon: undefined,
  type: 'button',
});

const buttonClasses = computed(() => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium text-sm leading-6 transition-colors select-none disabled:pointer-events-none disabled:opacity-50';

  const isLinkVariant = props.variant === 'link-primary' || props.variant === 'link-secondary';

  // Link variants are special in Figma (24px height, no padding/bg).
  if (isLinkVariant) {
    const linkColor =
      props.color === 'danger'
        ? 'text-red-600'
        : props.variant === 'link-primary'
          ? 'text-brand-300'
          : 'text-slate-900';
    const focusRing =
      props.color === 'danger'
        ? 'focus-visible:ring-red-200'
        : props.variant === 'link-primary'
          ? 'focus-visible:ring-brand-200'
          : 'focus-visible:ring-slate-200';

    return [
      baseStyles,
      'h-6 px-0 py-0 rounded-none underline-offset-4',
      props.color === 'danger' ? 'hover:text-red-700 hover:underline' : 'hover:underline',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      focusRing,
      linkColor,
      props.selected && 'underline',
    ]
      .filter(Boolean)
      .join(' ');
  }

  const sizeStyles = {
    sm: 'min-w-[64px] py-1.5 px-2 gap-0 rounded-[6px]',
    md: 'min-w-[80px] py-2 px-3 gap-1 rounded-[6px]',
  } as const;

  // Helper untuk double ring focus effect (outer + inner ring)
  const getFocusRing = (ringColor: string) => {
    if (ringColor === 'brand-300') {
      return 'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(1_107_248)]';
    }
    if (ringColor === 'slate-200') {
      return 'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(226_232_240)]';
    }
    if (ringColor === 'red-200') {
      return 'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(254_202_202)]';
    }
    return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
  };

  const getVariantStyles = () => {
    if (props.color === 'danger') {
      if (props.variant === 'secondary') {
        return [
          'bg-white text-red-600 border border-red-600',
          'hover:bg-red-50 hover:text-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700',
          props.selected && 'bg-red-50 text-red-700',
        ];
      }

      if (props.variant === 'outline') {
        return [
          'bg-white text-red-600 border border-red-600',
          'hover:bg-red-50 hover:text-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700',
          props.selected && 'bg-red-50 text-red-700',
        ];
      }

      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-red-600',
          'hover:bg-red-50 hover:text-red-700',
          getFocusRing('red-200'),
          'focus-visible:text-red-700',
          props.selected && 'bg-red-50 text-red-700',
        ];
      }

      // solid variant when danger is true
      return [
        'bg-red-600 text-white',
        'hover:bg-red-700',
        getFocusRing('red-200'),
        props.selected && 'bg-red-700',
      ];
    }

    if (props.variant === 'solid') {
      return [
        'bg-brand-300 text-white',
        'hover:bg-brand-400',
        getFocusRing('brand-300'),
        props.selected && 'bg-brand-400',
      ];
    }

    if (props.variant === 'secondary') {
      return [
        'bg-white text-brand-300 border border-brand-300',
        'hover:bg-brand-50 hover:text-brand-400',
        getFocusRing('brand-300'),
        'focus-visible:text-brand-400',
        props.selected && 'bg-brand-50 text-brand-500',
      ];
    }

    if (props.variant === 'outline') {
      return [
        'bg-white text-slate-900 border border-slate-300',
        'hover:bg-slate-50',
        getFocusRing('slate-200'),
        props.selected && 'bg-slate-100',
      ];
    }

    if (props.variant === 'ghost') {
      return [
        'bg-transparent text-slate-900',
        'hover:bg-slate-100',
        getFocusRing('slate-200'),
        props.selected && 'bg-slate-100',
      ];
    }

    // Fallback: solid style
    return [
      'bg-brand-300 text-white',
      'hover:bg-brand-400',
      getFocusRing('brand-300'),
      props.selected && 'bg-brand-400',
    ];
  };

  return [baseStyles, sizeStyles[props.size], ...getVariantStyles()]
    .filter(Boolean)
    .join(' ');
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
