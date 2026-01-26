<ComponentHero title="Input" description="Input fields let users enter and edit text with consistent styling, validation states, and interactions across all frameworks." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

The Input component consists of:

- **Container**: The input field wrapper
- **Label** (optional): Text label above the input
- **Input Field**: The actual text input element
- **Icons** (optional): Start or end icons for visual cues
- **Helper Text / Error Message** (optional): Text below the input

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Input Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Input Anatomy Diagram 2" />
  </div>
</div>

## Variants

Input supports different states and configurations:

- **Default**: Normal input state
- **Error**: Input with validation error
- **Disabled**: Non-interactive state
- **Read-only**: Display-only state

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Input Variants Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Input Variants Diagram 2" />
  </div>
</div>

## Design Consistency

| Property          | Value                       | Applied To    |
| ----------------- | --------------------------- | ------------- |
| **Border Radius** | `0.375rem` (6px)            | All states    |
| **Height**        | `40px`                      | Default size  |
| **Border**        | `1px solid #D1D5DB`         | Default state |
| **Font Size**     | `16px`                      | All sizes     |
| **Padding**       | `0.5rem 0.75rem` (8px 12px) | Default size  |
| **Focus Ring**    | `2px #00A19B`               | Focus state   |

## Layout

Input fields should be used consistently across forms and applications.

<DoDontGrid>
  <DoDontItem type="do">
    <div class="do-dont-example">
      <PtInput label="Email Address" type="email" placeholder="email@example.com" />
    </div>
    <p class="do-dont-text">• Use clear, descriptive labels above input fields.</p>
  </DoDontItem>
  <DoDontItem type="dont">
    <div class="do-dont-example">
      <PtInput placeholder="Enter your email address here" />
    </div>
    <p class="do-dont-text">• Don't use placeholder as a label replacement.</p>
  </DoDontItem>
</DoDontGrid>

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="w-full max-w-md space-y-4">
    <PtInput placeholder="Enter your name" />
    <PtInput label="Email Address" type="email" placeholder="email@example.com" />
    <PtInput :error="true" error-message="This field is required" placeholder="Invalid input" />
  </div>

<template #react>

```tsx
import { Input } from '@pacer-ui/react';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div className="w-full max-w-md space-y-4">
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your name" />
      <Input label="Email Address" type="email" placeholder="email@example.com" />
      <Input error errorMessage="This field is required" placeholder="Invalid input" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="w-full max-w-md space-y-4">
    <PtInput v-model="value" placeholder="Enter your name" />
    <PtInput label="Email Address" type="email" placeholder="email@example.com" />
    <PtInput :error="true" error-message="This field is required" placeholder="Invalid input" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="w-full max-w-md space-y-4">
    <PtInput @bind-Value="name" Placeholder="Enter your name" />
    <PtInput Label="Email Address" Type="email" Placeholder="email@example.com" />
    <PtInput Error="true" ErrorMessage="This field is required" Placeholder="Invalid input" />
</div>

@code {
    private string name = "";
}
```

  </template>
</ComponentDemo>

## Input Types

### Text Input

<ComponentDemo>
  <PtInput type="text" placeholder="Enter text" />

<template #react>

```tsx
<Input type="text" placeholder="Enter text" />
```

</template>

<template #vue>

```vue
<PtInput type="text" placeholder="Enter text" />
```

</template>

<template #blazor>

```razor
<PtInput Type="text" Placeholder="Enter text" />
```

</template>
</ComponentDemo>

### Email Input

<ComponentDemo>
  <PtInput type="email" placeholder="email@example.com" />

<template #react>

```tsx
<Input type="email" placeholder="email@example.com" />
```

</template>

<template #vue>

```vue
<PtInput type="email" placeholder="email@example.com" />
```

</template>

<template #blazor>

```razor
<PtInput Type="email" Placeholder="email@example.com" />
```

</template>
</ComponentDemo>

### Password Input

<ComponentDemo>
  <PtInput type="password" placeholder="Enter password" />

<template #react>

```tsx
<Input type="password" placeholder="Enter password" />
```

</template>

<template #vue>

```vue
<PtInput type="password" placeholder="Enter password" />
```

</template>

<template #blazor>

```razor
<PtInput Type="password" Placeholder="Enter password" />
```

</template>
</ComponentDemo>

## Sizes

<ComponentDemo>
  <div class="w-full max-w-md space-y-4">
    <PtInput size="sm" placeholder="Small input" />
    <PtInput size="md" placeholder="Medium input" />
    <PtInput size="lg" placeholder="Large input" />
  </div>

<template #react>

```tsx
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
```

</template>

<template #vue>

