<script setup lang="ts">
import { computed, useSlots, useId } from 'vue';
import PtFormFieldLabel from './PtFormFieldLabel.vue';

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
   * Jika true, tampilkan asterisk merah (*) setelah label (wajib).
   */
  isMandatory?: boolean;
  /**
   * Jika true, tampilkan icon informasi dengan tooltip di samping label.
   */
  showTooltip?: boolean;
  /**
   * Isi tooltip saat showTooltip true. String; untuk komponen gunakan slot #tooltip-information.
   */
  tooltipInformation?: string;
  /**
   * State error
   */
  error?: boolean;
  /**
   * Pesan saat error (ditampilkan di bawah input)
   */
  errorMessage?: string;
  /**
   * Pesan helper text (ditampilkan ketika tidak error)
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
  error: false,
  isMandatory: false,
  showTooltip: false,
});

const inputId = useId();

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
    <PtFormFieldLabel
      :label="label"
      :is-mandatory="isMandatory"
      :show-tooltip="showTooltip"
      :tooltip-information="tooltipInformation"
      :html-for="inputId"
    >
      <template v-if="$slots['tooltip-information']" #tooltip-information>
        <slot name="tooltip-information" />
      </template>
    </PtFormFieldLabel>

    <div class="relative">
      <div
        v-if="hasStartIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500"
      >
        <slot name="start-icon" />
      </div>
      
      <input
        :id="inputId"
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
      v-if="error && errorMessage"
      class="text-sm text-error-600"
      role="alert"
    >
      {{ errorMessage }}
    </p>
    
    <p
      v-else-if="helperText"
      class="text-sm text-neutral-500"
    >
      {{ helperText }}
    </p>
  </div>
</template>
