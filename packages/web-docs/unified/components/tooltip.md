---
outline: deep
---

<ComponentHero title="Tooltip" description="Tooltip menampilkan informasi singkat saat elemen trigger di-hover atau mendapat fokus. Mendukung title dan description berupa string, komponen/slot/ReactNode, serta baris baru (newline)." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Tooltip terdiri dari:

- **Trigger**: Elemen yang di-hover atau difokus (children/slot default). Dapat berupa teks, ikon, tombol, atau link.
- **Popover**: Container dengan background, shadow, dan rounded corner.
- **Title** (opsional): Baris judul — teks atau konten custom.
- **Description** (opsional): Baris deskripsi — teks atau konten custom. Tooltip tetap tampil jika hanya ada description (tanpa title).
- **Arrow**: Penunjuk ke arah trigger. Posisi mengikuti prop `position`.

## Variants

- **`primary`** (default): Background `#1A1A1A`, teks putih, shadow. Untuk konteks gelap.
- **`secondary`**: Background putih, teks slate-900, border slate-200. Untuk konteks terang.

## Position

Posisi tooltip relatif ke trigger. Nilai yang didukung:

| Nilai | Keterangan |
|-------|------------|
| `top` | Di atas, center |
| `top-left` | Di atas, sejajar kiri trigger |
| `top-right` | Di atas, sejajar kanan trigger |
| `right` | Di kanan, center |
| `bottom-right` | Di bawah kanan |
| `bottom` | Di bawah, center |
| `bottom-left` | Di bawah kiri |
| `left` | Di kiri, center |

## Sizes

| Size | Container | Title | Description |
|------|-----------|--------|-------------|
| `sm` | px-3 py-2, gap-0.5, max-w-[200px] | text-xs font-semibold | text-xs font-normal leading-4 opacity-90 |
| `md` (default) | px-4 py-3, gap-1, max-w-[280px] | text-sm font-semibold | text-sm font-normal leading-5 opacity-90 |

## Title & description

- **String**: Prop `title` dan `description` dapat berisi teks biasa.
- **Komponen / rich content**:
  - **Vue**: Gunakan slot `#title` dan `#description` untuk markup atau komponen custom.
  - **React**: `title` dan `description` bertipe `ReactNode` — bisa JSX.
  - **Blazor**: `Title` dan `Description` bertipe `RenderFragment` — bisa markup Razor.
- **Multiline (baris baru)**:
  - Di **kode**: gunakan karakter newline asli, mis. `description="Baris 1\nBaris 2"`.
  - Di **input/Controls** (mis. Storybook): ketik literal `\n` — komponen akan mengubahnya jadi newline. Container memakai `whitespace-pre-line` sehingga newline ditampilkan sebagai ganti paragraf.

## Best practice

- Gunakan untuk label ikon atau deskripsi kontekstual.
- Konten tooltip sebaiknya teks saja; hindari link/tombol di dalam tooltip.
- Muncul setelah delay singkat (~200ms), hilang setelah pointer/fokus keluar.
- Dapat di-dismiss dengan tombol **Escape** (Vue & React).
- Tetap visible saat pointer pindah dari trigger ke tooltip (hoverable).

</template>

<template #Implementation>

## Basic usage

<ComponentDemo>
  <div class="flex items-center gap-4">
    <PtTooltip title="Judul" description="Deskripsi singkat untuk trigger ini.">
      <span
        class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        tabindex="0"
      >Hover or focus me</span>
    </PtTooltip>
  </div>

<template #react>

```tsx
import { Tooltip } from '@pacer-ui/react';

<Tooltip title="Judul" description="Deskripsi singkat untuk trigger ini.">
  <span
    className="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2"
    tabIndex={0}
  >
    Hover or focus me
  </span>
</Tooltip>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtTooltip } from '@pacer-ui/vue';
</script>

<template>
  <PtTooltip title="Judul" description="Deskripsi singkat untuk trigger ini.">
    <span
      class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2"
      tabindex="0"
    >
      Hover or focus me
    </span>
  </PtTooltip>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtTooltip Title="Judul" Description="Deskripsi singkat untuk trigger ini.">
    <span tabindex="0" class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted underline-offset-2">
        Hover or focus me
    </span>
</PtTooltip>
```

</template>
</ComponentDemo>

## Hanya description (tanpa title)

Tooltip tetap muncul bila hanya ada `description`.

<ComponentDemo>
  <div class="flex items-center gap-4">
    <PtTooltip description="Hanya deskripsi — tanpa title.">
      <span class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted" tabindex="0">Hover me</span>
    </PtTooltip>
  </div>

<template #react>

```tsx
<Tooltip description="Hanya deskripsi — tanpa title.">
  <span className="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted" tabIndex={0}>
    Hover me
  </span>
</Tooltip>
```

</template>

<template #vue>

```vue
<PtTooltip description="Hanya deskripsi — tanpa title.">
  <span class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted" tabindex="0">Hover me</span>
</PtTooltip>
```

</template>

<template #blazor>

