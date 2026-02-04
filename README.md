# PACER — Pertamina Patra Niaga Components & Experience Resources

> Enterprise-grade design system untuk multi-platform: React, Vue, dan .NET Blazor

## 🚀 Quick Start

```bash
# Install
pnpm install

# Build
pnpm build

# Development (3 terminals)
pnpm dev                # Terminal 1: Auto rebuild
pnpm storybook:react    # Terminal 2: React preview (port 6006)
pnpm storybook:vue      # Terminal 3: Vue preview (port 6007)
```

**📖 Documentation:**

- **[QUICK_START.md](./QUICK_START.md)** - Mulai dalam 5 menit
- **[COMPLETE_GUIDE.md](./COMPLETE_GUIDE.md)** - Panduan lengkap (Install, Dev, Deploy, Publish)
- **[DEVELOPMENT_WORKFLOW.md](./DEVELOPMENT_WORKFLOW.md)** - Workflow development detail
- **[docs/SUPPORTED_VERSIONS.md](./docs/SUPPORTED_VERSIONS.md)** - Rekomendasi versi React, Vue, .NET

## 🎯 Tujuan

Design system ini dibangun sebagai **produk** yang dapat di-install sebagai library, bukan sekadar kumpulan komponen. Dirancang untuk:

- ✅ Konsistensi UI/UX lintas aplikasi
- ✅ Developer productivity melalui library yang siap pakai
- ✅ Maintainability jangka panjang (5+ tahun)
- ✅ Compliance dengan standar enterprise/government
- ✅ Accessibility by default (WCAG 2.1 Level AA)

## 📦 Packages

### Design System Libraries (Installable)

Rekomendasi versi: **React 18.x** | **Vue 3.4.x** | **.NET 8** — detail di [docs/SUPPORTED_VERSIONS.md](./docs/SUPPORTED_VERSIONS.md).

```bash
# React (peer: react ^18, react-dom ^18)
npm install @pacer-ui/react

# Vue (peer: vue ^3)
npm install @pacer-ui/vue

# Blazor (.NET 8)
dotnet add package Pertamina.DesignSystem.Blazor
```

### Internal Packages

- `@pertamina/tokens` - Design tokens (framework-agnostic)
- `@pertamina/tailwind-preset` - Shared Tailwind configuration
- `@pertamina/shared` - Utilities, types, conventions

## 🏗️ Struktur Monorepo

```
pertamina-design-system/
├── 📦 packages/
│   ├── design-system/
│   │   ├── ⚛️  react/           → @pacer-ui/react (npm) ✓
│   │   ├── 💚 vue/              → @pertamina/design-system-vue (npm) ✓
│   │   ├── 🟣 blazor/           → Pertamina.DesignSystem.Blazor (NuGet) ✓
│   │   ├── 🎨 tokens/           → @pertamina/tokens (npm) ✓
│   │   ├── 🎯 tailwind/         → @pertamina/tailwind-preset (npm) ✓
│   │   └── 🔧 shared/           → Shared utilities (planned)
│   ├── 📚 storybook/            → Living documentation (planned)
│   │   ├── react/
│   │   ├── vue/
│   │   └── blazor/
│   ├── 📖 web-docs/             → Documentation sites (planned)
│   │   ├── react-vue/
│   │   └── blazor/
│   └── 🚀 templates/            → Starter templates (planned)
│       ├── react-vite/
│       ├── react-nextjs/
│       ├── vue-vite/
│       ├── vue-nuxt/
│       └── blazor-wasm/
├── 🛠️  tools/                   → Build tools & scripts
├── 📋 docs/                     → Documentation ✓
│   ├── ARCHITECTURE.md         → ADRs & technical decisions
│   ├── TECHNICAL_SPEC.md       → Complete specifications
│   ├── BUILD.md                → Build & deployment guide
│   ├── QUICK_START.md          → Quick start for all frameworks
│   ├── MIGRATION.md            → Version migration guides
│   └── FAQ.md                  → Frequently asked questions
├── 📄 CHANGELOG.md              → Version history ✓
├── 🤝 CONTRIBUTING.md           → Contribution guidelines ✓
├── 🔐 SECURITY.md               → Security policy ✓
├── 📜 LICENSE                   → Proprietary license ✓
└── 📝 IMPLEMENTATION_SUMMARY.md → Complete implementation summary ✓
```

