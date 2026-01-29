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
export type IconButtonShape = 'square' | 'rounded';
export type IconButtonColor = 'primary' | 'danger' | 'success' | 'warning' | 'neutral';

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
   * Ukuran IconButton (xss / xs / sm / md)
   */
  size?: IconButtonSize;

  /**
   * Bentuk: square (tanpa radius) atau rounded (radius 6px)
   */
  shape?: IconButtonShape;

  /**
   * Color button (Primary / Danger / Success / Warning / Neutral) — mengikuti state warna Button
   */
  color?: IconButtonColor;

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
  shape: 'square',
  color: 'primary',
  selected: false,
  loading: false,
});

const getFocusRing = (ringColor: string) => {
  if (ringColor === 'brand-300') return 'focus-ring-primary';
  if (ringColor === 'slate-200') return 'focus-ring-slate';
  if (ringColor === 'red-200') return 'focus-ring-danger';
  if (ringColor === 'green-200') return 'focus-ring-success';
  if (ringColor === 'amber-200') return 'focus-ring-warning';
  return 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
};

const sizeClasses = computed(() => {
  // Square = var(--radius) → rounded-button (6px); rounded = rounded-full (Figma PACER).
  const radius = props.shape === 'rounded' ? 'rounded-full' : 'rounded-button';
  if (props.size === 'xss') return `h-5 w-5 p-0.5 ${radius}`;
  if (props.size === 'xs') return `h-7 w-7 p-1.5 ${radius}`;
  if (props.size === 'sm') return `h-8 w-8 p-2 ${radius}`;
  return `h-10 w-10 p-3 ${radius}`;
});

