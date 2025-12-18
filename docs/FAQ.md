# Frequently Asked Questions (FAQ)

Pertanyaan umum tentang PACER (Pertamina Patra Niaga Components & Experience Resources).

---

## General Questions

### Apa itu PACER?

PACER (Pertamina Patra Niaga Components & Experience Resources) adalah library komponen UI enterprise-grade yang dapat di-install dan digunakan di aplikasi React, Vue, dan Blazor. Design system ini menyediakan komponen yang konsisten, accessible, dan production-ready.

### Kenapa harus menggunakan Design System?

**Benefits:**
- ✅ **Consistency** - UI/UX konsisten di semua aplikasi
- ✅ **Productivity** - Tidak perlu build komponen dari scratch
- ✅ **Quality** - Components sudah tested & accessible
- ✅ **Maintainability** - Update terpusat, tidak perlu update manual
- ✅ **Compliance** - Memenuhi standar enterprise & accessibility

### Siapa yang maintain design system ini?

Design system dimaintain oleh Pertamina Digital Technology Team dengan kontribusi dari developers di seluruh unit.

---

## Installation & Setup

### Bagaimana cara install?

**React:**
```bash
npm install @pacer/design-system-react
```

**Vue:**
```bash
npm install @pacer/design-system-vue
```

**Blazor:**
```bash
dotnet add package Pertamina.DesignSystem.Blazor
```

Lihat [Quick Start Guide](./QUICK_START.md) untuk detail.

### Apakah perlu install Tailwind CSS?

**Tidak wajib.** Library sudah include compiled CSS. Namun, install Tailwind direkomendasikan untuk:
- Custom styling dengan design tokens
- Utility classes tambahan
- Better tree-shaking

### Error: Module not found '@pacer/tokens'

**Solusi:**
```bash
# Clear cache & reinstall
rm -rf node_modules package-lock.json
npm install
```

### Bagaimana cara update ke versi terbaru?

```bash
# Check current version
npm list @pacer/design-system-react

# Update
npm update @pacer/design-system-react

# Or install specific version
npm install @pacer/design-system-react@latest
```

---

## Components

### Komponen apa saja yang tersedia?

**v1.0:**
- Button (7 variants)
- Input (with validation)
- Card (flexible layout)

**Roadmap v2.0:**
- Table
- Modal/Dialog
- Dropdown/Select
- Tabs
- Tooltip
- Badge
- Alert

