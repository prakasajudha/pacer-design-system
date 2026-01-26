---
outline: deep
---

<ComponentHero title="Divider" description="Divider memisahkan konten secara visual dengan garis horizontal atau vertikal. Mendukung beberapa variant (solid, dashed, dotted), ukuran, dan color palette untuk menyesuaikan konteks layout dan hierarki." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Divider terdiri dari:

- **Garis (line)**: Elemen pemisah berbentuk garis — horizontal atau vertikal.
- **Separator**: Peran aksesibilitas (`role="separator"`) dan `aria-orientation` untuk horizontal/vertical.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Divider Anatomy Horizontal" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Divider Anatomy Vertical" />
  </div>
</div>

## Variants

| Variant   | Keterangan                         |
|----------|-------------------------------------|
| `solid`  | Garis padat (default)               |
| `dashed` | Garis putus-putus                   |
| `dotted` | Garis titik-titik                   |

## Orientation & size

- **Orientation**: `horizontal` (default) atau `vertical`. Horizontal memakai prop `width` (nilai CSS, default `100%`), vertical memakai `height` (default `100%` dengan min-height `1em`).
- **Size** (ketebalan): `xs` | `sm` (default) | `md` | `lg`.

## Color palette

Divider mendukung `colorPalette`: `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `cyan`, `purple`, `pink`. Default: `gray`.

## Width & height (framework-agnostic)

Prop `width` dan `height` memakai **nilai CSS** (px, %, rem, em, dll.), bukan class framework tertentu. Cocok untuk proyek yang pakai Tailwind, Bootstrap, atau CSS polos.

- **Horizontal**: `width` — contoh `"200px"`, `"100%"`, `"12rem"`. Default `100%`.
- **Vertical**: `height` — contoh `"32px"`, `"100%"`, `"2rem"`. Default `100%` (dengan min-height `1em`).

## Best practice

- Gunakan horizontal untuk memisahkan blok konten (section, form group, card header/body/footer).
- Gunakan vertical untuk memisahkan item inline (nav, breadcrumb, action buttons).
- Pilih variant dan color yang selaras dengan hierarki: solid + gray untuk pemisah netral; dashed/dotted atau warna untuk penegasan ringan.

</template>

<template #Implementation>

## Horizontal & vertical (dasar)

<ComponentDemo>
  <div class="space-y-6 w-72">
    <div>
      <p class="text-sm text-slate-600 mb-1">Horizontal</p>
      <div class="space-y-2">
        <p class="text-sm text-slate-700">Section satu</p>
        <PtDivider />
        <p class="text-sm text-slate-700">Section dua</p>
      </div>
    </div>
    <div>
      <p class="text-sm text-slate-600 mb-1">Vertical</p>
      <div class="flex items-center gap-3 h-10">
        <span class="text-sm text-slate-700">Kiri</span>
        <PtDivider orientation="vertical" />
        <span class="text-sm text-slate-700">Kanan</span>
      </div>
    </div>
  </div>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<div className="space-y-6 w-72">
  <div>
    <p className="text-sm text-slate-600 mb-1">Horizontal</p>
    <div className="space-y-2">
      <p className="text-sm text-slate-700">Section satu</p>
      <Divider />
      <p className="text-sm text-slate-700">Section dua</p>
    </div>
  </div>
  <div>
    <p className="text-sm text-slate-600 mb-1">Vertical</p>
    <div className="flex items-center gap-3 h-10">
      <span className="text-sm text-slate-700">Kiri</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-slate-700">Kanan</span>
    </div>
  </div>
</div>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <div class="space-y-6 w-72">
    <div>
      <p class="text-sm text-slate-600 mb-1">Horizontal</p>
      <div class="space-y-2">
        <p class="text-sm text-slate-700">Section satu</p>
        <PtDivider />
        <p class="text-sm text-slate-700">Section dua</p>
      </div>
    </div>
    <div>
      <p class="text-sm text-slate-600 mb-1">Vertical</p>
      <div class="flex items-center gap-3 h-10">
        <span class="text-sm text-slate-700">Kiri</span>
        <PtDivider orientation="vertical" />
        <span class="text-sm text-slate-700">Kanan</span>
      </div>
    </div>
  </div>
</template>
```