const variantClasses = computed(() => {
  const isLinkVariant = props.variant === 'link-primary' || props.variant === 'link-secondary';

  if (props.color === 'danger') {
    if (props.variant === 'secondary') {
      return [
        'bg-red-50 text-red-600',
        'hover:bg-red-100 hover:text-red-700',
        getFocusRing('red-200'),
        'focus-visible:text-red-700',
        props.selected && 'bg-red-200 text-red-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'outline') {
      return [
        'text-red-600 border border-red-600',
        'hover:bg-red-50 hover:text-red-700 hover:border-red-700',
        getFocusRing('red-200'),
        'focus-visible:text-red-700 focus-visible:border-red-700',
        props.selected && 'bg-red-100 text-red-800 border-red-800',
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
        props.selected && 'bg-red-100 text-red-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    return [
      'bg-red-600 text-white',
      'hover:bg-red-700',
      getFocusRing('red-200'),
      props.selected && 'bg-red-800',
    ]
      .filter(Boolean)
      .join(' ');
  }

  if (props.color === 'success') {
    if (props.variant === 'solid') {
      return [
        'bg-green-600 text-white',
        'hover:bg-green-700',
        getFocusRing('green-200'),
        props.selected && 'bg-green-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'secondary') {
      return [
        'bg-green-50 text-green-600',
        'hover:bg-green-100 hover:text-green-700',
        getFocusRing('green-200'),
        'focus-visible:text-green-700',
        props.selected && 'bg-green-200 text-green-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'outline') {
      return [
        'text-green-600 border border-green-600',
        'hover:bg-green-50 hover:text-green-700 hover:border-green-700',
        getFocusRing('green-200'),
        'focus-visible:text-green-700 focus-visible:border-green-700',
        props.selected && 'bg-green-100 text-green-800 border-green-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'ghost' || isLinkVariant) {
      return [
        'bg-transparent text-green-600',
        'hover:bg-green-50 hover:text-green-700',
        getFocusRing('green-200'),
        'focus-visible:text-green-700',
        props.selected && 'bg-green-100 text-green-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
  }

  if (props.color === 'warning') {
    if (props.variant === 'solid') {
      return [
        'bg-amber-600 text-white',
        'hover:bg-amber-700',
        getFocusRing('amber-200'),
        props.selected && 'bg-amber-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'secondary') {
      return [
        'bg-amber-50 text-amber-600',
        'hover:bg-amber-100 hover:text-amber-700',
        getFocusRing('amber-200'),
        'focus-visible:text-amber-700',
        props.selected && 'bg-amber-200 text-amber-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'outline') {
      return [
        'text-amber-600 border border-amber-600',
        'hover:bg-amber-50 hover:text-amber-700 hover:border-amber-700',
        getFocusRing('amber-200'),
        'focus-visible:text-amber-700 focus-visible:border-amber-700',
        props.selected && 'bg-amber-100 text-amber-800 border-amber-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'ghost' || isLinkVariant) {
      return [
        'bg-transparent text-amber-600',
        'hover:bg-amber-50 hover:text-amber-700',
        getFocusRing('amber-200'),
        'focus-visible:text-amber-700',
        props.selected && 'bg-amber-100 text-amber-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
  }

  if (props.color === 'neutral') {
    if (props.variant === 'solid') {
      return [
        'bg-slate-600 text-white',
        'hover:bg-slate-700',
        getFocusRing('slate-200'),
        props.selected && 'bg-slate-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'secondary') {
      return [
        'bg-slate-100 text-slate-600',
        'hover:bg-slate-200 hover:text-slate-700',
        getFocusRing('slate-200'),
        'focus-visible:text-slate-700',
        props.selected && 'bg-slate-300 text-slate-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'outline') {
      return [
        'text-slate-600 border border-slate-600',
        'hover:bg-slate-50 hover:text-slate-700 hover:border-slate-700',
        getFocusRing('slate-200'),
        'focus-visible:text-slate-700 focus-visible:border-slate-700',
        props.selected && 'bg-slate-100 text-slate-800 border-slate-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (props.variant === 'ghost' || isLinkVariant) {
      return [
        'bg-transparent text-slate-600',
        'hover:bg-slate-50 hover:text-slate-700',
        getFocusRing('slate-200'),
        'focus-visible:text-slate-700',
        props.selected && 'bg-slate-100 text-slate-800',
      ]
        .filter(Boolean)
        .join(' ');
    }
  }

  // Primary
  if (props.variant === 'solid') {
    return [
      'bg-brand-300 text-white',
      'hover:bg-brand-400',
      getFocusRing('brand-300'),
      props.selected && 'bg-brand-500',
    ]
      .filter(Boolean)
      .join(' ');
  }
  if (props.variant === 'secondary') {
    return [
      'bg-brand-50 text-brand-600',
      'hover:bg-brand-100 hover:text-brand-700',
      getFocusRing('brand-300'),
      'focus-visible:text-brand-700',
      props.selected && 'bg-brand-200 text-brand-800',
    ]
      .filter(Boolean)
      .join(' ');
  }
  if (props.variant === 'outline') {
    return [
      'text-slate-900 border border-slate-300',
      'hover:bg-slate-50 hover:border-slate-400',
      getFocusRing('slate-200'),
      'focus-visible:border-slate-400',
      props.selected && 'bg-brand-50 text-brand-700 border-brand-500',
    ]
      .filter(Boolean)
      .join(' ');
  }
  if (props.variant === 'ghost') {
    return [
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      getFocusRing('slate-200'),
      props.selected && 'bg-brand-50 text-brand-700',
    ]
      .filter(Boolean)
      .join(' ');
  }
  if (props.variant === 'link-primary') {
    return [
      'bg-transparent text-brand-300',
      'hover:bg-brand-50',
      getFocusRing('brand-300'),
      props.selected && 'bg-brand-50',
    ]
      .filter(Boolean)
      .join(' ');
  }
  if (props.variant === 'link-secondary') {
    return [
      'bg-transparent text-slate-900',
      'hover:bg-slate-100',
      getFocusRing('slate-200'),
      props.selected && 'bg-slate-100',
    ]
      .filter(Boolean)
      .join(' ');
  }

  return [
    'bg-brand-300 text-white',
    'hover:bg-brand-400',
    getFocusRing('brand-300'),
    props.selected && 'bg-brand-500',
  ]
    .filter(Boolean)
    .join(' ');
});

const buttonClasses = computed(() => {
  return [
    'inline-flex items-center justify-center transition-colors select-none',
    'disabled:pointer-events-none disabled:opacity-50 active:opacity-90 disabled:active:opacity-50',
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
      <component
        v-if="icon"
        :is="icon"
        class="h-4 w-4 shrink-0"
        aria-hidden="true"
      />
      <slot v-else />
    </template>
  </button>
</template>
