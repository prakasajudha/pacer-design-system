---
outline: deep
---

<ComponentHero title="Textarea" description="Textarea untuk input teks multi-baris. Mendukung variant border/background, size, title, description, error state, dan resize. Style mengikuti Pin Input (title, description, errorMessage)." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Textarea terdiri dari:

- **Title** (opsional): Label di atas textarea
- **Textarea**: Area input multi-baris dengan placeholder
- **Description**: Teks bantuan di bawah; tidak ditampilkan saat error
- **Error message** (jika `error` dan `errorMessage` ada): Pesan error di bawah

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Textarea Anatomy" />
  </div>
</div>

## Variants

| Variant      | Keterangan                                  |
|-------------|----------------------------------------------|
| `border`    | Background putih, border slate-300 (default) |
| `background`| Background slate-50, tanpa border            |

## Sizes

- `sm`: Padding dan teks lebih kecil
- `md` (default): Ukuran standar
- `lg`: Padding dan teks lebih besar

## Resize

- `none`: Tidak bisa di-resize
- `vertical` (default): Resize vertikal saja
- `horizontal`: Resize horizontal saja
- `both`: Resize kedua arah

## Best practice

- Gunakan title/description untuk konteks (sama seperti Pin Input).
- Saat error, description disembunyikan dan errorMessage ditampilkan.
- Pilih variant border untuk form standar, background untuk konteks yang lebih halus.

</template>

<template #Implementation>

## Default

<ComponentDemo>
  <div class="w-full max-w-md">
    <PtTextarea v-model="text1" title="Komentar" description="Masukkan komentar atau catatan (opsional)." placeholder="Tulis komentar..." />
  </div>

<template #react>

```tsx
import { Textarea } from '@pacer-ui/react';
import { useState } from 'react';

const [value, setValue] = useState('');
<Textarea
  value={value}
  onChange={setValue}
  title="Komentar"
  description="Masukkan komentar atau catatan (opsional)."
  placeholder="Tulis komentar..."
/>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { PtTextarea } from '@pacer-ui/vue';

const value = ref('');
</script>

<template>
  <PtTextarea
    v-model="value"
    title="Komentar"
    description="Masukkan komentar atau catatan (opsional)."
    placeholder="Tulis komentar..."
  />
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtTextarea @bind-Value="value" Title="Komentar" Description="Masukkan komentar atau catatan (opsional)." Placeholder="Tulis komentar..." />

@code {
    private string value = "";
}
```

</template>
</ComponentDemo>

## Variant Border & Background

<ComponentDemo>
  <div class="w-full max-w-md space-y-6">
    <PtTextarea v-model="text2" variant="border" title="Variant Border" description="Bg putih, border slate-300." placeholder="Placeholder..." />
    <PtTextarea v-model="text3" variant="background" title="Variant Background" description="Bg slate-50, tanpa border." placeholder="Placeholder..." />
  </div>

<template #react>

```tsx
<Textarea value={v2} onChange={setV2} variant="border" title="Variant Border" description="Bg putih, border slate-300." placeholder="Placeholder..." />
<Textarea value={v3} onChange={setV3} variant="background" title="Variant Background" description="Bg slate-50, tanpa border." placeholder="Placeholder..." />
```

</template>

<template #vue>

```vue
<PtTextarea v-model="v2" variant="border" title="Variant Border" description="Bg putih, border slate-300." placeholder="Placeholder..." />
<PtTextarea v-model="v3" variant="background" title="Variant Background" description="Bg slate-50, tanpa border." placeholder="Placeholder..." />
```

</template>

<template #blazor>

```razor
<PtTextarea @bind-Value="v2" Variant="TextareaVariant.Border" Title="Variant Border" Description="Bg putih, border slate-300." Placeholder="Placeholder..." />
<PtTextarea @bind-Value="v3" Variant="TextareaVariant.Background" Title="Variant Background" Description="Bg slate-50, tanpa border." Placeholder="Placeholder..." />
```

</template>
</ComponentDemo>

## Sizes

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtTextarea v-model="sms" size="sm" title="Size sm" placeholder="sm" />
    <PtTextarea v-model="mmd" size="md" title="Size md" placeholder="md" />
    <PtTextarea v-model="llg" size="lg" title="Size lg" placeholder="lg" />
  </div>

<template #react>

```tsx
<Textarea value={sms} onChange={setSms} size="sm" title="Size sm" placeholder="sm" />
<Textarea value={mmd} onChange={setMmd} size="md" title="Size md" placeholder="md" />
<Textarea value={llg} onChange={setLlg} size="lg" title="Size lg" placeholder="lg" />
```

</template>

<template #vue>

```vue
<PtTextarea v-model="sms" size="sm" title="Size sm" placeholder="sm" />
<PtTextarea v-model="mmd" size="md" title="Size md" placeholder="md" />
<PtTextarea v-model="llg" size="lg" title="Size lg" placeholder="lg" />
```

</template>

<template #blazor>

```razor
<PtTextarea @bind-Value="sms" Size="TextareaSize.Small" Title="Size sm" Placeholder="sm" />
<PtTextarea @bind-Value="mmd" Size="TextareaSize.Medium" Title="Size md" Placeholder="md" />
<PtTextarea @bind-Value="llg" Size="TextareaSize.Large" Title="Size lg" Placeholder="lg" />
```

