<ComponentHero title="Button" description="Buttons allow users to take actions and make choices with a single tap or click." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

The Button component consists of several key elements:

- **Icons left or right**: Icons that can be positioned either before (leading) or after (trailing) the Label.
- **Text labels**: The text attributed to the Button that provides context.
- **Container**: The clickable area of the button, encompassing the label and icons.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Button Anatomy Diagram" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Button States Diagram" />
  </div>
</div>

## Variants

Button mendukung enam variant. Setiap variant punya tingkat penekanan (visual hierarchy) dan use case yang berbeda.

| Variant | Deskripsi | Kapan dipakai |
|--------|-----------|----------------|
| **Solid (Primary)** | Background warna brand penuh. Paling menonjol. | Action utama dalam halaman (CTA utama), misal: Simpan, Kirim, Daftar. |
| **Secondary** | Background putih, border & teks warna brand. | Action kedua setelah primary, misal: Batal di samping Simpan. |
| **Outline** | Background putih, border abu, teks gelap. Tanpa fill. | Action tersier, navigasi sekunder, atau di dalam card/toolbar. |
| **Ghost** | Background transparan, teks saja. Hover menampilkan background halus. | Toolbar, table actions, atau konteks di mana ruang terbatas. |
| **Link Primary** | Gaya link, warna brand, tinggi 24px, underline on hover. | Action yang ingin terasa seperti link (misal di dalam paragraf). |
| **Link Secondary** | Gaya link, warna netral (slate), tinggi 24px, underline on hover. | Link sekunder atau aksi tambahan dalam teks. |

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Button Variants Diagram" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Button Usage Diagram" />
  </div>
</div>

## Layout and Spacing

The layout and spacing of the button are crucial for its visual consistency and usability.

- **Item spacing**: 4px between icon and text (gap-1).
- **Padding**:
  - Medium size: 12px horizontal (px-3), 8px vertical (py-2) → height 40px.
  - Small size: 8px horizontal (px-2), 6px vertical (py-1.5) → height 36px.
- **Border Radius**: 6px (rounded-[6px]).
- **Icon Size**: 16x16px.
- **Font Size**: 14px (text-sm) with 24px line height (leading-6).

<DoDontGrid>
  <DoDontItem type="do">
    <div class="do-dont-example">
      <PtButton variant="solid">Save Changes</PtButton>
    </div>
    <p class="do-dont-text">• Use clear, action-oriented labels that describe what will happen when clicked.</p>
  </DoDontItem>
  <DoDontItem type="dont">
    <div class="do-dont-example">
      <PtButton variant="solid">Click Here</PtButton>
    </div>
    <p class="do-dont-text">• Avoid vague labels that don't communicate the action clearly.</p>
  </DoDontItem>
</DoDontGrid>

</template>

<template #Implementation>

## Semua Variant (Ringkasan)

Berikut tampilan keenam variant dalam satu tempat. Nilai prop: `solid` | `secondary` | `outline` | `ghost` | `link-primary` | `link-secondary`.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap items-center">
    <PtButton variant="solid">Solid</PtButton>
    <PtButton variant="secondary">Secondary</PtButton>
    <PtButton variant="outline">Outline</PtButton>
    <PtButton variant="ghost">Ghost</PtButton>
    <PtButton variant="link-primary">Link Primary</PtButton>
    <PtButton variant="link-secondary">Link Secondary</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Button variant="solid">Solid</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link-primary">Link Primary</Button>
      <Button variant="link-secondary">Link Secondary</Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 flex-wrap items-center">
    <PtButton variant="solid">Solid</PtButton>
    <PtButton variant="secondary">Secondary</PtButton>
    <PtButton variant="outline">Outline</PtButton>
    <PtButton variant="ghost">Ghost</PtButton>
    <PtButton variant="link-primary">Link Primary</PtButton>
    <PtButton variant="link-secondary">Link Secondary</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 flex-wrap align-items-center">
    <PtButton Variant="ButtonVariant.Solid">Solid</PtButton>
    <PtButton Variant="ButtonVariant.Secondary">Secondary</PtButton>
    <PtButton Variant="ButtonVariant.Outline">Outline</PtButton>
    <PtButton Variant="ButtonVariant.Ghost">Ghost</PtButton>
    <PtButton Variant="ButtonVariant.LinkPrimary">Link Primary</PtButton>
    <PtButton Variant="ButtonVariant.LinkSecondary">Link Secondary</PtButton>
