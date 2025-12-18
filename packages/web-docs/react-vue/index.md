---
layout: home

hero:
  name: 'PACER'
  text: 'Design System'
  tagline: 'Pertamina Patra Niaga Components & Experience Resources'
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/pertamina/design-system
  image:
    src: /logo-large.svg
    alt: PACER

features:
  - icon: ⚛️
    title: React Components
    details: Production-ready React components built with Radix UI and TypeScript
  - icon: 💚
    title: Vue Components
    details: Modern Vue 3 components with Composition API and full TypeScript support
  - icon: 🟣
    title: Blazor Components
    details: Native .NET 8 Blazor Razor components for enterprise applications
  - icon: 🎨
    title: Design Tokens
    details: Framework-agnostic design tokens for consistent styling across platforms
  - icon: ♿
    title: Accessible by Default
    details: WCAG 2.1 Level AA compliant components out of the box
  - icon: 🚀
    title: Developer Experience
    details: Full TypeScript support, comprehensive docs, and great DX
---

## Quick Start

::: code-group

```bash [React]
npm install @pacer-ui/react
```

```bash [Vue]
npm install @pertamina/design-system-vue
```

```bash [Blazor]
dotnet add package Pertamina.DesignSystem.Blazor
```

:::

## Usage Example

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';
import '@pacer-ui/react/dist/styles.css';

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

```vue [Vue]
<script setup>
import { PtButton } from '@pertamina/design-system-vue';
import '@pertamina/design-system-vue/dist/styles.css';
</script>

<template>
  <PtButton variant="primary">Click me</PtButton>
</template>
```

```razor [Blazor]
@using Pertamina.DesignSystem.Blazor

<PtButton Variant="ButtonVariant.Primary">
    Click me
</PtButton>
```

:::
