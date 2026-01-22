<script setup lang="ts">
import { inject, computed, useSlots, h, type Component } from 'vue';
import PtIconButton from './PtIconButton.vue';

export interface ModalHeaderProps {
  /**
   * Title text (jika tidak pakai children)
   */
  title?: string;

  /**
   * Description text di bawah title (jika tidak pakai children)
   */
  description?: string;

  /**
   * Icon di sebelah kiri title (jika tidak pakai children)
   */
  icon?: Component;

  /**
   * Tampilkan close button di kanan
   */
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<ModalHeaderProps>(), {
  title: undefined,
  description: undefined,
  icon: undefined,
  showCloseButton: true,
});

const emit = defineEmits<{
  close: [];
}>();

const slots = useSlots();

// Inject modal context
const modalContext = inject<{
  close: () => void;
}>('modalContext', null);

if (!modalContext) {
  throw new Error('PtModalHeader must be used inside PtModal');
}

const handleClose = () => {
  modalContext.close();
  emit('close');
};

// Check if using children (custom header)
const hasChildren = computed(() => {
  return !!slots.default;
});

// Check if using props (title/description)
const hasProps = computed(() => {
  return !!(props.title || props.description || props.icon);
});

// Close icon SVG component
const CloseIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4',
}, [
  h('path', { d: 'M12 4l-8 8M4 4l8 8' }),
]);
</script>

<template>
  <div class="flex flex-col gap-1 items-start w-full p-6 pb-4">
    <!-- Custom Header (children) -->
    <div v-if="hasChildren" class="flex gap-2 items-center w-full">
      <slot />
    </div>

    <!-- Default Header (props) -->
    <template v-else-if="hasProps">
      <div class="flex gap-2 items-center w-full">
        <!-- Left Icon -->
        <div v-if="icon" class="flex items-center justify-center p-0.5 rounded-button shrink-0">
          <component :is="icon" class="h-4 w-4" />
        </div>

        <!-- Title -->
        <div v-if="title" class="flex-1 font-semibold text-xl leading-none tracking-[-0.6px] text-slate-900">
          {{ title }}
        </div>

        <!-- Close Button -->
        <PtIconButton
          v-if="showCloseButton"
          :aria-label="'Close dialog'"
          :icon="CloseIcon"
          variant="ghost"
          size="xss"
          @click="handleClose"
        />
      </div>

      <!-- Description -->
      <p v-if="description" class="font-normal text-base leading-6 text-slate-500 w-full">
        {{ description }}
      </p>
    </template>
  </div>
</template>
