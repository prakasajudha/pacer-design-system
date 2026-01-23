<ComponentHero title="Radio" description="Radio digunakan untuk memilih satu opsi dari beberapa pilihan dalam sebuah grup. Styling sama seperti Checkbox, tapi berbentuk lingkaran dengan dot di tengah saat terpilih." />

<script setup lang="ts">
import { ref } from 'vue';
const selectedValue = ref('option1');
const v1 = ref('option1');
const v2 = ref(null);
const v3 = ref('option1');
const v4 = ref('option1');
const v5 = ref(null);
</script>

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

Radio component terdiri dari:

- **Radio Circle**: Lingkaran dengan border yang dapat di-select
- **Label**: Teks label di sebelah radio
- **Description** (optional): Teks deskripsi di bawah label
- **Dot**: Dot di tengah saat radio terpilih

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Radio Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Radio Anatomy Diagram 2" />
  </div>
</div>

## States

Radio supports different states:

- **Unselected**: Default state, radio kosong
- **Selected**: Radio terpilih dengan dot di tengah
- **Disabled**: Non-interactive state
- **Error**: Error state dengan border merah

## Grouping

Radio buttons harus digunakan dalam grup dengan `name` yang sama untuk memastikan hanya satu yang bisa terpilih.

</template>

<template #Implementation>

## Visual Preview

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

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | `(required)` | Nilai yang akan di-submit jika radio ini terpilih |
| `disabled` | `boolean` | `false` | Disable radio |
| `name` | `string` | `undefined` | Untuk HTML form submit dan grouping |
| `id` | `string` | `undefined` | Untuk a11y |
| `label` | `string` | `''` | Label text |
| `description` | `string` | `''` | Description text |
| `position` | `'left' \| 'right'` | `'left'` | Position radio relative to label |
| `outlined` | `boolean` | `false` | Outlined variant |
| `error` | `boolean` | `false` | Error state |

### Model

- **`v-model`** (Vue) / **`checked`** (React) / **`SelectedValue`** (Blazor): string | number
  - Nilai yang terpilih dari radio group (dibandingkan dengan `value` prop)
  - Jika `modelValue === value`, maka radio tersebut terpilih

## Notes

- Radio button harus digunakan dalam grup (semua radio dalam grup yang sama punya `name` yang sama)
- Hanya satu radio yang bisa terpilih dalam satu grup
- `value` prop wajib diisi untuk menentukan nilai yang akan di-submit
- `modelValue` / `checked` / `SelectedValue` adalah nilai yang terpilih dari grup (dibandingkan dengan `value`)

</template>

</PageTabs>