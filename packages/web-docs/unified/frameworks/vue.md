# Vue Guide

Complete guide for using PACER components in Vue 3 applications.

## Installation

```bash
npm install @pacer-ui/vue
```

## Setup

### 1. Import Styles

Add the PACER styles to your main entry file:

```ts
// main.ts
import '@pacer-ui/vue/styles.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

### 2. Configure Tailwind (Optional)

If you're using Tailwind CSS in your project:

```js
// tailwind.config.js
import { pacerPreset } from '@pacer-ui/tailwind';

export default {
  presets: [pacerPreset],
  content: ['./src/**/*.{vue,js,ts}', './node_modules/@pacer-ui/vue/**/*.{js,vue}'],
};
```

## Basic Usage

```vue
<script setup lang="ts">
import { PtButton, PtCard, PtInput } from '@pacer-ui/vue';
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  console.log('Email:', email.value);
};
</script>

<template>
  <PtCard>
    <h2>Contact Form</h2>
    <PtInput v-model="email" type="email" placeholder="your@email.com" full-width />
    <PtButton variant="primary" @click="handleSubmit" full-width> Submit </PtButton>
  </PtCard>
</template>
```

## Component Patterns

### Reactive State

```vue
<script setup lang="ts">
import { PtButton, PtInput } from '@pacer-ui/vue';
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
});

const count = ref(0);
</script>

<template>
  <div>
    <PtInput v-model="formData.name" placeholder="Name" />
    <PtInput v-model="formData.email" placeholder="Email" />
    <PtButton @click="count++">Clicked {{ count }} times</PtButton>
  </div>
</template>
```

### Form Validation

```vue
<script setup lang="ts">
import { PtInput, PtButton } from '@pacer-ui/vue';
import { ref, computed } from 'vue';

const email = ref('');

const error = computed(() => {
  if (!email.value) return '';
  if (!email.value.includes('@')) return 'Invalid email address';
  return '';
});

const status = computed(() => (error.value ? 'error' : 'default'));

const handleSubmit = () => {
  if (!error.value && email.value) {
    console.log('Valid!', email.value);
  }
};
</script>

<template>
  <div>
    <PtInput
      v-model="email"
      type="email"
      :status="status"
      :helper-text="error"
      placeholder="email@example.com"
    />
    <PtButton @click="handleSubmit">Submit</PtButton>
  </div>
</template>
```

## TypeScript Support

All components are fully typed:

```vue
<script setup lang="ts">
import type { PtButtonProps, PtInputProps } from '@pacer-ui/vue';
import { PtButton, PtInput } from '@pacer-ui/vue';

// Type-safe props
const buttonProps: PtButtonProps = {
  variant: 'primary',
  size: 'lg',
  disabled: false,
};

// Type-safe event handlers
const handleChange = (value: string) => {
  console.log(value);
};
</script>

<template>
  <PtButton v-bind="buttonProps">Click me</PtButton>
  <PtInput @update:model-value="handleChange" />
</template>
```

## Composition API

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
import { ref, onMounted } from 'vue';

const loading = ref(false);

const fetchData = async () => {
  loading.value = true;
  // Fetch data...
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <PtButton :loading="loading" @click="fetchData"> Refresh </PtButton>
</template>
```

## Component Composition

```vue
<script setup lang="ts">
import { PtCard, PtCardHeader, PtCardContent, PtCardFooter, PtButton } from '@pacer-ui/vue';

interface User {
  name: string;
  avatar: string;
  bio: string;
}

defineProps<{ user: User }>();
</script>

<template>
  <PtCard>
    <PtCardHeader>
      <img :src="user.avatar" :alt="user.name" />
      <h3>{{ user.name }}</h3>
    </PtCardHeader>
    <PtCardContent>
      <p>{{ user.bio }}</p>
    </PtCardContent>
    <PtCardFooter>
      <PtButton variant="outline">View Profile</PtButton>
      <PtButton variant="primary">Follow</PtButton>
    </PtCardFooter>
  </PtCard>
</template>
```

