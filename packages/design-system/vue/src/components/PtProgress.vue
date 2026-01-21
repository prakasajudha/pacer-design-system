<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ProgressProps {
  /**
   * Background color untuk track (default sesuai Figma).
   * Bisa diisi hex/rgb/rgba/var().
   */
  bgColor?: string;

  /**
   * Color untuk bar/surface (default sesuai Figma).
   * Bisa diisi hex/rgb/rgba/var().
   */
  color?: string;

  /**
   * Nilai progress (0 - 100)
   */
  value?: number;

  /**
   * Ukuran progress bar (tinggi).
   */
  size?: ProgressSize;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  // Default pakai hex agar aman di semua consumer (token CSS var bisa beda format)
  bgColor: '#E6F0FE',
  color: '#016BF8',
  value: 0,
  size: 'md',
});

const attrs = useAttrs();

const clampedValue = computed(() => {
  const raw = Number(props.value);
  if (!Number.isFinite(raw)) return 0;
  return Math.min(100, Math.max(0, Math.round(raw)));
});

const sizeClasses = computed(() => {
  return (
    {
      xs: 'h-1', // 4px
      sm: 'h-2', // 8px
      md: 'h-3', // 12px
      lg: 'h-4', // 16px
    } as const
  )[props.size];
});

const classFromAttrs = computed(() => {
  const c = attrs.class;
  if (typeof c === 'string') return c;
  if (Array.isArray(c)) return c.join(' ');
  return '';
});

const trackClasses = computed(() => {
  // Default width full; consumer bisa override lewat class (mis. w-[190px]).
  return cn('relative overflow-hidden rounded-full w-full', sizeClasses.value, classFromAttrs.value);
});

const barStyle = computed(() => {
  return {
    width: `${clampedValue.value}%`,
    backgroundColor: props.color,
  } as const;
});
</script>

<template>
  <div
    :class="trackClasses"
    :style="{ backgroundColor: bgColor }"
    role="progressbar"
    aria-label="Progress"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="clampedValue"
    v-bind="$attrs"
  >
    <div
      class="absolute inset-y-0 left-0 transition-all duration-300 ease-out"
      :style="barStyle"
    />
  </div>
</template>

