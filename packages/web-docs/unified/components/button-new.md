# Button Component

Buttons allow users to take actions and make choices with a single tap or click.

## Basic Button

<ComponentDemo>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; transition: all 0.15s; border: none; cursor: pointer; background: #00843d; color: white; height: 2.5rem; padding: 0 1rem;">
      Primary Button
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; transition: all 0.15s; border: none; cursor: pointer; background: #dc2626; color: white; height: 2.5rem; padding: 0 1rem;">
      Secondary Button
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; transition: all 0.15s; cursor: pointer; border: 1px solid #d1d5db; background: white; color: #1f2937; height: 2.5rem; padding: 0 1rem;">
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

Buttons are available in multiple sizes to fit different use cases.

<ComponentDemo>
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; transition: all 0.15s; border: none; cursor: pointer; background: #00843d; color: white; height: 2rem; padding: 0 0.75rem;">
      Small
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; transition: all 0.15s; border: none; cursor: pointer; background: #00843d; color: white; height: 2.5rem; padding: 0 1rem;">
      Medium
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 1rem; font-weight: 500; transition: all 0.15s; border: none; cursor: pointer; background: #00843d; color: white; height: 3rem; padding: 0 1.5rem;">
      Large
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
      <Button size="lg">Large</Button>
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
    <PtButton size="lg">Large</PtButton>
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
    <PtButton Size="ButtonSize.Large">Large</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Disabled State

Buttons can be disabled to prevent user interaction.

<ComponentDemo>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <button disabled style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; border: none; background: #00843d; color: white; height: 2.5rem; padding: 0 1rem; opacity: 0.5; cursor: not-allowed;">
      Disabled Button
    </button>
    <button disabled style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; border: 1px solid #d1d5db; background: white; color: #1f2937; height: 2.5rem; padding: 0 1rem; opacity: 0.5; cursor: not-allowed;">
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

| Prop        | Type                                               | Default     | Description                         |
| ----------- | -------------------------------------------------- | ----------- | ----------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button visual style                 |
| `size`      | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | Button size                         |
| `disabled`  | `boolean`                                          | `false`     | Whether the button is disabled      |
| `fullWidth` | `boolean`                                          | `false`     | Whether the button takes full width |
| `loading`   | `boolean`                                          | `false`     | Shows loading spinner               |

### Events

| Event                            | Description                  |
| -------------------------------- | ---------------------------- |
| `onClick` / `@click` / `OnClick` | Fired when button is clicked |

## Design Tokens

The button uses the following design tokens:

- **Primary Color**: `--color-primary-600`
- **Secondary Color**: `--color-secondary-600`
- **Border Radius**: `--radius-md` (6px)
- **Font Weight**: `--font-weight-medium` (500)
- **Transition**: `150ms ease-in-out`

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Enter, Space)
- Includes focus indicators
- Properly handles disabled state
- ARIA attributes for screen readers
