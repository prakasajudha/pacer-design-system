<script setup>
const shadowTokens = [
  { name: 'shadow-sm', value: '0 1px 2px rgba(0,0,0,0.05)', usage: 'Subtle elevation' },
  { name: 'shadow-md', value: '0 4px 6px rgba(0,0,0,0.1)', usage: 'Cards, dropdowns' },
  { name: 'shadow-lg', value: '0 10px 15px rgba(0,0,0,0.1)', usage: 'Modals, popovers' },
  { name: 'shadow-xl', value: '0 20px 25px rgba(0,0,0,0.15)', usage: 'Large modals' },
  { name: 'shadow-2xl', value: '0 25px 50px rgba(0,0,0,0.25)', usage: 'Maximum elevation' },
];
</script>

<template>
  <div class="shadow-demo">
    <h3>Shadow Scale</h3>
    <p class="description">Elevation system for depth and visual hierarchy.</p>

    <div class="shadow-grid">
      <div class="shadow-item" v-for="token in shadowTokens" :key="token.name">
        <div class="shadow-label">
          <code>{{ token.name }}</code>
        </div>
        <div class="shadow-visual">
          <div class="shadow-box" :style="{ boxShadow: token.value }"></div>
        </div>
        <div class="shadow-usage">{{ token.usage }}</div>
      </div>
    </div>

    <h3>Usage Examples</h3>
    <div class="examples">
      <div class="example-grid">
        <div class="example-card">
          <div class="demo-card" style="box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)">
            <h4>shadow-sm</h4>
            <p>Subtle card</p>
          </div>
        </div>

        <div class="example-card">
          <div class="demo-card" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)">
            <h4>shadow-md</h4>
            <p>Standard card</p>
          </div>
        </div>

        <div class="example-card">
          <div class="demo-card" style="box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)">
            <h4>shadow-lg</h4>
            <p>Elevated card</p>
          </div>
        </div>

        <div class="example-card">
          <div class="demo-card" style="box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15)">
            <h4>shadow-xl</h4>
            <p>Modal card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-demo {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

.shadow-demo h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.shadow-demo h3:first-child {
  margin-top: 0;
}

.description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.shadow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.shadow-item {
  text-align: center;
}

.shadow-label {
  margin-bottom: 1rem;
}

.shadow-label code {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand);
}

.shadow-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.shadow-box {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.shadow-item:hover .shadow-box {
  transform: translateY(-4px);
}

.shadow-usage {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.examples {
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.example-card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-card {
  width: 100%;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s;
}

.demo-card:hover {
  transform: translateY(-2px);
}

.demo-card h4 {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  color: #005baa;
  font-weight: 600;
}

.demo-card p {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
}
</style>
