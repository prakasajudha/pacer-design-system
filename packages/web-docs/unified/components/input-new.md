# Input Component

Input fields allow users to enter text or data.

## Basic Input

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label class="block text-sm font-medium mb-2">Email Address</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-2">Password</label>
        <input 
          type="password" 
          placeholder="Enter your password"
          class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
        />
      </div>
    </div>
  </template>

<template #react>

```tsx
import { Input } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="space-y-4">
      <Input type="email" label="Email Address" placeholder="Enter your email" />
      <Input type="password" label="Password" placeholder="Enter your password" />
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

const email = ref('');
const password = ref('');
</script>

<template>
  <div class="space-y-4">
    <PtInput v-model="email" type="email" label="Email Address" placeholder="Enter your email" />
    <PtInput
      v-model="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
    />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="space-y-4">
    <PtInput
        Type="InputType.Email"
        Label="Email Address"
        Placeholder="Enter your email"
        @bind-Value="email"
    />
    <PtInput
        Type="InputType.Password"
        Label="Password"
        Placeholder="Enter your password"
        @bind-Value="password"
    />
</div>

@code {
    private string email = "";
    private string password = "";
}
```

  </template>
</ComponentDemo>

## Input with Helper Text

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px;">
      <label class="block text-sm font-medium mb-2">Username</label>
      <input 
        type="text" 
        placeholder="Choose a username"
        class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
      />
      <p class="text-sm text-gray-500 mt-1">Your username must be unique and between 3-20 characters.</p>
    </div>
  </template>

<template #react>

```tsx
import { Input } from '@pacer-ui/react';

export default function App() {
  return (
    <Input
      label="Username"
      placeholder="Choose a username"
      helperText="Your username must be unique and between 3-20 characters."
    />
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const username = ref('');
</script>

<template>
  <PtInput
    v-model="username"
    label="Username"
    placeholder="Choose a username"
    helper-text="Your username must be unique and between 3-20 characters."
  />
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtInput
    Label="Username"
    Placeholder="Choose a username"
    HelperText="Your username must be unique and between 3-20 characters."
    @bind-Value="username"
/>

@code {
    private string username = "";
}
```

  </template>
</ComponentDemo>

## Input with Error

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px;">
      <label class="block text-sm font-medium mb-2">Email</label>
      <input 
        type="email" 
        placeholder="Enter your email"
        class="flex h-10 w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        value="invalid-email"
      />
      <p class="text-sm text-red-600 mt-1">Please enter a valid email address.</p>
    </div>
  </template>

<template #react>

```tsx
import { Input } from '@pacer-ui/react';

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      placeholder="Enter your email"
      error="Please enter a valid email address."
      defaultValue="invalid-email"
    />
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const email = ref('invalid-email');
const error = ref('Please enter a valid email address.');
</script>

<template>
  <PtInput
    v-model="email"
    type="email"
    label="Email"
    placeholder="Enter your email"
    :error="error"
  />
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtInput
    Type="InputType.Email"
    Label="Email"
    Placeholder="Enter your email"
    Error="Please enter a valid email address."
    @bind-Value="email"
/>

@code {
    private string email = "invalid-email";
}
```

  </template>
</ComponentDemo>

## Disabled Input

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px;">
      <label class="block text-sm font-medium mb-2 opacity-50">Disabled Field</label>
      <input 
        type="text" 
        placeholder="This field is disabled"
        disabled
        class="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm opacity-50 cursor-not-allowed"
      />
    </div>
  </template>

<template #react>

```tsx
import { Input } from '@pacer-ui/react';

export default function App() {
  return <Input label="Disabled Field" placeholder="This field is disabled" disabled />;
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtInput } from '@pacer-ui/vue';
</script>

<template>
  <PtInput label="Disabled Field" placeholder="This field is disabled" disabled />
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtInput
    Label="Disabled Field"
    Placeholder="This field is disabled"
    Disabled="true"
/>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop          | Type                                                   | Default  | Description               |
| ------------- | ------------------------------------------------------ | -------- | ------------------------- |
| `type`        | `'text' \| 'email' \| 'password' \| 'number' \| 'tel'` | `'text'` | Input type                |
| `label`       | `string`                                               | -        | Label text                |
| `placeholder` | `string`                                               | -        | Placeholder text          |
| `helperText`  | `string`                                               | -        | Helper text below input   |
| `error`       | `string`                                               | -        | Error message             |
| `disabled`    | `boolean`                                              | `false`  | Whether input is disabled |
| `required`    | `boolean`                                              | `false`  | Whether input is required |

### Events

| Event                                 | Description                     |
| ------------------------------------- | ------------------------------- |
| `onChange` / `@input` / `@bind-Value` | Fired when value changes        |
| `onFocus` / `@focus` / `OnFocus`      | Fired when input receives focus |
| `onBlur` / `@blur` / `OnBlur`         | Fired when input loses focus    |

## Design Tokens

- **Border Radius**: `--radius-md` (6px)
- **Border Color**: `--color-gray-300`
- **Focus Ring**: `--color-primary-600`
- **Height**: `--size-10` (40px)
- **Padding**: `--spacing-3` (12px)

## Accessibility

- Uses semantic `<input>` element
- Supports keyboard navigation
- Proper label association
- Error announcements for screen readers
- Focus indicators
