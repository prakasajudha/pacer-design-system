# @pacer-ui/react

React component library untuk PACER (Pertamina Patra Niaga Components & Experience Resources).

## Installation

```bash
npm install @pacer-ui/react
# or
pnpm add @pacer-ui/react
```

## Setup

### 1. Import CSS

```tsx
// src/main.tsx atau src/index.tsx
import '@pacer-ui/react/styles.css';
```

### 2. Configure Tailwind (Optional)

Jika project menggunakan Tailwind:

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pertamina/tailwind-preset')],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@pacer-ui/react/dist/**/*.{js,mjs}'],
};
```

## Usage

### Button

```tsx
import { Button } from '@pacer-ui/react';

function App() {
  return (
    <>
      <Button variant="primary" size="md">
        Primary Button
      </Button>

      <Button variant="secondary" size="lg" loading>
        Loading...
      </Button>

      <Button variant="success" startIcon={<CheckIcon />} onClick={() => alert('Clicked!')}>
        Save
      </Button>
    </>
  );
}
```

**Props:**

- `variant` - 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost' | 'link'
- `size` - 'sm' | 'md' | 'lg'
- `fullWidth` - boolean
- `loading` - boolean
- `startIcon` / `endIcon` - React.ReactNode

### Input

```tsx
import { Input } from '@pacer-ui/react';

function LoginForm() {
  return (
    <>
      <Input
        label="Email"
        type="email"
        placeholder="nama@email.com"
        helperText="Masukkan email yang terdaftar"
      />

      <Input label="Password" type="password" error="Password harus minimal 8 karakter" />

      <Input startIcon={<SearchIcon />} placeholder="Cari..." />
    </>
  );
}
```

**Props:**

- `label` - string
- `error` - string
- `helperText` - string
- `startIcon` / `endIcon` - React.ReactNode
- `fullWidth` - boolean

### Card

```tsx
import { Card, Button } from '@pacer-ui/react';

function Dashboard() {
  return (
    <Card
      variant="elevated"
      padding="lg"
      header={<h3 className="text-xl font-bold">Dashboard</h3>}
      footer={<Button variant="primary">View Details</Button>}
    >
      <p>Card content goes here...</p>
    </Card>
  );
}
```

**Props:**

- `variant` - 'default' | 'outlined' | 'elevated'
- `padding` - 'none' | 'sm' | 'md' | 'lg'
- `header` / `footer` - React.ReactNode

## TypeScript

Library ini fully typed. Import types:

```tsx
import type { ButtonProps, InputProps, CardProps } from '@pacer-ui/react';
```

## Custom Styling

Semua component menerima `className` prop untuk custom styling:

```tsx
<Button className="my-custom-class">Custom Styled Button</Button>
```

## Utility Functions

### cn (classnames merger)

```tsx
import { cn } from '@pacer-ui/react';

const className = cn('base-class', condition && 'conditional-class', 'tailwind-class');
```

## Accessibility

Semua component sudah:

- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ ARIA attributes
- ✅ Focus management
- ✅ WCAG 2.1 Level AA compliant

## Best Practices

1. **Konsistensi** - Gunakan variant dan size yang konsisten
2. **Accessibility** - Selalu provide `label` untuk input
3. **Loading states** - Gunakan `loading` prop untuk async actions
4. **Error handling** - Display error messages dengan `error` prop
5. **Semantic HTML** - Component menggunakan semantic HTML tags

## Migration Guide

Dari library lain ke PACER:

```tsx
// Before (Material-UI)
<Button variant="contained" color="primary">
  Submit
</Button>

// After (Pertamina)
<Button variant="primary">
  Submit
</Button>
```

## Contributing

Lihat [CONTRIBUTING.md](../../../CONTRIBUTING.md) untuk guidelines.

## Support

- Documentation: https://design-system.pertamina.com
- Storybook: https://storybook.pertamina.com/react
- Issues: https://github.com/pertamina/design-system/issues
