# Progress Component

Progress digunakan untuk menampilkan status kemajuan (0–100) dalam bentuk bar horizontal.

## Guideline

### Anatomy

- **Track**: Background bar
- **Bar/Surface**: Bagian terisi yang mewakili `value`

## Props

- **`value`**: `0 - 100` (akan di-clamp)
- **`bgColor`**: warna track (hex/rgb/rgba/var())
- **`color`**: warna bar (hex/rgb/rgba/var())
- **`size`**: `xs | sm | md | lg` (default: `md`)

## Visual Preview

<ComponentDemo>
  <div class="w-[190px]">
    <PtProgress :value="30" />
  </div>

<template #react>

```tsx
import { Progress } from '@pacer-ui/react';

export default function App() {
  return (
    <div style={{ width: 190 }}>
      <Progress value={30} />
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
    <PtProgress :value="30" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div style="width:190px">
    <PtProgress Value="30" />
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

## Animation

Progress akan animate saat `value` berubah (transition width).

