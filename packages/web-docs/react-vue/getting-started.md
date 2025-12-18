# Getting Started

Welcome to PACER! This guide will help you get up and running with the design system.

## Installation

Choose your framework:

::: code-group

```bash [React]
# Using npm
npm install @pacer-ui/react

# Using pnpm
pnpm add @pacer-ui/react

# Using yarn
yarn add @pacer-ui/react
```

```bash [Vue]
# Using npm
npm install @pertamina/design-system-vue

# Using pnpm
pnpm add @pertamina/design-system-vue

# Using yarn
yarn add @pertamina/design-system-vue
```

```bash [Blazor]
dotnet add package Pertamina.DesignSystem.Blazor
```

:::

## Setup

### React

```tsx
// main.tsx or App.tsx
import '@pacer-ui/react/dist/styles.css';
import { Button } from '@pacer-ui/react';

function App() {
  return (
    <div>
      <Button>Hello PACER</Button>
    </div>
  );
}
```

### Vue

```vue
<!-- App.vue -->
<script setup>
import '@pertamina/design-system-vue/dist/styles.css';
import { PtButton } from '@pertamina/design-system-vue';
</script>

<template>
  <div>
    <PtButton>Hello PACER</PtButton>
  </div>
</template>
```

### Blazor

```razor
<!-- _Imports.razor -->
@using Pertamina.DesignSystem.Blazor

<!-- App.razor or MainLayout.razor -->
<link href="_content/Pertamina.DesignSystem.Blazor/css/pacer-design-system.css" rel="stylesheet" />

<!-- Your component -->
<PtButton>Hello PACER</PtButton>
```

## Next Steps

- 📚 [Browse Components](/components/)
- 🎨 [Learn about Design Tokens](/tokens)
- 🛠️ [Contributing Guide](/contributing)
