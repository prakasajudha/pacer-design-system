# Card Component

Cards contain content and actions about a single subject.

## Basic Card

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px;">
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600 mb-4">
          This is a basic card component with a title, description, and action button.
        </p>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 h-10 px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  </template>

<template #react>

```tsx
import { Card } from '@pacer-ui/react';
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        <p>This is a basic card component with a title, description, and action button.</p>
      </Card.Content>
      <Card.Footer>
        <Button>Learn More</Button>
      </Card.Footer>
    </Card>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCard } from '@pacer-ui/vue';
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtCard>
    <template #header>
      <h3 class="text-lg font-semibold">Card Title</h3>
    </template>
    <template #content>
      <p>This is a basic card component with a title, description, and action button.</p>
    </template>
    <template #footer>
      <PtButton>Learn More</PtButton>
    </template>
  </PtCard>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtCard>
    <HeaderContent>
        <h3 class="text-lg font-semibold">Card Title</h3>
    </HeaderContent>
    <BodyContent>
        <p>This is a basic card component with a title, description, and action button.</p>
    </BodyContent>
    <FooterContent>
        <PtButton>Learn More</PtButton>
    </FooterContent>
</PtCard>
```

  </template>
</ComponentDemo>

## Card with Image

<ComponentDemo>
  <template #preview>
    <div style="max-width: 400px;">
      <div class="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div class="h-48 bg-gradient-to-br from-primary-500 to-primary-700"></div>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">Beautiful Landscape</h3>
          <p class="text-gray-600 mb-4">
            A stunning view of nature's beauty captured in this card.
          </p>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 h-10 px-4 py-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  </template>

<template #react>

```tsx
import { Card } from '@pacer-ui/react';
import { Button } from '@pacer-ui/react';

export default function App() {
  return (
    <Card>
      <Card.Image src="/images/landscape.jpg" alt="Beautiful Landscape" />
      <Card.Header>
        <Card.Title>Beautiful Landscape</Card.Title>
      </Card.Header>
      <Card.Content>
        <p>A stunning view of nature's beauty captured in this card.</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">View Details</Button>
      </Card.Footer>
    </Card>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtCard } from '@pacer-ui/vue';
import { PtButton } from '@pacer-ui/vue';
</script>

<template>
  <PtCard>
    <template #image>
      <img src="/images/landscape.jpg" alt="Beautiful Landscape" class="w-full h-48 object-cover" />
    </template>
    <template #header>
      <h3 class="text-lg font-semibold">Beautiful Landscape</h3>
    </template>
    <template #content>
      <p>A stunning view of nature's beauty captured in this card.</p>
    </template>
    <template #footer>
      <PtButton variant="outline">View Details</PtButton>
    </template>
  </PtCard>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<PtCard>
    <ImageContent>
        <img src="/images/landscape.jpg" alt="Beautiful Landscape" class="w-full h-48 object-cover" />
    </ImageContent>
    <HeaderContent>
        <h3 class="text-lg font-semibold">Beautiful Landscape</h3>
    </HeaderContent>
    <BodyContent>
        <p>A stunning view of nature's beauty captured in this card.</p>
    </BodyContent>
    <FooterContent>
        <PtButton Variant="ButtonVariant.Outline">View Details</PtButton>
    </FooterContent>
</PtCard>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                    | Default     | Description       |
| ----------- | --------------------------------------- | ----------- | ----------------- |
| `variant`   | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card visual style |
| `padding`   | `'none' \| 'sm' \| 'md' \| 'lg'`        | `'md'`      | Card padding size |
| `hoverable` | `boolean`                               | `false`     | Adds hover effect |

### Slots

| Slot                  | Description              |
| --------------------- | ------------------------ |
| `header`              | Card header content      |
| `content` / `default` | Main card content        |
| `footer`              | Card footer content      |
| `image`               | Image at the top of card |

## Design Tokens

- **Border Radius**: `--radius-lg` (8px)
- **Border Color**: `--color-gray-200`
- **Shadow**: `--shadow-sm`
- **Padding**: `--spacing-6` (24px)
