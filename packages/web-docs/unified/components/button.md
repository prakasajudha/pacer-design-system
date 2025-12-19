# Button

Buttons allow users to take actions and make choices with a single tap or click.

## Overview

The Button component is available in all three frameworks with identical design, spacing, and behavior. All variants maintain consistent colors, typography, and interactions across React, Vue, and Blazor.

## Design Consistency

| Property          | Value                    | Applied To   |
| ----------------- | ------------------------ | ------------ |
| **Border Radius** | `0.375rem` (6px)         | All variants |
| **Font Weight**   | `500` (Medium)           | All variants |
| **Padding (md)**  | `0.5rem 1rem` (8px 16px) | All variants |
| **Transition**    | `150ms ease-in-out`      | All states   |
| **Focus Ring**    | `2px offset 2px`         | All variants |

---

## Installation & Import

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';
```

```vue [Vue]
import { PtButton } from '@pacer-ui/vue';
```

```razor [Blazor]
@using Pertamina.DesignSystem.Blazor

<PtButton>Click me</PtButton>
```

:::

---

## Basic Usage

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';

function App() {
  return <Button onClick={() => console.log('Clicked!')}>Click me</Button>;
}
```

```vue [Vue]
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';

const handleClick = () => {
  console.log('Clicked!');
};
</script>

<template>
  <PtButton @click="handleClick"> Click me </PtButton>
</template>
```

```razor [Blazor]
<PtButton OnClick="HandleClick">
    Click me
</PtButton>

@code {
    private void HandleClick()
    {
        Console.WriteLine("Clicked!");
    }
}
```

:::

---

## Variants

All variants use the same design tokens and colors across frameworks.

### Primary Button

Used for the main call-to-action.

::: code-group

```tsx [React]
<Button variant="primary">Primary Button</Button>
```

```vue [Vue]
<PtButton variant="primary">
  Primary Button
</PtButton>
```

```razor [Blazor]
<PtButton Variant="ButtonVariant.Primary">
    Primary Button
</PtButton>
```

:::

**Design Specs:**

- Background: `#00A19B` (Pertamina Teal)
- Text: `#FFFFFF`
- Hover: `#008A85`
- Active: `#007570`

### Secondary Button

Used for secondary actions.

::: code-group

```tsx [React]
<Button variant="secondary">Secondary Button</Button>
```

```vue [Vue]
<PtButton variant="secondary">
  Secondary Button
</PtButton>
```

```razor [Blazor]
<PtButton Variant="ButtonVariant.Secondary">
    Secondary Button
</PtButton>
```

:::

**Design Specs:**

- Background: `#6B7280` (Gray 500)
- Text: `#FFFFFF`
- Hover: `#4B5563`
- Active: `#374151`

### Outline Button

Used for less prominent actions.

::: code-group

```tsx [React]
<Button variant="outline">Outline Button</Button>
```

```vue [Vue]
<PtButton variant="outline">
  Outline Button
</PtButton>
```

```razor [Blazor]
<PtButton Variant="ButtonVariant.Outline">
    Outline Button
</PtButton>
```

:::

**Design Specs:**

- Background: `transparent`
- Border: `1px solid #D1D5DB`
- Text: `#374151`
- Hover Background: `#F9FAFB`

### Ghost Button

Minimal styling for subtle actions.

::: code-group

```tsx [React]
<Button variant="ghost">Ghost Button</Button>
```

```vue [Vue]
<PtButton variant="ghost">
  Ghost Button
</PtButton>
```

```razor [Blazor]
<PtButton Variant="ButtonVariant.Ghost">
    Ghost Button
</PtButton>
```

:::

**Design Specs:**

- Background: `transparent`
- Text: `#374151`
- Hover Background: `#F3F4F6`

### Danger Button

Used for destructive actions.

::: code-group

```tsx [React]
<Button variant="danger">Delete</Button>
```

```vue [Vue]
<PtButton variant="danger">
  Delete
</PtButton>
```

```razor [Blazor]
<PtButton Variant="ButtonVariant.Danger">
    Delete
</PtButton>
```

:::

**Design Specs:**

- Background: `#DC2626` (Red 600)
- Text: `#FFFFFF`
- Hover: `#B91C1C`
- Active: `#991B1B`

---

## Sizes

All sizes maintain consistent proportions across frameworks.

::: code-group

```tsx [React]
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

```vue [Vue]
<PtButton size="sm">Small</PtButton>
<PtButton size="md">Medium</PtButton>
<PtButton size="lg">Large</PtButton>
```

```razor [Blazor]
<PtButton Size="ButtonSize.Small">Small</PtButton>
<PtButton Size="ButtonSize.Medium">Medium</PtButton>
<PtButton Size="ButtonSize.Large">Large</PtButton>
```

:::

**Size Specifications:**

| Size   | Height | Padding X | Padding Y | Font Size |
| ------ | ------ | --------- | --------- | --------- |
| Small  | 32px   | 12px      | 6px       | 14px      |
| Medium | 40px   | 16px      | 8px       | 16px      |
| Large  | 48px   | 24px      | 12px      | 18px      |

---

## States

### Disabled State

::: code-group

```tsx [React]
<Button disabled>Disabled Button</Button>
```

```vue [Vue]
<PtButton disabled>
  Disabled Button
</PtButton>
```

```razor [Blazor]
<PtButton Disabled="true">
    Disabled Button
</PtButton>
```

:::

**Design Specs:**

- Opacity: `0.5`
- Cursor: `not-allowed`
- Pointer Events: `none`

### Loading State

::: code-group

```tsx [React]
<Button loading>Loading...</Button>
```

```vue [Vue]
<PtButton loading>
  Loading...
</PtButton>
```

```razor [Blazor]
<PtButton Loading="true">
    Loading...
