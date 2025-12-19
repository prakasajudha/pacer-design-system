<script setup lang="ts">
import { computed } from 'vue';

export interface ButtonProps {
  /**
   * Variant visual dari button
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'link';
  
  /**
   * Ukuran button
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  loading: false,
  disabled: false,
});

const buttonClasses = computed(() => {
  const baseStyles = 'btn inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  const variantStyles = {
    primary: 'bg-brand-500 text-base-white hover:bg-brand-600 focus:ring-brand-200',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300 border border-slate-300',
    success: 'bg-green-500 text-base-white hover:bg-green-600 focus:ring-green-200',
    warning: 'bg-yellow-500 text-slate-900 hover:bg-yellow-600 focus:ring-yellow-200',
    error: 'bg-red-500 text-base-white hover:bg-red-600 focus:ring-red-200',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
    link: 'bg-transparent text-brand-500 hover:text-brand-600 hover:underline focus:ring-brand-200',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-lg',
  };
  
  return [
    baseStyles,
    variantStyles[props.variant],
    sizeStyles[props.size],
    props.fullWidth && 'w-full',
  ].filter(Boolean).join(' ');
});
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    type="button"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    
    <slot name="start-icon" v-if="!loading" />
    
    <slot />
    
    <slot name="end-icon" v-if="!loading" />
  </button>
</template>
