<ComponentHero title="Accordion" description="Accordion menampilkan daftar item yang dapat dibuka/ditutup. Menggunakan compound components: Accordion > AccordionItem > AccordionTrigger + AccordionContent. Dua variant: line (border bawah per item) dan background (rounded box dengan bg #F8FAFC per item)." />

<script setup lang="ts">
import { ref } from 'vue';
import {
  PtAccordion,
  PtAccordionItem,
  PtAccordionTrigger,
  PtAccordionContent,
} from '@pacer-ui/vue';

const openValue = ref<string | string[]>([]);
const openValueLine = ref<string | string[]>([]);
const openValueBg = ref<string | string[]>([]);
</script>

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Accordion terdiri dari:

- **Accordion**: Container utama yang mengatur state terbuka/tertutup
- **AccordionItem**: Satu item dengan `value` unik
- **AccordionTrigger**: Tombol judul (klik untuk toggle)
- **AccordionContent**: Konten yang ditampilkan saat item terbuka

## Components

- **`Accordion`** (React) / **`PtAccordion`** (Vue) / **`PtAccordion`** (Blazor): Container
- **`AccordionItem`** / **`PtAccordionItem`**: Wrapper per item dengan `value`
- **`AccordionTrigger`** / **`PtAccordionTrigger`**: Judul (title) per item
- **`AccordionContent`** / **`PtAccordionContent`**: Isi per item

## Variants

- **`line`**: Border bawah per item (`border-b border-slate-200`), item terakhir tanpa border bawah
- **`background`**: Tiap item: `rounded-lg`, `border-b` #CBD5E1, `bg` #F8FAFC; judul #020617 (T2 14/medium), isi #64748B (T2 14/normal)

## Props (parity lintas framework)

| Prop | React | Vue | Blazor | Default |
|------|-------|-----|--------|---------|
| value / modelValue / Value | `value` | `modelValue` (v-model) | `Value` (@bind-Value) | - |
| defaultValue / DefaultValue | `defaultValue` | `defaultValue` | `DefaultValue` | - |
| type / Type | `type` | `type` | `Type` | `single` |
| variant / Variant | `variant` | `variant` | `Variant` | `line` |
| onValueChange / @change / ValueChanged | `onValueChange` | `@change` | `ValueChanged` | - |

- **type**: `single` = hanya satu item terbuka; `multiple` = banyak item bisa terbuka
- **variant**: `line` | `background`

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="w-[400px]">
    <PtAccordion v-model="openValue" type="single" variant="line">
      <PtAccordionItem value="accessible">
        <PtAccordionTrigger>Is it accessible?</PtAccordionTrigger>
        <PtAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </PtAccordionContent>
      </PtAccordionItem>
      <PtAccordionItem value="styled">
        <PtAccordionTrigger>Is it styled?</PtAccordionTrigger>
        <PtAccordionContent>
          Yes. It uses Tailwind and design tokens.
        </PtAccordionContent>
      </PtAccordionItem>
      <PtAccordionItem value="animated">
        <PtAccordionTrigger>Is it animated?</PtAccordionTrigger>
        <PtAccordionContent>
          The chevron rotates on open/close.
        </PtAccordionContent>
      </PtAccordionItem>
    </PtAccordion>
  </div>

<template #react>

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@pacer-ui/react';

<Accordion type="single" variant="line">
  <AccordionItem value="accessible">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="styled">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It uses Tailwind and design tokens.</AccordionContent>
  </AccordionItem>
</Accordion>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtAccordion, PtAccordionItem, PtAccordionTrigger, PtAccordionContent } from '@pacer-ui/vue';
</script>

<template>
  <PtAccordion v-model="openValue" type="single" variant="line">
    <PtAccordionItem value="accessible">
      <PtAccordionTrigger>Is it accessible?</PtAccordionTrigger>
      <PtAccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</PtAccordionContent>
    </PtAccordionItem>
    <PtAccordionItem value="styled">
      <PtAccordionTrigger>Is it styled?</PtAccordionTrigger>
      <PtAccordionContent>Yes. It uses Tailwind and design tokens.</PtAccordionContent>
    </PtAccordionItem>
  </PtAccordion>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtAccordion @bind-Value="openValue" Type="AccordionType.Single" Variant="AccordionVariant.Line">
    <PtAccordionItem Value="accessible">
        <PtAccordionTrigger>Is it accessible?</PtAccordionTrigger>
        <PtAccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</PtAccordionContent>
    </PtAccordionItem>
    <PtAccordionItem Value="styled">
        <PtAccordionTrigger>Is it styled?</PtAccordionTrigger>
        <PtAccordionContent>Yes. It uses Tailwind and design tokens.</PtAccordionContent>
    </PtAccordionItem>
</PtAccordion>

@code {
    private object? openValue;
}
```

</template>
</ComponentDemo>

## Line variant

<ComponentDemo>
  <div class="w-[400px]">
    <PtAccordion v-model="openValueLine" type="single" variant="line">
      <PtAccordionItem value="a">
        <PtAccordionTrigger>Line item 1</PtAccordionTrigger>
        <PtAccordionContent>Content for line variant.</PtAccordionContent>
      </PtAccordionItem>
      <PtAccordionItem value="b">
        <PtAccordionTrigger>Line item 2</PtAccordionTrigger>
        <PtAccordionContent>Border bottom per item.</PtAccordionContent>
      </PtAccordionItem>
    </PtAccordion>
  </div>

<template #react></template>
<template #vue></template>
<template #blazor></template>
</ComponentDemo>

## Background variant

<ComponentDemo>
  <div class="w-[400px]">
    <PtAccordion v-model="openValueBg" type="single" variant="background">
      <PtAccordionItem value="x">
        <PtAccordionTrigger>Background item 1</PtAccordionTrigger>
        <PtAccordionContent>Rounded box, bg #F8FAFC, border #CBD5E1.</PtAccordionContent>
      </PtAccordionItem>
      <PtAccordionItem value="y">
        <PtAccordionTrigger>Background item 2</PtAccordionTrigger>
        <PtAccordionContent>Title #020617, content #64748B.</PtAccordionContent>
      </PtAccordionItem>
    </PtAccordion>
  </div>

<template #react></template>
<template #vue></template>
<template #blazor></template>
</ComponentDemo>

</template>
</PageTabs>
