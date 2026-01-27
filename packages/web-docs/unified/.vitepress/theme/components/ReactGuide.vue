<template>
  <div class="framework-guide">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="framework-logo">
          <svg viewBox="0 0 24 24" class="react-icon">
            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.5" fill="none" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.5" fill="none" transform="rotate(120 12 12)"/>
          </svg>
        </div>
        <div class="hero-badge">React</div>
        <h1 class="hero-title">PACER for React</h1>
        <p class="hero-description">
          Build beautiful React applications with fully typed, accessible components. 
          Works seamlessly with Next.js, Vite, and any React 18+ project.
        </p>
        <div class="hero-actions">
          <PtButton variant="solid" @click="scrollToInstall">Get Started</PtButton>
          <PtButton variant="secondary" @click="openStorybook">View Storybook</PtButton>
        </div>
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="facts-section">
      <div class="facts-grid">
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>{{ componentCount }}+ Components</h3>
          <p>Production-ready UI components</p>
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
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3>Tree Shakeable</h3>
          <p>Import only what you need</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>Accessible</h3>
          <p>WCAG 2.1 compliant</p>
        </div>
      </div>
    </section>

    <!-- Installation -->
    <section id="install" class="install-section">
      <h2>Quick Start</h2>
      <p class="section-desc">Get up and running in under 2 minutes</p>
      
      <div class="steps">
        <!-- Step 1: Install -->
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

        <!-- Step 2: Import Styles -->
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Import styles</h3>
            <div class="code-block">
              <div class="code-content">
                <pre><code>// main.tsx or App.tsx
import '@pacer-ui/react/styles.css';</code></pre>
                <button class="copy-btn" @click="handleCopy(`import '@pacer-ui/react/styles.css';`)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Use Components -->
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Start building</h3>
            <div class="code-block">
              <div class="code-content large">
                <pre><code>import { Button, Input, Card } from '@pacer-ui/react';

function App() {
  return (
    &lt;Card&gt;
      &lt;Input placeholder="Enter your email" /&gt;
      &lt;Button variant="solid"&gt;Subscribe&lt;/Button&gt;
    &lt;/Card&gt;
  );
}</code></pre>
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
      <p class="section-desc">All components you need to build modern React apps</p>
      
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
      <p class="section-desc">Real-world examples to get you started</p>

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
            <span>{{ currentExample.title }}.tsx</span>
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
          <div class="integration-logo">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
            </svg>
          </div>
          <span>Next.js</span>
        </div>
        <div class="integration-card">
          <div class="integration-logo vite">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="#646CFF" d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"/>
            </svg>
          </div>
          <span>Vite</span>
        </div>
        <div class="integration-card">
          <div class="integration-logo">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534 23.988 23.988 0 0 0-1.907-2.39c1.26-1.168 2.37-1.86 3.976-2.353zm-5.66 2.334c.412.449.788.918 1.126 1.403a21.21 21.21 0 0 0-2.257.006c.34-.49.72-.961 1.131-1.41zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.387zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.24.38.48.77.705 1.165.225.39.435.788.636 1.18-.7.103-1.37.23-2.015.387.18-.636.405-1.29.675-1.93zm4.985 4.684c-.412-.45-.788-.92-1.126-1.406.366.012.74.018 1.12.018.387 0 .77-.006 1.145-.02a19.51 19.51 0 0 1-1.14 1.408zm-5.74 1.5c-.64-.382-.95-1.832-.725-3.698.054-.46.142-.944.25-1.438a23.476 23.476 0 0 0 3.107.534c.655.868 1.27 1.664 1.907 2.39-1.26 1.17-2.378 1.867-3.54 2.212-.226 0-.406-.044-.558-.127zm11.5-.015c-.666.38-.955 1.834-.73 3.704.054.46.142.945.25 1.438-.987-.27-2.01-.68-3.107-1.23a23.98 23.98 0 0 0 1.907-2.39c.863-.072 1.724-.186 2.57-.347.265.657.49 1.312.676 1.948.225 0 .406-.044.558-.127z"/>
            </svg>
          </div>
          <span>Create React App</span>
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
            <li>Import only components you need</li>
            <li>Use TypeScript for type safety</li>
            <li>Handle loading states with <code>loading</code> prop</li>
            <li>Use semantic variants appropriately</li>
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
            <li>Don't import the entire library</li>
            <li>Don't override component internals</li>
            <li>Don't skip error handling</li>
            <li>Don't ignore TypeScript warnings</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <h2>Ready to build?</h2>
      <p>Explore all components and start building your React application</p>
      <div class="cta-actions">
        <PtButton variant="solid" @click="navigateToComponents">Browse Components</PtButton>
        <PtButton variant="secondary"  @click="navigateToTokens">View Design Tokens</PtButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PtButton, toast } from '@pacer-ui/vue';