**Legend:** ✓ = Implemented | Planned = Future work

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (untuk React/Vue)
- pnpm 8+ (package manager)
- .NET 8 SDK (untuk Blazor)
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/prakasajudha/pacer-design-system.git
cd design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev
```

## 🎨 Design Tokens

Design tokens adalah single source of truth untuk semua nilai design:

- **Colors** - Primary, secondary, neutral, semantic
- **Spacing** - Consistent spacing scale (4px base)
- **Typography** - Font families, sizes, weights, line heights
- **Border Radius** - Corner radius variants
- **Shadows** - Elevation system
- **Motion** - Animation durations & easings

Tokens di-export dalam format:

- JSON (raw data)
- TypeScript (typed)
- CSS Custom Properties
- Tailwind Config

## 🎯 Tailwind Strategy

Semua library menggunakan Tailwind CSS sebagai foundation:

- **Shared preset** dari `@pertamina/tailwind-preset`
- **Design tokens** terintegrasi langsung
- **Theme switching** (light/dark) built-in
- **Blazor** menggunakan compiled CSS dari Tailwind

## 📚 Documentation

- **Storybook** - Living documentation komponen
  - Interactive playground
  - Props documentation
  - Accessibility notes
  - Do's & Don'ts
- **Web Docs** - Comprehensive guides
  - Getting started
  - Component usage
  - Patterns & best practices
  - Migration guides

## 🔧 Development

```bash
# Development mode (watch semua packages)
pnpm dev

# Build production
pnpm build

# Run tests
pnpm test

# Lint & format
pnpm lint
pnpm format

# Storybook
pnpm storybook:react
pnpm storybook:vue
pnpm storybook:blazor
```

## 📦 Publishing

```bash
# Version bump (semantic versioning)
pnpm version:bump

# Publish ke npm (React & Vue)
pnpm publish:npm

# Publish ke NuGet (Blazor)
pnpm publish:nuget

# Generate changelog
pnpm changelog
```

## 🤝 Contributing

Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk guidelines kontribusi.

### Contribution Workflow

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Commit Convention

Menggunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: menambah fitur baru
fix: memperbaiki bug
docs: perubahan dokumentasi
style: perubahan format code (tidak mengubah logic)
refactor: refactoring code
test: menambah atau memperbaiki tests
chore: perubahan build process atau tools
```

## 📋 Governance

### Versioning

Menggunakan Semantic Versioning (semver):

- **Major** (1.0.0) - Breaking changes
- **Minor** (0.1.0) - New features (backward compatible)
- **Patch** (0.0.1) - Bug fixes

### Deprecation Policy

- Fitur deprecated diberi warning minimal 2 minor versions
- Migration guide disediakan untuk setiap breaking change
- Support minimal 6 bulan untuk deprecated features

### Release Cycle

- **Patch** - Sesuai kebutuhan (bug fixes)
- **Minor** - Setiap 2-4 minggu (new features)
- **Major** - Setiap 6-12 bulan (breaking changes)

## 📄 License

Copyright © 2025 PT Pertamina Patra Niaga. All rights reserved.

Proprietary and confidential. Unauthorized copying of this software is strictly prohibited.

## 🔗 Links

- [Documentation](https://design-system.pertamina.com)
- [Storybook](https://storybook.pertamina.com)
- [Changelog](./CHANGELOG.md)
- [Contributing](./CONTRIBUTING.md)
- [Issue Tracker](https://github.com/prakasajudha/pacer-design-system/issues)

## 📞 Support

- Email: design-system@pertamina.com
- Slack: #design-system
- Documentation: https://design-system.pertamina.com