## Styling

### Using class

```vue
<template>
  <PtButton class="custom-class"> Styled Button </PtButton>
</template>

<style scoped>
.custom-class {
  margin-top: 1rem;
}
</style>
```

### Using inline styles

```vue
<template>
  <PtButton :style="{ marginTop: '1rem' }"> Styled Button </PtButton>
</template>
```

### Using Tailwind

```vue
<template>
  <PtButton class="mt-4 shadow-lg"> Styled Button </PtButton>
</template>
```

## Integration with Vue Router

```vue
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => router.push('/home');
const goToAbout = () => router.push('/about');
</script>

<template>
  <div>
    <PtButton @click="goToHome">Home</PtButton>
    <PtButton @click="goToAbout">About</PtButton>
  </div>
</template>
```

## Server-Side Rendering (Nuxt 3)

PACER components work with Nuxt 3:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@pacer-ui/vue/styles.css'],
  modules: [],
});
```

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtButton>Click me</PtButton>
</template>
```

## Testing

### Vitest + Vue Test Utils

```ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { PtButton } from '@pacer-ui/vue';

describe('Button', () => {
  it('emits click event', async () => {
    const handleClick = vi.fn();
    const wrapper = mount(PtButton, {
      props: { onClick: handleClick },
    });

    await wrapper.trigger('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Composables

Create reusable logic with composables:

```ts
// composables/useForm.ts
import { ref, computed } from 'vue';

export function useForm(initialValues: Record<string, string>) {
  const values = ref(initialValues);
  const errors = ref<Record<string, string>>({});

  const isValid = computed(() => {
    return Object.keys(errors.value).length === 0;
  });

  const validate = () => {
    // Validation logic
  };

  return {
    values,
    errors,
    isValid,
    validate,
  };
}
```

```vue
<script setup lang="ts">
import { PtInput, PtButton } from '@pacer-ui/vue';
import { useForm } from './composables/useForm';

const { values, errors, isValid, validate } = useForm({
  email: '',
  password: '',
});
</script>

<template>
  <form @submit.prevent="validate">
    <PtInput
      v-model="values.email"
      :status="errors.email ? 'error' : 'default'"
      :helper-text="errors.email"
    />
    <PtButton type="submit" :disabled="!isValid"> Submit </PtButton>
  </form>
</template>
```

## Best Practices

### ✅ Do

- Use `<script setup>` for cleaner code
- Leverage TypeScript for type safety
- Use `v-model` for two-way binding
- Destructure imports for tree-shaking

### ❌ Don't

- Don't mutate props directly
- Don't override component internals
- Don't skip error handling
- Don't ignore TypeScript warnings

## Performance Tips

1. **Lazy Loading**: Use `defineAsyncComponent`

```ts
import { defineAsyncComponent } from 'vue';

const PtCard = defineAsyncComponent(() => import('@pacer-ui/vue').then((mod) => mod.PtCard));
```

2. **v-once**: For static content

```vue
<template>
  <PtCard v-once> Static content </PtCard>
</template>
```

3. **v-memo**: Memoize expensive renders

```vue
<template>
  <PtCard v-memo="[user.id]">
    {{ user.name }}
  </PtCard>
</template>
```

## Examples

See complete examples in our [Storybook](https://storybook.pacer-ui.com).

## Troubleshooting

### Styles not loading

Make sure you import the CSS in main.ts:

```ts
import '@pacer-ui/vue/styles.css';
```

### TypeScript errors

Ensure you have proper type declarations:

```json
{
  "compilerOptions": {
    "types": ["vue", "@pacer-ui/vue"]
  }
}
```

## Next Steps

- Browse [All Components](/components/)
- Learn about [Design Tokens](/tokens)
- View [Live Examples](https://storybook.pacer-ui.com)
