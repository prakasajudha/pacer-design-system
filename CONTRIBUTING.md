# Contributing to PACER

Terima kasih atas minat Anda untuk berkontribusi! Dokumen ini memberikan panduan untuk berkontribusi ke PACER (Pertamina Patra Niaga Components & Experience Resources).

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

---

## Code of Conduct

### Our Standards

- **Respectful** - Hormati semua kontributor
- **Professional** - Jaga komunikasi tetap profesional
- **Collaborative** - Bekerja sama untuk solusi terbaik
- **Inclusive** - Terbuka untuk semua background

### Unacceptable Behavior

- Harassment, offensive comments
- Personal attacks
- Trolling atau intimidation
- Publishing private information

---

## Getting Started

### Prerequisites

```bash
# Required
Node.js >= 18.0.0
pnpm >= 8.0.0
.NET SDK >= 8.0

# Recommended
Git
Visual Studio Code
```

### Initial Setup

```bash
# 1. Fork & Clone
git clone https://github.com/pertamina/design-system.git
cd design-system

# 2. Install dependencies
pnpm install

# 3. Build all packages
pnpm build

# 4. Start development
pnpm dev
```

---

## Development Workflow

### Branch Strategy

```
main              → Production-ready code
develop           → Integration branch
feature/*         → New features
fix/*             → Bug fixes
docs/*            → Documentation updates
refactor/*        → Code refactoring
chore/*           → Maintenance tasks
```

### Creating a Branch

```bash
# Feature
git checkout -b feature/add-table-component

# Bug fix
git checkout -b fix/button-loading-state

# Documentation
git checkout -b docs/update-readme
```

### Commit Convention

Menggunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code formatting (no logic change)
- `refactor` - Code refactoring
- `perf` - Performance improvement
- `test` - Adding tests
- `chore` - Build process, tooling

**Examples:**

```bash
git commit -m "feat(react): add Table component"
git commit -m "fix(vue): resolve Input focus issue"
git commit -m "docs: update Button API documentation"
git commit -m "refactor(tokens): reorganize color tokens"
git commit -m "chore: update dependencies"
```

---

## Coding Standards

### TypeScript

```typescript
// ✅ Good
export interface ButtonProps {
  /** Button variant */
  variant?: 'primary' | 'secondary';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler */
  onClick?: () => void;
}

// ❌ Avoid
export interface ButtonProps {
  variant?: string; // Too generic
  onClick?: any; // Avoid 'any'
}
```

### React

```tsx
// ✅ Good - Functional component with forwardRef
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn('btn', variants[variant])} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// ❌ Avoid - Class components
class Button extends React.Component {}
```

### Vue

```vue
<!-- ✅ Good - Composition API with script setup -->
<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const buttonClass = computed(() => {
  return `btn btn-${props.variant}`;
});
</script>

<!-- ❌ Avoid - Options API -->
<script>
export default {
  data() {
    return {};
  },
};
</script>
```

### C# (Blazor)

```csharp
// ✅ Good
[Parameter]
public ButtonVariant Variant { get; set; } = ButtonVariant.Primary;

[Parameter]
public EventCallback<MouseEventArgs> OnClick { get; set; }

// ❌ Avoid
[Parameter]
public string Variant { get; set; } // Use enum instead
```

### CSS / Tailwind

```tsx
// ✅ Good - Use design tokens via Tailwind
<button className="bg-brand-primary-500 text-neutral-0 px-4 py-2 rounded-md">

// ❌ Avoid - Hardcoded values
<button className="bg-[#0073e6] text-white p-4">
```

---

## Component Guidelines

### Component Checklist

Setiap component HARUS memenuhi:

- [ ] **API Consistency** - Consistent props across frameworks
- [ ] **TypeScript** - Fully typed
- [ ] **Accessibility** - WCAG 2.1 Level AA
- [ ] **Documentation** - Props, examples, stories
- [ ] **Tests** - Unit tests, integration tests
- [ ] **Responsive** - Works on all screen sizes
- [ ] **Theming** - Support light/dark mode
- [ ] **Performance** - No unnecessary re-renders

### Component Structure

```
Button/
├── Button.tsx              # React implementation
├── Button.test.tsx         # React tests
├── Button.vue              # Vue implementation
├── Button.spec.ts          # Vue tests
├── Button.razor            # Blazor implementation
├── ButtonTypes.cs          # Blazor types
└── Button.stories.tsx      # Storybook stories
```

### Accessibility Requirements

```tsx
// ✅ Required
<button
  type="button"
  aria-label="Close dialog"
  aria-disabled={disabled}
  disabled={disabled}
  role="button"
>
  Close
</button>

// Keyboard support
- Tab navigation
- Enter/Space activation
- Escape to close (modals)

// Screen reader support
- Semantic HTML
- ARIA labels
- Live regions for dynamic content
```

---

## Testing

### Unit Tests

```tsx
// React example
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Running Tests

```bash
# All tests
pnpm test

# Specific package
pnpm --filter @pacer-ui/react test

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

---

## Documentation

### Component Documentation

Setiap component harus didokumentasikan:

1. **README.md** - Usage examples
2. **Storybook** - Interactive demos
3. **API Docs** - Props/parameters
4. **Accessibility Notes** - ARIA, keyboard support

### Documentation Standards

```markdown
# Component Name

Brief description.

## Usage

\`\`\`tsx
<Component variant="primary">
Content
</Component>
\`\`\`

## Props

| Prop    | Type                     | Default   | Description  |
| ------- | ------------------------ | --------- | ------------ |
| variant | 'primary' \| 'secondary' | 'primary' | Visual style |

## Accessibility

- Keyboard: Tab, Enter
- ARIA: role="button"
- Screen reader: Announced as "button"
```

---

## Pull Request Process

### Before Submitting

- [ ] Code follows style guide
- [ ] Tests pass (`pnpm test`)
- [ ] Lint passes (`pnpm lint`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Documentation updated
- [ ] Storybook stories added/updated
- [ ] Changeset added (`pnpm changeset`)

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guide
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Changeset added

## Screenshots (if applicable)
```

### Review Process

1. **Automated Checks** - CI/CD runs tests, linting
2. **Code Review** - At least 1 approval required
3. **Design Review** - UI changes reviewed by design team
4. **Accessibility Review** - A11y checks for components
5. **Merge** - Squash and merge to develop

---

## Release Process

### Creating a Release

```bash
# 1. Create changeset
pnpm changeset

# 2. Version packages
pnpm version:bump

# 3. Build
pnpm build

# 4. Publish (maintainers only)
pnpm release
```

### Versioning

Menggunakan Semantic Versioning:

- **Major (1.0.0)** - Breaking changes
- **Minor (0.1.0)** - New features (backward compatible)
- **Patch (0.0.1)** - Bug fixes

---

## Questions?

- **Slack**: #design-system
- **Email**: design-system@pertamina.com
- **Issues**: https://github.com/pertamina/design-system/issues

---

## Recognition

Contributors akan diakui di:

- README.md
- Release notes
- Contributor wall di documentation site

Terima kasih atas kontribusi Anda! 🙏
