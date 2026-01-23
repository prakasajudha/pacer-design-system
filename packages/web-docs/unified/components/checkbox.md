<ComponentHero title="Checkbox" description="Checkbox digunakan untuk memilih satu atau lebih opsi dengan label dan optional description. Mendukung state checked, unchecked, dan indeterminate (intermediate)." />

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

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Checkbox component terdiri dari:

- **Checkbox Box**: Kotak persegi dengan border yang dapat di-check
- **Label**: Teks label di sebelah checkbox
- **Description** (optional): Teks deskripsi di bawah label
- **Checkmark/Indeterminate Icon**: Icon yang muncul saat checked atau indeterminate

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Checkbox Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Checkbox Anatomy Diagram 2" />
  </div>
</div>

## States

Checkbox supports three states:

- **Unchecked**: Default state, checkbox kosong
- **Checked**: Checkbox tercentang dengan checkmark
- **Indeterminate**: Intermediate state dengan minus icon

## Variants

Checkbox supports different visual variants:

- **Default**: Standard checkbox styling
- **Outlined**: Checkbox dengan outline container
- **Error**: Checkbox dengan error styling (border merah)

</template>

<template #Implementation>

## Visual Preview

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

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable checkbox |
| `name` | `string` | `undefined` | Untuk HTML form submit |
| `id` | `string` | `undefined` | Untuk a11y |
| `label` | `string` | `''` | Label text |
| `description` | `string` | `''` | Description text |
| `position` | `'left' \| 'right'` | `'left'` | Position checkbox relative to label |
| `outlined` | `boolean` | `false` | Outlined variant |
| `error` | `boolean` | `false` | Error state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |

### Model

- **`v-model`** (Vue) / **`checked`** (React) / **`Value`** (Blazor): boolean
  - `true` = checked
  - `false` = unchecked
  - Indeterminate di-handle via prop `indeterminate` terpisah

## Accessibility

- **ARIA attributes**: `aria-checked`, `aria-disabled`, `aria-invalid`, `aria-labelledby`, `aria-describedby`
- **Keyboard navigation**: `Space` dan `Enter` untuk toggle
- **Focus ring**: Custom focus ring dengan 2px white + 4px brand-300
- **Role**: `role="checkbox"` pada button

</template>

</PageTabs>