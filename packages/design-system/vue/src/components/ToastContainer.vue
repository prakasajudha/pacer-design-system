<script setup lang="ts">
import { computed } from 'vue';
import PtToast from './PtToast.vue';
import { getToasts, removeToast, getPosition, type ToastPosition } from '../composables/useToast';
import { cn } from '../lib/utils';

const props = withDefaults(defineProps<{
  /**
   * Position untuk toast container (default: menggunakan global position)
   */
  position?: ToastPosition;
}>(), {
  position: undefined,
});

const toasts = getToasts();
const globalPosition = getPosition();

const containerPosition = computed(() => props.position || globalPosition.value);

const positionClasses = computed(() => {
  const base = 'fixed z-[9999] flex flex-col gap-2 pointer-events-none';
  
  switch (containerPosition.value) {
    case 'top-left':
      return cn(base, 'top-4 left-4');
    case 'top':
      return cn(base, 'top-4 left-1/2 -translate-x-1/2');
    case 'top-right':
      return cn(base, 'top-4 right-4');
    case 'right':
      return cn(base, 'right-4 top-1/2 -translate-y-1/2');
    case 'bottom-right':
      return cn(base, 'bottom-4 right-4');
    case 'bottom':
      return cn(base, 'bottom-4 left-1/2 -translate-x-1/2');
    case 'bottom-left':
      return cn(base, 'bottom-4 left-4');
    case 'left':
      return cn(base, 'left-4 top-1/2 -translate-y-1/2');
    default:
      return cn(base, 'top-4 right-4');
  }
});

const animationDirection = computed(() => {
  switch (containerPosition.value) {
    case 'top-left':
    case 'top':
    case 'top-right':
      return 'slide-in-from-top';
    case 'right':
      return 'slide-in-from-right';
    case 'bottom-right':
    case 'bottom':
    case 'bottom-left':
      return 'slide-in-from-bottom';
    case 'left':
      return 'slide-in-from-left';
    default:
      return 'slide-in-from-right';
  }
});

const handleClose = (id: string) => {
  removeToast(id);
};
</script>

<template>
  <div :class="positionClasses">
    <TransitionGroup
      :name="`toast-${animationDirection}`"
      tag="div"
      class="flex flex-col gap-2"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto"
      >
        <PtToast
          :variant="toast.variant"
          :title="toast.title"
          :description="toast.description"
          :icon="toast.icon"
          :icon-class-name="toast.iconClassName"
          :icon-style="toast.iconStyle"
          :duration="toast.duration"
          :id="toast.id"
          @close="handleClose(toast.id)"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
/* Base animation */
.toast-slide-in-from-top-enter-active,
.toast-slide-in-from-top-leave-active,
.toast-slide-in-from-right-enter-active,
.toast-slide-in-from-right-leave-active,
.toast-slide-in-from-bottom-enter-active,
.toast-slide-in-from-bottom-leave-active,
.toast-slide-in-from-left-enter-active,
.toast-slide-in-from-left-leave-active {
  transition: all 0.3s ease;
}

/* Top positions */
.toast-slide-in-from-top-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.toast-slide-in-from-top-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* Right positions */
.toast-slide-in-from-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-slide-in-from-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Bottom positions */
.toast-slide-in-from-bottom-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.toast-slide-in-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* Left positions */
.toast-slide-in-from-left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.toast-slide-in-from-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Move animation */
.toast-slide-in-from-top-move,
.toast-slide-in-from-right-move,
.toast-slide-in-from-bottom-move,
.toast-slide-in-from-left-move {
  transition: transform 0.3s ease;
}
</style>
