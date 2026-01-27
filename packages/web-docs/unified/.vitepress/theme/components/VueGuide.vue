<template>
  <div class="framework-guide">
    <!-- Hero Section -->
    <section class="hero-section vue-hero">
      <div class="hero-content">
        <div class="framework-logo">
          <svg viewBox="0 0 128 128" class="vue-icon">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>
        </div>
        <div class="hero-badge">Vue 3</div>
        <h1 class="hero-title">PACER for Vue</h1>
        <p class="hero-description">
          Build stunning Vue 3 applications with Composition API-first components. 
          Full TypeScript support, works great with Nuxt 3.
        </p>
        <div class="hero-actions">
          <PtButton variant="solid" @click="scrollToInstall">Get Started</PtButton>
          <PtButton variant="secondary"@click="openStorybook">View Storybook</PtButton>
        </div>
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="facts-section">
      <div class="facts-grid">
        <div class="fact-card">
          <div class="fact-icon vue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>{{ componentCount }}+ Components</h3>
          <p>Vue 3 Composition API</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>v-model Support</h3>
          <p>Two-way binding built-in</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon typescript">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.84-1.15.84-.83 0-1.31-.43-1.67-1.03l-1.38.8zM10 17V9.74H12V8H6v1.74h2V17h2z"/>
            </svg>
          </div>
          <h3>Full TypeScript</h3>
          <p>Complete type definitions</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <h3>Nuxt 3 Ready</h3>
          <p>SSR compatible</p>
        </div>
      </div>
    </section>

    <!-- Installation -->
    <section id="install" class="install-section">
      <h2>Quick Start</h2>
      <p class="section-desc">Get up and running in under 2 minutes</p>
      
      <div class="steps">
        <!-- Step 1 -->
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Install the package</h3>
            <div class="code-block">
              <div class="code-tabs">
                <PtButton 
                  v-for="pm in ['npm', 'pnpm', 'yarn']" 
                  :key="pm"
                  :variant="activePm === pm ? 'solid' : 'ghost'"
                  size="sm"
                  @click="activePm = pm"
                >
                  {{ pm }}
                </PtButton>
              </div>
              <div class="code-content">
                <code>{{ installCommands[activePm] }}</code>
                <button class="copy-btn" @click="handleCopy(installCommands[activePm])">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Import styles</h3>
            <div class="code-block">
              <div class="code-content">
                <pre><code>// main.ts
import '@pacer-ui/vue/styles.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');</code></pre>
                <button class="copy-btn" @click="handleCopy(setupCode)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Start building</h3>
            <div class="code-block">
              <div class="code-content large">
                <pre><code>&lt;script setup lang="ts"&gt;
import { PtButton, PtInput, PtCard } from '@pacer-ui/vue';
import { ref } from 'vue';

const email = ref('');
&lt;/script&gt;

&lt;template&gt;
  &lt;PtCard&gt;
    &lt;PtInput v-model="email" placeholder="Enter email" /&gt;
    &lt;PtButton variant="solid"&gt;Subscribe&lt;/PtButton&gt;
  &lt;/PtCard&gt;
