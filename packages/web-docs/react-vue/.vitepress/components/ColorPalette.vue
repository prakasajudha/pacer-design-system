<script setup>
</script>

<template>
  <div class="color-palette">
    <h3>Primary Colors (Pertamina Blue)</h3>
    <div class="color-grid">
      <div class="color-card" v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" :key="shade">
        <div 
          class="color-swatch" 
          :style="{ 
            background: getColor('primary', shade),
            color: shade >= 500 ? 'white' : '#111827'
          }"
        >
          {{ shade === 500 ? '500 ★' : shade }}
        </div>
        <div class="color-info">
          <code>{{ getColor('primary', shade) }}</code>
        </div>
      </div>
    </div>

    <h3>Semantic Colors</h3>
    <div class="semantic-colors">
      <div class="color-row">
        <div class="color-swatch large" style="background: #10b981; color: white;">
          <strong>Success</strong>
          <code>#10b981</code>
        </div>
        <div class="color-swatch large" style="background: #f59e0b; color: white;">
          <strong>Warning</strong>
          <code>#f59e0b</code>
        </div>
        <div class="color-swatch large" style="background: #ef4444; color: white;">
          <strong>Danger</strong>
          <code>#ef4444</code>
        </div>
        <div class="color-swatch large" style="background: #3b82f6; color: white;">
          <strong>Info</strong>
          <code>#3b82f6</code>
        </div>
      </div>
    </div>

    <h3>Neutral Colors</h3>
    <div class="color-grid">
      <div class="color-card" v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]" :key="'gray-' + shade">
        <div 
          class="color-swatch" 
          :style="{ 
            background: getGrayColor(shade),
            color: shade >= 500 ? 'white' : '#111827',
            border: shade <= 100 ? '1px solid #e5e7eb' : 'none'
          }"
        >
          {{ shade }}
        </div>
        <div class="color-info">
          <code>{{ getGrayColor(shade) }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getColor(name, shade) {
      const colors = {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#005BAA',
          600: '#004d91',
          700: '#003f78',
          800: '#00315f',
          900: '#002346'
        }
      };
      return colors[name][shade];
    },
    getGrayColor(shade) {
      const grays = {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      };
      return grays[shade];
    }
  }
};
</script>

<style scoped>
.color-palette {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

.color-palette h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.color-palette h3:first-child {
  margin-top: 0;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.color-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.color-swatch {
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.color-swatch.large {
  height: 100px;
  flex-direction: column;
  gap: 0.5rem;
}

.color-swatch strong {
  font-size: 1rem;
}

.color-info {
  text-align: center;
}

.color-info code {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.semantic-colors {
  margin-bottom: 2rem;
}

.color-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}
</style>
