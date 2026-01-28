<template>
  <div class="framework-guide">
    <!-- Hero Section -->
    <section class="hero-section blazor-hero">
      <div class="hero-content">
        <div class="framework-logo">
          <svg viewBox="0 0 128 128" class="blazor-icon">
            <path fill="#512BD4" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"/>
            <path fill="#fff" d="M45.4 77.5L31.6 93.1c-.6.7-.2 1.7.8 1.7h17.2c.4 0 .8-.2 1-.5l10.8-13.3c.3-.4.3-.9 0-1.3L50.6 66.5c-.2-.3-.6-.5-1-.5H32.4c-.9 0-1.4 1.1-.8 1.7l13.8 9.8zM96.4 34.3H72.2c-.4 0-.8.2-1 .5L60.4 48.1c-.3.4-.3.9 0 1.3l10.8 13.3c.2.3.6.5 1 .5h24.2c.9 0 1.4-1.1.8-1.7L83.4 51.6c-.4-.3-.4-.9 0-1.2l13.8-9.9c.6-.7.2-1.7-.8-1.7l-.8-.5z"/>
          </svg>
        </div>
        <div class="hero-badge">.NET 8</div>
        <h1 class="hero-title">PACER for Blazor</h1>
        <p class="hero-description">
          Build enterprise-grade .NET applications with type-safe Blazor components. 
          Full C# support, works with Blazor Server, WebAssembly, and .NET MAUI Hybrid.
        </p>
        <div class="hero-actions">
          <PtButton variant="solid" @click="scrollToInstall">Get Started</PtButton>
          <PtButton variant="secondary" @click="openDocs">View Documentation</PtButton>
        </div>
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="facts-section">
      <div class="facts-grid">
        <div class="fact-card">
          <div class="fact-icon blazor">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>{{ componentCount }}+ Components</h3>
          <p>Razor component library</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon csharp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <h3>Full C# Types</h3>
          <p>IntelliSense support</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Server & WASM</h3>
          <p>Both hosting models</p>
        </div>
        <div class="fact-card">
          <div class="fact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h3>Zero Dependencies</h3>
          <p>No Tailwind install needed</p>
        </div>
      </div>
    </section>

    <!-- Installation -->
    <section id="install" class="install-section">
      <h2>Quick Start</h2>
      <p class="section-desc">Get up and running in under 5 minutes</p>
      
      <div class="steps">
        <!-- Step 1 -->
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Install the NuGet package</h3>
            <div class="code-block">
              <div class="code-tabs">
                <PtButton 
                  v-for="method in ['CLI', 'Package Manager', 'PackageReference']" 
                  :key="method"
                  :variant="activeMethod === method ? 'solid' : 'ghost'"
                  size="sm"
                  @click="activeMethod = method"
                >
                  {{ method }}
                </PtButton>
              </div>
              <div class="code-content">
                <code>{{ installCommands[activeMethod] }}</code>
                <button class="copy-btn" @click="handleCopy(installCommands[activeMethod])">
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
            <h3>Add to _Imports.razor</h3>
            <div class="code-block">
              <div class="code-content">
                <pre><code>@using Pertamina.DesignSystem.Blazor</code></pre>
                <button class="copy-btn" @click="handleCopy('@using Pertamina.DesignSystem.Blazor')">
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
            <h3>Include styles (that's it!)</h3>
            <p class="step-note">All styles included. No Tailwind installation needed.</p>
            <div class="code-block">
              <div class="code-content">
                <pre><code>&lt;!-- App.razor or index.html --&gt;
&lt;link href="_content/Pertamina.DesignSystem.Blazor/css/pertamina-design-system.css" 
      rel="stylesheet" /&gt;</code></pre>
                <button class="copy-btn" @click="handleCopy(stylesCode)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>Start building</h3>
            <div class="code-block">
              <div class="code-content large">
                <pre><code>@page "/contact"

&lt;PtCard&gt;
    &lt;h2&gt;Contact Form&lt;/h2&gt;
    &lt;PtInput @bind-Value="email" 
             Placeholder="your@email.com" /&gt;
    &lt;PtButton Variant="ButtonVariant.Primary" 
              OnClick="HandleSubmit"&gt;
        Submit
    &lt;/PtButton&gt;
&lt;/PtCard&gt;

@code {
    private string email = "";
    
    private void HandleSubmit()
    {
        Console.WriteLine($"Email: {email}");
    }
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
      <p class="section-desc">All components with full C# type safety</p>
      
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
      <p class="section-desc">Blazor patterns with C# type safety</p>

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
            <span>{{ currentExample.title }}.razor</span>
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

    <!-- Hosting Models -->
    <section class="hosting-section">
      <h2>Hosting Models</h2>
      <p class="section-desc">PACER works with all Blazor hosting models</p>
      
      <div class="hosting-grid">
        <div class="hosting-card">
          <div class="hosting-icon server">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/>
              <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
          </div>
          <h3>Blazor Server</h3>
          <p>Real-time UI updates via SignalR. Great for internal apps with stable connections.</p>
          <ul>
            <li>Thin client, fast initial load</li>
            <li>Full .NET runtime on server</li>
            <li>Requires persistent connection</li>
          </ul>
        </div>
        <div class="hosting-card">
          <div class="hosting-icon wasm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <h3>Blazor WebAssembly</h3>
          <p>Client-side execution in the browser. Perfect for public-facing applications.</p>
          <ul>
            <li>Runs entirely in browser</li>
            <li>Works offline capable</li>
            <li>Larger initial download</li>
          </ul>
        </div>
        <div class="hosting-card">
          <div class="hosting-icon hybrid">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          <h3>.NET MAUI Hybrid</h3>
          <p>Native mobile and desktop apps with Blazor UI. Cross-platform development.</p>
          <ul>
            <li>iOS, Android, Windows, Mac</li>
            <li>Native device access</li>
            <li>Single codebase</li>
          </ul>
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
            <li>Use <code>@bind-Value</code> for two-way binding</li>
            <li>Leverage <code>EditForm</code> for validation</li>
            <li>Use strongly typed enums for props</li>
            <li>Handle async operations properly</li>
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
            <li>Don't call <code>StateHasChanged()</code> unnecessarily</li>
            <li>Don't forget to dispose resources</li>
            <li>Don't ignore async/await patterns</li>
            <li>Don't mix rendering modes carelessly</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section blazor-cta">
      <h2>Ready to build?</h2>
      <p>Explore all components and start building your Blazor application</p>
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

const activeMethod = ref('CLI');
const activeExample = ref('binding');
const componentCount = 20;

const installCommands: Record<string, string> = {
  'CLI': 'dotnet add package Pertamina.DesignSystem.Blazor',
  'Package Manager': 'Install-Package Pertamina.DesignSystem.Blazor',
  'PackageReference': '<PackageReference Include="Pertamina.DesignSystem.Blazor" Version="*" />',
};

const stylesCode = `<!-- App.razor or index.html -->
<link href="_content/Pertamina.DesignSystem.Blazor/css/pertamina-design-system.css" 
      rel="stylesheet" />`;

const usageCode = `@page "/contact"

<PtCard>
    <h2>Contact Form</h2>
    <PtInput @bind-Value="email" 
             Placeholder="your@email.com" />
    <PtButton Variant="ButtonVariant.Primary" 
              OnClick="HandleSubmit">
        Submit
    </PtButton>
</PtCard>

@code {
    private string email = "";
    
    private void HandleSubmit()
    {
        Console.WriteLine($"Email: {email}");
    }
}`;

const components = [
  { name: 'PtButton', link: '/components/button', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="2"/></svg>' },
  { name: 'PtInput', link: '/components/input', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="7" y2="12"/></svg>' },
  { name: 'PtCard', link: '/components/card', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>' },
  { name: 'PtModal', link: '/components/modal', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/></svg>' },
  { name: 'PtBadge', link: '/components/badge', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/></svg>' },
  { name: 'PtAvatar', link: '/components/avatar', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>' },
  { name: 'PtTabs', link: '/components/tabs', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>' },
  { name: 'PtProgress', link: '/components/progress', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="9" cy="12" r="2"/></svg>' },
];

const examples = [
  {
    id: 'binding',
    title: 'Two-Way Binding',
    preview: '<div style="display:flex;flex-direction:column;gap:12px;"><div style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;">Hello Blazor!</div><div style="font-size:13px;color:#64748b;">Value: Hello Blazor!</div></div>',
    code: `<PtInput @bind-Value="message" />
<p>Value: @message</p>

@code {
    private string message = "Hello Blazor!";
}`
  },
  {
    id: 'events',
    title: 'Event Handling',
    preview: '<div style="display:flex;gap:12px;align-items:center;"><div style="padding:8px 16px;background:#512BD4;color:white;border-radius:6px;">Click me</div><div style="font-size:13px;color:#64748b;">Clicked: 3 times</div></div>',
    code: `<PtButton OnClick="HandleClick">
    Click me
</PtButton>
<p>Clicked: @count times</p>

@code {
    private int count = 0;
    
    private void HandleClick()
    {
        count++;
    }
}`
  },
  {
    id: 'validation',
    title: 'Form Validation',
    preview: '<div style="display:flex;flex-direction:column;gap:4px;"><div style="padding:8px 12px;border:2px solid #ef4444;border-radius:6px;">bad-email</div><div style="font-size:12px;color:#ef4444;">Invalid email address</div></div>',
    code: `<EditForm Model="model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <PtInput @bind-Value="model.Email"
             Status="@(HasError ? InputStatus.Error : InputStatus.Default)"
             HelperText="@ErrorMessage" />
             
    <PtButton Type="submit">Submit</PtButton>
</EditForm>

@code {
    private FormModel model = new();
    
    public class FormModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = "";
    }
    
    private void HandleSubmit()
    {
        // Form is valid
    }
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

const openDocs = () => {
  window.open('https://github.com/pertamina/design-system', '_blank');
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

/* Hero Section - Blazor themed */
.hero-section.blazor-hero {
  text-align: center;
  padding: 64px 24px;
  background: linear-gradient(135deg, #1a1033 0%, #2d1a4d 100%);
  color: white;
  margin: 0 -24px;
}

.framework-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.blazor-icon {
  width: 100%;
  height: 100%;
}

.hero-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(81, 43, 212, 0.3);
  color: #a78bfa;
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
  color: #a3a3c2;
  max-width: 520px;
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
  background: #f3e8ff;
  border-radius: 12px;
  color: #512BD4;
}

.fact-icon.blazor {
  background: #f3e8ff;
  color: #512BD4;
}

.fact-icon.csharp {
  background: #e8f0fe;
  color: #512BD4;
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
.hosting-section h2,
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
  background: #512BD4;
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

.step-note {
  font-size: 13px;
  color: #16a34a;
  margin: 0 0 12px;
  font-weight: 500;
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
  flex-wrap: wrap;
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
  border-color: #512BD4;
  box-shadow: 0 4px 12px rgba(81, 43, 212, 0.1);
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

/* Hosting Section */
.hosting-section {
  padding: 48px 24px;
  background: #f8fafc;
  margin: 0 -24px;
}

.hosting-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.hosting-card {
  padding: 28px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.hosting-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 16px;
}

.hosting-icon.server {
  background: #fef3c7;
  color: #d97706;
}

.hosting-icon.wasm {
  background: #dbeafe;
  color: #2563eb;
}

.hosting-icon.hybrid {
  background: #f3e8ff;
  color: #9333ea;
}

.hosting-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 8px;
}

.hosting-card p {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 16px;
  line-height: 1.5;
}

.hosting-card ul {
  margin: 0;
  padding-left: 20px;
}

.hosting-card li {
  font-size: 13px;
  color: #475569;
  margin-bottom: 6px;
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

/* CTA Section - Blazor themed */
.cta-section.blazor-cta {
  padding: 64px 24px;
  background: linear-gradient(135deg, #512BD4 0%, #7c3aed 100%);
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
  
  .hosting-grid {
    grid-template-columns: 1fr;
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
.dark .hero-section.blazor-hero {
  background: linear-gradient(135deg, #0a0515 0%, #1a0f2e 100%);
}

.dark .facts-section,
.dark .components-section,
.dark .hosting-section {
  background: #0f172a;
}

.dark .fact-card,
.dark .component-card,
.dark .hosting-card {
  background: #1e293b;
  border-color: #334155;
}

.dark .fact-card h3,
.dark .component-name,
.dark .hosting-card h3,
.dark .install-section h2,
.dark .components-section h2,
.dark .examples-section h2,
.dark .hosting-section h2,
.dark .practices-section h2 {
  color: #f8fafc;
}

.dark .fact-card p,
.dark .section-desc,
.dark .hosting-card p {
  color: #94a3b8;
}

.dark .step-content h3 {
  color: #f8fafc;
}

.dark .step-note {
  color: #4ade80;
}

.dark .practice-card {
  background: #1e293b;
  border-color: #334155;
}

.dark .practice-card li,
.dark .hosting-card li {
  color: #e2e8f0;
}
</style>
