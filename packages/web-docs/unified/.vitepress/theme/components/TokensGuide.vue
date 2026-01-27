<template>
  <div class="tokens-guide">
    <!-- Hero Section -->
    <section class="tokens-hero">
      <div class="hero-content">
        <div class="hero-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Foundation</span>
        </div>
        <h1 class="hero-title">Design Tokens</h1>
        <p class="hero-description">
          The building blocks of PACER Design System. Design tokens ensure consistency across React, Vue, and Blazor by providing a single source of truth for colors, spacing, typography, and more.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">{{ totalColors }}</span>
            <span class="stat-label">Colors</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ totalSpacing }}</span>
            <span class="stat-label">Spacing</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ totalTypography }}</span>
            <span class="stat-label">Typography</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">7</span>
            <span class="stat-label">Shadows</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Install -->
    <section class="quick-install">
      <div class="install-card">
        <div class="install-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          <span>Quick Install</span>
        </div>
        <div class="install-commands">
          <div class="command-tabs">
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
          <div class="command-box">
            <code>{{ installCommands[activePm] }}</code>
            <PtButton 
              variant="ghost" 
              size="sm" 
              @click="handleCopyInstall" 
              :title="copied ? 'Copied!' : 'Copy'"
              class="copy-btn-pt"
            >
              <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </PtButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="category-section">
      <div class="category-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          :class="['category-tab', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          <component :is="cat.icon" />
          <span>{{ cat.label }}</span>
        </button>
      </div>
    </section>

    <!-- Colors Section -->
    <section v-show="activeCategory === 'colors'" class="tokens-section">
      <!-- Brand Colors -->
      <div class="token-group">
        <div class="group-header">
          <h2>Brand Colors</h2>
          <p>Pertamina's primary brand palette - a professional blue scale.</p>
        </div>
        <div class="color-grid brand-grid">
          <div 
            v-for="(color, index) in filteredBrandColors" 
            :key="color.name"
            class="color-card"
            :class="{ 'primary': color.name === '500' }"
            @click="handleCopyColor(color.value)"
          >
            <div class="color-swatch" :style="{ background: color.value }">
              <span v-if="color.name === '500'" class="primary-badge">Primary</span>
            </div>
            <div class="color-info">
              <span class="color-name">{{ color.name }}</span>
              <span class="color-value">{{ color.value }}</span>
            </div>
            <div class="copy-indicator">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Pertamina Official Colors -->
      <div class="token-group">
        <div class="group-header">
          <h2>Pertamina Official</h2>
          <p>The three official Pertamina brand colors.</p>
        </div>
        <div class="color-grid official-grid">
          <div 
            v-for="color in pertaminaColors" 
            :key="color.name"
            class="color-card official-card"
            @click="handleCopyColor(color.value)"
          >
            <div class="color-swatch large" :style="{ background: color.value }"></div>
            <div class="color-info">
              <span class="color-name">{{ color.name }}</span>
              <span class="color-value">{{ color.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Semantic Colors -->
      <div class="token-group">
        <div class="group-header">
          <h2>Semantic Colors</h2>
          <p>Purpose-driven colors for feedback and states.</p>
        </div>
        <div class="semantic-tabs">
          <button 
            v-for="sem in semanticTypes" 
            :key="sem.id"
            :class="['semantic-tab', { active: activeSemanticType === sem.id }]"
            @click="activeSemanticType = sem.id"
          >
            <span class="semantic-dot" :style="{ background: sem.color }"></span>
            {{ sem.label }}
          </button>
        </div>
        <div class="color-grid">
          <div 
            v-for="color in filteredSemanticColors" 
            :key="color.name"
            class="color-card"
            @click="handleCopyColor(color.value)"
          >
            <div class="color-swatch" :style="{ background: color.value }"></div>
            <div class="color-info">
              <span class="color-name">{{ color.name }}</span>
              <span class="color-value">{{ color.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Gray Scales -->
      <div class="token-group">
        <div class="group-header">
          <h2>Gray Scales</h2>
          <p>Multiple gray palettes for different aesthetic needs.</p>
        </div>
        <div class="gray-tabs">
          <button 
            v-for="gray in grayTypes" 
            :key="gray.id"
            :class="['gray-tab', { active: activeGrayType === gray.id }]"
            @click="activeGrayType = gray.id"
          >
            {{ gray.label }}
            <span class="gray-desc">{{ gray.desc }}</span>
          </button>
        </div>
        <div class="color-grid gray-grid">
          <div 
            v-for="color in filteredGrayColors" 
            :key="color.name"
            class="color-card"
            @click="handleCopyColor(color.value)"
          >
            <div class="color-swatch" :style="{ background: color.value }"></div>
            <div class="color-info">
              <span class="color-name">{{ color.name }}</span>
              <span class="color-value">{{ color.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography Section -->
    <section v-show="activeCategory === 'typography'" class="tokens-section">
      <!-- Font Sizes -->
      <div class="token-group">
        <div class="group-header">
          <h2>Font Sizes</h2>
          <p>A harmonious type scale from 12px to 128px.</p>
        </div>
        <div class="typography-preview">
          <div 
            v-for="size in fontSizes" 
            :key="size.token"
            class="type-row"
            @click="handleCopyToken(size.token)"
          >
            <div class="type-sample" :style="{ fontSize: size.value }">Aa</div>
            <div class="type-info">
              <span class="type-token">{{ size.token }}</span>
              <span class="type-value">{{ size.value }} / {{ size.pixels }}</span>
            </div>
            <div class="copy-indicator small">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Font Weights -->
      <div class="token-group">
        <div class="group-header">
          <h2>Font Weights</h2>
          <p>From thin to black - all weight variations.</p>
        </div>
        <div class="weight-grid">
          <div 
            v-for="weight in fontWeights" 
            :key="weight.token"
            class="weight-card"
            @click="handleCopyToken(weight.token)"
          >
            <span class="weight-sample" :style="{ fontWeight: weight.value }">Ag</span>
            <span class="weight-token">{{ weight.token }}</span>
            <span class="weight-value">{{ weight.value }}</span>
          </div>
        </div>
      </div>

      <!-- Line Heights -->
      <div class="token-group">
        <div class="group-header">
          <h2>Line Heights</h2>
          <p>Consistent vertical rhythm for readable text.</p>
        </div>
        <div class="lineheight-preview">
          <div 
            v-for="lh in lineHeights" 
            :key="lh.token"
            class="lh-row"
            @click="handleCopyToken(lh.token)"
          >
            <div class="lh-visual">
              <div class="lh-lines" :style="{ height: lh.value }">
                <div class="lh-text">Text</div>
              </div>
            </div>
            <div class="lh-info">
              <span class="lh-token">{{ lh.token }}</span>
              <span class="lh-value">{{ lh.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacing Section -->
    <section v-show="activeCategory === 'spacing'" class="tokens-section">
      <!-- Spacing Scale -->
      <div class="token-group">
        <div class="group-header">
          <h2>Spacing Scale</h2>
          <p>A consistent spacing system for margins, padding, and gaps.</p>
        </div>
        <div class="spacing-preview">
          <div 
            v-for="space in spacingTokens" 
            :key="space.token"
            class="spacing-row"
            @click="handleCopyToken(space.token)"
          >
            <div class="spacing-visual">
              <div class="spacing-bar" :style="{ width: space.pixels }"></div>
            </div>
            <div class="spacing-info">
              <span class="spacing-token">{{ space.token }}</span>
              <span class="spacing-value">{{ space.value }} / {{ space.pixels }}</span>
            </div>
            <div class="copy-indicator small">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Border Radius -->
      <div class="token-group">
        <div class="group-header">
          <h2>Border Radius</h2>
          <p>Rounded corners for softer, modern interfaces.</p>
        </div>
        <div class="radius-grid">
          <div 
            v-for="radius in borderRadii" 
            :key="radius.token"
            class="radius-card"
            @click="handleCopyToken(radius.token)"
          >
            <div class="radius-visual" :style="{ borderRadius: radius.value }"></div>
            <span class="radius-token">{{ radius.token }}</span>
            <span class="radius-value">{{ radius.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Shadows Section -->
    <section v-show="activeCategory === 'shadows'" class="tokens-section">
      <div class="token-group">
        <div class="group-header">
          <h2>Box Shadows</h2>
          <p>Elevation and depth for layered interfaces.</p>
        </div>
        <div class="shadow-grid">
          <div 
            v-for="shadow in shadows" 
            :key="shadow.token"
            class="shadow-card"
            @click="handleCopyToken(shadow.token)"
          >
            <div class="shadow-preview" :style="{ boxShadow: shadow.value }"></div>
            <div class="shadow-info">
              <span class="shadow-token">{{ shadow.token }}</span>
              <code class="shadow-value">{{ shadow.value }}</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Section -->
    <section class="usage-section">
      <div class="group-header">
        <h2>How to Use Tokens</h2>
        <p>Import and use tokens in your preferred environment.</p>
      </div>
      <div class="usage-tabs">
        <PtButton 
          v-for="env in ['JavaScript', 'Tailwind CSS', 'CSS Variables']" 
          :key="env"
          :variant="activeUsage === env ? 'solid' : 'outline'"
          size="sm"
          @click="activeUsage = env"
        >
          {{ env }}
        </PtButton>
      </div>
      <div class="usage-code">
        <pre v-if="activeUsage === 'JavaScript'"><code>import { colors, spacing, typography } from '@pacer-ui/tokens';

// Use colors
const primaryColor = colors.brand[500]; // #0156C6
const errorColor = colors.red[500];     // #EF4444

// Use spacing
const padding = spacing[4];  // 1rem (16px)
const margin = spacing[8];   // 2rem (32px)

// Use typography
const fontSize = typography.fontSize['2xl']; // 1.5rem</code></pre>
        <pre v-else-if="activeUsage === 'Tailwind CSS'"><code>// tailwind.config.js
module.exports = {
  presets: [require('@pacer-ui/tailwind-preset').default],
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
};

// In your components:
&lt;button class="bg-brand-500 text-white hover:bg-brand-600 
               px-4 py-2 rounded-md shadow-md"&gt;
  Click me
&lt;/button&gt;</code></pre>
        <pre v-else><code>:root {
  /* Brand Colors */
  --color-brand-500: #0156C6;
  --color-brand-600: #0150BA;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  
  /* Typography */
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
}

.button {
  background: var(--color-brand-500);
  padding: var(--spacing-2) var(--spacing-4);
}</code></pre>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue';
import { PtButton, toast } from '@pacer-ui/vue';

// Icons as render functions
const PaletteIcon = () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('circle', { cx: 13.5, cy: 6.5, r: '.5' }),
  h('circle', { cx: 17.5, cy: 10.5, r: '.5' }),
  h('circle', { cx: 8.5, cy: 7.5, r: '.5' }),
  h('circle', { cx: 6.5, cy: 12.5, r: '.5' }),
  h('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z' })
]);

const TypeIcon = () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('polyline', { points: '4 7 4 4 20 4 20 7' }),
  h('line', { x1: 9, y1: 20, x2: 15, y2: 20 }),
  h('line', { x1: 12, y1: 4, x2: 12, y2: 20 })
]);

const SpacingIcon = () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
  h('line', { x1: 3, y1: 9, x2: 21, y2: 9 }),
  h('line', { x1: 9, y1: 21, x2: 9, y2: 9 })
]);

const ShadowIcon = () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
  h('path', { d: 'M21 12h3m-3 6h3M21 6h3' })
]);

// State
const searchQuery = ref('');
const activeCategory = ref('colors');
const activePm = ref('npm');
const activeSemanticType = ref('red');
const activeGrayType = ref('slate');
const activeUsage = ref('JavaScript');
const copied = ref(false);

// Categories
const categories = [
  { id: 'colors', label: 'Colors', icon: PaletteIcon },
  { id: 'typography', label: 'Typography', icon: TypeIcon },
  { id: 'spacing', label: 'Spacing', icon: SpacingIcon },
  { id: 'shadows', label: 'Shadows', icon: ShadowIcon },
];

// Install commands
const installCommands: Record<string, string> = {
  npm: 'npm install @pacer-ui/tokens',
  pnpm: 'pnpm add @pacer-ui/tokens',
  yarn: 'yarn add @pacer-ui/tokens',
};

// Brand Colors
const brandColors = [
  { name: '50', value: '#E6F0FE' },
  { name: '100', value: '#D9E9FE' },
  { name: '200', value: '#B0D1FD' },
  { name: '300', value: '#016BF8' },
  { name: '400', value: '#0160DF' },
  { name: '500', value: '#0156C6' },
  { name: '600', value: '#0150BA' },
  { name: '700', value: '#014095' },
  { name: '800', value: '#003070' },
  { name: '900', value: '#002557' },
];

// Pertamina Official Colors
const pertaminaColors = [
  { name: 'Pertamina Red', value: '#ED1B2F' },
  { name: 'Pertamina Blue', value: '#006CB8' },
  { name: 'Pertamina Green', value: '#ACC42A' },
];

// Semantic colors
const semanticTypes = [
  { id: 'red', label: 'Error', color: '#EF4444' },
  { id: 'green', label: 'Success', color: '#22C55E' },
  { id: 'yellow', label: 'Warning', color: '#EAB308' },
  { id: 'blue', label: 'Info', color: '#3B82F6' },
];

const semanticColors: Record<string, Array<{ name: string; value: string }>> = {
  red: [
    { name: '50', value: '#FEF2F2' }, { name: '100', value: '#FEE2E2' },
    { name: '200', value: '#FECACA' }, { name: '300', value: '#FCA5A5' },
    { name: '400', value: '#F87171' }, { name: '500', value: '#EF4444' },
    { name: '600', value: '#DC2626' }, { name: '700', value: '#B91C1C' },
    { name: '800', value: '#991B1B' }, { name: '900', value: '#7F1D1D' },
  ],
  green: [
    { name: '50', value: '#F0FDF4' }, { name: '100', value: '#DCFCE7' },
    { name: '200', value: '#BBF7D0' }, { name: '300', value: '#86EFAC' },
    { name: '400', value: '#4ADE80' }, { name: '500', value: '#22C55E' },
    { name: '600', value: '#16A34A' }, { name: '700', value: '#15803D' },
    { name: '800', value: '#166534' }, { name: '900', value: '#14532D' },
  ],
  yellow: [
    { name: '50', value: '#FEFCE8' }, { name: '100', value: '#FEF9C3' },
    { name: '200', value: '#FEF08A' }, { name: '300', value: '#FDE047' },
    { name: '400', value: '#FACC15' }, { name: '500', value: '#EAB308' },
    { name: '600', value: '#CA8A04' }, { name: '700', value: '#A16207' },
    { name: '800', value: '#854D0E' }, { name: '900', value: '#713F12' },
  ],
  blue: [
    { name: '50', value: '#EFF6FF' }, { name: '100', value: '#DBEAFE' },
    { name: '200', value: '#BFDBFE' }, { name: '300', value: '#93C5FD' },
    { name: '400', value: '#60A5FA' }, { name: '500', value: '#3B82F6' },
    { name: '600', value: '#2563EB' }, { name: '700', value: '#1D4ED8' },
    { name: '800', value: '#1E40AF' }, { name: '900', value: '#1E3A8A' },
  ],
};

// Gray types
const grayTypes = [
  { id: 'slate', label: 'Slate', desc: 'Cool tones' },
  { id: 'gray', label: 'Gray', desc: 'Pure neutral' },
  { id: 'zinc', label: 'Zinc', desc: 'Warm gray' },
  { id: 'neutral', label: 'Neutral', desc: 'True neutral' },
];

const grayColors: Record<string, Array<{ name: string; value: string }>> = {
  slate: [
    { name: '50', value: '#F8FAFC' }, { name: '100', value: '#F1F5F9' },
    { name: '200', value: '#E2E8F0' }, { name: '300', value: '#CBD5E1' },
    { name: '400', value: '#94A3B8' }, { name: '500', value: '#64748B' },
    { name: '600', value: '#475569' }, { name: '700', value: '#334155' },
    { name: '800', value: '#1E293B' }, { name: '900', value: '#0F172A' },
  ],
  gray: [
    { name: '50', value: '#F9FAFB' }, { name: '100', value: '#F3F4F6' },
    { name: '200', value: '#E5E7EB' }, { name: '300', value: '#D1D5DB' },
    { name: '400', value: '#9CA3AF' }, { name: '500', value: '#6B7280' },
    { name: '600', value: '#4B5563' }, { name: '700', value: '#374151' },
    { name: '800', value: '#1F2937' }, { name: '900', value: '#111827' },
  ],
  zinc: [
    { name: '50', value: '#FAFAFA' }, { name: '100', value: '#F4F4F5' },
    { name: '200', value: '#E4E4E7' }, { name: '300', value: '#D4D4D8' },
    { name: '400', value: '#A1A1AA' }, { name: '500', value: '#71717A' },
    { name: '600', value: '#52525B' }, { name: '700', value: '#3F3F46' },
    { name: '800', value: '#27272A' }, { name: '900', value: '#18181B' },
  ],
  neutral: [
    { name: '50', value: '#FAFAFA' }, { name: '100', value: '#F5F5F5' },
    { name: '200', value: '#E5E5E5' }, { name: '300', value: '#D4D4D4' },
    { name: '400', value: '#A3A3A3' }, { name: '500', value: '#737373' },
    { name: '600', value: '#525252' }, { name: '700', value: '#404040' },
    { name: '800', value: '#262626' }, { name: '900', value: '#171717' },
  ],
};

// Font sizes
const fontSizes = [
  { token: 'text-xs', value: '0.75rem', pixels: '12px' },
  { token: 'text-sm', value: '0.875rem', pixels: '14px' },
  { token: 'text-base', value: '1rem', pixels: '16px' },
  { token: 'text-lg', value: '1.125rem', pixels: '18px' },
  { token: 'text-xl', value: '1.25rem', pixels: '20px' },
  { token: 'text-2xl', value: '1.5rem', pixels: '24px' },
  { token: 'text-3xl', value: '1.875rem', pixels: '30px' },
  { token: 'text-4xl', value: '2.25rem', pixels: '36px' },
  { token: 'text-5xl', value: '3rem', pixels: '48px' },
];

// Font weights
const fontWeights = [
  { token: 'font-thin', value: 100 },
  { token: 'font-light', value: 300 },
  { token: 'font-normal', value: 400 },
  { token: 'font-medium', value: 500 },
  { token: 'font-semibold', value: 600 },
  { token: 'font-bold', value: 700 },
  { token: 'font-extrabold', value: 800 },
  { token: 'font-black', value: 900 },
];

// Line heights
const lineHeights = [
  { token: 'leading-4', value: '1rem' },
  { token: 'leading-5', value: '1.25rem' },
  { token: 'leading-6', value: '1.5rem' },
  { token: 'leading-7', value: '1.75rem' },
  { token: 'leading-8', value: '2rem' },
];

// Spacing tokens
const spacingTokens = [
  { token: 'spacing-1', value: '0.25rem', pixels: '4px' },
  { token: 'spacing-2', value: '0.5rem', pixels: '8px' },
  { token: 'spacing-3', value: '0.75rem', pixels: '12px' },
  { token: 'spacing-4', value: '1rem', pixels: '16px' },
  { token: 'spacing-5', value: '1.25rem', pixels: '20px' },
  { token: 'spacing-6', value: '1.5rem', pixels: '24px' },
  { token: 'spacing-8', value: '2rem', pixels: '32px' },
  { token: 'spacing-10', value: '2.5rem', pixels: '40px' },
  { token: 'spacing-12', value: '3rem', pixels: '48px' },
  { token: 'spacing-16', value: '4rem', pixels: '64px' },
];

// Border radii
const borderRadii = [
  { token: 'rounded-none', value: '0' },
  { token: 'rounded-sm', value: '0.125rem' },
  { token: 'rounded', value: '0.25rem' },
  { token: 'rounded-md', value: '0.375rem' },
  { token: 'rounded-lg', value: '0.5rem' },
  { token: 'rounded-xl', value: '0.75rem' },
  { token: 'rounded-2xl', value: '1rem' },
  { token: 'rounded-full', value: '9999px' },
];

// Shadows
const shadows = [
  { token: 'shadow-sm', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  { token: 'shadow', value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)' },
  { token: 'shadow-md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' },
  { token: 'shadow-lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' },
  { token: 'shadow-xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' },
  { token: 'shadow-2xl', value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
  { token: 'shadow-inner', value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)' },
];

// Stats
const totalColors = computed(() => brandColors.length + Object.values(semanticColors).flat().length + Object.values(grayColors).flat().length);
const totalSpacing = computed(() => spacingTokens.length + borderRadii.length);
const totalTypography = computed(() => fontSizes.length + fontWeights.length + lineHeights.length);

// Filtered data
const filteredBrandColors = computed(() => {
  if (!searchQuery.value) return brandColors;
  const q = searchQuery.value.toLowerCase();
  return brandColors.filter(c => c.name.toLowerCase().includes(q) || c.value.toLowerCase().includes(q));
});

const filteredSemanticColors = computed(() => {
  const colors = semanticColors[activeSemanticType.value] || [];
  if (!searchQuery.value) return colors;
  const q = searchQuery.value.toLowerCase();
  return colors.filter(c => c.name.toLowerCase().includes(q) || c.value.toLowerCase().includes(q));
});

const filteredGrayColors = computed(() => {
  const colors = grayColors[activeGrayType.value] || [];
  if (!searchQuery.value) return colors;
  const q = searchQuery.value.toLowerCase();
  return colors.filter(c => c.name.toLowerCase().includes(q) || c.value.toLowerCase().includes(q));
});

// Methods
const handleCopyColor = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    toast.success('Copied!', `${value} copied to clipboard`, { duration: 2000 });
  } catch (err) {
    console.error('Failed to copy:', err);
    toast.error('Failed to copy', 'Please try again', { duration: 2000 });
  }
};

const handleCopyToken = async (token: string) => {
  try {
    await navigator.clipboard.writeText(token);
    toast.success('Copied!', `${token} copied to clipboard`, { duration: 2000 });
  } catch (err) {
    console.error('Failed to copy:', err);
    toast.error('Failed to copy', 'Please try again', { duration: 2000 });
  }
};

const handleCopyInstall = async () => {
  try {
    await navigator.clipboard.writeText(installCommands[activePm.value]);
    copied.value = true;
    toast.success('Copied!', 'Install command copied to clipboard', { duration: 2000 });
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    toast.error('Failed to copy', 'Please try again', { duration: 2000 });
  }
};
</script>

<style scoped>
.tokens-guide {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 100%;
  padding: 0 24px 48px;
}

/* Hero Section */
.tokens-hero {
  padding: 48px 0;
  text-align: center;
  background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%);
  margin: 0 -24px 32px;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #0156C6;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.hero-title {
  font-size: 40px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.hero-description {
  font-size: 18px;
  color: #475569;
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #0156C6;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
}

/* Quick Install */
.quick-install {
  margin-bottom: 32px;
}

.install-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.install-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
}

.command-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.command-box {
  display: flex;
  align-items: center;
  background: #1e293b;
  border-radius: 8px;
  padding: 12px 16px;
}

.command-box code {
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #e2e8f0;
}

.copy-btn-pt {
  color: #94a3b8 !important;
  background: transparent !important;
  min-width: auto !important;
  padding: 6px !important;
}

.copy-btn-pt:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
}