</PtButton>
```

:::

---

## Full Width

::: code-group

```tsx [React]
<Button fullWidth>Full Width Button</Button>
```

```vue [Vue]
<PtButton full-width>
  Full Width Button
</PtButton>
```

```razor [Blazor]
<PtButton FullWidth="true">
    Full Width Button
</PtButton>
```

:::

---

## With Icons

::: code-group

```tsx [React]
import { Button } from '@pacer-ui/react';
import { IconCheck } from '@tabler/icons-react';

function App() {
  return (
    <>
      <Button>
        <IconCheck size={20} />
        With Icon
      </Button>

      <Button>
        Save
        <IconCheck size={20} />
      </Button>
    </>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtButton } from '@pacer-ui/vue';
import { IconCheck } from '@tabler/icons-vue';
</script>

<template>
  <PtButton>
    <IconCheck :size="20" />
    With Icon
  </PtButton>

  <PtButton>
    Save
    <IconCheck :size="20" />
  </PtButton>
</template>
```

```razor [Blazor]
<PtButton>
    <i class="icon-check"></i>
    With Icon
</PtButton>

<PtButton>
    Save
    <i class="icon-check"></i>
</PtButton>
```

:::

**Icon Spacing:**

- Icon-to-text gap: `8px`
- Icon size: `20px` (small), `24px` (medium), `28px` (large)

---

## API Reference

### React Props

| Prop        | Type                                                           | Default     | Description        |
| ----------- | -------------------------------------------------------------- | ----------- | ------------------ |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button variant     |
| `size`      | `'sm' \| 'md' \| 'lg'`                                         | `'md'`      | Button size        |
| `disabled`  | `boolean`                                                      | `false`     | Disable button     |
| `loading`   | `boolean`                                                      | `false`     | Show loading state |
| `fullWidth` | `boolean`                                                      | `false`     | Full width button  |
| `onClick`   | `() => void`                                                   | -           | Click handler      |

### Vue Props

| Prop        | Type                                                           | Default     | Description        |
| ----------- | -------------------------------------------------------------- | ----------- | ------------------ |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button variant     |
| `size`      | `'sm' \| 'md' \| 'lg'`                                         | `'md'`      | Button size        |
| `disabled`  | `boolean`                                                      | `false`     | Disable button     |
| `loading`   | `boolean`                                                      | `false`     | Show loading state |
| `fullWidth` | `boolean`                                                      | `false`     | Full width button  |

### Vue Events

| Event    | Payload | Description      |
| -------- | ------- | ---------------- |
| `@click` | `Event` | Emitted on click |

### Blazor Parameters

| Parameter   | Type            | Default   | Description        |
| ----------- | --------------- | --------- | ------------------ |
| `Variant`   | `ButtonVariant` | `Primary` | Button variant     |
| `Size`      | `ButtonSize`    | `Medium`  | Button size        |
| `Disabled`  | `bool`          | `false`   | Disable button     |
| `Loading`   | `bool`          | `false`   | Show loading state |
| `FullWidth` | `bool`          | `false`   | Full width button  |
| `OnClick`   | `EventCallback` | -         | Click event        |

---

## Accessibility

All button implementations follow WCAG 2.1 Level AA guidelines:

- ✅ Keyboard accessible (Tab, Enter, Space)
- ✅ Focus indicators visible
- ✅ Screen reader compatible
- ✅ Sufficient color contrast (4.5:1 minimum)
- ✅ Touch target size (44x44px minimum)
- ✅ Disabled state properly communicated

### ARIA Attributes

All implementations include:

- `role="button"` (when not using native button element)
- `aria-disabled="true"` for disabled state
- `aria-busy="true"` for loading state
- `aria-label` when icon-only

---

## Best Practices

### ✅ Do

- Use Primary variant for main actions
- Use Outline or Ghost for secondary actions
- Use Danger for destructive actions
- Provide clear, action-oriented labels
- Use consistent sizing throughout your app

### ❌ Don't

- Don't use multiple primary buttons in close proximity
- Don't make buttons too small (minimum 32px height)
- Don't use vague labels like "Click here"
- Don't override disabled state styling
- Don't put too much text in a button

---

## Examples

### Button Group

::: code-group

```tsx [React]
<div className="flex gap-2">
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
</div>
```

```vue [Vue]
<div class="flex gap-2">
  <PtButton variant="primary">Save</PtButton>
  <PtButton variant="outline">Cancel</PtButton>
</div>
```

```razor [Blazor]
<div class="flex gap-2">
    <PtButton Variant="ButtonVariant.Primary">Save</PtButton>
    <PtButton Variant="ButtonVariant.Outline">Cancel</PtButton>
</div>
```

:::

### Form Actions

::: code-group

```tsx [React]
<form onSubmit={handleSubmit}>
  <Input placeholder="Email" />
  <div className="flex justify-end gap-2 mt-4">
    <Button variant="ghost" type="button">
      Reset
    </Button>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </div>
</form>
```

```vue [Vue]
<form @submit.prevent="handleSubmit">
  <PtInput placeholder="Email" />
  <div class="flex justify-end gap-2 mt-4">
    <PtButton variant="ghost" type="button">
      Reset
    </PtButton>
    <PtButton variant="primary" type="submit">
      Submit
    </PtButton>
  </div>
</form>
```

```razor [Blazor]
<EditForm Model="model" OnValidSubmit="HandleSubmit">
    <PtInput @bind-Value="model.Email" Placeholder="Email" />
    <div class="flex justify-end gap-2 mt-4">
        <PtButton Variant="ButtonVariant.Ghost" Type="button">
            Reset
        </PtButton>
        <PtButton Variant="ButtonVariant.Primary" Type="submit">
            Submit
        </PtButton>
    </div>
</EditForm>
```

:::
