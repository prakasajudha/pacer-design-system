<ComponentHero title="Progress" description="Progress digunakan untuk menampilkan status kemajuan (0–100) dalam bentuk bar horizontal." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Progress component terdiri dari:

- **Track**: Background bar
- **Bar/Surface**: Bagian terisi yang mewakili `value`

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Progress Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Progress Anatomy Diagram 2" />
  </div>
</div>

## Props

- **`value`**: `0 - 100` (akan di-clamp)
- **`bgColor`**: warna track (hex/rgb/rgba/var())
- **`color`**: warna bar (hex/rgb/rgba/var())
- **`size`**: `xs | sm | md | lg` (default: `md`)
- **`showValue`**: tampilkan label value di kanan (default: `false`)
- **`valuePlaceholder`**: suffix label (default: `%`)

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="w-[190px]">
    <PtProgress :value="50" show-value />
  </div>

<template #react>

```tsx
import { Progress } from '@pacer-ui/react';

export default function App() {
  return (
    <div style={{ width: 190 }}>
      <Progress value={50} showValue />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtProgress } from '@pacer-ui/vue';
</script>

<template>
  <div class="w-[190px]">
    <PtProgress :value="50" show-value />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div style="width:190px">
    <PtProgress Value="50" ShowValue="true" />
</div>
```

</template>
</ComponentDemo>

## Colors (custom)

<ComponentDemo>
  <div class="w-[190px] space-y-3">
    <PtProgress :value="60" bg-color="#E6F0FE" color="#016BF8" />
    <PtProgress :value="60" bg-color="rgba(2, 6, 23, 0.08)" color="#DC2626" />
  </div>

<template #react>

```tsx
import { Progress } from '@pacer-ui/react';

export default function App() {
  return (
    <div style={{ width: 190 }} className="space-y-3">
      <Progress value={60} bgColor="#E6F0FE" color="#016BF8" />
      <Progress value={60} bgColor="rgba(2, 6, 23, 0.08)" color="#DC2626" />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtProgress } from '@pacer-ui/vue';
</script>

<template>
  <div class="w-[190px] space-y-3">
    <PtProgress :value="60" bg-color="#E6F0FE" color="#016BF8" />
    <PtProgress :value="60" bg-color="rgba(2, 6, 23, 0.08)" color="#DC2626" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div style="width:190px" class="space-y-3">
    <PtProgress Value="60" BgColor="#E6F0FE" Color="#016BF8" />
    <PtProgress Value="60" BgColor="rgba(2, 6, 23, 0.08)" Color="#DC2626" />
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress value (0-100, akan di-clamp) |
| `bgColor` | `string` | `undefined` | Warna track (hex/rgb/rgba/var()) |
| `color` | `string` | `undefined` | Warna bar (hex/rgb/rgba/var()) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Size progress bar |
| `showValue` | `boolean` | `false` | Tampilkan label value di kanan |
| `valuePlaceholder` | `string` | `'%'` | Suffix label |

## Notes

- Progress akan animate saat `value` berubah (transition width)
- Gunakan `valuePlaceholder` untuk mengganti suffix label (contoh: `pts`, `MB`, dll)

</template>

</PageTabs>