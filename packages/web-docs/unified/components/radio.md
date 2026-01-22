# Radio Component

Radio digunakan untuk memilih satu opsi dari beberapa pilihan dalam sebuah grup. Styling sama seperti Checkbox, tapi berbentuk lingkaran dengan dot di tengah saat terpilih.

<script setup lang="ts">
import { ref } from 'vue';
const selectedValue = ref('option1');
const v1 = ref('option1');
const v2 = ref(null);
const v3 = ref('option1');
const v4 = ref('option1');
const v5 = ref(null);
</script>

## Props

- **`value`**: string | number (required) — nilai yang akan di-submit jika radio ini terpilih
- **`disabled`**: boolean (default: `false`)
- **`name`**: string (optional) — untuk HTML form submit dan grouping (semua radio dalam grup yang sama punya `name` yang sama)
- **`id`**: string (optional) — untuk a11y (`aria-labelledby` / `aria-describedby`)
- **`label`**: string (default: empty)
- **`description`**: string (default: empty)
- **`position`**: `left | right` (default: `left`)
- **`outlined`**: boolean (default: `false`)
- **`error`**: boolean (default: `false`)  
  Jika `true`: title merah; radio menampilkan border merah (outline merah jika `outlined`).

## Model

- **`v-model`** (Vue) / **`checked`** (React) / **`SelectedValue`** (Blazor): string | number
  - Nilai yang terpilih dari radio group (dibandingkan dengan `value` prop)
  - Jika `modelValue === value`, maka radio tersebut terpilih

## Preview

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio
      id="radio-option1"
      name="radio-group"
      v-model="selectedValue"
      value="option1"
      label="Option 1"
      description="This is the first option."
    />
    <PtRadio
      id="radio-option2"
      name="radio-group"
      v-model="selectedValue"
      value="option2"
      label="Option 2"
      description="This is the second option."
    />
  </div>

<template #react>

```tsx
import { Radio } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | number>('option1');
  return (
    <div style={{ width: 428 }}>
      <Radio
        id="radio-option1"
        name="radio-group"
        checked={selectedValue === 'option1'}
        value="option1"
        onCheckedChange={setSelectedValue}
        label="Option 1"
        description="This is the first option."
      />
      <Radio
        id="radio-option2"
        name="radio-group"
        checked={selectedValue === 'option2'}
        value="option2"
        onCheckedChange={setSelectedValue}
        label="Option 2"
        description="This is the second option."
      />
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtRadio } from '@pacer-ui/vue';
import { ref } from 'vue';

const selectedValue = ref('option1');
</script>

<template>
  <div class="w-[428px] space-y-2">
    <PtRadio
      id="radio-option1"
      name="radio-group"
      v-model="selectedValue"
      value="option1"
      label="Option 1"
      description="This is the first option."
    />
    <PtRadio
      id="radio-option2"
      name="radio-group"
      v-model="selectedValue"
      value="option2"
      label="Option 2"
      description="This is the second option."
    />
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

@* Binding *@
<PtRadio 
  Id="radio-option1" 
  Name="radio-group" 
  @bind-SelectedValue="selectedValue" 
  Value="@("option1")"
  Label="Option 1" 
  Description="This is the first option." />

<PtRadio 
  Id="radio-option2" 
  Name="radio-group" 
  @bind-SelectedValue="selectedValue" 
  Value="@("option2")"
  Label="Option 2" 
  Description="This is the second option." />
```

</template>

</ComponentDemo>

## States

### Default

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio v-model="v1" value="option1" name="group1" label="Option 1" />
    <PtRadio v-model="v1" value="option2" name="group1" label="Option 2" />
    <PtRadio v-model="v1" value="option3" name="group1" label="Option 3" />
  </div>

<template #react>

```tsx
const [selectedValue, setSelectedValue] = useState('option1');
<Radio checked={selectedValue === 'option1'} value="option1" name="group1" label="Option 1" onCheckedChange={setSelectedValue} />
<Radio checked={selectedValue === 'option2'} value="option2" name="group1" label="Option 2" onCheckedChange={setSelectedValue} />
<Radio checked={selectedValue === 'option3'} value="option3" name="group1" label="Option 3" onCheckedChange={setSelectedValue} />
```

</template>

<template #vue>

```vue
<PtRadio v-model="selectedValue" value="option1" name="group1" label="Option 1" />
<PtRadio v-model="selectedValue" value="option2" name="group1" label="Option 2" />
<PtRadio v-model="selectedValue" value="option3" name="group1" label="Option 3" />
```

</template>

<template #blazor>

```razor
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option1")" Name="group1" Label="Option 1" />
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option2")" Name="group1" Label="Option 2" />
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option3")" Name="group1" Label="Option 3" />
```

</template>

</ComponentDemo>

