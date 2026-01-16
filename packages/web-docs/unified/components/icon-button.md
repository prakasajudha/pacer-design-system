# Icon Button Component

<script setup>
import { h } from 'vue';

// Icon components untuk semua demo
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

const XIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4'
}, [
  h('path', { d: 'M18 6 6 18' }),
  h('path', { d: 'm6 6 12 12' })
]);
</script>

Icon Button adalah tombol **ikon-only** (tanpa label teks) untuk aksi cepat (mis. close, search, settings).

## Guideline

### Icon Button Anatomy

Karena tidak ada label teks, Icon Button **wajib** punya label untuk screen reader:

- **React**: `aria-label` (required)
- **Vue**: `ariaLabel` (required)
- **Blazor**: `AriaLabel` (required)

## Variants

Icon Button supports the same variants as Button:

- `solid` (default)
- `secondary`
- `outline`
- `ghost`
- `link-primary`
- `link-secondary`

## Sizes

Icon Button tersedia dalam 4 ukuran:

- `xss`: 20x20px (h-5 w-5 p-0.5)
- `xs`: 28x28px (h-7 w-7 p-1.5)
- `sm`: 32x32px (h-8 w-8 p-2)
- `md`: 40x40px (h-10 w-10 p-3) (default)

## Color (Primary / Danger)

Icon Button supports two color tones: `primary` (default) and `danger`.

## Visual Preview

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtIconButton variant="solid" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="secondary" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="outline" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="ghost" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="solid" color="danger" :icon="XIcon" aria-label="Close" />
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="secondary" />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="outline" />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="ghost" />
      <IconButton aria-label="Close" icon={<XIcon />} color="danger" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
import { Plus, X } from 'lucide-vue-next';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" :icon="Plus" />
    <PtIconButton aria-label="Add" :icon="Plus" variant="secondary" />
    <PtIconButton aria-label="Add" :icon="Plus" variant="outline" />
    <PtIconButton aria-label="Add" :icon="Plus" variant="ghost" />
    <PtIconButton aria-label="Close" :icon="X" color="danger" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Variant="ButtonVariant.Secondary">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Variant="ButtonVariant.Outline">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Variant="ButtonVariant.Ghost">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Close" Color="danger">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## Size Variants

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtIconButton variant="solid" size="xss" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="solid" size="xs" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="solid" size="sm" :icon="PlusIcon" aria-label="Add" />
    <PtIconButton variant="solid" size="md" :icon="PlusIcon" aria-label="Add" />
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} size="xss" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="xs" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="sm" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="md" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" :icon="Plus" size="xss" />
    <PtIconButton aria-label="Add" :icon="Plus" size="xs" />
    <PtIconButton aria-label="Add" :icon="Plus" size="sm" />
    <PtIconButton aria-label="Add" :icon="Plus" size="md" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add" Size="xss">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="xs">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="sm">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="md">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## Loading State

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtIconButton variant="solid" :loading="true" aria-label="Loading" />
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} loading />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" :icon="Plus" :loading="true" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add" Loading="true">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## Selected State

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtIconButton variant="solid" :icon="PlusIcon" :selected="true" aria-label="Add" />
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} selected />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" :icon="Plus" :selected="true" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add" Selected="true">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `icon`      | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor) | `(required)` | Komponen ikon yang akan ditampilkan       |
| `aria-label` (React) / `ariaLabel` (Vue) / `AriaLabel` (Blazor) | `string`                               | `(required)` | Label yang wajib untuk pembaca layar (screen readers) |
| `variant`   | `'solid' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary'` | `'solid'` | Pilihan gaya visual tombol ikon           |
| `size`      | `'xss' \| 'xs' \| 'sm' \| 'md'`                                    | `'md'`      | Ukuran tombol ikon (20px / 28px / 32px / 40px) |
| `color`     | `'primary' \| 'danger'`                                            | `'primary'` | Color button (Primary / Danger)           |
| `disabled`  | `boolean`                                                          | `false`     | Nonaktifkan tombol ikon                   |
| `loading`   | `boolean`                                                          | `false`     | Tampilkan indikator loading dan nonaktifkan interaksi |
| `selected`  | `boolean`                                                          | `false`     | Terapkan gaya terpilih (selected styling) |
| `type`      | `'button' \| 'submit' \| 'reset'` (React/Blazor only)             | `'button'`  | Native HTML button type                   |
| `destructive` | `boolean` (React only)                                            | `false`     | **@deprecated** - gunakan `color="danger"` sebagai gantinya |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string` | `undefined` | Custom className untuk override styling   |
| `style`     | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor) | `undefined` | Custom style untuk override styling       |

### Events

| Event                            | Description                  |
| -------------------------------- | ---------------------------- |
| `onClick` / `@click` / `OnClick` | Fired when icon button is clicked |

## Best Practices

### When to Use Icon Button

- **Do**: Use for common, well-recognized actions (close, search, menu, settings)
- **Do**: Use when space is limited
- **Do**: Always provide `aria-label` for accessibility
- **Don't**: Use for complex or ambiguous actions
- **Don't**: Use when a text label would be clearer

### Accessibility Requirements

1. **Always** provide descriptive `aria-label`
2. Use `aria-pressed` for toggle states (automatically handled by `selected` prop)
3. Ensure adequate touch target size (minimum 44x44px for mobile)
4. Test with screen readers

### Icon Guidelines

- Use consistent icon set throughout application
- Keep icons simple and recognizable
- Ensure icons have adequate color contrast (4.5:1 for normal text, 3:1 for large text)
- Icons should be **aria-hidden="true"** since `aria-label` provides the description

## Design Tokens

- **Border Radius**: `6px` (rounded-[6px])
- **Icon Size**: `16x16px` (h-4 w-4) for most sizes
- **Sizes**: 
  - `xss`: 20x20px (h-5 w-5 p-0.5)
  - `xs`: 28x28px (h-7 w-7 p-1.5)
  - `sm`: 32x32px (h-8 w-8 p-2)
  - `md`: 40x40px (h-10 w-10 p-3)
- **Colors**: Same as Button component
- **Focus Ring**: Double ring effect (2px white inner, 4px colored outer)
