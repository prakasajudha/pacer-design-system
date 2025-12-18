# 🚀 PACER - Development Workflow Guide

## Realtime Development Flow

### Setup Awal (Sekali Aja)

```bash
# 1. Install dependencies
pnpm install

# 2. Build initial packages
pnpm build
```

---

## 🎨 Development Workflow - React

### Scenario: Develop Component React Dengan Realtime Preview

**Step 1: Start Dev Mode untuk React Components**

```bash
# Terminal 1: Watch mode untuk React library
pnpm --filter @pacer-ui/react dev
```

**Step 2: Start Storybook React**

```bash
# Terminal 2: Storybook untuk live preview
pnpm storybook:react
# Akan jalan di http://localhost:6006
```

**Step 3: (Optional) Start Web Docs**

```bash
# Terminal 3: Documentation site
pnpm docs:react-vue
# Akan jalan di http://localhost:5173
```

### Daily Workflow React:

```
┌─────────────────────────────────────────────┐
│  Terminal 1: pnpm --filter ... react dev   │  ← Auto rebuild saat file berubah
└─────────────────────────────────────────────┘
              ↓ (realtime)
┌─────────────────────────────────────────────┐
│  Terminal 2: pnpm storybook:react          │  ← Live preview components
│  Browser: http://localhost:6006            │  ← Hot reload otomatis
└─────────────────────────────────────────────┘

Your workflow:
1. Edit file di packages/design-system/react/src/components/ui/button.tsx
2. File auto-rebuild (Terminal 1)
3. Storybook auto-reload (Terminal 2)
4. Lihat perubahan instant di browser! 🎉
```

### Menambah Component Baru (React):

```bash
# 1. Add dari shadcn
cd packages/design-system/react
npx shadcn@latest add select  # contoh: add select component

# 2. Customize component di src/components/ui/select.tsx
# Edit sesuai brand Pertamina

# 3. Export di src/index.ts
# export { Select } from './components/ui/select'

# 4. Buat story untuk Storybook
# File: packages/storybook/react/src/stories/Select.stories.tsx
```

**Template Story:**

```tsx
// packages/storybook/react/src/stories/Select.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@pacer-ui/react';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props
  },
};
```

---

## 💚 Development Workflow - Vue

### Scenario: Develop Component Vue Dengan Realtime Preview

**Step 1: Start Dev Mode untuk Vue Components**

```bash
# Terminal 1: Watch mode untuk Vue library
pnpm --filter @pertamina/design-system-vue dev
```

**Step 2: Start Storybook Vue**

```bash
# Terminal 2: Storybook untuk live preview
pnpm storybook:vue
# Akan jalan di http://localhost:6007
```

**Step 3: (Optional) Start Web Docs**

```bash
# Terminal 3: Documentation site
pnpm docs:react-vue
# Akan jalan di http://localhost:5173
```

### Daily Workflow Vue:

```
┌─────────────────────────────────────────────┐
│  Terminal 1: pnpm --filter ... vue dev     │  ← Auto rebuild saat file berubah
└─────────────────────────────────────────────┘
              ↓ (realtime)
┌─────────────────────────────────────────────┐
│  Terminal 2: pnpm storybook:vue            │  ← Live preview components
│  Browser: http://localhost:6007            │  ← Hot reload otomatis
└─────────────────────────────────────────────┘

Your workflow:
1. Edit file di packages/design-system/vue/src/components/ui/Button.vue
2. File auto-rebuild (Terminal 1)
3. Storybook auto-reload (Terminal 2)
4. Lihat perubahan instant di browser! 🎉
```

### Menambah Component Baru (Vue):

```bash
# 1. Add dari shadcn-vue
cd packages/design-system/vue
npx shadcn-vue@latest add select

# 2. Customize component di src/components/ui/Select.vue
# Edit sesuai brand Pertamina

# 3. Export di src/index.ts
# export { default as PtSelect } from './components/ui/Select.vue'

# 4. Buat story untuk Storybook
# File: packages/storybook/vue/src/stories/Select.stories.ts
```

---

## 🟣 Development Workflow - Blazor

### Scenario: Develop Blazor Component

**Step 1: Start CSS Watch Mode**

```bash
# Terminal 1: Watch Tailwind CSS
cd packages/design-system/blazor
pnpm run watch:css
```

**Step 2: Create Test Blazor App (jika belum ada)**

