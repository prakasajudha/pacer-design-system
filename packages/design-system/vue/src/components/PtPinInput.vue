<script setup lang="ts">
import { computed, ref, useSlots, watch, onUnmounted } from 'vue';
import { cn } from '../lib/utils';
import PtFormFieldLabel from './PtFormFieldLabel.vue';

const REVEAL_MS = 500;

export interface PinInputProps {
  /**
   * Jumlah digit (kotak)
   */
  length?: number;
  /**
   * Size: sm, md, lg
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Mask input (tampil • saat true)
   */
  mask?: boolean;
  /**
   * Label di atas. String atau isi slot #title (komponen/HTML).
   */
  title?: string;
  /**
   * Teks bantuan di bawah. String atau isi slot #description. Tidak ditampilkan saat error.
   */
  description?: string;
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
   * Alignment posisi group input di dalam container.
   */
  align?: 'left' | 'center' | 'right';
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
}

const props = withDefaults(defineProps<PinInputProps>(), {
  length: 4,
  size: 'md',
  mask: true,
  disabled: false,
  error: false,
  align: 'left',
  isMandatory: false,
  showTooltip: false,
});

const slots = useSlots();
const hasDescription = computed(() => !!slots.description || (props.description != null && props.description !== ''));

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const modelValue = defineModel<string>({ default: '' });

/** Toggle mask (tetap ada di kode, tidak ditampilkan di UI). */
const maskVisible = ref(false);
/** Indeks kotak yang sedang dalam periode "reveal" (karakter terlihat ~0.5s lalu mask lagi). Satu timeout per kotak. */
const revealingIndices = ref<Set<number>>(new Set());
const revealTimerIds = new Map<number, ReturnType<typeof setTimeout>>();

const EMPTY_CHAR = ' ';

function getValueStr(): string {
  const s = (modelValue.value || '').replace(/[^\d\s]/g, '').slice(0, props.length);
  return s.padEnd(props.length, EMPTY_CHAR);
}

const digits = computed(() => {
  return getValueStr()
    .split('')
    .map((c) => (c === EMPTY_CHAR ? '' : c));
});

const displayValue = (idx: number) => {
  const d = digits.value[idx];
  if (props.mask && !maskVisible.value && !revealingIndices.value.has(idx) && d) return '•';
  return d || '';
};

function startRevealTimeout(idx: number) {
  const existing = revealTimerIds.get(idx);
  if (existing != null) {
    clearTimeout(existing);
    revealTimerIds.delete(idx);
  }
  revealingIndices.value = new Set([...revealingIndices.value, idx]);
  const id = setTimeout(() => {
    revealingIndices.value = new Set([...revealingIndices.value].filter((i) => i !== idx));
    revealTimerIds.delete(idx);
  }, REVEAL_MS);
  revealTimerIds.set(idx, id);
}

onUnmounted(() => {
  revealTimerIds.forEach((id) => clearTimeout(id));
  revealTimerIds.clear();
});

const sizeStyles = computed(() => {
  const map = {
    sm: { box: 'w-9 h-9 text-sm', gap: 'gap-2', icon: 'w-4 h-4' },
    md: { box: 'w-10 h-10 text-base', gap: 'gap-2', icon: 'w-5 h-5' },
    lg: { box: 'w-12 h-12 text-lg', gap: 'gap-3', icon: 'w-6 h-6' },
  };
  return map[props.size];
});

const alignClass = computed(() => {
  if (props.align === 'center') return 'justify-center';
  if (props.align === 'right') return 'justify-end';
  return 'justify-start';
});

const textAlignClass = computed(() => {
  if (props.align === 'center') return 'text-center';
  if (props.align === 'right') return 'text-right';
  return 'text-left';
});

const boxClasses = (_idx: number) =>
  cn(
    'inline-flex items-center justify-center rounded-md border bg-white text-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
    sizeStyles.value.box,
    props.error
      ? 'border-solid border-error-500 focus:border-error-500 focus:ring-error-500 focus-visible:ring-error-500'
      : 'border-solid border-slate-300 focus:ring-brand-300 focus-visible:ring-brand-300'
  );

const inputRefs = ref<(HTMLInputElement | null)[]>([]);
const indices = computed(() => Array.from({ length: props.length }, (_, i) => i));

