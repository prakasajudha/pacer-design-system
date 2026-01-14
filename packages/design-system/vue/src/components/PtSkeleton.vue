<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';

export interface SkeletonProps {
  /**
   * Variant visual dari skeleton
   */
  variant?: 'square' | 'round';

  /**
   * Height skeleton (px, em, rem, %)
   */
  height?: string;

  /**
   * Width skeleton (px, em, rem, %)
   */
  width?: string;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  variant: 'square',
  height: undefined,
  width: undefined,
});

const attrs = useAttrs();

const skeletonClasses = computed(() => {
  const baseStyles = 'animate-pulse bg-slate-200';

  const variantStyles = {
    square: 'rounded-md',
    round: 'rounded-full',
  } as const;

  const classFromAttrs =
    typeof attrs.class === 'string'
      ? attrs.class
      : Array.isArray(attrs.class)
        ? attrs.class.join(' ')
        : '';

  return cn(baseStyles, variantStyles[props.variant], classFromAttrs);
});

const skeletonStyles = computed(() => {
  const styleFromAttrs = attrs.style || {};

  const inlineStyles: Record<string, string> = {
    ...(typeof styleFromAttrs === 'object' && !Array.isArray(styleFromAttrs)
      ? (styleFromAttrs as Record<string, string>)
      : {}),
    ...(props.height && { height: props.height }),
    ...(props.width && { width: props.width }),
  };

  return inlineStyles;
});
</script>

<template>
  <div :class="skeletonClasses" :style="skeletonStyles" v-bind="$attrs">
    <slot />
  </div>
</template>

