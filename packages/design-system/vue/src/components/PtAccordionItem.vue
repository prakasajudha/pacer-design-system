<script setup lang="ts">
import { provide, inject, computed, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

export interface AccordionItemProps {
  /**
   * Unique value for this item (used for open state and v-model)
   */
  value: string;
}

const props = defineProps<AccordionItemProps>();

const accordionContext = inject<{
  openValues: ComputedRef<string[]>;
  variant: ComputedRef<'line' | 'background'>;
  toggle: (value: string) => void;
}>('accordion');

if (!accordionContext) {
  throw new Error('PtAccordionItem must be used inside PtAccordion');
}

const isOpen = computed(() => accordionContext.openValues.value.includes(props.value));
const variant = computed(() => accordionContext.variant.value);

provide('accordionItem', {
  value: computed(() => props.value),
  isOpen,
});
</script>

<template>
  <div
    :class="
      cn(
        'w-full',
        variant === 'line' && 'border-b border-slate-200 last:border-b-0',
        variant === 'background' &&
          'overflow-hidden rounded-lg border-b border-[#CBD5E1] bg-[#F8FAFC]'
      )
    "
    :data-state="isOpen ? 'open' : 'closed'"
  >
    <slot />
  </div>
</template>
