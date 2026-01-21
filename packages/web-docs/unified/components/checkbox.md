# Checkbox Component

Checkbox digunakan untuk memilih satu atau lebih opsi dengan label dan optional description. Mendukung state checked, unchecked, dan indeterminate (intermediate).

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(true);
const indeterminate = ref(false);
const v1 = ref(true);
const v2 = ref(false);
const v3 = ref(true);
const v4 = ref(true);
const v5 = ref(false);
</script>

## Props

- **`disabled`**: boolean (default: `false`)
- **`name`**: string (optional) — untuk HTML form submit (akan submit `true/false` lewat hidden input)
- **`id`**: string (optional) — untuk a11y (`aria-labelledby` / `aria-describedby`)
- **`label`**: string (default: empty)
- **`description`**: string (default: empty)
- **`position`**: `left | right` (default: `left`)
- **`outlined`**: boolean (default: `false`)
- **`error`**: boolean (default: `false`)  
  Jika `true`: title merah; checkbox menampilkan border merah (outline merah jika `outlined`).
- **`indeterminate`**: boolean (default: `false`)  
  Menampilkan minus icon sebagai ganti checkmark (intermediate state). Saat user klik indeterminate, akan menjadi unchecked.

## Model

- **`v-model`** (Vue) / **`checked`** (React) / **`Value`** (Blazor): boolean
  - `true` = checked
  - `false` = unchecked
  - Indeterminate di-handle via prop `indeterminate` terpisah

## Preview

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      id="accept-terms-checkbox"
      name="acceptTerms"
      v-model="checked"
      :indeterminate="indeterminate"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  </div>

<template #react>

```tsx
import { Checkbox } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(false);
  return (
    <div style={{ width: 428 }}>
      <Checkbox
        id="accept-terms-checkbox"
        name="acceptTerms"
        checked={checked}
        indeterminate={indeterminate}
        onCheckedChange={(value) => {
          setChecked(value);
          if (value === false) {
            setIndeterminate(false);
          }
        }}
        label="Accept terms and conditions"
        description="You agree to our Terms of Service and Privacy Policy."
      />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCheckbox } from '@pacer-ui/vue';
import { ref } from 'vue';

const checked = ref(true);
const indeterminate = ref(false);
</script>

<template>
  <div class="w-[428px]">
    <PtCheckbox
      id="accept-terms-checkbox"
      name="acceptTerms"
      v-model="checked"
      :indeterminate="indeterminate"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

@* Binding *@
<PtCheckbox 
  Id="accept-terms-checkbox" 
  Name="acceptTerms" 
  @bind-Value="checked" 
  Indeterminate="indeterminate"
  Label="Accept terms and conditions" 
  Description="You agree to our Terms of Service and Privacy Policy." />
```

</template>

</ComponentDemo>

## States

### Default

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox v-model="v1" label="Accept terms and conditions" />
  </div>

<template #react>

```tsx
<Checkbox checked={checked} onCheckedChange={setChecked} label="Accept terms and conditions" />
```

</template>

<template #vue>

```vue
<PtCheckbox v-model="checked" label="Accept terms and conditions" />
```

</template>

<template #blazor>

```razor
<PtCheckbox @bind-Value="checked" Label="Accept terms and conditions" />
```

</template>

</ComponentDemo>

### With Description

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      v-model="v2"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  </div>

<template #react>

```tsx
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
/>
```

</template>

<template #vue>

```vue
<PtCheckbox
  v-model="checked"
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
/>
```

</template>

<template #blazor>

```razor
<PtCheckbox
  @bind-Value="checked"
  Label="Accept terms and conditions"
  Description="You agree to our Terms of Service and Privacy Policy."
/>
```

</template>

</ComponentDemo>

### Outlined

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      v-model="v3"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
      outlined
    />
  </div>

<template #react>

```tsx
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
  outlined
/>
```

</template>

<template #vue>

```vue
<PtCheckbox
  v-model="checked"
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
  outlined
/>
```

</template>

<template #blazor>

```razor
<PtCheckbox
  @bind-Value="checked"
  Label="Accept terms and conditions"
  Description="You agree to our Terms of Service and Privacy Policy."
  Outlined="true"
/>
```

</template>

</ComponentDemo>

### Right Position

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      v-model="v4"
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
      position="right"
    />
  </div>

<template #react>

```tsx
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
  position="right"
/>
```

</template>

<template #vue>

```vue
<PtCheckbox
  v-model="checked"
  label="Accept terms and conditions"
  description="You agree to our Terms of Service and Privacy Policy."
  position="right"
/>
```

