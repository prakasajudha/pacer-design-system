# Introduction

Welcome to **PACER** (Pertamina Patra Niaga Components & Experience Resources) — a comprehensive design system that provides consistent UI components across React, Vue, and Blazor.

## What is PACER?

PACER is an enterprise-grade design system built for Pertamina Patra Niaga's digital products. It ensures consistency, accessibility, and quality across all applications regardless of the technology stack.

## Key Features

### 🎨 Unified Design

All components maintain identical visual design, spacing, colors, and interactions across React, Vue, and Blazor. Write once in your preferred framework, get the same result.

### ⚛️ Multi-Framework Support

- **React 18+**: Built with Radix UI primitives and modern React patterns
- **Vue 3**: Composition API with full TypeScript support
- **Blazor (.NET 8)**: Native Razor components with C# type safety

### ♿ Accessibility First

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader compatible
- Focus management
- High contrast mode support

### 🎯 Design Tokens

Framework-agnostic design tokens ensure consistency:

- Colors (60+ shades)
- Spacing (13 levels)
- Typography (complete scale)
- Border radius, shadows, and more

### 🚀 Developer Experience

- Comprehensive documentation
- TypeScript support (React/Vue)
- C# IntelliSense (Blazor)
- Storybook examples
- Live code playground

### ⚡ Production Ready

- Tree-shakeable
- Optimized bundle sizes
- Server-side rendering support
- Performance tested
- Enterprise tested

## Architecture

```
┌─────────────────────────────────────────┐
│         Design Tokens (@pacer-ui/tokens)│
│     Colors • Spacing • Typography       │
└─────────────────┬───────────────────────┘
                  │
      ┌───────────┴───────────┐
      │                       │
      ▼                       ▼
┌─────────────┐         ┌─────────────┐
│  Tailwind   │         │   Shared    │
│   Preset    │         │   Styles    │
└──────┬──────┘         └──────┬──────┘
       │                       │
       └───────────┬───────────┘
                   │
       ┌───────────┴───────────┐
       │                       │
       ▼                       ▼
┌─────────────┐         ┌─────────────┐
│    React    │         │     Vue     │
│  Components │         │  Components │
└─────────────┘         └─────────────┘
       │                       │
       └───────────┬───────────┘
                   │
                   ▼
           ┌──────────────┐
           │    Blazor    │
           │  Components  │
           └──────────────┘
```

## Who Should Use PACER?

### Frontend Developers

Building React or Vue applications with consistent UI components.

### .NET Developers

Creating Blazor Server or WebAssembly applications.

### UI/UX Designers

Designing with a consistent component library and design system.

### Product Teams

Ensuring brand consistency across all digital products.

## Component Parity

All components are available in all three frameworks with identical APIs (adapted to each framework's conventions):

| Component | React | Vue | Blazor | Status  |
| --------- | :---: | :-: | :----: | ------- |
| Button    |  ✅   | ✅  |   ✅   | Stable  |
| Input     |  ✅   | ✅  |   ✅   | Stable  |
| Card      |  ✅   | ✅  |   ✅   | Stable  |
| Select    |  🚧   | 🚧  |   🚧   | Beta    |
| Checkbox  |  🚧   | 🚧  |   🚧   | Beta    |
| More...   |  📋   | 📋  |   📋   | Planned |

## Design Philosophy

### Consistency Over Customization

While components are customizable, we prioritize consistency across the design system.

### Accessibility is Not Optional

All components meet WCAG 2.1 Level AA standards out of the box.

### Performance Matters

Components are optimized for production with minimal bundle impact.

### Developer Happiness

Clear APIs, comprehensive docs, and great tooling make development enjoyable.

### Enterprise Ready

Built for scale with security, i18n, and maintainability in mind.

## Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari 14+, Chrome Android latest

## Technology Stack

### React Package

- React 18+
- Radix UI
- Tailwind CSS 3+
- TypeScript 5+

### Vue Package

- Vue 3.4+
- Tailwind CSS 3+
- TypeScript 5+
- Vite

### Blazor Package

- .NET 8+
- Blazor Server / WebAssembly
- Tailwind CSS 3+
- C# 12+

## Getting Started

Ready to dive in? Follow our [Getting Started Guide](/getting-started) to install PACER in your project.

Or jump directly to framework-specific guides:

- [React Guide](/frameworks/react)
- [Vue Guide](/frameworks/vue)
- [Blazor Guide](/frameworks/blazor)

## Community

- **GitHub**: [github.com/pertamina/design-system](https://github.com/pertamina/design-system)
- **NPM**: [@pacer-ui](https://www.npmjs.com/org/pacer-ui)
- **Discussions**: [GitHub Discussions](https://github.com/pertamina/design-system/discussions)
- **Issues**: [Issue Tracker](https://github.com/pertamina/design-system/issues)

## License

PACER is released under the [MIT License](https://github.com/pertamina/design-system/blob/main/LICENSE).

## Next Steps

1. 📦 [Install PACER](/getting-started) in your project
2. 🎨 Explore [Components](/components/)
3. 🎯 Learn about [Design Tokens](/tokens)
4. 📖 Read [Best Practices](/design-principles)

---

**Built with ❤️ by Pertamina Patra Niaga**
