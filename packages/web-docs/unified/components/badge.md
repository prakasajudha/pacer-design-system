<BadgeHero title="Badge" description="Badges allow users to take actions and make choices with a single tap or click." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

The basic element of a badge is a label. Labels inform users of the action that will occur if they click the badge.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Anatomy Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Anatomy Diagram 2" />
  </div>
</div>

## Variants

Badge supports three variants: solid (default), secondary, and outline. Each variant can be combined with different colors and types.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Variants Diagram 1" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Variants Diagram 2" />
  </div>
</div>

## Layout

The basic element of a badge is a label. Labels inform users of the action that will occur if they click the badge.

<DoDontGrid>
  <DoDontItem type="do">
    <div class="do-dont-example">
      <PtBadge color="success">Done</PtBadge>
    </div>
    <p class="do-dont-text">• With short copy, it clearly indicates that the process has been completed and is easy to scan at a glance.</p>
  </DoDontItem>
  <DoDontItem type="dont">
    <div class="do-dont-example">
      <PtBadge color="danger">Document has been fully completed</PtBadge>
    </div>
    <p class="do-dont-text">• With long copy, badges have limited space and should not contain excessive information.</p>
  </DoDontItem>
</DoDontGrid>

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtBadge variant="solid" color="slate">Badge</PtBadge>
    <PtBadge variant="solid" color="primary">Primary</PtBadge>
    <PtBadge variant="solid" color="danger">Danger</PtBadge>
    <PtBadge variant="secondary" color="primary">Secondary</PtBadge>
    <PtBadge variant="outline" color="slate">Outline</PtBadge>
  </div>

<template #react>

```tsx
import { Badge } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Badge>Badge</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge variant="secondary" color="primary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtBadge } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtBadge>Badge</PtBadge>
    <PtBadge color="primary">Primary</PtBadge>
    <PtBadge color="danger">Danger</PtBadge>
    <PtBadge variant="secondary" color="primary">Secondary</PtBadge>
    <PtBadge variant="outline">Outline</PtBadge>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtBadge>Badge</PtBadge>
    <PtBadge Color="BadgeColor.Primary">Primary</PtBadge>
    <PtBadge Color="BadgeColor.Danger">Danger</PtBadge>
    <PtBadge Variant="BadgeVariant.Secondary" Color="BadgeColor.Primary">Secondary</PtBadge>
    <PtBadge Variant="BadgeVariant.Outline">Outline</PtBadge>
</div>
```

  </template>
</ComponentDemo>

## All Colors

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtBadge color="slate">Slate</PtBadge>
    <PtBadge color="primary">Primary</PtBadge>
    <PtBadge color="danger">Danger</PtBadge>
    <PtBadge color="warning">Warning</PtBadge>
    <PtBadge color="success">Success</PtBadge>
    <PtBadge color="purple">Purple</PtBadge>
    <PtBadge color="pink">Pink</PtBadge>
    <PtBadge color="orange">Orange</PtBadge>
  </div>

<template #react>

```tsx
import { Badge } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge color="slate">Slate</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="orange">Orange</Badge>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtBadge } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center flex-wrap">
    <PtBadge color="slate">Slate</PtBadge>
    <PtBadge color="primary">Primary</PtBadge>
    <PtBadge color="danger">Danger</PtBadge>
    <PtBadge color="warning">Warning</PtBadge>
    <PtBadge color="success">Success</PtBadge>
    <PtBadge color="purple">Purple</PtBadge>
    <PtBadge color="pink">Pink</PtBadge>
    <PtBadge color="orange">Orange</PtBadge>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center flex-wrap">
    <PtBadge Color="BadgeColor.Slate">Slate</PtBadge>
    <PtBadge Color="BadgeColor.Primary">Primary</PtBadge>
    <PtBadge Color="BadgeColor.Danger">Danger</PtBadge>
    <PtBadge Color="BadgeColor.Warning">Warning</PtBadge>
    <PtBadge Color="BadgeColor.Success">Success</PtBadge>
    <PtBadge Color="BadgeColor.Purple">Purple</PtBadge>
    <PtBadge Color="BadgeColor.Pink">Pink</PtBadge>
    <PtBadge Color="BadgeColor.Orange">Orange</PtBadge>
</div>
```

  </template>
</ComponentDemo>

## Types (Rounded vs Square)

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtBadge type="rounded" color="primary">Rounded</PtBadge>
    <PtBadge type="square" color="primary">Square</PtBadge>
  </div>

<template #react>

```tsx
import { Badge } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Badge type="rounded" color="primary">Rounded</Badge>
      <Badge type="square" color="primary">Square</Badge>
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtBadge } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtBadge type="rounded" color="primary">Rounded</PtBadge>
    <PtBadge type="square" color="primary">Square</PtBadge>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtBadge Type="BadgeType.Rounded" Color="BadgeColor.Primary">Rounded</PtBadge>
    <PtBadge Type="BadgeType.Square" Color="BadgeColor.Primary">Square</PtBadge>
</div>
```

  </template>
</ComponentDemo>

## Using Label Prop

<ComponentDemo>
  <div class="flex gap-4 items-center flex-wrap">
    <PtBadge label="New" color="primary" />
  </div>

<template #react>

```tsx
import { Badge } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Badge label="New" color="primary" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtBadge } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4 items-center">
    <PtBadge label="New" color="primary" />
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtBadge Label="New" Color="BadgeColor.Primary" />
</div>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `variant`   | `'solid' \| 'secondary' \| 'outline'`                              | `'solid'`   | Variant visual dari badge                 |
| `type`      | `'rounded' \| 'square'`                                            | `'rounded'` | Type badge (rounded atau square)          |
| `color`     | `'slate' \| 'primary' \| 'danger' \| 'warning' \| 'success' \| 'purple' \| 'pink' \| 'orange'` | `'slate'` | Color badge                               |
| `label`     | `string`                                                           | `undefined` | Label badge (jika ada, akan menggantikan children) |
| `children`  | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `undefined` | Konten badge (JSX/VNode)                  |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string` | `undefined` | Custom className untuk override styling   |
| `style`     | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor) | `undefined` | Custom style untuk override styling       |

### Notes

- Jika `label` prop disediakan, `label` akan digunakan dan `children` akan diabaikan
- Jika `label` tidak disediakan, `children` akan digunakan
- Badge menggunakan `text-xs` (12px) dengan `font-semibold` (600)
- Padding: `py-0.5 px-2.5` (2px vertical, 10px horizontal)
- Gap: `gap-0.5` (2px) antara elemen di dalam badge

## Design Tokens

- **Font Size**: `text-xs` (12px)
- **Font Weight**: `font-semibold` (600)
- **Padding**: `py-0.5 px-2.5` (2px vertical, 10px horizontal)
- **Gap**: `gap-0.5` (2px)
- **Border Radius**: 
  - Rounded: `rounded-full` (9999px)
  - Square: `rounded-[4px]` (4px)
- **Colors**: Sesuai dengan color prop yang dipilih

</template>

</PageTabs>
