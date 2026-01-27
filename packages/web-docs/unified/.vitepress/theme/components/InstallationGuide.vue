<template>
  <div class="installation-guide">
    <!-- Framework Guide Section -->
    <section class="framework-guide-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Choose Your Framework</h2>
          <p class="section-description">
            PACER works seamlessly across React, Vue, and Blazor. Select your framework to get started.
          </p>
          <div class="info-badges">
            <div class="info-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 2v4M8 10v4M2 8h4M10 8h4" />
              </svg>
              <span>Multi-Framework</span>
            </div>
            <div class="info-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 2L2 8l6 6 6-6-6-6z" />
              </svg>
              <span>Type-Safe</span>
            </div>
            <div class="info-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 1v14M1 8h14" />
              </svg>
              <span>Production Ready</span>
            </div>
          </div>
          <div class="version-requirement">
            <span class="requirement-label">Minimum requirements:</span>
            <span class="requirement-text">Node.js 18+ or 20+</span>
          </div>
        </div>
        
        <div class="frameworks-grid">
          <div 
            v-for="framework in frameworks" 
            :key="framework.id"
            class="framework-card"
            @click="selectFramework(framework.id)"
            :class="{ active: selectedFramework === framework.id }"
          >
            <div class="framework-icon-wrapper">
              <div :class="['framework-icon', `framework-icon-${framework.id}`]">
                <component :is="framework.icon" />
              </div>
            </div>
            <h3 class="framework-title">{{ framework.name }}</h3>
            <p class="framework-description">{{ framework.description }}</p>
            <div class="framework-badge">
              <span>{{ framework.version }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Steps Section -->
    <section v-if="selectedFramework" class="installation-steps-section">
      <div class="section-container">
        <div class="steps-header">
          <h2 class="section-title">Installation</h2>
          <p class="section-description">
            To manually set up PACER in your {{ getFrameworkName() }} project, follow the steps below.
          </p>
        </div>

        <div class="steps-container">
          <div 
            v-for="(step, index) in getSteps()" 
            :key="index"
            class="step-card"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p v-if="step.description" class="step-description">{{ step.description }}</p>
              
              <!-- Code Block -->
              <div v-if="step.code" class="code-block-wrapper">
                <div class="code-block-header">
                  <span class="code-block-label">{{ step.codeLabel || 'Code' }}</span>
                  <button 
                    class="copy-button"
                    @click="copyStepCode(step.code, index)"
                    :aria-label="`Copy ${step.title} code`"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 12h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                      <path d="M6 2v2h6V2" />
                    </svg>
                    <span>{{ copiedIndex === index ? 'Copied!' : 'Copy' }}</span>
                  </button>
                </div>
                <pre class="code-block"><code v-html="decodeHtmlEntities(step.code)"></code></pre>
              </div>

              <!-- Package Manager Alternatives -->
              <div v-if="step.alternatives && step.alternatives.length > 0" class="alternatives-wrapper">
                <div class="alternatives-header">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 2v4M8 10v4M2 8h4M10 8h4" />
                  </svg>
                  <span>Alternative package managers</span>
                </div>
                <div class="alternatives-list">
                  <button
                    v-for="(alt, altIndex) in step.alternatives"
                    :key="altIndex"
                    class="alternative-button"
                    @click="copyStepCode(alt.code, index)"
                  >
                    <span class="alt-label">{{ alt.label }}</span>
                    <code class="alt-code">{{ alt.code }}</code>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 12h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Additional Info -->
              <PtInformation 
                v-if="step.info" 
                variant="info" 
                size="md"
                :title="stripHtmlTags(step.info)"
                class="step-info"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Example -->
    <section v-if="selectedFramework" class="quick-start-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">You're All Set! 🎉</h2>
          <p class="section-description">
            Start building with PACER. Here's a quick example to get you started.
          </p>
        </div>
        
        <div class="example-card">
          <div class="code-block-wrapper">
            <div class="code-block-header">
              <span class="code-block-label">Example</span>
              <button 
                class="copy-button"
                @click="copyToClipboard(getExampleCode())"
                aria-label="Copy example code"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" />
                  <path d="M6 2v2h6V2" />
                </svg>
                <span>{{ copiedExample ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
            <pre class="code-block"><code v-html="decodeHtmlEntities(getExampleCode())"></code></pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';

const selectedFramework = ref<string | null>(null);
const copiedIndex = ref<number | null>(null);
const copiedExample = ref(false);

const frameworks = [
  {
    id: 'react',
    name: 'React',
    description: 'Easily add PACER with React',
    version: 'React 18+',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: 'react-logo' }, [
      h('circle', { cx: '12', cy: '12', r: '2', fill: '#61DAFB' }),
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', stroke: '#61DAFB', 'stroke-width': '1.5', fill: 'none' }),
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', stroke: '#61DAFB', 'stroke-width': '1.5', fill: 'none', transform: 'rotate(60 12 12)' }),
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', stroke: '#61DAFB', 'stroke-width': '1.5', fill: 'none', transform: 'rotate(-60 12 12)' }),
    ]),
  },
  {
    id: 'vue',
    name: 'Vue',
    description: 'Use PACER with Vue 3',
    version: 'Vue 3.4+',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: 'vue-logo' }, [
      h('path', { d: 'M12 2L2 19h5l5-8.5L17 19h5L12 2z', fill: '#42b883' }),
      h('path', { d: 'M17 19l-5-8.5L7 19h10z', fill: '#42b883', opacity: '0.5' }),
    ]),
  },
  {
    id: 'blazor',
    name: 'Blazor',
    description: 'Native .NET 8 Blazor components',
    version: '.NET 8',
    icon: () => h('div', { class: 'blazor-icon' }, '⚡'),
  },
];

