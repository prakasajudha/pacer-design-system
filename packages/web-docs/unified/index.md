---
layout: home
---

## Why PACER?

PACER (Pertamina Patra Niaga Components & Experience Resources) is a comprehensive design system that provides consistent UI components across React, Vue, and Blazor. Built with accessibility, performance, and developer experience in mind.

### ✅ Unified Design Language

All components maintain the same visual design, spacing, colors, and interactions across all three frameworks. Write once, use everywhere with confidence.

### ✅ Enterprise Ready

Built for Pertamina Patra Niaga's enterprise applications with security, accessibility, and scalability as core principles.

### ✅ Modern Stack

Leveraging the latest technologies:

- **React 18+**
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
- 💬 [GitHub Discussions](https://github.com/prakasajudha/pacer-design-system/discussions)
- 🐛 [Issue Tracker](https://github.com/prakasajudha/pacer-design-system/issues)
- 📦 [NPM Packages](https://www.npmjs.com/org/pacer-ui)
