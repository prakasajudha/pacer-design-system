<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

const accordionContext = inject<{
  variant: ComputedRef<'line' | 'background'>;
}>('accordion');
const accordionItemContext = inject<{
  value: ComputedRef<string>;
  isOpen: ComputedRef<boolean>;
}>('accordionItem');

if (!accordionContext || !accordionItemContext) {
  throw new Error('PtAccordionContent must be used inside PtAccordionItem');
}

const value = accordionItemContext.value;
const isOpen = accordionItemContext.isOpen;
const variant = accordionContext.variant;
const isBackground = computed(() => variant.value === 'background');

const contentClasses = computed(() =>
  cn(
    'py-3 px-4 text-sm font-normal leading-5 text-[#64748B]',
    isBackground.value ? 'bg-transparent' : 'bg-white'
  )
);
</script>

<template>
  <div
    v-if="isOpen"
    :id="`accordion-content-${value}`"
    role="region"
    :aria-labelledby="`accordion-trigger-${value}`"
    :class="contentClasses"
  >
    <slot />
  </div>
</template>
