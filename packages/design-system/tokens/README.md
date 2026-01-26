# @pacer-ui/tokens

Framework-agnostic design tokens untuk PACER (Pertamina Patra Niaga Components & Experience Resources).

## Installation

```bash
npm install @pacer-ui/tokens
# or
pnpm add @pacer-ui/tokens
```

## Usage

### TypeScript/JavaScript

```typescript
import { tokens, colors, spacing, typography } from '@pacer-ui/tokens';

// Use individual tokens
const primaryColor = colors.brand.primary[500]; // #0073e6
const baseSpacing = spacing[4]; // 16px

// Use all tokens
console.log(tokens);
```

### JSON

```javascript
import tokens from '@pacer-ui/tokens/json';

// Raw token data as JSON
```

### CSS Custom Properties

```css
@import '@pacer-ui/tokens/css';

.my-component {
  color: var(--color-brand-primary-500);
  padding: var(--spacing-4);
  font-size: var(--font-size-base);
}
```

## Token Categories

### Colors
- `colors.brand.primary` - Primary brand colors
- `colors.brand.secondary` - Secondary brand colors
- `colors.success` - Success states
- `colors.warning` - Warning states
- `colors.error` - Error states
- `colors.info` - Info states
- `colors.neutral` - Neutral/grayscale colors

### Spacing
4px-based spacing scale: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24...`

### Typography
- `typography.fontFamily` - Font families
- `typography.fontSize` - Font sizes (xs - 7xl)
- `typography.fontWeight` - Font weights
- `typography.lineHeight` - Line heights
- `typography.letterSpacing` - Letter spacing

### Border Radius
From `sm` (2px) to `3xl` (24px), plus `full` (9999px)

### Shadows
Elevation system from `sm` to `2xl`

### Motion
- `motion.duration` - Animation durations
- `motion.easing` - Easing functions

### Breakpoints
Responsive breakpoints: `sm, md, lg, xl, 2xl`

### Z-Index
Layering system for UI elements

## Philosophy

Design tokens mengikuti prinsip:

1. **Semantic naming** - Nama berdasarkan tujuan, bukan nilai
2. **Hierarchical organization** - Struktur bertingkat yang konsisten
3. **Theme-able** - Mendukung light/dark mode
4. **Framework-agnostic** - Dapat digunakan di React, Vue, Blazor
5. **Single source of truth** - Satu sumber untuk semua nilai design

## Updating Tokens

Token dikelola di `src/index.ts`. Setelah update:

```bash
pnpm build
```

Akan men-generate:
- `dist/index.js` - ESM/CJS modules
- `dist/tokens.json` - Raw JSON
- `dist/tokens.css` - CSS Custom Properties
