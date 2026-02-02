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

#### [Toast](/components/toast)

Toast notification component untuk menampilkan notifikasi sementara di aplikasi.

- ✅ 5 variants (Neutral, Information, Success, Warning, Error)
- ✅ 8 positions (top-left, top, top-right, right, bottom-right, bottom, bottom-left, left)
- ✅ Title dan Description support
- ✅ Custom icon support
- ✅ Auto close dengan delay (configurable)
- ✅ Manual close button
- ✅ API seperti toastify (useToast composable)

#### [Input](/components/input)

Text input fields with validation states.

- ✅ Multiple input types (text, email, password, number, search)
- ✅ 3 sizes (Small, Medium, Large)
- ✅ Validation states (success, error, warning)
- ✅ Icon support

#### [Pin Input](/components/pin-input)

Input OTP/PIN per digit dengan opsi mask dan toggle show/hide.

- ✅ size (sm, md, lg)
- ✅ mask (true/false), position (left/right)
- ✅ title, description, error, errorMessage, disabled
- ✅ Jumlah digit konfigurasi (length, default 4)

#### [Textarea](/components/textarea)

Input teks multi-baris dengan title, description, dan error state.

- ✅ size (sm, md, lg), variant (border, background)
- ✅ title, description, error, errorMessage, disabled
- ✅ resize (none, vertical, horizontal, both)

### Layout Components

#### [Divider](/components/divider)

Pemisah visual horizontal atau vertikal antara konten.

- ✅ Orientation (horizontal, vertical)
- ✅ Variant (solid, dashed, dotted) & color palette
- ✅ Size (xs, sm, md, lg) & width/height (Tailwind)

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

#### [Radio](/components/radio)

Radio button untuk memilih satu opsi dari beberapa pilihan dalam sebuah grup. Styling sama seperti Checkbox, tapi berbentuk lingkaran dengan dot di tengah saat terpilih.

- ✅ disabled state
- ✅ label + description
- ✅ position left/right
- ✅ outlined variant
- ✅ error styling (text + outline)
- ✅ focus ring
- ✅ radio group support (semua radio dalam grup yang sama punya `name` yang sama)

### Navigation Components

#### [Accordion](/components/accordion)

Accordion untuk daftar item yang dapat dibuka/ditutup. Compound components: Accordion > AccordionItem > AccordionTrigger + AccordionContent.

- ✅ 2 variants (Line, Background)
- ✅ type single / multiple
- ✅ v-model / value + onValueChange
- ✅ Title #020617 (T2 14/medium), content #64748B (T2 14/normal)
- ✅ React, Vue, Blazor

#### [Breadcrumb](/components/breadcrumb)

Breadcrumb menampilkan jalur navigasi hierarkis.

- ✅ Items: title, icon?, link?, disabled?
- ✅ Separator kustom (default `>`)
- ✅ Type: ellipsis (`…`) atau dropdown (item ke-2 + chevron v)
- ✅ Collapse: item tengah di Popover saat items > 3
- ✅ Styling: link = brand/300, current = slate/500, separator = slate/500
- ✅ React, Vue, Blazor

#### [Tabs](/components/tabs)

Tabs untuk mengorganisir konten ke dalam beberapa panel yang dapat diakses melalui tab triggers. Menggunakan compound components pattern untuk fleksibilitas maksimal.

- ✅ 2 variants (Default, Line)
- ✅ stretch prop untuk mengisi seluruh width dengan grid layout
- ✅ disabled state
- ✅ icon support (kiri atau kanan)
- ✅ compound components pattern (Tabs, TabsList, TabsTrigger, TabsContent)

#### [Modal](/components/modal)

Modal untuk menampilkan dialog atau overlay yang membutuhkan interaksi user. Menggunakan compound components pattern untuk fleksibilitas maksimal.

- ✅ 3 sizes (Small: 400px, Medium: 500px, Large: 600px)
- ✅ closeOnOverlayClick dan closeOnEscape props
- ✅ Custom header/footer dengan children support
- ✅ Auto-render buttons di footer (onCancel/onConfirm)
- ✅ Body scroll lock
- ✅ compound components pattern (Modal, ModalHeader, ModalBody, ModalFooter)

#### [Tooltip](/components/tooltip)

Tooltip menampilkan informasi singkat saat trigger di-hover atau difokus.

- ✅ 2 variants (Primary/dark, Secondary/light)
- ✅ 8 posisi (top, top-left, top-right, right, bottom-right, bottom, bottom-left, left)
- ✅ 2 sizes (sm, md)
- ✅ Title & description: string, komponen/slot/ReactNode/RenderFragment
- ✅ Multiline: newline asli atau literal `\n` dari input
- ✅ Delay show/hide, dismiss dengan Escape (Vue & React), hoverable

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
| Accordion     |  ✅   | ✅  |   ✅   | Stable      |
| Breadcrumb    |  ✅   | ✅  |   ✅   | Stable      |
| Button        |  ✅   | ✅  |   ✅   | Stable      |
| IconButton    |  ✅   | ✅  |   ✅   | Stable      |
| Badge         |  ✅   | ✅  |   ✅   | Stable      |
| Skeleton      |  ✅   | ✅  |   ✅   | Stable      |
| Information   |  ✅   | ✅  |   ✅   | Stable      |
| Toast         |  ✅   | ✅  |   ✅   | Stable      |
| Input         |  ✅   | ✅  |   ✅   | Stable      |
| Pin Input     |  ✅   | ✅  |   ✅   | Stable      |
| Card          |  ✅   | ✅  |   ✅   | Stable      |
| Avatar        |  ✅   | ✅  |   ✅   | Stable      |
| Progress      |  ✅   | ✅  |   ✅   | Stable      |
| Switch        |  ✅   | ✅  |   ✅   | Stable      |
| Checkbox      |  ✅   | ✅  |   ✅   | Stable      |
| Radio         |  ✅   | ✅  |   ✅   | Stable      |
| Tabs          |  ✅   | ✅  |   ✅   | Stable      |
| Modal         |  ✅   | ✅  |   ✅   | Stable      |
| Tooltip       |  ✅   | ✅  |   ✅   | Stable      |
| Divider       |  ✅   | ✅  |   🚧   | Stable      |
| Select    |  🚧   | 🚧  |   🚧   | In Progress |
| Textarea  |  ✅   | ✅  |   ✅   | Stable      |
| Dropdown  |  🚧   | 🚧  |   🚧   | Planned     |

Legend:

- ✅ Stable and production-ready
- 🚧 In development
- 📋 Planned

## Getting Started

Ready to start building? Check out our [Getting Started](/getting-started) guide.

## Need Help?

- 📖 Browse [Framework-specific guides](/frameworks/react)
- 💬 Ask questions in [GitHub Discussions](https://github.com/prakasajudha/pacer-design-system/discussions)
- 🐛 Report issues in our [Issue Tracker](https://github.com/prakasajudha/pacer-design-system/issues)