/* Category Section */
.category-section {
  margin-bottom: 24px;
}

.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.15s;
}

.category-tab:hover {
  border-color: #0156C6;
  color: #0156C6;
}

.category-tab.active {
  background: #0156C6;
  border-color: #0156C6;
  color: white;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.search-box svg {
  color: #94a3b8;
  flex-shrink: 0;
}

.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #334155;
  outline: none;
}

.search-box input::placeholder {
  color: #94a3b8;
}

/* Token Section */
.tokens-section {
  margin-top: 32px;
}

.token-group {
  margin-bottom: 40px;
}

.group-header {
  margin-bottom: 20px;
}

.group-header h2 {
  font-size: 22px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 6px;
}

.group-header p {
  font-size: 15px;
  color: #64748b;
  margin: 0;
}

/* Color Grid */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
}

.brand-grid {
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
}

.official-grid {
  grid-template-columns: repeat(3, 1fr);
  max-width: 500px;
}

.gray-grid {
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
}

.color-card {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: white;
  transition: all 0.2s;
}

.color-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.color-card:hover .copy-indicator {
  opacity: 1;
}

.color-card.primary {
  border: 2px solid #0156C6;
}

.color-swatch {
  height: 56px;
  position: relative;
}

.color-swatch.large {
  height: 72px;
}

