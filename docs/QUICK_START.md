# Quick Start Guide

Panduan cepat untuk mulai menggunakan PACER (Pertamina Patra Niaga Components & Experience Resources).

---

## 🎯 Pilih Framework Anda

<table>
<tr>
<td width="33%">

### React
```bash
npm install @pacer/design-system-react
```
[→ React Guide](#react-quick-start)

</td>
<td width="33%">

### Vue
```bash
npm install @pacer/design-system-vue
```
[→ Vue Guide](#vue-quick-start)

</td>
<td width="33%">

### Blazor
```bash
dotnet add package Pertamina.DesignSystem.Blazor
```
[→ Blazor Guide](#blazor-quick-start)

</td>
</tr>
</table>

---

## React Quick Start

### 1. Install

```bash
# Using npm
npm install @pacer/design-system-react

# Using pnpm
pnpm add @pacer/design-system-react

# Using yarn
yarn add @pacer/design-system-react
```

### 2. Setup CSS

```tsx
// src/main.tsx or src/index.tsx
import '@pacer/design-system-react/styles.css';
```

### 3. Use Components

```tsx
import { Button, Input, Card } from '@pacer/design-system-react';

function App() {
  return (
    <div className="p-6">
      <Card padding="lg">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
        
        <Input
          label="Email"
          type="email"
          placeholder="nama@email.com"
          className="mb-4"
        />
        
        <Button variant="primary" fullWidth>
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

### 4. (Optional) Configure Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pacer/tailwind-preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@pacer/design-system-react/dist/**/*.{js,mjs}',
  ],
};
```

### Next Steps

- [Component Docs](https://design-system.pertamina.com/react)
- [Storybook](https://storybook.pertamina.com/react)
- [Examples](https://github.com/pertamina/design-system/tree/main/examples/react)

---

## Vue Quick Start

### 1. Install

```bash
# Using npm
npm install @pacer/design-system-vue

# Using pnpm
pnpm add @pacer/design-system-vue

# Using yarn
yarn add @pacer/design-system-vue
```

### 2. Setup Plugin & CSS

```ts
// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import PertaminaDesignSystem from '@pacer/design-system-vue';
import '@pacer/design-system-vue/styles.css';

const app = createApp(App);
app.use(PertaminaDesignSystem);
app.mount('#app');
```

### 3. Use Components

```vue
<template>
  <div class="p-6">
    <PtCard padding="lg">
      <template #header>
        <h1 class="text-2xl font-bold">Welcome!</h1>
      </template>
      
      <PtInput
        v-model="email"
        label="Email"
        type="email"
        placeholder="nama@email.com"
        class="mb-4"
      />
      
      <PtButton variant="primary" full-width>
        Get Started
      </PtButton>
    </PtCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PtButton, PtInput, PtCard } from '@pacer/design-system-vue';

const email = ref('');
</script>
```

### 4. (Optional) Configure Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pacer/tailwind-preset')],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@pacer/design-system-vue/dist/**/*.{js,mjs}',
  ],
};
```

### Next Steps

- [Component Docs](https://design-system.pertamina.com/vue)
- [Storybook](https://storybook.pertamina.com/vue)
- [Examples](https://github.com/pertamina/design-system/tree/main/examples/vue)

---

## Blazor Quick Start

### 1. Install

```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

### 2. Add CSS Reference

**Blazor Server** (`_Host.cshtml` atau `_Layout.cshtml`):

```html
<link href="_content/Pertamina.DesignSystem.Blazor/css/pertamina-design-system.css" rel="stylesheet" />
```

**Blazor WebAssembly** (`wwwroot/index.html`):

```html
<link href="_content/Pertamina.DesignSystem.Blazor/css/pertamina-design-system.css" rel="stylesheet" />
```

### 3. Add Namespace

```razor
@* _Imports.razor *@
@using Pertamina.DesignSystem.Blazor
```

### 4. Use Components

```razor
@page "/welcome"

<div class="p-6">
    <PtCard Padding="CardPadding.Large">
        <Header>
            <h1 class="text-2xl font-bold">Welcome!</h1>
        </Header>
        
        <ChildContent>
            <PtInput 
                @bind-Value="email"
                Label="Email"
                Type="InputType.Email"
                Placeholder="nama@email.com"
                class="mb-4" />
            
            <PtButton 
                Variant="ButtonVariant.Primary" 
                FullWidth="true"
                OnClick="HandleGetStarted">
                Get Started
            </PtButton>
        </ChildContent>
    </PtCard>
</div>

@code {
    private string email = "";

    private async Task HandleGetStarted()
    {
        // Your logic here
    }
}
```

### Next Steps

- [Component Docs](https://design-system.pertamina.com/blazor)
- [API Reference](https://design-system.pertamina.com/blazor/api)
- [Examples](https://github.com/pertamina/design-system/tree/main/examples/blazor)

---

## 🎨 Design Tokens

Gunakan design tokens untuk custom styling:

### React/Vue

```tsx
import { tokens } from '@pacer/tokens';

const myColor = tokens.colors.brand.primary[500]; // #0073e6
const mySpacing = tokens.spacing[4]; // 16px
```

### CSS

```css
/* Using Tailwind classes */
.my-button {
  @apply bg-brand-primary-500 text-neutral-0 px-4 py-2 rounded-md;
}

/* Using CSS custom properties */
.my-button {
  background-color: var(--color-brand-primary-500);
  color: var(--color-neutral-0);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}
```

---

## 🚀 Common Patterns

### Form with Validation

**React:**
```tsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setError('Email tidak valid');
      return;
    }
    // Submit logic
  };

  return (
    <form>
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </form>
  );
}
```

**Vue:**
```vue
<script setup lang="ts">
const email = ref('');
const error = computed(() => 
  email.value && !email.value.includes('@') 
    ? 'Email tidak valid' 
    : ''
);

const handleSubmit = () => {
  if (!error.value) {
    // Submit logic
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <PtInput 
      v-model="email" 
      label="Email" 
      :error="error" 
    />
    <PtButton @click="handleSubmit">Login</PtButton>
  </form>
</template>
```

**Blazor:**
```razor
<EditForm Model="loginModel" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <PtInput 
        @bind-Value="loginModel.Email"
        Label="Email"
        Type="InputType.Email" />
    <ValidationMessage For="() => loginModel.Email" />
    
    <PtButton Type="submit">Login</PtButton>
</EditForm>

@code {
    private LoginModel loginModel = new();
    
    private async Task HandleSubmit()
    {
        // Submit logic
    }
}
```

---

## 🎭 Dark Mode

### React

```tsx
// Add 'dark' class to root
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-neutral-0 dark:bg-neutral-900">
      <Button onClick={() => setIsDark(!isDark)}>
        Toggle Dark Mode
      </Button>
    </div>
  );
}
```

### Vue

```vue
<script setup lang="ts">
const isDark = ref(false);

watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<template>
  <div class="bg-neutral-0 dark:bg-neutral-900">
    <PtButton @click="isDark = !isDark">
      Toggle Dark Mode
    </PtButton>
  </div>
</template>
```

### Blazor

```razor
<div class="@(isDark ? "dark" : "")">
    <div class="bg-neutral-0 dark:bg-neutral-900">
        <PtButton OnClick="ToggleDarkMode">
            Toggle Dark Mode
        </PtButton>
    </div>
</div>

@code {
    private bool isDark = false;

    private void ToggleDarkMode()
    {
        isDark = !isDark;
    }
}
```

---

## 📚 Learning Resources

- [Documentation](https://design-system.pertamina.com)
- [Storybook](https://storybook.pertamina.com)
- [GitHub Examples](https://github.com/pertamina/design-system/tree/main/examples)
- [Video Tutorials](https://youtube.com/@pertamina-design-system)

---

## 💬 Get Help

- **Slack**: #design-system
- **Email**: design-system@pertamina.com
- **Issues**: [GitHub Issues](https://github.com/pertamina/design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/pertamina/design-system/discussions)

---

## ✨ Next Steps

1. ✅ Install library
2. ✅ Import CSS
3. ✅ Use first component
4. 📖 Read component docs
5. 🎨 Explore Storybook
6. 🚀 Build your app!

Happy coding! 🎉
