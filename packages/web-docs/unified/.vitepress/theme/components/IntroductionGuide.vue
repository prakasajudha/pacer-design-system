<template>
  <div class="introduction-guide">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="section-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>Enterprise Design System</span>
          </div>
          <h1 class="hero-title">
            Welcome to <span class="gradient-text">PACER</span>
          </h1>
          <p class="hero-description">
            Consistent UI components across React, Vue, and Blazor
          </p>
        </div>
      </div>
    </section>

    <!-- What is PACER Section -->
    <section class="what-is-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">What is PACER?</h2>
          <p class="section-description">
            Enterprise-grade design system ensuring consistency, accessibility, and quality across all applications
          </p>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Key Features</h2>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 class="feature-title">Unified Design</h3>
            <p class="feature-description">
              Identical design across all frameworks
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3 class="feature-title">Multi-Framework</h3>
            <p class="feature-description">
              React, Vue, and Blazor support
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 class="feature-title">Accessibility First</h3>
            <p class="feature-description">
              WCAG 2.1 AA compliant
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 class="feature-title">Design Tokens</h3>
            <p class="feature-description">
              Colors, spacing, typography
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 class="feature-title">Developer Experience</h3>
            <p class="feature-description">
              TypeScript, Storybook, playground
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 class="feature-title">Production Ready</h3>
            <p class="feature-description">
              Optimized, tree-shakeable, SSR
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="architecture-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Architecture</h2>
          <p class="section-description">
            Built on design tokens and shared styles
          </p>
        </div>
        
        <div class="architecture-diagram">
          <div class="arch-layer arch-tokens">
            <div class="arch-card">
              <div class="arch-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <div class="arch-content">
                <h3 class="arch-title">Design Tokens</h3>
                <p class="arch-description">Colors • Spacing • Typography</p>
              </div>
            </div>
          </div>
          
          <div class="arch-arrow">↓</div>
          
          <div class="arch-layer arch-middle">
            <div class="arch-card">
              <div class="arch-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </svg>
              </div>
              <div class="arch-content">
                <h3 class="arch-title">Tailwind Preset</h3>
                <p class="arch-description">Shared Styles</p>
              </div>
            </div>
          </div>
          
          <div class="arch-arrow">↓</div>
          
          <div class="arch-layer arch-frameworks">
            <div class="arch-card">
              <div class="arch-icon arch-icon-react">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                  <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" stroke-width="1.5" fill="none" />
                </svg>
              </div>
              <div class="arch-content">
                <h3 class="arch-title">React</h3>
                <p class="arch-description">Components</p>
              </div>
            </div>
            
            <div class="arch-card">
              <div class="arch-icon arch-icon-vue">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 19h5l5-8.5L17 19h5L12 2z" fill="#42b883" />
                </svg>
              </div>
              <div class="arch-content">
                <h3 class="arch-title">Vue</h3>
                <p class="arch-description">Components</p>
              </div>
            </div>
            
            <div class="arch-card">
              <div class="arch-icon arch-icon-blazor">
                <span>⚡</span>
              </div>
              <div class="arch-content">
                <h3 class="arch-title">Blazor</h3>
                <p class="arch-description">Components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Component Parity Section -->
    <section class="parity-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Component Parity</h2>
          <p class="section-description">
            Available in all three frameworks with identical APIs
          </p>
        </div>
        
        <div class="parity-table-wrapper">
          <table class="parity-table">
            <thead>
              <tr>
                <th>Component</th>
                <th class="framework-col">React</th>
                <th class="framework-col">Vue</th>
                <th class="framework-col">Blazor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="component in components" :key="component.name">
                <td class="component-name">{{ component.name }}</td>
                <td class="framework-col">
                  <span v-if="component.react" class="status-icon status-check">✅</span>
                  <span v-else-if="component.react === false" class="status-icon status-progress">🚧</span>
                  <span v-else class="status-icon status-planned">📋</span>
                </td>
                <td class="framework-col">
                  <span v-if="component.vue" class="status-icon status-check">✅</span>
                  <span v-else-if="component.vue === false" class="status-icon status-progress">🚧</span>
                  <span v-else class="status-icon status-planned">📋</span>
                </td>
                <td class="framework-col">
                  <span v-if="component.blazor" class="status-icon status-check">✅</span>
                  <span v-else-if="component.blazor === false" class="status-icon status-progress">🚧</span>
                  <span v-else class="status-icon status-planned">📋</span>
                </td>
                <td>
                  <span :class="['status-badge', `status-${component.status}`]">
                    {{ component.statusText }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Design Philosophy Section -->
    <section class="philosophy-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Design Philosophy</h2>
        </div>
        
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="philosophy-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 class="philosophy-title">Consistency Over Customization</h3>
            <p class="philosophy-description">
              Prioritize consistency across the design system
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="philosophy-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <h3 class="philosophy-title">Accessibility is Not Optional</h3>
            <p class="philosophy-description">
              WCAG 2.1 Level AA standards out of the box
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="philosophy-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 class="philosophy-title">Performance Matters</h3>
            <p class="philosophy-description">
              Optimized for production with minimal bundle impact
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="philosophy-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 class="philosophy-title">Developer Happiness</h3>
            <p class="philosophy-description">
              Clear APIs, comprehensive docs, and great tooling
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Browser Support Section -->
    <section class="browser-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Browser Support</h2>
        </div>
        
        <div class="browser-grid">
          <div class="browser-card" v-for="browser in browsers" :key="browser.name">
            <div class="browser-icon">
              <span>{{ browser.icon }}</span>
            </div>
            <h3 class="browser-name">{{ browser.name }}</h3>
            <p class="browser-version">{{ browser.version }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="tech-stack-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Technology Stack</h2>
        </div>
        
        <div class="tech-stack-grid">
          <div class="tech-stack-card" v-for="stack in techStacks" :key="stack.name">
            <div class="tech-stack-icon">
              <span>{{ stack.icon }}</span>
            </div>
            <h3 class="tech-stack-name">{{ stack.name }}</h3>
            <div class="tech-stack-items">
              <span v-for="(tech, index) in stack.techs" :key="index" class="tech-item">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const components = [
  { name: 'Button', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Input', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Card', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Select', react: false, vue: false, blazor: false, status: 'beta', statusText: 'Beta' },
  { name: 'Checkbox', react: false, vue: false, blazor: false, status: 'beta', statusText: 'Beta' },
  { name: 'Modal', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Tabs', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Badge', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Avatar', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Progress', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Switch', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Radio', react: true, vue: true, blazor: true, status: 'stable', statusText: 'Stable' },
  { name: 'Textarea', react: null, vue: null, blazor: null, status: 'planned', statusText: 'Planned' },
  { name: 'Dropdown', react: null, vue: null, blazor: null, status: 'planned', statusText: 'Planned' },
];

const browsers = [
  { name: 'Chrome', version: 'Latest 2 versions', icon: '🌐' },
  { name: 'Firefox', version: 'Latest 2 versions', icon: '🦊' },
  { name: 'Safari', version: 'Latest 2 versions', icon: '🧭' },
  { name: 'Edge', version: 'Latest 2 versions', icon: '🔷' },
  { name: 'Mobile', version: 'iOS Safari 14+, Chrome Android', icon: '📱' },
];

const techStacks = [
  { 
    name: 'React', 
    icon: '⚛️',
    techs: ['React 18+', 'Tailwind CSS 3+', 'TypeScript 5+']
  },
  { 
    name: 'Vue', 
    icon: '🟢',
    techs: ['Vue 3.4+', 'Tailwind CSS 3+', 'TypeScript 5+', 'Vite']
  },
  { 
    name: 'Blazor', 
    icon: '⚡',
    techs: ['.NET 8+', 'Blazor Server/WebAssembly', 'Tailwind CSS 3+', 'C# 12+']
  },
];
</script>

<style scoped>
.introduction-guide {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 48px;
}

.section-container {
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
}

.parity-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
}

.parity-section {
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #1a1a1a;
  margin: 0 0 16px 0;
}

.section-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #666;
  margin: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Hero Section */
.hero-section {
  padding: 64px 0 48px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: #f0f7ff;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.hero-badge span {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #0156C6;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: #1a1a1a;
  margin: 0 0 24px 0;
}

.gradient-text {
  background: linear-gradient(166.69deg, #2563eb 0%, #0037b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #666;
  margin: 0;
}

/* What is Section */
.what-is-section {
  padding: 48px 0;
}

/* Features Section */
.features-section {
  padding: 48px 0;
  margin: 32px 0;
  width: 100%;
}

.features-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
  margin: 0;
}

.feature-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px 20px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-card:hover {
  border-color: #0156C6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.feature-icon {
  width: 40px;
  height: 40px;
  color: #0156C6;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1a1a1a;
  margin: 0;
}

.feature-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  margin: 0;
}

/* Architecture Section */
.architecture-section {
  padding: 48px 0;
}

.architecture-diagram {
  max-width: 900px;
  margin: 0 auto;
}

.arch-layer {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.arch-tokens {
  margin-bottom: 16px;
}

.arch-frameworks {
  flex-wrap: wrap;
}

.arch-arrow {
  text-align: center;
  font-size: 24px;
  color: #0156C6;
  margin: 8px 0;
  font-weight: 600;
}

.arch-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 200px;
  transition: all 0.2s ease;
}

.arch-card:hover {
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.arch-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f7ff;
  border-radius: 8px;
  color: #0156C6;
}

.arch-icon svg {
  width: 32px;
  height: 32px;
}

.arch-icon span {
  font-size: 32px;
}

.arch-icon-react {
  background: rgba(97, 218, 251, 0.1);
}

.arch-icon-vue {
  background: rgba(66, 184, 131, 0.1);
}

.arch-icon-blazor {
  background: rgba(81, 43, 212, 0.1);
}

.arch-content {
  flex: 1;
}

.arch-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.arch-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  margin: 0;
}