```vue
<PtInput size="sm" placeholder="Small input" />
<PtInput size="md" placeholder="Medium input" />
<PtInput size="lg" placeholder="Large input" />
```

</template>

<template #blazor>

```razor
<PtInput Size="InputSize.Small" Placeholder="Small input" />
<PtInput Size="InputSize.Medium" Placeholder="Medium input" />
<PtInput Size="InputSize.Large" Placeholder="Large input" />
```

</template>
</ComponentDemo>

**Size Specifications:**

| Size   | Height | Padding   | Font Size |
| ------ | ------ | --------- | --------- |
| Small  | 32px   | 8px 10px  | 14px      |
| Medium | 40px   | 10px 12px | 16px      |
| Large  | 48px   | 12px 16px | 18px      |

## Validation States

### Error State

<ComponentDemo>
  <PtInput :error="true" error-message="This field is required" placeholder="Invalid input" />

<template #react>

```tsx
<Input 
  error 
  errorMessage="This field is required" 
  placeholder="Invalid input" 
/>
```

</template>

<template #vue>

```vue
<PtInput 
  :error="true" 
  error-message="This field is required" 
  placeholder="Invalid input" 
/>
```

</template>

<template #blazor>

```razor
<PtInput
    Error="This field is required"
    Placeholder="Invalid input" />
```

</template>
</ComponentDemo>

## With Label

<ComponentDemo>
  <PtInput 
    label="Email Address"
    type="email" 
    placeholder="email@example.com" 
  />

<template #react>

```tsx
<Input 
  label="Email Address"
  type="email" 
  placeholder="email@example.com" 
/>
```

</template>

<template #vue>

```vue
<PtInput 
  label="Email Address"
  type="email"
  placeholder="email@example.com"
/>
```

</template>

<template #blazor>

```razor
<PtInput
    Label="Email Address"
    Type="email"
    Placeholder="email@example.com" />
```

</template>
</ComponentDemo>

## Disabled State

<ComponentDemo>
  <PtInput disabled placeholder="Disabled input" />

<template #react>

```tsx
<Input disabled placeholder="Disabled input" />
```

</template>

<template #vue>

```vue
<PtInput disabled placeholder="Disabled input" />
```

</template>

<template #blazor>

```razor
<PtInput Disabled="true" Placeholder="Disabled input" />
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop          | Type                                                               | Default     | Description                    |
| ------------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `label`       | `string`                                                           | `undefined` | Label text above input         |
| `error`       | `boolean`                                                          | `false`     | State error                    |
| `errorMessage` | `string`                                                          | `undefined` | Pesan error (ditampilkan saat error true) |
| `helperText`  | `string`                                                           | `undefined` | Helper text below input        |
| `startIcon`   | `React.ReactNode` (React) / `VNode \| Component` (Vue) / `RenderFragment` (Blazor) | `undefined` | Icon before input              |
| `endIcon`     | `React.ReactNode` (React) / `VNode \| Component` (Vue) / `RenderFragment` (Blazor) | `undefined` | Icon after input               |
| `fullWidth`   | `boolean`                                                          | `false`     | Full width input               |
| `type`        | `string`                                                           | `'text'`    | Input type (text, email, password, number, search, etc.) |
| `value`       | `string`                                                           | -           | Input value                    |
| `placeholder` | `string`                                                           | -           | Placeholder text               |
| `id`          | `string`                                                           | -           | Input ID (auto-generated if not provided) |
| `disabled`    | `boolean`                                                          | `false`     | Disable input                  |
| `readOnly`    | `boolean`                                                          | `false`     | Read-only state                |
| `size`        | `'sm' \| 'md' \| 'lg'`                                             | `'md'`      | Input size                     |

## Accessibility

- ✅ Keyboard accessible (Tab, Shift+Tab)
- ✅ Label association with `id` and `for` attributes
- ✅ Error messages announced to screen readers
- ✅ Placeholder text doesn't replace labels
- ✅ Focus indicators visible
- ✅ Disabled state properly communicated

### ARIA Attributes

All implementations include:

- `aria-invalid="true"` for error state
- `aria-describedby` for helper text
- `aria-required="true"` for required fields
- `aria-disabled="true"` for disabled state

## Best Practices

### ✅ Do

- Use clear, descriptive labels
- Provide helpful error messages
- Use appropriate input types
- Show validation feedback inline
- Use placeholder as hints, not labels

### ❌ Don't

- Don't use placeholder as a label replacement
- Don't make inputs too narrow
- Don't use vague error messages
- Don't validate on every keystroke for long inputs
- Don't hide important information in placeholders

</template>

</PageTabs>