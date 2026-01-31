<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue';
import { cn } from '../lib/utils';
import PtFormFieldLabel from './PtFormFieldLabel.vue';

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const slots = useSlots();

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaVariant = 'border' | 'background';

export interface TextareaProps {
  /**
   * Size: sm, md, lg
   */
  size?: TextareaSize;
  /**
   * Variant tampilan: border (putih + border) atau background (abu-abu isi, tanpa border).
   */
  variant?: TextareaVariant;
  /**
   * Label di atas. String atau isi slot #title (komponen/HTML).
   */
  title?: string;
  /**
   * Teks bantuan di bawah. String atau isi slot #description. Tidak ditampilkan saat error.
   */
  description?: string;
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
   * Nonaktif
   */
  disabled?: boolean;
  /**
   * State error
   */
  error?: boolean;
  /**
   * Pesan saat error
   */
  errorMessage?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Resize behavior: none, vertical, horizontal, both
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
  variant: 'border',
  disabled: false,
  error: false,
  rows: 4,
  resize: 'vertical',
  isMandatory: false,
  showTooltip: false,
});

const hasDescription = computed(() => !!slots.description || (props.description != null && props.description !== ''));

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const modelValue = defineModel<string>({ default: '' });

const sizeStyles: Record<TextareaSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-3 py-2.5 text-base',
  lg: 'px-3 py-3 text-lg',
};

const textareaId = computed(() => (attrs.id as string) ?? `pt-textarea-${Math.random().toString(36).slice(2, 11)}`);

const textareaClasses = computed(() => {
  const base =
    'block w-full min-w-0 min-h-[120px] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantClass =
    props.variant === 'background'
      ? 'bg-slate-50 text-slate-900 placeholder:text-slate-500'
      : 'bg-white text-slate-900 placeholder:text-slate-400';
  const disabledClass = props.disabled
    ? props.variant === 'background'
      ? 'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 disabled:placeholder-slate-400'
      : 'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-400 disabled:placeholder-slate-400'
    : '';
  const state = props.error
    ? 'border border-solid border-error-500 focus:border-error-500 focus:ring-error-500 focus-visible:ring-error-500'
    : props.variant === 'background'
      ? 'border-0 focus:ring-brand-300 focus-visible:ring-brand-300'
      : 'border border-solid border-slate-300 focus:ring-brand-300 focus-visible:ring-brand-300';
  const resize =
    props.resize === 'none'
      ? 'resize-none'
      : props.resize === 'vertical'
        ? 'resize-y'
        : props.resize === 'horizontal'
          ? 'resize-x'
          : 'resize';
  return cn(base, variantClass, sizeStyles[props.size], state, resize, disabledClass);
});

const labelClass = 'block text-sm font-medium text-slate-700 w-full';
const errorClass = 'block text-sm text-error-600 w-full';
const descClass = 'block text-sm font-normal leading-5 text-slate-500 w-full';

const restAttrs = computed(() => {
  const { class: _c, rows: _r, ...rest } = attrs;
  return rest;
});

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  modelValue.value = target?.value ?? '';
  emit('update:modelValue', modelValue.value);
};

const describedByIds = computed(() => {
  const parts: string[] = [];
  if (hasDescription.value && !props.error) parts.push(`${textareaId.value}-desc`);
  if (props.error && props.errorMessage) parts.push(`${textareaId.value}-err`);
  return parts.length ? parts.join(' ') : undefined;
});
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <PtFormFieldLabel
      :label="props.title"
      :is-mandatory="props.isMandatory"
      :show-tooltip="props.showTooltip"
      :tooltip-information="props.tooltipInformation"
      :html-for="textareaId"
      :class="labelClass"
    >
      <template #label>
        <slot name="title">{{ props.title }}</slot>
      </template>
      <template v-if="$slots['tooltip-information']" #tooltip-information>
        <slot name="tooltip-information" />
      </template>
    </PtFormFieldLabel>

    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :aria-invalid="props.error ? 'true' : undefined"
      :aria-describedby="describedByIds"
      :class="cn(textareaClasses, attrs?.class as string)"
      v-bind="restAttrs"
      @input="handleInput"
    />

    <span v-if="hasDescription && !props.error" :id="`${textareaId}-desc`" :class="descClass">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.error && props.errorMessage" :id="`${textareaId}-err`" :class="errorClass" role="alert">
      {{ props.errorMessage }}
    </span>
  </div>
</template>