### With Description

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio v-model="v3" value="option1" name="group2" label="Option 1" description="This is the first option with a description." />
    <PtRadio v-model="v3" value="option2" name="group2" label="Option 2" description="This is the second option with a description." />
  </div>

<template #react>

```tsx
<Radio checked={selectedValue === 'option1'} value="option1" name="group2" label="Option 1" description="This is the first option with a description." onCheckedChange={setSelectedValue} />
<Radio checked={selectedValue === 'option2'} value="option2" name="group2" label="Option 2" description="This is the second option with a description." onCheckedChange={setSelectedValue} />
```

</template>

<template #vue>

```vue
<PtRadio v-model="selectedValue" value="option1" name="group2" label="Option 1" description="This is the first option with a description." />
<PtRadio v-model="selectedValue" value="option2" name="group2" label="Option 2" description="This is the second option with a description." />
```

</template>

<template #blazor>

```razor
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option1")" Name="group2" Label="Option 1" Description="This is the first option with a description." />
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option2")" Name="group2" Label="Option 2" Description="This is the second option with a description." />
```

</template>

</ComponentDemo>

### Outlined

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio v-model="v4" value="option1" name="group3" label="Option 1" description="This is the first option with a description." outlined />
    <PtRadio v-model="v4" value="option2" name="group3" label="Option 2" description="This is the second option with a description." outlined />
  </div>

<template #react>

```tsx
<Radio checked={selectedValue === 'option1'} value="option1" name="group3" label="Option 1" description="This is the first option with a description." outlined onCheckedChange={setSelectedValue} />
<Radio checked={selectedValue === 'option2'} value="option2" name="group3" label="Option 2" description="This is the second option with a description." outlined onCheckedChange={setSelectedValue} />
```

</template>

<template #vue>

```vue
<PtRadio v-model="selectedValue" value="option1" name="group3" label="Option 1" description="This is the first option with a description." outlined />
<PtRadio v-model="selectedValue" value="option2" name="group3" label="Option 2" description="This is the second option with a description." outlined />
```

</template>

<template #blazor>

```razor
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option1")" Name="group3" Label="Option 1" Description="This is the first option with a description." Outlined="true" />
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option2")" Name="group3" Label="Option 2" Description="This is the second option with a description." Outlined="true" />
```

</template>

</ComponentDemo>

### Error

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio v-model="v5" value="option1" name="group4" label="Option 1" description="Please select an option." error />
    <PtRadio v-model="v5" value="option2" name="group4" label="Option 2" description="Please select an option." error />
  </div>

<template #react>

```tsx
<Radio checked={selectedValue === 'option1'} value="option1" name="group4" label="Option 1" description="Please select an option." error onCheckedChange={setSelectedValue} />
<Radio checked={selectedValue === 'option2'} value="option2" name="group4" label="Option 2" description="Please select an option." error onCheckedChange={setSelectedValue} />
```

</template>

<template #vue>

```vue
<PtRadio v-model="selectedValue" value="option1" name="group4" label="Option 1" description="Please select an option." error />
<PtRadio v-model="selectedValue" value="option2" name="group4" label="Option 2" description="Please select an option." error />
```

</template>

<template #blazor>

```razor
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option1")" Name="group4" Label="Option 1" Description="Please select an option." Error="true" />
<PtRadio @bind-SelectedValue="selectedValue" Value="@("option2")" Name="group4" Label="Option 2" Description="Please select an option." Error="true" />
```

</template>

</ComponentDemo>

### Disabled

<ComponentDemo>
  <div class="w-[428px] space-y-2">
    <PtRadio checked={false} disabled label="Unchecked disabled" value="option1" name="group5" />
    <PtRadio checked={true} disabled label="Checked disabled" value="option2" name="group5" />
  </div>

<template #react>

```tsx
<Radio checked={false} disabled label="Unchecked disabled" value="option1" name="group5" />
<Radio checked={true} disabled label="Checked disabled" value="option2" name="group5" />
```

</template>

<template #vue>

```vue
<PtRadio :model-value="false" disabled label="Unchecked disabled" value="option1" name="group5" />
<PtRadio :model-value="true" disabled label="Checked disabled" value="option2" name="group5" />
```

</template>

<template #blazor>

```razor
<PtRadio SelectedValue="@(null)" Disabled="true" Label="Unchecked disabled" Value="@("option1")" Name="group5" />
<PtRadio SelectedValue="@("option2")" Disabled="true" Label="Checked disabled" Value="@("option2")" Name="group5" />
```

</template>

</ComponentDemo>

## Notes

- Radio button harus digunakan dalam grup (semua radio dalam grup yang sama punya `name` yang sama)
- Hanya satu radio yang bisa terpilih dalam satu grup
- `value` prop wajib diisi untuk menentukan nilai yang akan di-submit
- `modelValue` / `checked` / `SelectedValue` adalah nilai yang terpilih dari grup (dibandingkan dengan `value`)
