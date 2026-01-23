<template>
  <div class="do-dont-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.do-dont-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .do-dont-grid {
    grid-template-columns: 1fr;
  }
}
</style>
