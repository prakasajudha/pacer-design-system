<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

const accordionContext = inject<{
  variant: ComputedRef<'line' | 'background'>;
  toggle: (value: string) => void;
}>('accordion');
const accordionItemContext = inject<{
  value: ComputedRef<string>;
  isOpen: ComputedRef<boolean>;
}>('accordionItem');

if (!accordionContext || !accordionItemContext) {
  throw new Error('PtAccordionTrigger must be used inside PtAccordionItem');
}

const value = accordionItemContext.value;
const isOpen = accordionItemContext.isOpen;
const variant = accordionContext.variant;
const isBackground = computed(() => variant.value === 'background');

const triggerClasses = computed(() =>
  cn(
    'flex w-full items-center justify-between gap-2 py-3 px-4 text-left text-sm font-medium leading-6 text-[#020617] outline-none transition-colors duration-200',
    isBackground.value
      ? 'bg-transparent hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted rounded-none'
      : 'bg-white hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-none'
  )
);

const handleClick = () => {
  accordionContext.toggle(value.value);
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    accordionContext.toggle(value.value);
  }
};
</script>

<template>
  <button
    type="button"
    :class="triggerClasses"
    :aria-expanded="isOpen"
    :aria-controls="`accordion-content-${value}`"
    :id="`accordion-trigger-${value}`"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <span class="flex-1 min-w-0"><slot /></span>
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
      class="shrink-0 transition-transform duration-200 ease-out"
      :class="{ 'rotate-180': isOpen }"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>
