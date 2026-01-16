# Information Component

Information component digunakan untuk menampilkan informasi, peringatan, atau notifikasi dengan berbagai variant dan ukuran.

## Guideline

### Anatomy

Information component terdiri dari:

- **Icon**: Icon default sesuai variant atau custom icon
- **Content**: Title, description, atau children (ReactNode/VNode/RenderFragment)
- **Container**: Area yang menampung icon dan content dengan background color sesuai variant

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

## Visual Preview

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info">Silakan upload data terlebih dahulu untuk melanjutkan proses.</PtInformation>
    <PtInformation variant="success">Proses telah selesai dan tidak memerlukan tindakan lanjutan.</PtInformation>
    <PtInformation variant="warning">Beberapa data masih belum lengkap dan perlu ditinjau sebelum dilanjutkan.</PtInformation>
    <PtInformation variant="error">Proses tidak dapat dilanjutkan karena peserta tidak memenuhi.</PtInformation>
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

## Sizes

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info" size="sm">Small size information component.</PtInformation>
    <PtInformation variant="info" size="md">Medium size information component.</PtInformation>
    <PtInformation variant="info" size="lg">Large size information component.</PtInformation>
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Information variant="info" size="sm">
        Small size information component.
      </Information>
      <Information variant="info" size="md">
        Medium size information component.
      </Information>
      <Information variant="info" size="lg">
        Large size information component.
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
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info" size="sm"> Small size information component. </PtInformation>
    <PtInformation variant="info" size="md"> Medium size information component. </PtInformation>
    <PtInformation variant="info" size="lg"> Large size information component. </PtInformation>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex flex-column gap-3" style="width: 100%; max-width: 500px;">
    <PtInformation Variant="InformationVariant.Info" Size="InformationSize.Small">
        Small size information component.
    </PtInformation>
    <PtInformation Variant="InformationVariant.Info" Size="InformationSize.Medium">
        Medium size information component.
    </PtInformation>
    <PtInformation Variant="InformationVariant.Info" Size="InformationSize.Large">
        Large size information component.
    </PtInformation>
</div>
```

  </template>
</ComponentDemo>

## With Custom Icon

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info">
      <template #icon>
        <svg class="text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </template>
      Custom icon information component.
    </PtInformation>
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-600"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Information variant="info" icon={<CustomIcon />}>
        Custom icon information component.
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
import { h } from 'vue';

const CustomIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'text-purple-600',
    },
    [h('path', { d: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })]
  );
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info" :icon="CustomIcon">
      Custom icon information component.
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
        <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        </Icon>
        Custom icon information component.
    </PtInformation>
</div>
```

  </template>
</ComponentDemo>

## With ReactNode/VNode/RenderFragment Children

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info">
      <div>
        <strong>Custom Content</strong>
        <p class="text-sm text-slate-600 mt-1">
          Children dapat berupa VNode apapun, bukan hanya string.
        </p>
      </div>
    </PtInformation>
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Information variant="info">
        <div>
          <strong>Custom Content</strong>
          <p className="text-sm text-slate-600 mt-1">
            Children dapat berupa ReactNode apapun, bukan hanya string.
          </p>
        </div>
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
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation variant="info">
      <div>
        <strong>Custom Content</strong>
        <p class="text-sm text-slate-600 mt-1">
          Children dapat berupa VNode apapun, bukan hanya string.
        </p>
      </div>
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
        <div>
            <strong>Custom Content</strong>
            <p class="text-sm text-slate-600 mt-1">
                Children dapat berupa RenderFragment apapun, bukan hanya string.
            </p>
        </div>
    </PtInformation>
</div>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop                                                   | Type                                                                               | Default     | Description                                                                                                   |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `variant`                                              | `'info' \| 'slate' \| 'success' \| 'warning' \| 'danger'`                          | `'info'`    | Variant visual dari information                                                                               |
| `title`                                                | `string`                                                                           | `undefined` | Title information                                                                                             |
| `description`                                          | `string`                                                                           | `undefined` | Description information (muncul di bawah title)                                                               |
| `icon`                                                 | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor)          | `undefined` | Icon override (jika tidak ada, akan menggunakan default icon sesuai variant)                                  |
| `iconClassName`                                        | `string`                                                                           | `undefined` | Custom className untuk icon container                                                                         |
| `iconStyle`                                            | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor) | `undefined` | Custom style untuk icon container                                                                             |
| `size`                                                 | `'sm' \| 'md' \| 'lg'`                                                             | `'md'`      | Size information                                                                                              |
| `children`                                             | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor)               | `null`      | Content utama sebagai ReactNode/VNode/RenderFragment. Jika ada children, title dan description akan diabaikan |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string`                                                                           | `undefined` | Custom className untuk override styling, termasuk background color                                            |
| `style`                                                | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor) | `undefined` | Custom style untuk override styling secara agresif, termasuk background color                                 |

### Notes

- Jika `children` disediakan, `title` dan `description` akan diabaikan
- Icon selalu top-aligned (`items-start`) dengan margin-top `2.5px` secara default
- Icon size: 16x16px untuk `sm` dan `md`, 20x20px untuk `lg`
- Background color dapat di-override dengan `className` atau `style` prop
- Icon default akan dibuat otomatis sesuai variant jika `icon` tidak disediakan

## Design Tokens

### Size Styles

**Small (`sm`):**

- Container: `py-2 px-3 gap-2`
- Icon: `w-4 h-4 shrink-0` (16x16px)
- Text: `text-sm font-normal leading-5` (14px, 20px line-height)

**Medium (`md`):**

- Container: `p-4 gap-3`
- Icon: `w-4 h-4 shrink-0` (16x16px)
- Text: `text-sm font-normal leading-5` (14px, 20px line-height)

**Large (`lg`):**

- Container: `p-4 gap-3`
- Icon: `w-5 h-5 shrink-0` (20x20px)
- Text: `text-base font-normal leading-6` (16px, 24px line-height)

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

### Other Styles

- Border Radius: `rounded-md` (6px)
- Icon Margin Top: `mt-[2.5px]` (2.5px)
- Icon Alignment: `items-start` (top-aligned)
- Content Flex: `flex-1 min-w-0` (takes remaining space, prevents overflow)

## Best Practices

- Gunakan `title` dan `description` untuk informasi sederhana
- Gunakan `children` untuk konten yang lebih kompleks atau memerlukan formatting khusus
- Pilih variant yang sesuai dengan konteks (info untuk informasi umum, warning untuk peringatan, danger untuk error)
- Pastikan icon selalu top-aligned dengan konten pertama
- Background color dapat di-override jika diperlukan untuk custom styling
