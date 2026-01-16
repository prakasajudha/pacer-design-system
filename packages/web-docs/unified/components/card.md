# Card

Cards contain content and actions about a single subject.

## Overview

The Card component provides a consistent container for grouping related content across all frameworks. All implementations maintain identical spacing, shadows, and border radius.

## Design Consistency

| Property          | Value                       | Applied To   |
| ----------------- | --------------------------- | ------------ |
| **Border Radius** | `0.5rem` (8px)              | All variants |
| **Background**    | `#FFFFFF`                   | Default card |
| **Border**        | `1px solid #E5E7EB`         | Default card |
| **Shadow**        | `0 1px 3px rgba(0,0,0,0.1)` | Default card |
| **Padding**       | `1.5rem` (24px)             | Default card |

---

## Installation & Import

::: code-group

```tsx [React]
import { Card } from '@pacer-ui/react';
```

```vue [Vue]
import { PtCard } from '@pacer-ui/vue';
```

```razor [Blazor]
@using Pertamina.DesignSystem.Blazor

<PtCard>
    <!-- Card content -->
</PtCard>
```

:::

---

## Basic Usage

::: code-group

```tsx [React]
import { Card, Button } from '@pacer-ui/react';

function App() {
  return (
    <Card
      header={<h3>Card Title</h3>}
      footer={<Button>Action</Button>}
    >
      <p>This is the card content with some text.</p>
    </Card>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtCard, PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtCard
    :header="<h3>Card Title</h3>"
    :footer="<PtButton>Action</PtButton>"
  >
    <p>This is the card content with some text.</p>
  </PtCard>
</template>
```

```razor [Blazor]
<PtCard Header="@(() => <h3>Card Title</h3>)" Footer="@(() => <PtButton>Action</PtButton>)">
    <p>This is the card content with some text.</p>
</PtCard>
```

:::

---

## Variants

### Default Card

Standard card with border and subtle shadow.

::: code-group

```tsx [React]
<Card>
  <p>Default card with border and shadow</p>
</Card>
```

```vue [Vue]
<PtCard>
  <p>Default card with border and shadow</p>
</PtCard>
```

```razor [Blazor]
<PtCard>
    <p>Default card with border and shadow</p>
</PtCard>
```

:::

### Elevated Card

Card with more prominent shadow.

::: code-group

```tsx [React]
<Card variant="elevated">
  <p>Elevated card with larger shadow</p>
</Card>
```

```vue [Vue]
<PtCard variant="elevated">
  <p>Elevated card with larger shadow</p>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Elevated">
    <p>Elevated card with larger shadow</p>
</PtCard>
```

:::

**Design Specs:**

- Shadow: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`

### Outlined Card

Card with border, no shadow.

::: code-group

```tsx [React]
<Card variant="outlined">
  <p>Outlined card without shadow</p>
</Card>
```

```vue [Vue]
<PtCard variant="outlined">
  <p>Outlined card without shadow</p>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Outlined">
    <p>Outlined card without shadow</p>
</PtCard>
```

:::

---

## Card Sections

Card component supports `header` and `footer` props for structured content.

### With Header

::: code-group

```tsx [React]
<Card header={<h3>Card Title</h3>}>
  <p>Card content here</p>
</Card>
```

```vue [Vue]
<PtCard :header="<h3>Card Title</h3>">
  <p>Card content here</p>
</PtCard>
```

```razor [Blazor]
<PtCard Header="@(() => <h3>Card Title</h3>)">
    <p>Card content here</p>
</PtCard>
```

:::

**Header Spacing:**

- Padding: `1rem` (16px) bottom
- Bottom border: `1px solid #E5E7EB`
- Margin bottom: `1rem` (16px)

### With Footer

::: code-group

```tsx [React]
<Card footer={<Button>Action</Button>}>
  <p>Card content here</p>
</Card>
```

```vue [Vue]
<PtCard :footer="<PtButton>Action</PtButton>">
  <p>Card content here</p>
</PtCard>
```

```razor [Blazor]
<PtCard Footer="@(() => <PtButton>Action</PtButton>)">
    <p>Card content here</p>
</PtCard>
```

:::

**Footer Spacing:**

- Padding: `1rem` (16px) top
- Top border: `1px solid #E5E7EB`
- Margin top: `1rem` (16px)

---

## Interactive Card

Card can be made interactive by adding click handlers and custom styling.

::: code-group

```tsx [React]
<Card onClick={() => console.log('Card clicked')} className="cursor-pointer hover:shadow-lg transition-shadow">
  <h3>Clickable Card</h3>
  <p>This card responds to hover and click</p>
</Card>
```

```vue [Vue]
<PtCard @click="handleClick" class="cursor-pointer hover:shadow-lg transition-shadow">
  <h3>Clickable Card</h3>
  <p>This card responds to hover and click</p>
</PtCard>
```

```razor [Blazor]
<PtCard OnClick="HandleClick" Class="cursor-pointer hover:shadow-lg transition-shadow">
    <h3>Clickable Card</h3>
    <p>This card responds to hover and click</p>
</PtCard>
```

:::

---

## Padding Sizes

Card supports different padding sizes for content area.

::: code-group

```tsx [React]
<Card padding="none">
  <p>No padding</p>
</Card>

<Card padding="sm">
  <p>Small padding (16px)</p>
</Card>

<Card padding="md">
  <p>Medium padding (24px)</p>
</Card>

<Card padding="lg">
  <p>Large padding (32px)</p>
</Card>
```

```vue [Vue]
<PtCard padding="none">
  <p>No padding</p>
</PtCard>

<PtCard padding="sm">
  <p>Small padding (16px)</p>
</PtCard>

<PtCard padding="md">
  <p>Medium padding (24px)</p>
</PtCard>

<PtCard padding="lg">
  <p>Large padding (32px)</p>
</PtCard>
```