```bash
# Buat test app di folder lain
dotnet new blazorserver -n PacerTestApp
cd PacerTestApp

# Add reference ke local Blazor library
dotnet add reference "path/to/packages/design-system/blazor/Pertamina.DesignSystem.Blazor.csproj"

# Run test app
dotnet watch run
```

### Daily Workflow Blazor:

```
┌─────────────────────────────────────────────┐
│  Terminal 1: pnpm run watch:css            │  ← Auto rebuild CSS
└─────────────────────────────────────────────┘
              ↓ (realtime)
┌─────────────────────────────────────────────┐
│  Terminal 2: dotnet watch run              │  ← Hot reload Blazor app
│  Browser: https://localhost:5001          │  ← Live preview
└─────────────────────────────────────────────┘

Your workflow:
1. Edit file di packages/design-system/blazor/Components/Button/PtButton.razor
2. CSS auto-rebuild (Terminal 1)
3. Blazor hot reload (Terminal 2)
4. Lihat perubahan instant di browser! 🎉
```

---

## ⚡ Super Fast Workflow (All at Once)

### Jika develop React + Vue bersamaan:

```bash
# Terminal 1: Watch semua packages sekaligus
pnpm dev

# Terminal 2: Storybook React
pnpm storybook:react  # http://localhost:6006

# Terminal 3: Storybook Vue
pnpm storybook:vue    # http://localhost:6007

# Terminal 4: Web Docs
pnpm docs:react-vue   # http://localhost:5173
```

**Benefits:**

- ✅ Edit 1 file, lihat perubahan di 3 tempat sekaligus
- ✅ Component library auto-rebuild
- ✅ All Storybooks hot reload
- ✅ Documentation live preview

---

## 📝 Typical Daily Tasks

### Task 1: Bikin Button Component Baru

```bash
# Start dev environment
pnpm dev                    # Terminal 1
pnpm storybook:react        # Terminal 2

# Add component
cd packages/design-system/react
npx shadcn@latest add button

# Edit file:
# - src/components/ui/button.tsx (customize)
# - src/index.ts (export)

# Create story:
# - packages/storybook/react/src/stories/Button.stories.tsx

# Check di browser: http://localhost:6006
# Done! ✨
```

### Task 2: Update Design Tokens

```bash
# Start dev mode
pnpm dev

# Edit tokens:
# packages/design-system/tokens/src/index.ts

# Semua library (React/Vue/Blazor) otomatis rebuild
# All Storybooks otomatis reload
# Cek perubahan di semua components! 🎨
```

### Task 3: Update Existing Component

```bash
# Dev mode sudah running
pnpm dev (Terminal 1)
pnpm storybook:react (Terminal 2)

# Edit component:
# packages/design-system/react/src/components/ui/button.tsx

# Save file → Auto rebuild → Storybook reload
# Instant feedback! ⚡
```

---

## 🧪 Testing Changes

### Test di Aplikasi Lokal:

```bash
# Link package ke aplikasi test
cd packages/design-system/react
pnpm link --global

# Di aplikasi test Anda
pnpm link --global @pacer-ui/react

# Atau dengan path:
pnpm link ../path/to/design-system/packages/design-system/react
```

### Test Build Production:

```bash
# Build semua
pnpm build

# Check dist folders:
# - packages/design-system/react/dist/
# - packages/design-system/vue/dist/
```

---

## 🎯 Port Reference

| Service              | Port | URL                    |
| -------------------- | ---- | ---------------------- |
| Storybook React      | 6006 | http://localhost:6006  |
| Storybook Vue        | 6007 | http://localhost:6007  |
| Web Docs (React/Vue) | 5173 | http://localhost:5173  |
| Web Docs (Blazor)    | 5174 | http://localhost:5174  |
| Blazor Test App      | 5001 | https://localhost:5001 |

---

## 💡 Pro Tips

1. **Gunakan `pnpm dev` di Terminal 1** - Biarkan running selamanya
2. **Buka Storybook di browser berbeda** - Untuk quick comparison
3. **Use browser DevTools** - Inspect components realtime
4. **Hot reload FTW** - Save file = instant preview
5. **Commit sering** - Small, focused changes
6. **Test di real app** - Sebelum publish

---

## 🐛 Troubleshooting

### Storybook tidak update?

```bash
# Restart Storybook
Ctrl+C
pnpm storybook:react
```

### Build error?

```bash
# Clean & rebuild
pnpm clean
pnpm install
pnpm build
```

### Changes tidak keliatan?

```bash
# Hard refresh browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

---

**Happy Developing! 🚀**