.primary-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 8px;
  background: white;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #0156C6;
}

.color-info {
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.color-name {
  font-size: 13px;
  font-weight: 600;
  color: #334155;
}

.color-value {
  font-size: 11px;
  color: #64748b;
  font-family: 'Fira Code', monospace;
}

.copy-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.15s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.copy-indicator.small {
  width: 24px;
  height: 24px;
}

/* Semantic Tabs */
.semantic-tabs,
.gray-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.semantic-tab,
.gray-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s;
}

.semantic-tab:hover,
.gray-tab:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.semantic-tab.active,
.gray-tab.active {
  border-color: #0156C6;
  color: #0156C6;
  background: #f0f7ff;
}

.semantic-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.gray-desc {
  font-size: 11px;
  color: #94a3b8;
  margin-left: 4px;
}

/* Typography Preview */
.typography-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.type-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.type-row:hover {
  background: #f0f7ff;
  border-color: #0156C6;
}

.type-row:hover .copy-indicator {
  opacity: 1;
}

.type-sample {
  width: 60px;
  font-weight: 600;
  color: #0f172a;
}

.type-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.type-token {
  font-size: 14px;
  font-weight: 500;
  color: #334155;
}

.type-value {
  font-size: 12px;
  color: #64748b;
  font-family: 'Fira Code', monospace;
}

