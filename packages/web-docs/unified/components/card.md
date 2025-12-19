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
import { Card, CardHeader, CardContent, CardFooter } from '@pacer-ui/react';
```

```vue [Vue]
import { PtCard, PtCardHeader, PtCardContent, PtCardFooter } from '@pacer-ui/vue';
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
import { Card, CardHeader, CardContent, CardFooter, Button } from '@pacer-ui/react';

function App() {
  return (
    <Card>
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>This is the card content with some text.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

```vue [Vue]
<script setup lang="ts">
import { PtCard, PtCardHeader, PtCardContent, PtCardFooter, PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtCard>
    <PtCardHeader>
      <h3>Card Title</h3>
    </PtCardHeader>
    <PtCardContent>
      <p>This is the card content with some text.</p>
    </PtCardContent>
    <PtCardFooter>
      <PtButton>Action</PtButton>
    </PtCardFooter>
  </PtCard>
</template>
```

```razor [Blazor]
<PtCard>
    <PtCardHeader>
        <h3>Card Title</h3>
    </PtCardHeader>
    <PtCardContent>
        <p>This is the card content with some text.</p>
    </PtCardContent>
    <PtCardFooter>
        <PtButton>Action</PtButton>
    </PtCardFooter>
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
  <CardContent>
    <p>Default card with border and shadow</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard>
  <PtCardContent>
    <p>Default card with border and shadow</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard>
    <PtCardContent>
        <p>Default card with border and shadow</p>
    </PtCardContent>
</PtCard>
```

:::

### Elevated Card

Card with more prominent shadow.

::: code-group

```tsx [React]
<Card variant="elevated">
  <CardContent>
    <p>Elevated card with larger shadow</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard variant="elevated">
  <PtCardContent>
    <p>Elevated card with larger shadow</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Elevated">
    <PtCardContent>
        <p>Elevated card with larger shadow</p>
    </PtCardContent>
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
  <CardContent>
    <p>Outlined card without shadow</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard variant="outlined">
  <PtCardContent>
    <p>Outlined card without shadow</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Outlined">
    <PtCardContent>
        <p>Outlined card without shadow</p>
    </PtCardContent>
</PtCard>
```

:::

### Filled Card

Card with background color, no border or shadow.

::: code-group

```tsx [React]
<Card variant="filled">
  <CardContent>
    <p>Filled card with background color</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard variant="filled">
  <PtCardContent>
    <p>Filled card with background color</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Filled">
    <PtCardContent>
        <p>Filled card with background color</p>
    </PtCardContent>
</PtCard>
```

:::

**Design Specs:**

- Background: `#F9FAFB` (Gray 50)
- Border: `none`
- Shadow: `none`

---

## Card Sections

### Header

Top section for titles and actions.

**Spacing:**

- Padding: `1.5rem` (24px)
- Bottom border: `1px solid #E5E7EB`

### Content

Main content area.

**Spacing:**

- Padding: `1.5rem` (24px)

### Footer

Bottom section for actions.

**Spacing:**

- Padding: `1rem 1.5rem` (16px 24px)
- Top border: `1px solid #E5E7EB`
- Background: `#F9FAFB` (optional)

---

## Interactive Card

::: code-group

```tsx [React]
<Card hoverable onClick={() => console.log('Card clicked')} className="cursor-pointer">
  <CardContent>
    <h3>Clickable Card</h3>
    <p>This card responds to hover and click</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard hoverable @click="handleClick" class="cursor-pointer">
  <PtCardContent>
    <h3>Clickable Card</h3>
    <p>This card responds to hover and click</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard
    Hoverable="true"
    OnClick="HandleClick"
    Class="cursor-pointer">
    <PtCardContent>
        <h3>Clickable Card</h3>
        <p>This card responds to hover and click</p>
    </PtCardContent>
</PtCard>
```

:::

**Hover State:**

- Transform: `translateY(-2px)`
- Shadow: `0 10px 15px -3px rgba(0,0,0,0.1)`
- Transition: `all 200ms ease-in-out`

---

## Padding Sizes

::: code-group

```tsx [React]
<Card padding="sm">
  <CardContent>Small padding (12px)</CardContent>
</Card>

<Card padding="md">
  <CardContent>Medium padding (24px)</CardContent>
</Card>

<Card padding="lg">
  <CardContent>Large padding (32px)</CardContent>
</Card>
```

```vue [Vue]
<PtCard padding="sm">
  <PtCardContent>Small padding (12px)</PtCardContent>
</PtCard>

<PtCard padding="md">
  <PtCardContent>Medium padding (24px)</PtCardContent>
</PtCard>

<PtCard padding="lg">
  <PtCardContent>Large padding (32px)</PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard Padding="CardPadding.Small">
    <PtCardContent>Small padding (12px)</PtCardContent>
</PtCard>

<PtCard Padding="CardPadding.Medium">
    <PtCardContent>Medium padding (24px)</PtCardContent>
</PtCard>

<PtCard Padding="CardPadding.Large">
    <PtCardContent>Large padding (32px)</PtCardContent>
</PtCard>
```

:::

---

## API Reference

### React Props

| Prop        | Type                                                | Default     | Description         |
| ----------- | --------------------------------------------------- | ----------- | ------------------- |
| `variant`   | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Card variant        |
| `padding`   | `'sm' \| 'md' \| 'lg'`                              | `'md'`      | Card padding        |
| `hoverable` | `boolean`                                           | `false`     | Enable hover effect |
| `onClick`   | `() => void`                                        | -           | Click handler       |

### Vue Props

| Prop        | Type                                                | Default     | Description         |
| ----------- | --------------------------------------------------- | ----------- | ------------------- |
| `variant`   | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Card variant        |
| `padding`   | `'sm' \| 'md' \| 'lg'`                              | `'md'`      | Card padding        |
| `hoverable` | `boolean`                                           | `false`     | Enable hover effect |

### Vue Events

| Event    | Payload | Description      |
| -------- | ------- | ---------------- |
| `@click` | `Event` | Emitted on click |

### Blazor Parameters

| Parameter   | Type            | Default   | Description         |
| ----------- | --------------- | --------- | ------------------- |
| `Variant`   | `CardVariant`   | `Default` | Card variant        |
| `Padding`   | `CardPadding`   | `Medium`  | Card padding        |
| `Hoverable` | `bool`          | `false`   | Enable hover effect |
| `OnClick`   | `EventCallback` | -         | Click event         |

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
<Card>
  <CardHeader>
    <div className="flex items-center gap-4">
      <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">John Doe</h3>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p>Passionate about building great user experiences.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">
      View Profile
    </Button>
  </CardFooter>
</Card>
```

```vue [Vue]
<PtCard>
  <PtCardHeader>
    <div class="flex items-center gap-4">
      <img src="/avatar.jpg" class="w-12 h-12 rounded-full" />
      <div>
        <h3 class="font-semibold">John Doe</h3>
        <p class="text-sm text-gray-500">Software Engineer</p>
      </div>
    </div>
  </PtCardHeader>
  <PtCardContent>
    <p>Passionate about building great user experiences.</p>
  </PtCardContent>
  <PtCardFooter>
    <PtButton variant="outline" size="sm">View Profile</PtButton>
  </PtCardFooter>
</PtCard>
```

```razor [Blazor]
<PtCard>
    <PtCardHeader>
        <div class="flex items-center gap-4">
            <img src="/avatar.jpg" class="w-12 h-12 rounded-full" />
            <div>
                <h3 class="font-semibold">John Doe</h3>
                <p class="text-sm text-gray-500">Software Engineer</p>
            </div>
        </div>
    </PtCardHeader>
    <PtCardContent>
        <p>Passionate about building great user experiences.</p>
    </PtCardContent>
    <PtCardFooter>
        <PtButton Variant="ButtonVariant.Outline" Size="ButtonSize.Small">
            View Profile
        </PtButton>
    </PtCardFooter>
</PtCard>
```

:::

### Statistics Card

::: code-group

```tsx [React]
<Card variant="filled">
  <CardContent>
    <p className="text-sm text-gray-500 mb-1">Total Users</p>
    <h2 className="text-3xl font-bold">12,543</h2>
    <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
  </CardContent>
</Card>
```

```vue [Vue]
<PtCard variant="filled">
  <PtCardContent>
    <p class="text-sm text-gray-500 mb-1">Total Users</p>
    <h2 class="text-3xl font-bold">12,543</h2>
    <p class="text-sm text-green-600 mt-2">↑ 12% from last month</p>
  </PtCardContent>
</PtCard>
```

```razor [Blazor]
<PtCard Variant="CardVariant.Filled">
    <PtCardContent>
        <p class="text-sm text-gray-500 mb-1">Total Users</p>
        <h2 class="text-3xl font-bold">12,543</h2>
        <p class="text-sm text-green-600 mt-2">↑ 12% from last month</p>
    </PtCardContent>
</PtCard>
```

:::
