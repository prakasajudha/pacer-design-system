<script setup lang="ts">
import { computed, useSlots } from 'vue';

export interface InputProps {
  /**
   * Model value
   */
  modelValue?: string | number;
  
  /**
   * Label untuk input
   */
  label?: string;
  
  /**
   * Pesan error
   */
  error?: string;
  
  /**
   * Pesan helper text
   */
  helperText?: string;
  
  /**
   * Full width input
   */
  fullWidth?: boolean;
  
  /**
   * Input type
   */
  type?: string;
  
  /**
   * Placeholder
   */
  placeholder?: string;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  fullWidth: false,
  type: 'text',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const slots = useSlots();
const hasStartIcon = computed(() => !!slots['start-icon']);
const hasEndIcon = computed(() => !!slots['end-icon']);

const inputClasses = computed(() => {
  const baseStyles = 'input block px-3 py-2 border rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0';
  
  const stateStyles = props.error
    ? 'border-error-500 focus:border-error-500 focus:ring-error-200'
    : 'border-neutral-300 focus:border-brand-primary-500 focus:ring-brand-primary-200';
  
  return [
    baseStyles,
    stateStyles,
    hasStartIcon.value && 'pl-10',
    hasEndIcon.value && 'pr-10',
    props.fullWidth && 'w-full',
  ].filter(Boolean).join(' ');
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div :class="['space-y-1', fullWidth && 'w-full']">
    <label
      v-if="label"
      class="block text-sm font-medium text-neutral-700"
    >
      {{ label }}
    </label>
    
    <div class="relative">
      <div
        v-if="hasStartIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500"
      >
        <slot name="start-icon" />
      </div>
      
      <input
        :class="inputClasses"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
      />
      
      <div
        v-if="hasEndIcon"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-500"
      >
        <slot name="end-icon" />
      </div>
    </div>
    
    <p
      v-if="error"
      class="text-sm text-error-600"
      role="alert"
    >
      {{ error }}
    </p>
    
    <p
      v-else-if="helperText"
      class="text-sm text-neutral-500"
    >
      {{ helperText }}
    </p>
  </div>
</template>