</template>
</ComponentDemo>

## Error state

<ComponentDemo>
  <div class="w-full max-w-md">
    <PtTextarea
      v-model="errText"
      title="Deskripsi"
      description="Min. 10 karakter."
      placeholder="Tulis deskripsi..."
      :error="true"
      error-message="Deskripsi wajib diisi atau minimal 10 karakter."
    />
  </div>

<template #react>

```tsx
<Textarea
  value={errText}
  onChange={setErrText}
  title="Deskripsi"
  description="Min. 10 karakter."
  placeholder="Tulis deskripsi..."
  error
  errorMessage="Deskripsi wajib diisi atau minimal 10 karakter."
/>
```

</template>

<template #vue>

```vue
<PtTextarea
  v-model="errText"
  title="Deskripsi"
  description="Min. 10 karakter."
  placeholder="Tulis deskripsi..."
  :error="true"
  error-message="Deskripsi wajib diisi atau minimal 10 karakter."
/>
```

</template>

<template #blazor>

```razor
<PtTextarea
  @bind-Value="errText"
  Title="Deskripsi"
  Description="Min. 10 karakter."
  Placeholder="Tulis deskripsi..."
  Error="true"
  ErrorMessage="Deskripsi wajib diisi atau minimal 10 karakter."
/>
```

</template>
</ComponentDemo>

## Disabled

<ComponentDemo>
  <div class="w-full max-w-md space-y-6">
    <PtTextarea v-model="dis1" title="Disabled (Border)" disabled variant="border" placeholder="Tidak dapat diedit" />
    <PtTextarea v-model="dis2" title="Disabled (Background)" disabled variant="background" placeholder="Tidak dapat diedit" />
  </div>

<template #react>

```tsx
<Textarea value={dis1} onChange={setDis1} title="Disabled (Border)" disabled variant="border" placeholder="Tidak dapat diedit" />
<Textarea value={dis2} onChange={setDis2} title="Disabled (Background)" disabled variant="background" placeholder="Tidak dapat diedit" />
```

</template>

<template #vue>

```vue
<PtTextarea v-model="dis1" title="Disabled (Border)" disabled variant="border" placeholder="Tidak dapat diedit" />
<PtTextarea v-model="dis2" title="Disabled (Background)" disabled variant="background" placeholder="Tidak dapat diedit" />
```

</template>

<template #blazor>

```razor
<PtTextarea @bind-Value="dis1" Title="Disabled (Border)" Disabled="true" Variant="TextareaVariant.Border" Placeholder="Tidak dapat diedit" />
<PtTextarea @bind-Value="dis2" Title="Disabled (Background)" Disabled="true" Variant="TextareaVariant.Background" Placeholder="Tidak dapat diedit" />
```

</template>
</ComponentDemo>

## Resize

<ComponentDemo>
  <div class="w-full max-w-md">
    <PtTextarea v-model="res1" title="Resize vertical (default)" resize="vertical" />
    <PtTextarea v-model="res2" title="No resize" resize="none" class="mt-4" />
  </div>

<template #react>

```tsx
<Textarea value={res1} onChange={setRes1} title="Resize vertical (default)" resize="vertical" />
<Textarea value={res2} onChange={setRes2} title="No resize" resize="none" />
```

</template>

<template #vue>

```vue
<PtTextarea v-model="res1" title="Resize vertical (default)" resize="vertical" />
<PtTextarea v-model="res2" title="No resize" resize="none" />
```

</template>

<template #blazor>

```razor
<PtTextarea @bind-Value="res1" Title="Resize vertical (default)" Resize="TextareaResize.Vertical" />
<PtTextarea @bind-Value="res2" Title="No resize" Resize="TextareaResize.None" />
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` / `value` | `string` | `''` | Nilai (controlled). **React:** `value` + `onChange`. **Vue:** `v-model`. **Blazor:** `@bind-Value` / `ValueChanged`. |
| `onChange` (React) / `@update:modelValue` (Vue) / `ValueChanged` (Blazor) | `(value: string) => void` | - | Callback saat nilai berubah. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Ukuran tampilan. |
| `variant` | `'border' \| 'background'` | `'border'` | Border = putih + border; background = slate-50 tanpa border. |
| `title` | `string` \| slot/ReactNode/RenderFragment | - | Label di atas. |
| `description` | `string` \| slot/ReactNode/RenderFragment | - | Teks bantuan di bawah; tidak tampil saat error. |
| `disabled` | `boolean` | `false` | Nonaktif. |
| `error` | `boolean` | `false` | State error. |
| `errorMessage` | `string` | - | Pesan error. |
| `placeholder` | `string` | - | Placeholder. |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Perilaku resize. Di Blazor: `TextareaResize.None \| Vertical \| Horizontal \| Both`. |

</template>

</PageTabs>

<script setup lang="ts">
import { ref } from 'vue';

const text1 = ref('');
const text2 = ref('');
const text3 = ref('');
const sms = ref('');
const mmd = ref('');
const llg = ref('');
const errText = ref('');
const dis1 = ref('');
const dis2 = ref('');
const res1 = ref('');
const res2 = ref('');
</script>
