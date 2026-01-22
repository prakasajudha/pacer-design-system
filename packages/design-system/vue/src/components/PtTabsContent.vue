<script setup lang="ts">
import { inject, computed, useAttrs, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

export interface TabsContentProps {
  /**
   * Value untuk content ini (harus match dengan TabsTrigger value)
   */
  value: string | number;
}

const props = defineProps<TabsContentProps>();

const attrs = useAttrs();

// Inject context dari PtTabs
const tabsContext = inject<{
  activeValue: ComputedRef<string | number | undefined>;
  variant: ComputedRef<'default' | 'line'>;
  setActiveValue: (value: string | number) => void;
}>('tabs');

if (!tabsContext) {
  throw new Error('PtTabsContent must be used inside PtTabs');
}

const isActive = computed(() => tabsContext.activeValue.value === props.value);

const contentClasses = computed(() => {
  return cn('outline-none');
});
</script>

<template>
  <div
    v-if="isActive"
    :class="contentClasses"
    role="tabpanel"
    :aria-labelledby="`tab-${props.value}`"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>
