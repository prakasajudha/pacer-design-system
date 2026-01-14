# Icon Button

Icon Button adalah tombol **ikon-only** (tanpa label teks) untuk aksi cepat (mis. close, search, settings).

## Guideline

### Icon Button Anatomy

Karena tidak ada label teks, Icon Button **wajib** punya label untuk screen reader:

- **React**: `aria-label`
- **Vue**: `ariaLabel`
- **Blazor**: `AriaLabel`

## Variants

- `primary`
- `secondary`
- `outline`
- `ghost`
- `link-primary`
- `link-secondary`

## Type (Tone)

- `tone="primary"` (default)
- `tone="destructive"` (danger)

## Sizes

Icon Button tersedia dalam 4 ukuran:

- `xss`: 20x20px
- `xs`: 28x28px
- `sm`: 32x32px
- `md`: 40x40px (default)

## Visual Preview

<ComponentDemo>
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <!-- Primary -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- Secondary -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; cursor: pointer; background: white; color: #016BF8; border: 1px solid #016BF8; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- Outline -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; cursor: pointer; border: 1px solid #cbd5e1; background: white; color: #0f172a; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- Ghost -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; cursor: pointer; border: none; background: transparent; color: #0f172a; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- Destructive -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #dc2626; color: white; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="secondary" />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="outline" />
      <IconButton aria-label="Add" icon={<PlusIcon />} variant="ghost" />
      <IconButton aria-label="Close" icon={<XIcon />} tone="destructive" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" variant="secondary">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" variant="outline">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" variant="ghost">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Close" tone="destructive">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </PtIconButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Variant="ButtonVariant.Secondary">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Variant="ButtonVariant.Outline">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Close" Tone="ButtonTone.Destructive">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## Size Variants

<ComponentDemo>
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <!-- xss -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; width: 1.25rem; height: 1.25rem; padding: 0.125rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 0.75rem; height: 0.75rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- xs -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; width: 1.75rem; height: 1.75rem; padding: 0.375rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 0.875rem; height: 0.875rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- sm -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; width: 2rem; height: 2rem; padding: 0.5rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
    
    <!-- md -->
    <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; border: none; cursor: pointer; background: #016BF8; color: white; width: 2.5rem; height: 2.5rem; padding: 0.75rem;">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1rem; height: 1rem;">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </button>
  </div>

<template #react>

```tsx
import { IconButton } from '@pacer-ui/react';

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <IconButton aria-label="Add" icon={<PlusIcon />} size="xss" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="xs" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="sm" />
      <IconButton aria-label="Add" icon={<PlusIcon />} size="md" />
    </div>
  );
}
```

  </template>

<template #vue>

```vue
<script setup lang="ts">
import { PtIconButton } from '@pacer-ui/vue';
</script>

<template>
  <div class="flex items-center gap-4">
    <PtIconButton aria-label="Add" size="xss">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" size="xs">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" size="sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>

    <PtIconButton aria-label="Add" size="md">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    </PtIconButton>
  </div>
</template>
```

  </template>

<template #blazor>

```razor
@using Pertamina.DesignSystem.Blazor

<div class="d-flex gap-3 align-items-center">
    <PtIconButton AriaLabel="Add" Size="ButtonSize.ExtraSmall">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="ButtonSize.XSmall">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="ButtonSize.Small">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>

    <PtIconButton AriaLabel="Add" Size="ButtonSize.Medium">
        <Icon>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </svg>
        </Icon>
    </PtIconButton>
</div>
```

  </template>
</ComponentDemo>

## API Reference

### Props

| Prop        | Type                                                               | Default     | Description                               |
| ----------- | ------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| `icon`      | `React.ReactNode` (React) / slot (Vue) / `RenderFragment` (Blazor) | `(required)` | Komponen ikon yang akan ditampilkan       |
| `aria-label` (React) / `ariaLabel` (Vue/Blazor) | `string`                               | `(required)` | Label yang wajib untuk pembaca layar (screen readers) |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link-primary' \| 'link-secondary'` | `'primary'` | Pilihan gaya visual tombol ikon           |
| `size`      | `'xss' \| 'xs' \| 'sm' \| 'md'`                                    | `'md'`      | Ukuran tombol ikon (20px / 28px / 32px / 40px) |
| `tone`      | `'primary' \| 'destructive'`                                       | `'primary'` | Type button: primary / destructive        |
| `disabled`  | `boolean`                                                          | `false`     | Nonaktifkan tombol ikon                   |
| `loading`   | `boolean`                                                          | `false`     | Tampilkan indikator loading dan nonaktifkan interaksi |
| `selected`  | `boolean`                                                          | `false`     | Terapkan gaya terpilih (selected styling) |
| `type`      | `'button' \| 'submit' \| 'reset'` (React/Blazor only)             | `'button'`  | Native HTML button type (jarang perlu diubah) |
| `destructive` | `boolean`                                                        | `false`     | **@deprecated** - gunakan `tone="destructive"` sebagai gantinya |

::: info Legacy Props
Props `destructive` deprecated. Gunakan `tone="destructive"` untuk styling destructive (merah).
:::

### Events

| Event                            | Description                  |
| -------------------------------- | ---------------------------- |
| `onClick` / `@click` / `OnClick` | Fired when icon button is clicked |

== Guideline

## Icon Button Anatomy

Icon buttons consist of:

- **Container**: The clickable square area (size varies: 20px / 28px / 32px / 40px)
- **Icon**: The visual symbol inside (typically 16x16px for most sizes)

## Icon Button Sizes

| Size | Dimensions | Icon Size | Usage |
|------|------------|-----------|-------|
| `xss` | 20x20px | 12px | Very compact UI, toolbar icons |
| `xs` | 28x28px | 14px | Compact UI, inline actions |
| `sm` | 32x32px | 16px | Standard inline actions |
| `md` | 40x40px | 16px | Primary actions, more prominent |

## Best Practices

### When to Use Icon Button

- **Do**: Use for common, well-recognized actions (close, search, menu, settings)
- **Do**: Use when space is limited
- **Do**: Always provide `aria-label` for accessibility
- **Don't**: Use for complex or ambiguous actions
- **Don't**: Use when a text label would be clearer

### Accessibility Requirements

1. **Always** provide descriptive `aria-label`
2. Use `aria-pressed` for toggle states (automatically handled by `selected` prop)
3. Ensure adequate touch target size (minimum 44x44px for mobile)
4. Test with screen readers

### Icon Guidelines

- Use consistent icon set throughout application
- Keep icons simple and recognizable
- Ensure icons have adequate color contrast (4.5:1 for normal text, 3:1 for large text)
- Icons should be **aria-hidden="true"** since `aria-label` provides the description

## Variants in Context

### Primary
Use for the main action in a context (e.g., "Add new item" button in a toolbar).

### Secondary
Use for important but not primary actions.

### Outline
Use for actions that need visual distinction without dominating the interface.

### Ghost
Use for subtle actions, often in crowded interfaces (e.g., table row actions).

### Link Primary / Link Secondary
Use for navigation-like actions that don't need button affordance.

## Tone: Destructive

Use `tone="destructive"` for delete, remove, or other destructive actions.

Always confirm destructive actions with a dialog or prompt.

:::