const reactSteps = [
  {
    title: 'Install @pacer-ui/react',
    description: 'Install the package using your preferred package manager',
    code: 'npm install @pacer-ui/react',
    codeLabel: 'npm',
    info: 'Also available via <code>pnpm</code> and <code>yarn</code>. Package size: ~45KB gzipped.',
    alternatives: [
      { label: 'pnpm', code: 'pnpm add @pacer-ui/react' },
      { label: 'yarn', code: 'yarn add @pacer-ui/react' },
    ],
  },
  {
    title: 'Import styles',
    description: 'Add the CSS import in your main entry file to enable default styling',
    code: '// main.tsx or App.tsx\nimport \'@pacer-ui/react/styles.css\';',
    codeLabel: 'TypeScript',
    info: 'Styles are automatically included. For custom theming, see <a href="/tokens">Design Tokens</a>.',
  },
  {
    title: 'Start using components',
    description: 'Import and use components in your React application',
    code: 'import { Button, Card, Input } from \'@pacer-ui/react\';\n\nfunction App() {\n  return (\n    &lt;Card&gt;\n      &lt;h2&gt;Welcome to PACER&lt;/h2&gt;\n      &lt;Input placeholder="Enter your name" /&gt;\n      &lt;Button variant="primary"&gt;Submit&lt;/Button&gt;\n    &lt;/Card&gt;\n  );\n}',
    codeLabel: 'TypeScript',
    info: 'All components are tree-shakeable. Only import what you need!',
  },
];

const vueSteps = [
  {
    title: 'Install @pacer-ui/vue',
    description: 'Install the package using your preferred package manager',
    code: 'npm install @pacer-ui/vue',
    codeLabel: 'npm',
    info: 'Also available via <code>pnpm</code> and <code>yarn</code>. Package size: ~42KB gzipped.',
    alternatives: [
      { label: 'pnpm', code: 'pnpm add @pacer-ui/vue' },
      { label: 'yarn', code: 'yarn add @pacer-ui/vue' },
    ],
  },
  {
    title: 'Import styles',
    description: 'Add the CSS import in your main entry file to enable default styling',
    code: '// main.ts\nimport \'@pacer-ui/vue/styles.css\';\nimport { createApp } from \'vue\';\nimport App from \'./App.vue\';\n\ncreateApp(App).mount(\'#app\');',
    codeLabel: 'TypeScript',
    info: 'Works with Vue 3 Composition API. Full TypeScript support included.',
  },
  {
    title: 'Start using components',
    description: 'Import and use components in your Vue application',
    code: '&lt;script setup lang="ts"&gt;\nimport { PtButton, PtCard, PtInput } from \'@pacer-ui/vue\';\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;PtCard&gt;\n    &lt;h2&gt;Welcome to PACER&lt;/h2&gt;\n    &lt;PtInput placeholder="Enter your name" /&gt;\n    &lt;PtButton variant="primary"&gt;Submit&lt;/PtButton&gt;\n  &lt;/PtCard&gt;\n&lt;/template&gt;',
    codeLabel: 'Vue',
    info: 'Components use the <code>Pt</code> prefix. All props are fully typed!',
  },
];