Lihat [Storybook](https://storybook.pertamina.com) untuk full list.

### Bagaimana cara custom styling component?

**Method 1: className prop**
```tsx
<Button className="my-custom-class">
  Custom Button
</Button>
```

**Method 2: Tailwind utilities**
```tsx
<Button className="shadow-lg hover:shadow-xl">
  Enhanced Button
</Button>
```

**Method 3: CSS overrides**
```css
.my-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500;
}
```

### Apakah component support TypeScript?

**Ya, 100%.** Semua component fully typed dengan TypeScript.

```tsx
import type { ButtonProps } from '@pacer/design-system-react';

const myButtonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
};
```

### Bagaimana cara handle form validation?

**React:**
```tsx
const [error, setError] = useState('');

<Input
  error={error}
  onChange={() => setError('')}
/>
```

**Vue:**
```vue
<PtInput 
  :error="emailError"
  v-model="email"
/>
```

**Blazor:**
```razor
<EditForm Model="model">
  <DataAnnotationsValidator />
  <PtInput @bind-Value="model.Email" />
  <ValidationMessage For="() => model.Email" />
</EditForm>
```

---

## Design Tokens

### Apa itu design tokens?

Design tokens adalah **single source of truth** untuk semua nilai design (colors, spacing, typography, etc). Token ini framework-agnostic dan digunakan oleh semua library.

### Bagaimana cara mengakses tokens?

```typescript
// TypeScript/JavaScript
import { tokens } from '@pacer/tokens';

const primaryColor = tokens.colors.brand.primary[500];
const spacing = tokens.spacing[4];
```

```css
/* CSS */
.my-element {
  color: var(--color-brand-primary-500);
  padding: var(--spacing-4);
}
```

```tsx
/* Tailwind classes */
<div className="bg-brand-primary-500 p-4">
```

### Bagaimana cara menambah custom tokens?

Custom tokens harus di-propose melalui:
1. RFC (Request for Comments)
2. Design review
3. Implementation PR

Tidak disarankan override tokens di project level.

---

## Theming & Styling

### Apakah support dark mode?

**Ya.** Gunakan class `dark` di root element:

```tsx
// React
document.documentElement.classList.add('dark');

// Component
<div className="bg-neutral-0 dark:bg-neutral-900">
```

### Bagaimana cara custom theme?

**Option 1: Extend Tailwind config**
```js
module.exports = {
  presets: [require('@pacer/tailwind-preset')],
  theme: {
    extend: {
      colors: {
        custom: '#123456',
      },
    },
  },
};
```

**Option 2: CSS variables**
```css
:root {
  --color-brand-primary-500: #custom-color;
}
```

---

## Performance

### Apakah library di-tree-shake?

**Ya.** Library menggunakan ESM format yang mendukung tree-shaking. Hanya komponen yang di-import akan di-bundle.

```tsx
// ✅ Good - tree-shakeable
import { Button } from '@pacer/design-system-react';

// ❌ Avoid - imports semua
import * as DS from '@pacer/design-system-react';
```

### Berapa ukuran bundle library?

**Minified + Gzipped:**
- React: ~15KB (core components)
- Vue: ~12KB (core components)
- Blazor: ~50KB (compiled CSS + DLL)

### Bagaimana cara optimasi bundle size?

1. **Import only yang dibutuhkan**
2. **Enable tree-shaking** di bundler
3. **Use dynamic imports** untuk large components
4. **Configure Tailwind purge** dengan benar

---

## Accessibility

### Apakah components accessible?

**Ya.** Semua components:
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigable
- ✅ Screen reader compatible
- ✅ Proper ARIA attributes
- ✅ Focus management

### Bagaimana cara test accessibility?

```bash
# Automated tests
npm run test:a11y

# Manual testing tools:
# - axe DevTools (browser extension)
# - NVDA (screen reader)
# - Lighthouse (Chrome DevTools)
```

### Component tidak accessible di project saya

**Checklist:**
1. Apakah menggunakan semantic HTML?
2. Apakah ada label untuk input?
3. Apakah warna kontras cukup?
4. Test dengan keyboard (Tab, Enter, Escape)
5. Test dengan screen reader

Jika masih issue, [report bug](https://github.com/pertamina/design-system/issues).

---

## Framework-Specific

### React: Kenapa perlu forwardRef?

ForwardRef diperlukan untuk pass ref ke underlying DOM element:

```tsx
const MyButton = forwardRef<HTMLButtonElement>((props, ref) => (
  <Button ref={ref} {...props} />
));
```

### Vue: Error "Cannot find module '@pacer/design-system-vue'"

Pastikan:
1. Package terinstall: `npm list @pacer/design-system-vue`
2. Import path benar
3. Vue version ≥ 3.0

### Blazor: CSS tidak load

**Checklist:**
1. CSS reference ada di `_Host.cshtml` atau `index.html`
2. Path benar: `_content/Pertamina.DesignSystem.Blazor/css/...`
3. Build ulang project
4. Clear browser cache

---

## Contributing

### Bagaimana cara contribute?

1. Read [CONTRIBUTING.md](../CONTRIBUTING.md)
2. Fork repository
3. Create feature branch
4. Submit PR dengan changeset

### Bagaimana cara propose komponen baru?

1. Buat RFC (Request for Comments) issue
2. Diskusi di design system meeting
3. Design review & approval
4. Implementation PR

### Apakah bisa contribute dari luar Pertamina?

Design system ini **internal Pertamina only**. External contributors harus mendapat approval khusus.

---

## Troubleshooting

### Build error: "Cannot resolve '@pacer/tokens'"

```bash
# Solution
pnpm install --force
```

### TypeScript error: "Module has no exported member"

```bash
# Update types
rm -rf node_modules/@types
npm install
```

### Blazor: Component tidak render

1. Check namespace di `_Imports.razor`
2. Verify CSS reference
3. Check browser console untuk errors
4. Rebuild solution

### Performance issue: Re-rendering terlalu sering

**React:**
```tsx
// Use React.memo
const MyComponent = React.memo(({ value }) => {
  return <Button>{value}</Button>;
});

// Use useCallback
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

**Vue:**
```vue
<script setup>
// Use computed
const buttonText = computed(() => props.value);
</script>
```

---

## Support & Community

### Dimana saya bisa bertanya?

- **Slack**: #design-system
- **Email**: design-system@pertamina.com
- **GitHub Issues**: Bug reports & feature requests
- **GitHub Discussions**: Q&A & community

### Kapan jadwal office hours?

**Every Friday 2-4 PM WIB**  
Join via: [Google Meet link]

### Bagaimana cara request fitur baru?

1. Check existing issues
2. Create new issue dengan template "Feature Request"
3. Tag: `enhancement`
4. Akan direview di design system meeting

---

## Versioning & Updates

### Seberapa sering release baru?

- **Patch** (bug fixes): As needed
- **Minor** (new features): Every 2-4 weeks
- **Major** (breaking changes): Every 6-12 months

### Bagaimana cara tau ada update?

- Subscribe to [changelog RSS](https://design-system.pertamina.com/changelog.xml)
- Watch [GitHub releases](https://github.com/pertamina/design-system/releases)
- Join #announcements di Slack

### Apakah aman langsung update major version?

**Tidak disarankan** tanpa testing. Major version includes breaking changes.

**Best practice:**
1. Read [MIGRATION.md](./MIGRATION.md)
2. Update di development environment dulu
3. Run tests
4. Manual testing
5. Deploy ke production

---

## Still Have Questions?

- 📧 Email: design-system@pertamina.com
- 💬 Slack: #design-system
- 📖 Docs: https://design-system.pertamina.com
- 🐛 Issues: https://github.com/pertamina/design-system/issues
