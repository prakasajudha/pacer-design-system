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
    gray: 'border border-gray-300',
    red: 'border-red-300',
  orange: 'border border-orange-300',
  yellow: 'border border-yellow-300',
  green: 'border border-green-300',
  teal: 'border border-teal-300',
  blue: 'border border-blue-300',
  cyan: 'border border-cyan-300',
  purple: 'border border-purple-300',
  pink: 'border border-pink-300',
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

const dividerSizeStyle = computed<Record<string, string>>(() => {
  if (props.orientation === 'horizontal') {
    return { width: props.width ?? '100%' };
  }
  return {
    height: props.height ?? '100%',
    ...(props.height == null ? { minHeight: '1em' } : {}),
  };
});

const mergedStyle = computed(() => [
  dividerSizeStyle.value,
  (attrs.style as Record<string, unknown>) ?? {},
]);

const restAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <component
    :is="as"
    role="separator"
    :aria-orientation="orientation"
    :class="cn(dividerClasses, attrs?.class)"
    :style="mergedStyle"
    v-bind="restAttrs"
  />
</template>
