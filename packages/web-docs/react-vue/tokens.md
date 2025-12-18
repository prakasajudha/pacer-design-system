# Design Tokens

Design tokens are the visual design atoms of the design system. They store visual design attributes such as colors, spacing, and typography.

## Colors

PACER uses a carefully crafted color palette that reflects Pertamina's brand identity.

<ColorPalette />

### Primary Colors

The primary color palette is based on Pertamina's brand blue.

```css
/* Primary Blue */
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #005baa; /* Brand Blue */
--color-primary-600: #004d91;
--color-primary-700: #003f78;
--color-primary-800: #00315f;
--color-primary-900: #002346;
```

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div>
    <div style="background: #eff6ff; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">50</p>
  </div>
  <div>
    <div style="background: #dbeafe; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">100</p>
  </div>
  <div>
    <div style="background: #bfdbfe; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">200</p>
  </div>
  <div>
    <div style="background: #93c5fd; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">300</p>
  </div>
  <div>
    <div style="background: #60a5fa; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">400</p>
  </div>
  <div>
    <div style="background: #005BAA; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem; font-weight: 600;">500 (Brand)</p>
  </div>
  <div>
    <div style="background: #004d91; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">600</p>
  </div>
  <div>
    <div style="background: #003f78; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">700</p>
  </div>
  <div>
    <div style="background: #00315f; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">800</p>
  </div>
  <div>
    <div style="background: #002346; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">900</p>
  </div>
</div>

### Secondary Colors

Secondary colors for success, warning, danger, and info states.

#### Success (Green)

```css
--color-success-500: #10b981;
--color-success-600: #059669;
--color-success-700: #047857;
```

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex: 1;">
    <div style="background: #10b981; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">500</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #059669; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">600</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #047857; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">700</p>
  </div>
</div>

#### Warning (Yellow)

```css
--color-warning-500: #f59e0b;
--color-warning-600: #d97706;
--color-warning-700: #b45309;
```

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex: 1;">
    <div style="background: #f59e0b; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">500</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #d97706; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">600</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #b45309; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">700</p>
  </div>
</div>

#### Danger (Red)

```css
--color-danger-500: #ef4444;
--color-danger-600: #dc2626;
--color-danger-700: #b91c1c;
```

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex: 1;">
    <div style="background: #ef4444; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">500</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #dc2626; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">600</p>
  </div>
  <div style="flex: 1;">
    <div style="background: #b91c1c; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.875rem;">700</p>
  </div>
</div>

### Neutral Colors

Neutral colors for text, borders, and backgrounds.

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

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div>
    <div style="background: #f9fafb; height: 60px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem;">50</p>
  </div>
  <div>
    <div style="background: #f3f4f6; height: 60px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem;">100</p>
  </div>
  <div>
    <div style="background: #e5e7eb; height: 60px; border-radius: 8px; border: 1px solid #d1d5db;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem;">200</p>
  </div>
  <div>
    <div style="background: #d1d5db; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem;">300</p>
  </div>
  <div>
    <div style="background: #9ca3af; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem;">400</p>
  </div>
  <div>
    <div style="background: #6b7280; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: white;">500</p>
  </div>
  <div>
    <div style="background: #4b5563; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: white;">600</p>
  </div>
  <div>
    <div style="background: #374151; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: white;">700</p>
  </div>
  <div>
    <div style="background: #1f2937; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: white;">800</p>
  </div>
  <div>
    <div style="background: #111827; height: 60px; border-radius: 8px;"></div>
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: white;">900</p>
  </div>
</div>

## Usage

### In JavaScript/TypeScript

```ts
import { tokens } from '@pacer-ui/tokens';

const primaryColor = tokens.colors.primary[500]; // '#005BAA'
```

### In CSS

```css
.my-component {
  background-color: var(--color-primary-500);
  color: var(--color-gray-50);
}
```

### In Tailwind

```html
<div class="bg-primary-500 text-white">Pertamina Blue Background</div>
```

## Spacing

<SpacingDemo />

## Typography

Typography tokens for consistent text styling.

| Token       | Value                  | Usage            |
| ----------- | ---------------------- | ---------------- |
| `font-sans` | Inter, sans-serif      | Body text        |
| `font-mono` | 'Fira Code', monospace | Code blocks      |
| `text-xs`   | 12px                   | Extra small text |
| `text-sm`   | 14px                   | Small text       |
| `text-base` | 16px                   | Body text        |
| `text-lg`   | 18px                   | Large text       |
| `text-xl`   | 20px                   | Heading 4        |
| `text-2xl`  | 24px                   | Heading 3        |
| `text-3xl`  | 30px                   | Heading 2        |
| `text-4xl`  | 36px                   | Heading 1        |

## Border Radius

<BorderRadiusDemo />

## Shadows

<ShadowDemo />
