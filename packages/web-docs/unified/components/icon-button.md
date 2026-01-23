<ComponentHero title="Icon Button" description="Icon Button adalah tombol ikon-only (tanpa label teks) untuk aksi cepat (mis. close, search, settings)." />

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

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Icon Button component terdiri dari:

- **Icon**: Icon yang ditampilkan (wajib)
- **Container**: Button container dengan styling sesuai variant
- **Aria Label**: Label untuk screen reader (wajib)

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Icon Button Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Icon Button Anatomy Diagram 2" />
  </div>
</div>

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

## Accessibility

Karena tidak ada label teks, Icon Button **wajib** punya label untuk screen reader:

- **React**: `aria-label` (required)
- **Vue**: `ariaLabel` (required)
- **Blazor**: `AriaLabel` (required)

</template>

<template #Implementation>

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
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" :icon="PlusIcon" />
    <PtIconButton aria-label="Add" :icon="PlusIcon" variant="secondary" />
    <PtIconButton aria-label="Add" :icon="PlusIcon" variant="outline" />
    <PtIconButton aria-label="Add" :icon="PlusIcon" variant="ghost" />
    <PtIconButton aria-label="Close" :icon="XIcon" color="danger" />
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
<IconButton aria-label="Add" icon={<PlusIcon />} size="xss" />
<IconButton aria-label="Add" icon={<PlusIcon />} size="xs" />
<IconButton aria-label="Add" icon={<PlusIcon />} size="sm" />
<IconButton aria-label="Add" icon={<PlusIcon />} size="md" />
```

</template>

<template #vue>

```vue
<PtIconButton aria-label="Add" :icon="PlusIcon" size="xss" />
<PtIconButton aria-label="Add" :icon="PlusIcon" size="xs" />
<PtIconButton aria-label="Add" :icon="PlusIcon" size="sm" />
<PtIconButton aria-label="Add" :icon="PlusIcon" size="md" />
```

</template>

<template #blazor>

```razor
<PtIconButton AriaLabel="Add" Size="xss">
    <Icon>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    </Icon>
</PtIconButton>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `icon`      | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor) | `(required)` | Komponen ikon yang akan ditampilkan       |
| `aria-label` / `ariaLabel` / `AriaLabel` | `string`                               | `(required)` | Label yang wajib untuk pembaca layar (screen readers) |
| `variant`   | `'solid' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary'` | `'solid'` | Pilihan gaya visual tombol ikon           |
| `size`      | `'xss' \| 'xs' \| 'sm' \| 'md'`                                    | `'md'`      | Ukuran tombol ikon                        |
| `color`     | `'primary' \| 'danger'`                                            | `'primary'` | Color button (Primary / Danger)           |
| `disabled`  | `boolean`                                                          | `false`     | Nonaktifkan tombol ikon                   |
| `loading`   | `boolean`                                                          | `false`     | Tampilkan indikator loading               |
| `selected`  | `boolean`                                                          | `false`     | Terapkan gaya terpilih (selected styling) |

## Best Practices

### When to Use Icon Button

- **Do**: Use for common, well-recognized actions (close, search, menu, settings)
- **Do**: Use when space is limited
- **Do**: Always provide `aria-label` for accessibility
- **Don't**: Use for complex or ambiguous actions
- **Don't**: Use when a text label would be clearer

</template>

</PageTabs>