# 🚀 PACER - Setup & Development Guide

## 📋 Prerequisites

Pastikan sudah terinstall:

- ✅ **Node.js 18+** - [Download](https://nodejs.org/)
- ✅ **.NET 8 SDK** - [Download](https://dotnet.microsoft.com/download) (untuk Blazor)
- ✅ **Git** - [Download](https://git-scm.com/)
- ✅ **VS Code** - [Download](https://code.visualstudio.com/) (recommended)

## 🔧 Initial Setup (Hanya Sekali)

### 1. Install pnpm (Package Manager)

```bash
npm install -g pnpm
```

Verifikasi instalasi:

```bash
pnpm --version  # Harus 8.0.0+
```

### 2. Clone & Install Dependencies

```bash
# Clone repository (jika dari git)
git clone <your-repo-url>
cd "Design System"

# Install semua dependencies
pnpm install
```

**Catatan:** `pnpm install` akan:

- Install dependencies untuk semua packages sekaligus
- Setup workspace links antar packages
- Memakan waktu beberapa menit di first run

### 3. Build Initial Packages

```bash
pnpm build
```

Ini akan build semua packages dalam urutan yang benar:

1. `@pertamina/tokens` → Design tokens
2. `@pertamina/tailwind-preset` → Tailwind config
3. `@pacer-ui/react` → React components
4. `@pertamina/design-system-vue` → Vue components
5. `Pertamina.DesignSystem.Blazor` → Blazor components

---

## 🎨 Workflow Development Sehari-hari

### Option A: Development Mode (Recommended)

**Start sekali, biarkan running:**

```bash
# Di root folder
pnpm dev
```

**Apa yang terjadi:**

- ✅ Watch mode untuk semua packages
- ✅ Auto-rebuild saat file berubah
- ✅ Hot reload support
- ✅ Bisa edit React/Vue/tokens secara bersamaan

**Workflow:**

1. Buka VSCode di root folder
2. Run `pnpm dev` di integrated terminal
3. Edit files di `packages/design-system/*/src/`
4. Changes auto-rebuild
5. Test perubahan di aplikasi/storybook Anda

### Option B: Specific Package Development

```bash
# React only
pnpm --filter @pacer-ui/react dev

# Vue only
pnpm --filter @pertamina/design-system-vue dev

# Tokens only
pnpm --filter @pertamina/tokens dev
```

---

## 📦 Menambah Components dari Shadcn

### React Components

```bash
cd packages/design-system/react

# Add individual component
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add select
npx shadcn@latest add dropdown-menu

# Add multiple sekaligus
npx shadcn@latest add button input card dialog select
```

### Vue Components

```bash
cd packages/design-system/vue

# Add individual component
npx shadcn-vue@latest add button
npx shadcn-vue@latest add input
npx shadcn-vue@latest add card
npx shadcn-vue@latest add dialog
npx shadcn-vue@latest add select

# Add multiple sekaligus
npx shadcn-vue@latest add button input card dialog select
```

**Setelah add component:**

1. Component muncul di `src/components/ui/`
2. Customize sesuai design Pertamina
3. Export di `src/index.ts`
4. Build: `pnpm build`

---

## 🎯 Typical Daily Tasks

### 1. Menambah Component Baru

```bash
# Step 1: Add dari shadcn (React)
cd packages/design-system/react
npx shadcn@latest add [component-name]

# Step 2: Customize component di src/components/ui/
# Edit warna, spacing, behavior sesuai brand Pertamina

# Step 3: Export di src/index.ts
# export { Button } from './components/ui/button'

# Step 4: Test & build
pnpm build
```

### 2. Edit Existing Component

```bash
# Start dev mode
pnpm dev

# Edit file di:
# - packages/design-system/react/src/components/ui/button.tsx
# - packages/design-system/vue/src/components/ui/Button.vue

# Auto-rebuild akan jalan
# Test perubahan di aplikasi Anda
```

### 3. Update Design Tokens

```bash
# Edit tokens
# File: packages/design-system/tokens/src/index.ts

# Akan auto-rebuild jika dev mode running
# Atau manual: pnpm --filter @pertamina/tokens build

# Semua library (React/Vue/Blazor) otomatis dapat update
```

### 4. Update Tailwind Config

```bash
# Edit preset
# File: packages/design-system/tailwind/src/index.ts

# Build
pnpm --filter @pertamina/tailwind-preset build
```

### 5. Testing Perubahan Lokal di Aplikasi

```bash
# Di design system
cd packages/design-system/react
pnpm link --global

# Di aplikasi test Anda
pnpm link --global @pacer-ui/react

# Atau gunakan pnpm link dengan path
pnpm link <path-to-design-system>/packages/design-system/react
```

---

## 🧪 Testing & Quality

```bash
# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm build  # TypeScript compile akan error jika ada issue
```

---

## 🏗️ Building for Production

```bash
# Build semua packages
pnpm build

# Build specific package
pnpm --filter @pacer-ui/react build
pnpm --filter @pertamina/design-system-vue build
```

**Output:**

- React: `packages/design-system/react/dist/`
- Vue: `packages/design-system/vue/dist/`
- Blazor: `packages/design-system/blazor/bin/Release/`

---

## 🔄 Publishing Packages

```bash
# Create changeset
pnpm changeset

# Update versions
pnpm version:bump

# Build & publish
pnpm release
```

---

## 🐛 Troubleshooting

### Dependency Issues

```bash
# Clean install
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

### Build Errors

```bash
# Build in order
pnpm --filter @pertamina/tokens build
pnpm --filter @pertamina/tailwind-preset build
pnpm --filter @pacer-ui/react build
pnpm --filter @pertamina/design-system-vue build
```

### Blazor CSS Not Building

```bash
cd packages/design-system/blazor
pnpm run build:css
# atau watch mode:
pnpm run watch:css
```

---

## 📁 Struktur Development

```
packages/design-system/
├── react/src/
│   ├── components/ui/      # Shadcn components (edit di sini)
│   ├── lib/utils.ts        # Utility functions
│   ├── styles.css          # CSS variables & Tailwind
│   └── index.ts            # Exports
│
├── vue/src/
│   ├── components/ui/      # Shadcn components (edit di sini)
│   ├── lib/utils.ts        # Utility functions
│   ├── styles.css          # CSS variables & Tailwind
│   └── index.ts            # Exports
│
├── blazor/
│   ├── Components/         # Razor components
│   ├── styles/input.css    # Tailwind source
│   └── wwwroot/css/        # Compiled CSS
│
├── tokens/src/
│   └── index.ts            # Design tokens (colors, spacing, etc)
│
└── tailwind/src/
    └── index.ts            # Shared Tailwind preset
```

---

## 💡 Tips

1. **Selalu gunakan `pnpm dev`** saat development untuk auto-rebuild
2. **Test di aplikasi real** sebelum commit
3. **Keep components simple** - jangan over-engineer
4. **Document changes** di CHANGELOG.md
5. **Follow naming convention** - gunakan Pt prefix (PtButton, PtInput)
6. **Commit often** - small, focused commits

---

## 📚 Resources

- **Shadcn/ui**: https://ui.shadcn.com/
- **Shadcn Vue**: https://www.shadcn-vue.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Turborepo**: https://turbo.build/repo/docs

---

**Happy Coding! 🚀**
