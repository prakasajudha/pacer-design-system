<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '../lib/utils';

export type SwitchPosition = 'left' | 'right';
export type SwitchSize = 'md' | 'sm';

export interface SwitchProps {
  /**
   * Controlled value (v-model)
   */
  modelValue?: boolean;

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
   * Position of the switch relative to content
   */
  position?: SwitchPosition;

  /**
   * Outlined container style
   */
  outlined?: boolean;

  /**
   * Active background color (hex/rgb/rgba/var). Default sesuai Figma (hex).
   */
  bgColor?: string;

  /**
   * Error state: text merah; jika outlined maka border merah.
   */
  error?: boolean;

  /**
   * Size variant (from Figma)
   */
  size?: SwitchSize;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  name: '',
  id: '',
  label: '',
  description: '',
  position: 'left',
  outlined: false,
  bgColor: '#016BF8',
  error: false,
  size: 'md',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  change: [value: boolean];
}>();

const attrs = useAttrs();

const isChecked = computed(() => !!props.modelValue);
const hasContent = computed(() => !!props.label || !!props.description);

const labelId = computed(() => (props.id ? `${props.id}-label` : undefined));
const descId = computed(() => (props.id ? `${props.id}-description` : undefined));

const sizes = {
  md: {
    track: 'w-[44px] h-[24px]',
    thumb: 'w-[20px] h-[20px]',
    translateOn: 'translate-x-5', // 20px
  },
  sm: {
    track: 'w-[36px] h-[20px]',
    thumb: 'w-[16px] h-[16px]',
    translateOn: 'translate-x-4', // 16px
  },
} as const;

const wrapperClasses = computed(() => {
  return cn(
    'flex items-center',
    props.position === 'right' ? 'flex-row-reverse justify-between' : 'gap-4',
    props.outlined ? 'border rounded-lg p-4 gap-4' : 'p-0',
    props.outlined && !hasContent.value ? 'p-0 border-0' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    props.outlined && (props.error ? 'border-error-500' : 'border-slate-300')
  );
});

const trackClasses = computed(() => {
  const cfg = sizes[props.size];
  return cn(
    // Padding 2px untuk inset thumb (match Figma)
    'relative inline-flex shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary-300',
    props.error ? 'border border-error-500' : 'border border-transparent',
    cfg.track,
    !props.disabled && 'cursor-pointer',
    // default off bg is #CBD5E1 (slate-300) in Figma
    !isChecked.value && 'bg-slate-300'
  );
});

const trackStyle = computed(() => {
  if (!isChecked.value) return {};
  return { backgroundColor: props.bgColor } as const;
});

const thumbClasses = computed(() => {
  const cfg = sizes[props.size];
  return cn(
    'pointer-events-none inline-block rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-out',
    cfg.thumb,
    isChecked.value ? cfg.translateOn : 'translate-x-0'
  );
});

const contentClasses = computed(() => {
  return cn(
    'flex flex-col gap-1 min-w-0 flex-1',
    props.position === 'right' ? 'items-start text-left' : 'items-start text-left'
  );
});

const labelClasses = computed(() => {
  return cn(
    'text-sm font-medium leading-none break-words',
    props.error ? 'text-error-600' : 'text-slate-950'
  );
});

const descriptionClasses = computed(() => {
  return cn(
    'text-sm font-normal leading-5 text-slate-500 break-words'
  );
});

const onToggle = () => {
  if (props.disabled) return;
  const next = !isChecked.value;
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
</script>

<template>
  <div :class="wrapperClasses" v-bind="attrs" @click="onToggle">
    <!-- HTML form submit support: always submit true/false -->
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="String(isChecked)"
      :disabled="disabled"
    />

    <button
      type="button"
      :class="trackClasses"
      :style="trackStyle"
      role="switch"
      :id="id || undefined"
      :aria-checked="isChecked"
      :aria-disabled="disabled || undefined"
      :aria-invalid="error || undefined"
      :aria-labelledby="labelId"
      :aria-describedby="descId"
      :disabled="disabled"
      @click="onToggle"
      @keydown="onKeyDown"
      @click.stop
    >
      <span class="sr-only">Toggle</span>
      <span :class="thumbClasses" />
    </button>

    <div v-if="label || description" :class="contentClasses">
      <div v-if="label" :id="labelId" :class="labelClasses" style="overflow-wrap: anywhere; word-break: break-word;">{{ label }}</div>
      <div v-if="description" :id="descId" :class="descriptionClasses" style="overflow-wrap: anywhere; word-break: break-word;">{{ description }}</div>
    </div>
  </div>
</template>

