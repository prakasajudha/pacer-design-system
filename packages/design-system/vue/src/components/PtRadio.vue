<script setup lang="ts">
import { computed, useAttrs, ref, useSlots } from 'vue';
import { cn } from '../lib/utils';
import PtFormFieldLabel from './PtFormFieldLabel.vue';

export type RadioPosition = 'left' | 'right';

export interface RadioProps {
  /**
   * Controlled value (v-model)
   * Nilai yang terpilih dari radio group (akan dibandingkan dengan value prop)
   */
  modelValue?: string | number;

  /**
   * Value yang akan di-submit jika radio ini terpilih
   */
  value: string | number;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Name untuk kebutuhan HTML form submit dan grouping (semua radio dalam grup yang sama punya name yang sama).
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
   * Position of the radio relative to content
   */
  position?: RadioPosition;

  /**
   * Outlined container style
   */
  outlined?: boolean;

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
   * Error/destructive state: text merah; jika outlined maka border merah.
   */
  error?: boolean;
}

const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: undefined,
  disabled: false,
  name: '',
  id: '',
  label: '',
  description: '',
  position: 'left',
  outlined: false,
  isMandatory: false,
  showTooltip: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  change: [value: string | number];
}>();

const attrs = useAttrs();
const isFocused = ref(false);

const isChecked = computed(() => props.modelValue === props.value);
const slots = useSlots();
const hasContent = computed(
  () =>
    !!props.label ||
    !!props.description ||
    props.isMandatory ||
    (props.showTooltip && (!!slots['tooltip-information'] || (props.tooltipInformation != null && props.tooltipInformation !== '')))
);

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

const radioClasses = computed(() => {
  return cn(
    'relative shrink-0 w-4 h-4 rounded-full',
    'border border-solid transition-colors duration-200 ease-out',
    'focus-visible:outline-none',
    isChecked.value
      ? 'border-[#016BF8]'
      : props.error
        ? 'bg-white border-error-500'
        : props.disabled
          ? 'bg-slate-100 border-slate-300'
          : 'bg-white border-slate-300',
    !props.disabled && 'cursor-pointer'
  );
});

const radioBgStyle = computed(() => {
  if (isChecked.value) {
    return { backgroundColor: '#016BF8' };
  }
  return {};
});

const radioStyle = computed(() => {
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
  emit('update:modelValue', props.value);
  emit('change', props.value);
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
    <!-- HTML form submit support: submit value jika checked -->
    <input
      v-if="name"
      type="radio"
      :name="name"
      :value="String(value)"
      :checked="isChecked"
      :disabled="disabled"
      class="sr-only"
      :id="id || undefined"
    />

    <button
      type="button"
      :class="radioClasses"
      :style="{ ...radioBgStyle, ...radioStyle }"
      :id="id ? `${id}-button` : undefined"
      role="radio"
      :aria-checked="isChecked"
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
      <span class="sr-only">Radio</span>
      <!-- Dot icon (checked state) -->
      <div
        v-if="isChecked"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white pointer-events-none"
      />
    </button>

    <div v-if="hasContent" :class="contentClasses" @click="onToggle" @keydown.enter="onToggle" @keydown.space.prevent="onToggle" tabindex="0" role="button" :aria-label="label || 'Toggle radio'">
      <PtFormFieldLabel
        :label="label"
        :is-mandatory="isMandatory"
        :show-tooltip="showTooltip"
        :tooltip-information="tooltipInformation"
        :id="labelId"
        :class="cn(labelClasses, '[overflow-wrap:anywhere]')"
      >
        <template v-if="$slots['tooltip-information']" #tooltip-information>
          <slot name="tooltip-information" />
        </template>
      </PtFormFieldLabel>
      <div v-if="description" :id="descId" :class="descriptionClasses" style="overflow-wrap: anywhere; word-break: break-word;">{{ description }}</div>
    </div>
  </div>
</template>