&lt;/template&gt;</code></pre>
                <button class="copy-btn" @click="handleCopy(usageCode)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Available Components -->
    <section class="components-section">
      <h2>Available Components</h2>
      <p class="section-desc">All components follow Vue 3 best practices</p>
      
      <div class="components-grid">
        <div 
          v-for="comp in components" 
          :key="comp.name" 
          class="component-card"
          @click="navigateToComponent(comp.link)"
        >
          <div class="component-icon" v-html="comp.icon"></div>
          <span class="component-name">{{ comp.name }}</span>
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="examples-section">
      <h2>Common Patterns</h2>
      <p class="section-desc">Vue 3 patterns with Composition API</p>

      <div class="example-tabs">
        <PtButton 
          v-for="ex in examples" 
          :key="ex.id"
          :variant="activeExample === ex.id ? 'solid' : 'outline'"
          size="sm"
          @click="activeExample = ex.id"
        >
          {{ ex.title }}
        </PtButton>
      </div>

      <div class="example-content">
        <div class="example-preview">
          <div class="preview-label">Preview</div>
          <div class="preview-area" v-html="currentExample.preview"></div>
        </div>
        <div class="example-code">
          <div class="code-header">
            <span>{{ currentExample.title }}.vue</span>
            <button class="copy-btn light" @click="handleCopy(currentExample.code)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              Copy
            </button>
          </div>
          <pre><code>{{ currentExample.code }}</code></pre>
        </div>
      </div>
    </section>

    <!-- Framework Integration -->
    <section class="integration-section">
      <h2>Works With</h2>
      <div class="integration-grid">
        <div class="integration-card">
          <div class="integration-logo nuxt">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="#00DC82" d="M13.4 2.5a3 3 0 0 0-5.1 0L.6 15.1a3 3 0 0 0 2.5 4.6h5.3l6-9.9-1-1.7-4.2 7H4.5L10.8 5l5.2 8.6h3.6l-6.2-11.1zM23.4 15.1l-5.2-8.6-1.5 2.5 4.3 7.1h-4.6l-2.5 4.2h9.9a3 3 0 0 0 2.5-4.6l-2.9-.6z"/>
            </svg>
          </div>
          <span>Nuxt 3</span>
        </div>
        <div class="integration-card">
          <div class="integration-logo vite">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="#646CFF" d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316z"/>
            </svg>
          </div>
          <span>Vite</span>
        </div>
        <div class="integration-card">
          <div class="integration-logo vue">
            <svg viewBox="0 0 128 128" width="32" height="32">
              <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
              <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
            </svg>
          </div>
          <span>Vue CLI</span>
        </div>
        <div class="integration-card">
          <div class="integration-logo">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
          </div>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="practices-section">
      <h2>Best Practices</h2>
      <div class="practices-grid">
        <div class="practice-card do">
          <div class="practice-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span>Do</span>
          </div>
          <ul>
            <li>Use <code>&lt;script setup&gt;</code> for cleaner code</li>
            <li>Use <code>v-model</code> for two-way binding</li>
            <li>Leverage TypeScript for type safety</li>
            <li>Use <code>ref</code> and <code>reactive</code> appropriately</li>
          </ul>
        </div>
        <div class="practice-card dont">
          <div class="practice-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            <span>Don't</span>
          </div>
          <ul>
            <li>Don't mutate props directly</li>
            <li>Don't use Options API with PACER</li>
            <li>Don't skip error handling</li>
            <li>Don't ignore TypeScript warnings</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section vue-cta">
      <h2>Ready to build?</h2>
      <p>Explore all components and start building your Vue application</p>
      <div class="cta-actions">
        <PtButton variant="solid" @click="navigateToComponents">Browse Components</PtButton>
        <PtButton variant="secondary" @click="navigateToTokens">View Design Tokens</PtButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PtButton, toast } from '@pacer-ui/vue';

const activePm = ref('npm');
const activeExample = ref('vmodel');
const componentCount = 20;

const installCommands: Record<string, string> = {
  npm: 'npm install @pacer-ui/vue',
  pnpm: 'pnpm add @pacer-ui/vue',
  yarn: 'yarn add @pacer-ui/vue',
};

const setupCode = `import '@pacer-ui/vue/styles.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`;

const usageCode = `<script setup lang="ts">
import { PtButton, PtInput, PtCard } from '@pacer-ui/vue';
import { ref } from 'vue';

const email = ref('');
<\/script>

<template>
  <PtCard>
    <PtInput v-model="email" placeholder="Enter email" />
    <PtButton variant="solid">Subscribe</PtButton>
  </PtCard>
</template>`;

