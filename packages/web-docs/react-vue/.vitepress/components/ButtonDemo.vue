<script setup>
import { ref } from 'vue';

const clickCount = ref(0);
const handleClick = () => {
  clickCount.value++;
};
</script>

<template>
  <div class="button-demo">
    <h3>Interactive Demo</h3>
    <div class="demo-section">
      <button class="btn btn-primary" @click="handleClick">Click me ({{ clickCount }})</button>
    </div>

    <h3>Variants</h3>
    <div class="demo-section">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-text">Text</button>
    </div>

    <h3>Sizes</h3>
    <div class="demo-section" style="align-items: center">
      <button class="btn btn-primary btn-sm">Small</button>
      <button class="btn btn-primary btn-md">Medium</button>
      <button class="btn btn-primary btn-lg">Large</button>
    </div>

    <h3>States</h3>
    <div class="demo-section">
      <button class="btn btn-primary" disabled>Disabled</button>
      <button class="btn btn-primary">Enabled</button>
    </div>
  </div>
</template>

<style scoped>
.button-demo {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

.button-demo h3 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.button-demo h3:first-child {
  margin-top: 0;
}

.demo-section {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
}

/* Button Styles */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: #005baa;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #004d91;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background: #4b5563;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #059669;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: #dc2626;
}

.btn-warning {
  background: #f59e0b;
  color: white;
}

.btn-warning:hover:not(:disabled) {
  background: #d97706;
}

.btn-info {
  background: #3b82f6;
  color: white;
}

.btn-info:hover:not(:disabled) {
  background: #2563eb;
}

.btn-text {
  background: transparent;
  color: #005baa;
  padding: 0.5rem 0.75rem;
}

.btn-text:hover:not(:disabled) {
  background: rgba(0, 91, 170, 0.1);
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
}
</style>
