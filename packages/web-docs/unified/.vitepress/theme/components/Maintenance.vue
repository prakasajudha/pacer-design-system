<template>
  <div class="maintenance">
    <div class="maintenance-card">
      <div class="maintenance-icon" aria-hidden="true">⚙️</div>
      <h1 class="maintenance-title">Under Maintenance</h1>
      <p class="maintenance-text">
        We're updating our systems. Please check back soon.
      </p>
      <p class="maintenance-sub">— PACER Design System</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple static maintenance component
</script>

<style scoped>
.maintenance {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1.5rem;
}

.maintenance-card {
  text-align: center;
  max-width: 24rem;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.maintenance-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.maintenance-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem;
  font-family: 'Manrope', sans-serif;
}

.maintenance-text {
  font-size: 0.9375rem;
  color: #64748b;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.maintenance-sub {
  font-size: 0.8125rem;
  color: #94a3b8;
  margin: 0;
}
</style>

