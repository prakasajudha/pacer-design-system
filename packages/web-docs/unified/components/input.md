# Input

Input fields let users enter and edit text.

## Overview

The Input component provides consistent text input across all frameworks with identical styling, validation states, and interactions.

## Design Consistency

| Property          | Value                       | Applied To    |
| ----------------- | --------------------------- | ------------- |
| **Border Radius** | `0.375rem` (6px)            | All states    |
| **Height**        | `40px`                      | Default size  |
| **Border**        | `1px solid #D1D5DB`         | Default state |
| **Font Size**     | `16px`                      | All sizes     |
| **Padding**       | `0.5rem 0.75rem` (8px 12px) | Default size  |
| **Focus Ring**    | `2px #00A19B`               | Focus state   |

---

## Installation & Import

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';
```

```vue [Vue]
import { PtInput } from '@pacer-ui/vue';
```

```razor [Blazor]
@using Pertamina.DesignSystem.Blazor

<PtInput Placeholder="Enter text" />
```

:::

---

## Basic Usage

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your name" />
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <PtInput v-model="value" placeholder="Enter your name" />
</template>
```

```razor [Blazor]
<PtInput
    @bind-Value="name"
    Placeholder="Enter your name" />

@code {
    private string name = "";
}
```

:::

---

## Input Types

### Text Input

::: code-group

```tsx [React]
<Input type="text" placeholder="Enter text" />
```

```vue [Vue]
<PtInput type="text" placeholder="Enter text" />
```

```razor [Blazor]
<PtInput Type="text" Placeholder="Enter text" />
```

:::

### Email Input

::: code-group

```tsx [React]
<Input type="email" placeholder="email@example.com" />
```

```vue [Vue]
<PtInput type="email" placeholder="email@example.com" />
```

```razor [Blazor]
<PtInput Type="email" Placeholder="email@example.com" />
```

:::

### Password Input

::: code-group

```tsx [React]
<Input type="password" placeholder="Enter password" />
```

```vue [Vue]
<PtInput type="password" placeholder="Enter password" />
```

```razor [Blazor]
<PtInput Type="password" Placeholder="Enter password" />
```

:::

### Number Input

::: code-group

```tsx [React]
<Input type="number" placeholder="Enter number" min={0} max={100} />
```

```vue [Vue]
<PtInput type="number" placeholder="Enter number" :min="0" :max="100" />
```

```razor [Blazor]
<PtInput Type="number" Placeholder="Enter number" Min="0" Max="100" />
```

:::

### Search Input

::: code-group

```tsx [React]
<Input type="search" placeholder="Search..." />
```

```vue [Vue]
<PtInput type="search" placeholder="Search..." />
```

```razor [Blazor]
<PtInput Type="search" Placeholder="Search..." />
```

:::

---

## Sizes

::: code-group

```tsx [React]
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
```

```vue [Vue]
<PtInput size="sm" placeholder="Small input" />
<PtInput size="md" placeholder="Medium input" />
<PtInput size="lg" placeholder="Large input" />
```

```razor [Blazor]
<PtInput Size="InputSize.Small" Placeholder="Small input" />
<PtInput Size="InputSize.Medium" Placeholder="Medium input" />
<PtInput Size="InputSize.Large" Placeholder="Large input" />
```

:::

**Size Specifications:**

| Size   | Height | Padding   | Font Size |
| ------ | ------ | --------- | --------- |
| Small  | 32px   | 8px 10px  | 14px      |
| Medium | 40px   | 10px 12px | 16px      |
| Large  | 48px   | 12px 16px | 18px      |

---

## Validation States

### Default State

::: code-group

```tsx [React]
<Input placeholder="Normal input" />
```

```vue [Vue]
<PtInput placeholder="Normal input" />
```

```razor [Blazor]
<PtInput Placeholder="Normal input" />
```

:::

**Design Specs:**

- Border: `1px solid #D1D5DB` (Gray 300)
- Background: `#FFFFFF`

### Success State

::: code-group

```tsx [React]
<Input status="success" placeholder="Valid input" helperText="This field is valid" />
```

```vue [Vue]
<PtInput status="success" placeholder="Valid input" helper-text="This field is valid" />
```

```razor [Blazor]
<PtInput
    Status="InputStatus.Success"
    Placeholder="Valid input"
    HelperText="This field is valid" />
```

:::

**Design Specs:**

- Border: `1px solid #10B981` (Green 500)
- Focus Ring: `2px #10B981`

### Error State

::: code-group

```tsx [React]
<Input status="error" placeholder="Invalid input" helperText="This field is required" />
```

```vue [Vue]
<PtInput status="error" placeholder="Invalid input" helper-text="This field is required" />
```

```razor [Blazor]
<PtInput
    Status="InputStatus.Error"
    Placeholder="Invalid input"
    HelperText="This field is required" />
```

