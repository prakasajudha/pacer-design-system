<script setup>
const spacingTokens = [
  { name: 'spacing-1', value: '4px', usage: 'Tight spacing' },
  { name: 'spacing-2', value: '8px', usage: 'Small spacing' },
  { name: 'spacing-3', value: '12px', usage: 'Medium-small spacing' },
  { name: 'spacing-4', value: '16px', usage: 'Medium spacing' },
  { name: 'spacing-5', value: '20px', usage: 'Medium-large spacing' },
  { name: 'spacing-6', value: '24px', usage: 'Large spacing' },
  { name: 'spacing-8', value: '32px', usage: 'Extra large spacing' },
  { name: 'spacing-10', value: '40px', usage: 'Section spacing' },
  { name: 'spacing-12', value: '48px', usage: 'Layout spacing' },
  { name: 'spacing-16', value: '64px', usage: 'Page spacing' },
];
</script>

<template>
  <div class="spacing-demo">
    <h3>Spacing Scale</h3>
    <p class="description">Consistent spacing tokens for margins, padding, and gaps.</p>
    
    <div class="spacing-grid">
      <div class="spacing-item" v-for="token in spacingTokens" :key="token.name">
        <div class="spacing-label">
          <code>{{ token.name }}</code>
          <span class="value">{{ token.value }}</span>
        </div>
        <div class="spacing-visual">
          <div class="spacing-box" :style="{ width: token.value, height: token.value }"></div>
        </div>
        <div class="spacing-usage">{{ token.usage }}</div>
      </div>
    </div>

    <h3>Spacing Examples</h3>
    <div class="examples">
      <div class="example-card">
        <div class="example-title">Card with spacing-4 padding</div>
        <div class="example-content" style="padding: 16px; background: #f3f4f6; border-radius: 8px;">
          <p style="margin: 0;">This card uses <code>spacing-4 (16px)</code> for padding</p>
        </div>
      </div>

      <div class="example-card">
        <div class="example-title">Buttons with spacing-3 gap</div>
        <div class="example-content" style="display: flex; gap: 12px;">
          <button class="demo-btn">Button 1</button>
          <button class="demo-btn">Button 2</button>
          <button class="demo-btn">Button 3</button>
        </div>
        <p class="example-note">Gap between buttons: <code>spacing-3 (12px)</code></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spacing-demo {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

.spacing-demo h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.spacing-demo h3:first-child {
  margin-top: 0;
}

.description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.spacing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.spacing-item {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.spacing-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.spacing-label code {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand);
}

.spacing-label .value {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-family: monospace;
}

.spacing-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  min-height: 80px;
}

.spacing-box {
  background: #005BAA;
  border-radius: 4px;
  transition: transform 0.2s;
}

.spacing-item:hover .spacing-box {
  transform: scale(1.1);
}

.spacing-usage {
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

.example-card {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.example-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.example-content {
  margin-bottom: 0.5rem;
}

.example-note {
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.demo-btn {
  padding: 0.5rem 1rem;
  background: #005BAA;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
}

.demo-btn:hover {
  background: #004d91;
}
</style>
