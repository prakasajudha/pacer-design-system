<script setup lang="ts">
import { computed, useSlots } from 'vue';
import PtButton from './PtButton.vue';

export interface ModalFooterProps {
  /**
   * Callback ketika Cancel button diklik
   * Jika ada, akan auto-render Cancel button
   */
  onCancel?: () => void;

  /**
   * Callback ketika Confirm/Action button diklik
   * Jika ada, akan auto-render Confirm button
   */
  onConfirm?: () => void;

  /**
   * Text untuk Cancel button (default: "Cancel")
   */
  onCancelText?: string;

  /**
   * Text untuk Confirm button (default: "Continue")
   */
  onConfirmText?: string;
}

const props = withDefaults(defineProps<ModalFooterProps>(), {
  onCancel: undefined,
  onConfirm: undefined,
  onCancelText: 'Cancel',
  onConfirmText: 'Continue',
});

const emit = defineEmits<{
  cancel: [];
  confirm: [];
}>();

const slots = useSlots();

// Check if using children (custom footer)
const hasChildren = computed(() => {
  return !!slots.default;
});

// Check if should render default buttons
const shouldRenderButtons = computed(() => {
  return !hasChildren.value && (props.onCancel != null || props.onConfirm != null);
});

const showCancelButton = computed(() => typeof props.onCancel === 'function');
const showConfirmButton = computed(() => typeof props.onConfirm === 'function');

const handleCancel = () => {
  if (props.onCancel) {
    props.onCancel();
  }
  emit('cancel');
};

const handleConfirm = () => {
  if (props.onConfirm) {
    props.onConfirm();
  }
  emit('confirm');
};
</script>

<template>
  <div class="flex gap-2 items-center justify-end w-full p-6 pt-4">
    <!-- Custom Footer (children) -->
    <slot v-if="hasChildren" />

    <!-- Default Footer (auto-render buttons) -->
    <template v-else-if="shouldRenderButtons">
      <PtButton
        v-if="showCancelButton"
        variant="outline"
        size="sm"
        @click="handleCancel"
      >
        {{ onCancelText }}
      </PtButton>
      <PtButton
        v-if="showConfirmButton"
        variant="solid"
        size="sm"
        @click="handleConfirm"
      >
        {{ onConfirmText }}
      </PtButton>
    </template>
  </div>
</template>