:::

**Design Specs:**

- Border: `1px solid #DC2626` (Red 600)
- Focus Ring: `2px #DC2626`
- Helper Text Color: `#DC2626`

### Warning State

::: code-group

```tsx [React]
<Input status="warning" placeholder="Warning input" helperText="Please review this field" />
```

```vue [Vue]
<PtInput status="warning" placeholder="Warning input" helper-text="Please review this field" />
```

```razor [Blazor]
<PtInput
    Status="InputStatus.Warning"
    Placeholder="Warning input"
    HelperText="Please review this field" />
```

:::

**Design Specs:**

- Border: `1px solid #F59E0B` (Amber 500)
- Focus Ring: `2px #F59E0B`

---

## With Label

::: code-group

```tsx [React]
<div>
  <label htmlFor="email" className="block text-sm font-medium mb-1">
    Email Address
  </label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
```

```vue [Vue]
<div>
  <label for="email" class="block text-sm font-medium mb-1">
    Email Address
  </label>
  <PtInput 
    id="email"
    type="email"
    placeholder="email@example.com"
  />
</div>
```

```razor [Blazor]
<div>
    <label for="email" class="block text-sm font-medium mb-1">
        Email Address
    </label>
    <PtInput
        Id="email"
        Type="email"
        Placeholder="email@example.com" />
</div>
```

:::

**Label Spacing:**

- Margin bottom: `4px`
- Font size: `14px`
- Font weight: `500`
- Color: `#374151` (Gray 700)

---

## With Icons

### Left Icon

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';
import { IconSearch } from '@tabler/icons-react';