</template>
</ComponentDemo>

## Di dalam card (header – body – footer)

Pemisah antar bagian card memberi hierarki visual yang jelas.

<ComponentDemo>
  <div class="rounded-lg border border-slate-200 bg-white shadow-sm w-80 overflow-hidden">
    <div class="px-4 py-3 bg-slate-50 border-b border-slate-200">
      <h3 class="text-sm font-semibold text-slate-800">Detail pesanan</h3>
    </div>
    <PtDivider />
    <div class="px-4 py-3">
      <p class="text-sm text-slate-600">Item A — Rp 50.000</p>
      <p class="text-sm text-slate-600">Item B — Rp 30.000</p>
    </div>
    <PtDivider />
    <div class="px-4 py-3 flex justify-between items-center">
      <span class="text-sm font-medium text-slate-700">Total</span>
      <span class="text-sm font-semibold text-slate-900">Rp 80.000</span>
    </div>
  </div>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<div className="rounded-lg border border-slate-200 bg-white shadow-sm w-80 overflow-hidden">
  <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
    <h3 className="text-sm font-semibold text-slate-800">Detail pesanan</h3>
  </div>
  <Divider />
  <div className="px-4 py-3">
    <p className="text-sm text-slate-600">Item A — Rp 50.000</p>
    <p className="text-sm text-slate-600">Item B — Rp 30.000</p>
  </div>
  <Divider />
  <div className="px-4 py-3 flex justify-between items-center">
    <span className="text-sm font-medium text-slate-700">Total</span>
    <span className="text-sm font-semibold text-slate-900">Rp 80.000</span>
  </div>
</div>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <div class="rounded-lg border border-slate-200 bg-white shadow-sm w-80 overflow-hidden">
    <div class="px-4 py-3 bg-slate-50 border-b border-slate-200">
      <h3 class="text-sm font-semibold text-slate-800">Detail pesanan</h3>
    </div>
    <PtDivider />
    <div class="px-4 py-3">
      <p class="text-sm text-slate-600">Item A — Rp 50.000</p>
      <p class="text-sm text-slate-600">Item B — Rp 30.000</p>
    </div>
    <PtDivider />
    <div class="px-4 py-3 flex justify-between items-center">
      <span class="text-sm font-medium text-slate-700">Total</span>
      <span class="text-sm font-semibold text-slate-900">Rp 80.000</span>
    </div>
  </div>
</template>
```

</template>
</ComponentDemo>

## Form sections (Profile vs Keamanan)

Divider horizontal memisahkan grup form dengan heading.

<ComponentDemo>
  <div class="w-96 space-y-4 rounded-lg border border-slate-200 bg-white p-4">
    <div>
      <h4 class="text-sm font-semibold text-slate-800 mb-2">Profil</h4>
      <p class="text-xs text-slate-500">Nama dan email</p>
    </div>
    <PtDivider variant="dashed" />
    <div>
      <h4 class="text-sm font-semibold text-slate-800 mb-2">Keamanan</h4>
      <p class="text-xs text-slate-500">Kata sandi dan 2FA</p>
    </div>
  </div>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<div className="w-96 space-y-4 rounded-lg border border-slate-200 bg-white p-4">
  <div>
    <h4 className="text-sm font-semibold text-slate-800 mb-2">Profil</h4>
    <p className="text-xs text-slate-500">Nama dan email</p>
  </div>
  <Divider variant="dashed" />
  <div>
    <h4 className="text-sm font-semibold text-slate-800 mb-2">Keamanan</h4>
    <p className="text-xs text-slate-500">Kata sandi dan 2FA</p>
  </div>
</div>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <div class="w-96 space-y-4 rounded-lg border border-slate-200 bg-white p-4">
    <div>
      <h4 class="text-sm font-semibold text-slate-800 mb-2">Profil</h4>
      <p class="text-xs text-slate-500">Nama dan email</p>
    </div>
    <PtDivider variant="dashed" />
    <div>
      <h4 class="text-sm font-semibold text-slate-800 mb-2">Keamanan</h4>
      <p class="text-xs text-slate-500">Kata sandi dan 2FA</p>
    </div>
  </div>
</template>
```

