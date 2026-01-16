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

### Error State

Input component uses `error` prop to display error state and error message.

::: code-group

```tsx [React]
<Input 
  error="This field is required" 
  placeholder="Invalid input" 
/>
```

```vue [Vue]
<PtInput 
  error="This field is required" 
  placeholder="Invalid input" 
/>
```

```razor [Blazor]
<PtInput
    Error="This field is required"
    Placeholder="Invalid input" />
```

:::

**Design Specs:**

- Border: `1px solid #DC2626` (Red 600)
- Focus Ring: `2px #DC2626`
- Error Text Color: `#DC2626`

---

## With Label

Input component supports `label` prop for built-in label rendering.

::: code-group

```tsx [React]
<Input 
  label="Email Address"
  type="email" 
  placeholder="email@example.com" 
/>
```

```vue [Vue]
<PtInput 
  label="Email Address"
  type="email"
  placeholder="email@example.com"
/>
```

```razor [Blazor]
<PtInput
    Label="Email Address"
    Type="email"
    Placeholder="email@example.com" />
```

:::

**Label Specifications:**

- Font size: `14px` (text-sm)
- Font weight: `500` (font-medium)
- Color: `#374151` (Gray 700)
- Margin bottom: `4px` (space-y-1)

---

## With Icons

Input component supports `startIcon` and `endIcon` props for icons.

### Left Icon (startIcon)

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

function App() {
  return (
    <Input 
      startIcon={<SearchIcon />}
      placeholder="Search..." 
    />
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
</script>

<template>
  <PtInput 
    :start-icon="<SearchIcon />"
    placeholder="Search..." 
  />
</template>
```

```razor [Blazor]
<PtInput
    StartIcon="@(() => <SearchIcon />)"
    Placeholder="Search..." />
```

:::

### Right Icon (endIcon)

::: code-group

```tsx [React]
import { Input } from '@pacer-ui/react';

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

function App() {
  return (
    <Input 
      endIcon={<EyeIcon />}
      type="password" 
      placeholder="Password" 
    />
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
</script>

<template>
  <PtInput 
    :end-icon="<EyeIcon />"
    type="password" 
    placeholder="Password" 
  />
</template>
```

```razor [Blazor]
<PtInput
    EndIcon="@(() => <EyeIcon />)"
    Type="password"
    Placeholder="Password" />
```

:::

**Icon Specifications:**

- Icon size: `20px` (recommended)
- Icon color: `#6B7280` (Gray 500)
- Left position: `12px` from left edge (auto-handled by component)
- Right position: `12px` from right edge (auto-handled by component)

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

| Prop          | Type                                                               | Default     | Description                    |
| ------------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `label`       | `string`                                                           | `undefined` | Label text above input         |
| `error`       | `string`                                                           | `undefined` | Error message (shows error state) |
| `helperText`  | `string`                                                           | `undefined` | Helper text below input        |
| `startIcon`   | `React.ReactNode`                                                  | `undefined` | Icon before input              |
| `endIcon`     | `React.ReactNode`                                                  | `undefined` | Icon after input               |
| `fullWidth`   | `boolean`                                                          | `false`     | Full width input               |
| `type`        | `string`                                                           | `'text'`    | Input type (text, email, password, number, search, etc.) |
| `value`       | `string`                                                           | -           | Input value                    |
| `placeholder` | `string`                                                           | -           | Placeholder text               |
| `id`          | `string`                                                           | -           | Input ID (auto-generated if not provided) |
| `disabled`    | `boolean`                                                          | `false`     | Disable input                  |
| `readOnly`    | `boolean`                                                          | `false`     | Read-only state                |
| `className`   | `string`                                                           | `undefined` | Custom className               |
| `onChange`    | `(e: React.ChangeEvent<HTMLInputElement>) => void`                | -           | Change handler                 |
| ...           | `React.InputHTMLAttributes<HTMLInputElement>`                      | -           | All standard HTML input attributes |

### Vue Props

| Prop          | Type                                                               | Default     | Description                    |
| ------------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `label`       | `string`                                                           | `undefined` | Label text above input         |
| `error`       | `string`                                                           | `undefined` | Error message (shows error state) |
| `helperText`  | `string`                                                           | `undefined` | Helper text below input        |
| `startIcon`   | `VNode \| Component`                                               | `undefined` | Icon before input              |
| `endIcon`     | `VNode \| Component`                                               | `undefined` | Icon after input               |
| `fullWidth`   | `boolean`                                                          | `false`     | Full width input               |
| `type`        | `string`                                                           | `'text'`    | Input type                     |
| `modelValue`  | `string`                                                           | -           | Input value (v-model)          |
| `placeholder` | `string`                                                           | -           | Placeholder text               |
| `id`          | `string`                                                           | -           | Input ID                       |
| `disabled`    | `boolean`                                                          | `false`     | Disable input                  |
| `readonly`    | `boolean`                                                          | `false`     | Read-only state                |
| `class`       | `string`                                                           | `undefined` | Custom class                   |

### Vue Events

| Event                | Payload  | Description      |
| -------------------- | -------- | ---------------- |
| `@update:modelValue` | `string` | Emitted on input |
| `@focus`             | `Event`  | Emitted on focus |
| `@blur`              | `Event`  | Emitted on blur  |

### Blazor Parameters

| Parameter      | Type                    | Default   | Description                    |
| -------------- | ----------------------- | --------- | ------------------------------ |
| `Label`        | `string?`                | `null`    | Label text above input         |
| `Error`        | `string?`                | `null`    | Error message (shows error state) |
| `HelperText`   | `string?`                | `null`    | Helper text below input        |
| `StartIcon`    | `RenderFragment?`        | `null`    | Icon before input              |
| `EndIcon`      | `RenderFragment?`        | `null`    | Icon after input               |
| `FullWidth`    | `bool`                   | `false`   | Full width input               |
| `Type`         | `string`                 | `"text"`  | Input type                     |
| `Value`        | `string`                 | -         | Input value                    |
| `Placeholder`  | `string?`                | `null`    | Placeholder text               |
| `Id`           | `string?`                | `null`    | Input ID                       |
| `Disabled`     | `bool`                   | `false`   | Disable input                  |
| `ReadOnly`     | `bool`                   | `false`   | Read-only state                |
| `Class`        | `string?`                | `null`    | Custom class                   |
| `ValueChanged` | `EventCallback<string>`  | -         | Value change event             |

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
    error={error || undefined}
    helperText={!error ? 'Min 3 characters' : undefined}
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
    :error="error || undefined"
    :helper-text="!error ? 'Min 3 characters' : undefined"
    full-width
  />
</template>
```

```razor [Blazor]
<PtInput
    Type="search"
    @bind-Value="query"
    Placeholder="Search products..."
    Error="@error"
    HelperText="@(!string.IsNullOrEmpty(error) ? null : "Min 3 characters")"
    FullWidth="true" />

@code {
    private string query = "";
    private string? error;
}
```

:::
