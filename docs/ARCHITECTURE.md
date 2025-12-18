# Architecture Decision Records (ADR)

Dokumen ini menjelaskan keputusan arsitektur penting dalam PACER (Pertamina Patra Niaga Components & Experience Resources) dan alasan di baliknya.

---

## ADR-001: Monorepo Architecture

**Status:** Accepted  
**Date:** 2025-01-15  
**Deciders:** Design System Team

### Context

Perlu memutuskan struktur repository untuk multi-framework design system (React, Vue, Blazor).

### Decision

Menggunakan **monorepo** dengan pnpm workspaces dan Turbo.

### Consequences

**Positif:**
- Code sharing antar packages (tokens, utils)
- Consistent versioning
- Atomic commits across packages
- Simplified CI/CD
- Single source of truth

**Negatif:**
- Larger repository size
- Kompleksitas build orchestration
- Memerlukan tooling (Turbo, pnpm)

### Alternatives Considered

- **Multi-repo**: Rejected karena sync issues dan duplicate code
- **Lerna**: Dipilih Turbo karena faster builds

---

## ADR-002: Design Tokens as Separate Package

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Design values (colors, spacing, etc) perlu di-share antar React, Vue, dan Blazor.

### Decision

Design tokens sebagai **independent package** (`@pacer/tokens`), framework-agnostic.

### Consequences

**Positif:**
- Single source of truth
- Framework-agnostic
- Mudah di-update secara terpusat
- Dapat digunakan di platform lain (mobile, etc)

**Negatif:**
- Extra dependency
- Perlu build step

### Implementation

```typescript
// tokens/src/index.ts
export const colors = { ... };
export const spacing = { ... };

// Export formats:
// - TypeScript/JavaScript
// - JSON
// - CSS Custom Properties
```

---

## ADR-003: Tailwind CSS as Styling Foundation

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Perlu memilih styling approach yang:
- Konsisten lintas framework
- Developer-friendly
- Production-optimized
- Mendukung theming

### Decision

Menggunakan **Tailwind CSS** dengan shared preset yang consume design tokens.

### Consequences

**Positif:**
- Utility-first approach (developer velocity)
- Automatic purging (small bundle size)
- Design tokens terintegrasi
- Consistent classes across frameworks
- Built-in responsive & dark mode

**Negatif:**
- Learning curve untuk tim yang belum familiar
- Class names verbose
- Blazor perlu compiled CSS

### Alternatives Considered

- **CSS-in-JS** (styled-components): Rejected karena framework-specific
- **Vanilla CSS**: Rejected karena maintenance overhead
- **CSS Modules**: Rejected karena tidak utility-first

---

## ADR-004: Component API Consistency

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Komponen di React, Vue, dan Blazor harus memiliki API yang konsisten.

### Decision

**Standardisasi prop/parameter names:**

```typescript
// React
<Button variant="primary" size="md" loading={true} />

// Vue
<PtButton variant="primary" size="md" :loading="true" />

// Blazor
<PtButton Variant="ButtonVariant.Primary" Size="ButtonSize.Medium" Loading="true" />
```

### Consequences

**Positif:**
- Easier migration antar frameworks
- Dokumentasi konsisten
- Reduced cognitive load
- Team velocity

**Negatif:**
- Tidak mengikuti framework idioms 100%
- Perlu discipline dari contributors

---

## ADR-005: TypeScript First

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Perlu memutuskan apakah menggunakan TypeScript atau JavaScript.

### Decision

**TypeScript** untuk semua packages (React, Vue, tokens).

### Consequences

**Positif:**
- Type safety
- Better DX (autocomplete, refactoring)
- Catch errors at compile time
- Self-documenting code

**Negatif:**
- Learning curve
- Build overhead
- Strictness bisa memperlambat prototyping

### Implementation

- Strict mode enabled
- No `any` types
- Exported types untuk consumer

---

## ADR-006: Semantic Versioning & Changesets

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Perlu version management strategy untuk multiple packages.

### Decision

- **Semantic Versioning** (semver)
- **Changesets** untuk version management
- Independent versioning per package

### Consequences

**Positif:**
- Clear upgrade paths
- Automated changelog
- Explicit breaking changes
- Consumer confidence

**Negatif:**
- Manual changeset creation
- Koordinasi antar packages

---

## ADR-007: Storybook as Living Documentation

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Perlu tool untuk component documentation dan development.

### Decision

**Storybook** sebagai living documentation, terpisah per framework.

### Consequences

**Positif:**
- Interactive playground
- Visual regression testing
- Single source of truth
- Isolated component development

**Negatif:**
- Setup complexity
- Build time overhead
- Perlu maintain stories

---

## ADR-008: Accessibility as Default

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Enterprise/government compliance requires WCAG 2.1 Level AA.

### Decision

**Accessibility built-in**, bukan optional.

### Implementation

- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

### Consequences

**Positif:**
- Compliance by default
- Better UX untuk semua users
- Reduced accessibility debt

**Negatif:**
- Development overhead
- Testing complexity

---

## ADR-009: Long-Term Support (5+ Years)

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Enterprise applications memerlukan stability jangka panjang.

### Decision

Design system dirancang untuk **5+ years** support.

### Principles

1. **Deprecation Policy** - Min 6 months warning
2. **Migration Guides** - Untuk setiap breaking change
3. **Semantic Versioning** - Predictable updates
4. **Backward Compatibility** - Priority tinggi
5. **Documentation** - Versioned docs

### Consequences

**Positif:**
- Enterprise confidence
- Reduced migration costs
- Stable foundation

**Negatif:**
- Slower innovation
- Technical debt accumulation

---

## ADR-010: Blazor Static CSS Strategy

**Status:** Accepted  
**Date:** 2025-01-15

### Context

Blazor tidak mendukung Tailwind runtime seperti React/Vue.

### Decision

**Compile Tailwind CSS** ke static file untuk Blazor.

### Implementation

```bash
# Build Tailwind CSS
tailwindcss -i input.css -o wwwroot/css/styles.css --minify
```

### Consequences

**Positif:**
- No runtime overhead
- Standard CSS workflow
- Works dengan semua Blazor modes

**Negatif:**
- Perlu rebuild untuk changes
- Larger CSS file (no runtime purging)

### Alternatives Considered

- **CSS-in-Razor**: Rejected karena tidak scalable
- **Inline styles**: Rejected karena maintenance

---

## Decision Log

| ADR | Title | Status | Date |
|-----|-------|--------|------|
| 001 | Monorepo Architecture | Accepted | 2025-01-15 |
| 002 | Design Tokens Package | Accepted | 2025-01-15 |
| 003 | Tailwind CSS Foundation | Accepted | 2025-01-15 |
| 004 | Component API Consistency | Accepted | 2025-01-15 |
| 005 | TypeScript First | Accepted | 2025-01-15 |
| 006 | Semantic Versioning | Accepted | 2025-01-15 |
| 007 | Storybook Documentation | Accepted | 2025-01-15 |
| 008 | Accessibility Default | Accepted | 2025-01-15 |
| 009 | Long-Term Support | Accepted | 2025-01-15 |
| 010 | Blazor Static CSS | Accepted | 2025-01-15 |

---

## Updating ADRs

Untuk propose ADR baru:

1. Copy template ADR
2. Fill in context & decision
3. Submit PR untuk review
4. Diskusi di design system meeting
5. Update status (Accepted/Rejected)

---

## References

- [Architecture Decision Records](https://adr.github.io/)
- [When to Write an ADR](https://github.com/joelparkerhenderson/architecture-decision-record)
