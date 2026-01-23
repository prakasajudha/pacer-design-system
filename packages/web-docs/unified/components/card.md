<ComponentHero title="Card" description="Cards contain content and actions about a single subject." />

<PageTabs :tabs="['Guideline', 'Implementation']" default-tab="Guideline">

<template #Guideline>

## Anatomy

The Card component consists of several key elements:

- **Header** (optional): Top section of the card, typically containing title or key information.
- **Content**: Main body of the card containing the primary information.
- **Footer** (optional): Bottom section of the card, typically containing actions or additional information.
- **Container**: The card wrapper that provides structure, spacing, and visual styling.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Card Anatomy Diagram" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Card Structure Diagram" />
  </div>
</div>

## Variants

Card supports multiple variants: default, elevated, and outlined. Each variant serves different visual hierarchy needs.

<div class="badge-image-grid">
  <div class="badge-image-item">
    <ImagePlaceholder label="Card Variants Diagram" />
  </div>
  <div class="badge-image-item">
    <ImagePlaceholder label="Card Usage Diagram" />
  </div>
</div>

## Layout and Spacing

The layout and spacing of the card are crucial for its visual consistency and usability.

- **Border Radius**: `0.5rem` (8px) for all variants
- **Padding**: `1.5rem` (24px) default, with options for `none`, `sm` (16px), `md` (24px), `lg` (32px)
- **Border**: `1px solid #E5E7EB` for default and outlined variants
- **Shadow**: `0 1px 3px rgba(0,0,0,0.1)` for default, `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` for elevated
- **Header/Footer Spacing**: `1rem` (16px) padding with `1px solid #E5E7EB` border separator

<DoDontGrid>
  <DoDontItem type="do">
    <div class="do-dont-example">
      <PtCard>
        <h3 class="font-semibold mb-2">Card Title</h3>
        <p class="text-sm">Clear, focused content that communicates a single concept or action.</p>
      </PtCard>
    </div>
    <p class="do-dont-text">• Use cards to group related content and actions about a single subject.</p>
  </DoDontItem>
  <DoDontItem type="dont">
    <div class="do-dont-example">
      <PtCard>
        <h3 class="font-semibold mb-2">Card Title</h3>
        <p class="text-sm">Too much information and multiple unrelated concepts crammed into a single card making it hard to scan and understand.</p>
        <p class="text-sm">Additional paragraphs of text that should be in separate cards or sections.</p>
      </PtCard>
    </div>
    <p class="do-dont-text">• Avoid overcrowding cards with too much information or multiple unrelated concepts.</p>
  </DoDontItem>
</DoDontGrid>

</template>

<template #Implementation>

## Visual Preview

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtCard>
      <p>Default card with border and shadow</p>
    </PtCard>
    <PtCard variant="elevated">
      <p>Elevated card with larger shadow</p>
    </PtCard>
    <PtCard variant="outlined">
      <p>Outlined card without shadow</p>
    </PtCard>
  </div>

<template #react>

```tsx
import { Card } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Card>Default card with border and shadow</Card>
      <Card variant="elevated">Elevated card with larger shadow</Card>
      <Card variant="outlined">Outlined card without shadow</Card>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCard } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtCard>Default card with border and shadow</PtCard>
    <PtCard variant="elevated">Elevated card with larger shadow</PtCard>
    <PtCard variant="outlined">Outlined card without shadow</PtCard>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtCard>Default card with border and shadow</PtCard>
    <PtCard Variant="CardVariant.Elevated">Elevated card with larger shadow</PtCard>
    <PtCard Variant="CardVariant.Outlined">Outlined card without shadow</PtCard>
</div>
```

</template>
</ComponentDemo>

## Variants

### Default

Standard card with border and subtle shadow.

### Elevated

Card with more prominent shadow for higher visual hierarchy.

### Outlined

Card with border, no shadow for a cleaner, minimal look.

## Card Sections

