<ComponentHero title="Information" description="Information component digunakan untuk menampilkan informasi, peringatan, atau notifikasi dengan berbagai variant (info, slate, success, warning, danger)." />

<script setup lang="ts">
import { h } from 'vue';

const ZapIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'text-amber-500 shrink-0',
}, [h('path', { d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' })]);
</script>

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

Information supports 5 variants (sesuai desain Figma PACER):

- `info` (default): Background brand-50, icon brand-300, title/description brand-600 (#0150BA)
- `slate`: Background slate-100, icon & teks slate-950
- `success`: Background green-100, icon & teks green-600
- `warning`: Background amber-100, icon & teks amber-600
- `danger`: Background red-100, icon & teks red-600

## Layout (sesuai Figma node 40000837-1003)

- **Container**: `rounded-lg` (8px), padding sesuai size.
- **Posisi icon**: Selalu `items-start`. Bila tidak ada title (**children** atau **description-only**), icon dapat margin-top: **sm** = 2.5px (`mt-[2.5px]`), **md** = 4.5px (`mt-[4.5px]`).
- **Jarak icon–teks**: 12px (`gap-3`) untuk md, 8px (`gap-2`) untuk sm.
- **Jarak title–description**: 4px (`mb-1` pada title). Bila **description-only**, description tidak pakai `mb-1`.

## Sizes

Hanya ada **sm** dan **md** (tanpa lg):

| Size | Container | Title (Figma) | Description (Figma) |
|------|-----------|---------------|---------------------|
| `sm` | py-2 px-3, gap-2, icon 16px | T2: text-sm, font-medium, leading-none | T3: text-xs, font-normal, leading-5 |
| `md` (default) | p-4 (16px), gap-3 (12px), icon 16px | T1: text-base, font-medium, leading-none | T2: text-sm, font-normal, leading-6 |

**Title:** color per variant (info = brand-600 #0150BA). **Description:** color per variant, typography leading-tight.

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

## Custom Icon

Gunakan prop `icon` untuk mengganti icon default per variant. (React: `ReactNode`, Vue: VNode/component, Blazor: `RenderFragment`.)

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation
      variant="info"
      :icon="ZapIcon"
      title="Fitur baru tersedia"
      description="Icon petir (zap) sebagai custom icon — terlihat jelas beda dari icon default info."
    />
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default function App() {
  return (
    <Information variant="info" icon={<ZapIcon />} title="Fitur baru tersedia" description="Icon petir (zap) sebagai custom icon — terlihat jelas beda dari icon default info." />
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { h } from 'vue';
import { PtInformation } from '@pacer-ui/vue';

const customIcon = h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'text-amber-500',
}, [
  h('path', { d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' }),
]);
</script>

<template>
  <PtInformation
    variant="info"
    :icon="customIcon"
    title="Fitur baru tersedia"
    description="Icon petir (zap) sebagai custom icon — terlihat jelas beda dari icon default info."
  />
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtInformation Variant="InformationVariant.Info" Title="Fitur baru tersedia" Description="Icon petir (zap) sebagai custom icon — terlihat jelas beda dari icon default.">
    <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    </Icon>
</PtInformation>
```

**Catatan:** Parameter `Icon` bertipe `RenderFragment`; isi elemen `<Icon>...</Icon>` akan menggantikan icon default.
</template>
</ComponentDemo>

## Custom title & description color

Override warna teks title dan description dengan `titleClassName` dan `descriptionClassName` (Blazor: `TitleClassName`, `DescriptionClassName`).

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtInformation
      variant="slate"
      title="Judul dengan warna custom"
      description="Deskripsi memakai kelas teks berbeda (mis. text-slate-600)."
      titleClassName="text-slate-800"
      descriptionClassName="text-slate-600"
    />
  </div>

<template #react>

```tsx
import { Information } from '@pacer-ui/react';

export default function App() {
  return (
    <Information
      variant="slate"
      title="Judul dengan warna custom"
      description="Deskripsi memakai kelas teks berbeda."
      titleClassName="text-slate-800"
      descriptionClassName="text-slate-600"
    />
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
  <PtInformation
    variant="slate"
    title="Judul dengan warna custom"
    description="Deskripsi memakai kelas teks berbeda."
    titleClassName="text-slate-800"
    descriptionClassName="text-slate-600"
  />
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtInformation
    Variant="InformationVariant.Slate"
    Title="Judul dengan warna custom"
    Description="Deskripsi memakai kelas teks berbeda."
    TitleClassName="text-slate-800"
    DescriptionClassName="text-slate-600"
/>
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
| `size` | `'sm' \| 'md'` | `'md'` | Size information (hanya sm dan md) |
| `children` | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `null` | Content utama. Container selalu `items-start`; bila tidak ada title, icon margin-top: sm = 2.5px, md = 4.5px. |
| `titleClassName` | `string` | `undefined` | Override class untuk title (termasuk warna teks, tidak ditampilkan di Storybook controls) |
| `descriptionClassName` | `string` | `undefined` | Override class untuk description (termasuk warna teks, tidak ditampilkan di Storybook controls) |

**Catatan:** Di Blazor prop dinamis pakai PascalCase: `TitleClassName`, `DescriptionClassName`. Contoh override warna: `TitleClassName="text-slate-800"` atau `DescriptionClassName="text-red-700"`.

## Design Tokens

### Container (Figma 40000837-1003)

- **Border radius**: `rounded-lg` (8px)
- **Padding md**: 16px (`p-4`) semua sisi
- **Padding sm**: py-2 (8px) px-3 (12px)
- **Gap md**: 12px (`gap-3`) antara icon dan teks
- **Gap sm**: 8px (`gap-2`)
- **Icon alignment**: Selalu `items-start`. Bila tidak ada title, icon margin-top: **sm** = 2.5px, **md** = 4.5px.

### Variant Background Colors (sesuai Figma PACER)

- `info`: `bg-brand-50` (#E6F0FE)
- `slate`: `bg-slate-100` (#F1F5F9)
- `success`: `bg-green-100` (#DCFCE7)
- `warning`: `bg-amber-100` (#FEF3C7)
- `danger`: `bg-red-100` (#FEE2E2)

### Icon Colors

- `info`: `text-brand-300` (#016BF8)
- `slate`: `text-slate-950` (#020617)
- `success`: `text-green-600` (#16A34A)
- `warning`: `text-amber-600` (#D97706)
- `danger`: `text-red-600` (#DC2626)

### Title & Description Colors (variant)

- `info`: `text-brand-600` (#0150BA, brand-600-Dark)
- `slate`: `text-slate-950`
- `success`: `text-green-600`
- `warning`: `text-amber-600`
- `danger`: `text-red-600`

### Title & Description Typography (per size)

| Size | Title | Description |
|------|--------|-------------|
| **md** | T1: `text-base font-medium leading-none` (16px, 500, 100%) | T2: `text-sm font-normal leading-6` (14px, 400, 171%) |
| **sm** | T2: `text-sm font-medium leading-none` (14px, 500, 100%) | T3: `text-xs font-normal leading-5` (12px, 400, 166%) |

</template>

</PageTabs>