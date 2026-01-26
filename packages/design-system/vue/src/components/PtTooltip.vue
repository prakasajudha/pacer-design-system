<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, useSlots } from 'vue';
import { Teleport } from 'vue';
import { cn } from '../lib/utils';

export type TooltipPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';
export type TooltipVariant = 'primary' | 'secondary';
export type TooltipSize = 'sm' | 'md';

export interface TooltipProps {
  title?: string;
  description?: string;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  size?: TooltipSize;
  delayDuration?: number;
  skipDelayDuration?: number;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
  variant: 'primary',
  size: 'md',
  delayDuration: 200,
  skipDelayDuration: 100,
});

const GAP = 8;

const open = ref(false);
const coords = ref<{
  centerX: number;
  top: number;
  bottom: number;
  triggerLeft: number;
  triggerRight: number;
} | null>(null);
const triggerRef = ref<HTMLDivElement | null>(null);
let showTimeoutId: ReturnType<typeof setTimeout> | null = null;
let hideTimeoutId: ReturnType<typeof setTimeout> | null = null;

const slots = useSlots();
const tooltipId = computed(() => `pt-tooltip-${Math.random().toString(36).slice(2, 11)}`);
const hasTitle = computed(() => Boolean(slots.title ?? props.title));
const hasDescription = computed(() => Boolean(slots.description ?? props.description));
const hasContent = computed(() => hasTitle.value || hasDescription.value);

/** Untuk string: ubah literal \\n (dari Controls/input) jadi newline agar whitespace-pre-line jalan. */
const displayTitle = computed(() =>
  typeof props.title === 'string' ? props.title.replace(/\\n/g, '\n') : props.title
);
const displayDescription = computed(() =>
  typeof props.description === 'string' ? props.description.replace(/\\n/g, '\n') : props.description
);

const variantStyles: Record<TooltipVariant, string> = {
  primary: 'bg-[#1A1A1A] text-white shadow-lg',
  secondary: 'bg-white text-slate-900 border border-slate-200 shadow-lg',
};

const sizeStyles = {
  sm: {
    container: 'px-3 py-2 gap-0.5 max-w-[200px]',
    title: 'text-xs font-semibold leading-tight whitespace-pre-line',
    description: 'text-xs font-normal leading-4 opacity-90 whitespace-pre-line',
  },
  md: {
    container: 'px-4 py-3 gap-1 max-w-[280px]',
    title: 'text-sm font-semibold leading-tight whitespace-pre-line',
    description: 'text-sm font-normal leading-5 opacity-90 whitespace-pre-line',
  },
} as const;

const ARROW_SIZE = 6;

const ARROW_POINTS_DOWN: TooltipPosition[] = ['top', 'top-left', 'top-right'];
const ARROW_POINTS_UP: TooltipPosition[] = ['bottom', 'bottom-left', 'bottom-right'];
const ARROW_POINTS_LEFT: TooltipPosition[] = ['right', 'bottom-right', 'top-right'];
const ARROW_POINTS_RIGHT: TooltipPosition[] = ['left', 'bottom-left', 'top-left'];

function getArrowClasses(position: TooltipPosition): string {
  const base = 'absolute w-0 h-0 border-solid pointer-events-none';
  const placementArrow: Record<TooltipPosition, string> = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    'top-left': 'bottom-0 left-4 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    'top-right': 'bottom-0 right-4 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    'bottom-left': 'top-0 left-4 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    'bottom-right': 'top-0 right-4 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-t-transparent border-b-transparent border-l-transparent',
    right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-t-transparent border-b-transparent border-r-transparent',
  };
  return cn(base, placementArrow[position]);
}

function getArrowStyle(position: TooltipPosition, variant: TooltipVariant): Record<string, string> {
  const color = variant === 'primary' ? '#1A1A1A' : '#ffffff';
  const borderWidth = `${ARROW_SIZE}px`;
  const transparent = 'transparent';
  const base = { borderWidth };
  if (ARROW_POINTS_DOWN.includes(position)) {
    return { ...base, borderTopColor: color, borderLeftColor: transparent, borderRightColor: transparent, borderBottomColor: transparent };
  }
  if (ARROW_POINTS_UP.includes(position)) {
    return { ...base, borderBottomColor: color, borderLeftColor: transparent, borderRightColor: transparent, borderTopColor: transparent };
  }
  if (ARROW_POINTS_LEFT.includes(position)) {
    return { ...base, borderRightColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderLeftColor: transparent };
  }
  if (ARROW_POINTS_RIGHT.includes(position)) {
    return { ...base, borderLeftColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderRightColor: transparent };
  }
  return { ...base, borderLeftColor: color, borderTopColor: transparent, borderBottomColor: transparent, borderRightColor: transparent };
}

function clearShowTimeout(): void {
  if (showTimeoutId) {
    clearTimeout(showTimeoutId);
    showTimeoutId = null;
  }
}

function clearHideTimeout(): void {
  if (hideTimeoutId) {
    clearTimeout(hideTimeoutId);
    hideTimeoutId = null;
  }
}