Card component supports `header` and `footer` props for structured content.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
    <PtCard :header="'<h3>Card Title</h3>'">
      <p>Card content here</p>
    </PtCard>
    <PtCard :footer="'<PtButton>Action</PtButton>'">
      <p>Card content here</p>
    </PtCard>
  </div>

<template #react>

```tsx
import { Card, Button } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Card header={<h3>Card Title</h3>}>
        <p>Card content here</p>
      </Card>
      <Card footer={<Button>Action</Button>}>
        <p>Card content here</p>
      </Card>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCard, PtButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtCard>
      <template #header>
        <h3>Card Title</h3>
      </template>
      <p>Card content here</p>
    </PtCard>
    <PtCard>
      <p>Card content here</p>
      <template #footer>
        <PtButton>Action</PtButton>
      </template>
    </PtCard>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtCard>
        <Header>
            <h3>Card Title</h3>
        </Header>
        <p>Card content here</p>
    </PtCard>
    <PtCard>
        <p>Card content here</p>
        <Footer>
            <PtButton>Action</PtButton>
        </Footer>
    </PtCard>
</div>
```

</template>
</ComponentDemo>

## Padding Sizes

Card supports different padding sizes for content area.

<ComponentDemo>
  <div class="flex gap-4 flex-wrap">
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
  </div>

<template #react>

```tsx
import { Card } from '@pacer-ui/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <Card padding="none">No padding</Card>
      <Card padding="sm">Small padding (16px)</Card>
      <Card padding="md">Medium padding (24px)</Card>
      <Card padding="lg">Large padding (32px)</Card>
    </div>
  );
}
```

</template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCard } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex gap-4">
    <PtCard padding="none">No padding</PtCard>
    <PtCard padding="sm">Small padding (16px)</PtCard>
    <PtCard padding="md">Medium padding (24px)</PtCard>
    <PtCard padding="lg">Large padding (32px)</PtCard>
  </div>
</template>
```

</template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3">
    <PtCard Padding="CardPadding.None">No padding</PtCard>
    <PtCard Padding="CardPadding.Small">Small padding (16px)</PtCard>
    <PtCard Padding="CardPadding.Medium">Medium padding (24px)</PtCard>
    <PtCard Padding="CardPadding.Large">Large padding (32px)</PtCard>
</div>
```

</template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                    |
| ----------- | ------------------------------------------------------------------ | ----------- | ------------------------------ |
| `variant`   | `'default' \| 'outlined' \| 'elevated'`                           | `'default'` | Card variant                   |
| `padding`   | `'none' \| 'sm' \| 'md' \| 'lg'`                                  | `'md'`      | Card padding                   |
| `header`    | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `undefined` | Header content (top section)   |
| `footer`    | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `undefined` | Footer content (bottom section) |
| `children`  | `React.ReactNode` (React) / `slot` (Vue) / `RenderFragment` (Blazor) | `undefined` | Main card content              |
| `className` (React) / `class` (Vue) / `class` (Blazor) | `string` | `undefined` | Custom className untuk override styling |
| `style`     | `React.CSSProperties` (React) / `Record<string, string>` (Vue) / `string` (Blazor) | `undefined` | Custom style untuk override styling |
| `onClick`   | `(event: React.MouseEvent) => void` (React) / `@click` (Vue) / `OnClick` (Blazor) | `undefined` | Click handler                  |

### Notes

- Header and footer sections have automatic spacing and border separators
- Cards can be made interactive by adding click handlers
- All variants maintain consistent border radius of 8px

## Design Tokens

- **Border Radius**: `0.5rem` (8px)
- **Background**: `#FFFFFF`
- **Border**: `1px solid #E5E7EB`
- **Shadow (Default)**: `0 1px 3px rgba(0,0,0,0.1)`
- **Shadow (Elevated)**: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`
- **Padding (Default)**: `1.5rem` (24px)
- **Padding (Small)**: `1rem` (16px)
- **Padding (Large)**: `2rem` (32px)
- **Header/Footer Padding**: `1rem` (16px)
- **Header/Footer Border**: `1px solid #E5E7EB`

</template>

</PageTabs>
