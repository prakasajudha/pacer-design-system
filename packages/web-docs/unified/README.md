# PACER Unified Web Documentation

Comprehensive documentation for the PACER Design System covering React, Vue, and Blazor.

## 📦 Package Structure

This is the unified documentation package that provides comprehensive guides and component documentation for all three PACER framework implementations.

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm docs:dev
```

Visit `http://localhost:5173` to view the documentation.

### Build

```bash
# Build static documentation site
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## 📚 Documentation Structure

```
packages/web-docs/unified/
├── .vitepress/
│   └── config.ts          # VitePress configuration
├── components/
│   ├── index.md           # Component overview
│   ├── button.md          # Button documentation (all frameworks)
│   ├── card.md            # Card documentation (all frameworks)
│   └── input.md           # Input documentation (all frameworks)
├── frameworks/
│   ├── react.md           # React-specific guide
│   ├── vue.md             # Vue-specific guide
│   └── blazor.md          # Blazor-specific guide
├── index.md               # Home page
├── introduction.md        # Introduction to PACER
├── getting-started.md     # Installation guide
└── tokens.md              # Design tokens documentation
```

## ✨ Features

### Multi-Framework Support

Each component page includes tabs for React, Vue, and Blazor implementations showing:

- Installation instructions
- Basic usage examples
- Props/Parameters API
- Events/Callbacks
- TypeScript/C# types
- Accessibility features
- Best practices

### Design Consistency Documentation

All component pages document:

- ✅ Exact spacing values (px/rem)
- ✅ Color tokens and hex values
- ✅ Typography scales
- ✅ Border radius values
- ✅ Shadow specifications
- ✅ Transition timings

### Framework-Specific Guides

Dedicated guides for each framework covering:

- Setup and configuration
- Component patterns
- State management
- Form handling
- Routing integration
- Testing strategies
- Performance optimization

### Design Tokens

Comprehensive token documentation:

- Color palettes (60+ shades)
- Spacing scale (13 levels)
- Typography system
- Border radius
- Shadows
- Transitions
- Usage examples for all frameworks

## 📖 Writing Documentation

### Component Documentation Template

````markdown
# Component Name

Brief description of the component.

## Overview

Description with design consistency table.

## Design Consistency

| Property | Value | Applied To |
| -------- | ----- | ---------- |
| ...      | ...   | ...        |

## Installation & Import

::: code-group

```tsx [React]
import { Component } from '@pacer-ui/react';
```
````

```vue [Vue]
import { PtComponent } from '@pacer-ui/vue';
```

```razor [Blazor]
@using Pertamina.DesignSystem.Blazor
```

:::

## Basic Usage

[Examples for all three frameworks using code groups]

## API Reference

[Separate tables for React, Vue, and Blazor]

## Accessibility

[Accessibility features and WCAG compliance]

## Examples

[Real-world usage examples]

````

### Code Group Pattern

Always use code groups for multi-framework examples:

```markdown
::: code-group

```tsx [React]
// React code
````

```vue [Vue]
// Vue code
```

```razor [Blazor]
// Blazor code
```

:::

```

## 🎨 Styling

The documentation uses VitePress's default theme with PACER branding:
- Primary color: `#00A19B` (Pertamina Teal)
- Font: Inter
- Code font: JetBrains Mono

## 🔗 Links

- Main Repository: [github.com/prakasajudha/pacer-design-system](https://github.com/prakasajudha/pacer-design-system)
- NPM Organization: [@pacer-ui](https://www.npmjs.com/org/pacer-ui)
- Storybook (React): [React Storybook](../../storybook/react)
- Storybook (Vue): [Vue Storybook](../../storybook/vue)

## 📝 Contributing

When adding new component documentation:

1. Create a new markdown file in `components/`
2. Use the component documentation template
3. Include examples for all three frameworks
4. Document design specifications (spacing, colors, etc.)
5. Add to sidebar in `.vitepress/config.ts`
6. Test locally before committing

## 🐛 Issues

If you find issues in the documentation:
1. Check existing [issues](https://github.com/prakasajudha/pacer-design-system/issues)
2. Create a new issue with the `documentation` label
3. Provide the page URL and description of the issue

## 📜 License

MIT License - see the [LICENSE](../../../LICENSE) file for details.

---

**Built with ❤️ by Pertamina Patra Niaga**
```