</div>
```

</template>
</ComponentDemo>

## Penjelasan per Variant

### Solid (Primary) — `variant="solid"`

- **Tampilan:** Background warna brand (primary) penuh, teks putih.
- **Kapan dipakai:** Satu CTA utama per konteks (Simpan, Kirim, Daftar, Lanjut).
- **Default:** Ini variant default jika `variant` tidak diisi.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="solid">Simpan</PtButton>
    <PtButton variant="solid" color="danger">Hapus</PtButton>
  </div>

<template #react>

```tsx
<Button variant="solid">Simpan</Button>
<Button variant="solid" color="danger">Hapus</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="solid">Simpan</PtButton>
<PtButton variant="solid" color="danger">Hapus</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.Solid">Simpan</PtButton>
<PtButton Variant="ButtonVariant.Solid" Color="ButtonColor.Danger">Hapus</PtButton>
```

</template>
</ComponentDemo>

### Secondary — `variant="secondary"`

- **Tampilan:** Background putih, border dan teks warna brand.
- **Kapan dipakai:** Action kedua (Batal, Kembali) atau opsi alternatif di samping primary.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="solid">Simpan</PtButton>
    <PtButton variant="secondary">Batal</PtButton>
  </div>

<template #react>

```tsx
<Button variant="solid">Simpan</Button>
<Button variant="secondary">Batal</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="solid">Simpan</PtButton>
<PtButton variant="secondary">Batal</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.Solid">Simpan</PtButton>
<PtButton Variant="ButtonVariant.Secondary">Batal</PtButton>
```

</template>
</ComponentDemo>

### Outline — `variant="outline"`

- **Tampilan:** Background putih, border abu (slate), teks gelap. Tanpa fill.
- **Kapan dipakai:** Action tersier, navigasi sekunder, atau di dalam card/toolbar yang butuh emphasis lebih rendah.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="outline">Filter</PtButton>
    <PtButton variant="outline">Ekspor</PtButton>
  </div>

<template #react>

```tsx
<Button variant="outline">Filter</Button>
<Button variant="outline">Ekspor</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="outline">Filter</PtButton>
<PtButton variant="outline">Ekspor</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.Outline">Filter</PtButton>
<PtButton Variant="ButtonVariant.Outline">Ekspor</PtButton>
```

</template>
</ComponentDemo>

### Ghost — `variant="ghost"`

- **Tampilan:** Background transparan, teks gelap. Hover menampilkan background halus.
- **Kapan dipakai:** Toolbar, table row actions, atau area padat di mana outline/solid terlalu berat.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="ghost">Edit</PtButton>
    <PtButton variant="ghost">Detail</PtButton>
  </div>

<template #react>

```tsx
<Button variant="ghost">Edit</Button>
<Button variant="ghost">Detail</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="ghost">Edit</PtButton>
<PtButton variant="ghost">Detail</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.Ghost">Edit</PtButton>
<PtButton Variant="ButtonVariant.Ghost">Detail</PtButton>
```

</template>
</ComponentDemo>

### Link Primary — `variant="link-primary"`

- **Tampilan:** Seperti link: teks warna brand, tinggi 24px, tanpa padding penuh, underline on hover.
- **Kapan dipakai:** Action yang ingin terasa seperti link (misal di dalam paragraf atau list).

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="link-primary">Baca selengkapnya</PtButton>
  </div>

<template #react>

```tsx
<Button variant="link-primary">Baca selengkapnya</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="link-primary">Baca selengkapnya</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.LinkPrimary">Baca selengkapnya</PtButton>
```

</template>
</ComponentDemo>

### Link Secondary — `variant="link-secondary"`

- **Tampilan:** Seperti link dengan warna netral (slate), tinggi 24px, underline on hover.
- **Kapan dipakai:** Link atau aksi sekunder dalam teks, misal "Lewati" atau "Batalkan".

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="link-secondary">Lewati langkah ini</PtButton>
  </div>

<template #react>

```tsx
<Button variant="link-secondary">Lewati langkah ini</Button>
```

</template>

<template #vue>

```vue
<PtButton variant="link-secondary">Lewati langkah ini</PtButton>
```

</template>

<template #blazor>

```razor
<PtButton Variant="ButtonVariant.LinkSecondary">Lewati langkah ini</PtButton>
```

</template>
</ComponentDemo>

## Button Sizes

Buttons are available in multiple sizes to fit different use cases (Figma: `sm` dan `md`).

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtButton size="sm">Small</PtButton>
    <PtButton size="md">Medium</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtButton size="sm">Small</PtButton>
    <PtButton size="md">Medium</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtButton Size="ButtonSize.Small">Small</PtButton>
    <PtButton Size="ButtonSize.Medium">Medium</PtButton>
</div>
```

</template>
</ComponentDemo>

## Color (Primary / Danger)

Buttons support two color tones: `primary` (default) and `danger`.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton color="primary">Primary</PtButton>
    <PtButton color="danger">Danger</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton color="primary">Primary</PtButton>
    <PtButton color="danger">Danger</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Color="primary">Primary</PtButton>
    <PtButton Color="danger">Danger</PtButton>
