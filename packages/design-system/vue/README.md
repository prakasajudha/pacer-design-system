# @pertamina/design-system-vue

Vue 3 component library untuk PACER (Pertamina Patra Niaga Components & Experience Resources).

## Installation

```bash
npm install @pertamina/design-system-vue
# or
pnpm add @pertamina/design-system-vue
```

## Setup

### 1. Import CSS & Install Plugin

```ts
// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import PertaminaDesignSystem from '@pertamina/design-system-vue';
import '@pertamina/design-system-vue/styles.css';

const app = createApp(App);
app.use(PertaminaDesignSystem);
app.mount('#app');
```

### 2. Configure Tailwind (Optional)

Jika project menggunakan Tailwind:

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pertamina/tailwind-preset')],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@pertamina/design-system-vue/dist/**/*.{js,mjs}',
  ],
};
```

## Usage

### Button

```vue
<template>
  <div>
    <!-- Basic -->
    <PtButton variant="primary" size="md">
      Primary Button
    </PtButton>
    
    <!-- With loading -->
    <PtButton variant="secondary" :loading="isLoading">
      Loading...
    </PtButton>
    
    <!-- With icons -->
    <PtButton variant="success" @click="handleSave">
      <template #start-icon>
        <CheckIcon />
      </template>
      Save
    </PtButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PtButton } from '@pertamina/design-system-vue';

const isLoading = ref(false);

const handleSave = () => {
  console.log('Saved!');
};
</script>
```

**Props:**
- `variant` - 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'link'
- `size` - 'sm' | 'md' | 'lg'
- `fullWidth` - boolean
- `loading` - boolean
- `disabled` - boolean

**Slots:**
- `default` - Button content
- `start-icon` - Icon sebelum text
- `end-icon` - Icon setelah text

### Input

```vue
<template>
  <div>
    <!-- Basic input -->
    <PtInput
      v-model="email"
      label="Email"
      type="email"
      placeholder="nama@email.com"
      helperText="Masukkan email yang terdaftar"
    />
    
    <!-- With error -->
    <PtInput
      v-model="password"
      label="Password"
      type="password"
      :error="passwordError"
    />
    
    <!-- With icon -->
    <PtInput
      v-model="search"
      placeholder="Cari..."
    >
      <template #start-icon>
        <SearchIcon />
      </template>
    </PtInput>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PtInput } from '@pertamina/design-system-vue';

const email = ref('');
const password = ref('');
const search = ref('');

const passwordError = computed(() => {
  return password.value.length < 8 
    ? 'Password harus minimal 8 karakter' 
    : '';
});
</script>
```

**Props:**
- `modelValue` (v-model) - string | number
- `label` - string
- `error` - string
- `helperText` - string
- `type` - string
- `placeholder` - string
- `fullWidth` - boolean
- `disabled` - boolean

**Slots:**
- `start-icon` - Icon sebelum input
- `end-icon` - Icon setelah input

### Card

```vue
<template>
  <PtCard
    variant="elevated"
    padding="lg"
  >
    <template #header>
      <h3 class="text-xl font-bold">Dashboard</h3>
    </template>
    
    <p>Card content goes here...</p>
    
    <template #footer>
      <PtButton variant="primary">View Details</PtButton>
    </template>
  </PtCard>
</template>

<script setup lang="ts">
import { PtCard, PtButton } from '@pertamina/design-system-vue';
</script>
```

**Props:**
- `variant` - 'default' | 'outlined' | 'elevated'
- `padding` - 'none' | 'sm' | 'md' | 'lg'

**Slots:**
- `default` - Card body
- `header` - Card header
- `footer` - Card footer

## TypeScript

Library ini fully typed. Import types:

```ts
import type { ButtonProps, InputProps, CardProps } from '@pertamina/design-system-vue';
```

## Import Individual Components

Alternatif import tanpa plugin:

```vue
<script setup lang="ts">
import { PtButton, PtInput, PtCard } from '@pertamina/design-system-vue';
</script>
```

## Composition API

Semua component menggunakan Vue 3 Composition API dengan `<script setup>`.

## Accessibility

Semua component sudah:
- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ ARIA attributes
- ✅ Focus management
- ✅ WCAG 2.1 Level AA compliant

## Best Practices

1. **v-model** - Gunakan v-model untuk two-way binding di Input
2. **Slots** - Manfaatkan slots untuk customization
3. **TypeScript** - Enable TypeScript untuk type safety
4. **Composition API** - Gunakan Composition API untuk logic reuse

## Contributing

Lihat [CONTRIBUTING.md](../../../CONTRIBUTING.md) untuk guidelines.

## Support

- Documentation: https://design-system.pertamina.com
- Storybook: https://storybook.pertamina.com/vue
- Issues: https://github.com/pertamina/design-system/issues