const blazorSteps = [
  {
    title: 'Install package',
    description: 'Add the NuGet package to your Blazor project',
    code: 'dotnet add package Pertamina.DesignSystem.Blazor',
    codeLabel: 'CLI',
    info: 'Requires .NET 8+. Works with both Blazor Server and WebAssembly.',
    alternatives: [
      { label: 'Package Manager', code: 'Install-Package Pertamina.DesignSystem.Blazor' },
      { label: 'NuGet UI', code: 'Search: Pertamina.DesignSystem.Blazor' },
    ],
  },
  {
    title: 'Add namespace',
    description: 'Add to your _Imports.razor file for global access',
    code: '@using Pertamina.DesignSystem.Blazor',
    codeLabel: 'Razor',
    info: 'This makes components available throughout your Blazor application.',
  },
  {
    title: 'Include CSS',
    description: 'Add to your App.razor or MainLayout.razor',
    code: '&lt;link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" /&gt;',
    codeLabel: 'Razor',
    info: 'CSS is bundled automatically. No additional build steps required!',
  },
  {
    title: 'Start using components',
    description: 'Use components with full C# IntelliSense support',
    code: '&lt;PtCard&gt;\n    &lt;h2&gt;Welcome to PACER&lt;/h2&gt;\n    &lt;PtInput Placeholder="Enter your name" /&gt;\n    &lt;PtButton Variant="ButtonVariant.Primary"&gt;\n        Submit\n    &lt;/PtButton&gt;\n&lt;/PtCard&gt;',
    codeLabel: 'Razor',
    info: 'All properties are strongly typed. IntelliSense works perfectly in Visual Studio!',
  },
];

const selectFramework = (id: string) => {
  selectedFramework.value = id;
  copiedIndex.value = null;
  copiedExample.value = false;
};

const getFrameworkName = () => {
  const framework = frameworks.find(f => f.id === selectedFramework.value);
  return framework?.name || '';
};

const getSteps = () => {
  if (selectedFramework.value === 'react') return reactSteps;
  if (selectedFramework.value === 'vue') return vueSteps;
  if (selectedFramework.value === 'blazor') return blazorSteps;
  return [];
};

const getExampleCode = () => {
  if (selectedFramework.value === 'react') {
    return 'import { Button, HStack } from \'@pacer-ui/react\';\n\nconst Demo = () => {\n  return (\n    &lt;HStack&gt;\n      &lt;Button&gt;Click me&lt;/Button&gt;\n      &lt;Button variant="secondary"&gt;Click me&lt;/Button&gt;\n    &lt;/HStack&gt;\n  );\n}';
  }
  if (selectedFramework.value === 'vue') {
    return '&lt;script setup lang="ts"&gt;\nimport { PtButton } from \'@pacer-ui/vue\';\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;div class="flex gap-2"&gt;\n    &lt;PtButton&gt;Click me&lt;/PtButton&gt;\n    &lt;PtButton variant="secondary"&gt;Click me&lt;/PtButton&gt;\n  &lt;/div&gt;\n&lt;/template&gt;';
  }
  if (selectedFramework.value === 'blazor') {
    return '&lt;PtButton Variant="ButtonVariant.Primary"&gt;\n    Click me\n&lt;/PtButton&gt;\n&lt;PtButton Variant="ButtonVariant.Secondary"&gt;\n    Click me\n&lt;/PtButton&gt;';
  }
  return '';
};