</div>
```

</template>
</ComponentDemo>

## With Icons

Buttons can include icons before or after the label.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton variant="solid" :left-icon="PlusIcon">Add Item</PtButton>
    <PtButton variant="solid" :right-icon="SaveIcon">Save</PtButton>
    <PtButton variant="solid" :left-icon="PlusIcon" :right-icon="CheckIcon">Submit</PtButton>
  </div>
  
  <script setup>
  import { h } from 'vue';
  
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
  
  const SaveIcon = () => h('svg', {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'h-4 w-4'
  }, [
    h('path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' }),
    h('polyline', { points: '17 21 17 13 7 13 7 21' }),
    h('polyline', { points: '7 3 7 8 15 8' })
  ]);
  
  const CheckIcon = () => h('svg', {
    'aria-hidden': 'true',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'h-4 w-4'
  }, [
    h('polyline', { points: '20 6 9 17 4 12' })
  ]);
  </script>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const SaveIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function App() {
  return (
    <div className="flex gap-4">
      <Button leftIcon={<PlusIcon />}>Add Item</Button>
      <Button rightIcon={<SaveIcon />}>Save</Button>
      <Button leftIcon={<PlusIcon />} rightIcon={<CheckIcon />}>
        Submit
      </Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
import { Plus, Save, Check } from 'lucide-vue-next';
</script>

<template>
  <div class="flex gap-4">
    <PtButton :left-icon="Plus">Add Item</PtButton>
    <PtButton :right-icon="Save">Save</PtButton>
    <PtButton :left-icon="Plus" :right-icon="Check">Submit</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton>
        <LeftIcon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </LeftIcon>
        Add Item
    </PtButton>
    <PtButton>
        <RightIcon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
            </svg>
        </RightIcon>
        Save
    </PtButton>
</div>
```

</template>
</ComponentDemo>

## Loading State

Buttons can show a loading state with a spinner.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton :loading="true">Loading...</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button loading>Loading...</Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton :loading="true">Loading...</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Loading="true">Loading...</PtButton>
</div>
```

</template>
</ComponentDemo>

## Selected State

Buttons can have a selected/toggled state.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton selected>Selected</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button selected>Selected</Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton :selected="true">Selected</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Selected="true">Selected</PtButton>
</div>
```

</template>
</ComponentDemo>

## Disabled State

Buttons can be disabled to prevent user interaction.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtButton disabled>Disabled Button</PtButton>
    <PtButton variant="outline" disabled>Disabled Outline</PtButton>
  </div>

<template #react>

```tsx
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Button disabled>Disabled Button</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtButton disabled>Disabled Button</PtButton>
    <PtButton variant="outline" disabled>Disabled Outline</PtButton>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtButton Disabled="true">Disabled Button</PtButton>
    <PtButton Variant="ButtonVariant.Outline" Disabled="true">Disabled Outline</PtButton>
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop                                                   | Type                                                                                   | Default     | Description                             |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------- | --------------------------------------- |
| `variant`                                              | `'solid' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary'` | `'solid'`   | Pilihan gaya visual tombol              |
| `size`                                                 | `'sm' \| 'md'`                                                                         | `'md'`      | Ukuran tombol (non-link)                |
| `loading`                                              | `boolean`                                                                              | `false`     | Tampilkan state loading                 |
| `color`                                                | `'primary' \| 'danger'`                                                                | `'primary'` | Color button (Primary / Danger)         |
| `selected`                                             | `boolean`                                                                              | `false`     | Aktifkan selected/toggled state         |
| `leftIcon`                                             | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor)              | `undefined` | Ikon sebelum label tombol               |
| `rightIcon`                                            | `React.ReactNode` (React) / `Component` (Vue) / `RenderFragment` (Blazor)              | `undefined` | Ikon setelah label tombol               |
| `disabled`                                             | `boolean`                                                                              | `false`     | Nonaktifkan tombol                      |
| `type`                                                 | `'button' \| 'submit' \| 'reset'`                                                      | `'button'`  | Native HTML button type                 |
| `children`                                             | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor)                   | `undefined` | Label atau konten tombol                |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string`                                                                               | `undefined` | Custom className untuk override styling |
| `style`                                                | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor)     | `undefined` | Custom style untuk override styling     |

### Events

| Event                            | Description                  |
| -------------------------------- | ---------------------------- |
| `onClick` / `@click` / `OnClick` | Fired when button is clicked |

## Design Tokens

The button uses the following design tokens:

- **Primary Color**: `--color-brand-300` (#016BF8)
- **Secondary Color**: `--color-white` (background), `--color-brand-300` (text + border)
- **Outline Color**: `--color-slate-300` (border), `--color-slate-900` (text)
- **Ghost Color**: `--color-slate-900` (text)
- **Link Primary Color**: `--color-brand-300` (text)
- **Link Secondary Color**: `--color-slate-900` (text)
- **Danger Colors**: `--color-red-600` (background), `--color-red-700` (hover), `--color-red-600` (text/border)
- **Selected Colors**: `--color-brand-400` (background when selected), `--color-brand-50` (secondary bg when selected)
- **Border Radius**: `6px` (rounded-[6px])
- **Font Weight**: `--font-weight-medium` (500)
- **Typography**: `text-sm` (14px) + `leading-6` (24px line-height)
- **Transition**: `all 150ms ease-in-out`
- **Spacing**: `px-2 py-1.5` (8px/6px) for `sm`; `px-3 py-2` (12px/8px) for `md`
- **Gap**: `gap-1` (4px) between icons and text

## Accessibility

- Uses semantic `<button>` element.
- Supports keyboard navigation (Enter, Space).
- Includes focus indicators with double ring effect.
- Properly handles disabled and loading states.
- Supports `aria-pressed` for toggle states.

</template>

</PageTabs>