```razor [Blazor]
<PtCard Padding="CardPadding.None">
    <p>No padding</p>
</PtCard>

<PtCard Padding="CardPadding.Small">
    <p>Small padding (16px)</p>
</PtCard>

<PtCard Padding="CardPadding.Medium">
    <p>Medium padding (24px)</p>
</PtCard>

<PtCard Padding="CardPadding.Large">
    <p>Large padding (32px)</p>
</PtCard>
```

:::

**Padding Specifications:**

| Size | Padding | Usage |
|------|---------|-------|
| `none` | `0` | No padding |
| `sm` | `1rem` (16px) | Compact content |
| `md` | `1.5rem` (24px) | Default, standard content |
| `lg` | `2rem` (32px) | Spacious content |

---

## API Reference

### React Props

| Prop        | Type                                                               | Default     | Description                    |
| ----------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `variant`   | `'default' \| 'outlined' \| 'elevated'`                           | `'default'` | Card variant                   |
| `padding`   | `'none' \| 'sm' \| 'md' \| 'lg'`                                  | `'md'`      | Card padding                   |
| `header`    | `React.ReactNode`                                                  | `undefined` | Header content (top section)   |
| `footer`    | `React.ReactNode`                                                  | `undefined` | Footer content (bottom section) |
| `children`  | `React.ReactNode`                                                  | `undefined` | Main card content              |
| `className` | `string`                                                           | `undefined` | Custom className for styling   |
| `style`     | `React.CSSProperties`                                              | `undefined` | Custom inline styles           |
| `onClick`   | `(event: React.MouseEvent<HTMLDivElement>) => void`              | -           | Click handler                  |

### Vue Props

| Prop        | Type                                                               | Default     | Description                    |
| ----------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `variant`   | `'default' \| 'outlined' \| 'elevated'`                            | `'default'` | Card variant                   |
| `padding`   | `'none' \| 'sm' \| 'md' \| 'lg'`                                  | `'md'`      | Card padding                   |
| `header`    | `VNode \| Component`                                               | `undefined` | Header content (top section)   |
| `footer`    | `VNode \| Component`                                               | `undefined` | Footer content (bottom section) |
| `class`     | `string`                                                           | `undefined` | Custom class for styling       |
| `style`     | `Record<string, string>`                                           | `undefined` | Custom inline styles           |

### Vue Events

| Event    | Payload | Description      |
| -------- | ------- | ---------------- |
| `@click` | `Event` | Emitted on click |

### Blazor Parameters

| Parameter   | Type              | Default   | Description                    |
| ----------- | ----------------- | --------- | ------------------------------ |
| `Variant`   | `CardVariant`      | `Default` | Card variant                   |
| `Padding`   | `CardPadding`     | `Medium`  | Card padding                   |
| `Header`    | `RenderFragment?` | `null`    | Header content (top section)   |
| `Footer`    | `RenderFragment?` | `null`    | Footer content (bottom section) |
| `ChildContent` | `RenderFragment?` | `null`    | Main card content              |
| `Class`     | `string?`          | `null`    | Custom class for styling       |
| `Style`    | `string?`          | `null`    | Custom inline styles           |
| `OnClick`   | `EventCallback`    | -         | Click event                    |

---

## Accessibility

- ✅ Semantic HTML structure
- ✅ Keyboard accessible when interactive
- ✅ Focus indicators for clickable cards
- ✅ Screen reader compatible
- ✅ Proper heading hierarchy

---

## Examples

### Profile Card

::: code-group

```tsx [React]
<Card
  header={
    <div className="flex items-center gap-4">
      <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">John Doe</h3>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </div>
    </div>
  }
  footer={
    <Button variant="outline" size="sm">
      View Profile
    </Button>
  }
>
  <p>Passionate about building great user experiences.</p>
</Card>
```

```vue [Vue]
<PtCard
  :header="
    <div class='flex items-center gap-4'>
      <img src='/avatar.jpg' class='w-12 h-12 rounded-full' />
      <div>
        <h3 class='font-semibold'>John Doe</h3>
        <p class='text-sm text-gray-500'>Software Engineer</p>
      </div>
    </div>
  "
  :footer="<PtButton variant='outline' size='sm'>View Profile</PtButton>"
>
  <p>Passionate about building great user experiences.</p>
</PtCard>
```

```razor [Blazor]
<PtCard
    Header="@(() => <div class='flex items-center gap-4'><img src='/avatar.jpg' class='w-12 h-12 rounded-full' /><div><h3 class='font-semibold'>John Doe</h3><p class='text-sm text-gray-500'>Software Engineer</p></div></div>)"
    Footer="@(() => <PtButton Variant='ButtonVariant.Outline' Size='ButtonSize.Small'>View Profile</PtButton>)"
>
    <p>Passionate about building great user experiences.</p>
</PtCard>
```

:::

### Statistics Card

::: code-group

```tsx [React]
<Card variant="elevated">
  <p className="text-sm text-gray-500 mb-1">Total Users</p>
  <h2 className="text-3xl font-bold">12,543</h2>
  <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
</Card>
```

```vue [Vue]
<PtCard variant="elevated">
  <p class="text-sm text-gray-500 mb-1">Total Users</p>
  <h2 class="text-3xl font-bold">12,543</h2>
  <p class="text-sm text-green-600 mt-2">↑ 12% from last month</p>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Elevated">
    <p class="text-sm text-gray-500 mb-1">Total Users</p>
    <h2 class="text-3xl font-bold">12,543</h2>
    <p class="text-sm text-green-600 mt-2">↑ 12% from last month</p>
</PtCard>
```

:::
