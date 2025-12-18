# 🎯 PACER - Visual Summary

## Package Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    @pacer-ui/* packages                      │
│                  (Published to npm/NuGet)                    │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼────┐        ┌────▼────┐        ┌────▼────┐
   │  React  │        │   Vue   │        │ Blazor  │
   │ @pacer  │        │ @pacer  │        │ .NET    │
   │ -ui/    │        │ -ui/    │        │ NuGet   │
   │ react   │        │ vue     │        │ Package │
   └────┬────┘        └────┬────┘        └────┬────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                    ┌───────▼───────┐
                    │  Design Token │
                    │  @pacer-ui/   │
                    │  tokens       │
                    └───────┬───────┘
                            │
                    ┌───────▼───────┐
                    │   Tailwind    │
                    │   Preset      │
                    │  @pacer-ui/   │
                    │  tailwind-    │
                    │  preset       │
                    └───────────────┘
```

## Development Flow

```
┌──────────────────────────────────────────────────────────────┐
│  Terminal 1: pnpm dev                                        │
│  ↓ Watch for changes                                         │
│  ↓ Auto rebuild on save                                      │
└──────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼────────┐    ┌────▼────────┐    ┌────▼────────┐
   │ Terminal 2  │    │ Terminal 3  │    │ Terminal 4  │
   │ Storybook   │    │ Storybook   │    │  Web Docs   │
   │   React     │    │    Vue      │    │  VitePress  │
   │ :6006       │    │   :6007     │    │   :5173     │
   └─────────────┘    └─────────────┘    └─────────────┘
         │                   │                   │
         ▼                   ▼                   ▼
   Browser auto      Browser auto      Browser auto
   hot-reload        hot-reload        hot-reload
```

## Realtime Multi-Framework Editing

```
You edit:
packages/design-system/tokens/src/index.ts
                │
                ├─ Save (Ctrl+S)
                │
                ▼
        [Auto Rebuild - 2 seconds]
                │
        ┌───────┼───────┐
        │       │       │
        ▼       ▼       ▼
     React    Vue   Blazor
   rebuilds rebuilds rebuilds
        │       │       │
        ▼       ▼       ▼
  Storybook Storybook  Test
   :6006    :6007     App
   reload   reload   reload
        │       │       │
        ▼       ▼       ▼
   Browser  Browser  Browser
   updates  updates  updates

⏱️ Total time: 2-3 seconds from save to preview!
```

## Publishing Flow

```
Developer                  CI/CD                    Registry
    │                        │                         │
    ├─ pnpm changeset       │                         │
    ├─ pnpm version:bump    │                         │
    ├─ git commit           │                         │
    ├─ git tag v1.1.0       │                         │
    ├─ git push ────────────▶ GitHub Actions          │
    │                        │                         │
    │                        ├─ pnpm install          │
    │                        ├─ pnpm build            │
    │                        ├─ pnpm test             │
    │                        ├─ pnpm release ─────────▶ npm
    │                        │   (@pacer-ui/react)    │
    │                        │   (@pacer-ui/vue)      │
    │                        │   (@pacer-ui/tokens)   │
    │                        │                         │
    │                        ├─ dotnet pack           │
    │                        ├─ dotnet push ──────────▶ NuGet
    │                        │   (*.DesignSystem.     │
    │                        │    Blazor)             │
    │                        │                         │
    │                        ├─ Build Storybooks      │
    │                        ├─ Build Web Docs        │
    │                        └─ Deploy ───────────────▶ GitHub
    │                                                   Pages
    │
    ▼
End Users install:
npm install @pacer-ui/react
npm install @pacer-ui/vue
dotnet add package Pertamina.DesignSystem.Blazor
```

## Monorepo Structure

```
Design System/
│
├── 📦 packages/design-system/
│   ├── react/           → @pacer-ui/react
│   │   └── dist/        → Published to npm
│   ├── vue/             → @pacer-ui/vue
│   │   └── dist/        → Published to npm
│   ├── blazor/          → Pertamina.DesignSystem.Blazor
│   │   └── bin/         → Published to NuGet
│   ├── tokens/          → @pacer-ui/tokens
│   │   └── dist/        → Published to npm
│   └── tailwind/        → @pacer-ui/tailwind-preset
│       └── dist/        → Published to npm
│
├── 📚 packages/storybook/
│   ├── react/
│   │   └── storybook-static/  → Deployed to GitHub Pages
│   └── vue/
│       └── storybook-static/  → Deployed to GitHub Pages
│
├── 📖 packages/web-docs/
│   ├── react-vue/
│   │   └── .vitepress/dist/   → Deployed to GitHub Pages
│   └── blazor/
│       └── .vitepress/dist/   → Deployed to GitHub Pages
│
└── ⚙️  Configuration
    ├── package.json            → Workspace root
    ├── pnpm-workspace.yaml     → Workspace packages
    ├── turbo.json              → Build pipeline
    └── .github/workflows/      → CI/CD automation
        ├── ci.yml              → Test on PR
        ├── deploy-docs.yml     → Deploy documentation
        └── publish-packages.yml → Publish to registries
```

## End User Usage

```
React App:
npm install @pacer-ui/react
                │
                ▼
import { Button, Input } from '@pacer-ui/react'
import '@pacer-ui/react/dist/styles.css'
                │
                ▼
<Button>Hello PACER</Button>


Vue App:
npm install @pacer-ui/vue
                │
                ▼
import { PtButton } from '@pacer-ui/vue'
import '@pacer-ui/vue/dist/styles.css'
                │
                ▼
<PtButton>Hello PACER</PtButton>


Blazor App:
dotnet add package Pertamina.DesignSystem.Blazor
                │
                ▼
@using Pertamina.DesignSystem.Blazor
                │
                ▼
<PtButton>Hello PACER</PtButton>
```

## URLs After Deployment

```
Documentation Sites (GitHub Pages):
├── https://your-org.github.io/pacer/
│   ├── /storybook/react/     → React components demo
│   ├── /storybook/vue/       → Vue components demo
│   ├── /docs/                → Main documentation
│   └── /docs/blazor/         → Blazor documentation

Package Registries:
├── https://npmjs.com/package/@pacer-ui/react
├── https://npmjs.com/package/@pacer-ui/vue
├── https://npmjs.com/package/@pacer-ui/tokens
├── https://npmjs.com/package/@pacer-ui/tailwind-preset
└── https://nuget.org/packages/Pertamina.DesignSystem.Blazor
```

## Quick Command Reference

| Phase           | Commands                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Setup**       | `pnpm install`<br>`pnpm build`                                                                        |
| **Development** | `pnpm dev` (Terminal 1)<br>`pnpm storybook:react` (Terminal 2)<br>`pnpm storybook:vue` (Terminal 3)   |
| **Testing**     | `pnpm test`<br>`pnpm lint`                                                                            |
| **Release**     | `pnpm changeset`<br>`pnpm version:bump`<br>`pnpm build`<br>`pnpm release`<br>`git push --follow-tags` |
| **Deploy**      | Automatic via GitHub Actions on push to main                                                          |

---

**For detailed instructions, see:**

- [QUICK_START.md](./QUICK_START.md) - Get started in 5 minutes
- [COMPLETE_GUIDE.md](./COMPLETE_GUIDE.md) - Full documentation
- [DEVELOPMENT_WORKFLOW.md](./DEVELOPMENT_WORKFLOW.md) - Development details
