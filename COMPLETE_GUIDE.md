# 🚀 PACER - Complete Guide: Install, Develop, Deploy & Publish

## 📋 Table of Contents

1. [Initial Installation](#1-initial-installation)
2. [Daily Development Workflow](#2-daily-development-workflow)
3. [Realtime Multi-Framework Development](#3-realtime-multi-framework-development)
4. [Building & Bundling](#4-building--bundling)
5. [Publishing Packages](#5-publishing-packages)
6. [Deploying Storybook & Web Docs](#6-deploying-storybook--web-docs)
7. [Complete Package Distribution](#7-complete-package-distribution)

---

## 1. Initial Installation

### Prerequisites Check

```bash
# Verify Node.js version (must be 18+)
node --version

# Verify .NET SDK (for Blazor)
dotnet --version

# Install pnpm globally
npm install -g pnpm

# Verify pnpm
pnpm --version
```

### Clone & Install

```bash
# Clone repository (if from git)
git clone <your-repo-url>
cd "Design System"

# Install all dependencies (one command for entire monorepo)
pnpm install
```

**What happens:**

- ✅ Installs dependencies for ALL packages (React, Vue, Blazor, Storybook, Web Docs)
- ✅ Links workspace packages together
- ✅ Takes ~2-5 minutes

### Initial Build

```bash
# Build all packages in correct order
pnpm build
```

**Build order (automatic via Turbo):**

1. `@pacer-ui/tokens` → Design tokens
2. `@pacer-ui/tailwind-preset` → Tailwind config
3. `@pacer-ui/react` → React components
4. `@pacer-ui/vue` → Vue components
5. `Pertamina.DesignSystem.Blazor` → Blazor components

**Verify installation:**

```bash
# Check all packages built successfully
ls packages/design-system/react/dist
ls packages/design-system/vue/dist
ls packages/design-system/blazor/wwwroot/css
```

---

## 2. Daily Development Workflow

### Quick Start

```bash
# Option 1: Auto-rebuild all on change
pnpm dev

# Option 2: Build once
pnpm build
```

### Common Tasks

#### Task: Edit Design Tokens

```bash
# Start watch mode
pnpm dev

# Edit: packages/design-system/tokens/src/index.ts
# Auto-rebuild → All libraries (React/Vue/Blazor) get updates!
```

#### Task: Update Tailwind Config

```bash
# Edit: packages/design-system/tailwind/src/index.ts
# Save → Auto-rebuild → All frameworks updated
```

#### Task: Add New Component (React)

```bash
cd packages/design-system/react

# Add from shadcn
npx shadcn@latest add select

# Customize: src/components/ui/select.tsx
# Export: src/index.ts
export { Select } from './components/ui/select'

# Build
pnpm build
```

---

## 3. Realtime Multi-Framework Development

### 🎯 Scenario: Edit Button Component - See Changes in ALL Frameworks

**Setup (4 Terminals):**

```bash
# Terminal 1: Watch all component libraries
pnpm dev

# Terminal 2: Storybook React (http://localhost:6006)
pnpm storybook:react

# Terminal 3: Storybook Vue (http://localhost:6007)
pnpm storybook:vue

# Terminal 4: Web Docs (http://localhost:5173)
pnpm docs:react-vue
```

### Workflow Example:

**1. Update Design Token (affects ALL frameworks):**

```typescript
// Edit: packages/design-system/tokens/src/index.ts
export const colors = {
  primary: {
    500: '#FF5722', // Changed from #005BAA
  },
};
```

**Save → Auto happens:**

- ✅ Terminal 1: Tokens rebuild
- ✅ React library rebuilds (uses tokens)
- ✅ Vue library rebuilds (uses tokens)
- ✅ Storybook React reloads → Button now orange
- ✅ Storybook Vue reloads → Button now orange
- ✅ Web Docs reloads → All examples updated
- ⏱️ **Total time: ~2-3 seconds**

**2. Update React Component (React only):**

```tsx
// Edit: packages/design-system/react/src/components/ui/button.tsx
const buttonVariants = cva(
  'inline-flex items-center ... rounded-lg' // Changed from rounded-md
  // ...
);
```

**Save → Auto happens:**

- ✅ Terminal 1: React library rebuilds
- ✅ Terminal 2: Storybook React hot-reloads
- ⏱️ **Total time: ~1-2 seconds**

**3. Update Vue Component (Vue only):**

```vue
<!-- Edit: packages/design-system/vue/src/components/PtButton.vue -->
<template>
  <button :class="['btn', 'shadow-lg', buttonClasses]">
    <!-- Added shadow -->
    <slot />
  </button>
</template>
```

**Save → Auto happens:**

- ✅ Terminal 1: Vue library rebuilds
- ✅ Terminal 3: Storybook Vue hot-reloads
- ⏱️ **Total time: ~1-2 seconds**

**4. Update Blazor Component:**

```bash
# Terminal 5 (separate for Blazor):
cd packages/design-system/blazor

# Watch CSS
pnpm run watch:css

# Terminal 6: Run Blazor test app
dotnet watch run --project /path/to/your/test-app
```

```razor
<!-- Edit: packages/design-system/blazor/Components/Button/PtButton.razor -->
<button class="btn @VariantClass shadow-md">
    @ChildContent
</button>
```

**Save → Auto happens:**

- ✅ CSS rebuilds
- ✅ Blazor hot-reloads
- ⏱️ **Total time: ~1-2 seconds**

### 📊 Visual Flow

```
packages/design-system/tokens/src/index.ts
                ↓ (save)
         [Auto Rebuild Tokens]
                ↓
    ┌───────────┼───────────┐
    ↓           ↓           ↓
  React       Vue        Blazor
  rebuilds    rebuilds   rebuilds
    ↓           ↓           ↓
Storybook   Storybook   Test App
hot-reload  hot-reload  hot-reload
    ↓           ↓           ↓
Browser     Browser     Browser
updates     updates     updates

⏱️ Total: 2-3 seconds
```

---

## 4. Building & Bundling

### Build All Packages

```bash
# Production build
pnpm build

# Or specific package
pnpm --filter @pacer-ui/react build
pnpm --filter @pacer-ui/vue build
```

### Build Output

**React (`packages/design-system/react/dist/`):**

```
dist/
├── index.js          # CommonJS
├── index.mjs         # ES Module
├── index.d.ts        # TypeScript types
└── styles.css        # Compiled styles
```

**Vue (`packages/design-system/vue/dist/`):**

```
dist/
├── index.js
├── index.mjs
├── index.d.ts
└── styles.css
```

**Blazor (`packages/design-system/blazor/bin/Release/`):**

```
bin/Release/net8.0/
├── Pertamina.DesignSystem.Blazor.dll
└── wwwroot/css/
    └── pacer-design-system.css
```

### Verify Build

```bash
# Check bundle sizes
du -sh packages/design-system/*/dist

# Test imports
node -e "console.log(require('./packages/design-system/react/dist/index.js'))"
```

---

## 5. Publishing Packages

### Setup NPM Authentication

```bash
# Login to npm
npm login

# Or use auth token
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
```

### Create Changeset (Version Management)

```bash
# Create changeset (describes what changed)
pnpm changeset

# Follow prompts:
# → Which packages changed? (select: @pacer-ui/react, @pacer-ui/vue, etc.)
# → What type of change? (patch/minor/major)
# → Summary: "Add Select component"
```

**Example:**

```bash
$ pnpm changeset

🦋  Which packages would you like to include?
  ◉ @pacer-ui/react
  ◉ @pacer-ui/vue
  ◯ @pacer-ui/tokens

🦋  What kind of change is this for @pacer-ui/react?
  ○ patch (1.0.0 → 1.0.1)
  ● minor (1.0.0 → 1.1.0)
  ○ major (1.0.0 → 2.0.0)

🦋  Summary: Added Select component with full accessibility support
```

### Version Bump

```bash
# Apply changesets → Update package.json versions
pnpm version:bump

# This updates:
# - package.json versions
# - CHANGELOG.md
# - Creates git tags
```

### Build Before Publish

```bash
# Always build before publishing
pnpm build

# Verify builds
ls packages/design-system/react/dist
ls packages/design-system/vue/dist
```

### Publish to NPM

```bash
# Publish all changed packages
pnpm release

# Or publish manually
cd packages/design-system/react
npm publish --access public

cd ../vue
npm publish --access public

cd ../tokens
npm publish --access public

cd ../tailwind
npm publish --access public
```

### Publish Blazor to NuGet

```bash
cd packages/design-system/blazor

# Build release
dotnet build -c Release

# Pack
dotnet pack -c Release -o ./nupkg

# Publish to NuGet
dotnet nuget push ./nupkg/Pertamina.DesignSystem.Blazor.1.0.0.nupkg \
  --api-key YOUR_NUGET_API_KEY \
  --source https://api.nuget.org/v3/index.json
```

### Verify Published Packages

```bash
# Check npm
npm view @pacer-ui/react
npm view @pacer-ui/vue

# Check NuGet
dotnet nuget list Pertamina.DesignSystem.Blazor
```

---

## 6. Deploying Storybook & Web Docs

### Build Storybooks

```bash
# Build Storybook React
pnpm --filter @pacer-ui/storybook-react build
# Output: packages/storybook/react/storybook-static/

# Build Storybook Vue
pnpm --filter @pacer-ui/storybook-vue build
# Output: packages/storybook/vue/storybook-static/
```

### Build Web Docs

```bash
# Build Web Docs React/Vue
pnpm --filter @pacer-ui/web-docs-react-vue build
# Output: packages/web-docs/react-vue/.vitepress/dist/

# Build Web Docs Blazor
pnpm --filter @pacer-ui/web-docs-blazor build
# Output: packages/web-docs/blazor/.vitepress/dist/
```

### Deploy to GitHub Pages

**Option 1: Manual Deploy**

```bash
# Build all
pnpm build
pnpm --filter @pacer-ui/storybook-react build
pnpm --filter @pacer-ui/storybook-vue build
pnpm --filter @pacer-ui/web-docs-react-vue build

# Deploy with gh-pages
npm install -g gh-pages

# Deploy Storybook React
gh-pages -d packages/storybook/react/storybook-static -b gh-pages --dest storybook/react

# Deploy Storybook Vue
gh-pages -d packages/storybook/vue/storybook-static -b gh-pages --dest storybook/vue

# Deploy Web Docs
gh-pages -d packages/web-docs/react-vue/.vitepress/dist -b gh-pages --dest docs
```

**Option 2: GitHub Actions (Automated)**

Create `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build packages
        run: pnpm build

      - name: Build Storybook React
        run: pnpm --filter @pacer-ui/storybook-react build

      - name: Build Storybook Vue
        run: pnpm --filter @pacer-ui/storybook-vue build

      - name: Build Web Docs
        run: pnpm --filter @pacer-ui/web-docs-react-vue build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          # Copy all build outputs to dist/
```

**Access URLs after deployment:**

- Storybook React: `https://your-org.github.io/pacer/storybook/react/`
- Storybook Vue: `https://your-org.github.io/pacer/storybook/vue/`
- Web Docs: `https://your-org.github.io/pacer/docs/`

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy Storybook React
cd packages/storybook/react
vercel --prod

# Deploy Web Docs
cd packages/web-docs/react-vue
vercel --prod
```

### Deploy to Netlify (Alternative)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd packages/storybook/react
netlify deploy --prod --dir=storybook-static
```

---

## 7. Complete Package Distribution

### Final Package Structure

**NPM Packages (@pacer-ui):**

```bash
# Install as user
npm install @pacer-ui/react
npm install @pacer-ui/vue
npm install @pacer-ui/tokens
npm install @pacer-ui/tailwind-preset
```

**Package Contents:**

`@pacer-ui/react` tarball:

```
package/
├── dist/
│   ├── index.js         # Main entry
│   ├── index.mjs        # ESM entry
│   ├── index.d.ts       # Types
│   └── styles.css       # Styles
├── package.json
└── README.md
```

**NuGet Package:**

```bash
# Install as user
dotnet add package Pertamina.DesignSystem.Blazor
```

### Usage by End Users

**React:**

```tsx
// Install
npm install @pacer-ui/react

// Use
import { Button, Input, Card } from '@pacer-ui/react'
import '@pacer-ui/react/dist/styles.css'

function App() {
  return <Button>Hello PACER</Button>
}
```

**Vue:**

```vue
<!-- Install -->
npm install @pacer-ui/vue

<!-- Use -->
<script setup>
import { PtButton, PtInput } from '@pacer-ui/vue';
import '@pacer-ui/vue/dist/styles.css';
</script>

<template>
  <PtButton>Hello PACER</PtButton>
</template>
```

**Blazor:**

```razor
@* Install *@
dotnet add package Pertamina.DesignSystem.Blazor

@* Use *@
@using Pertamina.DesignSystem.Blazor

<PtButton>Hello PACER</PtButton>
```

---

## 📊 Complete Workflow Summary

### Initial Setup (Once)

```bash
pnpm install
pnpm build
```

### Daily Development

```bash
# Terminal 1
pnpm dev

# Terminal 2
pnpm storybook:react

# Terminal 3
pnpm storybook:vue

# Edit components → See realtime changes!
```

### Publishing New Version

```bash
# 1. Create changeset
pnpm changeset

# 2. Bump versions
pnpm version:bump

# 3. Build
pnpm build

# 4. Publish
pnpm release  # NPM packages
dotnet nuget push  # Blazor NuGet

# 5. Deploy docs
pnpm --filter @pacer-ui/storybook-react build
gh-pages -d packages/storybook/react/storybook-static

# 6. Commit & tag
git add .
git commit -m "Release v1.1.0"
git push --follow-tags
```

---

## 🎯 Quick Reference

| Task             | Command                |
| ---------------- | ---------------------- |
| Install          | `pnpm install`         |
| Build all        | `pnpm build`           |
| Dev mode         | `pnpm dev`             |
| Storybook React  | `pnpm storybook:react` |
| Storybook Vue    | `pnpm storybook:vue`   |
| Web Docs         | `pnpm docs:react-vue`  |
| Test             | `pnpm test`            |
| Lint             | `pnpm lint`            |
| Format           | `pnpm format`          |
| Create changeset | `pnpm changeset`       |
| Version bump     | `pnpm version:bump`    |
| Publish          | `pnpm release`         |

---

## 📁 Monorepo Structure

```
Design System/
├── packages/
│   ├── design-system/
│   │   ├── react/          → @pacer-ui/react (npm)
│   │   ├── vue/            → @pacer-ui/vue (npm)
│   │   ├── blazor/         → Pertamina.DesignSystem.Blazor (NuGet)
│   │   ├── tokens/         → @pacer-ui/tokens (npm)
│   │   └── tailwind/       → @pacer-ui/tailwind-preset (npm)
│   ├── storybook/
│   │   ├── react/          → Deployed to GitHub Pages
│   │   └── vue/            → Deployed to GitHub Pages
│   └── web-docs/
│       ├── react-vue/      → Deployed to GitHub Pages
│       └── blazor/         → Deployed to GitHub Pages
├── .github/workflows/      → CI/CD pipelines
├── package.json            → Root workspace
├── pnpm-workspace.yaml     → Workspace config
└── turbo.json              → Build orchestration
```

---

**Ready to start? Run:** `pnpm install && pnpm build && pnpm dev` 🚀
