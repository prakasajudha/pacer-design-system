<ComponentHero title="Information" description="Information component digunakan untuk menampilkan informasi, peringatan, atau notifikasi dengan berbagai variant dan ukuran." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Information component terdiri dari:

- **Icon**: Icon default sesuai variant atau custom icon
- **Content**: Title, description, atau children (ReactNode/VNode/RenderFragment)
- **Container**: Area yang menampung icon dan content dengan background color sesuai variant

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Information Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Information Anatomy Diagram 2" />
  </div>
</div>

## Variants

Information supports 5 variants:

- `info` (default): Background brand-50, icon brand-300
- `slate`: Background slate-50, icon slate-900
- `success`: Background green-50, icon green-600
- `warning`: Background yellow-50, icon yellow-600
- `danger`: Background red-50, icon red-600

## Sizes

Information supports 3 sizes:

- `sm`: Padding py-2 px-3, gap-2, icon 16x16px, text-sm
- `md` (default): Padding p-4, gap-3, icon 16x16px, text-sm
- `lg`: Padding p-4, gap-3, icon 20x20px, text-base

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info">Silakan upload data terlebih dahulu untuk melanjutkan proses.</PtInformation>
    <PtInformation variant="success">Proses telah selesai dan tidak memerlukan tindakan lanjutan.</PtInformation>
    <PtInformation variant="warning">Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.</PtInformation>
    <PtInformation variant="danger">Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.</PtInformation>
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Information variant="info">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
      </Information>
      <Information variant="success">
        Proses telah selesai dan tidak memerlukan tindakan lanjutan.
      </Information>
      <Information variant="warning">
        Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
      </Information>
      <Information variant="danger">
        Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
      </Information>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInformation } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <PtInformation variant="info">
      Silakan upload data terlebih dahulu untuk melanjutkan proses.
    </PtInformation>
    <PtInformation variant="success">
      Proses telah selesai dan tidak memerlukan tindakan lanjutan.
    </PtInformation>
    <PtInformation variant="warning">
      Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
    </PtInformation>
    <PtInformation variant="danger">
      Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
    </PtInformation>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex flex-column gap-3" style="width: 100%; max-width: 500px;">
    <PtInformation Variant="InformationVariant.Info">
        Silakan upload data terlebih dahulu untuk melanjutkan proses.
    </PtInformation>
    <PtInformation Variant="InformationVariant.Success">
        Proses telah selesai dan tidak memerlukan tindakan lanjutan.
    </PtInformation>
    <PtInformation Variant="InformationVariant.Warning">
        Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.
    </PtInformation>
    <PtInformation Variant="InformationVariant.Danger">
        Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.
    </PtInformation>
</div>
```

</template>
</ComponentDemo>

## With Title and Description

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation
      variant="info"
      title="Informasi Penting"
      description="Pastikan semua data sudah lengkap sebelum melanjutkan."
    />
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Information
        variant="info"
        title="Informasi Penting"
        description="Pastikan semua data sudah lengkap sebelum melanjutkan."
      />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInformation } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation
      variant="info"
      title="Informasi Penting"
      description="Pastikan semua data sudah lengkap sebelum melanjutkan."
    />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex flex-column gap-3" style="width: 100%; max-width: 500px;">
    <PtInformation
        Variant="InformationVariant.Info"
        Title="Informasi Penting"
        Description="Pastikan semua data sudah lengkap sebelum melanjutkan."
    />
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'slate' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Variant visual dari information |
| `title` | `string` | `undefined` | Title information |
| `description` | `string` | `undefined` | Description information |
| `icon` | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor) | `undefined` | Icon override |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size information |
| `children` | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `null` | Content utama |

## Design Tokens

### Variant Background Colors

- `info`: `bg-brand-50` (#E6F2FF)
- `slate`: `bg-slate-50` (#f8fafc)
- `success`: `bg-green-50` (#f0fdf4)
- `warning`: `bg-yellow-50` (#fefce8)
- `danger`: `bg-red-50` (#fef2f2)

### Icon Colors

- `info`: `text-brand-300` (#016BF8)
- `slate`: `text-slate-900` (#0f172a)
- `success`: `text-green-600` (#16a34a)
- `warning`: `text-yellow-600` (#eab308)
- `danger`: `text-red-600` (#dc2626)

</template>

</PageTabs>