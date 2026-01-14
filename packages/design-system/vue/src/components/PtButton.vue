<script setup lang="ts">
import { computed, type Component } from 'vue';

export interface ButtonProps {
  /**
   * Variant visual dari button
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'link-secondary'
    // Backward compatibility
    | 'success'
    | 'warning'
    | 'error';

  /**
   * Ukuran button
   */
  size?: 'sm' | 'md';

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Tone button (Primary (default) / Destructive)
   */
  tone?: 'primary' | 'destructive';

  /**
   * @deprecated gunakan `tone="destructive"`.
   */
  destructive?: boolean;

  /**
   * Selected/toggled state
   */
  selected?: boolean;

  /**
   * Disabled state
   */
  disabled?: boolean;

  startIcon?: Component;
  endIcon?: Component;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  loading: false,
  tone: 'primary',
  destructive: false,
  selected: false,
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
});

const buttonClasses = computed(() => {
  const baseStyles =
    'inline-flex items-center justify-center gap-1 font-medium text-sm leading-6 transition-colors select-none disabled:pointer-events-none disabled:opacity-50';

  const isLinkVariant = props.variant === 'link' || props.variant === 'link-secondary';
  const normalizedVariant = props.variant === 'link' ? 'link-primary' : props.variant;
  const resolvedTone = props.destructive ? 'destructive' : props.tone;

  // Link variants are special in Figma (24px height, no padding/bg).
  if (isLinkVariant) {
    const linkColor =
      resolvedTone === 'destructive'
        ? 'text-red-600'
        : normalizedVariant === 'link-primary'
          ? 'text-brand-300'
          : 'text-slate-900';
    const focusRing =
      resolvedTone === 'destructive'
        ? 'focus-visible:ring-red-200'
        : normalizedVariant === 'link-primary'
          ? 'focus-visible:ring-brand-200'
          : 'focus-visible:ring-slate-200';

    return [
      baseStyles,
      'h-6 px-0 py-0 rounded-none underline-offset-4 hover:underline',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      focusRing,
      linkColor,
      props.fullWidth && 'w-full justify-start',
      props.selected && 'underline',
    ]
      .filter(Boolean)
      .join(' ');
  }

  const sizeStyles = {
    sm: 'h-9 px-3 py-1.5 rounded-[6px]',
    md: 'h-10 px-3 py-2 rounded-[6px]',
  } as const;

  const variantStyles = (() => {
    if (resolvedTone === 'destructive') {
      if (props.variant === 'secondary') {
        return [
          'bg-white text-red-600 border border-red-600',
          'hover:bg-red-50',
          'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          props.selected && 'bg-red-50',
        ];
      }

      if (props.variant === 'outline') {
        return [
          'bg-white text-slate-900 border border-red-600',
          'hover:bg-red-50',
          'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          props.selected && 'bg-red-50',
        ];
      }

      if (props.variant === 'ghost') {
        return [
          'bg-transparent text-red-600',
          'hover:bg-red-50',
          'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          props.selected && 'bg-red-50',
        ];
      }

      // primary + legacy variants when destructive is true
      return [
        'bg-red-600 text-white',
        'hover:bg-red-700',
        'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-red-700',
      ];
    }

    if (props.variant === 'primary') {
      return [
        'bg-brand-300 text-white',
        'hover:bg-brand-400',
        'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-brand-400',
      ];
    }

    if (props.variant === 'secondary') {
      return [
        'bg-white text-brand-300 border border-brand-300',
        'hover:bg-brand-50',
        'focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-brand-50',
      ];
    }

    if (props.variant === 'outline') {
      return [
        'bg-white text-slate-900 border border-slate-300',
        'hover:bg-slate-50',
        'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-slate-100',
      ];
    }

    if (props.variant === 'ghost') {
      return [
        'bg-transparent text-slate-900',
        'hover:bg-slate-100',
        'focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-slate-100',
      ];
    }

    // legacy variants (success/warning/error)
    if (props.variant === 'success') {
      return [
        'bg-green-600 text-white',
        'hover:bg-green-700',
        'focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-green-700',
      ];
    }

    if (props.variant === 'warning') {
      return [
        'bg-yellow-500 text-slate-900',
        'hover:bg-yellow-600',
        'focus-visible:ring-2 focus-visible:ring-yellow-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-yellow-600',
      ];
    }

    if (props.variant === 'error') {
      return [
        'bg-red-600 text-white',
        'hover:bg-red-700',
        'focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        props.selected && 'bg-red-700',
      ];
    }

    return ['bg-brand-300 text-white'];
  })();

  return [baseStyles, sizeStyles[props.size], ...variantStyles, props.fullWidth && 'w-full']
    .filter(Boolean)
    .join(' ');
});
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-pressed="selected || undefined"
    type="button"
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

    <component :is="startIcon" v-if="!loading && startIcon" class="shrink-0" />
    <slot name="start-icon" v-if="!loading && startIcon" />
    <span v-if="!loading && $slots.default" class="px-1">
      <slot />
    </span>
    <component :is="endIcon" v-if="!loading && endIcon" class="shrink-0" />
    <slot name="end-icon" v-if="!loading && endIcon" />
  </button>
</template>