/* Parity Section */
.parity-section {
  padding: 48px 0;
  margin: 32px 0;
  width: 100%;
}

.parity-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.parity-table-wrapper {
  overflow-x: auto;
  width: 100%;
  margin: 0;
  padding: 0;
}

.parity-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  min-width: 100%;
  display: table;
}

.parity-table th {
  padding: 12px 16px;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #e5e7eb;
}

.parity-table th:first-child {
  width: 20%;
}

.parity-table th.framework-col {
  width: 15%;
}

.parity-table th:last-child {
  width: 20%;
}

.parity-table td {
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  border-bottom: 1px solid #f3f4f6;
}

.parity-table tbody tr:last-child td {
  border-bottom: none;
}

.component-name {
  font-weight: 500;
  color: #1a1a1a;
}

.framework-col {
  text-align: center;
}

.status-icon {
  font-size: 18px;
}

.status-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 11px;
}

.status-stable {
  color: #059669;
}

.status-beta {
  color: #d97706;
}

.status-planned {
  color: #6366f1;
}

/* Philosophy Section */
.philosophy-section {
  padding: 48px 0;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.philosophy-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.2s ease;
}

.philosophy-card:hover {
  border-color: #0156C6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.philosophy-icon {
  width: 48px;
  height: 48px;
  color: #0156C6;
  margin: 0 auto 16px;
}

