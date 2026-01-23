<template>
  <div class="image-placeholder">
    <div class="placeholder-content">
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" fill="#f3f4f6" rx="8" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="100" y="60" text-anchor="middle" fill="#9ca3af" font-size="14">{{ label || 'Image Placeholder' }}</text>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<style scoped>
.image-placeholder {
  width: 100%;
  margin-top: 16px;
}

.placeholder-content {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  border: 1px solid #e5e7eb;
}

.placeholder-content svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Dark mode */
.dark .placeholder-content svg rect {
  fill: #2a2a2a;
  stroke: #404040;
}

.dark .placeholder-content svg text {
  fill: #666;
}
</style>