</template>

<template #blazor>

```razor
<PtCheckbox
  @bind-Value="checked"
  Label="Accept terms and conditions"
  Description="You agree to our Terms of Service and Privacy Policy."
  Position="CheckboxPosition.Right"
/>
```

</template>

</ComponentDemo>

### Error

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      v-model="v5"
      label="Accept terms and conditions"
      description="You must accept the terms to continue."
      error
    />
  </div>

<template #react>

```tsx
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
  description="You must accept the terms to continue."
  error
/>
```

</template>

<template #vue>

```vue
<PtCheckbox
  v-model="checked"
  label="Accept terms and conditions"
  description="You must accept the terms to continue."
  error
/>
```

</template>

<template #blazor>

```razor
<PtCheckbox
  @bind-Value="checked"
  Label="Accept terms and conditions"
  Description="You must accept the terms to continue."
  Error="true"
/>
```

</template>

</ComponentDemo>

### Intermediate (Indeterminate)

<ComponentDemo>
  <div class="w-[428px]">
    <PtCheckbox
      v-model="v3"
      :indeterminate="true"
      label="Select all items"
      description="Select or deselect all items in the list."
    />
  </div>

<template #react>

```tsx
const [checked, setChecked] = useState(true);
const [indeterminate, setIndeterminate] = useState(true);

<Checkbox
  checked={checked}
  indeterminate={indeterminate}
  onCheckedChange={(value) => {
    setChecked(value);
    if (value === false) {
      setIndeterminate(false);
    }
  }}
  label="Select all items"
  description="Select or deselect all items in the list."
/>
```

</template>

<template #vue>

```vue
<script setup lang="ts">
const checked = ref(true);
const indeterminate = ref(true);
</script>

<template>
  <PtCheckbox
    v-model="checked"
    :indeterminate="indeterminate"
    label="Select all items"
    description="Select or deselect all items in the list."
  />
</template>
```

</template>

<template #blazor>

```razor
<PtCheckbox
  @bind-Value="checked"
  Indeterminate="true"
  Label="Select all items"
  Description="Select or deselect all items in the list."
/>
```

</template>

</ComponentDemo>

### Disabled

<ComponentDemo>
  <div class="w-[428px] space-y-4">
    <PtCheckbox checked={false} disabled label="Unchecked disabled" />
    <PtCheckbox checked={true} disabled label="Checked disabled" />
    <PtCheckbox checked={true} :indeterminate="true" disabled label="Intermediate disabled" />
  </div>

<template #react>

```tsx
<Checkbox checked={false} disabled label="Unchecked disabled" />
<Checkbox checked={true} disabled label="Checked disabled" />
<Checkbox checked={true} indeterminate={true} disabled label="Intermediate disabled" />
```

</template>

<template #vue>

```vue
<PtCheckbox :model-value="false" disabled label="Unchecked disabled" />
<PtCheckbox :model-value="true" disabled label="Checked disabled" />
<PtCheckbox :model-value="true" :indeterminate="true" disabled label="Intermediate disabled" />
```

</template>

<template #blazor>

```razor
<PtCheckbox Value="false" Disabled="true" Label="Unchecked disabled" />
<PtCheckbox Value="true" Disabled="true" Label="Checked disabled" />
<PtCheckbox Value="true" Indeterminate="true" Disabled="true" Label="Intermediate disabled" />
```

</template>

</ComponentDemo>

## Form Integration

Checkbox mendukung HTML form submission melalui hidden input:

```vue
<form @submit.prevent="handleSubmit">
  <PtCheckbox name="acceptTerms" v-model="checked" label="Accept terms" />
  <button type="submit">Submit</button>
</form>
```

Form akan submit `acceptTerms` dengan value `"true"` atau `"false"` (string).

## Accessibility

- **ARIA attributes**: `aria-checked`, `aria-disabled`, `aria-invalid`, `aria-labelledby`, `aria-describedby`
- **Keyboard navigation**: `Space` dan `Enter` untuk toggle
- **Focus ring**: Custom focus ring dengan 2px white + 4px brand-300
- **Role**: `role="checkbox"` pada button

## Behavior

- **Toggle cycle**: `false` → `true` → `false`
- **Indeterminate behavior**: Saat user klik checkbox yang sedang indeterminate, akan menjadi `false` (unchecked)
- **Focus state**: Auto dari focus event, menampilkan focus ring
- **Label/Description clickable**: Klik label atau description akan toggle checkbox
