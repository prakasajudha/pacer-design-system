# Design Tokens

Design tokens are the foundation of the PACER Design System. They ensure consistency across all frameworks (React, Vue, and Blazor) by providing a single source of truth for colors, spacing, typography, and other design decisions.

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain a consistent visual system.

## Why Design Tokens?

### ✅ Consistency

All frameworks use the exact same values for colors, spacing, and typography.

### ✅ Maintainability

Update a token once, and it propagates to all components across all frameworks.

### ✅ Scalability

Easy to add themes, dark mode, or brand variations.

### ✅ Framework Agnostic

Tokens work with React, Vue, Blazor, CSS, and more.

---

## Installation

::: code-group

```bash [npm]
npm install @pacer-ui/tokens
```

```bash [pnpm]
pnpm add @pacer-ui/tokens
```

```bash [yarn]
yarn add @pacer-ui/tokens
```

:::

---

## Color Tokens

### Primary Colors

Pertamina's brand colors.

```css
/* Pertamina Teal */
--color-primary-50: #e6f7f7;
--color-primary-100: #ccefee;
--color-primary-200: #99dfdd;
--color-primary-300: #66cfcc;
--color-primary-400: #33bfbb;
--color-primary-500: #00a19b; /* Main brand color */
--color-primary-600: #008a85;
--color-primary-700: #007570;
--color-primary-800: #005f5a;
--color-primary-900: #004a45;
```

**Usage:**
::: code-group

```tsx [React]
import { colors } from '@pacer-ui/tokens';

const primary = colors.primary[500]; // #00A19B
```

```vue [Vue]
import { colors } from '@pacer-ui/tokens'; const primary = colors.primary[500]; // #00A19B
```

```razor [Blazor]
// In CSS or Tailwind config
.bg-primary {
  background-color: var(--color-primary-500);
}
```

:::

### Neutral Colors

Grays for text, backgrounds, and borders.

```css
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;
```

### Semantic Colors

#### Success (Green)

```css
--color-success-50: #f0fdf4;
--color-success-500: #10b981;
--color-success-600: #059669;
--color-success-700: #047857;
```

#### Error (Red)

```css
--color-error-50: #fef2f2;
--color-error-500: #ef4444;
--color-error-600: #dc2626;
--color-error-700: #b91c1c;
```

#### Warning (Amber)

```css
--color-warning-50: #fffbeb;
--color-warning-500: #f59e0b;
--color-warning-600: #d97706;
--color-warning-700: #b45309;
```

#### Info (Blue)

```css
--color-info-50: #eff6ff;
--color-info-500: #3b82f6;
--color-info-600: #2563eb;
--color-info-700: #1d4ed8;
```

---

## Spacing Tokens

Consistent spacing scale based on 4px grid.

```css
--spacing-0: 0;
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-5: 1.25rem; /* 20px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-10: 2.5rem; /* 40px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
--spacing-20: 5rem; /* 80px */
--spacing-24: 6rem; /* 96px */
```

**Usage:**
::: code-group

```tsx [React]
import { spacing } from '@pacer-ui/tokens';

// Component with spacing
<div style={{ padding: spacing[4], margin: spacing[2] }}>Content</div>;
```

```vue [Vue]
import { spacing } from '@pacer-ui/tokens'; // Component with spacing
<div :style="{ padding: spacing[4], margin: spacing[2] }">
  Content
</div>
```

```css [CSS]
.card {
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-4);
}
```

:::

---

## Typography Tokens

### Font Families

```css
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

### Font Sizes

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights

```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

**Usage:**
::: code-group

```tsx [React]
import { typography } from '@pacer-ui/tokens';

<h1
  style={{
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  }}
>
  Heading
</h1>;
```

```vue [Vue]
import { typography } from '@pacer-ui/tokens';

<h1
  :style="{
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  }"
>
  Heading
</h1>
```

```css [CSS]
h1 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

:::

---

## Border Radius Tokens

```css
--radius-none: 0;
--radius-sm: 0.25rem; /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */
--radius-xl: 0.75rem; /* 12px */
--radius-2xl: 1rem; /* 16px */
--radius-full: 9999px; /* Fully rounded */
```

---

## Shadow Tokens

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## Transition Tokens

```css
--transition-fast: 150ms ease-in-out;
--transition-normal: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

---

## Z-Index Tokens

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

---

## Using Tokens in Your Project

### React & Vue (JavaScript/TypeScript)

```ts
import { colors, spacing, typography, borderRadius, shadows } from '@pacer-ui/tokens';

// Use in styled components
const StyledButton = styled.button`
  background-color: ${colors.primary[500]};
  padding: ${spacing[4]};
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.base};
  box-shadow: ${shadows.md};
`;
```

### Tailwind CSS

```js
// tailwind.config.js
import { tokens } from '@pacer-ui/tokens';

export default {
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.typography.fontSize,
      fontFamily: tokens.typography.fontFamily,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
    },
  },
};
```

### CSS Variables

```css
/* Import tokens as CSS variables */
@import '@pacer-ui/tokens/css';

.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-size: var(--font-size-base);
  border-radius: var(--radius-md);
}
```

### Blazor (CSS)

```css
/* In your Blazor app's CSS */
:root {
  /* Colors */
  --primary-color: #00a19b;
  --text-color: #374151;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}

/* Use in components */
.pt-button-primary {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
}
```

---

## Token Categories

| Category      | Tokens Count | Description                       |
| ------------- | ------------ | --------------------------------- |
| Colors        | 60+          | Primary, neutral, semantic colors |
| Spacing       | 13           | Consistent spacing scale          |
| Typography    | 20+          | Font sizes, weights, line heights |
| Border Radius | 7            | Rounded corners                   |
| Shadows       | 5            | Elevation levels                  |
| Transitions   | 3            | Animation timings                 |
| Z-Index       | 7            | Layer management                  |

---

## Token Naming Convention

All tokens follow a consistent naming pattern:

```
{category}-{property}-{scale}
```

Examples:

- `color-primary-500` - Primary color at 500 scale
- `spacing-4` - Spacing at 4 scale (16px)
- `font-size-lg` - Large font size
- `radius-md` - Medium border radius

---

## Semantic vs Raw Tokens

### Raw Tokens

Direct values (colors, sizes).

```ts
colors.primary[500]; // #00A19B
spacing[4]; // 1rem (16px)
```

### Semantic Tokens

Purpose-driven values.

```ts
colors.success[500]; // For success messages
colors.error[600]; // For error states
```

Use semantic tokens when possible for better maintainability.

---

## Dark Mode Support

Tokens are designed to support dark mode:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #111827;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #111827;
    --text-primary: #f9fafb;
  }
}
```

---

## Best Practices

### ✅ Do

- Use tokens consistently across all components
- Prefer semantic tokens (success, error) over raw colors
- Use the spacing scale for all margins and padding
- Follow the typography scale for font sizes

### ❌ Don't

- Don't hard-code colors, use tokens
- Don't create custom spacing values outside the scale
- Don't mix token systems
- Don't override token values in components

---

## Token Updates

Design tokens are versioned and published alongside the component libraries. When tokens are updated:

1. **Patch version**: Bug fixes in token values
2. **Minor version**: New tokens added
3. **Major version**: Breaking changes to existing tokens

Always check the [CHANGELOG](/CHANGELOG) when updating.

---

## Contributing

Want to propose new tokens or changes? See our [Contributing Guide](/CONTRIBUTING).

---

## Related

- [Colors Deep Dive](/tokens/colors)
- [Typography Guide](/tokens/typography)
- [Spacing System](/tokens/spacing)
- [Theming Guide](/theming)
