# Technical Specification

Dokumen spesifikasi teknis lengkap PACER (Pertamina Patra Niaga Components & Experience Resources).

---

## 📋 Overview

**Project Name:** PACER — Pertamina Patra Niaga Components & Experience Resources  
**Version:** 1.0.0  
**Type:** Monorepo Design System Library  
**Frameworks:** React, Vue 3, Blazor (.NET 8)  
**License:** Proprietary

---

## 🏗️ Architecture

### Monorepo Structure

```
pertamina-design-system/
├── packages/
│   ├── design-system/
│   │   ├── react/              # React library (npm)
│   │   ├── vue/                # Vue library (npm)
│   │   ├── blazor/             # Blazor library (NuGet)
│   │   ├── tokens/             # Design tokens (npm)
│   │   ├── tailwind/           # Tailwind preset (npm)
│   │   └── shared/             # Shared utilities
│   ├── storybook/              # Living documentation
│   ├── web-docs/               # Documentation sites
│   └── templates/              # Starter templates
├── tools/                      # Build tools & scripts
└── docs/                       # Documentation
```

### Package Dependencies

```
tokens (foundation)
  ↓
tailwind (consumes tokens)
  ↓
react / vue / blazor (consume tailwind)
  ↓
storybook / web-docs (consume libraries)
```

---

## 🎨 Design Tokens

### Token Structure

```typescript
tokens/
├── colors
│   ├── brand (primary, secondary)
│   ├── semantic (success, warning, error, info)
│   └── neutral (grayscale)
├── spacing (4px base scale)
├── typography (font families, sizes, weights)
├── borderRadius
├── shadows
├── motion (duration, easing)
├── breakpoints
└── zIndex
```

### Export Formats

1. **TypeScript/JavaScript** (ESM + CJS)
   ```ts
   import { tokens } from '@pacer/tokens';
   ```

2. **JSON** (Raw data)
   ```js
   import tokens from '@pacer/tokens/json';
   ```

3. **CSS Custom Properties**
   ```css
   @import '@pacer/tokens/css';
   ```

### Token Naming Convention

```
{category}-{subcategory}-{variant}-{shade}

Examples:
- brand-primary-500
- spacing-4
- font-size-base
- radius-md
```

---

## 🎯 Component Specifications

### Component Checklist

Setiap component HARUS:
- [ ] Cross-framework API consistency
- [ ] TypeScript types exported
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Keyboard navigable
- [ ] Responsive design
- [ ] Dark mode support
- [ ] Unit tests (≥80% coverage)
- [ ] Storybook stories
- [ ] Documentation

### Button Component Spec

**Props/Parameters:**

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | enum | 'primary' | Visual style: primary, secondary, success, warning, error, ghost, link |
| size | enum | 'md' | Size: sm, md, lg |
| fullWidth | boolean | false | Full container width |
| loading | boolean | false | Loading state with spinner |
| disabled | boolean | false | Disabled state |
| startIcon | ReactNode | - | Icon before text |
| endIcon | ReactNode | - | Icon after text |

**States:**
- Default
- Hover
- Active (pressed)
- Focus
- Disabled
- Loading

**Accessibility:**
- Role: `button`
- Keyboard: Enter, Space
- ARIA: `aria-disabled`, `aria-busy`

**Visual Variants:**

```tsx
// Primary - Main actions
<Button variant="primary">Submit</Button>

// Secondary - Alternative actions
<Button variant="secondary">Cancel</Button>

// Success - Positive actions
<Button variant="success">Save</Button>

// Warning - Caution actions
<Button variant="warning">Archive</Button>

// Error - Destructive actions
<Button variant="error">Delete</Button>

// Ghost - Subtle actions
<Button variant="ghost">More</Button>

// Link - Navigation
<Button variant="link">Learn More</Button>
```

### Input Component Spec

**Props/Parameters:**

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label |
| value | string/number | - | Input value |
| type | string | 'text' | HTML input type |
| placeholder | string | - | Placeholder text |
| error | string | - | Error message |
| helperText | string | - | Helper text |
| disabled | boolean | false | Disabled state |
| fullWidth | boolean | false | Full container width |
| startIcon | ReactNode | - | Icon before input |
| endIcon | ReactNode | - | Icon after input |

**States:**
- Default
- Focus
- Error
- Disabled
- Filled

**Accessibility:**
- Label association
- Error announcements
- ARIA: `aria-invalid`, `aria-describedby`

### Card Component Spec

**Props/Parameters:**

| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | enum | 'default' | Style: default, outlined, elevated |
| padding | enum | 'md' | Padding: none, sm, md, lg |
| header | ReactNode | - | Header content |
| footer | ReactNode | - | Footer content |

---

## 🔧 Build System

### Tools

- **Package Manager:** pnpm (workspaces)
- **Monorepo Tool:** Turbo (build orchestration)
- **Bundler (React/Vue):** tsup / Vite
- **Compiler (Blazor):** .NET CLI
- **CSS Processor:** Tailwind CSS CLI
- **TypeScript:** TSC (type checking)
- **Linter:** ESLint
- **Formatter:** Prettier

### Build Pipeline

```bash
# 1. Install dependencies
pnpm install

# 2. Build sequence (Turbo handles)
tokens → tailwind → react/vue → blazor → storybook → docs

# 3. Output
dist/
├── index.js        # CommonJS
├── index.mjs       # ESM
├── index.d.ts      # TypeScript types
└── styles.css      # Compiled CSS
```

### Build Scripts

