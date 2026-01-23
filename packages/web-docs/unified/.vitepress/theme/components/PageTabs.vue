<template>
  <div class="page-tabs">
    <PtTabs v-model="activeTab" variant="line" :default-value="defaultValue">
      <PtTabsList stretch>
        <PtTabsTrigger
          v-for="tab in tabs"
          :key="tab"
          :value="tab"
        >
          {{ tab }}
        </PtTabsTrigger>
      </PtTabsList>
      
      <PtTabsContent
        v-for="tab in tabs"
        :key="tab"
        :value="tab"
      >
        <slot :name="tab" />
      </PtTabsContent>
    </PtTabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue';

interface PageTabsProps {
  tabs: string[];
  defaultTab?: string;
  stretch?: boolean;
}

const props = withDefaults(defineProps<PageTabsProps>(), {
  defaultTab: undefined,
  stretch: false,
});

const activeTab = ref<string | number>('');

const defaultValue = computed(() => {
  if (props.defaultTab && props.tabs.includes(props.defaultTab)) {
    return props.defaultTab;
  }
  return props.tabs[0] ?? '';
});

watchEffect(() => {
  activeTab.value = defaultValue.value;
});
</script>

<style scoped>
.page-tabs {
  margin: 2rem 0;
  padding: 0 5em !important
}
</style>
