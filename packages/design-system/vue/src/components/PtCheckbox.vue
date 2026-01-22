<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue';
import { cn } from '../lib/utils';

export type CheckboxPosition = 'left' | 'right';

export interface CheckboxProps {
  /**
   * Controlled value (v-model)
   * true = checked, false = unchecked
   */
  modelValue?: boolean;

  /**
   * Indeterminate state (shows minus icon instead of checkmark)
   */
  indeterminate?: boolean;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Name untuk kebutuhan HTML form submit (akan emit value true/false via hidden input).
   */
  name?: string;

  /**
   * Optional id untuk a11y binding (aria-labelledby / aria-describedby).
   */
  id?: string;

  /**
   * Label text (optional)
   */
  label?: string;

  /**
   * Description text (optional)
   */
  description?: string;

  /**
   * Position of the checkbox relative to content
   */
  position?: CheckboxPosition;

  /**
   * Outlined container style
   */
  outlined?: boolean;

  /**
   * Error/destructive state: text merah; jika outlined maka border merah.
   */
  error?: boolean;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  indeterminate: false,
  disabled: false,
  name: '',
  id: '',
  label: '',
  description: '',
  position: 'left',
  outlined: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const attrs = useAttrs();
const isFocused = ref(false);

const isChecked = computed(() => props.modelValue === true);
const isIndeterminate = computed(() => props.indeterminate === true);
const hasContent = computed(() => !!props.label || !!props.description);

const labelId = computed(() => (props.id ? `${props.id}-label` : undefined));
const descId = computed(() => (props.id ? `${props.id}-description` : undefined));

const wrapperClasses = computed(() => {
  return cn(
    'flex items-start',
    props.position === 'right' ? 'flex-row-reverse justify-between' : 'gap-2',
    props.outlined ? 'border rounded-lg p-4 gap-4' : 'p-0',
    props.outlined && !hasContent.value ? 'p-0 border-0' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    props.outlined && (props.error ? 'border-error-500' : 'border-slate-300')
  );
});

const checkboxClasses = computed(() => {
  const isSelected = isChecked.value || isIndeterminate.value;
  return cn(
    'relative shrink-0 w-4 h-4 rounded',
    'border border-solid transition-colors duration-200 ease-out',
    'focus-visible:outline-none',
    isSelected
      ? 'border-[#016BF8]'
      : props.error
        ? 'bg-white border-error-500'
        : props.disabled
          ? 'bg-slate-100 border-slate-300'
          : 'bg-white border-slate-300',
    !props.disabled && 'cursor-pointer'
  );
});

const checkboxBgStyle = computed(() => {
  const isSelected = isChecked.value || isIndeterminate.value;
  if (isSelected) {
    return { backgroundColor: '#016BF8' };
  }
  return {};
});

const checkboxStyle = computed(() => {
  if (!isFocused.value) return {};
  // Focus ring: 2px white + 4px brand-300
  return {
    boxShadow: '0px 0px 0px 2px white, 0px 0px 0px 4px #016BF8',
  };
});

const contentClasses = computed(() => {
  return cn('flex flex-col gap-1 min-w-0 flex-1', props.position === 'right' ? 'items-start text-left' : 'items-start text-left');
});

const labelClasses = computed(() => {
  return cn('text-sm font-medium leading-none', props.error ? 'text-error-600' : 'text-slate-950');
});

const descriptionClasses = computed(() => {
  return cn('text-sm font-normal leading-5 text-slate-500');
});

const onToggle = (e?: Event) => {
  if (props.disabled) return;
  e?.preventDefault();
  e?.stopPropagation();
  // Cycle: false -> true -> false
  // If indeterminate, go to false (uncheck)
  const next = isIndeterminate.value ? false : isChecked.value ? false : true;
  emit('update:modelValue', next);
  emit('change', next);
};

const onKeyDown = (e: KeyboardEvent) => {
  if (props.disabled) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onToggle();
  }
};

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
};
</script>

<template>
  <div :class="wrapperClasses" v-bind="attrs">
    <!-- HTML form submit support: submit true/false (intermediate treated as false) -->
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="isChecked ? 'true' : 'false'"
      :disabled="disabled"
    />

    <button
      type="button"
      :class="checkboxClasses"
      :style="{ ...checkboxBgStyle, ...checkboxStyle }"
      :id="id || undefined"
      :aria-checked="isIndeterminate ? 'mixed' : isChecked"
      :aria-disabled="disabled || undefined"
      :aria-invalid="error || undefined"
      :aria-labelledby="labelId"
      :aria-describedby="descId"
      :disabled="disabled"
      @click="onToggle"
      @keydown="onKeyDown"
      @focus="onFocus"
      @blur="onBlur"
    >
      <span class="sr-only">Checkbox</span>
      <!-- Checkmark icon (checked state) -->
      <svg
        v-if="isChecked && !isIndeterminate"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] text-white pointer-events-none"
        fill="none"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 3.5L5.25 9.91667L2.33333 7"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <!-- Minus icon (intermediate state) -->
      <svg
        v-else-if="isIndeterminate"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] text-white pointer-events-none"
        fill="none"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 7H10.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <div v-if="label || description" :class="contentClasses" @click="onToggle" @keydown.enter="onToggle" @keydown.space.prevent="onToggle" tabindex="0" role="button" :aria-label="label || 'Toggle checkbox'">
      <div v-if="label" :id="labelId" :class="labelClasses" style="overflow-wrap: anywhere; word-break: break-word;">{{ label }}</div>
      <div v-if="description" :id="descId" :class="descriptionClasses" style="overflow-wrap: anywhere; word-break: break-word;">{{ description }}</div>
    </div>
  </div>
</template>
