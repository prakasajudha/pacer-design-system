<script setup lang="ts">
import { provide, ref, computed, useAttrs } from 'vue';

export type TabsVariant = 'default' | 'line';

export interface TabsProps {
  /**
   * Controlled value (v-model) - value dari tab yang aktif
   */
  modelValue?: string | number;

  /**
   * Default value untuk uncontrolled mode
   */
  defaultValue?: string | number;

  /**
   * Variant style: 'default' (background) atau 'line' (border bottom)
   */
  variant?: TabsVariant;
}

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: undefined,
  defaultValue: undefined,
  variant: 'default',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  change: [value: string | number];
}>();

const attrs = useAttrs();

// Internal state untuk uncontrolled mode
const internalValue = ref<string | number | undefined>(props.defaultValue);
const isControlled = props.modelValue !== undefined;

// Computed untuk reactive activeValue
const activeValue = computed(() => {
  return isControlled ? props.modelValue : internalValue.value;
});

const setActiveValue = (value: string | number) => {
  if (!isControlled) {
    internalValue.value = value;
  }
  emit('update:modelValue', value);
  emit('change', value);
};

// Provide context untuk children (reactive)
provide('tabs', {
  activeValue,
  variant: computed(() => props.variant),
  setActiveValue,
});
</script>

<template>
  <div v-bind="attrs">
    <slot />
  </div>
</template>
