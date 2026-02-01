<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars -- Teleport used in template */
import type { ClassValue } from 'clsx';
import { ref, computed, watch, onMounted, onUnmounted, useAttrs } from 'vue';
import { Teleport } from 'vue';
import { cn } from '../lib/utils';

export type PopoverPosition =
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'top-start'
  | 'top'
  | 'top-end';

export interface PopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  position?: PopoverPosition;
  contentClassName?: string;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<PopoverProps>(), {
  open: undefined,
  defaultOpen: false,
  position: 'bottom-start',
  contentClassName: '',
  closeOnOutsideClick: true,
  closeOnEscape: true,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const GAP = 8;

const internalOpen = ref(props.defaultOpen);
const isControlled = computed(() => props.open !== undefined);
const isOpen = computed(() =>
  isControlled.value ? props.open! : internalOpen.value
);

const triggerRef = ref<HTMLDivElement | null>(null);
const panelRef = ref<HTMLDivElement | null>(null);
const coords = ref<{ top: number; left: number } | null>(null);

const setOpen = (next: boolean) => {
  if (!isControlled.value) {
    internalOpen.value = next;
  }
  emit('update:open', next);
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.closeOnEscape && e.key === 'Escape' && isOpen.value) {
    setOpen(false);
  }
};

const updateCoords = () => {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const baseTop = rect.bottom + GAP;
  const baseLeft = rect.left;
  const baseTopAlt = rect.top - GAP;
  const rectWidth = rect.width;
  const pos = props.position;
  const positions: Record<PopoverPosition, { top: number; left: number }> = {
    'bottom-start': { top: baseTop, left: baseLeft },
    bottom: { top: baseTop, left: baseLeft + rectWidth / 2 },
    'bottom-end': { top: baseTop, left: baseLeft + rectWidth },
    'top-start': { top: baseTopAlt, left: baseLeft },
    top: { top: baseTopAlt, left: baseLeft + rectWidth / 2 },
    'top-end': { top: baseTopAlt, left: baseLeft + rectWidth },
  };
  coords.value = positions[pos];
};

const panelStyle = computed(() => {
  const c = coords.value;
  if (!c) return { position: 'fixed' as const, left: -9999, top: -9999 };
  const isEnd = props.position.endsWith('end');
  return {
    position: 'fixed' as const,
    left: `${c.left}px`,
    top: `${c.top}px`,
    transform:
      props.position === 'bottom' || props.position === 'top'
        ? 'translateX(-50%)'
        : isEnd
          ? 'translateX(-100%)'
          : undefined,
    zIndex: 1060,
  };
});

watch(isOpen, (open) => {
  if (open && triggerRef.value) {
    updateCoords();
  } else {
    coords.value = null;
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

watch(
  isOpen,
  (open) => {
    if (!props.closeOnOutsideClick || !open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.value?.contains(target) ||
        panelRef.value?.contains(target)
      ) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  },
  { immediate: true }
);

watch(
  isOpen,
  (open) => {
    if (!open) return;
    updateCoords();
    const onScrollOrResize = () => updateCoords();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  },
  { immediate: true }
);

const handleTriggerClick = () => setOpen(!isOpen.value);
const handleTriggerKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    setOpen(!isOpen.value);
  }
};

const attrs = useAttrs();
const panelClass = computed(() =>
  cn(
    'rounded-md border border-border bg-white text-popover-foreground shadow-md py-1 min-w-[160px]',
    props.contentClassName,
    attrs.class as ClassValue
  )
);
</script>

<template>
  <div class="inline-flex items-end">
    <div
      ref="triggerRef"
      role="button"
      tabindex="0"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      :aria-controls="isOpen ? 'pt-popover-panel' : undefined"
      class="inline-flex items-end"
      @click="handleTriggerClick"
      @keydown="handleTriggerKeyDown"
    >
      <slot />
    </div>
    <Teleport to="body">
      <div
        v-if="isOpen && coords"
        id="pt-popover-panel"
        ref="panelRef"
        role="dialog"
        aria-label="Menu"
        :class="panelClass"
        :style="panelStyle"
      >
        <slot name="content" />
      </div>
    </Teleport>
  </div>
</template>