const activePm = ref('npm');
const activeExample = ref('form');
const componentCount = 20;

const installCommands: Record<string, string> = {
  npm: 'npm install @pacer-ui/react',
  pnpm: 'pnpm add @pacer-ui/react',
  yarn: 'yarn add @pacer-ui/react',
};

const usageCode = `import { Button, Input, Card } from '@pacer-ui/react';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button variant="solid">Subscribe</Button>
    </Card>
  );
}`;

const components = [
  { name: 'Button', link: '/components/button', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="2"/></svg>' },
  { name: 'Input', link: '/components/input', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="7" y2="12"/></svg>' },
  { name: 'Card', link: '/components/card', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>' },
  { name: 'Modal', link: '/components/modal', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/></svg>' },
  { name: 'Badge', link: '/components/badge', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/></svg>' },
  { name: 'Avatar', link: '/components/avatar', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { name: 'Tabs', link: '/components/tabs', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>' },
  { name: 'Toast', link: '/components/toast', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/></svg>' },
];

const examples = [
  {
    id: 'form',
    title: 'Form',
    preview: '<div style="display:flex;flex-direction:column;gap:12px;"><div style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;">email@example.com</div><div style="padding:8px 16px;background:#0156C6;color:white;border-radius:6px;text-align:center;">Submit</div></div>',
    code: `import { Button, Input } from '@pacer-ui/react';
import { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <Input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
      />
      <Button variant="solid">Submit</Button>
    </form>
  );
}`
  },
  {
    id: 'loading',
    title: 'Loading State',
    preview: '<div style="display:flex;gap:12px;"><div style="padding:8px 16px;background:#0156C6;color:white;border-radius:6px;opacity:0.7;">Loading...</div><div style="padding:8px 16px;background:#0156C6;color:white;border-radius:6px;">Loaded</div></div>',
    code: `import { Button } from '@pacer-ui/react';
import { useState } from 'react';

function AsyncButton() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };
  
  return (
    <Button 
      loading={loading} 
      onClick={handleClick}
    >
      {loading ? 'Saving...' : 'Save'}
    </Button>
  );
}`
  },
  {
    id: 'validation',
    title: 'Validation',
    preview: '<div style="display:flex;flex-direction:column;gap:4px;"><div style="padding:8px 12px;border:2px solid #ef4444;border-radius:6px;color:#ef4444;">invalid-email</div><div style="font-size:12px;color:#ef4444;">Please enter a valid email</div></div>',
    code: `import { Input, Button } from '@pacer-ui/react';
import { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const validate = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };
  
  return (
    <>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        status={error ? 'error' : 'default'}
        helperText={error}
      />
      <Button onClick={validate}>Validate</Button>
    </>
  );
}`
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
  window.open('https://pacer-design-system-react.vercel.app/', '_blank');
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

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 64px 24px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  margin: 0 -24px;
}

.framework-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.react-icon {
  width: 100%;
  height: 100%;
  color: #61DAFB;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(97, 218, 251, 0.2);
  color: #61DAFB;
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
  color: #94a3b8;
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
  background: #f0f7ff;
  border-radius: 12px;
  color: #0156C6;
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
  background: #0156C6;
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
  border-color: #0156C6;
  box-shadow: 0 4px 12px rgba(1, 86, 198, 0.1);
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

/* CTA Section */
.cta-section {
  padding: 64px 24px;
  background: linear-gradient(135deg, #0156C6 0%, #014095 100%);
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
.dark .hero-section {
  background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
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
