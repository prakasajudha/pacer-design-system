<script setup>
const radiusTokens = [
  { name: 'radius-none', value: '0px', example: 'Sharp corners' },
  { name: 'radius-sm', value: '4px', example: 'Small radius' },
  { name: 'radius-md', value: '6px', example: 'Medium radius' },
  { name: 'radius-lg', value: '8px', example: 'Large radius' },
  { name: 'radius-xl', value: '12px', example: 'Extra large' },
  { name: 'radius-2xl', value: '16px', example: 'Card radius' },
  { name: 'radius-3xl', value: '24px', example: 'Modal radius' },
  { name: 'radius-full', value: '9999px', example: 'Fully rounded' },
];
</script>

<template>
  <div class="radius-demo">
    <h3>Border Radius Scale</h3>
    <p class="description">Consistent border radius tokens for rounded corners.</p>

    <div class="radius-grid">
      <div class="radius-item" v-for="token in radiusTokens" :key="token.name">
        <div class="radius-label">
          <code>{{ token.name }}</code>
          <span class="value">{{ token.value }}</span>
        </div>
        <div class="radius-visual">
          <div
            class="radius-box"
            :style="{ borderRadius: token.value }"
            :class="{ 'full-radius': token.name === 'radius-full' }"
          ></div>
        </div>
        <div class="radius-example">{{ token.example }}</div>
      </div>
    </div>

    <h3>Usage Examples</h3>
    <div class="examples">
      <div class="example-row">
        <div class="example-card" style="border-radius: 6px">
          <div class="example-title">Button (radius-md)</div>
          <button class="demo-btn" style="border-radius: 6px">Click Me</button>
        </div>

        <div class="example-card" style="border-radius: 12px">
          <div class="example-title">Card (radius-xl)</div>
          <div class="demo-card">
            <h4>Card Title</h4>
            <p>This card uses radius-xl (12px)</p>
          </div>
        </div>

        <div class="example-card" style="border-radius: 16px">
          <div class="example-title">Modal (radius-2xl)</div>
          <div class="demo-modal">
            <p>Modal content with radius-2xl (16px)</p>
          </div>
        </div>
      </div>

      <div class="example-row">
        <div class="example-card">
          <div class="example-title">Badge (radius-full)</div>
          <div style="display: flex; gap: 8px">
            <span class="demo-badge">New</span>
            <span class="demo-badge">Hot</span>
            <span class="demo-badge">Popular</span>
          </div>
        </div>

        <div class="example-card">
          <div class="example-title">Avatar (radius-full)</div>
          <div style="display: flex; gap: 12px; align-items: center">
            <div class="demo-avatar">JD</div>
            <div class="demo-avatar">AB</div>
            <div class="demo-avatar">XY</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radius-demo {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

.radius-demo h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.radius-demo h3:first-child {
  margin-top: 0;
}

.description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.radius-item {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.radius-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.radius-label code {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand);
}

.radius-label .value {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
}

.radius-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  min-height: 100px;
}

.radius-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #005baa 0%, #60a5fa 100%);
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.radius-box.full-radius {
  width: 80px;
  height: 80px;
}

.radius-item:hover .radius-box {
  transform: scale(1.05);
}

.radius-example {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

.examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.example-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.example-card {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
}

.example-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.demo-btn {
  padding: 0.5rem 1.5rem;
  background: #005baa;
  color: white;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
}

.demo-btn:hover {
  background: #004d91;
}

.demo-card {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-card h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.demo-card p {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
}

.demo-modal {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.demo-modal p {
  margin: 0;
  font-size: 0.875rem;
}

.demo-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #005baa;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.demo-avatar {
  width: 48px;
  height: 48px;
  background: #005baa;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}
</style>
