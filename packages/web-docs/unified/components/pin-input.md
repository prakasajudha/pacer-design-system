<ComponentHero title="Pin Input" description="Pin Input dipakai untuk memasukkan kode OTP atau PIN dengan kotak per digit. Saat mask aktif, digit yang baru diketik terlihat 0,5 detik lalu otomatis di-mask (•). Tombol show/hide tidak ditampilkan di UI; opsi mask/alignment tetap di API. Mendukung title, description, dan state error." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Pin Input component terdiri dari:

- **Title** (opsional): Label di atas deretan kotak
- **Kotak digit**: Satu input per digit, jumlah mengikuti `length` (default 4). Jika `mask=true`, digit terlihat 0,5 detik setelah ketik lalu di-mask (•); tombol show/hide tidak ditampilkan di UI
- **Description label**: Teks bantuan di bawah; tetap ditampilkan saat ada error
- **Error message label** (jika `error` dan `errorMessage` ada): Pesan error di bawah description label

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Pin Input Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Pin Input Anatomy Diagram 2" />
  </div>
</div>

## Alignment

Pin Input supports 3 alignments:

- `left` (default): Deretan kotak rata kiri
- `center`: Deretan kotak rata tengah
- `right`: Deretan kotak rata kanan

Alignment ini tidak hanya memengaruhi deretan kotak, tetapi juga **title**, **description**, dan **error message label** sehingga seluruh blok Pin Input terasa konsisten secara visual.

## Mask

Saat `mask=true`, digit yang baru diketik terlihat 0,5 detik lalu otomatis di-mask (•). Logika mask/unmask tetap di API; tombol show/hide tidak ditampilkan di UI.

## Sizes

Pin Input supports 3 sizes:

- `sm`: Kotak kecil (w-9 h-9), teks `text-sm`
- `md` (default): Kotak sedang (w-10 h-10), teks `text-base`
- `lg`: Kotak besar (w-12 h-12), teks `text-lg`

</template>

<template #Implementation>

## Visual Preview

### Default

<ComponentDemo>
  <div class="w-full max-w-md space-y-6">
    <PtPinInput v-model="pin1" title="Kode OTP" description="Masukkan 4 digit dari email/SMS." />
    <PtPinInput v-model="pin2" :mask="false" title="PIN tanpa mask" />
    <PtPinInput v-model="pin3" align="center" title="Align center" />
  </div>

<template #react>

```tsx
import { PinInput } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  return (
    <div className="w-full max-w-md space-y-6">
      <PinInput value={pin1} onChange={setPin1} title="Kode OTP" description="Masukkan 4 digit dari email/SMS." />
      <PinInput value={pin2} onChange={setPin2} mask={false} title="PIN tanpa mask" />
      <PinInput value={pin3} onChange={setPin3} align="center" title="Align center" />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { PtPinInput } from '@pacer-ui/vue';

const pin1 = ref('');
const pin2 = ref('');
const pin3 = ref('');
</script>

<template>
  <div class="w-full max-w-md space-y-6">
    <PtPinInput v-model="pin1" title="Kode OTP" description="Masukkan 4 digit dari email/SMS." />
    <PtPinInput v-model="pin2" :mask="false" title="PIN tanpa mask" />
    <PtPinInput v-model="pin3" align="center" title="Align center" />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="w-full max-w-md space-y-6">
    <PtPinInput @bind-Value="pin1" Title="Kode OTP" Description="Masukkan 4 digit dari email/SMS." />
    <PtPinInput @bind-Value="pin2" Mask="false" Title="PIN tanpa mask" />
    <PtPinInput @bind-Value="pin3" Align="PinInputAlign.Center" Title="Align center" />
</div>

@code {
    private string pin1 = "";
    private string pin2 = "";
    private string pin3 = "";
}
```

</template>
</ComponentDemo>

## All Sizes

<ComponentDemo>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <PtPinInput v-model="sms" size="sm" title="Size sm" />
    <PtPinInput v-model="mmd" size="md" title="Size md" />
    <PtPinInput v-model="llg" size="lg" title="Size lg" />
  </div>