</template>
</ComponentDemo>

## Navigasi dengan pembatas vertikal

Vertical divider antara link/aksi memberi pemisah yang ringan tanpa memecah aliran.

<ComponentDemo>
  <nav class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 w-fit" aria-label="Breadcrumb">
    <a href="#" class="text-sm text-teal-600 hover:underline">Beranda</a>
    <PtDivider orientation="vertical" height="1rem" size="xs" />
    <a href="#" class="text-sm text-slate-600 hover:underline">Profil</a>
    <PtDivider orientation="vertical" height="1rem" size="xs" />
    <span class="text-sm text-slate-400">Pengaturan</span>
  </nav>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<nav className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 w-fit" aria-label="Breadcrumb">
  <a href="#" className="text-sm text-teal-600 hover:underline">Beranda</a>
  <Divider orientation="vertical" height="1rem" size="xs" />
  <a href="#" className="text-sm text-slate-600 hover:underline">Profil</a>
  <Divider orientation="vertical" height="1rem" size="xs" />
  <span className="text-sm text-slate-400">Pengaturan</span>
</nav>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <nav class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 w-fit" aria-label="Breadcrumb">
    <a href="#" class="text-sm text-teal-600 hover:underline">Beranda</a>
    <PtDivider orientation="vertical" height="1rem" size="xs" />
    <a href="#" class="text-sm text-slate-600 hover:underline">Profil</a>
    <PtDivider orientation="vertical" height="1rem" size="xs" />
    <span class="text-sm text-slate-400">Pengaturan</span>
  </nav>
</template>
```

</template>
</ComponentDemo>

## Variant & color kombinasi

Solid (netral), dashed (form/section), dotted (dekoratif), dan color palette untuk penegasan.

<ComponentDemo>
  <div class="w-80 space-y-6">
    <div>
      <p class="text-xs text-slate-500 mb-2">Gray solid (default)</p>
      <PtDivider />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Gray dashed</p>
      <PtDivider variant="dashed" />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Teal solid — aksen brand</p>
      <PtDivider color-palette="teal" />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Blue dotted</p>
      <PtDivider color-palette="blue" variant="dotted" />
    </div>
  </div>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<div className="w-80 space-y-6">
  <div>
    <p className="text-xs text-slate-500 mb-2">Gray solid (default)</p>
    <Divider />
  </div>
  <div>
    <p className="text-xs text-slate-500 mb-2">Gray dashed</p>
    <Divider variant="dashed" />
  </div>
  <div>
    <p className="text-xs text-slate-500 mb-2">Teal solid — aksen brand</p>
    <Divider colorPalette="teal" />
  </div>
  <div>
    <p className="text-xs text-slate-500 mb-2">Blue dotted</p>
    <Divider colorPalette="blue" variant="dotted" />
  </div>
</div>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <div class="w-80 space-y-6">
    <div>
      <p class="text-xs text-slate-500 mb-2">Gray solid (default)</p>
      <PtDivider />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Gray dashed</p>
      <PtDivider variant="dashed" />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Teal solid — aksen brand</p>
      <PtDivider color-palette="teal" />
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Blue dotted</p>
      <PtDivider color-palette="blue" variant="dotted" />
    </div>
  </div>
</template>
```

</template>
</ComponentDemo>