```json
{
  "build": "turbo run build",
  "dev": "turbo run dev",
  "test": "turbo run test",
  "lint": "turbo run lint"
}
```

---

## 🧪 Testing Strategy

### Unit Tests

**Framework:** Vitest (React/Vue), xUnit (Blazor)  
**Coverage Target:** ≥80%

**Test Categories:**
1. Component rendering
2. Props/parameters validation
3. Event handling
4. Accessibility
5. Edge cases

**Example:**
```tsx
describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Integration Tests

- Component combinations
- Form submissions
- Navigation flows

### Visual Regression Tests

**Tool:** Chromatic / Percy  
**Trigger:** Every PR

### Accessibility Tests

**Tools:**
- axe-core (automated)
- NVDA/JAWS (manual)
- Lighthouse (CI)

**Checks:**
- Color contrast
- Keyboard navigation
- Screen reader compatibility
- ARIA attributes

---

## 📦 Publishing

### npm Packages

**Registry:** npmjs.com  
**Scope:** `@pacer/`  
**Access:** Public / Restricted

**Packages:**
- `@pacer/tokens`
- `@pacer/tailwind-preset`
- `@pacer/design-system-react`
- `@pacer/design-system-vue`

**Version Strategy:** Semantic Versioning

```bash
# Publish command
pnpm publish -r --access public
```

### NuGet Package

**Registry:** nuget.org / Private feed  
**Package ID:** `Pertamina.DesignSystem.Blazor`

```bash
# Pack & push
dotnet pack -c Release
dotnet nuget push *.nupkg --source https://api.nuget.org/v3/index.json
```

---

## 🔐 Security

### Dependency Management

- **Audit:** Weekly `pnpm audit`
- **Updates:** Dependabot automated PRs
- **Scanning:** Snyk in CI/CD

### Code Security

- No hardcoded secrets
- XSS prevention (sanitized inputs)
- CSP-compatible styles
- Supply chain security (signed packages)

### Vulnerability Response

- **Severity High/Critical:** 24 hour response
- **Severity Medium:** 7 day response
- **Severity Low:** 30 day response

---

## ⚡ Performance

### Bundle Size Targets

| Package | Target (Gzipped) | Actual |
|---------|------------------|--------|
| React | ≤20KB | ~15KB |
| Vue | ≤20KB | ~12KB |
| Blazor | ≤60KB | ~50KB |

### Optimization Strategies

1. **Tree-shaking** - ESM format
2. **Code splitting** - Dynamic imports
3. **CSS purging** - Unused styles removed
4. **Minification** - Production builds
5. **CDN** - Static assets cached

### Performance Monitoring

- Bundle analyzer in CI
- Lighthouse scores
- Core Web Vitals tracking

---

## ♿ Accessibility

### WCAG 2.1 Level AA Compliance

**Requirements:**
- Color contrast ≥4.5:1 (text)
- Color contrast ≥3:1 (UI components)
- Keyboard accessible
- Screen reader support
- Focus indicators
- Semantic HTML

### Testing Tools

- **Automated:** axe DevTools, Lighthouse
- **Manual:** NVDA, JAWS
- **CI:** axe-core in pipeline

---

## 🌍 Internationalization (Future)

**Planned Features:**
- RTL support
- Locale-aware formatting
- Translation system
- Date/number formatting

---

## 📊 Analytics & Telemetry

**Metrics Tracked:**
- Package downloads (npm)
- Component usage
- Error rates
- Performance metrics

**Tools:**
- npm stats
- Google Analytics (docs)
- Sentry (error tracking)

---

## 🚢 Deployment

### CI/CD Pipeline

**GitHub Actions Workflows:**

1. **CI** (on PR)
   - Lint
   - Test
   - Build
   - Security audit

2. **Publish** (on tag)
   - Build
   - Publish npm
   - Publish NuGet
   - Create GitHub release

3. **Deploy Storybook** (on push to main)
   - Build Storybook
   - Deploy to Vercel

### Deployment Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Storybook (React) | storybook-react.pertamina.com | Component docs |
| Storybook (Vue) | storybook-vue.pertamina.com | Component docs |
| Documentation | design-system.pertamina.com | Main docs |
| npm Registry | npmjs.com/@pertamina | Package distribution |
| NuGet | nuget.org | Blazor package |

---

## 📈 Roadmap

### v1.0 (Current)
- ✅ Core components (Button, Input, Card)
- ✅ Design tokens
- ✅ Multi-framework support
- ✅ Documentation

### v1.x (Q1 2025)
- Select/Dropdown
- Checkbox/Radio
- Modal/Dialog
- Tooltip
- Badge

### v2.0 (Q2 2025)
- Table component
- Form validation
- Animation system
- Advanced theming

### v3.0 (Q3 2025)
- Chart components
- Data visualization
- Advanced layouts
- Mobile components

---

## 🤝 Team & Governance

### Core Team

- **Design System Lead** - Strategy & vision
- **React Lead** - React library
- **Vue Lead** - Vue library
- **Blazor Lead** - Blazor library
- **Design Lead** - Design tokens & UI

### Decision Making

**RFC Process:**
1. Proposal submitted
2. Community feedback (2 weeks)
3. Design review
4. Implementation approved
5. PR & release

**Breaking Changes:**
- Require RFC
- Require migration guide
- Minimum 6 months deprecation

---

## 📞 Support

- **Documentation:** https://design-system.pertamina.com
- **Slack:** #design-system
- **Email:** design-system@pertamina.com
- **GitHub:** https://github.com/prakasajudha/pacer-design-system

---

**Last Updated:** 2025-01-15  
**Document Version:** 1.0
