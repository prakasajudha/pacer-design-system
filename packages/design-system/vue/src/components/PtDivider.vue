<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

export type DividerColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';

export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export type DividerOrientation = 'vertical' | 'horizontal';

export type DividerSize = 'xs' | 'sm' | 'md' | 'lg';

export interface DividerProps {
  /** Color palette of the divider. */
  colorPalette?: DividerColorPalette;
  /** Variant (line style). */
  variant?: DividerVariant;
  /** Orientation. */
  orientation?: DividerOrientation;
  /** Size (thickness). */
  size?: DividerSize;
  /** Width (nilai CSS), dipakai saat orientation horizontal. Default `100%`. Contoh: `"200px"`, `"100%"`, `"12rem"`. Framework-agnostic (Tailwind, Bootstrap, dll). */
  width?: string;
  /** Height (nilai CSS), dipakai saat orientation vertical. Default `100%` dengan min-height `1em`. Contoh: `"32px"`, `"100%"`, `"2rem"`. Framework-agnostic. */
  height?: string;
  /** The underlying element to render (e.g. 'div', 'hr'). */
  as?: string;
}

const props = withDefaults(defineProps<DividerProps>(), {
  colorPalette: 'gray',
  variant: 'solid',
  orientation: 'horizontal',
  size: 'sm',
  width: undefined,
  height: undefined,
  as: 'div',
});

const COLOR_PALETTE_CLASSES: Record<DividerColorPalette, string> = {
  gray: 'border-gray-300',
  red: 'border-red-300',
  orange: 'border-orange-300',
  yellow: 'border-yellow-300',
  green: 'border-green-300',
  teal: 'border-teal-300',
  blue: 'border-blue-300',
  cyan: 'border-cyan-300',
  purple: 'border-purple-300',
  pink: 'border-pink-300',
};

const VARIANT_CLASSES: Record<DividerVariant, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const HORIZONTAL_SIZE_CLASSES: Record<DividerSize, string> = {
  xs: 'border-t',
  sm: 'border-t-2',
  md: 'border-t-4',
  lg: 'border-t-8',
};

const VERTICAL_SIZE_CLASSES: Record<DividerSize, string> = {
  xs: 'border-l',
  sm: 'border-l-2',
  md: 'border-l-4',
  lg: 'border-l-8',
};

/** Ketebalan border per size (px). */
const SIZE_TO_BORDER_WIDTH: Record<DividerSize, string> = {
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '8px',
};

/** Warna border per palette (hex), supaya garis tetap muncul di web-docs tanpa class Tailwind. Nilai setara Tailwind *-300. */
const COLOR_PALETTE_TO_CSS: Record<DividerColorPalette, string> = {
  gray: '#d1d5db',
  red: '#fca5a5',
  orange: '#fdba74',
  yellow: '#fde047',
  green: '#86efac',
  teal: '#5eead4',
  blue: '#93c5fd',
  cyan: '#67e8f9',
  purple: '#d8b4fe',
  pink: '#f9a8d4',
};

const dividerClasses = computed(() => {
  const colorClass = COLOR_PALETTE_CLASSES[props.colorPalette];
  const variantClass = VARIANT_CLASSES[props.variant];
  const sizeClass =
    props.orientation === 'horizontal'
      ? HORIZONTAL_SIZE_CLASSES[props.size]
      : VERTICAL_SIZE_CLASSES[props.size];

  const orientationClasses =
    props.orientation === 'horizontal'
      ? 'border-0 border-t min-h-0'
      : 'border-0 border-l min-w-0 self-stretch';

  return cn(
    'shrink-0 border-0 bg-transparent',
    orientationClasses,
    sizeClass,
    colorClass,
    variantClass
  );
});

/** Garis divider digambar pakai background + height/width (bukan border) agar pasti muncul di web-docs; preflight/reset border tidak memengaruhi. */
const dividerSizeStyle = computed((): Record<string, string> => {
  const w = SIZE_TO_BORDER_WIDTH[props.size];
  const color = COLOR_PALETTE_TO_CSS[props.colorPalette];

  if (props.orientation === 'horizontal') {
    return {
      width: props.width ?? '100%',
      height: w,
      minHeight: w,
      backgroundColor: color,
    };
  }
  const style: Record<string, string> = {
    width: w,
    minWidth: w,
    height: props.height ?? '100%',
    backgroundColor: color,
  };
  if (props.height == null) {
    style.minHeight = '1em';
  }
  return style;
});

const mergedStyle = computed(() => [
  dividerSizeStyle.value,
  (attrs.style as Record<string, unknown>) ?? {},
]);

const restAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});

const classFromAttrs = computed(() => attrs?.class as string | undefined);
</script>

<template>
  <component
    :is="as"
    role="separator"
    :aria-orientation="orientation"
    :class="cn(dividerClasses, classFromAttrs)"
    :style="mergedStyle"
    v-bind="restAttrs"
  />
</template>
