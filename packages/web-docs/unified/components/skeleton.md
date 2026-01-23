<ComponentHero title="Skeleton" description="Skeleton digunakan untuk menampilkan placeholder loading state dengan animasi pulse." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Skeleton component terdiri dari:

- **Container**: Area yang menampilkan placeholder dengan animasi pulse
- **Variant**: Square (default) atau Round

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Skeleton Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Skeleton Anatomy Diagram 2" />
  </div>
</div>

## Variants

Skeleton supports two variants:

- `square` (default): Border radius sedang (rounded-md, 6px)
- `round`: Border radius penuh (rounded-full)

## Customization

Skeleton dapat dikustomisasi dengan:

- `height`: Tinggi skeleton (px, em, rem, %)
- `width`: Lebar skeleton (px, em, rem, %)

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtSkeleton variant="square" width="200px" height="20px" />
    <PtSkeleton variant="round" width="40px" height="40px" />
  </div>

<template #react>

```tsx
import { Skeleton } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Skeleton variant="square" width="200px" height="20px" />
      <Skeleton variant="round" width="40px" height="40px" />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtSkeleton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtSkeleton variant="square" width="200px" height="20px" />
    <PtSkeleton variant="round" width="40px" height="40px" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtSkeleton Variant="SkeletonVariant.Square" Width="200px" Height="20px" />
    <PtSkeleton Variant="SkeletonVariant.Round" Width="40px" Height="40px" />
</div>
```

</template>
</ComponentDemo>

## Common Use Cases

### Text Line

<ComponentDemo>
  <div class="flex flex-col gap-2 w-full max-w-md">
    <PtSkeleton variant="square" width="100%" height="16px" />
    <PtSkeleton variant="square" width="80%" height="16px" />
    <PtSkeleton variant="square" width="60%" height="16px" />
  </div>

<template #react>

```tsx
import { Skeleton } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <Skeleton width="100%" height="16px" />
      <Skeleton width="80%" height="16px" />
      <Skeleton width="60%" height="16px" />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtSkeleton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex flex-col gap-2 w-full max-w-md">
    <PtSkeleton width="100%" height="16px" />
    <PtSkeleton width="80%" height="16px" />
    <PtSkeleton width="60%" height="16px" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex flex-column gap-2" style="width: 100%; max-width: 400px;">
    <PtSkeleton Width="100%" Height="16px" />
    <PtSkeleton Width="80%" Height="16px" />
    <PtSkeleton Width="60%" Height="16px" />
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `variant`   | `'square' \| 'round'`                                              | `'square'`  | Variant visual dari skeleton              |
| `height`    | `string`                                                           | `undefined` | Height skeleton (px, em, rem, %)          |
| `width`     | `string`                                                           | `undefined` | Width skeleton (px, em, rem, %)           |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string` | `undefined` | Custom className untuk override styling   |

## Design Tokens

- **Background Color**: `bg-slate-200` (#e2e8f0)
- **Animation**: `animate-pulse` (Tailwind CSS pulse animation)
- **Border Radius**: 
  - Square: `rounded-md` (6px)
  - Round: `rounded-full` (9999px)

## Best Practices

- Gunakan Skeleton untuk memberikan feedback visual saat data sedang dimuat
- Match ukuran skeleton dengan konten yang akan ditampilkan
- Gunakan variant `round` untuk avatar atau circular elements
- Gunakan variant `square` untuk text, images, atau rectangular elements

</template>

</PageTabs>