.philosophy-icon svg {
  width: 100%;
  height: 100%;
}

.philosophy-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.philosophy-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin: 0;
}

/* Browser Section */
.browser-section {
  padding: 48px 0;
  margin: 32px 0;
  width: 100%;
}

.browser-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.browser-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  width: 100%;
  margin: 0;
}

.browser-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 12px;
  text-align: center;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.browser-card:hover {
  border-color: #0156C6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.browser-icon {
  font-size: 32px;
  line-height: 1;
  margin-bottom: 4px;
}

.browser-name {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1a1a1a;
  margin: 0;
}

.browser-version {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .introduction-guide {
    padding: 0 16px 32px;
  }

  .hero-title {
    font-size: 36px;
    line-height: 48px;
  }

  .hero-description {
    font-size: 18px;
    line-height: 28px;
  }

  .section-title {
    font-size: 28px;
    line-height: 36px;
  }

  .section-description {
    font-size: 16px;
    line-height: 24px;
  }

  .features-grid,
  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .arch-layer {
    flex-direction: column;
  }

  .arch-arrow {
    transform: rotate(90deg);
    margin: 16px 0;
  }

  .browser-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-stack-grid {
    grid-template-columns: 1fr;
  }
}

/* Technology Stack Section */
.tech-stack-section {
  padding: 48px 0;
  margin: 32px 0;
  width: 100%;
}

.tech-stack-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
  margin: 0;
}

.tech-stack-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s ease;
}

.tech-stack-card:hover {
  border-color: #0156C6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.tech-stack-icon {
  font-size: 32px;
  line-height: 1;
}

.tech-stack-name {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 0;
}

.tech-stack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  display: inline-block;
  padding: 4px 10px;
  background: #f9fafb;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #666;
}
</style>