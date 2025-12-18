# Migration Guides

Panduan migrasi untuk upgrading PACER (Pertamina Patra Niaga Components & Experience Resources).

---

## Version Migration Guides

- [Migrating to v2.0](#migrating-to-v20) *(Coming Soon)*
- [Migrating to v1.0](#migrating-to-v10)

---

## Migrating to v1.0

**From:** Pre-release versions  
**To:** v1.0.0  
**Release Date:** 2025-01-XX

### Breaking Changes

None - this is the initial stable release.

### New Features

- Complete component library (Button, Input, Card)
- Multi-framework support (React, Vue, Blazor)
- Design tokens system
- Tailwind CSS integration
- Full TypeScript support

### Installation

**React:**
```bash
npm install @pacer/design-system-react@1.0.0
```

**Vue:**
```bash
npm install @pacer/design-system-vue@1.0.0
```

**Blazor:**
```bash
dotnet add package Pertamina.DesignSystem.Blazor --version 1.0.0
```

### Migration Steps

1. Install v1.0.0
2. Follow [Quick Start Guide](./QUICK_START.md)
3. Replace any beta components with stable versions

---

## Migrating to v2.0

*(Template untuk future major version)*

**From:** v1.x.x  
**To:** v2.0.0  
**Release Date:** TBD

### Overview

v2.0 akan include:
- New components (Table, Modal, Dropdown)
- Enhanced accessibility
- Performance improvements
- API improvements

### Breaking Changes

#### 1. Button Component

**Changed:** `variant` prop renamed to `appearance`

```tsx
// Before (v1.x)
<Button variant="primary">Click</Button>

// After (v2.0)
<Button appearance="primary">Click</Button>
```

**Why:** Consistency dengan industry standards.

**Migration:**
- Find & replace: `variant=` → `appearance=`
- Or use codemod: `npx @pacer/codemod v2/button-variant`

#### 2. Input Component

**Changed:** `error` prop now accepts object instead of string

```tsx
// Before (v1.x)
<Input error="Invalid email" />

// After (v2.0)
<Input error={{ message: "Invalid email", type: "error" }} />
```

**Migration:**
```tsx
// Use helper function
import { createError } from '@pacer/design-system-react';

<Input error={createError("Invalid email")} />
```

#### 3. Design Tokens

**Changed:** Color token naming

```ts
// Before (v1.x)
colors.brand.primary[500]

// After (v2.0)
colors.primary[500]
```

**Migration:**
- Update imports: `brand.primary` → `primary`
- CSS classes: `bg-brand-primary-500` → `bg-primary-500`

### Deprecations

#### Button `legacy` variant

**Deprecated in:** v2.0  
**Will be removed in:** v3.0

```tsx
// Deprecated
<Button variant="legacy">Old Style</Button>

// Use instead
<Button variant="secondary">New Style</Button>
```

### New Features

#### 1. Dark Mode Support

```tsx
// React
import { ThemeProvider } from '@pacer/design-system-react';

<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

#### 2. Form Components

```tsx
import { Form, FormField } from '@pacer/design-system-react';

<Form onSubmit={handleSubmit}>
  <FormField name="email" label="Email" />
  <Button type="submit">Submit</Button>
</Form>
```

### Step-by-Step Migration

#### Step 1: Update Dependencies

```bash
# React
npm install @pacer/design-system-react@2.0.0

# Vue
npm install @pacer/design-system-vue@2.0.0

# Blazor
dotnet add package Pertamina.DesignSystem.Blazor --version 2.0.0
```

#### Step 2: Run Codemod (React only)

```bash
npx @pacer/codemod v2
```

This will automatically:
- Rename `variant` to `appearance`
- Update error prop format
- Update token imports

#### Step 3: Manual Updates

Check for:
- [ ] Custom component wrappers
- [ ] Direct token usage
- [ ] CSS class overrides
- [ ] TypeScript types

#### Step 4: Test

```bash
# Run tests
npm test

# Visual regression tests
npm run test:visual

# Manual testing checklist
- [ ] All forms working
- [ ] Dark mode toggles correctly
- [ ] No console errors
- [ ] TypeScript compiles
```

#### Step 5: Update Documentation

- [ ] Update component props in docs
- [ ] Update Storybook stories
- [ ] Update internal wiki

### Rollback Plan

If issues arise:

```bash
# React
npm install @pacer/design-system-react@1.x.x

# Vue
npm install @pacer/design-system-vue@1.x.x

# Blazor
dotnet add package Pertamina.DesignSystem.Blazor --version 1.x.x
```

### Support

Need help migrating?

- **Migration Workshop**: Every Friday 2-4 PM
- **Slack**: #design-system-migration
- **Email**: design-system@pertamina.com
- **1-on-1 Support**: Book via [calendar link]

---

## Version Support Timeline

| Version | Release Date | End of Support | Status |
|---------|-------------|----------------|--------|
| v3.0    | TBD         | TBD           | Future |
| v2.0    | TBD         | TBD + 12mo    | Planned |
| v1.0    | 2025-01     | 2026-01       | Current |

---

## Deprecation Policy

1. **Announcement** - Feature marked as deprecated
2. **Grace Period** - Minimum 2 minor versions or 6 months
3. **Removal** - Removed in next major version
4. **Migration Guide** - Provided for all breaking changes

---

## Future Breaking Changes

*(To be announced)*

Stay updated:
- Subscribe to [changelog RSS](https://design-system.pertamina.com/changelog.xml)
- Join [#announcements](slack://channel?id=announcements) on Slack
- Watch [GitHub releases](https://github.com/pertamina/design-system/releases)

---

## Questions?

Contact design-system@pertamina.com for migration assistance.
