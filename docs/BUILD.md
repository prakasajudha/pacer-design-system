# Build & Deployment Guide

Panduan lengkap untuk build dan deploy PACER (Pertamina Patra Niaga Components & Experience Resources).

---

## 🏗️ Build Process

### Prerequisites

```bash
# Required
Node.js >= 18.0.0
pnpm >= 8.0.0
.NET SDK >= 8.0 (untuk Blazor)

# Verify installations
node --version
pnpm --version
dotnet --version
```

### Initial Setup

```bash
# 1. Clone repository
git clone https://github.com/prakasajudha/pacer-design-system.git
cd design-system

# 2. Install dependencies
pnpm install

# 3. Build all packages
pnpm build
```

---

## 📦 Package Build Details

### 1. Design Tokens (`@pacer/tokens`)

```bash
# Build
cd packages/design-system/tokens
pnpm build

# Output:
# dist/index.js       - CommonJS
# dist/index.mjs      - ESM
# dist/index.d.ts     - TypeScript types
# dist/tokens.json    - Raw JSON
# dist/tokens.css     - CSS Custom Properties
```

**Build Steps:**
1. Compile TypeScript → JS
2. Generate type definitions
3. Export JSON format
4. Generate CSS variables

---

### 2. Tailwind Preset (`@pacer/tailwind-preset`)

```bash
# Build
cd packages/design-system/tailwind
pnpm build

# Output:
# dist/index.js       - Preset configuration
# dist/index.d.ts     - TypeScript types
```

**Dependencies:**
- Consumes `@pacer/tokens`
- Used by React, Vue, Blazor

---

### 3. React Library (`@pacer/design-system-react`)

```bash
# Build
cd packages/design-system/react
pnpm build

# Output:
# dist/index.js       - CommonJS
# dist/index.mjs      - ESM
# dist/index.d.ts     - TypeScript types
# dist/styles.css     - Compiled Tailwind CSS
```

**Build Steps:**
1. Bundle components (tsup)
2. Generate types
3. Compile Tailwind CSS
4. Tree-shake for smaller bundle

**Bundle Analysis:**
```bash
pnpm build --analyze
```

---

### 4. Vue Library (`@pacer/design-system-vue`)

```bash
# Build
cd packages/design-system/vue
pnpm build

# Output:
# dist/index.js       - CommonJS
# dist/index.mjs      - ESM
# dist/index.d.ts     - TypeScript types
# dist/styles.css     - Compiled Tailwind CSS
```

**Build Steps:**
1. Bundle Vue components (Vite)
2. Generate type definitions
3. Compile Tailwind CSS
4. Create plugin entry

---

### 5. Blazor Library (`Pertamina.DesignSystem.Blazor`)

```bash
# Build
cd packages/design-system/blazor

# 1. Build Tailwind CSS
pnpm build:css

# 2. Build .NET library
dotnet build -c Release

# 3. Create NuGet package
dotnet pack -c Release -o ./nupkg

# Output:
# bin/Release/net8.0/Pertamina.DesignSystem.Blazor.dll
# nupkg/Pertamina.DesignSystem.Blazor.1.0.0.nupkg
```

**Build Steps:**
1. Compile Tailwind CSS → wwwroot/css/
2. Build Razor components
3. Package as NuGet

---

## 🚀 Publishing

### npm Packages (React & Vue)

```bash
# 1. Login to npm
npm login

# 2. Build all packages
pnpm build

# 3. Publish (dari root)
pnpm publish:npm

# Or publish individual packages
cd packages/design-system/react
npm publish --access public
```

**Pre-publish Checklist:**
- [ ] Version bumped
- [ ] Changelog updated
- [ ] Tests passing
- [ ] Build successful
- [ ] README updated

---

### NuGet Package (Blazor)

```bash
# 1. Build & pack
cd packages/design-system/blazor
dotnet pack -c Release

# 2. Push to NuGet.org
dotnet nuget push nupkg/Pertamina.DesignSystem.Blazor.1.0.0.nupkg \
  --api-key YOUR_API_KEY \
  --source https://api.nuget.org/v3/index.json

# Or push to private feed
dotnet nuget push nupkg/Pertamina.DesignSystem.Blazor.1.0.0.nupkg \
  --api-key YOUR_API_KEY \
  --source https://nuget.pertamina.com/v3/index.json
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

```yaml
name: Build & Publish

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      
      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: 8.0.x
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Test
        run: pnpm test
      
      - name: Lint
        run: pnpm lint

  publish:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          registry-url: 'https://registry.npmjs.org'
      
      - name: Publish to npm
        run: pnpm publish:npm
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Publish to NuGet
        run: |
          cd packages/design-system/blazor
          dotnet pack -c Release
          dotnet nuget push nupkg/*.nupkg --api-key ${{ secrets.NUGET_API_KEY }}
```

---

## 📊 Storybook Deployment

### Build Storybook

```bash
# React Storybook
cd packages/storybook/react
pnpm build-storybook
# Output: storybook-static/

# Vue Storybook
cd packages/storybook/vue
pnpm build-storybook
# Output: storybook-static/
```

### Deploy to Vercel/Netlify

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=storybook-static
```

---

## 📚 Documentation Deployment

### Build Docs

```bash
# React/Vue docs (VitePress)
cd packages/web-docs/react-vue
pnpm build
# Output: .vitepress/dist/

# Blazor docs
cd packages/web-docs/blazor
dotnet publish -c Release
# Output: bin/Release/net8.0/publish/
```

### Deploy

```bash
# Deploy to hosting (example: Netlify)
netlify deploy --prod --dir=packages/web-docs/react-vue/.vitepress/dist
```

---

## 🔒 Security Scanning

```bash
# npm audit
pnpm audit

# Fix vulnerabilities
pnpm audit --fix

# Snyk scan
snyk test

# OWASP dependency check
dependency-check --project "Pertamina DS" --scan .
```

---

## 🧪 Testing in CI

```bash
# Unit tests
pnpm test

# Coverage report
pnpm test --coverage

# E2E tests (if applicable)
pnpm test:e2e

# Visual regression tests
pnpm test:visual
```

---

## 📈 Performance Monitoring

### Bundle Size Analysis

```bash
# React
cd packages/design-system/react
pnpm build --analyze

# Check bundle size
ls -lh dist/

# Use bundlephobia
npx bundlephobia @pacer/design-system-react
```

---

## 🐛 Troubleshooting

### Build Failures

**Issue:** TypeScript errors

```bash
# Clear cache
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

**Issue:** Blazor CSS not updating

```bash
cd packages/design-system/blazor
pnpm build:css --force
dotnet clean
dotnet build
```

**Issue:** Workspace dependency issues

```bash
# Verify workspace links
pnpm list --depth=0

# Reinstall
pnpm install --force
```

---

## 📋 Pre-Release Checklist

- [ ] All tests passing
- [ ] No linting errors
- [ ] Build successful
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Documentation updated
- [ ] Migration guide (if breaking changes)
- [ ] Storybook updated
- [ ] Security audit passed
- [ ] Bundle size acceptable
- [ ] Peer review completed

---

## 🔗 Deployment URLs

- **Storybook (React)**: https://storybook-react.pertamina.com
- **Storybook (Vue)**: https://storybook-vue.pertamina.com
- **Documentation**: https://design-system.pertamina.com
- **npm Registry**: https://www.npmjs.com/org/pertamina
- **NuGet Gallery**: https://www.nuget.org/packages/Pertamina.DesignSystem.Blazor

---

## 📞 Support

Build issues? Contact:
- Slack: #design-system-build
- Email: devops@pertamina.com
