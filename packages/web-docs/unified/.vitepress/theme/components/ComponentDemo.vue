<template>
  <div class="component-demo">
    <!-- Preview Section -->
    <div class="demo-preview">
      <slot></slot>
    </div>

    <!-- Framework Tabs -->
    <div class="demo-tabs">
      <button
        v-for="framework in frameworks"
        :key="framework"
        :class="['demo-tab', { active: activeFramework === framework }]"
        @click="activeFramework = framework"
      >
        {{ framework }}
      </button>
    </div>

    <!-- Code Display -->
    <div class="demo-code">
      <div v-show="activeFramework === 'React'">
        <slot name="react"></slot>
      </div>
      <div v-show="activeFramework === 'Vue'">
        <slot name="vue"></slot>
      </div>
      <div v-show="activeFramework === 'Blazor'">
        <slot name="blazor"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeFramework = ref('React');
const frameworks = ['React', 'Vue', 'Blazor'];
</script>

<style scoped>
.component-demo :deep(.language-tsx),
.component-demo :deep(.language-vue),
.component-demo :deep(.language-razor) {
  margin: 0;
}
</style>