function setInputRef(i: number, el: unknown) {
  if (el) (inputRefs.value as (HTMLInputElement | null)[])[i] = el as HTMLInputElement;
}

function setValue(val: string) {
  const s = val.replace(/[^\d\s]/g, '').slice(0, props.length).padEnd(props.length, EMPTY_CHAR);
  modelValue.value = s;
  emit('update:modelValue', s);
}

function handleInput(idx: number, e: Event) {
  const el = e.target as HTMLInputElement;
  const v = (el.value || '').replace(/\D/g, '');
  if (v.length > 1) {
    const cur = getValueStr();
    const merged = cur.slice(0, idx) + v.slice(-1) + cur.slice(idx + 1);
    setValue(merged);
    if (props.mask) startRevealTimeout(idx);
    inputRefs.value[Math.min(idx + 1, props.length - 1)]?.focus();
    return;
  }
  const cur = getValueStr();
  const ch = v ? v.slice(-1) : EMPTY_CHAR;
  const next = cur.slice(0, idx) + ch + cur.slice(idx + 1);
  setValue(next);
  if (props.mask) startRevealTimeout(idx);
  if (v && idx < props.length - 1) inputRefs.value[idx + 1]?.focus();
}

function handleKeydown(idx: number, e: KeyboardEvent) {
  if (e.key !== 'Backspace') return;
  const cur = getValueStr();
  const hasDigit = cur[idx] !== EMPTY_CHAR && cur[idx] !== undefined;
  if (hasDigit) {
    const next = cur.slice(0, idx) + EMPTY_CHAR + cur.slice(idx + 1);
    setValue(next);
    e.preventDefault();
    return;
  }
  if (idx > 0) {
    inputRefs.value[idx - 1]?.focus();
    const next = cur.slice(0, idx - 1) + EMPTY_CHAR + cur.slice(idx);
    setValue(next);
    e.preventDefault();
  }
}

function handlePaste(e: ClipboardEvent) {
  e.preventDefault();
  const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, props.length);
  const cur = getValueStr();
  const next = (pasted + cur.slice(pasted.length)).slice(0, props.length).padEnd(props.length, EMPTY_CHAR);
  setValue(next);
  if (props.mask && pasted.length > 0) {
    for (let i = 0; i < pasted.length; i++) startRevealTimeout(i);
  }
  inputRefs.value[Math.min(pasted.length, props.length - 1)]?.focus();
}

watch(
  () => modelValue.value,
  (val) => {
    const next = (val || '').replace(/[^\d\s]/g, '').slice(0, props.length).padEnd(props.length, EMPTY_CHAR);
    if (next !== (modelValue.value || '')) modelValue.value = next;
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex w-full flex-col gap-1.5">
    <PtFormFieldLabel
      :label="props.title"
      :is-mandatory="props.isMandatory"
      :show-tooltip="props.showTooltip"
      :tooltip-information="props.tooltipInformation"
      :class="['w-full', textAlignClass, alignClass]"
    >
      <template #label>
        <slot name="title">{{ props.title }}</slot>
      </template>
      <template v-if="$slots['tooltip-information']" #tooltip-information>
        <slot name="tooltip-information" />
      </template>
    </PtFormFieldLabel>

    <div class="flex w-full items-center" :class="[sizeStyles.gap, alignClass]">
      <div class="flex items-center" :class="[sizeStyles.gap]">
        <template v-for="idx in indices" :key="idx">
          <input
            :ref="(el) => setInputRef(idx, el)"
            :value="displayValue(idx)"
            type="text"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="1"
            :disabled="props.disabled"
            :aria-label="`Digit ${idx + 1}`"
            :class="boxClasses(idx)"
            @input="handleInput(idx, $event)"
            @keydown="handleKeydown(idx, $event)"
            @paste="handlePaste"
          />
        </template>
      </div>
    </div>

    <label
      v-if="hasDescription && !props.error"
      class="block w-full text-sm font-normal leading-5 text-slate-500"
      :class="textAlignClass"
    >
      <slot name="description">{{ props.description }}</slot>
    </label>
    <label
      v-if="props.error && props.errorMessage"
      class="block w-full text-sm text-error-600"
      :class="textAlignClass"
      role="alert"
    >
      {{ props.errorMessage }}
    </label>
  </div>
</template>
