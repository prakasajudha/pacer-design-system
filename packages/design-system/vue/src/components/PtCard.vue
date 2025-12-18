<script setup lang="ts">
import { computed, useSlots } from 'vue';

export interface CardProps {
  /**
   * Variant visual dari card
   */
  variant?: 'default' | 'outlined' | 'elevated';
  
  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
});

const slots = useSlots();
const hasHeader = computed(() => !!slots.header);
const hasFooter = computed(() => !!slots.footer);

const cardClasses = computed(() => {
  const baseStyles = 'card bg-neutral-0 rounded-lg';
  
  const variantStyles = {
    default: 'shadow-md',
    outlined: 'border border-neutral-200',
    elevated: 'shadow-xl',
  };
  
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return [
    baseStyles,
    variantStyles[props.variant],
    paddingStyles[props.padding],
  ].join(' ');
});
</script>

<template>
  <div :class="cardClasses">
    <div
      v-if="hasHeader"
      class="card-header mb-4 pb-4 border-b border-neutral-200"
    >
      <slot name="header" />
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div
      v-if="hasFooter"
      class="card-footer mt-4 pt-4 border-t border-neutral-200"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
