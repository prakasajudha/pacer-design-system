<script setup lang="ts">
import { computed, type Component } from 'vue';

export type IconButtonVariant =
  | 'solid'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link-primary'
  | 'link-secondary';
export type IconButtonSize = 'md' | 'sm' | 'xs' | 'xss';

export interface IconButtonProps {
  /**
   * Wajib: label untuk screen reader (karena IconButton tidak punya text label).
   */
  ariaLabel: string;

  /**
   * Icon sebagai komponen (mis. icon dari lucide-vue-next) atau komponen SVG custom.
   * Jika tidak diisi, Anda bisa pakai default slot.
   */
  icon?: Component;

  /**
   * Variant visual IconButton
   */
  variant?: IconButtonVariant;

  /**
   * Ukuran IconButton
   */
  size?: IconButtonSize;

  /**
   * Color button (Primary (default) / Danger)
   */
  color?: 'primary' | 'danger';

  /**
   * Selected/toggled state (untuk toggle)
   */
  selected?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<IconButtonProps>(), {
  icon: undefined,
  variant: 'solid',
  size: 'md',
  color: 'primary',
  selected: false,
  loading: false,
});

const sizeClasses = computed(() => {
  if (props.size === 'xss') return 'h-5 w-5 p-0.5 rounded-[6px]';
  if (props.size === 'xs') return 'h-7 w-7 p-1.5 rounded-[6px]';
  if (props.size === 'sm') return 'h-8 w-8 p-2 rounded-[6px]';
  return 'h-10 w-10 p-3 rounded-[6px]';
});

const variantClasses = computed(() => {
  const isLinkVariant = props.variant === 'link-primary' || props.variant === 'link-secondary';

  // Helper untuk double ring focus effect
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

  if (props.color === 'danger') {
    if (props.variant === 'secondary') {
      return [
        'bg-white text-red-600 border border-red-600',
        'hover:bg-red-50 hover:text-red-700',
        'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(254_202_202)]',
        'focus-visible:text-red-700',
        props.selected && 'bg-red-50 text-red-700',
      ]
        .filter(Boolean)
        .join(' ');
    }

    if (props.variant === 'outline') {
      return [
        'bg-white text-red-600 border border-red-600',
        'hover:bg-red-50 hover:text-red-700',
        'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_rgb(254_202_202)]',
        'focus-visible:text-red-700',
        props.selected && 'bg-red-50 text-red-700',
      ]
        .filter(Boolean)
        .join(' ');
    }

    if (props.variant === 'ghost' || isLinkVariant) {
      return [
        'bg-transparent text-red-600',
        'hover:bg-red-50 hover:text-red-700',
        getFocusRing('red-200'),
        'focus-visible:text-red-700',
        props.selected && 'bg-red-50 text-red-700',
      ]
        .filter(Boolean)
        .join(' ');
    }

    return [
      'bg-red-600 text-white',
      'hover:bg-red-700',
      getFocusRing('red-200'),
      props.selected && 'bg-red-700',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.variant === 'solid') {
    return [
      'bg-brand-300 text-white',
      'hover:bg-brand-400',
      getFocusRing('brand-300'),
      props.selected && 'bg-brand-400',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.variant === 'secondary') {
    return [
      'bg-white text-brand-300 border border-brand-300',
      'hover:bg-brand-50 hover:text-brand-400',
      getFocusRing('brand-300'),
      'focus-visible:text-brand-400',
      props.selected && 'bg-brand-50 text-brand-500',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.variant === 'outline') {
    return [
      'bg-white text-slate-900 border border-slate-300',
      'hover:bg-slate-50',
      getFocusRing('slate-200'),
      props.selected && 'bg-slate-100',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.variant === 'ghost') {
    return [
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      getFocusRing('slate-200'),
      props.selected && 'bg-slate-100',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.variant === 'link-primary') {
    return [
      'bg-transparent text-brand-300',
      'hover:bg-brand-50',
      'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      props.selected && 'bg-brand-50',
    ]
      .filter(Boolean)
      .join(' ');
  }

  // link-secondary
  return [
    'bg-transparent text-slate-900',
    'hover:bg-slate-100',
    'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    props.selected && 'bg-slate-100',
  ]
    .filter(Boolean)
    .join(' ');
});

const buttonClasses = computed(() => {
  return [
    'inline-flex items-center justify-center transition-colors select-none',
    'disabled:pointer-events-none disabled:opacity-50',
    sizeClasses.value,
    variantClasses.value,
  ]
    .filter(Boolean)
    .join(' ');
});
</script>

<template>
  <button
    type="button"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    :aria-pressed="selected || undefined"
  >
    <svg
      v-if="loading"
      aria-hidden="true"
      class="animate-spin h-4 w-4"
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

    <template v-else>
      <component v-if="icon" :is="icon" class="h-4 w-4" aria-hidden="true" />
      <slot v-else />
    </template>
  </button>
</template>
