<script setup lang="ts">
import { computed, useSlots } from 'vue';
import PtTooltip from './PtTooltip.vue';
import { cn } from '../lib/utils';

export interface FormFieldLabelProps {
  label?: string;
  isMandatory?: boolean;
  showTooltip?: boolean;
  /** Isi tooltip (string). Untuk komponen/slot gunakan slot #tooltip-information. */
  tooltipInformation?: string;
  htmlFor?: string;
  id?: string;
  className?: string;
}

const props = withDefaults(defineProps<FormFieldLabelProps>(), {
  isMandatory: false,
  showTooltip: false,
});

const slots = useSlots();
const hasLabelSlot = computed(() => !!slots.label);
const hasLabelContent = computed(
  () => hasLabelSlot.value || (props.label != null && props.label !== '')
);
const hasTooltipSlot = computed(() => !!slots['tooltip-information']);
const hasTooltipContent = computed(
  () => props.showTooltip && (hasTooltipSlot.value || (props.tooltipInformation != null && props.tooltipInformation !== ''))
);
const showRow = computed(() => hasLabelContent.value || props.isMandatory || hasTooltipContent.value);

const wrapperClass = computed(() =>
  cn('flex items-center gap-1.5 text-sm font-medium text-neutral-700', props.className)
);
</script>

<template>
  <label
    v-if="showRow && htmlFor"
    :id="id"
    :for="htmlFor"
    :class="wrapperClass"
  >
    <span v-if="hasLabelContent" class="min-w-0"><slot name="label">{{ label }}</slot></span>
    <span v-if="isMandatory" class="text-error-600 shrink-0" aria-hidden>*</span>
    <PtTooltip v-if="hasTooltipContent" position="top">
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-[#0065e9] hover:text-[#0052b8] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-300"
        aria-label="Information"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shrink-0"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>
      <template #title>
        <slot name="tooltip-information">{{ tooltipInformation }}</slot>
      </template>
    </PtTooltip>
  </label>
  <div
    v-else-if="showRow"
    :id="id"
    :class="wrapperClass"
    role="group"
  >
    <span v-if="hasLabelContent" class="min-w-0"><slot name="label">{{ label }}</slot></span>
    <span v-if="isMandatory" class="text-error-600 shrink-0" aria-hidden>*</span>
    <PtTooltip v-if="hasTooltipContent" position="top">
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-[#0065e9] hover:text-[#0052b8] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-300"
        aria-label="Information"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shrink-0"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>
      <template #title>
        <slot name="tooltip-information">{{ tooltipInformation }}</slot>
      </template>
    </PtTooltip>
  </div>
</template>
