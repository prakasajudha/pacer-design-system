# Changelog

All notable changes to PACER (Pertamina Patra Niaga Components & Experience Resources) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial release of PACER (Pertamina Patra Niaga Components & Experience Resources)
- Design tokens package (`@pertamina/tokens`)
- Tailwind preset package (`@pertamina/tailwind-preset`)
- React component library (`@pacer-ui/react`)
- Vue 3 component library (`@pertamina/design-system-vue`)
- Blazor component library (`Pertamina.DesignSystem.Blazor`)

### Components (All Frameworks)

- Button component with 7 variants
- Input component with validation support
- Card component with flexible layout

## [1.0.0] - 2025-01-XX

### Initial Release

First stable release of PACER (Pertamina Patra Niaga Components & Experience Resources).

**Breaking Changes:** None (initial release)

**Migration Guide:** N/A

**Supported Platforms:**

- React 18+
- Vue 3+
- Blazor .NET 8+
- Node.js 18+

---

## Release Notes Format

### Version Types

- **Major (X.0.0)** - Breaking changes, significant new features
- **Minor (0.X.0)** - New features, backward compatible
- **Patch (0.0.X)** - Bug fixes, backward compatible

### Change Categories

- **Added** - New features
- **Changed** - Changes in existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

### Example Entry

```markdown
## [2.0.0] - 2025-06-15

### Added

- Table component for all frameworks
- Modal component with accessibility improvements
- Dark mode support

### Changed

- Button API: renamed `variant` prop to `style` for consistency
- Updated design tokens: neutral colors renamed to gray

### Deprecated

- `Button.legacy` variant will be removed in v3.0.0

### Removed

- Removed deprecated `OldInput` component (use `Input` instead)

### Fixed

- Fixed focus trap in Modal component
- Fixed Button loading state not disabling click events

### Migration Guide

See [MIGRATION-2.0.md](./docs/migrations/MIGRATION-2.0.md)
```

---

## Support Policy

- **Current Major Version** - Full support (bug fixes, features, security)
- **Previous Major Version** - Security fixes only (6 months)
- **Older Versions** - No support (upgrade recommended)

---

## How to Update

### npm/pnpm (React & Vue)

```bash
# Check current version
npm list @pacer-ui/react

# Update to latest
npm update @pacer-ui/react

# Or install specific version
npm install @pacer-ui/react@2.0.0
```

### NuGet (Blazor)

```bash
# Update to latest
dotnet add package Pertamina.DesignSystem.Blazor

# Or specific version
dotnet add package Pertamina.DesignSystem.Blazor --version 2.0.0
```

---

## Release Schedule

- **Patch releases** - As needed (bug fixes)
- **Minor releases** - Every 2-4 weeks (new features)
- **Major releases** - Every 6-12 months (breaking changes)

---

For detailed migration guides, see the `docs/migrations/` directory.
