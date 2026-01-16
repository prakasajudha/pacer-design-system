<script setup lang="ts">
import { computed, useAttrs, useSlots, h } from 'vue';
import { cn } from '../lib/utils';

export interface InformationProps {
  /**
   * Variant visual dari information
   */
  variant?: 'info' | 'slate' | 'success' | 'warning' | 'danger';

  /**
   * Title information
   */
  title?: string;

  /**
   * Description information (muncul di bawah title)
   */
  description?: string;

  /**
   * Icon override (jika tidak ada, akan menggunakan default icon sesuai variant)
   */
  icon?: any;

  /**
   * Custom className untuk icon container
   */
  iconClassName?: string;

  /**
   * Custom style untuk icon container
   */
  iconStyle?: Record<string, string>;

  /**
   * Size information
   */
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<InformationProps>(), {
  variant: 'info',
  size: 'md',
  title: undefined,
  description: undefined,
  icon: undefined,
  iconClassName: undefined,
  iconStyle: undefined,
});

const attrs = useAttrs();
const slots = useSlots();

// Helper function untuk membuat default icon
const createDefaultIcon = (variant: InformationProps['variant'], size: number) => {
  const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  };

  const colorClasses = {
    info: 'text-brand-300',
    slate: 'text-slate-900',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
  };

  switch (variant) {
    case 'info':
      return h('svg', { ...iconProps, class: colorClasses.info }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' }),
      ]);
    case 'slate':
      return h('svg', { ...iconProps, class: colorClasses.slate }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' }),
      ]);
    case 'success':
      return h('svg', { ...iconProps, class: colorClasses.success }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('path', { d: 'm9 12 2 2 4-4' }),
      ]);
    case 'warning':
      return h('svg', { ...iconProps, class: colorClasses.warning }, [
        h('path', { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' }),
        h('path', { d: 'M12 9v4' }),
        h('path', { d: 'M12 17h.01' }),
      ]);
    case 'danger':
      return h('svg', { ...iconProps, class: colorClasses.danger }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' }),
      ]);
    default:
      return null;
  }
};

const baseStyles = 'flex items-start rounded-md';

const variantBackgroundStyles = {
  info: 'bg-brand-50',
  slate: 'bg-slate-50',
  success: 'bg-green-50',
  warning: 'bg-yellow-50',
  danger: 'bg-red-50',
} as const;

const sizeStyles = {
  sm: {
    container: 'py-2 px-3 gap-2',
    icon: 'w-4 h-4 shrink-0',
    title: 'text-sm font-normal leading-5 text-slate-900',
    description: 'text-sm font-normal leading-5 text-slate-900',
    content: 'text-sm font-normal leading-5 text-slate-900',
  },
  md: {
    container: 'p-4 gap-3',
    icon: 'w-4 h-4 shrink-0',
    title: 'text-sm font-normal leading-5 text-slate-900',
    description: 'text-sm font-normal leading-5 text-slate-900',
    content: 'text-sm font-normal leading-5 text-slate-900',
  },
  lg: {
    container: 'p-4 gap-3',
    icon: 'w-5 h-5 shrink-0',
    title: 'text-base font-normal leading-6 text-slate-900',
    description: 'text-base font-normal leading-6 text-slate-900',
    content: 'text-base font-normal leading-6 text-slate-900',
  },
} as const;

const iconColorStyles = {
  info: 'text-brand-300',
  slate: 'text-slate-900',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  danger: 'text-red-600',
} as const;

const iconSize = computed(() => (props.size === 'lg' ? 20 : 16));
const currentIcon = computed(() => props.icon || createDefaultIcon(props.variant, iconSize.value));
const currentSizeStyles = computed(() => sizeStyles[props.size]);

const informationClasses = computed(() => {
  const classFromAttrs =
    typeof attrs.class === 'string'
      ? attrs.class
      : Array.isArray(attrs.class)
        ? attrs.class.join(' ')
        : '';
  return cn(
    baseStyles,
    currentSizeStyles.value.container,
    variantBackgroundStyles[props.variant],
    classFromAttrs
  );
});

const informationStyles = computed(() => {
  return attrs.style || {};
});

const iconClasses = computed(() => {
  return cn(
    currentSizeStyles.value.icon,
    iconColorStyles[props.variant],
    'mt-icon-offset',
    props.iconClassName
  );
});

const iconStyles = computed(() => {
  return props.iconStyle || {};
});

const hasChildren = computed(() => {
  if (!slots.default) return false;
  const defaultSlots = slots.default();
  if (!defaultSlots || defaultSlots.length === 0) return false;
  return defaultSlots.some((slot) => {
    if (typeof slot.children === 'string') {
      return slot.children.trim().length > 0;
    }
    return slot.children != null && slot.children !== '';
  });
});
</script>

<template>
  <div :class="informationClasses" :style="informationStyles" v-bind="$attrs">
    <div :class="iconClasses" :style="iconStyles">
      <component v-if="icon" :is="icon" />
      <component v-else :is="currentIcon" />
    </div>
    <div class="flex-1 min-w-0">
      <template v-if="hasChildren">
        <div :class="currentSizeStyles.content">
          <slot />
        </div>
      </template>
      <template v-else>
        <div v-if="title" :class="cn(currentSizeStyles.title, 'mb-1')">{{ title }}</div>
        <div
          v-if="description"
          :class="cn(currentSizeStyles.description, title ? '' : 'mb-1')"
        >
          {{ description }}
        </div>
      </template>
    </div>
  </div>
</template>

