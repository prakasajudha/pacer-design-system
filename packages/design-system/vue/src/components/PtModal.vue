<script setup lang="ts">
import { provide, ref, computed, watch, onMounted, onUnmounted, Teleport } from 'vue';
import { useSlots } from 'vue';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /**
   * Controlled open state (v-model:open)
   */
  open?: boolean;

  /**
   * Default open state untuk uncontrolled mode
   */
  defaultOpen?: boolean;

  /**
   * Ukuran modal: 'sm' | 'md' | 'lg'
   */
  size?: ModalSize;

  /**
   * Close modal ketika klik overlay/backdrop
   */
  closeOnOverlayClick?: boolean;

  /**
   * Close modal ketika tekan Escape key
   */
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: undefined,
  defaultOpen: false,
  size: 'md' as ModalSize,
  closeOnOverlayClick: true,
  closeOnEscape: true,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
  close: [];
}>();

const slots = useSlots();

// Internal state untuk uncontrolled mode
const internalOpen = ref(props.defaultOpen);
const isControlled = props.open !== undefined;

// Computed untuk reactive open state
const isOpen = computed(() => {
  return isControlled ? props.open : internalOpen.value;
});

const close = () => {
  if (!isControlled) {
    internalOpen.value = false;
  }
  emit('update:open', false);
  emit('close');
};

// Handle Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (props.closeOnEscape && e.key === 'Escape' && isOpen.value) {
    close();
  }
};

// Handle overlay click
const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    close();
  }
};

// Body scroll lock
const lockBodyScroll = () => {
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  }
};

const unlockBodyScroll = () => {
  document.body.style.overflow = '';
};

// Watch open state untuk body scroll lock
watch(isOpen, (newValue) => {
  if (newValue) {
    lockBodyScroll();
  } else {
    unlockBodyScroll();
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  if (isOpen.value) {
    lockBodyScroll();
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  unlockBodyScroll();
});

// Size classes
const sizeClasses = computed(() => {
  const currentSize = props.size ?? 'md';
  if (currentSize === 'sm') return 'max-w-[400px]';
  if (currentSize === 'md') return 'max-w-[500px]';
  return 'max-w-[600px]';
});

// Provide context untuk child components
provide('modalContext', {
  close,
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[1040] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/50" 
          aria-hidden="true"
          @click="handleOverlayClick"
        />

        <!-- Modal Container -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isOpen"
            class="relative z-[1050] w-full bg-white rounded-lg shadow-lg flex flex-col"
            :class="sizeClasses"
            @click.stop
          >
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