<template #react>

```tsx
<PinInput value={sms} onChange={setSms} size="sm" title="Size sm" />
<PinInput value={mmd} onChange={setMmd} size="md" title="Size md" />
<PinInput value={llg} onChange={setLlg} size="lg" title="Size lg" />
```

</template>

<template #vue>

```vue
<PtPinInput v-model="sms" size="sm" title="Size sm" />
<PtPinInput v-model="mmd" size="md" title="Size md" />
<PtPinInput v-model="llg" size="lg" title="Size lg" />
```

</template>

<template #blazor>

```razor
<PtPinInput @bind-Value="sms" Size="PinInputSize.Small" Title="Size sm" />
<PtPinInput @bind-Value="mmd" Size="PinInputSize.Medium" Title="Size md" />
<PtPinInput @bind-Value="llg" Size="PinInputSize.Large" Title="Size lg" />
```

</template>
</ComponentDemo>

## Error state

Saat `error` dan `errorMessage` diisi, **description label** tetap ditampilkan di atas; **error message label** ditampilkan di bawah description label.

<ComponentDemo>
  <div class="w-full max-w-md">
    <PtPinInput
      v-model="errPin"
      title="Kode verifikasi"
      description="Masukkan 4 digit kode yang dikirim ke email Anda."
      error
      error-message="Kode tidak valid atau sudah kedaluwarsa."
    />
  </div>

<template #react>

```tsx
<PinInput
  value={errPin}
  onChange={setErrPin}
  title="Kode verifikasi"
  description="Masukkan 4 digit kode yang dikirim ke email Anda."
  error
  errorMessage="Kode tidak valid atau sudah kedaluwarsa."
/>
```

</template>

<template #vue>

```vue
<PtPinInput
  v-model="errPin"
  title="Kode verifikasi"
  description="Masukkan 4 digit kode yang dikirim ke email Anda."
  :error="true"
  error-message="Kode tidak valid atau sudah kedaluwarsa."
/>
```

</template>

<template #blazor>

```razor
<PtPinInput
    @bind-Value="errPin"
    Title="Kode verifikasi"
    Description="Masukkan 4 digit kode yang dikirim ke email Anda."
    Error="true"
    ErrorMessage="Kode tidak valid atau sudah kedaluwarsa."
/>
```

</template>
</ComponentDemo>

## Disabled

<ComponentDemo>
  <div class="w-full max-w-md">
    <PtPinInput v-model="disPin" title="Disabled" disabled />
  </div>

<template #react>

```tsx
<PinInput value={disPin} onChange={setDisPin} title="Disabled" disabled />
```

</template>

<template #vue>

```vue
<PtPinInput v-model="disPin" title="Disabled" disabled />
```

</template>

<template #blazor>

```razor
<PtPinInput @bind-Value="disPin" Title="Disabled" Disabled="true" />
```

</template>
</ComponentDemo>

## Cara pakai (value & onChange)

Pin Input bersifat **controlled**: nilai disimpan di state, dan setiap perubahan dilaporkan lewat callback. Berikut cara pakai per framework.

### React

Gunakan `value` dan `onChange`. `onChange(newValue: string)` dipanggil setiap nilai pin berubah (ketik, paste, backspace).

```tsx
import { useState } from 'react';
import { PinInput } from '@pacer-ui/react';

function MyForm() {
  const [pin, setPin] = useState('');

  const handleChange = (newValue: string) => {
    setPin(newValue);
    if (newValue.length === 4) {
      // OTP lengkap, bisa kirim ke backend
      console.log('OTP submitted:', newValue);
    }
  };

  return (
    <PinInput
      value={pin}
      onChange={handleChange}
      title="Kode OTP"
      description="Masukkan 4 digit dari email/SMS."
    />
  );
}
```

Atau singkat: `<PinInput value={pin} onChange={setPin} />`.

