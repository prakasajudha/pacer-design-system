# Components

Explore our comprehensive collection of UI components available across React, Vue, and Blazor.

## Overview

All PACER components maintain **identical design, spacing, colors, and behavior** across all three frameworks. Choose your framework and get consistent results.

## Component Library

### Form Components

#### [Button](/components/button)

Interactive buttons for actions and navigation.

- ✅ 6 variants (Solid, Secondary, Outline, Ghost, Link Primary, Link Secondary)
- ✅ 2 sizes (Small, Medium)
- ✅ 2 colors (Primary, Danger)
- ✅ Loading and disabled states
- ✅ Selected/toggled state
- ✅ Left and right icon support

#### [IconButton](/components/icon-button)

Icon-only buttons for quick actions.

- ✅ 6 variants (Solid, Secondary, Outline, Ghost, Link Primary, Link Secondary)
- ✅ 4 sizes (xss, xs, sm, md)
- ✅ 2 colors (Primary, Danger)
- ✅ Loading and disabled states
- ✅ Selected/toggled state
- ✅ Required aria-label for accessibility

#### [Badge](/components/badge)

Status indicators and labels.

- ✅ 3 variants (Solid, Secondary, Outline)
- ✅ 2 types (Rounded, Square)
- ✅ 8 colors (Slate, Primary, Danger, Warning, Success, Purple, Pink, Orange)
- ✅ Label prop or children support

#### [Skeleton](/components/skeleton)

Loading placeholders with pulse animation.

- ✅ 2 variants (Square, Round)
- ✅ Customizable height and width (px, em, rem, %)
- ✅ Pulse animation

#### [Information](/components/information)

Information, warning, and notification messages.

- ✅ 5 variants (Info, Slate, Success, Warning, Danger)
- ✅ 3 sizes (Small, Medium, Large)
- ✅ Title and description support
- ✅ Custom icon support
- ✅ ReactNode/VNode/RenderFragment children support
- ✅ Icon customization (iconClassName, iconStyle)

#### [Input](/components/input)

Text input fields with validation states.

- ✅ Multiple input types (text, email, password, number, search)
- ✅ 3 sizes (Small, Medium, Large)
- ✅ Validation states (success, error, warning)
- ✅ Icon support

### Layout Components

#### [Card](/components/card)

Container for grouping related content.

- ✅ 4 variants (Default, Elevated, Outlined, Filled)
- ✅ Header, Content, Footer sections
- ✅ Interactive hover states
- ✅ Customizable padding

#### [Avatar](/components/avatar)

User profile pictures and initials with status indicators.

- ✅ 2 modes (Single, Group)
- ✅ 2 types (Circle, Square)
- ✅ 7 sizes (xxs, xs, sm, md, lg, xl, 2xl)
- ✅ 3 badge types (Online, Offline, Icon)
- ✅ Automatic initials generation
- ✅ Group mode with overlap and count badge

#### [Progress](/components/progress)

Progress indicator for completion status.

- ✅ value 0–100 (clamped)
- ✅ Custom track color (`bgColor`)
- ✅ Custom bar color (`color`)
- ✅ 4 sizes (xs, sm, md, lg)
- ✅ Smooth width animation on value change

#### [Switch](/components/switch)

Boolean toggle with label/description and optional outlined container.

- ✅ disabled state
- ✅ label + description
- ✅ position left/right
- ✅ outlined variant
- ✅ error styling (text + outline)

#### [Checkbox](/components/checkbox)

Checkbox untuk memilih satu atau lebih opsi dengan label dan optional description.

- ✅ disabled state
- ✅ label + description
- ✅ position left/right
- ✅ outlined variant
- ✅ error styling (text + outline)
- ✅ indeterminate state (intermediate)
- ✅ focus ring

## Design Principles

All components follow these principles:

### 🎨 Consistent Design

Same visual appearance across all frameworks using shared design tokens.

### ♿ Accessible

WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support.

### 📱 Responsive

Mobile-first design that works on all screen sizes.