## Width & height (nilai CSS)

Horizontal pakai `width`, vertical pakai `height` — keduanya **nilai CSS** (px, %, rem), cocok untuk Tailwind, Bootstrap, atau CSS polos.

<ComponentDemo>
  <div class="space-y-6">
    <div>
      <p class="text-xs text-slate-500 mb-2">Horizontal: width="192px" dan width="100%"</p>
      <div class="space-y-3">
        <PtDivider width="192px" />
        <PtDivider width="100%" />
      </div>
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Vertical: height="32px" vs height="100%"</p>
      <div class="flex items-end gap-6">
        <div class="flex items-center gap-2 h-12">
          <span class="text-sm text-slate-600">A</span>
          <PtDivider orientation="vertical" height="32px" />
          <span class="text-sm text-slate-600">B</span>
        </div>
        <div class="flex items-stretch gap-2 h-12">
          <span class="text-sm text-slate-600 flex items-center">A</span>
          <PtDivider orientation="vertical" height="100%" />
          <span class="text-sm text-slate-600 flex items-center">B</span>
        </div>
      </div>
    </div>
  </div>

<template #react>

```tsx
import { Divider } from '@pacer-ui/react';

<div className="space-y-6">
  <div>
    <p className="text-xs text-slate-500 mb-2">Horizontal: width="192px" dan width="100%"</p>
    <div className="space-y-3">
      <Divider width="192px" />
      <Divider width="100%" />
    </div>
  </div>
  <div>
    <p className="text-xs text-slate-500 mb-2">Vertical: height="32px" vs height="100%"</p>
    <div className="flex items-end gap-6">
      <div className="flex items-center gap-2 h-12">
        <span className="text-sm text-slate-600">A</span>
        <Divider orientation="vertical" height="32px" />
        <span className="text-sm text-slate-600">B</span>
      </div>
      <div className="flex items-stretch gap-2 h-12">
        <span className="text-sm text-slate-600 flex items-center">A</span>
        <Divider orientation="vertical" height="100%" />
        <span className="text-sm text-slate-600 flex items-center">B</span>
      </div>
    </div>
  </div>
</div>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtDivider } from '@pacer-ui/vue';
</script>

<template>
  <div class="space-y-6">
    <div>
      <p class="text-xs text-slate-500 mb-2">Horizontal: width="192px" dan width="100%"</p>
      <div class="space-y-3">
        <PtDivider width="192px" />
        <PtDivider width="100%" />
      </div>
    </div>
    <div>
      <p class="text-xs text-slate-500 mb-2">Vertical: height="32px" vs height="100%"</p>
      <div class="flex items-end gap-6">
        <div class="flex items-center gap-2 h-12">
          <span class="text-sm text-slate-600">A</span>
          <PtDivider orientation="vertical" height="32px" />
          <span class="text-sm text-slate-600">B</span>
        </div>
        <div class="flex items-stretch gap-2 h-12">
          <span class="text-sm text-slate-600 flex items-center">A</span>
          <PtDivider orientation="vertical" height="100%" />
          <span class="text-sm text-slate-600 flex items-center">B</span>
        </div>
      </div>
    </div>
  </div>
</template>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colorPalette` | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | `'gray'` | Warna garis |
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Gaya garis |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Arah divider |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Ketebalan |
| `width` | `string` | `'100%'` (horizontal) | Nilai CSS lebar (horizontal), mis. `"192px"`, `"100%"`, `"12rem"`. Framework-agnostic. |
| `height` | `string` | `'100%'` (vertical) | Nilai CSS tinggi (vertical), mis. `"32px"`, `"100%"`, `"2rem"`. Default pakai min-height `1em`. Framework-agnostic. |
| `as` | `string` (Vue) / `React.ElementType` (React) | `'div'` | Elemen dasar (mis. `div`, `hr`). React juga mendukung `asChild` untuk composability. |

</template>

</PageTabs>
