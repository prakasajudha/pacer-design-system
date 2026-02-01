---
outline: deep
---

<ComponentHero title="Breadcrumb" description="Breadcrumb menampilkan jalur navigasi hierarkis. Mendukung separator kustom, collapse dengan ellipsis atau dropdown (item ke-2 sebagai trigger), dan styling sesuai Figma PACER: link = brand/300, current = slate/500, separator = slate/500." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Breadcrumb terdiri dari:

- **Items**: Setiap item punya `title`, optional `icon`, optional `link`, optional `disabled`.
- **Separator**: Antar item (default `>`). Warna: slate/500.
- **Trigger collapse**: Jika `collapse=true` dan items > 3, tampil item pertama, trigger (ellipsis `…` atau dropdown dengan title item ke-2 + chevron v), item terakhir. Klik trigger membuka Popover berisi item yang disembunyikan.

## Props

| Prop | Tipe | Default | Keterangan |
|------|------|---------|------------|
| `items` | `BreadcrumbItem[]` | — | Daftar item: `{ title, icon?, link?, disabled? }` |
| `separator` | `string` | `">"` | Pemisah antar item (mis. `"/"`, `">"`) |
| `type` | `'ellipsis' \| 'dropdown'` | `'dropdown'` | Tipe trigger collapse: ellipsis (`…`) atau dropdown (title item ke-2 + chevron) |
| `collapse` | `boolean` | `true` | Jika true dan items > 3, item tengah di-collapse ke dalam Popover |

## Warna & typography

- **Link (punya `link`, bukan item terakhir)**: `text-brand-300`, hover underline. Font: text-sm, font-normal, leading-5.
- **Current (item terakhir / tanpa link)**: `text-slate-500`. Font: text-sm, font-normal, leading-5.
- **Separator**: `text-slate-500`, text-sm, font-normal, leading-5.
- **Di dalam Popover**: Teks item = `text-slate-900` (hitam), truncate, text-sm, font-normal, leading-5.

## Best practice

- Gunakan untuk navigasi hierarkis (contoh: Home > Products > Category > Current).
- Pilih separator yang konsisten dengan produk (biasanya `>` atau `/`).
- Jika banyak level, biarkan `collapse=true` agar tampil ringkas; dropdown/ellipsis menampilkan item tersembunyi.

</template>

<template #Implementation>

## Dasar (5 item, collapse dropdown)

<ComponentDemo>
  <PtBreadcrumb
    :items="[
      { title: 'Home', link: '#' },
      { title: 'Products', link: '#' },
      { title: 'Category', link: '#' },
      { title: 'Subcategory', link: '#' },
      { title: 'Current Page' },
    ]"
    separator=">"
    type="dropdown"
    :collapse="true"
  />

<template #react>

```tsx
import { Breadcrumb } from '@pacer-ui/react';

<Breadcrumb
  items={[
    { title: 'Home', link: '#' },
    { title: 'Products', link: '#' },
    { title: 'Category', link: '#' },
    { title: 'Subcategory', link: '#' },
    { title: 'Current Page' },
  ]}
  separator=">"
  type="dropdown"
  collapse={true}
/>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtBreadcrumb } from '@pacer-ui/vue';
</script>

<template>
  <PtBreadcrumb
    :items="[
      { title: 'Home', link: '#' },
      { title: 'Products', link: '#' },
      { title: 'Category', link: '#' },
      { title: 'Subcategory', link: '#' },
      { title: 'Current Page' },
    ]"
    separator=">"
    type="dropdown"
    :collapse="true"
  />
</template>
```

</template>

<template #blazor>

```razor
<PtBreadcrumb Items="@_items" Separator=">" Type="BreadcrumbType.Dropdown" Collapse="true" />

@code {
    private IReadOnlyList<BreadcrumbItem> _items = new List<BreadcrumbItem>
    {
        new() { Title = "Home", Link = "#" },
        new() { Title = "Products", Link = "#" },
        new() { Title = "Category", Link = "#" },
        new() { Title = "Subcategory", Link = "#" },
        new() { Title = "Current Page" },
    };
}
```

</template>
</ComponentDemo>

## Tanpa collapse (semua item terlihat)

<ComponentDemo>
  <PtBreadcrumb
    :items="[
      { title: 'Home', link: '#' },
      { title: 'Products', link: '#' },
      { title: 'Current Page' },
    ]"
    separator=">"
    :collapse="false"
  />

<template #react>

```tsx
<Breadcrumb
  items={[
    { title: 'Home', link: '#' },
    { title: 'Products', link: '#' },
    { title: 'Current Page' },
  ]}
  separator=">"
  collapse={false}
/>
```

</template>

<template #vue>

```vue
<PtBreadcrumb
  :items="[
    { title: 'Home', link: '#' },
    { title: 'Products', link: '#' },
    { title: 'Current Page' },
  ]"
  separator=">"
  :collapse="false"
/>
```

</template>

<template #blazor>

```razor
<PtBreadcrumb Items="@_threeItems" Separator=">" Collapse="false" />
```

</template>
</ComponentDemo>

## Separator slash

<ComponentDemo>
  <PtBreadcrumb
    :items="[
      { title: 'Home', link: '#' },
      { title: 'Components', link: '#' },
      { title: 'Breadcrumb' },
    ]"
    separator="/"
    :collapse="false"
  />

<template #react>

```tsx
<Breadcrumb
  items={[
    { title: 'Home', link: '#' },
    { title: 'Components', link: '#' },
    { title: 'Breadcrumb' },
  ]}
  separator="/"
  collapse={false}
/>
```

</template>

<template #vue>

```vue
<PtBreadcrumb
  :items="[
    { title: 'Home', link: '#' },
    { title: 'Components', link: '#' },
    { title: 'Breadcrumb' },
  ]"
  separator="/"
  :collapse="false"
/>
```

</template>
</ComponentDemo>

## Tipe ellipsis

<ComponentDemo>
  <PtBreadcrumb
    :items="[
      { title: 'Home', link: '#' },
      { title: 'Products', link: '#' },
      { title: 'Category', link: '#' },
      { title: 'Subcategory', link: '#' },
      { title: 'Current Page' },
    ]"
    separator=">"
    type="ellipsis"
    :collapse="true"
  />

<template #react>

```tsx
<Breadcrumb
  items={fiveItems}
  separator=">"
  type="ellipsis"
  collapse={true}
/>
```

</template>

<template #vue>

```vue
<PtBreadcrumb :items="fiveItems" separator=">" type="ellipsis" :collapse="true" />
```

</template>
</ComponentDemo>

</template>
</PageTabs>