const decodeHtmlEntities = (text: string) => {
  if (typeof document === 'undefined') return text;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const stripHtmlTags = (html: string) => {
  if (typeof document === 'undefined') return html;
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const copyStepCode = async (text: string, index: number) => {
  try {
    const decodedText = decodeHtmlEntities(text);
    await navigator.clipboard.writeText(decodedText);
    copiedIndex.value = index;
    copiedExample.value = false;
    setTimeout(() => {
      copiedIndex.value = null;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

const copyToClipboard = async (text: string) => {
  try {
    const decodedText = decodeHtmlEntities(text);
    await navigator.clipboard.writeText(decodedText);
    copiedIndex.value = null;
    copiedExample.value = true;
    setTimeout(() => {
      copiedExample.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<style scoped>
.installation-guide {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.section-container {
  max-width: 100%;
  margin: 0 auto;
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
  margin: 0 0 16px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.info-badges {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin: 24px 0 16px;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #666;
}

.info-badge svg {
  width: 14px;
  height: 14px;
  color: #0156C6;
}

.version-requirement {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f0f7ff;
  border-radius: 8px;
  margin-top: 8px;
}

.requirement-label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #666;
}

.requirement-text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #0156C6;
}

/* Framework Guide Section */
.framework-guide-section {
  margin-bottom: 64px;
  width: 100%;
}

.framework-guide-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  width: 100%;
  margin: 0;
}

.framework-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.framework-card:hover {
  border-color: #0156C6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.framework-card.active {
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.15);
}

.framework-icon-wrapper {
  display: flex;
  justify-content: center;
}

.framework-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.framework-icon-react {
  background: rgba(97, 218, 251, 0.1);
}

.framework-icon-vue {
  background: rgba(66, 184, 131, 0.1);
}

.framework-icon-blazor {
  background: rgba(81, 43, 212, 0.1);
  font-size: 32px;
}

.react-logo,
.vue-logo {
  width: 40px;
  height: 40px;
}

.framework-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1a1a1a;
  margin: 0;
}

.framework-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  margin: 0;
}

.framework-badge {
  display: inline-block;
  background: #f3f4f6;
  padding: 4px 12px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #666;
}

.framework-card.active .framework-badge {
  background: #0156C6;
  color: white;
}

/* Installation Steps Section */
.installation-steps-section {
  margin-bottom: 64px;
}

.steps-header {
  text-align: center;
  margin-bottom: 48px;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 0;
}

.installation-steps-section .section-container {
  max-width: 100% !important;
  width: 100% !important;
  padding: 0;
}

.step-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 16px;
  transition: all 0.2s ease;
}

.step-card:hover {
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
}

.step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: linear-gradient(163.5deg, #2563eb 0%, #0037b8 100%);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1a1a1a;
  margin: 0;
}

.step-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  margin: 0;
}

.code-block-wrapper {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 8px;
}

.code-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #2d2d2d;
  border-bottom: 1px solid #3d3d3d;
}

.code-block-label {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.copy-button:hover {
  background: #3d3d3d;
  color: white;
}

.copy-button svg {
  width: 14px;
  height: 14px;
}

.code-block {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  background: #1e1e1e;
}

.code-block code {
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 20px;
  color: #d4d4d4;
  white-space: pre;
}

.step-info {
  margin-top: 8px;
}

.step-info :deep(.pt-information) {
  font-family: 'Inter', sans-serif;
}

.step-info :deep(a) {
  color: #0156C6;
  text-decoration: none;
  font-weight: 500;
}

.step-info :deep(a:hover) {
  text-decoration: underline;
}

.step-info :deep(code) {
  background: rgba(1, 86, 198, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 12px;
  color: #0156C6;
}

.alternatives-wrapper {
  margin-top: 12px;
  padding: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.alternatives-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #666;
}

.alternatives-header svg {
  width: 14px;
  height: 14px;
  color: #0156C6;
}

.alternatives-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.alternative-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
}

.alternative-button:hover {
  border-color: #0156C6;
  background: #f0f7ff;
}

.alt-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #666;
  min-width: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.alt-code {
  flex: 1;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 12px;
  color: #1a1a1a;
  background: transparent;
  border: none;
}

.alternative-button svg {
  width: 14px;
  height: 14px;
  color: #9ca3af;
  flex-shrink: 0;
}

.alternative-button:hover svg {
  color: #0156C6;
}

/* Quick Start Section */
.quick-start-section {
  margin-bottom: 48px;
}

.example-card {
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .installation-guide {
    padding: 32px 16px;
  }

  .section-title {
    font-size: 28px;
    line-height: 36px;
  }

  .section-description {
    font-size: 16px;
    line-height: 24px;
  }

  .frameworks-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    flex-direction: column;
    gap: 16px;
  }

  .step-number {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
}
</style>