### Vue

Gunakan **v-model** (sama dengan `:modelValue` + `@update:modelValue`). Setiap perubahan nilai memicu `@update:modelValue`.

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';
import { PtPinInput } from '@pacer-ui/vue';

const pin = ref('');

// Reaksi saat nilai berubah
watch(pin, (newVal) => {
  if (newVal.length === 4) {
    console.log('OTP submitted:', newVal);
  }
});
</script>

<template>
  <PtPinInput
    v-model="pin"
    title="Kode OTP"
    description="Masukkan 4 digit dari email/SMS."
  />
</template>
```

Tanpa watch: `<PtPinInput v-model="pin" title="Kode OTP" />` — nilai tetap tersimpan di `pin`.

### Blazor

Gunakan **@bind-Value** atau `Value` + `ValueChanged`. Callback menerima `string` nilai terbaru.

```razor
@using Pertamina.DesignSystem.Blazor

<PtPinInput @bind-Value="pin" Title="Kode OTP" Description="Masukkan 4 digit dari email/SMS." />

@code {
    private string pin = "";

    // Bila pakai Value + ValueChanged untuk logika tambahan:
    // <PtPinInput Value="@pin" ValueChanged="OnPinChanged" ... />
    // private void OnPinChanged(string newValue) {
    //     pin = newValue;
    //     if (pin.Length == 4) { /* submit */ }
    // }
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` / `value` | `string` | `''` | Nilai pin berbasis posisi: string selalu sepanjang `length`; sel kosong = spasi (mis. `"1 35"` = kotak 2 kosong). Saat kotak di-backspace, hanya sel itu yang dikosongkan, tidak menggeser digit lain. **React:** `onChange`. **Vue:** `v-model`. **Blazor:** `@bind-Value` / `ValueChanged`. |
| `onChange` (React) / `@update:modelValue` (Vue) / `ValueChanged` (Blazor) | `(value: string) => void` | - | Callback saat nilai berubah. Lihat [Cara pakai (value & onChange)](#cara-pakai-value--onchange) di atas. |
| `length` | `number` | `4` | Jumlah kotak digit |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Ukuran kotak |
| `mask` | `boolean` | `true` | Digit terlihat 0,5 detik lalu di-mask (•). Logika mask/unmask di API; tombol tidak ditampilkan. |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Alignment deretan kotak: kiri, tengah, atau kanan |
| `title` | `string` | - | Label di atas |
| `description` | `string` | - | Label teks bantuan di bawah (tetap tampil saat error) |
| `disabled` | `boolean` | `false` | Nonaktif |
| `error` | `boolean` | `false` | State error |
| `errorMessage` | `string` | - | Label pesan error |

Di Blazor: gunakan `Value` + `ValueChanged` (atau `@bind-Value`), `Size="PinInputSize.Medium"`, `Align="PinInputAlign.Left"` / `PinInputAlign.Center` / `PinInputAlign.Right`.

## Design Specifications

### Size Dimensions

| Size | Box (Width × Height) | Text |
|------|----------------------|------|
| `sm` | 36px × 36px (w-9 h-9) | text-sm |
| `md` | 40px × 40px (w-10 h-10) | text-base |
| `lg` | 48px × 48px (w-12 h-12) | text-lg |

### Border & Spacing

- **Border**: border default per token (outline saat focus)
- **Gap antar kotak**: sesuai spacing token (gap-2 untuk sm, gap-2 / gap-3 untuk md/lg)

### Colors

- **Normal**: Border dan teks mengikuti token input default
- **Error**: Border dan teks mengikuti state error (mis. red-500 / red-600)
- **Disabled**: Background dan teks mengikuti state disabled

</template>

</PageTabs>

<script setup lang="ts">
import { ref } from 'vue';

const pin1 = ref('');
const pin2 = ref('');
const pin3 = ref('');
const sms = ref('');
const mmd = ref('');
const llg = ref('');
const errPin = ref('');
const disPin = ref('1234');
</script>
