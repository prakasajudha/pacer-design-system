<template>
  <div class="guideline-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-description">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.guideline-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #1a1a1a;
  margin: 0;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666;
  margin: 0;
}

.section-description :deep(p) {
  margin: 0;
}

/* Dark mode */
.dark .section-title {
  color: #ffffff;
}

.dark .section-description {
  color: #a0a0a0;
}
</style>