function show(): void {
  clearHideTimeout();
  if (!hasContent.value) return;
  if (props.delayDuration <= 0) {
    open.value = true;
    return;
  }
  showTimeoutId = setTimeout(() => {
    open.value = true;
    showTimeoutId = null;
  }, props.delayDuration);
}

function hide(): void {
  clearShowTimeout();
  if (props.skipDelayDuration <= 0) {
    open.value = false;
    coords.value = null;
    return;
  }
  hideTimeoutId = setTimeout(() => {
    open.value = false;
    coords.value = null;
    hideTimeoutId = null;
  }, props.skipDelayDuration);
}

function updateCoords(): void {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  coords.value = {
    centerX: rect.left + rect.width / 2,
    top: rect.top,
    bottom: rect.bottom,
    triggerLeft: rect.left,
    triggerRight: rect.right,
  };
}

function handleTriggerMouseEnter(): void {
  show();
}

function handleTriggerMouseLeave(): void {
  hide();
}

function handleTriggerFocus(): void {
  show();
}

function handleTriggerBlur(): void {
  hide();
}

function handleTooltipMouseEnter(): void {
  clearHideTimeout();
  clearShowTimeout();
  open.value = true;
}

function handleTooltipMouseLeave(): void {
  hide();
}

function handleKeyDown(e: KeyboardEvent): void {
  if (e.key === 'Escape' && open.value) {
    clearShowTimeout();
    clearHideTimeout();
    open.value = false;
    coords.value = null;
  }
}

watch(open, (isOpen) => {
  if (isOpen && triggerRef.value) {
    updateCoords();
  } else if (!isOpen) {
    coords.value = null;
  }
});

let scrollResizeCleanup: (() => void) | null = null;
watch(open, (isOpen) => {
  scrollResizeCleanup?.();
  scrollResizeCleanup = null;
  if (!isOpen) return;
  const onScrollOrResize = (): void => updateCoords();
  window.addEventListener('scroll', onScrollOrResize, true);
  window.addEventListener('resize', onScrollOrResize);
  scrollResizeCleanup = () => {
    window.removeEventListener('scroll', onScrollOrResize, true);
    window.removeEventListener('resize', onScrollOrResize);
  };
});

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  scrollResizeCleanup?.();
  clearShowTimeout();
  clearHideTimeout();
  document.removeEventListener('keydown', handleKeyDown);
});

const currentSizeStyles = computed(() => sizeStyles[props.size]);
const tooltipStyle = computed(() => {
  const c = coords.value;
  if (!c) return { left: '-9999px', top: '-9999px', transform: 'translate(-50%, -100%)' };
  const centerY = (c.top + c.bottom) / 2;
  const p = props.position;
  const posTop =
    p === 'top' || p === 'top-left' || p === 'top-right'
      ? c.top - GAP
      : p === 'bottom' || p === 'bottom-left' || p === 'bottom-right'
        ? c.bottom + GAP
        : centerY;
  const posLeft =
    p === 'left' || p === 'top-left' || p === 'bottom-left'
      ? c.triggerLeft - GAP
      : p === 'right' || p === 'top-right' || p === 'bottom-right'
        ? c.triggerRight + GAP
        : c.centerX;
  const transformByPos: Record<TooltipPosition, string> = {
    top: 'translate(-50%, -100%)',
    'top-left': 'translate(0, -100%)',
    'top-right': 'translate(-100%, -100%)',
    right: 'translate(0, -50%)',
    'bottom-right': 'translate(-100%, 0)',
    bottom: 'translate(-50%, 0)',
    'bottom-left': 'translate(0, 0)',
    left: 'translate(-100%, -50%)',
  };
  return {
    left: `${posLeft}px`,
    top: `${posTop}px`,
    transform: transformByPos[p],
  };
});
</script>

<template>
  <div
    ref="triggerRef"
    class="inline-flex"
    :aria-describedby="hasContent ? tooltipId : undefined"
    @mouseenter="handleTriggerMouseEnter"
    @mouseleave="handleTriggerMouseLeave"
    @focus="handleTriggerFocus"
    @blur="handleTriggerBlur"
  >
    <slot />
  </div>

  <Teleport to="body">
    <div
      v-if="hasContent && open && coords"
      :id="tooltipId"
      role="tooltip"
      class="fixed z-[1070] flex flex-col overflow-visible rounded-md whitespace-normal transition-opacity duration-150"
      :class="[variantStyles[variant], currentSizeStyles.container]"
      :style="tooltipStyle"
      @mouseenter="handleTooltipMouseEnter"
      @mouseleave="handleTooltipMouseLeave"
    >
      <div v-if="hasTitle" :class="currentSizeStyles.title">
        <slot name="title">{{ displayTitle }}</slot>
      </div>
      <div v-if="hasDescription" :class="currentSizeStyles.description">
        <slot name="description">{{ displayDescription }}</slot>
      </div>
      <div
        :class="getArrowClasses(position)"
        :style="getArrowStyle(position, variant)"
        aria-hidden
      />
    </div>
  </Teleport>
</template>
