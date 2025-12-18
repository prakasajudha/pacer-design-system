# Button Component

Buttons allow users to take actions and make choices with a single tap or click.

## Live Preview

<ButtonDemo />

## Import

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';
```

```vue [Vue]
import { PtButton } from '@pacer-ui/vue';
```

:::

## Usage

### Basic Button

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';

function Example() {
  return <Button>Click me</Button>;
}
```

```vue [Vue]
<script setup>
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtButton>Click me</PtButton>
</template>
```

:::

## Variants

Buttons come in different variants to indicate different levels of emphasis.

::: code-group

```tsx [React]
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

```vue [Vue]
<PtButton variant="primary">Primary</PtButton>
<PtButton variant="secondary">Secondary</PtButton>
<PtButton variant="success">Success</PtButton>
<PtButton variant="danger">Danger</PtButton>
```

:::

## Sizes

Buttons are available in different sizes.

::: code-group

```tsx [React]
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

```vue [Vue]
<PtButton size="sm">Small</PtButton>
<PtButton size="md">Medium</PtButton>
<PtButton size="lg">Large</PtButton>
```

:::

## Disabled State

::: code-group

```tsx [React]
<Button disabled>Disabled Button</Button>
```

```vue [Vue]
<PtButton disabled>Disabled Button</PtButton>
```

:::

## With Icon

::: code-group

```tsx [React]
<Button>
  <svg>...</svg>
  Button with Icon
</Button>
```

```vue [Vue]
<PtButton>
  <template #icon>
    <svg>...</svg>
  </template>
  Button with Icon
</PtButton>
```

:::

## Props

### React

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `(event: MouseEvent) => void` | - | Click event handler |

### Vue

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'text'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Enter and Space keys)
- Proper focus management
- ARIA attributes for screen readers