/* Weight Grid */
.weight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
}

.weight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.weight-card:hover {
  background: #f0f7ff;
  border-color: #0156C6;
}

.weight-sample {
  font-size: 32px;
  color: #0f172a;
  margin-bottom: 8px;
}

.weight-token {
  font-size: 12px;
  font-weight: 500;
  color: #334155;
}

.weight-value {
  font-size: 11px;
  color: #64748b;
}

/* Line Height Preview */
.lineheight-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.lh-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.lh-row:hover {
  background: #f0f7ff;
  border-color: #0156C6;
}

.lh-visual {
  width: 40px;
}

.lh-lines {
  background: #e0f2fe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.lh-text {
  font-size: 12px;
  font-weight: 500;
  color: #0369a1;
}

.lh-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.lh-token {
  font-size: 13px;
  font-weight: 500;
  color: #334155;
}

.lh-value {
  font-size: 11px;
  color: #64748b;
}

/* Spacing Preview */
.spacing-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spacing-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.spacing-row:hover {
  background: #f0f7ff;
  border-color: #0156C6;
}

.spacing-row:hover .copy-indicator {
  opacity: 1;
}

.spacing-visual {
  width: 120px;
}

.spacing-bar {
  height: 16px;
  background: linear-gradient(90deg, #0156C6, #3b82f6);
  border-radius: 4px;
  min-width: 4px;
}

.spacing-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spacing-token {
  font-size: 13px;
  font-weight: 500;
  color: #334155;
}

.spacing-value {
  font-size: 11px;
  color: #64748b;
  font-family: 'Fira Code', monospace;
}

/* Radius Grid */
.radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 12px;
}

