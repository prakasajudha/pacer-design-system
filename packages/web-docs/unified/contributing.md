# Contributing: Add Components & Styles

Panduan ini menjelaskan cara:

- Menambahkan **komponen baru** (React + Vue) beserta Storybook + docs
- Menambahkan / mengubah **warna** seperti `brand-500` (design tokens + Tailwind preset)
- Menambahkan **styling baru** (utility Tailwind, CSS variables seperti `--primary`)

---

## Quick Checklist (high level)

- **Component**: buat komponen (React/Vue) → export dari `src/index.ts` → tambah Storybook story → tambah docs page
- **Token**: edit `packages/design-system/tokens/src/index.ts` → build tokens → pastikan Tailwind preset memetakan token → build CSS (React/Vue)
- **Verify**: jalankan `pnpm run dev` dan cek Storybook (React `:6006`, Vue `:6007`)

---

## 1) Add a new component (React + Vue)

### A. Decide naming + API

- **React**: `ComponentName` (contoh: `Badge`, `Alert`)
- **Vue**: prefix `Pt` (contoh: `PtBadge`, `PtAlert`)
- Tentukan:
  - props + defaults
  - variants (contoh: `variant: 'primary' | 'secondary'`)
  - states (hover/focus/disabled/loading)
  - a11y (aria, keyboard, focus ring)

### B. React: create component + export

1. Buat file:
   - `packages/design-system/react/src/components/<ComponentName>.tsx`
2. Pastikan styling pakai **Tailwind classes** (contoh `bg-brand-500`, `text-base-white`), dan gunakan helper `cn` bila tersedia.
3. Export dari:
   - `packages/design-system/react/src/index.ts`

### C. Vue: create component + export

1. Buat file:
   - `packages/design-system/vue/src/components/Pt<ComponentName>.vue`
2. Gunakan:
   - `<script setup lang="ts">`
   - props typed
   - Tailwind classes untuk styling
3. Export dari:
   - `packages/design-system/vue/src/index.ts`

### D. Add Storybook stories

- React story:
  - `packages/storybook/react/src/stories/<ComponentName>.stories.tsx`
- Vue story:
  - `packages/storybook/vue/src/stories/<ComponentName>.stories.ts`

Pastikan story mencakup:

- variants
- sizes
- states (disabled/loading)
- contoh penggunaan realistis

### E. Add docs page (VitePress)

1. Buat page baru di:
   - `packages/web-docs/unified/components/<component-name>-new.md`
2. Copy format dari `button-new.md` / `card-new.md` / `input-new.md`
3. Tambahkan ke sidebar di:
   - `packages/web-docs/unified/.vitepress/config.ts`

---

## 2) Add / change colors like `brand-500`

### A. Source of truth: `@pacer-ui/tokens`

Semua warna berasal dari:

- `packages/design-system/tokens/src/index.ts` → `export const colors`

Contoh `brand` scale:

- `colors.brand.500` → dipakai sebagai `brand-500` di Tailwind (melalui preset)

### B. Change an existing shade

1. Edit nilai hex di:
   - `packages/design-system/tokens/src/index.ts`
   - contoh: `colors.brand[500] = '#0156C6'`
2. Build tokens:

```bash
pnpm --filter @pacer-ui/tokens build
```

3. Build Tailwind preset:

```bash
pnpm --filter @pacer-ui/tailwind-preset build
```

4. Rebuild CSS untuk package UI:

```bash
pnpm --filter @pacer-ui/react build:css
pnpm --filter @pacer-ui/vue build:css
```

5. Restart / reload Storybook.

### C. Add a NEW color family (example: `fuel-500`)

1. Tambahkan palette baru di tokens:
   - `packages/design-system/tokens/src/index.ts`

Misal:

```ts
export const colors = {
  // ...
  fuel: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
} as const;
```

2. Expose ke Tailwind preset:
   - `packages/design-system/tailwind/src/index.ts`
   - tambahkan mapping:
     - `fuel: tokens.colors.fuel`

3. Build tokens + preset + CSS (sama seperti langkah sebelumnya).

4. Sekarang kamu bisa pakai utility:

- `bg-fuel-500`
- `text-fuel-700`
- `ring-fuel-200`

---

## 3) Add new “semantic” CSS variable colors (example: `bg-primary`)

Kelas seperti `bg-primary` (HSL) berasal dari kombinasi:

- CSS variables di `src/styles.css` (React/Vue)
- Tailwind `theme.extend.colors` di `packages/design-system/*/tailwind.config.js`

### A. Add CSS variables

Edit:

- `packages/design-system/react/src/styles.css`
- `packages/design-system/vue/src/styles.css`

Tambahkan variable baru di `:root` dan `.dark` jika perlu.

### B. Map variables to Tailwind colors

Edit:

- `packages/design-system/react/tailwind.config.js`
- `packages/design-system/vue/tailwind.config.js`

Tambah:

```js
colors: {
  // ...
  danger: {
    DEFAULT: 'hsl(var(--danger))',
    foreground: 'hsl(var(--danger-foreground))',
  },
}
```

### C. Rebuild CSS

```bash
pnpm --filter @pacer-ui/react build:css
pnpm --filter @pacer-ui/vue build:css
```

---

## 4) Add shared component classes (Tailwind plugin)

Kalau kamu mau nambah class global seperti `.badge`, `.chip`, `.alert`, lakukan di:

- `packages/design-system/tailwind/src/index.ts` pada bagian `addComponents({ ... })`

Build preset + rebuild CSS agar class baru ikut ter-generate.

---

## Common pitfalls

- **Storybook error `Failed to fetch dynamically imported module .../.storybook/preview.ts`**:
  - biasanya karena `dist/styles.css` hilang (belum dibuild / kehapus saat watch build)
  - pastikan jalankan:
    - `pnpm --filter @pacer-ui/react build:css`
    - `pnpm --filter @pacer-ui/vue build:css`
  - lalu reload Storybook

---

## Suggested workflow (recommended)

```bash
# 1) Update tokens / preset / components
# 2) Build CSS once (ensure dist/styles.css exists)
pnpm --filter @pacer-ui/react build:css
pnpm --filter @pacer-ui/vue build:css

# 3) Run everything
pnpm run dev
```


