<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';

export interface BadgeProps {
  /**
   * Variant visual dari badge
   */
  variant?: 'solid' | 'secondary' | 'outline';

  /**
   * Type badge (rounded atau square)
   */
  type?: 'rounded' | 'square';

  /**
   * Color badge
   */
  color?: 'slate' | 'primary' | 'danger' | 'warning' | 'success' | 'purple' | 'pink' | 'orange';

  /**
   * Label badge (jika ada, akan menggantikan children)
   */
  label?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'solid',
  type: 'rounded',
  color: 'slate',
  label: undefined,
});

const attrs = useAttrs();

const badgeClasses = computed(() => {
  const baseStyles =
    'inline-flex items-center justify-center gap-0.5 py-0.5 px-2.5 text-xs font-semibold';

  const typeStyles = {
    rounded: 'rounded-full',
    square: 'rounded-badge-square',
  } as const;

  const getVariantStyles = () => {
    if (props.variant === 'solid') {
      if (props.color === 'slate') {
        return 'bg-slate-900 text-white';
      }
      if (props.color === 'primary') {
        return 'bg-brand-300 text-white';
      }
      if (props.color === 'danger') {
        return 'bg-red-600 text-white';
      }
      if (props.color === 'warning') {
        return 'bg-yellow-500 text-slate-50';
      }
      if (props.color === 'success') {
        return 'bg-green-600 text-white';
      }
      if (props.color === 'purple') {
        return 'bg-purple-600 text-white';
      }
      if (props.color === 'pink') {
        return 'bg-pink-600 text-white';
      }
      if (props.color === 'orange') {
        return 'bg-orange-600 text-white';
      }
      // Default fallback
      return 'bg-slate-900 text-white';
    }

    if (props.variant === 'secondary') {
      if (props.color === 'slate') {
        return 'bg-slate-100 text-slate-900';
      }
      if (props.color === 'primary') {
        return 'bg-brand-50 text-brand-300';
      }
      if (props.color === 'danger') {
        return 'bg-red-50 text-red-600';
      }
      if (props.color === 'warning') {
        return 'bg-yellow-50 text-yellow-700';
      }
      if (props.color === 'success') {
        return 'bg-green-50 text-green-600';
      }
      if (props.color === 'purple') {
        return 'bg-purple-50 text-purple-600';
      }
      if (props.color === 'pink') {
        return 'bg-pink-50 text-pink-600';
      }
      if (props.color === 'orange') {
        return 'bg-orange-50 text-orange-600';
      }
      // Default fallback
      return 'bg-slate-100 text-slate-900';
    }

    if (props.variant === 'outline') {
      if (props.color === 'slate') {
        return 'bg-white text-slate-900 border border-slate-300';
      }
      if (props.color === 'primary') {
        return 'bg-white text-brand-300 border border-brand-300';
      }
      if (props.color === 'danger') {
        return 'bg-white text-red-600 border border-red-600';
      }
      if (props.color === 'warning') {
        return 'bg-white text-yellow-700 border border-yellow-500';
      }
      if (props.color === 'success') {
        return 'bg-white text-green-600 border border-green-600';
      }
      if (props.color === 'purple') {
        return 'bg-white text-purple-600 border border-purple-600';
      }
      if (props.color === 'pink') {
        return 'bg-white text-pink-600 border border-pink-600';
      }
      if (props.color === 'orange') {
        return 'bg-white text-orange-600 border border-orange-600';
      }
      // Default fallback
      return 'bg-white text-slate-900 border border-slate-300';
    }

    return '';
  };

  const classFromAttrs = typeof attrs.class === 'string' ? attrs.class : Array.isArray(attrs.class) ? attrs.class.join(' ') : '';

  return cn(baseStyles, typeStyles[props.type], getVariantStyles(), classFromAttrs);
});
</script>

<template>
  <div :class="badgeClasses" v-bind="$attrs">
    <template v-if="label">{{ label }}</template>
    <slot v-else />
  </div>
</template>