```razor
<PtTooltip Description="Hanya deskripsi — tanpa title.">
    <span tabindex="0">Hover me</span>
</PtTooltip>
```

</template>
</ComponentDemo>

## Multiline (newline)

Gunakan newline di string agar ada paragraf/baris baru. Di kode pakai `\n`; dari input text (mis. Storybook Controls) ketik literal `\n` — komponen akan menerjemahkannya jadi baris baru.

<ComponentDemo>
  <div class="flex items-center gap-4">
    <PtTooltip
      title="Baris pertama judul&#10;Baris kedua judul"
      description="Paragraf pertama.&#10;Paragraf kedua setelah newline."
    >
      <span class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted" tabindex="0">Multiline</span>
    </PtTooltip>
  </div>

<template #react>

```tsx
<Tooltip
  title={'Baris pertama judul\nBaris kedua judul'}
  description={'Paragraf pertama.\nParagraf kedua setelah newline.'}
>
  <span tabIndex={0}>Multiline</span>
</Tooltip>
```

</template>

<template #vue>

```vue
<PtTooltip
  :title="'Baris pertama judul\nBaris kedua judul'"
  :description="'Paragraf pertama.\nParagraf kedua setelah newline.'"
>
  <span tabindex="0">Multiline</span>
</PtTooltip>
```

</template>

<template #blazor>

```razor
<PtTooltip Title="Baris pertama judul&#10;Baris kedua judul" Description="Paragraf pertama.&#10;Paragraf kedua.">
    <span tabindex="0">Multiline</span>
</PtTooltip>
```

</template>
</ComponentDemo>

## Title & description sebagai komponen (Vue slot / React JSX / Blazor RenderFragment)

**Vue**: pakai slot `#title` dan `#description`.  
**React**: pass JSX ke prop `title` dan `description`.  
**Blazor**: pass `RenderFragment` ke parameter `Title` dan `Description`.

<ComponentDemo>
  <div class="flex items-center gap-4">
    <PtTooltip>
      <template #title><span>✨ <strong>Pro tip</strong></span></template>
      <template #description><span>Title &amp; description bisa <strong>slot/komponen</strong> + emoji 🎉</span></template>
      <span class="cursor-default rounded px-1 py-0.5 text-slate-700 underline decoration-dotted" tabindex="0">Hover</span>
    </PtTooltip>
  </div>

<template #react>

```tsx
<Tooltip
  title={<span>✨ <strong>Pro tip</strong></span>}
  description={<span>Title & description bisa <strong>ReactNode</strong> + emoji 🎉</span>}
>
  <span tabIndex={0}>Hover</span>
</Tooltip>
```

</template>

<template #vue>

```vue
<PtTooltip>
  <template #title><span>✨ <strong>Pro tip</strong></span></template>
  <template #description><span>Title & description bisa <strong>slot</strong> + emoji 🎉</span></template>
  <span tabindex="0">Hover</span>
</PtTooltip>
```

</template>

<template #blazor>

```razor
<PtTooltip>
    <Title><span>✨ <strong>Pro tip</strong></span></Title>
    <Description><span>Title & description bisa <strong>RenderFragment</strong> + emoji 🎉</span></Description>
    <ChildContent>
        <span tabindex="0">Hover</span>
    </ChildContent>
</PtTooltip>
```

</template>
</ComponentDemo>

## API Reference

### Props / Parameters

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` (Vue) / `ReactNode` (React) / `RenderFragment` (Blazor) | — | Judul tooltip. Opsional. |
| `description` | `string` (Vue) / `ReactNode` (React) / `RenderFragment` (Blazor) | — | Deskripsi tooltip. Opsional. Tooltip tetap tampil jika hanya ada description. |
| `position` | `'top-left' \| 'top' \| 'top-right' \| 'right' \| 'bottom-right' \| 'bottom' \| 'bottom-left' \| 'left'` | `'top'` | Posisi tooltip relatif ke trigger. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Variant visual (dark/light). |
| `size` | `'sm' \| 'md'` | `'md'` | Ukuran konten tooltip. |
| `delayDuration` | `number` | `200` | Delay (ms) sebelum tooltip muncul. |
| `skipDelayDuration` | `number` | `100` | Delay (ms) sebelum tooltip hilang setelah pointer/fokus keluar. |
| `children` / default slot / `ChildContent` | Trigger element | — | Elemen yang di-hover atau difokus. |

### Multiline & literal `\n`

- Di **kode**: string dengan newline asli (`"Baris 1\nBaris 2"`) sudah didukung.
- Di **input teks** (mis. Storybook Controls): ketik literal backslash-n (`\n`) — komponen mengonversinya ke newline dan container memakai `whitespace-pre-line` agar tampil sebagai ganti baris.

### Accessibility

- Trigger sebaiknya fokusable (`tabindex="0"` jika bukan fokus bawaan) dan punya `aria-describedby` menunjuk ke id tooltip ketika terbuka.
- Tooltip memakai `role="tooltip"`.
- Vue & React: tombol **Escape** menutup tooltip.
- Konten tooltip sebaiknya teks; hindari elemen interaktif di dalam tooltip.

</template>

</PageTabs>
