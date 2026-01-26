<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue';
import { cn } from '../lib/utils';

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
   * Posisi: left atau center (default left)
   */
  position?: 'left' | 'center';
  /**
   * Label di atas
   */
  title?: string;
  /**
   * Teks bantuan di bawah
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
}

const props = withDefaults(defineProps<PinInputProps>(), {
  length: 4,
  size: 'md',
  mask: true,
  position: 'left',
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const modelValue = defineModel<string>({ default: '' });

/** Toggle mask (tetap ada di kode, tidak ditampilkan di UI). */
const maskVisible = ref(false);
/** Indeks kotak yang sedang dalam periode "reveal" (karakter terlihat ~0.5s lalu mask lagi). Satu timeout per kotak. */
const revealingIndices = ref<Set<number>>(new Set());
const revealTimerIds = new Map<number, ReturnType<typeof setTimeout>>();

const digits = computed(() => {
  const s = (modelValue.value || '').padEnd(props.length, '');
  return s.slice(0, props.length).split('');
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

const boxClasses = (idx: number) =>
  cn(
    'inline-flex items-center justify-center rounded-md border bg-white text-center font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
    sizeStyles.value.box,
    props.error
      ? 'border-error-500 focus:border-error-500 focus:ring-error-500 focus-visible:ring-error-500'
      : 'border-slate-300 focus:ring-brand-300 focus-visible:ring-brand-300'
  );

const inputRefs = ref<(HTMLInputElement | null)[]>([]);
const indices = computed(() => Array.from({ length: props.length }, (_, i) => i));

function getValueFromDigits(): string {
  return digits.value.join('').replace(/\s/g, '');
}

function setValue(val: string) {
  const sanitized = val.replace(/\D/g, '').slice(0, props.length);
  modelValue.value = sanitized;
  emit('update:modelValue', sanitized);
}

function handleInput(idx: number, e: Event) {
  const el = e.target as HTMLInputElement;
  const v = (el.value || '').replace(/\D/g, '');
  if (v.length > 1) {
    const cur = getValueFromDigits();
    const merged = cur.slice(0, idx) + v.slice(-1) + cur.slice(idx + 1);
    setValue(merged.slice(0, props.length));
    if (props.mask) startRevealTimeout(idx);
    inputRefs.value[Math.min(idx + 1, props.length - 1)]?.focus();
    return;
  }
  const arr = [...digits.value];
  arr[idx] = v;
  setValue(arr.join(''));
  if (props.mask) startRevealTimeout(idx);
  if (v && idx < props.length - 1) inputRefs.value[idx + 1]?.focus();
}

function handleKeydown(idx: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !digits.value[idx] && idx > 0) {
    inputRefs.value[idx - 1]?.focus();
    const arr = [...digits.value];
    arr[idx - 1] = '';
    setValue(arr.join(''));
  }
}

function handlePaste(e: ClipboardEvent) {
  e.preventDefault();
  const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, props.length);
  setValue(pasted);
  if (props.mask && pasted.length > 0) {
    for (let i = 0; i < pasted.length; i++) startRevealTimeout(i);
  }
  inputRefs.value[Math.min(pasted.length, props.length - 1)]?.focus();
}

watch(
  () => modelValue.value,
  (val) => {
    const next = (val || '').replace(/\D/g, '').slice(0, props.length);
    if (next !== (modelValue.value || '')) modelValue.value = next;
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col gap-1.5" :class="{ 'items-center': position === 'center' }">
    <label v-if="title" class="block text-sm font-medium text-slate-700 w-full" :class="{ 'text-center': position === 'center' }">
      {{ title }}
    </label>

    <div class="flex w-full items-center" :class="[sizeStyles.gap, position === 'center' ? 'justify-center' : 'justify-start']">
      <div class="flex items-center" :class="[sizeStyles.gap]">
        <template v-for="idx in indices" :key="idx">
          <input
            :ref="(el) => { if (el) inputRefs[idx] = el as HTMLInputElement }"
            :value="displayValue(idx)"
            type="text"
            inputmode="numeric"
            autocomplete="one-time-code"
            maxlength="1"
            :disabled="disabled"
            :aria-label="`Digit ${idx + 1}`"
            :class="boxClasses(idx)"
            @input="handleInput(idx, $event)"
            @keydown="handleKeydown(idx, $event)"
            @paste="handlePaste"
          />
        </template>
      </div>
    </div>

    <p v-if="description" class="text-sm font-normal leading-5 text-slate-500 w-full" :class="{ 'text-center': position === 'center' }">
      {{ description }}
    </p>
    <p v-if="error && errorMessage" class="text-sm text-error-600 w-full" role="alert" :class="{ 'text-center': position === 'center' }">
      {{ errorMessage }}
    </p>
  </div>
</template>
