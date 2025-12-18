# @pertamina/tailwind-preset

Shared Tailwind CSS preset untuk PACER (Pertamina Patra Niaga Components & Experience Resources).

## Installation

```bash
npm install @pertamina/tailwind-preset
# or
pnpm add @pertamina/tailwind-preset
```

## Usage

### Basic Setup

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pertamina/tailwind-preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
}
```

### With Custom Overrides

```js
// tailwind.config.js
module.exports = {
  presets: [require('@pertamina/tailwind-preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Override atau tambah custom values
      colors: {
        custom: '#123456',
      },
    },
  },
}
```

## What's Included

Preset ini mengintegrasikan semua design tokens:

### Colors
```jsx
<div className="bg-brand-primary-500 text-neutral-0">
  Pertamina Primary
</div>
```

### Spacing
```jsx
<div className="p-4 m-6 gap-3">
  4px-based spacing
</div>
```

### Typography
```jsx
<p className="font-sans text-base font-medium leading-normal">
  Typography tokens
</p>
```

### Border Radius
```jsx
<div className="rounded-lg">
  Border radius tokens
</div>
```

### Shadows
```jsx
<div className="shadow-lg">
  Shadow tokens
</div>
```

### Animations
```jsx
<div className="transition-all duration-fast ease-easeInOut">
  Motion tokens
</div>
```

## Component Classes

Preset juga menyediakan base component classes:

### Button
```jsx
<button className="btn bg-brand-primary-500 text-neutral-0">
  Button
</button>
```

### Input
```jsx
<input className="input" type="text" />
```

### Card
```jsx
<div className="card">
  Card content
</div>
```

## Dark Mode

Dark mode menggunakan class strategy:

```jsx
// Tambah class 'dark' di root element
<html className="dark">
  <body>
    <div className="bg-neutral-0 dark:bg-neutral-900">
      Content
    </div>
  </body>
</html>
```

## Blazor Integration

Untuk Blazor, compile Tailwind CSS ke static file:

```bash
# package.json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/styles.css -o ./wwwroot/css/styles.css --minify"
  }
}
```

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Philosophy

1. **Token-based** - Semua value dari design tokens
2. **Consistent** - Sama di React, Vue, dan Blazor
3. **Extensible** - Dapat di-override sesuai kebutuhan
4. **Type-safe** - Full TypeScript support
5. **Tree-shakeable** - Hanya CSS yang dipakai akan di-bundle

## Updating

Ketika design tokens di-update, rebuild preset:

```bash
pnpm build
```

Semua library yang depend ke preset ini akan otomatis menggunakan tokens terbaru.
