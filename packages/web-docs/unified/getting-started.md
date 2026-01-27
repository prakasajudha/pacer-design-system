---
layout: doc
---
<InstallationGuide />

## Design Tokens

All frameworks use the same design tokens for consistency:

```bash
# Optional: Install design tokens for custom theming
npm install @pacer-ui/tokens
```

Learn more about [Design Tokens](/tokens).

## Tailwind CSS Configuration

PACER components are built with Tailwind CSS. If you want to customize the design system:

### React & Vue

```js
// tailwind.config.js
import { pacerPreset } from '@pacer-ui/tailwind';

export default {
  presets: [pacerPreset],
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/@pacer-ui/react/**/*.{js,jsx}',
    './node_modules/@pacer-ui/vue/**/*.{js,vue}',
  ],
};
```

### Blazor

```js
// tailwind.config.js in your Blazor project
module.exports = {
  content: ['./**/*.razor', './**/*.cshtml', './**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          // ... PACER color tokens
        },
      },
    },
  },
};
```

## IntelliSense & Type Safety

### TypeScript (React & Vue)

All components come with full TypeScript definitions:

```tsx
import type { ButtonProps } from '@pacer-ui/react';

const buttonProps: ButtonProps = {
  variant: 'primary', // Autocomplete available!
  size: 'lg',
  disabled: false,
};
```

### C# (Blazor)

Full IntelliSense support in Visual Studio:

```razor
<PtButton
  Variant="ButtonVariant.Primary"  @* IntelliSense works! *@
  Size="ButtonSize.Large"
  OnClick="HandleClick">
    Click me
</PtButton>
```

## Next Steps

- 📦 [Browse Components](/components/)
- 🎨 [Explore Design Tokens](/tokens)
- 🎯 [Learn Best Practices](/design-principles)
- 🔧 [Customize Your Theme](/tokens#using-tokens-in-your-project)

## Need Help?

- 📖 Check out our [FAQ](/faq)
- 💬 Join [GitHub Discussions](https://github.com/pertamina/design-system/discussions)
- 🐛 [Report Issues](https://github.com/pertamina/design-system/issues)

---

## Detailed Installation Guides

### React Installation

### Prerequisites

- Node.js 18+ or 20+
- React 18+
- TypeScript 5+ (recommended)

### Installation

::: code-group

```bash [npm]
npm install @pacer-ui/react
```

```bash [pnpm]
pnpm add @pacer-ui/react
```

```bash [yarn]
yarn add @pacer-ui/react
```

:::

### Setup

1. **Import the styles** in your main entry file:

```tsx
// main.tsx or App.tsx
import '@pacer-ui/react/styles.css';
```

2. **Start using components**:

```tsx
import { Button, Card, Input } from '@pacer-ui/react';

function App() {
  return (
    <Card>
      <h2>Welcome to PACER</h2>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

---

## Vue Installation

### Prerequisites

- Node.js 18+ or 20+
- Vue 3.4+
- TypeScript 5+ (recommended)

### Installation

::: code-group

```bash [npm]
npm install @pacer-ui/vue
```

```bash [pnpm]
pnpm add @pacer-ui/vue
```

```bash [yarn]
yarn add @pacer-ui/vue
```

:::

### Setup

1. **Import the styles** in your main entry file:

```ts
// main.ts
import '@pacer-ui/vue/styles.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

2. **Start using components**:

```vue
<script setup lang="ts">
import { PtButton, PtCard, PtInput } from '@pacer-ui/vue';
</script>

<template>
  <PtCard>
    <h2>Welcome to PACER</h2>
    <PtInput placeholder="Enter your name" />
    <PtButton variant="primary">Submit</PtButton>
  </PtCard>
</template>
```

---

## Blazor Installation

### Prerequisites

- .NET 8 SDK
- Visual Studio 2022 or VS Code with C# extension

### Installation

```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

### Setup

1. **Add the namespace** to `_Imports.razor`:

```razor
@using Pertamina.DesignSystem.Blazor
```

2. **Include the CSS** in your `App.razor` or `MainLayout.razor`:

```razor
<link href="_content/Pertamina.DesignSystem.Blazor/styles.css" rel="stylesheet" />
```

3. **Start using components**:

```razor
<PtCard>
    <h2>Welcome to PACER</h2>
    <PtInput Placeholder="Enter your name" />
    <PtButton Variant="ButtonVariant.Primary">
        Submit
    </PtButton>
</PtCard>

@code {
    // Component logic here
}
```

---

## Design Tokens

All frameworks use the same design tokens for consistency:

```bash
# Optional: Install design tokens for custom theming
npm install @pacer-ui/tokens
```

Learn more about [Design Tokens](/tokens).

## Tailwind CSS Configuration

PACER components are built with Tailwind CSS. If you want to customize the design system:

### React & Vue

```js
// tailwind.config.js
import { pacerPreset } from '@pacer-ui/tailwind';

export default {
  presets: [pacerPreset],
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/@pacer-ui/react/**/*.{js,jsx}',
    './node_modules/@pacer-ui/vue/**/*.{js,vue}',
  ],
};
```

### Blazor

```js
// tailwind.config.js in your Blazor project
module.exports = {
  content: ['./**/*.razor', './**/*.cshtml', './**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          // ... PACER color tokens
        },
      },
    },
  },
};
```

## IntelliSense & Type Safety

### TypeScript (React & Vue)

All components come with full TypeScript definitions:

```tsx
import type { ButtonProps } from '@pacer-ui/react';

const buttonProps: ButtonProps = {
  variant: 'primary', // Autocomplete available!
  size: 'lg',
  disabled: false,
};
```

### C# (Blazor)

Full IntelliSense support in Visual Studio:

```razor
<PtButton
  Variant="ButtonVariant.Primary"  @* IntelliSense works! *@
  Size="ButtonSize.Large"
  OnClick="HandleClick">
    Click me
</PtButton>
```

## Next Steps

- 📦 [Browse Components](/components/)
- 🎨 [Explore Design Tokens](/tokens)
- 🎯 [Learn Best Practices](/design-principles)
- 🔧 [Customize Your Theme](/tokens#using-tokens-in-your-project)

## Need Help?

- 📖 Check out our [FAQ](/faq)
- 💬 Join [GitHub Discussions](https://github.com/pertamina/design-system/discussions)
- 🐛 [Report Issues](https://github.com/pertamina/design-system/issues)
