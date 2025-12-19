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
      text: View Components
      link: /components/
    - theme: alt
      text: GitHub
      link: https://github.com/pertamina/design-system

features:
  - icon: ⚛️
    title: React Components
    details: Production-ready React components built with Radix UI and TypeScript. Full accessibility and modern patterns.
  - icon: 💚
    title: Vue 3 Components
    details: Modern Vue 3 components with Composition API, full TypeScript support, and reactive by default.
  - icon: 🟣
    title: Blazor Components
    details: Native .NET 8 Blazor Razor components for enterprise applications with C# type safety.
  - icon: 🎨
    title: Design Tokens
    details: Framework-agnostic design tokens ensuring consistent colors, spacing, typography across all platforms.
  - icon: ♿
    title: Accessible
    details: WCAG 2.1 Level AA compliant components out of the box with keyboard navigation and screen reader support.
  - icon: 🚀
    title: Developer Experience
    details: Comprehensive documentation, TypeScript support, and intuitive APIs for all frameworks.
  - icon: 🎯
    title: Consistent Design
    details: Same look, feel, and behavior across React, Vue, and Blazor implementations.
  - icon: ⚡
    title: Performance
    details: Optimized for production with tree-shaking, lazy loading, and minimal bundle size.
  - icon: 🔧
    title: Customizable
    details: Easily theme and customize components using Tailwind CSS and design tokens.
---

## Why PACER?

PACER (Pertamina Patra Niaga Components & Experience Resources) is a comprehensive design system that provides consistent UI components across React, Vue, and Blazor. Built with accessibility, performance, and developer experience in mind.

### ✅ Unified Design Language

All components maintain the same visual design, spacing, colors, and interactions across all three frameworks. Write once, use everywhere with confidence.

### ✅ Enterprise Ready

Built for Pertamina Patra Niaga's enterprise applications with security, accessibility, and scalability as core principles.

### ✅ Modern Stack

Leveraging the latest technologies:

- **React 18+** with Radix UI primitives
- **Vue 3** with Composition API
- **.NET 8** Blazor components
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Quick Start

Choose your framework and get started in minutes:

::: code-group

```bash [React]
# Install the React package
npm install @pacer-ui/react

# Import and use
import { Button } from '@pacer-ui/react';

function App() {
  return <Button>Hello PACER</Button>;
}
```

```bash [Vue]
# Install the Vue package
npm install @pacer-ui/vue

# Import and use
import { PtButton } from '@pacer-ui/vue';
```

```bash [Blazor]
# Install the Blazor package
dotnet add package Pertamina.DesignSystem.Blazor

# Add to _Imports.razor
@using Pertamina.DesignSystem.Blazor

# Use in your component
<PtButton Variant="ButtonVariant.Primary">
    Hello PACER
</PtButton>
```

:::

## Consistency Across Frameworks

Every component is designed to work identically across all frameworks:

| Feature       | React            | Vue              | Blazor           |
| ------------- | ---------------- | ---------------- | ---------------- |
| Design        | ✅ Identical     | ✅ Identical     | ✅ Identical     |
| Colors        | ✅ Same tokens   | ✅ Same tokens   | ✅ Same tokens   |
| Spacing       | ✅ Same values   | ✅ Same values   | ✅ Same values   |
| Typography    | ✅ Same scales   | ✅ Same scales   | ✅ Same scales   |
| Accessibility | ✅ WCAG AA       | ✅ WCAG AA       | ✅ WCAG AA       |
| Interactions  | ✅ Same behavior | ✅ Same behavior | ✅ Same behavior |

## Community & Support

- 📖 [Documentation](https://pacer-ui.pertamina.com)
- 💬 [GitHub Discussions](https://github.com/pertamina/design-system/discussions)
- 🐛 [Issue Tracker](https://github.com/pertamina/design-system/issues)
- 📦 [NPM Packages](https://www.npmjs.com/org/pacer-ui)
