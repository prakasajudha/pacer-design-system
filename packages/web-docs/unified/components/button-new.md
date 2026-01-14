# Button Component

Buttons allow users to take actions and make choices with a single tap or click.

## Guideline

### Anatomy

The Button component consists of several key elements:

- **Icons left or right**: Icons that can be positioned either before (leading) or after (trailing) the Label.
- **Text labels**: The text attributed to the Button that provides context.
- **Container**: The clickable area of the button, encompassing the label and icons.

![Button Anatomy Diagram](/figma/guidelines/button-anatomy.svg)

### Layout and Spacing

The layout and spacing of the button are crucial for its visual consistency and usability.

- **Item spacing**: 4px between icon and text (gap-1).
- **Padding**:
  - Medium size: 12px horizontal (px-3), 8px vertical (py-2) → height 40px.
  - Small size: 12px horizontal (px-3), 6px vertical (py-1.5) → height 36px.
- **Border Radius**: 6px (rounded-[6px]).
- **Icon Size**: 16x16px.
- **Font Size**: 14px (text-sm) with 24px line height (leading-6).

![Button Layout and Spacing Diagram](/figma/guidelines/button-layout-spacing.svg)

---

## Implementation

### Basic Button

<ComponentDemo>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; height: 2.5rem; padding: 0.5rem 0.75rem;">
      Primary Button
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; cursor: pointer; background: white; color: #016BF8; border: 1px solid #016BF8; height: 2.5rem; padding: 0.5rem 0.75rem;">
      Secondary Button
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; cursor: pointer; border: 1px solid #cbd5e1; background: white; color: #0f172a; height: 2.5rem; padding: 0.5rem 0.75rem;">
      Outline Button
    </button>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton variant="primary">Primary Button</PtButton>
    <PtButton variant="secondary">Secondary Button</PtButton>
    <PtButton variant="outline">Outline Button</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Variant="ButtonVariant.Primary">Primary Button</PtButton>
    <PtButton Variant="ButtonVariant.Secondary">Secondary Button</PtButton>
    <PtButton Variant="ButtonVariant.Outline">Outline Button</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Button Sizes

Buttons are available in multiple sizes to fit different use cases (Figma: `sm` dan `md`).

<ComponentDemo>
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <button style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; height: 2.25rem; padding: 0.375rem 0.75rem;">
      Small
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; height: 2.5rem; padding: 0.5rem 0.75rem;">
      Medium
    </button>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtButton size="sm">Small</PtButton>
    <PtButton size="md">Medium</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtButton Size="ButtonSize.Small">Small</PtButton>
    <PtButton Size="ButtonSize.Medium">Medium</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Disabled State

Buttons can be disabled to prevent user interaction.

<ComponentDemo>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button disabled style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; border: none; cursor: not-allowed; background: #016BF8; color: white; height: 2.5rem; padding: 0.5rem 0.75rem; opacity: 0.5;">
      Disabled Button
    </button>
    <button disabled style="display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.875rem; line-height: 1.5rem; font-weight: 500; transition: all 0.15s; border-radius: 6px; cursor: not-allowed; border: 1px solid #cbd5e1; background: white; color: #0f172a; height: 2.5rem; padding: 0.5rem 0.75rem; opacity: 0.5;">
      Disabled Outline
    </button>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button disabled>Disabled Button</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton disabled>Disabled Button</PtButton>
    <PtButton variant="outline" disabled>Disabled Outline</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Disabled="true">Disabled Button</PtButton>
    <PtButton Variant="ButtonVariant.Outline" Disabled="true">Disabled Outline</PtButton>
</div>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Pilihan gaya visual tombol                |
| `size`      | `'sm' \| 'md'`                                             | `'md'`      | Ukuran tombol (non-link)                  |
| `fullWidth` | `boolean`                                                          | `false`     | Rentangkan tombol agar memenuhi lebar kontainer |
| `loading`   | `boolean`                                                          | `false`     | Tampilkan state loading                   |
| `disabled`  | `boolean`                                                          | `false`     | Nonaktifkan tombol                        |
| `tone`      | `'primary' \| 'destructive'`                                       | `'primary'` | Type button sesuai Figma: primary / destructive |
| `selected`  | `boolean`                                                          | `false`     | Aktifkan selected/toggled state           |
| `startIcon` | `React.ReactNode` (React) / slot (Vue) / `RenderFragment` (Blazor) | `null`      | Ikon sebelum label tombol                 |
| `endIcon`   | `React.ReactNode` (React) / slot (Vue) / `RenderFragment` (Blazor) | `null`      | Ikon setelah label tombol                 |
| `type`      | `'button' \| 'submit' \| 'reset'` (React/Blazor only)             | `'button'`  | Native HTML button type (jarang perlu diubah) |
| `destructive` | `boolean`                                                        | `false`     | **@deprecated** - gunakan `tone="destructive"` sebagai gantinya |

::: info Legacy Props
Props `destructive` deprecated. Gunakan `tone="destructive"` untuk styling destructive (merah).

Props `variant` masih support nilai legacy (`success`, `warning`, `error`) untuk backward compatibility.
:::

### Events

| Event                            | Description                  |
| -------------------------------- | ---------------------------- |
| `onClick` / `@click` / `OnClick` | Fired when button is clicked |

## Design Tokens

The button uses the following design tokens:

- **Primary Color**: `--color-brand-300` (#016BF8)
- **Secondary Color**: `--color-white` (background), `--color-brand-300` (text + border)
- **Outline Color**: `--color-slate-300` (border), `--color-slate-900` (text)
- **Ghost Color**: `--color-slate-900` (text)
- **Link Primary Color**: `--color-brand-300` (text)
- **Link Secondary Color**: `--color-slate-900` (text)
- **Destructive Colors**: `--color-red-600` (background), `--color-red-700` (hover), `--color-red-600` (text/border)
- **Selected Colors**: `--color-brand-400` (background when selected), `--color-brand-50` (secondary bg when selected)
- **Border Radius**: `6px` (rounded-[6px])
- **Font Weight**: `--font-weight-medium` (500)
- **Typography**: `text-sm` (14px) + `leading-6` (24px line-height)
- **Transition**: `all 150ms ease-in-out`
- **Spacing**: `px-3` (12px), `py-1.5` (6px) for `sm`; `px-3` (12px), `py-2` (8px) for `md`
- **Gap**: `gap-1` (4px) between icons and text

## Accessibility

- Uses semantic `<button>` element.
- Supports keyboard navigation (Enter, Space).
- Includes focus indicators.
- Properly handles disabled and loading states.