function App() {
  return (
    <div className="relative">
      <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <Input className="pl-10" placeholder="Search..." />
    </div>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { IconSearch } from '@tabler/icons-vue';
</script>

<template>
  <div class="relative">
    <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" :size="20" />
    <PtInput class="pl-10" placeholder="Search..." />
  </div>
</template>
```

```razor [Blazor]
<div class="relative">
    <i class="icon-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
    <PtInput Class="pl-10" Placeholder="Search..." />
</div>
```

:::

### Right Icon

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';
import { IconEye } from '@tabler/icons-react';

function App() {
  return (
    <div className="relative">
      <Input className="pr-10" type="password" placeholder="Password" />
      <IconEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { IconEye } from '@tabler/icons-vue';
</script>

<template>
  <div class="relative">
    <PtInput class="pr-10" type="password" placeholder="Password" />
    <IconEye class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" :size="20" />
  </div>
</template>
```

```razor [Blazor]
<div class="relative">
    <PtInput Class="pr-10" Type="password" Placeholder="Password" />
    <i class="icon-eye absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
```

:::

**Icon Specifications:**

- Icon size: `20px`
- Icon color: `#9CA3AF` (Gray 400)
- Left position: `12px` from left edge
- Right position: `12px` from right edge

---

## Disabled State

::: code-group

```tsx [React]
<Input disabled placeholder="Disabled input" />
```

```vue [Vue]
<PtInput disabled placeholder="Disabled input" />
```

```razor [Blazor]
<PtInput Disabled="true" Placeholder="Disabled input" />
```

:::

**Design Specs:**

- Background: `#F3F4F6` (Gray 100)
- Border: `1px solid #E5E7EB` (Gray 200)
- Text color: `#9CA3AF` (Gray 400)
- Cursor: `not-allowed`

---

## Read-only State

::: code-group

```tsx [React]
<Input readOnly value="Read-only value" />
```

```vue [Vue]
<PtInput readonly value="Read-only value" />
```

```razor [Blazor]
<PtInput ReadOnly="true" Value="Read-only value" />
```

:::

**Design Specs:**

- Background: `#F9FAFB` (Gray 50)
- Border: `1px solid #E5E7EB`
- Cursor: `default`

---

## Full Width

::: code-group

```tsx [React]
<Input fullWidth placeholder="Full width input" />
```

```vue [Vue]
<PtInput full-width placeholder="Full width input" />
```

```razor [Blazor]
<PtInput FullWidth="true" Placeholder="Full width input" />
```

:::

---

## API Reference

### React Props

| Prop          | Type                                             | Default     | Description             |
| ------------- | ------------------------------------------------ | ----------- | ----------------------- |
| `type`        | `string`                                         | `'text'`    | Input type              |
| `value`       | `string`                                         | -           | Input value             |
| `placeholder` | `string`                                         | -           | Placeholder text        |
| `size`        | `'sm' \| 'md' \| 'lg'`                           | `'md'`      | Input size              |
| `status`      | `'default' \| 'success' \| 'error' \| 'warning'` | `'default'` | Validation status       |
| `disabled`    | `boolean`                                        | `false`     | Disable input           |
| `readOnly`    | `boolean`                                        | `false`     | Read-only state         |
| `fullWidth`   | `boolean`                                        | `false`     | Full width input        |
| `helperText`  | `string`                                         | -           | Helper text below input |
| `onChange`    | `(e: ChangeEvent) => void`                       | -           | Change handler          |

### Vue Props

| Prop          | Type                                             | Default     | Description             |
| ------------- | ------------------------------------------------ | ----------- | ----------------------- |
| `type`        | `string`                                         | `'text'`    | Input type              |
| `modelValue`  | `string`                                         | -           | Input value (v-model)   |
| `placeholder` | `string`                                         | -           | Placeholder text        |
| `size`        | `'sm' \| 'md' \| 'lg'`                           | `'md'`      | Input size              |
| `status`      | `'default' \| 'success' \| 'error' \| 'warning'` | `'default'` | Validation status       |
| `disabled`    | `boolean`                                        | `false`     | Disable input           |
| `readonly`    | `boolean`                                        | `false`     | Read-only state         |
| `fullWidth`   | `boolean`                                        | `false`     | Full width input        |
| `helperText`  | `string`                                         | -           | Helper text below input |

### Vue Events

| Event                | Payload  | Description      |
| -------------------- | -------- | ---------------- |
| `@update:modelValue` | `string` | Emitted on input |
| `@focus`             | `Event`  | Emitted on focus |
| `@blur`              | `Event`  | Emitted on blur  |

### Blazor Parameters

| Parameter      | Type                    | Default   | Description             |
| -------------- | ----------------------- | --------- | ----------------------- |
| `Type`         | `string`                | `"text"`  | Input type              |
| `Value`        | `string`                | -         | Input value             |
| `Placeholder`  | `string`                | -         | Placeholder text        |
| `Size`         | `InputSize`             | `Medium`  | Input size              |
| `Status`       | `InputStatus`           | `Default` | Validation status       |
| `Disabled`     | `bool`                  | `false`   | Disable input           |
| `ReadOnly`     | `bool`                  | `false`   | Read-only state         |
| `FullWidth`    | `bool`                  | `false`   | Full width input        |
| `HelperText`   | `string`                | -         | Helper text below input |
| `ValueChanged` | `EventCallback<string>` | -         | Value change event      |

---

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

---

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

---

## Examples

### Login Form

::: code-group

```tsx [React]
<form>
  <div className="space-y-4">
    <div>
      <label htmlFor="email">Email</label>
      <Input id="email" type="email" placeholder="email@example.com" fullWidth />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Input id="password" type="password" placeholder="Enter password" fullWidth />
    </div>
    <Button variant="primary" fullWidth>
      Sign In
    </Button>
  </div>
</form>
```

```vue [Vue]
<form>
  <div class="space-y-4">
    <div>
      <label for="email">Email</label>
      <PtInput 
        id="email"
        type="email"
        placeholder="email@example.com"
        full-width
      />
    </div>
    <div>
      <label for="password">Password</label>
      <PtInput 
        id="password"
        type="password"
        placeholder="Enter password"
        full-width
      />
    </div>
    <PtButton variant="primary" full-width>
      Sign In
    </PtButton>
  </div>
</form>
```

```razor [Blazor]
<form>
    <div class="space-y-4">
        <div>
            <label for="email">Email</label>
            <PtInput
                Id="email"
                Type="email"
                Placeholder="email@example.com"
                FullWidth="true" />
        </div>
        <div>
            <label for="password">Password</label>
            <PtInput
                Id="password"
                Type="password"
                Placeholder="Enter password"
                FullWidth="true" />
        </div>
        <PtButton Variant="ButtonVariant.Primary" FullWidth="true">
            Sign In
        </PtButton>
    </div>
</form>
```

:::

### Search with Validation

::: code-group

```tsx [React]
const [query, setQuery] = useState('');
const [error, setError] = useState('');

return (
  <Input
    type="search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search products..."
    status={error ? 'error' : 'default'}
    helperText={error || 'Min 3 characters'}
    fullWidth
  />
);
```

```vue [Vue]
<script setup lang="ts">
const query = ref('');
const error = ref('');
</script>

<template>
  <PtInput
    type="search"
    v-model="query"
    placeholder="Search products..."
    :status="error ? 'error' : 'default'"
    :helper-text="error || 'Min 3 characters'"
    full-width
  />
</template>
```

```razor [Blazor]
<PtInput
    Type="search"
    @bind-Value="query"
    Placeholder="Search products..."
    Status="@(string.IsNullOrEmpty(error) ? InputStatus.Default : InputStatus.Error)"
    HelperText="@(error ?? "Min 3 characters")"
    FullWidth="true" />

@code {
    private string query = "";
    private string? error;
}
```

:::
