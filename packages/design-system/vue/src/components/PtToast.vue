<script setup lang="ts">
import type { Component } from 'vue';
import { computed, onMounted, onUnmounted, h } from 'vue';
import { cn } from '../lib/utils';

export interface ToastProps {
  /**
   * Variant visual dari toast
   */
  variant?: 'neutral' | 'information' | 'success' | 'warning' | 'error';

  /**
   * Title toast
   */
  title?: string;

  /**
   * Description toast (muncul di bawah title)
   */
  description?: string;

  /**
   * Custom icon (jika tidak ada, akan menggunakan default icon sesuai variant)
   */
  icon?: Component;

  /**
   * Custom className untuk icon container
   */
  iconClassName?: string;

  /**
   * Custom style untuk icon container
   */
  iconStyle?: Record<string, string>;

  /**
   * Delay auto close dalam milliseconds (0 = tidak auto close)
   */
  duration?: number;

  /**
   * Callback saat toast di-close
   */
  onClose?: () => void;

  /**
   * ID unik untuk toast
   */
  id?: string;
}

const props = withDefaults(defineProps<ToastProps>(), {
  variant: 'neutral',
  title: undefined,
  description: undefined,
  icon: undefined,
  iconClassName: undefined,
  iconStyle: undefined,
  duration: 5000,
  onClose: undefined,
  id: undefined,
});

const emit = defineEmits<{
  close: [];
}>();

// Helper function untuk membuat default icon
const createDefaultIcon = (variant: ToastProps['variant']) => {
  const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  };

  switch (variant) {
    case 'neutral':
      return h('svg', { ...iconProps, class: 'text-slate-600' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' }),
      ]);
    case 'information':
      return h('svg', { ...iconProps, class: 'text-brand-600' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' }),
      ]);
    case 'success':
      return h('svg', { ...iconProps, class: 'text-green-600' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('path', { d: 'm9 12 2 2 4-4' }),
      ]);
    case 'warning':
      return h('svg', { ...iconProps, class: 'text-amber-600' }, [
        h('path', { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' }),
        h('path', { d: 'M12 9v4' }),
        h('path', { d: 'M12 17h.01' }),
      ]);
    case 'error':
      return h('svg', { ...iconProps, class: 'text-red-600' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
        h('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' }),
      ]);
    default:
      return null;
  }
};

const baseStyles = 'flex items-start gap-3 rounded-lg shadow-lg p-4 min-w-[320px] max-w-[400px] border';

const variantStyles = {
  neutral: 'bg-white border-slate-200',
  information: 'bg-brand-50 border-brand-200',
  success: 'bg-green-50 border-green-200',
  warning: 'bg-amber-50 border-amber-200',
  error: 'bg-red-50 border-red-200',
} as const;

const iconColorStyles = {
  neutral: 'text-slate-600',
  information: 'text-brand-600',
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600',
} as const;

const textColorStyles = {
  neutral: 'text-slate-900',
  information: 'text-brand-900',
  success: 'text-green-900',
  warning: 'text-amber-900',
  error: 'text-red-900',
} as const;

const toastClasses = computed(() => {
  return cn(
    baseStyles,
    variantStyles[props.variant],
    'animate-in slide-in-from-top-5 fade-in-0 duration-300'
  );
});

const iconClasses = computed(() => {
  return cn(
    'w-5 h-5 shrink-0 mt-0.5',
    iconColorStyles[props.variant],
    props.iconClassName
  );
});

const titleClasses = computed(() => {
  return cn(
    'text-sm font-semibold leading-5 whitespace-normal [overflow-wrap:anywhere]',
    textColorStyles[props.variant]
  );
});

const descriptionClasses = computed(() => {
  return cn(
    'text-sm font-normal leading-5 mt-1 whitespace-normal [overflow-wrap:anywhere]',
    textColorStyles[props.variant],
    'opacity-80'
  );
});

const currentIcon = computed(() => props.icon || createDefaultIcon(props.variant));

let timeoutId: ReturnType<typeof setTimeout> | null = null;

const handleClose = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  emit('close');
  if (props.onClose) {
    props.onClose();
  }
};

onMounted(() => {
  if (props.duration && props.duration > 0) {
    timeoutId = setTimeout(() => {
      handleClose();
    }, props.duration);
  }
});

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>

<template>
  <div :class="toastClasses" role="alert" :id="id">
    <div :class="iconClasses" :style="iconStyle">
      <component :is="currentIcon" />
    </div>
    <div class="flex-1 min-w-0">
      <div v-if="title" :class="titleClasses">{{ title }}</div>
      <div v-if="description" :class="descriptionClasses">{{ description }}</div>
    </div>
    <button
      type="button"
      @click="handleClose"
      class="shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-black/5 transition-colors"
      :class="textColorStyles[variant]"
      aria-label="Close toast"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
@keyframes slide-in-from-top {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-in {
  animation: slide-in-from-top 0.3s ease-out;
}

.slide-in-from-top-5 {
  animation: slide-in-from-top 0.3s ease-out;
}

.fade-in-0 {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.duration-300 {
  animation-duration: 300ms;
}
</style>
