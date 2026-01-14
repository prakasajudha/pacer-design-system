<template>
  <div class="w-full">
    <div class="flex items-center gap-2 border-b border-slate-200">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        class="px-3 py-2 text-sm font-medium transition-colors border-b-2"
        :class="
          activeTab === tab
            ? 'border-brand-300 text-slate-900'
            : 'border-transparent text-slate-500 hover:text-slate-900'
        "
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="pt-4">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

export type DocsTabsProps = {
  tabs: string[];
  defaultTab?: string;
};

const props = defineProps<DocsTabsProps>();
const activeTab = ref<string>('');

watchEffect(() => {
  const fallback = props.tabs[0] ?? '';
  activeTab.value = props.defaultTab && props.tabs.includes(props.defaultTab) ? props.defaultTab : fallback;
});
</script>


