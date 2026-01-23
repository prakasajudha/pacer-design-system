<template>
  <div :class="['do-dont-item', type === 'do' ? 'do-item' : 'dont-item']">
    <div class="do-dont-header">
      <svg v-if="type === 'do'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M13.5 4.5L6 12l-3.5-3.5" stroke="#10b981"/>
      </svg>
      <svg v-else viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444"/>
      </svg>
      <span>{{ type === 'do' ? 'Do' : "Don't" }}</span>
    </div>
    <div :class="['do-dont-line', type === 'do' ? 'do-line' : 'dont-line']"></div>
    <div class="do-dont-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'do' | 'dont';
}>();
</script>

<style scoped>
.do-dont-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.do-dont-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.do-dont-header svg {
  width: 20px;
  height: 20px;
}

.do-item .do-dont-header {
  color: #10b981;
}

.dont-item .do-dont-header {
  color: #ef4444;
}

.do-dont-line {
  height: 2px;
  width: 100%;
}

.do-line {
  background: #10b981;
}

.dont-line {
  background: #ef4444;
}

.do-dont-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.do-dont-content :deep(.do-dont-example) {
  width: 100%;
}

.do-dont-content :deep(.example-box) {
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
}

.do-dont-content :deep(.do-box) {
  background: #d1fae5;
  color: #065f46;
}

.do-dont-content :deep(.dont-box) {
  background: #fee2e2;
  color: #991b1b;
}

.do-dont-content :deep(p),
.do-dont-content :deep(.do-dont-text) {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin: 0;
}

/* Dark mode */
.dark .do-dont-content :deep(p),
.dark .do-dont-content :deep(.do-dont-text) {
  color: #a0a0a0;
}
</style>
