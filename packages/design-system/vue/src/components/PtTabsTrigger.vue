<script setup lang="ts">
import { inject, computed, useAttrs, type ComputedRef } from 'vue';
import { cn } from '../lib/utils';

export interface TabsTriggerProps {
  /**
   * Value untuk tab ini (harus unique dalam satu Tabs)
   */
  value: string | number;

  /**
   * Disabled state
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<TabsTriggerProps>(), {
  disabled: false,
});

const emit = defineEmits<{
  click: [];
}>();

const attrs = useAttrs();

// Inject context dari PtTabs
const tabsContext = inject<{
  activeValue: ComputedRef<string | number | undefined>;
  variant: ComputedRef<'default' | 'line'>;
  setActiveValue: (value: string | number) => void;
}>('tabs');

if (!tabsContext) {
  throw new Error('PtTabsTrigger must be used inside PtTabs');
}

const isSelected = computed(() => tabsContext.activeValue.value === props.value);
const variant = computed(() => tabsContext.variant.value);

// Inject stretch dari TabsList
const tabsListContext = inject<{ stretch: boolean }>('tabsList', { stretch: false });

const triggerClasses = computed(() => {
  const baseClasses = 'flex items-center justify-center min-w-[56px] relative transition-colors duration-200 ease-out';
  
  // Stretch logic: jika stretch true, menggunakan grid (tidak perlu flex-1)
  // jika false, semua tab shrink-0 (sama lebar)
  const stretchClass = tabsListContext.stretch ? '' : 'shrink-0';

  if (variant.value === 'default') {
    return cn(
      baseClasses,
      stretchClass,
      'px-3 py-1.5 rounded-md',
      isSelected.value
        ? 'bg-white text-[#016BF8] font-medium leading-5 shadow-sm'
        : 'bg-transparent text-slate-500 font-normal leading-5',
      !props.disabled && 'cursor-pointer',
      props.disabled && 'opacity-50 cursor-not-allowed'
    );
  } else {
    // Line variant - border harus sejajar dengan container border (1px)
    // Menggunakan negative margin untuk overlap border dengan container
    // Padding: pt-2 (8px), pb-3.5 (14px) untuk selected, pb-3.5 (14px) untuk unselected
    return cn(
      baseClasses,
      stretchClass,
      'px-4 pt-2',
      isSelected.value
        ? 'border-b-2 border-[#016BF8] pb-3.5 mb-[-1px] text-[#016BF8] font-semibold leading-none text-sm'
        : 'border-b-2 border-transparent pb-3.5 mb-[-1px] text-slate-500 font-normal leading-none text-sm',
      !props.disabled && 'cursor-pointer',
      props.disabled && 'opacity-50 cursor-not-allowed'
    );
  }
});

const onClick = () => {
  if (props.disabled) return;
  tabsContext.setActiveValue(props.value);
  emit('click');
};

const onKeyDown = (e: KeyboardEvent) => {
  if (props.disabled) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onClick();
  }
};
</script>

<template>
  <button
    type="button"
    :class="triggerClasses"
    :disabled="disabled"
    :aria-selected="isSelected"
    :aria-disabled="disabled || undefined"
    role="tab"
    v-bind="attrs"
    @click="onClick"
    @keydown="onKeyDown"
  >
    <slot />
  </button>
</template>
