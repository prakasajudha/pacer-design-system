<script setup lang="ts">
import { provide, ref, computed } from 'vue';
import { cn } from '../lib/utils';

export type AccordionType = 'single' | 'multiple';
export type AccordionVariant = 'line' | 'background';

export interface AccordionProps {
  /**
   * Controlled value (v-model) - array of open item values
   */
  modelValue?: string | string[];

  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string | string[];

  /**
   * Type: 'single' (one open at a time) or 'multiple' (many open). Default "single"
   */
  type?: AccordionType;

  /**
   * Variant style: "line" or "background"
   */
  variant?: AccordionVariant;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  modelValue: undefined,
  defaultValue: undefined,
  type: 'single',
  variant: 'line',
});

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]];
  change: [value: string | string[]];
}>();

function normalizeToArray(v: string | string[] | undefined): string[] {
  if (v === undefined) return [];
  return Array.isArray(v) ? v : v === '' ? [] : [v];
}

const internalValue = ref<string[]>(normalizeToArray(props.defaultValue));
const isControlled = computed(() => props.modelValue !== undefined);
const openValues = computed(() =>
  isControlled.value ? normalizeToArray(props.modelValue) : internalValue.value
);

const toggle = (itemValue: string) => {
  const current = openValues.value;
  const next = current.includes(itemValue)
    ? current.filter((v) => v !== itemValue)
    : props.type === 'single'
      ? [itemValue]
      : [...current, itemValue];

  if (!isControlled.value) {
    internalValue.value = next;
  }
  const emitted = props.type === 'single' ? (next[0] ?? '') : next;
  emit('update:modelValue', emitted);
  emit('change', emitted);
};

provide('accordion', {
  openValues,
  type: computed(() => props.type),
  variant: computed(() => props.variant),
  toggle,
});
</script>

<template>
  <div
    :class="
      cn(
        'w-full',
        variant === 'background' && 'flex flex-col gap-2'
      )
    "
  >
    <slot />
  </div>
</template>
