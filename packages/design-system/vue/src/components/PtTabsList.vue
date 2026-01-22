<script setup lang="ts">
import { inject, computed, provide, useAttrs, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

export interface TabsListProps {
  /**
   * Stretch container dan labels untuk mengisi seluruh width
   */
  stretch?: boolean;
}

const props = withDefaults(defineProps<TabsListProps>(), {
  stretch: false,
});

const attrs = useAttrs();

// Inject context dari PtTabs
const tabsContext = inject<{
  activeValue: ComputedRef<string | number | undefined>;
  variant: ComputedRef<'default' | 'line'>;
  setActiveValue: (value: string | number) => void;
}>('tabs');

if (!tabsContext) {
  throw new Error('PtTabsList must be used inside PtTabs');
}

// Provide stretch untuk TabsTrigger children
provide('tabsList', {
  stretch: props.stretch,
});

const listClasses = computed(() => {
  const variant = tabsContext.variant.value;
  return cn(
    props.stretch ? 'grid relative grid-flow-col auto-cols-[1fr]' : 'flex relative',
    variant === 'default'
      ? props.stretch
        ? 'bg-slate-100 p-1 rounded-lg'
        : 'items-start bg-slate-100 p-1 rounded-lg'
      : props.stretch
        ? 'items-end border-b border-slate-300 p-0'
        : 'items-end border-b border-slate-300 p-0',
    // Default: tidak w-full (fit-content), Stretch: w-full dengan grid
    props.stretch ? 'w-full' : 'w-fit'
  );
});
</script>

<template>
  <div :class="listClasses" v-bind="attrs" role="tablist">
    <slot />
  </div>
</template>