const components = [
  { name: 'PtButton', link: '/components/button', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="2"/></svg>' },
  { name: 'PtInput', link: '/components/input', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="7" y2="12"/></svg>' },
  { name: 'PtCard', link: '/components/card', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>' },
  { name: 'PtModal', link: '/components/modal', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/></svg>' },
  { name: 'PtBadge', link: '/components/badge', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/></svg>' },
  { name: 'PtAvatar', link: '/components/avatar', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { name: 'PtTabs', link: '/components/tabs', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>' },
  { name: 'PtToast', link: '/components/toast', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/></svg>' },
];

const examples = [
  {
    id: 'vmodel',
    title: 'v-model',
    preview: '<div style="display:flex;flex-direction:column;gap:12px;"><div style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;">Hello Vue!</div><div style="font-size:13px;color:#64748b;">Value: Hello Vue!</div></div>',
    code: `<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const message = ref('Hello Vue!');
<\/script>

<template>
  <PtInput v-model="message" />
  <p>Value: {{ message }}</p>
</template>`
  },
  {
    id: 'reactive',
    title: 'Reactive Form',
    preview: '<div style="display:flex;flex-direction:column;gap:8px;"><div style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;">John</div><div style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;">john@email.com</div></div>',
    code: `<script setup lang="ts">
import { PtInput, PtButton } from '@pacer-ui/vue';
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: ''
});

const handleSubmit = () => {
  console.log(form);
};
<\/script>

<template>
  <PtInput v-model="form.name" placeholder="Name" />
  <PtInput v-model="form.email" placeholder="Email" />
  <PtButton @click="handleSubmit">Submit</PtButton>
</template>`
  },
  {
    id: 'computed',
    title: 'Computed Validation',
    preview: '<div style="display:flex;flex-direction:column;gap:4px;"><div style="padding:8px 12px;border:2px solid #ef4444;border-radius:6px;">bad-email</div><div style="font-size:12px;color:#ef4444;">Invalid email format</div></div>',
    code: `<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref, computed } from 'vue';

const email = ref('');

const error = computed(() => {
  if (!email.value) return '';
  return email.value.includes('@') 
    ? '' 
    : 'Invalid email format';
});

const status = computed(() => 
  error.value ? 'error' : 'default'
);
<\/script>

<template>
  <PtInput 
    v-model="email"
    :status="status"
    :helper-text="error"
  />
</template>`
  },
];

const currentExample = computed(() => {
  return examples.find(e => e.id === activeExample.value) || examples[0];
});

const handleCopy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied!', 'Code copied to clipboard', { duration: 2000 });
  } catch (err) {
    toast.error('Failed to copy', 'Please try again', { duration: 2000 });
  }
};

const scrollToInstall = () => {
  document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
};

const openStorybook = () => {
  window.open('https://pacer-design-system-vue.vercel.app/', '_blank');
};

const navigateToComponent = (link: string) => {
  window.location.href = link;
};

const navigateToComponents = () => {
  window.location.href = '/components/';
};

const navigateToTokens = () => {
  window.location.href = '/tokens';
};
</script>

<style scoped>
.framework-guide {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 100%;
}

/* Hero Section - Vue themed */
.hero-section.vue-hero {
  text-align: center;
  padding: 64px 24px;
  background: linear-gradient(135deg, #1a2e1a 0%, #2d3e2d 100%);
  color: white;
  margin: 0 -24px;
}

.framework-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.vue-icon {
  width: 100%;
  height: 100%;
}

.hero-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.hero-description {
  font-size: 18px;
  color: #a3b8a3;
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* Facts Section */
.facts-section {
  padding: 48px 24px;
  background: #f8fafc;
  margin: 0 -24px;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.fact-card {
  text-align: center;
  padding: 24px 16px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.fact-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0fdf4;
  border-radius: 12px;
  color: #42b883;
}

.fact-icon.vue {
  background: #f0fdf4;
  color: #42b883;
}

.fact-icon.typescript {
  background: #e8f4fd;
  color: #3178C6;
}

.fact-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 4px;
}

.fact-card p {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}

/* Install Section */
.install-section {
  padding: 48px 24px;
}

.install-section h2,
.components-section h2,
.examples-section h2,
.integration-section h2,
.practices-section h2,
.cta-section h2 {
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
  text-align: center;
}

.section-desc {
  font-size: 16px;
  color: #64748b;
  text-align: center;
  margin: 0 0 32px;
}

.steps {
  max-width: 700px;
  margin: 0 auto;
}

.step {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
}

.step-number {
  width: 32px;
  height: 32px;
  background: #42b883;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 12px;
}

.code-block {
  background: #1e293b;
  border-radius: 10px;
  overflow: hidden;
}

.code-tabs {
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
}

.code-content {
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
}

.code-content.large {
  align-items: flex-start;
}

.code-content code,
.code-content pre {
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #e2e8f0;
  margin: 0;
  white-space: pre;
}

.code-content pre {
  overflow-x: auto;
}

.copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.15s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.copy-btn.light {
  padding: 6px 12px;
  font-size: 12px;
}

/* Components Section */
.components-section {
  padding: 48px 24px;
  background: #f8fafc;
  margin: 0 -24px;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.component-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
}

.component-card:hover {
  border-color: #42b883;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.1);
}

.component-icon {
  color: #64748b;
}

.component-name {
  font-size: 14px;
  font-weight: 500;
  color: #334155;
}

/* Examples Section */
.examples-section {
  padding: 48px 24px;
}

.example-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
}

.example-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.example-preview {
  padding: 24px;
  background: white;
}

.preview-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 16px;
}

.preview-area {
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed #e2e8f0;
}

.example-code {
  background: #1e293b;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
  color: #94a3b8;
  font-size: 13px;
}

.example-code pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}

.example-code code {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #e2e8f0;
}

/* Integration Section */
.integration-section {
  padding: 48px 24px;
  background: #f8fafc;
  margin: 0 -24px;
}

.integration-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.integration-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 32px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.integration-logo {
  color: #0f172a;
}

.integration-card span {
  font-size: 14px;
  font-weight: 500;
  color: #334155;
}

/* Practices Section */
.practices-section {
  padding: 48px 24px;
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.practice-card {
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.practice-card.do {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.practice-card.dont {
  background: #fef2f2;
  border-color: #fecaca;
}

.practice-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-weight: 600;
}

.practice-card.do .practice-header {
  color: #16a34a;
}

.practice-card.dont .practice-header {
  color: #dc2626;
}

.practice-card ul {
  margin: 0;
  padding-left: 20px;
}

.practice-card li {
  font-size: 14px;
  color: #334155;
  margin-bottom: 8px;
}

.practice-card li:last-child {
  margin-bottom: 0;
}

.practice-card code {
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}

/* CTA Section - Vue themed */
.cta-section.vue-cta {
  padding: 64px 24px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  margin: 0 -24px;
  text-align: center;
  color: white;
}

.cta-section h2 {
  color: white;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
}

.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }
  
  .facts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .example-content {
    grid-template-columns: 1fr;
  }
  
  .practices-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions,
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* Dark mode */
.dark .hero-section.vue-hero {
  background: linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 100%);
}

.dark .facts-section,
.dark .components-section,
.dark .integration-section {
  background: #0f172a;
}

.dark .fact-card,
.dark .component-card,
.dark .integration-card {
  background: #1e293b;
  border-color: #334155;
}

.dark .fact-card h3,
.dark .component-name,
.dark .install-section h2,
.dark .components-section h2,
.dark .examples-section h2,
.dark .integration-section h2,
.dark .practices-section h2 {
  color: #f8fafc;
}

.dark .fact-card p,
.dark .section-desc {
  color: #94a3b8;
}

.dark .step-content h3 {
  color: #f8fafc;
}

.dark .practice-card {
  background: #1e293b;
  border-color: #334155;
}

.dark .practice-card li {
  color: #e2e8f0;
}
</style>