.radius-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.radius-card:hover {
  background: #f0f7ff;
  border-color: #0156C6;
}

.radius-visual {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0156C6, #3b82f6);
  margin-bottom: 10px;
}

.radius-token {
  font-size: 12px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 2px;
}

.radius-value {
  font-size: 11px;
  color: #64748b;
}

/* Shadow Grid */
.shadow-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.shadow-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
}

.shadow-card:hover {
  border-color: #0156C6;
}

.shadow-preview {
  width: 80px;
  height: 48px;
  background: white;
  border-radius: 8px;
  flex-shrink: 0;
}

.shadow-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.shadow-token {
  font-size: 15px;
  font-weight: 600;
  color: #334155;
}

.shadow-value {
  font-size: 12px;
  color: #64748b;
  font-family: 'Fira Code', monospace;
  word-break: break-all;
}

/* Usage Section */
.usage-section {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
}

.usage-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.usage-code {
  background: #1e293b;
  border-radius: 10px;
  overflow: hidden;
}

.usage-code pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
}

.usage-code code {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #e2e8f0;
}

/* Responsive */
@media (max-width: 768px) {
  .tokens-guide {
    padding: 0 16px 32px;
  }
  
  .tokens-hero {
    margin: 0 -16px 24px;
    padding: 32px 16px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-description {
    font-size: 15px;
  }
  
  .hero-stats {
    gap: 24px;
  }
  
  .stat-value {
    font-size: 24px;
  }
  
  .official-grid {
    grid-template-columns: 1fr;
  }
  
  .shadow-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Dark mode */
.dark .tokens-guide {
  color: #e2e8f0;
}

.dark .tokens-hero {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-bottom-color: #334155;
}

.dark .hero-badge {
  background: #334155;
  color: #60a5fa;
}

.dark .hero-title {
  color: #f8fafc;
}

.dark .hero-description {
  color: #94a3b8;
}

.dark .install-card,
.dark .color-card,
.dark .type-row,
.dark .weight-card,
.dark .lh-row,
.dark .spacing-row,
.dark .radius-card,
.dark .shadow-card {
  background: #1e293b;
  border-color: #334155;
}

.dark .search-box {
  background: #1e293b;
  border-color: #334155;
}

.dark .search-box input {
  color: #e2e8f0;
}

.dark .category-tab,
.dark .semantic-tab,
.dark .gray-tab {
  background: #1e293b;
  border-color: #334155;
  color: #94a3b8;
}

.dark .category-tab.active {
  background: #0156C6;
  border-color: #0156C6;
  color: white;
}

.dark .semantic-tab.active,
.dark .gray-tab.active {
  background: rgba(1, 86, 198, 0.2);
  border-color: #0156C6;
  color: #60a5fa;
}

.dark .group-header h2 {
  color: #f8fafc;
}

.dark .group-header p {
  color: #94a3b8;
}

.dark .color-name,
.dark .type-token,
.dark .weight-token,
.dark .lh-token,
.dark .spacing-token,
.dark .radius-token,
.dark .shadow-token {
  color: #e2e8f0;
}

.dark .color-value,
.dark .type-value,
.dark .weight-value,
.dark .lh-value,
.dark .spacing-value,
.dark .radius-value,
.dark .shadow-value {
  color: #94a3b8;
}

.dark .type-row:hover,
.dark .weight-card:hover,
.dark .lh-row:hover,
.dark .spacing-row:hover,
.dark .radius-card:hover,
.dark .shadow-card:hover {
  background: rgba(1, 86, 198, 0.1);
  border-color: #0156C6;
}
</style>