### ⚡ Performant

Optimized for production with minimal bundle size.

### 🎯 Predictable

Same API patterns and behavior across all frameworks.

## Framework Comparison

| Feature              | React             | Vue             | Blazor                |
| -------------------- | ----------------- | --------------- | --------------------- |
| **Import**           | ES Modules        | ES Modules      | Razor Components      |
| **Styling**          | Tailwind CSS      | Tailwind CSS    | Tailwind CSS          |
| **Type Safety**      | TypeScript        | TypeScript      | C#                    |
| **Props/Parameters** | JSX Props         | Vue Props       | Razor Parameters      |
| **Events**           | onClick, onChange | @click, @change | OnClick, ValueChanged |
| **Two-way Binding**  | useState          | v-model         | @bind-Value           |

## Usage Patterns

### React Pattern

```tsx
import { Button, Input, Card } from '@pacer-ui/react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <Card>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => console.log(value)}>Submit</Button>
    </Card>
  );
}
```

### Vue Pattern

```vue
<script setup lang="ts">
import { PtButton, PtInput, PtCard } from '@pacer-ui/vue';
import { ref } from 'vue';

const value = ref('');
const handleSubmit = () => console.log(value.value);
</script>

<template>
  <PtCard>
    <PtInput v-model="value" />
    <PtButton @click="handleSubmit"> Submit </PtButton>
  </PtCard>
</template>
```

### Blazor Pattern

```razor
<PtCard>
    <PtInput @bind-Value="value" />
    <PtButton OnClick="HandleSubmit">
        Submit
    </PtButton>
</PtCard>

@code {
    private string value = "";

    private void HandleSubmit()
    {
        Console.WriteLine(value);
    }
}
```

## Design Tokens

All components use the same design tokens:

```css
/* Colors */
--primary: #00a19b;
--secondary: #6b7280;
--danger: #dc2626;
--success: #10b981;
--warning: #f59e0b;

/* Spacing */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */

/* Border Radius */
--radius-sm: 0.25rem; /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */

/* Typography */
--font-size-sm: 0.875rem; /* 14px */
--font-size-md: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
```

Learn more about [Design Tokens](/tokens).

## Component Status

| Component     | React | Vue | Blazor | Status      |
| ------------- | :---: | :-: | :----: | ----------- |
| Button        |  ✅   | ✅  |   ✅   | Stable      |
| IconButton    |  ✅   | ✅  |   ✅   | Stable      |
| Badge         |  ✅   | ✅  |   ✅   | Stable      |
| Skeleton      |  ✅   | ✅  |   ✅   | Stable      |
| Information   |  ✅   | ✅  |   ✅   | Stable      |
| Input         |  ✅   | ✅  |   ✅   | Stable      |
| Card          |  ✅   | ✅  |   ✅   | Stable      |
| Avatar        |  ✅   | ✅  |   ✅   | Stable      |
| Progress      |  ✅   | ✅  |   ✅   | Stable      |
| Switch        |  ✅   | ✅  |   ✅   | Stable      |
| Checkbox      |  ✅   | ✅  |   ✅   | Stable      |
| Select    |  🚧   | 🚧  |   🚧   | In Progress |
| Radio     |  🚧   | 🚧  |   🚧   | In Progress |
| Textarea  |  🚧   | 🚧  |   🚧   | Planned     |
| Modal     |  🚧   | 🚧  |   🚧   | Planned     |
| Dropdown  |  🚧   | 🚧  |   🚧   | Planned     |

Legend:

- ✅ Stable and production-ready
- 🚧 In development
- 📋 Planned

## Getting Started

Ready to start building? Check out our [Getting Started](/getting-started) guide.

## Need Help?

- 📖 Browse [Framework-specific guides](/frameworks/react)
- 💬 Ask questions in [GitHub Discussions](https://github.com/pertamina/design-system/discussions)
- 🐛 Report issues in our [Issue Tracker](https://github.com/pertamina/design-system/issues)
