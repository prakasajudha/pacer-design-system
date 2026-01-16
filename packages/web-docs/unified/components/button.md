# Button Component

Buttons allow users to take actions and make choices with a single tap or click.

## Guideline

### Anatomy

The Button component consists of several key elements:

- **Icons left or right**: Icons that can be positioned either before (leading) or after (trailing) the Label.
- **Text labels**: The text attributed to the Button that provides context.
- **Container**: The clickable area of the button, encompassing the label and icons.

### Layout and Spacing

The layout and spacing of the button are crucial for its visual consistency and usability.

- **Item spacing**: 4px between icon and text (gap-1).
- **Padding**:
  - Medium size: 12px horizontal (px-3), 8px vertical (py-2) → height 40px.
  - Small size: 8px horizontal (px-2), 6px vertical (py-1.5) → height 36px.
- **Border Radius**: 6px (rounded-[6px]).
- **Icon Size**: 16x16px.
- **Font Size**: 14px (text-sm) with 24px line height (leading-6).

---

## Implementation

### Basic Button

<ComponentDemo>
  <div class="flex flex-col gap-10 flex-wrap">
    <PtButton variant="solid">Primary Button</PtButton>
    <PtButton variant="secondary">Secondary Button</PtButton>
    <PtButton variant="outline">Outline Button</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button variant="solid">Primary Button</Button>
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
    <PtButton variant="solid">Primary Button</PtButton>
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
    <PtButton Variant="ButtonVariant.Solid">Primary Button</PtButton>
    <PtButton Variant="ButtonVariant.Secondary">Secondary Button</PtButton>
    <PtButton Variant="ButtonVariant.Outline">Outline Button</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Variants

### Solid (Primary)

Default variant with solid background.

### Secondary

Button with white background and colored border/text.

### Outline

Button with white background and border.

### Ghost

Button with transparent background.

### Link Primary / Link Secondary

Link-style buttons without background (24px height, underline on hover).

## Button Sizes

Buttons are available in multiple sizes to fit different use cases (Figma: `sm` dan `md`).

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtButton size="sm">Small</PtButton>
    <PtButton size="md">Medium</PtButton>
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

## Color (Primary / Danger)

Buttons support two color tones: `primary` (default) and `danger`.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton color="primary">Primary</PtButton>
    <PtButton color="danger">Danger</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
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
    <PtButton color="primary">Primary</PtButton>
    <PtButton color="danger">Danger</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Color="primary">Primary</PtButton>
    <PtButton Color="danger">Danger</PtButton>
</div>
```

  </template>
</ComponentDemo>

## With Icons

Buttons can include icons before or after the label.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="solid" :left-icon="PlusIcon">Add Item</PtButton>
    <PtButton variant="solid" :right-icon="SaveIcon">Save</PtButton>
  </div>
  
  <script setup>
  import { h } from 'vue';
  
  const PlusIcon = () => h('svg', {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'h-4 w-4'
  }, [
    h('path', { d: 'M12 5v14' }),
    h('path', { d: 'M5 12h14' })
  ]);
  
  const SaveIcon = () => h('svg', {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'h-4 w-4'
  }, [
    h('path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' }),
    h('polyline', { points: '17 21 17 13 7 13 7 21' }),
    h('polyline', { points: '7 3 7 8 15 8' })
  ]);
  </script>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const SaveIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

export default function App() {
  return (
    <div className="flex gap-4">
      <Button leftIcon={<PlusIcon />}>Add Item</Button>
      <Button rightIcon={<SaveIcon />}>Save</Button>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
import { Plus, Save } from 'lucide-vue-next';
</script>

<template>
  <div class="flex gap-4">
    <PtButton :left-icon="Plus">Add Item</PtButton>
    <PtButton :right-icon="Save">Save</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton>
        <LeftIcon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </LeftIcon>
        Add Item
    </PtButton>
    <PtButton>
        <RightIcon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
            </svg>
        </RightIcon>
        Save
    </PtButton>
</div>
```

  </template>
</ComponentDemo>

## Loading State

Buttons can show a loading state with a spinner.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton :loading="true">Loading...</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button loading>Loading...</Button>
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
    <PtButton :loading="true">Loading...</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Loading="true">Loading...</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Selected State

Buttons can have a selected/toggled state.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton selected>Selected</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button selected>Selected</Button>
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
    <PtButton :selected="true">Selected</PtButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Selected="true">Selected</PtButton>
</div>
```

  </template>
</ComponentDemo>

## Disabled State

Buttons can be disabled to prevent user interaction.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton disabled>Disabled Button</PtButton>
    <PtButton variant="outline" disabled>Disabled Outline</PtButton>
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

| Prop                                                   | Type                                                                                   | Default     | Description                             |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------- | --------------------------------------- |
| `variant`                                              | `'solid' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary'` | `'solid'`   | Pilihan gaya visual tombol              |
| `size`                                                 | `'sm' \| 'md'`                                                                         | `'md'`      | Ukuran tombol (non-link)                |
| `loading`                                              | `boolean`                                                                              | `false`     | Tampilkan state loading                 |
| `color`                                                | `'primary' \| 'danger'`                                                                | `'primary'` | Color button (Primary / Danger)         |
| `selected`                                             | `boolean`                                                                              | `false`     | Aktifkan selected/toggled state         |
| `leftIcon`                                             | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor)              | `undefined` | Ikon sebelum label tombol               |
| `rightIcon`                                            | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor)              | `undefined` | Ikon setelah label tombol               |
| `disabled`                                             | `boolean`                                                                              | `false`     | Nonaktifkan tombol                      |
| `type`                                                 | `'button' \| 'submit' \| 'reset'`                                                      | `'button'`  | Native HTML button type                 |
| `children`                                             | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor)                   | `undefined` | Label atau konten tombol                |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string`                                                                               | `undefined` | Custom className untuk override styling |
| `style`                                                | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor)     | `undefined` | Custom style untuk override styling     |

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
- **Danger Colors**: `--color-red-600` (background), `--color-red-700` (hover), `--color-red-600` (text/border)
- **Selected Colors**: `--color-brand-400` (background when selected), `--color-brand-50` (secondary bg when selected)
- **Border Radius**: `6px` (rounded-[6px])
- **Font Weight**: `--font-weight-medium` (500)
- **Typography**: `text-sm` (14px) + `leading-6` (24px line-height)
- **Transition**: `all 150ms ease-in-out`
- **Spacing**: `px-2 py-1.5` (8px/6px) for `sm`; `px-3 py-2` (12px/8px) for `md`
- **Gap**: `gap-1` (4px) between icons and text

## Accessibility

- Uses semantic `<button>` element.
- Supports keyboard navigation (Enter, Space).
- Includes focus indicators with double ring effect.
- Properly handles disabled and loading states.
- Supports `aria-pressed` for toggle states.
